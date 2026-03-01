import { describe, it, expect } from "vitest"
import { formatPrice, formatDate } from "@/lib/utils"

describe("formatPrice", () => {
  it("formats 150000 as '$150.000' (CLP with period thousands separator)", () => {
    expect(formatPrice(150000)).toBe("$150.000")
  })

  it("formats 0 as a valid CLP currency string", () => {
    expect(formatPrice(0)).toMatch(/\$/)
    expect(formatPrice(0)).toContain("0")
  })

  it("formats large amounts correctly", () => {
    expect(formatPrice(1000000)).toBe("$1.000.000")
  })
})

describe("formatDate", () => {
  it("formats '2025-03-15' as '15 de marzo de 2025'", () => {
    // Verified against Node.js ICU data (es-CL locale uses 'de' connector)
    expect(formatDate("2025-03-15")).toBe("15 de marzo de 2025")
  })

  it("formats a December date with the correct month name", () => {
    expect(formatDate("2025-12-01")).toContain("diciembre")
    expect(formatDate("2025-12-01")).toContain("2025")
    expect(formatDate("2025-12-01")).toContain("1")
  })
})
