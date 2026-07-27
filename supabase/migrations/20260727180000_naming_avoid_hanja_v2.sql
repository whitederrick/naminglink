-- 불용문자 표를 실제 자료(`docs/naminglink_불용문자.json`)의 부류에 맞춘다.
--
-- 앞 마이그레이션(20260727170000)은 자료를 받기 전에 4부류로 임시로 잡아 둔 것이라 실제 부류와
-- 어긋난다. 아직 아무도 쓰지 않은 표이므로 지우고 다시 만든다.
--
-- **`commonly_used`가 이 표의 핵심이다.** 자료의 62자 중 31자는 관습상 기피 목록에 오르지만
-- 실제로는 흔히 쓰이는 글자다(圭·琳·玲·瑛·元·太·大·星·海·山 …). 이것까지 기본으로 빼면 후보가
-- 절반 가까이 사라지고, 이용자는 왜 흔한 글자가 없는지 알 수 없다. 자료 스스로 "논쟁적"이라고
-- 표시한 것을 서비스가 기본값으로 강제하지 않는다 — 데이터에는 넣되 켜야 빠지게 한다.

drop table if exists public.naming_avoid_hanja;
drop table if exists public.naming_avoid_categories;

create table public.naming_avoid_categories (
  category text primary key,
  label_ko text not null,
  principle_ko text not null,
  is_active boolean not null default true,
  sort_order integer not null default 0
);

create table public.naming_avoid_hanja (
  id uuid primary key default gen_random_uuid(),
  hanja text not null,
  -- "보배 진"처럼 훈과 음을 함께. 화면에 "珍(보배 진)"으로 보여 준다.
  reading text not null,
  category text not null references public.naming_avoid_categories(category),
  -- 왜 기피하는지. 화면에 그대로 나가므로 사람이 읽을 문장이다.
  reason text not null,
  /**
   * 관습상 기피 목록에는 오르지만 실제로는 흔히 쓰이는 글자인가.
   *
   * true인 글자는 **기본 제외 대상이 아니다.** 고급 옵션에서 따로 켜야 빠진다.
   */
  commonly_used boolean not null default false,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  unique (hanja, category)
);

create index naming_avoid_hanja_lookup_idx
  on public.naming_avoid_hanja (is_active, commonly_used, category);

alter table public.naming_avoid_categories enable row level security;
alter table public.naming_avoid_hanja enable row level security;
revoke all on public.naming_avoid_categories from anon, authenticated;
revoke all on public.naming_avoid_hanja from anon, authenticated;
grant all on public.naming_avoid_categories to service_role;
grant all on public.naming_avoid_hanja to service_role;

insert into public.naming_avoid_categories (category, label_ko, principle_ko, sort_order) values
  ('treasure_object', '귀함·물건(보석·재물)', '뜻이 지나치게 귀하거나 사물(보석·재물)을 뜻해 사람 이름의 주체성과 안 맞는다고 봄', 1),
  ('royalty', '제왕·존귀(기 셈)', '제왕·최상의 신분이라 그 기운을 감당 못 한다고 봄', 2),
  ('divine', '신령·초월(기 셈)', '신·불·선 등 인간을 넘어선 존재라 기가 세고 고립된다고 봄', 3),
  ('nature_sky', '자연·천체(지나침·무상)', '천체·자연물이라 사람이 담기엔 지나치게 크거나, 곧 스러져 무상하다고 봄', 4),
  ('animal', '동물', '동물을 뜻해 사람 이름에 부적합하다고 봄', 5),
  ('excess', '과유불급(극단·완성)', '뜻이 정점·완성에 달해 더 발전할 여지가 없다고 봄', 6),
  ('season_etc', '계절·성별 어감', '특정 계절에 치우치거나 구식·낮은 어감이라 기피', 7);

-- 글자는 `scripts/seed-avoid-hanja.mjs`가 docs/naminglink_불용문자.json에서 읽어 넣는다.
-- 자료가 원본이고 DB는 사본이므로, 목록이 바뀌면 파일을 고치고 스크립트를 다시 돌린다.
