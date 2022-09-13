/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AlphaOptionHandler,
  AlphaOptionHandlerInterface,
} from "../AlphaOptionHandler";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_authority",
        type: "address",
      },
      {
        internalType: "address",
        name: "_protocol",
        type: "address",
      },
      {
        internalType: "address",
        name: "_liquidityPool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidBuyer",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPrice",
    type: "error",
  },
  {
    inputs: [],
    name: "OrderExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "OrderExpiryTooLong",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "prod1",
        type: "uint256",
      },
    ],
    name: "PRBMath__MulDivFixedPointOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "SpotMovedBeyondRange",
    type: "error",
  },
  {
    inputs: [],
    name: "UNAUTHORIZED",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IAuthority",
        name: "authority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "OrderCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "orderId",
        type: "uint256",
      },
    ],
    name: "OrderExecuted",
    type: "event",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract IAuthority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "collateralAsset",
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
        components: [
          {
            internalType: "uint64",
            name: "expiration",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "strike",
            type: "uint128",
          },
          {
            internalType: "bool",
            name: "isPut",
            type: "bool",
          },
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "strikeAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateral",
            type: "address",
          },
        ],
        internalType: "struct Types.OptionSeries",
        name: "_optionSeries",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_orderExpiry",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_buyerAddress",
        type: "address",
      },
      {
        internalType: "bool",
        name: "_isBuyBack",
        type: "bool",
      },
      {
        internalType: "uint256[2]",
        name: "_spotMovementRange",
        type: "uint256[2]",
      },
    ],
    name: "createOrder",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "expiration",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "strike",
            type: "uint128",
          },
          {
            internalType: "bool",
            name: "isPut",
            type: "bool",
          },
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "strikeAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateral",
            type: "address",
          },
        ],
        internalType: "struct Types.OptionSeries",
        name: "_optionSeriesCall",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint64",
            name: "expiration",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "strike",
            type: "uint128",
          },
          {
            internalType: "bool",
            name: "isPut",
            type: "bool",
          },
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "strikeAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateral",
            type: "address",
          },
        ],
        internalType: "struct Types.OptionSeries",
        name: "_optionSeriesPut",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_amountCall",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amountPut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_priceCall",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pricePut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_orderExpiry",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_buyerAddress",
        type: "address",
      },
      {
        internalType: "uint256[2]",
        name: "_callSpotMovementRange",
        type: "uint256[2]",
      },
      {
        internalType: "uint256[2]",
        name: "_putSpotMovementRange",
        type: "uint256[2]",
      },
    ],
    name: "createStrangle",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "customOrderBounds",
    outputs: [
      {
        internalType: "uint128",
        name: "callMinDelta",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "callMaxDelta",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "putMinDelta",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "putMaxDelta",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "maxPriceRange",
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
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "executeBuyBackOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId",
        type: "uint256",
      },
    ],
    name: "executeOrder",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_orderId1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_orderId2",
        type: "uint256",
      },
    ],
    name: "executeStrangle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "liquidityPool",
    outputs: [
      {
        internalType: "contract ILiquidityPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "orderIdCounter",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "orderStores",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "expiration",
            type: "uint64",
          },
          {
            internalType: "uint128",
            name: "strike",
            type: "uint128",
          },
          {
            internalType: "bool",
            name: "isPut",
            type: "bool",
          },
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "strikeAsset",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateral",
            type: "address",
          },
        ],
        internalType: "struct Types.OptionSeries",
        name: "optionSeries",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "orderExpiry",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "address",
        name: "seriesAddress",
        type: "address",
      },
      {
        internalType: "uint128",
        name: "lowerSpotMovementRange",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "upperSpotMovementRange",
        type: "uint128",
      },
      {
        internalType: "bool",
        name: "isBuyBack",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocol",
    outputs: [
      {
        internalType: "contract Protocol",
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
        internalType: "contract IAuthority",
        name: "_newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint128",
        name: "_callMinDelta",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "_callMaxDelta",
        type: "uint128",
      },
      {
        internalType: "int128",
        name: "_putMinDelta",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "_putMaxDelta",
        type: "int128",
      },
      {
        internalType: "uint32",
        name: "_maxPriceRange",
        type: "uint32",
      },
    ],
    name: "setCustomOrderBounds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "strikeAsset",
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
    inputs: [],
    name: "underlyingAsset",
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
];

