-- 격리 도입 이전에 개발 중 만들어진 주문을 테스트 행으로 돌린다 (2026-07-28 사용자 확정).
--
-- `20260728100000_test_data_isolation.sql`은 기존 행을 전부 `is_test=false`로 채웠다. 그때는
-- 구분이 없었으니 그것이 유일하게 안전한 기본값이었지만, 실제로 남아 있던 4건은 전부 미결제
-- (UNPAID) 상태의 개발 중 시험 주문이라 운영 대시보드에 실주문으로 잡히면 안 된다.
--
-- **조건이 아니라 id로 지목한다.** "미결제이고 이 날짜 이전"처럼 조건으로 쓰면 나중에 이
-- 마이그레이션이 다시 돌 때(새 환경 구성 등) 엉뚱한 행까지 삼킬 수 있다. 대상이 넷뿐이므로
-- 지목하는 편이 안전하고, 그 환경에 그 id가 없으면 아무 일도 일어나지 않는다.
update public.orders
   set is_test = true
 where id in (
   'fdeecf80-0b07-4fcc-87d3-4688883199fc',  -- PREMIUM_PDF   9,900원 2026-07-28 00:48
   '48da0452-6ff2-4131-b09c-e2abd2a7b28c',  -- CANDIDATE_UNLOCK 990원 2026-07-27 09:07
   'f9aa6a1d-969d-4bc1-87d9-ca5335954210',  -- PREMIUM_PDF   9,900원 2026-07-27 09:05
   'c746c7cb-0be9-43f4-85ae-20661b1ab6cb'   -- PREMIUM_PDF   9,900원 2026-07-27 08:55
 );

-- 딸린 분석 세션도 같이 돌린다. 주문과 세션이 갈리면 한쪽 화면에서만 사라져 더 헷갈린다.
update public.premium_analysis_sessions
   set is_test = true
 where order_id in (
   select id from public.orders where is_test = true
 );
