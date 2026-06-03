import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";

// ------------------------------------------------------------------
// Static dummy record so /report/example renders without a live row.
// ------------------------------------------------------------------
const EXAMPLE_RECORD = {
  id: "example-0000-0000-0000-00000000abcd",
  created_at: "2026-06-02T10:00:00.000Z",
  student_name: "Aryan Sharma",
  curriculum: "IB Diploma",
  intended_major: "Computer Science",
  predicted_score: "39 / 42 IB",
  sat_score: "1540 SAT",
  citizenship: "india",
  grade: "g11",
  target_universities: "MIT, Stanford, UC Berkeley, Princeton",
  archetype: "specialist",
  result_tier: "Competitive at elite-tier admissions",
  result_status:
    "The student clears primary holistic quantitative filters. However, excellent scores are baseline criteria, not points of differentiation. <strong>Note on the international applicant pool:</strong> Competing as an Indian Citizen activates the single most saturated international pool in the world.",
  result_vulnerability:
    "<strong>The saturated-pool problem.</strong> For an Indian citizen targeting STEM or quantitative tracks, a 'well-rounded' portfolio is a weak positioning strategy. The application is invisible unless anchored by an undeniable external asymmetric spike.",
  result_project:
    "Standard volunteering and generic summer camps will not register here. The student should build a functional, open-source technical asset or execute formal academic research alongside university faculty targeting publication.",
  result_checklist:
    "1. Initiate a profile audit to isolate a singular, un-clichéd technical project direction.<br>2. Re-verify that Higher Level (HL) math/science splits show flawless performance.<br>3. Frame recommendation profiles around advanced intellectual autonomy.",
};

// Human-readable labels for the enum-ish select values.
const CITIZENSHIP_LABELS = {
  india: "Indian Citizen",
  us: "US Citizen / OCI",
};
const GRADE_LABELS = {
  g10: "Grade 9–10",
  g11: "Grade 11",
  g12: "Grade 12",
};
const ARCHETYPE_LABELS = {
  specialist: "The Specialist",
  polymath: "The Polymath",
  tree: "The Tree",
};

// Normalize the two possible input shapes into a single record.
//  - From Diagnostic: { ...form, ...result (tier/status/...), id, created_at }
//  - From Supabase:   { ...columns, result_tier, result_status, ... }
function normalize(data) {
  return {
    id: data.id || "",
    created_at: data.created_at || new Date().toISOString(),
    student_name: data.student_name || "",
    email: data.email || "",
    phone: data.phone || "",
    curriculum: data.curriculum || "",
    intended_major: data.intended_major || "",
    predicted_score: data.predicted_score || "",
    sat_score: data.sat_score || "",
    target_universities: data.target_universities || "",
    citizenship: data.citizenship || "",
    grade: data.grade || "",
    archetype: data.archetype || "",
    tier: data.result_tier ?? data.tier ?? "",
    status: data.result_status ?? data.status ?? "",
    vulnerability: data.result_vulnerability ?? data.vulnerability ?? "",
    project: data.result_project ?? data.project ?? "",
    checklist: data.result_checklist ?? data.checklist ?? "",
  };
}

function formatDate(iso) {
  try {
    return new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return "";
  }
}

const C = {
  ink: "#0c0c0c",
  slate: "#3E454B",
  paper: "#f5f0e8",
  rule: "#c8bfa8",
  muted: "#5a5348",
  teal: "#2d7a5f",
};

const MONO = '"IBM Plex Mono", Menlo, monospace';
const SERIF = '"Playfair Display", Georgia, serif';
const SANS = '"IBM Plex Sans", system-ui, sans-serif';

