import type { ApolloError } from "@apollo/client";
import type {
  CompleteRedeem,
  CompleteSettle,
  LongPosition,
  ParsedPosition,
  ShortPosition,
} from "./types";

import { gql, useQuery } from "@apollo/client";
import { prepareWriteContract, writeContract } from "@wagmi/core";
import dayjs from "dayjs";
import { BigNumber, BigNumberish } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";

import { NewControllerABI } from "src/abis/NewController_ABI";
import { QueriesEnum } from "src/clients/Apollo/Queries";
import { OpynActionType } from "src/enums/OpynActionType";
import { useGraphPolling } from "src/hooks/useGraphPolling";
import { getContractAddress } from "src/utils/helpers";
import { logError } from "src/utils/logError";
import { BIG_NUMBER_DECIMALS, ZERO_ADDRESS } from "../../../config/constants";
import { useExpiryPriceData } from "../../../hooks/useExpiryPriceData";
import {
  fromOpyn,
  fromRysk,
  fromUSDC,
  fromWei,
  toRysk,
} from "src/utils/conversion-helper";
import { Button } from "src/components/shared/Button";
import { getLiquidationPrice } from "../../optionsTrading/Modals/Shared/utils/getLiquidationPrice";
import { useGlobalContext } from "src/state/GlobalContext";
import { getQuote } from "../../optionsTrading/Modals/Shared/utils/getQuote";
import { ActionType } from "src/state/types";

/**
 * Hook using GraphQL to fetch all positions for the user
 * and sort them into consumable data. Also places the
 * users positions into global context state.
 *
 * @returns [positions, loading, error]
 */
