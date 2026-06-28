<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — Agent Guide

Personal portfolio for **Chandrakanth Avula** (Mobile & Frontend Developer — React Native, Angular, React.js, Ionic). Build it like a product — premium UI, smooth animations, clean architecture.

---

## Source of Truth

Read these before writing code:

| File | Purpose |
|------|---------|
| `context/project-overview.md` | Vision, sections, design, animation strategy, tech stack |
| `context/coding-standards.md` | TypeScript, React, Next.js, styling, naming, performance rules |
| `context/ai-interaction.md` | Workflow, branching, communication, quality bar |
| `context/current-feature.md` | Active feature tracker — update before and after every feature |
| `context/Chandrakanth.pdf` | Resume — primary source for all portfolio content |
| `DEPLOYMENT.md` | GitHub Pages deployment guide & troubleshooting |

**Content rule:** All copy (experience, skills, projects, achievements) comes from the resume PDF and lives in `src/constants/`. Never hardcode resume content inside components.

---

## Tech Stack

- **Next.js 16** — App Router, `src/` directory, Turbopack dev
- **TypeScript** — strict mode, no `any`
- **Tailwind CSS v4** — `@import "tailwindcss"`, `@theme` tokens in `globals.css`
- **Framer Motion** — primary animation library
- **Lenis** — smooth scroll (`SmoothScrollProvider`)
- **Lucide React** — icons (brand icons need custom SVGs — see `SocialIcon`)
- **Deployment** — GitHub Pages via static export (`output: "export"`). See `DEPLOYMENT.md`.

Optional: GSAP only when Framer Motion is insufficient.

> **Static export constraints:** no server runtime — API routes, server actions, and `next/image` optimization are unavailable. The contact form posts directly to FormSubmit from the browser; `next.config.ts` sets `output: "export"`, `basePath: "/chandrakanth"`, and `images.unoptimized: true`.

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       → root: <html>, ThemeProvider, fonts, metadata
│   ├── globals.css      → theme tokens, base styles, animation utilities
│   ├── (site)/          → main site (Navbar + Footer + SmoothScrollProvider)
│   │   ├── layout.tsx
│   │   └── page.tsx     → single-page portfolio (all sections)
│   └── resume/          → standalone /resume page (print-to-PDF, no site chrome)
├── components/
│   ├── providers/       → SmoothScrollProvider, ThemeProvider
│   ├── shared/          → Container, Section, Button, Navbar, Footer, ThemeToggle…
│   ├── hero/            → ✅ done
│   ├── about/           → ✅ done
│   ├── skills/          → ✅ done
│   ├── experience/      → ✅ done
│   ├── projects/        → ✅ done
│   ├── achievements/    → ✅ done
│   ├── contact/         → ✅ done
│   └── resume/          → ResumeDocument, ResumeActions (downloadable resume)
├── constants/           → resume data (profile, skills, projects, resume…)
├── assets/              → images (e.g. dev-gif.svg hero illustration)
├── hooks/
├── lib/                 → cn(), animation variants
├── types/
└── utils/
```

---

## Component Conventions

### Section components (feature folders)

Each section sub-component uses **three co-located files**:

```
ComponentName.tsx
ComponentName.module.css   → scoped styles (glass, hover, layout)
ComponentName.d.ts         → props and component-specific types
```

- Combine CSS Modules with Tailwind utilities where appropriate
- One component per file; group by feature folder (`components/about/`, etc.)
- Server Components by default; add `"use client"` only for animations, state, browser APIs, or event handlers

### Shared components

Live in `components/shared/`. Reuse `Container`, `Section`, `SectionHeading`, `Button` before creating new primitives.

### Naming

| Kind | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `HeroSection.tsx` |
| Hooks | camelCase, `use` prefix | `useScrollReveal` |
| Constants | SCREAMING_SNAKE_CASE | `ANIMATION_DURATION` |
| Variables / functions | camelCase | `fadeInUp` |

---

## Design System

- **Theme:** Dual light/dark via `data-theme` on `<html>` (`ThemeProvider` + `ThemeToggle`); persisted in `localStorage`, theme switch uses a View Transitions circular reveal.
- **Palette:** Professional charcoal/slate neutrals with a **teal accent** (`--accent: #2dd4bf` dark / `#0d9488` light). No gold, purple, or flashy gradients.
- **Style:** Minimal, glassmorphism, soft borders, clean spacing, subtle teal gradients.
- **Typography:** Geist Sans via `next/font`
- **Motion:** 60fps target; respect `prefers-reduced-motion`
- **Responsive:** Mobile-first → `sm` → `md` → `lg` → `xl` → `2xl`

