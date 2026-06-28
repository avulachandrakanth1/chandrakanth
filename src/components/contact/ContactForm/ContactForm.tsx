"use client";

import { Check, Copy, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { Button } from "@/components/shared/Button";
import { profile } from "@/constants/profile";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/cn";

import type {
  ContactFormData,
  ContactFormProps,
  ContactFormStatus,
} from "./ContactForm.d";

import styles from "./ContactForm.module.css";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  message: "",
};

function validateForm(data: ContactFormData): Partial<ContactFormData> {
  const errors: Partial<ContactFormData> = {};

  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address";
  }
  if (!data.message.trim()) {
    errors.message = "Message is required";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }

  return errors;
}

function buildMailtoLink(data: ContactFormData): string {
  const subject = encodeURIComponent(`Portfolio inquiry from ${data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\n\n${data.message}`,
  );
  return `mailto:${profile.email}?subject=${subject}&body=${body}`;
}

export function ContactForm({ className }: ContactFormProps) {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");
  const [serverError, setServerError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (
    field: keyof ContactFormData,
    value: string,
  ): void => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
    if (serverError) setServerError("");
  };

  const copyEmail = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        error?: string;
      };

      if (!response.ok || !result.ok) {
        setStatus("error");
        setServerError(result.error ?? "Could not send your message.");
        return;
      }

      setStatus("success");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
      setServerError("Network error. Try the email options below.");
    }
  };

  return (
    <motion.form
      className={cn(styles.form, className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.formHeader}>
        <p className={styles.formTitle}>Send a message</p>
        <p className={styles.formSubtitle}>
          Share a bit about your idea, role, or question. No templates required.
        </p>
      </div>

      {status === "success" && (
        <p className={styles.success} role="status">
          <Check className="h-4 w-4 shrink-0" aria-hidden="true" />
          Message sent — I&apos;ll get back to you soon.
        </p>
      )}

      {status === "error" && serverError && (
        <div className={styles.errorBox} role="alert">
          <p>{serverError}</p>
          <div className={styles.fallbacks}>
            <a href={buildMailtoLink(formData)} className={styles.fallbackBtn}>
              <Mail className="h-4 w-4" aria-hidden="true" />
              Open in email app
            </a>
            <button
              type="button"
              className={styles.fallbackBtn}
              onClick={copyEmail}
            >
              {copied ? (
                <Check className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4" aria-hidden="true" />
              )}
              {copied ? "Copied" : "Copy my email"}
            </button>
          </div>
        </div>
      )}

      <div className={styles.field}>
        <label htmlFor="contact-name" className={styles.label}>
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          className={styles.input}
          placeholder="Your name"
          value={formData.name}
          onChange={(event) => handleChange("name", event.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
        />
        {errors.name && (
          <p id="contact-name-error" className={styles.error} role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-email" className={styles.label}>
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          className={styles.input}
          placeholder="you@example.com"
          value={formData.email}
          onChange={(event) => handleChange("email", event.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
        />
        {errors.email && (
          <p id="contact-email-error" className={styles.error} role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          className={styles.textarea}
          placeholder="Tell me about your project or opportunity..."
          value={formData.message}
          onChange={(event) => handleChange("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
        />
        {errors.message && (
          <p id="contact-message-error" className={styles.error} role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        className={cn(styles.submit, "btn-shine")}
        disabled={status === "submitting"}
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </motion.form>
  );
}
