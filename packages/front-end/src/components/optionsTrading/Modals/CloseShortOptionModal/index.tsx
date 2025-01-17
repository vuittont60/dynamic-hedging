import type { ChangeEvent } from "react";

import dayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import FadeInOutQuick from "src/animation/FadeInOutQuick";
import { RyskTooltip } from "src/components/shared/RyskToolTip";
import { approveAllowance } from "src/components/shared/utils/transactions/approveAllowance";
import { closeShort } from "src/components/shared/utils/transactions/closeShort";
import { useGlobalContext } from "src/state/GlobalContext";
import { Convert } from "src/utils/Convert";
import { getContractAddress } from "src/utils/helpers";
import { useDebounce } from "use-debounce";
import { useNotifications } from "../../hooks/useNotifications";
import { Disclaimer } from "../Shared/components/Disclaimer";
import {
  Button,
  Checkbox,
  Input,
  Label,
  Wrapper,
} from "../Shared/components/Form";
import { Header } from "../Shared/components/Header";
import { Modal } from "../Shared/components/Modal";
import { MAX_TRADE_SIZE, MIN_TRADE_SIZE } from "../Shared/utils/constants";
import { getButtonProps } from "../Shared/utils/getButtonProps";
import { roundInputValue } from "../Shared/utils/roundNumberValue";
import { Pricing } from "./components/Pricing";
import { useShortPositionData } from "./hooks/useShortPositionData";

dayjs.extend(LocalizedFormat);

export const CloseShortOptionModal = () => {
  const {
    state: {
      geoData: { blocked },
      options: { refresh },
      userTradingPreferences: { approvals, tutorialMode },
    },
  } = useGlobalContext();

  const [notifyApprovalSuccess, handleTransactionSuccess, notifyFailure] =
    useNotifications();

  const [amountToSell, setAmountToSell] = useState("");
  const [debouncedAmountToSell] = useDebounce(amountToSell, 300);
  const [transactionPending, setTransactionPending] = useState(false);

  const [addresses, allowance, setAllowance, positionData, vaultId, loading] =
    useShortPositionData(debouncedAmountToSell);

  const handleCloseMax = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.checked) {
      setAmountToSell(Convert.fromInt(positionData.totalSize).toStr());
    } else {
      setAmountToSell("");
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rounded = roundInputValue(event);

    const maxAmount = Math.min(
      positionData.totalSize,
      parseFloat(rounded || "0")
    );

    setAmountToSell((maxAmount ? maxAmount : rounded).toString());
  };

  const handleApprove = async () => {
    setTransactionPending(true);

    try {
      if (addresses.collateral && addresses.user) {
        const amount = Convert.fromStr(positionData.requiredApproval).toUSDC();

        const hash = await approveAllowance(
          addresses.exchange,
          getContractAddress("USDC"),
          amount,
          approvals
        );

        if (hash) {
          setAllowance({ approved: true, amount });
          setTransactionPending(false);
          notifyApprovalSuccess(hash);
        }
      }
    } catch (error) {
      setTransactionPending(false);
      notifyFailure(error);
    }
  };

  const handleShortClose = async () => {
    setTransactionPending(true);

    try {
      if (
        addresses.token &&
        addresses.user &&
        addresses.collateral &&
        vaultId
      ) {
        const amount = Convert.fromStr(amountToSell).toWei();

        const hash = await closeShort(
          positionData.acceptablePremium,
          amount,
          addresses.exchange,
          addresses.collateral,
          positionData.collateralToRemove,
          refresh,
          addresses.token,
          addresses.user,
          vaultId
        );

        if (hash) {
          setTransactionPending(false);
          handleTransactionSuccess(hash, "Sale");
        }
      }
    } catch (error) {
      setTransactionPending(false);
      notifyFailure(error);
    }
  };

  return (
    <Modal>
      <Header>{`Close Position`}</Header>

      <Pricing
        collateralAddress={addresses.collateral}
        remainingCollateral={positionData.remainingCollateral}
        positionData={positionData}
        size={amountToSell}
      />

      <Wrapper>
        <Label title="Enter how much of your position you would like to close.">
          <Input
            name="sell-amount"
            onChange={handleChange}
            placeholder="How many would you like to close?"
            value={amountToSell}
          />
        </Label>

        <RyskTooltip
          content="Use this toggle to sell your entire position."
          disabled={!tutorialMode}
          placement="top"
        >
          <span className="flex">
            <Label className="flex items-center justify-center select-none cursor-pointer w-min border-black border-r-2 px-2">
              <Checkbox
                checked={
                  amountToSell ===
                  Convert.fromInt(positionData.totalSize).toStr()
                }
                name="close-max"
                onChange={handleCloseMax}
              />
              {`Max`}
            </Label>
          </span>
        </RyskTooltip>

        <AnimatePresence mode="wait">
          <Button
            className="w-1/4 !border-0"
            disabled={
              !Number(amountToSell) ||
              Number(amountToSell) < MIN_TRADE_SIZE ||
              Number(amountToSell) > MAX_TRADE_SIZE ||
              Number(amountToSell) > positionData.totalSize ||
              !addresses.token ||
              !positionData.hasRequiredCapital ||
              transactionPending ||
              loading ||
              blocked
            }
            {...FadeInOutQuick}
            {...getButtonProps(
              "close",
              transactionPending || loading,
              allowance.approved,
              handleApprove,
              handleShortClose
            )}
          />
        </AnimatePresence>
      </Wrapper>

      <Disclaimer>
        {`You are about to close some or all of your position. Please ensure this is what you want because the action is irreversible.`}
      </Disclaimer>
    </Modal>
  );
};
