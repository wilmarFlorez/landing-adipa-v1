"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { useFocusTrap } from "@/lib/useFocusTrap";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Cursos", href: "#cursos" },
  { label: "Diplomados", href: "#diplomados" },
  { label: "Recursos", href: "#recursos" },
  { label: "Contacto", href: "#contacto" },
];

// ---------- sub-components ----------

interface MobileNavProps {
  menuRef: RefObject<HTMLDivElement>;
  links: NavLink[];
  onClose: () => void;
}

function MobileNav({ menuRef, links, onClose }: MobileNavProps) {
  return (
    <div
      ref={menuRef}
      id="mobile-menu"
      className="border-t border-gray-100 bg-white md:hidden"
    >
      <Container>
        <ul className="flex flex-col py-4">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={onClose}
                className="block py-3 font-heading text-base font-medium text-dark transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="mt-4 border-t border-gray-100 pt-4">
            <Button variant="outline" size="sm" className="w-full justify-center">
              Iniciar Sesión
            </Button>
          </li>
        </ul>
      </Container>
    </div>
  );
}

// ---------- main component ----------

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  // Add shadow when page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on click outside the header
  useEffect(() => {
    if (!menuOpen) return;
    const onOutsideClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", onOutsideClick);
    return () => document.removeEventListener("mousedown", onOutsideClick);
  }, [menuOpen, closeMenu]);

  // Focus trap + Escape key when mobile menu is open
  useFocusTrap(menuOpen, menuRef, hamburgerRef, closeMenu);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-card" : ""
      }`}
    >
      <nav role="navigation" aria-label="Navegación principal">
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <a
              href="/"
              aria-label="ADIPA — Inicio"
              className="font-heading text-2xl font-bold text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
            >
              ADIPA
            </a>

            {/* Desktop nav links */}
            <ul className="hidden items-center gap-8 md:flex">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="link-underline font-heading text-sm font-medium text-dark transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button variant="outline" size="sm">
                Iniciar Sesión
              </Button>
            </div>

            {/* Hamburger toggle */}
            <button
              ref={hamburgerRef}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 items-center justify-center rounded-btn text-dark transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </Container>

        {menuOpen && (
          <MobileNav menuRef={menuRef} links={NAV_LINKS} onClose={closeMenu} />
        )}
      </nav>
    </header>
  );
}
