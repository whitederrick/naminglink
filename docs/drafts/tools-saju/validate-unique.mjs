// 사용: node validate-unique.mjs <locale> [번역 json]   (기본 work/tr/<locale>.json)
// work/unique.json 의 골격 문자열 번역을 검사한다. exit 0 통과 · 1 어긋남 · 2 입력을 못 읽음(검사 안 됨)
import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const loc = process.argv[2];
if (!loc) { console.error("쓰는 법: node validate-unique.mjs <locale> [json]"); process.exit(2); }

let items, tr;
try {
  items = JSON.parse(readFileSync(path.join(here, "work", "unique.json"), "utf8"));
  let file = process.argv[3] ?? path.join(here, "work", "tr", `${loc}.json`);
  if (!process.argv[3] && !existsSync(file)) {
    // 조각 파일(<loc>.p1.json …)을 합친다
    const dir = path.join(here, "work", "tr");
    const parts = readdirSync(dir).filter((n) => n.startsWith(`${loc}.p`) && n.endsWith(".json")).sort();
    if (!parts.length) throw new Error(`${file} 도 조각 파일도 없다`);
    tr = Object.assign({}, ...parts.map((n) => JSON.parse(readFileSync(path.join(dir, n), "utf8"))));
  } else tr = JSON.parse(readFileSync(file, "utf8"));
} catch (e) { console.error(`읽지 못했다: ${e.message}`); process.exit(2); }
if (!Array.isArray(items) || !items.length) { console.error("골격 문자열 0개 — 검사 안 됨"); process.exit(2); }
if (!tr || typeof tr !== "object" || Array.isArray(tr)) { console.log(`${loc} — 번역 파일이 {id: 문자열} 객체가 아니다`); process.exit(1); }

const tokens = (v) => (v.match(/\{\{[A-Za-z]+\d*(?::[A-Z]+)?\}\}|\{[a-zA-Z]+\}/g) ?? []).sort().join(",");
const bold = (v) => (v.match(/\*\*/g) ?? []).length;
const brackets = (v) => (v.match(/\[/g) ?? []).length;
const hangul = (v) => /[가-힣ᄀ-ᇿ㄰-㆏]/.test(v);
const han = (v) => /[一-鿿]/.test(v);
const spaced = new Set(["zh", "ja"]);
const bad = [];
const ids = new Set(items.map((x) => x.id));
for (const id of Object.keys(tr)) if (!ids.has(id)) bad.push(`  ${id} — unique.json 에 없는 id`);
for (const it of items) {
  const v = tr[it.id];
  const say = (m) => bad.push(`  ${it.id} — ${m}  [${it.en.slice(0, 60)}…]`);
  if (typeof v !== "string") { say(v === undefined ? "번역이 없다" : "문자열이 아니다"); continue; }
  if (!v.trim()) { say("빈 문자열"); continue; }
  if (/[\r\n]/.test(v)) say("줄바꿈이 들어 있다");
  if (tokens(v) !== tokens(it.en)) say(`토큰 [${tokens(v)}] ≠ en [${tokens(it.en)}]`);
  if (bold(v) !== bold(it.en)) say(`강조 ** 개수 ${bold(v)} ≠ en ${bold(it.en)}`);
  if (brackets(v) !== brackets(it.en)) say(`링크 대괄호 개수 ${brackets(v)} ≠ en ${brackets(it.en)}`);
  if (it.en.split("Saju-Link").length !== v.split("Saju-Link").length) say("Saju-Link 개수가 en 과 다르다");
  if (hangul(v)) say("한글이 남아 있다");
  if (!spaced.has(loc) && han(v)) say("한자가 직접 적혀 있다(한자는 {{c1}} 토큰으로 둔다)");
  const words = it.en.split(/\s+/).length;
  if (words >= 5 && v.trim() === it.en.trim()) say("영어 그대로다(번역 안 됨)");
  if (!spaced.has(loc) && !["km", "th", "ar", "hi", "mn", "kk", "ru"].includes(loc) && v.length < it.en.length * 0.4) say(`너무 짧다(${v.length} < en ${it.en.length}) — 잘렸을 수 있다`);
}
if (bad.length) { console.log(`${loc} — 어긋난 문자열 ${bad.length}건 (골격 ${items.length}개 중)`); console.log(bad.join("\n")); process.exit(1); }
console.log(`${loc} — 통과 (골격 문자열 ${items.length}개)`);
