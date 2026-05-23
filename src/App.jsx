import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Philosophy", "Identities", "Case Study", "Timeline", "About Me", "Contact"];

const SSP_DATA = [
  { 
    label: "Profile", 
    s1: "CS / Math", 
    s2: "EECS", 
    s3: "Finance" 
  },
  { 
    label: "IB Midterms (Gr.11)", 
    s1: "39/42", 
    s2: "39/42", 
    s3: "38/42" 
  },
  { 
    label: "SAT / ACT", 
    s1: "2300 SAT", 
    s2: "2240 SAT", 
    s3: "34 ACT" 
  },
  { 
    label: "Grade 10", 
    s1: "IGCSE 6A*, 2A", 
    s2: "ICSE 97%", 
    s3: "IGCSE 8A*" 
  },
  { 
    label: "Research / Projects", 
    s1: "Published IISc research + Graph Theory & Portfolio Optimization papers (Python)", 
    s2: "CS projects / generic apps — strongest coder", 
    s3: "MUN + 1 app. Strong debater. Thin on output." 
  },
  { 
    label: "Essays", 
    s1: "A+ linguistic, A- effort — communicates complex STEM to laymen", 
    s2: "A- effort, B+ linguistic, A content", 
    s3: "B+ across board" 
  },
  { 
    label: "SSP Result", 
    s1: "✓ Selected", 
    s2: "✗ Not selected", 
    s3: "✗ Not selected" 
  },
  { 
    label: "College Outcome", 
    s1: "SSP → UC Berkeley",  
    s2: "CS at MIT", 
    s3: "M&T UPenn Summer → UPenn Engineering" 
  },
];

const PRINCETON_DATA = [
  { 
    label: "Intended Major", 
    reject: "Mathematics", 
    admit: "Biology", 
    signal: false 
  },
  { 
    label: "Total IB Score (Gr.11)", 
    reject: "37/42", 
    admit: "38/42", 
    signal: false 
  },
  { 
    label: "SAT / ACT", 
    reject: "2300 SAT", 
    admit: "34 ACT", 
    signal: false 
  },
  { 
    label: "IB Subjects", 
    reject: "Math HL, Physics HL, Chem HL, Econ HL, English SL, Spanish SL", 
    admit: "Math HL, Chem HL, Bio HL, Econ HL, Spanish Ab Initio, Business SL", 
    signal: false 
  },
  { 
    label: "Critical HL Score", 
    reject: "Math HL: 5/7 ← FATAL SIGNAL", 
    admit: "Bio HL: 6/7 — competitive for program", 
    signal: true 
  },
  { 
    label: "Research / Projects", 
    reject: "SSP + CS/Math papers (Grade A)", 
    admit: "Biology research papers (Grade B+)", 
    signal: false 
  },
  { 
    label: "Princeton REA Result", 
    reject: "✗ Rejected", 
    admit: "✓ Admitted", 
    signal: false, 
    isResult: true 
  },
];

const TIMELINE = [
  { 
    month: "May — Grade 10 Ends", 
    title: "The Window Opens", 
    brutal: "This is Day 1. Not August. Not January of Grade 11. NOW. The students who treat this summer as vacation are already behind.", 
    action: "First counselor session: honest profile audit, college list reality check, project direction set.", 
    tag: "MANDATORY" 
  },
  { 
    month: "Jun – Aug — Summer", 
    title: "Project Architecture", 
    brutal: "Internships at family friend's office are resume filler. What elite committees want: tangible output — a published paper or a GitHub with functional projects.", 
    action: "Begin research under university mentorship (IISC/local faculty) OR start an independent technical project.", 
    tag: "CRITICAL" 
  },
  { 
    month: "Sep – Nov — Grade 11 Starts", 
    title: "Academic Fortress", 
    brutal: "Grade 11 is the most important year of your life. Your application GPA is locked by May. 6 months. That's it. IB: minimum 39/42 for Ivy. SAT: minimum 1530.", 
    action: "Subject-specific coaching where needed. Mock SAT/ACT diagnostic. HL subject alignment with intended major.", 
    tag: "HIGHEST STAKES" 
  },
  { 
    month: "Dec – Feb — Mid-Year", 
    title: "SAT / ACT Execution", 
    brutal: "The SAT is the only benchmark that lets admissions committees directly compare students. Score below 1530? You are compensating.", 
    action: "SAT target: 1530+. ACT target: 34+. Sit the exam. If scores disappoint, pivot immediately.", 
    tag: "NON-NEGOTIABLE" 
  },
  { 
    month: "Mar – May — Grade 11 Ends", 
    title: "Profile Lock & List Finalization", 
    brutal: "By May, your IB predicted scores are set. Your SAT score is known. Your projects either exist or they don't. The dream list survives contact with reality.", 
    action: "Finalize college list by tier. Identify whether intended major aligns with GPA profile.", 
    tag: "REALITY CHECK" 
  },
  { 
    month: "Jun – Aug — Pre-Senior Summer", 
    title: "Essay Architecture", 
    brutal: "The CommonApp essay is not an autobiography. It is proof of passion — anchored in your deepest project experience.", 
    action: "Draft CommonApp essay. Map supplements. Finalize activity list with measurable outcomes.", 
    tag: "EXECUTION" 
  },
  { 
    month: "Sep – Nov — Senior Year", 
    title: "Application Submission", 
    brutal: "REA/ED deadlines are Nov 1. If your profile is strong enough to apply REA, the decision must be made in June. Omission is a decision.", 
    action: "Submit REA/ED by Nov 1. Regular Decision finalized. Letters of Recommendation locked.", 
    tag: "SUBMIT" 
  },
];

