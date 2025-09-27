// Celo Sepolia Mock Passport Contract Config
// Source: https://celo-sepolia.blockscout.com/address/0x16ECBA51e18a4a7e61fdC417f0d47AFEeDfbed74

export const CELO_SEPOLIA_PASSPORT_ADDRESS =
  "0x16ECBA51e18a4a7e61fdC417f0d47AFEeDfbed74" as const;

// Provided ABI (looks like an upgradeable proxy with fallback)
export const CELO_SEPOLIA_PASSPORT_ABI = [
  {
    inputs: [
      { internalType: "address", name: "logic", type: "address" },
      { internalType: "bytes", name: "data", type: "bytes" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "target", type: "address" }],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      { internalType: "address", name: "implementation", type: "address" },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  { inputs: [], name: "ERC1967NonPayable", type: "error" },
  { inputs: [], name: "FailedCall", type: "error" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  { stateMutability: "payable", type: "fallback" },
] as const;

export const CELO_SEPOLIA_CHAIN_ID = 11142220 as const;

export const celoSepoliaPassportContract = {
  address: CELO_SEPOLIA_PASSPORT_ADDRESS,
  abi: CELO_SEPOLIA_PASSPORT_ABI,
  chainId: CELO_SEPOLIA_CHAIN_ID,
} as const;