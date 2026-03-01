import { describe, it, expect } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ContactForm from "@/components/sections/ContactForm"

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const VALID_NAME = "María González"
const VALID_EMAIL = "maria@ejemplo.cl"
const VALID_MESSAGE = "Este es un mensaje de consulta válido."

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText("Nombre completo"), VALID_NAME)
  await user.type(screen.getByLabelText("Correo electrónico"), VALID_EMAIL)
  await user.type(screen.getByLabelText("Mensaje"), VALID_MESSAGE)
}

// ---------------------------------------------------------------------------
// Tests
// ---------------------------------------------------------------------------

describe("ContactForm — validation", () => {
  it("shows validation errors for all fields when submitting an empty form", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole("button", { name: /enviar mensaje/i }))

    // Each invalid field renders an error with role="alert"
    const alerts = screen.getAllByRole("alert")
    expect(alerts.length).toBe(3)

    expect(screen.getByText(/al menos 2 caracteres/i)).toBeInTheDocument()
    expect(screen.getByText(/email con formato válido/i)).toBeInTheDocument()
    expect(screen.getByText(/al menos 10 caracteres/i)).toBeInTheDocument()
  })

  it("shows no errors when valid data is entered and fields are blurred before submitting", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Type valid data and move focus out of each field to trigger blur validation
    await user.type(screen.getByLabelText("Nombre completo"), VALID_NAME)
    await user.tab()
    await user.type(screen.getByLabelText("Correo electrónico"), VALID_EMAIL)
    await user.tab()
    await user.type(screen.getByLabelText("Mensaje"), VALID_MESSAGE)
    await user.tab()

    // No error alerts should be present for valid data
    expect(screen.queryByRole("alert")).not.toBeInTheDocument()
  })
})

describe("ContactForm — successful submission", () => {
  it("shows the success message after a valid form is submitted", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await fillValidForm(user)
    await user.click(screen.getByRole("button", { name: /enviar mensaje/i }))

    // The component uses a simulated 1.5 s delay before showing the success state.
    // waitFor polls until the assertion passes (up to 2 000 ms).
    await waitFor(() => expect(screen.getByText("¡Mensaje enviado!")).toBeInTheDocument(), {
      timeout: 2000,
    })

    // The form fields should be replaced by the success message
    expect(screen.queryByLabelText("Nombre completo")).not.toBeInTheDocument()
  })
})
