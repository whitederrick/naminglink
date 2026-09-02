// **배치 53(밀러 Horseshoe~Hotel)이 이미 있는 상징 하나를 건드린다 — `horse`(말).**
//
// 새 상징 넷은 `kmm53.json` 에 있다 — `horseshoe`(편자) · `horseradish`(서양고추냉이) ·
// `hospital`(병원) · `hotel`(여관).
//
// **밀러 `Horse-trader` 는 상징을 세우지 않고 `horse` 에 붙였다.** 「말 장수」가 「말」을
// **부분 문자열로 품기** 때문이다 — 새 상징을 세우면 「말 장수를 보았다」가 두 상징에 걸리고,
// `horse` 쪽은 판별어가 하나도 안 걸려 **기본값(엉뚱한 답)**을 함께 띄운다(§25 곁가지).
// 붙이면 `horse` 가 제 뜻을 낸다. `horse` 는 쉰다섯에서 **쉰여덟 의미**가 된다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-53.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.resolve("apps/dreamslink/data-sources/extract/km8.json");

const CONTEXTS_ADD = {
  "말을 바꾸다 장수에게 속음": "속았 속임 바꾸다",
  "바꾼 말이 먼저 것보다 나음": "나은 더좋은 바꾼",
  "말 장수를 봄": "장수 거간",
};

const CONTEXTS_EN_ADD = {
  "말을 바꾸다 장수에게 속음": "cheats lose",
  "바꾼 말이 먼저 것보다 나음": "better traded",
  "말 장수를 봄": "perilous ventures",
};

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const rows = JSON.parse(readFileSync(FILE, "utf8"));
const row = rows.find((r) => r.id === "horse");
if (!row) stop("km8.json 에 horse 가 없다 — 파일이 바뀌었다.");

let changed = 0;
for (const [k, v] of Object.entries(CONTEXTS_ADD)) {
  if (k in row.contexts) stop(`판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.contexts[k] = v;
  changed++;
}
for (const [k, v] of Object.entries(CONTEXTS_EN_ADD)) {
  if (k in row.contexts_en) stop(`영어 판별어 「${k}」가 이미 있다.`);
  row.contexts_en[k] = v;
  changed++;
}

writeFileSync(FILE, JSON.stringify(rows, null, 2) + "\n", "utf8");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(FILE, "utf8")).find((r) => r.id === "horse");
for (const k of Object.keys(CONTEXTS_ADD)) {
  if (!(k in again.contexts)) stop(`확인 실패: 「${k}」가 안 들어갔다.`);
  if (!(k in again.contexts_en)) stop(`확인 실패: 「${k}」의 영어가 안 들어갔다.`);
}

console.log(`km8.json 고침 — 고친 자리 ${changed}개. 되읽어 확인함.`);
