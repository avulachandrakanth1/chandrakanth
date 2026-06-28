"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

import { useTheme } from "@/components/providers/ThemeProvider";
import { cn } from "@/lib/cn";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      aria-pressed={theme === "dark"}
      className={cn(
        "glass-card inline-flex h-10 w-10 items-center justify-center rounded-full text-muted transition-base hover:border-accent/30 hover:text-accent",
        className,
      )}
    >
      <motion.span
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.8 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex"
      >
        {theme === "dark" ? (
          <Sun className="h-4 w-4" aria-hidden="true" />
        ) : (
          <Moon className="h-4 w-4" aria-hidden="true" />
        )}
      </motion.span>
    </button>
  );
}
