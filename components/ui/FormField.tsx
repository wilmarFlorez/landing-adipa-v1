import type { FieldState } from "@/hooks/useContactForm"

/** Tailwind border/ring classes for each field validation state. */
export const inputClasses: Record<FieldState, string> = {
  default: "border-gray-200 dark:border-white/20 focus:border-primary focus:ring-primary/20",
  error: "border-red-500 dark:border-red-400 focus:border-red-500 focus:ring-red-500/20",
  valid: "border-green-500 dark:border-green-400 focus:border-green-500 focus:ring-green-500/20",
}

interface Props {
  id: string
  label: string
  state: FieldState
  error?: string
  children: React.ReactNode
}

/** Wraps a form input/textarea with a label and an accessible error message. */
export default function FormField({ id, label, state, error, children }: Props) {
  const errorId = `${id}-error`
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={id}
        className="font-heading text-sm font-semibold text-dark dark:text-darkText"
      >
        {label}
      </label>
      {children}
      {state === "error" && error && (
        <span
          id={errorId}
          role="alert"
          className="font-body text-xs text-red-500 dark:text-red-400"
        >
          {error}
        </span>
      )}
    </div>
  )
}
