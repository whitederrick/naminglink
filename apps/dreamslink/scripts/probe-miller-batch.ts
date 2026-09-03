// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 107 — Locomotive~Lodger, 13건)
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
  { id: "engine", ctx: "기관차가 빠르게 달림", text: "기관차가 빠르게 달렸다" },
  { id: "engine", ctx: "기관차가 완전히 부서진 것을 봄", text: "기관차가 완전히 부서져 있었다" },
  { id: "engine", ctx: "기관차가 오는 소리를 들음", text: "기관차가 오는 소리를 들었다" },
  { id: "engine", ctx: "기관차의 기적 소리를 들음", text: "기관차의 기적 소리를 들었다" },
  { id: "grasshopper", ctx: "메뚜기를 봄", text: "메뚜기가 새까맣게 무리 지어 있었다" },
  { id: "grasshopper", ctx: "여성이 메뚜기 꿈을 꿈", text: "여자가 메뚜기 꿈을 꾸었다" },
  { id: "lodger", ctx: "하숙인을 둠", text: "하숙인을 두었다" },
  { id: "lodger", ctx: "하숙인이 셈을 안 치르고 떠남", text: "하숙인이 셈을 밀린 채 떠났다" },
  { id: "lodger", ctx: "하숙인이 셈을 치름", text: "하숙인이 셈을 치렀다" },
  // 지킴 — 이번에 건드린 상징의 옛 답이 그대로인가(§25 곁가지)
  { id: "engine", ctx: "기관차를 봄", text: "기관차가 지나가는 것을 보았다" },
  { id: "engine", ctx: "고장 난 기관차를 봄", text: "고장 난 기관차를 보았다" },
  { id: "grasshopper", ctx: "푸른 남새 위의 메뚜기를 봄", text: "푸른 채소 위에 메뚜기가 있었다" },
  { id: "grasshopper", ctx: "시든 풀 위의 메뚜기를 봄", text: "시든 풀 위에 메뚜기가 있었다" },
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
