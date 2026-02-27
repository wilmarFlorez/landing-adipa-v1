/** Available course delivery modalities on the platform. */
export type CourseModality = "Online" | "En Vivo" | "Presencial";

/** Thematic category a course belongs to. */
export interface Category {
  id: string;
  label: string;
  slug: string;
}

/** Full details of a course in the catalog. */
export interface Course {
  id: string;
  title: string;
  instructor: string;
  category: Category["id"];
  startDate: string;
  price: number;
  discountPrice: number;
  modality: CourseModality;
  imageUrl: string;
  description: string;
}

/** Contact form field values. */
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

/** Validation error messages for the contact form. */
export interface ContactFormErrors {
  name?: string;
  email?: string;
  message?: string;
}
