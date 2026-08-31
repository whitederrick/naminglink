// 옛(운영 중인) 218개 사전의 영어 판별을 **실제 `matchDream` 함수로** 전수 훑는다.
//
// CLAUDE.md §23 — 알고리즘 재구현만으로 "뚫린다/안 뚫린다"를 확정하지 않는다.
// 이 스크립트는 재구현이 아니라 `apps/dreamslink/src/lib/engines/dream-match.ts`의
// `matchDream`을 `tsx`로 직접 불러 쓴다.
//
// 의미가 여럿인 상징마다, 각 의미의 판별어(`CONTEXT_EN`)에서 낱말을 하나씩 뽑아
// "상징 이름/별칭 + 그 낱말"로 문장을 만들고, `matchDream`이 그 의미를 정확히
// 고르는지 확인한다. `ownTerms`를 낱말 단위로 쪼갠 수정(dream-match.ts 1.5.0,
// 2026-08-28) 뒤 회귀가 없는지 보는 것이 목적이다.
//
// 실행: cd apps/dreamslink && npx tsx scripts/audit-dream-match-real-sweep.mts

import { readFileSync } from "node:fs";
import path from "node:path";
import * as mod from "../src/lib/engines/dream-match";
const { matchDream } = (mod as any).default as typeof import("../src/lib/engines/dream-match");

const LIB = path.resolve(process.cwd(), "src", "lib");
const old = JSON.parse(readFileSync(path.join(LIB, "dream-symbols.data.json"), "utf8"));

function loadTsRecord(file: string): Record<string, string> {
  const src = readFileSync(path.join(LIB, file), "utf8");
  const noComments = src
    .split("\n")
    .filter((line) => !/^\s*\/\//.test(line))
    .join("\n");
  return JSON.parse(noComments.slice(noComments.indexOf("{"), noComments.lastIndexOf("}") + 1));
}
const CONTEXT_EN = loadTsRecord("dream-contexts.ts");

const STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "but", "if", "of", "in", "on", "at", "to", "into", "onto",
  "is", "am", "are", "was", "were", "be", "been", "being", "do", "does", "did", "done",
  "it", "its", "this", "that", "these", "those", "there", "here", "then", "than",
  "i", "me", "my", "you", "your", "he", "she", "him", "her", "his", "we", "us", "our",
  "they", "them", "their", "one", "some", "any", "all", "no", "not", "so", "as", "by",
  "for", "from", "with", "without", "up", "down", "out", "over", "under", "again",
  "have", "has", "had", "get", "got", "very", "just", "like", "when", "while", "who",
]);

const multi = old.symbols.filter((s: any) => s.meanings.length > 1);

let totalCases = 0;
let wrongPick = 0;
let notMatched = 0;
const failures: string[] = [];

for (const symbol of multi) {
  const nameAlternatives = String(symbol.term_en)
    .split("/")
    .map((s: string) => s.trim())
    .filter(Boolean);

  for (const target of symbol.meanings) {
    const disc = CONTEXT_EN[target.context] ?? "";
    const words = disc
      .split(/\s+/)
      .filter((w: string) => w.length >= 2 && !STOPWORDS.has(w.toLowerCase()));
    if (words.length === 0) continue;

    for (const name of nameAlternatives) {
      for (const word of words) {
        const sentence = `${name} ${word}`;
        totalCases++;
        const outcome = matchDream(sentence);
        const hit = outcome.matched.find((m: any) => m.id === symbol.id);
        if (!hit) {
          notMatched++;
          failures.push(`${symbol.id}(${name}): "${sentence}" → 상징 자체가 안 걸림`);
          continue;
        }
        if (hit.meaning.context !== target.context) {
          wrongPick++;
          failures.push(
            `${symbol.id}(${name}): "${sentence}" → 「${target.context}」를 노렸는데 「${hit.meaning.context}」로 감`,
          );
        }
      }
    }
  }
}

console.log(`판별 필요 상징 ${multi.length}개 · 시험 문장 ${totalCases}개`);
console.log(`오판 ${wrongPick}건 · 상징 자체가 안 걸린 것 ${notMatched}건\n`);
if (failures.length > 0) {
  console.log("상세(최대 60건):");
  for (const f of failures.slice(0, 60)) console.log(`  ${f}`);
  if (failures.length > 60) console.log(`  … 외 ${failures.length - 60}건`);
}
process.exit(wrongPick > 0 ? 1 : 0);
