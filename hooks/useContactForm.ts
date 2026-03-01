import { useState } from "react";
import type { ChangeEvent, FocusEvent, FormEvent } from "react";
import type { ContactFormData, ContactFormErrors } from "@/types";

/** Visual state of a single form field, driven by validation results. */
export type FieldState = "default" | "error" | "valid";

const EMPTY_FORM: ContactFormData = { name: "", email: "", message: "" };

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

export interface ContactFormHandlers {
  form: ContactFormData;
  errors: ContactFormErrors;
  touched: Partial<Record<keyof ContactFormData, boolean>>;
  submitting: boolean;
  submitted: boolean;
  getFieldState: (field: keyof ContactFormData) => FieldState;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleBlur: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

/** Manages all state and event handlers for the contact form. */
export function useContactForm(): ContactFormHandlers {
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
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const field = name as keyof ContactFormData;
    const updated = { ...form, [field]: value };
    setForm(updated);

    // Re-validate touched fields on change so errors clear as the user types
    if (touched[field]) {
      setErrors(validate(updated));
    }
  }

  function handleBlur(
    e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = e.target.name as keyof ContactFormData;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(form));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Mark all fields touched so every validation error becomes visible
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

  return {
    form,
    errors,
    touched,
    submitting,
    submitted,
    getFieldState,
    handleChange,
    handleBlur,
    handleSubmit,
  };
}
