import { describe, it, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import type { Category, Course } from "@/types"
import CoursesSection from "@/components/sections/CoursesSection"

// ---------------------------------------------------------------------------
// Mock next/image — replaces the Next.js image optimizer with a plain <img>
// ---------------------------------------------------------------------------
import { vi } from "vitest"
vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />,
}))

// ---------------------------------------------------------------------------
// Fixtures
// ---------------------------------------------------------------------------

const mockCategories: Category[] = [
  { id: "cat-1", label: "Clínica", slug: "clinica" },
  { id: "cat-2", label: "Organizacional", slug: "organizacional" },
]

const mockCourses: Course[] = [
  {
    id: "course-1",
    title: "Terapia Cognitivo Conductual",
    instructor: "Dr. García",
    description: "Fundamentos y práctica de la TCC.",
    startDate: "2026-04-01",
    price: 200000,
    discountPrice: 150000,
    modality: "Online",
    imageUrl: "/test-image.jpg",
    category: "clinica",
  },
  {
    id: "course-2",
    title: "Liderazgo Organizacional",
    instructor: "Dra. López",
    description: "Estrategias de liderazgo en organizaciones.",
    startDate: "2026-05-01",
    price: 180000,
    discountPrice: 140000,
    modality: "En Vivo",
    imageUrl: "/test-image.jpg",
    category: "organizacional",
  },
]

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("CoursesSection", () => {
  it("displays all courses when the 'Todos' filter is active (default)", () => {
    render(<CoursesSection courses={mockCourses} categories={mockCategories} />)

    expect(screen.getByText("Terapia Cognitivo Conductual")).toBeInTheDocument()
    expect(screen.getByText("Liderazgo Organizacional")).toBeInTheDocument()
  })

  it("shows only the selected category's courses after clicking a category pill", async () => {
    const user = userEvent.setup()
    render(<CoursesSection courses={mockCourses} categories={mockCategories} />)

    // Click the "Clínica" category pill
    await user.click(screen.getByRole("button", { name: "Clínica" }))

    // The component applies a 200 ms fade before updating the list.
    // waitFor polls until the non-matching course disappears (up to 500 ms).
    await waitFor(
      () => expect(screen.queryByText("Liderazgo Organizacional")).not.toBeInTheDocument(),
      { timeout: 500 }
    )

    // The matching course must still be visible
    expect(screen.getByText("Terapia Cognitivo Conductual")).toBeInTheDocument()
  })

  it("shows an empty-state message when no courses match the selected category", async () => {
    const user = userEvent.setup()
    const emptyCategory: Category[] = [
      { id: "cat-empty", label: "Neurociencias", slug: "neurociencias" },
    ]

    render(<CoursesSection courses={mockCourses} categories={emptyCategory} />)

    await user.click(screen.getByRole("button", { name: "Neurociencias" }))

    await waitFor(
      () => expect(screen.getByText(/No hay cursos en esta categoría/i)).toBeInTheDocument(),
      { timeout: 500 }
    )
  })
})
