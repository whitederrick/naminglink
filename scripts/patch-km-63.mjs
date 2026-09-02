// **배치 63(밀러 Ink-stand~Insolvent)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 여섯은 `kmm63.json` 에 있다 — ink-stand(잉크병)·inn(여인숙)·inquest(검시)·
// inquisition(심문)·insane(정신이 흐려짐)·inscription(새긴 글).
//
//   kmm7  bankrupt(파산)  ← 밀러 `Insolvent` 셋. **판별어 표가 비어 있었다**
//
// ## 왜 `Insolvent` 로 새 상징을 안 세웠나
//
// ⓪ grep 이 「파산」을 EXACT 로 찍었고, `bankrupt` 의 **영어 별칭에 이미 `insolvent` 가
// 들어 있다**. 임자가 분명한 자리다(§25 곁가지).
//
// **반대로 `Inn` 은 새로 세웠다** — 「여관」은 `hotel` 의 것이지만 밀러가 `Hotel` 과 `Inn` 을
// 따로 두고 풀이도 다르다. 이름을 **「여인숙」**으로 지으면 「여관」을 품지 않아 서로 안 뺏는다.
// (「허름한 여관」 같은 별칭은 일부러 안 올렸다 — 그것을 올리면 둘 다 걸린다)
//
// ## 판별어 표가 비어 있으므로 **기존 의미까지 채운다**(배치 35·62와 같은 자리)
//
// 「파산하는 꿈을 꿈」이 이 상징의 기본값이므로 판별어를 **좁게** 적는다(§30 곁가지) —
// 넓은 말을 쥐면 새로 붙인 셋이 동점에서 영영 진다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-63.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

// **별칭도 함께 고친다 — 옛 상처가 하나 있었다.**
// `bankrupt` 의 별칭 「망했」은 뒤의 「다」가 조사가 아니라 **「망했다」에 한 번도 안 걸렸다**
// (§29 곁가지 ①). 「파산」도 「파산했다」·「파산한」에서 막힌다. 그리고 이번에 붙이는 세 의미의
// 이름이 「빚을 갚지 못함」인데 그 꼴을 가진 별칭이 없어 **상징 자체가 안 걸렸다**(프로브가 잡았다).
const ADD_ALIAS = [
  "파산했다", "파산한", "파산하는", "망했다",
  "빚을 갚지 못했다", "빚을 갚지 못하",
];

const ADD_KO = {
  "파산하는 꿈을 꿈": "무너졌 거덜",
  // 「갚지」는 형제 문장에도 다 있다 — 두면 「남이 빚을 갚지 못했다」를 동점으로 가로챈다.
  "제가 빚을 갚지 못함": "제가 내가 나는",
  "남이 빚을 갚지 못함": "남이 남들 다른이",
  "처녀가 그런 꿈을 꿈": "처녀 아가씨 정인이",
};
const ADD_EN = {
  "파산하는 꿈을 꿈": "partial collapse brain faculties",
  "제가 빚을 갚지 못함": "resort square energy pride transact",
  "남이 빚을 갚지 못함": "others honest dealings frankness harm",
  "처녀가 그런 꿈을 꿈": "sweetheart thrifty vexatious discords",
};

const p = path.join(DIR, "kmm7.json");
const rows = JSON.parse(readFileSync(p, "utf8"));
const row = rows.find((r) => r.id === "bankrupt");
if (!row) stop("kmm7.json 에 bankrupt 가 없다 — 파일이 바뀌었다.");

for (const w of ADD_ALIAS) {
  if (row.aliases.includes(w)) stop(`bankrupt: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.aliases.push(w);
}
for (const [k, v] of Object.entries(ADD_KO)) {
  if (k in row.contexts) stop(`bankrupt: 판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.contexts[k] = v;
}
for (const [k, v] of Object.entries(ADD_EN)) {
  if (k in row.contexts_en) stop(`bankrupt: 영어 판별어 「${k}」가 이미 있다.`);
  row.contexts_en[k] = v;
}
writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.log("kmm7.json 고침 — bankrupt 에 판별어 넷");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(p, "utf8")).find((r) => r.id === "bankrupt");
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
