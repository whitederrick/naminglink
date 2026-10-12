# tools-saju — 사주링크 사전 82편(천간 10 · 지지 12 · 일주 60) 도구

2026-10-12 작업. 스크립트의 경로(`C:/Users/white/.../scratchpad/saju/...`)는 그날의 임시 폴더다 — 다시 쓰려면 경로를
바꾼다. 절차만 남긴다.

1. `gen-saju-82.mts <출력폴더>` — 엔진(`packages/core/src/saju/elements.ts`·`ten-gods.ts`)과 제품 사전(ko·en)에서
   한·영 원문을 한 번에 만든다. 사실 단언(십신 10가지 서로 다름 · 지장간 일수 합 30 · 한·영 구조 일치) 후 쓴다.
   `saju82.{ko,en}.json` · `dicts.json` · `hidden-shares.json` · `saju82.ko.md`.
2. `register-saju.mjs` — `guide-index.ts`·`page.tsx` 82개·`doc-values.ts` 등록(이미 등록돼 있으면 던진다).
3. `insert-docs.mjs <대상.ts> <docs.json> [ko]` — 앵커 `"guide/ten-gods": {` 앞에 문서를 넣는다. **줄끝이 LF 여야 한다**
   (`git checkout` 뒤에는 autocrlf 로 CRLF 가 된다).
4. `prep-saju.mjs` — 잎을 **토큰 골격**으로 줄인다(`{{S1}}` 일간 이름 · `{{c1}}` 한자 · `{{n1}}` 숫자 · `{{L1}}` 링크 ·
   `{{TRAIT}}` 성향 문구 · `{{G:KEY}}` 십신 이름 칸). 같은 골격은 한 번만 번역한다(3,923잎 → 260).
5. `make-glossary.mts`(번역가용 용어집) · `make-traits.mts`(채움용 일간 이름·성향 문구·십신 이름).
6. 번역(에이전트, 언어별 `tr/<loc>.json`) → `validate-unique.mjs <loc>` → **독립 검토**(`review/<loc>.fixes.json`) →
   `merge-fixes.mjs` → `validate-unique.mjs` 다시.
7. `apply-saju.mjs check|insert <로케일…>` — 토큰을 제품 사전으로 채우고(성향 문구는 글자 그대로) 21개 언어에 넣는다.
8. 끝난 뒤: `tsc --noEmit`(apps/sajulink) · `verify-doc-stages`·`verify-doc-locales`·`verify-locale-script`·
   `verify-guide-docs`·`verify-doc-source-safe`·`verify-route-locales`·`verify-locale-maps` ·
   `apps/sajulink/scripts/verify-guide-numbers.ts`(`NODE_OPTIONS=--conditions=react-server` ·
   `--tsconfig scripts/tsconfig.sweep.json`).

**배운 것:** 템플릿으로 조립한 번역은 검사기 통과만으로 부족하다 — 독립 검토가 516문자열을 고쳤다. 한자는 검사기가
번역문에 직접 못 쓰게 막으므로 `Wang (旺)` 같은 병기가 필요하면 **토큰으로 설계**해 둘 것.
