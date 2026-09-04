import fs from "node:fs";

// liquor(술) — 배치 233: 밀러 「Rum」 하나를 더한다. 원문 각주 [195] 'See
// other intoxicating drinks' 그대로 기존 liquor 상징에 붙인다.
const pLiquor = "apps/dreamslink/data-sources/extract/km7.json";
const dLiquor = JSON.parse(fs.readFileSync(pLiquor, "utf8"));
const liquor = dLiquor.find((x) => x.id === "liquor");
if (!liquor) throw new Error("liquor not found in km7.json");

liquor.aliases.push("럼주");
Object.assign(liquor.contexts, {
  "럼주를 마심": "럼주를 부유해지겠 품격을잃",
});
Object.assign(liquor.contexts_en, {
  "럼주를 마심": "rum wealth refinement gross",
});

fs.writeFileSync(pLiquor, JSON.stringify(dLiquor, null, 2) + "\n");
console.log("patched liquor in km7.json");
