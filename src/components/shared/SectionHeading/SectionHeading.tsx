import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  index?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
  index,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "relative mb-8 sm:mb-10",
        align === "center" && "text-center",
        className,
      )}
    >
      {index && (
        <span
          className={cn(
            "pointer-events-none absolute select-none font-semibold tracking-tighter text-foreground/[0.04]",
            align === "center"
              ? "left-1/2 top-0 -translate-x-1/2 text-[3.5rem] sm:text-[5rem] lg:text-[6rem]"
              : "left-0 top-0 text-[3rem] sm:text-[4.5rem] lg:text-[5.5rem]",
          )}
          aria-hidden="true"
        >
          {index}
        </span>
      )}

      <div
        className={cn(
          "relative flex items-center gap-3 pt-6 sm:pt-8",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-gradient-to-r from-accent/80 to-transparent sm:w-10" />
        <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase">
          {label}
        </p>
      </div>

      <h2
        className={cn(
          "relative mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl lg:leading-[1.15]",
          align === "center" && "mx-auto",
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "relative mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
