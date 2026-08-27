// 에이전트가 원문에서 뽑아낸 항목들을 **새 해몽 사전으로 조립한다.**
//
// ## 옛 사전과 무엇이 다른가
//
// 옛 사전(2026-08-06 생성)은 AI가 상식으로 218개 상징을 만들고, 그 위에
// `source: "tradition"`이라는 **문자열 라벨**을 기계적으로 붙였다. 라벨은 적기만 하면
// 참이 되므로 347개 의미 중 345개가 "전통 근거 확인됨"이었는데 166개는 근거가 없었다
// (CLAUDE.md §21). 사용자 지시로 **전량 폐기**하고 원문에서 새로 만든다(2026-08-27).
//
// 새 사전의 규칙은 하나다 — **원문 인용이 없으면 항목이 존재할 수 없다.**
// 모든 의미가 `cite`를 갖고, `cite.original`은 `verify-dream-cite.mjs`가 원문 파일과
// 문자열로 대조한다. 지어낸 인용은 위조가 불가능하다.
//
// ## 하는 일
//
// 1. `data-sources/extract/result*.json`을 전부 읽는다(에이전트 산출물, 항목 단위)
// 2. `verify-dream-cite.mjs`가 이미 통과시킨 것만 들어온다는 전제 — 여기서도 한 번 더 본다
// 3. 같은 상징(term_ko 기준)끼리 묶어 `meanings` 배열로 만든다
// 4. 상징 id를 만든다(term_en 기반, 중복이면 접미사)
// 5. 새 사전 파일로 쓴다
//
// 실행: node scripts/build-dream-dictionary-v2.mjs
// 산출: apps/dreamslink/src/lib/dream-symbols.v2.data.json
//        (기존 파일은 건드리지 않는다 — 교체는 별도 단계에서 한다)

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const EXTRACT_DIR = path.resolve("apps/dreamslink/data-sources/extract");
const OUT = path.resolve("apps/dreamslink/src/lib/dream-symbols.v2.data.json");

if (!existsSync(EXTRACT_DIR)) {
  console.error(`추출 결과 디렉터리가 없다: ${EXTRACT_DIR}`);
  process.exit(2);
}

const files = readdirSync(EXTRACT_DIR)
  .filter((f) => /^(r\d+|result-tomb)\.json$/.test(f))
  .sort();

// **검사 0건은 통과가 아니다**(CLAUDE.md §1·§3).
if (files.length === 0) {
  console.error("추출 결과 파일이 하나도 없다 — 조립할 것이 없다.");
  process.exit(2);
}

const items = [];
for (const f of files) {
  const parsed = JSON.parse(readFileSync(path.join(EXTRACT_DIR, f), "utf8"));
  if (!Array.isArray(parsed)) {
    console.error(`배열이 아님: ${f}`);
    process.exit(1);
  }
  items.push(...parsed);
  console.log(`${f}: ${parsed.length}개`);
}

if (items.length === 0) {
  console.error("항목이 0개다.");
  process.exit(2);
}

// ── 상징 단위로 묶는다 ──────────────────────────────────────────────────────

/**
 * **`term_ko`를 상징의 동일성 기준으로 삼는다.**
 *
 * 에이전트가 갈래별로 나뉘어 돌아서 같은 상징이 여러 파일에 나온다(불·물·집 등).
 * 한국어 이름이 같으면 같은 상징으로 본다 — `term_en`은 에이전트마다 다르게 적을 수 있다
 * (rat/mouse 등). 영어 이름은 가장 많이 쓰인 것을 고른다.
 */
const bySymbol = new Map();

