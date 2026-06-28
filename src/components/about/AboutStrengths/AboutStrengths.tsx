"use client";

import {
  BookOpen,
  Brain,
  Cloud,
  Code2,
  Rocket,
  Shield,
} from "lucide-react";
import { motion } from "framer-motion";

import { coreStrengths } from "@/constants/about";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";
import type { AboutStrength } from "@/types";

import type { AboutStrengthsProps, StrengthIconProps } from "./AboutStrengths.d";

import styles from "./AboutStrengths.module.css";

const iconMap: Record<AboutStrength["icon"], React.ComponentType<{ className?: string }>> = {
  code: Code2,
  brain: Brain,
  shield: Shield,
  cloud: Cloud,
  rocket: Rocket,
  book: BookOpen,
};

function StrengthIcon({ icon, className }: StrengthIconProps) {
  const Icon = iconMap[icon];
  return <Icon className={className} aria-hidden="true" />;
}

export function AboutStrengths({ className }: AboutStrengthsProps) {
  return (
    <motion.div
      className={cn(styles.strengths, className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h3 variants={fadeInUp} className={styles.heading}>
        Core Strengths
      </motion.h3>

      <div className={styles.grid}>
        {coreStrengths.map((strength) => (
          <motion.article
            key={strength.title}
            variants={fadeInUp}
            className={styles.card}
          >
            <div className={styles.iconWrap}>
              <StrengthIcon icon={strength.icon} className="h-4 w-4" />
            </div>
            <h4 className={styles.title}>{strength.title}</h4>
            <p className={styles.description}>{strength.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.div>
  );
}
