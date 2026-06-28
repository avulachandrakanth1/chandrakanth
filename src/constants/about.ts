import type { AboutHighlight, AboutStrength } from "@/types";

export const aboutContent = {
  label: "About Me",
  title: "Mobile apps that ship and scale",
  description:
    "Four years building scalable mobile applications — cross-platform with React Native, hybrid with Ionic, performance-focused and shipped to 50K+ users.",

  summary: [
    "I'm a Mobile Application Developer with 4+ years of experience building scalable cross-platform and hybrid mobile applications. At Bigcity Promotions, I've delivered 9+ production apps serving 50K+ users across loyalty and engagement platforms — architecting modular, component-based structures that improve maintainability and scalability.",
    "I build with React Native, Angular, and Ionic using TypeScript, and manage state with Redux Toolkit and NgRx. I've developed 20+ reusable UI components to accelerate delivery and improved app performance by 30% through lazy loading, optimized REST API communication, and efficient rendering — while integrating QR scanning, OCR, push notifications, and OTP authentication via Capacitor.",
    "On the backend, I develop RESTful APIs with Node.js and Express.js to support my mobile and web apps. I work in Agile teams using Zoho Sprints, maintain a 90% average sprint completion rate, mentor junior developers, and keep code quality high through Git workflows, debugging, and peer code reviews.",
    "I fast-track development using AI-assisted workflows while maintaining context efficiently to optimize productivity and minimize token usage.",
  ],

  mindset:
    "Great mobile apps aren't just screens — they're reusable architecture, smooth performance, and experiences real users trust at scale.",

  highlights: [
    { label: "Location", value: "Bengaluru, India" },
    { label: "Education", value: "B.Tech ECE · Yogi Vemana University" },
    { label: "Experience", value: "4+ Years" },
    { label: "Availability", value: "Open to opportunities" },
  ] satisfies AboutHighlight[],
} as const;

export const coreStrengths: AboutStrength[] = [
  {
    title: "Cross-Platform Mobile",
    description:
      "React Native with Redux Toolkit and Context API — building cross-platform mobile apps with reusable components and predictable state.",
    icon: "rocket",
  },
  {
    title: "Hybrid Mobile Development",
    description:
      "Ionic, Capacitor, and Cordova — QR scanning, OCR extraction, push notifications, and OTP authentication for production mobile apps.",
    icon: "code",
  },
  {
    title: "State Management",
    description:
      "Redux, Redux Toolkit, Context API, RxJS, and NgRx for predictable, scalable state across mobile and web applications.",
    icon: "brain",
  },
  {
    title: "Performance Optimization",
    description:
      "Improved app performance by 30% via lazy loading, optimized REST API communication, and efficient rendering across devices.",
    icon: "shield",
  },
  {
    title: "Reusable UI Architecture",
    description:
      "Developed 20+ reusable UI components and responsive, cross-browser interfaces that cut development time for new features.",
    icon: "cloud",
  },
  {
    title: "Backend & Collaboration",
    description:
      "RESTful APIs with Node.js and Express.js, Agile delivery via Zoho Sprints, peer code reviews, and mentoring junior developers.",
    icon: "book",
  },
];
