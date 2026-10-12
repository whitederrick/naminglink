import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const SP = process.argv[2];
const APP = "C:/myProjects/naminglink/apps/inyeonlink/src/lib";
const OUT = `${SP}/b12`;
mkdirSync(`${OUT}/tr`, { recursive: true });
const docs = JSON.parse(readFileSync(`${OUT}/B-zodiac-12.en.json`, "utf8"));

// 1) 잎(경로 → 영어)
const leaves = [];
const walk = (v, trail) => {
  if (typeof v === "string") leaves.push({ path: trail.join("."), en: v });
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, [...trail, String(i)]));
  else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) { if (k === "kind") continue; walk(x, [...trail, k]); }
};
for (const d of docs) walk({ eyebrow: d.eyebrow, title: d.title, summary: d.summary, backLabel: d.backLabel, sections: d.sections }, ["docs", d.key]);
if (new Set(leaves.map((l) => l.path)).size !== leaves.length) throw new Error("경로 중복");
writeFileSync(`${OUT}/en-b-leaves.json`, JSON.stringify(leaves, null, 2), "utf8");

// 2) 중복 제거 — 자리표시자만 있는 문자열은 번역하지 않는다
const PH = /^\{[a-zA-Z]+\}$/;
const uniq = new Map();
const traitAnimalOf = {};
for (const d of docs) traitAnimalOf[`docs.${d.key}.sections.0.blocks.1.p`] = d.slug.replace("zodiac-", "");
for (const l of leaves) {
  if (PH.test(l.en)) continue;
  const entry = uniq.get(l.en) ?? { en: l.en, paths: [] };
  entry.paths.push(l.path);
  uniq.set(l.en, entry);
}
const entries = [...uniq.values()];
const items = entries.map((e, i) => {
  const traitPath = e.paths.find((p) => p in traitAnimalOf);
  return { id: "u" + String(i + 1).padStart(3, "0"), en: e.en, uses: e.paths.length, ...(traitPath ? { traitAnimal: traitAnimalOf[traitPath] } : {}) };
});
writeFileSync(`${OUT}/unique.json`, JSON.stringify(items, null, 2), "utf8");
writeFileSync(`${OUT}/unique-map.json`, JSON.stringify(Object.fromEntries(entries.map((e, i) => ["u" + String(i + 1).padStart(3, "0"), e.paths])), null, 2), "utf8");

// 3) 언어별 띠 성향(제품 사전의 animalTraits)
const LOCALES = "ar ja zh de es fr it pt vi th id ru fil uz mn hi tr km ms kk pl".split(" ");
const ANIMALS = ["rat", "ox", "tiger", "rabbit", "dragon", "snake", "horse", "goat", "monkey", "rooster", "dog", "pig"];
const traits = {};
const LINE = /^\s+(\w+):\s*"((?:[^"\\]|\\.)*)",?\s*$/;
for (const loc of LOCALES) {
  const text = readFileSync(`${APP}/i18n-locales/${loc}.ts`, "utf8");
  const start = text.indexOf("animalTraits: {");
  if (start < 0) throw new Error(`${loc} animalTraits 없음`);
  const lines = text.slice(start).split("\n").slice(1);
  const m = {};
  for (const line of lines) {
    if (/^\s*\},?\s*$/.test(line)) break;
    const x = LINE.exec(line);
    if (x) m[x[1]] = x[2].replace(/\\"/g, '"');
  }
  for (const a of ANIMALS) if (!m[a]) throw new Error(`${loc} 띠 성향 ${a} 없음`);
  traits[loc] = Object.fromEntries(ANIMALS.map((a) => [a, m[a]]));
}
writeFileSync(`${OUT}/traits.json`, JSON.stringify(traits, null, 2), "utf8");
console.log(`잎 ${leaves.length}개 · 번역할 고유 문자열 ${items.length}개 (자리표시자 전용 ${leaves.filter((l) => PH.test(l.en)).length}잎 제외) · 성향 문구 ${LOCALES.length}개 언어 × 12`);
console.log(`영어 글자 수(고유): ${items.reduce((n, x) => n + x.en.length, 0)} · 성향 문구가 든 문자열 ${items.filter((x) => x.traitAnimal).length}개`);
