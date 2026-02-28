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
git clone https://github.com/<username>/landing-adipa-v1.git
cd landing-adipa-v1

# 2. Install dependencies
pnpm install

# 3. Set up environment variables
cp .env.example .env.local
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
│   ├── page.tsx            # Section composition; contains skip navigation and <main>
│   ├── globals.css         # Tailwind directives only, no custom CSS
│   ├── sitemap.ts          # Generates /sitemap.xml at build time
│   ├── robots.ts           # Generates /robots.txt at build time
│   └── favicon.ico
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Sticky header with mobile menu and keyboard focus trap
│   │   └── Footer.tsx      # Footer with navigation, social links and contact info
│   ├── sections/
│   │   ├── Hero.tsx        # Hero section with CTA and gradient background
│   │   ├── CoursesSection.tsx  # Course grid with client-side category filtering
│   │   └── ContactForm.tsx # Form with client-side validation and success state
│   └── ui/
│       ├── Button.tsx      # Reusable button with variants (primary / outline / ghost)
│       ├── CategoryFilter.tsx  # Category filter pill buttons (Client Component)
│       ├── Container.tsx   # Max-width wrapper (max-w-container = 1400px)
│       ├── CourseCard.tsx  # Course card with next/image, modality badge and price
│       ├── FormField.tsx   # Controlled input/textarea with label and error message
│       ├── SectionHeader.tsx   # Reusable section title and subtitle
│       ├── ThemeProvider.tsx   # Theme context with localStorage persistence
│       └── ThemeToggle.tsx # Sun/moon button to toggle light and dark mode
├── data/
│   └── courses.ts          # Typed mock data: courses[] and categories[]
├── hooks/
│   ├── useContactForm.ts   # Form state, validation and submission logic
│   └── useFocusTrap.ts     # Keyboard focus trap for the mobile menu
├── lib/
│   ├── fonts.ts            # Montserrat and Poppins via next/font/google with CSS vars
│   └── utils.ts            # Utility helpers (clsx wrapper)
├── types/
│   └── index.ts            # Shared interfaces: Course, Category, ContactFormData
├── __tests__/
│   ├── components/
│   │   ├── sections/       # CoursesSection and ContactForm tests
│   │   └── ui/             # Button component tests
│   └── lib/
│       └── utils.test.ts   # Utility function tests
├── public/
│   ├── icons/              # SVG and static icon assets
│   └── images/             # Static image assets
├── tailwind.config.ts      # All brand design tokens
├── next.config.ts          # Remote patterns for Unsplash images
├── vitest.config.ts        # Vitest configuration with jsdom and React plugin
└── tsconfig.json           # TypeScript strict mode configuration
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

**[https://adipa-cursos.vercel.app](https://adipa-cursos.vercel.app)**

### Deploy your own instance on Vercel

```bash
# 1. Install the Vercel CLI
pnpm add -g vercel

# 2. Authenticate and link the project
vercel login

# 3. Deploy to production
vercel --prod
```

Vercel automatically detects Next.js and configures the build with no additional setup required.

## Author

**[Your name]**

- LinkedIn: [linkedin.com/in/your-username](https://linkedin.com/in/your-username)
- GitHub: [github.com/your-username](https://github.com/your-username)

---

Frontend technical assessment for ADIPA — 2025.
