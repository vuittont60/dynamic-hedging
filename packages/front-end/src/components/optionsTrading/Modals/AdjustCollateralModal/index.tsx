import type { ChangeEvent } from "react";

import { useState } from "react";
import { useDebounce } from "use-debounce";

import { adjustCollateral } from "src/components/shared/utils/transactions/adjustCollateral";
import { approveAllowance } from "src/components/shared/utils/transactions/approveAllowance";
import { useGlobalContext } from "src/state/GlobalContext";
import { Convert } from "src/utils/Convert";
import { useNotifications } from "../../hooks/useNotifications";
import { Disclaimer } from "../Shared/components/Disclaimer";
import { Button, Input, Label, Wrapper } from "../Shared/components/Form";
import { Header } from "../Shared/components/Header";
import { Modal } from "../Shared/components/Modal";
import { Symbol } from "../Shared/components/Symbol";
import { getButtonProps } from "../Shared/utils/getButtonProps";
import { roundInputValue } from "../Shared/utils/roundNumberValue";
import { Pricing } from "./components/Pricing";
import { Toggle } from "./components/Toggle";
import { useCollateralData } from "./hooks/useCollateralData";

export const AdjustCollateralModal = () => {
  const {
    state: {
      adjustingOption,
      options: { refresh },
      userTradingPreferences: { approvals },
    },
  } = useGlobalContext();

  const [amountToAdjust, setAmountToAdjust] = useState("");
  const [debouncedAmountToSell] = useDebounce(amountToAdjust, 300);
  const [transactionPending, setTransactionPending] = useState(false);
  const [isDepositing, setIsDepositing] = useState(true);

  const [addresses, allowance, setAllowance, collateralData, loading] =
    useCollateralData(debouncedAmountToSell, isDepositing);

  const [notifyApprovalSuccess, handleTransactionSuccess, notifyFailure] =
    useNotifications();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const rounded = roundInputValue(event);

    setAmountToAdjust(rounded);
  };

  const handleApprove = async () => {
    setTransactionPending(true);

    try {
      if (adjustingOption && addresses.token && addresses.user) {
        const amount =
          adjustingOption.asset === "USDC"
            ? Convert.fromStr(collateralData.requiredApproval).toUSDC()
            : Convert.fromStr(collateralData.requiredApproval).toWei();

        const hash = await approveAllowance(
          addresses.exchange,
          addresses.token,
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

  const handleUpdate = async () => {
    setTransactionPending(true);

    try {
      if (adjustingOption && addresses.user && addresses.token) {
        const amount =
          adjustingOption.asset === "USDC"
            ? Convert.fromStr(collateralData.requiredApproval).toUSDC()
            : Convert.fromStr(collateralData.requiredApproval).toWei();

        const hash = await adjustCollateral(
          amount,
          addresses.exchange,
          isDepositing,
          refresh,
          addresses.token,
          addresses.user,
          adjustingOption.vault.vaultId
        );

        if (hash) {
          setTransactionPending(false);
          handleTransactionSuccess(hash, "Update");
        }
      }
    } catch (error) {
      setTransactionPending(false);
      notifyFailure(error);
    }
  };

  return (
    <Modal>
      <Header>{`Adjust Collateral`}</Header>

      <div className="flex flex-col">
        <Symbol {...collateralData} />

        <Toggle depositToggleState={{ isDepositing, setIsDepositing }} />

        <Pricing collateralData={collateralData} />
      </div>

      <Wrapper>
        <Label
          id="adjust-collateral"
          title={`Enter how much collateral you would like to ${
            isDepositing ? "deposit" : "remove"
          }.`}
        >
          <Input
            name="adjust-collateral"
            onChange={handleChange}
            placeholder={`How much would you like to ${
              isDepositing ? "deposit" : "remove"
            }?`}
            value={amountToAdjust}
          />
        </Label>

        <Button
          className="w-1/4 !border-0"
          disabled={
            !Number(amountToAdjust) ||
            !collateralData.hasRequiredCapital ||
            collateralData.disabled ||
            !addresses.user ||
            transactionPending ||
            loading
          }
          {...getButtonProps(
            isDepositing ? "deposit" : "withdraw",
            transactionPending || loading,
            allowance.approved,
            handleApprove,
            handleUpdate
          )}
        />
      </Wrapper>

      <Disclaimer>
        {`You are about to adjust the collateral for this position. Please ensure this is what you want because the action is irreversible.`}
      </Disclaimer>
    </Modal>
  );
};
