// 배치 136(밀러 `Music`·`Musical Instruments`·`Mushroom`·`Musk`·`Mussels`·`Mustache`)
//
//   music(풍악) ← 밀러 `Music` 둘. **판별어 표가 비어 있었다**(열세 번째, 배치 35)
//                 그리고 별칭 「악기」를 **뺀다** — 새 상징 `musical-instrument` 의 이름이다
//   clam(조개)  ← 밀러 `Mussels` 하나. 「홍합」이 이 상징의 별칭이다
//
// ## 기본값은 둘 다 옛것 그대로 얼린다 (§30)
//
// `m136.json` 이 `r*.json`·`m2x.json` 보다 앞서 정렬되어 둘 다 바뀐다.
// 밀러 쪽은 조건이 붙은 그림(「고운 가락」·「민물 홍합」)이라 기본값 자리에 어울리지 않는다.
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-136.mjs

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
  music: {
    aliasesAdd: ["풍악이", "풍악을"],
    aliasesRemove: ["악기"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "남이 풍악을 울림": "남이 울렸 연주했",
      "고운 가락의 풍악을 들음": "고운 아름다 어우러",
      "어지러운 가락의 풍악을 들음": "어지러 시끄러 거슬",
    },
    contextsEnAdd: {
      "남이 풍악을 울림": "others played",
      "고운 가락의 풍악을 들음": "harmonious pleasure prosperity",
      "어지러운 가락의 풍악을 들음": "discordant unruly children household",
    },
  },
  clam: {
    contextsAdd: {
      "민물 홍합 꿈을 꿈": "홍합 민물",
    },
    contextsEnAdd: {
      "민물 홍합 꿈을 꿈": "water mussels contentment domestic enjoyment",
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
  for (const w of patch.aliasesRemove ?? []) {
    const i = row.aliases.indexOf(w);
    if (i < 0) stop(`${id}: 뺄 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
    row.aliases.splice(i, 1);
    changed++;
  }
  for (const w of patch.aliasesEnRemove ?? []) {
    const i = (row.aliases_en ?? []).indexOf(w);
    if (i < 0) stop(`${id}: 뺄 영어 별칭 「${w}」가 없다 — 이미 돌린 것 같다.`);
    row.aliases_en.splice(i, 1);
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
  for (const w of patch.aliasesRemove ?? []) {
    if (row.aliases.includes(w)) stop(`확인 실패: ${id} 에서 별칭 「${w}」가 안 빠졌다.`);
  }
  for (const w of patch.aliasesEnRemove ?? []) {
    if ((row.aliases_en ?? []).includes(w)) stop(`확인 실패: ${id} 에서 영어 별칭 「${w}」가 안 빠졌다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
