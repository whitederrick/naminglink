-- `20260728100000_test_data_isolation.sql`의 뒷짝. **코드 배포가 끝난 뒤에 적용한다.**
--
-- 앞 마이그레이션은 옛 코드가 주문을 계속 만들 수 있도록 `default false`를 달아 뒀다. 새 코드가
-- 모든 INSERT에서 `is_test`를 명시하게 된 다음에는 그 기본값이 **안전장치가 아니라 함정**이다 —
-- 나중에 상품이 늘어 새 주문 라우트가 생겼을 때 컬럼을 빠뜨려도 조용히 운영 행이 되어 버린다.
--
-- 기본값을 떼면 그 실수가 INSERT 에러로 즉시 드러난다. 개발자가 로컬에서 처음 돌리는 순간
-- 걸리므로 운영까지 갈 수 없다.
alter table public.orders alter column is_test drop default;
alter table public.premium_analysis_sessions alter column is_test drop default;
