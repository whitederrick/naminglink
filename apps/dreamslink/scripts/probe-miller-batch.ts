// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 249 — Slaughter-house·Sleep·Sleigh·Sliding, 기존 calumny(중상모략)·
// being-humiliated(모욕당함)·shoes(신발)에 각 붙임. Sky는 기존 상징이 이미 문맥 15개 넘는
// 거대 상징이라 boat/horse와 같은 이유로 건너뜀)
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
  { id: "calumny", ctx: "남을 비방함", text: "남을 비방했다" },
  { id: "slaughter-house", ctx: "도살장 꿈을 꿈", text: "도살장 꿈을 꾸었다" },
  { id: "sleep", ctx: "깨끗하고 산뜻한 잠자리에서 잠", text: "깨끗하고 산뜻한 잠자리에서 잠들었다" },
  { id: "sleep", ctx: "부자연스러운 곳에서 잠", text: "부자연스러운 곳에서 잠들었다" },
  { id: "sleep", ctx: "어린아이 곁에서 잠", text: "어린아이 곁에서 잠들었다" },
  { id: "sleep", ctx: "남이 잠자는 것을 봄", text: "남이 잠자는 것을 보았다" },
  { id: "sleep", ctx: "혐오스러운 사람이나 물건과 함께 잠", text: "혐오스러운 사람과 함께 잠들었다" },
  { id: "sleep", ctx: "여성이 애인이나 매혹적인 것과 함께 자는 꿈을 꿈", text: "여성이 애인이나 매혹적인 것과 함께 자는 꿈을 꾸었다" },
  { id: "sleigh", ctx: "썰매를 봄", text: "썰매를 보았다" },
  { id: "sleigh", ctx: "썰매를 탐", text: "썰매를 탔다" },
  { id: "sliding", ctx: "미끄러지는 꿈을 꿈", text: "미끄러지는 꿈을 꾸었다" },
  { id: "sliding", ctx: "푸른 잔디로 덮인 언덕을 미끄러져 내려감", text: "푸른 잔디로 덮인 언덕을 미끄러져 내려갔다" },
  { id: "being-humiliated", ctx: "남을 무시하거나 소홀히 대함", text: "남을 무시하거나 소홀히 대했다" },
  { id: "shoes", ctx: "슬리퍼 꿈을 꿈", text: "슬리퍼 꿈을 꾸었다" },
  { id: "shoes", ctx: "슬리퍼를 남들이 크게 칭찬함", text: "슬리퍼를 남들이 크게 칭찬했다" },
  // 지킴 — 이번에 손댄 기존 상징(calumny·being-humiliated·shoes)의 옛 답이 그대로인가
  { id: "calumny", ctx: "내가 중상모략의 대상이 됨", text: "내가 중상모략의 대상이 되었다" },
  { id: "being-humiliated", ctx: "남에게 천대를 받음", text: "남에게 천대를 받았다" },
  { id: "shoes", ctx: "신을 얻음", text: "신을 얻었다" },
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
