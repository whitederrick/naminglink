-- 범용 고정 시간창(fixed-window) 레이트리밋. consume_daily_quota와 같은 서버리스-안전 패턴을
-- 쓰되, 창 길이를 초 단위로 받아 "시간당 N건" 같은 짧은 창 제한에 재사용한다.
create table if not exists public.rate_limit_counters (
  scope text not null,
  identifier text not null,
  window_start timestamptz not null,
  request_count integer not null default 0 check (request_count >= 0),
  updated_at timestamptz not null default now(),
  primary key (scope, identifier, window_start)
);

create index if not exists rate_limit_counters_window_idx
  on public.rate_limit_counters (window_start);

-- 현재 창에서 1건을 소비하고, 한도를 넘으면 되돌린 뒤 false를 반환한다(허용이면 true).
create or replace function public.consume_rate_limit(
  p_scope text,
  p_identifier text,
  p_window_seconds integer,
  p_limit integer
) returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_window_start timestamptz;
  next_count integer;
begin
  -- 창 시작점 = now를 창 길이로 내림한 경계.
  v_window_start := to_timestamp(
    floor(extract(epoch from now()) / greatest(p_window_seconds, 1))
      * greatest(p_window_seconds, 1)
  );

  insert into public.rate_limit_counters (scope, identifier, window_start, request_count)
  values (p_scope, p_identifier, v_window_start, 1)
  on conflict (scope, identifier, window_start)
  do update set
    request_count = public.rate_limit_counters.request_count + 1,
    updated_at = now()
  returning request_count into next_count;

  if next_count > greatest(p_limit, 1) then
    update public.rate_limit_counters
      set request_count = request_count - 1, updated_at = now()
      where scope = p_scope
        and identifier = p_identifier
        and window_start = v_window_start;
    return false;
  end if;

  return true;
end;
$$;

alter table public.rate_limit_counters enable row level security;
revoke all on public.rate_limit_counters from anon, authenticated;
grant all on public.rate_limit_counters to service_role;

revoke all on function public.consume_rate_limit(text, text, integer, integer)
  from public, anon, authenticated;
grant execute on function public.consume_rate_limit(text, text, integer, integer)
  to service_role;
