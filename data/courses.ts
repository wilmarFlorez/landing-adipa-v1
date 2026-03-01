import type { Category, Course } from "@/types"

/** All thematic categories available in the course catalog. */
export const categories: Category[] = [
  {
    id: "psicologia-clinica",
    label: "Psicología Clínica",
    slug: "psicologia-clinica",
  },
  {
    id: "psicologia-organizacional",
    label: "Psicología Organizacional",
    slug: "psicologia-organizacional",
  },
  {
    id: "neurociencias",
    label: "Neurociencias",
    slug: "neurociencias",
  },
  {
    id: "salud-mental",
    label: "Salud Mental",
    slug: "salud-mental",
  },
]

/** Static course catalog with mock data for development and preview. */
export const courses: Course[] = [
  // --- Psicología Clínica ---
  {
    id: "curso-001",
    title: "Terapia Cognitivo-Conductual: Fundamentos y Práctica",
    instructor: "Dra. Valentina Reyes",
    category: "psicologia-clinica",
    startDate: "2025-04-07",
    price: 290000,
    discountPrice: 199000,
    modality: "En Vivo",
    imageUrl: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=600&h=400&fit=crop",
    description:
      "Aprende los principios esenciales de la TCC y su aplicación en el tratamiento de ansiedad, depresión y fobias con casos clínicos reales.",
  },
  {
    id: "curso-002",
    title: "Evaluación Psicológica y Diagnóstico en Clínica",
    instructor: "Dr. Sebastián Mora",
    category: "psicologia-clinica",
    startDate: "2025-05-12",
    price: 320000,
    discountPrice: 229000,
    modality: "Online",
    imageUrl: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?w=600&h=400&fit=crop",
    description:
      "Domina el uso de baterías psicométricas y entrevistas clínicas estructuradas para construir diagnósticos precisos según DSM-5-TR.",
  },
  {
    id: "curso-003",
    title: "Intervención en Crisis y Primeros Auxilios Psicológicos",
    instructor: "Mg. Catalina Vidal",
    category: "psicologia-clinica",
    startDate: "2025-06-02",
    price: 185000,
    discountPrice: 129000,
    modality: "Online",
    imageUrl: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&h=400&fit=crop",
    description:
      "Protocolo de respuesta ante situaciones de crisis aguda, duelo, trauma y riesgo suicida dirigido a profesionales de la salud.",
  },

  // --- Psicología Organizacional ---
  {
    id: "curso-004",
    title: "Liderazgo Consciente y Gestión de Equipos de Alto Rendimiento",
    instructor: "Dr. Andrés Fuentes",
    category: "psicologia-organizacional",
    startDate: "2025-04-14",
    price: 340000,
    discountPrice: 249000,
    modality: "En Vivo",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
    description:
      "Herramientas psicológicas para desarrollar estilos de liderazgo adaptativos, fortalecer la cohesión grupal y mejorar el clima organizacional.",
  },
  {
    id: "curso-005",
    title: "Psicología del Trabajo y Bienestar Organizacional",
    instructor: "Ps. Daniela Castillo",
    category: "psicologia-organizacional",
    startDate: "2025-07-07",
    price: 265000,
    discountPrice: 189000,
    modality: "Online",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
    description:
      "Análisis del burnout, engagement y factores psicosociales del trabajo, con diseño de estrategias de intervención para empresas.",
  },
  {
    id: "curso-006",
    title: "Selección por Competencias y Assessment Center",
    instructor: "Mg. Roberto Sánchez",
    category: "psicologia-organizacional",
    startDate: "2025-08-11",
    price: 298000,
    discountPrice: 219000,
    modality: "Presencial",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    description:
      "Aprende a diseñar y facilitar procesos de selección basados en competencias, usando técnicas de entrevista conductual y dinámicas grupales.",
  },

  // --- Neurociencias ---
  {
    id: "curso-007",
    title: "Neurociencia Aplicada al Aprendizaje y la Memoria",
    instructor: "Dra. Isabel Navarro",
    category: "neurociencias",
    startDate: "2025-05-05",
    price: 375000,
    discountPrice: 269000,
    modality: "Online",
    imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    description:
      "Explora los mecanismos cerebrales que subyacen al aprendizaje, la consolidación de memoria y la plasticidad sináptica con aplicaciones educativas.",
  },
  {
    id: "curso-008",
    title: "Neuropsicología Clínica: Evaluación y Rehabilitación",
    instructor: "Dr. Felipe Contreras",
    category: "neurociencias",
    startDate: "2025-06-16",
    price: 420000,
    discountPrice: 299000,
    modality: "En Vivo",
    imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop",
    description:
      "Formación avanzada en evaluación neuropsicológica de daño adquirido, demencias y trastornos del neurodesarrollo, con protocolos de rehabilitación cognitiva.",
  },

  // --- Salud Mental ---
  {
    id: "curso-009",
    title: "Mindfulness Basado en la Evidencia: MBSR y MBCT",
    instructor: "Ps. Lorena Espinoza",
    category: "salud-mental",
    startDate: "2025-04-28",
    price: 210000,
    discountPrice: 149000,
    modality: "Online",
    imageUrl: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
    description:
      "Entrenamiento completo en los programas MBSR y MBCT para la reducción del estrés y la prevención de recaídas depresivas, basado en protocolos validados.",
  },
  {
    id: "curso-010",
    title: "Salud Mental Infanto-Juvenil: Detección Temprana e Intervención",
    instructor: "Dra. Patricia Herrera",
    category: "salud-mental",
    startDate: "2025-09-08",
    price: 280000,
    discountPrice: 209000,
    modality: "Presencial",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    description:
      "Identificación y abordaje de trastornos de ansiedad, TDAH, depresión y conductas disruptivas en niños y adolescentes desde un enfoque sistémico.",
  },
]
