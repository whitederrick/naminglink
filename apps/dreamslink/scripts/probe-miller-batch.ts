// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 318 — Women(새 20판 묶음의 11/20, 단독 배치).
// 문맥 여섯 개짜리 큰 표제어라 기존 woman(여자, zhougong 여섯 의미 —
// 전부 신체 접촉 계열)에 나눠 붙였다. 인물 묘사(머리색·눈색·코 모양)
// 넷은 판별어로 갈랐고, 기본값이 「여자와 함께 길을 감」에서 「여자의
// 꿈을 꿈」으로 바뀌어 얼렸다.
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
  // ── 배치 318 새 문맥 (6건) ────────────────────────────────────────────
  { id: "woman", ctx: "여자의 꿈을 꿈", text: "여자의 꿈을 꾸었는데 속임수에 휘말렸다" },
  { id: "woman", ctx: "여자와 말다툼함", text: "여자와 말다툼했는데 책략에 넘어가 낭패를 봤다" },
  { id: "woman", ctx: "검은 머리에 파란 눈, 들창코인 여자를 봄", text: "검은 머리에 파란 눈, 들창코인 여자를 보았는데 이길 승산이 있던 경주에서 물러났다" },
  { id: "woman", ctx: "갈색 눈에 매부리코인 여자를 봄", text: "갈색 눈에 매부리코인 여자를 보았는데 위험한 투기에 꾐에 빠졌다" },
  { id: "woman", ctx: "적갈색 머리에 갈색 눈, 매부리코인 여자를 봄", text: "적갈색 머리에 갈색 눈, 매부리코인 여자를 보았는데 당혹감과 불안이 더해졌다" },
  { id: "woman", ctx: "금발인 여자를 봄", text: "금발인 여자를 보았는데 모든 약속이 뜻에 맞고 즐거웠다" },

  // ── 지킴 케이스 — woman의 기존 zhougong 답이 열두 의미가 된 뒤에도 여전히 걸리는지 ──
  { id: "woman", ctx: "여자를 품에 안음", text: "여자를 품에 안았다" },
  { id: "woman", ctx: "여자와 몸을 섞음", text: "여자와 성관계를 가졌다" },
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
