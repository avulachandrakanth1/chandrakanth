import { Section } from "@/components/shared/Section";
import { SectionBackdrop } from "@/components/shared/SectionBackdrop";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { projectsContent } from "@/constants/projects";
import { cn } from "@/lib/cn";

import { ProjectGrid } from "../ProjectGrid";

import type { ProjectsSectionProps } from "./ProjectsSection.d";

import styles from "./ProjectsSection.module.css";

export function ProjectsSection({ className }: ProjectsSectionProps) {
  return (
    <Section id="projects" className={cn(styles.projectsSection, className)}>
      <SectionBackdrop variant="mixed" />
      <div className={styles.content}>
        <SectionHeading
          index="05"
          label={projectsContent.label}
          title={projectsContent.title}
          description={projectsContent.description}
        />
        <ProjectGrid />
      </div>
    </Section>
  );
}