All theme colors are CSS variables in `src/app/globals.css` (`[data-theme="dark"]` / `[data-theme="light"]`). Prefer `var(--accent)` etc. over hard-coded hex so both themes stay in sync. Animation presets live in `src/lib/animations.ts`.

---

## Sections Roadmap

| Section | Status | Anchor |
|---------|--------|--------|
| Hero | ✅ Done | `#hero` |
| About | ✅ Done | `#about` |
| Skills | ✅ Done | `#skills` |
| Experience | ✅ Done | `#experience` |
| Projects | ✅ Done | `#projects` |
| Achievements | ✅ Done | `#achievements` |
| Contact | ✅ Done | `#contact` |

All sections are complete and wired into `src/app/(site)/page.tsx`. A standalone `/resume` page renders a downloadable, ATS-friendly resume. See `context/project-overview.md` for per-section content and animation requirements.

---

## Feature Workflow

Follow this for **every** feature:

1. **Document** — Update `context/current-feature.md` (status, goals, requirements)
2. **Plan** — Break into components; identify animations and responsive behavior
3. **Implement** — Follow design system; pull content from constants/resumes
4. **Animate** — Entrance, hover, scroll reveals; avoid over-animation
5. **Test** — Mobile, tablet, desktop; accessibility; `npm run build` (zero errors)
6. **Review** — Code quality, animation consistency, performance
7. **Complete** — Mark feature done in `current-feature.md` history; ask before committing

### Git

- Branch: `feature/skills-section`, `fix/navbar-animation`, etc.
- Commits: `feat: add skills section`, `fix: resolve mobile layout`
- One feature per branch; one purpose per commit
- **Ask before creating commits or PRs**

---

## Quality Checklist

Before marking a feature complete:

- [ ] Responsive on mobile, tablet, desktop
- [ ] Animations smooth (no jank)
- [ ] Semantic HTML, proper heading hierarchy (single `h1` on page)
- [ ] Focus states, aria labels, keyboard navigation
- [ ] No hardcoded resume content in JSX
- [ ] No unused imports or dead code
- [ ] `npm run build` passes with zero errors

**Benchmark:** *"This developer knows how to build real products."*

---

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build / static export — required before completing features
npm run lint     # ESLint
npm run deploy   # Build + publish to the gh-pages branch (adds .nojekyll, -t dotfiles)
./deploy.sh      # macOS/Linux wrapper around npm run deploy (with verification)
```

> **Deploy note:** GitHub Pages runs Jekyll, which hides `_next/`. The deploy publishes a `.nojekyll` file via `gh-pages -t` so CSS/JS load. Full details in `DEPLOYMENT.md`.

---

## Do Not

- Add or remove sections without user confirmation
- Make major architectural changes without asking
- Use inline styles
- Use class components
- Commit `.env` or secrets
- Skip updating `current-feature.md`
- Push or commit unless explicitly asked

---

## Key Files

| Path | Role |
|------|------|
| `src/constants/profile.ts` | Name, role, tagline, socials, SEO/site config |
| `src/constants/navigation.ts` | Navbar anchor links |
| `src/constants/skills.ts` | Skill categories |
| `src/constants/experience.ts` | Work history |
| `src/constants/projects.ts` | Project cards data |
| `src/constants/achievements.ts` | Stats, education, certifications |
| `src/constants/about.ts` | About section copy |
| `src/constants/resume.ts` | Content for the standalone `/resume` page |
| `src/app/globals.css` | Theme tokens (light/dark), base styles, animation utilities |
| `src/assets/images/dev-gif.svg` | Hero illustration (theme-colored) |
| `next.config.ts` | Static export, `basePath`, image settings |
| `public/resume.pdf` | Downloadable resume PDF (linked from hero) |
| `DEPLOYMENT.md` / `deploy.sh` | Deployment guide and one-command deploy script |
