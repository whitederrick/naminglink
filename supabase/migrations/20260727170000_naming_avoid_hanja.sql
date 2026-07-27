-- 전통 작명에서 기피하는 한자(불용문자, 不用文字).
--
-- **`official_hanja_entries`와 반드시 따로 둔다.** 그 표는 대법원 인명용한자표의 사본이고, 이쪽은
-- 관습에 기반한 서비스 정책이다. 같은 행에 섞으면 "법이라 못 쓰는 글자"와 "관습상 피하는 글자"의
-- 구분이 사라진다 — 珍은 법적으로는 아무 문제 없이 쓸 수 있는 글자다.
--
-- 그래서 화면에도 성격을 밝혀 보여 준다. 근거가 명확한 법령이 아니라 성명학 관념이므로, 걸러 냈다는
-- 사실과 이유를 함께 내보내고 사용자가 끌 수 있어야 한다.

create table if not exists public.naming_avoid_hanja (
  id uuid primary key default gen_random_uuid(),
  hanja text not null,
  -- 훈음. 화면에 "珍(보배 진)"처럼 보여 주는 데 쓴다.
  reading text,
  meaning_ko text,
  -- 부류. 사용자가 고급 옵션에서 부류 단위로 켜고 끌 수 있어야 하므로 필수다.
  --   NEGATIVE   부정·불길 (死·病 등)
  --   PRECIOUS   과도하게 귀함·물건 (珍·寶·玉·金 등)
  --   POWERFUL   기(氣)가 세다고 보는 글자 (龍·王·帝·天 등)
  --   SOUND      발음 기피
  category text not null check (
    category in ('NEGATIVE', 'PRECIOUS', 'POWERFUL', 'SOUND')
  ),
  -- 왜 기피하는지. 화면에 그대로 보여 주므로 사람이 읽을 문장으로 적는다.
  reason text not null,
  -- 어디에 근거한 분류인지. 특정 작명서가 아니면 '전통 성명학 통설'처럼 성격을 적는다.
  source text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (hanja, category)
);

create index if not exists naming_avoid_hanja_active_idx
  on public.naming_avoid_hanja (is_active, category);

alter table public.naming_avoid_hanja enable row level security;
revoke all on public.naming_avoid_hanja from anon, authenticated;
grant all on public.naming_avoid_hanja to service_role;

-- 부류를 켜고 끄는 스위치. 목록 전체를 지우지 않고 부류 단위로 조정하려는 것이다.
-- 珍·玉이 기피되는 이유 중 하나는 "예전 여성·천민 이름에 흔했다"는 것인데, 시대에 따라 뒤집히는
-- 판단이라 코드 배포 없이 관리자 화면에서 끌 수 있어야 한다.
create table if not exists public.naming_avoid_categories (
  category text primary key check (
    category in ('NEGATIVE', 'PRECIOUS', 'POWERFUL', 'SOUND')
  ),
  label_ko text not null,
  description_ko text not null,
  is_active boolean not null default true,
  sort_order integer not null default 0
);

alter table public.naming_avoid_categories enable row level security;
revoke all on public.naming_avoid_categories from anon, authenticated;
grant all on public.naming_avoid_categories to service_role;

insert into public.naming_avoid_categories (category, label_ko, description_ko, is_active, sort_order) values
  ('NEGATIVE', '부정·불길', '죽음·질병·재앙 등 뜻이 어두운 글자입니다.', true, 1),
  ('PRECIOUS', '귀함·물건', '뜻이 지나치게 귀하거나 사람이 아닌 물건(보석·재물)을 가리키는 글자입니다.', true, 2),
  ('POWERFUL', '기(氣) 센 글자', '용·임금·하늘처럼 기운이 너무 크다고 보는 글자입니다.', true, 3),
  ('SOUND', '발음 기피', '소리가 좋지 않게 들리거나 놀림이 되기 쉬운 글자입니다.', true, 4)
on conflict (category) do nothing;

-- 시드. **사용자가 직접 지목한 글자만 넣는다.** 목록 전체는 별도로 정리해 넣을 예정이므로, 여기서
-- 임의로 늘리지 않는다(출처 없는 규칙으로 남의 이름 후보를 걸러 내지 않는다는 원칙).
insert into public.naming_avoid_hanja (hanja, reading, meaning_ko, category, reason, source) values
  ('珍', '진', '보배', 'PRECIOUS', '뜻이 지나치게 귀해 이름값을 감당하기 어렵다고 보며, 사람이 아닌 물건(보석)을 가리킵니다.', '전통 성명학 통설'),
  ('寶', '보', '보배', 'PRECIOUS', '뜻이 지나치게 귀하고 사람이 아닌 물건을 가리킵니다.', '전통 성명학 통설'),
  ('玉', '옥', '구슬', 'PRECIOUS', '사람이 아닌 물건(보석)을 가리키며, 예전 이름에 흔해 격이 낮게 여겨지기도 합니다.', '전통 성명학 통설'),
  ('珠', '주', '구슬', 'PRECIOUS', '사람이 아닌 물건(보석)을 가리킵니다.', '전통 성명학 통설'),
  ('金', '금', '쇠', 'PRECIOUS', '재물을 뜻해 사람 이름에는 무겁다고 봅니다.', '전통 성명학 통설'),
  ('銀', '은', '은', 'PRECIOUS', '재물을 뜻해 사람 이름에는 무겁다고 봅니다.', '전통 성명학 통설'),
  ('貴', '귀', '귀할', 'PRECIOUS', '뜻이 정점에 이르러 감당하기 어렵다고 봅니다.', '전통 성명학 통설'),
  ('富', '부', '부자', 'PRECIOUS', '재물을 직접 가리켜 사람 이름에는 무겁다고 봅니다.', '전통 성명학 통설'),
  ('龍', '룡', '용', 'POWERFUL', '기운이 지나치게 커 사람이 감당하기 어렵다고 봅니다.', '전통 성명학 통설'),
  ('王', '왕', '임금', 'POWERFUL', '기운이 지나치게 커 사람이 감당하기 어렵다고 봅니다.', '전통 성명학 통설'),
  ('帝', '제', '임금', 'POWERFUL', '기운이 지나치게 커 사람이 감당하기 어렵다고 봅니다.', '전통 성명학 통설'),
  ('皇', '황', '임금', 'POWERFUL', '기운이 지나치게 커 사람이 감당하기 어렵다고 봅니다.', '전통 성명학 통설'),
  ('天', '천', '하늘', 'POWERFUL', '기운이 지나치게 커 사람이 감당하기 어렵다고 봅니다.', '전통 성명학 통설'),
  ('神', '신', '귀신', 'POWERFUL', '사람의 자리를 넘어선 뜻이라 봅니다.', '전통 성명학 통설'),
  ('龜', '귀', '거북', 'POWERFUL', '기운이 세다고 보아 이름에 쓰지 않는 편입니다.', '전통 성명학 통설')
on conflict (hanja, category) do nothing;
