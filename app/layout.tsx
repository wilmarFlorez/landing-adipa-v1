import type { Metadata } from "next";
import { montserrat, poppins } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "ADIPA — Cursos de Psicología y Salud Mental",
  description:
    "Plataforma de educación continua especializada en psicología y salud mental, con presencia en Chile y Latinoamérica.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${poppins.variable} font-body antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
