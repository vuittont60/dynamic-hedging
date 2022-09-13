/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type PortfolioValuesStruct = {
  delta: BigNumberish;
  gamma: BigNumberish;
  vega: BigNumberish;
  theta: BigNumberish;
  callPutsValue: BigNumberish;
  timestamp: BigNumberish;
  spotPrice: BigNumberish;
};

export type PortfolioValuesStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  delta: BigNumber;
  gamma: BigNumber;
  vega: BigNumber;
  theta: BigNumber;
  callPutsValue: BigNumber;
  timestamp: BigNumber;
  spotPrice: BigNumber;
};

export interface MockPortfolioValuesFeedInterface extends utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "fulfill(bytes32,address,address,int256,int256,int256,int256,int256,uint256)": FunctionFragment;
    "getPortfolioValues(address,address)": FunctionFragment;
    "keeper(address)": FunctionFragment;
    "liquidityPool()": FunctionFragment;
    "requestPortfolioData(address,address)": FunctionFragment;
    "setAddressStringMapping(address,string)": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setKeeper(address,bool)": FunctionFragment;
    "setLiquidityPool(address)": FunctionFragment;
    "stringedAddresses(address)": FunctionFragment;
    "withdrawLink(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "fulfill",
    values: [
      BytesLike,
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPortfolioValues",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "keeper", values: [string]): string;
  encodeFunctionData(
    functionFragment: "liquidityPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestPortfolioData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAddressStringMapping",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setKeeper",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidityPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "stringedAddresses",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawLink",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fulfill", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPortfolioValues",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "keeper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestPortfolioData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAddressStringMapping",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKeeper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidityPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stringedAddresses",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawLink",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityUpdated(address)": EventFragment;
    "ChainlinkCancelled(bytes32)": EventFragment;
    "ChainlinkFulfilled(bytes32)": EventFragment;
    "ChainlinkRequested(bytes32)": EventFragment;
    "DataFullfilled(address,address,int256,int256,int256,int256,int256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChainlinkRequested"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DataFullfilled"): EventFragment;
}

export type AuthorityUpdatedEvent = TypedEvent<[string], { authority: string }>;

export type AuthorityUpdatedEventFilter =
  TypedEventFilter<AuthorityUpdatedEvent>;

export type ChainlinkCancelledEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkCancelledEventFilter =
  TypedEventFilter<ChainlinkCancelledEvent>;

export type ChainlinkFulfilledEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkFulfilledEventFilter =
  TypedEventFilter<ChainlinkFulfilledEvent>;

export type ChainlinkRequestedEvent = TypedEvent<[string], { id: string }>;

export type ChainlinkRequestedEventFilter =
  TypedEventFilter<ChainlinkRequestedEvent>;

export type DataFullfilledEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber],
  {
    underlying: string;
    strike: string;
    delta: BigNumber;
    gamma: BigNumber;
    vega: BigNumber;
    theta: BigNumber;
    callPutsValue: BigNumber;
  }
>;

export type DataFullfilledEventFilter = TypedEventFilter<DataFullfilledEvent>;

