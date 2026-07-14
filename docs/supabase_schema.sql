create table if not exists public.naming_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  service_type text not null check (
    service_type in (
      'HANJA_MEANING_MATCH',
      'KOREAN_TO_GLOBAL',
      'GLOBAL_TO_KOREAN'
    )
  ),
  input_factors jsonb not null,
  generated_names jsonb not null,
  is_premium_unlocked boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  naming_log_id uuid references public.naming_logs(id) on delete set null,
  order_type text not null check (
    order_type in ('PREMIUM_PDF', 'CALLIGRAPHY_IMAGE', 'STAMP_DELIVERY')
  ),
  customer_name text,
  customer_email text,
  shipping_address text,
  payment_status text not null default 'UNPAID',
  payment_amount integer not null default 0,
  fulfillment_status text not null default 'PENDING',
  provider_payment_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.ad_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  naming_log_id uuid references public.naming_logs(id) on delete set null,
  slot_key text not null,
  event_type text not null check (
    event_type in ('IMPRESSION', 'CLICK', 'REWARD_GRANTED', 'ERROR')
  ),
  provider text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists public.official_hanja_sources (
  id uuid primary key default gen_random_uuid(),
  source_key text not null unique,
  title text not null,
  publisher text,
  rule_reference text,
  version_label text,
  effective_date date,
  source_file_name text,
  source_sha256 text,
  status text not null default 'draft' check (
    status in ('draft', 'reviewed', 'production', 'archived')
  ),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.official_hanja_rules (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null references public.official_hanja_sources(id) on delete cascade,
  rule_code text not null,
  description text not null,
  is_active boolean not null default true,
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  unique (source_id, rule_code)
);

create table if not exists public.official_hanja_entries (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null references public.official_hanja_sources(id) on delete cascade,
  hangul_syllable text not null,
  hanja text not null,
  designated_reading text not null,
  meaning_ko text not null,
  table_section text not null default 'unknown',
  page_number integer,
  stroke_count integer,
  radical text,
  is_name_usable boolean not null default true,
  review_status text not null default 'draft' check (
    review_status in ('draft', 'ocr', 'reviewed', 'production', 'rejected', 'sample')
  ),
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (
    source_id,
    hangul_syllable,
    hanja,
    designated_reading,
    table_section
  )
);

create table if not exists public.official_hanja_variants (
  id uuid primary key default gen_random_uuid(),
  source_id uuid not null references public.official_hanja_sources(id) on delete cascade,
  base_hanja text not null,
  variant_hanja text not null,
  variant_type text not null default 'variant' check (
    variant_type in ('same_character', 'popular_form', 'abbreviation', 'radical', 'other')
  ),
  rule_code text,
  notes text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  unique (source_id, base_hanja, variant_hanja, variant_type)
);

create index if not exists official_hanja_entries_lookup_idx
  on public.official_hanja_entries (hangul_syllable, designated_reading, review_status);

create index if not exists official_hanja_entries_hanja_idx
  on public.official_hanja_entries (hanja);

create index if not exists official_hanja_variants_lookup_idx
  on public.official_hanja_variants (base_hanja, variant_hanja);

alter table public.naming_logs enable row level security;
alter table public.orders enable row level security;
alter table public.ad_events enable row level security;
alter table public.official_hanja_sources enable row level security;
alter table public.official_hanja_rules enable row level security;
alter table public.official_hanja_entries enable row level security;
alter table public.official_hanja_variants enable row level security;

create policy "Users can view own naming logs"
  on public.naming_logs
  for select
  using (auth.uid() = user_id);

create policy "Users can view own orders"
  on public.orders
  for select
  using (auth.uid() = user_id);

create policy "Users can view own ad events"
  on public.ad_events
  for select
  using (auth.uid() = user_id);

create policy "Anyone can read production Hanja sources"
  on public.official_hanja_sources
  for select
  using (status = 'production');

create policy "Anyone can read active production Hanja rules"
  on public.official_hanja_rules
  for select
  using (
    is_active = true
    and exists (
      select 1
      from public.official_hanja_sources sources
      where sources.id = official_hanja_rules.source_id
        and sources.status = 'production'
    )
  );

create policy "Anyone can read production Hanja entries"
  on public.official_hanja_entries
  for select
  using (
    review_status = 'production'
    and is_name_usable = true
    and exists (
      select 1
      from public.official_hanja_sources sources
      where sources.id = official_hanja_entries.source_id
        and sources.status = 'production'
    )
  );

create policy "Anyone can read production Hanja variants"
  on public.official_hanja_variants
  for select
  using (
    exists (
      select 1
      from public.official_hanja_sources sources
      where sources.id = official_hanja_variants.source_id
        and sources.status = 'production'
    )
  );

-- Inserts, updates, admin reads, and draft/reviewed data access should be
-- performed only by trusted Next.js API routes or scripts using
-- SUPABASE_SERVICE_ROLE_KEY. Do not expose the service role key to clients.

create table if not exists public.site_contents (
  content_key text primary key,
  content_type text not null check (
    content_type in ('terms', 'privacy', 'refund', 'pricing', 'footer')
  ),
  locale text not null,
  draft_content jsonb not null,
  published_content jsonb,
  draft_version integer not null default 1,
  published_version integer not null default 0,
  updated_by uuid references auth.users(id) on delete set null,
  updated_at timestamptz not null default now(),
  published_at timestamptz,
  check (
    (content_type = 'footer' and locale = 'global')
    or
    (content_type <> 'footer' and locale <> 'global')
  )
);

create table if not exists public.site_content_revisions (
  id bigint generated by default as identity primary key,
  content_key text not null references public.site_contents(content_key) on delete cascade,
  action text not null check (action in ('save_draft', 'publish')),
  version integer not null,
  content jsonb not null,
  changed_by uuid references auth.users(id) on delete set null,
  changed_at timestamptz not null default now()
);

create index if not exists site_content_revisions_key_changed_idx
  on public.site_content_revisions (content_key, changed_at desc);

alter table public.site_contents enable row level security;
alter table public.site_content_revisions enable row level security;

revoke all on public.site_contents from anon, authenticated;
revoke all on public.site_content_revisions from anon, authenticated;
grant all on public.site_contents to service_role;
grant all on public.site_content_revisions to service_role;
grant usage, select on sequence public.site_content_revisions_id_seq to service_role;
