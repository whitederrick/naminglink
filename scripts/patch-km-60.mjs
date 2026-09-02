// **배치 60(밀러 Inauguration~Independent)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 다섯은 `kmm60.json` 에 있다 — inauguration(취임식)·incoherency(횡설수설)·
// income(수입)·increase(늘어남)·independent(자립).
//
//   kmm30  enchantment(마법에 홀림)  ← 밀러 `Incantation` 둘
//
// ## 왜 새 상징을 안 세웠나
//
// ⓪ grep 에서 「주술」이 **`enchantment` 의 별칭 「주술에」와 부딪쳤다.** 「주술을 부렸다」에
// 새 상징을 세우면 「주술에」는 안 걸리지만, 이용자가 「주술에 걸렸다」라고 쓰는 순간 둘이
// 같은 낱말을 두고 다툰다 — **「주술」 계열은 `enchantment` 가 이미 임자다**(§25 곁가지).
// 밀러가 `Enchantment` 와 `Incantation` 을 따로 두었어도 한국어에서는 한 상징이 맞다.
//
// 「주문」은 물건을 시키는 뜻으로도 읽혀 상징 이름으로 못 쓴다 — **별칭에만** 올린다.
//
// ## 판별어
//
// 기존 셋(「홀려 걸려 씌어」·「뿌리쳤…」·「남을 홀리려 부리려」)과 낱말이 안 겹친다.
// 새 둘은 **「제가」 대 「남들이」**로 갈린다 — 기존 「남을 홀리려 함」이 「남을」을 쥐고
// 있으므로 새 것은 「남들이」로 적어 부딪치지 않게 했다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-60.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const ADD_ALIAS = ["주술을", "주술로", "주문을 욈", "주문을 외웠다", "주문을 외는"];

const ADD_KO = {
  "제가 주술을 욈": "제가 내가 욌다",
  "남들이 주술을 되뇌는 것을 들음": "남들이 되뇌 중얼거리는 것을 들었다",
};
const ADD_EN = {
  "제가 주술을 욈": "using incantations unpleasantness husband sweethearts",
  // 「hear」는 형제의 「sweet*hear*ts」에 물린다(`verify-dream-km` 이 잡았다) — 뺐다.
  "남들이 주술을 되뇌는 것을 들음": "others repeating implies dissembling",
};

const p = path.join(DIR, "kmm30.json");
const rows = JSON.parse(readFileSync(p, "utf8"));
const row = rows.find((r) => r.id === "enchantment");
if (!row) stop("kmm30.json 에 enchantment 가 없다 — 파일이 바뀌었다.");

for (const w of ADD_ALIAS) {
  if (row.aliases.includes(w)) stop(`enchantment: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.aliases.push(w);
}
for (const [k, v] of Object.entries(ADD_KO)) {
  if (k in row.contexts) stop(`enchantment: 판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.contexts[k] = v;
}
for (const [k, v] of Object.entries(ADD_EN)) {
  if (k in row.contexts_en) stop(`enchantment: 영어 판별어 「${k}」가 이미 있다.`);
  row.contexts_en[k] = v;
}
writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.log("kmm30.json 고침 — enchantment 에 별칭 다섯 · 판별어 둘");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(p, "utf8")).find((r) => r.id === "enchantment");
for (const w of ADD_ALIAS) {
  if (!again.aliases.includes(w)) stop(`확인 실패: 별칭 「${w}」가 안 들어갔다.`);
}
for (const [k, v] of Object.entries(ADD_KO)) {
  if (again.contexts[k] !== v) stop(`확인 실패: 「${k}」의 한국어 판별어가 안 들어갔다.`);
}
for (const [k, v] of Object.entries(ADD_EN)) {
  if (again.contexts_en[k] !== v) stop(`확인 실패: 「${k}」의 영어 판별어가 안 들어갔다.`);
}
console.log("되읽어 확인함.");
