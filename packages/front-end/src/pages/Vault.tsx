import React from "react";
import { useSearchParams } from "react-router-dom";
import { Card } from "../components/shared/Card";
import { VaultDepositWithdraw } from "../components/VaultDepositWithdraw";

export const Vault = () => {

  return (
    <>
      <div className="col-start-1 col-end-8">
        <h2 className="mb-8">Earn Uncorrelated Returns</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut
          justo luctus, vehicula nibh id, egestas magna. Sed egestas massa
          justo, sit amet sagittis nunc efficitur ac.{" "}
        </p>
      </div>
      <div className="col-start-9 col-end-17">
        <Card headerContent="DHV.dynamicHedgingVault">
          <VaultDepositWithdraw />
        </Card>

        
      </div>
    </>
  );
};
