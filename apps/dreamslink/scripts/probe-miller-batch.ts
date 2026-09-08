// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 311 — Wheels~Whirlwind(새 20판 묶음의 4/20).
// 새 상징 셋(whetstone·whip·whirlpool). Wheels 첫 문장은 기존
// cart-wheel(수레바퀴)에, Whirlwind는 기존 wind(바람, 이미 "회오리"
// 보유)에 합쳤다. Wheels 둘째 문장은 기존 cart-wheel 두 의미와 같은
// 그림이라 §31로 건너뜀. Whetstone은 "숫돌"이 기존 grindstone(밀러
// Grindstone 표제어, 길조)이 이미 쥐고 있고 정반대(근심) 뜻이라
// "지석"으로 갈랐다. 기본값 플립 수용(cart-wheel, 새 답이 더 막연함).
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
  // ── 배치 311 새 문맥 (7건) ─────────────────────────────────────────────
  { id: "cart-wheel", ctx: "수레바퀴가 빠르게 도는 것을 봄", text: "수레바퀴가 빠르게 도는 것을 보았는데 사업에서 검소하고 활기찼다" },
  { id: "whetstone", ctx: "지석 꿈을 꿈", text: "지석 꿈을 꾸었는데 날카로운 근심이 생겼다" },
  { id: "whetstone", ctx: "지석 꿈을 꾼 뒤 불편한 여정에 내몰릴 낌새를 느낌", text: "지석 꿈을 꾼 뒤 불편한 여정에 내몰릴 것 같았다" },
  { id: "whip", ctx: "채찍 꿈을 꿈", text: "채찍 꿈을 꾸었는데 불행한 불화가 생겼다" },
  { id: "whirlpool", ctx: "소용돌이 꿈을 꿈", text: "소용돌이 꿈을 꾸었는데 사업에 큰 위험이 닥쳤다" },
  { id: "wind", ctx: "회오리바람의 길목에 있음", text: "회오리바람의 길목에 있었는데 손실과 재앙에 맞닥뜨릴 변화가 닥쳤다" },
  { id: "wind", ctx: "젊은 여성이 회오리바람에 휘말려 치맛자락을 붙드느라 애먹음", text: "젊은 여성이 회오리바람에 휘말려 치맛자락을 붙드느라 애먹었는데 은밀한 밀회를 이어가다 소문이 났다" },

  // ── 지킴 케이스 — cart-wheel·wind의 기존 답이 여전히 걸리는지 ──
  { id: "cart-wheel", ctx: "수레바퀴가 부서짐", text: "수레바퀴가 부서졌는데 부부가 헤어졌다" },
  { id: "wind", ctx: "사나운 바람이 몰아침", text: "사나운 바람이 몰아쳤다" },
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
