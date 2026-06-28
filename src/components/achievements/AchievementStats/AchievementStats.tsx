"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { achievements } from "@/constants/achievements";
import { useCountUp } from "@/hooks/useCountUp";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

import type { AchievementStatsProps } from "./AchievementStats.d";

import styles from "./AchievementStats.module.css";

interface StatCardProps {
  value: string;
  label: string;
  description: string;
  index: number;
  featured?: boolean;
}

function StatCard({
  value,
  label,
  description,
  index,
  featured = false,
}: StatCardProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const displayValue = useCountUp(value, { enabled: isInView });

  return (
    <motion.article
      ref={ref}
      variants={fadeInUp}
      className={cn(styles.card, featured && styles.featured)}
    >
      <span className={styles.index}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <p className={styles.value} aria-label={`${value} ${label}`}>
        {displayValue}
      </p>
      <h3 className={styles.label}>{label}</h3>
      <p className={styles.description}>{description}</p>
    </motion.article>
  );
}

export function AchievementStats({ className }: AchievementStatsProps) {
  return (
    <motion.div
      className={cn(styles.grid, className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {achievements.map((achievement, index) => (
        <StatCard
          key={achievement.label}
          value={achievement.value}
          label={achievement.label}
          description={achievement.description}
          index={index}
          featured={index === 0}
        />
      ))}
    </motion.div>
  );
}
