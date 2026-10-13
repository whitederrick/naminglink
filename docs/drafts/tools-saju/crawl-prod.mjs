// 운영 주소에서 새 안내 문서를 전수로 열어 본다(sitemap 대조 + 본문 점검).
// 사용: node crawl-prod.mjs <사이트 URL> <문서 JSON 경로…>
//   node crawl-prod.mjs https://saju-link.com docs/drafts/C-saju-82.ko.json
//   node crawl-prod.mjs https://inyeon-link.com docs/drafts/B-pairs-38.ko.json docs/drafts/B-zodiac-12.ko.json
// 종료 코드: 0 전부 정상 · 1 이상 있음 · 2 검사 0건(통과가 아니라 검사 안 됨)
import fs from "node:fs";

const [site, ...files] = process.argv.slice(2);
if (!site || files.length === 0) { console.error("사용: node crawl-prod.mjs <사이트> <JSON…>"); process.exit(2); }

const docs = files.flatMap((f) => JSON.parse(fs.readFileSync(f, "utf8")));
const wantSlugs = new Set(docs.map((d) => d.slug));
const tablesOf = (d) => d.sections.reduce((n, s) => n + s.blocks.filter((b) => "table" in b).length, 0);
const wantTables = new Map(docs.map((d) => [d.slug, tablesOf(d)]));

// 1) sitemap — 새 슬러그가 로케일 몇 개로 실려 있는가
const smRes = await fetch(`${site}/sitemap.xml`);
const sm = await smRes.text();
const locs = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const urls = locs.filter((u) => {
  const m = u.match(/\/guide\/([^/?#]+)$/);
  return m && wantSlugs.has(m[1]);
});
const bySlug = new Map();
for (const u of urls) {
  const slug = u.match(/\/guide\/([^/?#]+)$/)[1];
  bySlug.set(slug, (bySlug.get(slug) ?? 0) + 1);
}
const localeSet = new Set(locs.map((u) => u.replace(site, "").split("/")[1]).filter(Boolean));
const expectedPerSlug = urls.length ? Math.max(...bySlug.values()) : 0;
const missingInSitemap = [...wantSlugs].filter((s) => (bySlug.get(s) ?? 0) < expectedPerSlug);
console.log(`sitemap: HTTP ${smRes.status} · 전체 ${locs.length} URL · 로케일 ${localeSet.size}개 · 새 슬러그 ${bySlug.size}/${wantSlugs.size} · 슬러그당 최대 ${expectedPerSlug}`);
if (missingInSitemap.length) console.log(`sitemap 에 없거나 모자란 슬러그: ${missingInSitemap.join(", ")}`);

// 2) 본문 점검 — sitemap 에 실린 주소 전부
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ");
const res = { ok: 0, bad: [] };
async function check(url) {
  const slug = url.match(/\/guide\/([^/?#]+)$/)[1];
  let code = 0, html = "";
  for (let t = 0; t < 2 && code !== 200; t++) {
    try { const r = await fetch(url, { signal: AbortSignal.timeout(60000) }); code = r.status; html = await r.text(); } catch { code = -1; }
  }
  const text = strip(html);
  const problems = [];
  if (code !== 200) problems.push(`HTTP ${code}`);
  const tables = (html.match(/<table/g) ?? []).length;
  if (code === 200 && tables !== wantTables.get(slug)) problems.push(`표 ${tables}/${wantTables.get(slug)}`);
  const ph = (text.match(/\{[A-Za-z_]+\}/g) ?? []).length;
  if (ph) problems.push(`자리표시자 ${ph}`);
  if (/\{\{/.test(text)) problems.push("{{ 토큰");
  if (/\bundefined\b|\bNaN\b/.test(text)) problems.push("undefined/NaN");
  if (problems.length) res.bad.push(`${url.replace(site, "")}: ${problems.join(", ")}`); else res.ok++;
}
const queue = [...urls];
await Promise.all(Array.from({ length: 8 }, async () => { for (let u; (u = queue.shift()); ) await check(u); }));

console.log(`본문: 정상 ${res.ok} · 이상 ${res.bad.length} · 검사 ${urls.length}건`);
console.log(res.bad.slice(0, 40).join("\n"));
if (urls.length === 0) process.exit(2);
process.exit(res.bad.length || missingInSitemap.length ? 1 : 0);
