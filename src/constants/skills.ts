import type { SkillCategory } from "@/types";

export const skillsContent = {
  label: "Skills",
  title: "Peel back the layers",
  description:
    "Six domains behind the work — cloud, pipelines, automation, containers, monitoring, and delivery practices.",
  hint: "Tap a domain to explore →",
} as const;

export const skillCategories: SkillCategory[] = [
  {
    title: "AWS Cloud",
    skills: [
      "EC2",
      "S3",
      "IAM",
      "VPC",
      "RDS",
      "Lambda",
      "CloudWatch",
      "Route53",
      "ECR",
      "EKS",
      "EBS",
      "ELB",
      "Auto Scaling",
    ],
  },
  {
    title: "CI/CD",
    skills: [
      "Jenkins",
      "Git",
      "GitHub",
      "Maven",
      "SonarQube",
      "Jira",
      "GitLab",
    ],
  },
  {
    title: "IaC & Automation",
    skills: [
      "Terraform",
      "Ansible",
      "Ansible Tower",
      "Python Scripting",
      "Shell Scripting",
    ],
  },
  {
    title: "Containers",
    skills: ["Docker", "Kubernetes", "EKS", "ECR", "Container Orchestration"],
  },
  {
    title: "Monitoring",
    skills: [
      "AWS CloudWatch",
      "Prometheus",
      "Grafana",
      "Instana",
      "Alerting & Dashboards",
    ],
  },
  {
    title: "Practices",
    skills: [
      "Agile",
      "SDLC",
      "Blue/Green Deployment",
      "Canary Releases",
      "ITIL",
      "Incident Management",
      "24/7 Production Support",
    ],
  },
];
