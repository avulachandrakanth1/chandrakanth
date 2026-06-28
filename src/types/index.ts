export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail";
}

export interface Profile {
  name: string;
  firstName: string;
  role: string;
  tagline: string;
  summary: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl: string;
  socials: SocialLink[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  highlights: string[];
}

export interface Project {
  title: string;
  description: string;
  highlights: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Achievement {
  value: string;
  label: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  coursework: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface AboutHighlight {
  label: string;
  value: string;
}

export interface AboutStrength {
  title: string;
  description: string;
  icon: "code" | "brain" | "shield" | "cloud" | "rocket" | "book";
}
