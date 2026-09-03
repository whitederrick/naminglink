import fs from "node:fs";

const bellPath = "apps/dreamslink/data-sources/extract/km3.json";
const bellData = JSON.parse(fs.readFileSync(bellPath, "utf8"));
const bell = bellData.find((x) => x.id === "bell");
if (!bell) throw new Error("bell not found in km3.json");
Object.assign(bell.contexts, {
  "직접 조종을 울림": "직접 울림 나빠지고",
});
Object.assign(bell.contexts_en, {
  "직접 조종을 울림": "ring yourself reverses",
});
fs.writeFileSync(bellPath, JSON.stringify(bellData, null, 2) + "\n");
console.log("patched bell in km3.json");

const entPath = "apps/dreamslink/data-sources/extract/kmm31.json";
const entData = JSON.parse(fs.readFileSync(entPath, "utf8"));
const ent = entData.find((x) => x.id === "entertainment");
if (!ent) throw new Error("entertainment not found in kmm31.json");
Object.assign(ent.contexts, {
  "즐거움을 위해 파티에 참석함": "즐거움을 위해 참석",
});
Object.assign(ent.contexts_en, {
  "즐거움을 위해 파티에 참석함": "attending pleasure much good",
});
fs.writeFileSync(entPath, JSON.stringify(entData, null, 2) + "\n");
console.log("patched entertainment in kmm31.json");
