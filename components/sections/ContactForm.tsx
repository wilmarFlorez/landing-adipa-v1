"use client";

import { CheckCircle, Mail, Phone, Clock } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import FormField, { inputClasses } from "@/components/ui/FormField";
import SectionHeader from "@/components/ui/SectionHeader";
import { useContactForm } from "@/hooks/useContactForm";

// ---------- sub-components ----------

function SuccessMessage() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center gap-4 rounded-card bg-white dark:bg-darkCard p-10 text-center shadow-card"
    >
      <CheckCircle size={56} className="text-green-500" aria-hidden="true" />
      <h3 className="font-heading text-2xl font-bold text-dark dark:text-darkText">
        ¡Mensaje enviado!
      </h3>
      <p className="font-body text-dark/60 dark:text-darkText/60">
        Gracias por contactarnos. Te responderemos a la brevedad en el email
        que nos proporcionaste.
      </p>
    </div>
  );
}

function ContactSidebar() {
  const iconBox =
    "flex h-10 w-10 shrink-0 items-center justify-center rounded-btn bg-primary/10 dark:bg-primary/20 text-primary";

  return (
    <div className="flex flex-col gap-8">
      <p className="font-body text-lg text-dark/70 dark:text-darkText/70 leading-relaxed">
        ¿Tienes dudas sobre nuestros cursos o programas? Escríbenos y un
        asesor académico te contactará a la brevedad.
      </p>

      <ul className="flex flex-col gap-5">
        <li className="flex items-start gap-4">
          <span className={iconBox}>
            <Mail size={18} aria-hidden="true" />
          </span>
          <div>
            <p className="font-heading text-sm font-semibold text-dark dark:text-darkText">Email</p>
            <p className="font-body text-dark/60 dark:text-darkText/60">contacto@adipa.cl</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className={iconBox}>
            <Phone size={18} aria-hidden="true" />
          </span>
          <div>
            <p className="font-heading text-sm font-semibold text-dark dark:text-darkText">Teléfono</p>
            <p className="font-body text-dark/60 dark:text-darkText/60">+56 2 2345 6789</p>
          </div>
        </li>
        <li className="flex items-start gap-4">
          <span className={iconBox}>
            <Clock size={18} aria-hidden="true" />
          </span>
          <div>
            <p className="font-heading text-sm font-semibold text-dark dark:text-darkText">Horario</p>
            <p className="font-body text-dark/60 dark:text-darkText/60">
              Lunes a Viernes, 9:00 – 18:00 hrs.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

// ---------- main component ----------

export default function ContactForm() {
  const {
    form,
    errors,
    submitting,
    submitted,
    getFieldState,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useContactForm();

  const inputBase =
    "w-full rounded-btn border px-4 py-3 font-body text-dark dark:text-darkText placeholder:text-dark/40 dark:placeholder:text-darkText/40 bg-white dark:bg-darkCard outline-none transition-all duration-200 focus:ring-2";

  return (
    <section id="contacto" aria-labelledby="contacto-heading" className="bg-lightBg dark:bg-darkSurface py-16 md:py-24">
      <Container>
        <SectionHeader id="contacto-heading" title="Contáctanos" className="mb-10" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <ContactSidebar />

          {submitted ? (
            <SuccessMessage />
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5 rounded-card bg-white dark:bg-darkCard p-8 shadow-card"
            >
              <FormField
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
              </FormField>

              <FormField
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
                    getFieldState("email") === "error" ? "email-error" : undefined
                  }
                  aria-invalid={getFieldState("email") === "error"}
                  className={`${inputBase} ${inputClasses[getFieldState("email")]}`}
                />
              </FormField>

              <FormField
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
              </FormField>

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
