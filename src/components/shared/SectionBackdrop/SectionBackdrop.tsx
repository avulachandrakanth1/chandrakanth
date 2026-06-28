import { cn } from "@/lib/cn";

type BackdropVariant = "violet" | "indigo" | "mixed" | "warm";

interface SectionBackdropProps {
  variant?: BackdropVariant;
  className?: string;
}

const variantStyles: Record<BackdropVariant, string> = {
  violet:
    "bg-[radial-gradient(ellipse_80%_50%_at_20%_0%,rgb(139_92_246/0.14),transparent_55%)]",
  indigo:
    "bg-[radial-gradient(ellipse_70%_45%_at_80%_10%,rgb(99_102_241/0.12),transparent_50%)]",
  mixed:
    "bg-[radial-gradient(ellipse_60%_40%_at_10%_20%,rgb(139_92_246/0.1),transparent_50%),radial-gradient(ellipse_50%_35%_at_90%_60%,rgb(99_102_241/0.08),transparent_45%)]",
  warm:
    "bg-[radial-gradient(ellipse_65%_45%_at_50%_0%,rgb(139_92_246/0.11),transparent_55%)]",
};

export function SectionBackdrop({
  variant = "mixed",
  className,
}: SectionBackdropProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
      aria-hidden="true"
    >
      <div className={cn("absolute inset-0", variantStyles[variant])} />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,var(--background))] opacity-80" />
      <div className="absolute inset-0 opacity-[0.025] [background-image:radial-gradient(circle_at_1px_1px,var(--foreground)_1px,transparent_0)] [background-size:22px_22px]" />
    </div>
  );
}
