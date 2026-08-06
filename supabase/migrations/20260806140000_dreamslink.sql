-- 드림링크를 DB에 등록한다.
--
-- ## 왜 이 파일이 필요한가
--
-- `APP_KEYS`에 앱을 더하는 것만으로는 부족하다. 서비스 구분과 주문 종류가 **CHECK 제약으로 SQL에
-- 박혀 있어서**, 여기를 늘리지 않으면 그 앱의 INSERT가 전부 거부된다. 더 나쁜 것은 그 실패가
-- 조용하다는 점이다 — 값 검사는 "행이 없다"로 통과한다. 넣을 수 없으니 샐 값도 없기 때문이다.
--
-- 그래서 `verify-app-split.mjs`가 제약의 허용값을 `APP_KEYS`와 대조한다. 이 마이그레이션을
-- 잊으면 그 검사기가 「마이그레이션이 빠졌다」로 잡는다.
--
-- ## 상품은 꺼진 채로 넣는다
--
-- 결제 실키가 없고 도메인도 아직이라 `enabled=false`로 둔다(다크 런치). 화면은 상품 코드가
-- `product_settings`에 **켜져 있을 때만** 구매 버튼을 그리므로, 켜기 전까지 죽은 버튼이 생기지
-- 않는다. 켜는 것은 관리자 화면에서 한다.
--
-- 값은 2026-08-06 결정을 따른다. 꿈은 매일 꾸는 것이라 사주처럼 한 벌짜리 문서를 팔지 않는다 —
-- 무료 해몽이 본체이고 광고가 주 수익이며, 유료는 간직하는 두 가지뿐이다.
--
--   꿈 카드      ₩990 / US$1.99    좋은 꿈을 간직·공유하는 이미지 한 장
--   태몽 리포트   ₩2,900 / US$2.99  1회성이고 평생 간직하는 PDF 4장
--
-- USD는 **센트 단위**다(199 = US$1.99). 원화와 같은 컬럼을 쓰므로 여기서 틀리면 100배로 청구된다.

-- ---------------------------------------------------------------------------
-- 1) 서비스 구분에 dreamslink를 더한다
-- ---------------------------------------------------------------------------
alter table public.orders drop constraint if exists orders_service_check;
alter table public.orders
  add constraint orders_service_check
  check (service in ('naminglink', 'inyeonlink', 'sajulink', 'dreamslink'));

alter table public.site_events drop constraint if exists site_events_app_check;
alter table public.site_events
  add constraint site_events_app_check
  check (app in ('naminglink', 'inyeonlink', 'sajulink', 'dreamslink'));

alter table public.ad_events drop constraint if exists ad_events_app_check;
alter table public.ad_events
  add constraint ad_events_app_check
  check (app in ('naminglink', 'inyeonlink', 'sajulink', 'dreamslink'));

-- ---------------------------------------------------------------------------
-- 2) 주문 종류를 더한다
--
-- **기존 값을 지우지 않는다.** 옛 주문이 남아 있으면 제약을 다시 걸 때 실패하고, 성공하더라도
-- 그 주문을 조회하는 코드가 종류를 못 찾는다(사주링크에서 티어를 합치며 겪은 일과 같은 자리다).
-- ---------------------------------------------------------------------------
alter table public.orders drop constraint if exists orders_order_type_check;
alter table public.orders
  add constraint orders_order_type_check
  check (order_type in (
    'PREMIUM_PDF',
    'CALLIGRAPHY_IMAGE',
    'STAMP_DELIVERY',
    'CANDIDATE_UNLOCK',
    'GUNGHAP_PDF',
    'AFFINITY_PDF',
    'SAJU_REPORT_PDF',
    'DREAM_CARD',
    'DREAM_CONCEPTION_PDF'
  ));

-- ---------------------------------------------------------------------------
-- 3) 상품 네 행 (전부 꺼진 채로)
--
-- 이미 있으면 건드리지 않는다 — 관리자 화면에서 가격을 고쳤을 수 있고, 마이그레이션을 다시
-- 돌린다고 그 값이 되돌아가면 안 된다.
-- ---------------------------------------------------------------------------
insert into public.product_settings (code, name_ko, amount, currency, font_count, enabled)
values
  ('DREAM_CARD_KRW',       '꿈 카드(국내)',           990, 'KRW', 0, false),
  ('DREAM_CARD_USD',       '꿈 카드(해외)',           199, 'USD', 0, false),
  ('DREAM_CONCEPTION_KRW', '태몽 리포트 PDF(국내)',  2900, 'KRW', 0, false),
  ('DREAM_CONCEPTION_USD', '태몽 리포트 PDF(해외)',   299, 'USD', 0, false)
on conflict (code) do nothing;
