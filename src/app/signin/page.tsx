"use client";

import Topbar from "@/components/Topbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SigninPage() {
  const router = useRouter();
  const [isKYCVerified, setIsKYCVerified] = useState(false);

  // Check KYC status
  useEffect(() => {
    const verified = typeof window !== 'undefined' ? localStorage.getItem('kycVerified') === 'true' : false;
    setIsKYCVerified(verified);
    if (verified) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-background">
      <Topbar />
      <div className="mx-auto flex max-w-md flex-col items-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full rounded-2xl border border-border/60 bg-card/80 p-8 backdrop-blur-md"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <h1 className="text-3xl font-bold">Sign In</h1>
            <p className="text-muted-foreground max-w-sm">
              Connect your wallet above to access your Rotare Finance account. No email or password required – your wallet is your key.
            </p>
            {!isKYCVerified && (
              <div className="flex flex-col items-center gap-4 mt-6">
                <p className="text-sm text-muted-foreground">
                  Step 1: Connect your wallet in the top bar.
                </p>
                <p className="text-sm text-muted-foreground">
                  Step 2: If not verified, complete KYC via the profile section.
                </p>
                <Button 
                  onClick={() => router.push('/')} 
                  variant="outline" 
                  className="mt-4"
                >
                  Back to Home
                </Button>
              </div>
            )}
            {isKYCVerified && (
              <Button 
                onClick={() => router.push('/dashboard')} 
                className="mt-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/90 hover:to-secondary/90 w-full"
              >
                Enter Dashboard
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}