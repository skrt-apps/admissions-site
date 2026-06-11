# Copilot Instructions for admissions-site

## Build, Test, and Development

### Commands

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Build for production (outputs to dist/)
npm run preview  # Preview production build locally
```

**No automated tests exist.** Manual testing is required before deployment—see [TESTING.md](../TESTING.md) for the checklist.

## High-Level Architecture

### Stack
- **Build/Dev**: Vite + React 18 + React Router DOM v7
- **Styling**: Tailwind CSS v3 with custom color palette (ink, paper, teal, etc.)
- **Backend**: Supabase (PostgreSQL + Auth)
- **PDF Generation**: html2pdf.js
- **Calendars**: react-calendly

### Core Pages & Routes

```
/ (Home)
├─ Hero section with testimonials
├─ Navigation: credentials, case study, services, activities sections (in-page anchors)
└─ CTA button → /diagnostic

/diagnostic
├─ Form input: grade, citizenship, major, academic level, testing scores
├─ Computes tier/status using evaluateProfile() function
├─ Submits to Supabase with result JSON fields (result_tier, result_status, result_vulnerability, result_project, result_checklist)
└─ Shows inline result block + success banner

/report/:id
├─ Fetches report from Supabase by ID
├─ Displays formatted result block with headshot image
├─ PDF download (uses html2pdf.js)
├─ Shareable link + copy-to-clipboard
└─ Fallback to static dummy report on route render if ID invalid

/about
└─ About page with GlobalHeader only (no duplicate nav)
```

### Routing Pattern

**Convert ALL internal links to React Router `<Link to="...">`**, not `<a href="/...">`. 
- Home nav links to anchors (`#credentials`, etc.) stay as `<a href="#...">`
- CTA links to pages (`/diagnostic`, `/about`, `/report/:id`) → use `<Link>`
- External links (WhatsApp, etc.) stay as `<a href="https://..." target="_blank">`

All pages use `<GlobalHeader />` for sticky navigation.

### Database Integration

**Supabase client** (`src/lib/supabase.js`):
- Initialized with `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` from `.env`
- Insert diagnostic submissions with fields: `grade`, `citizenship`, `major`, `academic`, `testing`, `target_universities`, `utm_source`, plus `result_*` JSON fields
- Fetch reports by `id` (UUID)

### Styling Conventions

Custom Tailwind config extends with:
- **Colors**: `ink` (dark bg), `paper` (light text), `teal` (primary accent), `muted`, `cream`, `rule`, `danger`, `amber`
- **Fonts**: Playfair Display (serif), IBM Plex Sans, IBM Plex Mono
- `sticky top-0 z-50` for header, full-width layout within `max-w-7xl mx-auto`
- Responsive breakpoint: `xl:` for desktop nav, `hidden` by default for mobile

## Key Conventions

### Component Structure

- **Pages** (`src/pages/`): Full-page routes; always import and use `GlobalHeader`
- **Components** (`src/components/`): Reusable UI pieces; `GlobalHeader` handles navigation state for all pages
- JSX must have properly closed tags—build will fail on mismatched `<main>`, etc.

### Form & Data Flow

- Diagnostic form validates input → `evaluateProfile()` → returns tier/status/vulnerability/project/checklist strings
- Success after Supabase insert → show "Profile Recorded" banner
- Always capture `utm_source` from URL params if present
- Recommendation letters and candidate narrative: pull from form submission context, not from separate fields

### PDF & Report Generation

- Use `html2pdf.js` for PDF generation
- PDF layout should match browser print preview (one or two pages max)
- Headshot image file location: check public assets or committed image paths
- Button styling in PDF: renders visually but links are not clickable—acceptable

### Deprecated Copy

Do NOT use these phrases anywhere:
- "SOVEREIGN"
- "FATAL SIGNAL"
- "Cohort Diagnostic Lab"
- "Saturated International Demographic Trap"

Use grep to verify removal before deployment.

### Recent Patterns

- All internal navigation now uses React Router `<Link>` (footers, CTAs, etc.)
- Mobile menu state managed in `GlobalHeader` only—no duplicate state in page components
- Clean separation: GlobalHeader handles nav, pages focus on content
- `evaluateProfile()` function in Diagnostic page directly computes all result fields (no separate compute step)
