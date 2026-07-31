-- 서비스별 운영 지표 분리 (2026-07-31)
--
-- naming-artist 콘솔에 인연링크 운영 메뉴를 만들면서, 두 서비스의 숫자가 한 통에 섞이지 않도록
-- 가르는 기준을 DB에 심는다.
--
--   orders                  : **이미 `service` 컬럼이 있다**(20260727120000). 그대로 쓴다.
--   site_events / ad_events : 같은 뜻의 `app` 컬럼을 새로 더한다.
--
-- 이름이 `service`와 `app`으로 갈리는 것은 앞선 마이그레이션이 정한 이름을 바꾸지 않으려는
-- 것뿐이다. 값은 둘 다 'naminglink' | 'inyeonlink'로 같다.
--
-- `site_events`에 컬럼이 필요한 이유: `PAGE_VIEW`에는 어느 서비스인지 알아낼 단서가 하나도 없다.
-- `service_type`은 분석 이벤트에만 붙고 페이지뷰에는 null이라, 국가별 방문·일별 추이를
-- 서비스별로 가를 방법이 없다.

-- 기본값을 'naminglink'로 둔다. 지금까지 쌓인 행은 전부 naminglink가 넣은 것이라 이 값이 맞고,
-- naminglink 쪽 코드는 한 줄도 고치지 않아도 된다(인연링크만 명시적으로 'inyeonlink'를 보낸다).
--
-- `orders.is_test`처럼 기본값을 없애 래퍼를 강제하지는 않는다. 그쪽은 값이 틀리면 운영 매출이
-- 오염되지만, 여기는 통계이고 **이벤트 기록이 실패하는 쪽이 더 나쁘다**.
alter table public.site_events
  add column if not exists app text not null default 'naminglink';

alter table public.ad_events
  add column if not exists app text not null default 'naminglink';

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'site_events_app_check'
  ) then
    alter table public.site_events
      add constraint site_events_app_check check (app in ('naminglink', 'inyeonlink'));
  end if;
  if not exists (
    select 1 from pg_constraint where conname = 'ad_events_app_check'
  ) then
    alter table public.ad_events
      add constraint ad_events_app_check check (app in ('naminglink', 'inyeonlink'));
  end if;
end $$;

-- 콘솔의 모든 집계가 `app`으로 걸러진다. 기간 필터와 함께 쓰므로 복합 인덱스로 둔다.
create index if not exists site_events_app_created_idx
  on public.site_events (app, created_at desc);
create index if not exists ad_events_app_created_idx
  on public.ad_events (app, created_at desc);

-- ---------------------------------------------------------------------------
-- 집계 함수에 서비스 인자를 더한다.
--
-- 인자를 늘리면 `create or replace`가 교체가 아니라 오버로드를 만들고, 두 개 인자로 부를 때
-- "function is not unique"가 된다. 그래서 옛 시그니처를 지우고 새로 만든다(권한도 다시 준다).
-- 2026-07-28 마이그레이션이 같은 이유로 같은 일을 했다.
-- ---------------------------------------------------------------------------
drop function if exists public.admin_analytics_snapshot(integer, boolean);
-- 이 파일을 고쳐 다시 적용할 수 있게 새 시그니처도 함께 지운다. 없으면 재적용이
-- "function already exists"로 실패한다.
drop function if exists public.admin_analytics_snapshot(integer, boolean, text);