const _bytecode =
  "0x6101c060405260006101208190526703782dace9d90000610140526703782dace9d8ffff196101605261018052666a94d74f4300006101a08190526503782dace9d960901b6004556ffffffffffffffffffc87d253162700006005556006553480156200006b57600080fd5b50604051620026ac380380620026ac8339810160408190526200008e91620002c1565b600080546001600160a01b0319166001600160a01b03851690811790915560405190815283907f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad9060200160405180910390a150600180556001600160a01b0380831660a052811660808190526040805163555d766b60e11b8152905163aabaecd691600480820192602092909190829003018186803b1580156200013257600080fd5b505afa15801562000147573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200016d91906200030b565b6001600160a01b0316610100816001600160a01b0316815250506080516001600160a01b0316637158da7c6040518163ffffffff1660e01b815260040160206040518083038186803b158015620001c357600080fd5b505afa158015620001d8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001fe91906200030b565b6001600160a01b031660e0816001600160a01b0316815250506080516001600160a01b03166317d69bc86040518163ffffffff1660e01b815260040160206040518083038186803b1580156200025357600080fd5b505afa15801562000268573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200028e91906200030b565b6001600160a01b031660c0525062000330915050565b80516001600160a01b0381168114620002bc57600080fd5b919050565b600080600060608486031215620002d757600080fd5b620002e284620002a4565b9250620002f260208501620002a4565b91506200030260408501620002a4565b90509250925092565b6000602082840312156200031e57600080fd5b6200032982620002a4565b9392505050565b60805160a05160c05160e0516101005161229662000416600039600081816102ea0152818161067b0152818161090601528181610d4501528181610da30152610f68015260008181610276015281816105c8015281816108a801528181610c9201528181610f0a01526110d601526000818161010a015281816105e9015281816108d701528181610cb301528181610f3901526110f70152600081816102b0015281816114550152818161165601526117220152600081816101630152818161071f0152818161078a01528181610dc501528181610dec015261103101526122966000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063aabaecd611610097578063bf7e214f11610066578063bf7e214f146103a6578063d02f2b4c146103b9578063dc56726f146103cc578063f6bcece3146103f457600080fd5b8063aabaecd6146102e5578063b342805c1461030c578063b851274e1461032d578063be3744231461039d57600080fd5b80637158da7c116100d35780637158da7c146102715780637a9e5e4b146102985780638ce74426146102ab57806394f61134146102d257600080fd5b806317d69bc8146101055780633a40cb2314610149578063665a11ca1461015e5780636ddd19af14610185575b600080fd5b61012c7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b61015c610157366004611a91565b610407565b005b61012c7f000000000000000000000000000000000000000000000000000000000000000081565b61025c610193366004611a91565b600360208181526000928352604092839020835160c081018552815467ffffffffffffffff811682526001600160801b03600160401b820481169483019490945260ff600160c01b909104811615159582019590955260018201546001600160a01b03908116606083015260028301548116608083015293820154841660a0820152600482015460058301546006840154600785015460088601546009870154600a9097015495999498939792969184169593169381831693600160801b909204909216911689565b60405161014099989796959493929190611b07565b61012c7f000000000000000000000000000000000000000000000000000000000000000081565b61015c6102a6366004611b88565b610a79565b61012c7f000000000000000000000000000000000000000000000000000000000000000081565b61015c6102e0366004611a91565b610ad5565b61012c7f000000000000000000000000000000000000000000000000000000000000000081565b61031f61031a366004611d1a565b610fd7565b604051908152602001610140565b600454600554600654610363926001600160801b0380821693600160801b9283900490911692600f82810b9390920490910b9085565b604080516001600160801b039687168152959094166020860152600f92830b93850193909352900b6060830152608082015260a001610140565b61031f60025481565b60005461012c906001600160a01b031681565b61015c6103c7366004611d96565b6113bb565b6103df6103da366004611db8565b6113d1565b60408051928352602083019190915201610140565b61015c610402366004611e72565b611416565b6002600154141561045f5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b6002600181815560008381526003602081815260409283902083516101e081018552815467ffffffffffffffff811661012083019081526001600160801b03600160401b8304811661014085015260ff600160c01b90930483161515610160850152978401546001600160a01b039081166101808501529884015489166101a08401529483015488166101c0830152938152600482015492810192909252600581015493820193909352600683015460608201526007830154851660808201819052600884015490951660a0820152600983015480851660c0830152600160801b900490931660e0840152600a90910154161515610100820152903314610579576040516358ef870360e11b815260040160405180910390fd5b806060015142111561059e576040516362b439dd60e11b815260040160405180910390fd5b8061010001516105c15760405163af61069360e01b815260040160405180910390fd5b600061060d7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611451565b9050808260c001516001600160801b031611806106365750808260e001516001600160801b0316105b1561065457604051633a5eb29d60e21b815260040160405180910390fd5b60006106718360400151846020015161157090919063ffffffff16565b90506000610712827f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156106d257600080fd5b505afa1580156106e6573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061070a9190611ee8565b60ff1661157c565b90506107888460a00151337f000000000000000000000000000000000000000000000000000000000000000061078388602001518960a001516001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156106d257600080fd5b6115b8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635733af2a856000015186602001516107c9611652565b8860a00151866000336040518863ffffffff1660e01b81526004016107f49796959493929190611f0b565b602060405180830381600087803b15801561080e57600080fd5b505af1158015610822573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108469190611f59565b5060006040518060c0016040528086600001516000015167ffffffffffffffff1681526020016108888760000151602001516001600160801b031660086116ea565b6001600160801b03168152602001866000015160400151151581526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316815250905061093b61171e565b6001600160a01b031663dce66fb882876020015161095890611f88565b60008960a001516040518563ffffffff1660e01b815260040161097e9493929190611fa5565b600060405180830381600087803b15801561099857600080fd5b505af11580156109ac573d6000803e3d6000fd5b505050507ff03ed60bf824bdd2c1387f3534cb0fd2ab10270e8ce0cb8b2daec90068eb943e866040516109e191815260200190565b60405180910390a150505060009283525050600360208190526040822080546001600160c81b0319168155600180820180546001600160a01b031990811690915560028301805482169055928201805484169055600482018490556005820184905560068201849055600782018054841690556008820180549093169092556009810192909255600a909101805460ff191690558055565b610a81611779565b600080546001600160a01b0319166001600160a01b0383169081179091556040519081527f2f658b440c35314f52658ea8a740e05b284cdc84dc9ae01e891f21b8933e7cad9060200160405180910390a150565b60026001541415610b285760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610456565b6002600181815560008381526003602081815260409283902083516101e081018552815467ffffffffffffffff811661012083019081526001600160801b03600160401b8304811661014085015260ff600160c01b90930483161515610160850152978401546001600160a01b039081166101808501529884015489166101a08401529483015488166101c0830152938152600482015492810192909252600581015493820193909352600683015460608201526007830154851660808201819052600884015490951660a0820152600983015480851660c0830152600160801b900490931660e0840152600a90910154161515610100820152903314610c42576040516358ef870360e11b815260040160405180910390fd5b8060600151421115610c67576040516362b439dd60e11b815260040160405180910390fd5b80610100015115610c8b5760405163af61069360e01b815260040160405180910390fd5b6000610cd77f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611451565b9050808260c001516001600160801b03161180610d005750808260e001516001600160801b0316105b15610d1e57604051633a5eb29d60e21b815260040160405180910390fd5b6000610d3b8360400151846020015161157090919063ffffffff16565b90506000610d9c827f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b1580156106d257600080fd5b9050610dea7f0000000000000000000000000000000000000000000000000000000000000000337f0000000000000000000000000000000000000000000000000000000000000000846115b8565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663bdb4246185600001518660a001518760200151610e30611652565b866000336040518863ffffffff1660e01b8152600401610e569796959493929190611fd9565b602060405180830381600087803b158015610e7057600080fd5b505af1158015610e84573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ea89190611f59565b5060006040518060c0016040528086600001516000015167ffffffffffffffff168152602001610eea8760000151602001516001600160801b031660086116ea565b6001600160801b03168152602001866000015160400151151581526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031681526020017f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168152509050610f9d61171e565b6001600160a01b031663dce66fb882876020015160008960a001516040518563ffffffff1660e01b815260040161097e9493929190611fa5565b6000610fe1611830565b85610ffe5760405162bfc92160e01b815260040160405180910390fd5b61070885111561102157604051639f2ace9560e01b815260040160405180910390fd5b600061102b611652565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166370183e0a8b6040518263ffffffff1660e01b815260040161107b919061202a565b602060405180830381600087803b15801561109557600080fd5b505af11580156110a9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110cd9190612038565b9050600061111b7f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000611451565b6040805161012081019182905263dac9675b60e01b9091526001600160a01b038481166101248301529192506000918190861663dac9675b610144830160c06040518083038186803b15801561117057600080fd5b505afa158015611184573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111a89190612055565b81526020018c81526020018b81526020018a426111c59190612100565b81526001600160a01b038a811660208301528516604082015287516060909101906111f09085612118565b6001600160801b0316815260200187600160200201516112109085612100565b6001600160801b031681526020018815158152509050600060025460016112379190612100565b600081815260036020818152604092839020865180518254828501518388015167ffffffffffffffff9093166001600160c01b031990921691909117600160401b6001600160801b03928316021760ff60c01b1916600160c01b921515929092029190911783556060808301516001850180546001600160a01b03199081166001600160a01b0393841617909155608080860151600288018054841691851691909117905560a09586015198870180548316998416999099179098558b87015160048701558b8901516005870155918b01516006860155958a0151600785018054831691881691909117905591890151600884018054909316951694909417905560c087015160e0880151908416600160801b9190941602929092176009830155610100860151600a909201805460ff19169215159290921790915590518281529192507f7e82078c35b6665b9d320ebeaa6c266960fad5b802c5558cf7df60c4769af95b910160405180910390a160028190559c9b505050505050505050505050565b6113c482610ad5565b6113cd81610ad5565b5050565b6000806113dc611830565b60006113ee8d8c8b8a8a60008b610fd7565b905060006114028d8c8b8b8b60008b610fd7565b9e919d50909b505050505050505050505050565b61141e611779565b6001600160801b03948516600160801b94861685021760045591841693169091029190911760055563ffffffff16600655565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663741bef1a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156114ac57600080fd5b505afa1580156114c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e49190612038565b60405163051ce29b60e21b81526001600160a01b038581166004830152848116602483015291909116906314738a6c9060440160206040518083038186803b15801561152f57600080fd5b505afa158015611543573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115679190611f59565b90505b92915050565b60006115678383611988565b6000601282111561158c57600080fd5b6000611599836012612118565b90506115a681600a612213565b6115b0908561221f565b949350505050565b600084905060006040516323b872dd60e01b81526001600160a01b03861660048201526001600160a01b03851660248201528360448201526000806064836000875af191505061160781611a4a565b61164a5760405162461bcd60e51b81526020600482015260146024820152731514905394d1915497d19493d357d1905253115160621b6044820152606401610456565b505050505050565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316633b4567b06040518163ffffffff1660e01b815260040160206040518083038186803b1580156116ad57600080fd5b505afa1580156116c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e59190612038565b905090565b600060128211156116fa57600080fd5b6000611707836012612118565b905061171481600a612213565b6115b09085612241565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316635fb480c96040518163ffffffff1660e01b815260040160206040518083038186803b1580156116ad57600080fd5b60008054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b1580156117c557600080fd5b505afa1580156117d9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117fd9190612038565b6001600160a01b0316336001600160a01b03161461182e5760405163075fd2b160e01b815260040160405180910390fd5b565b60008054906101000a90046001600160a01b03166001600160a01b031663481c6a756040518163ffffffff1660e01b815260040160206040518083038186803b15801561187c57600080fd5b505afa158015611890573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118b49190612038565b6001600160a01b0316336001600160a01b03161415801561196a575060008054906101000a90046001600160a01b03166001600160a01b0316630c340a246040518163ffffffff1660e01b815260040160206040518083038186803b15801561191c57600080fd5b505afa158015611930573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119549190612038565b6001600160a01b0316336001600160a01b031614155b1561182e5760405163075fd2b160e01b815260040160405180910390fd5b60008080600019848609848602925082811083820303915050670de0b6b3a764000081106119cc5760405163698d9a0160e11b815260048101829052602401610456565b600080670de0b6b3a76400008688099150506706f05b59d3b1ffff811182611a065780670de0b6b3a764000085040194505050505061156a565b620400008285030493909111909103600160ee1b02919091177faccb18165bd6fe31ae1cf318dc5b51eee0e1ba569b88cd74c1773b91fac106690201905092915050565b60003d82611a5c57806000803e806000fd5b8060208114611a74578015611a855760009250611a8a565b816000803e60005115159250611a8a565b600192505b5050919050565b600060208284031215611aa357600080fd5b5035919050565b805167ffffffffffffffff1682526020808201516001600160801b0316908301526040808201511515908301526060808201516001600160a01b039081169184019190915260808083015182169084015260a09182015116910152565b6101c08101611b16828c611aaa565b60c082019990995260e08101979097526101008701959095526001600160a01b03938416610120870152919092166101408501526001600160801b039182166101608501521661018083015215156101a090910152919050565b6001600160a01b0381168114611b8557600080fd5b50565b600060208284031215611b9a57600080fd5b8135611ba581611b70565b9392505050565b634e487b7160e01b600052604160045260246000fd5b67ffffffffffffffff81168114611b8557600080fd5b6001600160801b0381168114611b8557600080fd5b8015158114611b8557600080fd5b600060c08284031215611c0d57600080fd5b60405160c0810181811067ffffffffffffffff82111715611c3057611c30611bac565b6040529050808235611c4181611bc2565b81526020830135611c5181611bd8565b60208201526040830135611c6481611bed565b60408201526060830135611c7781611b70565b60608201526080830135611c8a81611b70565b608082015260a0830135611c9d81611b70565b60a0919091015292915050565b600082601f830112611cbb57600080fd5b6040516040810181811067ffffffffffffffff82111715611cde57611cde611bac565b8060405250806040840185811115611cf557600080fd5b845b81811015611d0f578035835260209283019201611cf7565b509195945050505050565b60008060008060008060006101a0888a031215611d3657600080fd5b611d408989611bfb565b965060c0880135955060e088013594506101008801359350610120880135611d6781611b70565b9250610140880135611d7881611bed565b9150611d88896101608a01611caa565b905092959891949750929550565b60008060408385031215611da957600080fd5b50508035926020909101359150565b6000806000806000806000806000806102c08b8d031215611dd857600080fd5b611de28c8c611bfb565b9950611df18c60c08d01611bfb565b98506101808b013597506101a08b013596506101c08b013595506101e08b013594506102008b013593506102208b0135611e2a81611b70565b9250611e3a8c6102408d01611caa565b9150611e4a8c6102808d01611caa565b90509295989b9194979a5092959850565b8035600f81900b8114611e6d57600080fd5b919050565b600080600080600060a08688031215611e8a57600080fd5b8535611e9581611bd8565b94506020860135611ea581611bd8565b9350611eb360408701611e5b565b9250611ec160608701611e5b565b9150608086013563ffffffff81168114611eda57600080fd5b809150509295509295909350565b600060208284031215611efa57600080fd5b815160ff81168114611ba557600080fd5b6101808101611f1a828a611aaa565b60c08201979097526001600160a01b0395861660e082015293851661010085015261012084019290925261014083015290911661016090910152919050565b600060208284031215611f6b57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b821415611f9e57611f9e611f72565b5060000390565b6101208101611fb48287611aaa565b60c082019490945260e08101929092526001600160a01b031661010090910152919050565b6101808101611fe8828a611aaa565b6001600160a01b0397881660c083015260e082019690965293861661010085015261012084019290925261014083015290921661016090920191909152919050565b60c0810161156a8284611aaa565b60006020828403121561204a57600080fd5b8151611ba581611b70565b600060c0828403121561206757600080fd5b60405160c0810181811067ffffffffffffffff8211171561208a5761208a611bac565b604052825161209881611bc2565b815260208301516120a881611bd8565b602082015260408301516120bb81611bed565b604082015260608301516120ce81611b70565b606082015260808301516120e181611b70565b608082015260a08301516120f481611b70565b60a08201529392505050565b6000821982111561211357612113611f72565b500190565b60008282101561212a5761212a611f72565b500390565b600181815b8085111561216a57816000190482111561215057612150611f72565b8085161561215d57918102915b93841c9390800290612134565b509250929050565b6000826121815750600161156a565b8161218e5750600061156a565b81600181146121a457600281146121ae576121ca565b600191505061156a565b60ff8411156121bf576121bf611f72565b50506001821b61156a565b5060208310610133831016604e8410600b84101617156121ed575081810a61156a565b6121f7838361212f565b806000190482111561220b5761220b611f72565b029392505050565b60006115678383612172565b60008261223c57634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561225b5761225b611f72565b50029056fea2646970667358221220c66fd35d5d5a225cd4576a21bf94b0329c409c08cf65ecb1d68f1d261b56c98a64736f6c63430008090033";

type AlphaOptionHandlerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AlphaOptionHandlerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AlphaOptionHandler__factory extends ContractFactory {
  constructor(...args: AlphaOptionHandlerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _authority: string,
    _protocol: string,
    _liquidityPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AlphaOptionHandler> {
    return super.deploy(
      _authority,
      _protocol,
      _liquidityPool,
      overrides || {}
    ) as Promise<AlphaOptionHandler>;
  }
  getDeployTransaction(
    _authority: string,
    _protocol: string,
    _liquidityPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _authority,
      _protocol,
      _liquidityPool,
      overrides || {}
    );
  }
  attach(address: string): AlphaOptionHandler {
    return super.attach(address) as AlphaOptionHandler;
  }
  connect(signer: Signer): AlphaOptionHandler__factory {
    return super.connect(signer) as AlphaOptionHandler__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AlphaOptionHandlerInterface {
    return new utils.Interface(_abi) as AlphaOptionHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AlphaOptionHandler {
    return new Contract(address, _abi, signerOrProvider) as AlphaOptionHandler;
  }
}