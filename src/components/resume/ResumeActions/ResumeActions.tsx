"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";

import styles from "./ResumeActions.module.css";

interface ResumeActionsProps {
  fileName: string;
}

export function ResumeActions({ fileName }: ResumeActionsProps) {
  const handleDownload = () => {
    const previousTitle = document.title;
    document.title = fileName;
    window.print();
    window.setTimeout(() => {
      document.title = previousTitle;
    }, 500);
  };

  return (
    <div className={styles.toolbar}>
      <Link href="/" className={`${styles.btn} ${styles.ghost}`}>
        <ArrowLeft className={styles.icon} aria-hidden="true" />
        Portfolio
      </Link>
      <button
        type="button"
        onClick={handleDownload}
        className={`${styles.btn} ${styles.primary}`}
      >
        <Download className={styles.icon} aria-hidden="true" />
        Download PDF
      </button>
    </div>
  );
}
