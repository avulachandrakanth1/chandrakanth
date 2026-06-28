import engagementRewardsImg from "@/assets/images/project-engagement-rewards.svg";
import loyaltyMobileImg from "@/assets/images/project-loyalty-mobile.svg";
import loyaltyRewardsImg from "@/assets/images/project-loyalty-rewards.svg";
import tradeEngagementImg from "@/assets/images/project-trade-engagement.svg";

import type { Project } from "@/types";

const asSrc = (img: string | { src: string }): string =>
  typeof img === "string" ? img : img.src;

export const projectsContent = {
  label: "Projects",
  title: "Proof, not promises",
  description:
    "Enterprise Angular web and hybrid mobile applications built for loyalty and engagement platforms serving 50K+ users.",
} as const;

export const projects: Project[] = [
  {
    // title: "Carlsberg Bandhan", // client name hidden — show features only
    title: "Enterprise Loyalty Mobile App",
    image: asSrc(loyaltyMobileImg),
    description:
      "Enterprise loyalty mobile platform built with React Native, with automated product validation workflows.",
    highlights: [
      "Developed an enterprise loyalty mobile platform using React Native.",
      "Implemented QR scanning and OCR workflows for automated product validation.",
      "Built an admin dashboard for campaign configuration and reward management.",
      "Managed predictable app state with Redux Toolkit and optimized REST API communication.",
    ],
    stack: [
      "React Native",
      "Redux Toolkit",
      "State Management",
      "REST API Integration",
      "QR Scanner",
      "OCR Integration",
    ],
    featured: true,
  },
  {
    // title: "Bud4Trade", // client name hidden — show features only
    title: "Trade Engagement Platform",
    image: asSrc(tradeEngagementImg),
    description:
      "Trade engagement application enabling partners to track schemes, rewards, and performance.",
    highlights: [
      "Developed a trade engagement app for tracking schemes, rewards, and performance.",
      "Implemented modules for reward redemption and engagement campaigns.",
      "Designed scalable UI components ensuring cross-device compatibility.",
    ],
    stack: ["Angular", "TypeScript", "RxJS", "Bootstrap", "REST API"],
    featured: true,
  },
  {
    // title: "Greenply Samet Super Stars Club", // client name hidden — show features only
    title: "Loyalty Rewards Platform",
    image: asSrc(loyaltyRewardsImg),
    description:
      "Loyalty rewards platform enabling carpenters to earn and redeem reward points.",
    highlights: [
      "Built a loyalty rewards platform for carpenters to earn and redeem points.",
      "Implemented authentication, reward tracking, and purchase validation workflows.",
      "Built reward redemption modules including e-vouchers and merchandise rewards.",
    ],
    stack: ["Angular", "Ionic", "NgRx", "Firebase", "REST API"],
    featured: true,
  },
  {
    // title: "Wipro Urja", // client name hidden — show features only
    title: "Engagement & Rewards App",
    image: asSrc(engagementRewardsImg),
    description:
      "Mobile application and admin panel for engagement and reward management programs.",
    highlights: [
      "Developed a mobile app and admin panel for engagement and reward programs.",
      "Implemented QR scanning for product validation and point earning.",
      "Built refer-and-earn and quiz engagement modules.",
      "Implemented OTP authentication and cashback redemption workflows.",
    ],
    stack: ["Angular", "Ionic", "Capacitor", "Node.js", "REST API"],
    featured: false,
  },
];
