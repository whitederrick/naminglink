import fs from "node:fs";

// sheep(양) — 배치 209: 「Ram」 둘을 더한다. 각주(See Sheep and Lamb)를 따라 합친다.
// 별칭 "숫양"·영어 별칭 "ram"이 이미 있다.
const pSheep = "apps/dreamslink/data-sources/extract/km3.json";
const dSheep = JSON.parse(fs.readFileSync(pSheep, "utf8"));
const sheep = dSheep.find((x) => x.id === "sheep");
if (!sheep) throw new Error("sheep not found in km3.json");

Object.assign(sheep.contexts, {
  "숫양이 저를 뒤쫓음": "뒤쫓 쫓아와 쫓기는",
  "숫양이 조용히 풀을 뜯음": "조용히 힘있는 벗들이",
});
Object.assign(sheep.contexts_en, {
  "숫양이 저를 뒤쫓음": "pursues threatens misfortune",
  "숫양이 조용히 풀을 뜯음": "quietly grazing powerful",
});

fs.writeFileSync(pSheep, JSON.stringify(dSheep, null, 2) + "\n");
console.log("patched sheep in km3.json");
