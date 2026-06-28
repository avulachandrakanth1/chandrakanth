"use client";

import { Section } from "@/components/shared/Section";
import { SectionBackdrop } from "@/components/shared/SectionBackdrop";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { skillsContent } from "@/constants/skills";
import { cn } from "@/lib/cn";

import { SkillsExplorer } from "../SkillsExplorer";

import type { SkillsSectionProps } from "./SkillsSection.d";

import styles from "./SkillsSection.module.css";

export function SkillsSection({ className }: SkillsSectionProps) {
  return (
    <Section id="skills" className={cn(styles.skillsSection, className)}>
      <SectionBackdrop variant="violet" />
      <div className={styles.content}>
        <SectionHeading
          index="03"
          label={skillsContent.label}
          title={skillsContent.title}
          description={skillsContent.description}
        />
        <SkillsExplorer />
      </div>
    </Section>
  );
}
