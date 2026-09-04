// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 248 — Silver·Single·Skating·Skeleton·Skull. Singing은 기존
// song(노래)의 EN 별칭 "singing"과 이름이 겹쳐 song에 합침. bones가 쥐고 있던
// "a skeleton"/"a skull", head가 쥐고 있던 "skull"을 새 상징에 넘겼다)
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
  { id: "silver", ctx: "은 꿈을 꿈", text: "은 꿈을 꾸었다" },
  { id: "silver", ctx: "은화를 주움", text: "은화를 주웠다" },
  { id: "silver", ctx: "은식기 꿈을 꿈", text: "은식기 꿈을 꾸었다" },
  { id: "being-single", ctx: "기혼자가 자신이 미혼이라고 여기는 꿈을 꿈", text: "기혼자가 자신이 미혼이라고 여겼다" },
  { id: "song", ctx: "노래하는 소리를 들음", text: "노래하는 소리를 들었다" },
  { id: "song", ctx: "행복해 보이는 가운데 자신이 노래함", text: "행복해 보이는 가운데 자신이 노래했다" },
  { id: "song", ctx: "노래에 슬픈 가락이 섞임", text: "노래에 슬픈 가락이 섞였다" },
  { id: "song", ctx: "상스러운 노래를 부름", text: "상스러운 노래를 불렀다" },
  { id: "skating", ctx: "얼음 위에서 스케이트를 탐", text: "얼음 위에서 스케이트를 탔다" },
  { id: "skating", ctx: "얼음이 깨져 빠짐", text: "스케이트를 타다가 얼음이 깨져 빠졌다" },
  { id: "skating", ctx: "남이 스케이트 타는 것을 봄", text: "남이 스케이트 타는 것을 보았다" },
  { id: "skating", ctx: "스케이트를 봄", text: "스케이트 한 켤레를 보았다" },
  { id: "skating", ctx: "젊은이들이 롤러스케이트를 타는 것을 봄", text: "젊은이들이 롤러스케이트를 타는 것을 보았다" },
  { id: "skeleton", ctx: "해골을 봄", text: "해골을 보았다" },
  { id: "skeleton", ctx: "자신이 해골이 됨", text: "자신이 해골이 되었다" },
  { id: "skeleton", ctx: "해골이 자신을 따라다니며 괴롭힘", text: "해골이 자신을 따라다니며 괴롭혔다" },
  { id: "skull", ctx: "두개골이 자신을 보며 웃음", text: "두개골이 자신을 보며 웃었다" },
  { id: "skull", ctx: "두개골을 손으로 만짐", text: "두개골을 손으로 만졌다" },
  { id: "skull", ctx: "벗의 두개골을 봄", text: "벗의 두개골을 보았다" },
  { id: "skull", ctx: "자신의 두개골을 봄", text: "자신의 두개골을 보았다" },
  // 지킴 — 이번에 손댄 기존 상징(song·bones·head)의 옛 답이 그대로인가
  { id: "song", ctx: "노래하는 것을 봄", text: "노래하는 것을 보았다" },
  { id: "bones", ctx: "뼈 무더기를 봄", text: "뼈 무더기를 보았다" },
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
