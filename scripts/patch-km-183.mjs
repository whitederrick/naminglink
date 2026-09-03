import fs from "node:fs";

const p = "apps/dreamslink/data-sources/extract/kmm31.json";
const d = JSON.parse(fs.readFileSync(p, "utf8"));
const epidemic = d.find((x) => x.id === "epidemic");
if (!epidemic) throw new Error("epidemic not found in kmm31.json");

Object.assign(epidemic.contexts, {
  "돌림병이 도는 것을 봄": "도는",
  "역병이 창궐함": "창궐",
  "역병에 걸림": "걸렸 앓았",
  "역병에서 벗어나려 함": "벗어나려 도망치려",
});
Object.assign(epidemic.contexts_en, {
  "돌림병이 도는 것을 봄": "spreading",
  "역병이 창궐함": "raging",
  "역병에 걸림": "afflicted",
  "역병에서 벗어나려 함": "escape escaping",
});

fs.writeFileSync(p, JSON.stringify(d, null, 2) + "\n");
console.log("patched epidemic in kmm31.json");
