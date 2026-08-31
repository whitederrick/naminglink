// **매칭 키가 없는 상징을 배치 파일로 쪼갠다** — 에이전트가 나눠 맡을 입력을 만든다.
//
// 주공해몽 417개는 `km1~km9.json`으로 사람이 검증했다. 밀러를 합치면서 생긴 265개
// 상징에는 아직 별칭·판별어가 없다 — 사전에는 있는데 **꿈 문장에서 찾아낼 방법이 없는
// 상태**다(화면에는 뜨지만 매칭이 안 된다).
//
// 배치 크기는 **작게** 잡는다. 밀러 원문 추출 때 큰 배치가 진행정지로 세 번 연속
// 실패했고, 20~25개로 쪼개니 한 번에 통과했다(2026-08-28·08-31).
//
// 실행: node scripts/make-km-miller-batches.mjs [배치당개수]
// 산출: apps/dreamslink/data-sources/km-batches/kmb<N>.json

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";

const DICT = path.resolve("apps/dreamslink/src/lib/dream-symbols.v2.data.json");
const EXTRACT = path.resolve("apps/dreamslink/data-sources/extract");
const OUT_DIR = path.resolve("apps/dreamslink/data-sources/km-batches");
const PER = Number(process.argv[2] ?? 38);

const dict = JSON.parse(readFileSync(DICT, "utf8"));

const have = new Set();
for (const f of ["km1", "km2", "km3", "km4", "km5", "km6", "km7", "km8", "km9"]) {
  for (const e of JSON.parse(readFileSync(path.join(EXTRACT, `${f}.json`), "utf8"))) {
    have.add(e.id);
  }
}

const missing = dict.symbols.filter((s) => !have.has(s.id));

if (missing.length === 0) {
  console.error("키가 없는 상징이 하나도 없다 — 만들 배치가 없다.");
  process.exit(2);
}

/**
 * **한국어 이름이 겹치는 상징을 같은 배치에 넣는다.**
 *
 * 「배(선박)」과 「배(복부)」의 별칭을 서로 다른 에이전트가 따로 지으면 같은 낱말을
 * 양쪽에 넣기 쉽다 — 그러면 어느 쪽도 못 가린다. 한 사람이 둘을 같이 보고 지어야 한다.
 */
const koGroups = new Map();
for (const s of missing) {
  if (!koGroups.has(s.term_ko)) koGroups.set(s.term_ko, []);
  koGroups.get(s.term_ko).push(s);
}

/**
 * **상징 수가 아니라 의미 수로 고르게 나눈다.**
 *
 * 상징 수로 나누면 첫 배치가 의미 205개, 마지막이 37개가 된다 — 사전이 의미 많은 순으로
 * 정렬돼 있기 때문이다. 에이전트가 실제로 하는 일의 양은 **의미 수**에 비례하고(판별어를
 * 의미마다 지어야 한다), 큰 배치가 진행정지로 세 번 연속 실패한 전례가 있다(2026-08-28).
 */
const totalMeanings = missing.reduce((n, s) => n + s.meanings.length, 0);
const batchCount = Math.max(1, Math.ceil(missing.length / PER));
const budget = Math.ceil(totalMeanings / batchCount);

const batches = [];
let cur = [];
let curMeanings = 0;
for (const group of koGroups.values()) {
  const groupMeanings = group.reduce((n, s) => n + s.meanings.length, 0);
  if (cur.length > 0 && curMeanings + groupMeanings > budget && batches.length < batchCount - 1) {
    batches.push(cur);
    cur = [];
    curMeanings = 0;
  }
  cur.push(...group);
  curMeanings += groupMeanings;
}
if (cur.length > 0) batches.push(cur);

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

/** 에이전트에게 필요한 것만 싣는다 — 인용 원문까지 주면 입력이 커져 진행정지가 잦다. */
const slim = (s) => ({
  id: s.id,
  term_ko: s.term_ko,
  term_en: s.term_en,
  label_ko: s.label_ko,
  category: s.category,
  works: s.works,
  meanings: s.meanings.map((m) => ({
    context: m.context,
    interpretation_ko: m.interpretation_ko,
    polarity: m.polarity,
  })),
});

let n = 0;
for (const b of batches) {
  n++;
  const p = path.join(OUT_DIR, `kmb${n}.json`);
  writeFileSync(p, `${JSON.stringify(b.map(slim), null, 2)}\n`.replace(/\n/g, "\r\n"), "utf8");
  const meanings = b.reduce((k, s) => k + s.meanings.length, 0);
  const needCtx = b.filter((s) => s.meanings.length > 1).length;
  console.log(
    `kmb${n}.json: 상징 ${b.length}개 · 의미 ${meanings}개 · 판별어 필요 ${needCtx}개`,
  );
}

console.log(`\n키 없는 상징 ${missing.length}개를 ${n}개 배치로 나눴다 → ${path.relative(process.cwd(), OUT_DIR)}`);
