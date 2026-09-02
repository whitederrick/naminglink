// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 40 — Gig~Gold Leaves, 52건)
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
  { id: "cart", ctx: "이륜마차를 몲", text: "이륜마차를 몰았다" },
  { id: "belt", ctx: "허리띠가 몸을 죔", text: "허리띠가 몸을 죄었다" },
  { id: "belt", ctx: "남이 보석 박힌 허리띠를 두른 것을 봄", text: "남이 보석 박힌 허리띠를 두르고 있었다" },
  { id: "belt", ctx: "여성이 허리띠를 받음", text: "여자가 허리띠를 받았다" },
  { id: "girl", ctx: "밝고 건강한 소녀를 봄", text: "밝고 건강한 소녀를 보았다" },
  { id: "girl", ctx: "여위고 파리한 소녀를 봄", text: "여위고 파리한 소녀를 보았다" },
  { id: "girl", ctx: "남자가 제가 소녀가 된 꿈을 꿈", text: "내가 소녀가 되어 있었다" },
  { id: "glass", ctx: "유리 너머로 내다봄", text: "유리 너머로 내다보았다" },
  { id: "glass", ctx: "유리 그릇이나 창을 깨뜨림", text: "유리그릇을 깨뜨렸다" },
  { id: "glass", ctx: "새긴 유리를 받음", text: "새긴 유리를 받았다" },
  { id: "glass", ctx: "새긴 유리 장식을 선물함", text: "유리 장식을 선물했다" },
  { id: "glass", ctx: "유리창 너머가 맑게 보임", text: "유리창 너머가 맑게 보였다" },
  { id: "glass", ctx: "유리가 뿌옇게 흐림", text: "유리가 뿌옇게 흐려 있었다" },
  { id: "glass-blower", ctx: "유리장이가 일하는 것을 봄", text: "유리장이가 일하는 것을 보았다" },
  { id: "glass-house", ctx: "유리집을 봄", text: "유리집을 보았다" },
  { id: "glass-house", ctx: "처녀가 유리집에서 삶", text: "아가씨가 유리집에서 살았다" },
  { id: "gleaning", ctx: "가을걷이 때 이삭 줍는 이들을 봄", text: "가을걷이 때 이삭을 줍는 사람들을 보았다" },
  { id: "gleaning", ctx: "이삭 줍는 이들과 함께 일함", text: "이삭을 줍는 이들과 함께 일했다" },
  { id: "gleaning", ctx: "여성이 이삭줍기 꿈을 꿈", text: "여자가 이삭줍기를 하고 있었다" },
  { id: "despair", ctx: "음침한 자리에 둘러싸임", text: "음침한 곳에 둘러싸여 있었다" },
  { id: "gloves", ctx: "새 장갑을 낌", text: "새것인 장갑을 꼈다" },
  { id: "gloves", ctx: "낡고 해진 장갑을 낌", text: "낡은 장갑을 꼈다" },
  { id: "gloves", ctx: "장갑을 잃어버림", text: "장갑을 잃어버렸다" },
  { id: "gloves", ctx: "장갑 한 켤레를 주움", text: "장갑 한 켤레를 주웠다" },
  { id: "gloves", ctx: "남자가 여인의 장갑을 채워 줌", text: "남자가 여인의 장갑을 채워 주었다" },
  { id: "gloves", ctx: "장갑을 벗음", text: "장갑을 벗었다" },
  { id: "goat", ctx: "염소를 봄", text: "염소가 무리 지어 있었다" },
  { id: "goat", ctx: "농가 둘레를 거니는 염소를 봄", text: "농가 둘레를 거니는 염소를 보았다" },
  { id: "goat", ctx: "숫염소가 들이받음", text: "숫염소가 들이받았다" },
  { id: "goat", ctx: "여성이 숫염소를 타고 감", text: "여자가 숫염소를 타고 갔다" },
  { id: "goat", ctx: "여성이 염소젖을 마심", text: "여자가 염소젖을 마셨다" },
  { id: "cup", ctx: "잔이 깨짐", text: "잔이 깨졌다" },
  { id: "cup", ctx: "은잔으로 물을 마심", text: "은잔으로 물을 마셨다" },
  { id: "cup", ctx: "옛 모양의 잔을 봄", text: "오래된 고풍스러운 잔을 보았다" },
  { id: "cup", ctx: "여성이 남자에게 물이 든 유리잔을 줌", text: "여자가 남자에게 유리잔을 건넸다" },
  { id: "god", ctx: "하느님을 봄", text: "하느님의 모습을 보았다" },
  { id: "god", ctx: "하느님이 말을 걸어옴", text: "하느님이 말을 걸어왔다" },
  { id: "god", ctx: "하느님을 우러러 섬김", text: "하느님을 우러러 섬겼다" },
  { id: "god", ctx: "하느님이 은혜를 내림", text: "하느님이 은혜를 내려 주었다" },
  { id: "god", ctx: "하느님이 얼을 내려 줌", text: "하느님이 얼을 내려 주었다" },
  { id: "goggles", ctx: "보안경을 봄", text: "보안경을 보았다" },
  { id: "goggles", ctx: "처녀가 보안경 꿈을 꿈", text: "아가씨가 보안경을 보았다" },
  { id: "gold", ctx: "황금을 손에 쥠", text: "황금을 손에 쥐었다" },
  { id: "gold", ctx: "여성이 황금을 선물로 받음", text: "여자가 황금을 선물로 받았다" },
  { id: "gold", ctx: "황금을 주움", text: "황금을 주웠다" },
  { id: "gold", ctx: "황금을 잃어버림", text: "황금을 잃어버렸다" },
  { id: "gold", ctx: "금맥을 찾아냄", text: "금맥을 찾아냈다" },
  { id: "gold", ctx: "금광을 파려고 마음먹음", text: "금광을 파려고 마음먹었다" },
  { id: "goldfish", ctx: "금붕어를 봄", text: "금붕어가 헤엄치고 있었다" },
  { id: "goldfish", ctx: "처녀가 금붕어 꿈을 꿈", text: "아가씨가 금붕어를 보았다" },
  { id: "goldfish", ctx: "금붕어가 앓거나 죽어 있음", text: "금붕어가 죽어 있었다" },
  { id: "gold-leaf", ctx: "금박을 봄", text: "금박을 보았다" },
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
