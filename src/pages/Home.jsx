import { useState } from "react";
import { Link } from "react-router-dom";
import { PopupButton } from "react-calendly";

const TICKER_ITEMS = [
  "SSP 2015 — 1 of 2 selected from India",
  "UC Berkeley · B.A. Economics & Data Science",
  "EY Quantitative Advisory · 4+ years",
  "88 Consumer Banking Models Validated",
  "Haas Mentor — 8/8 admits to Stanford · MIT · Berkeley · Duke · CMU",
  "Published Research — Harvard Smithsonian Press",
  "200,000+ Loan-Level Observations Analysed",
  "Wells Fargo · SVB · Intuit · Brex · First Citizens",
];

const CREDENTIALS = [
  {
    year: "2015",
    title: "Summer Science Program",
    role: "Astrophysics Research Fellow",
    desc: "1 of 2 from India. Published in Harvard Smithsonian Press. Tier 4 sovereign signal.",
    metric: "1 of 2 from India",
  },
  {
    year: "2015–2019",
    title: "UC Berkeley",
    role: "B.A. Economics & Data Science",
    desc: "Haas mentor: 8/8 mentees admitted to Stanford, MIT, Berkeley, Duke, CMU.",
    metric: "8/8 mentee admits",
  },
  {
    year: "2019–2025",
    title: "Ernst & Young",
    role: "Quantitative Advisory Consultant",
    desc: "4+ years. 88 consumer banking models validated. 200k+ loan-level analysis. Wells Fargo, SVB, Intuit, Brex, First Citizens.",
    metric: "88 models · $200B+ portfolio",
  },
  {
    year: "2014–2015",
    title: "Published Research",
    role: "Independent Researcher (High School)",
    desc: "Graph Theory ranking systems. Portfolio optimization. 2 papers, peer-reviewed. Technical depth as a high school student.",
    metric: "2 peer-reviewed papers",
  },
];

const PRINCETON_ROWS = [
  { label: "Intended Major",     reject: "Applied Mathematics",              admit: "Biology"                        },
  { label: "Total IB (Gr. 11)", reject: "39 / 42",                          admit: "38 / 42"                        },
  { label: "SAT / ACT",         reject: "2300 SAT",                         admit: "34 ACT"                         },
  { label: "Math HL Score",     reject: "5 / 7  ← FATAL SIGNAL",           admit: "4 / 7",           fatal: true   },
  { label: "Subject–Major HL",  reject: "Math HL: 5/7 → Math major",        admit: "Bio HL: 6/7 → Bio major"        },
  { label: "Other Credentials", reject: "SSP · CS/Math papers",             admit: "Biology research papers"        },
  { label: "Princeton REA",     reject: "✗  Rejected",                      admit: "✓  Admitted",     result: true  },
];

const SERVICES = [
  {
    title: "Profile Audit",
    price: "From ₹15,000",
    scope: "One session",
    desc: "A single, ruthless assessment of where your profile currently stands. We identify structural gaps, fatal signals, and the 2–3 highest-leverage interventions available before applications open.",
    items: ["1-hour deep session", "Written assessment", "College list sanity check", "Major alignment review"],
    featured: false,
  },
  {
    title: "Essay Strategy",
    price: "From ₹25,000",
    scope: "Single engagement",
    desc: "Narrative architecture for CommonApp and supplement essays. We anchor every essay in verifiable proof of passion — not autobiography, not generic inspiration stories.",
    items: ["CommonApp essay scaffold", "Supplement strategy map", "Narrative coherence review", "2 revision rounds"],
    featured: true,
  },
  {
    title: "End-to-End Planning",
    price: "From ₹2,50,000",
    scope: "12–24 month engagement",
    desc: "Full-cycle strategy from Grade 10 summer through final submissions. Project architecture, academic roadmap, testing schedule, college list, essays, and application management.",
    items: ["12–24 month roadmap", "Project architecture", "Testing schedule", "Full essay suite", "Application management"],
    featured: false,
  },
];

