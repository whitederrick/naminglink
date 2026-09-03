import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/km3.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const flute = d.find((x) => x.id === "flute");
if (!flute) throw new Error("flute not found in km3.json");

const before = flute.aliases_en.length;
flute.aliases_en = flute.aliases_en.filter((a) => a !== "pipe");
if (flute.aliases_en.length === before) {
  throw new Error("expected to remove bare 'pipe' from flute aliases_en");
}

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("removed stale bare 'pipe' alias from flute in km3.json (배치 180 — pipe를 새 상징으로 세운다. 'reed pipe'는 그대로 둔다)");
