-- 신고 채널을 형제 셋(inyeonlink·sajulink·dreamslink)에 이식하면서 뒤늦게 드러난 것 —
-- `locale_reports`는 네 앱이 공유하는 하나의 표인데 어느 앱의 신고인지 구분할 컬럼이 없었다.
-- `orders.service`·`ai_usage_logs.app`과 같은 갈래다. 지금은 naminglink 신고 1건뿐이라
-- 백필 뒤 바로 기본값을 뗀다(20260728110000_test_flag_drop_default.sql과 같은 절차를
-- 한 마이그레이션에 합쳤다 — 코드도 이 커밋에서 함께 service를 명시하게 고치므로 옛 코드가
-- 컬럼을 빠뜨리는 창이 없다).
alter table public.locale_reports add column service text not null default 'naminglink';
alter table public.locale_reports alter column service drop default;

create index if not exists locale_reports_service_status_idx
  on public.locale_reports (service, status, created_at);
