"use client";

import { motion } from "framer-motion";

import { AnimatedOrbs } from "@/components/shared/AnimatedOrbs";
import { floatingOrb } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface HeroBackgroundProps {
  className?: string;
}

export function HeroBackground({ className }: HeroBackgroundProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--orb-1),transparent_55%)]" />
      <AnimatedOrbs />

      <motion.div
        variants={floatingOrb}
        animate="animate"
        className="absolute top-1/2 right-[12%] hidden h-24 w-24 rounded-full blur-2xl md:block"
        style={{ background: "var(--accent-glow)" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background))]" />
    </div>
  );
}
