"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

import { SocialIcon } from "@/components/shared/SocialIcon";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/cn";

import type { ProjectCardProps } from "./ProjectCard.d";

import styles from "./ProjectCard.module.css";

function getInitials(title: string): string {
  return title
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? "")
    .join("");
}

const themeClasses = [
  styles.theme0,
  styles.theme1,
  styles.theme2,
  styles.theme3,
  styles.theme4,
];

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeInUp}
      custom={index}
      className={cn(
        styles.card,
        themeClasses[index % themeClasses.length],
        project.featured && styles.featuredCard,
      )}
    >
      <div className={styles.preview}>
        <span className={styles.indexBadge}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className={styles.previewMesh} aria-hidden="true" />
        <div className={styles.previewOverlay} aria-hidden="true" />
        <span className={styles.initial} aria-hidden="true">
          {getInitials(project.title)}
        </span>
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
          {project.featured && (
            <span className={styles.featuredBadge}>Featured</span>
          )}
        </div>

        <p className={styles.description}>{project.description}</p>

        {project.featured && (
          <ul className={styles.highlights} aria-label="Project highlights">
            {project.highlights.slice(0, 2).map((highlight) => (
              <li key={highlight} className={styles.highlight}>
                {highlight}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.stack} aria-label="Tech stack">
          {project.stack.map((tech) => (
            <span key={tech} className={styles.tag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.actions}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <SocialIcon name="github" className="h-4 w-4" />
                Source
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                Live
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
          <span className={styles.peek}>Explore →</span>
        </div>
      </div>
    </motion.article>
  );
}
