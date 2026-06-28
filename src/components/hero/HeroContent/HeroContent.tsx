"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

import { profile } from "@/constants/profile";
import { Button } from "@/components/shared/Button";
import { SocialIcon } from "@/components/shared/SocialIcon";
import {
  blurFadeInUp,
  staggerFast,
} from "@/lib/animations";

export function HeroContent() {
  return (
    <motion.div
      variants={staggerFast}
      initial="hidden"
      animate="visible"
      className="relative z-10 flex w-full flex-col"
    >
      <motion.p
        variants={blurFadeInUp}
        className="mb-3 text-sm font-medium tracking-widest text-accent uppercase"
      >
        Welcome to my portfolio
      </motion.p>

      <motion.h1
        variants={blurFadeInUp}
        className="max-w-xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
      >
        Hi, I&apos;m{" "}
        <span className="gradient-text">{profile.firstName}</span>
      </motion.h1>

      <motion.p
        variants={blurFadeInUp}
        className="mt-3 text-lg font-medium text-foreground sm:text-xl lg:text-2xl"
      >
        {profile.role}
      </motion.p>

      <motion.p
        variants={blurFadeInUp}
        className="mt-4 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        variants={blurFadeInUp}
        className="mt-7 flex w-full max-w-md flex-col gap-3 sm:flex-row sm:items-center lg:max-w-none"
      >
        <Button href="#projects" size="lg" className="btn-shine w-full sm:w-auto">
          View My Work
        </Button>
        <Button
          href={profile.resumeUrl}
          variant="secondary"
          size="lg"
          external
          className="w-full sm:w-auto"
        >
          <Download className="h-4 w-4" />
          Download Resume
        </Button>
      </motion.div>

      <motion.div
        variants={blurFadeInUp}
        className="mt-7 flex items-center justify-center gap-3 lg:justify-start"
      >
        {profile.socials.map((social) => (
          <motion.a
            key={social.label}
            href={social.href}
            target={social.icon === "mail" ? undefined : "_blank"}
            rel={social.icon === "mail" ? undefined : "noopener noreferrer"}
            aria-label={social.label}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="glass-card inline-flex h-11 w-11 items-center justify-center rounded-full text-muted transition-base hover:border-accent/30 hover:text-accent"
          >
            <SocialIcon name={social.icon} className="h-4 w-4" />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
