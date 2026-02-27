# ADIPA — Course Catalog

Landing page for ADIPA's course catalog, a continuing education platform specializing in psychology and mental health.

![Node](https://img.shields.io/badge/node-24.x-brightgreen)
![Next.js](https://img.shields.io/badge/next.js-16-black)
![TypeScript](https://img.shields.io/badge/typescript-5-blue)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

## Prerequisites

| Tool | Version used | Notes |
|------|--------------|-------|
| Node.js | 24.x | Check with `node --version` |
| pnpm | 10.x | Install with `npm install -g pnpm` if not available |

```bash
# Install pnpm globally if not already installed
npm install -g pnpm
```

## Installation

```bash
# 1. Clone the repository
git clone https://github.com/wilmarFlorez/landing-adipa-v1.git
cd landing-adipa-v1

# 2. Install dependencies
pnpm install
```

## Available commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server at `http://localhost:3000` |
| `pnpm build` | Optimized production build |
| `pnpm start` | Production server (requires `pnpm build` first) |
| `pnpm lint` | ESLint code review |
| `pnpm test` | Run unit tests with Vitest |
| `pnpm test:watch` | Tests in watch mode during development |

## Project structure

```
landing-adipa-v1/
├── app/
│   ├── layout.tsx          # Root layout: fonts, global metadata, dark mode anti-flash script
│   ├── page.tsx            # Section composition and skip navigation
│   ├── globals.css         # Tailwind directives only, no custom CSS
│   └── favicon.ico
├── components/
│   ├── layout/             # Header (sticky, mobile menu) and Footer
│   ├── sections/           # Hero, CoursesSection, ContactForm
│   └── ui/                 # Reusable primitives: Button, CourseCard, CategoryFilter, etc.
├── data/
│   └── courses.ts          # Typed mock data: courses[] and categories[]
├── types/
│   └── index.ts            # Shared interfaces: Course, Category, ContactFormData
├── hooks/                  # Custom React hooks (form logic, focus trap)
├── lib/                    # Font configuration and utility helpers
├── __tests__/              # Unit and integration tests (Vitest)
├── public/                 # Static assets (icons, images)
├── tailwind.config.ts      # All brand design tokens
└── next.config.ts          # Remote patterns for Unsplash images
```

## Technical decisions

### App Router over Pages Router

The Next.js App Router was chosen because it treats components as Server Components by default, reducing the JavaScript shipped to the client. Only components that need `useState`, `useEffect`, or browser APIs are marked with `"use client"`. The App Router also provides a built-in Metadata API (no `next/head` needed), native support for `sitemap.ts` and `robots.ts`, and better alignment with React 18's streaming model.

### Client-side course filtering

`CoursesSection.tsx` is a Client Component that holds `selectedCategory` in state — a string with the active category ID. When the user picks a filter, the `courses` array imported from `data/courses.ts` is filtered in-memory with `Array.filter()` on every render, with no network requests or page reloads. `CategoryFilter` receives the active ID and the setter as props and dispatches changes up to the parent.

### Design tokens in Tailwind

All brand values — colors, shadows, border radii, typography, and max-width — are defined once in `tailwind.config.ts` under `theme.extend`. This exposes semantic utilities such as `bg-primary`, `text-dark`, `rounded-card`, `shadow-cardHover`, and `max-w-container` that are used in JSX just like any Tailwind class. Updating a single token propagates the change across the entire UI.

### Dark mode

The active theme is persisted in `localStorage` under the key `adipa-theme`. To prevent a flash of the wrong theme on first render, `app/layout.tsx` injects a synchronous inline script into `<head>` that reads `localStorage` (falling back to `prefers-color-scheme`) and adds the `dark` class to `<html>` before React hydrates. Tailwind uses the `class` dark mode strategy, so all `dark:` variants activate only when that class is present.

## Screenshots

> **Pending:** Add screenshots before the final submission.
>
> Suggested captures: desktop hero view, course grid with an active filter, form with validation errors, dark mode enabled.

## Deploy

The project is deployed on Vercel:

**[https://landing-adipa-v1.vercel.app/](https://landing-adipa-v1.vercel.app/)**


## Author

**Wilmar Florez Samudio**

- LinkedIn: [linkedin.com/in/wilmar-florez](https://linkedin.com/in/wilmar-florez)
- GitHub: [github.com/wilmarFlorez](https://github.com/wilmarFlorez)

---

Frontend technical assessment for ADIPA — 2026.
