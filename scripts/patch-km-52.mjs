// **배치 52(밀러 `Horse` 문단 25~34) — 이 판으로 `Horse` 표제어가 끝난다.**
//
// 항목 일곱. 새 상징 없음 — 전부 `horse`(말)에 붙어 **쉰다섯 의미**가 된다.
//
// **안 넣은 것 넷 — 커버리지가 비는 것이 옳다**(§24 · §31).
//
//   ¶26 (말 꿈을 꿈 — 재물을 모음)   그림이 **너무 넓다.** 판별어를 줄 수 없어 늘 0점이 되고,
//                                   0점은 기본값 자리다 — 어떤 문장으로도 안 뽑힌다(배치 50 ¶4와 같다)
//   ¶27 (말이 수레를 끎)             주공해몽에 「흰 말이 수레를 끎」·「말 네 마리가 수레를 끎」이
//                                   이미 있다 — 같은 그림이다
//   ¶29 (처녀가 검은 말을 탐)         「여성이~」 갈래가 이미 있고(배치 50) 「검은 말」도 이미 있다 —
//                                   판별어를 두 겹으로 못 가른다
//   ¶33 (처녀가 흰 말을 타고 오르내림) 〃. 그리고 「흰 말」은 가르는 말이 「흰」 한 글자라
//                                   엔진이 원리적으로 못 센다(§29 곁가지 ③)
//
// **¶32·¶34 는 문장 단위로 갈랐다.** ¶32 는 첫 문장(내리막)만 넣었다 — 뒤의 넷은 전부
// 「처녀가~」 갈래다. ¶34 는 첫 문장만 넣었다 — 뒤의 둘(「짐승이 사람의 살을 입음」)은
// **말 이야기가 아니고 이용자가 칠 이름도 없다**(배치 31의 `Estate` 와 같은 자리).
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-52.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.resolve("apps/dreamslink/data-sources/extract/km8.json");

const CONTEXTS_ADD = {
  "말의 갈기나 꼬리를 다듬음": "갈기 꼬리 다듬",
  "오르막에서 말이 넘어졌으나 꼭대기에 오름": "넘어졌 넘어지 쓰러졌",
  "말과 함께 꼭대기에 오름": "꼭대기 정상",
  "발을 저는 말을 봄": "절뚝 저는 절름",
  "부러진 편자를 말 발에 억지로 끼우려 함": "억지로 끼우 부러진",
  "말을 타고 내리막을 내려감": "내리막 내려가",
  "말이 사람으로 바뀌어 다가옴": "사람으로 바뀌 둔갑",
};

const CONTEXTS_EN_ADD = {
  "말의 갈기나 꼬리를 다듬음": "trimming mane tail financier",
  // 「jealousy」는 「때 묻고 여윈 흰 말을 봄」의 「jealous」에, 「struggle」은 「맨등의 말에
  // 올라탐」의 「struggles」에 물린다 — 뜻이 아니라 글자다(배치 43·50·51).
  "오르막에서 말이 넘어졌으나 꼭대기에 오름": "falls gain enemies",
  "말과 함께 꼭대기에 오름": "phenomenal substantial",
  "발을 저는 말을 봄": "tender unpleasantness insinuate",
  "부러진 편자를 말 발에 억지로 끼우려 함": "fraudulent unsuspecting charged",
  "말을 타고 내리막을 내려감": "undoubtedly affairs",
  "말이 사람으로 바뀌어 다가옴": "metamorphosed hammock rubber",
};

// **기존 판별어를 하나 좁힌다**(§30 곁가지 — 붙이는 쪽만 채우면 기존이 새 의미를 가로챈다).
// 배치 51의 「말이 다른 말들과 함께 달아남」이 「함께」를 쥐고 있어 이번 「말과 함께 꼭대기에
// 오름」을 동점으로 가로챘다(프로브가 잡았다). 그쪽은 「다른」만으로도 걸린다.
const CONTEXTS_NARROW = [
  ["말이 다른 말들과 함께 달아남", "다른 함께 여럿", "다른 여럿"],
];

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const rows = JSON.parse(readFileSync(FILE, "utf8"));
const row = rows.find((r) => r.id === "horse");
if (!row) stop("km8.json 에 horse 가 없다 — 파일이 바뀌었다.");

let changed = 0;
for (const [k, v] of Object.entries(CONTEXTS_ADD)) {
  if (k in row.contexts) stop(`판별어 「${k}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.contexts[k] = v;
  changed++;
}
for (const [k, v] of Object.entries(CONTEXTS_EN_ADD)) {
  if (k in row.contexts_en) stop(`영어 판별어 「${k}」가 이미 있다.`);
  row.contexts_en[k] = v;
  changed++;
}

writeFileSync(FILE, JSON.stringify(rows, null, 2) + "\n", "utf8");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(FILE, "utf8")).find((r) => r.id === "horse");
for (const [k, , after] of CONTEXTS_NARROW) {
  if (again.contexts[k] !== after) stop(`확인 실패: 「${k}」가 안 좁혀졌다.`);
}
for (const k of Object.keys(CONTEXTS_ADD)) {
  if (!(k in again.contexts)) stop(`확인 실패: 「${k}」가 안 들어갔다.`);
  if (!(k in again.contexts_en)) stop(`확인 실패: 「${k}」의 영어가 안 들어갔다.`);
}

console.log(`km8.json 고침 — 고친 자리 ${changed}개. 되읽어 확인함.`);
