# Supabase schema

This directory is the single source of truth for the database schema behind the
RoadToIvies diagnostic form. The app does not require the Supabase CLI to run —
this migration exists so the schema can be applied and version-controlled.

## What's here

- `migrations/0001_init.sql` — creates the `diagnostic_submissions` table, its
  indexes, and Row Level Security policies (anon can INSERT and SELECT-by-id;
  no UPDATE/DELETE for anon). This is the full, fresh-database schema.
- `migrations/0002_extend_existing_table.sql` — for a project where the table
  **already existed with only the profile columns** (the original version). It
  adds the diagnostic selects, the `result_*` snapshot columns, the attribution
  columns, and the anon SELECT policy the shareable report needs. Idempotent:
  safe to run on a fresh DB too (everything is already present from 0001).

> Note: `0001` uses `create table if not exists`, so running it against a table
> that already exists is a no-op and will **not** add new columns. If your
> `diagnostic_submissions` table predates the report feature, run `0002`.
> (This has already been applied to the live `skrt-apps` project.)

## Applying the migration

**Option A — Supabase SQL Editor (quickest):**

1. Open your project in the Supabase dashboard.
2. Go to **SQL Editor** → **New query**.
3. Paste the entire contents of `migrations/0001_init.sql` and run it.

The script is idempotent (`create ... if not exists`, `drop policy if exists`),
so it is safe to re-run.

**Option B — Supabase CLI:**

```bash
supabase init          # once, if the CLI is not yet initialized here
supabase link --project-ref <your-project-ref>
supabase db push
```

## Environment variables

The client reads `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`. See
`.env.example` at the repo root. Set the same two variables in the Vercel
project settings for production.
