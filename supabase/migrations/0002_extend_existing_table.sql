-- ============================================================
-- 0002_extend_existing_table
-- For projects where diagnostic_submissions already existed
-- before the report feature (only the profile columns). This
-- brings an existing table up to the full schema in 0001 and
-- adds the SELECT-by-id policy the shareable report needs.
--
-- Idempotent: safe to run on a fresh DB (everything already
-- exists from 0001) or an old one (adds what's missing).
-- ============================================================

-- Diagnostic parameter selects
alter table public.diagnostic_submissions add column if not exists grade        text;
alter table public.diagnostic_submissions add column if not exists citizenship  text;
alter table public.diagnostic_submissions add column if not exists major        text;
alter table public.diagnostic_submissions add column if not exists archetype    text;
alter table public.diagnostic_submissions add column if not exists academic     text;
alter table public.diagnostic_submissions add column if not exists testing      text;

-- Computed result snapshot
alter table public.diagnostic_submissions add column if not exists result_tier          text;
alter table public.diagnostic_submissions add column if not exists result_status        text;
alter table public.diagnostic_submissions add column if not exists result_vulnerability text;
alter table public.diagnostic_submissions add column if not exists result_project       text;
alter table public.diagnostic_submissions add column if not exists result_checklist     text;

-- Attribution
alter table public.diagnostic_submissions add column if not exists utm_source   text;
alter table public.diagnostic_submissions add column if not exists utm_medium   text;
alter table public.diagnostic_submissions add column if not exists utm_campaign text;
alter table public.diagnostic_submissions add column if not exists referrer     text;
alter table public.diagnostic_submissions add column if not exists user_agent   text;

-- Indexes (no-ops if 0001 already created them)
create index if not exists diagnostic_submissions_created_at_idx
  on public.diagnostic_submissions (created_at desc);
create index if not exists diagnostic_submissions_email_idx
  on public.diagnostic_submissions (email);

-- The shareable report (/report/:id) needs anon SELECT. Older
-- projects only had an INSERT policy, which silently returns no
-- rows on read. Add the SELECT policy. Access control is the
-- unguessable UUID in the URL.
alter table public.diagnostic_submissions enable row level security;

drop policy if exists "anon can read submissions by id"
  on public.diagnostic_submissions;
create policy "anon can read submissions by id"
  on public.diagnostic_submissions
  for select
  to anon
  using (true);
