import { clsx } from "clsx";

type Variant = "section" | "hero";
type HeadingLevel = "h1" | "h2";

interface Props {
  /** Must match the section's aria-labelledby value. */
  id: string;
  title: string;
  subtitle?: string;
  as?: HeadingLevel;
  /** "section" renders dark text at 3xl; "hero" renders white text at 4xl-6xl. */
  variant?: Variant;
  className?: string;
}

const titleClasses: Record<Variant, string> = {
  section: "font-heading text-3xl font-bold text-dark dark:text-darkText md:text-4xl",
  hero: "font-heading text-4xl font-bold leading-tight text-white text-balance md:text-5xl lg:text-6xl",
};

const subtitleClasses: Record<Variant, string> = {
  section: "mt-4 font-body text-lg text-dark/70 dark:text-darkText/70 leading-relaxed",
  hero: "font-body mx-auto mt-5 max-w-2xl text-lg text-white/90 md:text-xl",
};

/**
 * Reusable section heading with optional subtitle.
 * When no subtitle is given, renders the heading element directly (no wrapper div).
 * When a subtitle is given, wraps both in a div so className applies to the group.
 */
export default function SectionHeader({
  id,
  title,
  subtitle,
  as: Tag = "h2",
  variant = "section",
  className,
}: Props) {
  if (!subtitle) {
    return (
      <Tag id={id} className={clsx(titleClasses[variant], className)}>
        {title}
      </Tag>
    );
  }

  return (
    <div className={className}>
      <Tag id={id} className={titleClasses[variant]}>
        {title}
      </Tag>
      <p className={subtitleClasses[variant]}>{subtitle}</p>
    </div>
  );
}
