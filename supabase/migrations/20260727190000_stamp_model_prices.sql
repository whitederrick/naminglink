-- 도장 가격을 모델별로 나눈다 (2026-07-27 사용자 확정).
--
-- 2026-07-23에는 세 모델을 같은 값으로 팔기로 하고 `STAMP_KRW`/`STAMP_USD` 한 쌍만 두었다.
-- 재질과 형태가 다른데 가격이 같은 것이 맞지 않아 모델별로 가른다.
--
--   원형 목도장  ₩39,000 / US$39.90
--   사각 목도장  ₩59,000 / US$59.90
--   흑단 도장    ₩79,000 / US$79.90
--
-- 해외가는 국제 배송비를 포함한다(기존 US$34.99와 같은 기준).
-- 포트원 V2는 USD를 센트 단위 정수로 받으므로 3990/5990/7990으로 넣는다.

insert into public.product_settings (code, name_ko, amount, currency, font_count, enabled) values
  ('STAMP_ROUND_WOOD_KRW',  '이름 도장 · 원형 목도장(국내)',   39000, 'KRW', 0, true),
  ('STAMP_SQUARE_WOOD_KRW', '이름 도장 · 사각 목도장(국내)',   59000, 'KRW', 0, true),
  ('STAMP_EBONY_KRW',       '이름 도장 · 흑단 도장(국내)',     79000, 'KRW', 0, true),
  ('STAMP_ROUND_WOOD_USD',  '이름 도장 · 원형 목도장(해외)',    3990, 'USD', 0, true),
  ('STAMP_SQUARE_WOOD_USD', '이름 도장 · 사각 목도장(해외)',    5990, 'USD', 0, true),
  ('STAMP_EBONY_USD',       '이름 도장 · 흑단 도장(해외)',      7990, 'USD', 0, true)
on conflict (code) do nothing;

-- 옛 단일 가격 행은 끈다. 지우지 않는 것은 product_setting_history가 code로 과거 변경을
-- 가리키고 있어, 행이 사라지면 그 기록이 무엇에 대한 것인지 알 수 없어지기 때문이다.
update public.product_settings
   set enabled = false,
       name_ko = name_ko || ' (모델별 가격으로 대체됨)'
 where code in ('STAMP_KRW', 'STAMP_USD')
   and name_ko not like '%모델별 가격으로 대체됨%';
