import { Link } from "react-router-dom";
import GlobalHeader from "../components/GlobalHeader";

const TESTIMONIALS = [
  {
    quote:    "Sukrit helped us narrow our college list and focus the student's work on what elite business programs in UK/France would actually recognise. Sukrit even guided us through supplementary scholarship essays and reviewed every step on the application portal. ",
    name:     "Aishwarya P.",
    outcome:  "Admitted (1 of 1 app): ESSEC Business School",
    college:  "Singhania University",
    location: "Mumbai",
  },
  {
    quote:    "We had heard conflicting advice for two years. Sukrit clarified how top UK admissions actually read subject fit more than extracurricular depth. I was able to highlight the positives of my CBSE experience perfectly.",
    name:     "Aditya S.",
    outcome:  "Admitted: University of Warwick, Biochemistry",
    college:  "Grade 12/Gap Year",
    location: "Delhi",
  },
  {
    quote:    "His honesty was the whole point. He told us where our profile was strong and where it was not, then helped us rebuild the essay and research narrative. I got admitted to Haas and my dream internship followed.",
    name:     "Ayush M.",
    grade:    "Parent",
    outcome:  "Admitted: CMU, UC Berkeley",
    college:  "Parent of a CMU/Cal admit",
    location: "New Jersey, USA",
  },
];

const TICKER_ITEMS = [
  "SSP 2015 — 1 of 2 selected from India",
  "UC Berkeley · Double B.A. Data Science & Economics",
  "EY & Accenture — analytical framework for high-pressure decisions",
  "Model validation for complex systems and hidden weaknesses",
  "Haas mentor — 4 students admitted to target US STEM schools",
  "Published research — Harvard Smithsonian Press",
  "Published research — mentored by an IISC professor"
];

const CREDIBILITY_STRIP = [
  {
    label: "UC Berkeley",
    detail: "Double B.A. Economics & Data Science",
  },
  {
    label: "Summer Science Program",
    detail: "1 of 2 students selected from India, 2015",
  },
  {
    label: "EY Consultant",
    detail: "Quantitative Advisory · High-stakes decisions",
  },
  {
    label: "Accenture Consultant",
    detail: "Analytics · Hidden weakness identification",
  },
];

const WHO_THIS_IS_FOR = [
  "Grade 8–10 students planning their academic strategy early",
  "STEM-focused applicants targeting Ivy League and top US universities",
  "Ambitious students seeking individual, founder-led guidance",
  "Families serious about building competitive applications",
  "Students willing to invest in deep profile strategy (not just essay review)",
  "Indian students applying to top US colleges from abroad",
];

const WHO_THIS_IS_NOT_FOR = [
  "Students seeking guaranteed admissions",
  "Families wanting mass-market counseling at lower cost",
  "Applicants unwilling to commit time to profile building",
  "Students looking for last-minute essay polishing only",
  "Parents preferring a large counseling practice with juniors",
];

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Diagnostic",
    desc: "Deep-dive assessment of profile strengths, major-fit alignment, and the 2–3 highest-leverage interventions before applications.",
  },
  {
    n: "02",
    title: "Strategy",
    desc: "Academic roadmap, testing schedule, college list calibration, and major-subject alignment clarity.",
  },
  {
    n: "03",
    title: "Profile Development",
    desc: "Guided project selection, research opportunity evaluation, and activity tier optimization.",
  },
  {
    n: "04",
    title: "Application Execution",
    desc: "Essay architecture, supplement strategy, final review, and submission management.",
  },
];

const CREDENTIALS = [
  {
    year: "2015",
    title: "Summer Science Program",
    role: "Astrophysics Research Fellow",
    desc: "1 of 2 from India. Published in Harvard Smithsonian Press. The credential that helped my Berkeley application stand out.",
    metric: "Harvard Smithsonian publication",
  },
  {
    year: "2015–2019",
    title: "UC Berkeley",
    role: "B.A. Economics & Data Science",
    desc: "Mentored applicants informally while at Berkeley. Four students were admitted to Haas, Stanford, MIT, and CMU.",
    metric: "Berkeley alum mentor",
  },
  {
    year: "2019–2025",
    title: "EY & Accenture",
    role: "Quantitative Advisory Consultant",
    desc: "Built and validated decision frameworks for high-stakes teams. Today I use the same approach to spot hidden weaknesses and major-profile mismatch in admissions profiles.",
    metric: "Analytical rigor for elite admissions",
  },
  {
    year: "2014–2015",
    title: "Published Research",
    role: "Independent Researcher (High School)",
    desc: "Graph theory ranking systems. Portfolio optimization. Two peer-reviewed papers as a high school student.",
    metric: "2 peer-reviewed papers",
  },
];

