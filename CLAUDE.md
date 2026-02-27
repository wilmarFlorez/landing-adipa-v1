# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page de catálogo de cursos para **ADIPA** (plataforma de educación en psicología y salud mental). Prueba técnica frontend — ver `project-description.md` para la rúbrica completa.

Stack: **Next.js 16 (App Router) · Tailwind CSS 3 · TypeScript (strict) · pnpm**

## Commands

```bash
pnpm install
pnpm dev                 # development server
pnpm build               # production build
pnpm lint                # ESLint
pnpm exec tsc --noEmit   # type check
```

## Architecture

```
app/
  layout.tsx        # Root layout: applies font CSS vars, bg-lightBg2, OG metadata
  page.tsx          # Composes all sections in order
  globals.css       # Tailwind directives only (no custom CSS variables)
components/
  layout/           # Header, Footer — rendered on every page
  sections/         # Full-page sections: Hero, CoursesSection, ContactForm
  ui/               # Reusable primitives: Button, Container, CourseCard, CategoryFilter
data/
  courses.ts        # Static mock data: courses[] and categories[] exports
types/
  index.ts          # All shared interfaces: Course, Category, ContactFormData, ContactFormErrors, CourseModality
lib/
  fonts.ts          # Montserrat (--font-heading) and Poppins (--font-body) via next/font/google
tailwind.config.ts  # All brand design tokens
next.config.ts      # remotePatterns for images.unsplash.com
```

## Key Constraints

**No pre-styled component libraries** (no shadcn, DaisyUI). Tailwind utilities and headless components (Radix, Headless UI) are allowed. Icon library: `lucide-react`.

**TypeScript strict mode** — no `any`, all component props typed via explicit interfaces.

**Data** lives in `data/courses.ts` as typed constants, never hardcoded in JSX.

**`"use client"`** — only when a component needs `useState`, `useEffect`, or browser APIs. Layout primitives (Container, Button) and data-only sections stay as Server Components.

## Design Tokens (tailwind.config.ts)

| Token | Tailwind class | Value |
|-------|----------------|-------|
| primary | `bg-primary` / `text-primary` | `#704EFD` |
| secondary | `bg-secondary` | `#2CB7FF` |
| pink | `text-pink` | `#FF017C` |
| orange | `bg-orange` | `#FFA927` |
| dark | `text-dark` | `#3A3F5A` |
| lightBg | `bg-lightBg` | `#F3F4FF` |
| lightBg2 | `bg-lightBg2` | `#F8FAFF` |
| card shadow | `shadow-card` / `shadow-cardHover` | — |
| border radius | `rounded-card` (12px) · `rounded-btn` (8px) | — |
| max width | `max-w-container` (1400px) | — |

Fonts: `font-heading` → Montserrat · `font-body` → Poppins

## Responsive Breakpoints

| Breakpoint | Width | Course grid |
|---|---|---|
| Mobile | 375px | 1 column |
| Tablet | 768px | 2 columns |
| Desktop | 1280px+ | 3 columns |

## Sections (in order)

1. **Header** — logo, nav (Cursos / Diplomados / Recursos / Contacto), login button (visual only)
2. **Hero** — title, short description, CTA "Explorar cursos", gradient/image background
3. **CoursesSection** — course grid + CategoryFilter (client-side filtering, no reload)
4. **ContactForm** — name/email/message with client-side validation + visual success state
5. **Footer** — logo, nav links, social icons, copyright

## Code Style

All comments and JSDoc must be written in **English**.

## Bonus Features (optional, evaluated)

Deploy on Vercel · hover animations & filter transitions · semantic HTML + ARIA · meta tags + Open Graph · dark mode with `localStorage` · unit/integration tests · Lighthouse score > 90
