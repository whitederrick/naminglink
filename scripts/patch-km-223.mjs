import fs from "node:fs";

// wealth(재산) — 배치 223: 밀러 「Riches」 하나를 더한다(각주 See Wealth).
const pWealth = "apps/dreamslink/data-sources/extract/km7.json";
const dWealth = JSON.parse(fs.readFileSync(pWealth, "utf8"));
const wealth = dWealth.find((x) => x.id === "wealth");
if (!wealth) throw new Error("wealth not found in km7.json");

Object.assign(wealth.contexts, {
  "재물을 가짐": "재물을 노력과",
});
Object.assign(wealth.contexts_en, {
  "재물을 가짐": "possessed rise exertion",
});

fs.writeFileSync(pWealth, JSON.stringify(dWealth, null, 2) + "\n");
console.log("patched wealth in km7.json");
