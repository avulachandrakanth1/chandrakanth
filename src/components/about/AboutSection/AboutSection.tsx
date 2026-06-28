import { Section } from "@/components/shared/Section";
import { SectionBackdrop } from "@/components/shared/SectionBackdrop";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { aboutContent } from "@/constants/about";
import { cn } from "@/lib/cn";

import { AboutSummary } from "../AboutSummary";
import { AboutStrengths } from "../AboutStrengths";
import { AboutEducation } from "../AboutEducation";

import type { AboutSectionProps } from "./AboutSection.d";

import styles from "./AboutSection.module.css";

export function AboutSection({ className }: AboutSectionProps) {
  return (
    <Section id="about" className={cn(styles.aboutSection, className)}>
      <SectionBackdrop variant="indigo" />
      <div className={styles.content}>
        <SectionHeading
          index="02"
          label={aboutContent.label}
          title={aboutContent.title}
          description={aboutContent.description}
        />

        <div className={styles.topGrid}>
          <AboutSummary />
          <AboutStrengths />
        </div>

        <AboutEducation />
      </div>
    </Section>
  );
}
