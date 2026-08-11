# RoadToIvies API

FastAPI backend for the diagnostic tool. Owns the `diagnostic_submissions`
table (still hosted on Supabase Postgres) and the scoring logic that used to
live client-side in `src/pages/Diagnostic.jsx`.

## Local development

```bash
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
cp .env.example .env   # fill in DATABASE_URL from Supabase project settings
uvicorn app.main:app --reload
```

API docs at `http://localhost:8000/docs`.

## Endpoints

- `POST /diagnostics` — submit the diagnostic form; computes and stores the
  result server-side, returns the full stored row (including the generated
  `id` used for the shareable `/report/:id` link).
- `GET /diagnostics/{id}` — fetch a stored submission by id.

## Deployment (Render)

1. New Web Service, root directory `backend/`, uses the included `Dockerfile`.
2. Env vars: `DATABASE_URL` (Supabase Postgres connection string, using the
   `postgresql+asyncpg://` scheme), `ALLOWED_ORIGINS` (comma-separated, e.g.
   `https://roadtoivies.com`).
3. On the frontend, set `VITE_API_URL` (Vercel project env var) to the
   deployed Render URL.

## Database

Uses the existing `diagnostic_submissions` table and migrations under
`../supabase/migrations/`. No schema changes needed — the backend connects
directly to Postgres instead of going through the Supabase client/anon key,
so once the frontend is fully cut over, the `anon` RLS policies on this
table can be dropped (not done automatically by this change).
