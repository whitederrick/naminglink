// 옛(운영 중인) 218개 해몽 사전에서, 다중 단어/슬래시 영어 이름을 가진 상징 17개가
// `dream-match.ts`의 `ownTerms` 제외 결함으로 **실제로 뚫리는지** 확인한다.
//
// ## 왜 의심하는가 (docs/WORKLOG_2026-08-28.md 곁가지)
//
// v2 재구축 중 `killing-someone`(term_en="killing someone") 같은 상징에서 실제로
// 오판이 났다 — `chooseMeaning`의 `ownTerms`가 상징 이름을 **낱말로 안 쪼개고 통째로만**
// 걸러서, 다중 단어 이름의 구성 낱말(예: "someone")이 그 자체로 어떤 의미의 판별어로
// 쓰이면 **모든 형제 의미 시험에 항상 새어 들어온다.**
//
// 옛 사전에도 같은 모양(`term_en`이 "A / B"나 여러 낱말)인 상징이 17개 있다
// (`cow / ox`·`rat / mouse`·`grave / tomb` 등). 이 스크립트는 **`dream-match.ts`의
// 알고리즘을 그대로 옮겨** 그 17개에 대해 전수(낱말 하나하나) 시험한다.
//
// **한국어는 이 결함과 무관하다** — `ownTerms`는 영어에서만 적용된다
// (`chooseMeaning`의 `korean ? [] : [...]` 분기, dream-match.ts:320-324). 그래서
// 이 스크립트는 영어만 시험한다.
//
// ## 이 스크립트만 믿지 말 것 — 실제 `matchDream`으로 재확인한 결과 (2026-08-28(2))
//
// 이 스크립트는 **알고리즘을 손으로 옮긴 재구현**이라, 진짜 문제인지는 실제
// `apps/dreamslink/src/lib/engines/dream-match.ts`의 `matchDream`을 직접 불러(tsx로)
// 자연스러운 문장으로 다시 확인해야 한다("제대로 본 게 맞냐"는 지적을 받고 확인함).
//
// 그렇게 다시 보니 **`tooth-fall`은 실제로는 거의 안 뚫린다** — 이 스크립트는
// `term_en`을 "/" 없이 그대로("tooth falling out") 시험 문장에 넣는데, **실제
// 이용자는 그 3단어 문구를 그대로 안 친다.** 진짜 트리거는 `ALIASES_EN["tooth-fall"]`
// 의 자연스러운 문구("tooth fell out"·"lost a tooth"·"teeth fell out")이고, 그
// 경로로 자연스러운 문장 여러 개를 시험하니 전부 올바르게 갈렸다(동점은 이론상
// 여전히 나지만 배열 순서가 우연히 맞는 쪽을 앞에 둬서 매번 정답이 이겼다).
//
// 반대로 **`naked`·`ancestor`는 실제로도 넓게 뚫린다** — `ALIASES_EN`(`"was naked"`
// 등)이나 슬래시 분리("ancestor / deceased"→"ancestor")로 **자연스러운 문장이
// 그대로 걸리고**, 판별어 자체에 상징 이름이 그대로 박혀 있어(`naked`의 두 의미
// 판별어 둘 다 "being naked"를 포함, `ancestor`의 두 의미 판별어 둘 다 "ancestor
// deceased"를 포함) 정확한 구분 낱말("care"·"dark"·"demand")을 안 쓰면 자연스러운
// 표현 대부분이 틀린 의미로 간다(자세한 실측은 `dream-match-ownterms-slash-bug-live`
// 메모리 참고).
//
// **결론**: 이 스크립트의 결과 목록은 **후보**일 뿐이다. 후보로 나온 것은 반드시
// 실제 `matchDream`을 자연스러운 문장으로 다시 태워 확인한 뒤에만 "뚫린다"고 말할 것.
//
// 실행: node scripts/audit-dream-ownterms-multiword.mjs

import { readFileSync } from "node:fs";
import path from "node:path";

const LIB = path.resolve("apps/dreamslink/src/lib");
const old = JSON.parse(readFileSync(path.join(LIB, "dream-symbols.data.json"), "utf8"));
const symbols = old.symbols;

