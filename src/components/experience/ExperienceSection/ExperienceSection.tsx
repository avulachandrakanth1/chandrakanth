import { Section } from "@/components/shared/Section";
import { SectionBackdrop } from "@/components/shared/SectionBackdrop";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { experienceContent } from "@/constants/experience";
import { cn } from "@/lib/cn";

import { ExperienceTimeline } from "../ExperienceTimeline";

import type { ExperienceSectionProps } from "./ExperienceSection.d";

import styles from "./ExperienceSection.module.css";

export function ExperienceSection({ className }: ExperienceSectionProps) {
  return (
    <Section id="experience" className={cn(styles.experienceSection, className)}>
      <SectionBackdrop variant="indigo" />
      <div className={styles.content}>
        <SectionHeading
          index="04"
          label={experienceContent.label}
          title={experienceContent.title}
          description={experienceContent.description}
        />
        <ExperienceTimeline />
      </div>
    </Section>
  );
}
