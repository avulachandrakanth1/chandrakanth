<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — Agent Guide

Personal portfolio for **Pulikanti Varsha** (Full-Stack Web Developer + ML/AI). Build it like a product — premium UI, smooth animations, clean architecture.

---

## Source of Truth

Read these before writing code:

| File | Purpose |
|------|---------|
| `context/project-overview.md` | Vision, sections, design, animation strategy, tech stack |
| `context/coding-standards.md` | TypeScript, React, Next.js, styling, naming, performance rules |
| `context/ai-interaction.md` | Workflow, branching, communication, quality bar |
| `context/current-feature.md` | Active feature tracker — update before and after every feature |
| `context/Pulikanti_Varsha_Resume.pdf` | Full-Stack MERN resume (primary content) |
| `context/Pulikanti_Varsha_Resume (1).pdf` | ML/AI resume (projects, certs, ML skills) |

**Content rule:** All copy (experience, skills, projects, achievements) comes from the resume PDFs and lives in `src/constants/`. Never hardcode resume content inside components.

---

## Tech Stack

- **Next.js 16** — App Router, `src/` directory, Turbopack dev
- **TypeScript** — strict mode, no `any`
- **Tailwind CSS v4** — `@import "tailwindcss"`, `@theme` tokens in `globals.css`
- **Framer Motion** — primary animation library
- **Lenis** — smooth scroll (`SmoothScrollProvider`)
- **Lucide React** — icons (brand icons need custom SVGs — see `SocialIcon`)
- **Deployment** — Vercel

Optional: GSAP only when Framer Motion is insufficient.

---

## Project Structure

```
src/
├── app/                 → layout.tsx, page.tsx, globals.css
├── components/
│   ├── providers/       → SmoothScrollProvider
│   ├── shared/          → Container, Section, Button, Navbar, Footer…
│   ├── hero/            → ✅ done
│   ├── about/           → ✅ done
│   ├── skills/          → next
│   ├── experience/
│   ├── projects/
│   ├── achievements/
│   └── contact/
├── constants/           → resume data (profile, skills, projects…)
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

- **Theme:** Dark-first (`color-scheme: dark`)
- **Palette:** Zinc background, light foreground, violet accent (`--accent: #8b5cf6`)
- **Style:** Minimal, glassmorphism, gradient accents, soft borders, clean spacing
- **Typography:** Geist Sans via `next/font`
- **Motion:** 60fps target; respect `prefers-reduced-motion`
- **Responsive:** Mobile-first → `sm` → `md` → `lg` → `xl` → `2xl`

Animation presets live in `src/lib/animations.ts`. Tokens in `src/constants/animations.ts`.

---

## Sections Roadmap

| Section | Status | Anchor |
|---------|--------|--------|
| Hero | ✅ Done | `#hero` |
| About | ✅ Done | `#about` |
| Skills | 🔲 Next | `#skills` |
| Experience | 🔲 Pending | `#experience` |
| Projects | 🔲 Pending | `#projects` |
| Achievements | 🔲 Pending | `#achievements` |
| Contact | 🔲 Pending | `#contact` |

See `context/project-overview.md` for per-section content and animation requirements.

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
npm run build    # Production build — required before completing features
npm run lint     # ESLint
```

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
| `src/constants/profile.ts` | Name, role, socials, site config |
| `src/constants/navigation.ts` | Navbar anchor links |
| `src/constants/skills.ts` | Skill categories |
| `src/constants/experience.ts` | Work history |
| `src/constants/projects.ts` | Project cards data |
| `src/constants/achievements.ts` | Stats, education, certifications |
| `src/constants/about.ts` | About section copy |
| `src/app/globals.css` | Theme tokens, base styles, animation utilities |
| `public/resume.pdf` | Downloadable resume |