for (const item of items) {
  const key = String(item.term_ko).trim();
  if (!key) continue;
  if (!bySymbol.has(key)) {
    bySymbol.set(key, {
      term_ko: key,
      enVotes: new Map(),
      catVotes: new Map(),
      meanings: [],
    });
  }
  const sym = bySymbol.get(key);
  const en = String(item.term_en ?? "").trim();
  if (en) sym.enVotes.set(en, (sym.enVotes.get(en) ?? 0) + 1);
  const cat = String(item.category ?? "").trim();
  if (cat) sym.catVotes.set(cat, (sym.catVotes.get(cat) ?? 0) + 1);

  /**
   * **같은 상황이 두 번 나오면 인용을 합친다.**
   *
   * 원문에는 같은 말을 하는 줄이 둘씩 있는 자리가 있다 — 「殺豬吉豬自死凶」와
   * 「殺豬豖者大吉利」는 둘 다 "돼지를 잡으면 길하다"이다. 이런 것은 **버리는 것이
   * 아니라 근거가 두 겹이라는 뜻**이므로, 의미 하나에 인용을 여럿 단다.
   *
   * 합치지 않으면 매칭 키 표(`contexts`)가 상황 문구를 키로 쓰는데 **같은 키가 둘이
   * 되어 하나가 조용히 사라진다**(JSON 객체의 성질). 실제로 매칭 키를 만들던 중에
   * 이 자리가 드러났다.
   */
  const same = sym.meanings.find((m) => m.context === item.context);
  if (same) {
    const already = same.cites.some((c) => c.original === item.cite.original);
    if (!already) same.cites.push(item.cite);
    continue;
  }

  sym.meanings.push({
    context: item.context,
    interpretation_ko: item.interpretation_ko,
    interpretation_en: item.interpretation_en,
    polarity: item.polarity,
    cites: [item.cite],
  });
}

const topOf = (votes, fallback) => {
  let best = fallback;
  let bestN = -1;
  for (const [k, n] of votes) if (n > bestN) { best = k; bestN = n; }
  return best;
};

// ── id를 만든다 ────────────────────────────────────────────────────────────

/**
 * id는 주소가 된다(`/dream/symbol/<id>`). **한글을 넣지 않는다** — 주소가 인코딩되며
 * 깨진다(`symbol-pages.ts` 주석 참고). `term_en`을 슬러그로 만든다.
 */
function slugify(en, fallback) {
  const s = String(en)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return s || fallback;
}

const symbols = [];
const usedIds = new Set();
let seq = 0;

for (const sym of bySymbol.values()) {
  const term_en = topOf(sym.enVotes, "");
  const category = topOf(sym.catVotes, "object");
  let id = slugify(term_en, `symbol-${++seq}`);
  // 영어 이름이 겹치면(용/이무기가 둘 다 dragon 등) 뒤에 번호를 붙인다.
  if (usedIds.has(id)) {
    let n = 2;
    while (usedIds.has(`${id}-${n}`)) n++;
    id = `${id}-${n}`;
  }
  usedIds.add(id);

  // 상징의 전체 성향 — 의미들의 다수결. 갈리면 ambivalent.
  const pol = { positive: 0, negative: 0, neutral: 0 };
  for (const m of sym.meanings) pol[m.polarity] = (pol[m.polarity] ?? 0) + 1;
  let polarity = "neutral";
  if (pol.positive > 0 && pol.negative > 0) polarity = "ambivalent";
  else if (pol.positive > pol.negative && pol.positive > pol.neutral) polarity = "positive";
  else if (pol.negative > pol.positive && pol.negative > pol.neutral) polarity = "negative";

  symbols.push({
    id,
    term_ko: sym.term_ko,
    term_en,
    aliases: [],          // 매칭 키는 별도 단계에서 손으로 채운다
    category,
    polarity,
    tags: [],
    weight: 1,
    meanings: sym.meanings,
  });
}

symbols.sort((a, b) => b.meanings.length - a.meanings.length || a.id.localeCompare(b.id));

const out = {
  dictVer: "2.0.0",
  builtFrom: files,
  symbols,
};

// 원본이 CRLF다(§7). LF로 쓰면 git diff가 전체 파일을 바뀐 것으로 본다.
writeFileSync(OUT, `${JSON.stringify(out, null, 2)}\n`.replace(/\n/g, "\r\n"), "utf8");

const meaningTotal = symbols.reduce((n, s) => n + s.meanings.length, 0);
console.log(`\n상징 ${symbols.length}개 · 의미 ${meaningTotal}개`);
console.log(`→ ${path.relative(process.cwd(), OUT)}`);
console.log(`\n확인: node scripts/verify-dream-cite.mjs`);
