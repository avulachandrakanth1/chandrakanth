import { profile } from "@/constants/profile";
import { Container } from "@/components/shared/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} {profile.name}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
