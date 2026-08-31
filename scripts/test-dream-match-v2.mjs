// v2 사전(원문 재구축)이 **실제 매칭 알고리즘**에서 올바르게 갈리는지 태워 본다.
//
// `docs/WORKLOG_2026-08-27-4.md` §7 4번 — "새 매칭 키로 실제 matchDream에 태워
// 재확인. 이게 옛 사전에서 매번 결함이 났던 단계라 절대 생략 금지."
//
// v2 표(`dream-contexts-ko.v2.ts` 등)는 아직 프로덕션 `dream-match.ts`에 안 걸려 있다
// (교체는 별도 단계). 그래서 이 스크립트는 `dream-match.ts`의 알고리즘을 **그대로
// 옮겨** v2 데이터에 대해 돈다 — 로직은 원본과 동일하고, 대상 데이터만 다르다.
//
// 방법: 판별이 필요한(의미 2개 이상) 상징 전부에 대해, 각 의미마다 "그 의미의 판별어
// 원문 그대로를 담은 문장"을 만들어 실제로 그 의미가 골라지는지 본다. 판별어 자체를
// 문장으로 쓰므로 "이 판별어 집합이 형제 의미와 실제로 갈리는가"를 전수로 확인하는
// 것과 같다 — km9(boat·mirror)에서 손으로 찾은 동점 버그를 전수 스케일로 재현한다.
//
// 실행: node scripts/test-dream-match-v2.mjs

import { readFileSync } from "node:fs";
import path from "node:path";

const LIB = path.resolve("apps/dreamslink/src/lib");
const v2 = JSON.parse(readFileSync(path.join(LIB, "dream-symbols.v2.data.json"), "utf8"));

function loadTsRecord(file) {
  const src = readFileSync(path.join(LIB, file), "utf8");
  const start = src.indexOf("{");
  const end = src.lastIndexOf("}");
  return JSON.parse(src.slice(start, end + 1));
}

const CONTEXT_KO_V2 = loadTsRecord("dream-contexts-ko.v2.ts");
const CONTEXT_EN_V2 = loadTsRecord("dream-contexts.v2.ts");
const ALIASES_EN_V2 = loadTsRecord("dream-aliases-en.v2.ts");

// ── dream-match.ts와 동일한 알고리즘(핵심 부분만 그대로 옮김) ────────────────

const HANGUL = /[가-힣]/;
const LATIN_WORD = /[a-z0-9]/;
const EN_SUFFIXES = ["'s", "es", "ed", "s"];
const PARTICLES = [
  "에게서", "에게", "에서", "으로", "부터", "까지", "처럼", "보다", "마다", "조차", "밖에",
  "이라", "라고", "이나", "이며", "이고", "이다", "인데", "인가",
  "은", "는", "이", "가", "을", "를", "의", "에", "와", "과", "도", "만", "로", "나", "야",
];
const SCORING_STOPWORDS = new Set([
  "a", "an", "the", "and", "or", "but", "if", "of", "in", "on", "at", "to", "into", "onto",
  "is", "am", "are", "was", "were", "be", "been", "being", "do", "does", "did", "done",
  "it", "its", "this", "that", "these", "those", "there", "here", "then", "than",
  "i", "me", "my", "you", "your", "he", "she", "him", "her", "his", "we", "us", "our",
  "they", "them", "their", "one", "some", "any", "all", "no", "not", "so", "as", "by",
  "for", "from", "with", "without", "up", "down", "out", "over", "under", "again",
  "have", "has", "had", "get", "got", "very", "just", "like", "when", "while", "who",
]);