function loadTsRecord(file) {
  const src = readFileSync(path.join(LIB, file), "utf8");
  // 프로덕션 표 파일은 `// 주석` 줄이 객체 본문 안에도 있다(순수 JSON이 아니다) —
  // 통짜 줄 주석만 지운다(문자열 값 안에 `//`가 있는 자리는 없음을 확인했다).
  const noComments = src
    .split("\n")
    .filter((line) => !/^\s*\/\//.test(line))
    .join("\n");
  return JSON.parse(noComments.slice(noComments.indexOf("{"), noComments.lastIndexOf("}") + 1));
}
const CONTEXT_EN = loadTsRecord("dream-contexts.ts");
const ALIASES_EN = loadTsRecord("dream-aliases-en.ts");

// ── dream-match.ts의 알고리즘을 그대로 옮김 (findTerm/isStandalone/chooseMeaning/contextScore) ──

const HANGUL = /[가-힣]/;
const LATIN_WORD = /[a-z0-9]/;
const EN_SUFFIXES = ["'s", "es", "ed", "s"];
const SCORING_STOPWORDS = new Set([
  "a","an","the","and","or","but","if","of","in","on","at","to","into","onto","is","am","are","was","were","be","been","being","do","does","did","done","it","its","this","that","these","those","there","here","then","than","i","me","my","you","your","he","she","him","her","his","we","us","our","they","them","their","one","some","any","all","no","not","so","as","by","for","from","with","without","up","down","out","over","under","again","have","has","had","get","got","very","just","like","when","while","who",
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
  return true; // 이 감사는 영어만 다룬다
}

function findTerm(haystack, symbol) {
  const terms = [symbol.term_ko, symbol.term_en, ...(symbol.aliases ?? []), ...(ALIASES_EN[symbol.id] ?? [])]
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

// **옛 엔진 그대로** — 문맥 표 키가 상징id 없이 문구 하나뿐이다(dream-match.ts:358-372).
function contextFor(meaning) {
  const display = meaning.context ?? "";
  return CONTEXT_EN[display] ?? "";
}

function contextScore(haystack, context, ownTerms) {
  const words = context.toLowerCase().split(/[^0-9a-z가-힣]+/).filter((w) => w.length >= 2 && !SCORING_STOPWORDS.has(w) && !ownTerms.includes(w));
  return words.reduce((sum, w) => sum + (haystack.includes(w) ? 1 : 0), 0);
}

function chooseMeaning(haystack, symbol) {
  const meanings = symbol.meanings;
  if (meanings.length <= 1) return { meaning: meanings[0], contextMatched: true };
  // **옛 엔진 그대로** — ownTerms는 이름을 통째로만 담는다(쪼개지 않는다).
  const ownTerms = [symbol.term_ko, symbol.term_en, ...(symbol.aliases ?? [])].filter(Boolean).map((t) => t.toLowerCase());
  let best = meanings[0];
  let bestScore = 0;
  let tieCount = 0;
  for (const meaning of meanings) {
    const score = contextScore(haystack, contextFor(meaning), ownTerms);
    if (score > bestScore) {
      best = meaning;
      bestScore = score;
      tieCount = 0;
    } else if (score === bestScore && score > 0 && meaning !== best) {
      tieCount++;
    }
  }
  return { meaning: best, bestScore, tieCount };
}

// ── 대상 17개 ────────────────────────────────────────────────────────────

const TARGET_IDS = [
  "ox", "rat", "tooth-fall", "naked", "marriage", "gold", "boat", "grave",
  "ancestor", "president", "monk", "god", "road", "stone", "letter", "apple", "wine",
];

let totalCases = 0;
let wrongPick = 0;
let tieHit = 0;
const findings = [];

for (const symId of TARGET_IDS) {
  const symbol = symbols.find((s) => s.id === symId);
  if (!symbol) {
    console.error(`사전에 없는 id: ${symId}`);
    continue;
  }
  if (symbol.meanings.length <= 1) continue; // 판별 자체가 없으면 이 결함과 무관

  // 실제 이용자가 칠 법한 이름 — term_en을 findTerm처럼 "/"로 갈라 각 대안을 따로 시험.
  const nameAlternatives = symbol.term_en.split("/").map((s) => s.trim()).filter(Boolean);

  for (const target of symbol.meanings) {
    const disc = contextFor(target);
    if (!disc) continue;
    const words = disc.split(/\s+/).filter((w) => w.length >= 2 && !SCORING_STOPWORDS.has(w.toLowerCase()));
    if (words.length === 0) continue;

    for (const name of nameAlternatives) {
      for (const word of words) {
        const sentence = normalize(`${name} ${word}`);
        totalCases++;

        const hit = findTerm(sentence, symbol);
        if (!hit) {
          findings.push(`${symId}(${name}): 「${target.context}」(낱말「${word}」) 문장에서 상징이 안 걸림 — "${sentence}"`);
          continue;
        }
        const { meaning, bestScore, tieCount } = chooseMeaning(sentence, symbol);
        if (meaning !== target) {
          wrongPick++;
          findings.push(
            `${symId}(${name}): "${sentence}" → 「${target.context}」를 노렸는데 「${meaning.context}」로 갔다(오판)`,
          );
        } else if (tieCount > 0) {
          tieHit++;
          findings.push(`${symId}(${name}): "${sentence}" → 「${target.context}」가 이기긴 했지만 동점 상대 ${tieCount}건(점수 ${bestScore})`);
        }
      }
    }
  }
}

console.log(`대상 17개 중 판별 필요(의미 2개 이상): ${TARGET_IDS.filter((id) => symbols.find((s) => s.id === id)?.meanings.length > 1).length}개`);
console.log(`시험 문장 ${totalCases}개`);
console.log(`오판 ${wrongPick}건 · 동점 위험 ${tieHit}건\n`);

if (findings.length > 0) {
  console.log("상세:");
  for (const f of findings) console.log(`  ${f}`);
}

// ── 자연스러운 문장으로도 재확인 ──────────────────────────────────────────
console.log("\n=== 자연스러운 문장으로 재확인 ===");
const naturalCases = [
  { id: "naked", text: "I was naked in front of everyone but I didn't care at all", want: "개의치 않음" },
  { id: "ancestor", text: "my deceased ancestor appeared and seemed to demand something, it felt dark", want: "무언가 요구/어두움" },
  { id: "tooth-fall", text: "one of my lower teeth suddenly fell out", want: "아랫니가 빠짐" },
];
for (const c of naturalCases) {
  const symbol = symbols.find((s) => s.id === c.id);
  const sentence = normalize(c.text);
  const { meaning, bestScore, tieCount } = chooseMeaning(sentence, symbol);
  const ok = meaning.context === c.want;
  console.log(`${ok ? "OK" : "FAIL"} [${c.id}] "${c.text}"\n     의도: 「${c.want}」 실제: 「${meaning.context}」(점수${bestScore}, 동점${tieCount})`);
}

process.exit(wrongPick > 0 ? 1 : 0);
