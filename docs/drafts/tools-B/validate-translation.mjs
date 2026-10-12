// 사용: node validate-translation.mjs <en-leaves.json> <번역.json> [로케일]
// translate-doc-content.ts 의 mismatch() 와 같은 조건 + 경로 집합 일치.
// exit 0 = 전부 통과 · exit 1 = 어긋난 잎 있음 · exit 2 = 입력 자체가 못 읽힘(검사 안 됨)
import { readFileSync } from "node:fs";

const [enFile, trFile, locale = "?"] = process.argv.slice(2);
let leaves, given;
try {
  leaves = JSON.parse(readFileSync(enFile, "utf8"));
  given = JSON.parse(readFileSync(trFile, "utf8"));
} catch (e) {
  console.error(`읽지 못했다: ${e.message}`);
  process.exit(2);
}
if (!Array.isArray(leaves) || !leaves.length) {
  console.error("영어 잎이 0개 — 검사 안 됨");
  process.exit(2);
}
if (!given || typeof given !== "object" || Array.isArray(given)) {
  console.error("번역 파일이 {경로: 문자열} 객체가 아니다");
  process.exit(1);
}

const KEEP_VERBATIM = ["Inyeon-Link", "inyeon-link.com", "/ko/compatibility/result"];
const placeholders = (v) => (v.match(/\{[a-zA-Z]+\}/g) ?? []).sort().join(",");
const bolds = (v) => (v.match(/\*\*/g) ?? []).length;
const links = (v) => (v.match(/\]\((\/[^)\s]*)\)/g) ?? []).sort().join(",");
const hangul = (v) => new Set(v.match(/[가-힣]+/g) ?? []);

const problems = [];
const known = new Set(leaves.map((l) => l.path));
for (const leaf of leaves) {
  const value = given[leaf.path];
  const say = (m) => problems.push(`  ${leaf.path} — ${m}`);
  if (typeof value !== "string") { say(value === undefined ? "번역이 없다" : `문자열이 아니다(${typeof value})`); continue; }
  if (leaf.en.trim() && !value.trim()) { say("빈 응답"); continue; }
  for (const term of KEEP_VERBATIM) {
    const exp = leaf.en.split(term).length - 1;
    const act = value.split(term).length - 1;
    if (exp !== act) say(`고유명사 ${term} ${act}회 ≠ en ${exp}회`);
  }
  if (placeholders(value) !== placeholders(leaf.en)) say(`자리표시자 [${placeholders(value)}] ≠ en [${placeholders(leaf.en)}]`);
  if (bolds(value) % 2 !== 0) say(`강조 ** 의 짝이 안 맞는다(${bolds(value)}개)`);
  if (links(value) !== links(leaf.en)) say(`링크 [${links(value)}] ≠ en [${links(leaf.en)}]`);
  const allowed = hangul(leaf.en);
  const extra = [...hangul(value)].filter((w) => !allowed.has(w));
  if (extra.length) say(`옮기지 않은 한글: ${extra.slice(0, 3).join(", ")}`);
}
for (const p of Object.keys(given)) if (!known.has(p)) problems.push(`  ${p} — en 에 없는 열쇠`);

if (problems.length) {
  console.log(`${locale} — 어긋난 잎 ${problems.length}건 (잎 ${leaves.length}개 중)`);
  console.log(problems.join("\n"));
  process.exit(1);
}
console.log(`${locale} — 통과 (잎 ${leaves.length}개, 열쇠 ${Object.keys(given).length}개)`);
