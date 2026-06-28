"use client";

import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

import { experiences } from "@/constants/experience";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

import type {
  ExperienceItemProps,
  ExperienceTimelineProps,
} from "./ExperienceTimeline.d";

import styles from "./ExperienceTimeline.module.css";

function extractYear(duration: string): string {
  const match = duration.match(/\d{4}/);
  return match?.[0] ?? duration;
}

function ExperienceItem({ experience, index }: ExperienceItemProps) {
  const year = extractYear(experience.duration);

  return (
    <motion.li variants={fadeInUp} className={styles.item}>
      <article className={styles.card}>
        <span className={styles.yearWatermark} aria-hidden="true">
          {year}
        </span>

        <div className={styles.chapter}>
          <span className={styles.chapterLine} aria-hidden="true" />
          Chapter {String(index + 1).padStart(2, "0")}
        </div>

        <div className={styles.header}>
          <div>
            <h3 className={styles.role}>{experience.role}</h3>
            <p className={styles.company}>{experience.company}</p>
          </div>

          <div className={styles.meta}>
            <time dateTime={experience.duration}>{experience.duration}</time>
            <span className="inline-flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {experience.location}
            </span>
          </div>
        </div>

        <ul className={styles.highlights}>
          {experience.highlights.map((highlight) => (
            <li key={highlight} className={styles.highlight}>
              {highlight}
            </li>
          ))}
        </ul>
      </article>
    </motion.li>
  );
}

export function ExperienceTimeline({ className }: ExperienceTimelineProps) {
  return (
    <motion.ol
      className={cn(styles.timeline, className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {experiences.map((experience, index) => (
        <ExperienceItem
          key={`${experience.company}-${experience.role}`}
          experience={experience}
          index={index}
          isLast={index === experiences.length - 1}
        />
      ))}
    </motion.ol>
  );
}
