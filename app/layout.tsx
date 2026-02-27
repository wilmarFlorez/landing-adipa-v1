import type { Metadata } from "next";
import { montserrat, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  // metadataBase resolves relative URLs in openGraph.images and alternates
  metadataBase: new URL("https://adipa.cl"),
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
  authors: [{ name: "ADIPA", url: "https://adipa.cl" }],
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
    description:
      "Plataforma de educación continua especializada en psicología y salud mental.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://adipa.cl",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${poppins.variable}`}
    >
      <body className="font-body bg-lightBg2 antialiased">{children}</body>
    </html>
  );
}
