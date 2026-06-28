"use client";

import { motion } from "framer-motion";

import { fadeInUp } from "@/lib/animations";

import type { SkillCategoryCardProps } from "./SkillCategoryCard.d";

import styles from "./SkillCategoryCard.module.css";

export function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className={styles.card}
    >
      <h3 className={styles.title}>{category.title}</h3>

      <div className={styles.progressBar} aria-hidden="true">
        <motion.div
          className={styles.progressFill}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.8,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      </div>

      <ul className={styles.skillList} aria-label={`${category.title} skills`}>
        {category.skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}
