import type { Metadata } from "next";
import { montserrat, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADIPA | Cursos de Psicología y Salud Mental",
  description:
    "Plataforma de educación continua especializada en psicología y salud mental. Cursos online, en vivo y presenciales con los mejores profesionales de Chile y Latinoamérica.",
  openGraph: {
    title: "ADIPA | Cursos de Psicología y Salud Mental",
    description:
      "Plataforma de educación continua especializada en psicología y salud mental. Cursos online, en vivo y presenciales con los mejores profesionales de Chile y Latinoamérica.",
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
