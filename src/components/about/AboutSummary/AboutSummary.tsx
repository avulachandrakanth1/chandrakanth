"use client";

import { motion } from "framer-motion";

import { aboutContent } from "@/constants/about";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

import type { AboutSummaryProps } from "./AboutSummary.d";

import styles from "./AboutSummary.module.css";

export function AboutSummary({ className }: AboutSummaryProps) {
  return (
    <motion.div
      className={cn(styles.summary, className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div>
        {aboutContent.summary.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={fadeInUp}
            className={cn(styles.paragraph, index > 0 && "mt-5")}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <motion.blockquote variants={fadeInUp} className={styles.mindset}>
        <span className={styles.mindsetBorder} aria-hidden="true" />
        <p className={styles.mindsetText}>&ldquo;{aboutContent.mindset}&rdquo;</p>
      </motion.blockquote>

      <motion.div variants={fadeInUp} className={styles.highlights}>
        {aboutContent.highlights.map((item) => (
          <div key={item.label} className={styles.highlightItem}>
            <span className={styles.highlightLabel}>{item.label}</span>
            <span className={styles.highlightValue}>{item.value}</span>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
