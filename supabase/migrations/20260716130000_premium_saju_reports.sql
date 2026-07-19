create table if not exists public.saju_reference_versions (
  id uuid primary key default gen_random_uuid(),
  version_key text not null unique,
  engine_name text not null,
  engine_version text not null,
  source_name text not null,
  source_url text,
  source_sha256 text,
  supported_year_from integer not null,
  supported_year_to integer not null,
  kasi_validation_status text not null default 'pending' check (
    kasi_validation_status in ('pending', 'sampled', 'reviewed', 'failed')
  ),
  kasi_validated_at timestamptz,
  validation_summary jsonb not null default '{}'::jsonb,
  status text not null default 'draft' check (
    status in ('draft', 'reviewed', 'production', 'archived')
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.saju_interpretation_rules (
  id uuid primary key default gen_random_uuid(),
  reference_version_id uuid not null references public.saju_reference_versions(id) on delete cascade,
  rule_code text not null,
  category text not null check (
    category in ('PILLAR', 'DAY_MASTER', 'FIVE_ELEMENTS', 'SEASON', 'NAMING', 'CAUTION')
  ),
  input_selector jsonb not null default '{}'::jsonb,
  interpretation_ko text not null,
  caution_ko text,
  citations jsonb not null default '[]'::jsonb,
  review_status text not null default 'draft' check (
    review_status in ('draft', 'reviewed', 'production', 'rejected')
  ),
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (reference_version_id, rule_code)
);

create table if not exists public.hanja_element_classifications (
  id uuid primary key default gen_random_uuid(),
  reference_version_id uuid not null references public.saju_reference_versions(id) on delete cascade,
  official_hanja_entry_id uuid not null references public.official_hanja_entries(id) on delete cascade,
  element text not null check (element in ('WOOD', 'FIRE', 'EARTH', 'METAL', 'WATER', 'UNCLASSIFIED')),
  classification_method text not null,
  source_note text,
  confidence numeric(4, 3) check (confidence is null or (confidence >= 0 and confidence <= 1)),
  review_status text not null default 'draft' check (
    review_status in ('draft', 'reviewed', 'production', 'rejected')
  ),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (reference_version_id, official_hanja_entry_id)
);

create table if not exists public.payment_webhook_events (
  id uuid primary key default gen_random_uuid(),
  provider text not null,
  provider_event_id text not null,
  event_type text not null,
  signature_verified boolean not null default false,
  payload_sha256 text not null,
  processing_status text not null default 'RECEIVED' check (
    processing_status in ('RECEIVED', 'PROCESSED', 'IGNORED', 'FAILED')
  ),
  error_code text,
  created_at timestamptz not null default now(),
  processed_at timestamptz,
  unique (provider, provider_event_id)
);

create table if not exists public.premium_analysis_sessions (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null unique references public.orders(id) on delete restrict,
  user_id uuid references auth.users(id) on delete set null,
  service_type text not null default 'HANJA_MEANING_MATCH' check (
    service_type = 'HANJA_MEANING_MATCH'
  ),
  status text not null default 'PENDING_PAYMENT' check (
    status in ('PENDING_PAYMENT', 'PAID', 'GENERATING', 'READY', 'EXPIRED', 'DELETED', 'REFUNDED', 'FAILED')
  ),
  price_amount integer not null default 9900 check (price_amount = 9900),
  currency text not null default 'KRW' check (currency = 'KRW'),
  access_token_hash text not null unique,
  input_payload jsonb not null default '{}'::jsonb,
  calculation_result jsonb,
  interpretation_result jsonb,
  calculation_engine text,
  calculation_engine_version text,
  reference_version_id uuid references public.saju_reference_versions(id) on delete set null,
  paid_at timestamptz,
  ready_at timestamptz,
  expires_at timestamptz,
  deleted_at timestamptz,
  failure_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (expires_at is null or paid_at is null or expires_at <= paid_at + interval '24 hours 5 minutes')
);

create table if not exists public.premium_analysis_artifacts (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.premium_analysis_sessions(id) on delete cascade,
  artifact_type text not null default 'PDF' check (artifact_type = 'PDF'),
  storage_bucket text not null default 'premium-reports',
  storage_path text not null,
  content_sha256 text not null,
  byte_size bigint not null check (byte_size > 0),
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  deleted_at timestamptz,
  deletion_error text,
  unique (storage_bucket, storage_path)
);

create index if not exists saju_rules_production_lookup_idx
  on public.saju_interpretation_rules (reference_version_id, review_status, category, sort_order);
create index if not exists hanja_element_production_lookup_idx
  on public.hanja_element_classifications (reference_version_id, review_status, element);
create index if not exists premium_sessions_expiry_idx
  on public.premium_analysis_sessions (expires_at, status)
  where deleted_at is null;
create index if not exists premium_artifacts_expiry_idx
  on public.premium_analysis_artifacts (expires_at)
  where deleted_at is null;

alter table public.saju_reference_versions enable row level security;
alter table public.saju_interpretation_rules enable row level security;
alter table public.hanja_element_classifications enable row level security;
alter table public.payment_webhook_events enable row level security;
alter table public.premium_analysis_sessions enable row level security;
alter table public.premium_analysis_artifacts enable row level security;

revoke all on public.saju_reference_versions from anon, authenticated;
revoke all on public.saju_interpretation_rules from anon, authenticated;
revoke all on public.hanja_element_classifications from anon, authenticated;
revoke all on public.payment_webhook_events from anon, authenticated;
revoke all on public.premium_analysis_sessions from anon, authenticated;
revoke all on public.premium_analysis_artifacts from anon, authenticated;
grant all on public.saju_reference_versions to service_role;
grant all on public.saju_interpretation_rules to service_role;
grant all on public.hanja_element_classifications to service_role;
grant all on public.payment_webhook_events to service_role;
grant all on public.premium_analysis_sessions to service_role;
grant all on public.premium_analysis_artifacts to service_role;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('premium-reports', 'premium-reports', false, 10485760, array['application/pdf'])
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

insert into public.saju_reference_versions (
  version_key,
  engine_name,
  engine_version,
  source_name,
  source_url,
  supported_year_from,
  supported_year_to,
  kasi_validation_status,
  status,
  validation_summary
) values (
  'manseryeok-js-1.0.8-kasi-pending',
  '@fullstackfamily/manseryeok',
  '1.0.8',
  'urstory/manseryeok-js bundled calendar data',
  'https://github.com/urstory/manseryeok-js',
  1900,
  2050,
  'pending',
  'draft',
  jsonb_build_object(
    'official_comparison_source', '한국천문연구원 음양력·24절기 Open API',
    'production_gate', 'KASI 경계일 표본 검증과 전문가 해석 규칙 검수 완료 후 production 전환'
  )
) on conflict (version_key) do nothing;
