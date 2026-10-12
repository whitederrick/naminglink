// 사용: node validate-unique.mjs <locale>
// b12/unique.json 의 고유 문자열 번역(b12/tr/<locale>.json)을 검사한다.
// exit 0 통과 · 1 어긋남 · 2 입력을 못 읽음(검사 안 됨)
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const loc = process.argv[2];
if (!loc) { console.error("쓰는 법: node validate-unique.mjs <locale>"); process.exit(2); }

let items, tr, traits;
try {
  items = JSON.parse(readFileSync(path.join(here, "unique.json"), "utf8"));
  tr = JSON.parse(readFileSync(process.argv[3] ?? path.join(here, "tr", `${loc}.json`), "utf8"));
  traits = JSON.parse(readFileSync(path.join(here, "traits.json"), "utf8"))[loc];
} catch (e) { console.error(`읽지 못했다: ${e.message}`); process.exit(2); }
if (!Array.isArray(items) || !items.length) { console.error("고유 문자열 0개 — 검사 안 됨"); process.exit(2); }
if (!traits) { console.error(`traits.json 에 ${loc} 없음`); process.exit(2); }
if (!tr || typeof tr !== "object" || Array.isArray(tr)) { console.log(`${loc} — 번역 파일이 {id: 문자열} 객체가 아니다`); process.exit(1); }

const ph = (v) => (v.match(/\{[a-zA-Z]+\}/g) ?? []).sort().join(",");
const bold = (v) => (v.match(/\*\*/g) ?? []).length;
const links = (v) => (v.match(/\]\((\/[^)\s]*)\)/g) ?? []).sort().join(",");
const nums = (v) => (v.match(/\d+(?:[.,]\d+)?/g) ?? []).sort().join(",");
const hg = (v) => new Set(v.match(/[가-힣]+/g) ?? []);
const cjk = (v) => [...(v.match(/[一-鿿]/g) ?? [])];
const count = (a) => a.reduce((m, c) => (m.set(c, (m.get(c) ?? 0) + 1), m), new Map());
const bad = [];
const ids = new Set(items.map((x) => x.id));
for (const id of Object.keys(tr)) if (!ids.has(id)) bad.push(`  ${id} — unique.json 에 없는 id`);
for (const it of items) {
  const v = tr[it.id];
  const say = (m) => bad.push(`  ${it.id} — ${m}  [${it.en.slice(0, 50)}…]`);
  if (typeof v !== "string") { say(v === undefined ? "번역이 없다" : "문자열이 아니다"); continue; }
  if (!v.trim()) { say("빈 문자열"); continue; }
  if (ph(v) !== ph(it.en)) say(`자리표시자 [${ph(v)}] ≠ en [${ph(it.en)}]`);
  if (bold(v) % 2) say("강조 ** 의 짝이 안 맞는다");
  if (bold(v) !== bold(it.en)) say(`강조 ** 개수 ${bold(v)} ≠ en ${bold(it.en)}`);
  if (links(v) !== links(it.en)) say(`링크 [${links(v)}] ≠ en [${links(it.en)}]`);
  if (nums(v) !== nums(it.en)) say(`숫자 [${nums(v)}] ≠ en [${nums(it.en)}]`);
  if (it.en.split("Inyeon-Link").length !== v.split("Inyeon-Link").length) say("Inyeon-Link 개수가 en 과 다르다");
  const allowed = hg(it.en);
  const extra = [...hg(v)].filter((w) => !allowed.has(w));
  if (extra.length) say(`옮기지 않은 한글: ${extra.slice(0, 3).join(", ")}`);
  const ec = count(cjk(it.en)), vc = count(cjk(v));
  const ok = loc === "zh" || loc === "ja"
    ? [...ec].every(([ch, k]) => (vc.get(ch) ?? 0) >= k)
    : ec.size === vc.size && [...ec].every(([ch, k]) => vc.get(ch) === k);
  if (!ok) say("한자 표본(子丑寅…·申子辰…)이 en 과 다르다");
  if (it.traitAnimal) {
    const t = traits[it.traitAnimal];
    if (!v.includes(t)) say(`띠 성향 문구(${it.traitAnimal})가 traits.json 과 글자 그대로가 아니다`);
  }
}
if (bad.length) { console.log(`${loc} — 어긋난 문자열 ${bad.length}건 (고유 ${items.length}개 중)`); console.log(bad.join("\n")); process.exit(1); }
console.log(`${loc} — 통과 (고유 문자열 ${items.length}개)`);
