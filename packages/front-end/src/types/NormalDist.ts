/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface NormalDistInterface extends utils.Interface {
  functions: {
    "cdf(int256)": FunctionFragment;
    "getScoresFromT(int256)": FunctionFragment;
    "phi(int256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "cdf", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "getScoresFromT",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "phi", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "cdf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getScoresFromT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "phi", data: BytesLike): Result;

  events: {};
}

export interface NormalDist extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: NormalDistInterface;

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
    cdf(x: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    getScoresFromT(
      t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    phi(x: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  cdf(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  getScoresFromT(
    t: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  phi(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    cdf(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getScoresFromT(
      t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phi(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    cdf(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getScoresFromT(
      t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    phi(x: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cdf(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getScoresFromT(
      t: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    phi(
      x: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}