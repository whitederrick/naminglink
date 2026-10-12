// 82편 영어 잎을 번역할 「골격」 문자열로 줄인다. 사용: node prep-saju.mjs
//  토큰(번역기는 그대로 둔다 — 순서만 문장에 맞게 옮길 수 있다):
//    {{S1}}  일간 이름(제품 사전의 로케일별 이름으로 채운다)      {{c1}} 한자 그대로      {{n1}} 숫자
//    {{TRAIT}} 일간 성향 문구(제품 사전에서 글자 그대로)          {{G:KEY}} 십신 이름 칸(번역 대상이 아니다)
//  같은 골격은 한 번만 번역한다. 채울 값은 경로별로 따로 둔다(unique-map.json).
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const here = "C:/Users/white/AppData/Local/Temp/claude/C--myProjects-naminglink/7a99bada-f923-4caa-869f-cf34b3081068/scratchpad/saju";
const out = `${here}/work`;
mkdirSync(out, { recursive: true });
const docs = JSON.parse(readFileSync(`${here}/out/saju82.en.json`, "utf8"));
const { DM_EN, TG_EN } = JSON.parse(readFileSync(`${here}/out/dicts.json`, "utf8"));

const stemOfName = new Map(Object.entries(DM_EN).map(([s, v]) => [v.name, s]));
const godOfName = new Map(Object.entries(TG_EN).map(([k, v]) => [v, k]));
if (stemOfName.size !== 10 || godOfName.size !== 10) throw new Error("사전 이름이 겹친다");
const names = [...stemOfName.keys()].sort((a, b) => b.length - a.length);
const traitOf = new Map(Object.entries(DM_EN).map(([s, v]) => [`"${v.trait}"`, s]));

const leaves = [];
const walk = (v, trail) => {
  if (typeof v === "string") leaves.push({ path: trail.join("."), raw: v });
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, [...trail, String(i)]));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) { if (k === "kind") continue; walk(x, [...trail, k]); }
};
for (const d of docs) walk({ eyebrow: d.eyebrow, title: d.title, summary: d.summary, backLabel: d.backLabel, sections: d.sections }, ["docs", d.key]);
if (new Set(leaves.map((l) => l.path)).size !== leaves.length) throw new Error("경로 중복");

const skeleton = (raw) => {
  const fills = {};
  const god = godOfName.get(raw);
  if (god) return { en: `{{G:${god}}}`, fills };
  let t = raw;
  for (const [q, s] of traitOf) if (t.includes(q)) { t = t.replace(q, "{{TRAIT}}"); fills.TRAIT = s; }
  // 일간 이름 → 임시 표지 → 번호
  const marks = [];
  for (const n of names) t = t.split(n).join(`\u0001${stemOfName.get(n)}\u0002`);
  let sIdx = 0, cIdx = 0, nIdx = 0, lIdx = 0;
  t = t.replace(/\]\((\/[^)\s]+)\)/g, (_, p) => { lIdx++; fills[`L${lIdx}`] = p; return `]({{L${lIdx}}})`; });
  t = t.replace(/\u0001(.)\u0002/g, (_, s) => { sIdx++; fills[`S${sIdx}`] = s; return `{{S${sIdx}}}`; });
  t = t.replace(/\{\{(?:TRAIT|S\d+|L\d+)\}\}|\{[a-zA-Z]+\}|[一-鿿]+|\d+(?:\.\d+)?/g, (m) => {
    if (m.startsWith("{")) return m;
    if (/^\d/.test(m)) { nIdx++; fills[`n${nIdx}`] = m; return `{{n${nIdx}}}`; }
    cIdx++; fills[`c${cIdx}`] = m; return `{{c${cIdx}}}`;
  });
  marks.length = 0;
  return { en: t, fills };
};
for (const l of leaves) Object.assign(l, skeleton(l.raw));

const PH = /^(\{[a-zA-Z]+\}|\{\{[A-Za-z]+\d*(:[A-Z]+)?\}\})$/;
const uniq = new Map();
for (const l of leaves) {
  if (PH.test(l.en)) continue;
  const e = uniq.get(l.en) ?? { en: l.en, paths: [] };
  e.paths.push(l.path);
  uniq.set(l.en, e);
}
const entries = [...uniq.values()];
const ids = entries.map((_, i) => "u" + String(i + 1).padStart(3, "0"));
writeFileSync(`${out}/en-leaves.json`, JSON.stringify(leaves.map(({ path, raw, en, fills }) => ({ path, raw, en, fills })), null, 2), "utf8");
writeFileSync(`${out}/unique.json`, JSON.stringify(entries.map((e, i) => ({ id: ids[i], en: e.en, uses: e.paths.length })), null, 2), "utf8");
writeFileSync(`${out}/unique-map.json`, JSON.stringify(Object.fromEntries(entries.map((e, i) => [ids[i], e.paths])), null, 2), "utf8");
const chars = entries.reduce((n, x) => n + x.en.length, 0);
console.log(`잎 ${leaves.length}개 · 번역할 골격 문자열 ${entries.length}개 · 영어 ${chars}자`);
console.log(`성향 토큰 문자열 ${entries.filter((e) => e.en.includes("{{TRAIT}}")).length}개 · 토큰 포함 ${entries.filter((e) => /\{\{/.test(e.en)).length}개`);
