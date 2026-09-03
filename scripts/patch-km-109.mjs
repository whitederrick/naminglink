// **배치 109(밀러 `Love`~`Luggage`)가 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 넷은 `kmm109.json` 에 있다 — love(사랑) · lovely(사랑스러운 것) ·
// lucky(행운) · luggage(짐가방).
//
//   candy(사탕)  ← 밀러 `Lozenges` 둘. ⓪ grep 이 「사탕」을 EXACT 로 찍었다
//
// ## 「여성이 알사탕을 먹거나 버림」을 **앞에** 두었다
//
// 그 문장에 든 「먹었」은 기존 「바삭한 새 사탕을 먹음」의 것이고 「알사탕」은 새로 넣는
// 「알사탕을 봄」의 것이라, 세 의미가 1점씩으로 **동점**이 난다. 좁은 쪽을 추출 파일에서
// 앞에 두어 풀었다(§25 곁가지 3).
//
// ## 새 이름이 기존 이름을 품는 자리 셋 — 전부 `isStandalone` 이 가른다
//
// ```
// 사랑     ⊂ 「사랑의 도피」(elopement)   뒤가 조사(의)라 **둘 다 걸린다** — 그 꿈에 사랑이
//                                        실제로 있으므로 옳다(배치 29의 「음식」과 같다)
// 사랑스러운 ⊃ 「사랑」(love)              뒤의 「스」가 한글이라 막힌다
// 짐가방    ⊃ 「짐」(burden)               뒤의 「가」가 한글이라 막힌다
// ```
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-109.mjs

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
  candy: {
    aliasesAdd: ["알사탕", "목캔디"],
    contextsAdd: {
      "여성이 알사탕을 먹거나 버림": "여자가 여성이 버렸",
      "알사탕을 봄": "알사탕 목캔디",
    },
    contextsEnAdd: {
      "여성이 알사탕을 먹거나 버림": "throw away harassed spites envious",
      "알사탕을 봄": "lozenges small matters",
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
