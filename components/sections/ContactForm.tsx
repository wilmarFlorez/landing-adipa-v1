"use client";

import { useState } from "react";
import { CheckCircle, Mail, Phone, Clock } from "lucide-react";
import type { ContactFormData, ContactFormErrors } from "@/types";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

// ---------- validation ----------

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (data.name.trim().length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Ingresa un email con formato válido.";
  }
  if (data.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }

  return errors;
}

const EMPTY_FORM: ContactFormData = { name: "", email: "", message: "" };

// ---------- field styling helpers ----------

type FieldState = "default" | "error" | "valid";

const inputClasses: Record<FieldState, string> = {
  default:
    "border-gray-200 focus:border-primary focus:ring-primary/20",
  error:
    "border-red-500 focus:border-red-500 focus:ring-red-500/20",
  valid:
    "border-green-500 focus:border-green-500 focus:ring-green-500/20",
};

// ---------- sub-components ----------

interface FieldProps {
  id: keyof ContactFormData;
  label: string;
  state: FieldState;
  error?: string;
  children: React.ReactNode;
}

function Field({ id, label, state, error, children }: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-heading text-sm font-semibold text-dark"
      >
        {label}
      </label>
      {/* Inject aria-describedby and aria-invalid onto the child input/textarea */}
      {children}
      {state === "error" && error && (
        <span
          id={errorId}
          role="alert"
          className="font-body text-xs text-red-500"
        >
          {error}
        </span>
      )}
    </div>
  );
}

function SuccessMessage() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center gap-4 rounded-card bg-white p-10 text-center shadow-card"
    >
      <CheckCircle size={56} className="text-green-500" aria-hidden="true" />
      <h3 className="font-heading text-2xl font-bold text-dark">
        ¡Mensaje enviado!
      </h3>
      <p className="font-body text-dark/60">
        Gracias por contactarnos. Te responderemos a la brevedad en el email
        que nos proporcionaste.
      </p>
    </div>
  );
}

// ---------- main component ----------

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>(EMPTY_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof ContactFormData, boolean>>
  >({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function getFieldState(field: keyof ContactFormData): FieldState {
    if (!touched[field]) return "default";
    return errors[field] ? "error" : "valid";
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const field = name as keyof ContactFormData;
    const updated = { ...form, [field]: value };
    setForm(updated);

    // Re-validate touched fields on change so errors clear as user types
    if (touched[field]) {
      setErrors(validate(updated));
    }
  }

  function handleBlur(
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const field = e.target.name as keyof ContactFormData;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(form));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Mark all fields as touched so every error becomes visible
    setTouched({ name: true, email: true, message: true });

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // Simulate network request
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  }

  const inputBase =
    "w-full rounded-btn border px-4 py-3 font-body text-dark placeholder:text-dark/40 bg-white outline-none transition-all duration-200 focus:ring-2";

  const iconBox =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-btn bg-primary/10 text-primary";

  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="bg-lightBg py-16 md:py-24">
      <Container>
        <SectionHeader id="contacto-heading" title="Contáctanos" className="mb-10" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info sidebar */}
          <div className="flex flex-col gap-8">
            <p className="font-body text-lg text-dark/70 leading-relaxed">
              ¿Tienes dudas sobre nuestros cursos o programas? Escríbenos y un
              asesor académico te contactará a la brevedad.
            </p>

            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <span className={iconBox}>
                  <Mail size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-dark">Email</p>
                  <p className="font-body text-dark/60">contacto@adipa.cl</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className={iconBox}>
                  <Phone size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-dark">Teléfono</p>
                  <p className="font-body text-dark/60">+56 2 2345 6789</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className={iconBox}>
                  <Clock size={18} aria-hidden="true" />
                </span>
                <div>
                  <p className="font-heading text-sm font-semibold text-dark">Horario</p>
                  <p className="font-body text-dark/60">
                    Lunes a Viernes, 9:00 – 18:00 hrs.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Form or success message */}
          {submitted ? (
            <SuccessMessage />
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 rounded-card bg-white p-8 shadow-card"
            >
              {/* Name */}
              <Field
                id="name"
                label="Nombre completo"
                state={getFieldState("name")}
                error={errors.name}
              >
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="María González"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-describedby={
                    getFieldState("name") === "error" ? "name-error" : undefined
                  }
                  aria-invalid={getFieldState("name") === "error"}
                  className={`${inputBase} ${inputClasses[getFieldState("name")]}`}
                />
              </Field>

              {/* Email */}
              <Field
                id="email"
                label="Correo electrónico"
                state={getFieldState("email")}
                error={errors.email}
              >
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="maria@ejemplo.cl"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-describedby={
                    getFieldState("email") === "error"
                      ? "email-error"
                      : undefined
                  }
                  aria-invalid={getFieldState("email") === "error"}
                  className={`${inputBase} ${inputClasses[getFieldState("email")]}`}
                />
              </Field>

              {/* Message */}
              <Field
                id="message"
                label="Mensaje"
                state={getFieldState("message")}
                error={errors.message}
              >
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Escribe tu consulta aquí..."
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-describedby={
                    getFieldState("message") === "error"
                      ? "message-error"
                      : undefined
                  }
                  aria-invalid={getFieldState("message") === "error"}
                  className={`${inputBase} resize-none ${inputClasses[getFieldState("message")]}`}
                />
              </Field>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={submitting}
                className="mt-2 w-full justify-center"
              >
                {submitting ? "Enviando..." : "Enviar mensaje"}
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
