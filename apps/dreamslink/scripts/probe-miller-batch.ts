// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 315 — Wind~Window(새 20판 묶음의 8/20). 새 상징
// 둘(windmill·window), 기존 wind(바람, 이미 아홉 의미)에 문맥 다섯을
// 나눠 붙였다.
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
  // ── 배치 315 새 문맥 (14건) ────────────────────────────────────────────
  { id: "wind", ctx: "바람이 부드럽고 슬프게 불어옴", text: "바람이 부드럽고 슬프게 불어왔는데 사별을 통해 큰 재물이 왔다" },
  { id: "wind", ctx: "바람이 훌쩍이듯 부는 소리를 들음", text: "바람이 훌쩍이듯 부는 소리를 들었는데 사이가 멀어져 방황했다" },
  { id: "wind", ctx: "거센 바람을 힘차게 거슬러 걸음", text: "거센 바람을 힘차게 거슬러 걸었는데 유혹을 물리치고 재물을 좇았다" },
  { id: "wind", ctx: "바람이 뜻과 달리 자신을 떠밀고 감", text: "바람이 뜻과 달리 자신을 떠밀고 갔는데 사업에서 실패했다" },
  { id: "wind", ctx: "바람이 가려는 방향으로 자신을 밀어줌", text: "바람이 가려는 방향으로 자신을 밀어주었는데 뜻밖의 도움을 얻었다" },
  { id: "windmill", ctx: "풍차가 돌아가는 것을 봄", text: "풍차가 돌아가는 것을 보았는데 재물이 넉넉히 쌓였다" },
  { id: "windmill", ctx: "풍차가 부서지거나 멈춰 있음을 봄", text: "풍차가 부서지거나 멈춰 있음을 보았는데 뜻밖의 역경이 다가왔다" },
  { id: "window", ctx: "창문을 봄", text: "창문을 보았는데 밝은 희망이 절망 속에 스러졌다" },
  { id: "window", ctx: "닫힌 창문을 봄", text: "닫힌 창문을 보았는데 버림받았다" },
  { id: "window", ctx: "창문이 깨져 있음을 봄", text: "창문이 깨져 있음을 보았는데 부정에 대한 의심에 시달렸다" },
  { id: "window", ctx: "창가에 앉음", text: "창가에 앉았는데 어리석음의 희생양이 되었다" },
  { id: "window", ctx: "창문으로 집에 들어감", text: "창문으로 집에 들어갔는데 떳떳지 못한 수단을 쓰다 들켰다" },
  { id: "window", ctx: "창문으로 빠져나감", text: "창문으로 빠져나갔는데 곤경에 빠졌다" },
  { id: "window", ctx: "지나가며 창문 너머로 낯선 것들을 봄", text: "지나가며 창문 너머로 낯선 것들을 보았는데 택한 일에서 실패했다" },

  // ── 지킴 케이스 — wind의 기존 답이 여전히 걸리는지 ──
  { id: "wind", ctx: "바람이 울부짖듯 소리를 냄", text: "바람이 울부짖듯 소리를 냈다" },
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
