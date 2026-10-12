// 검토 수정안을 tr/<loc>.json 에 병합한다(원본은 work/tr-orig 에 보관). 사용: node merge-fixes.mjs
import fs from "node:fs";
const W = "C:/Users/white/AppData/Local/Temp/claude/C--myProjects-naminglink/7a99bada-f923-4caa-869f-cf34b3081068/scratchpad/saju/work";
const LOCALES = ["ar", "de", "es", "fil", "fr", "hi", "id", "it", "ja", "kk", "km", "mn", "ms", "pl", "pt", "ru", "th", "tr", "uz", "vi", "zh"];
fs.mkdirSync(`${W}/tr-orig`, { recursive: true });
let total = 0;
for (const loc of LOCALES) {
  const trFile = `${W}/tr/${loc}.json`;
  const orig = `${W}/tr-orig/${loc}.json`;
  if (!fs.existsSync(orig)) fs.copyFileSync(trFile, orig);
  const tr = JSON.parse(fs.readFileSync(orig, "utf8"));
  const fx = JSON.parse(fs.readFileSync(`${W}/review/${loc}.fixes.json`, "utf8"));
  let n = 0;
  for (const [id, v] of Object.entries(fx)) {
    if (!(id in tr)) throw new Error(`${loc}: 알 수 없는 id ${id}`);
    if (typeof v !== "string" || !v.trim()) throw new Error(`${loc}: ${id} 값이 비었다`);
    if (tr[id] !== v) n++;
    tr[id] = v;
  }
  fs.writeFileSync(trFile, JSON.stringify(tr, null, 2), "utf8");
  total += n;
  console.log(`${loc}: 수정안 ${Object.keys(fx).length}건 중 실제 바뀐 ${n}건`);
}
console.log(`합계 바뀐 문자열 ${total}`);
