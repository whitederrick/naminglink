// **엔진이 세지 않는 판별어(죽은 낱말)를 매칭 키에서 지운다.** (1회성 정리)
//
// ## 왜 지워도 안전한가
//
// `contextScore`는 판별어를 세기 전에 먼저 추린다 — 두 글자 미만, 기능어
// (`SCORING_STOPWORDS`), 그리고 그 상징의 제 이름 낱말(`ownTerms`)을 버린다. 여기서
// 지우는 것은 **그 추림에서 이미 버려지는 낱말들**이므로 점수가 한 톨도 바뀌지 않는다.
// 동작이 같다는 것은 회귀 하니스 둘로 확인한다(지우기 전·후 같은 결과여야 한다).
//
// ## 왜 지우나
//
// 적혀 있는데 안 세는 낱말은 **거짓말이다.** 판별어 넷 중 둘이 죽어 있어도 사람 눈에는
// 넷으로 보이고, 다음 사람이 "이만하면 갈리겠지"라고 판단한다. 실제로 `ant`의 "onto",
// `actor`의 "actress"(별칭에 있어 걸러짐)가 그렇게 숨어 있었다.
//
// 지운 뒤에는 `audit-km-dead-words.mts`가 exit 0이 되고, 그 관문이 **앞으로 새로 들어오는
// 배치의 죽은 낱말을 막는다.**
//
// ⚠️ 앱 폴더에서 돌린다(엔진의 `@/` 별칭 때문에).
// 실행:  cd apps/dreamslink && node ../../scripts/strip-km-dead-words.mjs [--apply]

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const APPLY = process.argv.includes("--apply");

const ROOT = (() => {
  let dir = process.cwd();
  for (let i = 0; i < 5; i++) {
    if (existsSync(path.join(dir, "apps/dreamslink/data-sources/extract"))) return dir;
    dir = path.dirname(dir);
  }
  console.error("저장소 뿌리를 못 찾았다.");
  process.exit(2);
})();

const EXTRACT = path.join(ROOT, "apps/dreamslink/data-sources/extract");
const DICT = path.join(ROOT, "apps/dreamslink/src/lib/dream-symbols.v2.data.json");

const GROUPS = [
  ...Array.from({ length: 9 }, (_, i) => `km${i + 1}`),
  ...Array.from({ length: 7 }, (_, i) => `kmm${i + 1}`),
];

// **윈도 절대경로를 그대로 동적 import 하면 안 된다** — `c:\...`가 URL 스킴으로 읽혀
// `ERR_UNSUPPORTED_ESM_URL_SCHEME`이 난다. `file://`로 바꿔 넘긴다(§7).
const engineModule = await import(
  pathToFileURL(path.join(ROOT, "apps/dreamslink/src/lib/engines/dream-match.ts")).href
);
const engine = engineModule.ownTermsOf ? engineModule : engineModule.default;

if (typeof engine?.ownTermsOf !== "function" || typeof engine?.scoringWordsOf !== "function") {
  console.error("엔진 함수를 못 받았다 — 검사 안 됨으로 처리한다. (tsx 로 돌렸는가?)");
  process.exit(2);
}

const dict = JSON.parse(readFileSync(DICT, "utf8"));
const symbolById = new Map(dict.symbols.map((s) => [s.id, s]));

let stripped = 0;
let emptied = 0;
const touched = new Set();
const loaded = new Map();

for (const g of GROUPS) {
  const p = path.join(EXTRACT, `${g}.json`);
  loaded.set(g, { p, arr: JSON.parse(readFileSync(p, "utf8")) });
}

for (const [g, { arr }] of loaded) {
  for (const e of arr) {
    const sym = symbolById.get(e.id);
    if (!sym) continue;
    const asSymbol = {
      term_ko: sym.term_ko,
      term_en: sym.term_en,
      aliases: [...(e.aliases ?? []), ...(e.aliases_en ?? [])],
    };

    for (const [field, korean] of [["contexts", true], ["contexts_en", false]]) {
      const map = e[field];
      if (!map) continue;
      const ownTerms = engine.ownTermsOf(asSymbol, korean);

      for (const [ctx, value] of Object.entries(map)) {
        const alive = new Set(engine.scoringWordsOf(String(value), ownTerms));
        const kept = String(value)
          .split(/\s+/)
          .filter((w) => alive.has(w.toLowerCase()));
        const removed = String(value).split(/\s+/).filter(Boolean).length - kept.length;
        if (removed === 0) continue;

        // **판별어가 통째로 죽은 자리는 손대지 않는다** — 지우면 빈 문자열이 되어 그
        // 의미가 영영 안 걸린다. 사람이 살아 있는 낱말로 새로 지어야 한다.
        if (kept.length === 0) {
          emptied++;
          console.log(`  ⚠ ${g} ${e.id} [${korean ? "ko" : "en"}] 「${ctx}」 전부 죽음 — 손대지 않는다`);
          continue;
        }

        stripped += removed;
        console.log(`  ${g} ${e.id} [${korean ? "ko" : "en"}] 「${ctx}」 −${removed}: ${value} → ${kept.join(" ")}`);
        if (APPLY) map[ctx] = kept.join(" ");
        touched.add(g);
      }
    }
  }
}

console.log(`\n지울 죽은 낱말 ${stripped}개 · 전부 죽어 손 못 댄 자리 ${emptied}개`);

if (stripped === 0) {
  console.error("지울 것이 0개다 — 통과가 아니라 할 일이 없는 것이다.");
  process.exit(2);
}

if (!APPLY) {
  console.log("\n실제로 쓰려면 --apply");
  process.exit(0);
}

for (const g of touched) {
  const { p, arr } = loaded.get(g);
  writeFileSync(p, `${JSON.stringify(arr, null, 2)}\n`.replace(/\n/g, "\r\n"), "utf8");
  console.log(`썼다: ${path.basename(p)}`);
}

console.log("\n확인: npx tsx scripts/audit-km-dead-words.mts · 회귀 하니스 둘");
