"use client";

import { motion, type Variants } from "framer-motion";

import { blurFadeInUp } from "@/lib/animations";
import { cn } from "@/lib/cn";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  variants = blurFadeInUp,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px", amount: 0.15 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
