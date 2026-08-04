-- 사주링크(apps/sajulink) 리포트 PDF 판매 자리.
--
-- **아직 적용하지 않았다.** 앱이 스캐폴딩 단계라 실제 주문이 들어올 일이 없고, 이 파일이
-- 건드리는 `orders` 제약은 **운영 중인 두 서비스가 함께 쓰는 표**다. 사주링크가 실제로
-- 주문을 받기 직전에 적용한다(`node apps/naminglink/scripts/apply-migration.mjs`).
--
-- 인연링크가 쓴 흐름을 그대로 미러링한다 — 같은 orders 표, `service='sajulink'`, 입력값은
-- 주문에 저장하지 않고 결제 승인 응답을 받은 그 요청에서 PDF를 만들어 즉시 내려보낸다.

-- 1) 서비스 구분에 사주링크 추가.
--    `orders.service`는 콘솔이 매출을 가르는 기준이다(`packages/core/src/apps.ts`).
--    **이 제약과 그 파일의 APP_KEYS를 함께 늘려야 한다** — 한쪽만 늘리면 사주링크 매출이
--    조용히 naminglink로 잡힌다(숫자는 멀쩡해 보이므로 아무도 눈치채지 못한다).
alter table public.orders drop constraint if exists orders_service_check;
alter table public.orders add constraint orders_service_check
  check (service in ('naminglink', 'inyeonlink', 'sajulink'));

-- 2) 주문 종류 추가. 제약을 통째로 다시 만드는 것은 이 표의 기존 방식 그대로다.
alter table public.orders drop constraint if exists orders_order_type_check;
alter table public.orders add constraint orders_order_type_check
  check (order_type in (
    'PREMIUM_PDF',
    'CALLIGRAPHY_IMAGE',
    'STAMP_DELIVERY',
    'CANDIDATE_UNLOCK',
    'GUNGHAP_PDF',
    'AFFINITY_PDF',
    'SAJU_CHONGUN_PDF',
    'SAJU_PREMIUM_PDF'
  ));

-- 3) 상품 설정. **enabled=false로 넣는다** — 결제 키가 아직 없어 다크 런치이고, 키가
--    등록되면 naminglink 관리자 화면에서 켠다. 가격도 그 화면에서 조정한다.
--
--    금액은 구현 지시서(`docs/IMPLEMENTATION_TICKET_saju_dream.md` §2)가 정한 값이다.
--    총운 ₩4,900 / US$4.99, 프리미엄 ₩9,900 / US$9.99. USD는 센트 단위다.
insert into public.product_settings (code, name_ko, amount, currency, font_count, enabled) values
  ('SAJU_CHONGUN_KRW', '사주 총운 리포트 PDF(국내)', 4900, 'KRW', 0, false),
  ('SAJU_CHONGUN_USD', '사주 총운 리포트 PDF(해외)', 499, 'USD', 0, false),
  ('SAJU_PREMIUM_KRW', '사주 프리미엄 리포트 PDF(국내)', 9900, 'KRW', 0, false),
  ('SAJU_PREMIUM_USD', '사주 프리미엄 리포트 PDF(해외)', 999, 'USD', 0, false)
on conflict (code) do nothing;

-- 4) 접속·이용 집계의 서비스 구분.
--    `site_events.app`·`ad_events.app`도 같은 이유로 늘린다.
alter table public.site_events drop constraint if exists site_events_app_check;
alter table public.site_events add constraint site_events_app_check
  check (app in ('naminglink', 'inyeonlink', 'sajulink'));

alter table public.ad_events drop constraint if exists ad_events_app_check;
alter table public.ad_events add constraint ad_events_app_check
  check (app in ('naminglink', 'inyeonlink', 'sajulink'));