const PRINCETON_ROWS = [
  { label: "Intended Major",     reject: "Applied Mathematics",              admit: "Biology"                        },
  { label: "Total IB (Gr. 11)", reject: "39 / 42",                          admit: "38 / 42"                        },
  { label: "SAT / ACT",         reject: "2300 SAT",                         admit: "34 ACT"                         },
  { label: "Math HL Score",     reject: "5 / 7  ← misaligned with major",  admit: "4 / 7",           fatal: true   },
  { label: "Subject–Major HL",  reject: "Math HL: 5/7 → Math major",        admit: "Bio HL: 6/7 → Bio major"        },
  { label: "Other Credentials", reject: "SSP · CS/Math papers",             admit: "Biology research papers"        },
  { label: "Princeton REA",     reject: "✗  Rejected",                      admit: "✓  Admitted",     result: true  },
];

const SERVICES = [
  {
    title: "Profile Audit",
    scope: "One session",
    desc: "A single, honest, evidence-based assessment of where your profile currently stands. We identify major-profile mismatch, significant weaknesses, and the 2–3 highest-leverage interventions available before applications open.",
    items: ["1-hour deep session", "Written assessment", "College list sanity check", "Major alignment review"],
    featured: false,
  },
  {
    title: "Essay Strategy",
    scope: "Single engagement",
    desc: "Narrative architecture for CommonApp and supplement essays. We anchor every essay in verifiable proof of passion — not autobiography, not generic inspiration stories.",
    items: ["CommonApp essay scaffold", "Supplement strategy map", "Narrative coherence review", "2 revision rounds"],
    featured: true,
  },
  {
    title: "End-to-End Planning",
    scope: "12–24 month engagement",
    desc: "Full-cycle strategy from Grade 10 summer through final submissions. Project architecture, academic roadmap, testing schedule, college list, essays, and application management.",
    items: ["12–24 month roadmap", "Project architecture", "Testing schedule", "Full essay suite", "Application management"],
    featured: false,
  },
];

