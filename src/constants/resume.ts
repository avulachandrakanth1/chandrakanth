export interface ResumeSkillGroup {
  category: string;
  items: string[];
}

export interface ResumeExperience {
  company: string;
  role: string;
  location: string;
  duration: string;
  bullets: string[];
}

export interface ResumeProject {
  name: string;
  stack: string[];
  bullets: string[];
}

export interface ResumeEducation {
  degree: string;
  institution: string;
  duration: string;
}

export interface ResumeData {
  name: string;
  title: string;
  contacts: { label: string; value: string; href?: string }[];
  summary: string;
  coreCompetencies: string[];
  skills: ResumeSkillGroup[];
  experience: ResumeExperience[];
  projects: ResumeProject[];
  education: ResumeEducation[];
  achievements: string[];
}

export const resumeData: ResumeData = {
  name: "Chandrakanth Avula",
  title: "Mobile Application Developer | Frontend Developer (React Native, React.js, Angular, Ionic)",
  contacts: [
    { label: "Email", value: "avulachandrakanth05@gmail.com", href: "mailto:avulachandrakanth05@gmail.com" },
    { label: "Phone", value: "+91 95532 51408", href: "tel:+919553251408" },
    { label: "Location", value: "Bengaluru, India" },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/avulachandrakanth1",
      href: "https://www.linkedin.com/in/avulachandrakanth1/",
    },
    {
      label: "GitHub",
      value: "github.com/avulachandrakanth1",
      href: "https://github.com/avulachandrakanth1",
    },
  ],

  summary:
    "Mobile Application and Frontend Developer with 4+ years of experience building scalable, high-performance cross-platform mobile and web applications using React Native, React.js, Angular, and Ionic. Delivered 9+ production applications serving 50,000+ users across enterprise loyalty and engagement platforms. Proficient in TypeScript, JavaScript (ES6+), Redux Toolkit, NgRx, RxJS, and REST API integration, with a strong focus on reusable component architecture, state management, performance optimization, and responsive UI. Experienced in AI-assisted development workflows that accelerate delivery while maintaining code quality and context efficiency.",

  coreCompetencies: [
    "Mobile Application Development",
    "Cross-Platform Development",
    "React Native",
    "React.js",
    "Angular",
    "Ionic Framework",
    "Frontend Architecture",
    "State Management",
    "REST API Integration",
    "Responsive Web Design",
    "Performance Optimization",
    "Agile / Scrum",
  ],

  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript (ES6+)", "Core Java", "Python", "HTML5", "CSS3"],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "Angular (v8–v17+)",
        "Angular Material",
        "Bootstrap 5",
        "Responsive Web Design",
        "Cross-Browser Compatibility",
      ],
    },
    {
      category: "Mobile",
      items: [
        "React Native",
        "Ionic Framework",
        "Capacitor",
        "Cordova",
        "Push Notifications",
        "QR Scanner Integration",
        "OCR Integration",
      ],
    },
    {
      category: "State Management",
      items: ["Redux", "Redux Toolkit", "Context API", "React Hooks", "RxJS", "NgRx"],
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "Express.js", "RESTful API Integration", "PostgreSQL", "Firebase"],
    },
    {
      category: "Tools & Workflow",
      items: [
        "Git",
        "GitHub",
        "Agile / Scrum",
        "Zoho Sprints",
        "AI-Assisted Development",
        "Code Reviews",
        "Debugging",
      ],
    },
  ],

  experience: [
    {
      company: "Bigcity Promotions",
      role: "Mobile Application Developer",
      location: "Bengaluru, India",
      duration: "Jun 2022 – Present",
      bullets: [
        "Built and shipped 9+ production-grade cross-platform mobile and web applications using React Native, Angular, and Ionic, serving 50,000+ active users across enterprise loyalty and engagement platforms.",
        "Developed 20+ reusable, modular UI components with React.js and Angular, reducing feature development time and improving maintainability across multiple teams.",
        "Improved application performance by 30% by implementing lazy loading, optimized REST API communication, and efficient rendering strategies.",
        "Engineered predictable, scalable state management using Redux Toolkit, Context API, RxJS, and NgRx across complex mobile and web workflows.",
        "Integrated QR scanning, OCR data extraction, push notifications, and OTP authentication using Capacitor plugins for production mobile applications.",
        "Designed and consumed RESTful APIs with Node.js and Express.js to power frontend and mobile applications.",
        "Accelerated feature delivery using AI-assisted development workflows while maintaining context efficiency to optimize productivity and minimize token usage.",
        "Maintained a 90% average sprint completion rate in Agile/Scrum teams using Zoho Sprints; mentored junior developers and led peer code reviews.",
      ],
    },
  ],

  projects: [
    {
      name: "Carlsberg Bandhan — Loyalty Mobile Platform",
      stack: ["React Native", "Redux Toolkit", "State Management", "REST API Integration", "QR Scanner", "OCR Integration"],
      bullets: [
        "Built an enterprise loyalty mobile platform with React Native, implementing QR scanning and OCR workflows for automated product validation.",
        "Managed predictable app state with Redux Toolkit and optimized REST API communication for smooth performance at scale.",
        "Delivered an admin dashboard for campaign configuration and reward management.",
      ],
    },
    {
      name: "Bud4Trade — Trade Engagement App",
      stack: ["Angular", "TypeScript", "RxJS", "REST API Integration"],
      bullets: [
        "Developed a trade engagement application enabling partners to track schemes, rewards, and performance metrics.",
        "Built reward redemption and engagement campaign modules with scalable, cross-device UI components.",
      ],
    },
    {
      name: "Greenply Samet Super Stars Club — Loyalty Rewards Platform",
      stack: ["Angular", "Ionic", "NgRx", "Firebase"],
      bullets: [
        "Developed a loyalty rewards platform enabling carpenters to earn and redeem points, with authentication and purchase-validation workflows.",
        "Built reward redemption modules including e-vouchers and merchandise rewards.",
      ],
    },
    {
      name: "Wipro Urja — Engagement & Rewards App",
      stack: ["Angular", "Ionic", "Capacitor", "Node.js"],
      bullets: [
        "Built a mobile app and admin panel for engagement and reward programs with QR-based product validation and point earning.",
        "Implemented OTP authentication, refer-and-earn, quiz modules, and cashback redemption workflows.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) — Electronics & Communication Engineering",
      institution: "Yogi Vemana University",
      duration: "2017 – 2021",
    },
  ],

  achievements: [
    "Above & Beyond Award (2024) — recognized for delivering high-quality production applications.",
    "Hackathon Runner-Up (2025) — built scalable frontend solutions under tight deadlines.",
    "Delivered 9+ production applications serving 50,000+ users with a 30% performance improvement.",
  ],
};
