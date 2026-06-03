import { useState } from "react";
import { Link } from "react-router-dom";

// ============================================================
// About — starter shell. Replace placeholder copy with real
// content. Each <Section> block is a separate beat of the
// page and can be reordered or deleted freely.
// ============================================================

const NAV_LINKS = [
  { label: "Credentials", to: "/#credentials" },
  { label: "Case Study", to: "/#case-study" },
  { label: "Services", to: "/#services" },
  { label: "Activities", to: "/#activities" },
  { label: "Diagnostic", to: "/diagnostic" },
  { label: "About Me", to: "/about" },
];

export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-paper text-ink font-sans min-h-screen overflow-x-hidden">
      {/* === MASTHEAD (mirrors Home.jsx) === */}
      <header className="sticky top-0 z-50 bg-slate border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link to="/" className="font-mono text-[13px] tracking-[0.25em] text-paper uppercase">
            Road<span className="text-teal">To</span>Ivies
          </Link>
          <nav className="hidden xl:flex items-center gap-6">
            {NAV_LINKS.map((l) =>
              l.to.startsWith("/#") ? (
                <a
                  key={l.label}
                  href={l.to}
                  className="font-mono text-[16px] tracking-[0.12em] uppercase text-white hover:text-teal transition-colors whitespace-nowrap"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.to}
                  className="font-mono text-[16px] tracking-[0.12em] uppercase text-white hover:text-teal transition-colors whitespace-nowrap"
                >
                  {l.label}
                </Link>
              )
            )}
          </nav>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="font-mono text-[16px] text-white hover:text-teal transition-colors xl:hidden"
            aria-label="Toggle menu"
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
          <div className="xl:hidden bg-slate border-b border-white/10 w-full">
            {NAV_LINKS.map((l) =>
              l.to.startsWith("/#") ? (
                <a
                  key={l.label}
                  href={l.to}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono text-[16px] tracking-[0.15em] uppercase text-white hover:text-teal transition-colors px-6 py-4 border-b border-white/5"
                >
                  {l.label}
                </a>
              ) : (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className="block font-mono text-[16px] tracking-[0.15em] uppercase text-white hover:text-teal transition-colors px-6 py-4 border-b border-white/5"
                >
                  {l.label}
                </Link>
              )
            )}
          </div>
        )}
      </header>

      {/* === HERO === */}
      <section className="max-w-4xl mx-auto px-6 pt-20 pb-16">
        <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-6">
          About Me
        </p>
        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-start">
          <img
            src="/headshot.jpg"
            alt="Sukrit Tripathi"
            className="w-[180px] h-[180px] object-cover rounded-md border border-rule"
          />
          <div>
            <h1 className="font-serif text-[clamp(2rem,4.5vw,3rem)] font-bold leading-[1.1] text-ink mb-4">
              Sukrit Tripathi
            </h1>
            <p className="text-[17px] text-muted leading-relaxed">
              {/* TODO: One-line tagline. Example:
                  "Admissions strategist for Indian STEM applicants. Berkeley grad,
                  SSP 2015, four years in quant consulting." */}
              Admissions strategist for Indian STEM applicants. Berkeley grad,
              SSP 2015, four years in quantitative consulting.
            </p>
          </div>
        </div>
      </section>

      {/* === MY STORY === */}
      <Section flag="Origin" title="The story">
        {/* TODO: Replace with your full origin narrative. Two or three paragraphs.
            How you got from a Bangalore high school to Berkeley, what SSP did
            for you, why you came back to do this work. */}
        <p>
          Placeholder. Tell the reader, in your own words, the path that took
          you from a Bangalore classroom to the UC Berkeley campus, and what
          you saw inside the US admissions process that made you want to help
          other Indian students navigate it. Two to four paragraphs is plenty —
          parents skim.
        </p>
        <p>
          A second paragraph for context: SSP 2015, the inflection it created,
          and what the Berkeley experience taught you that you couldn't have
          learned from a guidebook.
        </p>
      </Section>

      {/* === THE PATH === */}
      <Section flag="Track Record" title="The path">
        {/* TODO: Expand on Berkeley → EY/Accenture → RoadToIvies.
            What did the quant consulting work teach you about evaluation? */}
        <p>
          Placeholder. Cover the years between Berkeley and RoadToIvies — the
          EY and Accenture quantitative advisory work, what you built, what
          you learned about how rigorous evaluation actually happens inside
          large institutions. The parallel to admissions reading is worth
          drawing out explicitly.
        </p>
        <ul className="space-y-2 mt-4 list-none">
          <li className="font-mono text-[13px] tracking-[0.1em] text-muted">
            <span className="text-teal">→</span> UC Berkeley, B.A. Economics & Data Science (2015–2019)
          </li>
          <li className="font-mono text-[13px] tracking-[0.1em] text-muted">
            <span className="text-teal">→</span> Summer Science Program, Astrophysics (2015)
          </li>
          <li className="font-mono text-[13px] tracking-[0.1em] text-muted">
            <span className="text-teal">→</span> EY & Accenture, Quantitative Advisory (2019–2023)
          </li>
          <li className="font-mono text-[13px] tracking-[0.1em] text-muted">
            <span className="text-teal">→</span> RoadToIvies, full-time (2024–)
          </li>
        </ul>
      </Section>

      {/* === PHILOSOPHY === */}
      <Section flag="Method" title="How I work">
        {/* TODO: Your philosophy. What kind of student do you take on?
            What does "honest assessment" actually look like in practice? */}
        <p>
          Placeholder. State your operating principles plainly. What kind of
          family do you work well with. What you refuse to do. What "honest
          assessment" looks like when it's uncomfortable.
        </p>
        <p>
          A second paragraph can describe the rhythm of an engagement — first
          session, weekly cadence, how feedback is delivered.
        </p>
      </Section>

      {/* === WHAT I'M NOT === */}
      <Section flag="Boundaries" title="What I am not">
        {/* TODO: Optional but high-trust. The things you don't do. */}
        <p>
          Placeholder. The disclosure section. State the things you explicitly
          do not do: guarantee admits, ghostwrite essays, pad activity lists,
          place students into projects you cannot vouch for. Parents who have
          been burned before will read this section twice.
        </p>
      </Section>

      {/* === CTA === */}
      <section className="bg-slate">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-4">
            Next Step
          </p>
          <h2 className="font-serif text-3xl font-bold text-paper mb-6">
            Run the diagnostic, then we can talk.
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/diagnostic"
              className="font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-6 py-3.5 hover:bg-teal-light transition-colors border border-teal"
            >
              Run Diagnostic →
            </Link>
            <a
              href="https://wa.me/918904176520"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] tracking-[0.15em] uppercase bg-transparent text-paper px-6 py-3.5 border border-paper/30 hover:border-teal hover:text-teal transition-colors"
            >
              WhatsApp +91 89041 76520
            </a>
          </div>
        </div>
      </section>

      {/* === FOOTER === */}
      <footer className="bg-slate border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[13px] tracking-[0.2em] uppercase text-white/40">
            © 2026 RoadToIvies · Bengaluru, India
          </span>
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="font-mono text-[13px] tracking-[0.15em] uppercase text-white/50 hover:text-teal transition-colors"
            >
              Home
            </Link>
            <Link
              to="/diagnostic"
              className="font-mono text-[13px] tracking-[0.15em] uppercase text-white/50 hover:text-teal transition-colors"
            >
              Diagnostic
            </Link>
            <a
              href="https://www.linkedin.com/in/sukrit-tripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] tracking-[0.15em] uppercase text-white/50 hover:text-teal transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Section({ flag, title, children }) {
  return (
    <section className="border-t border-rule">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">
          {flag}
        </p>
        <h2 className="font-serif text-3xl font-bold text-ink mb-6">{title}</h2>
        <div className="space-y-4 text-[16px] text-muted leading-relaxed max-w-2xl">
          {children}
        </div>
      </div>
    </section>
  );
}
