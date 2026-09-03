// **배치 72(밀러 Judgment Day~Jumping-jack)가 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 넷은 `kmm72.json` 에 있다 — jug(주전자)·july(칠월)·jumping(뜀뛰기)·
// jumping-jack(꼭두각시 인형).
//
//   kmm27  doomsday(최후의 심판)  ← 밀러 `Judgment Day` 셋
//
// ## 왜 새 상징을 안 세웠나
//
// ⓪ grep 이 「심판의 날」을 `doomsday` 의 별칭으로 찍었다(밀러 `Doomsday` 로 이미 들어와 있다).
//
// ## 판별어를 고를 때 부딪친 자리
//
// 기존 「젊은 여성에게 최후의 심판 꿈이 나타남」이 **「여자 여성 처녀」를 쥐고 있어**
// 새 「심판대에서 유죄를 들음」에는 성별 말을 못 준다 — 「유죄·심판대」로 갈랐다.
// 기존 「최후의 심판을 기다림」이 「기다리」를 쥐고 있어 「죽은 이들이 일어나는 것을 봄」도
// 「죽은·일어나」로만 적었다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-72.mjs

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
  doomsday: {
    aliasesAdd: ["심판대", "심판날"],
    contextsAdd: {
      "벌을 면하기를 바라며 담담히 심판을 맞음": "담담 벌을 면하",
      "심판대에서 유죄를 들음": "유죄 심판대",
      "죽은 이들이 일어나는 것을 봄": "죽은 일어나 무덤에서",
    },
    contextsEnAdd: {
      "벌을 면하기를 바라며 담담히 심판을 맞음": "resigned hopeful escaping punishment well-planned",
      "심판대에서 유죄를 들음": "verdict guilty selfish unbecoming conduct",
      "죽은 이들이 일어나는 것을 봄": "rising solemnly fearfully struggling refuse",
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
