import fs from "node:fs";

// meadow(초원) — 배치 193: 「Prairie」 넷을 더한다. 첫 문장은 같은 그림(그냥 봄)이라
// 기존 "초원을 봄"에 인용이 포개진다(work가 같아 조립기가 자동으로 합친다) — 판별어는
// 그대로 둔다. 나머지 셋만 새 문맥.
const pMeadow = "apps/dreamslink/data-sources/extract/kmm121.json";
const dMeadow = JSON.parse(fs.readFileSync(pMeadow, "utf8"));
const meadow = dMeadow.find((x) => x.id === "meadow");
if (!meadow) throw new Error("meadow not found in kmm121.json");

Object.assign(meadow.contexts, {
  "물결치듯 풀과 꽃이 자란 초원을 봄": "물결치듯 꽃들",
  "황량한 초원을 봄": "황량한 벗이",
  "초원에서 길을 잃음": "길을 잃었",
});
Object.assign(meadow.contexts_en, {
  "물결치듯 풀과 꽃이 자란 초원을 봄": "undulating grasses flowers joyous",
  "황량한 초원을 봄": "barren absence friends",
  "초원에서 길을 잃음": "lost sadness luck",
});

fs.writeFileSync(pMeadow, JSON.stringify(dMeadow, null, 2) + "\n");
console.log("patched meadow in kmm121.json");

// devotion(신앙) — 배치 193: 「Prayer」를 더한다.
const pDevotion = "apps/dreamslink/data-sources/extract/kmm25.json";
const dDevotion = JSON.parse(fs.readFileSync(pDevotion, "utf8"));
const devotion = dDevotion.find((x) => x.id === "devotion");
if (!devotion) throw new Error("devotion not found in kmm25.json");

devotion.aliases.push("기도를 올렸다", "기도를 올리는", "기도를 올릴");
Object.assign(devotion.contexts, {
  "기도를 올리거나 남이 기도하는 것을 봄": "기도를 올리거나",
});
Object.assign(devotion.contexts_en, {
  "기도를 올리거나 남이 기도하는 것을 봄": "prayers threatened failure avert",
});

fs.writeFileSync(pDevotion, JSON.stringify(dDevotion, null, 2) + "\n");
console.log("patched devotion in kmm25.json");

// clergyman(목사) — 배치 193: 「Preacher」 일곱을 더한다. 처음 셋은 같은 그림이라 기존
// 문맥에 인용이 포개진다(work가 같아 조립기가 자동으로 합친다) — 판별어는 그대로 둔다.
// 나머지 넷만 새 문맥.
const pClergy = "apps/dreamslink/data-sources/extract/kmm14.json";
const dClergy = JSON.parse(fs.readFileSync(pClergy, "utf8"));
const clergy = dClergy.find((x) => x.id === "clergyman");
if (!clergy) throw new Error("clergyman not found in kmm14.json");

Object.assign(clergy.contexts, {
  "목사와 다툼": "다투 겨룸",
  "목사가 저에게서 걸어감": "걸어 활기",
  "슬퍼 보이는 목사를 봄": "슬퍼 보이는",
  "장발의 목사를 봄": "장발 긴머리",
});
Object.assign(clergy.contexts_en, {
  "목사와 다툼": "argue contest lose",
  "목사가 저에게서 걸어감": "walk away energy",
  "슬퍼 보이는 목사를 봄": "sorrowful reproaches",
  "장발의 목사를 봄": "long-haired overbearing egotistical",
});

fs.writeFileSync(pClergy, JSON.stringify(dClergy, null, 2) + "\n");
console.log("patched clergyman in kmm14.json");
