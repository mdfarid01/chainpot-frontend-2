"use client";

import { useAccount, useConnect, useDisconnect, useChainId, useSwitchChain } from "wagmi";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Wallet2, Check, AlertTriangle } from "lucide-react";
import { injected } from 'wagmi/connectors'
import { motion } from 'framer-motion'
import KYCVerifier from "./KYCVerifier";
import { useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export function WalletConnect() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const metaMaskConnector = connectors.find((c) => c.id === "injected") ?? connectors[0];
  const router = useRouter();
  const pathname = usePathname();

  const chainId = useChainId();
  const { switchChain, isPending: isSwitching } = useSwitchChain();
  const CELO_SEPOLIA_ID = 11142220;
  const onCorrectNetwork = useMemo(() => chainId === CELO_SEPOLIA_ID, [chainId]);

  const isKYCVerified = typeof window !== 'undefined' ? localStorage.getItem('kycVerified') === 'true' : false;

  const protectedRoutes = ["/dashboard", "/profile", "/deposit", "/bid", "/create-pot", "/liquidity"];

  const shortenAddress = (addr: string) => {
    if (!addr) return '0x...';
    return `${addr.slice(0, 4)}...${addr.slice(-2)}`;
  };

  useEffect(() => {
    if (isConnected && isKYCVerified && !protectedRoutes.includes(pathname)) {
      router.push('/dashboard');
    }
  }, [isConnected, isKYCVerified, router, pathname]);

  const handleConnect = async () => {
    await connect({ connector: metaMaskConnector });
    // Attempt to switch to Celo Sepolia after connect
    try {
      switchChain?.({ chainId: CELO_SEPOLIA_ID });
    } catch (_) {
      // noop - user can switch manually
    }
  };

  const handleOnVerified = () => {
    // Redirect after verification
    router.push('/dashboard');
  };

  return (
    <div className="flex items-center gap-2">
      {isConnected ? (
        <div className="flex items-center gap-2">
          <motion.div
            onClick={() => disconnect()}
            initial={{ opacity: 0, y: -5, transition: { duration: 0.1, ease: "easeOut" } }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.1, ease: "easeOut" } }}
            whileHover={{ scale: 1.02, transition: { duration: 0.05, ease: "easeOut" } }}
            whileTap={{ scale: 0.98, transition: { duration: 0.05, ease: "easeOut" } }}
            className="group flex items-center justify-center rounded-full border border-border/50 bg-card/80 px-3 py-1.5 backdrop-blur-md cursor-pointer hover:shadow-sm hover:bg-accent/20 transition-shadow duration-100"
          >
            <span className="font-mono text-xs font-medium text-foreground min-w-0">
              {shortenAddress(address!)}
            </span>
          </motion.div>
          {!onCorrectNetwork && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1 px-2 py-1 bg-amber-100 rounded-md"
            >
              <AlertTriangle className="h-3 w-3 text-amber-700" />
              <button
                onClick={() => switchChain?.({ chainId: CELO_SEPOLIA_ID })}
                className="text-xs font-medium text-amber-800 underline"
              >
                Switch to Celo Sepolia
              </button>
            </motion.div>
          )}
          {onCorrectNetwork && !isKYCVerified && (
            <KYCVerifier onVerified={handleOnVerified} />
          )}
          {isKYCVerified && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-1 px-2 py-1 bg-green-100 rounded-md"
            >
              <Check className="h-3 w-3 text-green-600" />
              <span className="text-xs font-medium text-green-800">Verified</span>
            </motion.div>
          )}
        </div>
      ) : (
        <motion.div
          whileHover={{ scale: 1.02, transition: { duration: 0.1, ease: "easeOut" } }}
          whileTap={{ scale: 0.98, transition: { duration: 0.05, ease: "easeOut" } }}
        >
          <Button 
            onClick={handleConnect} 
            className="gap-2"
          >
            <Wallet2 className="h-4 w-4" /> {isSwitching ? 'Switching…' : 'Connect Wallet'}
          </Button>
        </motion.div>
      )}
    </div>
  );
}

export default WalletConnect;