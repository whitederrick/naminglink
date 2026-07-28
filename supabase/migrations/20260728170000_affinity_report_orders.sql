-- 인연링크 "인연의 결" 리포트 PDF 판매 (2026-07-28 사용자 확정: 궁합 PDF와 같은 값).
--
-- 화면은 무료로 두고 PDF만 판다. 이 메뉴의 존재 이유가 **혼자서도 쓸 수 있는 진입점**이라
-- 유료로 막으면 진입점이 아니게 되기 때문이다. 회수는 PDF와 그다음 계단인 사주 궁합에서 한다.
--
-- 궁합 리포트와 같은 흐름을 그대로 쓴다 — 같은 orders 표, service='inyeonlink', 입력값은
-- 주문에 저장하지 않고 결제 승인 응답을 받은 그 요청에서 PDF를 만들어 즉시 내려보낸다.

-- 1) 주문 종류에 인연의 결 리포트 추가.
--    제약을 통째로 다시 만드는 것은 이 표의 기존 방식 그대로다(20260727120000과 같은 모양).
alter table public.orders drop constraint if exists orders_order_type_check;
alter table public.orders add constraint orders_order_type_check
  check (order_type in (
    'PREMIUM_PDF',
    'CALLIGRAPHY_IMAGE',
    'STAMP_DELIVERY',
    'CANDIDATE_UNLOCK',
    'GUNGHAP_PDF',
    'AFFINITY_PDF'
  ));

-- 2) 상품 설정. **enabled=false로 넣는다** — 토스·페이팔 키가 아직 없어 다크 런치이고,
--    키가 등록되면 naminglink 관리자 화면에서 켠다. 가격도 그 화면에서 조정한다.
--
--    금액은 궁합 리포트와 **같은 값**이다(₩990 / US$1.99). 분량이 비슷한데 값이 다르면
--    "왜 이건 비싼가"를 설명해야 한다. USD는 센트 단위라 199다.
insert into public.product_settings (code, name_ko, amount, currency, font_count, enabled) values
  ('AFFINITY_PDF_KRW', '인연의 결 리포트 PDF(국내)', 990, 'KRW', 0, false),
  ('AFFINITY_PDF_USD', '인연의 결 리포트 PDF(해외)', 199, 'USD', 0, false)
on conflict (code) do nothing;
