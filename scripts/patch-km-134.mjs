// 배치 134(밀러 `Mountain`·`Mouse-trap`·`Mud`) — 기존 둘을 손본다.
//
//   mountain(산) ← 밀러 `Mountain` 다섯. 열이던 의미가 **열다섯**이 된다
//   mud(진흙)    ← 밀러 `Mud` 넷
//
// ## 기존 열의 판별어를 한 줄씩 읽고 새 낱말을 골랐다 (§30 곁가지)
//
// 「떨어져」·「두려」·「무너」·「유람」·「자리잡」·「재물」·「안고」·「농사」가 이미 임자가 있다.
// 새 다섯은 「넘었 사촌 오라비」·「지쳐 마다」·「푸른 우거진」·「가파른 꼭대기」·「잠이 깼」로 갈랐다.
//
// ## 기본값은 **옛것 그대로 얼린다** (§30)
//
// `m134.json` 이 `r*.json` 보다 앞서 정렬되어 둘 다 바뀐다. 밀러 쪽에 「가장 일반적인
// 그림」이라 할 만한 것이 없어(다섯 다 조건이 붙어 있다) 옛 기본값을 그대로 둔다.
// 산의 옛 기본값(「산이 해와 달을 물고 있음」)이 막연한 산 꿈의 답으로 어울리지 않는 것은
// **이번 배치가 만든 것이 아니라 원래 그랬던 것**이다 — 사실만 적어 둔다.
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-134.mjs

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
  mountain: {
    aliasesAdd: ["산을", "산이", "산에"],
    contextsAdd: {
      "처녀가 웃는 사촌·죽은 오라비와 산을 넘음": "사촌 오라비 넘었",
      "산을 넘다 지쳐 더 가기를 마다함": "지쳐 마다 그만두",
      "곱고 푸른 길로 산에 오름": "푸른 우거진 곱고",
      "가파른 산을 오르다 꼭대기에 못 미침": "가파른 꼭대기 험한",
      "산을 오르다 아슬아슬한 곳에서 잠이 깸": "잠이 깼다 아슬아슬",
    },
    contextsEnAdd: {
      "처녀가 웃는 사촌·죽은 오라비와 산을 넘음": "crossing cousin brother smiling allurements",
      "산을 넘다 지쳐 더 가기를 마다함": "exhausted refuses further slightly exalted",
      "곱고 푸른 길로 산에 오름": "ascend pleasant verdant swiftly prominence",
      "가파른 산을 오르다 꼭대기에 못 미침": "rugged reach top reverses weakness",
      "산을 오르다 아슬아슬한 곳에서 잠이 깸": "awaken dangerous point flattering turn",
    },
  },
  mud: {
    aliasesAdd: ["진흙이", "진흙을"],
    contextsAdd: {
      "진흙을 밟고 걸어감": "걸어 걸었",
      "남이 진흙을 밟고 가는 것을 봄": "남이 남들 다른 사람",
      "농사짓는 이가 진흙 꿈을 꿈": "농사 농부",
      "옷에 묻은 진흙을 긁어냄": "긁어 털어 떼어",
    },
    contextsEnAdd: {
      "진흙을 밟고 걸어감": "confidence friendships disturbances family",
      "남이 진흙을 밟고 가는 것을 봄": "others walking ugly rumors employee",
      "농사짓는 이가 진흙 꿈을 꿈": "farmer short crops unsatisfactory gains",
      "옷에 묻은 진흙을 긁어냄": "scrape escape calumny",
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
