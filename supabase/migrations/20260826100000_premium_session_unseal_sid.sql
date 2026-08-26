-- 프리미엄 세션도 결과 한 벌에만 후보 잠금해제를 묶는다.
--
-- orders.metadata->>'unsealSid'로 이미 하던 것(주문 하나 = 결과 한 벌)과 같은 결속을
-- premium_analysis_sessions에도 건다. 지금까지는 이 컬럼이 없어 /api/candidates/unseal-all의
-- premium 분기가 어느 sid에도 결속하지 않았다 — 프리미엄 세션 하나로 얼마든지 다른 무료
-- 결과에 반복 적용할 수 있었다(2026-08-26 코드 리뷰에서 발견).
alter table public.premium_analysis_sessions
  add column if not exists unseal_sid text;
