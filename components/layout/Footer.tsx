import { Mail, Phone } from "lucide-react";
import { SiInstagram, SiFacebook, SiLinkedin, SiYoutube } from "react-icons/si";
import type { IconType } from "react-icons";
import Container from "@/components/ui/Container";

const NAV_LINKS = [
  { label: "Cursos", href: "#cursos" },
  { label: "Diplomados", href: "#" },
  { label: "Recursos", href: "#" },
  { label: "Contacto", href: "#contacto" },
  { label: "Sobre Nosotros", href: "#" },
];

const SOCIAL_LINKS: { label: string; href: string; Icon: IconType }[] = [
  { label: "Instagram", href: "#", Icon: SiInstagram },
  { label: "Facebook", href: "#", Icon: SiFacebook },
  { label: "LinkedIn", href: "#", Icon: SiLinkedin },
  { label: "YouTube", href: "#", Icon: SiYoutube },
];

const CONTACT_INFO = [
  { Icon: Mail, text: "contacto@adipa.cl" },
  { Icon: Phone, text: "+56 2 2345 6789" },
];

const LINK_CLASS =
  "font-body text-sm text-white/70 transition-colors duration-200 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded-sm";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-heading text-2xl font-bold text-white">
              ADIPA
            </span>
            <p className="font-body text-sm leading-relaxed text-white/60">
              Plataforma de educación continua especializada en psicología y
              salud mental, con presencia en Chile y Latinoamérica.
            </p>
          </div>

          {/* Column 2 — Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Navegación
            </h3>
            <ul className="flex flex-col gap-2.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className={LINK_CLASS}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Social media */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Redes sociales
            </h3>
            <ul className="flex flex-col gap-3">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`Visitar ADIPA en ${label}`}
                    className="inline-flex items-center gap-2.5 font-body text-sm text-white/70 transition-colors duration-200 hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded-sm"
                  >
                    <Icon size={16} aria-hidden="true" className="shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-white/40">
              Contacto
            </h3>
            <ul className="flex flex-col gap-3">
              {CONTACT_INFO.map(({ Icon, text }) => (
                <li
                  key={text}
                  className="flex items-center gap-2.5 font-body text-sm text-white/70"
                >
                  <Icon size={15} aria-hidden="true" className="shrink-0 text-secondary" />
                  {text}
                </li>
              ))}
            </ul>
            <p className="font-body text-sm text-white/60">
              Lunes a Viernes
              <br />
              9:00 – 18:00 hrs.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 sm:flex-row">
          <p className="font-body text-xs text-white/40">
            © 2025 ADIPA. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <a href="#" className="font-body text-xs text-white/40 transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded-sm">
              Términos y condiciones
            </a>
            <a href="#" className="font-body text-xs text-white/40 transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary rounded-sm">
              Política de privacidad
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
