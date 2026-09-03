// 배치 139(밀러 `Navy`~`Newspaper`) — 기존 넷을 손본다.
//
//   needle(바늘)     ← 밀러 `Needle` 다섯. **판별어 표가 비어 있었다**(의미가 하나뿐이던
//                      상징, 열아홉 번째). 기존 의미(「바늘을 얻음」, 주공해몽)도 이번에 채운다
//   net(그물)        ← 밀러 `Nets` 하나(「낡거나 찢어진 그물」은 안 넣는다 — `Fish-net`
//                      의 「찢어진 그물을 봄」과 같은 그림)
//   bird-s-nest(새 둥지) ← 밀러 `Nest` 셋(「빈 둥지」·「처녀는 이사」는 안 넣는다 —
//                      각각 `Bird's Nest`와 같은 그림, 성별만 다른 구분)
//   message(기별)    ← 밀러 `News` 둘. 「소식」이 이미 별칭이라 새 상징을 세우지 않았다
//
// **한 번만 돌린다.** 실행: node scripts/patch-km-139.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

function fileOf(id) {
  for (const f of readdirSync(DIR)) {
    if (!/^kmm?\d+\.json$/.test(f)) continue;
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
  needle: {
    aliasesAdd: [],
    contextsAdd: {
      // 기존 의미 — 판별어가 아예 없던 자리다
      "바늘을 얻음": "얻었 얻어 생겼",
      "바늘을 씀": "썼다 사용했 바느질했",
      "바늘에 실을 뀀": "실을 꿰 실을 꿰었",
      "바늘을 찾음": "찾고 있 찾다가 찾으려",
      "바늘을 찾아냄": "찾아냈 발견했",
      "바늘이 부러짐": "부러졌 부러뜨렸",
    },
    contextsEnAdd: {
      "바늘을 얻음": "obtained mirrors bracelets combs",
      "바늘을 씀": "warning affliction loss sympathy",
      "바늘에 실을 뀀": "threading burdened care household",
      "바늘을 찾음": "look for useless worries",
      "바늘을 찾아냄": "find friends appreciate",
      "바늘이 부러짐": "break loneliness poverty",
    },
  },
  net: {
    aliasesAdd: [],
    contextsAdd: {
      "그물로 무언가를 옭아 잡음": "옭아 잡았 옭아맸 낚아챘",
    },
    contextsEnAdd: {
      "그물로 무언가를 옭아 잡음": "ensnaring unscrupulous dealings deportment",
    },
  },
  "bird-s-nest": {
    aliasesAdd: [],
    contextsAdd: {
      "새 둥지를 봄": "새 둥지를 사업에 관심",
      "암탉이 둥지를 틈": "암탉이 닭이 닭의",
      "둥지 안에 깨지거나 상한 알이 있음": "깨진 상한 썩은",
    },
    contextsEnAdd: {
      "새 둥지를 봄": "seeing birds nests prosperous enterprise",
      "암탉이 둥지를 틈": "hens domesticities cheerful obedient",
      "둥지 안에 깨지거나 상한 알이 있음": "broken bad eggs disappointments failure",
    },
  },
  message: {
    aliasesAdd: [],
    contextsAdd: {
      "좋은 소식을 들음": "좋은 반가운 기쁜",
      "나쁜 소식을 들음": "나쁜 궂은 안 좋은",
    },
    contextsEnAdd: {
      "좋은 소식을 들음": "good fortunate harmonious companions",
      "나쁜 소식을 들음": "bad contrary conditions",
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
