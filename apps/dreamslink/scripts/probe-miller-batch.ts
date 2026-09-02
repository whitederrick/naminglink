// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 33 — Fatigue~Fever, 41건)
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
  { id: "fatigue", ctx: "몸이 고단함", text: "몸이 고단했다" },
  { id: "fatigue", ctx: "처녀가 남이 고단해하는 것을 봄", text: "아가씨가 남이 지친 것을 보았다" },
  { id: "favor", ctx: "남에게 부탁을 함", text: "남에게 부탁을 했다" },
  { id: "favor", ctx: "남의 부탁을 들어줌", text: "남의 부탁을 들어줬다" },
  { id: "deer", ctx: "새끼 사슴을 봄", text: "새끼 사슴을 보았다" },
  { id: "deer", ctx: "젊은이가 새끼 사슴을 봄", text: "젊은이가 새끼 사슴을 보았다" },
  { id: "adulation", ctx: "남이 나에게 아첨함", text: "누가 나에게 아첨했다" },
  { id: "afraid", ctx: "까닭 없이 두려움을 느낌", text: "까닭없이 두려움을 느꼈다" },
  { id: "afraid", ctx: "처녀가 두려움을 느낌", text: "아가씨가 두려움을 느꼈다" },
  { id: "feast", ctx: "잔치에서 어수선하거나 볼썽사나운 일이 벌어짐", text: "잔치에서 소란이 벌어졌다" },
  { id: "feast", ctx: "잔치에 늦게 다다름", text: "잔치에 늦게 다다랐다" },
  { id: "feather", ctx: "깃털이 둘레에 흩날림", text: "깃털이 흩날렸다" },
  { id: "feather", ctx: "독수리 깃털을 봄", text: "독수리 깃털을 보았다" },
  { id: "feather", ctx: "닭 깃털을 봄", text: "닭의 깃털을 보았다" },
  { id: "feather", ctx: "거위나 오리 깃털을 사고팖", text: "거위 깃털을 팔았다" },
  { id: "feather", ctx: "검은 깃털을 봄", text: "검은 깃털을 보았다" },
  { id: "feather", ctx: "여성이 치레용 깃털을 봄", text: "타조 깃털을 보았다" },
  { id: "february", ctx: "이월 꿈을 꿈", text: "이월이 되어 늦겨울이었다" },
  { id: "february", ctx: "이월에 볕이 밝은 날을 봄", text: "이월에 볕이 밝은 날을 보았다" },
  { id: "feeble", ctx: "기운이 없음", text: "기운이 없었다" },
  { id: "feet", ctx: "제 발을 봄", text: "자기 발을 보았다" },
  { id: "feet", ctx: "남의 발을 봄", text: "남의 발을 보았다" },
  { id: "feet", ctx: "발을 씻음", text: "발을 씻었다" },
  { id: "feet", ctx: "발이 아픔", text: "발이 아팠다" },
  { id: "feet", ctx: "발이 붓고 붉어짐", text: "발이 붓고 붉어졌다" },
  { id: "fence", ctx: "울타리 꼭대기까지 기어오름", text: "울타리 꼭대기까지 올라갔다" },
  { id: "fence", ctx: "울타리에서 떨어짐", text: "울타리에서 떨어졌다" },
  { id: "fence", ctx: "남들과 울타리에 앉아 있다가 무너짐", text: "울타리에 앉아 있다가 무너졌다" },
  { id: "fence", ctx: "울타리 사이로 빠져나감", text: "울타리 사이로 빠져나갔다" },
  { id: "fence", ctx: "울타리를 넘어뜨리고 건너감", text: "울타리를 넘어뜨리고 건너갔다" },
  { id: "fence", ctx: "가축이 울타리를 넘어 안으로 들어옴", text: "소가 울타리를 넘어 안으로 들어왔다" },
  { id: "fence", ctx: "가축이 울타리를 넘어 밖으로 나감", text: "소가 울타리를 넘어 밖으로 나갔다" },
  { id: "fence", ctx: "울타리를 세움", text: "울타리를 세웠다" },
  { id: "fence", ctx: "처녀가 울타리를 세움", text: "아가씨가 울타리를 세웠다" },
  { id: "fern", ctx: "고사리를 봄", text: "푸른 고사리를 보았다" },
  { id: "fern", ctx: "시든 고사리를 봄", text: "시든 고사리를 보았다" },
  { id: "ferry", ctx: "나루터에서 배를 기다리는데 물이 빠르고 흐림", text: "나루터에서 배를 기다리는데 물이 흐렸다" },
  { id: "ferry", ctx: "물이 잔잔하고 맑을 때 나루를 건넘", text: "물이 잔잔할 때 나루를 건넜다" },
  { id: "carnival", ctx: "축제 자리에 있음", text: "축제 자리에 있었다" },
  { id: "ague", ctx: "열병에 걸림", text: "열병에 걸렸다" },
  { id: "ague", ctx: "집안 사람이 열병으로 앓는 것을 봄", text: "집안 식구가 열병으로 앓고 있었다" },
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
