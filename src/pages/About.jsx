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
      <header className="sticky top-0 z-50 bg-ink border-b border-white/10">
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
          <div className="xl:hidden bg-ink border-b border-white/10 w-full">
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
        <p>
          I grew up in Bangalore and went through the IB Diploma at Greenwood High — four Higher Levels including Math, Physics, Chemistry, and Economics, which was one more HL than most students were allowed to take. I scored a 39 at junior midterms, a 2300 on the SAT, won a gold medal as the Karnataka state topper in a national mathematics exam run by UNSW Australia, and captained my school football team to a state championship. On paper, I was a strong applicant. In practice, I applied to Princeton Early Action under the Applied Mathematics major with a 5 out of 7 in Math HL — and was rejected.
        </p>
        <p>
          A classmate of mine applied to Princeton the same year, under Biology, with a 38 overall and a 4 out of 7 in Math HL. She was admitted. Her Biology HL score was a 6. The difference had nothing to do with total scores and everything to do with how the intended major aligned with the subject-level grade. I did not learn this from a guidebook. I learned it by watching my own application fail for a reason no counselor had warned me about, and then spending years understanding the mechanism behind it.
        </p>
        <p>
          In the summer before my senior year, I was selected as one of two students from India for the Summer Science Program — a research fellowship run in partnership with MIT and Caltech. I published an asteroid orbit determination paper through the Harvard Smithsonian Center for Astrophysics. That credential, more than my GPA or my SAT, is what moved the needle for UC Berkeley. It taught me something I now tell every family I work with: admissions committees at elite STEM universities are scanning for one unmistakable signal that you have done real work, not a long list of activities that suggest you might.
        </p>
        <p>
          Berkeley gave me a dual degree in Economics and Data Science. It also gave me eight students I mentored informally through the Haas School — all eight were admitted to a target school among Stanford, MIT, Berkeley, Duke, and CMU. That was not a business. It was a pattern I noticed: the same analytical approach that got me in could be taught, and the mistakes I made could be prevented for someone else.
        </p>
      </Section>

      {/* === THE PATH === */}
      <Section flag="Track Record" title="The path">
        <p>
          After Berkeley I spent four years as a quantitative advisory consultant, first at Ernst & Young and then at Accenture, working on credit risk models for US banks including Wells Fargo, SVB, Intuit, and Brex. The work was technical — building and validating probability-of-default models, stress-testing loan portfolios of 200,000+ customers, reviewing 88 consumer banking models for regulatory fairness compliance. I presented findings to heads of risk management and wrote documentation for Federal Reserve review.
        </p>
        <p>
          The reason I mention this is not to impress you with finance jargon. It is because the skill I developed at EY is the same skill I now apply to student profiles: structured evaluation under uncertainty. When a bank submits a credit model for validation, my job was to find the hidden flaw that the builder missed — the feature that looks fine in aggregate but fails under stress. When a student submits a profile for review, I am doing the same thing. The 5/7 in Math HL looks fine next to a 39 total. It only becomes a major-profile mismatch when you hold it against the intended major and the admit pool for that program. Most counselors do not read profiles at that resolution. I was trained to.
        </p>
        <p>
          I left consulting in 2024 to run RoadToIvies full-time. The advisory practice funds the platform I am building — an AI-powered diagnostic tool that codifies my admissions framework into a structured assessment any family can access before they ever speak to me. I am not scaling by hiring junior counselors. I am scaling by turning what I know into software.
        </p>
        <ul className="space-y-2 mt-4 list-none">
          <li className="font-mono text-[13px] tracking-[0.1em] text-muted">
            <span className="text-teal">→</span> 2015 — Summer Science Program, Astrophysics. 1 of 2 selected from India. Published in Harvard Smithsonian Press.
          </li>
          <li className="font-mono text-[13px] tracking-[0.1em] text-muted">
            <span className="text-teal">→</span> 2015–2019 — UC Berkeley, B.A. Economics & Data Science. CS 61A Course Tutor. Mentored 8 students to elite admits.
          </li>
          <li className="font-mono text-[13px] tracking-[0.1em] text-muted">
            <span className="text-teal">→</span> 2019–2024 — EY & Accenture, Quantitative Advisory. Credit risk modeling, model validation, regulatory compliance across 6+ US financial institutions.
          </li>
          <li className="font-mono text-[13px] tracking-[0.1em] text-muted">
            <span className="text-teal">→</span> 2024–present — RoadToIvies, full-time. Boutique advisory + AI diagnostic platform.
          </li>
        </ul>
      </Section>

      {/* === PHILOSOPHY === */}
      <Section flag="Method" title="How I work">
        <p>
          I work best with families who want the truth early enough to act on it. The ideal starting point is the summer before Grade 11 — that is when the decisions that determine your child's application quality are still ahead of them, not behind them. If your child is already a rising senior, I can still help, but the conversation shifts from building the profile to positioning what exists. I will tell you which shift you are in during our first call.
        </p>
        <p>
          My framework classifies every applicant into one of three archetypes — the Specialist, the Polymath, or the Tree — based on how their academic intensity, project depth, and personal interests are distributed. This is not a personality quiz. It is a structural diagnosis that determines which essay strategy, which college list, and which extracurricular investments will actually move the needle for their specific profile. The diagnostic tool on this site gives you a preview of that classification. A paid engagement goes much deeper.
        </p>
        <p>
          A typical engagement starts with a one-hour profile audit where I review grades, test scores, current activities, and intended major. I tell the family where the profile sits relative to the admit pool for their target schools, what the two or three highest-leverage interventions are, and whether the current school list is realistic. This conversation is often uncomfortable. I will tell you if your child's dream school is not a realistic target given their current trajectory, and I will explain why with specific data rather than vague encouragement. I would rather lose a client in the first session than waste a family's time and money for twelve months.
        </p>
        <p>
          After the audit, ongoing engagements follow a regular rhythm — typically fortnightly check-ins during the school year and weekly during application season. I review essay drafts, pressure-test college lists, advise on project direction, and flag problems before they become permanent. Every session ends with a written summary so both the student and the parents know exactly what was discussed and what needs to happen next.
        </p>
      </Section>

      {/* === CTA === */}
      <section className="bg-ink">
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
      <footer className="bg-ink border-t border-white/10">
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