function ReportBody({ record }) {
  const r = normalize(record);

  const inputRows = [
    ["Curriculum", r.curriculum],
    ["Intended Major", r.intended_major],
    ["Predicted Score", r.predicted_score],
    ["SAT / ACT", r.sat_score],
    ["Citizenship", CITIZENSHIP_LABELS[r.citizenship] || r.citizenship],
    ["Grade Level", GRADE_LABELS[r.grade] || r.grade],
    ["Target Universities", r.target_universities],
    ["Archetype", ARCHETYPE_LABELS[r.archetype] || r.archetype],
  ].filter(([, v]) => v && String(v).trim());

  const monoLabel = {
    fontFamily: MONO,
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
    color: C.teal,
  };

  const findings = [
    { label: "1. Identified Profile Vulnerability", html: r.vulnerability },
    { label: "2. Extracurricular & Project Redirection", html: r.project },
    { label: "3. Immediate 90-Day Priority Checklist", html: r.checklist },
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        color: C.ink,
        fontFamily: SANS,
        padding: "32px 36px",
        boxSizing: "border-box",
        width: "100%",
        maxWidth: "794px",
        margin: "0 auto",
      }}
    >
      {/* 1. Header strip */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          paddingBottom: "10px",
          borderBottom: `1px solid ${C.teal}`,
        }}
      >
        <span style={monoLabel}>RoadToIvies</span>
        <span style={{ ...monoLabel, color: C.muted }}>Profile Diagnostic Report</span>
      </div>

      {/* 2. Meta block */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "8px 24px",
          margin: "20px 0 24px",
        }}
      >
        <Meta label="Date Generated" value={formatDate(r.created_at)} />
        <Meta label="Student" value={r.student_name || "—"} />
        <Meta
          label="Submission ID"
          value={r.id ? String(r.id).slice(-8) : "—"}
          mono
        />
      </div>

      {/* 3. Input summary */}
      {inputRows.length > 0 && (
        <div style={{ marginBottom: "28px" }}>
          <p style={{ ...monoLabel, marginBottom: "10px" }}>Profile Inputs</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "8px 28px",
            }}
          >
            {inputRows.map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "12px",
                  borderBottom: `1px solid ${C.rule}55`,
                  paddingBottom: "6px",
                  fontSize: "12px",
                }}
              >
                <span style={{ color: C.muted, fontFamily: MONO, fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {k}
                </span>
                <span style={{ textAlign: "right", fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Tier assignment */}
      <div style={{ marginBottom: "28px" }}>
        <p style={{ ...monoLabel, marginBottom: "8px" }}>Diagnostic Result</p>
        <h1
          style={{
            fontFamily: SERIF,
            fontSize: "26px",
            fontWeight: 700,
            lineHeight: 1.2,
            color: C.ink,
            margin: "0 0 10px",
          }}
        >
          {r.tier}
        </h1>
        {r.status && (
          <p
            style={{ fontSize: "13px", lineHeight: 1.7, color: C.muted, margin: 0 }}
            dangerouslySetInnerHTML={{ __html: r.status }}
          />
        )}
      </div>

      {/* 5. Three numbered findings */}
      <div>
        {findings.map(({ label, html }) =>
          html ? (
            <div
              key={label}
              className="report-finding"
              style={{
                borderTop: `1px solid ${C.rule}`,
                padding: "16px 0",
              }}
            >
              <p style={{ ...monoLabel, marginBottom: "8px" }}>{label}</p>
              <p
                style={{ fontSize: "13px", lineHeight: 1.7, color: C.ink, margin: 0 }}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            </div>
          ) : null
        )}
      </div>

      {/* 6. About the advisor */}
      <div
        className="report-finding"
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "flex-start",
          marginTop: "28px",
          paddingTop: "20px",
          borderTop: `1px solid ${C.teal}`,
        }}
      >
        <img
          src="/headshot.jpg"
          alt="Sukrit Tripathi"
          crossOrigin="anonymous"
          style={{
            width: "80px",
            height: "80px",
            objectFit: "cover",
            borderRadius: "8px",
            flexShrink: 0,
          }}
        />
        <div style={{ fontSize: "12px", lineHeight: 1.7, color: C.muted }}>
          <strong style={{ color: C.ink }}>Sukrit Tripathi</strong> — UC Berkeley '19,
          B.A. Economics &amp; Data Science. Summer Science Program 2015 (one of two
          students selected from India that year). Four years in quantitative
          consulting at EY and Accenture, building credit risk and model validation
          systems for US banks. Founded RoadToIvies in 2022 to apply the same
          analytical rigor to admissions strategy for Indian STEM applicants.
        </div>
      </div>

      {/* 7. Next step / contact */}
      <div
        className="report-finding"
        style={{
          marginTop: "24px",
          border: `1px solid ${C.rule}`,
          padding: "18px 20px",
        }}
      >
        <p style={{ ...monoLabel, marginBottom: "12px" }}>Discuss this report with Sukrit</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            ["WhatsApp", "+91 89041 76520"],
            ["Email", "sukrit@roadtoivies.com"],
            ["Calendar", "calendly.com/sukrit-roadtoivies"],
          ].map(([label, value]) => (
            <div
              key={label}
              style={{
                border: `1px solid ${C.teal}`,
                padding: "8px 12px",
                fontSize: "11px",
                color: C.ink,
              }}
            >
              <span style={{ ...monoLabel, display: "block", fontSize: "9px", marginBottom: "2px" }}>
                {label}
              </span>
              {value}
            </div>
          ))}
        </div>
      </div>

      {/* 8. Footer */}
      <div style={{ marginTop: "28px", textAlign: "center" }}>
        <p style={{ fontFamily: MONO, fontSize: "10px", color: C.muted, margin: "0 0 6px" }}>
          roadtoivies.com&nbsp;&nbsp;·&nbsp;&nbsp;Bengaluru, India&nbsp;&nbsp;·&nbsp;&nbsp;© 2026 RoadToIvies
        </p>
        <p style={{ fontFamily: MONO, fontSize: "9px", color: `${C.muted}aa`, lineHeight: 1.5, margin: 0 }}>
          This diagnostic is an automated profile classification based on submitted
          inputs. It is not an admissions guarantee or substitute for an in-depth
          strategy session.
        </p>
      </div>
    </div>
  );
}

