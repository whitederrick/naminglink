// **배치 74(밀러 Katydids~Key)가 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 둘은 `kmm74.json` 에 있다 — katydid(여치)·key(열쇠).
//
//   cask(나무통)     ← 밀러 `Keg` 둘
//   cauldron(솥)     ← 밀러 `Kettle` 셋
//
// ## 왜 새 상징을 안 세웠나
//
// 「솥」은 `cauldron` 의 이름이다. **`Keg` 도 새로 안 세웠다** — 「작은 나무통」·「작은 술통」
// 으로 지으면 그 이름이 `cask` 의 「나무통」·「술통」을 **공백 뒤에서 품어 둘 다 걸린다**
// (§25 곁가지). 밀러가 `Cask` 와 `Keg` 를 따로 두었어도 한국어에서는 한 상징이 맞다.
//
// ## 안 넣은 문장 둘 — **커버리지가 문장 단위로 빈다**(§24·§31 곁가지)
//
//   Kettle 「To see kettles…」        → `cauldron` 의 「큰 솥을 봄」과 그림이 같다
//   Kettle 「To see a broken kettle…」 → `cauldron` 의 「무쇠솥이 깨짐」과 그림이 같다
//
// ## `key` 는 극성 하니스가 **몇 주째 건너뛰던 id** 다(인계 ⑬)
//
// 이 상징이 들어오면 잠자던 기대치가 깨어난다. **깨어난 기대가 틀렸으면 지우지 말고 문장이
// 실제로 가리키는 상징으로 고친다**(배치 40에서 넷이 그랬고 기대 자체가 짐작이었다).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-74.mjs

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
  cask: {
    // 「통이 깨」는 뒤의 「졌」에 막힌다 — 완전한 꼴로 올린다(§29 곁가지 ①).
    aliasesAdd: ["작은 통", "조그만 통", "깨진 통", "통이 깨졌다"],
    contextsAdd: {
      "작은 통을 봄": "작은 조그만 짓눌",
      "깨진 통을 봄": "깨진 깨졌 부서",
    },
    contextsEnAdd: {
      "작은 통을 봄": "keg struggle throw oppression",
      "깨진 통을 봄": "separation family friends",
    },
  },
  cauldron: {
    contextsAdd: {
      "물이 끓는 솥을 봄": "끓는 끓고 펄펄",
      "어두운 빛깔의 솥을 다룸": "어두운 검은 다루",
      "밝은 빛깔의 솥을 봄": "밝은 환한 빛깔",
    },
    contextsEnAdd: {
      "물이 끓는 솥을 봄": "boiling water struggles soon end change",
      "어두운 빛깔의 솥을 다룸": "handling dark disappointment love marriage",
      "밝은 빛깔의 솥을 봄": "light-colored absolute freedom care handsome worthy",
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
