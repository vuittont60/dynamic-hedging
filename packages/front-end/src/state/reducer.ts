import {
  GlobalAction,
  GlobalState,
  OptionChainModalActions,
  VaultAction,
  VaultState,
} from "./types";

import { Reducer } from "react";

import { defaultGlobalState } from "./GlobalContext";
import { ActionType, VaultActionType } from "./types";

export const globalReducer: Reducer<GlobalState, GlobalAction> = (
  state,
  action
) => {
  switch (action.type) {
    case ActionType.SET_ETH_PRICE:
      return {
        ...state,
        ethPrice: action.price,
        eth24hChange: action.change || state.eth24hChange,
        ethPriceUpdateTime: action.date,
        eth24hHigh: action.high || state.eth24hHigh,
        eth24hLow: action.low || state.eth24hLow,
        ethPriceError: action.error,
      };
    case ActionType.SET_ETH_PRICE_ERROR:
      return {
        ...state,
        ethPriceError: action.error,
      };
    case ActionType.SET_ETH_PRICE_LAST_UPDATED:
      return {
        ...state,
        ethLastUpdateTimestamp: action.timestamp,
      };
    case ActionType.SET_POSITION_VALUE:
      return {
        ...state,
        userPositionValue: action.value,
      };
    case ActionType.SET_POSITION_BREAKDOWN:
      return {
        ...state,
        positionBreakdown: { ...state.positionBreakdown, ...action.values },
      };
    case ActionType.SET_CONNECT_WALLET_INDICATOR_IS_ACTIVE:
      return {
        ...state,
        connectWalletIndicatorActive: action.isActive,
      };
    case ActionType.SET_SETTINGS:
      return {
        ...state,
        settings: { ...state.settings, ...action.settings },
      };
    case ActionType.SET_UNSTOPPABLE_DOMAIN:
      return {
        ...state,
        unstoppableDomain: action.unstoppableDomain,
      };
    case ActionType.SET_OPTIONS:
      return {
        ...state,
        options: {
          activeExpiry: action.activeExpiry || state.options.activeExpiry,
          data: action.data || state.options.data,
          error: action.error || state.options.error,
          expiries: action.expiries || state.options.expiries,
          isOperator: action.isOperator ?? state.options.isOperator,
          liquidityPool: action.liquidityPool || state.options.liquidityPool,
          loading: action.loading ?? state.options.loading,
          refresh: action.refresh || state.options.refresh,
          spotShock: action.spotShock || state.options.spotShock,
          timesToExpiry: action.timesToExpiry || state.options.timesToExpiry,
          userPositions: action.userPositions || state.options.userPositions,
          vaults: action.vaults || state.options.vaults,
          wethOracleHashMap:
            action.wethOracleHashMap || state.options.wethOracleHashMap,
        },
      };
    case ActionType.SET_DASHBOARD:
      return {
        ...state,
        dashboard: {
          activePositions:
            action.activePositions || state.dashboard.activePositions,
          inactivePositions:
            action.inactivePositions || state.dashboard.inactivePositions,
          modalPosition: action.modalPosition || state.dashboard.modalPosition,
        },
      };
    case ActionType.SET_VISIBLE_COLUMNS:
      const newSet = new Set(state.visibleColumns);

      if (action.column) {
        newSet.has(action.column)
          ? newSet.delete(action.column)
          : newSet.add(action.column);

        return {
          ...state,
          visibleColumns: newSet,
        };
      } else {
        return {
          ...state,
          visibleColumns: defaultGlobalState.visibleColumns,
        };
      }
    case ActionType.SET_COLLATERAL_PREFERENCES:
      if (action.collateralPreferences) {
        return {
          ...state,
          collateralPreferences: action.collateralPreferences,
        };
      } else {
        return {
          ...state,
          collateralPreferences: defaultGlobalState.collateralPreferences,
        };
      }
    case ActionType.SET_DASHBOARD_MODAL_VISIBLE:
      return {
        ...state,
        dashboardModalOpen: action.visible,
      };
    case ActionType.SET_SELECTED_OPTION:
      return {
        ...state,

        selectedOption: action.option,
      };
    case ActionType.SET_CLOSING_OPTION:
      return {
        ...state,
        closingOption: action.option,
        options: { ...state.options, activeExpiry: action.expiry },
      };
    case ActionType.SET_OPTION_CHAIN_MODAL_VISIBLE:
      return {
        ...state,
        optionChainModalOpen: action.visible,
      };
    case ActionType.SET_BUY_TUTORIAL_INDEX:
      return {
        ...state,
        buyTutorialIndex: action.index,
      };
    case ActionType.SET_CHAIN_TUTORIAL_INDEX:
      return {
        ...state,
        chainTutorialIndex: action.index,
      };
    case ActionType.SET_SELL_TUTORIAL_INDEX:
      return {
        ...state,
        sellTutorialIndex: action.index,
      };
    case ActionType.RESET_OPTIONS_CHAIN_STATE:
      return {
        ...state,
        closingOption: defaultGlobalState.closingOption,
        selectedOption: defaultGlobalState.selectedOption,
        optionChainModalOpen: defaultGlobalState.optionChainModalOpen,
        chainTutorialIndex: defaultGlobalState.chainTutorialIndex,
      };
    case ActionType.CHANGE_FROM_BUYING_OR_SELLING:
      if (state.selectedOption) {
        if (action.visible === OptionChainModalActions.BUY) {
          return {
            ...state,
            optionChainModalOpen: action.visible,
            selectedOption: { ...state.selectedOption, buyOrSell: "buy" },
          };
        } else {
          return {
            ...state,
            optionChainModalOpen: action.visible,
            selectedOption: { ...state.selectedOption, buyOrSell: "sell" },
          };
        }
      } else {
        return state;
      }
    case ActionType.SET_USER_BALANCES:
      return {
        ...state,
        balances: action.balances,
      };
    case ActionType.SET_USER_GEO_DATA:
      return {
        ...state,
        geoData: action.geoData,
      };
    case ActionType.SET_USER_STATS:
      return {
        ...state,
        userStats: {
          activePnL: action.activePnL ?? state.userStats.activePnL,
          activePositions:
            action.activePositions || state.userStats.activePositions,
          delta: action.delta ?? state.userStats.delta,
          historicalPnL: action.historicalPnL ?? state.userStats.historicalPnL,
        },
      };
  }
};

export const vaultReducer: Reducer<VaultState, VaultAction> = (
  state,
  action
) => {
  switch (action.type) {
    case VaultActionType.SET:
      return {
        ...state,
        ...action.data,
      };
  }
};
