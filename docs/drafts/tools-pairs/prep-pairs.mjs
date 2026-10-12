// 38편의 영어 잎을 고유 문자열로 줄인다. 사용: node prep-pairs.mjs
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const SP = path.dirname(here);
mkdirSync(path.join(here, "tr"), { recursive: true });
const docs = JSON.parse(readFileSync(path.join(here, "pairs38.en.json"), "utf8"));

const leaves = [];
const walk = (v, trail) => {
  if (typeof v === "string") leaves.push({ path: trail.join("."), en: v });
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, [...trail, String(i)]));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) { if (k === "kind") continue; walk(x, [...trail, k]); }
};
for (const d of docs) walk({ eyebrow: d.eyebrow, title: d.title, summary: d.summary, backLabel: d.backLabel, sections: d.sections }, ["docs", d.key]);
if (new Set(leaves.map((l) => l.path)).size !== leaves.length) throw new Error("경로 중복");
writeFileSync(path.join(here, "en-leaves.json"), JSON.stringify(leaves, null, 2), "utf8");

const PH = /^\{[a-zA-Z]+\}$/;
const uniq = new Map();
for (const l of leaves) {
  if (PH.test(l.en)) continue;
  const e = uniq.get(l.en) ?? { en: l.en, paths: [] };
  e.paths.push(l.path);
  uniq.set(l.en, e);
}
const entries = [...uniq.values()];
const items = entries.map((e, i) => ({ id: "u" + String(i + 1).padStart(3, "0"), en: e.en, uses: e.paths.length }));
writeFileSync(path.join(here, "unique.json"), JSON.stringify(items, null, 2), "utf8");
writeFileSync(path.join(here, "unique-map.json"), JSON.stringify(Object.fromEntries(entries.map((e, i) => ["u" + String(i + 1).padStart(3, "0"), e.paths])), null, 2), "utf8");
// 검사기가 읽는 파일들(이전 12편 작업과 같은 것)
copyFileSync(path.join(SP, "b12", "validate-unique.mjs"), path.join(here, "validate-unique.mjs"));
copyFileSync(path.join(SP, "b12", "traits.json"), path.join(here, "traits.json"));
console.log(`잎 ${leaves.length}개 · 번역할 고유 문자열 ${items.length}개 · 영어 ${items.reduce((n, x) => n + x.en.length, 0)}자`);
