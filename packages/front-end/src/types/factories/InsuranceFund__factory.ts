/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { InsuranceFund, InsuranceFundInterface } from "../InsuranceFund";

const _abi = [
  {
    inputs: [],
    name: "Unauthorised",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "clearingHouse",
    outputs: [
      {
        internalType: "contract IClearingHouse",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_settlementToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_clearingHouse",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "settlementToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611534806100206000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c8063379607f5116100a257806395d89b411161007157806395d89b411461023a578063a457c2d714610242578063a9059cbb14610255578063b6b55f2514610268578063dd62ed3e1461027b57600080fd5b8063379607f5146101d857806339509351146101eb57806370a08231146101fe5780637b9e618d1461022757600080fd5b80632016a0d2116100de5780632016a0d21461018e57806323b872dd146101a35780632e1a7d4d146101b6578063313ce567146101c957600080fd5b806306fdde0314610110578063095ea7b31461012e5780630af968001461015157806318160ddd1461017c575b600080fd5b61011861028e565b604051610125919061119a565b60405180910390f35b61014161013c3660046111e2565b610320565b6040519015158152602001610125565b606654610164906001600160a01b031681565b6040516001600160a01b039091168152602001610125565b6035545b604051908152602001610125565b6101a161019c366004611257565b610338565b005b6101416101b13660046112ec565b6104ed565b6101a16101c436600461132d565b610513565b60405160128152602001610125565b6101a16101e636600461132d565b6105cf565b6101416101f93660046111e2565b610614565b61018061020c366004611346565b6001600160a01b031660009081526033602052604090205490565b606554610164906001600160a01b031681565b610118610636565b6101416102503660046111e2565b610645565b6101416102633660046111e2565b6106cb565b6101a161027636600461132d565b6106d9565b610180610289366004611363565b6107a8565b60606036805461029d9061139c565b80601f01602080910402602001604051908101604052809291908181526020018280546102c99061139c565b80156103165780601f106102eb57610100808354040283529160200191610316565b820191906000526020600020905b8154815290600101906020018083116102f957829003601f168201915b5050505050905090565b60003361032e8185856107d3565b5060019392505050565b600054610100900460ff16158080156103585750600054600160ff909116105b806103725750303b158015610372575060005460ff166001145b6103da5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b6000805460ff1916600117905580156103fd576000805461ff0019166101001790555b606580546001600160a01b03808a166001600160a01b0319928316179092556066805492891692909116919091179055604080516020601f870181900481028201810190925285815261049e91879087908190840183828082843760009201919091525050604080516020601f890181900481028201810190925287815292508791508690819084018382808284376000920191909152506108f892505050565b80156104e4576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b50505050505050565b6000336104fb85828561092d565b6105068585856109a1565b60019150505b9392505050565b6065546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa15801561055c573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058091906113d6565b9050600061058d60355490565b905060008161059c8486611405565b6105a69190611424565b90506105b23385610b6f565b6065546105c9906001600160a01b03163383610cba565b50505050565b6066546001600160a01b031633146105fa57604051636bd1573560e11b815260040160405180910390fd5b606554610611906001600160a01b03163383610cba565b50565b60003361032e81858561062783836107a8565b6106319190611446565b6107d3565b60606037805461029d9061139c565b6000338161065382866107a8565b9050838110156106b35760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103d1565b6106c082868684036107d3565b506001949350505050565b60003361032e8185856109a1565b6065546040516370a0823160e01b81523060048201526000916001600160a01b0316906370a0823190602401602060405180830381865afa158015610722573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074691906113d6565b9050600061075360355490565b90506000811580610762575082155b1561076e575082610786565b826107798386611405565b6107839190611424565b90505b60655461079e906001600160a01b0316333087610d1d565b6105c93382610d55565b6001600160a01b03918216600090815260346020908152604080832093909416825291909152205490565b6001600160a01b0383166108355760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103d1565b6001600160a01b0382166108965760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103d1565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600054610100900460ff1661091f5760405162461bcd60e51b81526004016103d19061145e565b6109298282610e34565b5050565b600061093984846107a8565b905060001981146105c957818110156109945760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103d1565b6105c984848484036107d3565b6001600160a01b038316610a055760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103d1565b6001600160a01b038216610a675760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103d1565b6001600160a01b03831660009081526033602052604090205481811015610adf5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103d1565b6001600160a01b03808516600090815260336020526040808220858503905591851681529081208054849290610b16908490611446565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610b6291815260200190565b60405180910390a36105c9565b6001600160a01b038216610bcf5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103d1565b6001600160a01b03821660009081526033602052604090205481811015610c435760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103d1565b6001600160a01b0383166000908152603360205260408120838303905560358054849290610c729084906114a9565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906020016108eb565b505050565b6040516001600160a01b038316602482015260448101829052610cb590849063a9059cbb60e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610e82565b6040516001600160a01b03808516602483015283166044820152606481018290526105c99085906323b872dd60e01b90608401610ce6565b6001600160a01b038216610dab5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103d1565b8060356000828254610dbd9190611446565b90915550506001600160a01b03821660009081526033602052604081208054839290610dea908490611446565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b600054610100900460ff16610e5b5760405162461bcd60e51b81526004016103d19061145e565b8151610e6e9060369060208501906110d5565b508051610cb59060379060208401906110d5565b6000610ed7826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610f549092919063ffffffff16565b805190915015610cb55780806020019051810190610ef591906114c0565b610cb55760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016103d1565b6060610f638484600085610f6b565b949350505050565b606082471015610fcc5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016103d1565b6001600160a01b0385163b6110235760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016103d1565b600080866001600160a01b0316858760405161103f91906114e2565b60006040518083038185875af1925050503d806000811461107c576040519150601f19603f3d011682016040523d82523d6000602084013e611081565b606091505b509150915061109182828661109c565b979650505050505050565b606083156110ab57508161050c565b8251156110bb5782518084602001fd5b8160405162461bcd60e51b81526004016103d1919061119a565b8280546110e19061139c565b90600052602060002090601f0160209004810192826111035760008555611149565b82601f1061111c57805160ff1916838001178555611149565b82800160010185558215611149579182015b8281111561114957825182559160200191906001019061112e565b50611155929150611159565b5090565b5b80821115611155576000815560010161115a565b60005b83811015611189578181015183820152602001611171565b838111156105c95750506000910152565b60208152600082518060208401526111b981604085016020870161116e565b601f01601f19169190910160400192915050565b6001600160a01b038116811461061157600080fd5b600080604083850312156111f557600080fd5b8235611200816111cd565b946020939093013593505050565b60008083601f84011261122057600080fd5b50813567ffffffffffffffff81111561123857600080fd5b60208301915083602082850101111561125057600080fd5b9250929050565b6000806000806000806080878903121561127057600080fd5b863561127b816111cd565b9550602087013561128b816111cd565b9450604087013567ffffffffffffffff808211156112a857600080fd5b6112b48a838b0161120e565b909650945060608901359150808211156112cd57600080fd5b506112da89828a0161120e565b979a9699509497509295939492505050565b60008060006060848603121561130157600080fd5b833561130c816111cd565b9250602084013561131c816111cd565b929592945050506040919091013590565b60006020828403121561133f57600080fd5b5035919050565b60006020828403121561135857600080fd5b813561050c816111cd565b6000806040838503121561137657600080fd5b8235611381816111cd565b91506020830135611391816111cd565b809150509250929050565b600181811c908216806113b057607f821691505b6020821081036113d057634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156113e857600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600081600019048311821515161561141f5761141f6113ef565b500290565b60008261144157634e487b7160e01b600052601260045260246000fd5b500490565b60008219821115611459576114596113ef565b500190565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000828210156114bb576114bb6113ef565b500390565b6000602082840312156114d257600080fd5b8151801515811461050c57600080fd5b600082516114f481846020870161116e565b919091019291505056fea2646970667358221220d03d225bb461e602aa25696171815f0cb4e3345fac7e5b8a0be821284fb4124664736f6c634300080e0033";

type InsuranceFundConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InsuranceFundConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InsuranceFund__factory extends ContractFactory {
  constructor(...args: InsuranceFundConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InsuranceFund> {
    return super.deploy(overrides || {}) as Promise<InsuranceFund>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InsuranceFund {
    return super.attach(address) as InsuranceFund;
  }
  connect(signer: Signer): InsuranceFund__factory {
    return super.connect(signer) as InsuranceFund__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InsuranceFundInterface {
    return new utils.Interface(_abi) as InsuranceFundInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InsuranceFund {
    return new Contract(address, _abi, signerOrProvider) as InsuranceFund;
  }
}