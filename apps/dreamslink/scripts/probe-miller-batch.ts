// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 47 — Hen~Hissing, 27건)
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
  { id: "chicken", ctx: "암탉을 봄", text: "암탉을 보았다" },
  { id: "herb", ctx: "약초를 봄", text: "약초가 놓여 있었다" },
  { id: "herb", ctx: "독이 있는 풀을 봄", text: "독이 있는 약초를 보았다" },
  { id: "herb", ctx: "쓸모 있는 약초를 봄", text: "쓸모 있는 약초를 보았다" },
  { id: "hermit", ctx: "은둔자를 봄", text: "은둔자를 보았다" },
  { id: "hermit", ctx: "제가 은둔자가 됨", text: "내가 은둔자가 되어 있었다" },
  { id: "hermit", ctx: "은둔자가 사는 곳에 머무름", text: "은둔자의 거처에 머물렀다" },
  { id: "herring", ctx: "청어를 봄", text: "청어를 보았다" },
  { id: "hide", ctx: "짐승 가죽을 봄", text: "짐승 가죽을 보았다" },
  { id: "hidden", ctx: "무엇을 숨겨 둠", text: "물건을 숨겨두었다" },
  { id: "hidden", ctx: "숨겨진 것을 찾아냄", text: "숨겨진 것을 찾아냈다" },
  { id: "hidden", ctx: "처녀가 물건을 숨김", text: "아가씨가 물건을 숨겼다" },
  { id: "hieroglyph", ctx: "상형문자를 봄", text: "상형문자가 새겨져 있었다" },
  { id: "hieroglyph", ctx: "상형문자를 읽어 냄", text: "상형문자를 읽어냈다" },
  { id: "high-school", ctx: "고등학교를 봄", text: "고등학교를 보았다" },
  { id: "high-school", ctx: "처녀가 고등학교에서 쫓겨남", text: "고등학교에서 쫓겨났다" },
  { id: "high-tide", ctx: "밀물을 봄", text: "밀물을 보았다" },
  { id: "slope", ctx: "비탈길을 걸어 오름", text: "비탈길을 걸어 올랐다" },
  { id: "slope", ctx: "언덕을 올라 꼭대기에 이름", text: "언덕을 올라 꼭대기에 다다랐다" },
  { id: "slope", ctx: "언덕을 오르다 미끄러져 내려옴", text: "언덕을 오르다 미끄러졌다" },
  { id: "hips", ctx: "잘빠진 엉덩이를 흐뭇하게 봄", text: "잘빠진 엉덩이를 보았다" },
  { id: "hips", ctx: "여성이 제 엉덩이를 흐뭇하게 봄", text: "자기 엉덩이를 흐뭇하게 보았다" },
  { id: "hips", ctx: "짐승의 살진 엉덩이를 봄", text: "짐승의 살진 엉덩이를 보았다" },
  { id: "hips", ctx: "여성이 제 엉덩이가 너무 좁다고 여김", text: "엉덩이가 너무 좁아 보였다" },
  { id: "hips", ctx: "여성이 제 엉덩이가 너무 살졌다고 여김", text: "엉덩이가 너무 살졌다고 느꼈다" },
  { id: "hissing", ctx: "야유하는 사람들을 봄", text: "야유하는 사람들을 보았다" },
  { id: "hissing", ctx: "남들이 나에게 야유를 보냄", text: "남들이 나에게 야유를 보냈다" },
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
