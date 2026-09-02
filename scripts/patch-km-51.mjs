// **배치 51(밀러 `Horse` 문단 14~24)도 새 상징을 세우지 않는다 — 전부 `horse`(말)에 붙는다.**
//
// `horse` 는 서른다섯에서 **마흔여덟**이 된다. 판별어를 고를 때 기존 서른다섯을 한 줄씩
// 읽고 한 낱말도 안 겹치게 했다(배치 43·50의 자리 — 스물을 넘으면 뜻이 아니라 글자가 부딪친다).
//
// **안 넣은 것 둘 — 커버리지가 비는 것이 옳다**(§24 · §31).
//
//   ¶24 (말을 빗겨 줌)          `currying-a-horse`(말빗질)가 **같은 밀러 표제어**
//                              (`Currying a Horse`)로 이미 갖고 있다 — 같은 그림이다
//   ¶17 둘째 문장(여성에게:      **같은 상징에 「여성이~」 갈래가 이미 있어**(「여성이 검은 말
//   좋고 한결같은 남편)          꿈을 꿈」) 판별어를 가를 수 없다. 배치 50에서 같은 이유로
//                              ¶3 둘째 문장을 뺐다 — 한 상징에 그 갈래는 하나뿐이다
//
// **¶15 는 기존 「말을 잡음」(주공해몽)과 그림이 스친다.** 그쪽 판별어가 「붙잡 사로잡 잡았」
// 이라 새 것은 **굴레·안장으로만** 가른다 — 「말을 붙잡아 굴레를 씌웠다」는 동점이 되고,
// 추출 파일이 앞이라(`m51` < `r*`) 새 것이 이긴다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-51.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.resolve("apps/dreamslink/data-sources/extract/km8.json");

// **별칭 둘을 더한다** — 「경주마」·「경마」. `term_ko` 가 「말」 한 글자라 붙여 쓴
// 합성어에서는 앞 글자가 한글이라 `isStandalone` 이 막는다(배치 50의 「흰말」과 같은 자리) —
// 프로브가 「경주마를 보았다」로 잡았다.
const ALIASES_ADD = ["경주마", "경마"];

const CONTEXTS_ADD = {
  "말에게 걷어차임": "걷어차 발길질 차였",
  "말을 붙잡지 못함": "놓쳤 놓치 실패",
  "말을 붙잡아 굴레와 안장을 채움": "굴레 안장 씌웠",
  "얼룩덜룩한 말을 봄": "얼룩 점박이",
  "내 손으로 말에 편자를 박음": "손수 직접 스스로",
  "말에게 편자를 박게 함": "편자 대장간",
  "농부가 경주마 꿈을 꿈": "농부 농사꾼",
  "말을 타고 경주에 나감": "겨루 출전 시합",
  "경주마를 봄": "경주마 경마",
  "말을 죽임": "죽였 죽이는 도살",
  "사내들과 함께 맨등의 말을 탐": "사내들 남자들",
  "여인들과 함께 맨등의 말을 탐": "여자들 여인들",
  "맨등의 말에 올라탐": "맨등 맨몸",
};

const CONTEXTS_EN_ADD = {
  "말에게 걷어차임": "kicks repulsed embarrassed",
  "말을 붙잡지 못함": "fail false",
  // 「saddle」은 기존 「말을 갖추어 채비함」의 「saddled」에, 「improvement」는 아래 「men」에
  // 물린다 — 뜻이 아니라 **글자**다(배치 43·50). 새로 넣는 쪽만 간다.
  "말을 붙잡아 굴레와 안장을 채움": "harness callings prosper",
  // 「enterprises」는 「좋은 밤색 말을 탐」의 「rise」를 품는다.
  "얼룩덜룩한 말을 봄": "spotted profit various",
  "내 손으로 말에 편자를 박음": "endeavor doubtful property",
  "말에게 편자를 박게 함": "shod assured",
  "농부가 경주마 꿈을 꿈": "farmer",
  "말을 타고 경주에 나감": "rode contest entered",
  "경주마를 봄": "race surfeited",
  "말을 죽임": "killing selfishness injure",
  // 「men」은 「women」·「disappointments」·「improvement」에 다 물린다 — 세 글자짜리는 위험하다.
  "사내들과 함께 맨등의 말을 탐": "male honest merited",
  "여인들과 함께 맨등의 말을 탐": "women loose abundant",
  "맨등의 말에 올라탐": "bareback struggles",
};

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const rows = JSON.parse(readFileSync(FILE, "utf8"));
const row = rows.find((r) => r.id === "horse");
if (!row) stop("km8.json 에 horse 가 없다 — 파일이 바뀌었다.");

let changed = 0;
for (const w of ALIASES_ADD) {
  if (row.aliases.includes(w)) stop(`별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.aliases.push(w);
  changed++;
}
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
for (const w of ALIASES_ADD) {
  if (!again.aliases.includes(w)) stop(`확인 실패: 별칭 「${w}」가 안 들어갔다.`);
}
for (const k of Object.keys(CONTEXTS_ADD)) {
  if (!(k in again.contexts)) stop(`확인 실패: 「${k}」가 안 들어갔다.`);
  if (!(k in again.contexts_en)) stop(`확인 실패: 「${k}」의 영어가 안 들어갔다.`);
}

console.log(`km8.json 고침 — 고친 자리 ${changed}개. 되읽어 확인함.`);
