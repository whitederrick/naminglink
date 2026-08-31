// **매칭 키(`km*.json`)에 낱말을 더한다.** 표를 이 파일 안에 적고 그대로 돌린다.
//
// ## 왜 스크립트인가
//
// 셸을 거치면(히어독·`node -e`) 역슬래시와 따옴표가 한 겹씩 사라진다(CLAUDE.md §7 #34).
// 한글 판별어를 여러 파일에 흩어 넣는 일은 손으로 하면 반드시 어긋나므로, **바꿀 것을
// 목록으로 적고 스크립트가 넣는다.** 넣을 자리가 없으면 그 자리에서 멈춘다 — `replace`류가
// 조용히 아무것도 안 하는 사고를 이미 냈다(§10 #44).
//
// ## 쓰는 법
//
// 아래 `EDITS`에 한 줄씩 적는다.
//   { id, field, key?, add: [...] }
//     field: "aliases" | "aliases_en" | "contexts" | "contexts_en"
//     key:   contexts류일 때 그 상황 문구(사전의 `meaning.context`와 글자까지 같아야 한다)
//     add:   더할 낱말들. **이미 있으면 건너뛴다**(두 번 돌려도 같은 결과).
//
// 실행: node scripts/patch-km-terms.mjs [--apply]

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const EXTRACT = path.resolve("apps/dreamslink/data-sources/extract");
const APPLY = process.argv.includes("--apply");

const GROUPS = [
  ...Array.from({ length: 9 }, (_, i) => `km${i + 1}`),
  ...Array.from({ length: 7 }, (_, i) => `kmm${i + 1}`),
];

/**
 * 고칠 것 — 전부 `verify-dream-context-parity`가 실제로 잡아낸 자리다.
 * 한국어와 영어가 **같은 꿈에 다른 뜻을 고르던** 자리이거나, 한쪽이 아예 안 걸리던 자리다.
 */
const EDITS = [
  // ── 아예 안 걸리던 자리(별칭 구멍) ────────────────────────────────────────
  // 「먹구름」·「오색구름」은 낱말 **안에** 「구름」이 박혀 있어 `isStandalone`이 막는다.
  { id: "cloud", field: "aliases", add: ["먹구름", "오색구름", "뭉게구름", "구름떼"] },
  // 「갈림길」도 같은 모양이다.
  { id: "road", field: "aliases", add: ["갈림길", "길목", "오솔길"] },
  // 조상은 이용자가 「돌아가신 …」으로 쓴다.
  { id: "ancestor", field: "aliases", add: ["돌아가신", "선친", "조상님들"] },
  { id: "ancestor", field: "aliases_en", add: ["late grandfather", "deceased grandfather", "my late"] },
  { id: "sea", field: "aliases_en", add: ["waves", "rough waves"] },
  { id: "snow", field: "aliases_en", add: ["blizzard", "snowstorm"] },

  // ── 한국어·영어가 다른 뜻을 고르던 자리 ──────────────────────────────────
  // 「물렸다」가 판별어에 없었다(「물려」는 있는데 활용형이 다르다).
  { id: "snake", field: "contexts", key: "뱀이 사람에게 덤벼듦", add: ["물렸", "물린"] },
  // "picked up a snake and held it" — 「품에 안음」인데 영어에 그 말이 없었다.
  { id: "snake", field: "contexts_en", key: "뱀이 품속으로 들어옴", add: ["held", "holding"] },
  // 「벌떼」가 「벌을 봄」에 안 걸리고 형제로 샜다.
  { id: "bee", field: "contexts", key: "벌을 봄", add: ["벌떼", "떼가"] },

  // ── 2차: 어미 활용이 판별어와 어긋나 0점이 되던 자리들 ────────────────────
  // **판별어에 적힌 활용형이 이용자가 쓰는 활용형과 다르면 그 의미는 0점이 되고,
  // 점수 0이면 대표(첫) 의미로 떨어진다.** 그래서 화면에는 엉뚱한 뜻이 뜬다.
  // 「떨어졌」은 있는데 「떨어지는」이 없는 식이었다.
  { id: "star", field: "contexts", key: "별이 떨어짐", add: ["떨어지"] },
  { id: "rainbow", field: "contexts", key: "검은 무지개를 봄", add: ["검었", "검은색"] },
  { id: "well", field: "contexts", key: "우물이 말라붙음", add: ["말라", "바닥나"] },
  { id: "cloud", field: "contexts", key: "검은 구름이 땅까지 내려옴", add: ["먹구름"] },
  { id: "monk", field: "contexts", key: "스님이 사람에게 경 읽기를 가르침", add: ["가르침", "가르쳐"] },
  { id: "boat", field: "contexts", key: "배가 돛에 바람을 받아 나아감", add: ["나아갔"] },

  // 영어 쪽이 좁아 한국어와 다른 뜻을 고르던 자리들.
  { id: "cloud", field: "contexts_en", key: "오색 구름을 봄", add: ["colors"] },
  { id: "baby", field: "contexts_en", key: "밝고 깨끗한 아기를 봄", add: ["lovely", "smiled"] },
  { id: "coffin", field: "contexts_en", key: "관에 시신을 넣는 것을 봄", add: ["body", "placed"] },
  { id: "feces", field: "contexts_en", key: "똥이 몸을 더럽힘", add: ["soiled"] },
  { id: "bird", field: "contexts_en", key: "나는 새가 품에 들어옴", add: ["nestled", "arms"] },
  { id: "boat", field: "contexts_en", key: "배가 돛에 바람을 받아 나아감", add: ["sailed", "forward"] },
  { id: "fire", field: "contexts_en", key: "불꽃이 활활 타오름", add: ["blazed", "flames"] },
  // 「the deceased」만 쓴 문장이 조상에 안 걸렸다.
  { id: "ancestor", field: "aliases_en", add: ["deceased"] },
];

