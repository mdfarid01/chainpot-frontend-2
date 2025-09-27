import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { celoAlfajores } from 'viem/chains'
import { injected } from 'wagmi/connectors'

// Add Celo Sepolia Testnet (custom chain)
export const celoSepolia = {
  id: 11142220,
  name: 'Celo Sepolia Testnet',
  nativeCurrency: { name: 'Celo', symbol: 'S-CELO', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://forno.celo-sepolia.celo-testnet.org'] },
    public: { http: ['https://forno.celo-sepolia.celo-testnet.org'] },
  },
  blockExplorers: {
    default: { name: 'Blockscout', url: 'https://celo-sepolia.blockscout.com' },
  },
  testnet: true,
} as const

export const config = createConfig({
  chains: [mainnet, sepolia, celoAlfajores, celoSepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
    [celoAlfajores.id]: http('https://alfajores-forno.celo-testnet.org'),
    [celoSepolia.id]: http('https://forno.celo-sepolia.celo-testnet.org'),
  },
  connectors: [
    injected({ target: 'metaMask' })
  ],
})