const ACTIVITY_TIERS = [
  {
    n: "01",
    tier: "RARE — IDENTIFIED UNPROMPTED",
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
    signal: "Low-priority. Not harmful if strong evidence exists above it. Can be noise if it replaces deeper signals.",
  },
  {
    n: "05",
    tier: "COUNTERPRODUCTIVE",
    accent: "danger",
    examples: "Undocumented service hours · fake NGO hours · duplicate activities across multiple years",
    signal: "Distracts from genuine strength. Committees are trained to spot padding and noise.",
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
  return (
    <div className="bg-paper text-ink font-sans min-h-screen overflow-x-hidden">
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes ticker { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          .ticker-track { animation: ticker 50s linear infinite; }
          .ticker-track:hover { animation-play-state: paused; }
        }
      `}</style>

      <GlobalHeader />

      {/* === SECTION: TICKER === */}
      <div className="bg-cream border-b border-rule overflow-hidden">
        <div className="ticker-track flex whitespace-nowrap py-2.5">
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="font-mono text-[13px] tracking-[0.15em] uppercase text-muted px-8">
              {item}
              <span className="ml-8 text-rule">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* === SECTION: HERO === */}
      <main>
        <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">
          <div>
            <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-6">
              Founder-led US admissions strategy for Indian STEM & business applicants
            </p>
            <h1 className="font-serif text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.02] text-ink mb-6">
              Berkeley alum advisor for ambitious Indian applicants
            </h1>
            <p className="text-[17px] text-muted leading-relaxed max-w-xl mb-8">
              UC Berkeley graduate, SSP researcher, and former EY consultant. I help students with high academic potential match their major, activities, and essays to elite US STEM and business programs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 text-center">
              {[
                { value: "8 students", label: "Haas, Stanford, MIT, CMU admits" },
                { value: "UC Berkeley", label: "Dual degree in Economics & Data Science" },
                { value: "SSP 2015", label: "1 of 2 from India selected" },
              ].map((item) => (
                <div key={item.value} className="rounded-3xl border border-rule bg-white p-5">
                  <p className="font-serif text-3xl font-bold text-teal mb-1">{item.value}</p>
                  <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-muted leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/diagnostic"
                className="inline-flex items-center justify-center font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-7 py-4 hover:bg-teal-light transition-colors border border-teal shadow-lg shadow-teal/10"
              >
                Run Free Diagnostic →
              </Link>
              <a
                href="#final-cta"
                className="inline-flex items-center justify-center font-mono text-[13px] tracking-[0.15em] uppercase bg-transparent text-teal px-7 py-4 border border-teal hover:bg-teal/10 transition-colors"
              >
                Book Strategy Session
              </a>
            </div>
          </div>

        {/* Diagnostic output sidebar */}
        <div className="border border-rule bg-white">
          <div className="p-5 border-b border-rule">
            <div className="flex items-center gap-4 mb-4">
              <img src="/headshot.jpg" alt="Sukrit Tripathi" className="w-20 h-20 rounded-full object-cover border border-rule" />
              <div>
                <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-teal">Founder-led advising</p>
                <p className="text-[13px] text-ink leading-relaxed">Every consultation is directly with Sukrit — no junior counselors, no outsourced reviewers.</p>
              </div>
            </div>
            <Link to="/diagnostic" className="block font-mono text-[12px] text-muted hover:text-teal transition-colors">
              Example output — run yours →
            </Link>
          </div>
          <div className="bg-ink px-4 py-3">
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal">Sample Diagnostic Output</span>
          </div>
          <div className="p-5 space-y-3">
            {[
              ["Student Profile",  "CS / Math · IB Diploma"],
              ["Predicted IB",     "39 / 42"],
              ["SAT Score",        "1540"],
              ["Math HL",          "6 / 7"],
              ["Research Signal",  "SSP (Top-Tier Research Signal)"],
              ["Major Alignment",  "Strong"],
            ].map(([label, val]) => (
              <div key={label} className="flex justify-between items-baseline gap-4 border-b border-rule/40 pb-3 last:border-0 last:pb-0">
                <span className="font-mono text-[12px] tracking-[0.12em] uppercase text-muted shrink-0">{label}</span>
                <span className="font-sans text-[13px] text-ink font-medium text-right">{val}</span>
              </div>
            ))}
            <div className="mt-2 border border-teal/40 bg-teal/5 p-3">
              <p className="font-mono text-[12px] tracking-[0.12em] uppercase text-teal mb-1">Recommendation</p>
              <p className="text-[12px] text-ink leading-relaxed">
                Strong REA candidate for Princeton Math only if Math HL ≥ 6 sustained through Gr. 12 mocks.
              </p>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* === SECTION: FOUNDER CREDIBILITY STRIP === */}
      <section className="border-t border-rule bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-8 text-center">
            Founder Background
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CREDIBILITY_STRIP.map((item) => (
              <div key={item.label} className="rounded-2xl border border-rule bg-white p-6 flex flex-col gap-3 items-center text-center">
                <h3 className="font-serif text-lg font-bold text-ink">{item.label}</h3>
                <p className="text-[13px] text-muted leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION: FOUNDER STORY === */}
      <section className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">Founder story</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-8">Why I started RoadToIvies</h2>
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-6 text-[16px] text-muted leading-relaxed">
              <div>
                <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-2">The rejection that changed everything</p>
                <p>I applied to Princeton for Applied Mathematics with strong scores and a high IB profile, but I was rejected. The lesson was not that I was unqualified — it was that the intended major did not align with the subject-level evidence in my profile.</p>
              </div>
              <div>
                <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-2">Understanding the pattern</p>
                <p>That rejection became one of the most useful experiences of my application journey. I realised that the same mismatch would have been invisible to most counsellors. That is why I built RoadToIvies: so ambitious students do not have to learn these lessons through rejection.</p>
              </div>
              <div>
                <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-2">Building expertise</p>
                <p>In 2015 I was selected as one of only two students from India for the Summer Science Program, and I went on to UC Berkeley as a dual Economics and Data Science major. I then spent four years at EY and Accenture, evaluating high-stakes decisions and identifying hidden weaknesses in complex systems.</p>
              </div>
              <div>
                <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-2">Today</p>
                <p>I apply the same framework to student profiles: honest evidence-based diagnosis, major-fit clarity, and a plan that preserves options for Ivy League, Stanford, MIT, Carnegie Mellon, Duke, Georgia Tech, and other top US universities.</p>
              </div>
            </div>
            <div className="rounded-3xl border border-rule bg-cream p-8">
              <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-4">Key lessons</p>
              <ul className="space-y-4 text-[14px] text-ink leading-relaxed">
                <li>• Strong scores alone do not guarantee an admit if major-subject evidence does not match.</li>
                <li>• I know what it is like to apply from India and read conflicting advice.</li>
                <li>• I made mistakes in my own journey. I help students avoid the same ones.</li>
                <li>• Early strategy keeps more options open.</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/diagnostic" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-6 py-3.5 hover:bg-teal-light transition-colors border border-teal">
              Run Free Diagnostic →
            </Link>
            <a href="#final-cta" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-transparent text-teal px-6 py-3.5 border border-teal hover:bg-teal/5 transition-colors">
              Book Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* === SECTION: WHAT FAMILIES NEED === */}
      <section className="border-t border-rule bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">The reality of admissions</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-12">Most applicants are not unqualified</h2>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-6 text-[15px] text-muted leading-relaxed">
              <div>
                <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-2">The problem</p>
                <p>Most students do not fail because they are unqualified. They fail because they spend years optimising the wrong things.</p>
              </div>
              <div>
                <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-2">Chasing the wrong signals</p>
                <p>They chase checklist activities instead of the few signals that matter most for Ivy League and top US STEM admits.</p>
              </div>
              <div>
                <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-2">Starting early preserves options</p>
                <p>The earlier strategy begins, the more options remain. Starting in Grade 10 or 11 means you can choose projects, tests, and major-fit decisions that keep Stanford, MIT, Carnegie Mellon, Duke, Georgia Tech, and top programs within reach.</p>
              </div>
              <div>
                <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-2">Coherent narrative matters</p>
                <p>When the work is aligned, applications feel like a coherent story instead of a collection of disconnected achievements.</p>
              </div>
            </div>
            <div className="rounded-2xl border border-rule bg-white p-8">
              <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-4">What families need</p>
              <ul className="space-y-3">
                {[
                  "Clarity about major-subject alignment",
                  "Priority: what actually differentiates",
                  "Honest assessment of profile strengths",
                  "Early roadmap with decision points",
                  "An honest path forward",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <span className="text-teal font-bold flex-shrink-0">→</span>
                    <span className="text-[14px] text-ink">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/diagnostic" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-6 py-3.5 hover:bg-teal-light transition-colors border border-teal">
              Run Free Diagnostic →
            </Link>
            <a href="#final-cta" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-transparent text-teal px-6 py-3.5 border border-teal hover:bg-teal/5 transition-colors">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>

      {/* === SECTION: WHO THIS IS FOR === */}
      <section className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-16 items-start">
            <div>
              <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">Self-assessment</p>
              <h2 className="font-serif text-3xl font-bold text-ink mb-8">Who This Is For</h2>
              <p className="text-[16px] text-muted leading-relaxed mb-8">
                If any of the below resonates, a diagnostic session is likely valuable. You do not need all of them.
              </p>
              <ul className="space-y-4">
                {WHO_THIS_IS_FOR.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-teal text-xl flex-shrink-0 mt-1">→</span>
                    <span className="text-[15px] text-ink leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-rule bg-cream p-8">
              <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-4">Ready to start?</p>
              <p className="text-[15px] text-ink leading-relaxed mb-6">
                The free diagnostic takes 20 minutes and gives you a baseline assessment of your profile.
              </p>
              <Link to="/diagnostic" className="block font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-6 py-3.5 hover:bg-teal-light transition-colors border border-teal text-center">
                Run Diagnostic →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION: WHO THIS IS NOT FOR === */}
      <section className="border-t border-rule bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">Manage expectations</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-8">Who This Is Not For</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            {WHO_THIS_IS_NOT_FOR.map((item, i) => (
              <div key={i} className="rounded-xl border border-rule bg-white p-6">
                <p className="text-[15px] text-ink leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-[15px] text-muted leading-relaxed mt-12 max-w-2xl">
            This is a boutique practice — not a mass-market service. Honesty matters more than closing every inquiry.
          </p>
        </div>
      </section>

      {/* === SECTION: THE PROCESS === */}
      <section className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">How engagement works</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-12">The Strategy Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {PROCESS_STEPS.map((step) => (
              <div key={step.n} className="rounded-2xl border border-rule bg-white p-8 flex flex-col gap-4">
                <div className="font-serif text-3xl font-bold text-teal">{step.n}</div>
                <h3 className="font-serif text-xl font-bold text-ink">{step.title}</h3>
                <p className="text-[14px] text-muted leading-relaxed flex-1">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="bg-cream rounded-2xl border border-rule p-8 text-center">
            <p className="text-[15px] text-ink leading-relaxed mb-6">
              Typical engagement: 12–24 months from Grade 10 through final submissions.
            </p>
            <a href="#final-cta" className="inline-block font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-6 py-3.5 hover:bg-teal-light transition-colors border border-teal">
              Learn More →
            </a>
          </div>
        </div>
      </section>
      <section id="credentials" className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">Why This Matters</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-12">The Credential Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
            {CREDENTIALS.map((c) => (
              <div key={c.title} className="bg-paper p-6 flex flex-col gap-4">
                <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-muted">{c.year}</span>
                <div>
                  <h3 className="font-serif text-lg font-bold text-ink leading-tight mb-1">{c.title}</h3>
                  <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-teal">{c.role}</p>
                </div>
                <p className="text-[13px] text-muted leading-relaxed flex-1">{c.desc}</p>
                <div className="border-t border-rule pt-3">
                  <span className="font-mono text-[12px] tracking-[0.15em] uppercase text-ink font-medium">{c.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION: WHY DIFFERENT === */}
      <section className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">Why RoadToIvies is different</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-6">Founder-led strategy, not delegated advice</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Direct access",
                body: "Every engagement is with Sukrit. No junior counsellors, no outsourced essay reviewers, no second-hand interpretation.",
              },
              {
                title: "Analytical clarity",
                body: "The same evaluation framework used in EY & Accenture is applied to student profiles, not to finance models. It exposes hidden weaknesses before applications are written.",
              },
              {
                title: "Software-powered scale",
                body: "I am not scaling through juniors. I am scaling through software that makes my diagnostics faster and more consistent.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-rule bg-cream p-7">
                <p className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal mb-3">{item.title}</p>
                <p className="text-[15px] text-muted leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/diagnostic" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-6 py-3.5 hover:bg-teal-light transition-colors border border-teal">
              Run Free Diagnostic →
            </Link>
            <a href="#final-cta" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-transparent text-teal px-6 py-3.5 border border-teal hover:bg-teal/5 transition-colors">
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* === SECTION: PRINCETON PARADOX === */}
      <section id="case-study" className="bg-ink">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-amber mb-2">Academic Insight · Ivy Trap</p>
          <h2 className="font-serif text-3xl font-bold text-paper mb-4">The Princeton Paradox</h2>
          <p className="text-[15px] text-white/50 max-w-2xl mb-12 leading-relaxed">
            Two real profiles. One admit, one reject. The difference was not total score — it was subject-level HL alignment with intended major.
          </p>

          <div className="border border-white/10 overflow-x-auto mb-6">
            <table className="w-full min-w-[620px]">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 font-mono text-[12px] tracking-[0.2em] uppercase text-white/50 w-[30%]">
                    Dimension
                  </th>
                  <th className="text-left p-4 font-mono text-[12px] tracking-[0.2em] uppercase text-danger border-l border-white/10">
                    Student 1 — Rejected
                  </th>
                  <th className="text-left p-4 font-mono text-[12px] tracking-[0.2em] uppercase text-teal border-l border-white/10">
                    Student 2 — Admitted
                  </th>
                </tr>
              </thead>
              <tbody>
                {PRINCETON_ROWS.map((row, i) => (
                  <tr key={i} className={`border-b border-white/5 ${row.result ? "bg-white/5" : ""}`}>
                    <td className="p-4 font-mono text-[13px] tracking-[0.1em] uppercase text-white/60">{row.label}</td>
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
            <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-amber">Mechanism</span>
            <div className="space-y-2 text-[14px] text-white/70 leading-relaxed">
              <p>
                Subject-level HL score in the{" "}
                <span className="text-paper">intended major overrides total IB</span> in Princeton's evaluation model.
              </p>
              <p>
                Princeton Mathematics is the most competitive Ivy program.{" "}
                <span className="text-danger">5/7 Math HL + Math major = a major-profile mismatch.</span>
              </p>
              <p className="text-white/60 text-[12px]">
                Student 1 was also competing as an Indian citizen against a far smaller admit pool than Student 2 (US citizen).
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/diagnostic" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-amber text-ink px-6 py-3.5 hover:bg-amber/90 transition-colors border border-amber">
              Run Diagnostic →
            </Link>
            <a href="#final-cta" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-transparent text-white px-6 py-3.5 border border-white/20 hover:border-amber hover:text-amber transition-colors">
              Book Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* === SECTION: SERVICES === */}
      <section id="services" className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">Engagement Options</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
            {SERVICES.map((s) => (
              <div key={s.title} className={`p-8 flex flex-col gap-5 ${s.featured ? "bg-teal" : "bg-paper"}`}>
                <span className={`font-mono text-[12px] tracking-[0.2em] uppercase ${s.featured ? "text-paper/90" : "text-muted"}`}>
                  {s.scope}
                </span>
                <div>
                  <h3 className={`font-serif text-2xl font-bold mb-2 ${s.featured ? "text-paper" : "text-ink"}`}>{s.title}</h3>
                </div>
                <p className={`text-[13px] leading-relaxed flex-1 ${s.featured ? "text-paper/80" : "text-muted"}`}>{s.desc}</p>
                <ul className="space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className={`font-mono text-[13px] tracking-[0.1em] flex gap-2 ${s.featured ? "text-paper/70" : "text-muted"}`}>
                      <span className={s.featured ? "text-teal-light" : "text-teal"}>→</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#final-cta"
                  className={`mt-2 font-mono text-[13px] tracking-[0.15em] uppercase text-center py-3 border transition-colors ${
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

      {/* === SECTION: TESTIMONIALS === */}
      <section id="testimonials" className="border-t border-rule">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">From the families I work with</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">Outcomes</h2>
          <p className="text-[15px] text-muted max-w-2xl mb-12 leading-relaxed">
            A small practice — every engagement is direct with me. Below: students and families who completed engagement and agreed to be named.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-rule bg-white p-8 flex flex-col gap-6">
                <div className="border-b border-rule pb-4">
                  <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-teal mb-2">Outcome</p>
                  <p className="font-serif text-lg font-bold text-ink leading-tight">{t.outcome}</p>
                </div>
                <blockquote className="font-serif italic text-[16px] text-ink leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="border-t border-rule pt-4">
                  <p className="font-sans font-bold text-ink text-[14px] mb-2">{t.name}</p>
                  <p className="font-mono text-[12px] tracking-[0.1em] uppercase text-teal mb-1">{t.grade}</p>
                  <p className="font-mono text-[12px] tracking-[0.1em] uppercase text-muted mb-2">{t.college}</p>
                  <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-muted">{t.location}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/diagnostic" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-6 py-3.5 hover:bg-teal-light transition-colors border border-teal">
              Run Free Diagnostic →
            </Link>
            <a href="#final-cta" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-transparent text-teal px-6 py-3.5 border border-teal hover:bg-teal/5 transition-colors">
              Book a Session
            </a>
          </div>
        </div>
      </section>

      {/* === SECTION: ACTIVITY TIER SYSTEM === */}
      <section id="activities" className="border-t border-rule bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-2">Signal Architecture</p>
          <h2 className="font-serif text-3xl font-bold text-ink mb-4">The Activity Tier System</h2>
          <p className="text-[15px] text-muted max-w-2xl mb-12 leading-relaxed">
            Not all activities register equally. This is how Ivy committees read your extracurricular list — from programs they identify unprompted to entries that can distract from stronger signals.
          </p>
          <div className="border border-rule">
            {ACTIVITY_TIERS.map((t, i) => (
              <div
                key={t.tier}
                className={`grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-px bg-rule ${i < ACTIVITY_TIERS.length - 1 ? "border-b border-rule" : ""}`}
              >
                <div className="bg-cream p-5 flex flex-col justify-center gap-1">
                  <span className="font-mono text-[12px] tracking-[0.15em] uppercase text-muted">{t.n}</span>
                  <span className={`font-mono text-[13px] tracking-[0.15em] uppercase font-medium ${TIER_ACCENT[t.accent]}`}>
                    {t.tier}
                  </span>
                </div>
                <div className="bg-paper p-5">
                  <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-muted mb-2">Examples</p>
                  <p className="text-[13px] text-ink leading-relaxed">{t.examples}</p>
                </div>
                <div className="bg-paper p-5 border-l border-rule">
                  <p className="font-mono text-[12px] tracking-[0.15em] uppercase text-muted mb-2">Admission Signal</p>
                  <p className="text-[13px] text-muted leading-relaxed">{t.signal}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Link to="/diagnostic" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-teal text-paper px-6 py-3.5 hover:bg-teal-light transition-colors border border-teal">
              Run Free Diagnostic →
            </Link>
            <a href="#final-cta" className="font-mono text-[13px] tracking-[0.15em] uppercase bg-transparent text-teal px-6 py-3.5 border border-teal hover:bg-teal/5 transition-colors">
              Book a Strategy Session
            </a>
          </div>
        </div>
      </section>

      {/* === SECTION: FINAL CTA === */}
      <section id="final-cta" className="bg-ink">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-[13px] tracking-[0.2em] uppercase text-teal mb-4">
              2026–27 Applications · Taking limited students
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
              <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal">Schedule a Call</span>
              <h3 className="font-serif text-xl font-bold text-paper">Book via Calendly</h3>
              <p className="text-[13px] text-white/50 leading-relaxed flex-1">
                Select a 45-minute strategy session. Comes prepared with a pre-session questionnaire.
              </p>
              <a
              href="https://calendly.com/sukrit-roadtoivies/profile-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] tracking-[0.15em] uppercase text-center py-3 border border-teal text-teal hover:bg-teal/10 transition-colors w-full inline-flex items-center justify-center"
            >
              Book a Session →
            </a>
            </div>

            <div className="bg-ink p-8 flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal">Fastest Response</span>
              <h3 className="font-serif text-xl font-bold text-paper">WhatsApp</h3>
              <p className="text-[13px] text-white/50 leading-relaxed flex-1">
                Direct line. Typically responds within 2 hours during IST business hours.
              </p>
              <a
                href="https://wa.me/918904176520"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[13px] tracking-[0.15em] uppercase text-center py-3 border border-white/20 text-paper hover:border-teal hover:text-teal transition-colors"
              >
                +91 89041 76520 →
              </a>
            </div>

            <div className="bg-ink p-8 flex flex-col gap-4">
              <span className="font-mono text-[12px] tracking-[0.2em] uppercase text-teal">Formal Enquiry</span>
              <h3 className="font-serif text-xl font-bold text-paper">Email</h3>
              <p className="text-[13px] text-white/50 leading-relaxed flex-1">
                For detailed profile summaries, school lists, or engagement proposals. Responded within 24 hours.
              </p>
              <a
                href="mailto:sukrit@roadtoivies.com?subject=Strategic%20Counseling%20Inquiry"
                className="font-mono text-[13px] tracking-[0.15em] uppercase text-center py-3 border border-white/20 text-paper hover:border-teal hover:text-teal transition-colors"
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
          <span className="font-mono text-[13px] tracking-[0.2em] uppercase text-white/40">
            © 2026 RoadToIvies · Bengaluru, India
          </span>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/sukrit-tripathi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] tracking-[0.15em] uppercase text-white/50 hover:text-teal transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.teacheron.com/tutor/dtkF?r=dtkF"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] tracking-[0.15em] uppercase text-white/50 hover:text-teal transition-colors"
            >
              TeacherOn
            </a>
            <Link
              to="/diagnostic"
              className="font-mono text-[13px] tracking-[0.15em] uppercase text-white/50 hover:text-teal transition-colors"
            >
              Diagnostic Tool
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
