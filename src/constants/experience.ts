import type { Experience } from "@/types";

export const experienceContent = {
  label: "Experience",
  title: "The journey so far",
  description:
    "Building enterprise mobile and hybrid applications for loyalty and engagement platforms serving 50K+ users.",
} as const;

export const experiences: Experience[] = [
  {
    company: "Bigcity Promotions",
    role: "Mobile Application Developer",
    duration: "Jun 2022 — Present",
    location: "Bengaluru, India",
    highlights: [
      "Developed scalable enterprise mobile and web applications using React Native, Angular, Ionic, TypeScript, HTML5, CSS3, and Bootstrap.",
      "Architected modular, component-based application structures, improving maintainability and scalability.",
      "Developed and integrated 20+ reusable UI components, decreasing development time for new features.",
      "Improved application performance by 30% through lazy loading, optimized REST API communication, and efficient rendering.",
      "Developed RESTful APIs using Node.js and Express.js to support mobile and web applications.",
      "Implemented reactive state management using RxJS and NgRx for predictable application state.",
      "Delivered 9+ production applications serving 50K+ users across loyalty and engagement platforms.",
      "Integrated QR scanning, OCR data extraction, push notifications, and OTP authentication using Capacitor plugins.",
      "Maintained a 90% average sprint completion rate in Agile teams using Zoho Sprints; mentored junior developers and led peer code reviews.",
      "Fast-tracked development using AI-assisted workflows while maintaining context efficiently to optimize productivity and minimize token usage.",
    ],
  },
];
