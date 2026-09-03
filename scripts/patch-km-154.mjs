import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/km5.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const pardon = d.find((x) => x.id === "pardon");
if (!pardon) throw new Error("pardon not found in km5.json");

Object.assign(pardon.contexts, {
  "저지르지 않은 잘못을 용서받으려 함": "저지르지 않은 발전",
  "실제로 잘못을 저지른 채 용서를 구함": "실제로 저지른 곤경스러운",
});
Object.assign(pardon.contexts_en, {
  "저지르지 않은 잘못을 용서받으려 함": "never committed advancement",
  "실제로 잘못을 저지른 채 용서를 구함": "offense committed embarrassment",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched pardon in km5.json");
