// **배치 100(밀러 `Lightning`)은 새 상징을 안 세운다** — `kmm100.json` 이 없는 판이다.
//
//   lightning(번개)  ← 밀러 `Lightning` 열하나. ⓪ grep 이 「번개」를 EXACT 로 찍었다
//
// ## 의미가 하나뿐이던 상징이라 **판별어 표가 비어 있었다** (배치 35)
//
// 하나일 때는 판별어가 없어도 어차피 그것으로 떨어진다. **여럿이 되는 순간 모두 있어야
// 한다** — 기존 「번갯빛이 몸을 비춤」(주공해몽)의 판별어를 이번에 함께 채웠다.
// 안 채우면 그 의미가 0점으로 남아 새 열하나에 밀려 안 뽑힌다.
//
// ## 기본값이 바뀐다 — 얼려서 바꾼다 (§30)
//
// `m100.json` 이 `r*.json` 보다 먼저 정렬돼 밀러 쪽이 배열 앞으로 온다. 되돌리지 않고
// **「번개를 봄」을 기본값으로 삼는다** — 밀러가 이 상징의 **가장 일반적인 그림**을
// 들여왔고(막연한 「번개 꿈」이 떨어질 자리다), 옛 기본값 「번갯빛이 몸을 비춤」은
// 조건이 붙은 좁은 자리다(배치 54의 `hunting`·`embrace` 와 같은 판단).
// → `build-dream-dictionary-v2.mjs` 의 `FALLBACK_FIRST` 에 함께 적었다.
//
// ## 방위 판별어는 **부분 문자열**을 피해 갈랐다
//
// 「서쪽」은 「남서쪽」 안에 들어 있어 한 문장이 둘 다 맞힌다. `verify-dream-km` 은
// 「남서」와 「서쪽」을 겹침으로 보지 않지만 **엔진에서는 동점**이 되므로, 추출 파일에서
// 「남서쪽」을 「서쪽」보다 **앞에** 두어 차례로 풀었다(§25 곁가지 3).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-100.mjs

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
  lightning: {
    aliasesAdd: ["벼락", "번개가", "번개를"],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "번갯빛이 몸을 비춤": "몸을 비추 비쳤 비췄",
      // 새로 넣는 열하나
      "번개를 봄": "번쩍였 번쩍하",
      "번개가 곁의 물건에 떨어짐": "곁의 곁에 가까이 물건에 충격",
      "검은 구름을 가르는 시퍼런 번개를 봄": "시퍼런 가르",
      "번개가 제게 떨어짐": "나를 내게 맞았",
      "머리 위에서 번개가 침": "머리",
      "남쪽에서 번개가 침": "남쪽",
      "남서쪽에서 번개가 침": "남서",
      "서쪽에서 번개가 침": "서쪽",
      "북쪽에서 번개가 침": "북쪽",
      "동쪽에서 번개가 침": "동쪽",
      "어둡고 불길한 구름에서 번개가 침": "불길한 어두운 먹구름",
    },
    contextsEnAdd: {
      "번갯빛이 몸을 비춤": "shone joyous occasion body lit",
      "번개를 봄": "short duration",
      "번개가 곁의 물건에 떨어짐": "object shock gossipers scandalmongers",
      "검은 구름을 가르는 시퍼런 번개를 봄": "livid parting difficulties",
      "번개가 제게 떨어짐": "unexpected overwhelm",
      "머리 위에서 번개가 침": "above head heralds advent",
      "남쪽에서 번개가 침": "hide awhile",
      "남서쪽에서 번개가 침": "southwest luck",
      "서쪽에서 번개가 침": "brighter formally",
      "북쪽에서 번개가 침": "north obstacles removed",
      "동쪽에서 번개가 침": "east favors",
      "어둡고 불길한 구름에서 번개가 침": "ominous forerunner threats disappointments",
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
