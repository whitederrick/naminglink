import fs from "node:fs";

// pregnancy(임신) — 배치 194: 「Pregnancy」 셋을 더한다. 지금까지 별칭만 있고 의미가
// 하나도 없었다.
const pPreg = "apps/dreamslink/data-sources/extract/km4.json";
const dPreg = JSON.parse(fs.readFileSync(pPreg, "utf8"));
const pregnancy = dPreg.find((x) => x.id === "pregnancy");
if (!pregnancy) throw new Error("pregnancy not found in km4.json");

pregnancy.aliases.push("임신한", "임신했다", "임신을", "아이를 뱄다", "아이를 밴");
// 옛 "아내가 아이를 뱀"(주공해몽)이 "배다" 활용형 별칭이 아예 없어 심어진 뒤로 한 번도
// 안 걸리고 있었다(몇 주 전 상처) — 이번에 이 상징을 여는 김에 넓힌다.

Object.assign(pregnancy.contexts, {
  "아내가 아이를 뱀": "아내가 사사로운",
  "여성이 임신한 꿈을 꿈": "여성이 남편과",
  "처녀가 임신한 꿈을 꿈": "처녀가 추문",
  "실제로 임신한 여성이 임신한 꿈을 꿈": "실제로 순산",
});
Object.assign(pregnancy.contexts_en, {
  "아내가 아이를 뱀": "wife secret affair",
  "여성이 임신한 꿈을 꿈": "unhappy husband unattractive",
  "처녀가 임신한 꿈을 꿈": "virgin scandal adversity",
  "실제로 임신한 여성이 임신한 꿈을 꿈": "really safe delivery recovery",
});

fs.writeFileSync(pPreg, JSON.stringify(dPreg, null, 2) + "\n");
console.log("patched pregnancy in km4.json");

// gift(선물) — 배치 194: 「Present」는 기존 "선물을 받음"과 같은 그림·work(miller)라
// 조립기가 자동으로 인용을 포갠다. 매칭 키 파일은 안 건드린다.

// clergyman(목사) — 배치 194: 「Priest」를 더한다. 첫 문장은 기존 "목사를 봄"과 같은
// 그림이라 인용이 포개진다(자동) — 나머지 넷만 새 문맥.
const pClergy = "apps/dreamslink/data-sources/extract/kmm14.json";
const dClergy = JSON.parse(fs.readFileSync(pClergy, "utf8"));
const clergy = dClergy.find((x) => x.id === "clergyman");
if (!clergy) throw new Error("clergyman not found in kmm14.json");

Object.assign(clergy.contexts, {
  "설교단에 선 목사를 봄": "강단 병과",
  "여성이 목사와 사랑에 빠짐": "사랑에 빠진 속임수",
  "목사가 여성에게 구애함": "구애 짓궂은",
  "목사에게 고해함": "고해 굴욕",
});
Object.assign(clergy.contexts_en, {
  "설교단에 선 목사를 봄": "pulpit ailment dreamer",
  "여성이 목사와 사랑에 빠짐": "deceptions unscrupulous lover",
  "목사가 여성에게 구애함": "courts gaiety joking",
  "목사에게 고해함": "confess humiliation shame",
});

fs.writeFileSync(pClergy, JSON.stringify(dClergy, null, 2) + "\n");
console.log("patched clergyman in kmm14.json");

// cowslip(앵초) — 배치 194: 「Primrose」(단수 표제어, Cows에서 뽑은 것과 별도)를 더한다.
// id는 cowslip이다 — "primrose"는 이미 그 영어 별칭이라 새 상징을 세우면 이름이 겹친다.
const pPrimrose = "apps/dreamslink/data-sources/extract/kmm21.json";
const dPrimrose = JSON.parse(fs.readFileSync(pPrimrose, "utf8"));
const primrose = dPrimrose.find((x) => x.id === "cowslip");
if (!primrose) throw new Error("cowslip not found in kmm21.json");

Object.assign(primrose.contexts, {
  "발치의 풀밭에 흩어 핀 앵초를 봄": "발치 흩어",
});
Object.assign(primrose.contexts_en, {
  "발치의 풀밭에 흩어 핀 앵초를 봄": "grass feet comfort peace",
});

fs.writeFileSync(pPrimrose, JSON.stringify(dPrimrose, null, 2) + "\n");
console.log("patched primrose in kmm21.json");
