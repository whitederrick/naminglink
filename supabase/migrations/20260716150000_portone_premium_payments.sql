create unique index if not exists orders_provider_payment_id_unique_idx
  on public.orders (provider_payment_id)
  where provider_payment_id is not null;

create index if not exists premium_sessions_order_status_idx
  on public.premium_analysis_sessions (order_id, status);

create index if not exists payment_webhook_processing_idx
  on public.payment_webhook_events (provider, processing_status, created_at);

comment on column public.orders.provider_payment_id is
  '고객사가 채번한 포트원 V2 paymentId. 실제 결제 상태와 금액은 서버 조회로 재검증한다.';

comment on table public.payment_webhook_events is
  '서명 검증된 결제 웹훅의 멱등 처리 기록. 원문 결제정보 대신 이벤트 식별자와 SHA-256만 보관한다.';
