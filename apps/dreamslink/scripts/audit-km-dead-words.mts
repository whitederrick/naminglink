// **매칭 키의 판별어 중 엔진이 아예 세지 않는 「죽은 낱말」을 찾는다.**
//
// ## 왜 검사기가 이것을 못 봤나
//
// `verify-dream-km.mjs`는 판별어끼리 겹치는지, 이름이 들어갔는지를 본다. 그런데
// **엔진은 판별어를 그대로 세지 않는다** — `contextScore`가 먼저 추린다:
//
//   · 두 글자 미만은 버린다            ("이", "a")
//   · 기능어는 버린다                  (`SCORING_STOPWORDS` — "onto", "over", "the" …)
//   · **그 상징의 제 이름 낱말은 버린다**(`ownTerms` — `term_ko`·`term_en`·`aliases`를
//     낱말로 쪼갠 것). 단 **한국어에는 적용하지 않는다**(엔진 주석 참고).
//
// 그래서 별칭에 쓴 낱말을 판별어로 재사용하면 **조용히 0점**이 된다. 판별어 넷 중 둘이
// 죽어 있어도 검사기는 통과시킨다 — 이것도 §24와 같은 병이다(있는 것만 보고, 그것이
// 실제로 일하는지는 안 본다). 실제로 밀러 키를 만들다 `ant`의 "onto"가 이렇게 걸렸다.
//
// ## 규칙을 두 벌로 적지 않는다 (CLAUDE.md §6)
//
// 추리는 판정을 여기 옮겨 적지 않고 **엔진의 `scoringWordsOf`·`ownTermsOf`를 그대로
// 부른다.** 엔진이 바뀌면 이 검사기도 같이 바뀐다. 손으로 옮긴 재구현은 실물과 다르게
// 행동한다(§23에서 실제로 그랬다).
//
// ⚠️ **앱 폴더에서 돌려야 한다** — 엔진이 `@/lib/...` 별칭으로 다른 모듈을 부르는데,
//    그 별칭은 `apps/dreamslink/tsconfig.json`에서만 풀린다. 저장소 뿌리에서 돌리면
//    `Cannot find module '@/lib/dream-aliases-en'`으로 죽는다(경로 문제이지 결함이 아니다).
//
// 실행:  cd apps/dreamslink && npx tsx scripts/audit-km-dead-words.mts
// 종료 코드: 0 죽은 낱말 없음 / 1 있음 / 2 검사할 것이 없음

import { readFileSync, existsSync } from "node:fs";
import path from "node:path";

/**
 * ⚠️ **named export 로 바로 못 받는다.** `tsx`로 이 저장소의 프로덕션 TS를 직접 import하면
 * Node의 cjs-module-lexer가 named export를 못 읽어 **전부 `default` 하나로 뭉쳐 온다**
 * (CLAUDE.md §23에 기록된 것과 같은 자리). 파일 자체의 결함이 아니라 실행 환경 문제다.
 * 둘 다 대비해 받는다 — 못 받으면 **조용히 통과하지 말고 멈춘다**(§1).
 */
import * as engineModule from "../src/lib/engines/dream-match";

type EngineApi = {
  ownTermsOf: (
    s: { term_ko: string; term_en: string; aliases?: string[] },
    korean: boolean,
  ) => string[];
  scoringWordsOf: (context: string, ownTerms?: string[]) => string[];
};

const engine = (
  (engineModule as { ownTermsOf?: unknown }).ownTermsOf
    ? engineModule
    : (engineModule as unknown as { default: unknown }).default
) as EngineApi;

if (typeof engine?.ownTermsOf !== "function" || typeof engine?.scoringWordsOf !== "function") {
  console.error(
    "엔진에서 ownTermsOf·scoringWordsOf 를 받지 못했다 — 검사 안 됨으로 처리한다.",
  );
  process.exit(2);
}

const { ownTermsOf, scoringWordsOf } = engine;

/**
 * ESM 이라 `__dirname`이 없다. 저장소 뿌리를 **찾아서** 잡는다 — 앱 폴더에서 돌리든
 * 뿌리에서 돌리든 같은 곳을 가리켜야 한다(`cd`가 남는 셸에서 경로를 두 번 틀린 적이 있다, §7).
 */
const ROOT = (() => {
  let dir = process.cwd();
  for (let i = 0; i < 5; i++) {
    if (existsSync(path.join(dir, "apps/dreamslink/data-sources/extract"))) return dir;
    dir = path.dirname(dir);
  }
  console.error("저장소 뿌리를 못 찾았다 — 검사 안 됨으로 처리한다.");
  process.exit(2);
})();
const EXTRACT = path.join(ROOT, "apps/dreamslink/data-sources/extract");
const DICT = path.join(ROOT, "apps/dreamslink/src/lib/dream-symbols.v2.data.json");

