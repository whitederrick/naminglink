// **배치 119(밀러 `Mason`~`Match`)가 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 넷은 `kmm119.json` 에 있다 — mason(석공) · mast(돛대) · master(주인) ·
// match(성냥).
//
//   carnival(카니발)   ← 밀러 `Masquerade` 둘. 「가장무도회」가 EXACT 로 이 상징의 별칭이다
//   straw-mat(돗자리)  ← 밀러 `Mat` 하나.      「깔개」가 EXACT 다
//
// ## 「깔개」는 `straw-mat` 과 `mattress` 가 **둘 다** 쥐고 있다
//
// ⓪ grep 이 EXACT 를 둘 찍었다 — 깔개 꿈은 이미 상징 둘이 뜨는 자리다(기존 상태).
// 밀러 `Mat` 은 바닥에 까는 것이므로 `straw-mat`(돗자리)에 붙였다.
//
// ## 「주인」은 합성어와 함께 걸린다 — 알고 남긴 자리
//
// 「이발소 주인」·「정육점 주인」은 **앞이 공백**이라 `isStandalone` 을 지난다. 그 꿈에
// 주인이 실제로 있으므로 둘 다 걸리는 것이 옳다(배치 29의 「음식」과 같은 자리).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-119.mjs

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
  carnival: {
    aliasesAdd: ["가장무도회에", "복면 무도회"],
    contextsAdd: {
      "처녀가 가장무도회에 끼어듦": "처녀 아가씨",
      "가장무도회에 감": "가장무도회",
    },
    contextsEnAdd: {
      "처녀가 가장무도회에 끼어듦": "participates deceived",
      "가장무도회에 감": "attending masquerade indulge foolish harmful neglect",
    },
  },
  "straw-mat": {
    aliasesAdd: ["매트", "깔개를"],
    contextsAdd: {
      "깔개를 멀리해야 함": "깔개 매트",
    },
    contextsEnAdd: {
      // 「away」는 기존 「돗자리를 집 밖으로 내보냄」이 이미 쥐고 있다(배치 43 — 새 쪽만 간다)
      "깔개를 멀리해야 함": "usher perplexities",
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
