import { HeroSection } from "@/components/hero/HeroSection";
import { AboutSection } from "@/components/about/AboutSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { AchievementsSection } from "@/components/achievements/AchievementsSection";
import { ContactSection } from "@/components/contact/ContactSection";
import { TextMarquee } from "@/components/shared/TextMarquee";
import { marqueeItems } from "@/constants/marquee";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TextMarquee items={marqueeItems} speed="normal" />
      <AboutSection />
      <SkillsSection />
      <TextMarquee items={marqueeItems} reverse speed="slow" />
      <ExperienceSection />
      <ProjectsSection />
      <AchievementsSection />
      <TextMarquee items={marqueeItems} speed="fast" />
      <ContactSection />
    </main>
  );
}
