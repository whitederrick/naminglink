-- 일괄 공개(CANDIDATE_UNLOCK) 상품 주문 준비.
-- 1) orders.order_type 허용값에 CANDIDATE_UNLOCK 추가
-- 2) 해외(페이팔 USD) 결제를 위한 payment_currency 컬럼 추가 (USD는 센트 단위 정수로 저장)
alter table public.orders drop constraint if exists orders_order_type_check;
alter table public.orders add constraint orders_order_type_check
  check (order_type in ('PREMIUM_PDF', 'CALLIGRAPHY_IMAGE', 'STAMP_DELIVERY', 'CANDIDATE_UNLOCK'));

alter table public.orders add column if not exists payment_currency text not null default 'KRW';
