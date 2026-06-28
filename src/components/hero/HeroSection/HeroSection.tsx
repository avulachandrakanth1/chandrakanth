import { Container } from "@/components/shared/Container";
import { HeroBackground } from "@/components/hero/HeroBackground";
import { HeroContent } from "@/components/hero/HeroContent";
import { HeroVisual } from "@/components/hero/HeroVisual";

import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[88svh] items-center overflow-hidden pt-20"
    >
      <HeroBackground />
      <Container className="relative py-10 sm:py-12 lg:py-14">
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
