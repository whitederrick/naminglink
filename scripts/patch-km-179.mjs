import fs from "node:fs";

const p8 = "apps/dreamslink/data-sources/extract/km8.json";
const d8 = JSON.parse(fs.readFileSync(p8, "utf8"));
const pineTree = d8.find((x) => x.id === "pine-tree");
if (!pineTree) throw new Error("pine-tree not found in km8.json");

Object.assign(pineTree.contexts, {
  "소나무를 봄": "우뚝",
  "여성이 죽은 소나무를 봄": "죽은 여성이",
});
Object.assign(pineTree.contexts_en, {
  "소나무를 봄": "towering",
  "여성이 죽은 소나무를 봄": "dead woman bereavement",
});

fs.writeFileSync(p8, JSON.stringify(d8, null, 2) + "\n");
console.log("patched pine-tree in km8.json");

const p5 = "apps/dreamslink/data-sources/extract/km5.json";
const d5 = JSON.parse(fs.readFileSync(p5, "utf8"));
const needle = d5.find((x) => x.id === "needle");
if (!needle) throw new Error("needle not found in km5.json");

const before = needle.aliases_en.length;
needle.aliases_en = needle.aliases_en.filter((a) => a !== "pin");
if (needle.aliases_en.length === before) {
  throw new Error("expected to remove 'pin' from needle aliases_en");
}

fs.writeFileSync(p5, JSON.stringify(d5, null, 2) + "\n");
console.log("removed stale 'pin' alias from needle in km5.json (배치 179 — pins를 새 상징으로 세우며 옛 겹침을 없앤다)");
