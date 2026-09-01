// km*.json(매칭 키 중간 산출물) 자체 검증 — 사전에 반영하기 전 사람이 직접 대조하는 자리.
//
// km1·km3·km6은 이전 세션에서 사람이 직접 대조해 구조적 문제 0건을 확인했다.
// km2·km4·km5·km7·km8·km9는 에이전트 자체 보고만 있고 사람이 대조한 적이 없다
// (docs/WORKLOG_2026-08-27-4.md §5). 이 스크립트가 그 대조를 재현 가능하게 한다.
//
// 확인하는 것 (에이전트에게 지시했던 규칙 그대로):
// 1. id가 dream-symbols.v2.data.json의 실제 상징과 1:1로 맞는가 (없는 id·중복 id)
// 2. 한 글자 상징(term_ko.length === 1)의 별칭에 한 글자짜리가 섞여 있는가
//    ("이"·"실"·"장" 같은 이름이 평범한 낱말 속에 늘 들어가는 문제)
// 3. 문맥 판별어(contexts 값)에 상징 이름(term_ko) 자체가 들어 있는가
//    (들어있으면 그 상징의 모든 의미가 똑같이 점수를 받아 동점)
// 4. 같은 상징 안에서 서로 다른 문맥의 판별어가 겹치는 낱말을 공유하는가
//    (겹치면 그 낱말이 나온 문장이 어느 문맥에 속하는지 갈리지 않는다)
//
// ## 5. 커버리지 — **이 검사기가 오래 못 보던 자리** (2026-08-31에 추가)
//
// 위 1~4는 전부 **파일에 있는 항목**을 훑는다. 그래서 **아예 빠진 것은 못 본다** —
// 상징에 항목이 없거나, 항목은 있는데 어떤 의미의 판별어가 없으면 위반 0건으로
// 조용히 통과한다. 실제로 그 상태로 지나갔다:
//
//   주공해몽·밀러를 한 사전으로 합친 뒤, **두 원문에 다 있는 상징 34개**의 밀러 쪽
//   의미 124개에 판별어가 없었다. km 배치는 밀러가 합쳐지기 전에 만들어졌고, 밀러
//   배치는 "키가 아예 없는 상징"만 골랐다(그 34개는 항목이 **있었다**). 검사기는
//   678개 항목 위반 0건이라고 했고, 커버리지를 손으로 세어서야 142개가 드러났다.
//
// CLAUDE.md §24가 그 사고다 — **진위 검사와 커버리지 대조는 다른 일이다.**
// 이제 인자 없이 돌리면(=전수) 커버리지도 함께 본다. 파일 몇 개만 지정해 돌릴 때는
// 전체를 알 수 없으므로 건너뛰고, 건너뛰었다고 화면에 적는다(§1 — 「검사 안 됨」을
// 통과로 보이게 하지 않는다).
//
// 실행: node scripts/verify-dream-km.mjs [km2 kmm4 ...]  (인자 없으면 km1~9·kmm1~7 전부)
// 종료 코드: 0 위반 없음 / 1 위반 있음 / 2 검사할 것이 없음

import { readFileSync, existsSync, readdirSync } from "node:fs";
import path from "node:path";

const EXTRACT_DIR = path.resolve("apps/dreamslink/data-sources/extract");
const V2_PATH = path.resolve("apps/dreamslink/src/lib/dream-symbols.v2.data.json");

if (!existsSync(V2_PATH)) {
  console.error(`사전 파일이 없다: ${V2_PATH}`);
  process.exit(2);
}
const v2 = JSON.parse(readFileSync(V2_PATH, "utf8"));
const symbolById = new Map(v2.symbols.map((s) => [s.id, s]));

const argGroups = process.argv.slice(2).filter((a) => !a.startsWith("--"));

/**
 * 전수 목록. **주공해몽(`km1~9`)과 밀러(`kmm1~7`)를 둘 다 넣는다** — 밀러를 합친 뒤
 * 기본값이 `km1~9`에 머물러 있으면 밀러 키 265개가 매번 검사에서 빠진다.
 */
const ALL_GROUPS = [
  // **세어 적지 않는다** — 디렉터리에 있는 것을 전부 읽는다(CLAUDE.md §5).
  // 2026-09-01에 `kmm8.json`을 더했는데 목록이 `kmm7`에 머물러 있어 새 상징 18개의
  // 별칭·판별어가 통째로 빠졌다. 이 파일의 주석이 경고하던 바로 그 자리다.
  ...readdirSync(EXTRACT_DIR)
    .filter((f) => /^kmm?\d+\.json$/.test(f))
    .map((f) => f.replace(/\.json$/, ""))
    .sort((a, b) => a.length - b.length || a.localeCompare(b)),
];

