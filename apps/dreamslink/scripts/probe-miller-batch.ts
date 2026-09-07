// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 262 — 새 상징 둘(sugar·sugar-tongs)을 세우고,
// 기존 taking-one-s-own-life·brimstone·sun·umbrella 넷에 문맥을
// 보탰다. Sunshade 는 처음에 term_en 을 "sunshade"로 잘못 적어
// umbrella 와 안 합쳐지고 새 상징이 조용히 하나 더 생겼다 — 조립
// 직후 상징 수 증가분(+3)이 새 심볼 수(2)와 안 맞는 것을 보고
// 잡았다(term_en 을 "umbrella"로 고침). taking-one-s-own-life 는
// **바꾼 것**(옛 zhougong 기본값이 특이한 좁은 그림이라 밀러의
// 조건 없는 「스스로 목숨을 끊음」으로), brimstone·sun 은 **있던
// 답 그대로** 얼렸다. Sulphur·Sun 나머지 문장들은 각각 기존
// brimstone·sun 의 zhougong/밀러 그림과 같은 그림·다른 풀이라
// 대부분 건너뛰었다.
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
  // ── 배치 262 새 문맥 (14건) ──────────────────────────────────────────────
  { id: "sugar", ctx: "설탕 꿈을 꿈", text: "설탕 꿈을 꾸었다" },
  { id: "sugar", ctx: "설탕을 먹음", text: "설탕을 먹었다" },
  { id: "sugar", ctx: "설탕값을 매김", text: "설탕값을 매겼다" },
  { id: "sugar", ctx: "설탕을 거래하며 많은 양이 배달되어 옴을 봄", text: "설탕을 거래하며 많은 양이 배달되어 오는 것을 보았다" },
  { id: "sugar", ctx: "설탕통이 터져 설탕이 쏟아지는 것을 봄", text: "설탕통이 터져 설탕이 쏟아지는 것을 보았다" },
  { id: "sugar", ctx: "누군가 노래를 부르며 설탕 짐을 부리는 것을 들음", text: "누군가 노래를 부르며 설탕 짐을 부리는 것을 들었다" },
  { id: "sugar-tongs", ctx: "설탕집게 꿈을 꿈", text: "설탕집게 꿈을 꾸었다" },
  { id: "taking-one-s-own-life", ctx: "스스로 목숨을 끊음", text: "스스로 목숨을 끊었다" },
  { id: "taking-one-s-own-life", ctx: "남이 스스로 목숨을 끊는 것을 보거나 들음", text: "남이 스스로 목숨을 끊는 것을 보았다" },
  { id: "taking-one-s-own-life", ctx: "여성이 애인이 스스로 목숨을 끊는 꿈을 꿈", text: "여성이 애인이 스스로 목숨을 끊는 꿈을 꾸었다" },
  { id: "brimstone", ctx: "유황을 먹음", text: "유황을 먹었다" },
  { id: "sun", ctx: "한낮에 뜬 해를 봄", text: "한낮에 뜬 해를 보았다" },
  { id: "umbrella", ctx: "어린 소녀들이 양산을 든 것을 봄", text: "어린 소녀들이 양산을 든 것을 보았다" },
  { id: "umbrella", ctx: "부서진 양산을 봄", text: "부서진 양산을 보았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────────
  { id: "taking-one-s-own-life", ctx: "칼을 들고 스스로를 찌름", text: "칼을 들고 스스로 목숨을 끊었다" },
  { id: "brimstone", ctx: "유황 꿈을 꿈", text: "유황 꿈을 꾸었다" },
  { id: "brimstone", ctx: "유황불을 봄", text: "유황불을 보았다" },
  { id: "sun", ctx: "해가 막 떠오름", text: "해가 막 떠올랐다" },
  { id: "umbrella", ctx: "기혼자가 양산 꿈을 꿈", text: "기혼자가 양산 꿈을 꾸었다" },
  { id: "umbrella", ctx: "처녀가 양산 꿈을 꿈", text: "처녀가 양산 꿈을 꾸었다" },
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
