"use client";

import { motion } from "framer-motion";

import devIllustration from "@/assets/images/dev-gif.svg";
import { blurFadeInUp } from "@/lib/animations";
import { cn } from "@/lib/cn";

import type { HeroVisualProps } from "./HeroVisual.d";

import styles from "./HeroVisual.module.css";

const illustrationSrc =
  typeof devIllustration === "string" ? devIllustration : devIllustration.src;

export function HeroVisual({ className }: HeroVisualProps) {
  return (
    <motion.div
      className={cn(styles.visual, className)}
      variants={blurFadeInUp}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className={styles.frame}
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img
          src={illustrationSrc}
          alt="DevOps engineers managing CI/CD pipeline illustration"
          className={styles.image}
          width={900}
          height={608}
          fetchPriority="high"
          decoding="async"
        />
        <span className={styles.glow} aria-hidden="true" />
      </motion.div>
    </motion.div>
  );
}
