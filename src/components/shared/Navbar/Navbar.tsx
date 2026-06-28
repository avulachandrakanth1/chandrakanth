"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { navLinks } from "@/constants/navigation";
import { profile } from "@/constants/profile";
import { cn } from "@/lib/cn";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/shared/Button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

import styles from "./Navbar.module.css";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className={cn(styles.nav, isScrolled && styles.navScrolled)}>
      <Container>
        <div className={styles.bar}>
          <Link href="#hero" className={styles.logo}>
            {profile.firstName}
            <span className={styles.logoDot}>.</span>
          </Link>

          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            <ThemeToggle />
            <Button href="#contact" size="sm" className="btn-shine">
              Get in Touch
            </Button>
          </div>

          <div className={styles.mobileActions}>
            <ThemeToggle />
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className={styles.menuBtn}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className={styles.mobilePanel}
            >
              <div className={styles.mobileLinks}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={styles.mobileLink}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className={styles.mobileCta}
                  onClick={() => setIsOpen(false)}
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
