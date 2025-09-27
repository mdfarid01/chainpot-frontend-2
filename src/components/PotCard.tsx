"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export type Pot = {
  id: string;
  name: string;
  apy: number;
  tvl: number;
  contributors: number;
  image: string;
};

export function PotCard({ pot, onDeposit, onBid }: { pot: Pot; onDeposit?: () => void; onBid?: () => void }) {
  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 15 }} className="relative overflow-hidden rounded-2xl border border-border/50 shadow-lg group">
      <div
        className="h-40 w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${pot.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl font-bold truncate">{pot.name}</CardTitle>
          <div className="flex items-center gap-1 bg-green-500/10 px-2 py-1 rounded-full text-xs font-medium text-green-600">
            +{pot.apy}%
          </div>
        </div>
        <div className="text-sm text-muted-foreground mb-3">
          Contributors: {pot.contributors} • TVL: ${pot.tvl.toLocaleString()}
        </div>
        <div className="flex gap-3 mt-4">
          <Button 
            className="flex-1 bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300" 
            onClick={onDeposit}
          >
            Deposit
          </Button>
          <Button 
            className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 transition-all duration-300" 
            variant="ghost" 
            onClick={onBid}
          >
            Bid
          </Button>
        </div>
      </div>
      {/* Optional circular accent */}
      <div className="absolute -bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-xl" />
    </motion.div>
  );
}

export default PotCard;