const ACTIVITY_TIERS = [
  {
    n: "01",
    tier: "SOVEREIGN",
    accent: "teal",
    examples: "SSP · RSI · PRIMES · Regeneron STS finalist · IMO medalist",
    signal: "Globally rare. Admissions committees recognise this unprompted. Locks a top-10 application.",
  },
  {
    n: "02",
    tier: "ELITE",
    accent: "teal-light",
    examples: "Published peer-reviewed research · national olympiad finalist · patented invention",
    signal: "Rare enough to differentiate. Must appear in the intended major subject area.",
  },
  {
    n: "03",
    tier: "COMPETITIVE",
    accent: "amber",
    examples: "State / national award · significant GitHub project with stars · funded startup",
    signal: "Competitive but not rare. Needs quantified output to register on a dense application.",
  },
  {
    n: "04",
    tier: "GENERIC",
    accent: "muted",
    examples: "School club president · MUN · volunteering without impact metric · family internship",
    signal: "Filler. Not harmful if deep signals exist above it. Actively harmful when it replaces them.",
  },
  {
    n: "05",
    tier: "ZERO SIGNAL",
    accent: "danger",
    examples: "Undocumented service hours · fake NGO hours · duplicate activities across multiple years",
    signal: "Actively suspicious. Committees are trained to identify padding.",
  },
];

