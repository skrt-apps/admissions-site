"""Server-side port of the frontend's evaluateProfile() (src/pages/Diagnostic.jsx).

This is the single source of truth for the diagnostic result — the client
sends only the raw form inputs and never the computed result, so a client
can no longer submit a fabricated tier/status/etc.
"""


class DiagnosticResult:
    def __init__(self, tier: str, status: str, vulnerability: str, project: str, checklist: str):
        self.tier = tier
        self.status = status
        self.vulnerability = vulnerability
        self.project = project
        self.checklist = checklist


def evaluate_profile(*, grade: str, citizenship: str, major: str, academic: str, testing: str) -> DiagnosticResult:
    if academic == "high" and testing == "high":
        tier = "Competitive at elite-tier admissions"
        status = (
            "The student clears primary holistic quantitative filters. However, excellent "
            "scores are baseline criteria, not points of differentiation."
        )
    elif academic == "mid" or testing == "mid":
        tier = "Strong but uneven baseline"
        status = (
            "The student possesses a strong foundation, but shows a clear metric variance "
            "that will trigger immediate scrutiny during initial evaluation phases."
        )
    else:
        tier = "Foundational gaps to close"
        status = (
            "Critical quantitative baseline barriers present. Current metrics do not clear "
            "structural entry screening thresholds easily."
        )

    if citizenship == "india":
        status += (
            " <strong>Note on the international applicant pool:</strong> Competing as an "
            "Indian Citizen activates the single most saturated international pool in the "
            "world. Admissions committees operate with strict demographic ceilings. "
            "Quantitative perfection is assumed; any minor curriculum fluctuation (e.g., a "
            "5/7 in an HL STEM subject) or lack of out-of-school technical output results "
            "in an immediate soft rejection."
        )
        if major in ("stem", "finance"):
            vulnerability = (
                "<strong>The saturated-pool problem.</strong> For an Indian citizen "
                "targeting STEM or quantitative tracks, a 'well-rounded' portfolio is "
                "usually the wrong positioning strategy. You are competing directly "
                "against thousands of applicants with similar profiles. Your child's "
                "application needs an undeniable asymmetric spike to stand out."
            )
            project = (
                "Standard volunteering and generic summer camps will not register here. "
                "Your child must build a functional, open-source technical asset—such as "
                "a data-science software platform or a localized algorithmic modeling "
                "repository—or execute formal academic research alongside university "
                "faculty targeting publication."
            )
            checklist = (
                "1. Initiate an immediate profile audit to isolate a singular, "
                "un-clichéd technical project direction.<br>2. Re-verify that Higher "
                "Level (HL) math/science splits show absolute flawless performance."
                "<br>3. Frame upcoming recommendation profiles around advanced "
                "intellectual autonomy that outperforms standard grade boundaries."
            )
        else:
            vulnerability = (
                "<strong>The generalist trap.</strong> While shifting away from STEM "
                "clears some selection volume, an Indian international applicant "
                "tracking as a Polymath or Tree must provide undeniable proof of "
                "cross-domain scaling or high linguistic mastery to survive initial "
                "holistic cuts."
            )
            project = (
                "Unify the interdisciplinary profile with a verifiable, real-world "
                "platform. If combining economics and social advocacy, construct a "
                "scalable data project mapping local urban structural adjustments "
                "rather than joining generic school clubs."
            )
            checklist = (
                "1. Draft a binding 'Master Narrative' that bridges separate interests "
                "into a unified theme.<br>2. Ensure the main personal statement is "
                "structurally bulletproof and avoids cliché coming-of-age tropes."
                "<br>3. Lock down high-level regional or international writing "
                "distinctions."
            )
    else:
        status += (
            " <strong>On the domestic-pool advantage:</strong> Holding a US Passport or "
            "OCI status moves the applicant out of the ultra-saturated international "
            "citizen allocation pool, shifting them into a more flexible evaluation "
            "metric lane with higher acceptance limits."
        )
        if academic == "high" and testing == "high":
            vulnerability = (
                "<strong>The metrics-only ceiling.</strong> While the passport advantage "
                "mitigates regional filtering ceilings, top-tier institutional tracks "
                "still reject high-scoring domestic applicants who fail to show deep "
                "personal maturity or a clear intrinsic thread."
            )
            project = (
                "Focus heavily on character and leadership scaling. Elevate a 'Tree' or "
                "'Polymath' project to a state or national level, proving the student has "
                "genuine real-world execution capacity beyond high test performance."
            )
            checklist = (
                "1. Finalize an early submission architecture to capitalise on Early "
                "Action/ED pacing windows.<br>2. Build out highly distinct personal "
                "essay drafts that focus heavily on internal reflections and value "
                "systems."
            )
        else:
            vulnerability = (
                "<strong>Metric Vulnerability.</strong> The domestic status protects "
                "the student from the absolute data-cutoff filters that international "
                "citizens face, but an imbalanced academic baseline still flags "
                "localised preparation weaknesses."
            )
            project = (
                "Deploy defensive academic major mapping. Align the application "
                "strategy with lower-density majors where the current metric profile "
                "remains competitive, using the passport context to capture holistic "
                "evaluation latitude."
            )
            checklist = (
                "1. Stabilise internal grade trajectories before the next reporting "
                "window.<br>2. Maximise the tactical impact of personal statements to "
                "directly contextualise any score variations."
            )

    if grade == "g12":
        checklist += (
            "<br><br><strong>On timing:</strong> As a rising senior, your tactical "
            "window is strictly limited to defensive narrative positioning and "
            "immediate Early Decision/REA locking. There is no time left for academic "
            "recovery loops."
        )
    elif grade == "g10":
        checklist += (
            "<br><br><strong>On timing:</strong> You are in an ideal spot. Current "
            "metric deficits can be completely engineered away with an immediate, "
            "structured 24-month profile strategy blueprint."
        )

    return DiagnosticResult(tier, status, vulnerability, project, checklist)
