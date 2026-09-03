// **배치 70(밀러 Jewelry·Jewels)은 새 상징을 하나도 안 세운다.**
//
//   km6  jade(옥)  ← 밀러 `Jewels` 아홉 + `Jewelry` 둘
//
// ## 왜 새 상징을 안 세웠나 — 「보석」의 임자가 이미 `jade` 다
//
// ⓪ grep 이 「보석」을 `jade` 의 별칭으로 찍었고, **`jade` 에는 이미 밀러 `Gems` 의
// 「보석을 봄」이 붙어 있다.** 새 `jewels` 상징을 세우고 「보석」을 넘기면 그 `Gems` 의미가
// **이용자의 「보석」으로는 안 걸리게 된다** — 임자에게 붙이는 것이 답이다(§25 곁가지).
//
// ## 안 넣은 문장 둘 — **커버리지가 아니라 문장 단위로 빈다**(§24·§31 곁가지)
//
//   Jewels 첫 문장  「To dream of jewels, denotes much pleasure and riches.」
//                   → `jade` 의 「보석을 봄」(밀러 `Gems`)과 **그림도 이름도 같다.** 같은
//                     이름으로 적으면 `work` 는 같지만 문장이 달라 인용만 포개지고, 다른
//                     이름으로 적으면 판별어를 가를 수 없다
//   Jewels 「To give jewels away…」
//                   → 바로 앞의 「To dream of giving jewelry away…」와 **같은 그림**이다.
//                     밀러가 한 표제어 안에서 되풀이한 자리다
//
// ## 판별어를 고를 때 부딪친 자리
//
// `jade` 는 이미 다섯이고 「금은과 주옥을 봄」이 기본값이다. 새 열하나가 **「보석」이라는 같은
// 낱말을 두고 갈리므로** 판별어는 **몸짓과 상태**로만 적었다(지녔·물려받·잃었·찾아냈·샀다·
// 깨진·삭아). 「보석」 자체는 어느 쪽에도 주지 않는다 — 주면 전부 동점이 된다(§30 곁가지).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-70.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

// **옛 상처 둘을 함께 메운다** — `jade` 의 화면 문구 「금은과 주옥을 봄」·「주옥이 품에
// 가득함」이 별칭에 없어 **주공해몽 의미 둘이 한 번도 안 걸리고 있었다**(프로브가 잡았다).
// 「주옥을」의 「옥」은 앞 글자 「주」가 한글이라 `isStandalone` 이 막는다.
const ADD_ALIAS = ["보석을", "보석이", "보석붙이", "패물을", "주옥", "금은"];

// **기존 판별어도 함께 좁힌다**(§30 곁가지) — 「보석을 봄」이 판별어로 「보석」을 쥐고 있어
// 새 열하나를 **전부 동점으로 가로챘다**(프로브가 아홉 건으로 잡았다). 「보석」은 이 상징의
// 이름이나 마찬가지라 어느 의미에도 주면 안 된다.
const NARROW_KO = { "보석을 봄": "패물" };

const ADD_KO = {
  "보석을 몸에 지님": "지녔 걸쳤 차고",
  "남이 보석을 지닌 것을 봄": "남이 남들 다른이",
  "보석으로 꾸민 옷을 봄": "꾸민 옷을 박힌",
  "보석을 물려받음": "물려받 상속",
  "보석을 남에게 줌": "주었 건네 내주",
  // 「받았」은 기존 「옥 그릇과 기물을 얻음」이 이미 쥐고 있다 — 새 쪽에서 뺐다.
  "처녀가 보석을 받음": "처녀 아가씨 선물로",
  "보석을 잃음": "잃었 잃어 잃고",
  "보석을 찾아냄": "찾아냈 주웠 발견",
  "보석을 삼": "샀다 사들 장만",
  "깨진 보석붙이를 봄": "깨진 깨졌 부서",
  "보석붙이가 삭아 있음": "삭아 녹슬 빛바랜",
};
const ADD_EN = {
  // 「wear」는 형제의 「wearing」에 물린다 — 뺐다.
  "보석을 몸에 지님": "rank satisfied ambitions",
  "남이 보석을 지닌 것을 봄": "others wearing distinguished places",
  "보석으로 꾸민 옷을 봄": "jeweled garments betokens rare",
  "보석을 물려받음": "inherit prosperity unusual entirely",
  "보석을 남에게 줌": "giving away warns vital estate threatening",
  "처녀가 보석을 받음": "receives desirable marriage",
  "보석을 잃음": "loses flatter deceive",
  "보석을 찾아냄": "find rapid brilliant advancement",
  "보석을 삼": "buy momentous pertaining heart",
  "깨진 보석붙이를 봄": "broken keen disappointment attaining highest",
  "보석붙이가 삭아 있음": "cankered trusted fail cares",
};

const p = path.join(DIR, "km6.json");
const rows = JSON.parse(readFileSync(p, "utf8"));
const row = rows.find((r) => r.id === "jade");
if (!row) stop("km6.json 에 jade 가 없다 — 파일이 바뀌었다.");

for (const w of ADD_ALIAS) {
  if (row.aliases.includes(w)) stop(`jade: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.aliases.push(w);
}
for (const [k, v] of Object.entries(NARROW_KO)) {
  if (!(k in row.contexts)) stop(`jade: 좁힐 판별어 「${k}」가 없다 — 파일이 바뀌었다.`);
  if (row.contexts[k] === v) stop(`jade: 「${k}」가 이미 좁혀져 있다 — 이미 돌린 것 같다.`);
  row.contexts[k] = v;
}
for (const [k, v] of Object.entries(ADD_KO)) {
  if (k in row.contexts) stop(`jade: 판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.contexts[k] = v;
}
for (const [k, v] of Object.entries(ADD_EN)) {
  if (k in row.contexts_en) stop(`jade: 영어 판별어 「${k}」가 이미 있다.`);
  row.contexts_en[k] = v;
}
writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.log("km6.json 고침 — jade 에 별칭 넷 · 판별어 열하나");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(p, "utf8")).find((r) => r.id === "jade");
for (const w of ADD_ALIAS) {
  if (!again.aliases.includes(w)) stop(`확인 실패: 별칭 「${w}」가 안 들어갔다.`);
}
for (const [k, v] of Object.entries(NARROW_KO)) {
  if (again.contexts[k] !== v) stop(`확인 실패: 「${k}」가 안 좁혀졌다.`);
}
for (const [k, v] of Object.entries(ADD_KO)) {
  if (again.contexts[k] !== v) stop(`확인 실패: 「${k}」의 한국어 판별어가 안 들어갔다.`);
}
for (const [k, v] of Object.entries(ADD_EN)) {
  if (again.contexts_en[k] !== v) stop(`확인 실패: 「${k}」의 영어 판별어가 안 들어갔다.`);
}
console.log("되읽어 확인함.");
