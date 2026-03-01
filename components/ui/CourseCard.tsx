import Image from "next/image"
import { User, Calendar } from "lucide-react"
import type { Course, CourseModality } from "@/types"
import Button from "@/components/ui/Button"
import { formatDate, formatPrice } from "@/lib/utils"

interface Props {
  course: Course
}

const modalityClasses: Record<CourseModality, string> = {
  Online: "bg-secondary",
  "En Vivo": "bg-primary",
  Presencial: "bg-orange",
}

export default function CourseCard({ course }: Props) {
  const { title, instructor, startDate, price, discountPrice, modality, imageUrl } = course

  return (
    <article className="flex flex-col overflow-hidden rounded-card bg-white shadow-card transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-cardHover dark:bg-darkCard">
      {/* Course image */}
      <div className="relative h-48 w-full shrink-0">
        <Image
          src={imageUrl}
          alt={`Imagen del curso: ${title}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw"
        />
        {/* Modality badge */}
        <span
          className={`absolute left-3 top-3 rounded-full px-3 py-1 font-heading text-xs font-semibold text-white ${modalityClasses[modality]}`}
        >
          {modality}
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 font-heading text-base font-bold leading-snug text-dark dark:text-darkText">
          {title}
        </h3>

        <div className="mt-3 flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 font-body text-sm text-dark/60 dark:text-darkText/60">
            <User size={14} aria-hidden="true" className="shrink-0" />
            <span>{instructor}</span>
          </div>
          <div className="flex items-center gap-1.5 font-body text-sm text-dark/60 dark:text-darkText/60">
            <Calendar size={14} aria-hidden="true" className="shrink-0" />
            <time dateTime={startDate}>{formatDate(startDate)}</time>
          </div>
        </div>

        {/* Price + CTA */}
        <div className="mt-5 mt-auto flex items-center justify-between border-t border-gray-100 pt-4 dark:border-white/10">
          <div className="flex flex-col">
            <span className="font-body text-xs text-dark/40 line-through dark:text-darkText/40">
              {formatPrice(price)}
            </span>
            <span className="font-heading text-xl font-bold text-pink">
              {formatPrice(discountPrice)}
            </span>
          </div>
          <Button variant="primary" size="sm" aria-label={`Ver curso: ${title}`}>
            Ver curso
          </Button>
        </div>
      </div>
    </article>
  )
}
