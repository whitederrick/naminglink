// **배치 79(밀러 Knitting~Krishna)가 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 넷은 `kmm79.json` 에 있다 — knocker(문고리)·knocking(노크 소리)·knot(매듭)·
// krishna(크리슈나).
//
//   crochet-work(코바늘뜨기)  ← 밀러 `Knitting` 다섯. **판별어 표가 비어 있었다**
//
// ## 왜 새 상징을 안 세웠나
//
// ⓪ grep 이 「뜨개질」을 `crochet-work` 의 별칭으로 찍었다(밀러 `Crochet Work` 로 들어와 있다).
//
// ## 성별 갈래 둘을 **넣을 수 있었던 까닭**
//
// 「여자가 뜨개질을 함」과 「처녀가 뜨개질을 함」은 그림이 같고 **꾸는 사람만 다르다.**
// 배치 50~52에서 이런 자리를 뺐지만, 그때는 갈래가 **「여자·여성·처녀」를 나눠 가질 수 없는**
// 꼴이었다. 여기는 **「여자」와 「처녀」로 낱말이 갈린다** — 밀러가 `a woman` 과 `a young woman`
// 으로 또렷이 나눠 적었기 때문이다.
//
// ## 안 넣은 문장 하나
//
//   Knots 「If your sweetheart notices another…」
//         → **꿈 그림이 아니라 앞 항목 풀이의 뒷말**이다(배치 55와 같은 자리).
//
// ## 판별어 표가 비어 있으므로 **기존 의미까지 채운다**(배치 35·62~68·71과 같다)
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-79.mjs

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
  "crochet-work": {
    aliasesAdd: ["뜨개질을", "뜨개질하", "뜨개질 공장"],
    contextsAdd: {
      // 기존 밀러 의미 — 이것이 기본값이므로 좁게(§30 곁가지).
      "코바늘뜨기를 함": "코바늘",
      "여자가 뜨개질을 함": "여자가 여인이",
      "남자가 뜨개질 공장에 있음": "남자가 사내가",
      "처녀가 뜨개질을 함": "처녀 아가씨",
      "처녀가 뜨개질 공장에서 일함": "공장에서 일했 일하고",
      "일하던 공장이 허물어져 있음": "허물어 무너져 낡아",
    },
    contextsEnAdd: {
      // 「crochet」는 term_en 「crochet work」의 것이라 제 이름이 된다.
      "코바늘뜨기를 함": "hook needle",
      "여자가 뜨개질을 함": "quiet peaceful home dutiful delight",
      "남자가 뜨개질 공장에 있음": "man thrift solid rise prospects",
      "처녀가 뜨개질을 함": "hasty propitious",
      "처녀가 뜨개질 공장에서 일함": "works worthy loyal",
      "일하던 공장이 허물어져 있음": "dilapidated reverses",
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
