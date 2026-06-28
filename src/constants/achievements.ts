import type { Achievement, Certification, Education } from "@/types";

export const achievementsContent = {
  label: "Achievements",
  title: "Numbers with context",
  description:
    "Outcomes from production mobile work — scale, reliability, and delivery you can measure.",
} as const;

export const achievements: Achievement[] = [
  {
    value: "4+",
    label: "Years Experience",
    description: "Building scalable cross-platform and hybrid mobile applications",
  },
  {
    value: "50K+",
    label: "Users Served",
    description: "Across loyalty and engagement platforms in production",
  },
  {
    value: "9+",
    label: "Apps Delivered",
    description: "Production web and hybrid mobile applications shipped",
  },
  {
    value: "30%",
    label: "Faster Performance",
    description: "Via lazy loading, optimized APIs, and efficient rendering",
  },
];

export const education: Education = {
  degree: "Bachelor of Technology – Electronics & Communication Engineering",
  institution: "Yogi Vemana University",
  duration: "2017 — 2021",
  coursework: [
    "Digital Electronics",
    "Signals & Systems",
    "Microprocessors",
    "Communication Systems",
    "Programming Fundamentals",
  ],
};

export const certifications: Certification[] = [
  {
    title: "Above & Beyond Award",
    issuer: "Bigcity Promotions",
    year: "2024",
  },
  {
    title: "Hackathon Runner-Up",
    issuer: "Bigcity Promotions",
    year: "2025",
  },
];
