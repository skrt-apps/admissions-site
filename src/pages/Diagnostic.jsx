import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";

const ARCHETYPE_GUIDELINES = {
  specialist: {
    title: "ARCHETYPE MARKERS: THE SPECIALIST",
    text: "Targeting hyper-competitive STEM, Computer Science, Economics, or Quantitative Finance fields. The student's execution requires deep, singular academic spikes (e.g., advanced coding, research papers, Olympiads). Selecting this requires a rigid commitment to hard metric alignment in specific higher-level subjects.",
  },
  polymath: {
    title: "ARCHETYPE MARKERS: THE POLYMATH",
    text: "Excels across completely separate domains (e.g., the Physics student who leads competitive debate, or the creative artist who builds functional software). Select this if your child refuses to fit a single box—the strategic challenge here is unifying disparate spikes into a singular 'Master Narrative' to avoid looking scattered.",
  },
  tree: {
    title: "ARCHETYPE MARKERS: THE TREE",
    text: "Grounded by a non-academic obsession with multi-year, measurable growth (e.g., community organizing, elite competitive sports, original musical composition, or launching a scalable project). Select this if their core identity is driven by real-world impact metrics, execution grit, and scalability over raw academic papers.",
  },
};

function evaluateProfile({ grade, citizenship, major, academic, testing }) {
  let tier, status, vulnerability, project, checklist;

  if (academic === "high" && testing === "high") {
    tier = "Elite Competitive Track (Global Top-Tier Cohort)";
    status = "The student clears primary holistic quantitative filters. However, excellent scores are baseline criteria, not points of differentiation.";
  } else if (academic === "mid" || testing === "mid") {
    tier = "Selective Matrix Track (Highly Competitive Pool)";
    status = "The student possesses a strong foundation, but shows a clear metric variance that will trigger immediate scrutiny during initial evaluation phases.";
  } else {
    tier = "Strategic Pivoting Track (Development Required)";
    status = "Critical quantitative baseline barriers present. Current metrics do not clear structural entry screening thresholds easily.";
  }

  if (citizenship === "india") {
    status += " <strong>CRITICAL CITIZENSHIP QUOTA WARNING:</strong> Competing as an Indian Citizen activates the single most saturated international pool in the world. Admissions committees operate with strict demographic ceilings. Quantitative perfection is assumed; any minor curriculum fluctuation (e.g., a 5/7 in an HL STEM subject) or lack of out-of-school technical output results in an immediate soft rejection.";
    if (major === "stem" || major === "finance") {
      vulnerability = "<strong>The Saturated International Demographic Trap.</strong> For an Indian citizen targeting STEM or quantitative tracks, a 'well-rounded' portfolio is a fatal positioning strategy. You are competing directly against thousands of applicants with identical data profiles. Your child's application is invisible unless anchored by an undeniable external asymmetric spike.";
      project = "Cease all passive community volunteer hours or institutional summer camps. Your child must build a functional, open-source technical asset—such as a data-science software platform or a localized algorithmic modeling repository—or execute formal academic research alongside university faculty targeting publication.";
      checklist = "1. Initiate an immediate profile audit to isolate a singular, un-clichéd technical project direction.<br>2. Re-verify that Higher Level (HL) math/science splits show absolute flawless performance.<br>3. Frame upcoming recommendation profiles around advanced intellectual autonomy that outperforms standard grade boundaries.";
    } else {
      vulnerability = "<strong>The Generalist Filter Vulnerability.</strong> While shifting away from STEM clears some selection volume, an Indian international applicant tracking as a Polymath or Tree must provide undeniable proof of cross-domain scaling or high linguistic mastery to survive initial holistic cuts.";
      project = "Unify the interdisciplinary profile with a verifiable, real-world platform. If combining economics and social advocacy, construct a scalable data project mapping local urban structural adjustments rather than joining generic school clubs.";
      checklist = "1. Draft a binding 'Master Narrative' that bridges separate interests into a unified theme.<br>2. Ensure the main personal statement is structurally bulletproof and avoids cliché coming-of-age tropes.<br>3. Lock down high-level regional or international writing distinctions.";
    }
  } else {
    status += " <strong>PASSPORT POSITIONING ADVANTAGE:</strong> Holding a US Passport or OCI status moves the applicant out of the ultra-saturated international citizen allocation pool, shifting them into a more flexible evaluation metric lane with higher acceptance limits.";
    if (academic === "high" && testing === "high") {
      vulnerability = "<strong>Over-Reliance on Hard Metrics.</strong> While the passport advantage mitigates regional filtering ceilings, top-tier institutional tracks still reject high-scoring domestic applicants who fail to show deep personal maturity or a clear intrinsic thread.";
      project = "Focus heavily on character and leadership scaling. Elevate a 'Tree' or 'Polymath' project to a state or national level, proving the student has genuine real-world execution capacity beyond high test performance.";
      checklist = "1. Finalize an early submission architecture to capitalise on Early Action/ED pacing windows.<br>2. Build out highly distinct personal essay drafts that focus heavily on internal reflections and value systems.";
    } else {
      vulnerability = "<strong>Metric Vulnerability.</strong> The domestic status protects the student from the absolute data-cutoff filters that international citizens face, but an imbalanced academic baseline still flags localised preparation weaknesses.";
      project = "Deploy defensive academic major mapping. Align the application strategy with lower-density majors where the current metric profile remains competitive, using the passport context to capture holistic evaluation latitude.";
      checklist = "1. Stabilise internal grade trajectories before the next reporting window.<br>2. Maximise the tactical impact of personal statements to directly contextualise any score variations.";
    }
  }

  if (grade === "g12") {
    checklist += "<br><br><strong>CRITICAL TIME GATE WARNING:</strong> As a rising senior, your tactical window is strictly limited to defensive narrative positioning and immediate Early Decision/REA locking. There is no time left for academic recovery loops.";
  } else if (grade === "g10") {
    checklist += "<br><br><strong>FOUNDATIONAL POSITIONING WINDOW:</strong> You are in an ideal spot. Current metric deficits can be completely engineered away with an immediate, structured 24-month profile strategy blueprint.";
  }

  return { tier, status, vulnerability, project, checklist };
}

