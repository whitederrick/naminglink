// **배치 96(밀러 `Letter`)은 새 상징을 하나도 안 세운다** — `kmm96.json` 이 없는 판이다.
//
//   letter(편지)  ← 밀러 `Letter` 열여덟. 있던 의미는 둘뿐이었다
//                  (주공해몽 「편지를 봉함」 · 밀러 `Envelope` 「봉투를 봄」)
//
// ## 스물이 되는 상징이라 영어 판별어를 짧은 낱말로 안 준다 (배치 43·50)
//
// 의미가 2 → 20 이 된다. 「red」는 기존 「registered」의 부분 문자열이고 「rival」은
// 「arrival」의 부분 문자열이라 **둘 다 안 썼다** — 「estrangements」·「often」으로 돌렸다.
// 「envelop」도 기존 판별어 「envelopes」에 물려서 안 쓰고 「despondency」로 갈랐다.
//
// ## 「편지」는 어느 의미에도 안 준다 (§30 곁가지 ㉑)
//
// 상징 이름이나 마찬가지인 낱말을 한 의미가 쥐면 그 상징의 새 의미가 전부 동점으로 진다.
// 가르는 것은 **편지의 모습과 그것으로 하는 일**뿐이다(등기 · 익명 · 빛깔 · 씀 · 숨김 …).
//
// ## 동점은 추출 파일의 차례로 푼다
//
//   「처녀가 등기 편지를 받음」  ↔  「등기 편지를 봄」        처녀 쪽을 앞에
//   「검은 테두리가 둘린 편지」  ↔  「검은 종이에 흰 잉크…」  테두리 쪽을 앞에
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-96.mjs

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
  letter: {
    // 「편지」는 이미 term_ko 라 안 올린다. 붙여 쓴 합성어만 별칭으로 살린다
    // (「등기편지」는 앞의 「기」가 한글이라 `isStandalone` 이 「편지」를 막는다).
    aliasesAdd: ["등기편지", "편지지"],
    contextsAdd: {
      "처녀가 등기 편지를 받음": "처녀 아가씨",
      "등기 편지를 봄": "등기",
      "익명의 편지를 봄": "익명 무기명",
      "궂은 기별이 담긴 편지를 받음": "궂은 나쁜 언짢은",
      "기쁜 기별이 담긴 편지를 받음": "기쁜 반가운",
      "초록빛 종이에 쓴 정다운 편지": "초록 풀빛",
      "파란 잉크로 쓴 편지": "파란 파랑 청색",
      "붉은 빛깔이 든 편지": "붉은 빨간",
      "처녀가 정인의 편지를 가슴에 품음": "가슴에 품었 품고",
      "편지를 읽지 못함": "읽지",
      // 「가로채」만으로는 「가로챘다」에 안 걸린다(챘 ≠ 채) — 프로브가 잡았다(§25).
      "편지를 가로채임": "가로챘 가로채이 가로채",
      "편지를 숨김": "숨기 감추",
      "검은 테두리가 둘린 편지": "테두리 가장자리",
      "검은 종이에 흰 잉크로 쓴 편지를 받음": "검은 흰색",
      "편지를 씀": "썼다 썼습 쓰는",
      "찢어진 편지를 봄": "찢어진 찢긴",
      "편지를 손으로 건네받음": "손으로 직접",
      "벗에게서 편지를 자주 받음": "벗에게 친구에게 동무",
    },
    contextsEnAdd: {
      "처녀가 등기 편지를 받음": "competency dishonorable",
      "등기 편지를 봄": "registered disrupt",
      "익명의 편지를 봄": "anonymous unsuspected",
      "궂은 기별이 담긴 편지를 받음": "unpleasant difficulties",
      "기쁜 기별이 담긴 편지를 받음": "joyous thankful",
      "초록빛 종이에 쓴 정다운 편지": "green slighted despondency",
      "파란 잉크로 쓴 편지": "blue ink constancy",
      "붉은 빛깔이 든 편지": "estrangements maneuvering",
      "처녀가 정인의 편지를 가슴에 품음": "heart good-looking rival",
      "편지를 읽지 못함": "fail read",
      "편지를 가로채임": "intercepted defame",
      "편지를 숨김": "conceal unworthy occupations",
      "검은 테두리가 둘린 편지": "border distress relative",
      "검은 종이에 흰 잉크로 쓴 편지를 받음": "black paper gloom",
      "편지를 씀": "hasty condemning regrets",
      "찢어진 편지를 봄": "torn hopeless reputation",
      "편지를 손으로 건네받음": "hand ungenerously upright",
      "벗에게서 편지를 자주 받음": "friend often",
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