const usePositions = () => {
  const { dispatch } = useGlobalContext();
  const { address, isDisconnected } = useAccount();

  const { allOracleAssets } = useExpiryPriceData();

  // Global state.
  const {
    state: {
      ethPrice,
      options: { spotShock, timesToExpiry },
    },
  } = useGlobalContext();

  const [activePositions, setActivePositions] = useState<
    ParsedPosition[] | null
  >(null);
  const [inactivePositions, setInactivePositions] = useState<
    ParsedPosition[] | null
  >(null);

  // NOTE: Only getting positions opened after redeploy of contracts
  const { loading, error, data, startPolling } = useQuery<{
    longPositions: LongPosition[];
    shortPositions: ShortPosition[];
  }>(
    gql`
      query ${QueriesEnum.DASHBOARD_USER_POSITIONS} ($account: String) {
          longPositions(first: 1000, where: { account: $account, oToken_: {expiryTimestamp_gte: "1683273600"} }) {
              id
              netAmount
              buyAmount
              sellAmount
              active
              oToken {
                  id
                  symbol
                  expiryTimestamp
                  strikePrice
                  isPut
                  underlyingAsset {
                      id
                  }
                  createdAt
              }
              redeemActions {
                  id
              }
              optionsBoughtTransactions {
                  amount
                  premium
              }
              optionsSoldTransactions {
                  amount
                  premium
              }
          }
          shortPositions(first: 1000, where: { account: $account, oToken_: {expiryTimestamp_gte: "1683273600"} }) {
              id
              netAmount
              buyAmount
              sellAmount
              active
              vault {
                  vaultId
                  collateralAmount
                  collateralAsset {
                      name
                  }
              }
              settleActions {
                  id
              }
              oToken {
                  id
                  symbol
                  expiryTimestamp
                  strikePrice
                  isPut
                  underlyingAsset {
                      id
                  }
                  createdAt
              }
              optionsBoughtTransactions {
                  amount
                  premium
              }
              optionsSoldTransactions {
                  amount
                  premium
              }
          }
      }
    `,
    {
      onError: logError,
      variables: {
        account: address?.toLowerCase(),
      },
      skip: !address,
    }
  );

  useGraphPolling(data, startPolling);

  useEffect(() => {
    const constructPositionsData = async () => {
      if (isDisconnected) {
        setActivePositions([]);
        setInactivePositions([]);
      }

      if (data && allOracleAssets) {
        const timeNow = dayjs().unix();

        const parsedActivePositions = [] as ParsedPosition[];
        const parsedInactivePositions = [] as ParsedPosition[];

        for (const {
          id,
          oToken,
          netAmount,
          optionsSoldTransactions,
          optionsBoughtTransactions,
          buyAmount,
          sellAmount,
          active,
          ...rest
        } of [...data.shortPositions, ...data.longPositions]) {
          const {
            id: otokenId,
            expiryTimestamp,
            underlyingAsset,
            isPut,
            strikePrice,
          } = oToken;

          const vault = (rest as ShortPosition)?.vault || { vaultId: "" };
          const settleActions = (rest as ShortPosition)?.settleActions || [];
          const redeemActions = (rest as LongPosition)?.redeemActions || [];

          const expired = timeNow > Number(expiryTimestamp);

          const options = vault.vaultId
            ? optionsSoldTransactions
            : optionsBoughtTransactions;

          // 1e18 - TODO: does not account for sales
          const totPremium = options.length
            ? options.reduce(
                (p: number, { premium }: { premium: BigNumberish }) =>
                  vault.vaultId ? p + Number(premium) : p - Number(premium),
                0
              )
            : 0;

          // Total premium converted to 1e18 - TODO: does not account for sales
          // const totalPremium = totPremium / 10 ** DECIMALS.RYSK;

          // per token premium converted to 1e18
          // average price to 1e18 - TODO: review before merge
          const entryPrice = (
            Number(fromUSDC(totPremium.toString())) /
            Number(
              fromRysk((vault.vaultId ? sellAmount : buyAmount).toString())
            )
          ).toFixed(2);

          // Find expiry price
          const asset = allOracleAssets.find(
            ({ asset }) => asset.id === underlyingAsset.id
          );
          const expiryPrice = asset?.prices.find(
            ({ expiry }: { expiry: string }) => expiry === expiryTimestamp
          )?.price;

          // Determine action
          const inTheMoney = isPut
            ? Number(expiryPrice) <= Number(strikePrice)
            : Number(expiryPrice) >= Number(strikePrice);
          const isRedeemable =
            expired && redeemActions.length > 0 && inTheMoney;
          const hasRedeemed = redeemActions.length > 0; // NOTE: User could have manually not redeem all
          const canSettleShort = expired && settleActions.length === 0;
          const settledShort = settleActions.length > 0;

          const getStatusMessage = (short: boolean) => {
            if (short) {
              switch (true) {
                case !active:
                  return "Closed";
                case settledShort:
                  return "Settled";
                case !expired:
                  return (
                    <Link
                      to={`/options?expiry=${expiryTimestamp}&token=${otokenId}&ref=vault-close`}
                    >
                      <Button
                        color="white"
                        className="min-w-[50%]"
                        title="Click to close position"
                      >
                        {`Close`}
                      </Button>
                    </Link>
                  );
                default:
                  return "Expired";
              }
            } else {
              switch (true) {
                case !active:
                  return "Closed";
                case hasRedeemed:
                  return "Redeemed";
                case !expired:
                  return (
                    <Link
                      to={`/options?expiry=${expiryTimestamp}&token=${otokenId}&ref=close`}
                    >
                      <Button
                        color="white"
                        className="min-w-[50%]"
                        title="Click to close position"
                      >
                        {`Close`}
                      </Button>
                    </Link>
                  );
                default:
                  return "Expired";
              }
            }
          };

          const amount = Math.abs(
            BigNumber.from(netAmount)
              .div(BIG_NUMBER_DECIMALS.RYSK.div(BIG_NUMBER_DECIMALS.OPYN))
              .toNumber()
          );

          const collateralAssetSymbol =
            vault.collateralAsset?.name === "USDC" ? "USDC" : "WETH";

          const getVaultLiquidationPrice = async () => {
            if (ethPrice) {
              const liquidationPrice = await getLiquidationPrice(
                Number(fromOpyn(amount)),
                isPut ? "put" : "call",
                Number(
                  collateralAssetSymbol === "USDC"
                    ? fromUSDC(vault.collateralAmount)
                    : fromWei(vault.collateralAmount)
                ),
                getContractAddress(collateralAssetSymbol) as HexString,
                ethPrice,
                Number(expiryTimestamp),
                spotShock,
                Number(fromOpyn(strikePrice)),
                timesToExpiry
              );
              return liquidationPrice;
            }
            return 0;
          };

          const liquidationPrice = vault.vaultId
            ? await getVaultLiquidationPrice()
            : 0;

          // pnl
          const { acceptablePremium, fee, premium, quote, slippage } =
            amount !== 0
              ? await getQuote(
                  Number(expiryTimestamp),
                  toRysk(fromOpyn(strikePrice)),
                  isPut,
                  Number(fromOpyn(amount)),
                  vault.vaultId ? false : true,
                  collateralAssetSymbol
                )
              : {
                  acceptablePremium: 0,
                  fee: 0,
                  premium: 0,
                  quote: 0,
                  slippage: 0,
                };

          const position = {
            ...oToken,
            amount,
            entryPrice,
            expired,
            expiryPrice,
            liquidationPrice,
            id,
            isRedeemable,
            vaultId: vault.vaultId,
            collateralAsset: vault.vaultId ? vault.collateralAsset?.name : "",
            collateralAmount: vault.vaultId ? vault.collateralAmount : "",
            isSettleable: vault.vaultId ? canSettleShort : false,
            otokenId,
            side: vault.vaultId ? "SHORT" : "LONG",
            status: getStatusMessage(!!vault.vaultId),
            totalPremium: totPremium,
            pnl:
              Number(fromUSDC(acceptablePremium)) -
              Number(fromUSDC(totPremium)) -
              fee,
            underlyingAsset: underlyingAsset.id,
          };

          if (position.amount !== 0) {
            parsedActivePositions.push(position);
          } else {
            parsedInactivePositions.push(position);
          }
        }

        // Active options sorted closest to furtherest by expiry time.
        // Options with the same expiry date are sorted highest to lowest strike price.
        parsedActivePositions.sort((a, b) => {
          return (
            a.expiryTimestamp.localeCompare(b.expiryTimestamp) ||
            a.strikePrice.localeCompare(b.strikePrice)
          );
        });

        // Inactive options sorted furtherest to closest by expiry time.
        // Options with the same expiry date are sorted highest to lowest strike price.
        parsedInactivePositions.sort((a, b) => {
          return (
            b.expiryTimestamp.localeCompare(a.expiryTimestamp) ||
            b.strikePrice.localeCompare(a.strikePrice)
          );
        });

        setActivePositions(parsedActivePositions);
        setInactivePositions(parsedInactivePositions);

        dispatch({
          type: ActionType.SET_DASHBOARD,
          activePositions: parsedActivePositions,
          inactivePositions: parsedInactivePositions,
        });
      }
    };

    constructPositionsData();
  }, [data, allOracleAssets, isDisconnected, ethPrice]);

  return [activePositions, inactivePositions, loading, error] as [
    ParsedPosition[] | null,
    ParsedPosition[] | null,
    boolean,
    ApolloError | undefined
  ];
};

