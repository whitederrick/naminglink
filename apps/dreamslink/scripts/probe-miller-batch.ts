// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 247 — Side·Siege·Sieve·Sigh·Silkworm, 기존 illness(병)에 두 그림·
// silk(비단)에 세 그림 붙임. Sickness의 「자신의 병」은 기존 「자기가 병듦」과 같은 그림
// (길흉만 반대)이라 건너뜀. 247이 20판 묶음(228~247)의 마지막 배치다)
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
  { id: "illness", ctx: "질병 꿈을 꿈", text: "질병 꿈을 꾸었다" },
  { id: "illness", ctx: "가족이 창백하고 병든 것을 봄", text: "가족이 창백하고 병든 것을 보았다" },
  { id: "side", ctx: "물체의 옆면만 봄", text: "물체의 옆면만 보았다" },
  { id: "side", ctx: "옆구리가 아픔", text: "옆구리가 아팠다" },
  { id: "side", ctx: "옆구리가 살지고 건강함", text: "옆구리가 살지고 건강했다" },
  { id: "siege", ctx: "여성이 포위된 채 주위에서 기병을 봄", text: "여성이 포위된 채 주위에서 기병을 보았다" },
  { id: "sieve", ctx: "체 꿈을 꿈", text: "체 꿈을 꾸었다" },
  { id: "sieve", ctx: "체의 눈이 너무 촘촘함", text: "체의 눈이 너무 촘촘했다" },
  { id: "sieve", ctx: "체의 눈이 너무 성김", text: "체의 눈이 너무 성겼다" },
  { id: "sigh", ctx: "괴로운 일이나 슬픈 일로 한숨을 쉼", text: "괴로운 일로 한숨을 쉬었다" },
  { id: "sigh", ctx: "남이 한숨짓는 소리를 들음", text: "남이 한숨짓는 소리를 들었다" },
  { id: "silk", ctx: "비단옷을 입음", text: "비단옷을 입었다" },
  { id: "silk", ctx: "여성이 낡은 비단 꿈을 꿈", text: "여성이 낡은 비단 꿈을 꾸었다" },
  { id: "silk", ctx: "비단이 더럽거나 찢어짐", text: "비단이 더럽거나 찢어졌다" },
  { id: "silkworm", ctx: "누에 꿈을 꿈", text: "누에 꿈을 꾸었다" },
  { id: "silkworm", ctx: "죽은 누에나 고치를 가르는 누에를 봄", text: "죽은 누에나 고치를 가르는 누에를 보았다" },
  // 지킴 — 이번에 손댄 기존 상징(illness·silk)의 옛 답이 그대로인가
  { id: "illness", ctx: "자기가 병듦", text: "자기가 병들었다" },
  { id: "silk", ctx: "채색 비단을 남에게 줌", text: "채색 비단을 남에게 주었다" },
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
