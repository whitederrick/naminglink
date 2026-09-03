import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/km7.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const paper = d.find((x) => x.id === "paper");
if (!paper) throw new Error("paper not found in km7.json");

paper.aliases.push("양피지");

Object.assign(paper.contexts, {
  "종이나 양피지를 다루거나 참조함": "다루거나 참조 손실 송사",
  "처녀가 종이나 양피지 꿈을 꿈": "처녀가 애인에게 화가",
  "기혼자가 종이나 양피지 꿈을 꿈": "기혼자 집안 다툼",
});
Object.assign(paper.contexts_en, {
  "종이나 양피지를 다루거나 참조함": "refer handle losses lawsuit",
  "처녀가 종이나 양피지 꿈을 꿈": "young woman angry lover acquaintances",
  "기혼자가 종이나 양피지 꿈을 꿈": "married disagreements home",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched paper in km7.json");
