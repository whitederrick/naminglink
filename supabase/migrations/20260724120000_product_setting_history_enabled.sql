-- 상품 노출 토글(enabled) 변경을 이력에 남긴다.
-- 지금까지 product_setting_history는 금액·통화·서체 수만 기록해서, 상품을 내렸다 올린 기록은
-- 어디에도 남지 않았다. 판매 중단은 매출에 직접 영향을 주는 조작이라 누가 언제 했는지 추적돼야 한다.
alter table public.product_setting_history
  add column if not exists old_enabled boolean,
  add column if not exists new_enabled boolean;
