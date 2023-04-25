import type { PricingProps } from "../types";

import { RyskCountUp } from "src/components/shared/RyskCountUp";

export const Pricing = ({ positionData }: PricingProps) => {
  const { fee, now, premium, quote, remainingBalance, slippage, title } =
    positionData;

  return (
    <div className="flex flex-col">
      <p
        className="text-center py-4 bg-white border-b-2 border-black font-dm-mono"
        id="buy-symbol"
      >
        {title}
      </p>

      <div className="w-3/5 mx-auto py-4">
        <div id="buy-price-per-option">
          <span className="flex">
            <p className="mr-auto">{`Premium:`}</p>
            <p className="font-medium">
              <RyskCountUp value={premium} />
              {` USDC`}
            </p>
          </span>

          <span className="flex">
            <p className="mr-auto">{`Fee:`}</p>
            <p className="font-medium">
              <RyskCountUp value={fee} />
              {` USDC`}
            </p>
          </span>

          <span className="flex">
            <p className="mr-auto">{`Price impact:`}</p>
            <p className="font-medium">
              <RyskCountUp value={slippage} />
              {` %`}
            </p>
          </span>

          <small className="block leading-6 text-gray-600 border-gray-600 border-b">
            {`Premium and fees are per option.`}
          </small>
        </div>

        <span
          className="flex py-2 border-gray-600 border-b"
          id="buy-total-price"
        >
          <p className="mr-auto">{`Premium received:`}</p>
          <p className="font-medium">
            <RyskCountUp value={quote} />
            {` USDC`}
          </p>
        </span>

        <span className="flex pt-2" id="buy-balance">
          <p className="mr-auto">{`Balance after:`}</p>
          <p className="font-medium">
            <RyskCountUp value={remainingBalance} />
            {` USDC`}
          </p>
        </span>
      </div>

      <small className="flex flex-col pb-4 text-center leading-6 text-gray-600">
        {`Last updated: ${now}`}
      </small>
    </div>
  );
};