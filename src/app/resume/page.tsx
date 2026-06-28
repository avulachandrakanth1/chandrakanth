import type { Metadata } from "next";

import { ResumeDocument } from "@/components/resume/ResumeDocument";
import { resumeData } from "@/constants/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: `ATS-optimized resume for ${resumeData.name} — ${resumeData.title}.`,
};

export default function ResumePage() {
  return <ResumeDocument />;
}