const COMPARISON = [
  { 
    dimension: "Summer after Grade 10", 
    generic: "Family trip, generic internship, rest", 
    specialist: "Counselor session + project direction + research begins" 
  },
  { 
    dimension: "Grade 11 Strategy", 
    generic: "Focus on 'balancing' activities", 
    specialist: "Academic fortress first — 39/42 IB, 1530+ SAT" 
  },
  { 
    dimension: "Research / Projects", 
    generic: "5 scattered activities, school clubs", 
    specialist: "2 deep projects with tangible, verifiable output" 
  },
  { 
    dimension: "College List", 
    generic: "Dream schools chosen by ranking/brand", 
    specialist: "School + major alignment based on subject scores" 
  },
  { 
    dimension: "Essay Approach", 
    generic: "Standardized, tailored per college", 
    specialist: "Proof of passion — project-anchored narrative" 
  },
  { 
    dimension: "Outcome", 
    generic: "Rejection + no backup plan", 
    specialist: "Admit with clear trajectory" 
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function FadeIn({ children, delay = 0 }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

export default function App() {
  const [activeStep, setActiveStep] = useState(null);

  return (
    <div style={{ background: "#0f172a", color: "#e2e8f0", fontFamily: "'Inter', sans-serif", minHeight: "100vh", overflowX: "hidden" }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Mono&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />

      {/* NAVIGATION */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(15,23,42,0.92)", backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(52,211,153,0.12)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "0 1.5rem", height: "70px"
      }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "14px", color: "#34d399", letterSpacing: "0.1em", fontWeight: "bold" }}>
          ROADTOIVIES
        </div>
        <div className="desktop-nav" style={{ display: "flex", gap: "1.5rem" }}>
          {NAV_LINKS.map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(" ", "-")}`} style={{ fontSize: "11px", color: "#94a3b8", textDecoration: "none", letterSpacing: "0.05em", fontFamily: "'DM Mono'" }}>
              {l.toUpperCase()}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="philosophy" style={{ minHeight: "90vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 1.5rem 60px", maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <h1 style={{ fontSize: "clamp(2.4rem, 7vw, 4.2rem)", fontWeight: 300, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#f1f5f9", margin: "0 0 2.5rem", maxWidth: "900px" }}>
            Your Ivy League window<br />
            <span style={{ color: "#34d399" }}>closes in Grade 11.</span><br />
            Most students find out in Grade 12.
          </h1>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "3.5rem" }}>
            {[
              "Defining hyper-realistic college goals based on subject-level data",
              "Structuring a 24-month project roadmap with verifiable output",
              "Coordinating a rigid standardized testing and IB/AP schedule",
              "Architecting a narrative that survives the 'International Filter'",
              "Every stage of this lifecycle requires precise, expert guidance."
            ].map((point, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "#34d399", fontFamily: "'DM Mono'", fontSize: "14px", fontWeight: "bold" }}>→</span>
                <p style={{ fontSize: "15px", margin: 0, lineHeight: 1.5, fontWeight: i === 4 ? 600 : 300, color: i === 4 ? "#f1f5f9" : "#94a3b8" }}>{point}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="/diagnostic.html" style={{ display: "inline-block", padding: "16px 36px", background: "#34d399", color: "#0f172a", fontWeight: 600, fontSize: "14px", textDecoration: "none", borderRadius: "2px" }}>RUN COHORT DIAGNOSTIC</a>
          <a href="#contact" style={{ display: "inline-block", padding: "16px 36px", background: "transparent", color: "#34d399", fontWeight: 500, fontSize: "14px", textDecoration: "none", borderRadius: "2px", border: "1px solid rgba(52,211,153,0.4)" }}>BOOK A SESSION</a>
          </div>
        </FadeIn>
      </section>

      {/* IDENTITIES GRID */}
      <section id="identities" style={{ padding: "80px 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#34d399", letterSpacing: "0.2em", marginBottom: "3rem", textAlign: "center" }}>
            THE THREE ADMISSIONS ARCHETYPES
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
            {/* SPECIALIST */}
            <div style={{ background: "rgba(52,211,153,0.04)", border: "1px solid rgba(52,211,153,0.15)", borderRadius: "4px", padding: "2.5rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#34d399", marginBottom: "1.5rem" }}>01 — THE SPECIALIST</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#f1f5f9", marginBottom: "1rem" }}>Who this is for</h3>
                  <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.75 }}>For Indian international students leaning toward CS/Engineering or Finance. Their challenge is ensuring their expertise burns through the paper.</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#f1f5f9", marginBottom: "1rem" }}>What this demands</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {["Deep academic projects with tangible output", "Subject scores aligned with major", "Essays anchored in proof of passion", "Expert guidance to avoid compounding errors"].map((t, i) => (
                      <div key={i} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#94a3b8" }}><span style={{ color: "#34d399", fontFamily: "'DM Mono'" }}>0{i+1}</span> {t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* POLYMATH */}
            <div style={{ background: "rgba(56, 189, 248, 0.04)", border: "1px solid rgba(56, 189, 248, 0.15)", borderRadius: "4px", padding: "2.5rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#38bdf8", marginBottom: "1.5rem" }}>02 — THE POLYMATH</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#f1f5f9", marginBottom: "1rem" }}>Who this is for</h3>
                  <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.75 }}>Excels across disparate domains—the Physics student who debates or the Artist who codes. The goal is unity without appearing scattered.</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#f1f5f9", marginBottom: "1rem" }}>What this demands</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {["Identifying a 'Master Narrative'", "Top-tier grades in every HL subject", "Essays explaining the intersection", "Interdisciplinary projects proving versatility"].map((t, i) => (
                      <div key={i} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#94a3b8" }}><span style={{ color: "#38bdf8", fontFamily: "'DM Mono'" }}>0{i+1}</span> {t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* TREE */}
            <div style={{ background: "rgba(168, 85, 247, 0.04)", border: "1px solid rgba(168, 85, 247, 0.15)", borderRadius: "4px", padding: "2.5rem" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#a855f7", marginBottom: "1.5rem" }}>03 — THE TREE</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#f1f5f9", marginBottom: "1rem" }}>Who this is for</h3>
                  <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.75 }}>Deep-roots in a single, non-academic obsession. Whether activism or music, value lies in measurable growth over a decade.</p>
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 500, color: "#f1f5f9", marginBottom: "1rem" }}>What this demands</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {["Verifiable impact milestones", "Maintaining Ivy baseline GPA", "Proof of emotional maturity and grit", "Demonstrating scalability of the obsession"].map((t, i) => (
                      <div key={i} style={{ display: "flex", gap: "10px", fontSize: "13px", color: "#94a3b8" }}><span style={{ color: "#a855f7", fontFamily: "'DM Mono'" }}>0{i+1}</span> {t}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* CASE STUDY - SSP */}
      <section id="case-study" style={{ padding: "80px 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#34d399", letterSpacing: "0.2em", marginBottom: "1rem" }}>CASE STUDY — REAL DATA</div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 300, color: "#f1f5f9", marginBottom: "3rem" }}>SSP Selection: Three Profiles, One Seat</h2>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", minWidth: "800px" }}>
              <thead>
                <tr style={{ borderBottom: "1px solid rgba(52,211,153,0.3)" }}>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#64748b" }}>DIMENSION</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#34d399" }}>STUDENT 1 — ME</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#94a3b8" }}>STUDENT 2 — MIT</th>
                  <th style={{ textAlign: "left", padding: "12px 16px", color: "#94a3b8" }}>STUDENT 3 — UPENN</th>
                </tr>
              </thead>
              <tbody>
                {SSP_DATA.map((row, i) => (
                  <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: row.label === "SSP Result" ? "rgba(52,211,153,0.07)" : "transparent" }}>
                    <td style={{ padding: "14px 16px", color: "#64748b", fontFamily: "'DM Mono', monospace" }}>{row.label}</td>
                    <td style={{ padding: "14px 16px", color: "#e2e8f0" }}>{row.s1}</td>
                    <td style={{ padding: "14px 16px", color: "#94a3b8" }}>{row.s2}</td>
                    <td style={{ padding: "14px 16px", color: "#94a3b8" }}>{row.s3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeIn>
      </section>

      {/* PRINCETON PARADOX */}
      <section id="case-study-2" style={{ padding: "80px 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#f59e0b", letterSpacing: "0.2em", marginBottom: "1rem" }}>ACADEMIC INSIGHT — IVY TRAP</div>
          <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 300, color: "#f1f5f9", marginBottom: "3rem" }}>The Princeton Paradox</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px" }}>
            <div style={{ background: "rgba(120,53,15,0.25)", border: "1px solid rgba(245,158,11,0.2)", padding: "20px" }}>
              <div style={{ fontSize: "10px", color: "#f59e0b" }}>STUDENT 1 — REJECTED</div>
              <div style={{ fontSize: "14px", color: "#fcd34d" }}>37/42 · Math Major</div>
            </div>
            <div style={{ background: "rgba(52,211,153,0.06)", border: "1px solid rgba(52,211,153,0.2)", padding: "20px" }}>
              <div style={{ fontSize: "10px", color: "#34d399" }}>STUDENT 2 — ADMITTED</div>
              <div style={{ fontSize: "14px", color: "#6ee7b7" }}>38/42 · Bio Major</div>
            </div>
          </div>
          {PRINCETON_DATA.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2px", borderBottom: "1px solid rgba(255,255,255,0.02)" }}>
              <div style={{ background: "rgba(15,23,42,0.15)", padding: "14px 20px", color: "#94a3b8", fontSize: "13px" }}>{row.reject}</div>
              <div style={{ background: "rgba(15,23,42,0.05)", padding: "14px 20px", color: "#e2e8f0", fontSize: "13px" }}>{row.admit}</div>
            </div>
          ))}
          <div style={{ marginTop: "1.5rem", padding: "1.5rem", background: "rgba(15,23,42,0.8)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "#f59e0b" }}>CITIZENSHIP TRAP</div>
            <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.7, flex: "1 1 300px" }}>
              Student 1 (Math) competed as an <span style={{ color: "#f59e0b" }}>Indian Citizen</span>. Student 2 (Bio) was a <span style={{ color: "#10b981" }}>US Citizen</span>. For Indian internationals, a 5/7 in Math HL is a fatal signal for STEM spikes.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* STRATEGY COMPARISON TABLE */}
      <section style={{ padding: "80px 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 300, color: "#f1f5f9", marginBottom: "3rem" }}>Generic vs. Specialist Strategy</h2>
        <div style={{ display: "grid", gap: "2px" }}>
          {COMPARISON.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", background: "rgba(255,255,255,0.05)", gap: "1px" }}>
              <div style={{ background: "#0f172a", padding: "16px 20px", color: "#64748b", fontSize: "12px" }}>{row.dimension}</div>
              <div style={{ background: "#0f172a", padding: "16px 20px", color: "#64748b", fontSize: "14px" }}>{row.generic}</div>
              <div style={{ background: "rgba(52,211,153,0.04)", padding: "16px 20px", color: "#e2e8f0", fontSize: "14px" }}>{row.specialist}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section id="timeline" style={{ padding: "80px 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2.2rem", fontWeight: 300, color: "#f1f5f9", marginBottom: "4rem" }}>The Junior Year Timeline</h2>
        <div style={{ position: "relative", paddingLeft: "30px", borderLeft: "1px solid rgba(52,211,153,0.2)" }}>
          {TIMELINE.map((step, i) => (
            <div key={i} style={{ marginBottom: "2.5rem", cursor: "pointer" }} onClick={() => setActiveStep(activeStep === i ? null : i)}>
              <div style={{ fontSize: "11px", color: "#34d399", fontFamily: "'DM Mono'" }}>{step.month}</div>
              <h3 style={{ fontSize: "1.1rem", color: "#f1f5f9", margin: "8px 0" }}>{step.title}</h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.7 }}>{step.brutal}</p>
              {activeStep === i && (
                <div style={{ marginTop: "1rem", padding: "1.2rem", background: "rgba(52,211,153,0.06)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: "2px" }}>
                  <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}>{step.action}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT ME - MOBILE OPTIMIZED */}
      <section id="about-me" style={{ padding: "100px 1.5rem", maxWidth: "1100px", margin: "0 auto", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <FadeIn>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "#34d399", letterSpacing: "0.2em", marginBottom: "1rem" }}>THE CONSULTANT</div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 300, color: "#f1f5f9", marginBottom: "4rem" }}>The Berkeley Architecture</h2>
          
          <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap", justifyContent: "center" }}>
            <div style={{ flex: "0 0 320px", maxWidth: "100%" }}>
              <div style={{ width: "100%", height: "420px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(52,211,153,0.2)", borderRadius: "8px", position: "relative", overflow: "hidden" }}>
                <img src="/headshot.jpg" alt="Sukrit Tripathi" style={{ width: "100%", height: "100%", objectFit: "cover" }} onError={(e) => { e.target.style.display = 'none'; e.target.parentNode.innerHTML += '<div style="color:#475569;font-family:DM Mono;font-size:10px;text-align:center;padding:20px">Photo upload pending in /public folder</div>'; }} />
                <div style={{ position: "absolute", bottom: "0", left: 0, right: 0, background: "rgba(15, 23, 42, 0.85)", padding: "1.5rem", backdropFilter: "blur(4px)" }}>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#f1f5f9" }}>Sukrit Tripathi</div>
                  <div style={{ fontSize: "11px", color: "#34d399", fontFamily: "'DM Mono'" }}>Data Science & Economics</div>
                </div>
              </div>
            </div>

            <div style={{ flex: "1 1 450px" }}>
              <h3 style={{ fontSize: "1.4rem", color: "#f1f5f9", marginBottom: "1.5rem", fontWeight: 400 }}>Data-Driven Strategy from a Global Perspective</h3>
              <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                I am a graduate of the <span style={{ color: "#f1f5f9" }}>University of California, Berkeley</span>, with a dual-degree in Data Science and Economics. My foundation in high-level admissions began as 1 of only 2 students selected from India for the <span style={{ color: "#f1f5f9" }}>Summer Science Program (SSP)</span>, publishing research in Lagrangian Mechanics via the Harvard Smithsonian Press.
              </p>
              <p style={{ fontSize: "16px", color: "#94a3b8", lineHeight: 1.8 }}>
                Professionally, I applied this rigor as a <span style={{ color: "#f1f5f9" }}>Quantitative Advisory Consultant at EY San Francisco</span>, specializing in predictive modeling. I view admissions as an engineering problem that requires architecting a narrative to survive the international filter. Having sat on both sides of the table—as an international applicant and a <span style={{ color: "#f1f5f9" }}>Haas School mentor</span> with a <span style={{ color: "#f1f5f9" }}>100% success rate</span>—I provide ruthless clarity for Indian STEM specialists.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

     {/* CONTACT SECTION UPGRADE */}
      <section id="contact" style={{ padding: "100px 1.5rem", textAlign: "center", background: "#0f172a" }}>
        <FadeIn>
          <h2 style={{ fontSize: "2.4rem", fontWeight: 300, color: "#f1f5f9", marginBottom: "1rem" }}>Ready to Architect?</h2>
          <p style={{ color: "#94a3b8", marginBottom: "3rem", maxWidth: "600px", margin: "0 auto 3rem" }}>Accepting a limited number of students for the 2026-27 Cohort. Initiate direct configuration through your preferred high-priority channel.</p>
          
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", maxWidth: "800px", margin: "0 auto" }}>
            <a href="https://wa.me/918904176520" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "18px 36px", background: "#34d399", color: "#020617", fontWeight: "bold", textDecoration: "none", borderRadius: "4px", fontSize: "14px", textTransform: "uppercase" }}>WhatsApp Link</a>
            <a href="mailto:sukrit@roadtoivies.com" style={{ display: "inline-block", padding: "18px 36px", background: "transparent", color: "#f1f5f9", fontWeight: "500", fontSize: "14px", textDecoration: "none", borderRadius: "4px", border: "1px solid rgba(255,255,255,0.15)" }}>Email Desk</a>
            <a href="https://www.linkedin.com/in/sukrit-tripathi" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "18px 36px", background: "transparent", color: "#0077b5", fontWeight: "500", fontSize: "14px", textDecoration: "none", borderRadius: "4px", border: "1px solid rgba(0,119,181,0.3)" }}>LinkedIn Matrix</a>
          </div>
        </FadeIn>
      </section>

      <footer style={{ padding: "40px 1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)", textAlign: "center" }}>
        <p style={{ fontSize: "11px", color: "#475569", fontFamily: "'DM Mono'" }}>© 2026 ROADTOIVIES · BENGALURU</p>
      </footer>

      {/* GLOBAL CSS INJECTION FOR MOBILE NAV */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 850px) {
          .desktop-nav { display: none !important; }
        }
      `}} />
    </div>
  );
}
