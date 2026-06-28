"use client";

import { motion } from "framer-motion";

import { pulseGlow } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface AnimatedOrbsProps {
  className?: string;
}

const orbs = [
  {
    className: "top-[8%] left-[5%] h-56 w-56",
    delay: 0,
    style: { background: "var(--orb-1)" },
  },
  {
    className: "top-[18%] right-[8%] h-44 w-44",
    delay: 1.2,
    style: { background: "var(--orb-2)" },
  },
  {
    className: "bottom-[15%] left-[35%] h-36 w-36",
    delay: 2.4,
    style: { background: "var(--orb-3)" },
  },
];

export function AnimatedOrbs({ className }: AnimatedOrbsProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      {orbs.map((orb, index) => (
        <motion.div
          key={index}
          variants={pulseGlow}
          animate="animate"
          transition={{ delay: orb.delay }}
          className={cn("absolute rounded-full blur-3xl", orb.className)}
          style={orb.style}
        />
      ))}
    </div>
  );
}