/**
 * Simple hook to return a redeem function for
 * expired long positions that are redeemable.
 *
 * @returns [completeRedeem]
 */
const useRedeem = () => {
  const { address } = useAccount();

  const completeRedeem = useCallback(
    async (otokenId: string, amount: number) => {
      const args = [
        {
          actionType: OpynActionType.Redeem,
          owner: ZERO_ADDRESS as HexString,
          secondAddress: address as HexString,
          asset: otokenId as HexString,
          vaultId: BigNumber.from(0),
          amount: BigNumber.from(amount),
          index: BigNumber.from(0),
          data: ZERO_ADDRESS as HexString,
        },
      ];

      const config = await prepareWriteContract({
        address: getContractAddress("OpynController"),
        abi: NewControllerABI,
        functionName: "operate",
        args: [args],
        overrides: {
          gasLimit: BigNumber.from("3000000"),
        },
      });

      await writeContract(config);
    },
    [OpynActionType.Redeem, address]
  );

  return [completeRedeem] as [CompleteRedeem];
};

/**
 * Simple hook to return a settle function for
 * expired short positions that are settleable.
 *
 * @returns [completeSettle]
 */
const useSettle = () => {
  const { address } = useAccount();

  const completeSettle = useCallback(
    async (vaultId: string) => {
      const args = [
        {
          actionType: OpynActionType.SettleVault,
          owner: address as HexString,
          secondAddress: address as HexString,
          asset: ZERO_ADDRESS as HexString,
          vaultId: BigNumber.from(vaultId),
          amount: BigNumber.from(0),
          index: BigNumber.from(0),
          data: ZERO_ADDRESS as HexString,
        },
      ];

      const config = await prepareWriteContract({
        address: getContractAddress("OpynController"),
        abi: NewControllerABI,
        functionName: "operate",
        args: [args],
        overrides: {
          gasLimit: BigNumber.from("3000000"),
        },
      });

      await writeContract(config);
    },
    [OpynActionType.SettleVault, address]
  );

  return [completeSettle] as [CompleteSettle];
};

export { usePositions, useRedeem, useSettle };
