import type { Project } from "@/types";

export const projectsContent = {
  label: "Projects",
  title: "Proof, not promises",
  description:
    "Infrastructure and automation work from production environments — measurable impact, not slide decks.",
} as const;

export const projects: Project[] = [
  {
    title: "Tata Play Fiber — CI/CD Platform",
    description:
      "End-to-end CI/CD pipeline for Java applications on AWS, integrated with quality gates and automated deployments.",
    highlights: [
      "Jenkins pipelines with Git, GitHub, SonarQube, and Maven for streamlined Java application delivery.",
      "Reduced manual setup errors by 90% through Terraform and Ansible-based infrastructure automation.",
      "Improved deployment speed by 40% across release cycles with documented, repeatable processes.",
    ],
    stack: ["Jenkins", "Terraform", "Ansible", "AWS", "Maven", "SonarQube"],
    featured: true,
  },
  {
    title: "Kubernetes Auto-Scaling Platform",
    description:
      "Containerized application platform on Kubernetes with auto-scaling and high-availability cluster design.",
    highlights: [
      "Docker containerization deployed on Kubernetes clusters with auto-scaling policies.",
      "Maintained 99.9% system uptime for production workloads on AWS.",
      "Integrated monitoring and alerting for proactive capacity and health management.",
    ],
    stack: ["Docker", "Kubernetes", "EKS", "AWS", "CloudWatch"],
    featured: true,
  },
  {
    title: "Lambda Automation & Disaster Recovery",
    description:
      "Serverless automation for routine operations, resource hygiene, and backup workflows on AWS.",
    highlights: [
      "Python Lambda functions to detect stale resources and automate routine system backups.",
      "Enhanced disaster recovery capabilities with scheduled, hands-off backup workflows.",
      "Reduced operational toil for the platform team across production environments.",
    ],
    stack: ["AWS Lambda", "Python", "S3", "CloudWatch", "IAM"],
    featured: true,
  },
  {
    title: "Aviva Multi-Account AWS Architecture",
    description:
      "Multi-VPC AWS infrastructure for production and non-production across multiple accounts.",
    highlights: [
      "Managed multiple AWS accounts with separate VPCs for production and non-production workloads.",
      "Configured load balancers, S3 storage, security groups, NACLs, and Route53 DNS.",
      "Terraform provisioning with Ansible configuration; Prometheus and Grafana for proactive monitoring.",
    ],
    stack: ["AWS", "Terraform", "Ansible", "VPC", "Prometheus", "Grafana"],
    featured: false,
  },
  {
    title: "Observability & Incident Response",
    description:
      "Unified monitoring stack reducing mean time to respond across cloud infrastructure and applications.",
    highlights: [
      "CloudWatch, Instana, Prometheus, and Grafana dashboards for infrastructure and application metrics.",
      "Reduced incident response time by 30% through proactive alerting and SLA-based OTRS workflows.",
      "24/7 production support with documented runbooks and ITIL-aligned operational processes.",
    ],
    stack: ["CloudWatch", "Instana", "Prometheus", "Grafana", "OTRS"],
    featured: false,
  },
];
