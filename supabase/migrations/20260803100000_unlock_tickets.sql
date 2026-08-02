-- 후보 열기 관문 표(ticket).
--
-- **왜 필요한가.** 잠긴 후보는 봉인문으로만 브라우저에 있고 여는 것은 서버뿐이지만
-- (`lib/result-seal.ts`), 여는 라우트에 상태가 없어 봉인문만 있으면 몇 번이든 열렸다.
-- 광고를 봤다는 증명이 없었기 때문이다.
--
-- **웹 보상형에는 서버 검증(SSV)이 없다.** 구글 문서가 못 박아 두었다 — "Server-side
-- verification is an app only feature and it is unavailable for web use."
-- (support.google.com/admanager/answer/9116812). 그래서 "언젠가 SSV로 막는다"는 계획은
-- 성립하지 않는다. 증명할 수 없다면 부과할 수 있는 것은 **시간**뿐이다 — 정직한 이용자가
-- 광고에 쓰는 바로 그 비용을, 클라이언트 타이머가 아니라 서버가 잰다.
--
-- **무엇을 저장하는가.** 표의 해시·방문자 해시·시각 셋뿐이다. 이름도, 결과 식별자(sid)도,
-- 어느 후보인지도 남기지 않는다. 비회원 결과 미저장 원칙과 부딪히지 않는 범위다
-- (rate_limit_counters·ad_events와 같은 갈래).
create table if not exists public.unlock_tickets (
  -- 원문이 아니라 해시를 담는다. 표가 새어도 DB만으로는 쓸 수 없다.
  ticket_hash text primary key,
  visitor_hash text not null,
  -- 이 시각이 지나야 쓸 수 있다(= 광고를 보는 시간).
  ready_at timestamptz not null,
  expires_at timestamptz not null,
  created_at timestamptz not null default now()
);

create index if not exists unlock_tickets_visitor_idx
  on public.unlock_tickets (visitor_hash, ready_at desc);
create index if not exists unlock_tickets_expires_idx
  on public.unlock_tickets (expires_at);

-- 표 하나를 발급하고 쓸 수 있게 되는 시각을 돌려준다.
create or replace function public.issue_unlock_ticket(
  p_ticket_hash text,
  p_visitor_hash text,
  p_wait_seconds integer,
  p_ttl_seconds integer
) returns timestamptz
language plpgsql
security definer
set search_path = public
as $$
declare
  v_latest timestamptz;
  v_ready timestamptz;
begin
  -- **같은 방문자의 발급은 줄을 세운다.** 이 잠금이 없으면 동시에 들어온 두 요청이 같은
  -- max(ready_at)을 읽어 둘 다 같은 시각에 준비된다 — 병렬로 발급받아 기다림을 한 번으로
  -- 접는 길이 그대로 열린다. 트랜잭션이 끝나면 자동으로 풀린다.
  perform pg_advisory_xact_lock(hashtext(p_visitor_hash));

  -- 만료된 표는 여기서 함께 치운다. 따로 크론을 두지 않아도 표가 자라지 않는다.
  delete from public.unlock_tickets where expires_at < now();

  select max(ready_at) into v_latest
    from public.unlock_tickets
   where visitor_hash = p_visitor_hash;

  -- **기다림은 쌓인다.** 아직 준비되지 않은 표가 있으면 그 뒤에 줄을 세운다. 그래서 표를
  -- 네 장 한꺼번에 받아도 준비 시각이 5·10·15·20초로 벌어져, 후보 넷을 여는 데 드는 시간은
  -- 광고를 넷 보는 것과 같아진다.
  --
  -- **지나간 표는 세지 않는다**(greatest에 now()를 함께 둔다). 광고를 중간에 닫아 쓰지 않고
  -- 버린 표가 남아 있어도, 그 표의 준비 시각은 이미 과거라 다음 발급을 늦추지 않는다.
  -- 이것이 없으면 광고를 닫을 때마다 다음 기다림이 5초씩 길어져 정직한 이용자가 벌을 받는다.
  v_ready := greatest(coalesce(v_latest, now()), now())
             + make_interval(secs => greatest(p_wait_seconds, 0));

  insert into public.unlock_tickets (ticket_hash, visitor_hash, ready_at, expires_at)
  values (
    p_ticket_hash,
    p_visitor_hash,
    v_ready,
    now() + make_interval(secs => greatest(p_ttl_seconds, 1))
  );

  return v_ready;
end;
$$;

-- 표 하나를 쓴다. 성공하면 'ok', 아니면 사유를 돌려준다.
--
-- **쓰면 지운다.** 한 장으로 후보 하나다. 남겨 두고 used 표시를 하는 방식보다 단순하고,
-- 같은 표를 두 번 쓰는 경쟁 상태가 DELETE 하나로 정리된다.
create or replace function public.consume_unlock_ticket(
  p_ticket_hash text,
  p_visitor_hash text
) returns text
language plpgsql
security definer
set search_path = public
as $$
declare
  v_ready timestamptz;
begin
  delete from public.unlock_tickets
   where ticket_hash = p_ticket_hash
     and visitor_hash = p_visitor_hash
     and expires_at > now()
     and ready_at <= now();

  if found then
    return 'ok';
  end if;

  -- 왜 안 됐는지 갈라 본다. 이용자에게 보여 줄 문구가 달라진다(다시 만들 일인가, 기다릴 일인가).
  select ready_at into v_ready
    from public.unlock_tickets
   where ticket_hash = p_ticket_hash
     and visitor_hash = p_visitor_hash;

  if not found then
    -- 없거나·이미 썼거나·다른 방문자의 것이다. 셋을 구분해 알려 줄 이유가 없다.
    return 'unknown';
  end if;
  if v_ready > now() then
    return 'early';
  end if;
  return 'expired';
end;
$$;

alter table public.unlock_tickets enable row level security;
revoke all on public.unlock_tickets from anon, authenticated;
grant all on public.unlock_tickets to service_role;

revoke all on function public.issue_unlock_ticket(text, text, integer, integer)
  from public, anon, authenticated;
grant execute on function public.issue_unlock_ticket(text, text, integer, integer)
  to service_role;

revoke all on function public.consume_unlock_ticket(text, text)
  from public, anon, authenticated;
grant execute on function public.consume_unlock_ticket(text, text)
  to service_role;
