"use client";

import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import PotCard, { Pot } from "@/components/PotCard";
import ActivityLog, { Activity } from "@/components/ActivityLog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { DollarSign, Users, TrendingUp, Activity as ActivityIcon, Wallet2, PiggyBank, BarChart3, PlusCircle } from "lucide-react";

const pots: Pot[] = [
  {
    id: "eth-yield",
    name: "ETH Yield Pot",
    apy: 8.2,
    tvl: 1250000,
    contributors: 45,
    image:
      "https://images.unsplash.com/photo-1517341720290-426b3ea0be37?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "stable-vault",
    name: "Stable Vault",
    apy: 5.1,
    tvl: 860000,
    contributors: 32,
    image:
      "https://images.unsplash.com/photo-1601972599720-b4a2e2b2edd3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "alt-auction",
    name: "Alt Auction Pool",
    apy: 11.4,
    tvl: 430000,
    contributors: 18,
    image:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1200&auto=format&fit=crop",
  },
];

const activities: Activity[] = [
  { id: "1", type: "deposit", message: "Deposited 1,000 USDC into Stable Vault", time: "2h ago" },
  { id: "2", type: "bid", message: "Placed 2.5 ETH bid in Alt Auction Pool", time: "1d ago" },
  { id: "3", type: "create", message: "Created new pot 'ETH Yield Pot'", time: "3d ago" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr] bg-gradient-to-br from-background via-background to-muted/20">
      <Topbar />
      <div className="grid grid-cols-[240px_1fr]">
        <Sidebar />
        <main className="relative px-6 py-6 space-y-6 overflow-hidden">
          {/* Floating graphics */}
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/abstract-finance-chart-illustration-in-m-3ce16b92-20250927151130.jpg?"
              alt="" 
              className="absolute top-20 right-20 w-32 h-32 blur-sm"
            />
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/liquidity-waves-graphic%2c-flowing-blue--b5fac0dc-20250927151137.jpg?"
              alt="" 
              className="absolute bottom-40 left-40 w-48 h-48 blur-md rotate-12"
            />
          </div>
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold relative z-10">
            Financial Dashboard
          </motion.h2>

          {/* Dashboard Cards */}
          <div className="grid gap-6 md:grid-cols-4 relative z-10">
            {/* Wallet Balance */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl shadow-xl">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/abstract-wallet-balance-icon%2c-stylized-5a0a7153-20250927151148.jpg?"
                alt="Wallet" 
                className="absolute -top-6 -right-6 w-20 h-20 opacity-20"
              />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <Wallet2 className="h-5 w-5 text-primary/70" />
                  <h3 className="font-medium">Wallet Balance</h3>
                </div>
                <div className="text-3xl font-bold text-foreground">$18,250.00</div>
                <div className="text-sm text-muted-foreground mt-1">+2.3% this month</div>
              </CardContent>
            </motion.div>

            {/* Current Pot */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl shadow-xl">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/pot-or-fund-icon-illustration%2c-circula-b8aa2ac8-20250927151153.jpg?"
                alt="Pot" 
                className="absolute -top-4 left-4 w-16 h-16 opacity-20"
              />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <PiggyBank className="h-5 w-5 text-secondary/70" />
                  <h3 className="font-medium">Current Pot</h3>
                </div>
                <div className="text-3xl font-bold text-foreground">ETH Yield</div>
                <div className="text-sm text-muted-foreground mt-1">Active contributors: 45</div>
              </CardContent>
            </motion.div>

            {/* Liquidity Fund */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl shadow-xl">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/liquidity-fund-graphic%2c-flowing-liquid-98e33b3a-20250927151202.jpg?"
                alt="Liquidity" 
                className="absolute -bottom-8 right-0 w-24 h-24 opacity-20"
              />
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="h-5 w-5 text-accent/70" />
                  <h3 className="font-medium">Liquidity Fund</h3>
                </div>
                <div className="text-3xl font-bold text-foreground">$1,250,000</div>
                <div className="text-sm text-muted-foreground mt-1">+15.4% growth</div>
              </CardContent>
            </motion.div>

            {/* Recent Activity */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-xl shadow-xl md:col-span-1">
              <img 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/activity-log-icon%2c-timeline-chart-with-92c29d00-20250927151208.jpg?"
                alt="Activity" 
                className="absolute top-4 left-4 w-12 h-12 opacity-20"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ActivityIcon className="h-5 w-5 text-destructive/70" />
                  <h3 className="font-medium">Recent Activity</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Deposit</span>
                    <span>2h ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Bid</span>
                    <span>1d ago</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 relative z-10">
            {pots.map((p) => (
              <PotCard key={p.id} pot={p} onDeposit={() => {}} onBid={() => {}} />
            ))}
          </div>

          {/* Create Pot Button */}
          <div className="relative z-10 flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="rounded-full p-4 bg-gradient-to-r from-primary to-secondary shadow-lg"
              onClick={() => { /* Navigate to create-pot */ }}
            >
              <PlusCircle className="h-6 w-6 text-primary-foreground" />
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-3 relative z-10">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm md:col-span-2 rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Monthly Deposits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end gap-2 h-32">
                  {[12, 18, 10, 22, 28, 16, 24, 30, 26, 20, 18, 32].map((v, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: i * 0.03 }}
                      className="w-6 origin-bottom rounded bg-gradient-to-t from-primary/40 to-primary/60"
                      style={{ height: `${v * 3}px` }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            <ActivityLog items={activities} />
          </div>

          <div className="grid gap-6 md:grid-cols-3 relative z-10">
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="h-5 w-5" />
                  Total Liquidity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold">$2,140,000</div>
                <div className="text-sm text-muted-foreground">Across all pots</div>
              </CardContent>
            </Card>
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  My Positions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>Stable Vault — 12,500 USDC</li>
                  <li>ETH Yield Pot — 1.2 ETH</li>
                  <li>Alt Auction Pool — 3,200 USDT</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-border/60 bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Next Auction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">Starts in</div>
                <div className="text-2xl font-semibold">03:12:45</div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}