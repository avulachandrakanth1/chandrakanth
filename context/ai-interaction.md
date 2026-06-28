# AI Interaction Guidelines

## Communication

Follow these rules while building this portfolio:

- Be concise and direct
- Focus on premium UI quality
- Prioritize animations and responsiveness
- Explain important technical decisions briefly
- Ask before major architectural changes
- Do not add extra sections unless requested
- Do not remove existing sections without confirmation
- Maintain consistency in design system

---

## Core Development Philosophy

This portfolio is not just a website.

It is:

- A product
- A personal brand
- A proof of engineering capability

Every component must feel intentional.

Prioritize:

1. Visual quality
2. Performance
3. Smooth animations
4. Responsive behavior
5. Clean architecture

---

## Workflow

Follow this exact workflow for every feature:

### 1. Document

Update `current-feature.md`

Define:

- Feature name
- Goals
- Requirements
- Notes

---

### 2. Plan

Before coding:

- Understand section purpose
- Break into reusable components
- Identify animations
- Plan responsive behavior

---

### 3. Implement

Build the feature.

Rules:

- Follow design system
- Follow project overview
- Follow resume context

---

### 4. Animate

Every section must include:

- Entrance animations
- Hover interactions
- Smooth transitions
- Scroll-based effects

Avoid over-animation.

Keep it premium.

---

### 5. Test

Verify:

- Mobile responsiveness
- Tablet responsiveness
- Desktop responsiveness
- Animation smoothness
- Accessibility
- Performance

Run:

npm run build

Fix all issues.

---

### 6. Review

Review:

- Code quality
- Animation consistency
- Layout consistency
- Performance impact

---

### 7. Commit

Only after:

- Build passes
- UI looks polished
- Animations work correctly

Ask before commit.

---

## Branching Strategy

Create branch for every feature.

Naming:

feature/hero-section
feature/about-section
feature/projects-section
feature/contact-section
fix/mobile-navbar
fix/animation-lag

Rules:

- One feature per branch
- One purpose per branch

---

## Component Rules

Follow:

- Functional components only
- Reusable components
- Keep components small
- Maintain clean props
- Use TypeScript strictly

Avoid:

- Large monolithic components
- Duplicate logic
- Inline styles

---

## Animation Rules

Use:

- Framer Motion first
- GSAP only when necessary

Animation principles:

### Hero

- Strong entrance
- Staggered reveal
- Floating motion

### Sections

- Fade in
- Slide up
- Scale in

### Cards

- Hover lift
- Glow
- Tilt

### Buttons

- Smooth hover
- Press effect

### Scroll

- Smooth parallax
- Reveal transitions

Rules:

- 60fps target
- Keep transitions smooth
- Avoid jitter

---

## Responsive Rules

Must support:

### Mobile

- Fully optimized
- Touch-friendly
- Proper spacing

### Tablet

- Balanced layout
- Smooth transitions

### Desktop

- Premium interactions
- Advanced animations

Never break layout.

Mobile-first always.

---

## Design Rules

Always maintain:

- Dark theme consistency
- Proper spacing
- Typography hierarchy
- Visual balance
- Clean alignment
- Strong contrast

Avoid:

- Clutter
- Inconsistent padding
- Random colors
- Weak hierarchy

---

## Performance Rules

Optimize:

- Lazy loading
- Code splitting
- Image optimization
- Motion optimization

Target:

- Lighthouse 95+
- Fast TTI
- Smooth scrolling

---

## SEO Rules

Every section must be semantic.

Use:

- Proper headings
- Accessible labels
- Alt text
- Metadata

---

## When Stuck

If something fails after 2–3 attempts:

Stop.

Explain:

- What's wrong
- Why it's happening
- Possible solutions

Do not apply random fixes.

---

## Important Rule

Every feature should answer:

"Does this make the portfolio feel premium?"

If not,
improve it.
