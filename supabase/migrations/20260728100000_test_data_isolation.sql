-- 개발(로컬)과 운영(Vercel)이 같은 Supabase 프로젝트를 본다. DB를 나누는 대신 **행 단위로** 가른다.
--
-- 판정은 앱 코드 한 곳(`@naminglink/core/env`)에서만 하고, 여기서는 그 결과를 받아 둘 자리를 만든다.
-- 대상은 "이용자·결제가 만드는 행"뿐이다. 상품 설정·사이트 문구 같은 운영자 설정은 컬럼을 만들지
-- 않고 로컬에서 쓰기를 막는 쪽으로 처리한다(행이 갈리면 운영 값과 어긋나기 시작한다).

-- 1) is_test
--
-- **최종 목표는 기본값이 없는 not null이다.** `default false`가 남아 있으면 새 주문 라우트가
-- 컬럼을 빠뜨려도 조용히 통과해서 운영 행처럼 기록된다. 기본값이 없으면 INSERT가 에러로 실패하므로
-- 개발자가 로컬에서 첫 시도에 바로 알아챈다. 조용히 잘못되는 것보다 시끄럽게 깨지는 편이 낫다.
--
-- 다만 여기서 바로 기본값을 없애면 **아직 배포되지 않은 옛 코드가 주문을 못 만든다.** 그래서
-- 이 마이그레이션은 `default false`를 달아 두고, 코드 배포가 끝난 뒤
-- `20260728110000_test_flag_drop_default.sql`이 기본값을 떼어낸다. 두 파일은 한 쌍이다.
--
-- 기존 행은 전부 운영 행이다(이 마이그레이션 이전에는 구분이 없었다). 컬럼을 널 허용으로 붙여
-- 채운 뒤 not null로 조인다 — 행이 있든 없든 같은 순서로 안전하다.
alter table public.orders add column if not exists is_test boolean default false;
update public.orders set is_test = false where is_test is null;
alter table public.orders alter column is_test set not null;

alter table public.premium_analysis_sessions add column if not exists is_test boolean default false;
update public.premium_analysis_sessions set is_test = false where is_test is null;
alter table public.premium_analysis_sessions alter column is_test set not null;

-- 운영 화면은 거의 항상 실주문만 본다. 부분 인덱스라 테스트 행이 늘어도 인덱스가 커지지 않는다.
create index if not exists orders_live_created_idx
  on public.orders (created_at desc)
  where is_test = false;

-- 2) 대시보드 통계 — 매출 집계가 SQL 함수 안에 있어서 앱 코드만 고쳐서는 걸러지지 않는다.
--
-- 인자를 늘리면 `create or replace`가 교체가 아니라 오버로드를 만들고, 한 개 인자로 부를 때
-- "function is not unique"가 된다. 그래서 옛 시그니처를 지우고 새로 만든다(권한도 다시 준다).
drop function if exists public.admin_analytics_snapshot(integer);

create function public.admin_analytics_snapshot(
  p_days integer default 30,
  p_include_test boolean default false
)
returns jsonb
language sql
security definer
set search_path = public, auth
as $$
  with bounds as (
    select now() - make_interval(days => greatest(1, least(p_days, 365))) as since
  ),
  -- 주문 관련 집계는 전부 이 뷰를 거친다. 필터를 한 곳에 모아 두어야 새 지표가 늘어도 빠지지 않는다.
  live_orders as (
    select * from public.orders
    where p_include_test or is_test = false
  ),
  country_rows as (
    select coalesce(country_code, 'ZZ') as country_code,
           count(*) filter (where event_type = 'PAGE_VIEW')::int as visits,
           count(distinct visitor_hash)::int as visitors
    from public.site_events, bounds
    where created_at >= bounds.since
    group by coalesce(country_code, 'ZZ')
    order by visits desc
    limit 100
  ),
  service_rows as (
    select coalesce(service_type, 'UNKNOWN') as service_type,
           count(*) filter (where event_type = 'ANALYSIS_STARTED')::int as started,
           count(*) filter (where event_type = 'ANALYSIS_COMPLETED')::int as completed,
           count(*) filter (where event_type = 'ANALYSIS_FAILED')::int as failed
    from public.site_events, bounds
    where created_at >= bounds.since and service_type is not null
    group by service_type
    order by started desc
  ),
  daily_rows as (
    select to_char(date_trunc('day', created_at), 'YYYY-MM-DD') as day,
           count(*) filter (where event_type = 'PAGE_VIEW')::int as visits,
           count(*) filter (where event_type = 'ANALYSIS_COMPLETED')::int as analyses
    from public.site_events, bounds
    where created_at >= bounds.since
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
    from public.ai_usage_logs, bounds
    where created_at >= bounds.since
    group by model
    order by calls desc
  )
  select jsonb_build_object(
    'days', greatest(1, least(p_days, 365)),
    'includesTest', p_include_test,
    'summary', jsonb_build_object(
      'members', (select count(*)::int from auth.users),
      'visits', (select count(*)::int from public.site_events, bounds where created_at >= bounds.since and event_type = 'PAGE_VIEW'),
      'visitors', (select count(distinct visitor_hash)::int from public.site_events, bounds where created_at >= bounds.since and event_type = 'PAGE_VIEW'),
      'analyses', (select count(*)::int from public.site_events, bounds where created_at >= bounds.since and event_type = 'ANALYSIS_COMPLETED'),
      'aiCalls', (select count(*)::int from public.ai_usage_logs, bounds where created_at >= bounds.since),
      'aiTokens', (select coalesce(sum(total_tokens), 0)::bigint from public.ai_usage_logs, bounds where created_at >= bounds.since),
      'adImpressions', (select count(*)::int from public.ad_events, bounds where created_at >= bounds.since and event_type = 'IMPRESSION'),
      'adRewards', (select count(*)::int from public.ad_events, bounds where created_at >= bounds.since and event_type = 'REWARD_GRANTED'),
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

revoke all on function public.admin_analytics_snapshot(integer, boolean) from public, anon, authenticated;
grant execute on function public.admin_analytics_snapshot(integer, boolean) to service_role;
