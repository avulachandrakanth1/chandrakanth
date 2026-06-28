import type { Profile, SocialLink } from "@/types";

export const siteConfig = {
  name: "Chandrakanth Avula",
  description:
    "Chandrakanth Avula — Mobile Application & Frontend Developer specializing in React Native, Angular, React.js, and Ionic. 4+ years building fast, scalable apps trusted by 50,000+ users.",
  url: "https://chandrakanth.dev",
  ogImage: "/og-image.png",
} as const;

export const profile: Profile = {
  name: "Chandrakanth Avula",
  firstName: "Chandrakanth",
  role: "Mobile & Frontend Developer",
  tagline:
    "I build fast, reliable apps with React Native, Angular & Ionic — 9+ products shipped and trusted by 50,000+ users. Take a look at what I've built, and what I can build for you.",
  summary:
    "Mobile Application Developer with 4+ years of experience building scalable cross-platform and hybrid mobile applications. Delivered 9+ production apps used by 50K+ users with a strong focus on performance optimization, reusable components, and REST API integration. Experienced in React Native, Angular, Ionic, TypeScript, and state management with Redux Toolkit and NgRx.",
  email: "avulachandrakanth05@gmail.com",
  phone: "+91 95532 51408",
  location: "Bengaluru, India",
  resumeUrl: "/resume.pdf",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/avulachandrakanth1/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/avulachandrakanth1",
      icon: "github",
    },
    {
      label: "Email",
      href: "mailto:avulachandrakanth05@gmail.com",
      icon: "mail",
    },
  ] satisfies SocialLink[],
};
