// **배치 90(밀러 Lazy~Leaping)은 새 상징을 하나만 세운다.**
//
// 새 상징 하나는 `kmm90.json` 에 있다 — leak(누수).
//
//   idleness(게으름)  ← 밀러 `Lazy` 둘
//   lead(납)          ← 밀러 `Lead` 다섯
//   jumping(뜀뛰기)   ← 밀러 `Leaping` 하나(끝에 `[113] See Jumping.`)
//
// ## 밀러 `Lazy` 의 첫 문장은 **인용을 포갰다**(§31 곁가지)
//
// 밀러 `Idleness` 로 이미 들어와 있는 「제가 빈둥거림」과 **같은 그림이고 같은 `work`** 다.
// 이름을 그대로 쓰면 조립기가 인용 둘을 한 의미에 포갠다(배치 32·89와 같다).
//
// ## 판별어에 상징 이름을 못 쓴다
//
// `lead` 는 이름이 「납」이라 「납을」·「땜납」 같은 낱말이 전부 `verify-dream-km` 에 걸린다
// (배치 89에서 「월계수」로 한 번 걸렸다). 「잿빛」·「광산」·「광석」처럼 **딴 낱말로** 갈랐다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-90.mjs

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
  idleness: {
    // 「게으르다고 여겼다」가 안 걸렸다 — 별칭에 「게을러」·「게으르게」는 있었으나 「게으르다」
    // 꼴이 없었고, 「게으르다」 뒤의 「고」는 조사가 아니다(§29 곁가지 ①). 프로브가 잡았다.
    aliasesAdd: ["게으르다고", "게으른", "게을렀다"],
    contextsAdd: {
      "처녀가 정인을 게으르다고 여김": "정인이 애인이 지아비가",
    },
    contextsEnAdd: {
      "처녀가 정인을 게으르다고 여김": "lover admiration discourage marriage",
    },
  },
  lead: {
    contextsAdd: {
      // 판별어에 상징 이름(납)이 들어가면 `verify-dream-km` 이 막는다 — 딴 낱말로 가른다.
      "납과 주석을 봄": "주석",
      "납을 봄": "잿빛 무겁고",
      "납 광산을 봄": "광산",
      "납 광석을 봄": "광석 원석",
      "납을 찾아다님": "찾아다 찾으러",
      "납을 녹임": "녹였 녹이",
    },
    contextsEnAdd: {
      "납과 주석을 봄": "tin",
      "납을 봄": "poor success engagement",
      "납 광산을 봄": "mine suspicion sweetheart deceit temper",
      "납 광석을 봄": "ore distress accidents gloomy cast",
      "납을 찾아다님": "hunt discontentment constant changing employment",
      "납을 녹임": "melt impatience upon",
    },
  },
  jumping: {
    // 기존 「무엇을 뛰어넘음」이 「넘었다」까지 쥐면 새 문장(「여자가 장애물을 뛰어넘었다」)과
    // 동점이 되고, 파일 차례로는 기존이 앞이라 새 의미가 영영 안 뽑힌다 — 좁힌다(§30 곁가지).
    contextsReplace: {
      "무엇을 뛰어넘음": ["뛰어넘 넘었다", "뛰어넘"],
    },
    contextsAdd: {
      "처녀가 가로막힌 것을 뛰어넘음": "장애물 가로막 처녀 여자가",
    },
    contextsEnAdd: {
      "처녀가 가로막힌 것을 뛰어넘음": "leaping obstruction desires struggling opposition",
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
