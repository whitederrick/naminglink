// **배치 116(밀러 `March`~`Market`)이 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 넷은 `kmm116.json` 에 있다 — march(행진) · march-month(삼월) ·
// marigold(금잔화) · mariner(뱃사람).
//
//   horse(말)          ← 밀러 `Mare` 셋. 「암말」이 EXACT 로 이 상징의 별칭이다
//                        (원문 각주도 「[121] See Horse.」다)
//   marketplace(시장)  ← 밀러 `Market` 둘. 「시장」·「장터」가 EXACT 다
//
// ## 표제어 하나가 한국어로 관계없는 둘이라 상징을 갈랐다 (배치 30·33)
//
// 밀러 `March` 는 **행진**이면서 **삼월**이다. 둘 다 `term_en` 이 `march` 라 그대로 두면
// id 가 부딪치므로, 달 쪽은 `term_en` 을 「march month」로 지어 `march-month` 로 갈랐다.
// **`cite.locator` 는 둘 다 `March` 그대로**다 — 원문의 표제어는 하나이기 때문이다.
//
// ## `Market` 은 넷 중 둘만 넣었다 (§31 곁가지 — 같은 그림)
//
// 「To see an empty market」은 주공해몽의 「시장에 사람이 하나도 없음」과 같고,
// 「For a young woman, a market…」은 밀러 `Fair` 의 「처녀가 장이 선 곳에 감」과 같다.
// 판별어(아무도·없었 / 처녀·아가씨)를 나눌 수 없다.
//
// ## `Mare` 셋은 「암말」을 못 쓴다
//
// 기존 「새끼 밴 암말을 봄」이 그 낱말을 쥐고 있다 — 「풀밭」·「메마른」·「처녀」로 갈랐다.
// 세 문장 모두에 「암말」이 들어 있어 동점이 나므로 **추출 파일에서 새 셋을 앞에** 두었다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-116.mjs

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
  horse: {
    aliasesAdd: ["암말이", "암말을"],
    contextsAdd: {
      "메마른 풀밭의 암말을 봄": "메마른 황량",
      "처녀가 암말을 봄": "처녀 아가씨",
      "풀밭의 암말을 봄": "풀밭 목장",
    },
    contextsEnAdd: {
      "메마른 풀밭의 암말을 봄": "barren poverty warm",
      "처녀가 암말을 봄": "omens happy beautiful children",
      // 「congenial」은 기존 「congeniality」에 물린다(배치 43 — 새 쪽만 간다)
      "풀밭의 암말을 봄": "mares pastures companions",
    },
  },
  marketplace: {
    aliasesAdd: ["시장을", "시장이"],
    contextsAdd: {
      "시장 안에 있음": "북적 붐볐",
      "시장에서 상한 채소나 고기를 봄": "상한 썩은 무른",
    },
    contextsEnAdd: {
      "시장 안에 있음": "thrift activity occupations",
      "시장에서 상한 채소나 고기를 봄": "decayed vegetables meat losses",
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
