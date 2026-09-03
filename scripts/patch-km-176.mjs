import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/km3.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const pig = d.find((x) => x.id === "pig");
if (!pig) throw new Error("pig not found in km3.json");

Object.assign(pig.contexts, {
  "진흙탕에서 뒹구는 돼지들을 봄": "진흙탕 뒹구는 해로운",
  "처녀가 진흙탕 돼지 꿈을 꿈": "처녀가 질투심 부유할",
});
Object.assign(pig.contexts_en, {
  "진흙탕에서 뒹구는 돼지들을 봄": "wallowing mire hurtful",
  "처녀가 진흙탕 돼지 꿈을 꿈": "young woman jealous greedy wealthy",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched pig in km3.json");
