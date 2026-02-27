# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page de catálogo de cursos para **ADIPA** (plataforma de educación en psicología y salud mental). Prueba técnica frontend — ver `project-description.md` para la rúbrica completa.

Stack: **Next.js 14+ (App Router) · Tailwind CSS · TypeScript (strict)**

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
  layout.tsx       # Root layout: fonts (Montserrat, Poppins), metadata
  page.tsx         # Composes all sections in order
  globals.css      # Tailwind base directives
components/        # One file per UI component, all props typed via interfaces
lib/
  data.ts          # Static mock data: 8+ courses, 3+ categories (NOT inline in JSX)
  types.ts         # Shared TypeScript interfaces (Course, Category, etc.)
tailwind.config.ts # Design tokens defined here (colors, fonts, shadows)
```

## Key Constraints

**No pre-styled component libraries** (no shadcn, DaisyUI). Tailwind utilities and headless components (Radix, Headless UI) are allowed. Icon libraries (Lucide, Heroicons) are fine.

**TypeScript strict mode** — no `any`, all component props fully typed.

**Data** must live in `lib/data.ts` as typed constants, never hardcoded in JSX.

## Design Tokens (tailwind.config.ts)

| Token | Value |
|-------|-------|
| primary | `#704EFD` |
| secondary | `#2CB7FF` |
| pink | `#FF017C` |
| orange | `#FFA927` |
| dark | `#3A3F5A` |
| light-bg | `#F3F4FF` |
| light-bg-2 | `#F8FAFF` |

Fonts: `Montserrat` (headings, nav, buttons) · `Poppins` (body, labels)

Spacing: container `max-w-[1400px]` · card radius `12px` · button radius `8px`
Card shadow: `0 2px 4px rgba(3,27,78,0.06)` → hover: `0 10px 20px rgba(3,27,78,0.1)`

## Responsive Breakpoints

| Breakpoint | Width | Course grid |
|---|---|---|
| Mobile | 375px | 1 column |
| Tablet | 768px | 2 columns |
| Desktop | 1280px+ | 3 columns |

## Sections (in order)

1. **Header** — logo, nav (Cursos / Diplomados / Recursos / Contacto), login button (visual only)
2. **Hero** — title, short description, CTA "Explorar cursos", gradient/image background
3. **Course Grid** — cards with image, title, instructor, start date, original+discounted price, modality badge, action button
4. **Category Filter** — client-side filtering (no page reload), pills/tabs, "Todos" + 3+ categories
5. **Contact Form** — name (min 2 chars), email (valid format), message (min 10 chars); client-side validation + visual success state
6. **Footer** — logo, nav links, social icons, copyright

## Bonus Features (optional, evaluated)

Deploy on Vercel · hover animations & filter transitions · semantic HTML + ARIA · meta tags + Open Graph · dark mode with `localStorage` · unit/integration tests · Lighthouse score > 90
