import { describe, it, expect, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Button from "@/components/ui/Button"

describe("Button", () => {
  it("renders with the correct text content", () => {
    render(<Button>Enviar mensaje</Button>)
    expect(screen.getByRole("button", { name: "Enviar mensaje" })).toBeInTheDocument()
  })

  it("applies 'bg-primary' class when variant is primary", () => {
    render(<Button variant="primary">Primary</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-primary")
  })

  it("applies 'border-primary' class when variant is outline", () => {
    render(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole("button")).toHaveClass("border-primary")
  })

  it("applies 'bg-secondary' class when variant is secondary", () => {
    render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole("button")).toHaveClass("bg-secondary")
  })

  it("does not fire onClick when the button is disabled", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    )

    await user.click(screen.getByRole("button"))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it("fires onClick when the button is enabled", async () => {
    const user = userEvent.setup()
    const handleClick = vi.fn()

    render(<Button onClick={handleClick}>Enabled</Button>)

    await user.click(screen.getByRole("button"))
    expect(handleClick).toHaveBeenCalledOnce()
  })
})
