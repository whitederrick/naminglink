import fs from "node:fs";

const pPlate = "apps/dreamslink/data-sources/extract/km1.json";
const dPlate = JSON.parse(fs.readFileSync(pPlate, "utf8"));
const plate = dPlate.find((x) => x.id === "plate");
if (!plate) throw new Error("plate not found in km1.json");

Object.assign(plate.contexts, {
  "미혼 여성이 접시 꿈을 꿈": "미혼",
  "기혼 여성이 접시 꿈을 꿈": "기혼",
});
Object.assign(plate.contexts_en, {
  "미혼 여성이 접시 꿈을 꿈": "economy",
  "기혼 여성이 접시 꿈을 꿈": "household",
});

fs.writeFileSync(pPlate, JSON.stringify(dPlate, null, 2) + "\n");
console.log("patched plate in km1.json");

const pLumber = "apps/dreamslink/data-sources/extract/kmm110.json";
const dLumber = JSON.parse(fs.readFileSync(pLumber, "utf8"));
const lumber = dLumber.find((x) => x.id === "lumber");
if (!lumber) throw new Error("lumber not found in kmm110.json");

const beforeAliases = lumber.aliases.length;
lumber.aliases = lumber.aliases.filter((a) => a !== "널빤지");
if (lumber.aliases.length === beforeAliases) {
  throw new Error("expected to remove '널빤지' from lumber aliases");
}
const beforeAliasesEn = lumber.aliases_en.length;
lumber.aliases_en = lumber.aliases_en.filter((a) => a !== "planks");
if (lumber.aliases_en.length === beforeAliasesEn) {
  throw new Error("expected to remove 'planks' from lumber aliases_en");
}

fs.writeFileSync(pLumber, JSON.stringify(dLumber, null, 2) + "\n");
console.log("removed stale '널빤지'/'planks' aliases from lumber in kmm110.json (배치 184 — plank를 새 상징으로 세운다)");

const pAlabaster = "apps/dreamslink/data-sources/extract/kmm3.json";
const dAlabaster = JSON.parse(fs.readFileSync(pAlabaster, "utf8"));
const alabaster = dAlabaster.find((x) => x.id === "alabaster");
if (!alabaster) throw new Error("alabaster not found in kmm3.json");

const beforeAlab = alabaster.aliases.length;
alabaster.aliases = alabaster.aliases.filter((a) => a !== "석고");
if (alabaster.aliases.length === beforeAlab) {
  throw new Error("expected to remove bare '석고' from alabaster aliases");
}

fs.writeFileSync(pAlabaster, JSON.stringify(dAlabaster, null, 2) + "\n");
console.log("removed stale bare '석고' alias from alabaster in kmm3.json (배치 184 — plaster를 새 상징으로 세운다. '설화 석고'·'석고 조각'은 그대로 둔다)");
