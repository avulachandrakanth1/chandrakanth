import type { AboutHighlight, AboutStrength } from "@/types";

export const aboutContent = {
  label: "About Me",
  title: "Cloud infrastructure that ships and stays up",
  description:
    "Four years in AWS DevOps — automating provisioning, hardening CI/CD, and keeping production reliable around the clock.",

  summary: [
    "I'm an AWS DevOps Engineer with 4 years of hands-on experience building and maintaining cloud infrastructure for enterprise clients. At TCS on the Tata Play Fiber project, I automated AWS provisioning with Terraform and Ansible — cutting manual setup errors by 90% and improving deployment speed by 40%.",
    "I design and manage CI/CD pipelines in Jenkins integrated with Git, GitHub, SonarQube, and Maven for Java application delivery. I've containerized workloads with Docker, deployed them on Kubernetes with auto-scaling, and maintained 99.9% system uptime while monitoring with CloudWatch, Instana, Prometheus, and Grafana.",
    "Previously at Deduce Technology on the Aviva project, I supported multi-account AWS environments, managed VPCs, load balancers, and Terraform-based infrastructure. I'm available for immediate joining and passionate about secure, cost-effective, and observable DevOps solutions.",
  ],

  mindset:
    "Reliable infrastructure isn't just about tools — it's about automation, observability, and teams that can ship with confidence.",

  highlights: [
    { label: "Location", value: "Whitefield, Bangalore" },
    { label: "Education", value: "B.E · Reva University" },
    { label: "Experience", value: "4+ Years" },
    { label: "Availability", value: "Immediate joining" },
  ] satisfies AboutHighlight[],
} as const;

export const coreStrengths: AboutStrength[] = [
  {
    title: "CI/CD & Release Engineering",
    description:
      "Jenkins pipelines integrated with Git, GitHub, Maven, and SonarQube — automated builds, blue/green and canary deployments across the SDLC.",
    icon: "rocket",
  },
  {
    title: "AWS Cloud Infrastructure",
    description:
      "EC2, S3, IAM, VPC, RDS, Lambda, Route53, and CloudWatch — secure, scalable multi-account setups for production and non-production.",
    icon: "cloud",
  },
  {
    title: "Infrastructure as Code",
    description:
      "Terraform and Ansible for provisioning and configuration — reducing manual setup errors by 90% and accelerating delivery by 40%.",
    icon: "code",
  },
  {
    title: "Containers & Orchestration",
    description:
      "Docker containerization on Kubernetes and EKS with auto-scaling, ECR image management, and high-availability cluster design.",
    icon: "shield",
  },
  {
    title: "Monitoring & Observability",
    description:
      "CloudWatch, Instana, Prometheus, and Grafana dashboards — proactive alerting that cut incident response time by 30%.",
    icon: "brain",
  },
  {
    title: "Production Operations",
    description:
      "24/7 support, SLA-based incident management via OTRS, ITIL processes, and Lambda scripts for backups and stale resource cleanup.",
    icon: "book",
  },
];
