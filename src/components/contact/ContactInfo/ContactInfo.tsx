"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { SocialIcon } from "@/components/shared/SocialIcon";
import { contactContent } from "@/constants/contact";
import { profile } from "@/constants/profile";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/cn";

import type { ContactInfoProps } from "./ContactInfo.d";

import styles from "./ContactInfo.module.css";

export function ContactInfo({ className }: ContactInfoProps) {
  return (
    <motion.div
      className={cn(styles.info, className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      <p className={styles.hook}>{contactContent.hook}</p>

      <h3 className={styles.headline}>
        Let&apos;s build something{" "}
        <span className={styles.headlineAccent}>worth exploring.</span>
      </h3>

      <div className={styles.badge}>
        <span className={styles.badgeDot} aria-hidden="true" />
        {contactContent.availability}
      </div>

      <div className={styles.details}>
        <div className={styles.detail}>
          <div className={styles.detailLeft}>
            <div className={styles.iconWrap}>
              <Mail className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <p className={styles.detailLabel}>Email</p>
              <p className={styles.detailValue}>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </p>
            </div>
          </div>
          <span className={styles.detailArrow} aria-hidden="true">
            →
          </span>
        </div>

        <div className={styles.detail}>
          <div className={styles.detailLeft}>
            <div className={styles.iconWrap}>
              <Phone className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <p className={styles.detailLabel}>Phone</p>
              <p className={styles.detailValue}>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </p>
            </div>
          </div>
          <span className={styles.detailArrow} aria-hidden="true">
            →
          </span>
        </div>

        <div className={styles.detail}>
          <div className={styles.detailLeft}>
            <div className={styles.iconWrap}>
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </div>
            <div>
              <p className={styles.detailLabel}>Location</p>
              <p className={styles.detailValue}>{profile.location}</p>
            </div>
          </div>
          <span className={styles.detailArrow} aria-hidden="true">
            →
          </span>
        </div>
      </div>

      <nav className={styles.socials} aria-label="Social links">
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target={social.href.startsWith("mailto:") ? undefined : "_blank"}
            rel={
              social.href.startsWith("mailto:")
                ? undefined
                : "noopener noreferrer"
            }
            className={styles.socialLink}
          >
            <SocialIcon name={social.icon} className="h-4 w-4" />
            {social.label}
          </a>
        ))}
      </nav>

      <p className={styles.responseNote}>{contactContent.responseTime}</p>
    </motion.div>
  );
}
