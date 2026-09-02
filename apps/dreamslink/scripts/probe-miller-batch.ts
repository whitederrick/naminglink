// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 36 — Flight~Foot-log, 45건)
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
  { id: "fleeing", ctx: "도망침", text: "도망쳤다" },
  { id: "fleeing", ctx: "처녀가 도망침", text: "아가씨가 도망쳤다" },
  { id: "fleeing", ctx: "무언가가 나에게서 달아나는 것을 봄", text: "무언가가 나에게서 달아났다" },
  { id: "floating", ctx: "물에 떠 있음", text: "물에 둥둥 떠 있었다" },
  { id: "floating", ctx: "흐린 물에 떠 있음", text: "흐린 물에 떠 있었다" },
  { id: "flood", ctx: "홍수가 온 땅을 휩쓸고 나를 떠내려 보냄", text: "홍수가 나서 떠내려갔다" },
  { id: "wheat-flour", ctx: "밀가루를 봄", text: "밀가루가 담긴 것을 보았다" },
  { id: "wheat-flour", ctx: "처녀가 제 몸에 밀가루가 묻은 것을 봄", text: "아가씨가 제 몸에 밀가루가 묻은 것을 보았다" },
  { id: "wheat-flour", ctx: "밀가루를 사고팖", text: "밀가루를 팔았다" },
  { id: "flower", ctx: "뜰에 밝은 빛깔의 싱싱한 꽃이 핀 것을 봄", text: "뜰에 싱싱한 꽃이 피어 있었다" },
  { id: "flower", ctx: "하얀 꽃을 봄", text: "하얀 꽃을 보았다" },
  { id: "flower", ctx: "시들어 죽은 꽃을 봄", text: "시들어 버린 꽃을 보았다" },
  { id: "flower", ctx: "처녀가 여러 꽃을 묶은 다발을 받음", text: "아가씨가 꽃다발을 받았다" },
  { id: "flower", ctx: "메마른 땅에 잎도 없이 꽃이 핀 것을 봄", text: "황무지에 꽃이 피어 있었다" },
  { id: "flute", ctx: "피리 가락을 들음", text: "피리 가락을 들었다" },
  { id: "flute", ctx: "처녀가 피리를 붊", text: "아가씨가 피리를 불었다" },
  { id: "flux", ctx: "이질을 앓음", text: "내가 이질에 걸렸다" },
  { id: "flux", ctx: "남이 이질을 앓는 것을 봄", text: "남들이 이질을 앓고 있었다" },
  { id: "flying", ctx: "높이 낢", text: "하늘을 높이 날았다" },
  { id: "flying", ctx: "땅에 닿을 듯 낮게 낢", text: "땅에 닿을 듯 낮게 날았다" },
  { id: "flying", ctx: "흐린 물 위를 낢", text: "흙탕물 위를 날았다" },
  { id: "flying", ctx: "부서진 곳 위를 낢", text: "부서진 곳 위를 날았다" },
  { id: "flying", ctx: "날면서 아래 푸른 나무와 풀을 봄", text: "날면서 아래 푸른 나무가 보였다" },
  { id: "flying", ctx: "날면서 해를 봄", text: "날면서 해를 보았다" },
  { id: "flying", ctx: "달과 별들을 지나 하늘을 낢", text: "달과 별들을 지나 날았다" },
  { id: "flying", ctx: "검은 날개로 낢", text: "검은 날개로 날았다" },
  { id: "flying", ctx: "날다가 떨어짐", text: "날다가 떨어졌다" },
  { id: "flying", ctx: "떨어지다가 잠에서 깸", text: "날다가 떨어지는 중에 잠에서 깨어났다" },
  { id: "flying", ctx: "젊은 남자가 흰 날개로 푸른 잎 위를 낢", text: "젊은 남자가 하얀 날개로 날았다" },
  { id: "flying", ctx: "아래 나무가 메마르거나 죽어 있음", text: "날았는데 아래 나무가 앙상했다" },
  { id: "flying", ctx: "여성이 이 고을에서 저 고을로 날아 첨탑에 내려앉음", text: "고을을 날아 교회 첨탑에 내려앉았다" },
  { id: "flying", ctx: "처녀가 날다가 총에 맞음", text: "날다가 총에 맞았다" },
  { id: "flying-machine", ctx: "비행기를 봄", text: "비행기가 떠올랐다" },
  { id: "flying-machine", ctx: "비행기가 뜨지 못하는 것을 봄", text: "비행기가 뜨지 못하고 있었다" },
  { id: "fly-paper", ctx: "파리끈끈이를 봄", text: "파리끈끈이를 보았다" },
  { id: "fly-trap", ctx: "파리덫을 봄", text: "파리덫이 놓여 있었다" },
  { id: "fly-trap", ctx: "파리가 가득한 파리덫을 봄", text: "파리가 가득한 파리덫을 보았다" },
  { id: "horse", ctx: "망아지를 봄", text: "망아지를 보았다" },
  { id: "fog", ctx: "짙은 안개 속을 헤치고 감", text: "짙은 안개 속을 헤치고 갔다" },
  { id: "fog", ctx: "안개에서 빠져나옴", text: "안개에서 빠져나왔다" },
  { id: "fog", ctx: "처녀가 안개 속에 있음", text: "아가씨가 안개 속에 있었다" },
  { id: "bridge", ctx: "맑은 시내에 놓인 외나무다리를 건넘", text: "시냇물에 놓인 외나무다리를 건넜다" },
  { id: "bridge", ctx: "흐린 물에 놓인 외나무다리를 건넘", text: "걸쭉한 물에 놓인 외나무다리를 건넜다" },
  { id: "bridge", ctx: "외나무다리에서 맑은 물로 떨어짐", text: "외나무다리에서 떨어져 물에 잠겼다" },
  { id: "bridge", ctx: "외나무다리에서 흐린 물로 떨어짐", text: "외나무다리에서 떨어져 허우적거렸다" },
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
