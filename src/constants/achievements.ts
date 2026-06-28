import type { Achievement, Certification, Education } from "@/types";

export const achievementsContent = {
  label: "Achievements",
  title: "Numbers with context",
  description:
    "Outcomes from production environments — reliability, speed, and operational excellence you can measure.",
} as const;

export const achievements: Achievement[] = [
  {
    value: "4+",
    label: "Years Experience",
    description: "AWS DevOps across enterprise telecom and insurance cloud projects",
  },
  {
    value: "99.9%",
    label: "System Uptime",
    description: "Kubernetes deployments with auto-scaling on production workloads",
  },
  {
    value: "90%",
    label: "Fewer Setup Errors",
    description: "Infrastructure automation with Terraform and Ansible at TCS",
  },
  {
    value: "40%",
    label: "Faster Deployments",
    description: "CI/CD pipeline optimization with Jenkins and automated provisioning",
  },
];

export const education: Education = {
  degree: "Bachelor of Engineering (Civil)",
  institution: "Reva University, Bangalore",
  duration: "Graduated: June 2020 · CGPA 7.2",
  coursework: [
    "Engineering Mathematics",
    "Structural Analysis",
    "Geotechnical Engineering",
    "Project Management",
    "Environmental Engineering",
  ],
};

export const certifications: Certification[] = [];
