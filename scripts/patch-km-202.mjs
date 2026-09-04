import fs from "node:fs";

// docks(부두) — 배치 202: 「Quay」 둘을 더한다. "부두"가 이미 그 별칭이었다.
const pDocks = "apps/dreamslink/data-sources/extract/kmm26.json";
const dDocks = JSON.parse(fs.readFileSync(pDocks, "utf8"));
const docks = dDocks.find((x) => x.id === "docks");
if (!docks) throw new Error("docks not found in kmm26.json");

Object.assign(docks.contexts, {
  "부두에 서서 배들을 봄": "배들을 이루어질",
});
Object.assign(docks.contexts_en, {
  "부두에 서서 배들을 봄": "vessels fruition wishes",
});

fs.writeFileSync(pDocks, JSON.stringify(dDocks, null, 2) + "\n");
console.log("patched docks in kmm26.json");

// queen(여왕) — 배치 202: 「Queen」 둘을 더한다. "empress"가 이미 그 영어 별칭이었다.
const pQueen = "apps/dreamslink/data-sources/extract/km8.json";
const dQueen = JSON.parse(fs.readFileSync(pQueen, "utf8"));
const queen = dQueen.find((x) => x.id === "queen");
if (!queen) throw new Error("queen not found in km8.json");

Object.assign(queen.contexts, {
  "여왕 꿈을 꿈": "성공적인",
  "늙거나 초췌해 보이는 여왕을 봄": "늙거나 초췌",
});
Object.assign(queen.contexts_en, {
  "여왕 꿈을 꿈": "successful ventures",
  "늙거나 초췌해 보이는 여왕을 봄": "old haggard disappointments",
});

fs.writeFileSync(pQueen, JSON.stringify(dQueen, null, 2) + "\n");
console.log("patched queen in km8.json");
