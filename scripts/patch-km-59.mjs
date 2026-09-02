// **배치 59(밀러 Illumination~Imps)가 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 넷은 `kmm59.json` 에 있다 — illumination(환한 빛)·image(형상)·imitation(흉내)·
// implement(연장).
//
//   kmm34  fiend(악귀)  ← 밀러 `Imps` 두 문장
//
// ## 왜 새 상징을 안 세웠나
//
// 「악귀」는 `fiend` 가 이미 쥐고 있고(⓪ grep 이 EXACT 로 찍었다), 「작은 악귀」로 지으면
// **그 이름이 「악귀」를 품어 둘 다 걸린다** — `findTerm` 은 상징마다 따로 돌아 전역 중재가
// 없다(§25 곁가지). 「마귀」도 `fiend`·`devil` 둘이 나눠 쥐고 있고, 「도깨비」는 `ghost` 의
// 것이다. **임자에게 붙이는 것이 답이다.**
//
// ## 판별어를 둘 주는 까닭 — 동점이면 앞의 것이 이긴다
//
// 기존 「악귀를 봄」이 「보았」을 쥐고 있다. 새 「작은 악귀들을 봄」에 낱말 하나만 주면
// 「작은 악귀들을 보았다」가 1:1 동점이 되고, `m59.json` 이 `m34.json` 보다 **뒤에** 정렬되므로
// 새 의미가 배열 뒤에 놓여 진다. **문장에 실제로 있는 낱말 둘**(「작은」·「악귀들」)을 주어
// 2:1 로 이기게 했다 — 형제끼리 「보았」을 나눠 갖는 수는 `verify-dream-km` 이 막는다.
//
// **기존 판별어는 안 건드린다.** 「보았」은 「악귀를 봄」의 것이 맞고, 좁히면 그 의미가
// 제 문장에서 안 뽑힌다(§30 곁가지의 「기존도 함께 좁힌다」는 **겹칠 때**의 이야기다).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-59.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

// **별칭 「악귀들」을 함께 올린다.** term_ko 「악귀」는 「악귀들을」에서 뒤의 「들」이 조사가
// 아니라 `isStandalone` 이 막는다 — 별칭이 없으면 **상징 자체가 안 걸린다**(프로브가 잡았다).
const ADD_ALIAS = ["악귀들"];

// **판별어를 둘씩 갖되 서로 다른 둘을 준다.** 첫 판에 「작은」을 앞엣것에만 주었더니
// 「내가 작은 악귀가 되어 있었다」가 1:1 동점으로 앞엣것에 갔다 — 뒤엣것에 「악귀가」를
// 주어 2:0 으로 갈랐다(「작은 악귀들을 보았다」에는 「악귀가」가 없다).
const ADD_KO = {
  "작은 악귀들을 봄": "작은 악귀들",
  "제가 작은 악귀가 됨": "내가 악귀가 제가",
};
const ADD_EN = {
  // 「imp」은 「imps」의 부분 문자열이라 형제끼리 못 나눠 갖는다 — 뒤엣것에서 뺐다.
  "작은 악귀들을 봄": "imps passing pleasure seems",
  "제가 작은 악귀가 됨": "folly vice poverty",
};

const p = path.join(DIR, "kmm34.json");
const rows = JSON.parse(readFileSync(p, "utf8"));
const fiend = rows.find((r) => r.id === "fiend");
if (!fiend) stop("kmm34.json 에 fiend 가 없다 — 파일이 바뀌었다.");

for (const w of ADD_ALIAS) {
  if (fiend.aliases.includes(w)) stop(`fiend: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
  fiend.aliases.push(w);
}

for (const [k, v] of Object.entries(ADD_KO)) {
  if (k in fiend.contexts) stop(`fiend: 판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
  fiend.contexts[k] = v;
}
for (const [k, v] of Object.entries(ADD_EN)) {
  if (k in fiend.contexts_en) stop(`fiend: 영어 판별어 「${k}」가 이미 있다.`);
  fiend.contexts_en[k] = v;
}
writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
console.log("kmm34.json 고침 — fiend 에 판별어 둘");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(p, "utf8")).find((r) => r.id === "fiend");
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
