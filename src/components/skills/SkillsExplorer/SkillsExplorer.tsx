"use client";

import {
  Brain,
  Cloud,
  Code2,
  Database,
  Smartphone,
  Wrench,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { skillCategories, skillsContent } from "@/constants/skills";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/cn";
import type { SkillCategory } from "@/types";

import type { SkillsExplorerProps } from "./SkillsExplorer.d";

import styles from "./SkillsExplorer.module.css";

const categoryIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Frontend: Code2,
  Backend: Database,
  Mobile: Smartphone,
  Database: Database,
  DevOps: Cloud,
  "Tools & AI": Brain,
};

function getCategoryIcon(title: string) {
  return categoryIcons[title] ?? Wrench;
}

export function SkillsExplorer({ className }: SkillsExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory: SkillCategory = skillCategories[activeIndex];
  const ActiveIcon = getCategoryIcon(activeCategory.title);

  return (
    <motion.div
      className={cn(styles.shell, className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <div className={styles.rail}>
        <p className={styles.hint}>{skillsContent.hint}</p>

        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Skill categories"
        >
          {skillCategories.map((category, index) => {
            const Icon = getCategoryIcon(category.title);
            const isActive = index === activeIndex;

            return (
              <button
                key={category.title}
                type="button"
                role="tab"
                id={`skill-tab-${index}`}
                aria-selected={isActive}
                aria-controls="skill-panel"
                className={cn(styles.tab, isActive && styles.tabActive)}
                onClick={() => setActiveIndex(index)}
              >
                <span className={styles.tabIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className={styles.tabIcon} aria-hidden="true" />
                <span className={styles.tabLabel}>{category.title}</span>
                <span className={styles.tabCount}>{category.skills.length}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.panel}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.title}
            id="skill-panel"
            role="tabpanel"
            aria-labelledby={`skill-tab-${activeIndex}`}
            className={styles.panelInner}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.panelHeader}>
              <div className={styles.panelIcon}>
                <ActiveIcon className={styles.panelIconSvg} aria-hidden="true" />
              </div>
              <div className={styles.panelMeta}>
                <p className={styles.panelEyebrow}>Currently exploring</p>
                <h3 className={styles.panelTitle}>{activeCategory.title}</h3>
              </div>
              <span className={styles.panelBadge}>
                {activeCategory.skills.length} tools
              </span>
            </div>

            <ul
              className={styles.skillGrid}
              aria-label={`${activeCategory.title} skills`}
            >
              {activeCategory.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  className={styles.skillItem}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: skillIndex * 0.035,
                    duration: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <span className={styles.skillDot} aria-hidden="true" />
                  <span className={styles.skillName}>{skill}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
