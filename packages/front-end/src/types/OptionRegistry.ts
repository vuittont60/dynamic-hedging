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
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace Types {
  export type OptionSeriesStruct = {
    expiration: BigNumberish;
    strike: BigNumberish;
    isPut: boolean;
    underlying: string;
    strikeAsset: string;
    collateral: string;
  };

  export type OptionSeriesStructOutput = [
    BigNumber,
    BigNumber,
    boolean,
    string,
    string,
    string
  ] & {
    expiration: BigNumber;
    strike: BigNumber;
    isPut: boolean;
    underlying: string;
    strikeAsset: string;
    collateral: string;
  };
}

export interface OptionRegistryInterface extends utils.Interface {
  contractName: "OptionRegistry";
  functions: {
    "addressBook()": FunctionFragment;
    "adjustCollateral(uint256)": FunctionFragment;
    "adjustCollateralCaller(uint256)": FunctionFragment;
    "authority()": FunctionFragment;
    "callLowerHealthFactor()": FunctionFragment;
    "callUpperHealthFactor()": FunctionFragment;
    "checkVaultHealth(uint256)": FunctionFragment;
    "close(address,uint256)": FunctionFragment;
    "collateralAsset()": FunctionFragment;
    "getCollateral((uint64,uint128,bool,address,address,address),uint256)": FunctionFragment;
    "getIssuanceHash((uint64,uint128,bool,address,address,address))": FunctionFragment;
    "getOtoken(address,address,uint256,bool,uint256,address)": FunctionFragment;
    "getSeries((uint64,uint128,bool,address,address,address))": FunctionFragment;
    "getSeriesAddress(bytes32)": FunctionFragment;
    "getSeriesInfo(address)": FunctionFragment;
    "issue((uint64,uint128,bool,address,address,address))": FunctionFragment;
    "keeper(address)": FunctionFragment;
    "liquidityPool()": FunctionFragment;
    "open(address,uint256,uint256)": FunctionFragment;
    "putLowerHealthFactor()": FunctionFragment;
    "putUpperHealthFactor()": FunctionFragment;
    "redeem(address)": FunctionFragment;
    "registerLiquidatedVault(uint256)": FunctionFragment;
    "seriesInfo(address)": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "setHealthThresholds(uint64,uint64,uint64,uint64)": FunctionFragment;
    "setKeeper(address,bool)": FunctionFragment;
    "setLiquidityPool(address)": FunctionFragment;
    "settle(address)": FunctionFragment;
    "vaultCount()": FunctionFragment;
    "vaultIds(address)": FunctionFragment;
    "wCollatLiquidatedVault(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addressBook",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "adjustCollateral",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "adjustCollateralCaller",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "callLowerHealthFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "callUpperHealthFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "checkVaultHealth",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "close",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCollateral",
    values: [Types.OptionSeriesStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuanceHash",
    values: [Types.OptionSeriesStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getOtoken",
    values: [string, string, BigNumberish, boolean, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getSeries",
    values: [Types.OptionSeriesStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getSeriesAddress",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getSeriesInfo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "issue",
    values: [Types.OptionSeriesStruct]
  ): string;
  encodeFunctionData(functionFragment: "keeper", values: [string]): string;
  encodeFunctionData(
    functionFragment: "liquidityPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "open",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "putLowerHealthFactor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "putUpperHealthFactor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "redeem", values: [string]): string;
  encodeFunctionData(
    functionFragment: "registerLiquidatedVault",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "seriesInfo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setHealthThresholds",
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setKeeper",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setLiquidityPool",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "settle", values: [string]): string;
  encodeFunctionData(
    functionFragment: "vaultCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vaultIds", values: [string]): string;
  encodeFunctionData(
    functionFragment: "wCollatLiquidatedVault",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addressBook",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adjustCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adjustCollateralCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "callLowerHealthFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "callUpperHealthFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkVaultHealth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "close", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIssuanceHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOtoken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getSeries", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSeriesAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSeriesInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "issue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keeper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidityPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "open", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "putLowerHealthFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "putUpperHealthFactor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "redeem", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerLiquidatedVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "seriesInfo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setHealthThresholds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setKeeper", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setLiquidityPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "settle", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vaultCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vaultIds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wCollatLiquidatedVault",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityUpdated(address)": EventFragment;
    "OptionTokenCreated(address)": EventFragment;
    "OptionsContractClosed(address,uint256,uint256)": EventFragment;
    "OptionsContractOpened(address,uint256,uint256)": EventFragment;
    "OptionsContractSettled(address,uint256,uint256,uint256)": EventFragment;
    "SeriesRedeemed(address,uint256,uint256)": EventFragment;
    "VaultLiquidationRegistered(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OptionTokenCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OptionsContractClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OptionsContractOpened"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OptionsContractSettled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SeriesRedeemed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VaultLiquidationRegistered"): EventFragment;
}

export type AuthorityUpdatedEvent = TypedEvent<[string], { authority: string }>;

export type AuthorityUpdatedEventFilter =
  TypedEventFilter<AuthorityUpdatedEvent>;

export type OptionTokenCreatedEvent = TypedEvent<[string], { token: string }>;

export type OptionTokenCreatedEventFilter =
  TypedEventFilter<OptionTokenCreatedEvent>;

export type OptionsContractClosedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { series: string; vaultId: BigNumber; closedAmount: BigNumber }
>;

export type OptionsContractClosedEventFilter =
  TypedEventFilter<OptionsContractClosedEvent>;

export type OptionsContractOpenedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { series: string; vaultId: BigNumber; optionsAmount: BigNumber }
>;

export type OptionsContractOpenedEventFilter =
  TypedEventFilter<OptionsContractOpenedEvent>;

export type OptionsContractSettledEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    series: string;
    collateralReturned: BigNumber;
    collateralLost: BigNumber;
    amountLost: BigNumber;
  }
>;

export type OptionsContractSettledEventFilter =
  TypedEventFilter<OptionsContractSettledEvent>;

export type SeriesRedeemedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { series: string; underlyingAmount: BigNumber; strikeAmount: BigNumber }
>;

export type SeriesRedeemedEventFilter = TypedEventFilter<SeriesRedeemedEvent>;

export type VaultLiquidationRegisteredEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    series: string;
    vaultId: BigNumber;
    amountLiquidated: BigNumber;
    collateralLiquidated: BigNumber;
  }
>;

export type VaultLiquidationRegisteredEventFilter =
  TypedEventFilter<VaultLiquidationRegisteredEvent>;

export interface OptionRegistry extends BaseContract {
  contractName: "OptionRegistry";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OptionRegistryInterface;

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
    addressBook(overrides?: CallOverrides): Promise<[string]>;

    adjustCollateral(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adjustCollateralCaller(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    authority(overrides?: CallOverrides): Promise<[string]>;

    callLowerHealthFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    callUpperHealthFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    checkVaultHealth(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, BigNumber, BigNumber, BigNumber, string] & {
        isBelowMin: boolean;
        isAboveMax: boolean;
        healthFactor: BigNumber;
        upperHealthFactor: BigNumber;
        collatRequired: BigNumber;
        collatAsset: string;
      }
    >;

    close(
      _series: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collateralAsset(overrides?: CallOverrides): Promise<[string]>;

    getCollateral(
      series: Types.OptionSeriesStruct,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getIssuanceHash(
      _series: Types.OptionSeriesStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getOtoken(
      underlying: string,
      strikeAsset: string,
      expiration: BigNumberish,
      isPut: boolean,
      strike: BigNumberish,
      collateral: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSeries(
      _series: Types.OptionSeriesStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSeriesAddress(
      issuanceHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getSeriesInfo(
      series: string,
      overrides?: CallOverrides
    ): Promise<[Types.OptionSeriesStructOutput]>;

    issue(
      optionSeries: Types.OptionSeriesStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    keeper(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    liquidityPool(overrides?: CallOverrides): Promise<[string]>;

    open(
      _series: string,
      amount: BigNumberish,
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    putLowerHealthFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    putUpperHealthFactor(overrides?: CallOverrides): Promise<[BigNumber]>;

    redeem(
      _series: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerLiquidatedVault(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    seriesInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean, string, string, string] & {
        expiration: BigNumber;
        strike: BigNumber;
        isPut: boolean;
        underlying: string;
        strikeAsset: string;
        collateral: string;
      }
    >;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setHealthThresholds(
      _putLower: BigNumberish,
      _putUpper: BigNumberish,
      _callLower: BigNumberish,
      _callUpper: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setKeeper(
      _target: string,
      _auth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLiquidityPool(
      _newLiquidityPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    settle(
      _series: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vaultCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    vaultIds(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    wCollatLiquidatedVault(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addressBook(overrides?: CallOverrides): Promise<string>;

  adjustCollateral(
    vaultId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adjustCollateralCaller(
    vaultId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  authority(overrides?: CallOverrides): Promise<string>;

  callLowerHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

  callUpperHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

  checkVaultHealth(
    vaultId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, boolean, BigNumber, BigNumber, BigNumber, string] & {
      isBelowMin: boolean;
      isAboveMax: boolean;
      healthFactor: BigNumber;
      upperHealthFactor: BigNumber;
      collatRequired: BigNumber;
      collatAsset: string;
    }
  >;

  close(
    _series: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collateralAsset(overrides?: CallOverrides): Promise<string>;

  getCollateral(
    series: Types.OptionSeriesStruct,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getIssuanceHash(
    _series: Types.OptionSeriesStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getOtoken(
    underlying: string,
    strikeAsset: string,
    expiration: BigNumberish,
    isPut: boolean,
    strike: BigNumberish,
    collateral: string,
    overrides?: CallOverrides
  ): Promise<string>;

  getSeries(
    _series: Types.OptionSeriesStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getSeriesAddress(
    issuanceHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getSeriesInfo(
    series: string,
    overrides?: CallOverrides
  ): Promise<Types.OptionSeriesStructOutput>;

  issue(
    optionSeries: Types.OptionSeriesStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  keeper(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  liquidityPool(overrides?: CallOverrides): Promise<string>;

  open(
    _series: string,
    amount: BigNumberish,
    collateralAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  putLowerHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

  putUpperHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

  redeem(
    _series: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerLiquidatedVault(
    vaultId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  seriesInfo(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, boolean, string, string, string] & {
      expiration: BigNumber;
      strike: BigNumber;
      isPut: boolean;
      underlying: string;
      strikeAsset: string;
      collateral: string;
    }
  >;

  setAuthority(
    _newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setHealthThresholds(
    _putLower: BigNumberish,
    _putUpper: BigNumberish,
    _callLower: BigNumberish,
    _callUpper: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setKeeper(
    _target: string,
    _auth: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLiquidityPool(
    _newLiquidityPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  settle(
    _series: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vaultCount(overrides?: CallOverrides): Promise<BigNumber>;

  vaultIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  wCollatLiquidatedVault(
    vaultId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addressBook(overrides?: CallOverrides): Promise<string>;

    adjustCollateral(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    adjustCollateralCaller(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    authority(overrides?: CallOverrides): Promise<string>;

    callLowerHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    callUpperHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    checkVaultHealth(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, BigNumber, BigNumber, BigNumber, string] & {
        isBelowMin: boolean;
        isAboveMax: boolean;
        healthFactor: BigNumber;
        upperHealthFactor: BigNumber;
        collatRequired: BigNumber;
        collatAsset: string;
      }
    >;

    close(
      _series: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    collateralAsset(overrides?: CallOverrides): Promise<string>;

    getCollateral(
      series: Types.OptionSeriesStruct,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIssuanceHash(
      _series: Types.OptionSeriesStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getOtoken(
      underlying: string,
      strikeAsset: string,
      expiration: BigNumberish,
      isPut: boolean,
      strike: BigNumberish,
      collateral: string,
      overrides?: CallOverrides
    ): Promise<string>;

    getSeries(
      _series: Types.OptionSeriesStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getSeriesAddress(
      issuanceHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getSeriesInfo(
      series: string,
      overrides?: CallOverrides
    ): Promise<Types.OptionSeriesStructOutput>;

    issue(
      optionSeries: Types.OptionSeriesStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    keeper(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    liquidityPool(overrides?: CallOverrides): Promise<string>;

    open(
      _series: string,
      amount: BigNumberish,
      collateralAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    putLowerHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    putUpperHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(_series: string, overrides?: CallOverrides): Promise<BigNumber>;

    registerLiquidatedVault(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    seriesInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean, string, string, string] & {
        expiration: BigNumber;
        strike: BigNumber;
        isPut: boolean;
        underlying: string;
        strikeAsset: string;
        collateral: string;
      }
    >;

    setAuthority(
      _newAuthority: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setHealthThresholds(
      _putLower: BigNumberish,
      _putUpper: BigNumberish,
      _callLower: BigNumberish,
      _callUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setKeeper(
      _target: string,
      _auth: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    setLiquidityPool(
      _newLiquidityPool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    settle(
      _series: string,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber, BigNumber, BigNumber]>;

    vaultCount(overrides?: CallOverrides): Promise<BigNumber>;

    vaultIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    wCollatLiquidatedVault(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorityUpdated(address)"(authority?: null): AuthorityUpdatedEventFilter;
    AuthorityUpdated(authority?: null): AuthorityUpdatedEventFilter;

    "OptionTokenCreated(address)"(token?: null): OptionTokenCreatedEventFilter;
    OptionTokenCreated(token?: null): OptionTokenCreatedEventFilter;

    "OptionsContractClosed(address,uint256,uint256)"(
      series?: string | null,
      vaultId?: null,
      closedAmount?: null
    ): OptionsContractClosedEventFilter;
    OptionsContractClosed(
      series?: string | null,
      vaultId?: null,
      closedAmount?: null
    ): OptionsContractClosedEventFilter;

    "OptionsContractOpened(address,uint256,uint256)"(
      series?: string | null,
      vaultId?: null,
      optionsAmount?: null
    ): OptionsContractOpenedEventFilter;
    OptionsContractOpened(
      series?: string | null,
      vaultId?: null,
      optionsAmount?: null
    ): OptionsContractOpenedEventFilter;

    "OptionsContractSettled(address,uint256,uint256,uint256)"(
      series?: string | null,
      collateralReturned?: null,
      collateralLost?: null,
      amountLost?: null
    ): OptionsContractSettledEventFilter;
    OptionsContractSettled(
      series?: string | null,
      collateralReturned?: null,
      collateralLost?: null,
      amountLost?: null
    ): OptionsContractSettledEventFilter;

    "SeriesRedeemed(address,uint256,uint256)"(
      series?: null,
      underlyingAmount?: null,
      strikeAmount?: null
    ): SeriesRedeemedEventFilter;
    SeriesRedeemed(
      series?: null,
      underlyingAmount?: null,
      strikeAmount?: null
    ): SeriesRedeemedEventFilter;

    "VaultLiquidationRegistered(address,uint256,uint256,uint256)"(
      series?: string | null,
      vaultId?: null,
      amountLiquidated?: null,
      collateralLiquidated?: null
    ): VaultLiquidationRegisteredEventFilter;
    VaultLiquidationRegistered(
      series?: string | null,
      vaultId?: null,
      amountLiquidated?: null,
      collateralLiquidated?: null
    ): VaultLiquidationRegisteredEventFilter;
  };

  estimateGas: {
    addressBook(overrides?: CallOverrides): Promise<BigNumber>;

    adjustCollateral(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adjustCollateralCaller(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<BigNumber>;

    callLowerHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    callUpperHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    checkVaultHealth(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    close(
      _series: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collateralAsset(overrides?: CallOverrides): Promise<BigNumber>;

    getCollateral(
      series: Types.OptionSeriesStruct,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getIssuanceHash(
      _series: Types.OptionSeriesStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOtoken(
      underlying: string,
      strikeAsset: string,
      expiration: BigNumberish,
      isPut: boolean,
      strike: BigNumberish,
      collateral: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSeries(
      _series: Types.OptionSeriesStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSeriesAddress(
      issuanceHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSeriesInfo(
      series: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    issue(
      optionSeries: Types.OptionSeriesStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    keeper(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    liquidityPool(overrides?: CallOverrides): Promise<BigNumber>;

    open(
      _series: string,
      amount: BigNumberish,
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    putLowerHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    putUpperHealthFactor(overrides?: CallOverrides): Promise<BigNumber>;

    redeem(
      _series: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerLiquidatedVault(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    seriesInfo(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setHealthThresholds(
      _putLower: BigNumberish,
      _putUpper: BigNumberish,
      _callLower: BigNumberish,
      _callUpper: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setKeeper(
      _target: string,
      _auth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLiquidityPool(
      _newLiquidityPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    settle(
      _series: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vaultCount(overrides?: CallOverrides): Promise<BigNumber>;

    vaultIds(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    wCollatLiquidatedVault(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressBook(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adjustCollateral(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adjustCollateralCaller(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    callLowerHealthFactor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    callUpperHealthFactor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkVaultHealth(
      vaultId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    close(
      _series: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collateralAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCollateral(
      series: Types.OptionSeriesStruct,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getIssuanceHash(
      _series: Types.OptionSeriesStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOtoken(
      underlying: string,
      strikeAsset: string,
      expiration: BigNumberish,
      isPut: boolean,
      strike: BigNumberish,
      collateral: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSeries(
      _series: Types.OptionSeriesStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSeriesAddress(
      issuanceHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSeriesInfo(
      series: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    issue(
      optionSeries: Types.OptionSeriesStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    keeper(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidityPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    open(
      _series: string,
      amount: BigNumberish,
      collateralAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    putLowerHealthFactor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    putUpperHealthFactor(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    redeem(
      _series: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerLiquidatedVault(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    seriesInfo(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAuthority(
      _newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setHealthThresholds(
      _putLower: BigNumberish,
      _putUpper: BigNumberish,
      _callLower: BigNumberish,
      _callUpper: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setKeeper(
      _target: string,
      _auth: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLiquidityPool(
      _newLiquidityPool: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    settle(
      _series: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vaultCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vaultIds(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    wCollatLiquidatedVault(
      vaultId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
