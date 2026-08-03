-- 닿지 않는 공개 읽기 정책을 걷어낸다.
--
-- `official_*` 표에는 "Anyone can read production …"이라는 SELECT 정책이 `public` 역할로
-- 걸려 있었다. 그런데 **그 역할에는 테이블 GRANT가 없다.** Postgres에서 RLS 정책은 GRANT
-- 위에 얹히는 것이라, GRANT가 없으면 정책이 무엇을 허용하든 닿지 않는다. 즉 이 정책들은
-- 처음부터 아무 일도 하지 않고 있었다.
--
-- **왜 지우는가.** 남겨 두면 이름이 거짓말을 한다 — "Anyone can read"라고 적혀 있으니 다음
-- 사람은 이 표가 공개라고 읽는다. 그러다 누가 편의로 GRANT 한 줄을 주면 그 순간 9,938행짜리
-- 손질된 자료가 브라우저 키로 통째로 열린다. 정책이 없으면 GRANT만으로는 아무것도 못 읽으므로
-- (RLS 켜짐 + 정책 없음 = 전부 거부) 지우는 쪽이 더 안전하다.
--
-- **동작에 영향이 없다.** 화면에 쓰이는 조회는 전부 서버에서 service_role로 돈다
-- (`lib/hanja-guide-data.ts`, `lib/official-hanja-db.ts`, `lib/guide-data.ts`,
-- `api/hanja/surname`). service_role은 RLS를 통과하므로 정책 유무와 무관하다.
-- 확인: 2026-08-03 전수 감사에서 `/ko/guide/hanja/ga`가 한자 4,175자를 정상 렌더했고,
-- `verify-official-database.mjs`가 남 31자·규 38자를 service_role로 조회해 통과했다.

drop policy if exists "Anyone can read production Hanja entries" on public.official_hanja_entries;
drop policy if exists "Anyone can read active production Hanja rules" on public.official_hanja_rules;
drop policy if exists "Anyone can read production Hanja sources" on public.official_hanja_sources;
drop policy if exists "Anyone can read production Hanja variants" on public.official_hanja_variants;
drop policy if exists "Anyone can read production pronunciation entries"
  on public.official_pronunciation_entries;

-- 혹시 남아 있을 수 있는 브라우저 역할 권한도 함께 정리한다(지금은 없지만, 이 표들이
-- 서버를 거쳐서만 나간다는 것을 GRANT 층에도 못 박아 둔다).
revoke all on public.official_hanja_entries from anon, authenticated;
revoke all on public.official_hanja_rules from anon, authenticated;
revoke all on public.official_hanja_sources from anon, authenticated;
revoke all on public.official_hanja_variants from anon, authenticated;
revoke all on public.official_pronunciation_entries from anon, authenticated;
revoke all on public.official_pronunciation_sources from anon, authenticated;
revoke all on public.official_pronunciation_chunks from anon, authenticated;
