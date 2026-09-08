// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 300 — Washboard~Washing(새 20판 묶음의 13/20). 새
// 상징 washboard(빨래판), 기존 washbasin(세숫대야)·laundry(빨래)에 문맥을
// 나눠 붙였다. Wash-bowl→washbasin(이미 aliases_en에 "washbowl" 보유,
// 첫 문장은 기존 zhougong 「세숫대야를 봄」과 같은 그림이라 §31로 건너뜀).
// Washer Woman→laundry(이미 별칭 "세탁부" 보유). Washing은 각주 [240]이
// 가리키는 대로, 밀러 자신의 Bath 표제어 「남성이 목욕 꿈을 꿈」(간통)과
// 같은 그림이라 §31로 통째로 건너뛰었다.
//
// ## 왜 이것이 따로 있어야 하나 (2026-09-01)
//
// 배치를 넣는 절차의 ⑨단계다. ⑧까지의 검사기 셋(`verify-dream-km`·`audit-km-dead-words`·
// `verify-dream-cite`)은 **「적어 둔 것이 규칙에 맞는가」만 본다.** 「이용자가 쓸 말로
// 걸리는가」는 아무도 안 본다 — 09-01 앞 세션에서 셋 다 초록불인데 **다섯 상징이 하나도
// 안 걸렸다**(별칭을 어간으로 적어서, CLAUDE.md §25). 배치 11 에서도 이 프로브가
// **9건을 잡았다**(안 걸림 2 · 엉뚱한 뜻 7) — 검사기 셋은 그때도 전부 초록불이었다.
//
// ## 이 프로브가 못 잡는 것 (§22 — 먼저 적는다)
//
//   · 뜻이 맞는지는 안 본다. **걸리는가와 어느 의미로 갈리는가**만 본다.
//   · 한국어 문장만 본다. 영어 판별어는 여기서 안 밟힌다.
//   · 문장을 **손으로 적는다** — 새 배치를 넣으면 `CASES`를 그 배치 것으로 갈아야 한다.
//     갈지 않으면 옛 배치를 다시 재면서 「새 배치를 쟀다」고 착각한다.
//   · 지난 배치는 여기 안 남는다. 영구 회귀는 `verify-dream-match.ts`가 맡는다.
//   · **아무것도 안 걸렸을 때 떨어지는 자리(첫 의미)는 여기서 안 잰다** —
//     `probe-water-fallback.ts`와 조립기의 「기본값이 바뀐 상징」 관문이 본다.
//   · **문장을 통과하도록 고르면 안 된다.** 안 걸리면 문장이 아니라 **데이터를 고친다** —
//     이용자는 이 파일을 안 보고 자기 말로 쓴다.
//
// 재구현하지 않는다 — 제품이 쓰는 matchDream 을 그대로 부른다(CLAUDE.md §23).
//
// 실행: apps/dreamslink 에서  npx tsx scripts/probe-miller-batch.ts
// 종료 코드: 0 전부 걸림 / 1 안 걸리거나 엉뚱한 뜻으로 걸린 것이 있음
import { matchDream } from "../src/lib/engines/dream-match";

type Case = { id: string; ctx: string; text: string };

const CASES: Case[] = [
  // ── 배치 300 새 문맥 (8건) ─────────────────────────────────────────────
  { id: "washboard", ctx: "빨래판을 봄", text: "빨래판을 보았는데 당혹감을 느꼈다" },
  { id: "washboard", ctx: "여자가 빨래판을 쓰는 것을 봄", text: "여자가 빨래판을 쓰는 것을 보았는데 여자들에게 기력을 빼앗겼다" },
  { id: "washboard", ctx: "부서진 빨래판을 봄", text: "부서진 빨래판을 보았는데 방탕한 생활로 슬픔을 겪었다" },
  { id: "washbasin", ctx: "맑은 물이 담긴 대야에 얼굴과 손을 씻음", text: "맑은 물이 담긴 대야에 얼굴과 손을 씻었는데 정념 어린 바람을 이루었다" },
  { id: "washbasin", ctx: "대야가 더럽거나 깨져 있음을 봄", text: "대야가 더럽거나 깨져 있음을 보았는데 부적절한 만남을 뉘우쳤다" },
  { id: "laundry", ctx: "세탁부를 봄", text: "세탁부를 보았는데 부정한 관계에 빠졌다" },
  { id: "laundry", ctx: "사업가나 농부가 세탁부 꿈을 꿈", text: "사업가나 농부가 세탁부 꿈을 꾸었는데 사업이 번창했다" },
  { id: "laundry", ctx: "여자가 스스로 세탁부가 됨을 봄", text: "여자가 스스로 세탁부가 됨을 보았는데 체면을 벗어던졌다" },

  // ── 지킴 케이스 — washbasin·laundry에 문맥을 더한 뒤에도 옛 답이 그대로인지 ──
  { id: "washbasin", ctx: "세숫대야를 봄", text: "세숫대야를 보았는데 아름다운 사람이 찾아왔다" },
  { id: "laundry", ctx: "빨래를 함", text: "빨래를 했는데 애는 쓰지만 살림을 일으켰다" },
];

let notFound = 0;
let wrongCtx = 0;

for (const c of CASES) {
  const result = matchDream(c.text);
  const hit = result.matched.find((m) => m.id === c.id);
  if (!hit) {
    console.log(`✗ 안 걸림   [${c.id}] 「${c.text}」`);
    notFound++;
    continue;
  }
  if (hit.meaning.context !== c.ctx) {
    console.log(
      `✗ 다른 뜻   [${c.id}] 「${c.text}」\n              바란 것: ${c.ctx}\n              나온 것: ${hit.meaning.context}`,
    );
    wrongCtx++;
    continue;
  }
  console.log(`  OK        [${c.id}] ${c.ctx}`);
}

console.log(`\n시험 ${CASES.length}건 · 안 걸림 ${notFound}건 · 다른 뜻 ${wrongCtx}건`);
process.exit(notFound + wrongCtx > 0 ? 1 : 0);
