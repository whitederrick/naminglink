-- 서체 인기순 정렬용 선택 횟수. 주문 생성 시 선택된 서체마다 1씩 증가한다.
alter table public.report_fonts
  add column if not exists pick_count integer not null default 0;

create or replace function public.increment_font_picks(font_codes text[])
returns void
language sql
security definer
set search_path = public
as $$
  update public.report_fonts
  set pick_count = pick_count + 1
  where code = any(font_codes);
$$;

revoke all on function public.increment_font_picks(text[]) from anon, authenticated;
grant execute on function public.increment_font_picks(text[]) to service_role;
