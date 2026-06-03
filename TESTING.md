# Manual test checklist

Run through this before every deploy.

```
[ ] Run `npm run dev`. Home page loads at /. No console errors.
[ ] Click "Run Cohort Diagnostic →". Diagnostic page loads.
[ ] Fill the form with realistic values. Submit.
[ ] Inline result block appears with tier, status, three findings.
[ ] "Profile Recorded" success banner shows.
[ ] In Supabase Studio, the new row exists with all fields populated including result_*.
[ ] Click "Download PDF Report". A PDF downloads with the layout described in Phase 2.3.
[ ] Open the PDF. It is one or two pages. Headshot renders. Contact buttons are visible (they render as buttons in the PDF but are not clickable — that's fine).
[ ] Click "Open shareable report". /report/:id opens in a new tab. Layout matches PDF.
[ ] Click "Copy report link". Clipboard contains the full URL.
[ ] Visit /report/example. Static dummy report renders.
[ ] Visit /report/nonexistent-uuid. Clean "Report not found" message.
[ ] Submit a form with a target_universities field. Confirm utm_source is captured if URL has ?utm_source=test.
[ ] Browser print preview of /report/:id matches PDF layout.
[ ] All copy changes in Phase 3 are applied. None of the deprecated phrases remain in the codebase. Grep for "SOVEREIGN", "FATAL SIGNAL", "Cohort Diagnostic Lab", "Saturated International Demographic Trap" — should be zero matches.
```
