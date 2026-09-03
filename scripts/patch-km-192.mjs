import fs from "node:fs";

// cemetery(공동묘지) — 배치 192: 「Potter's Field」 둘을 더한다.
const pCem = "apps/dreamslink/data-sources/extract/kmm11.json";
const dCem = JSON.parse(fs.readFileSync(pCem, "utf8"));
const cemetery = dCem.find((x) => x.id === "cemetery");
if (!cemetery) throw new Error("cemetery not found in kmm11.json");

Object.assign(cemetery.contexts, {
  "무연고자 묘지를 봄": "무연고자 가난과",
  "처녀가 정인과 함께 무연고자 묘지를 지나며 정인을 버림": "정인과 함께 버렸",
});
Object.assign(cemetery.contexts_en, {
  "무연고자 묘지를 봄": "poverty misery distress",
  "처녀가 정인과 함께 무연고자 묘지를 지나며 정인을 버림": "lover mercenary gain",
});

fs.writeFileSync(pCem, JSON.stringify(dCem, null, 2) + "\n");
console.log("patched cemetery in kmm11.json");

// chicken-meat(닭고기) · chicken(닭) — 배치 192: 「Poultry」를 나눠 붙인다.
const pChicken = "apps/dreamslink/data-sources/extract/km8.json";
const dChicken = JSON.parse(fs.readFileSync(pChicken, "utf8"));

const chickenMeat = dChicken.find((x) => x.id === "chicken-meat");
if (!chickenMeat) throw new Error("chicken-meat not found in km8.json");
chickenMeat.aliases.push("손질된 가금");
Object.assign(chickenMeat.contexts, {
  "닭고기를 먹음": "먹었 먹는 씹어",
  "손질된 가금을 봄": "손질된 사치스러운",
});
Object.assign(chickenMeat.contexts_en, {
  "닭고기를 먹음": "eating auspicious",
  "손질된 가금을 봄": "dressed extravagant security",
});

const chicken = dChicken.find((x) => x.id === "chicken");
if (!chicken) throw new Error("chicken not found in km8.json");
chicken.aliases.push("살아있는 가금");
Object.assign(chicken.contexts, {
  "처녀가 살아있는 가금을 뒤쫓음": "뒤쫓 쫓아 부질없는",
});
Object.assign(chicken.contexts_en, {
  "처녀가 살아있는 가금을 뒤쫓음": "chasing frivolous pleasure",
});

fs.writeFileSync(pChicken, JSON.stringify(dChicken, null, 2) + "\n");
console.log("patched chicken-meat, chicken in km8.json");

// pan(냄비) — 배치 192: 「Pot」 셋을 더한다. ⓪ grep이 km/kmm만 봐서 놓친 것 또 하나 —
// 새로 만들려던 `pot`이 이미 있던 `pan`(주공해몽, 냄비)과 한국어 이름이 겹쳤다
// (배치 190의 china/porcelain과 같은 자리 — ⓪를 m/r 원문까지 넓혀야 한다).
// "깨지거나 녹슨 냄비를 봄"은 pan의 기존 "냄비가 깨짐"과 그림이 겹치므로 판별어를
// "녹슨" 쪽으로만 좁혀 동점을 피한다.
const pPan = "apps/dreamslink/data-sources/extract/km6.json";
const dPan = JSON.parse(fs.readFileSync(pPan, "utf8"));
const pan = dPan.find((x) => x.id === "pan");
if (!pan) throw new Error("pan not found in km6.json");

pan.aliases_en.push("a pot");
Object.assign(pan.contexts, {
  "냄비 꿈을 꿈": "사소한 짜증",
  "처녀가 끓는 냄비를 봄": "끓는 사교적인",
  "깨지거나 녹슨 냄비를 봄": "녹슨 뼈아픈",
});
// 옛 "냄비가 깨짐"의 판별어가 "깨졌다" 활용형을 못 걸러 왔다(2026-09 이전부터 있던 상처) —
// 이번에 이 상징을 여는 김에 넓힌다.
if (!pan.contexts["냄비가 깨짐"].includes("깨졌")) {
  pan.contexts["냄비가 깨짐"] += " 깨졌";
}
Object.assign(pan.contexts_en, {
  "냄비 꿈을 꿈": "unimportant vexation",
  "처녀가 끓는 냄비를 봄": "boiling pleasant social",
  "깨지거나 녹슨 냄비를 봄": "rusty keen disappointment",
});

fs.writeFileSync(pPan, JSON.stringify(dPan, null, 2) + "\n");
console.log("patched pan in km6.json");
