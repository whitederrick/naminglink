# D-letters — 사주링크 입문 문서 `saju-letters` + 허브 도입 도구 (2026-10-13)

스크립트의 `C:/Users/white/.../scratchpad/letters` 는 그날의 임시 폴더다(`fill/` `tr/` `tr-hub/` `review/` `doc/` `doc-hub/`).

1. `extract-fill.mts <폴더>/fill` (apps/sajulink 에서 `npx tsx`) — 각 로케일 `stem-gap`·`zodiac`·사전 꼬리표에서 표 값 추출.
2. `build.mjs leaves <폴더>` / `build-hub.mjs leaves <폴더>` — 번역할 잎. 번역은 `tr/<loc>.json` · `tr-hub/<loc>.json`.
3. 독립 검토 → `review/<loc>.fixes.json`·`.hub-fixes.json` → `merge-fixes.mjs <폴더> <loc…>`.
4. `build.mjs assemble` · `build-hub.mjs assemble` → `insert-docs.mjs`(tools-saju) · `build-hub.mjs insert`. 줄끝은 LF 여야 한다.
5. 끝난 뒤 tools-saju/README.md 8번의 검사기.

기존 문서의 표를 고치면(예: 띠 표) 1번부터 다시 돌려 새 문서의 표를 맞춘다.
