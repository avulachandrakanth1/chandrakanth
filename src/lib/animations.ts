import { motion, type Variants } from "framer-motion";

import {
  ANIMATION_DURATION,
  ANIMATION_EASE,
  STAGGER_CHILDREN,
} from "@/constants/animations";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: ANIMATION_EASE.OUT_EXPO,
    },
  },
};

/** Blur + rise on scroll — tournament landing style */
export const blurFadeInUp: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: ANIMATION_EASE.OUT_EXPO,
    },
  },
};

export const scaleBlurIn: Variants = {
  hidden: { opacity: 0, scale: 0.92, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: ANIMATION_DURATION.SLOW,
      ease: ANIMATION_EASE.OUT_EXPO,
    },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: ANIMATION_EASE.OUT_EXPO,
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: ANIMATION_DURATION.NORMAL,
      ease: ANIMATION_EASE.OUT_EXPO,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: STAGGER_CHILDREN,
      delayChildren: 0.08,
    },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
};

export const floatingOrb: Variants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const pulseGlow: Variants = {
  animate: {
    opacity: [0.4, 0.85, 0.4],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
