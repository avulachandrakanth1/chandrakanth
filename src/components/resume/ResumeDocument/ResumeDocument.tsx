import { resumeData } from "@/constants/resume";
import { ResumeActions } from "@/components/resume/ResumeActions";

import styles from "./ResumeDocument.module.css";

export function ResumeDocument() {
  const {
    name,
    title,
    contacts,
    summary,
    coreCompetencies,
    skills,
    experience,
    projects,
    education,
    achievements,
  } = resumeData;

  return (
    <div className={styles.page}>
      <ResumeActions fileName={`${name.replace(/\s+/g, "_")}_Resume`} />

      <article className={styles.sheet}>
        <header className={styles.header}>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.title}>{title}</p>
          <div className={styles.contacts}>
            {contacts.map((contact, index) => (
              <span key={contact.label} className={styles.contactItem}>
                {contact.href ? (
                  <a href={contact.href}>{contact.value}</a>
                ) : (
                  contact.value
                )}
                {index < contacts.length - 1 && (
                  <span className={styles.contactSep}> · </span>
                )}
              </span>
            ))}
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Summary</h2>
          <p className={styles.summary}>{summary}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Competencies</h2>
          <p className={styles.competencies}>{coreCompetencies.join(" · ")}</p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillGrid}>
            {skills.map((group) => (
              <div key={group.category} className={styles.skillRow}>
                <span className={styles.skillCategory}>{group.category}</span>
                <span className={styles.skillItems}>
                  {group.items.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Professional Experience</h2>
          {experience.map((job) => (
            <div key={`${job.company}-${job.role}`} className={styles.job}>
              <div className={styles.jobHeader}>
                <span className={styles.role}>
                  {job.role} <span className={styles.company}>· {job.company}</span>
                </span>
                <span className={styles.meta}>
                  {job.location} | {job.duration}
                </span>
              </div>
              <ul className={styles.bullets}>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Projects</h2>
          {projects.map((project) => (
            <div key={project.name} className={styles.project}>
              <span className={styles.projectName}>{project.name}</span>
              <p className={styles.stack}>{project.stack.join(" · ")}</p>
              <ul className={styles.bullets}>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {education.map((edu) => (
            <div key={edu.degree} className={styles.eduItem}>
              <span>
                <span className={styles.eduDegree}>{edu.degree}</span>
                {" — "}
                <span className={styles.eduInstitution}>{edu.institution}</span>
              </span>
              <span className={styles.eduMeta}>{edu.duration}</span>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Achievements</h2>
          <ul className={styles.achievements}>
            {achievements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </article>
    </div>
  );
}
