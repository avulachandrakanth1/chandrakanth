"use client";

import { motion } from "framer-motion";

import { projects } from "@/constants/projects";
import { staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/cn";

import { ProjectCard } from "../ProjectCard";

import type { ProjectGridProps } from "./ProjectGrid.d";

import styles from "./ProjectGrid.module.css";

export function ProjectGrid({ className }: ProjectGridProps) {
  return (
    <motion.div
      className={cn(styles.grid, className)}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {projects.map((project, index) => (
        <div
          key={project.title}
          className={project.featured ? styles.featured : undefined}
        >
          <ProjectCard project={project} index={index} />
        </div>
      ))}
    </motion.div>
  );
}
