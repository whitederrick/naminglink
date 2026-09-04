import fs from "node:fs";

// quarrel(말싸움) — 배치 201: 「Quarrel」 넷을 더한다.
const pQuarrel = "apps/dreamslink/data-sources/extract/km6.json";
const dQuarrel = JSON.parse(fs.readFileSync(pQuarrel, "utf8"));
const quarrel = dQuarrel.find((x) => x.id === "quarrel");
if (!quarrel) throw new Error("quarrel not found in km6.json");

quarrel.aliases.push("다툼", "다툼이", "다툼을", "다투는", "다투었다");
// 옛 "욕을 먹고도 모르는 척함"의 판별어가 "모르는척"(붙여 씀)이라 사람이 실제로 띄어
// 쓰는 "모르는 척했다"와 안 맞았다(몇 주 전 상처) — 이번에 이 상징을 여는 김에 넓힌다.
quarrel.contexts["욕을 먹고도 모르는 척함"] = "모르는 참았";

Object.assign(quarrel.contexts, {
  "다툼 꿈을 꿈": "불행과 격한",
  "처녀가 다툼 꿈을 꿈": "처녀가 돌이킬",
  "기혼 여성이 다툼 꿈을 꿈": "기혼 이별",
  "남이 다투는 소리를 들음": "남이 시원찮고",
});
Object.assign(quarrel.contexts_en, {
  "다툼 꿈을 꿈": "unhappiness fierce altercations",
  "처녀가 다툼 꿈을 꿈": "young fatal unpleasantries",
  "기혼 여성이 다툼 꿈을 꿈": "married separation disagreements",
  "남이 다투는 소리를 들음": "hearing unsatisfactory disappointing",
});

fs.writeFileSync(pQuarrel, JSON.stringify(dQuarrel, null, 2) + "\n");
console.log("patched quarrel in km6.json");