create function public.admin_analytics_snapshot(
  p_days integer default 30,
  p_include_test boolean default false,
  p_app text default 'naminglink'
)
returns jsonb
language sql
security definer
set search_path = public, auth
as $$
  with bounds as (
    select now() - make_interval(days => greatest(1, least(p_days, 365))) as since,
           -- 알 수 없는 값이 들어오면 naminglink로 본다. 빈 화면을 보여 주는 것보다 낫고,
           -- 인연링크 지표가 naminglink 화면에 섞이는 것보다도 낫다.
           case when p_app = 'inyeonlink' then 'inyeonlink' else 'naminglink' end as app_key
  ),
  -- 주문 집계는 전부 이 뷰를 거친다. 필터를 한 곳에 모아 두어야 새 지표가 늘어도 빠지지 않는다.
  --
  -- **`order_type`이 아니라 `service`로 가른다.** 종류 목록을 여기 적어 두면 새 주문 종류가
  -- 생길 때마다 함께 고쳐야 하고, 빠뜨리면 그 매출이 조용히 반대편 서비스로 잡힌다.
  -- `service`는 DB 제약으로 두 값만 받고 `orders_service_created_at_idx`가 이 조회를 받쳐 준다.
  live_orders as (
    select o.* from public.orders o, bounds
    where (p_include_test or o.is_test = false)
      and o.service = bounds.app_key
  ),
  live_events as (
    select e.* from public.site_events e, bounds
    where e.created_at >= bounds.since and e.app = bounds.app_key
  ),
  live_ads as (
    select a.* from public.ad_events a, bounds
    where a.created_at >= bounds.since and a.app = bounds.app_key
  ),
  -- AI는 naminglink만 쓴다(인연링크는 규칙 엔진이라 외부 호출이 없다). `ai_usage_logs`에는
  -- app 컬럼을 두지 않고, 인연링크로 물으면 빈 집합이 되게 한다 — 0이 사실이다.
  live_ai as (
    select l.* from public.ai_usage_logs l, bounds
    where l.created_at >= bounds.since and bounds.app_key = 'naminglink'
  ),
  country_rows as (
    select coalesce(country_code, 'ZZ') as country_code,
           count(*) filter (where event_type = 'PAGE_VIEW')::int as visits,
           count(distinct visitor_hash)::int as visitors
    from live_events
    group by coalesce(country_code, 'ZZ')
    order by visits desc
    limit 100
  ),
  service_rows as (
    select coalesce(service_type, 'UNKNOWN') as service_type,
           count(*) filter (where event_type = 'ANALYSIS_STARTED')::int as started,
           count(*) filter (where event_type = 'ANALYSIS_COMPLETED')::int as completed,
           count(*) filter (where event_type = 'ANALYSIS_FAILED')::int as failed
    from live_events
    where service_type is not null
    group by service_type
    order by started desc
  ),
  daily_rows as (
    select to_char(date_trunc('day', created_at), 'YYYY-MM-DD') as day,
           count(*) filter (where event_type = 'PAGE_VIEW')::int as visits,
           count(*) filter (where event_type = 'ANALYSIS_COMPLETED')::int as analyses
    from live_events
    group by date_trunc('day', created_at)
    order by date_trunc('day', created_at)
  ),
  order_rows as (
    select payment_status, fulfillment_status, count(*)::int as count,
           coalesce(sum(payment_amount), 0)::bigint as amount
    from live_orders, bounds
    where created_at >= bounds.since
    group by payment_status, fulfillment_status
    order by count desc
  ),
  ai_rows as (
    select model, count(*)::int as calls, coalesce(sum(total_tokens), 0)::bigint as tokens,
           coalesce(round(avg(latency_ms)), 0)::int as avg_latency_ms
    from live_ai
    group by model
    order by calls desc
  )
  select jsonb_build_object(
    'days', greatest(1, least(p_days, 365)),
    'includesTest', p_include_test,
    'app', (select app_key from bounds),
    'summary', jsonb_build_object(
      'members', (select count(*)::int from auth.users),
      'visits', (select count(*)::int from live_events where event_type = 'PAGE_VIEW'),
      'visitors', (select count(distinct visitor_hash)::int from live_events where event_type = 'PAGE_VIEW'),
      'analyses', (select count(*)::int from live_events where event_type = 'ANALYSIS_COMPLETED'),
      'aiCalls', (select count(*)::int from live_ai),
      'aiTokens', (select coalesce(sum(total_tokens), 0)::bigint from live_ai),
      'adImpressions', (select count(*)::int from live_ads where event_type = 'IMPRESSION'),
      'adRewards', (select count(*)::int from live_ads where event_type = 'REWARD_GRANTED'),
      'orders', (select count(*)::int from live_orders, bounds where created_at >= bounds.since),
      'paidOrders', (select count(*)::int from live_orders, bounds where created_at >= bounds.since and payment_status = 'PAID'),
      'revenue', (select coalesce(sum(payment_amount), 0)::bigint from live_orders, bounds where created_at >= bounds.since and payment_status = 'PAID')
    ),
    'countries', coalesce((select jsonb_agg(to_jsonb(country_rows)) from country_rows), '[]'::jsonb),
    'services', coalesce((select jsonb_agg(to_jsonb(service_rows)) from service_rows), '[]'::jsonb),
    'daily', coalesce((select jsonb_agg(to_jsonb(daily_rows)) from daily_rows), '[]'::jsonb),
    'orderStatuses', coalesce((select jsonb_agg(to_jsonb(order_rows)) from order_rows), '[]'::jsonb),
    'aiModels', coalesce((select jsonb_agg(to_jsonb(ai_rows)) from ai_rows), '[]'::jsonb)
  );
$$;

revoke all on function public.admin_analytics_snapshot(integer, boolean, text) from public, anon, authenticated;
grant execute on function public.admin_analytics_snapshot(integer, boolean, text) to service_role;