const TIER_ACCENT = {
  teal:       "text-teal",
  "teal-light": "text-teal-light",
  amber:      "text-amber",
  muted:      "text-muted",
  danger:     "text-danger",
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-paper text-ink font-sans min-h-screen overflow-x-hidden">
      <style>{`
        @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .ticker-track { animation: ticker 50s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
      `}</style>

      {/* === SECTION: MASTHEAD === */}
      <header className="sticky top-0 z-50 bg-ink border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-mono text-[11px] tracking-[0.25em] text-paper uppercase">
            Road<span className="text-teal">To</span>Ivies
          </span>
          <nav className="hidden md:flex items-center gap-8">
            {["Credentials", "Case Study", "Services", "Activities"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/50 hover:text-teal transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="font-mono text-[13px] text-white/60 hover:text-teal transition-colors md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <a
            href="https://wa.me/918904176520"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] tracking-[0.15em] uppercase bg-teal text-paper px-4 py-2 hover:bg-teal-light transition-colors border border-teal"
          >
            WhatsApp →
          </a>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-ink border-b border-white/10 w-full">
            {["Credentials", "Case Study", "Services", "Activities"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMenuOpen(false)}
                className="block font-mono text-[13px] tracking-[0.15em] uppercase text-white/60 hover:text-teal transition-colors px-6 py-4 border-b border-white/5"
              >
                {l}
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

      {/* === SECTION: TICKER === */}
      <div className="bg-cream border-b border-rule overflow-hidden">
        <div className="ticker-track flex whitespace-nowrap py-2.5">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted px-8">
              {item}
              <span className="ml-8 text-rule">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* === SECTION: HERO === */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">
        <div>
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal mb-6">
            Elite US STEM Admissions · Bengaluru
          </p>
          <h1 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.08] text-ink mb-6">
            Your Ivy League window<br />
            closes in Grade&nbsp;11.<br />
            <span className="italic text-teal">Most find out in Grade&nbsp;12.</span>
          </h1>
          <p className="text-[17px] text-muted leading-relaxed max-w-xl mb-10">
            Admissions consulting anchored in sovereign credentials — SSP, Berkeley, EY — for Indian STEM specialists who need data-driven strategy, not platitudes.
          </p>

          <div className="grid grid-cols-3 gap-px bg-rule mb-10 border border-rule">
            {[
              { n: "8/8",  label: "Mentee admits\nStanford · MIT · Berkeley" },
              { n: "1/2",  label: "SSP India\nselection — 2015"             },
              { n: "88+",  label: "Quant models\nvalidated at EY"            },
            ].map(({ n, label }) => (
              <div key={n} className="bg-paper p-5 text-center">
                <div className="font-serif text-3xl font-bold text-teal mb-1">{n}</div>
                <div className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted whitespace-pre-line leading-relaxed">{label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/diagnostic"
              className="font-mono text-[11px] tracking-[0.15em] uppercase bg-teal text-paper px-6 py-3.5 hover:bg-teal-light transition-colors border border-teal"
            >
              Run Cohort Diagnostic →
            </a>
            <a
              href="#final-cta"
              className="font-mono text-[11px] tracking-[0.15em] uppercase bg-transparent text-teal px-6 py-3.5 border border-teal hover:bg-teal/5 transition-colors"
            >
              Book a Session
            </a>
          </div>
        </div>

        {/* Diagnostic output sidebar */}
        <div className="border border-rule bg-white">
          <div className="bg-ink px-4 py-3">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-teal">Sample Diagnostic Output</span>
          </div>
          <div className="p-5 space-y-3">
            {[
              ["Student Profile",  "CS / Math · IB Diploma"],
              ["Predicted IB",     "39 / 42"],
              ["SAT Score",        "1540"],
              ["Math HL",          "6 / 7"],
              ["Research Signal",  "SSP (Sovereign Tier)"],
              ["Major Alignment",  "Strong"],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between items-baseline gap-4 border-b border-rule/40 pb-3 last:border-0 last:pb-0">
                <span className="font-mono text-[9px] tracking-[0.12em] uppercase text-muted shrink-0">{label}</span>
                <span className="font-sans text-[13px] text-ink font-medium text-right">{val}</span>
              </div>
            ))}
            <div className="mt-2 border border-teal/40 bg-teal/5 p-3">
              <p className="font-mono text-[9px] tracking-[0.12em] uppercase text-teal mb-1">Recommendation</p>
              <p className="text-[12px] text-ink leading-relaxed">
                Strong REA candidate for Princeton Math only if Math HL ≥ 6 sustained through Gr. 12 mocks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION: CREDENTIALS === */}
      <section id="credentials" className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal mb-2">Why This Matters</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-12">The Credential Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
            {CREDENTIALS.map((c) => (
              <div key={c.title} className="bg-paper p-6 flex flex-col gap-4">
                <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted">{c.year}</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink leading-tight mb-1">{c.title}</h3>
                  <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-teal">{c.role}</p>
                </div>
                <p className="text-[13px] text-muted leading-relaxed flex-1">{c.desc}</p>
                <div className="border-t border-rule pt-3">
                  <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-ink font-medium">{c.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION: PRINCETON PARADOX === */}
      <section id="case-study" className="bg-ink">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-amber mb-2">Academic Insight · Ivy Trap</p>
          <h2 className="font-serif text-3xl font-bold text-paper mb-4">The Princeton Paradox</h2>
          <p className="text-[15px] text-white/50 max-w-2xl mb-12 leading-relaxed">
            Two real profiles. One admit, one reject. The difference was not total score — it was subject-level HL alignment with intended major.
          </p>

          <div className="border border-white/10 overflow-x-auto mb-6">
            <table className="w-full min-w-[620px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-white/30 w-[30%]">
                    Dimension
                  </th>
                  <th className="text-left p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-danger border-l border-white/10">
                    Student 1 — Rejected
                  </th>
                  <th className="text-left p-4 font-mono text-[9px] tracking-[0.2em] uppercase text-teal border-l border-white/10">
                    Student 2 — Admitted
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRINCETON_ROWS.map((row, i) => (
                  <tr key={i} className={`border-b border-white/5 ${row.result ? "bg-white/5" : ""}`}>
                    <td className="p-4 font-mono text-[10px] tracking-[0.1em] uppercase text-white/40">{row.label}</td>
                    <td className={`p-4 text-[13px] border-l border-white/10 ${row.fatal ? "text-danger font-medium" : row.result ? "text-danger" : "text-white/70"}`}>
                      {row.reject}
                    </td>
                    <td className={`p-4 text-[13px] border-l border-white/10 ${row.result ? "text-teal font-medium" : "text-white/70"}`}>
                      {row.admit}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="border border-amber/30 bg-amber/5 p-6 grid grid-cols-1 md:grid-cols-[80px_1fr] gap-6 items-start">
            <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-amber">Mechanism</span>
            <div className="space-y-2 text-[14px] text-white/70 leading-relaxed">
              <p>
                Subject-level HL score in the{" "}
                <span className="text-paper">intended major overrides total IB</span> in Princeton's evaluation model.
              </p>
              <p>
                Princeton Mathematics is the most competitive Ivy program.{" "}
                <span className="text-danger">5/7 Math HL + Math major = structural incompatibility.</span>
              </p>
              <p className="text-white/40 text-[12px]">
                Student 1 was also competing as an Indian citizen against a far smaller admit pool than Student 2 (US citizen).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION: SERVICES === */}
      <section id="services" className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal mb-2">Engagement Options</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
            {SERVICES.map((s) => (
              <div key={s.title} className={`p-8 flex flex-col gap-5 ${s.featured ? "bg-teal" : "bg-paper"}`}>
                <span className={`font-mono text-[9px] tracking-[0.2em] uppercase ${s.featured ? "text-teal-light" : "text-muted"}`}>
                  {s.scope}
                </span>
                <div>
                  <h3 className={`font-serif text-2xl font-bold mb-2 ${s.featured ? "text-paper" : "text-ink"}`}>{s.title}</h3>
                  <p className={`font-mono text-[11px] tracking-[0.1em] ${s.featured ? "text-teal-light" : "text-teal"}`}>{s.price}</p>
                </div>
                <p className={`text-[13px] leading-relaxed flex-1 ${s.featured ? "text-paper/80" : "text-muted"}`}>{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className={`font-mono text-[10px] tracking-[0.1em] flex gap-2 ${s.featured ? "text-paper/70" : "text-muted"}`}>
                      <span className={s.featured ? "text-teal-light" : "text-teal"}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#final-cta"
                  className={`mt-2 font-mono text-[10px] tracking-[0.15em] uppercase text-center py-3 border transition-colors ${
                    s.featured
                      ? "border-paper/30 text-paper hover:bg-paper/10"
                      : "border-teal text-teal hover:bg-teal/5"
                  }`}
                >
                  Enquire →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION: ACTIVITY TIER SYSTEM === */}
      <section id="activities" className="border-t border-rule bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal mb-2">Signal Architecture</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">The Activity Tier System</h2>
          <p className="text-[15px] text-muted max-w-2xl mb-12 leading-relaxed">
            Not all activities register equally. This is how Ivy committees read your extracurricular list — from programs they identify unprompted to entries that actively hurt you.
          </p>
          <div className="border border-rule">
            {ACTIVITY_TIERS.map((t, i) => (
              <div
                key={t.tier}
                className={`grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-px bg-rule ${i < ACTIVITY_TIERS.length - 1 ? "border-b border-rule" : ""}`}
              >
                <div className="bg-cream p-5 flex flex-col justify-center gap-1">
                  <span className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted">{t.n}</span>
                  <span className={`font-mono text-[11px] tracking-[0.15em] uppercase font-medium ${TIER_ACCENT[t.accent]}`}>
                    {t.tier}
                  </span>
                </div>
                <div className="bg-paper p-5">
                  <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted mb-2">Examples</p>
                  <p className="text-[13px] text-ink leading-relaxed">{t.examples}</p>
                </div>
                <div className="bg-paper p-5 border-l border-rule">
                  <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted mb-2">Admission Signal</p>
                  <p className="text-[13px] text-muted leading-relaxed">{t.signal}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION: FINAL CTA === */}
      <section id="final-cta" className="bg-ink">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-teal mb-4">
              2026–27 Cohort · Limited Seats
            </p>
            <h2 className="font-serif text-4xl font-bold text-paper mb-4 leading-tight">
              Ready to architect<br />your application?
            </h2>
            <p className="text-[15px] text-white/50 leading-relaxed">
              Accepting a limited number of students. Begin with a diagnostic or book directly. All channels reach the same person.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            <div className="bg-ink p-8 flex flex-col gap-4">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-teal">Schedule a Call</span>
              <h3 className="font-serif text-xl font-bold text-paper">Book via Calendly</h3>
              <p className="text-[13px] text-white/50 leading-relaxed flex-1">
                Select a 45-minute strategy session. Comes prepared with a pre-session questionnaire.
              </p>
              <PopupButton
                url="https://calendly.com/sukrit-roadtoivies/profile-consultation"
                rootElement={document.getElementById("root")}
                text="Book a Session →"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-center py-3 border border-teal text-teal hover:bg-teal/10 transition-colors w-full cursor-pointer bg-transparent"
              />
            </div>

            <div className="bg-ink p-8 flex flex-col gap-4">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-teal">Fastest Response</span>
              <h3 className="font-serif text-xl font-bold text-paper">WhatsApp</h3>
              <p className="text-[13px] text-white/50 leading-relaxed flex-1">
                Direct line. Typically responds within 2 hours during IST business hours.
              </p>
              <a
                href="https://wa.me/918904176520"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-center py-3 border border-white/20 text-paper hover:border-teal hover:text-teal transition-colors"
              >
                +91 89041 76520 →
              </a>
            </div>

            <div className="bg-ink p-8 flex flex-col gap-4">
              <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-teal">Formal Enquiry</span>
              <h3 className="font-serif text-xl font-bold text-paper">Email</h3>
              <p className="text-[13px] text-white/50 leading-relaxed flex-1">
                For detailed profile summaries, school lists, or engagement proposals. Responded within 24 hours.
              </p>
              <a
                href="mailto:sukrit@roadtoivies.com?subject=Strategic%20Counseling%20Inquiry"
                className="font-mono text-[10px] tracking-[0.15em] uppercase text-center py-3 border border-white/20 text-paper hover:border-teal hover:text-teal transition-colors"
              >
                sukrit@roadtoivies.com →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION: FOOTER === */}
      <footer className="bg-ink border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/20">
            © 2026 RoadToIvies · Bengaluru, India
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/sukrit-tripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-teal transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.teacheron.com/tutor/dtkF?r=dtkF"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-teal transition-colors"
            >
              TeacherOn
            </a>
            <a
              href="/diagnostic"
              className="font-mono text-[10px] tracking-[0.15em] uppercase text-white/30 hover:text-teal transition-colors"
            >
              Diagnostic Tool
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
