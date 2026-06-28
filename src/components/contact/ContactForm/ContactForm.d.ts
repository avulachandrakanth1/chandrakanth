export interface ContactFormProps {
  className?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";
