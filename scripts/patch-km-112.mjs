// **배치 112(밀러 `Magic`·`Magistrate`·`Magnifying-glass`·`Magpie`)가 이미 있는 상징
// 하나를 건드린다.**
//
// 새 상징 셋은 `kmm112.json` 에 있다 — magic(마술) · magnifying-glass(돋보기) ·
// magpie(까치).
//
//   judge(판사)  ← 밀러 `Magistrate` 하나. 원문 각주가 「[118] See Judge and Jury.」다
//
// ## `Magnet` 은 통째로 안 넣었다 — 같은 그림이 이미 있다 (§31 곁가지)
//
// 배치 105에서 세운 `loadstone`(자석)이 밀러 `Loadstone` 둘을 갖고 있다.
// `Magnet` 의 두 문장이 **그것과 같은 그림**이다 — 「자석이 끌어당김」·「여성이 자석
// 꿈을 꿈」. 길흉이 한 자리는 반대(끌어당김: `Loadstone` 은 길, `Magnet` 은 흉)이고
// 판별어도 나눌 수 없다(둘 다 「끌어당」밖에 걸 것이 없다). 커버리지가 비는 것이 옳다.
//
// ## 이름을 「마법」이 아니라 「마술」로 지었다
//
// 「마법을」·「마법이」는 `enchantment`(마법에 홀림)의 별칭이라 「마법을 부렸다」가 상징
// 둘에 걸린다. 원문도 「Magic here should not be confounded with sorcery」라고 못 박는다.
// 「마술사」는 `conjurer`(요술쟁이)의 별칭이지만 **앞 글자가 한글이라 「마술」은 안 걸린다** —
// 「마술사를 보았다」는 `conjurer` 만 잡는다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-112.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

function fileOf(id) {
  for (const f of readdirSync(DIR)) {
    if (!/^km/.test(f)) continue;
    let rows;
    try {
      rows = JSON.parse(readFileSync(path.join(DIR, f), "utf8"));
    } catch {
      continue;
    }
    if (Array.isArray(rows) && rows.some((r) => r.id === id)) return f;
  }
  stop(`${id} 가 어느 km 파일에도 없다 — 파일이 바뀌었다.`);
}

const PATCHES = {
  judge: {
    aliasesAdd: ["치안 판사", "치안판사"],
    contextsAdd: {
      "치안 판사를 봄": "치안 으름장",
    },
    contextsEnAdd: {
      // 「suits」는 기존 「suit」를 품어 겹친다(배치 43 — 새로 넣는 쪽만 간다)
      "치안 판사를 봄": "magistrate harassed threats",
    },
  },
};

let changed = 0;

for (const [id, patch] of Object.entries(PATCHES)) {
  const file = fileOf(id);
  const p = path.join(DIR, file);
  const rows = JSON.parse(readFileSync(p, "utf8"));
  const row = rows.find((r) => r.id === id);
  for (const w of patch.aliasesAdd ?? []) {
    if (row.aliases.includes(w)) stop(`${id}: 별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
    row.aliases.push(w);
    changed++;
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (k in row.contexts) stop(`${id}: 판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
    row.contexts[k] = v;
    changed++;
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (k in row.contexts_en) stop(`${id}: 영어 판별어 「${k}」가 이미 있다.`);
    row.contexts_en[k] = v;
    changed++;
  }
  writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
  console.log(`${file} 고침 — ${id}`);
}

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
for (const [id, patch] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, fileOf(id)), "utf8"));
  const row = rows.find((r) => r.id === id);
  for (const w of patch.aliasesAdd ?? []) {
    if (!row.aliases.includes(w)) stop(`확인 실패: ${id} 에 별칭 「${w}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
