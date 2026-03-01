"use client"

import { useMemo, useTransition } from "react"
import type { Category, Course } from "@/types"
import CategoryFilter from "@/components/ui/CategoryFilter"
import CourseCard from "@/components/ui/CourseCard"
import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"
import { useState } from "react"

const ALL_SLUG = "all"

interface Props {
  courses: Course[]
  categories: Category[]
}

export default function CoursesSection({ courses, categories }: Props) {
  const [activeSlug, setActiveSlug] = useState<string>(ALL_SLUG)
  const [isPending, startTransition] = useTransition()

  const filteredCourses = useMemo(
    () => (activeSlug === ALL_SLUG ? courses : courses.filter((c) => c.category === activeSlug)),
    [courses, activeSlug]
  )

  function handleCategoryChange(slug: string) {
    if (slug === activeSlug) return
    // Mark the filter update as non-urgent so the UI stays responsive
    startTransition(() => {
      setActiveSlug(slug)
    })
  }

  return (
    <section
      id="cursos"
      aria-labelledby="cursos-heading"
      className="bg-lightBg py-16 dark:bg-darkSurface md:py-24"
    >
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <SectionHeader id="cursos-heading" title="Nuestros Cursos" />
          <CategoryFilter
            categories={categories}
            activeSlug={activeSlug}
            onChange={handleCategoryChange}
          />
        </div>

        {/* Grid with fade transition while React processes the category update */}
        <ul
          role="list"
          className={`grid grid-cols-1 gap-6 transition-all duration-200 md:grid-cols-2 xl:grid-cols-3 ${
            isPending ? "scale-[0.98] opacity-0" : "scale-100 opacity-100"
          }`}
        >
          {filteredCourses.map((course) => (
            <li key={course.id} role="listitem">
              <CourseCard course={course} />
            </li>
          ))}
        </ul>

        {/* Live region announces empty state to screen readers after filter change */}
        <div aria-live="polite" aria-atomic="true">
          {filteredCourses.length === 0 && (
            <p className="py-16 text-center font-body text-dark/50">
              No hay cursos en esta categoría por el momento.
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
