/**
 * Formats a price amount as Chilean Peso currency string.
 * Example: 199000 → "$199.000"
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Formats an ISO date string as a localized Spanish date.
 * A noon time component is appended to prevent UTC-offset day shifting.
 * Example: "2025-04-07" → "7 de abril de 2025"
 */
export function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("es-CL", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${dateString}T12:00:00`));
}
