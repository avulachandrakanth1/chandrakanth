import type { Experience } from "@/types";

export const experienceContent = {
  label: "Experience",
  title: "The journey so far",
  description:
    "Enterprise cloud and DevOps roles — from multi-VPC AWS support to full CI/CD ownership on production fiber infrastructure.",
} as const;

export const experiences: Experience[] = [
  {
    company: "TATA Consultancy Services (TCS)",
    role: "AWS DevOps Engineer",
    duration: "Feb 2022 — Oct 2025",
    location: "Bangalore · Tata Play Fiber Project",
    highlights: [
      "Automated AWS infrastructure provisioning with Terraform and Ansible, reducing manual setup errors by 90% and improving deployment speed by 40%.",
      "Designed and managed Jenkins CI/CD pipelines integrated with Git, GitHub, SonarQube, and Maven for Java application deployments.",
      "Containerized applications with Docker and deployed on Kubernetes with auto-scaling, maintaining 99.9% system uptime.",
      "Developed Python Lambda scripts for stale resource checks and automated backups, strengthening disaster recovery.",
      "Monitored infrastructure with AWS CloudWatch, Instana, and Grafana — reducing incident response time by 30%.",
      "Administered EC2, IAM, S3, RDS, VPC, and Lambda; handled SLA-based incident management via OTRS ticketing.",
    ],
  },
  {
    company: "Deduce Technology",
    role: "AWS Engineer",
    duration: "Aug 2021 — Feb 2022",
    location: "Bangalore · Aviva Project",
    highlights: [
      "Provided AWS customer support and built CI/CD pipelines using Jenkins for continuous integration and deployment.",
      "Managed source code branches in Git and automated build/deployment workflows with Maven and Jenkins.",
      "Configured and managed VPCs, subnets, security groups, NACLs, load balancers, and S3 storage across multiple AWS accounts.",
      "Monitored EC2, RDS, and EBS via CloudWatch with alarms and automated actions; created AMI backups for critical instances.",
      "Provisioned AWS resources with Terraform (IaC) and configured them using Ansible; implemented Prometheus and Grafana alerting.",
    ],
  },
];
