// **배치 87(밀러 Lap~Latch)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 둘은 `kmm87.json` 에 있다 — lard(돼지기름) · lark(종달새).
//
//   knee(무릎)     ← 밀러 `Lap` 넷
//   blanket(담요)  ← 밀러 `Lap-robe` 둘
//
// ## 「무릎덮개」를 새 상징으로 안 세운 까닭
//
// 「무릎덮개」는 `knee` 의 이름 「무릎」을 **부분 문자열로 품는다** — 새 상징을 세우면
// 「무릎덮개를 보았다」에 상징이 둘 뜬다(§25 곁가지). 임자는 `blanket` 이다(그 별칭에
// 이미 「무릎담요」가 있다). 「무릎덮개」의 「개」는 앞이 「덮」(한글)이라 `dog` 에 안 걸린다.
//
// ## 안 넣은 표제어 둘 — **같은 그림이 이미 들어와 있다**(§31 곁가지)
//
//   Lap-dog  두 문장이 `dog` 의 「곱게 꾸민 애완견을 봄」·「여위고 더러운 개를 봄」과
//            **같은 그림**이다(밀러 `Dogs` 에서 이미 들어왔다). 「애완」을 그 의미가 쥐고
//            있어 판별어를 나눌 수도 없다.
//   Latch    두 문장이 `bolts` 의 「빗장(볼트) 꿈을 꿈」·「빗장이 낡거나 부러짐」과 같은
//            그림이다. 「걸쇠」는 이미 `bolts` 의 별칭이다.
//            (끝 문장 「Sickness is also foretold in this dream.」은 꿈 그림이 아니다)
//
// **커버리지에서 이 둘이 비는 것이 옳다.**
//
// ## 「돼지기름」을 새 상징으로 세운 까닭
//
// 「돼지기름」의 「돼지」는 뒤가 「기」(한글)라, 「기름」은 앞이 「지」(한글)라 `isStandalone`
// 이 둘 다 버린다 — `pig` 도 `oil` 도 안 걸린다. 품는 관계가 아니다(§25 곁가지).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-87.mjs

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
  knee: {
    contextsAdd: {
      "남의 무릎에 앉음": "앉았 앉아",
      "처녀가 남을 제 무릎에 앉힘": "앉혔 앉히 올려놓",
      "무릎에 뱀이 있음": "뱀이 뱀을",
      "무릎에 고양이가 있음": "고양이",
    },
    contextsEnAdd: {
      "남의 무릎에 앉음": "sitting pleasant security vexing",
      "처녀가 남을 제 무릎에 앉힘": "holding exposed unfavorable criticism",
      "무릎에 뱀이 있음": "serpent threatened humiliation",
      "무릎에 고양이가 있음": "endangered seductive",
    },
  },
  blanket: {
    aliasesAdd: ["무릎덮개"],
    contextsAdd: {
      // 「덮개를」을 주면 「무릎덮개를 잃어버렸다」에서 둘을 먹어 아래를 이긴다 — 하나만.
      "무릎덮개를 봄": "무릎덮개",
      "무릎덮개를 잃어버림": "잃어버 잃었",
    },
    contextsEnAdd: {
      "무릎덮개를 봄": "lap-robe suspicious engagements surveillance",
      "무릎덮개를 잃어버림": "condemned injure affairs",
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
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
