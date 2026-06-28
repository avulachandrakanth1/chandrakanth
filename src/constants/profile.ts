import type { Profile, SocialLink } from "@/types";

export const siteConfig = {
  name: "Ashwath Reddy K",
  description:
    "AWS DevOps Engineer with 4 years of experience designing, automating, and optimizing cloud infrastructure and CI/CD pipelines on AWS.",
  url: "https://ashwathreddy.dev",
  ogImage: "/og-image.png",
} as const;

export const profile: Profile = {
  name: "Ashwath Reddy K",
  firstName: "Ashwath",
  role: "AWS DevOps Engineer",
  tagline:
    "I design reliable cloud infrastructure, automate deployments, and keep production running at scale.",
  summary:
    "AWS DevOps Engineer with 4 years of experience in designing, automating, and optimizing cloud infrastructure and CI/CD pipelines. Specialized in scalable AWS solutions using EC2, S3, IAM, VPC, Lambda, and CloudWatch. Proficient in Jenkins, Ansible, Terraform, Docker, and Kubernetes — with a strong track record in 24/7 production support, incident response, and ITIL-based operations.",
  email: "ashwathreddy888@gmail.com",
  phone: "+91 81472 66605",
  location: "Whitefield, Bangalore, India",
  resumeUrl: "/resume.pdf",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ashwath-reddy-k",
      icon: "linkedin",
    },
    {
      label: "Email",
      href: "mailto:ashwathreddy888@gmail.com",
      icon: "mail",
    },
  ] satisfies SocialLink[],
};
