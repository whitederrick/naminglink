-- 신고 채널(관측망) — 광고 개방된 화면에서 이용자가 문제를 신고하는 표.
--
-- docs/LOCALE_AD_STRATEGY_2026-08-21.md §3.5 ⑤. 검토의 실체는 사람이 하는 거래 문구
-- 확인(②)이 담당하고, 이 채널은 추가 관측망이다 — 신고 0건이 "검토가 이루어졌다"의
-- 증거는 아니다(§4.3).
--
-- **최소 수집**(§4.4): URL과 자유서술 텍스트뿐이다. 이름·이메일·연락처는 받지 않는다.
-- 자유서술란에 이용자가 개인정보를 적어 넣을 수는 있으나, 필수 항목으로 요구하지 않는다.
--
-- **레이트리밋은 이 표를 건드리지 않는다** — 기존 rate_limit_counters(scope="locale-report")를
-- 그대로 쓴다(request-guard.ts). 여기 저장하는 것은 신고 본문뿐이다.
create table if not exists public.locale_reports (
  id uuid primary key default gen_random_uuid(),
  -- 신고 대상 화면. 임의 문자열이 아니라 우리 URL이어야 뜻이 있지만, 형식 검증은
  -- API 쪽 zod 스키마가 하고 여기서는 길이만 막는다.
  url text not null check (char_length(url) between 1 and 2000),
  message text not null check (char_length(message) between 1 and 4000),
  locale text,
  visitor_hash text,
  status text not null default 'open'
    check (status in ('open', 'rejected', 'duplicate', 'resolved')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists locale_reports_status_created_idx
  on public.locale_reports (status, created_at);

alter table public.locale_reports enable row level security;
revoke all on public.locale_reports from anon, authenticated;
grant all on public.locale_reports to service_role;
