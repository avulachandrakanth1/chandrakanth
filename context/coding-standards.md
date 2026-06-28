# Coding Standards

## Core Principles

This portfolio must follow:

- Clean code
- Reusable architecture
- Maintainable components
- High performance
- Smooth animations
- Accessibility-first
- Mobile-first development

Code should always be:

- Readable
- Scalable
- Optimized
- Consistent

---

## TypeScript Rules

### Strict Mode

Always enabled.

Rules:

- Avoid `any`
- Use proper types
- Use interfaces for props
- Use types for reusable structures
- Prefer type inference when obvious

Example:

Good:

interface HeroProps {
title: string;
subtitle: string;
}

Bad:

props: any

---

## React Rules

Use:

- Functional components only
- Hooks only
- Composition pattern
- Custom hooks for reusable logic

Avoid:

- Class components
- Deep prop drilling
- Unnecessary state

Rules:

- Keep components focused
- Single responsibility
- Small reusable pieces

---

## Next.js Rules

Use App Router.

Default:

Server Components

Use Client Components only when:

- Animations
- State
- Browser APIs
- Event handlers

Folder structure:

src/app/
src/components/
src/hooks/
src/lib/
src/types/

Rules:

- Route-based organization
- Reusable UI separated properly

---

## Styling Rules

Use:

Tailwind CSS v4 only

Rules:

- No inline styles
- No CSS modules unless necessary
- Use utility-first styling
- Keep classNames clean
- Use reusable utility patterns

Maintain:

- Consistent spacing
- Consistent colors
- Consistent typography

---

## Animation Rules

Primary:

Framer Motion

Optional:

GSAP

Rules:

- Keep animations smooth
- Avoid excessive motion
- Use motion for meaning
- Use stagger wisely
- Maintain 60fps

Do not:

- Overanimate
- Use random effects
- Block performance

---

## Component Structure

Component naming:

PascalCase

Examples:

HeroSection.tsx
ProjectCard.tsx
SkillCard.tsx

Folder example:

components/
hero/
about/
projects/
skills/
contact/
shared/

Rules:

- One component per file
- Extract reusable pieces
- Keep files organized

---

## Naming Conventions

Variables:

camelCase

Functions:

camelCase

Constants:

SCREAMING_SNAKE_CASE

Components:

PascalCase

Types:

PascalCase

Hooks:

useSomething

Examples:

useScrollReveal
useMousePosition

---

## File Organization

Structure:

src/
├── app
├── components
├── hooks
├── lib
├── types
├── constants
├── utils

Rules:

- Group by feature
- Keep shared utilities centralized

---

## Responsive Rules

Approach:

Mobile First

Breakpoints:

sm
md
lg
xl
2xl

Rules:

- Design mobile first
- Scale upwards
- Test every section
- Avoid overflow
- Maintain spacing consistency

---

## Performance Rules

Must optimize:

- Images
- Animations
- Components
- Bundle size

Use:

- next/image
- lazy loading
- dynamic imports
- memoization when needed

Avoid:

- Heavy rerenders
- Unoptimized images
- Large dependencies

Target:

Lighthouse 95+

---

## Accessibility Rules

Always include:

- Semantic HTML
- Alt text
- Proper labels
- Keyboard navigation
- Focus states

Maintain:

- Proper contrast
- Readable typography
- Accessible buttons

---

## SEO Rules

Use:

- Metadata API
- Semantic tags
- Proper heading hierarchy

Rules:

- Only one h1
- Structured headings
- Optimized descriptions
- Proper OG tags

---

## Code Quality Rules

Always:

- Remove unused imports
- Remove dead code
- Keep functions small
- Keep logic separated

Avoid:

- Duplicate code
- Large components
- Hardcoded values

Extract:

- Constants
- Utility functions
- Reusable configs

---

## Git Rules

Branch naming:

feature/hero-section
feature/projects-section
fix/mobile-layout
fix/navbar-animation

Commits:

feat: add hero section
fix: resolve navbar responsiveness
refactor: optimize animations

Rules:

- Small commits
- One purpose per commit

---

## Testing Rules

Before completing:

Check:

- Mobile responsiveness
- Tablet responsiveness
- Desktop responsiveness
- Smooth animations
- Build passes
- No console errors

Run:

npm run build

Required:

Zero errors

---

## Final Rule

Before writing code, ask:

Is this:

- clean?
- scalable?
- reusable?
- performant?
- premium?

If not,
improve it.
