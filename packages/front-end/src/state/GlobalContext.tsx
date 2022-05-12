import { createContext, useContext, useEffect, useReducer } from "react";
import { globalReducer } from "./reducer";
import { ActionType, AppSettings, GlobalContext, GlobalState } from "./types";
import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { LOCAL_STORAGE_SETTINGS_KEY } from "../components/dashboard/Settings";

const defaultGlobalState: GlobalState = {
  ethPrice: null,
  eth24hChange: null,
  connectWalletIndicatorActive: false,
  settings: { unlimitedApproval: false },
};

export const GlobalReactContext = createContext<GlobalContext>({
  state: defaultGlobalState,
  dispatch: () => {},
});

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(globalReducer, defaultGlobalState);
  const [getFromLocalStorage] = useLocalStorage();

  const getSettings = () => {
    return getFromLocalStorage<AppSettings>(LOCAL_STORAGE_SETTINGS_KEY);
  };

  useEffect(() => {
    const settings = getSettings();
    if (settings) {
      dispatch({ type: ActionType.SET_SETTINGS, settings });
    }
  }, [dispatch]);

  return (
    <GlobalReactContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalReactContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalReactContext);