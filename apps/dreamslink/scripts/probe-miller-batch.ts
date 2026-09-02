// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 38 — Frost~Garden, 44건)
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
  { id: "frost", ctx: "서리가 내림", text: "서리가 하얗게 내렸다" },
  { id: "frost", ctx: "어둡고 음산한 아침에 내린 서리를 봄", text: "어둡고 음산한 아침에 서리를 보았다" },
  { id: "frost", ctx: "햇빛 드는 자그마한 들녘에 내린 서리를 봄", text: "햇빛 드는 들녘에 서리가 있었다" },
  { id: "frost", ctx: "처녀가 서리 속에 있는 벗을 봄", text: "아가씨가 서리 속에 있는 벗을 보았다" },
  { id: "frost", ctx: "서리 속에 있는 벗을 봄", text: "서리 속에 있는 벗을 보았다" },
  { id: "fruit", ctx: "잎 사이에서 익어 가는 과일을 봄", text: "잎 사이에서 익어 가는 과일을 보았다" },
  { id: "fruit", ctx: "처녀가 풋과일을 먹음", text: "아가씨가 풋과일을 먹었다" },
  { id: "fruit", ctx: "풋과일을 봄", text: "풋과일을 보았다" },
  { id: "fruit", ctx: "과일을 사고팖", text: "장에서 과일을 팔았다" },
  { id: "fruit", ctx: "잘 익은 과일을 보거나 먹음", text: "잘 익은 과일을 먹었다" },
  { id: "fruit-seller", ctx: "과일장수를 봄", text: "과일장수를 보았다" },
  { id: "burial", ctx: "장례를 봄", text: "장례식을 보았다" },
  { id: "burial", ctx: "낯선 이의 장례를 봄", text: "낯선 사람의 장례를 보았다" },
  { id: "burial", ctx: "제 아이의 장례를 봄", text: "내 아이의 장례를 보았다" },
  { id: "burial", ctx: "검은 옷을 입고 장례에 참석함", text: "검은 상복을 입고 장례에 갔다" },
  { id: "burial", ctx: "살붙이의 장례를 봄", text: "일가 살붙이의 장례를 보았다" },
  { id: "furnace", ctx: "불이 지펴진 용광로를 봄", text: "불이 타오르는 용광로를 보았다" },
  { id: "furnace", ctx: "망가진 용광로를 봄", text: "망가진 용광로를 보았다" },
  { id: "furnace", ctx: "용광로에 빠짐", text: "용광로에 빠졌다" },
  { id: "fur", ctx: "모피를 걸침", text: "모피를 입었다" },
  { id: "fur", ctx: "모피를 사고파는 일을 함", text: "모피 장사를 했다" },
  { id: "fur", ctx: "고운 모피를 봄", text: "고운 모피를 보았다" },
  { id: "fur", ctx: "처녀가 값진 모피를 입음", text: "아가씨가 값진 모피를 걸쳤다" },
  { id: "future", ctx: "앞날을 꿈꿈", text: "앞날을 꿈꾸었다" },
  { id: "gaiter", ctx: "각반을 봄", text: "각반을 보았다" },
  { id: "wind", ctx: "거센 바람에 휘말림", text: "거센 바람에 휘말렸다" },
  { id: "gallows", ctx: "벗이 교수대에 오른 것을 봄", text: "친구가 교수대에 오른 것을 보았다" },
  { id: "gallows", ctx: "제가 교수대에 오름", text: "내가 교수대에 올랐다" },
  { id: "gallows", ctx: "처녀가 정인이 교수대에서 죽는 것을 봄", text: "아가씨가 정인이 교수대에서 죽는 것을 보았다" },
  { id: "gallows", ctx: "교수대에서 남을 구해 냄", text: "교수대에서 남을 구해 냈다" },
  { id: "gallows", ctx: "원수를 목매닮", text: "원수를 목매달았다" },
  { id: "bet", ctx: "노름을 해서 땀", text: "노름을 해서 땄다" },
  { id: "bet", ctx: "노름을 해서 잃음", text: "노름을 해서 잃었다" },
  { id: "game", ctx: "사냥감을 잡음", text: "사냥감을 잡았다" },
  { id: "game", ctx: "사냥감을 놓침", text: "사냥감을 놓쳤다" },
  { id: "gangrene", ctx: "괴저에 걸린 사람을 봄", text: "괴저에 걸린 사람을 보았다" },
  { id: "prison", ctx: "감옥에서 빠져나옴", text: "감옥에서 빠져나왔다" },
  { id: "garbage", ctx: "쓰레기 더미를 봄", text: "쓰레기가 수북이 쌓여 있었다" },
  { id: "garbage", ctx: "여성이 쓰레기 더미를 봄", text: "여자가 쓰레기 더미를 보았다" },
  { id: "garden", ctx: "동산으로 나감", text: "동산으로 나갔다" },
  { id: "garden", ctx: "늘 푸른 나무와 꽃이 가득한 정원을 봄", text: "푸른 나무가 가득한 정원을 보았다" },
  { id: "garden", ctx: "정원에서 채소를 봄", text: "정원에서 채소를 보았다" },
  { id: "garden", ctx: "여성이 정원을 봄", text: "여자가 정원을 보았다" },
  { id: "garden", ctx: "꽃나무 우거진 정원을 정인과 거닒", text: "꽃나무 우거진 정원을 정인과 거닐었다" },
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
