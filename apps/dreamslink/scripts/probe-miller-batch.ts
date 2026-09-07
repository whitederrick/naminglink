// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 290 — Violence~Virgin(새 20판 묶음의 3/20). 새 상징
// 셋(violence·violets·virgin). Violin은 기존 fiddle(바이올린, term_ko가
// 이미 같음)에, Viper는 기존 adder(독사, 영어 별칭에 이미 "viper"가
// 있음 — snake·asp도 같은 별칭을 쥠)에 합쳤다. Violin 첫 문장은 기존
// fiddle의 「바이올린을 봄」과 같은 그림이라 §31로 건너뜀. fiddle은
// m290이 사전순으로 앞서("m290" < "m34") 기본값이 바뀔 뻔했으나 옛
// 「바이올린을 봄」이 훨씬 막연해 그대로 지켰다. virgin의 term_ko는
// "처녀"(이 사전 수백 문맥에 쓰이는 일반 낱말, 어디에도 등록 안 돼 있어
// 그대로 쓰면 아무 문장에나 걸릴 위험) 대신 "순결"로 세우고, "동정"은
// "동정심"(공감)과 동형이의어라 별칭에서 뺐다.
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
  // ── 배치 290 새 문맥 (14건) ────────────────────────────────────────────
  { id: "violence", ctx: "제가 남에게 폭력을 당함", text: "제가 남에게 폭력을 당해 적에게 압도당했다" },
  { id: "violence", ctx: "제가 남에게 폭력을 씀", text: "제가 남에게 폭력을 써서 그르게 행동해 재물을 잃었다" },
  { id: "violets", ctx: "제비꽃을 보거나 땀", text: "제비꽃을 보았는데 훌륭한 이의 호의를 얻었다" },
  { id: "violets", ctx: "젊은 여성이 제비꽃을 땀", text: "젊은 여성이 제비꽃을 땄는데 미래의 남편을 만났다" },
  { id: "violets", ctx: "시들거나 마른 제비꽃을 봄", text: "시들거나 마른 제비꽃을 보았다" },
  { id: "fiddle", ctx: "젊은 여성이 바이올린을 연주함", text: "젊은 여성이 바이올린을 연주해 명예를 얻고 선물을 받았다" },
  { id: "fiddle", ctx: "여성의 바이올린 연주 시도가 서투름", text: "여성이 바이올린을 서투르게 연주해 실패했다" },
  { id: "fiddle", ctx: "부서진 바이올린을 봄", text: "부서진 바이올린을 보았다" },
  { id: "adder", ctx: "독사 꿈을 꿈", text: "독사 꿈을 꾸었는데 재앙이 다가오고 있었다" },
  { id: "adder", ctx: "여러 조각으로 나뉘는 알록달록한 독사가 공격함", text: "여러 조각으로 나뉘는 알록달록한 독사가 나를 공격했는데 적들이 몰아내려 했다" },
  { id: "virgin", ctx: "순결한 사람 꿈을 꿈", text: "순결한 사람 꿈을 꾸었는데 투기에서 운이 따랐다" },
  { id: "virgin", ctx: "기혼 여성이 스스로 순결하다고 여김", text: "기혼 여성이 스스로 순결하다고 여기고 지난날을 뉘우쳤다" },
  { id: "virgin", ctx: "미혼 여성이 순결을 잃었다고 여김", text: "미혼 여성이 순결을 잃었다고 여겨 남자친구들 사이에서 평판이 나빠졌다" },
  { id: "virgin", ctx: "남성이 순결한 이와 부적절한 관계를 맺는 꿈을 꿈", text: "남성이 순결한 이와 부적절한 관계를 맺는 꿈을 꾸었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "fiddle", ctx: "바이올린을 봄", text: "바이올린을 보았다" },
  { id: "adder", ctx: "젊은 여성이 독사를 봄", text: "젊은 여성이 독사를 보았다" },
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
