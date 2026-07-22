-- AI 생성이 실패했을 때 이미 소비한 무료 쿼터 1건을 돌려준다. consume_daily_quota가
-- 생성 전에 카운트를 올리므로, 실패 시 호출해 사용자가 실제 결과 없이 쿼터만 잃는 것을 막는다.
create or replace function public.release_daily_quota(
  p_visitor_hash text
) returns void
language plpgsql
security definer
set search_path = public
as $$
begin
  update public.daily_usage_counters
    set request_count = greatest(request_count - 1, 0), updated_at = now()
    where usage_day = current_date and visitor_hash = p_visitor_hash;
end;
$$;

revoke all on function public.release_daily_quota(text)
  from public, anon, authenticated;
grant execute on function public.release_daily_quota(text) to service_role;
