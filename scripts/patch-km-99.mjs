// **배치 99(밀러 `Life-insurance Man`·`Light`·`Lighthouse`)가 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 하나는 `kmm99.json` 에 있다 — life-insurance-man(보험 외판원).
//
//   illumination(환한 빛)  ← 밀러 `Light` 셋.  ⓪ grep 이 「빛이·빛을·빛과」를 이 상징의
//                            별칭으로 찍었다. 새 상징을 세우면 「빛을 보았다」가 둘에 걸린다
//   beacon-light(등대 불빛) ← 밀러 `Lighthouse` 둘. 「등대」가 EXACT 로 이 상징의 별칭이다
//
// ## 기존 판별어에서 「폭풍」·「storm」을 뺐다 (§30 곁가지)
//
// 기존 「폭풍이나 곤경 속에서 등대 불빛이 꺼지는 것을 봄」이 「폭풍」을 쥐고 있어서, 새로
// 넣는 「폭풍 속에서 등대를 봄」이 **어떤 문장으로도 안 뽑힌다.** 그 의미를 실제로 가르는
// 것은 **불빛이 꺼진다는 것**이므로(꺼지·꺼졌·사라졌 / extinguished·darkened·faded)
// 「폭풍」은 새 쪽에 넘겼다. 영어도 같다.
//
// ## 「기이한 빛」은 새 이름으로 안 적었다
//
// 밀러 `Light` 의 둘째 문장은 「weird light, or if the light goes out」인데, **「기이한 빛을
// 봄」은 이미 밀러 `Illumination` 이 갖고 있다**(같은 그림, §31 곁가지). 이름을
// 「빛이 꺼짐」으로 두어 실제로 가르는 것만 남기고, 기이한 빛 쪽은 풀이에 녹였다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-99.mjs

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
  illumination: {
    // 「빛나는」은 **옛 상처다** — 「빛」 뒤의 「나」가 조사가 아니라 `isStandalone` 이 막아서
    // 「빛나는 뱀이 기어 다녔다」가 심어진 뒤로 한 번도 안 걸렸다(§29 곁가지 ①). 프로브의
    // 지킴 케이스가 찾았다.
    aliasesAdd: ["밝은 빛", "어스름한 빛", "빛나는", "빛났다"],
    contextsAdd: {
      "밝은 빛을 봄": "환했 밝았 밝은",
      "빛이 꺼짐": "꺼졌 꺼지 사그라",
      "어스름한 빛을 봄": "어스름 희미 어둑",
    },
    contextsEnAdd: {
      "밝은 빛을 봄": "success attend",
      "빛이 꺼짐": "disagreeably surprised undertaking resulting",
      "어스름한 빛을 봄": "dim partial",
    },
  },
  "beacon-light": {
    aliasesAdd: ["등대를", "등대가"],
    // 「폭풍」·「storm」을 새 의미에 넘긴다 — 기존이 쥐고 있으면 새 것이 안 뽑힌다
    contextsReplace: {
      "폭풍이나 곤경 속에서 등대 불빛이 꺼지는 것을 봄": ["꺼지 꺼졌 폭풍 사라졌", "꺼지 꺼졌 사라졌"],
    },
    contextsEnReplace: {
      "폭풍이나 곤경 속에서 등대 불빛이 꺼지는 것을 봄": [
        "extinguished darkened storm faded",
        "extinguished darkened faded",
      ],
    },
    contextsAdd: {
      "폭풍 속에서 등대를 봄": "폭풍 비바람",
      "잔잔한 바다에서 등대를 봄": "잔잔 고요",
    },
    contextsEnAdd: {
      "폭풍 속에서 등대를 봄": "storm grief disperse",
      "잔잔한 바다에서 등대를 봄": "placid calm congenial",
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
  for (const [k, [before, after]] of Object.entries(patch.contextsReplace ?? {})) {
    if (row.contexts[k] !== before) stop(`${id}: 「${k}」의 판별어가 「${before}」가 아니다 — 이미 돌렸거나 바뀌었다.`);
    row.contexts[k] = after;
    changed++;
  }
  for (const [k, [before, after]] of Object.entries(patch.contextsEnReplace ?? {})) {
    if (row.contexts_en[k] !== before) stop(`${id}: 영어 「${k}」의 판별어가 「${before}」가 아니다.`);
    row.contexts_en[k] = after;
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
  for (const [k, [, after]] of Object.entries(patch.contextsReplace ?? {})) {
    if (row.contexts[k] !== after) stop(`확인 실패: ${id} 의 「${k}」가 안 바뀌었다.`);
  }
  for (const [k, [, after]] of Object.entries(patch.contextsEnReplace ?? {})) {
    if (row.contexts_en[k] !== after) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 바뀌었다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
