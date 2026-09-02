// **배치 50(밀러 `Horse` 문단 1~13)은 새 상징을 하나도 세우지 않는다 — 전부 `horse`(말)에 붙는다.**
//
// `Horse` 는 34문단이라 한 판에 못 넣는다. **문단 1~13만** 잘랐고 나머지는 배치 51이다.
// `horse` 는 이미 의미 20개(주공해몽 19 + 밀러 `Foal`)를 갖고 있어 35개가 된다 —
// 스물을 넘는 상징은 판별어가 **뜻이 아니라 글자로** 부딪치므로(배치 43의 `hair`)
// 짧고 흔한 영어 낱말을 피하고, 기존 스무 개와 한 낱말도 안 겹치게 골랐다.
//
// **안 넣은 것 넷 — 커버리지가 비는 것이 옳다**(§24 · §31).
//
//   ¶1 첫 문장(흰 말을 보거나 탐, 길)  주공해몽에 「흰 말을 타고 감」이 이미 있고 **길흉이
//                                      반대**다(흉). `work` 가 달라 인용도 안 포개지고,
//                                      이름을 갈라도 「흰 말」을 판별어로 못 가른다 →
//                                      뒤엣것이 영영 안 뽑힌다(배치 40 `Glass` 와 같은 자리)
//   ¶2 (검은 말들 — 넉넉하나 불만)      ¶1 의 검은 말과 같은 그림이고 풀이도 「이루나 흠이
//                                      있다」로 같은 갈래다
//   ¶4 (말을 타거나 지나가는 말을 봄)    주공해몽 「말이 오가며 내달림」과 같은 그림이고,
//                                      그림이 너무 넓어 기본값 자리를 가로챈다
//   ¶3 둘째 문장(여성이 밤색 말을 탐)    **같은 상징에 「여성이~」 갈래가 이미 하나 있어**
//                                      (「여성이 검은 말 꿈을 꿈」) 판별어를 가를 수 없다.
//                                      형제끼리 낱말을 나눠 가질 수 없다(§30 곁가지)
//
// **별칭 다섯을 더한다** — 「암말」·「수말」·「씨수말」·「종마」·「흑마」. `term_ko` 가 「말」
// 한 글자라 **합성어에는 안 걸린다**(「암말」의 「말」은 앞 글자가 한글이라 `isStandalone` 이
// 막는다) — 배치 28의 「거름」⊄「거름더미」와 같은 자리다. 다섯 다 ⓪ 전수 grep 으로
// 임자가 없는 것을 먼저 봤다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-50.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.resolve("apps/dreamslink/data-sources/extract/km8.json");

const ALIASES_ADD = ["암말", "수말", "씨수말", "종마", "흑마"];

const CONTEXTS_ADD = {
  "때 묻고 여윈 흰 말을 봄": "여윈 야윈 때묻은 지저분",
  "여성이 검은 말 꿈을 꿈": "남편 아내가 부인이",
  "검은 말을 봄": "검은 검정 흑마",
  "좋은 밤색 말을 탐": "밤색 갈색 적갈색",
  "고삐 풀려 달아나는 말을 탐": "고삐 달아나는 제멋대로",
  "말이 다른 말들과 함께 달아남": "다른 함께 여럿",
  "훌륭한 씨수말을 봄": "씨수말 종마",
  "새끼 밴 암말을 봄": "암말 어미말",
  "말을 타고 흐린 개울을 건넘": "흐린 탁한 흙탕",
  "맑은 개울을 말 등에 타고 헤엄쳐 건넘": "헤엄 맑은",
  "말을 타고 개울을 건넘": "건너 건넜 여울",
  "다친 말을 봄": "다친 상처 부상",
  "죽은 말을 봄": "죽은 주검 죽어있",
  "말이 나를 내동댕이침": "내동댕이 내던지 낙마",
  "날뛰는 말을 탐": "날뛰 껑충 뛰어오르",
};

// **영어는 별칭(ownTerms)에 있는 낱말을 쓸 수 없다** — 「stallions」·「mares」는 `aliases_en`
// 의 stallion·mare 때문에 점수에서 빠진다(`audit-km-dead-words` 가 잡는다).
const CONTEXTS_EN_ADD = {
  "때 묻고 여윈 흰 말을 봄": "soiled lean betrayed jealous",
  "여성이 검은 말 꿈을 꿈": "husband unfaithful",
  "검은 말을 봄": "black deception assignations",
  "좋은 밤색 말을 탐": "bay gratification rise",
  // 「runaway」는 기존 「말 떼가 멀리 달려 나감」의 「away」를 품는다 —
  // 뜻이 아니라 **글자**로 부딪친다(배치 43). 새로 넣는 쪽만 간다.
  "고삐 풀려 달아나는 말을 탐": "bolted folly employer",
  "말이 다른 말들과 함께 달아남": "others illness",
  "훌륭한 씨수말을 봄": "undue master high",
  "새끼 밴 암말을 봄": "brood congeniality sweethearts",
  "말을 타고 흐린 개울을 건넘": "murky unsettled disappointing",
  "맑은 개울을 말 등에 타고 헤엄쳐 건넘": "swim clear bliss",
  "말을 타고 개울을 건넘": "ford rich pleasures",
  "다친 말을 봄": "wounded trouble",
  "죽은 말을 봄": "dead disappointments",
  "말이 나를 내동댕이침": "throws rival competition",
  "날뛰는 말을 탐": "bucks consummation",
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
