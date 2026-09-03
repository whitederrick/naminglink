import fs from "node:fs";

const pBear = "apps/dreamslink/data-sources/extract/km3.json";
const dBear = JSON.parse(fs.readFileSync(pBear, "utf8"));
const bear = dBear.find((x) => x.id === "bear");
if (!bear) throw new Error("bear not found in km3.json");

Object.assign(bear.contexts, {
  "북극곰 꿈을 꿈": "북극곰",
  "북극곰의 가죽을 봄": "가죽을",
});
Object.assign(bear.contexts_en, {
  "북극곰 꿈을 꿈": "deceit",
  "북극곰의 가죽을 봄": "skin overcome opposition",
});
bear.aliases.push("북극곰이", "북극곰을", "북극곰");
bear.aliases_en.push("a polar bear", "polar bears");

fs.writeFileSync(pBear, JSON.stringify(dBear, null, 2) + "\n");
console.log("patched bear in km3.json");

const pCards = "apps/dreamslink/data-sources/extract/kmm10.json";
const dCards = JSON.parse(fs.readFileSync(pCards, "utf8"));
const cards = dCards.find((x) => x.id === "cards");
if (!cards) throw new Error("cards not found in kmm10.json");

Object.assign(cards.contexts, {
  "포커를 침": "포커를",
});
Object.assign(cards.contexts_en, {
  "포커를 침": "poker moral distinctiveness",
});

fs.writeFileSync(pCards, JSON.stringify(dCards, null, 2) + "\n");
console.log("patched cards in kmm10.json");
