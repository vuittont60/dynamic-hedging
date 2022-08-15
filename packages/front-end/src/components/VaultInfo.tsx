import React, { useMemo } from "react";
import { useContract } from "../hooks/useContract";
import LPABI from "../abis/LiquidityPool.json";
import { CHAINID, SCAN_URL } from "../config/constants";
import { useVaultContext } from "../state/VaultContext";
import { BigNumberDisplay } from "./BigNumberDisplay";
import { Currency } from "../types";
import { getClosestFridayToDate } from "../utils/getSuggestedExpiryDates";

export const VaultInfo = () => {
  const {
    state: { currentEpoch, currentPricePerShare },
  } = useVaultContext();

  const nextFriday = useMemo(() => getClosestFridayToDate(new Date()), []);

  const [lpContract] = useContract({
    contract: "liquidityPool",
    ABI: LPABI,
    readOnly: true,
  });

  return (
    <div className="pb-8 py-12 px-8">
      <div className="grid grid-cols-2">
        <div>
          <h4>DHV</h4>
          <p className="mt-4">Chain: Arbitrum</p>
          <p className="mt-4">Current Epoch: {currentEpoch?.toString()}</p>
          <p className="mt-4">
            DHV Share Price:{" "}
            <BigNumberDisplay
              currency={Currency.RYSK}
              numberFormatProps={{ decimalScale: 4 }}
              suffix="USDC"
            >
              {currentPricePerShare}
            </BigNumberDisplay>
          </p>
          <p className="mt-4">
            {/* TODO add next epoch start */}
            Next Epoch Start: {nextFriday.toDateString()} 11:00 UTC
          </p>
        </div>

        <div>
          <h4>Addresses</h4>
          <p className="mt-4">
            DHV:{" "}
            <a
              href={`${SCAN_URL[CHAINID.ARBITRUM_MAINNET]}/address/${
                lpContract?.address
              }`}
              target="blank"
              className="underline hover:font-medium"
            >
              {lpContract?.address}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
