/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  WhitelistInterface,
  WhitelistInterfaceInterface,
} from "../WhitelistInterface";

const _abi = [
  {
    inputs: [],
    name: "addressBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_callee",
        type: "address",
      },
    ],
    name: "blacklistCallee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
    ],
    name: "blacklistCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_otoken",
        type: "address",
      },
    ],
    name: "blacklistOtoken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "_strike",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPut",
        type: "bool",
      },
    ],
    name: "blacklistProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPut",
        type: "bool",
      },
    ],
    name: "isCoveredWhitelistedCollateral",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPut",
        type: "bool",
      },
    ],
    name: "isNakedWhitelistedCollateral",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_callee",
        type: "address",
      },
    ],
    name: "isWhitelistedCallee",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
    ],
    name: "isWhitelistedCollateral",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_otoken",
        type: "address",
      },
    ],
    name: "isWhitelistedOtoken",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "_strike",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPut",
        type: "bool",
      },
    ],
    name: "isWhitelistedProduct",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_callee",
        type: "address",
      },
    ],
    name: "whitelistCallee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
    ],
    name: "whitelistCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPut",
        type: "bool",
      },
    ],
    name: "whitelistCoveredCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPut",
        type: "bool",
      },
    ],
    name: "whitelistNakedCollateral",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_otoken",
        type: "address",
      },
    ],
    name: "whitelistOtoken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "_strike",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateral",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isPut",
        type: "bool",
      },
    ],
    name: "whitelistProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class WhitelistInterface__factory {
  static readonly abi = _abi;
  static createInterface(): WhitelistInterfaceInterface {
    return new utils.Interface(_abi) as WhitelistInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WhitelistInterface {
    return new Contract(address, _abi, signerOrProvider) as WhitelistInterface;
  }
}