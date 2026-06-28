import { Section } from "@/components/shared/Section";
import { SectionBackdrop } from "@/components/shared/SectionBackdrop";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ParallaxLayer } from "@/components/shared/ParallaxLayer";
import { contactContent } from "@/constants/contact";
import { cn } from "@/lib/cn";

import { ContactForm } from "../ContactForm";
import { ContactInfo } from "../ContactInfo";

import type { ContactSectionProps } from "./ContactSection.d";

import styles from "./ContactSection.module.css";

export function ContactSection({ className }: ContactSectionProps) {
  return (
    <Section id="contact" className={cn(styles.contactSection, className)}>
      <SectionBackdrop variant="violet" />
      <div className={styles.content}>
        <SectionHeading
          index="07"
          label={contactContent.label}
          title={contactContent.title}
          description={contactContent.description}
          align="center"
        />

        <ParallaxLayer offset={16}>
          <div className={styles.shell}>
            <div className={styles.grid}>
              <div className={styles.infoColumn}>
                <ContactInfo />
              </div>
              <div className={styles.formColumn}>
                <ContactForm />
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </div>
    </Section>
  );
}
