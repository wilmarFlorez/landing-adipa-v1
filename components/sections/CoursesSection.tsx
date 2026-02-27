"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Category, Course } from "@/types";
import CategoryFilter from "@/components/ui/CategoryFilter";
import CourseCard from "@/components/ui/CourseCard";
import Container from "@/components/ui/Container";

const ALL_SLUG = "all";

interface Props {
  courses: Course[];
  categories: Category[];
}

export default function CoursesSection({ courses, categories }: Props) {
  const [activeSlug, setActiveSlug] = useState<string>(ALL_SLUG);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Clear pending timer on unmount to avoid state updates on unmounted component
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const filteredCourses = useMemo(
    () =>
      activeSlug === ALL_SLUG
        ? courses
        : courses.filter((c) => c.category === activeSlug),
    [courses, activeSlug]
  );

  function handleCategoryChange(slug: string) {
    if (slug === activeSlug) return;

    // Clear any in-flight transition before starting a new one
    if (timerRef.current) clearTimeout(timerRef.current);

    setIsTransitioning(true);
    timerRef.current = setTimeout(() => {
      setActiveSlug(slug);
      setIsTransitioning(false);
    }, 200);
  }

  return (
    <section id="cursos" aria-labelledby="cursos-heading" className="bg-lightBg py-16 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 id="cursos-heading" className="font-heading text-3xl font-bold text-dark md:text-4xl">
            Nuestros Cursos
          </h2>
          <CategoryFilter
            categories={categories}
            activeSlug={activeSlug}
            onChange={handleCategoryChange}
          />
        </div>

        {/* Grid with fade + scale transition on category change */}
        <ul
          role="list"
          className={`grid grid-cols-1 gap-6 transition-all duration-200 md:grid-cols-2 lg:grid-cols-3 ${
            isTransitioning ? "scale-[0.98] opacity-0" : "scale-100 opacity-100"
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
  );
}
