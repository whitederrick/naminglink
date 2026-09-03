// **배치 78(밀러 Knee~Knife Grinder)이 이미 있는 상징 하나를 건드리고, 하니스를 고친다.**
//
// 새 상징 둘은 `kmm78.json` 에 있다 — knee(무릎)·knife-grinder(칼갈이).
//
//   sword(칼)  ← 밀러 `Knife` 다섯
//
// ## 극성 하니스의 `knife` 기대는 **짐작이었다** — 고친다
//
// 인계 ⑬의 열넷 가운데 `knife` 는 **애초에 생길 수 없는 id 였다.** 「칼」의 임자가 `sword`
// 이고 하니스가 기다리던 세 문장은 `sword` 에 **이미 있는 그림**이다.
//
//   「칼을 손에 쥐었다」   ↔ sword 「칼을 차고 길을 감」·「갑옷을 입고 칼을 짚음」
//   「칼에 손을 다쳤다」   ↔ sword 「칼에 스스로 다침」
//   「칼을 잃어버렸다」    ↔ sword 「칼을 잃어버림」
//
// 배치 40에서 `god`·`gold` 가 그랬듯 **기대 자체가 틀렸다** — 지우지 않고 **실제 임자
// (`sword`)로 고친다**. 그러면 건너뛰던 세 쌍이 진짜 시험이 된다.
//
// ## 안 넣은 문장 하나 — **같은 그림이 이미 셋 있다**(§31 곁가지)
//
//   Knife 「To dream that you are wounded with a knife…」
//         → `sword` 에 「칼에 다쳐 피가 남」·「칼에 스스로 다침」·「칼에 찔림」이 이미 있다
//   Knife 「To dream that you stab another with a knife…」
//         → `sword` 에 「부러진 칼로 남을 찌름」·「칼로 남을 벰」이 이미 있다. **처음엔 넣었다가
//           프로브가 잡아 뺐다** — 새 의미가 「찔렀·남을」로 2점을 얻어 기존 「부러진 칼로 남을
//           찌름」을 이겼고, `m78` 이 `r*` 보다 먼저 정렬되므로 **차례로도 못 푼다**(새 의미가
//           늘 앞이다). 낱말도 못 나눠 갖는 자리라 **넣지 않는 것이 답이다**
//
// ## 판별어를 고를 때 부딪친 자리
//
// `sword` 는 이미 스물셋이고 **「부러진」을 「부러진 칼로 남을 찌름」이 쥐고 있다** —
// 새 「동강 난 칼을 봄」에는 그 말을 못 주고 「동강·날이·나간」으로 적었다. 「갈아·날카·숫돌」도
// 「칼을 갈아 날이 날카로워짐」의 것이라 「시퍼런·번쩍이」로 갈랐다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-78.mjs

import { readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";

const DIR = path.resolve("apps/dreamslink/data-sources/extract");
const PARITY = path.resolve("apps/dreamslink/scripts/verify-dream-context-parity.ts");

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
  sword: {
    aliasesAdd: ["칼이", "칼을", "부엌칼"],
    // **하니스를 `sword` 로 돌리자 「칼에 손을 다쳤다」가 기본값으로 샜다** — 기존
    // 「칼에 스스로 다침」의 한국어 판별어가 「베였·베어서·자기손·상처」뿐이라 「손을 다쳤다」를
    // 못 잡는다(영어는 「cut」으로 잡고 있었다). ko/en 이 어긋나던 자리이고, 하니스를 고치자
    // 비로소 드러났다(§28 — 관문이 눈을 뜬 것이다).
    contextsAppend: { "칼에 스스로 다침": " 다쳤 손을" },
    contextsAdd: {
      "칼을 봄": "헤어짐 다툼이",
      "녹슨 칼을 봄": "녹슨 녹이 녹슬",
      "시퍼렇게 잘 벼린 칼을 봄": "시퍼런 시퍼렇 번쩍이",
      "동강 난 칼을 봄": "동강 날이 나간",
    },
    contextsEnAdd: {
      "칼을 봄": "portends separation quarrels business character",
      "녹슨 칼을 봄": "rusty dissatisfaction complaints lovers",
      // 「sharp」는 기존 「칼을 갈아 날이 날카로워짐」의 「sharpen(ed|ing)」에 물린다 — 뺐다.
      "시퍼렇게 잘 벼린 칼을 봄": "polished worry foes surrounding",
      "동강 난 칼을 봄": "defeat pursuit whether",
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
  for (const [k, v] of Object.entries(patch.contextsAppend ?? {})) {
    if (!(k in row.contexts)) stop(`${id}: 붙일 판별어 「${k}」가 없다 — 파일이 바뀌었다.`);
    if (row.contexts[k].includes(v.trim())) stop(`${id}: 「${k}」에 이미 붙어 있다 — 이미 돌린 것 같다.`);
    row.contexts[k] += v;
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

// ── 극성 하니스의 `knife` 기대 셋을 실제 임자(`sword`)로 고친다 ────────────────

let parity = readFileSync(PARITY, "utf8");
const before = (parity.match(/id: "knife"/g) ?? []).length;
if (before === 0) stop("하니스에 `knife` 기대가 없다 — 이미 돌린 것 같다.");
if (before !== 3) stop(`하니스의 \`knife\` 기대가 셋이 아니라 ${before}개다 — 파일이 바뀌었다.`);
parity = parity.replace(/id: "knife"/g, 'id: "sword"');
writeFileSync(PARITY, parity, "utf8");
changed += before;
console.log(`verify-dream-context-parity.ts 고침 — knife 기대 ${before}개를 sword 로`);

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
for (const [id, patch] of Object.entries(PATCHES)) {
  const rows = JSON.parse(readFileSync(path.join(DIR, fileOf(id)), "utf8"));
  const row = rows.find((r) => r.id === id);
  for (const w of patch.aliasesAdd ?? []) {
    if (!row.aliases.includes(w)) stop(`확인 실패: ${id} 에 별칭 「${w}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAppend ?? {})) {
    if (!row.contexts[k].includes(v.trim())) stop(`확인 실패: ${id} 의 「${k}」에 안 붙었다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsAdd ?? {})) {
    if (row.contexts[k] !== v) stop(`확인 실패: ${id} 의 「${k}」가 안 들어갔다.`);
  }
  for (const [k, v] of Object.entries(patch.contextsEnAdd ?? {})) {
    if (row.contexts_en[k] !== v) stop(`확인 실패: ${id} 의 영어 「${k}」가 안 들어갔다.`);
  }
}
if (readFileSync(PARITY, "utf8").includes('id: "knife"')) stop("확인 실패: 하니스에 knife 가 남았다.");

console.log(`고친 자리 ${changed}개 — 되읽어 확인함.`);
