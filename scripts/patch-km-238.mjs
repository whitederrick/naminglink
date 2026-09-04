import fs from "node:fs";

// gallows(교수대) — 배치 238: 배치 237이 「Scaffold」 표제어를 잘못 끊은
// 나머지 하나를 마저 붙인다.
const pGallows = "apps/dreamslink/data-sources/extract/kmm38.json";
const dGallows = JSON.parse(fs.readFileSync(pGallows, "utf8"));
const gallows = dGallows.find((x) => x.id === "gallows");
if (!gallows) throw new Error("gallows not found in kmm38.json");

Object.assign(gallows.contexts, {
  "처형대에서 떨어짐": "떨어졌 속이고 해치는",
});
Object.assign(gallows.contexts_en, {
  "처형대에서 떨어짐": "fall surprised deceiving",
});

fs.writeFileSync(pGallows, JSON.stringify(dGallows, null, 2) + "\n");
console.log("patched gallows in kmm38.json");

// scales(저울) — 배치 238: 문맥 0개이던 자리에 밀러 「Scales」 둘을 채운다.
const pScales = "apps/dreamslink/data-sources/extract/km6.json";
const dScales = JSON.parse(fs.readFileSync(pScales, "utf8"));
const scales = dScales.find((x) => x.id === "scales");
if (!scales) throw new Error("scales not found in km6.json");

// 곁가지 — scales는 원래 의미가 하나(주공해몽 「남이 저울을 건네줌」)라
// 판별어가 없어도 됐다(§35 곁가지). 이제 셋이 됐으니 그 하나도 판별어가 있어야 한다.
scales.contexts["남이 저울을 건네줌"] = "건네주 건넸";
scales.contexts_en["남이 저울을 건네줌"] = "handed given someone";

Object.assign(scales.contexts, {
  "저울에 닮": "정의가 처신을다스 번영이넓어",
  "여성이 연인을 저울에 닮": "여성이 연인을 견실한",
});
Object.assign(scales.contexts_en, {
  "저울에 닮": "justice temper widening",
  "여성이 연인을 저울에 닮": "weigh lover solid faithfulness",
});

fs.writeFileSync(pScales, JSON.stringify(dScales, null, 2) + "\n");
console.log("patched scales in km6.json");