export interface MockPortfolioValuesFeed extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockPortfolioValuesFeedInterface;

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

  functions: {
    authority(overrides?: CallOverrides): Promise<[string]>;

    fulfill(
      _requestId: BytesLike,
      _underlying: string,
      _strike: string,
      _delta: BigNumberish,
      _gamma: BigNumberish,
      _vega: BigNumberish,
      _theta: BigNumberish,
      _callPutsValue: BigNumberish,
      _spotPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPortfolioValues(
      underlying: string,
      strike: string,
      overrides?: CallOverrides
    ): Promise<[PortfolioValuesStructOutput]>;

    keeper(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    liquidityPool(overrides?: CallOverrides): Promise<[string]>;

    requestPortfolioData(
      _underlying: string,
      _strike: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAddressStringMapping(
      _asset: string,
      _stringVersion: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKeeper(
      _keeper: string,
      _auth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLiquidityPool(
      _liquidityPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stringedAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    withdrawLink(
      _amount: BigNumberish,
      _target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  fulfill(
    _requestId: BytesLike,
    _underlying: string,
    _strike: string,
    _delta: BigNumberish,
    _gamma: BigNumberish,
    _vega: BigNumberish,
    _theta: BigNumberish,
    _callPutsValue: BigNumberish,
    _spotPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPortfolioValues(
    underlying: string,
    strike: string,
    overrides?: CallOverrides
  ): Promise<PortfolioValuesStructOutput>;

  keeper(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  liquidityPool(overrides?: CallOverrides): Promise<string>;

  requestPortfolioData(
    _underlying: string,
    _strike: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAddressStringMapping(
    _asset: string,
    _stringVersion: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAuthority(
    _newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKeeper(
    _keeper: string,
    _auth: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLiquidityPool(
    _liquidityPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stringedAddresses(arg0: string, overrides?: CallOverrides): Promise<string>;

  withdrawLink(
    _amount: BigNumberish,
    _target: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    fulfill(
      _requestId: BytesLike,
      _underlying: string,
      _strike: string,
      _delta: BigNumberish,
      _gamma: BigNumberish,
      _vega: BigNumberish,
      _theta: BigNumberish,
      _callPutsValue: BigNumberish,
      _spotPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getPortfolioValues(
      underlying: string,
      strike: string,
      overrides?: CallOverrides
    ): Promise<PortfolioValuesStructOutput>;

    keeper(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    liquidityPool(overrides?: CallOverrides): Promise<string>;

    requestPortfolioData(
      _underlying: string,
      _strike: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setAddressStringMapping(
      _asset: string,
      _stringVersion: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAuthority(
      _newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setKeeper(
      _keeper: string,
      _auth: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidityPool(
      _liquidityPool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    stringedAddresses(arg0: string, overrides?: CallOverrides): Promise<string>;

    withdrawLink(
      _amount: BigNumberish,
      _target: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorityUpdated(address)"(authority?: null): AuthorityUpdatedEventFilter;
    AuthorityUpdated(authority?: null): AuthorityUpdatedEventFilter;

    "ChainlinkCancelled(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkCancelledEventFilter;
    ChainlinkCancelled(id?: BytesLike | null): ChainlinkCancelledEventFilter;

    "ChainlinkFulfilled(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkFulfilledEventFilter;
    ChainlinkFulfilled(id?: BytesLike | null): ChainlinkFulfilledEventFilter;

    "ChainlinkRequested(bytes32)"(
      id?: BytesLike | null
    ): ChainlinkRequestedEventFilter;
    ChainlinkRequested(id?: BytesLike | null): ChainlinkRequestedEventFilter;

    "DataFullfilled(address,address,int256,int256,int256,int256,int256)"(
      underlying?: string | null,
      strike?: string | null,
      delta?: null,
      gamma?: null,
      vega?: null,
      theta?: null,
      callPutsValue?: null
    ): DataFullfilledEventFilter;
    DataFullfilled(
      underlying?: string | null,
      strike?: string | null,
      delta?: null,
      gamma?: null,
      vega?: null,
      theta?: null,
      callPutsValue?: null
    ): DataFullfilledEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    fulfill(
      _requestId: BytesLike,
      _underlying: string,
      _strike: string,
      _delta: BigNumberish,
      _gamma: BigNumberish,
      _vega: BigNumberish,
      _theta: BigNumberish,
      _callPutsValue: BigNumberish,
      _spotPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPortfolioValues(
      underlying: string,
      strike: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    keeper(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    liquidityPool(overrides?: CallOverrides): Promise<BigNumber>;

    requestPortfolioData(
      _underlying: string,
      _strike: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAddressStringMapping(
      _asset: string,
      _stringVersion: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKeeper(
      _keeper: string,
      _auth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLiquidityPool(
      _liquidityPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stringedAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawLink(
      _amount: BigNumberish,
      _target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    fulfill(
      _requestId: BytesLike,
      _underlying: string,
      _strike: string,
      _delta: BigNumberish,
      _gamma: BigNumberish,
      _vega: BigNumberish,
      _theta: BigNumberish,
      _callPutsValue: BigNumberish,
      _spotPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPortfolioValues(
      underlying: string,
      strike: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keeper(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidityPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    requestPortfolioData(
      _underlying: string,
      _strike: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAddressStringMapping(
      _asset: string,
      _stringVersion: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKeeper(
      _keeper: string,
      _auth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidityPool(
      _liquidityPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stringedAddresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawLink(
      _amount: BigNumberish,
      _target: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}