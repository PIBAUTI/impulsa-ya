import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-impulsa.jpg";
import { wa } from "@/lib/wa";

const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#talleres", label: "Talleres" },
  { href: "#corporativo", label: "Corporativo" },
  { href: "#equipo", label: "Equipo" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ctaHref = wa("Hola LIS, quiero información sobre los programas de IMPULSA");

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 bg-white ${
        scrolled ? "shadow-[0_2px_16px_rgba(13,27,75,0.08)]" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo de IMPULSA — Formación Comercial" width={40} height={40} className="h-10 w-10 object-contain" />
          <span className="impulsa-mark text-xl text-navy">IMPULSA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink hover:text-mid transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-navy text-white px-4 py-2.5 text-sm font-semibold hover:bg-corp transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Respondo en 2 min
          </a>
        </nav>

        <button
          aria-label="Abrir menú"
          className="lg:hidden p-2 text-navy"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="px-4 py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-md text-base font-medium text-ink hover:bg-soft"
              >
                {n.label}
              </a>
            ))}
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-navy text-white px-4 py-3 text-base font-semibold"
            >
              <MessageCircle className="h-5 w-5" />
              Respondo en 2 min
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
