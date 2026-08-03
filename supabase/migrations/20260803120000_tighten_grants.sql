-- 전수 감사(2026-08-03)에서 나온 권한 두 자리를 조인다.
--
-- **둘 다 지금 뚫려 있던 것은 아니다.** 하나는 RLS가 막고 있었고 하나는 피해가 작다.
-- 다만 둘 다 이 저장소가 다른 모든 자리에서 지키는 규칙에서 **혼자만 빠져 있던** 것이고,
-- 그런 예외는 나중에 "여기는 원래 이래도 되나 보다"가 된다.

-- ────────────────────────────────────────────────────────────────────────────
-- 1. admin_pii_access_logs — 감사받는 쪽이 지울 수 있는 로그는 로그가 아니다
--
-- 이 표는 관리자가 배송지(개인정보)를 언제 열어 봤는지 남기는 감사 기록이다. 만든
-- 마이그레이션(20260727150000)은 RLS만 켜고 **revoke를 빠뜨렸다.** 그래서 anon과
-- authenticated에 DELETE·UPDATE·TRUNCATE까지 그대로 남아 있었다.
--
-- 지금 당장 뚫리지는 않는다 — RLS가 켜져 있고 정책이 0개라 전부 거부된다. 문제는 **정책이
-- 하나라도 생기는 순간 열린다**는 것이고, 하필 감사 로그다. rate_limit_counters·unlock_tickets
-- 등 이 저장소의 다른 표는 전부 revoke가 붙어 있다. 그 규칙에 맞춘다.
--
-- 쓰는 곳은 `api/admin/orders/shipping`(service_role) 한 곳뿐이라 동작에 영향이 없다.
revoke all on public.admin_pii_access_logs from anon, authenticated;
grant all on public.admin_pii_access_logs to service_role;

-- ────────────────────────────────────────────────────────────────────────────
-- 2. increment_font_picks — 인증 없이 부를 수 있는 쓰기 함수
--
-- SECURITY DEFINER 함수인데 EXECUTE가 anon·authenticated에 열려 있었다(Postgres가 함수에
-- PUBLIC EXECUTE를 기본으로 주는 것을 revoke하지 않은 것이다). **anon 키는 클라이언트 번들에
-- 들어 있는 공개값이라**, 누구나 이 RPC를 직접 불러 서체 인기순위(`pick_count`)를 무제한
-- 올릴 수 있었다.
--
-- 부르는 곳은 `api/premium-reports/global-order`(service_role) 한 곳뿐이라 이 권한 자체가
-- 필요 없었다. 같은 저장소의 다른 SECURITY DEFINER 함수 6개는 전부 service_role 전용이다 —
-- 이것만 예외였다.
revoke all on function public.increment_font_picks(text[])
  from public, anon, authenticated;
grant execute on function public.increment_font_picks(text[]) to service_role;
