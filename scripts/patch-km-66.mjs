// **배치 66(밀러 Ironing~Ivy)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 넷은 `kmm66.json` 에 있다 — island(섬)·itch(가려움)·ivory(상아)·ivy(담쟁이).
//
//   km7  iron(다리미)  ← 밀러 `Ironing` 넷. **판별어 표가 비어 있었다**
//
// ## `iron` 이라는 id 는 「다리미」의 것이다
//
// 배치 65에서 밀러 `Iron`(쇠붙이)을 `iron-2` 에 붙였다. **밀러 `Ironing` 이 이 `iron` 자리다** —
// ⓪ grep 이 「다림질」을 EXACT 로 찍었고 영어 별칭에도 `ironing` 이 이미 있다.
//
// ## 판별어 표가 비어 있으므로 **기존 의미까지 채운다**(배치 35·62~65와 같다)
//
// 「다리미에 불이 담겨 있음」이 이 상징의 기본값이므로 **좁게** 적는다(§30 곁가지).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-66.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

// 「다림질」+「하」는 조사가 아니라 막힌다 — 활용형을 함께 올린다(§29 곁가지 ①).
// 「다림질하」+「다」도 막힌다 — 「다」는 조사가 아니다. **완전한 꼴까지 올린다**(프로브가 잡았다).
const ADD_ALIAS = ["다림질하다", "다림질하", "다림질한", "다림질을", "다리미가", "다리미를"];

const ADD_KO = {
  // 기존 주공해몽 의미 — 기본값이므로 좁게.
  "다리미에 불이 담겨 있음": "불이 담겨 숯불",
  "다림질을 함": "다림질을 다렸다 폈다",
  "다림질하다 손을 뎀": "손을 데었 데어",
  "다림질하다 옷을 눌어붙게 태움": "눌어 태웠 그을",
  "다리미가 너무 차가움": "차가워 차가웠 식어 싸늘",
};
const ADD_EN = {
  "다리미에 불이 담겨 있음": "coals charcoal",
  "다림질을 함": "domestic comforts orderly",
  "다림질하다 손을 뎀": "burns hands illness jealousy disturb",
  // 「clothes」는 `iron` 의 영어 별칭 「clothes iron」에 들어 있어 제 이름이 된다 — 뺐다.
  "다림질하다 옷을 눌어붙게 태움": "scorches rival displeasure suspicions",
  "다리미가 너무 차가움": "cold lack affection home",
};

const p = path.join(DIR, "km7.json");
const rows = JSON.parse(readFileSync(p, "utf8"));
const row = rows.find((r) => r.id === "iron");
if (!row) stop("km7.json 에 iron 이 없다 — 파일이 바뀌었다.");

for (const w of ADD_ALIAS) {
  if (row.aliases.includes(w)) stop(`iron: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.aliases.push(w);
}
for (const [k, v] of Object.entries(ADD_KO)) {
  if (k in row.contexts) stop(`iron: 판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.contexts[k] = v;
}
for (const [k, v] of Object.entries(ADD_EN)) {
  if (k in row.contexts_en) stop(`iron: 영어 판별어 「${k}」가 이미 있다.`);
  row.contexts_en[k] = v;
}
writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.log("km7.json 고침 — iron 에 별칭 다섯 · 판별어 다섯");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(p, "utf8")).find((r) => r.id === "iron");
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
