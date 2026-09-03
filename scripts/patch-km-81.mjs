// **배치 81(밀러 Ladder~Lament)이 이미 있는 상징 하나를 건드린다.**
//
// 새 상징 넷은 `kmm81.json` 에 있다 — ladder(사다리)·ladle(국자)·lagoon(석호)·lament(애통해함).
//
//   crippled(몸이 성치 않은 이)  ← 밀러 `Lame` 하나. **판별어 표가 비어 있었다**
//
// ## 왜 새 상징을 안 세웠나
//
// 밀러 `Lame` 은 본문이 한 줄이고 끝에 `[109] See Cripple.` 로 제 임자를 가리킨다.
// `crippled` 가 밀러 `Crippled` 로 이미 들어와 있다(§25 곁가지 — 임자에게 붙인다).
//
// ## 성별 갈래를 **넣을 수 있었던 까닭**
//
// 배치 55에서 좁혀 적은 대로, 부딪치는 것은 **성별이 유일한 구분일 때**다. 여기는 갈래가
// 하나뿐이라 「여자가」를 새 의미가 홀로 쥐면 되고, 기존 의미는 0점으로 제자리에 떨어진다.
//
// ## 별칭에 **「다리」를 안 넣은 까닭**
//
// 「다리를 저는」을 별칭으로 올리면 그 문장이 `bridge`(다리)에도 걸려 화면에 상징이 둘 뜬다
// (§25 곁가지 — `findTerm` 은 상징마다 따로 돈다). 「절뚝」 꼴로만 올렸다.
//
// ## 판별어 표가 비어 있으므로 **기존 의미까지 채운다**(배치 35·62~68·71·79와 같다)
//
// 기존 의미가 기본값이므로 **좁게** 적는다(§30 곁가지) — 「여자가 절뚝이는 이를 보았다」에서
// 0점으로 떨어져야 새 의미가 뽑힌다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-81.mjs

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
  crippled: {
    // 「몸이 성치 않은」은 **이미 나 있던 상처**다 — 이름은 「몸이 성치 않은 이」이고
    // 별칭은 「성치 않은 몸」이라, 가장 자연스러운 「몸이 성치 않은 사람」이 심어진 뒤로
    // 한 번도 안 걸렸다(프로브의 지킴 케이스가 잡았다, §25 곁가지).
    aliasesAdd: ["절뚝이는", "절뚝거리는", "절뚝였다", "몸이 성치 않은", "성치 않은 사람"],
    contextsAdd: {
      // 기존 밀러 의미 — 이것이 기본값이므로 좁게(§30 곁가지).
      "몸이 성치 않은 이를 봄": "성치 굶주",
      "여자가 다리를 저는 이를 봄": "여자가 여인이 아내가",
    },
    contextsEnAdd: {
      // 「maimed」는 aliases_en 에 있어 제 이름이다 — 점수에서 빠지므로 쓰지 않는다.
      "몸이 성치 않은 이를 봄": "famine distress trade poor",
      "여자가 다리를 저는 이를 봄": "woman pleasures unfruitful disappointing",
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
