-- 관리자 조정형 상품 설정 (2026-07-23 사용자 확정: 서체 적용 수·가격 조정 가능).
-- 가격·서체 수의 단일 원천. 주문 라우트는 코드 상수 대신 이 표를 읽는다
-- (가격은 항상 서버가 결정한다는 원칙 유지 — 클라이언트 금액 불신).
create table if not exists public.product_settings (
  code text primary key check (code ~ '^[A-Z0-9_]{2,40}$'),
  name_ko text not null,
  amount integer not null check (amount > 0),
  currency text not null check (currency in ('KRW', 'USD')),
  -- 사용자가 선택하는 서체 수(서체 미사용 상품은 0).
  font_count integer not null default 0 check (font_count between 0 and 10),
  enabled boolean not null default true,
  updated_at timestamptz not null default now(),
  updated_by text
);

-- 가격·구성 변경 감사 이력.
create table if not exists public.product_setting_history (
  id uuid primary key default gen_random_uuid(),
  code text not null,
  old_amount integer,
  new_amount integer,
  old_currency text,
  new_currency text,
  old_font_count integer,
  new_font_count integer,
  changed_by text,
  changed_at timestamptz not null default now()
);

alter table public.product_settings enable row level security;
alter table public.product_setting_history enable row level security;
revoke all on public.product_settings from anon, authenticated;
revoke all on public.product_setting_history from anon, authenticated;
grant all on public.product_settings to service_role;
grant all on public.product_setting_history to service_role;

-- 세션 가격 제약을 하드코딩 금액에서 건전성 검사로 완화한다
-- (실제 금액은 주문 시점에 product_settings에서 읽어 스냅샷 저장).
alter table public.premium_analysis_sessions
  drop constraint if exists premium_analysis_sessions_product_price_check;
alter table public.premium_analysis_sessions
  add constraint premium_analysis_sessions_product_price_check check (price_amount > 0);

-- 신규 상품 코드: 이름 아트 팩.
alter table public.premium_analysis_sessions
  drop constraint if exists premium_analysis_sessions_product_code_check;
alter table public.premium_analysis_sessions
  add constraint premium_analysis_sessions_product_code_check check (
    product_code in ('FIVE_DETAIL', 'TEN_DETAIL', 'TEN_SAJU_PDF', 'GLOBAL_NAME_PDF', 'HANGUL_ART_PDF', 'NAME_ART_PACK')
  );

-- 현행 확정 가격으로 시드(관리자 화면에서 조정 가능).
insert into public.product_settings (code, name_ko, amount, currency, font_count) values
  ('FIVE_DETAIL',         '한자 후보 5개 상세',              2900,  'KRW', 0),
  ('TEN_DETAIL',          '한자 후보 10개 확장 상세 PDF',    4900,  'KRW', 0),
  ('TEN_SAJU_PDF',        '한자 사주·오행 종합 리포트',      9900,  'KRW', 0),
  ('GLOBAL_NAME_PDF',     '한글 이름 종합 리포트(글로벌)',   999,   'USD', 1),
  ('HANGUL_ART_PDF',      '발음 전환 아트(글로벌)',          299,   'USD', 1),
  ('NAME_ART_PACK',       '이름 아트 팩(글로벌)',            199,   'USD', 3),
  ('CANDIDATE_UNLOCK_KRW','후보 일괄 공개(국내)',            990,   'KRW', 0),
  ('CANDIDATE_UNLOCK_USD','후보 일괄 공개(해외)',            199,   'USD', 0),
  ('STAMP_KRW',           '이름 도장(국내)',                 39000, 'KRW', 0),
  ('STAMP_USD',           '이름 도장(해외 배송 포함)',       3499,  'USD', 0)
on conflict (code) do nothing;
