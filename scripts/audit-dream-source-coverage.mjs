// 218개 상징이 두 원문(주공해몽·밀러 1901) 중 어디에 근거를 갖고 있는지 실측한다.
//
// 왜 필요한가 — 2026-08-27에 사용자가 "근거도 없는 자료를 기준으로 잡은게 문제"라고
// 지적해 사전의 기준을 원문 쪽으로 뒤집기로 했다. 그때 손으로 한 번 센 수치
// (밀러 미개척 72개 · 둘 다 근거 없음 77개)가 다음 배치의 작업 목록인데, 손으로 센
// 수는 보고에 실으면 안 된다(CLAUDE.md §10 #40·41) — 세는 것을 짜서 남긴다.
//
// 실행: node scripts/audit-dream-source-coverage.mjs
//        node scripts/audit-dream-source-coverage.mjs --list   (목록까지 출력)

import { readFileSync } from "node:fs";
import path from "node:path";

const dict = JSON.parse(
  readFileSync(
    path.resolve("apps/dreamslink/src/lib/dream-symbols.data.json"),
    "utf8",
  ),
);
const miller = JSON.parse(
  readFileSync(
    path.resolve("apps/dreamslink/data-sources/miller-1901-parsed.json"),
    "utf8",
  ),
);

const millerHeadwords = new Set(
  miller.entries.map((e) => e.headword.toLowerCase()),
);

/**
 * **주공해몽 근거는 `source` 필드로 판정한다.**
 *
 * 2026-08-27 재분류(`reclassify-dream-meaning-source.mjs`) 이후 `source: "tradition"`은
 * **실제로 원문 인용이 그 의미에 붙어 있다고 커밋 이력으로 확인된 것만** 남았다. 그전에는
 * 이 필드가 스키마 기본값으로 기계적으로 채워져 있어 근거로 쓸 수 없었다
 * (memory: dream-dictionary-source-field-was-fake).
 *
 * 밀러 1차 배치(2026-08-27)로 밀러 근거를 받은 의미도 tradition이 됐으므로, 이 함수는
 * 이제 "주공해몽 근거"가 아니라 **"원문 근거(둘 중 하나)"**를 뜻한다. 갈래를 나누려면
 * culture_note 본문을 봐야 한다 — 주공해몽은 「」, 밀러는 "밀러"로 시작한다.
 */
function groundedMeanings(symbol) {
  return symbol.meanings.filter((m) => m.source === "tradition");
}

function millerTerms(symbol) {
  return symbol.term_en
    .split("/")
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);
}

const buckets = {
  both: [],
  millerOnly: [],
  classicOnly: [],
  neither: [],
};

for (const symbol of dict.symbols) {
  const grounded = groundedMeanings(symbol);
  const note = symbol.culture_note ?? "";
  const hasClassicCite = /「[^」]+」/.test(note);
  const hasMillerCite = note.includes("밀러");
  const isGrounded = grounded.length > 0 && (hasClassicCite || hasMillerCite);
  const inMillerCorpus = millerTerms(symbol).some((t) =>
    millerHeadwords.has(t),
  );

  const label = `${symbol.id}(${symbol.term_ko})`;
  if (isGrounded && inMillerCorpus) buckets.both.push(label);
  else if (!isGrounded && inMillerCorpus) buckets.millerOnly.push(label);
  else if (isGrounded && !inMillerCorpus) buckets.classicOnly.push(label);
  else buckets.neither.push(label);
}

let traditionCount = 0;
let generalCount = 0;
for (const symbol of dict.symbols) {
  for (const m of symbol.meanings) {
    if (m.source === "tradition") traditionCount++;
    else generalCount++;
  }
}

console.log(`사전: 상징 ${dict.symbols.length}개 · 의미 ${traditionCount + generalCount}개 (dictVer ${dict.dictVer})`);
console.log(`  원문 근거 있는 의미(source=tradition): ${traditionCount}`);
console.log(`  근거 없는 의미(source=general):        ${generalCount}`);
console.log();
console.log(`상징별 원문 커버리지 (밀러 표제어 ${millerHeadwords.size}개와 대조)`);
console.log(`  이미 근거 있고 밀러 표제어에도 있음: ${buckets.both.length}`);
console.log(`  밀러에 있는데 아직 안 씀(미개척):    ${buckets.millerOnly.length}  ← 다음 배치 우선순위`);
console.log(`  근거는 있으나 밀러 표제어엔 없음:    ${buckets.classicOnly.length}`);
console.log(`  둘 다 근거 없음(AI가 만든 것):       ${buckets.neither.length}  ← 존치/제거 미결정`);

if (process.argv.includes("--list")) {
  console.log(`\n## 밀러 미개척 ${buckets.millerOnly.length}개\n`);
  console.log(buckets.millerOnly.join(", "));
  console.log(`\n## 둘 다 근거 없음 ${buckets.neither.length}개\n`);
  console.log(buckets.neither.join(", "));
  console.log(`\n## 근거 있음(밀러 표제어에도 있음) ${buckets.both.length}개\n`);
  console.log(buckets.both.join(", "));
  console.log(`\n## 근거 있음(밀러 표제어엔 없음) ${buckets.classicOnly.length}개\n`);
  console.log(buckets.classicOnly.join(", "));
}
