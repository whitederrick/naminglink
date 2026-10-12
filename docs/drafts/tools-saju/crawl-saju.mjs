// 개발 서버(:3003)에서 사주링크 82편을 로케일별로 열어 본다. 사용: node crawl-saju.mjs <로케일…>
import fs from "node:fs";
const docs = JSON.parse(fs.readFileSync("C:/myProjects/naminglink/docs/drafts/C-saju-82.ko.json", "utf8"));
const locales = process.argv.slice(2);
const res = { ok: 0, bad: [] };
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ");
for (const loc of locales) {
  for (const d of docs) {
    const url = `http://localhost:3003/${loc}/guide/${d.slug}`;
    let html = "", code = 0;
    try { const r = await fetch(url, { signal: AbortSignal.timeout(180000) }); code = r.status; html = await r.text(); } catch (e) { code = -1; }
    const text = strip(html);
    const tables = (html.match(/<table/g) ?? []).length;
    const want = d.sections.reduce((n, s) => n + s.blocks.filter((b) => "table" in b).length, 0);
    const ph = (text.match(/\{[a-zA-Z]+\}/g) ?? []).length;
    const undef = /undefined|NaN/.test(text);
    const problems = [];
    if (code !== 200) problems.push(`HTTP ${code}`);
    if (tables !== want) problems.push(`표 ${tables}/${want}`);
    if (ph) problems.push(`자리표시자 ${ph}`);
    if (undef) problems.push("undefined/NaN");
    if (/\{\{/.test(text)) problems.push("{{ 토큰");
    if (problems.length) res.bad.push(`${loc}/${d.slug}: ${problems.join(", ")}`); else res.ok++;
  }
}
console.log(`정상 ${res.ok} · 이상 ${res.bad.length}`);
console.log(res.bad.slice(0, 30).join("\n"));
process.exit(res.bad.length ? 1 : 0);
