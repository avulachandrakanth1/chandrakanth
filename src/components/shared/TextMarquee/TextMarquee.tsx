"use client";

import { cn } from "@/lib/cn";

import styles from "./TextMarquee.module.css";

interface TextMarqueeProps {
  items: readonly string[];
  className?: string;
  reverse?: boolean;
  speed?: "slow" | "normal" | "fast";
}

export function TextMarquee({
  items,
  className,
  reverse = false,
  speed = "normal",
}: TextMarqueeProps) {
  const trackItems = [...items, ...items];

  return (
    <div className={cn(styles.wrapper, className)} aria-hidden="true">
      <div className={styles.edgeLeft} />
      <div className={styles.edgeRight} />

      <div
        className={cn(
          styles.track,
          reverse && styles.reverse,
          speed === "slow" && styles.slow,
          speed === "fast" && styles.fast,
        )}
      >
        {trackItems.map((item, index) => (
          <span key={`${item}-${index}`} className={styles.item}>
            {item}
            <span className={styles.dot} />
          </span>
        ))}
      </div>
    </div>
  );
}
