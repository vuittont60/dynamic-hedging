import React, { createContext, useContext, useReducer } from "react";
import { vaultReducer } from "./reducer";
import { VaultContext, VaultState } from "./types";

export const defaultVaultState: VaultState = {
  depositEpoch: null,
  withdrawalEpoch: null,
  depositPricePerShare: null,
  withdrawalPricePerShare: null,
  userDHVBalance: null,
};

export const VaultReactContext = createContext<VaultContext>({
  state: defaultVaultState,
  dispatch: () => {},
});

export const VaultProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(vaultReducer, defaultVaultState);

  return (
    <VaultReactContext.Provider value={{ state, dispatch }}>
      {children}
    </VaultReactContext.Provider>
  );
};

export const useVaultContext = () => useContext(VaultReactContext);