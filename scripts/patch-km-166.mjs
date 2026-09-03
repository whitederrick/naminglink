import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/km6.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const prison = d.find((x) => x.id === "prison");
if (!prison) throw new Error("prison not found in km6.json");

Object.assign(prison.contexts, {
  "감옥 꿈을 꿈": "맺은 언약 손해로",
});
Object.assign(prison.contexts_en, {
  "감옥 꿈을 꿈": "penitentiary engagements loss",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched prison in km6.json");
