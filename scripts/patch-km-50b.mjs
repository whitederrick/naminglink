// **배치 50의 프로브가 곁에서 찾은 「원래 나 있던 상처」 — 이번 배치가 만든 것이 아니다.**
//
// 주공해몽 「흰 말을 타고 감」의 판별어가 「백마 하얀 흰말」인데, **「흰말」은 심어진 뒤로
// 한 번도 맞은 적이 없다.** `horse` 의 이름이 「말」 **한 글자**라 「흰말」·「하얀말」처럼
// 붙여 쓴 꼴에서는 앞 글자가 한글이라 `isStandalone` 이 막는다 — **상징 자체가 안 걸린다.**
// (§29 곁가지 ① 「짧은 이름은 합성어에 안 걸린다」 — 「거름」⊄「거름더미」와 같은 자리)
//
//   「흰말을 타고 갔다」    상징이 안 걸린다      → 별칭 「흰말」·「하얀말」을 올려 고친다
//   「흰 말을 타고 갔다」    상징은 걸리나 판별어가 0점 → **엔진의 구조적 한계로 못 고친다**
//
// 뒤엣것은 가르는 말이 「흰」 **한 글자**라 `scoringWordsOf` 가 아예 안 센다(2글자 이상만
// 센다). §29 곁가지 ③의 「흰 산호」와 같은 자리다 — **못 가른다는 것을 적어 둔다.**
// 기본값(「말이 뜰 앞에서 춤추듯 뛰놂」)으로 떨어진다.
//
// **한 번만 돌린다.** 이미 적용됐으면 「이미 있다」로 멈춘다(exit 2).
// 실행: node scripts/patch-km-50b.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.resolve("apps/dreamslink/data-sources/extract/km8.json");
const ALIASES_ADD = ["흰말", "하얀말"];

const stop = (msg) => {
  console.error(msg);
  process.exit(2);
};

const rows = JSON.parse(readFileSync(FILE, "utf8"));
const row = rows.find((r) => r.id === "horse");
if (!row) stop("km8.json 에 horse 가 없다 — 파일이 바뀌었다.");

for (const w of ALIASES_ADD) {
  if (row.aliases.includes(w)) stop(`별칭 「${w}」가 이미 있다 — 이미 돌린 것 같다.`);
  row.aliases.push(w);
}

writeFileSync(FILE, JSON.stringify(rows, null, 2) + "\n", "utf8");

// **고쳤는지 되읽어 확인한다**(CLAUDE.md §10 #44).
const again = JSON.parse(readFileSync(FILE, "utf8")).find((r) => r.id === "horse");
for (const w of ALIASES_ADD) {
  if (!again.aliases.includes(w)) stop(`확인 실패: 별칭 「${w}」가 안 들어갔다.`);
}

console.log(`km8.json 고침 — 별칭 ${ALIASES_ADD.length}개. 되읽어 확인함.`);
