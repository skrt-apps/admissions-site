import { useState } from "react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Credentials", href: "#credentials" },
  { label: "Case Study", href: "#case-study" },
  { label: "Services", href: "#services" },
  { label: "Activities", href: "#activities" },
  { label: "Diagnostic", href: "/diagnostic" },
  { label: "About Me", href: "/about" },
];

export default function GlobalHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-ink border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-mono text-[13px] tracking-[0.25em] text-paper uppercase">
          Road<span className="text-teal">To</span>Ivies
        </Link>

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="font-mono text-[16px] tracking-[0.12em] uppercase text-white hover:text-teal transition-colors whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="font-mono text-[16px] text-white hover:text-teal transition-colors xl:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <a
          href="https://wa.me/918904176520"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-4 py-3 hover:bg-teal-light transition-colors border border-teal"
        >
          WhatsApp →
        </a>
      </div>

      {menuOpen && (
        <div className="xl:hidden bg-ink border-b border-white/10 w-full" role="menu">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block font-mono text-[16px] tracking-[0.15em] uppercase text-white hover:text-teal transition-colors px-6 py-4 border-b border-white/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/918904176520"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-6 py-4 hover:bg-teal-light transition-colors"
          >
            WhatsApp →
          </a>
        </div>
      )}
    </header>
  );
}
