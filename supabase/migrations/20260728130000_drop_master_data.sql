-- 기준 데이터(master_data) 표를 지운다 (2026-07-28 사용자 확정).
--
-- 2026-07-14에 "설정을 한곳에 모으자"는 생각으로 9개 분류의 범용 JSON 창고를 먼저 만들었다.
-- 그 뒤 각 항목이 전용 자리를 갖게 되면서 이 표는 쓰이지 않게 됐다:
--
--   상품·가격  → product_settings          한자 데이터 → official_hanja_entries
--   번역·문구  → 코드의 i18n 사전 23로케일   광고 슬롯   → 환경변수
--   AI 프롬프트 → prompts.ts / OPENAI_MODEL
--
-- 삭제 근거(적용 전 실측):
--   · 서비스 코드에서 이 표를 읽는 곳 0곳 (관리자 화면·API 자기 자신뿐, 그 둘도 이미 지웠다)
--   · 운영 DB 저장 행 0건
--
-- 비어 있는 표를 남겨 두면 "여기서 가격을 바꾸면 되나?" 하고 헷갈리게 만든다. 이력 표를 먼저
-- 지우는 것은 records를 참조하기 때문이다(cascade에 기대지 않고 순서를 명시한다).
drop table if exists public.master_data_revisions;
drop table if exists public.master_data_records;
