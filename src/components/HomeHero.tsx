"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1550565118-3a14e8d03856?q=80&w=1200&auto=format&fit=crop)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Finance-style graphics */}
        <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/25 via-fuchsia-400/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-gradient-to-tr from-emerald-400/20 via-cyan-400/20 to-blue-500/20 blur-3xl" />

        {/* Abstract finance chart floating */}
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/abstract-finance-chart-illustration-in-m-3ce16b92-20250927151130.jpg?"
          alt="Finance Chart"
          className="absolute top-20 left-10 w-24 h-24 opacity-30 animate-pulse"
        />
        {/* Liquidity waves */}
        <img 
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/liquidity-waves-graphic%2c-flowing-blue--b5fac0dc-20250927151137.jpg?"
          alt="Liquidity Waves"
          className="absolute bottom-20 right-10 w-32 h-32 opacity-20 rotate-12"
        />
        {/* Coins */}
        <img 
          src="https://v3b.fal.media/files/b/lion/-SUIVUH9h-i4IKGvqqoJS_output.png"
          alt="Coins"
          className="absolute left-1/2 -translate-x-1/2 top-1/2 transform -translate-y-1/2 w-16 h-16 opacity-40"
        />

        {/* Subtle grid */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
          <svg className="h-full w-full opacity-15" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-foreground/20" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating chips (tokens/pots) */}
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -6, 0], opacity: 1 }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-8 top-24 rounded-full border border-border/60 bg-white/10 px-3 py-1 text-xs backdrop-blur"
        >
          🪙 ETH • 2.4% APY
        </motion.div>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, 8, 0], opacity: 1 }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="absolute right-10 top-40 rounded-full border border-border/60 bg-white/10 px-3 py-1 text-xs backdrop-blur"
        >
          💧 LP • USDC/ETH #742
        </motion.div>
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: [0, -10, 0], opacity: 1 }}
          transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 rounded-full border border-border/60 bg-white/10 px-3 py-1 text-xs backdrop-blur"
        >
          🔗 Chainpot: Cycle 5 Live
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-balance bg-gradient-to-b from-primary to-foreground bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Rotare Finance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-3xl text-xl text-muted-foreground leading-relaxed"
        >
          Revolutionize your liquidity management with decentralized pots, dynamic auctions, and optimized yields in the Web3 economy.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button asChild className="bg-gradient-to-r from-primary to-secondary px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-shadow">
            <Link href="/signup">Get Started</Link>
          </Button>
          <Button variant="outline" asChild className="px-8 py-3 text-lg border-2">
            <Link href="/signin">Sign In</Link>
          </Button>
        </motion.div>
        <div className="pointer-events-none relative mt-24 rounded-3xl border border-border/60 bg-white/5 p-8 backdrop-blur-lg">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { title: "Monthly Deposits", desc: "Automated recurring contributions to liquidity pots.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/monthly-deposits-chart-icon%2c-abstract--5201d81c-20250927151305.jpg?" },
              { title: "Lowest Bid Funding", desc: "Secure optimal rates through competitive auction mechanisms.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/lowest-bid-funding-icon%2c-auction-hamme-dc859579-20250927151312.jpg?" },
              { title: "Liquidity Growth", desc: "Track and maximize your pooled assets with real-time analytics.", icon: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/d61091f9-bcfe-497a-87bc-8a0866c2c1e7/generated_images/liquidity-growth-waves-icon%2c-upward-fl-da57107e-20250927151318.jpg?" }
            ].map((f, i) => (
              <motion.div 
                key={f.title} 
                initial={{ opacity: 0, x: -20 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ delay: 0.5 + i * 0.2 }}
                className="group cursor-pointer p-6 rounded-2xl border border-border/50 bg-white/5 transition-all hover:bg-white/10 hover:scale-105"
              >
                <img 
                  src={f.icon} 
                  alt={f.title} 
                  className="w-12 h-12 mb-4 mx-auto opacity-70 group-hover:opacity-100 transition-opacity"
                />
                <h3 className="text-lg font-semibold mb-2 text-center">{f.title}</h3>
                <p className="text-sm text-muted-foreground text-center">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeHero;