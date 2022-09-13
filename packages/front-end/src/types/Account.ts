/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { BaseContract, BigNumber, BigNumberish, Signer, utils } from "ethers";
import { EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface AccountInterface extends utils.Interface {
  functions: {};

  events: {
    "LiquidityPositionsLiquidated(uint256,address,int256,int256,int256,int256)": EventFragment;
    "MarginUpdated(uint256,uint32,int256,bool)": EventFragment;
    "ProfitUpdated(uint256,int256)": EventFragment;
    "TokenPositionLiquidated(uint256,uint32,int256,int256,int256)": EventFragment;
  };

  getEvent(
    nameOrSignatureOrTopic: "LiquidityPositionsLiquidated"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MarginUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProfitUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenPositionLiquidated"): EventFragment;
}

export type LiquidityPositionsLiquidatedEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    accountId: BigNumber;
    keeperAddress: string;
    liquidationFee: BigNumber;
    keeperFee: BigNumber;
    insuranceFundFee: BigNumber;
    accountMarketValueFinal: BigNumber;
  }
>;

export type LiquidityPositionsLiquidatedEventFilter =
  TypedEventFilter<LiquidityPositionsLiquidatedEvent>;

export type MarginUpdatedEvent = TypedEvent<
  [BigNumber, number, BigNumber, boolean],
  {
    accountId: BigNumber;
    collateralId: number;
    amount: BigNumber;
    isSettleProfit: boolean;
  }
>;

export type MarginUpdatedEventFilter = TypedEventFilter<MarginUpdatedEvent>;

export type ProfitUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  { accountId: BigNumber; amount: BigNumber }
>;

export type ProfitUpdatedEventFilter = TypedEventFilter<ProfitUpdatedEvent>;

export type TokenPositionLiquidatedEvent = TypedEvent<
  [BigNumber, number, BigNumber, BigNumber, BigNumber],
  {
    accountId: BigNumber;
    poolId: number;
    keeperFee: BigNumber;
    insuranceFundFee: BigNumber;
    accountMarketValueFinal: BigNumber;
  }
>;

export type TokenPositionLiquidatedEventFilter =
  TypedEventFilter<TokenPositionLiquidatedEvent>;

export interface Account extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: AccountInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {};

  callStatic: {};

  filters: {
    "LiquidityPositionsLiquidated(uint256,address,int256,int256,int256,int256)"(
      accountId?: BigNumberish | null,
      keeperAddress?: string | null,
      liquidationFee?: null,
      keeperFee?: null,
      insuranceFundFee?: null,
      accountMarketValueFinal?: null
    ): LiquidityPositionsLiquidatedEventFilter;
    LiquidityPositionsLiquidated(
      accountId?: BigNumberish | null,
      keeperAddress?: string | null,
      liquidationFee?: null,
      keeperFee?: null,
      insuranceFundFee?: null,
      accountMarketValueFinal?: null
    ): LiquidityPositionsLiquidatedEventFilter;

    "MarginUpdated(uint256,uint32,int256,bool)"(
      accountId?: BigNumberish | null,
      collateralId?: BigNumberish | null,
      amount?: null,
      isSettleProfit?: null
    ): MarginUpdatedEventFilter;
    MarginUpdated(
      accountId?: BigNumberish | null,
      collateralId?: BigNumberish | null,
      amount?: null,
      isSettleProfit?: null
    ): MarginUpdatedEventFilter;

    "ProfitUpdated(uint256,int256)"(
      accountId?: BigNumberish | null,
      amount?: null
    ): ProfitUpdatedEventFilter;
    ProfitUpdated(
      accountId?: BigNumberish | null,
      amount?: null
    ): ProfitUpdatedEventFilter;

    "TokenPositionLiquidated(uint256,uint32,int256,int256,int256)"(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      keeperFee?: null,
      insuranceFundFee?: null,
      accountMarketValueFinal?: null
    ): TokenPositionLiquidatedEventFilter;
    TokenPositionLiquidated(
      accountId?: BigNumberish | null,
      poolId?: BigNumberish | null,
      keeperFee?: null,
      insuranceFundFee?: null,
      accountMarketValueFinal?: null
    ): TokenPositionLiquidatedEventFilter;
  };

  estimateGas: {};

  populateTransaction: {};
}