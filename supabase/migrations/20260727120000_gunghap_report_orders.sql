-- 인연링크(궁합) 리포트 PDF 판매 (2026-07-27 사용자 확정: 국내 990원 / 해외 US$2.99).
--
-- 포트원 상점은 하나로 간다(같은 사업자·같은 계좌). 그래서 주문도 naminglink와 같은
-- public.orders를 쓰고, 매출은 새 service 컬럼으로 가른다.
--
-- 입력값(생년월일)은 **주문에 저장하지 않는다.** 인연링크의 미저장 원칙이 유료 흐름에서도
-- 유지되도록, 결제 승인 응답을 받은 그 요청 안에서 PDF를 만들어 곧바로 내려보낸다.
-- 그래서 이 표에는 금액·상태·발급 횟수만 남고 누구의 사주였는지는 남지 않는다.

-- 1) 주문 종류에 궁합 리포트 추가
alter table public.orders drop constraint if exists orders_order_type_check;
alter table public.orders add constraint orders_order_type_check
  check (order_type in (
    'PREMIUM_PDF',
    'CALLIGRAPHY_IMAGE',
    'STAMP_DELIVERY',
    'CANDIDATE_UNLOCK',
    'GUNGHAP_PDF'
  ));

-- 2) 서비스 구분. 기존 주문은 전부 naminglink다.
alter table public.orders
  add column if not exists service text not null default 'naminglink';
alter table public.orders drop constraint if exists orders_service_check;
alter table public.orders add constraint orders_service_check
  check (service in ('naminglink', 'inyeonlink'));

-- 매출을 서비스별로 가를 때 쓴다. 관리자 화면의 기간 조회가 이 순서로 훑는다.
create index if not exists orders_service_created_at_idx
  on public.orders (service, created_at desc);

-- 3) 상품 설정. **enabled=false로 넣는다** — 포트원 채널 키가 아직 없어 다크 런치 상태이고,
--    키가 등록되면 관리자 화면에서 켜면 된다. 가격도 그 화면에서 조정된다.
insert into public.product_settings (code, name_ko, amount, currency, font_count, enabled) values
  ('GUNGHAP_PDF_KRW', '궁합 리포트 PDF(국내)', 990, 'KRW', 0, false),
  ('GUNGHAP_PDF_USD', '궁합 리포트 PDF(해외)', 299, 'USD', 0, false)
on conflict (code) do nothing;
