// **배치 107(밀러 `Locomotive`·`Locust`·`Lodger`)이 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 하나는 `kmm107.json` 에 있다 — lodger(하숙인).
//
//   engine(기관차)      ← 밀러 `Locomotive` 넷. ⓪ grep 이 「기관차」를 EXACT 로 찍었다
//   grasshopper(메뚜기) ← 밀러 `Locust` 둘.     「메뚜기」가 EXACT
//
// ## 「If it is disabled」는 **안 넣었다** (§31 곁가지 — 같은 그림)
//
// `engine` 에 이미 「고장 난 기관차를 봄」(밀러 `Engine`)이 있다. 같은 그림이고 판별어도
// 같은 말(고장·망가)밖에 없다.
//
// ## 기존 판별어에서 「부서진」을 새 의미에 넘겼다 (§30 곁가지)
//
// 기존 「고장 난 기관차를 봄」이 「부서진」을 쥐고 있어서 새로 넣는 「기관차가 완전히
// 부서진 것을 봄」이 안 뽑힌다. 그 의미를 실제로 가르는 것은 **고장**이므로 「부서진」은
// 새 쪽에 넘겼다.
//
// ## 「메뚜기를 봄」이 기본값이 된다 — 바꿔서 얼린다 (§30)
//
// 있던 넷은 전부 조건이 붙은 그림(푸른 남새 위·시든 풀 위·해와 나 사이·남에게 가리킴)이고,
// 밀러 `Locust` 의 첫 문장이 **가장 일반적인 그림**이다.
//
// ## `Looking-glass` 는 이 판에 안 넣었다
//
// 원문 각주가 「[115] See Mirror.」이고 `mirror` 의 `aliases_en` 에 이미 「looking glass」가
// 있다. 그런데 그 문장은 **여성이 거울을 보는 것**인데, `mirror` 에 이미 있는
// 「여성이 거울을 깨뜨림」이 **성별 말고 가를 말이 없는 판별어**(여성·여자·아내·그녀)를
// 쥐고 있어 **둘을 가를 수 없다**(배치 85와 같은 자리). 커버리지가 비는 것이 옳다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-107.mjs

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
  engine: {
    aliasesAdd: ["증기 기관차", "화통"],
    contextsReplace: {
      "고장 난 기관차를 봄": ["고장 망가 멈춰선 부서진", "고장 망가 멈춰선"],
    },
    contextsAdd: {
      "기관차가 빠르게 달림": "빠르게 쏜살 힘차게",
      "기관차가 완전히 부서진 것을 봄": "부서진 박살 완전히",
      "기관차가 오는 소리를 들음": "오는 다가오는",
      "기관차의 기적 소리를 들음": "기적 경적",
    },
    contextsEnAdd: {
      "기관차가 빠르게 달림": "speed rapid foreign travel",
      "기관차가 완전히 부서진 것을 봄": "demolished distress property",
      "기관차가 오는 소리를 들음": "coming news nature classes",
      "기관차의 기적 소리를 들음": "whistle pleased surprised absent preferment",
    },
  },
  grasshopper: {
    aliasesAdd: ["메뚜기 떼", "메뚜기가", "메뚜기를"],
    contextsAdd: {
      "메뚜기를 봄": "무리 떼지어 새까맣게",
      "여성이 메뚜기 꿈을 꿈": "여자가 여성이 처녀가",
    },
    contextsEnAdd: {
      "메뚜기를 봄": "locusts discrepancies worry suffer",
      "여성이 메뚜기 꿈을 꿈": "bestow affections ungenerous",
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