function Meta({ label, value, mono }) {
  return (
    <div>
      <p
        style={{
          fontFamily: MONO,
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: C.muted,
          margin: "0 0 2px",
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontSize: "13px",
          fontWeight: 500,
          color: mono ? C.muted : C.ink,
          fontFamily: mono ? MONO : SANS,
          margin: 0,
        }}
      >
        {value}
      </p>
    </div>
  );
}

const PRINT_CSS = `
@media print {
  @page { size: A4; margin: 14mm; }
  body { background: white; }
  .no-print { display: none !important; }
  .report-finding { break-inside: avoid; }
}
`;

/**
 * Report — renders the diagnostic deliverable.
 *  - With a `data` prop: render immediately (used as the PDF source, and could
 *    be reused elsewhere).
 *  - Without a `data` prop: read `:id` from the route and fetch from Supabase.
 *    The literal id `example` renders a static dummy record.
 */
export default function Report({ data }) {
  const params = useParams();
  const id = data ? null : params.id;

  const [record, setRecord] = useState(data || null);
  const [state, setState] = useState(data ? "ready" : "loading"); // loading | ready | error

  useEffect(() => {
    if (data) return; // prop-driven, nothing to fetch

    if (id === "example") {
      setRecord(EXAMPLE_RECORD);
      setState("ready");
      return;
    }

    let active = true;
    (async () => {
      const { data: row, error } = await supabase
        .from("diagnostic_submissions")
        .select("*")
        .eq("id", id)
        .single();
      if (!active) return;
      if (error || !row) {
        setState("error");
      } else {
        setRecord(row);
        setState("ready");
      }
    })();
    return () => {
      active = false;
    };
  }, [id, data]);

  // When used as the offscreen PDF source, render just the body.
  if (data) return <ReportBody record={record} />;

  // Route-mounted view: loading / error / ready states + sticky action bar.
  return (
    <div style={{ background: C.paper, minHeight: "100vh" }}>
      <style>{PRINT_CSS}</style>

      {state === "loading" && (
        <Centered>
          <p style={{ fontFamily: MONO, fontSize: "13px", color: C.muted, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Loading report…
          </p>
        </Centered>
      )}

      {state === "error" && (
        <Centered>
          <p style={{ fontFamily: SERIF, fontSize: "22px", color: C.ink, marginBottom: "8px" }}>
            Report not found
          </p>
          <p style={{ fontSize: "13px", color: C.muted }}>
            This report link is invalid or has expired.
          </p>
        </Centered>
      )}

      {state === "ready" && record && (
        <>
          <div
            className="no-print"
            style={{
              position: "sticky",
              top: 0,
              zIndex: 10,
              background: C.slate,
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              padding: "10px 16px",
            }}
          >
            <ActionButton onClick={() => downloadPdf(record)}>Download PDF</ActionButton>
            <ActionButton onClick={() => window.print()}>Print</ActionButton>
          </div>
          <div style={{ padding: "24px 12px" }}>
            <div
              id="report-route-source"
              style={{
                background: "#fff",
                maxWidth: "794px",
                margin: "0 auto",
                boxShadow: "0 1px 12px rgba(0,0,0,0.08)",
              }}
            >
              <ReportBody record={record} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function Centered({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
      }}
    >
      {children}
    </div>
  );
}

function ActionButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: MONO,
        fontSize: "12px",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        color: C.teal,
        background: "transparent",
        border: `1px solid ${C.teal}`,
        padding: "8px 16px",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  );
}

async function downloadPdf(record) {
  const html2pdf = (await import("html2pdf.js")).default;
  const node = document.getElementById("report-route-source");
  if (!node) return;
  const slug =
    (record.student_name || "student")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") || "student";
  await html2pdf()
    .from(node)
    .set({
      margin: 10,
      filename: `roadtoivies-diagnostic-${slug}.pdf`,
      image: { type: "jpeg", quality: 0.95 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    })
    .save();
}
