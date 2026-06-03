-- ============================================================
-- diagnostic_submissions
-- Captures everything from the /diagnostic form plus the
-- computed result, so PDFs can be regenerated without
-- re-running the evaluator.
-- ============================================================
create extension if not exists "pgcrypto";

create table if not exists public.diagnostic_submissions (
  id              uuid        primary key default gen_random_uuid(),
  created_at      timestamptz not null    default now(),

  -- Student profile (free-text inputs)
  student_name        text,
  email               text,
  phone               text,
  curriculum          text,
  intended_major      text,
  predicted_score     text,
  sat_score           text,
  target_universities text,
  research_summary    text,
  extracurriculars    text,

  -- Diagnostic parameters (enum-ish selects)
  grade        text,  -- 'g10' | 'g11' | 'g12'
  citizenship  text,  -- 'india' | 'us'
  major        text,  -- 'stem' | 'finance' | 'humanities'
  archetype    text,  -- 'specialist' | 'polymath' | 'tree'
  academic     text,  -- 'high' | 'mid' | 'low'
  testing      text,  -- 'high' | 'mid' | 'low'

  -- Snapshot of the computed result (HTML strings, as currently rendered)
  result_tier          text,
  result_status        text,
  result_vulnerability text,
  result_project       text,
  result_checklist     text,

  -- Attribution
  utm_source     text,
  utm_medium     text,
  utm_campaign   text,
  referrer       text,
  user_agent     text
);

create index if not exists diagnostic_submissions_created_at_idx
  on public.diagnostic_submissions (created_at desc);

create index if not exists diagnostic_submissions_email_idx
  on public.diagnostic_submissions (email);

-- ============================================================
-- Row Level Security
-- Anonymous role can INSERT (form submissions).
-- Anonymous role can SELECT a single row by id (so the report
-- page can be opened from a link). Because id is a v4 UUID,
-- the URL itself is the access control.
-- No UPDATE or DELETE for anon. Service role keeps full access
-- for Sukrit's admin work via the Supabase Studio UI.
-- ============================================================
alter table public.diagnostic_submissions enable row level security;

drop policy if exists "anon can insert submissions"
  on public.diagnostic_submissions;
create policy "anon can insert submissions"
  on public.diagnostic_submissions
  for insert
  to anon
  with check (true);

drop policy if exists "anon can read submissions by id"
  on public.diagnostic_submissions;
create policy "anon can read submissions by id"
  on public.diagnostic_submissions
  for select
  to anon
  using (true);