const groups = argGroups.length > 0 ? argGroups : ALL_GROUPS;
/** 일부만 돌리면 커버리지를 잴 수 없다 — 잰 척하지 않는다. */
const checkCoverage = argGroups.length === 0;

let totalEntries = 0;
let totalViolations = 0;
const usedIds = new Set();
/** 커버리지 대조용 — id → 항목. 「무엇이 빠졌는가」는 모아 놓고서야 물을 수 있다. */
const entryById = new Map();

for (const group of groups) {
  const file = path.join(EXTRACT_DIR, `${group}.json`);
  if (!existsSync(file)) {
    console.error(`파일 없음: ${file}`);
    process.exit(2);
  }
  const entries = JSON.parse(readFileSync(file, "utf8"));
  if (!Array.isArray(entries) || entries.length === 0) {
    console.error(`${group}: 배열이 아니거나 비어 있다`);
    process.exit(2);
  }

  const bad = [];

  for (const e of entries) {
    totalEntries++;
    const tag = `${group} [${e.id}]`;

    const sym = symbolById.get(e.id);
    if (!sym) {
      bad.push(`${tag} 사전에 없는 id`);
      continue;
    }
    if (usedIds.has(e.id)) bad.push(`${tag} 다른 그룹과 id 중복`);
    usedIds.add(e.id);
    entryById.set(e.id, e);

    const term = sym.term_ko;
    const isSingleChar = term.length === 1;

    for (const alias of e.aliases ?? []) {
      if (isSingleChar && alias.trim().length < 2) {
        bad.push(`${tag} 한 글자 상징(${term})의 별칭이 한 글자: 「${alias}」`);
      }
    }

    /**
     * 한 언어의 문맥 표를 검사한다. 한국어(`contexts`, term_ko)·영어(`contexts_en`,
     * term_en) 둘 다 같은 위험을 안는다 — `dream-match.ts`의 `contextScore`는 영어에서만
     * 상징 자기 이름(`ownTerms`)을 점수에서 빼고, 그 밖의 낱말은 한국어·영어 어느 쪽도
     * 걸러 주지 않는다. 그래서 **형제 문맥끼리 겹치는 낱말은 언어를 가리지 않고 같은
     * 위험**이다(2026-08-27(2) 재검증에서 mirror·boat 두 상징이 한국어·영어 양쪽에서
     * 실제로 이 문제로 동점이 나는 것을 `contextScore`를 그대로 흉내 낸 시뮬레이션으로
     * 확인했다 — 겹치는 낱말이 한쪽에만 남으면 그 쪽으로 점수가 쏠린다).
     */
    function checkContextMap(contexts, label, symbolTerm) {
      const wordsByContext = new Map();
      for (const [ctx, discStr] of Object.entries(contexts)) {
        const words = discStr.split(/\s+/).filter(Boolean);
        if (words.length === 0) {
          bad.push(`${tag} [${label}] 문맥 「${ctx}」의 판별어가 비어 있음`);
          continue;
        }
        for (const w of words) {
          // **바로 그 이름 자체**만 문제다(예: "불"·"fire" 그대로). 그 이름을 포함한
          // 복합어("산불"·"불꽃")는 별개의 낱말이라 `contextScore`가 정확히 그 부분
          // 문자열이 있을 때만 세므로 동점 위험이 없다 — 오히려 한 글자 상징을 가르는
          // 정당한 방법이다. `.includes()`로 셌다가 이런 정상 복합어를 전부 위반으로
          // 오탐한 적이 있다(재검증 중 발견) — `===`로 좁혔다.
          if (w.toLowerCase() === symbolTerm.toLowerCase()) {
            bad.push(`${tag} [${label}] 문맥 「${ctx}」 판별어에 상징 이름(${symbolTerm}) 그대로 포함`);
          }
        }
        wordsByContext.set(ctx, new Set(words.map((w) => w.toLowerCase())));
      }

      /**
       * **부분 문자열 겹침도 같은 위험이다.** `dream-match.ts`의 `contextScore`는
       * `haystack.includes(word)`로 세는데, 이건 낱말 경계가 없는 순수 부분 문자열
       * 검사다. 그래서 두 형제 문맥의 판별어가 **글자 그대로 같지 않아도** 한쪽이
       * 다른 쪽의 부분 문자열이면(예: "올라"가 "올라갔"의 앞부분) 짧은 쪽 낱말이
       * 긴 쪽 낱말이 나온 문장에서도 걸린다 — 실제로 `tree` 상징에서 "올라"/"올라갔",
       * "부러"/"부러졌"이 이렇게 겹쳐 `test-dream-match-v2.mjs`(낱말 하나로 문장을
       * 만드는 실측)에서 오판이 났다(2026-08-28(2)). 정확히 같은 문자열만 보던
       * 첫 판(§) 검사는 이걸 못 잡았다 — 길이 차가 나는 접두어 관계까지 봐야 한다.
       */
      const ctxList = [...wordsByContext.entries()];
      for (let i = 0; i < ctxList.length; i++) {
        for (let j = i + 1; j < ctxList.length; j++) {
          const [ctxA, wordsA] = ctxList[i];
          const [ctxB, wordsB] = ctxList[j];
          for (const wa of wordsA) {
            for (const wb of wordsB) {
              if (wa === wb) {
                bad.push(`${tag} [${label}] 문맥 「${ctxA}」와 「${ctxB}」가 판별어 「${wa}」를 공유(동점 위험)`);
              } else if (wa.includes(wb) || wb.includes(wa)) {
                bad.push(
                  `${tag} [${label}] 문맥 「${ctxA}」의 「${wa}」와 「${ctxB}」의 「${wb}」가 부분 문자열로 겹침(동점 위험)`,
                );
              }
            }
          }
        }
      }
    }

    checkContextMap(e.contexts ?? {}, "ko", term);
    checkContextMap(e.contexts_en ?? {}, "en", sym.term_en);
  }

  totalViolations += bad.length;
  console.log(`${group}: 항목 ${entries.length}개${bad.length ? ` · 위반 ${bad.length}건` : " · 통과"}`);
  for (const line of bad) console.log(`    ${line}`);
}

