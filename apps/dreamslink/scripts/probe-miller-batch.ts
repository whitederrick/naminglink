// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 281 — Turtle~Ulcer. 새 상징 다섯(tweezers·twins·
// type·typhoid·ugly), 기존 turtle(거북)·thread(실)·canker(궤양)에 문맥을
// 나눠 붙임. Twine은 각주 [232] See Thread로 thread에 합침. Ulcer는
// canker의 term_ko가 이미 「궤양」이라 그대로 합침. turtle은 m281이 기존
// 거북 출처(r5)보다 사전순으로 앞서 기본값이 「거북들을 봄」(밀러, 조건
// 없음)으로 바뀌었다 — 옛 「우물이나 집으로 들어옴」보다 더 막연해
// 그쪽으로 얼렸다.
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
  // ── 배치 281 새 문맥 (14건) ────────────────────────────────────────────
  { id: "turtle", ctx: "거북들을 봄", text: "거북들을 보았다" },
  { id: "turtle", ctx: "거북 수프를 마심", text: "거북 수프를 마셨다" },
  { id: "tweezers", ctx: "핀셋 꿈을 꿈", text: "핀셋 꿈을 꾸었다" },
  { id: "thread", ctx: "실타래를 봄", text: "실타래가 얽혀 있는 것을 보았다" },
  { id: "twins", ctx: "쌍둥이를 봄", text: "쌍둥이를 보았다" },
  { id: "twins", ctx: "쌍둥이가 병약함", text: "쌍둥이가 병약했다" },
  { id: "type", ctx: "활자 꿈을 꿈", text: "활자 꿈을 꾸었다" },
  { id: "type", ctx: "여성이 활자를 닦음", text: "여성이 활자를 닦았다" },
  { id: "typhoid", ctx: "스스로 장티푸스에 걸림", text: "스스로 장티푸스에 걸렸다" },
  { id: "typhoid", ctx: "장티푸스가 유행함을 봄", text: "장티푸스가 유행하는 것을 보았다" },
  { id: "ugly", ctx: "스스로 못생겼다고 여김", text: "스스로 못생겼다고 여겼다" },
  { id: "ugly", ctx: "처녀가 스스로 못생겼다고 여김", text: "처녀가 스스로 못생겼다고 여겼다" },
  { id: "canker", ctx: "궤양을 봄", text: "궤양을 보았는데 벗을 잃을까 걱정됐다" },
  { id: "canker", ctx: "스스로 궤양이 있음", text: "스스로 궤양이 있어 쾌락에 빠졌다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────
  { id: "turtle", ctx: "거북을 봄", text: "거북을 보았다" },
  { id: "thread", ctx: "실 꿈을 꿈", text: "실 꿈을 꾸었다" },
  { id: "canker", ctx: "살에 궤양이 자람", text: "살에 궤양이 자랐다" },
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
