import type { Metadata } from "next"
import { montserrat, poppins } from "@/lib/fonts"
import ThemeProvider from "@/components/ui/ThemeProvider"
import "./globals.css"

export const metadata: Metadata = {
  // metadataBase resolves relative URLs in openGraph.images and alternates
  metadataBase: new URL("https://landing-adipa-v1.vercel.app"),
  title: {
    template: "%s | ADIPA",
    default: "ADIPA | Formación en Psicología y Salud Mental",
  },
  description:
    "Plataforma de educación continua especializada en psicología y salud mental. Cursos online, en vivo y presenciales con los mejores profesionales de Chile y Latinoamérica.",
  keywords: [
    "psicología",
    "salud mental",
    "cursos online",
    "educación continua",
    "psicología clínica",
    "psicología organizacional",
    "neurociencias",
    "Chile",
    "Latinoamérica",
  ],
  authors: [{ name: "ADIPA", url: "https://landing-adipa-v1.vercel.app" }],
  openGraph: {
    type: "website",
    siteName: "ADIPA",
    title: "ADIPA | Formación en Psicología y Salud Mental",
    description:
      "Plataforma de educación continua especializada en psicología y salud mental. Cursos online, en vivo y presenciales con los mejores profesionales de Chile y Latinoamérica.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADIPA — Formación continua en Psicología y Salud Mental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADIPA | Formación en Psicología y Salud Mental",
    description: "Plataforma de educación continua especializada en psicología y salud mental.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://landing-adipa-v1.vercel.app",
  },
}

/**
 * Reads 'adipa-theme' from localStorage (or prefers-color-scheme as fallback)
 * and applies the 'dark' class to <html> BEFORE React hydrates, preventing any
 * flash of the wrong theme on first paint.
 */
const themeInitScript = `(function(){try{var t=localStorage.getItem('adipa-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${poppins.variable}`}
      // suppressHydrationWarning prevents React from complaining about the
      // 'dark' class being added by the inline script before hydration.
      suppressHydrationWarning
    >
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-lightBg2 font-body antialiased dark:bg-darkBg">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
