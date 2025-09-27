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
    <div className="min-h-screen grid grid-rows-[auto_1fr] bg-background">
      <Topbar />
      <div className="grid grid-cols-[240px_1fr]">
        <Sidebar />
        <main className="px-6 py-6 space-y-6">
          <motion.h2 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-2xl font-semibold">
            Financial Dashboard
          </motion.h2>

          {/* Dashboard Cards */}
          <div className="grid gap-6 md:grid-cols-4">
            {/* Wallet Balance */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="font-medium">Wallet Balance</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground">$18,250.00</div>
                  <div className="text-sm text-muted-foreground mt-1">+2.3% this month</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Current Pot */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="font-medium">Current Pot</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground">ETH Yield</div>
                  <div className="text-sm text-muted-foreground mt-1">Active contributors: 45</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Liquidity Fund */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Card className="border border-border">
                <CardContent className="p-6">
                  <div className="mb-2">
                    <h3 className="font-medium">Liquidity Fund</h3>
                  </div>
                  <div className="text-3xl font-bold text-foreground">$1,250,000</div>
                  <div className="text-sm text-muted-foreground mt-1">+15.4% growth</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="md:col-span-1">
              <Card className="border border-border">
                <div className="p-6">
                  <div className="mb-4">
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
              </Card>
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {pots.map((p) => (
              <PotCard key={p.id} pot={p} onDeposit={() => {}} onBid={() => {}} />
            ))}
          </div>

          {/* Create Pot Button */}
          <div className="flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.05 }} 
              className="rounded-full p-4 bg-primary text-primary-foreground shadow"
              onClick={() => { /* Navigate to create-pot */ }}
            >
              <PlusCircle className="h-6 w-6" />
            </motion.div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border border-border md:col-span-2">
              <CardHeader>
                <CardTitle>
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
                      className="w-6 origin-bottom rounded bg-primary"
                      style={{ height: `${v * 3}px` }}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            <ActivityLog items={activities} />
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>
                  Total Liquidity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-semibold">$2,140,000</div>
                <div className="text-sm text-muted-foreground">Across all pots</div>
              </CardContent>
            </Card>
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>
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
            <Card className="border border-border">
              <CardHeader>
                <CardTitle>
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