const loaded = new Map();
for (const g of GROUPS) {
  const p = path.join(EXTRACT, `${g}.json`);
  loaded.set(g, { p, arr: JSON.parse(readFileSync(p, "utf8")) });
}

const index = new Map();
for (const [g, { arr }] of loaded) {
  for (const e of arr) index.set(e.id, { g, e });
}

let changed = 0;
const touched = new Set();

for (const edit of EDITS) {
  const rec = index.get(edit.id);
  if (!rec) {
    console.error(`매칭 키에 없는 상징: ${edit.id} — 멈춘다`);
    process.exit(1);
  }
  const { g, e } = rec;

  if (edit.field === "aliases" || edit.field === "aliases_en") {
    const list = e[edit.field] ?? (e[edit.field] = []);
    const added = edit.add.filter((w) => !list.some((x) => x.toLowerCase() === w.toLowerCase()));
    if (added.length === 0) {
      console.log(`  = ${g} ${edit.id}.${edit.field} — 이미 다 있다`);
      continue;
    }
    console.log(`  + ${g} ${edit.id}.${edit.field} += ${JSON.stringify(added)}`);
    if (APPLY) list.push(...added);
    changed += added.length;
    touched.add(g);
    continue;
  }

  const map = e[edit.field];
  if (!map || !(edit.key in map)) {
    console.error(`${edit.id}.${edit.field}에 없는 상황: 「${edit.key}」 — 멈춘다`);
    process.exit(1);
  }
  const words = String(map[edit.key]).split(/\s+/).filter(Boolean);
  const added = edit.add.filter((w) => !words.includes(w));
  if (added.length === 0) {
    console.log(`  = ${g} ${edit.id} 「${edit.key}」 — 이미 다 있다`);
    continue;
  }
  console.log(`  + ${g} ${edit.id} 「${edit.key}」 (${edit.field}) += ${added.join(" ")}`);
  if (APPLY) map[edit.key] = [...words, ...added].join(" ");
  changed += added.length;
  touched.add(g);
}

console.log(`\n더할 낱말 ${changed}개 · 건드릴 파일 ${touched.size}개`);

if (changed === 0) {
  console.error("더할 것이 0개다 — 통과가 아니라 할 일이 없는 것이다.");
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
console.log("\n확인: node scripts/verify-dream-km.mjs · build-dream-match-tables-v2.mjs · 하니스 둘");
