// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 280 — Turkey~Turquoise. 새 상징 넷(turkey·turnips·
// turpentine·turquoise), 기존 bathing(목욕)에 문맥을 나눠 붙임. Turkish
// Baths는 이름 「터키식 목욕」이 공백 뒤에서 「목욕」을 품어(§25 곁가지)
// bathing에 합침. bathing은 m280이 기존 목욕 출처(m6·r1)보다 사전순으로
// 앞서 기본값이 바뀔 뻔했으나 옛 답을 그대로 얼렸다. turnips의 「잎을
// 먹음」·「먹음」 두 형제가 "먹었"을 공유해 동점 위험이라, 더 구체적인
// 「잎을 먹음」을 배열에서 앞으로 옮겨 순서로 풀었다(§30 곁가지).
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
  // ── 배치 280 새 문맥 (19건) ────────────────────────────────────────────
  { id: "turkey", ctx: "칠면조들을 봄", text: "칠면조들을 보았다" },
  { id: "turkey", ctx: "시장에 내놓으려 손질된 칠면조를 봄", text: "시장에 내놓으려 손질된 칠면조를 보았다" },
  { id: "turkey", ctx: "병들거나 죽은 칠면조를 봄", text: "병들거나 죽은 칠면조를 보았다" },
  { id: "turkey", ctx: "칠면조를 먹음", text: "칠면조를 먹었다" },
  { id: "turkey", ctx: "칠면조가 나는 것을 봄", text: "칠면조가 나는 것을 보았다" },
  { id: "turkey", ctx: "사냥감으로 칠면조를 쏨", text: "사냥감으로 칠면조를 쏘았다" },
  { id: "bathing", ctx: "터키식 목욕을 함", text: "터키식 목욕을 하며 큰 즐거움을 누렸다" },
  { id: "bathing", ctx: "남이 터키식 목욕을 하는 것을 봄", text: "남이 터키식 목욕을 하는 것을 보았다" },
  { id: "turnips", ctx: "자라는 순무를 봄", text: "자라는 순무를 보았다" },
  { id: "turnips", ctx: "순무 잎을 먹음", text: "순무 잎을 먹었다" },
  { id: "turnips", ctx: "순무를 먹음", text: "순무를 먹었다" },
  { id: "turnips", ctx: "순무를 뽑음", text: "순무를 뽑았다" },
  { id: "turnips", ctx: "순무 씨앗 꿈을 꿈", text: "순무 씨앗 꿈을 꾸었다" },
  { id: "turnips", ctx: "처녀가 순무 씨앗을 뿌림", text: "처녀가 순무 씨앗을 뿌렸다" },
  { id: "turpentine", ctx: "테레빈유 꿈을 꿈", text: "테레빈유 꿈을 꾸었다" },
  { id: "turpentine", ctx: "여성이 남의 상처에 테레빈유를 감쌈", text: "여성이 남의 상처에 테레빈유를 감쌌다" },
  { id: "turquoise", ctx: "터키석 꿈을 꿈", text: "터키석 꿈을 꾸었다" },
  { id: "turquoise", ctx: "여성이 터키석을 도둑맞음", text: "여성이 터키석을 도둑맞았다" },
  { id: "turquoise", ctx: "여성이 터키석을 부정하게 손에 넣음", text: "여성이 터키석을 부정하게 손에 넣었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "bathing", ctx: "젊은 사람이 목욕하는 꿈을 꿈", text: "젊은 사람이 목욕하는 꿈을 꾸었다" },
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
