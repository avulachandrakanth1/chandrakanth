"use client";

import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

import { certifications, education } from "@/constants/achievements";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

import type { AboutEducationProps } from "./AboutEducation.d";

import styles from "./AboutEducation.module.css";

export function AboutEducation({ className }: AboutEducationProps) {
  const hasCertifications = certifications.length > 0;

  return (
    <motion.div
      className={cn(styles.education, className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <motion.h3 variants={fadeInUp} className={styles.heading}>
        {hasCertifications ? "Education & Certifications" : "Education"}
      </motion.h3>

      <div
        className={cn(styles.layout, !hasCertifications && styles.layoutSingle)}
      >
        <motion.article variants={fadeInUp} className={styles.card}>
          <div className={styles.iconWrap}>
            <GraduationCap className="h-4 w-4" aria-hidden="true" />
          </div>

          <h4 className={styles.degree}>{education.degree}</h4>
          <p className={styles.institution}>{education.institution}</p>
          <span className={styles.duration}>{education.duration}</span>

          <div className={styles.coursework}>
            <span className={styles.courseworkLabel}>Relevant Coursework</span>
            <div className={styles.tags}>
              {education.coursework.map((course) => (
                <span key={course} className={styles.tag}>
                  {course}
                </span>
              ))}
            </div>
          </div>
        </motion.article>

        {hasCertifications && (
          <motion.div variants={fadeInUp} className={styles.certifications}>
            <span className={styles.courseworkLabel}>Certifications</span>
            <ul className={styles.certList}>
              {certifications.map((cert) => (
                <li key={cert.title} className={styles.certItem}>
                  <div>
                    <p className={styles.certTitle}>{cert.title}</p>
                    <p className={styles.certIssuer}>{cert.issuer}</p>
                  </div>
                  <span className={styles.certYear}>{cert.year}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
