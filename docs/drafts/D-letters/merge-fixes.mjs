// 독립 검토의 고침(review/<loc>.fixes.json · review/<loc>.hub-fixes.json)을 번역 파일에 덮어 쓴다.
// 사용: node merge-fixes.mjs <작업폴더> <로케일…>
// 고침 키가 번역 파일에 없으면 던진다(오타로 조용히 새 키가 생기는 것을 막는다). 원본은 .orig 로 한 번만 남긴다.
import { readFileSync, writeFileSync, existsSync, copyFileSync } from "node:fs";

const [work, ...locales] = process.argv.slice(2);
if (!work || !locales.length) { console.error("쓰는 법: merge-fixes.mjs <작업폴더> <로케일…>"); process.exit(2); }
let failed = 0;
const apply = (base, fixFile, label) => {
  if (!existsSync(fixFile)) return 0;
  const fixes = JSON.parse(readFileSync(fixFile, "utf8"));
  const cur = JSON.parse(readFileSync(base, "utf8"));
  const bak = `${base}.orig`;
  if (!existsSync(bak)) copyFileSync(base, bak);
  let n = 0;
  for (const [k, v] of Object.entries(fixes)) {
    if (!(k in cur)) throw new Error(`${label}: 번역 파일에 없는 키 ${k}`);
    if (typeof v !== "string" || !v.trim()) throw new Error(`${label}: ${k} 값이 문자열이 아니다`);
    if (cur[k] !== v) n++;
    cur[k] = v;
  }
  writeFileSync(base, JSON.stringify(cur, null, 2), "utf8");
  return n;
};
for (const loc of locales) {
  try {
    const a = apply(`${work}/tr/${loc}.json`, `${work}/review/${loc}.fixes.json`, `${loc} 본문`);
    const b = apply(`${work}/tr-hub/${loc}.json`, `${work}/review/${loc}.hub-fixes.json`, `${loc} 허브`);
    console.log(`${loc} — 본문 ${a}건 · 허브 ${b}건 반영`);
  } catch (e) { failed++; console.log(`${loc} — ${e.message}`); }
}
process.exit(failed ? 1 : 0);
