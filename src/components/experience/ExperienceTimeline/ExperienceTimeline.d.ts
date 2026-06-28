import type { Experience } from "@/types";

export interface ExperienceTimelineProps {
  className?: string;
}

export interface ExperienceItemProps {
  experience: Experience;
  index: number;
  isLast: boolean;
}
