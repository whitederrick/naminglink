import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/km2.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const pillow = d.find((x) => x.id === "pillow");
if (!pillow) throw new Error("pillow not found in km2.json");

Object.assign(pillow.contexts, {
  "베개 꿈을 꿈": "호사 안락",
  "처녀가 베개를 만드는 꿈을 꿈": "처녀가 만드는 즐거운",
});
Object.assign(pillow.contexts_en, {
  "베개 꿈을 꿈": "luxury comfort",
  "처녀가 베개를 만드는 꿈을 꿈": "young woman makes encouraging",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched pillow in km2.json");