const INPUT_CLS = "w-full bg-ink border border-white/20 px-3.5 py-3.5 text-paper text-[14px] placeholder:text-white/20 focus:border-teal outline-none transition-colors";
const LABEL_CLS = "block font-mono text-[10px] tracking-[0.1em] uppercase text-white/50 mb-2.5";

export default function Diagnostic() {
  const [form, setForm] = useState({
    // profile fields
    student_name: "",
    curriculum: "",
    predicted_score: "",
    sat_score: "",
    intended_major: "",
    target_universities: "",
    research_summary: "",
    extracurriculars: "",
    email: "",
    phone: "",
    // diagnostic selects
    grade: "g10",
    citizenship: "india",
    major: "stem",
    archetype: "specialist",
    academic: "high",
    testing: "high",
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | "success" | "error"
  const [result, setResult] = useState(null);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus(null);

    const { error } = await supabase.from("diagnostic_submissions").insert({
      student_name:       form.student_name       || null,
      curriculum:         form.curriculum          || null,
      predicted_score:    form.predicted_score     || null,
      sat_score:          form.sat_score           || null,
      intended_major:     form.intended_major      || null,
      target_universities: form.target_universities || null,
      research_summary:   form.research_summary    || null,
      extracurriculars:   form.extracurriculars    || null,
      email:              form.email               || null,
      phone:              form.phone               || null,
    });

    setSubmitStatus(error ? "error" : "success");
    setResult(evaluateProfile(form));
    setLoading(false);

    setTimeout(() => {
      document.getElementById("result-box")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  const guide = ARCHETYPE_GUIDELINES[form.archetype];

  return (
    <div className="bg-ink text-paper font-sans min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto border border-teal/15 bg-white/[0.02] p-10 max-sm:p-5 max-sm:border-0 max-sm:bg-transparent">
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-teal mb-3">
          Admissions Optimization System
        </p>
        <h1 className="font-serif text-[2rem] sm:text-[2.2rem] font-bold text-paper mb-8 leading-tight">
          Profile Cohort Diagnostic Lab
        </h1>

        {/* Guide */}
        <div className="border border-teal/15 bg-teal/[0.03] p-6 mb-10">
          <p className="text-[14px] text-white/60 leading-relaxed mb-3">
            Clinical evaluation tool engineered for competitive international applicants targeting
            ultra-selective US universities (Ivy League, Stanford, MIT, UC Berkeley).
          </p>
          <ul className="space-y-2">
            {[
              ["Select Parameters Honestly:", "Input exact tracking metrics, grade window, and targeted discipline."],
              ["Isolate True Bottlenecks:", "The engine flags hidden structural flaws rather than superficial resume gaps."],
              ["Review the Action Blueprint:", "Use the generated roadmap to realign academic and project execution strategy."],
            ].map(([strong, rest]) => (
              <li key={strong} className="text-[13.5px] text-white/70 leading-relaxed">
                <span className="text-teal font-medium">{strong}</span> {rest}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          {/* === Student Profile === */}
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-teal border-b border-white/10 pb-3 mb-6">
            Student Profile
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div className="sm:col-span-2">
              <label className={LABEL_CLS}>Student Name</label>
              <input
                type="text"
                name="student_name"
                value={form.student_name}
                onChange={handleChange}
                placeholder="e.g. Aryan Sharma"
                className={INPUT_CLS}
              />
            </div>

            <div>
              <label className={LABEL_CLS}>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="parent or student email"
                className={INPUT_CLS}
              />
            </div>

            <div>
              <label className={LABEL_CLS}>Phone / WhatsApp</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98XXX XXXXX"
                className={INPUT_CLS}
              />
            </div>

            <div>
              <label className={LABEL_CLS}>Curriculum</label>
              <input
                type="text"
                name="curriculum"
                value={form.curriculum}
                onChange={handleChange}
                placeholder="e.g. IB Diploma, CBSE, IGCSE"
                className={INPUT_CLS}
              />
            </div>

            <div>
              <label className={LABEL_CLS}>Intended Major</label>
              <input
                type="text"
                name="intended_major"
                value={form.intended_major}
                onChange={handleChange}
                placeholder="e.g. Computer Science, Economics"
                className={INPUT_CLS}
              />
            </div>

            <div>
              <label className={LABEL_CLS}>Predicted / Current Score</label>
              <input
                type="text"
                name="predicted_score"
                value={form.predicted_score}
                onChange={handleChange}
                placeholder="e.g. 39/42 IB, 94% CBSE"
                className={INPUT_CLS}
              />
            </div>

            <div>
              <label className={LABEL_CLS}>SAT / ACT Score</label>
              <input
                type="text"
                name="sat_score"
                value={form.sat_score}
                onChange={handleChange}
                placeholder="e.g. 1520 SAT, 34 ACT"
                className={INPUT_CLS}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={LABEL_CLS}>Target Universities</label>
              <textarea
                name="target_universities"
                value={form.target_universities}
                onChange={handleChange}
                rows={2}
                placeholder="e.g. MIT, Stanford, UC Berkeley, Princeton"
                className={`${INPUT_CLS} resize-none`}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={LABEL_CLS}>Research & Projects Summary</label>
              <textarea
                name="research_summary"
                value={form.research_summary}
                onChange={handleChange}
                rows={3}
                placeholder="Briefly describe any research, publications, or technical projects"
                className={`${INPUT_CLS} resize-none`}
              />
            </div>

            <div className="sm:col-span-2">
              <label className={LABEL_CLS}>Extracurriculars</label>
              <textarea
                name="extracurriculars"
                value={form.extracurriculars}
                onChange={handleChange}
                rows={3}
                placeholder="List key activities, roles, awards, leadership positions"
                className={`${INPUT_CLS} resize-none`}
              />
            </div>
          </div>

          {/* === Diagnostic Selects === */}
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-teal border-b border-white/10 pb-3 mb-6">
            Diagnostic Parameters
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            <div>
              <label className={LABEL_CLS}>Current Grade Level</label>
              <select name="grade" value={form.grade} onChange={handleChange} className={INPUT_CLS}>
                <option value="g10">Grade 9 or 10 (Early Foundational Window)</option>
                <option value="g11">Grade 11 (Critical Metric Execution Window)</option>
                <option value="g12">Grade 12 / Rising Senior (Application Hard-Lock)</option>
              </select>
            </div>

            <div>
              <label className={LABEL_CLS}>Citizenship Pool Context</label>
              <select name="citizenship" value={form.citizenship} onChange={handleChange} className={INPUT_CLS}>
                <option value="india">Indian Citizen (International Saturated Pool)</option>
                <option value="us">US Citizen / OCI Passport Holder (Domestic Pool)</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className={LABEL_CLS}>Target Academic Major Discipline</label>
              <select name="major" value={form.major} onChange={handleChange} className={INPUT_CLS}>
                <option value="stem">STEM / Computer Science / Engineering Spike</option>
                <option value="finance">Economics / Quantitative Finance / Business</option>
                <option value="humanities">Humanities / Arts / Social Sciences</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className={LABEL_CLS}>Application Archetype</label>
              <select name="archetype" value={form.archetype} onChange={handleChange} className={`${INPUT_CLS} mb-3`}>
                <option value="specialist">The Specialist (Singular STEM or Quantitative Spike)</option>
                <option value="polymath">The Polymath (Interdisciplinary Domain Intersection)</option>
                <option value="tree">The Tree (Deep Non-Academic Obsession & Real-World Impact)</option>
              </select>
              <div className="border border-dashed border-teal/20 bg-ink/50 p-4">
                <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-teal mb-2">{guide.title}</p>
                <p className="text-[13px] text-white/50 leading-relaxed">{guide.text}</p>
              </div>
            </div>

            <div>
              <label className={LABEL_CLS}>Academic Track Status</label>
              <select name="academic" value={form.academic} onChange={handleChange} className={INPUT_CLS}>
                <option value="high">Competitive Tier (39+/42 IB or 96%+ Boards)</option>
                <option value="mid">Imbalanced Baseline (36–38/42 IB or 90–95%)</option>
                <option value="low">Deficit Range (Under 36/42 IB or Under 90%)</option>
              </select>
            </div>

            <div>
              <label className={LABEL_CLS}>Standardized Testing Benchmark</label>
              <select name="testing" value={form.testing} onChange={handleChange} className={INPUT_CLS}>
                <option value="high">Elite Standard (1530+ SAT / 35+ ACT)</option>
                <option value="mid">Intermediate Baseline (1450–1520 SAT / 32–34 ACT)</option>
                <option value="low">Sub-Threshold Range (Under 1450 SAT / Under 32 ACT)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal text-paper font-mono text-[11px] tracking-[0.15em] uppercase py-4 hover:bg-teal-light transition-colors border border-teal cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting…" : "Generate Custom Profile Blueprint →"}
          </button>
        </form>

        {/* Submit feedback banner */}
        {submitStatus === "success" && (
          <div className="mt-4 border border-teal/40 bg-teal/5 px-4 py-3 flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-teal">Profile Recorded</span>
            <span className="text-[13px] text-white/50">Your submission has been saved. Blueprint generated below.</span>
          </div>
        )}
        {submitStatus === "error" && (
          <div className="mt-4 border border-danger/40 bg-danger/5 px-4 py-3 flex items-center gap-3">
            <span className="font-mono text-[10px] tracking-[0.15em] uppercase text-danger">Save Failed</span>
            <span className="text-[13px] text-white/50">Could not save submission — blueprint still generated below.</span>
          </div>
        )}

        {/* Result */}
        {result && (
          <div id="result-box" className="mt-10 border-l-4 border-teal bg-ink/80 p-8 max-sm:p-5">
            <div className="border-b border-white/[0.08] pb-5 mb-6">
              <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-teal mb-2">
                Profile Assigned Status
              </p>
              <h2 className="font-serif text-xl font-bold text-paper mb-2">{result.tier}</h2>
              <p
                className="text-[14px] text-white/60 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: result.status }}
              />
            </div>

            {[
              { color: "text-danger", label: "1. Identified Profile Vulnerability",      html: result.vulnerability },
              { color: "text-teal",   label: "2. Extracurricular & Project Redirection", html: result.project      },
              { color: "text-amber",  label: "3. Immediate 90-Day Priority Checklist",   html: result.checklist    },
            ].map(({ color, label, html }) => (
              <div key={label} className="mb-5 bg-white/[0.02] border border-white/5 p-5">
                <p className={`font-mono text-[10px] tracking-[0.1em] uppercase mb-2 ${color}`}>{label}</p>
                <p
                  className="text-[14px] text-white/70 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            ))}

            <div className="mt-8 border-t border-white/[0.08] pt-6">
              <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-teal mb-4">
                Engage Strategy Architect
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <a
                  href="https://wa.me/918904176520?text=I%20just%20completed%20the%20Profile%20Diagnostic%20Lab%20and%20would%20like%20to%20discuss%20the%2090-day%20blueprint%20for%20my%20child."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25d366] text-ink font-mono text-[10px] tracking-[0.1em] uppercase font-medium"
                >
                  <WhatsAppIcon /> WhatsApp
                </a>
                <a
                  href="mailto:sukrit@roadtoivies.com?subject=Profile%20Diagnostic%20Lab%20Analysis%20Request"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#ea4335] text-white font-mono text-[10px] tracking-[0.1em] uppercase font-medium"
                >
                  <EmailIcon /> Email
                </a>
                <a
                  href="https://www.linkedin.com/in/sukrit-tripathi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 bg-[#0077b5] text-white font-mono text-[10px] tracking-[0.1em] uppercase font-medium"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}

        <Link
          to="/"
          className="block text-center mt-10 font-mono text-[11px] tracking-[0.1em] uppercase text-white/30 hover:text-teal transition-colors"
        >
          ← Return to Core Platform
        </Link>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.966 0c3.178.001 6.165 1.24 8.413 3.494 2.25 2.253 3.487 5.244 3.484 8.425-.003 6.616-5.34 11.965-11.909 11.965-2.005-.001-3.973-.505-5.717-1.467L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.636-1.023-5.115-2.884-6.978C16.58 1.897 14.1 1.875 11.964 1.875c-5.434 0-9.858 4.422-9.861 9.866-.001 1.714.46 3.388 1.334 4.887l-.982 3.582 3.673-.963zm10.844-6.161c-.297-.148-1.758-.867-2.03-.967-.273-.099-.471-.148-.669.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M22 4H2C.9 4 0 4.9 0 6v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-10 6.5L2 8V6l10 6.5L22 6v2z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