console.log(`\n합계: 항목 ${totalEntries}개 · 위반 ${totalViolations}건`);

// ── 5. 커버리지 — 「빠진 것」은 위 검사들이 볼 수 없다 (CLAUDE.md §24) ──────────

if (checkCoverage) {
  const noKey = [];
  const noContext = [];

  for (const sym of v2.symbols) {
    const e = entryById.get(sym.id);
    if (!e) {
      noKey.push(`  ${sym.id}(${sym.term_ko}) — 매칭 키 항목이 없다`);
      continue;
    }
    // 의미가 하나뿐이면 가를 것이 없으므로 판별어를 요구하지 않는다.
    if (sym.meanings.length < 2) continue;
    for (const m of sym.meanings) {
      const missKo = !(m.context in (e.contexts ?? {}));
      const missEn = !(m.context in (e.contexts_en ?? {}));
      if (missKo || missEn) {
        const which = missKo && missEn ? "ko·en" : missKo ? "ko" : "en";
        noContext.push(`  ${sym.id}(${sym.term_ko}) 「${m.context}」 — 판별어 없음(${which})`);
      }
    }
  }

  const coverageBad = noKey.length + noContext.length;
  console.log(
    `커버리지: 상징 ${v2.symbols.length}개 중 키 있음 ${entryById.size}개` +
      ` · 판별어 빠진 의미 ${noContext.length}개`,
  );
  for (const line of noKey.slice(0, 20)) console.log(line);
  if (noKey.length > 20) console.log(`  … 외 ${noKey.length - 20}개`);
  for (const line of noContext.slice(0, 20)) console.log(line);
  if (noContext.length > 20) console.log(`  … 외 ${noContext.length - 20}개`);

  totalViolations += coverageBad;
} else {
  // **건너뛴 것을 통과로 보이게 하지 않는다**(CLAUDE.md §1).
  console.log("커버리지: 일부 파일만 지정해 돌렸으므로 재지 않았다 — 전수는 인자 없이 돌린다.");
}

if (totalEntries === 0) {
  console.error("검사한 항목이 0개다 — 검사 안 됨으로 처리한다.");
  process.exit(2);
}
if (totalViolations > 0) {
  console.error("구조적 문제가 있다.");
  process.exit(1);
}
console.log("구조적 문제 0건.");
process.exit(0);
