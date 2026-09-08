// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 302 — Water(새 20판 묶음의 15/20, 단독). 기존
// water(물) 상징이 이미 zhougong 열넷짜리 큰 상징이라 단독 배치로
// 뗐다. 새 문맥 열 개를 나눠 붙였다. 끝의 일화(젊은 여성의 실제
// 경험담)는 일반화된 해몽 공식이 아니라 예시 서술이라 건너뛰었다.
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
  // ── 배치 302 새 문맥 (10건) ────────────────────────────────────────────
  { id: "water", ctx: "맑은 물을 봄", text: "맑은 물을 보았는데 번영과 즐거움을 깨달았다" },
  { id: "water", ctx: "흐린 물을 봄", text: "흐린 물을 보았는데 위험에 처했다" },
  { id: "water", ctx: "제 집 안으로 물이 차오르는 것을 봄", text: "제 집 안으로 물이 차오르는 것을 보았는데 악에 맞서 싸웠다" },
  { id: "water", ctx: "물을 퍼내는데 발이 젖음", text: "물을 퍼내는데 발이 젖었는데 곤란한 일이 생겼다" },
  { id: "water", ctx: "그릇에 흐린 물이 차오름", text: "그릇에 흐린 물이 차올랐는데 힘겨운 일이 생겼다" },
  { id: "water", ctx: "흐린 물에 빠짐", text: "흐린 물에 빠졌는데 쓰라린 실수를 저질렀다" },
  { id: "water", ctx: "흐린 물을 마심", text: "흐린 물을 마셨는데 병이 났다" },
  { id: "water", ctx: "맑고 시원한 물을 마심", text: "맑고 시원한 물을 마셨는데 좋은 소망이 이루어졌다" },
  { id: "water", ctx: "물놀이를 함", text: "물놀이를 했는데 사랑에 갑작스레 눈떴다" },
  { id: "water", ctx: "머리에 물이 뿌려짐", text: "머리에 물이 뿌려졌는데 사랑이 서로 응답받았다" },

  // ── 지킴 케이스 — 옛 zhougong 의미 둘이 여전히 걸리는지 ──
  { id: "water", ctx: "물을 마심", text: "물을 마셨는데 기쁜 일이 생겼다" },
  { id: "water", ctx: "남의 집에 물이 있음", text: "이웃집에 물이 있는 것을 보았는데 걱정이 되었다" },
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
