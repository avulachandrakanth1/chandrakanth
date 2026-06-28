import { Section } from "@/components/shared/Section";
import { SectionBackdrop } from "@/components/shared/SectionBackdrop";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { achievementsContent } from "@/constants/achievements";
import { cn } from "@/lib/cn";

import { AchievementStats } from "../AchievementStats";

import type { AchievementsSectionProps } from "./AchievementsSection.d";

import styles from "./AchievementsSection.module.css";

export function AchievementsSection({ className }: AchievementsSectionProps) {
  return (
    <Section
      id="achievements"
      className={cn(styles.achievementsSection, className)}
    >
      <SectionBackdrop variant="warm" />
      <div className={styles.content}>
        <SectionHeading
          index="06"
          label={achievementsContent.label}
          title={achievementsContent.title}
          description={achievementsContent.description}
          align="center"
        />
        <AchievementStats />
      </div>
    </Section>
  );
}
