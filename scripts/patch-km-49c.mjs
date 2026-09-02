// **`patch-km-49b.mjs` 가 고친 상처의 영어 쪽 절반.** 한국어를 고치자 극성 하니스
// (`verify-dream-context-parity`)가 「벌 — 쏘임」 쌍에서 **빨간불을 냈다.**
//
//   ko "벌에 쏘였다"      → 벌에 쏘임(밀러, 흉)        ← 49b 로 고쳐진 뒤
//   en "a bee stung me"  → 벌이 사람의 다리를 쏨(주공, 길)
//
// **이것이 CLAUDE.md §28 이 말한 그 자리다** — 겹침이 있는 동안에는 ko·en 이 **둘 다 같은
// 엉뚱한 뜻**으로 가서 짝이 맞았고, 그래서 관문이 초록불이었다. 한쪽을 바로잡는 순간
// 어긋남이 드러난다. **이 쌍은 이번 배치가 깨뜨린 것이 아니라, 이번 배치가 눈을 뜨게 한 것이다.**
//
// 영어도 병이 같다 — 넓은 활용형("stung"·"sting")을 **다리에 한정된 주공해몽 쪽**이 쥐고
// 있었다. 임자에게 돌려준다:
//
//   벌에 쏘임(밀러)            "bitten venom painful hurt"   → "stung sting" 을 더한다
//   벌이 사람의 다리를 쏨(주공)  "stung sting stinging leg"    → 다리에 매인 말만 남긴다
//
// **첫 판에는 「stinging」을 남겼다가 `verify-dream-km` 이 빨간불을 냈다** — 「sting」이
// 「stinging」의 부분 문자열이라 동점 위험이다(§30 곁가지의 영어판, 배치 43의 red ⊂ covered 와
// 같은 자리). 다리 쪽에는 **다리에 매인 말만** 남긴다.
//
// **한 번만 돌린다.** 옛 값이 그대로가 아니면 멈춘다(exit 2).
// 실행: node scripts/patch-km-49c.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.resolve("apps/dreamslink/data-sources/extract/km4.json");

/** [상징, 문맥, 지금 값(이대로여야 한다), 바꿀 값] */
const EDITS = [
  ["bee", "벌에 쏘임", "bitten venom painful hurt", "stung sting bitten venom painful hurt"],
  ["bee", "벌이 사람의 다리를 쏨", "stung sting stinging leg", "leg foot ankle"],
];

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const rows = JSON.parse(readFileSync(FILE, "utf8"));

for (const [id, ctx, before, after] of EDITS) {
  const row = rows.find((r) => r.id === id);
  if (!row) stop(`km4.json 에 ${id} 가 없다 — 파일이 바뀌었다.`);
  const now = row.contexts_en?.[ctx];
  if (now === undefined) stop(`${id}: 영어 문맥 「${ctx}」가 없다 — 파일이 바뀌었다.`);
  if (now !== before) {
    stop(`${id}: 「${ctx}」의 영어 판별어가 예상과 다르다.\n  지금: ${now}\n  예상: ${before}`);
  }
  row.contexts_en[ctx] = after;
}

writeFileSync(FILE, JSON.stringify(rows, null, 2) + "\n", "utf8");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(FILE, "utf8"));
for (const [id, ctx, , after] of EDITS) {
  const row = again.find((r) => r.id === id);
  if (row.contexts_en[ctx] !== after) stop(`확인 실패: ${id} 의 「${ctx}」가 안 바뀌었다.`);
}

console.log(`km4.json 고침 — 영어 판별어 ${EDITS.length}자리. 되읽어 확인함.`);
