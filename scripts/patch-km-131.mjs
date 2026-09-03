// 배치 131(밀러 `Monster`·`Moon`·`Morgue`·`Morning`·`Morocco`) — 기존 셋에 붙인다.
//
//   moon(달)          ← 밀러 `Moon` 여덟. 열둘이던 것이 **스물**이 된다
//   daybreak(새벽)    ← 밀러 `Morning` 둘. 「아침」으로 상징을 세우면 `breakfast` 의
//                        별칭 「아침 식사」와 한 문장에서 둘 다 걸린다
//   hide(짐승 가죽)   ← 밀러 `Morocco` 하나. 「모로코 가죽」이 별칭 「가죽」을 품는다
//
// ## 의미가 스물이 되면 **글자가 부딪친다** (§30 곁가지, 배치 43)
//
// 새 판별어를 적으면서 기존 것과 물린 자리를 셋 피했다.
//
//   가려지(월식) ⊃ 「달이 어둑하게 흐림」의 「가려」   → 「월식 이지러」로
//   삼켜져(월식) ⊃ 「달을 삼킴」의 「삼켜」            → 〃
//   dim(사그라짐) = 「달이 어둑하게 흐림」의 `dim`     → 「supreme slip womanly tact」로
//
// `hide` 의 「가죽 장신구를 봄」이 `faithfulness` 를 쥐고 있어 모로코 쪽 영어에서도 뺐다.
//
// ## 기본값 둘이 바뀐다 (§30)
//
//   moon      m131.json 이 r*.json 보다 앞선다 → **바꿔서 얼린다**
//             (막연한 달 꿈이 떨어질 자리는 「하늘이 여느 때와 같은데 달을 봄」이다)
//   daybreak  m131.json 이 m24.json 보다 앞선다(`1` < `2`) → **옛것 그대로 얼린다**
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-131.mjs

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
  moon: {
    aliasesAdd: ["달이", "달을", "그믐달", "월식"],
    contextsAdd: {
      "하늘이 여느 때와 같은데 달을 봄": "여느 예사 평소",
      "기괴한 달을 봄": "기괴 괴이 으스스",
      "월식이 드는 것을 봄": "월식 이지러",
      "초승달을 봄": "초승 갓뜬 눈썹달",
      "처녀가 달에게 제 앞날을 물음": "처녀 앞날 물었",
      "달이 둘로 보임": "둘로 두개 쌍으로",
      "달빛이 점점 사그라짐": "사그라 스러져 잦아",
      "핏빛으로 붉은 달을 봄": "핏빛 붉은 붉게",
    },
    contextsEnAdd: {
      "하늘이 여느 때와 같은데 달을 봄": "aspect heavens remaining normal",
      "기괴한 달을 봄": "weird uncanny unpropitious infelicities",
      "월식이 드는 것을 봄": "eclipse contagion ravage community",
      "초승달을 봄": "increase wealth congenial partners",
      "처녀가 달에게 제 앞날을 물음": "appeals soon choice",
      "달이 둘로 보임": "two moons mercenary",
      "달빛이 점점 사그라짐": "supreme slip womanly tact",
      "핏빛으로 붉은 달을 봄": "blood crimson war strife defence",
    },
  },
  daybreak: {
    aliasesAdd: ["아침이 밝았다", "아침 동이", "흐린 아침", "맑은 아침"],
    contextsAdd: {
      "맑은 아침 동이 트는 것을 봄": "맑은 개인 화창",
      "흐린 아침을 봄": "흐린 구름 잔뜩",
    },
    contextsEnAdd: {
      "맑은 아침 동이 트는 것을 봄": "morning clear near approach fortune pleasure",
      "흐린 아침을 봄": "cloudy portends weighty overwhelm",
    },
  },
  hide: {
    aliasesAdd: ["모로코 가죽"],
    contextsAdd: {
      "모로코 가죽을 봄": "모로코",
    },
    contextsEnAdd: {
      "모로코 가죽을 봄": "morocco substantial aid unexpected sources",
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
