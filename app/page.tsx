import type { Metadata } from "next";
import { courses, categories } from "@/data/courses";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import CoursesSection from "@/components/sections/CoursesSection";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "ADIPA | Cursos de Psicología y Salud Mental",
  description:
    "Explora nuestro catálogo de cursos online, en vivo y presenciales en psicología clínica, organizacional, neurociencias y salud mental.",
  openGraph: {
    title: "ADIPA | Cursos de Psicología y Salud Mental",
    description:
      "Explora nuestro catálogo de cursos online, en vivo y presenciales en psicología clínica, organizacional, neurociencias y salud mental.",
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CoursesSection courses={courses} categories={categories} />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
