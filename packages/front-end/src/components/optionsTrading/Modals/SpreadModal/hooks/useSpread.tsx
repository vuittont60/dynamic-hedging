import type { CallOrPut } from "src/state/types";
import type { SpreadAddresses } from "../../Shared/types";
import type {
  ModalProps,
  PositionDataState,
  StrategyStrikesTuple,
} from "../types";

import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { useAccount } from "wagmi";

import { BigNumber } from "ethers";
import { getQuotes } from "src/components/shared/utils/getQuote";
import { useGlobalContext } from "src/state/GlobalContext";
import { OptionChainModalActions } from "src/state/types";
import { Convert } from "src/utils/Convert";
import { getContractAddress } from "src/utils/helpers";
import { logError } from "src/utils/logError";
import { useAllowance } from "../../Shared/hooks/useAllowance";
import { dateTimeNow, formatExpiry } from "../../Shared/utils/datetime";

export const useSpread = (
  amountToOpen: string,
  strikes: StrategyStrikesTuple, // [SHORT, LONG]
  strategy: ModalProps["strategy"]
) => {
  // Global state.
  const {
    state: {
      balances,
      ethPrice,
      options: { activeExpiry, data },
    },
  } = useGlobalContext();

  // Determine strategy side.
  const isPut = strategy === OptionChainModalActions.PUT_CREDIT_SPREAD;
  const side: CallOrPut = isPut ? "put" : "call";

  // Addresses.
  const { address } = useAccount();
  const shortOTokenAddress = strikes[0]
    ? data[activeExpiry!][Number(strikes[0])][side]?.exchangeAddresses.USDC
    : undefined;
  const longOTokenAddress = strikes[1]
    ? data[activeExpiry!][Number(strikes[1])][side]?.exchangeAddresses.USDC
    : undefined;
  const USDCAddress = getContractAddress("USDC");
  const exchangeAddress = getContractAddress("optionExchange");
  const marginPoolAddress = getContractAddress("marginPool");

  // User allowance state for USDC & long oToken.
  const [allowanceUSDC, setAllowanceUSDC] = useAllowance(USDCAddress, address);
  const [allowanceOToken, setAllowanceOToken] = useAllowance(
    longOTokenAddress,
    address,
    marginPoolAddress
  );

  // User position state.
  const [positionData, setPositionData] = useState<PositionDataState>({
    acceptablePremium: [BigNumber.from(0), BigNumber.from(0)],
    breakEven: 0,
    collateral: 0,
    expiry: formatExpiry(activeExpiry),
    exposure: 0,
    fee: 0,
    hasRequiredCapital: false,
    isPut,
    now: dateTimeNow(),
    premium: 0,
    quotes: [0, 0],
    remainingBalance: 0,
    requiredApproval: "",
    slippage: 0,
    strikes: strikes.map(Number) as [number, number],
  });

  const [loading, setLoading] = useState(false);
  const [debouncedLoading] = useDebounce(loading, 300);

  // Get user position price data.
  useEffect(() => {
    const setPriceData = async (
      amount: number,
      [short, long]: StrategyStrikesTuple
    ) => {
      setLoading(true);

      const convertShort = Convert.fromStr(short);
      const convertLong = Convert.fromStr(long);

      try {
        const { USDC: balanceUSDC } = balances;

        if (amount > 0 && short && long) {
          const [shortQuote, longQuote] = await getQuotes([
            {
              expiry: Number(activeExpiry),
              strike: convertShort.toWei(),
              isPut,
              orderSize: amount,
              isSell: true,
            },
            {
              expiry: Number(activeExpiry),
              strike: convertLong.toWei(),
              isPut,
              orderSize: amount,
              isSell: false,
            },
          ]);

          const shortInt = convertShort.toInt();
          const longInt = convertLong.toInt();
          const collateral =
            Math.max(longInt - shortInt, shortInt - longInt) * amount;

          const netPremium = shortQuote.premium - longQuote.premium;
          const remainingBalance =
            balanceUSDC === 0 ? 0 : balanceUSDC + netPremium - collateral;

          const approvalBuffer = 1.005;
          const requiredCapital =
            (collateral + longQuote.quote) * approvalBuffer;

          const approvedUSDC = Convert.fromInt(requiredCapital)
            .toUSDC()
            .lte(allowanceUSDC.amount);
          const approvedOToken = Convert.fromInt(amount)
            .toOpyn()
            .lte(allowanceOToken.amount);

          const breakEven = isPut
            ? shortInt - netPremium
            : shortInt + netPremium;

          const exposure =
            data[activeExpiry!][longInt][side]?.exposure.net || 0;

          setPositionData({
            acceptablePremium: [
              shortQuote.acceptablePremium,
              longQuote.acceptablePremium,
            ],
            breakEven,
            collateral,
            expiry: formatExpiry(activeExpiry),
            exposure,
            fee: shortQuote.fee + longQuote.fee,
            hasRequiredCapital: balanceUSDC > requiredCapital,
            isPut,
            now: dateTimeNow(),
            premium: shortQuote.premium - longQuote.premium,
            quotes: [shortQuote.quote, longQuote.quote],
            remainingBalance,
            requiredApproval: String(requiredCapital),
            slippage: shortQuote.slippage - longQuote.slippage,
            strikes: [Number(short), Number(long)],
          });
          setAllowanceUSDC((currentState) => ({
            ...currentState,
            approved: approvedUSDC,
          }));
          setAllowanceOToken((currentState) => ({
            ...currentState,
            approved: approvedOToken,
          }));
        } else {
          setPositionData({
            acceptablePremium: [BigNumber.from(0), BigNumber.from(0)],
            breakEven: 0,
            collateral: 0,
            expiry: formatExpiry(activeExpiry),
            exposure: 0,
            fee: 0,
            hasRequiredCapital: false,
            isPut,
            now: dateTimeNow(),
            premium: 0,
            quotes: [0, 0],
            remainingBalance: balances.USDC,
            requiredApproval: "",
            slippage: 0,
            strikes: strikes.map(Number) as [number, number],
          });
          setAllowanceUSDC((currentState) => ({
            ...currentState,
            approved: false,
          }));
          setAllowanceOToken((currentState) => ({
            ...currentState,
            approved: false,
          }));
        }

        setLoading(false);
      } catch (error) {
        logError(error);
        setLoading(false);
      }
    };

    setPriceData(Number(amountToOpen), strikes);
  }, [
    amountToOpen,
    allowanceUSDC.amount,
    allowanceOToken.amount,
    ethPrice,
    strikes,
  ]);

  const addresses: SpreadAddresses = {
    collateral: USDCAddress,
    exchange: exchangeAddress,
    marginPool: marginPoolAddress,
    tokens: [shortOTokenAddress, longOTokenAddress],
    user: address,
  };

  return [
    addresses,
    allowanceUSDC.approved,
    allowanceOToken.approved,
    setAllowanceUSDC,
    setAllowanceOToken,
    positionData,
    debouncedLoading,
  ] as const;
};
