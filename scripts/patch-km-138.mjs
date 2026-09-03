// 배치 138(밀러 `Nails`·`Naked`·`Napkin`) — 기존 하나를 손본다.
//
//   naked-body(알몸) ← 밀러 `Naked` 일곱. **판별어 표가 비어 있었다**(열다섯 번째, 배치 35)
//
// 「To dream that you are naked」는 안 넣는다 — 주공해몽 「옷 없이 몸을 드러냄」이 **길**,
// 밀러가 **흉**이라 같은 그림에 길흉이 반대인 자리다(§31 곁가지).
//
// ## 기본값은 옛것 그대로 얼린다 (§30)
//
// `m138.json` 이 `r*.json` 보다 앞서 정렬된다.
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-138.mjs

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
  "naked-body": {
    aliasesAdd: ["알몸이", "알몸을", "알몸으로", "알몸인"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "옷 없이 몸을 드러냄": "드러냈 드러내",
      "남이 알몸인 것을 봄": "남이 남들 다른 사람",
      "제 알몸을 문득 깨닫고 가리려 함": "가리려 감추려 문득",
      "처녀가 제 알몸에 반함": "반했 감탄",
      "처녀가 제 몸이 볼품없다고 여김": "볼품없 흉하다 못생겼",
      "처녀가 알몸으로 맑은 물에서 헤엄침": "처녀 헤엄쳤",
      "알몸의 사내들이 맑은 물에서 헤엄치는 것을 봄": "사내들 남자들",
      "알몸으로 헤엄치는 물이 흐림": "흐렸 흐린 탁한",
    },
    contextsEnAdd: {
      "옷 없이 몸을 드러냄": "exposed uncovered",
      "남이 알몸인 것을 봄": "others tempted designing leave path duty",
      "제 알몸을 문득 깨닫고 가리려 함": "suddenly discover conceal illicit noblest instincts",
      "처녀가 제 알몸에 반함": "admires win hold honest regard charms",
      "처녀가 제 몸이 볼품없다고 여김": "reputation sullied scandal",
      "처녀가 알몸으로 맑은 물에서 헤엄침": "swimming clear loves revenge",
      "알몸의 사내들이 맑은 물에서 헤엄치는 것을 봄": "men many admirers",
      "알몸으로 헤엄치는 물이 흐림": "muddy jealous gossip",
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
