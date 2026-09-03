import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/kmm40.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const glass = d.find((x) => x.id === "glass");
if (!glass) throw new Error("glass not found in kmm40.json");

Object.assign(glass.contexts, {
  "유리판을 다룸": "다루 불확실",
  "유리창 너머로 남과 이야기함": "이야기 장애물 불편",
});
Object.assign(glass.contexts_en, {
  "유리판을 다룸": "handle dealing uncertainties",
  "유리창 너머로 남과 이야기함": "talk person obstacles inconvenience",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched glass in kmm40.json");
