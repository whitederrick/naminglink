import fs from "node:fs";

// fish-pond(연못) — 배치 189: 「Pond」의 첫 문장(꾸밈없이 봄)을 더한다.
// 대표 의미로 얼릴 것이므로(FALLBACK_FIRST) 판별어를 좁게 둔다(§25 곁가지).
const pPond = "apps/dreamslink/data-sources/extract/kmm35.json";
const dPond = JSON.parse(fs.readFileSync(pPond, "utf8"));
const pond = dPond.find((x) => x.id === "fish-pond");
if (!pond) throw new Error("fish-pond not found in kmm35.json");

Object.assign(pond.contexts, {
  "연못을 봄": "담담하게 동요",
});
Object.assign(pond.contexts_en, {
  "연못을 봄": "placid outlook fortune",
});

fs.writeFileSync(pPond, JSON.stringify(dPond, null, 2) + "\n");
console.log("patched fish-pond in kmm35.json");

// horse(말) — 배치 189: 「Pony」를 더한다. "조랑말"은 이미 별칭이지만 한국어 판별어는
// ownTerms로 안 죽는다(CLAUDE.md §29 곁가지 정정).
const pHorse = "apps/dreamslink/data-sources/extract/km8.json";
const dHorse = JSON.parse(fs.readFileSync(pHorse, "utf8"));
const horse = dHorse.find((x) => x.id === "horse");
if (!horse) throw new Error("horse not found in km8.json");

Object.assign(horse.contexts, {
  "조랑말을 봄": "조랑말",
});
Object.assign(horse.contexts_en, {
  "조랑말을 봄": "ponies moderate speculations rewarded",
});

fs.writeFileSync(pHorse, JSON.stringify(dHorse, null, 2) + "\n");
console.log("patched horse in km8.json");

// alms-house(구빈원) — 배치 189: 「Poor-house」를 더한다. 지금까지 의미가 하나뿐이라
// contexts가 비어 있었다 — 여럿이 되는 순간 기존 것도 채워야 한다(CLAUDE.md §30 곁가지).
// 새 문맥을 대표(기본값)로 두고(FALLBACK_FIRST) 옛 것엔 "여성" 판별어를 준다.
const pAlms = "apps/dreamslink/data-sources/extract/kmm7.json";
const dAlms = JSON.parse(fs.readFileSync(pAlms, "utf8"));
const alms = dAlms.find((x) => x.id === "alms-house");
if (!alms) throw new Error("alms-house not found in kmm7.json");

Object.assign(alms.contexts, {
  "젊은 여성이 구빈원 꿈을 꿈": "여성이 처녀가",
  "구빈원을 봄": "신의 없는",
});
Object.assign(alms.contexts_en, {
  "젊은 여성이 구빈원 꿈을 꿈": "young woman worldly marriage",
  "구빈원을 봄": "unfaithful friends belongings",
});

fs.writeFileSync(pAlms, JSON.stringify(dAlms, null, 2) + "\n");
console.log("patched alms-house in kmm7.json");

// pauper(극빈자) — 배치 189: 「Poor」의 "벗이 가난해 보임"을 더한다(Pauper 항목엔 없던 내용).
const pPauper = "apps/dreamslink/data-sources/extract/kmm161.json";
const dPauper = JSON.parse(fs.readFileSync(pPauper, "utf8"));
const pauper = dPauper.find((x) => x.id === "pauper");
if (!pauper) throw new Error("pauper not found in kmm161.json");

Object.assign(pauper.contexts, {
  "벗이 가난해 보임": "벗이 친구가 가난해",
});
Object.assign(pauper.contexts_en, {
  "벗이 가난해 보임": "friends appear poor worry losses",
});

fs.writeFileSync(pPauper, JSON.stringify(dPauper, null, 2) + "\n");
console.log("patched pauper in kmm161.json");
