/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ClearingHouseLens,
  ClearingHouseLensInterface,
} from "../ClearingHouseLens";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IClearingHouse",
        name: "_clearingHouse",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    inputs: [
      {
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "collateralId",
        type: "uint32",
      },
    ],
    name: "getAccountCollateralBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "balance",
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
        name: "accountId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "collateralId",
        type: "uint32",
      },
    ],
    name: "getAccountCollateralInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "collateral",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
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
        name: "accountId",
        type: "uint256",
      },
    ],
    name: "getAccountInfo",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "int256",
        name: "vQuoteBalance",
        type: "int256",
      },
      {
        internalType: "uint32[]",
        name: "activeCollateralIds",
        type: "uint32[]",
      },
      {
        internalType: "uint32[]",
        name: "activePoolIds",
        type: "uint32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "poolId",
        type: "uint32",
      },
      {
        internalType: "int24",
        name: "tickLower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "tickUpper",
        type: "int24",
      },
    ],
    name: "getAccountLiquidityPositionInfo",
    outputs: [
      {
        internalType: "uint8",
        name: "limitOrderType",
        type: "uint8",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "int256",
        name: "vTokenAmountIn",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "sumALastX128",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "sumBInsideLastX128",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "sumFpInsideLastX128",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "sumFeeInsideLastX128",
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
        name: "accountId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "poolId",
        type: "uint32",
      },
    ],
    name: "getAccountLiquidityPositionList",
    outputs: [
      {
        components: [
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
        ],
        internalType: "struct IClearingHouseStructures.TickRange[]",
        name: "activeTickRanges",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "poolId",
        type: "uint32",
      },
    ],
    name: "getAccountPositionInfo",
    outputs: [
      {
        internalType: "int256",
        name: "balance",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "netTraderPosition",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "sumALastX128",
        type: "int256",
      },
      {
        components: [
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
        ],
        internalType: "struct IClearingHouseStructures.TickRange[]",
        name: "activeTickRanges",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accountId",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "poolId",
        type: "uint32",
      },
    ],
    name: "getAccountTokenPositionInfo",
    outputs: [
      {
        internalType: "int256",
        name: "balance",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "netTraderPosition",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "sumALastX128",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "collateralId",
        type: "uint32",
      },
    ],
    name: "getCollateralInfo",
    outputs: [
      {
        components: [
          {
            internalType: "contract IERC20",
            name: "token",
            type: "address",
          },
          {
            components: [
              {
                internalType: "contract IOracle",
                name: "oracle",
                type: "address",
              },
              {
                internalType: "uint32",
                name: "twapDuration",
                type: "uint32",
              },
              {
                internalType: "bool",
                name: "isAllowedForDeposit",
                type: "bool",
              },
            ],
            internalType: "struct IClearingHouseStructures.CollateralSettings",
            name: "settings",
            type: "tuple",
          },
        ],
        internalType: "struct IClearingHouseStructures.Collateral",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "poolId",
        type: "uint32",
      },
    ],
    name: "getPoolInfo",
    outputs: [
      {
        components: [
          {
            internalType: "contract IVToken",
            name: "vToken",
            type: "address",
          },
          {
            internalType: "contract IUniswapV3Pool",
            name: "vPool",
            type: "address",
          },
          {
            internalType: "contract IVPoolWrapper",
            name: "vPoolWrapper",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint16",
                name: "initialMarginRatioBps",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "maintainanceMarginRatioBps",
                type: "uint16",
              },
              {
                internalType: "uint16",
                name: "maxVirtualPriceDeviationRatioBps",
                type: "uint16",
              },
              {
                internalType: "uint32",
                name: "twapDuration",
                type: "uint32",
              },
              {
                internalType: "bool",
                name: "isAllowedForTrade",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isCrossMargined",
                type: "bool",
              },
              {
                internalType: "contract IOracle",
                name: "oracle",
                type: "address",
              },
            ],
            internalType: "struct IClearingHouseStructures.PoolSettings",
            name: "settings",
            type: "tuple",
          },
        ],
        internalType: "struct IClearingHouseStructures.Pool",
        name: "pool",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "poolId",
        type: "uint32",
      },
    ],
    name: "getPoolSettings",
    outputs: [
      {
        components: [
          {
            internalType: "uint16",
            name: "initialMarginRatioBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "maintainanceMarginRatioBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "maxVirtualPriceDeviationRatioBps",
            type: "uint16",
          },
          {
            internalType: "uint32",
            name: "twapDuration",
            type: "uint32",
          },
          {
            internalType: "bool",
            name: "isAllowedForTrade",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isCrossMargined",
            type: "bool",
          },
          {
            internalType: "contract IOracle",
            name: "oracle",
            type: "address",
          },
        ],
        internalType: "struct IClearingHouseStructures.PoolSettings",
        name: "settings",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProtocolInfo",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "settlementToken",
        type: "address",
      },
      {
        internalType: "contract IVQuote",
        name: "vQuote",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "rangeLiquidationFeeFraction",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "tokenLiquidationFeeFraction",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "closeFactorMMThresholdBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "partialLiquidationCloseFactorBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "insuranceFundFeeShareBps",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "liquidationSlippageSqrtToleranceBps",
            type: "uint16",
          },
          {
            internalType: "uint64",
            name: "maxRangeLiquidationFees",
            type: "uint64",
          },
          {
            internalType: "uint64",
            name: "minNotionalLiquidatable",
            type: "uint64",
          },
        ],
        internalType: "struct IClearingHouseStructures.LiquidationParams",
        name: "liquidationParams",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "minRequiredMargin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "removeLimitOrderFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minimumOrderNotional",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "poolId",
        type: "uint32",
      },
    ],
    name: "getTwapDuration",
    outputs: [
      {
        internalType: "uint32",
        name: "twapDuration",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "poolId",
        type: "uint32",
      },
    ],
    name: "getVPool",
    outputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "vPool",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "poolId",
        type: "uint32",
      },
    ],
    name: "getVPoolAndTwapDuration",
    outputs: [
      {
        internalType: "contract IUniswapV3Pool",
        name: "vPool",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "twapDuration",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "poolId",
        type: "uint32",
      },
    ],
    name: "isPoolIdAvailable",
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
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b506040516200265938038062002659833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b60805161255c620000fd60003960008181610137015281816103d70152818161041801528181610468015281816104aa015281816104f60152818161054a0152818161058b015281816105cf015281816106040152818161063f015281816106a5015281816106e0015281816107150152818161074d0152610791015261255c6000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063440ab74511610097578063bd138ffc11610066578063bd138ffc14610328578063e933085614610348578063e9b7c36714610368578063f59c97ec1461039657600080fd5b8063440ab7451461027d5780638b139a48146102a0578063b670ed52146102b3578063bc38d542146102d357600080fd5b806321782670116100d357806321782670146101c257806323b161b9146101e55780632b51132c146102395780633b561afc1461025a57600080fd5b8063040c2d4a146101055780630af96800146101325780630dca69f9146101715780631057ec401461018b575b600080fd5b61011861011336600461209a565b6103c8565b60405163ffffffff90911681526020015b60405180910390f35b6101597f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b039091168152602001610129565b610179610403565b604051610129969594939291906120b5565b61019e61019936600461209a565b610458565b604080516001600160a01b03909316835263ffffffff909116602083015201610129565b6101d56101d036600461217c565b610497565b60405161012994939291906121f6565b6101f86101f3366004612237565b6104e1565b6040805160ff90981688526001600160801b039096166020880152948601939093526060850191909152608084015260a083015260c082015260e001610129565b61024c61024736600461217c565b61053b565b604051908152602001610129565b61026d610268366004612284565b610578565b60405161012994939291906122d3565b61029061028b36600461209a565b6105c0565b6040519015158152602001610129565b6101596102ae36600461209a565b6105f5565b6102c66102c136600461209a565b61062a565b6040516101299190612377565b6102e66102e136600461209a565b610665565b6040805182516001600160a01b0390811682526020938401518051909116848301529283015163ffffffff168183015291015115156060820152608001610129565b61033b61033636600461209a565b6106cb565b60405161012991906123be565b61035b61035636600461217c565b610706565b60405161012991906123cc565b61037b61037636600461217c565b61073c565b60408051938452602084019290925290820152606001610129565b6103a96103a436600461217c565b610781565b604080516001600160a01b039093168352602083019190915201610129565b60006103fd6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016836107c3565b92915050565b60008061040e611fd3565b60008060006104457f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610868565b949b939a50919850965094509092509050565b60008061048e6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001684610a8f565b91509150915091565b6000808060606104d16001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168787610bd1565b9299919850965090945092505050565b600080808080808061051f6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168c8c8c8c610d83565b9650965096509650965096509650949950949992975094509450565b60006105716001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484610ff5565b9392505050565b6000806060806105b16001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001686611086565b93509350935093509193509193565b60006103fd6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168361123b565b60006103fd6001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016836112c5565b610632612017565b6103fd6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001683611344565b61069860408051808201825260008082528251606081018452818152602081810183905293810191909152909182015290565b6103fd6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001683611519565b6106d3612045565b6103fd6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001683611683565b60606105716001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168484611710565b600080806107746001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016868661179f565b9250925092509250925092565b6000806107b86001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000168585611907565b915091509250929050565b600080836001600160a01b0316631e2eaeaf6107e760036107e387611a32565b0190565b6040518263ffffffff1660e01b815260040161080591815260200190565b602060405180830381865afa158015610822573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061084691906123df565b905061086063ffffffff60b083901c16611a5f565b611a5f565b949350505050565b600080610873611fd3565b60408051600680825260e08201909252600091829182918291906020820160c0803683370190505090506067816000815181106108b2576108b261240e565b60209081029190910101526068816001815181106108d2576108d261240e565b60209081029190910101526069816002815181106108f2576108f261240e565b6020908102919091010152606a816003815181106109125761091261240e565b6020908102919091010152606b816004815181106109325761093261240e565b6020908102919091010152606c816005815181106109525761095261240e565b602090810291909101015260405163dbd035ff60e01b81526001600160a01b0389169063dbd035ff90610989908490600401612424565b600060405180830381865afa1580156109a6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109ce9190810190612468565b90506109f3816000815181106109e6576109e661240e565b6020026020010151611a67565b9650610a0b816001815181106109e6576109e661240e565b9550610a3081600281518110610a2357610a2361240e565b6020026020010151611a72565b9450610a5381600381518110610a4857610a4861240e565b602002602001015190565b9350610a6b81600481518110610a4857610a4861240e565b9250610a8381600581518110610a4857610a4861240e565b91505091939550919395565b6040805160028082526060820183526000928392839290916020830190803683370190505090506000610ac185611a32565b90506001810182600081518110610ada57610ada61240e565b60209081029190910101526003810182600181518110610afc57610afc61240e565b602090810291909101015260405163dbd035ff60e01b81526001600160a01b0387169063dbd035ff90610b33908590600401612424565b600060405180830381865afa158015610b50573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b789190810190612468565b9150610b90826000815181106109e6576109e661240e565b9350610bc661085b60b060d085600181518110610baf57610baf61240e565b6020026020010151611a509092919063ffffffff16565b925050509250929050565b600080600060606000610bec610be688611b34565b87611b47565b60408051600480825260a0820190925291925060009190602082016080803683370190505090508181600081518110610c2757610c2761240e565b60209081029190910101526001820181600181518110610c4957610c4961240e565b60209081029190910101526002820181600281518110610c6b57610c6b61240e565b60209081029190910101526003820181600381518110610c8d57610c8d61240e565b602090810291909101015260405163dbd035ff60e01b81526001600160a01b038a169063dbd035ff90610cc4908490600401612424565b600060405180830381865afa158015610ce1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610d099190810190612468565b9050610d2181600081518110610a4857610a4861240e565b9550610d3981600181518110610a4857610a4861240e565b9450610d5181600281518110610a4857610a4861240e565b9350610d7681600381518110610d6957610d6961240e565b6020026020010151611b5c565b9250505093509350935093565b600080600080600080600080610dab610da4610d9e8e611b34565b8d611b47565b8b8b611c9b565b60408051600680825260e08201909252919250600091906020820160c0803683370190505090508181600081518110610de657610de661240e565b60209081029190910101526001820181600181518110610e0857610e0861240e565b60209081029190910101526002820181600281518110610e2a57610e2a61240e565b60209081029190910101526003820181600381518110610e4c57610e4c61240e565b60209081029190910101526004820181600481518110610e6e57610e6e61240e565b60209081029190910101526005820181600581518110610e9057610e9061240e565b602090810291909101015260405163dbd035ff60e01b81526001600160a01b038f169063dbd035ff90610ec7908490600401612424565b600060405180830381865afa158015610ee4573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610f0c9190810190612468565b90506000610f4c82600081518110610f2657610f2661240e565b602002602001015160408051602080820183526000909152815190810190915290815290565b9050610f5781611cbd565b815160301c82529950610f6981611cd3565b9850610f8182600181518110610a4857610a4861240e565b9750610f9982600281518110610a4857610a4861240e565b9650610fb182600381518110610a4857610a4861240e565b9550610fc982600481518110610a4857610a4861240e565b9450610fe182600581518110610a4857610a4861240e565b9350505050959b949a509550955095509550565b60008061100a61100485611b34565b84611ce2565b604051631e2eaeaf60e01b81526004810182905290915061107d906001600160a01b03871690631e2eaeaf90602401602060405180830381865afa158015611056573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061107a91906123df565b90565b95945050505050565b60408051600480825260a082019092526000918291606091829184916020820160808036833701905050905060006110bd87611b34565b905080826000815181106110d3576110d361240e565b602090810291909101015260038101826001815181106110f5576110f561240e565b602090810291909101015260688101826002815181106111175761111761240e565b602090810291909101015260018101826003815181106111395761113961240e565b602090810291909101015260405163dbd035ff60e01b81526001600160a01b0389169063dbd035ff90611170908590600401612424565b600060405180830381865afa15801561118d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526111b59190810190612468565b91506111d96111d4600060a085600081518110610baf57610baf61240e565b611a67565b95506111f182600181518110610a4857610a4861240e565b9450611216826002815181106112095761120961240e565b6020026020010151611cf7565b935061122e826003815181106112095761120961240e565b9250505092959194509250565b60008061124c60006107e385611a32565b604051631e2eaeaf60e01b8152600481018290529091506000906001600160a01b03861690631e2eaeaf90602401602060405180830381865afa158015611297573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112bb91906123df565b1595945050505050565b600080836001600160a01b0316631e2eaeaf6112e560016107e387611a32565b6040518263ffffffff1660e01b815260040161130391815260200190565b602060405180830381865afa158015611320573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061086091906123df565b61134c612017565b600061135783611a32565b60408051600480825260a08201909252919250600091906020820160808036833701905050905081816000815181106113925761139261240e565b602090810291909101015260018201816001815181106113b4576113b461240e565b602090810291909101015260028201816002815181106113d6576113d661240e565b602090810291909101015260038201816003815181106113f8576113f861240e565b602090810291909101015260405163dbd035ff60e01b81526001600160a01b0386169063dbd035ff9061142f908490600401612424565b600060405180830381865afa15801561144c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114749190810190612468565b905061148c816000815181106109e6576109e661240e565b6001600160a01b0316835280516114b090829060019081106109e6576109e661240e565b6001600160a01b0316602084015280516114d790829060029081106109e6576109e661240e565b6001600160a01b03166040840152805161150b90829060039081106114fe576114fe61240e565b6020026020010151611dcd565b606084015250909392505050565b61154c60408051808201825260008082528251606081018452818152602081810183905293810191909152909182015290565b604080516002808252606082018352600092602083019080368337019050509050600061157884611e74565b9050808260008151811061158e5761158e61240e565b602090810291909101015260018101826001815181106115b0576115b061240e565b602090810291909101015260405163dbd035ff60e01b81526001600160a01b0386169063dbd035ff906115e7908590600401612424565b600060405180830381865afa158015611604573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261162c9190810190612468565b9150611644826000815181106109e6576109e661240e565b6001600160a01b03168352815161167590839060019081106116685761166861240e565b6020026020010151611e87565b602084015250909392505050565b61168b612045565b600061169b60036107e385611a32565b604051631e2eaeaf60e01b815260048101829052909150610860906001600160a01b03861690631e2eaeaf90602401602060405180830381865afa1580156116e7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061170b91906123df565b611dcd565b6060610860846001600160a01b0316631e2eaeaf61173b60036107e361173589611b34565b88611b47565b6040518263ffffffff1660e01b815260040161175991815260200190565b602060405180830381865afa158015611776573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179a91906123df565b611b5c565b6000806000806117b76117b187611b34565b86611b47565b60408051600380825260808201909252919250600091906020820160608036833701905050905081816000815181106117f2576117f261240e565b602090810291909101015260018201816001815181106118145761181461240e565b602090810291909101015260028201816002815181106118365761183661240e565b602090810291909101015260405163dbd035ff60e01b81526001600160a01b0389169063dbd035ff9061186d908490600401612424565b600060405180830381865afa15801561188a573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526118b29190810190612468565b90506118ca81600081518110610a4857610a4861240e565b94506118e281600181518110610a4857610a4861240e565b93506118fa81600281518110610a4857610a4861240e565b9250505093509350939050565b60408051600280825260608201835260009283928392909160208301908036833701905050905061194061193a86611b34565b85611ce2565b816000815181106119535761195361240e565b60200260200101818152505061196884611e74565b8160018151811061197b5761197b61240e565b602090810291909101015260405163dbd035ff60e01b81526001600160a01b0387169063dbd035ff906119b2908490600401612424565b600060405180830381865afa1580156119cf573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526119f79190810190612468565b9050611a0f81600081518110610a4857610a4861240e565b9150611a27816001815181106109e6576109e661240e565b925050935093915050565b60006103fd63ffffffff831660645b60009182526020526040902090565b91811b61010092909203011c90565b6000816103fd565b60006103fd82611a5f565b611a7a611fd3565b604080516020808201835260009091528151908101909152828152611a9e81611ef9565b61ffff168252611aad81611ef9565b61ffff166020830152611abf81611ef9565b61ffff166040830152611ad181611ef9565b61ffff166060830152611ae381611ef9565b61ffff166080830152611af581611ef9565b61ffff1660a0830152611b0781611f08565b67ffffffffffffffff1660c0830152611b1f81611f08565b67ffffffffffffffff1660e083015250919050565b600081815260d3602052604081206103fd565b600061057163ffffffff831660028501611a41565b606060055b8015611b915760306000198201810284811b91830261010003011c80611b875750611b91565b5060001901611b61565b8060050367ffffffffffffffff811115611bad57611bad6123f8565b604051908082528060200260200182016040528015611bf257816020015b6040805180820190915260008082526020820152815260200190600190039081611bcb5790505b5091505b6005811015611c9557600080611c2e611c2660308581026010810189901b6001880190920261010003011c611a5f565b601881901c91565b9150915081848460040381518110611c4857611c4861240e565b60200260200101516000019060020b908160020b8152505080848460040381518110611c7657611c7661240e565b60209081029190910181015160029290920b9101525050600101611bf6565b50919050565b600061086065ffffffffffff601885901b62ffffff8516011660048601611a41565b6000611ccc8260000151611f17565b9092525090565b6000611ccc8260000151611f30565b600061057163ffffffff831660698501611a41565b606060085b8015611d2c5760206000198201810284811b91830261010003011c80611d225750611d2c565b5060001901611cfc565b8060080367ffffffffffffffff811115611d4857611d486123f8565b604051908082528060200260200182016040528015611d71578160200160208202803683370190505b5091505b6008811015611c9557611d9b602082810285811b6001850190920261010003011c611a5f565b828260070381518110611db057611db061240e565b63ffffffff90921660209283029190910190910152600101611d75565b611dd5612045565b604080516020808201835260009091528151908101909152828152611df981611ef9565b61ffff168252611e0881611ef9565b61ffff166020830152611e1a81611ef9565b61ffff166040830152611e2c81611f48565b63ffffffff166060830152611e4081611f57565b15156080830152611e5081611f57565b151560a0830152611e6081611f6b565b6001600160a01b031660c083015250919050565b60006103fd63ffffffff83166065611a41565b60408051606081018252600080825260208083018290528284018290528351808201855291909152825190810190925282825290611ec481611f6b565b6001600160a01b03168252611ed881611f48565b63ffffffff166020830152611eec81611f57565b1515604083015250919050565b6000611ccc8260000151611f7a565b6000611ccc8260000151611f8d565b6000808060ff8416600885901c5b909590945092505050565b600080806001600160801b038416608085901c611f25565b6000611ccc8260000151611fa6565b805160009060ff811615159060081c611ccc565b6000611ccc8260000151611fbb565b6000808061ffff8416601085901c611f25565b6000808067ffffffffffffffff8416604085901c611f25565b6000808063ffffffff8416602085901c611f25565b600080806001600160a01b03841660a085901c611f25565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915290565b604080516080810182526000808252602082018190529181019190915260608101612040612045565b905290565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b803563ffffffff8116811461209557600080fd5b919050565b6000602082840312156120ac57600080fd5b61057182612081565b60006101a08201905060018060a01b03808916835280881660208401525061ffff80875116604084015280602088015116606084015280604088015116608084015250606086015161210d60a084018261ffff169052565b50608086015161ffff811660c08401525060a086015161ffff811660e08401525060c086015167ffffffffffffffff81166101008401525060e086015167ffffffffffffffff811661012084015250846101408301528361016083015282610180830152979650505050505050565b6000806040838503121561218f57600080fd5b8235915061219f60208401612081565b90509250929050565b600081518084526020808501945080840160005b838110156121eb5781518051600290810b895290840151900b83880152604090960195908201906001016121bc565b509495945050505050565b84815283602082015282604082015260806060820152600061221b60808301846121a8565b9695505050505050565b8035600281900b811461209557600080fd5b6000806000806080858703121561224d57600080fd5b8435935061225d60208601612081565b925061226b60408601612225565b915061227960608601612225565b905092959194509250565b60006020828403121561229657600080fd5b5035919050565b600081518084526020808501945080840160005b838110156121eb57815163ffffffff16875295820195908201906001016122b1565b60018060a01b03851681528360208201526080604082015260006122fa608083018561229d565b828103606084015261230c818561229d565b979650505050505050565b61ffff8082511683528060208301511660208401528060408301511660408401525063ffffffff606082015116606083015260808101511515608083015260a0810151151560a083015260018060a01b0360c08201511660c08301525050565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060808301516101408301916123b790840182612317565b5092915050565b60e081016103fd8284612317565b60208152600061057160208301846121a8565b6000602082840312156123f157600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6020808252825182820181905260009190848201906040850190845b8181101561245c57835183529284019291840191600101612440565b50909695505050505050565b6000602080838503121561247b57600080fd5b825167ffffffffffffffff8082111561249357600080fd5b818501915085601f8301126124a757600080fd5b8151818111156124b9576124b96123f8565b8060051b604051601f19603f830116810181811085821117156124de576124de6123f8565b6040529182528482019250838101850191888311156124fc57600080fd5b938501935b8285101561251a57845184529385019392850192612501565b9897505050505050505056fea264697066735822122072b52780b0f1af11b3ee76eb90017f47a37411564d2e42a1c1e22ac389dcb76764736f6c634300080e0033";

type ClearingHouseLensConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClearingHouseLensConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClearingHouseLens__factory extends ContractFactory {
  constructor(...args: ClearingHouseLensConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    _clearingHouse: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ClearingHouseLens> {
    return super.deploy(
      _clearingHouse,
      overrides || {}
    ) as Promise<ClearingHouseLens>;
  }
  getDeployTransaction(
    _clearingHouse: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_clearingHouse, overrides || {});
  }
  attach(address: string): ClearingHouseLens {
    return super.attach(address) as ClearingHouseLens;
  }
  connect(signer: Signer): ClearingHouseLens__factory {
    return super.connect(signer) as ClearingHouseLens__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClearingHouseLensInterface {
    return new utils.Interface(_abi) as ClearingHouseLensInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ClearingHouseLens {
    return new Contract(address, _abi, signerOrProvider) as ClearingHouseLens;
  }
}