const GROUPS = [
  ...Array.from({ length: 9 }, (_, i) => `km${i + 1}`),
  ...Array.from({ length: 7 }, (_, i) => `kmm${i + 1}`),
];

type KmEntry = {
  id: string;
  aliases?: string[];
  aliases_en?: string[];
  contexts?: Record<string, string>;
  contexts_en?: Record<string, string>;
};

type Symbol = {
  id: string;
  term_ko: string;
  term_en: string;
  aliases?: string[];
};

if (!existsSync(DICT)) {
  console.error(`사전 파일이 없다: ${DICT}`);
  process.exit(2);
}

const dict = JSON.parse(readFileSync(DICT, "utf8")) as { symbols: Symbol[] };
const symbolById = new Map(dict.symbols.map((s) => [s.id, s]));

const entries: KmEntry[] = [];
for (const g of GROUPS) {
  const p = path.join(EXTRACT, `${g}.json`);
  if (!existsSync(p)) {
    console.error(`파일 없음: ${p}`);
    process.exit(2);
  }
  entries.push(...(JSON.parse(readFileSync(p, "utf8")) as KmEntry[]));
}

if (entries.length === 0) {
  console.error("검사할 항목이 하나도 없다 — 통과가 아니라 검사 안 됨이다.");
  process.exit(2);
}

let totalWords = 0;
let deadWords = 0;
let emptyContexts = 0;
const lines: string[] = [];

for (const e of entries) {
  const sym = symbolById.get(e.id);
  if (!sym) continue; // 없는 id는 verify-dream-km.mjs 가 잡는다.

  /**
   * **엔진이 실제로 쓰는 상징 모양으로 부른다.** 별칭은 km 항목의 것이 사전에 반영되므로
   * 사전의 `aliases`가 비어 있어도 km 쪽 별칭으로 `ownTerms`를 만들어야 실물과 같다.
   */
  const asSymbol = {
    term_ko: sym.term_ko,
    term_en: sym.term_en,
    aliases: [...(e.aliases ?? []), ...(e.aliases_en ?? [])],
  };

  for (const [lang, map] of [
    ["ko", e.contexts ?? {}],
    ["en", e.contexts_en ?? {}],
  ] as const) {
    const korean = lang === "ko";
    const ownTerms = ownTermsOf(asSymbol, korean);

    for (const [ctx, value] of Object.entries(map)) {
      // 엔진이 세기 전의 낱말들 — 공백·기호로 가른 그대로.
      const raw = String(value).toLowerCase().split(/[^0-9a-z가-힣]+/).filter(Boolean);
      const alive = new Set(scoringWordsOf(String(value), ownTerms));
      const dead = raw.filter((w) => !alive.has(w));

      totalWords += raw.length;
      deadWords += dead.length;

      if (dead.length > 0) {
        lines.push(`  ${e.id} [${lang}] 「${ctx}」 죽은 낱말: ${dead.join(" ")}`);
      }
      // **판별어가 통째로 죽으면 그 의미는 영영 안 걸린다** — 가장 나쁜 자리다.
      if (alive.size === 0) {
        emptyContexts++;
        lines.push(`  ⚠ ${e.id} [${lang}] 「${ctx}」 살아 있는 판별어가 0개다`);
      }
    }
  }
}

console.log(`항목 ${entries.length}개 · 판별어 낱말 ${totalWords}개`);
console.log(`죽은 낱말 ${deadWords}개 · 판별어가 통째로 죽은 자리 ${emptyContexts}개\n`);

/**
 * **제일 나쁜 것을 맨 위에 찍는다.** 판별어가 통째로 죽은 자리(⚠)는 그 의미가 영영 안
 * 걸린다는 뜻인데, 목록 뒤쪽에 있으면 잘려서 안 보인다 — 실제로 첫 판에서 ⚠ 두 개 중
 * 하나가 60줄 제한에 잘렸다. 「빨간불 절이 잘리는」 사고를 이미 냈다(CLAUDE.md §1).
 */
const worst = lines.filter((l) => l.startsWith("  ⚠"));
const rest = lines.filter((l) => !l.startsWith("  ⚠"));
for (const line of worst) console.log(line);
for (const line of rest.slice(0, 60)) console.log(line);
if (rest.length > 60) console.log(`  … 외 ${rest.length - 60}건(전부 보려면 출력을 파일로 받을 것)`);

if (totalWords === 0) {
  console.error("\n낱말을 하나도 못 셌다 — 검사 안 됨으로 처리한다.");
  process.exit(2);
}
if (deadWords > 0 || emptyContexts > 0) {
  console.error("\n엔진이 세지 않는 판별어가 있다 — 그만큼 판별이 얇아진다.");
  process.exit(1);
}
console.log("죽은 낱말 0개 — 모든 판별어가 엔진에서 실제로 센다.");
process.exit(0);
