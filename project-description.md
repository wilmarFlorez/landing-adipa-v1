# Prueba Técnica — Desarrollador/a Frontend

## Bienvenida

Le damos la bienvenida al proceso de selección de **ADIPA**.

ADIPA es una plataforma de educación continua especializada en psicología y salud mental, con presencia en Chile y Latinoamérica.

Esta prueba evalúa la capacidad del candidato para construir interfaces de calidad en **Next.js**. No buscamos perfección — buscamos criterio técnico, atención al detalle y código profesional.

---

## Descripción de la Prueba

El objetivo es construir una **landing page de catálogo de cursos** inspirada en nuestra página de producción:

> **Referencia visual:** [https://adipa.cl/cursos](https://adipa.cl/cursos)

Se recomienda visitar la referencia y analizar la estructura, los componentes y el diseño. El objetivo es construir una landing que iguale o supere esa referencia en calidad visual y funcional.

Se debe entregar **una única versión** implementada con el siguiente stack:

| Stack                                                    |
| -------------------------------------------------------- |
| **Next.js 14+ (App Router) · Tailwind CSS · TypeScript** |

**Importante:** La data es inventada por el candidato. No es necesario consumir ninguna API. Se deben crear datos ficticios con al menos **8 cursos** distribuidos en un mínimo de **3 categorías**.

---

## Secciones Obligatorias

La landing debe incluir las siguientes secciones:

### 1. Header

- Logo (puede ser un placeholder o texto estilizado "ADIPA")
- Navegación principal (Cursos, Diplomados, Recursos, Contacto)
- Botón de "Iniciar Sesión" (no funcional, solo visual)

### 2. Hero

- Título principal y descripción corta
- Call to Action (CTA) visible — ej. "Explorar cursos"
- Fondo con gradiente o imagen

### 3. Grilla de Cursos

Cards con la siguiente información mínima:

- Imagen del curso (puede ser un placeholder de [Unsplash](https://unsplash.com) o similar)
- Título del curso
- Nombre del instructor
- Fecha de inicio
- Precio original y precio con descuento
- Badge de modalidad (Online, En Vivo, Presencial)
- Botón de acción ("Ver curso" o "Inscribirme")

Layout: grilla de 3 columnas en desktop, 2 en tablet, 1 en mobile.

### 4. Filtrado por Categoría

- Pills, tabs o sidebar con al menos 3 categorías (ej. Psicología Clínica, Psicología Organizacional, Neurociencias)
- Un filtro "Todos" que muestre todos los cursos
- Filtrado client-side (sin recarga de página)

### 5. Formulario de Contacto

Campos:

- Nombre (obligatorio, mínimo 2 caracteres)
- Email (obligatorio, formato válido)
- Mensaje (obligatorio, mínimo 10 caracteres)

Requisitos:

- Validación client-side con mensajes de error visibles
- Estado de éxito visual al "enviar" (no necesita backend real)
- Estilos consistentes con el resto de la página

### 6. Footer

- Logo o nombre de la empresa
- Links de navegación
- Redes sociales (íconos placeholder)
- Copyright

---

## Design Tokens de la Marca

Se deben utilizar estos valores para mantener consistencia con la identidad visual de ADIPA:

### Colores

| Token      | Hex       | Uso                                     |
| ---------- | --------- | --------------------------------------- |
| Primary    | `#704EFD` | Botones principales, enlaces, acentos   |
| Secondary  | `#2CB7FF` | Botones secundarios, badges, highlights |
| Pink       | `#FF017C` | Descuentos, alertas, CTAs urgentes      |
| Orange     | `#FFA927` | Badges, ratings, elementos de atención  |
| Dark       | `#3A3F5A` | Texto principal, fondos oscuros         |
| Light BG   | `#F3F4FF` | Fondo de secciones alternadas           |
| Light BG 2 | `#F8FAFF` | Fondo general, cards                    |
| White      | `#FFFFFF` | Fondo de cards, contraste               |

### Tipografía

| Fuente         | Uso                           | Google Fonts                                         |
| -------------- | ----------------------------- | ---------------------------------------------------- |
| **Montserrat** | Headings, navegación, botones | [Link](https://fonts.google.com/specimen/Montserrat) |
| **Poppins**    | Body text, párrafos, labels   | [Link](https://fonts.google.com/specimen/Poppins)    |

### Espaciado y Dimensiones

| Propiedad               | Valor                              |
| ----------------------- | ---------------------------------- |
| Container max-width     | `1400px`                           |
| Border radius (cards)   | `12px`                             |
| Border radius (botones) | `8px`                              |
| Sombra (cards)          | `0 2px 4px rgba(3, 27, 78, 0.06)`  |
| Sombra hover (cards)    | `0 10px 20px rgba(3, 27, 78, 0.1)` |
| Padding global          | `20px`                             |

---

## Requisitos Técnicos

| Requisito   | Detalle                                                            |
| ----------- | ------------------------------------------------------------------ |
| Framework   | Next.js 14+ con **App Router**                                     |
| Estilos     | Tailwind CSS 3+ o 4                                                |
| Lenguaje    | TypeScript en modo estricto (`strict: true`)                       |
| Componentes | Reutilizables, tipados, con props definidas vía interfaces o types |
| Data        | Archivo JSON o constantes tipadas (no hardcodeado en JSX)          |
| Responsive  | Mobile (375px), Tablet (768px), Desktop (1280px+)                  |
| Estructura  | Separación clara de componentes, layouts y data                    |

---

## Entregables

1. **Repositorio en GitHub** (público o privado con acceso otorgado)

2. **README** que incluya:
   - Instrucciones de instalación
   - Comandos para ejecutar en desarrollo
   - Comando de build para producción
   - Versión de Node utilizada

3. **Screenshots o video corto** del resultado final (opcional pero valorado)

---

## Rúbrica de Evaluación

La entrega será evaluada con la siguiente rúbrica.

### Criterios Principales

| Criterio                       | Peso | Excelente (10)                                                                                           | Bueno (7)                                           | Regular (4)                                         | Insuficiente (1)                                        |
| ------------------------------ | ---- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- | ------------------------------------------------------- |
| **Estructura del proyecto**    | 25%  | Organización clara, separación de concerns, naming consistente, archivos donde se esperaría encontrarlos | Buena estructura con pequeñas inconsistencias       | Estructura básica funcional pero sin criterio claro | Archivos desordenados, sin estructura reconocible       |
| **Calidad visual y fidelidad** | 25%  | Iguala o supera la referencia visual. Atención al detalle en tipografía, espaciado, colores y jerarquía  | Muy similar a la referencia con diferencias menores | Reconocible pero con diferencias notables en diseño | No se parece a la referencia o ignora los design tokens |
| **Responsive design**          | 20%  | Correcto en los 3 breakpoints (375px, 768px, 1280px+). Transiciones fluidas                              | Funciona en los 3 breakpoints con ajustes menores   | Mobile funciona pero presenta problemas en tablet   | No es responsive o el layout se rompe                   |
| **Código limpio**              | 20%  | Legible, reutilizable, sigue convenciones del stack. Buen uso de types/interfaces                        | Buen código con áreas de mejora menores             | Funcional pero difícil de mantener                  | Malas prácticas evidentes                               |
| **Extras (bonus)**             | 10%  | 4+ extras bien implementados                                                                             | 2-3 extras implementados                            | 1 extra implementado                                | Sin extras                                              |

---

## Bonus Valorados (Opcionales)

Estos puntos no son obligatorios, pero suman a la evaluación:

- **Deploy funcional** — por ejemplo en Vercel
- **Animaciones y microinteracciones** — Hover en cards, transiciones de filtro, scroll suave
- **Accesibilidad** — HTML semántico, atributos ARIA, navegación por teclado
- **SEO básico** — Meta tags, Open Graph, estructura de headings correcta
- **Dark mode** — Toggle funcional con persistencia en localStorage
- **Tests** — Unitarios o de integración
- **Lighthouse score > 90** — En Performance, Accessibility, Best Practices y SEO

---

## Preguntas Frecuentes

**¿Se puede usar una librería de componentes UI (shadcn, DaisyUI, etc.)?**  
Se pueden utilizar utilidades de Tailwind o headless components (Radix, Headless UI). No se deben usar librerías de componentes pre-estilizados — buscamos evaluar criterio de diseño y CSS.

**¿Se necesita backend funcional?**  
No. Solo se necesita una implementación frontend con data estática tipada. No se requieren APIs ni base de datos.

**¿Se pueden usar íconos de alguna librería?**  
Sí. Lucide, Heroicons, Font Awesome, o cualquier set de íconos es válido.

---

## Últimas Notas

- No buscamos una copia pixel por pixel — buscamos que se **comprenda el diseño** y se implemente con criterio profesional.
- El código cuenta tanto como el resultado visual.
- Se debe utilizar Git con commits descriptivos. Queremos ver el proceso de trabajo, no solo el resultado final.

**— Equipo de Tecnología, ADIPA**
