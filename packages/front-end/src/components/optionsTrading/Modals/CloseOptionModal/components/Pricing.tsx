import type { PricingProps } from "../types";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

import FadeInOutQuick from "src/animation/FadeInOutQuick";
import { RyskCountUp } from "src/components/shared/RyskCountUp";
import { RyskTooltip } from "src/components/shared/RyskToolTip";
import { useGlobalContext } from "src/state/GlobalContext";
import { Symbol } from "../../Shared/components/Symbol";
import { MAX_TRADE_SIZE, MIN_TRADE_SIZE } from "../../Shared/utils/constants";

export const Pricing = ({ positionData, size }: PricingProps) => {
  const {
    state: {
      userTradingPreferences: { tutorialMode },
    },
  } = useGlobalContext();

  const {
    fee,
    maxCloseSize,
    now,
    orderTooBig,
    premium,
    quote,
    remainingBalance,
    slippage,
  } = positionData;

  const errorMessage = useMemo(() => {
    switch (true) {
      case orderTooBig:
        return `You may only close up to ${maxCloseSize || 0} at this time.`;

      case size && Number(size) < MIN_TRADE_SIZE:
      case size && Number(size) > MAX_TRADE_SIZE:
        return "Trade size must be between 0.1 and 1000.";

      default:
        return "";
    }
  }, [positionData]);

  return (
    <div className="flex flex-col">
      <Symbol {...positionData} />

      <div className="w-4/5 xl:w-3/5 mx-auto py-3">
        <div>
          <span className="flex">
            <p className="mr-auto">{`Premium:`}</p>
            <RyskTooltip
              content="The amount of USDC received per contract."
              disabled={!tutorialMode}
              placement="left"
            >
              <p className="font-medium">
                <RyskCountUp value={premium} />
                {` USDC`}
              </p>
            </RyskTooltip>
          </span>

          <span className="flex">
            <p className="mr-auto">{`Fee:`}</p>
            <RyskTooltip
              content="The total fee that Rysk collects per contract."
              disabled={!tutorialMode}
              placement="left"
            >
              <p className="font-medium">
                <RyskCountUp value={fee} />
                {` USDC`}
              </p>
            </RyskTooltip>
          </span>

          <span className="flex">
            <p className="mr-auto">{`Price impact:`}</p>
            <RyskTooltip
              content="The slippage of total premium based on trade size."
              disabled={!tutorialMode}
              placement="left"
            >
              <p className="font-medium">
                <RyskCountUp value={slippage} />
                {` %`}
              </p>
            </RyskTooltip>
          </span>

          <small className="block leading-6 text-gray-600 border-gray-600 border-b">
            {`Premium and fees are per option.`}
          </small>
        </div>

        <span className="flex py-2 border-gray-600 border-b">
          <p className="mr-auto">{`Premium received:`}</p>
          <RyskTooltip
            content="The total amount of USDC you will receive from selling this position."
            disabled={!tutorialMode}
            placement="left"
          >
            <p className="font-medium">
              <RyskCountUp value={quote} />
              {` USDC`}
            </p>
          </RyskTooltip>
        </span>

        <span className="flex pt-2">
          <p className="mr-auto">{`Balance after:`}</p>
          <p className="font-medium">
            <RyskCountUp value={remainingBalance} />
            {` USDC`}
          </p>
        </span>

        <AnimatePresence mode="wait">
          {errorMessage && (
            <motion.small
              className="block leading-6 text-red-500 text-right"
              {...FadeInOutQuick}
            >
              {errorMessage}
            </motion.small>
          )}
        </AnimatePresence>
      </div>

      <small className="flex flex-col pb-3 text-center leading-6 text-gray-600">
        {`Last updated: ${now}`}
      </small>
    </div>
  );
};
