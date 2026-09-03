// **배치 65(밀러 Invective~Iron)가 이미 있는 상징 둘을 건드린다.**
//
// 새 상징 둘은 `kmm65.json` 에 있다 — inventor(발명가)·invite(초대).
//
//   km2  verbal-abuse(욕설)  ← 밀러 `Invective` 둘.  **판별어 표가 비어 있었다**
//   km6  iron-2(쇠붙이)      ← 밀러 `Iron` 여덟.     **판별어 표가 비어 있었다**
//
// ## 왜 새 상징을 안 세웠나 — ⓪ grep 이 둘을 EXACT 로 찍었다
//
//   욕설   → `verbal-abuse` 와 `quarrel` 이 나눠 쥐고 있다. 더 정확한 쪽이 `verbal-abuse` 다
//   무쇠   → `iron-2`(쇠붙이)가 이미 별칭으로 쥐고 있다.
//            **`iron` 이라는 id 는 `다리미` 가 차지하고 있다**(주공해몽) — 밀러 `Ironing` 이
//            그쪽 자리이고, 밀러 `Iron` 은 `iron-2` 다. 헷갈리기 쉬운 자리라 여기 적어 둔다
//
// ## 안 넣은 문장 둘 — **커버리지가 비는 것이 옳다**(§24)
//
//   Iron 첫 문장   「To dream of iron, is a harsh omen of distress.」
//                  → `iron-2` 의 주공해몽 의미 「쇠로 만든 기물을 봄」과 **그림이 같다**
//   `Invalid` 표제어 전체
//                  → 두 문장이 `infirmity`(배치 62)의 「제 몸이 병약함」·「남이 병약한 것을
//                    봄」과 그림이 같다. **표제어를 통째로 건너뛴다**
//
// ## 판별어 표가 비어 있으므로 **기존 의미까지 채운다**(배치 35·62·63·64와 같다)
//
// 기존 의미가 각 상징의 기본값이므로 **좁게** 적는다(§30 곁가지).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-65.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const PATCHES = {
  km2: {
    "verbal-abuse": {
      // 「욕설」+「하」는 조사가 아니라 막힌다 — 활용형을 함께 올린다(§29 곁가지 ①).
      aliasesAdd: ["욕설을", "욕설하", "욕설한", "욕을 퍼부", "쌍소리"],
      contextsAdd: {
        // 기존 주공해몽 의미 — 기본값이므로 좁게.
        "남에게 욕을 먹고 모욕을 당함": "모욕을 당했다",
        "제가 욕설을 퍼부음": "퍼부었 퍼붓 내가 제가",
        "남들이 욕설하는 것을 들음": "남들이 듣고 들었다",
      },
      contextsEnAdd: {
        // 「insulted」는 불용어다 — 「humiliated」만 남긴다.
        "남에게 욕을 먹고 모욕을 당함": "humiliated",
        "제가 욕설을 퍼부음": "using invectives passionate outbursts estrange",
        "남들이 욕설하는 것을 들음": "hear others closing apparent deceits",
      },
    },
  },
  km6: {
    "iron-2": {
      // **「쇠로」는 옛 상처를 메우는 것이다** — 이 상징의 화면 문구가 「쇠로 만든 기물을 봄」인데
      // 별칭에 그 꼴이 없어 「쇠로 만든 기물을 보았다」가 심어진 뒤로 한 번도 안 걸렸다.
      aliasesAdd: ["쇠붙이를", "쇠를", "쇠가", "쇳덩이가", "쇠로"],
      contextsAdd: {
        // 기존 주공해몽 의미 — 기본값이므로 좁게.
        "쇠로 만든 기물을 봄": "기물 그릇을",
        "쇳덩이에 짓눌림": "짓눌 내리눌 무게",
        "쇠붙이로 침": "내리쳤 때렸 후려",
        "쇠붙이를 만듦": "만들 벼렸 제련",
        "쇠붙이를 팖": "팔았 파는 내다",
        "낡고 녹슨 쇠붙이를 봄": "녹슨 낡고 삭은",
        // 「값이」를 형제와 나눠 가질 수 없다(`verify-dream-km`) — 값의 움직임만 남겼다.
        "쇠붙이 값이 내림": "내렸 떨어졌 내려갔",
        "쇠붙이 값이 오름": "올랐 뛰었 올라갔",
        "벌겋게 달군 쇠붙이를 봄": "벌겋게 달군 시뻘",
      },
      contextsEnAdd: {
        "쇠로 만든 기물을 봄": "utensils vessels",
        "쇳덩이에 짓눌림": "weight bearing perplexities material",
        "쇠붙이로 침": "strike selfishness cruelty dependent",
        "쇠붙이를 만듦": "manufacture unjust means accumulate",
        "쇠붙이를 팖": "sell doubtful noble character",
        "낡고 녹슨 쇠붙이를 봄": "rusty poverty",
        // 「down」은 엔진이 세지 않는 불용어다(`audit-km-dead-words`).
        "쇠붙이 값이 내림": "price unsafe factor",
        "쇠붙이 값이 오름": "advances gleam hope dark",
        "벌겋게 달군 쇠붙이를 봄": "red-hot misapplied energy",
      },
    },
  },
};

let changed = 0;

for (const [file, byId] of Object.entries(PATCHES)) {
  const p = path.join(DIR, `${file}.json`);
  const rows = JSON.parse(readFileSync(p, "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
    const row = rows.find((r) => r.id === id);
    if (!row) stop(`${file}.json 에 ${id} 가 없다 — 파일이 바뀌었다.`);
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
  }
  writeFileSync(p, JSON.stringify(rows, null, 2) + "\n", "utf8");
  console.log(`${file}.json 고침`);
}

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
for (const [file, byId] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, `${file}.json`), "utf8"));
  for (const [id, patch] of Object.entries(byId)) {
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
}

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
