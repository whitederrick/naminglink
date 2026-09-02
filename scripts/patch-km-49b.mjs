// **배치 49의 프로브가 곁에서 찾은 「원래 나 있던 상처」를 고친다 — 이번 배치가 만든 것이 아니다.**
//
// 「벌에 쏘였다」가 **주공해몽의 「벌이 사람의 다리를 쏨」(길)로 갔다.** 밀러의 「벌에 쏘임」
// (흉)이 맞는 자리다. 원인은 두 판별어가 활용형을 잘못 나눠 가진 것이다:
//
//   벌에 쏘임(밀러)            "쏘인 쏘이 벌침 물렸"      ← 「쏘였다」에 안 걸린다(쏘였 ≠ 쏘이)
//   벌이 사람의 다리를 쏨(주공)  "쏘였 쏘여 쏘았 다리를"    ← 넓은 활용형을 이쪽이 쥐고 있었다
//
// **언제부터인지는 이 배치와 무관하다** — `bee` 의 판별어는 배치 49가 건드리지 않았고
// (별칭 「말벌」·"wasp" 만 `hornet` 에게 넘겼다), 한국어 판별어는 별칭 임자와 무관하게 산다.
// 프로브에 「옛 답이 그대로인지」 재는 지킴 케이스를 넣었더니 그 자리에서 드러났다.
//
// 고침은 **활용형을 임자에게 돌려주는 것**이다(§25 곁가지 — 넓은 쪽에서 좁은 문장에도 있는
// 낱말을 뺀다). 「다리를」이 든 문장은 주공해몽 쪽이 「다리를」·「쏘았」 둘로 이기고, 그냥
// 「쏘였다」는 밀러 쪽만 걸린다:
//
//   「벌에 쏘였다」          밀러 1점(쏘였)  ·  주공 0점   → 벌에 쏘임        ✓
//   「벌이 다리를 쏘았다」    밀러 0점       ·  주공 2점   → 다리를 쏨        ✓
//
// **한 번만 돌린다.** 옛 값이 그대로가 아니면 멈춘다(exit 2).
// 실행: node scripts/patch-km-49b.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.resolve("apps/dreamslink/data-sources/extract/km4.json");

/** [상징, 문맥, 지금 값(이대로여야 한다), 바꿀 값] */
const EDITS = [
  ["bee", "벌에 쏘임", "쏘인 쏘이 벌침 물렸", "쏘였 쏘여 쏘인 쏘이 벌침 물렸"],
  ["bee", "벌이 사람의 다리를 쏨", "쏘였 쏘여 쏘았 다리를", "쏘았 다리를 발등"],
];

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const rows = JSON.parse(readFileSync(FILE, "utf8"));

for (const [id, ctx, before, after] of EDITS) {
  const row = rows.find((r) => r.id === id);
  if (!row) stop(`km4.json 에 ${id} 가 없다 — 파일이 바뀌었다.`);
  const now = row.contexts?.[ctx];
  if (now === undefined) stop(`${id}: 문맥 「${ctx}」가 없다 — 파일이 바뀌었다.`);
  if (now !== before) {
    stop(`${id}: 「${ctx}」의 판별어가 예상과 다르다.\n  지금: ${now}\n  예상: ${before}`);
  }
  row.contexts[ctx] = after;
}

writeFileSync(FILE, JSON.stringify(rows, null, 2) + "\n", "utf8");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(FILE, "utf8"));
for (const [id, ctx, , after] of EDITS) {
  const row = again.find((r) => r.id === id);
  if (row.contexts[ctx] !== after) stop(`확인 실패: ${id} 의 「${ctx}」가 안 바뀌었다.`);
}

console.log(`km4.json 고침 — 판별어 ${EDITS.length}자리. 되읽어 확인함.`);
