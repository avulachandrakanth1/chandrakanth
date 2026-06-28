"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { cn } from "@/lib/cn";

interface ParallaxLayerProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export function ParallaxLayer({
  children,
  className,
  offset = 40,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div ref={ref} style={{ y }} className={cn(className)}>
      {children}
    </motion.div>
  );
}
