// **배치 68(밀러 January~Jay-bird)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 다섯은 `kmm68.json` 에 있다 — january(정월)·jaundice(황달)·javelin(투창)·
// jaws(턱)·jay-bird(어치).
//
//   km4  jar(항아리)  ← 밀러 `Jar` 넷. **판별어 표가 비어 있었다**
//
// ## 왜 새 상징을 안 세웠나
//
// ⓪ grep 이 「항아리」를 EXACT 로 셋(`basin`·`vessel`·`jar`) 찍었고 그 가운데 **`jar` 가
// 이름 그대로의 임자**다. 「단지」·「옹기」도 이미 그 셋이 나눠 쥐고 있다.
//
// ## 판별어 표가 비어 있으므로 **기존 의미까지 채운다**(배치 35·62~66과 같다)
//
// 「항아리 안으로 들어감」이 이 상징의 기본값이므로 **좁게** 적는다(§30 곁가지).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-68.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const ADD_ALIAS = ["항아리가", "항아리를", "독이", "장독"];

const ADD_KO = {
  // 기존 주공해몽 의미 — 기본값이므로 좁게.
  "항아리 안으로 들어감": "안으로 들어갔",
  // 「빈」은 한 글자라 엔진이 안 센다(`audit-km-dead-words`).
  "빈 항아리를 봄": "비어 텅빈 비었다",
  "가득 찬 항아리를 봄": "가득 그득 채워",
  "항아리를 삼": "샀다 사들 장만",
  "깨진 항아리를 봄": "깨진 깨졌 금이",
};
const ADD_EN = {
  "항아리 안으로 들어감": "climbed inside",
  // 「distress」는 형제의 「distressing」에 물린다 — 뺐다.
  "빈 항아리를 봄": "empty impoverishment",
  "가득 찬 항아리를 봄": "full successful",
  "항아리를 삼": "buy precarious burden heavy",
  "깨진 항아리를 봄": "broken distressing sickness deep disappointment",
};

const p = path.join(DIR, "km4.json");
const rows = JSON.parse(readFileSync(p, "utf8"));
const row = rows.find((r) => r.id === "jar");
if (!row) stop("km4.json 에 jar 가 없다 — 파일이 바뀌었다.");

for (const w of ADD_ALIAS) {
  if (row.aliases.includes(w)) stop(`jar: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.aliases.push(w);
}
for (const [k, v] of Object.entries(ADD_KO)) {
  if (k in row.contexts) stop(`jar: 판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.contexts[k] = v;
}
for (const [k, v] of Object.entries(ADD_EN)) {
  if (k in row.contexts_en) stop(`jar: 영어 판별어 「${k}」가 이미 있다.`);
  row.contexts_en[k] = v;
}
writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.log("km4.json 고침 — jar 에 별칭 넷 · 판별어 다섯");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(p, "utf8")).find((r) => r.id === "jar");
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
