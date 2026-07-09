create table if not exists public.naming_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  service_type text not null check (
    service_type in (
      'BABY_HANJA',
      'KOREAN_FOR_FOREIGNER',
      'FOREIGN_FOR_KOREAN'
    )
  ),
  input_factors jsonb not null,
  generated_names jsonb not null,
  is_premium_unlocked boolean not null default false,
  created_at timestamptz not null default now()
);

alter table public.naming_logs enable row level security;

create policy "Users can view own naming logs"
  on public.naming_logs
  for select
  using (auth.uid() = user_id);

-- Inserts are performed by the Next.js API route with the service role key.
-- Do not expose SUPABASE_SERVICE_ROLE_KEY to the browser.
