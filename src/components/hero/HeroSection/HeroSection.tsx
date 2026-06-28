import { Container } from "@/components/shared/Container";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroVisual } from "@/components/hero/HeroVisual";

import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-14 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20"
    >
      <HeroBackground />
      <Container className="relative">
        <div className={styles.heroGrid}>
          <div className={styles.textColumn}>
            <HeroContent />
          </div>
          <div className={styles.visualColumn}>
            <HeroVisual />
          </div>
        </div>
      </Container>
    </section>
  );
}
