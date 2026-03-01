import type { Metadata } from "next"
import dynamic from "next/dynamic"
import { courses, categories } from "@/data/courses"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import CoursesSection from "@/components/sections/CoursesSection"

// ContactForm is below the fold — load it after the initial bundle
const ContactForm = dynamic(() => import("@/components/sections/ContactForm"))

export const metadata: Metadata = {
  // Renders as "Cursos de Psicología y Salud Mental | ADIPA" via layout template
  title: "Cursos de Psicología y Salud Mental",
  description:
    "Explora nuestro catálogo de cursos online, en vivo y presenciales en psicología clínica, organizacional, neurociencias y salud mental.",
  alternates: {
    canonical: "https://landing-adipa-v1.vercel.app",
  },
  openGraph: {
    title: "Cursos de Psicología y Salud Mental | ADIPA",
    description:
      "Explora nuestro catálogo de cursos online, en vivo y presenciales en psicología clínica, organizacional, neurociencias y salud mental.",
    url: "https://landing-adipa-v1.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ADIPA — Cursos de Psicología y Salud Mental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursos de Psicología y Salud Mental | ADIPA",
    description:
      "Explora nuestro catálogo de cursos online, en vivo y presenciales en psicología clínica, organizacional, neurociencias y salud mental.",
    images: ["/og-image.jpg"],
  },
}

export default function Home() {
  return (
    <>
      {/* Skip link: lets keyboard users bypass the header navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-btn focus:bg-primary focus:px-4 focus:py-2 focus:font-heading focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Saltar al contenido principal
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <CoursesSection courses={courses} categories={categories} />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
