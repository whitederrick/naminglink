-- 운영 지표 RPC가 **모든 서비스**를 보게 한다.
--
-- ## 무엇이 문제였나 (2026-08-06)
--
-- 함수가 서비스를 이렇게 골랐다:
--
--     case when p_app = 'inyeonlink' then 'inyeonlink' else 'naminglink' end
--
-- 서비스가 둘일 때 쓴 이분법이다. 사주링크가 생긴 뒤로는 `p_app => 'sajulink'`로 물으면
-- **naminglink의 숫자가 사주링크 것인 양 돌아왔다**(주문 4건·방문 582). 콘솔에 사주 메뉴를
-- 만드는 날 남의 매출이 사주 매출로 잡히는 자리였다. `verify-app-split.mjs`를 앱 목록으로
-- 돌게 고치자마자 드러났다.
--
-- ## 무엇을 바꾸는가
--
-- 1. **모르는 값을 naminglink로 바꾸지 않는다.** `p_app`을 그대로 쓴다. 오타나 새 앱이 들어오면
--    빈 집합이 되어 0으로 보인다 — 0은 눈에 띄지만, 남의 서비스 숫자는 그럴듯해서 아무도
--    눈치채지 못한다. 세 컬럼 모두 CHECK 제약이 값을 세 가지로 묶어 두므로, 유효한 값이면
--    정확히 그 서비스만 잡힌다.
--
-- 2. **AI 집계를 `ai_usage_logs.app`으로 가른다.** 예전에는 "AI는 naminglink만 쓴다"는 전제로
--    `bounds.app_key = 'naminglink'`를 걸어 두었다. 사주링크가 유료 경로에서 AI를 쓰고 그
--    사용량을 기록하기 시작했으므로 그 전제가 깨졌다. 컬럼은 `not null default 'naminglink'`라
--    과거 행은 그대로 naminglink에 남는다.
--
-- 인연링크는 규칙 엔진이라 여전히 0이 사실이다 — 이제 전제가 아니라 데이터로 0이 된다.
--
-- 읽기 전용 함수를 다시 만드는 것뿐이라 데이터는 건드리지 않는다.

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
           -- **묻는 값을 그대로 쓴다.** 예전에는 모르는 값을 naminglink로 바꿨는데, 그 때문에
           -- 사주링크를 물으면 naminglink 숫자가 돌아왔다. 남의 서비스 숫자는 그럴듯해서 아무도
           -- 눈치채지 못한다 — 오타나 새 앱은 0으로 보이는 편이 낫다.
           p_app as app_key
  ),
  -- 주문 집계는 전부 이 뷰를 거친다. 필터를 한 곳에 모아 두어야 새 지표가 늘어도 빠지지 않는다.
  --
  -- **`order_type`이 아니라 `service`로 가른다.** 종류 목록을 여기 적어 두면 새 주문 종류가
  -- 생길 때마다 함께 고쳐야 하고, 빠뜨리면 그 매출이 조용히 반대편 서비스로 잡힌다.
  -- `service`는 DB 제약으로 아는 값만 받고 `orders_service_created_at_idx`가 이 조회를 받쳐 준다.
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
  -- **어느 서비스가 AI를 쓰는지는 데이터가 말하게 한다.** 예전에는 "AI는 naminglink만 쓴다"는
  -- 전제를 조건에 박아 두었는데, 사주링크가 유료 경로에서 쓰기 시작하며 전제가 깨졌다.
  -- 컬럼은 `not null default 'naminglink'`라 과거 행은 그대로 naminglink에 남는다.
  -- 인연링크는 규칙 엔진이라 여전히 0이지만, 이제 전제가 아니라 기록이 없어서 0이다.
  live_ai as (
    select l.* from public.ai_usage_logs l, bounds
    where l.created_at >= bounds.since and l.app = bounds.app_key
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
