// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 297 — Walls(새 20판 묶음의 10/20, 단독). 문맥 여덟
// 개짜리 큰 표제어라 단독으로 뗐다. 기존 zhougong `wall`(담, "담을 넘어
// 집으로 들어감" 등 셋)이 term_en "wall"로 밀러의 여덟 문맥과 합쳐지며
// term_ko가 다수결로 "담" → "벽"으로 바뀌었다(3표 대 8표). 기본값도
// 「벽이 앞길을 막고 있음을 봄」(조건 없는 가장 막연한 그림)으로 바꿔
// FALLBACK_FIRST에 얼렸다. 옛 "담" 활성화가 안 끊기도록 "담이"·"담을"·
// "담에"·"담으로" 별칭을 명시적으로 더했다(term_ko가 더는 "담"이 아니라
// 자동으로 안 딸려 온다).
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
  // ── 배치 297 새 문맥 (8건) ─────────────────────────────────────────────
  { id: "wall", ctx: "벽이 앞길을 막고 있음을 봄", text: "벽이 앞길을 막고 있는 것을 보았는데 안 좋은 영향에 굴복했다" },
  { id: "wall", ctx: "벽을 뛰어넘음", text: "벽을 뛰어넘었는데 장애를 이겨냈다" },
  { id: "wall", ctx: "벽에 구멍을 냄", text: "벽에 구멍을 냈는데 바라던 바를 이루었다" },
  { id: "wall", ctx: "벽을 허묾", text: "벽을 허물었는데 적을 무너뜨렸다" },
  { id: "wall", ctx: "벽을 쌓음", text: "벽을 쌓았는데 재산을 굳건히 했다" },
  { id: "wall", ctx: "젊은 여성이 벽 위를 걸음", text: "젊은 여성이 벽 위를 걸었는데 미래의 행복이 굳건해졌다" },
  { id: "wall", ctx: "젊은 여성이 벽 뒤에 숨음", text: "젊은 여성이 벽 뒤에 숨었는데 부끄러운 관계를 맺었다" },
  { id: "wall", ctx: "젊은 여성이 낮은 벽 옆을 걸음", text: "젊은 여성이 낮은 벽 옆을 걸었는데 매력을 다 써버렸다" },

  // ── 지킴 케이스 — 옛 zhougong "담" 셋이 term_ko가 "벽"으로 바뀐 뒤에도 여전히 걸리는지 ──
  { id: "wall", ctx: "담을 넘어 집으로 들어감", text: "담을 넘어 집으로 들어갔는데 온갖 일이 떠나갔다" },
  { id: "wall", ctx: "아내와 아들이 담 아래 있음", text: "아내와 아들이 담 아래 있었는데 관직이 왔다" },
  { id: "wall", ctx: "담 위에서 흙을 팜", text: "담 위에서 흙을 팠는데 자리가 바뀌었다" },
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
