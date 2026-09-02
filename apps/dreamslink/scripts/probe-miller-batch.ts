// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 43 — Hair~Hammer, 37건)
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
  { id: "hair", ctx: "부인이 머리를 풀어 헤침", text: "부인이 머리를 풀어 헤쳤다" },
  { id: "hair", ctx: "남자가 제 머리숱이 줄어드는 것을 봄", text: "머리숱이 줄어들고 있었다" },
  { id: "hair", ctx: "온몸이 털로 덮인 제 모습을 봄", text: "온몸이 털로 뒤덮여 있었다" },
  { id: "hair", ctx: "남자가 검고 곱슬한 머리카락을 지님", text: "남자가 검고 곱슬한 머리카락이었다" },
  { id: "hair", ctx: "여성의 머리카락이 검고 곱슬함", text: "머리카락이 검고 고불고불했다" },
  { id: "hair", ctx: "금빛 머리카락의 여성을 봄", text: "금빛 머리카락의 여인을 보았다" },
  { id: "hair", ctx: "정인의 머리카락이 붉음", text: "정인의 머리카락이 붉었다" },
  { id: "hair", ctx: "밤빛 머리카락을 봄", text: "밤빛 머리카락을 보았다" },
  { id: "hair", ctx: "잘 손질된 머리카락을 봄", text: "가지런히 손질된 머리카락을 보았다" },
  { id: "hair", ctx: "머리카락을 살갗에 닿도록 바짝 깎음", text: "머리카락을 바짝 깎았다" },
  { id: "hair", ctx: "머리카락이 부드럽고 탐스럽게 자라남", text: "머리카락이 부드럽고 탐스럽게 자랐다" },
  { id: "hair", ctx: "여성이 흰 머리카락과 검은 머리카락을 견주어 봄", text: "머리카락을 뽑아서 견주어 보았다" },
  { id: "hair", ctx: "헝클어지고 텁수룩한 머리카락을 봄", text: "헝클어진 머리카락을 보았다" },
  { id: "hair", ctx: "처녀가 흰머리 여성들을 봄", text: "아가씨가 흰머리 여인들을 보았다" },
  { id: "hair", ctx: "눈처럼 새하얀 머리카락을 지님", text: "눈처럼 새하얀 머리카락이었다" },
  { id: "hair", ctx: "남자가 여인의 머리카락을 쓰다듬음", text: "여인의 머리카락을 쓰다듬었다" },
  { id: "hair", ctx: "머리카락에 꽃이 꽂힌 것을 봄", text: "머리카락에 꽃이 꽂혀 있었다" },
  { id: "hair", ctx: "여성의 머리카락이 흰 꽃으로 바뀜", text: "머리카락이 흰꽃으로 변했다" },
  { id: "hair", ctx: "하룻밤에 머리카락이 온통 희어지고 낯은 젊음", text: "하룻밤에 머리카락이 온통 희어졌다" },
  { id: "combing-one-s-hair", ctx: "여성이 고운 머리카락을 빗음", text: "여자가 고운 머리를 빗었다" },
  { id: "combing-one-s-hair", ctx: "여성이 머리카락을 빗지 못함", text: "머리를 빗지 못했다" },
  { id: "barber", ctx: "이발사 꿈을 꿈", text: "이발사를 만났다" },
  { id: "barber", ctx: "머리 손질하는 곳에 감", text: "미용실에 갔다" },
  { id: "barber", ctx: "여성이 머리 손질하는 곳 꿈을 꿈", text: "여자가 미용실에 있었다" },
  { id: "barber", ctx: "여성이 머리카락을 물들임", text: "머리카락을 물들였다" },
  { id: "barber", ctx: "여성이 머리를 매만져 꾸밈", text: "미용실에서 머리를 매만져 꾸몄다" },
  { id: "hand", ctx: "손이 부러짐", text: "손이 부러졌다" },
  { id: "hand", ctx: "손이 짐승처럼 털로 덮임", text: "손이 짐승처럼 털로 덮여 있었다" },
  { id: "bridle", ctx: "어린 말에 굴레를 씌움", text: "어린 말에 굴레를 씌웠다" },
  { id: "bridle", ctx: "다른 것에 굴레가 씌워진 것을 봄", text: "다른 것에 굴레가 씌워져 있었다" },
  { id: "ham", ctx: "햄을 봄", text: "햄을 보았다" },
  { id: "ham", ctx: "햄을 큼직하게 썲", text: "햄을 큼직하게 썰었다" },
  { id: "ham", ctx: "햄을 손질함", text: "햄을 손질했다" },
  { id: "ham", ctx: "햄을 사고팖", text: "햄을 팔았다" },
  { id: "ham", ctx: "햄을 먹음", text: "햄을 먹었다" },
  { id: "ham", ctx: "햄 익는 냄새를 맡음", text: "햄 익는 냄새를 맡았다" },
  { id: "hammer", ctx: "망치를 봄", text: "망치가 놓여 있었다" },
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