function normalize(text) {
  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

function isStandalone(haystack, term, at) {
  if (!HANGUL.test(term)) {
    const before = at > 0 ? haystack[at - 1] : "";
    if (LATIN_WORD.test(before)) return false;
    const after = haystack.slice(at + term.length);
    if (!LATIN_WORD.test(after[0] ?? "")) return true;
    return EN_SUFFIXES.some((s) => after.startsWith(s) && !LATIN_WORD.test(after[s.length] ?? ""));
  }
  const before = at > 0 ? haystack[at - 1] : "";
  if (HANGUL.test(before)) return false;
  const after = haystack.slice(at + term.length);
  const next = after[0] ?? "";
  if (!HANGUL.test(next)) return true;
  return PARTICLES.some((p) => after.startsWith(p));
}

function findTerm(haystack, symbol) {
  const terms = [symbol.term_ko, symbol.term_en, ...(symbol.aliases ?? []), ...(ALIASES_EN_V2[symbol.id] ?? [])]
    .filter(Boolean)
    .flatMap((t) => t.split("/"))
    .map((t) => t.trim().toLowerCase())
    .filter((t) => t.length > 0)
    .sort((a, b) => b.length - a.length);
  for (const term of terms) {
    let from = 0;
    for (;;) {
      const at = haystack.indexOf(term, from);
      if (at < 0) break;
      if (isStandalone(haystack, term, at)) return { matchedOn: term, at };
      from = at + 1;
    }
  }
  return null;
}

function isKoreanText(haystack) {
  return HANGUL.test(haystack);
}

function contextFor(symbolId, meaning, korean) {
  const display = meaning.context ?? "";
  const key = `${symbolId}::${display}`;
  if (korean) return CONTEXT_KO_V2[key] ?? display;
  return CONTEXT_EN_V2[key] ?? "";
}

function contextScore(haystack, context, ownTerms = []) {
  const words = context
    .toLowerCase()
    .split(/[^0-9a-z가-힣]+/)
    .filter((w) => w.length >= 2 && !SCORING_STOPWORDS.has(w) && !ownTerms.includes(w));
  return words.reduce((sum, w) => sum + (haystack.includes(w) ? 1 : 0), 0);
}

function chooseMeaning(haystack, symbol) {
  const meanings = symbol.meanings;
  if (meanings.length <= 1) return { meaning: meanings[0], contextMatched: true };
  const korean = isKoreanText(haystack);
  const ownTerms = korean ? [] : [symbol.term_ko, symbol.term_en, ...(symbol.aliases ?? [])].filter(Boolean).map((t) => t.toLowerCase());
  let best = meanings[0];
  let bestScore = 0;
  let tieCount = 0;
  for (const meaning of meanings) {
    const score = contextScore(haystack, contextFor(symbol.id, meaning, korean), ownTerms);
    if (score > bestScore) {
      best = meaning;
      bestScore = score;
      tieCount = 0;
    } else if (score === bestScore && score > 0 && meaning !== best) {
      tieCount++;
    }
  }
  return { meaning: best, contextMatched: bestScore > 0, tieCount, bestScore };
}

// ── 전수 시험 ────────────────────────────────────────────────────────────

const multi = v2.symbols.filter((s) => s.meanings.length > 1);
let totalCases = 0;
let wrongPick = 0;
let tieHit = 0;
const failures = [];

/**
 * **한국어·영어 둘 다 시험한다.** 처음엔 한국어만(`korean=true` 고정) 돌렸는데,
 * `contextFor`가 언어별로 다른 표(CONTEXT_KO_V2/CONTEXT_EN_V2)를 보므로 영어 쪽
 * 겹침은 한국어 시험으로는 절대 안 걸린다 — 실제로 `verify-dream-km.mjs`(부분
 * 문자열 겹침까지 보게 넓힌 뒤)가 영어 쪽에서 40건 가까이 잡았는데, 그중 몇 건이
 * **진짜 오판으로 이어지는지**는 실제 알고리즘으로 영어도 태워 봐야 안다.
 */
for (const langLabel of ["ko", "en"]) {
  const korean = langLabel === "ko";
  for (const symbol of multi) {
    const name = korean ? symbol.term_ko : symbol.term_en;
    if (!name) continue;
    for (const target of symbol.meanings) {
      const disc = contextFor(symbol.id, target, korean);
      if (!disc) continue; // 판별어가 비어 있는 항목은 없어야 하지만 방어적으로 skip

      /**
       * **판별어 전체가 아니라 낱말 하나만으로 문장을 만든다.**
       *
       * 처음에는 판별어 전체를 문장에 넣었는데, 그러면 그 의미가 **자기 낱말을 전부
       * 가진 채** 겨루므로 형제 의미가 일부만 겹쳐도 항상 이긴다 — 실제로 mirror의
       * 동점 버그를 일부러 되살려 대조군으로 돌렸더니 이 방식은 **못 잡았다**(늘
       * 자기 자신이 이겨서). 실제 이용자는 판별어 목록 전부를 적지 않고 **한두 낱말만**
       * 적는다 — 그 상황을 흉내 내려면 낱말 하나로 시험해야 형제와 겹치는 낱말인지가
       * 그대로 드러난다.
       */
      // **기능어(stopword)를 고르면 안 된다** — `contextScore`가 애초에 세지 않는
      // 낱말이라 문장에 넣어 봤자 아무 점수도 안 붙는다("got"·"down" 등을 첫 낱말로
      // 뽑아 "전부 0점"으로 잘못 실패한 사례가 있었다).
      //
      // **첫 낱말 하나만 시험하는 것으로는 부족하다.** `verify-dream-km.mjs`(부분
      // 문자열 겹침 검사)가 30건을 더 찾았는데, 그중 상당수가 discriminator의
      // **첫 낱말이 아닌** 자리에 있었다("hill"이 "shallow shore **hill** aground…"의
      // 세 번째 낱말인 식) — 첫 낱말만 시험하면 그 자리는 아예 확인되지 않는다.
      // **낱말 전부를 하나씩** 시험해야 어디 있든 걸린다.
      const words = disc.split(/\s+/).filter((w) => w.length >= 2 && !SCORING_STOPWORDS.has(w.toLowerCase()));
      if (words.length === 0) continue;

      for (const word of words) {
        const sentence = normalize(`${name} ${word}`);
        totalCases++;

        const hit = findTerm(sentence, symbol);
        if (!hit) {
          failures.push(`[${langLabel}] ${symbol.id}: 「${target.context}」(낱말 「${word}」) 문장에서 상징 자체가 안 걸림 — ${sentence}`);
          continue;
        }
        const { meaning, tieCount, bestScore } = chooseMeaning(sentence, symbol);
        if (meaning !== target) {
          wrongPick++;
          failures.push(
            `[${langLabel}] ${symbol.id}: 「${target.context}」(낱말 「${word}」)가 다른 의미로 갔다 → 「${meaning.context}」 (문장: ${sentence})`,
          );
        } else if (tieCount > 0) {
          tieHit++;
          failures.push(`[${langLabel}] ${symbol.id}: 「${target.context}」(낱말 「${word}」)가 이기긴 했지만 동점 상대 ${tieCount}건 있었음(점수 ${bestScore})`);
        }
      }
    }
  }
}

console.log(`판별 필요 상징 ${multi.length}개 · 시험 문장 ${totalCases}개`);
console.log(`오판(다른 의미로 감) ${wrongPick}건 · 동점 위험(이기긴 했지만) ${tieHit}건`);
if (failures.length > 0) {
  console.log("\n상세:");
  for (const f of failures.slice(0, 60)) console.log(`  ${f}`);
  if (failures.length > 60) console.log(`  … 외 ${failures.length - 60}건`);
}

if (totalCases === 0) {
  console.error("\n시험할 것이 0개다 — 검사 안 됨으로 처리한다.");
  process.exit(2);
}
if (wrongPick > 0) {
  console.error("\n오판이 있다 — 판별어를 고쳐야 한다.");
  process.exit(1);
}
console.log(tieHit > 0 ? "\n오판은 0건이지만 동점 위험이 있다(점검 권장)." : "\n오판 0건, 동점 위험 0건.");
process.exit(0);
