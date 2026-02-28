import type { Category } from "@/types";

const ALL_SLUG = "all";

interface Props {
  categories: Category[];
  activeSlug: string;
  onChange: (slug: string) => void;
}

export default function CategoryFilter({
  categories,
  activeSlug,
  onChange,
}: Props) {
  const pills = [{ id: ALL_SLUG, label: "Todos", slug: ALL_SLUG }, ...categories];

  return (
    <div
      role="group"
      aria-label="Filtrar por categoría"
      className="flex flex-wrap gap-2"
    >
      {pills.map(({ id, label, slug }) => {
        const isActive = slug === activeSlug;
        return (
          <button
            key={id}
            type="button"
            aria-pressed={isActive}
            onClick={() => onChange(slug)}
            className={`rounded-full px-5 py-2 font-heading text-sm font-semibold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
              isActive
                ? "bg-primary text-white shadow-sm"
                : "bg-white text-dark hover:bg-lightBg hover:text-primary border border-gray-200"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
