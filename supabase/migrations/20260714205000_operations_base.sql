create table if not exists public.naming_logs (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  service_type text not null check (service_type in ('HANJA_MEANING_MATCH', 'KOREAN_TO_GLOBAL', 'GLOBAL_TO_KOREAN')),
  input_factors jsonb not null,
  generated_names jsonb not null,
  is_premium_unlocked boolean not null default false,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  naming_log_id uuid references public.naming_logs(id) on delete set null,
  order_type text not null check (order_type in ('PREMIUM_PDF', 'CALLIGRAPHY_IMAGE', 'STAMP_DELIVERY')),
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
  event_type text not null check (event_type in ('IMPRESSION', 'CLICK', 'REWARD_GRANTED', 'ERROR')),
  provider text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

alter table public.naming_logs enable row level security;
alter table public.orders enable row level security;
alter table public.ad_events enable row level security;
revoke all on public.naming_logs from anon, authenticated;
revoke all on public.orders from anon, authenticated;
revoke all on public.ad_events from anon, authenticated;
grant all on public.naming_logs to service_role;
grant all on public.orders to service_role;
grant all on public.ad_events to service_role;
