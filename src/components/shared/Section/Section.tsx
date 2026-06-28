import { cn } from "@/lib/cn";
import { Container } from "@/components/shared/Container";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function Section({
  id,
  children,
  className,
  containerClassName,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative py-12 sm:py-14 lg:py-16", className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
