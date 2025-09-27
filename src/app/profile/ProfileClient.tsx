"use client";

import { useAccount, useReadContract, useChainId } from "wagmi";
import { MEMBER_MANAGER_ADDRESS, memberAccountManagerAbi } from "@/lib/contracts/memberAccountManagerAbi";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, User2 } from "lucide-react";

export const ProfileClient = () => {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();

  console.log("Profile debug:", { address, isConnected, chainId }); // Add debug log

  const isCorrectChain = chainId === 11142220; // Celo Sepolia

  const enabled = Boolean(isConnected && address && MEMBER_MANAGER_ADDRESS && isCorrectChain);

  console.log("Query enabled:", enabled, MEMBER_MANAGER_ADDRESS); // Add debug log

  const { data, isPending, error, refetch } = useReadContract({
    abi: memberAccountManagerAbi,
    address: MEMBER_MANAGER_ADDRESS as `0x${string}`,
    functionName: "getMemberProfile",
    args: [address!],
    query: { 
      enabled,
      retry: 3, // Retry on failure
      retryDelay: 1000,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  });

  console.log("Contract data:", { data, isPending, error }); // Add debug log

  if (!isConnected) {
    return (
      <Card className="border-border/60 bg-card/80 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2"><User2 className="h-5 w-5" /> Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-muted-foreground">Connect your wallet to view your on-chain profile.</div>
        </CardContent>
      </Card>
    );
  }

  if (!MEMBER_MANAGER_ADDRESS) {
    return (
      <div className="flex items-center gap-2 rounded-md border border-amber-300/50 bg-amber-50 text-amber-900 px-3 py-2">
        <AlertTriangle className="h-4 w-4" />
        <span className="text-sm">Contract address not configured. Set NEXT_PUBLIC_MEMBER_MANAGER_ADDRESS in your environment.</span>
      </div>
    );
  }

  if (!isCorrectChain) {
    return (
      <div className="flex items-center gap-2 rounded-md border border-amber-300/50 bg-amber-50 text-amber-900 px-3 py-2">
        <AlertTriangle className="h-4 w-4" />
        <span className="text-sm">Please switch to Celo Sepolia Testnet (ID: 11142220) to view your profile.</span>
        <Button 
          size="sm" 
          variant="outline" 
          onClick={() => window.ethereum?.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: '0xaa36a7' }] }).catch(console.error)}>
          Switch Network
        </Button>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-md border border-muted/30 bg-muted/10 px-3 py-2">
        <span className="text-sm">Loading profile...</span>
        <Button size="sm" variant="outline" onClick={() => refetch()} disabled={isPending}>
          Retry
        </Button>
      </div>
    );
  }

  if (error) {
    console.error("Contract error:", error); // Log error
    return (
      <div className="flex items-center justify-between rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2">
        <span className="text-sm text-destructive-foreground">
          Failed to load profile: {error?.message || error?.shortMessage || 'Unknown error'}
        </span>
        <Button size="sm" variant="outline" onClick={() => refetch()}>Retry</Button>
      </div>
    );
  }

  // data tuple from getMemberProfile
  // [registered, totalCyclesParticipated, totalCyclesWon, totalContribution, reputationScore, lastJoinedTimestamp, createdPots[], joinedPots[]]
  const [registered, totalCyclesParticipated, totalCyclesWon, totalContribution, reputationScore, lastJoinedTimestamp, createdPots, joinedPots] = (data as any) || [];

  const formatNumber = (v: bigint | number | undefined) => v === undefined ? "-" : Intl.NumberFormat().format(typeof v === "bigint" ? Number(v) : v);
  const formatDate = (v: bigint | number | undefined) => {
    if (!v) return "-";
    const ms = typeof v === "bigint" ? Number(v) * 1000 : Number(v) * 1000;
    return new Date(ms).toLocaleString();
  };

  return (
    <div className="grid gap-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{registered ? "Registered" : "Not registered"}</div>
            <div className="text-sm text-muted-foreground">Wallet: {address}</div>
          </CardContent>
        </Card>
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Total Cycles</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{formatNumber(totalCyclesParticipated)}</div>
            <div className="text-sm text-muted-foreground">Participated</div>
          </CardContent>
        </Card>
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Wins</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{formatNumber(totalCyclesWon)}</div>
            <div className="text-sm text-muted-foreground">Total cycles won</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Total Contribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{formatNumber(totalContribution)}</div>
            <div className="text-sm text-muted-foreground">Wei (raw)</div>
          </CardContent>
        </Card>
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Reputation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{formatNumber(reputationScore)}</div>
            <div className="text-sm text-muted-foreground">Score</div>
          </CardContent>
        </Card>
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Last Joined</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold">{formatDate(lastJoinedTimestamp)}</div>
            <div className="text-sm text-muted-foreground">From on-chain timestamp</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Created Pots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {(createdPots as readonly bigint[] | undefined)?.length ? (
                (createdPots as readonly bigint[]).map((id, i) => (
                  <span key={i} className="inline-flex items-center rounded-md border px-2 py-1 text-xs">#{Number(id)}</span>
                ))
              ) : (
                <div className="text-sm text-muted-foreground">No created pots</div>
              )}
            </div>
          </CardContent>
        </Card>
        <Card className="border-border/60 bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Joined Pots</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {(joinedPots as readonly bigint[] | undefined)?.length ? (
                (joinedPots as readonly bigint[]).map((id, i) => (
                  <span key={i} className="inline-flex items-center rounded-md border px-2 py-1 text-xs">#{Number(id)}</span>
                ))
              ) : (
                <div className="text-sm text-muted-foreground">No joined pots</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfileClient;