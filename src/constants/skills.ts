import type { SkillCategory } from "@/types";

export const skillsContent = {
  label: "Skills",
  title: "Peel back the layers",
  description:
    "The domains behind the work — frontend, React, mobile, languages, backend, architecture, and delivery practices.",
  hint: "Tap a domain to explore →",
} as const;

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      "Angular (v8–v17+)",
      "Angular Material",
      "TypeScript",
      "JavaScript ES6+",
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "Responsive Web Design",
      "RxJS",
      "NgRx State Management",
    ],
  },
  {
    title: "React",
    skills: [
      "React.js",
      "React Native",
      "Redux",
      "Redux Toolkit",
      "Context API",
      "React Hooks",
      "State Management",
    ],
  },
  {
    title: "Mobile",
    skills: [
      "Ionic Framework",
      "React Native",
      "Capacitor",
      "Cordova",
      "Push Notifications",
      "QR Scanning",
      "OCR Data Extraction",
    ],
  },
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Core Java", "Python"],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express.js",
      "RESTful API Integration",
      "PostgreSQL",
      "Firebase Integration",
      "Google Maps Integration",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "Component Based Architecture",
      "Reusable Components",
      "Lazy Loading Modules",
      "Performance Optimization",
      "Cross Browser Compatibility",
    ],
  },
  {
    title: "Practices",
    skills: [
      "Agile / Scrum",
      "Git",
      "Code Reviews",
      "Debugging",
      "Zoho Sprints",
      "OTP Authentication",
    ],
  },
];
