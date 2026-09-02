// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 39 — Garlic~Gift, 58건)
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
  { id: "garlic", ctx: "마늘을 먹음", text: "마늘을 먹었다" },
  { id: "garlic", ctx: "마늘밭을 지나감", text: "마늘밭을 지나갔다" },
  { id: "garlic", ctx: "처녀가 마늘밭을 지나감", text: "아가씨가 마늘밭을 지나갔다" },
  { id: "garlic", ctx: "마늘을 씹어 먹음", text: "마늘을 씹어 먹었다" },
  { id: "attic", ctx: "다락방에 있음", text: "다락방에 있었다" },
  { id: "attic", ctx: "다락방으로 올라감", text: "다락방으로 올라갔다" },
  { id: "attic", ctx: "가난한 이가 다락방 꿈을 꿈", text: "가난한 사람이 다락방을 보았다" },
  { id: "attic", ctx: "여성이 다락방 꿈을 꿈", text: "여자가 다락방을 보았다" },
  { id: "garter", ctx: "정인이 여인의 대님을 주움", text: "여인의 대님을 주웠다" },
  { id: "garter", ctx: "여성이 대님을 잃음", text: "대님을 잃어버렸다" },
  { id: "garter", ctx: "혼인한 남자가 대님 꿈을 꿈", text: "혼인한 남자가 대님을 보았다" },
  { id: "garter", ctx: "여성이 보석 박힌 대님을 흐뭇하게 봄", text: "보석 박힌 대님을 보았다" },
  { id: "garter", ctx: "정인이 대님을 매어 줌", text: "정인이 대님을 매어 주었다" },
  { id: "gas", ctx: "가스를 봄", text: "가스 냄새가 났다" },
  { id: "gas", ctx: "가스에 숨이 막힘", text: "가스에 숨이 막혔다" },
  { id: "gas", ctx: "가스를 불어 끄려 함", text: "가스를 입으로 불어 끄려 했다" },
  { id: "gas", ctx: "가스불을 꺼 버림", text: "가스불을 껐다" },
  { id: "gas", ctx: "가스에 불을 붙임", text: "가스에 불을 붙였다" },
  { id: "gas-lamp", ctx: "가스등을 봄", text: "가스등이 환하게 켜져 있었다" },
  { id: "gas-lamp", ctx: "가스등이 터지거나 망가짐", text: "가스등이 터졌다" },
  { id: "gasoline", ctx: "휘발유를 봄", text: "휘발유를 보았다" },
  { id: "gate", ctx: "대문을 지나감", text: "대문을 지나갔다" },
  { id: "gate", ctx: "닫힌 대문을 봄", text: "닫힌 대문을 보았다" },
  { id: "gate", ctx: "대문을 잠금", text: "대문을 잠갔다" },
  { id: "gate", ctx: "부서진 대문을 봄", text: "부서진 대문을 보았다" },
  { id: "gate", ctx: "대문을 여는 데 애를 먹음", text: "대문이 안열려서 애를 먹었다" },
  { id: "gate", ctx: "대문에 매달려 흔들림", text: "대문에 매달려 흔들었다" },
  { id: "gauze", ctx: "망사 옷을 입음", text: "망사 옷을 입었다" },
  { id: "gauze", ctx: "정인이 여인의 망사 옷을 봄", text: "정인이 여인이 입은 망사 옷을 보았다" },
  { id: "gavel", ctx: "의사봉을 봄", text: "의사봉이 놓여 있었다" },
  { id: "gavel", ctx: "의사봉을 두드림", text: "의사봉을 두드렸다" },
  { id: "goose", ctx: "거위와 오리가 함께 헤엄침", text: "거위와 오리가 함께 물에서 놀았다" },
  { id: "goose", ctx: "거위 우는 소리에 시달림", text: "거위 우는 소리에 시달렸다" },
  { id: "goose", ctx: "거위가 헤엄치는 것을 봄", text: "거위가 헤엄치는 것을 보았다" },
  { id: "goose", ctx: "풀밭의 거위를 봄", text: "풀밭에 있는 거위를 보았다" },
  { id: "goose", ctx: "죽은 거위를 봄", text: "죽은 거위를 보았다" },
  { id: "goose", ctx: "정인이 거위를 봄", text: "정인이 거위를 보았다" },
  { id: "goose", ctx: "거위 털을 뽑음", text: "거위 털을 뽑았다" },
  { id: "goose", ctx: "거위를 먹음", text: "거위를 먹었다" },
  { id: "jade", ctx: "보석을 봄", text: "보석을 보았다" },
  { id: "genealogy", ctx: "제 족보를 봄", text: "족보를 펼쳐 보았다" },
  { id: "genealogy", ctx: "남들이 족보를 살피는 것을 봄", text: "남들이 족보를 살피고 있었다" },
  { id: "genealogy", ctx: "족보의 가지가 빠져 있음", text: "족보에 가지가 빠져 있었다" },
  { id: "atlas", ctx: "지리를 익힘", text: "지리를 익히고 있었다" },
  { id: "ghost", ctx: "어버이의 귀신을 봄", text: "어머니의 귀신을 보았다" },
  { id: "ghost", ctx: "죽은 벗의 귀신을 봄", text: "죽은 벗의 귀신을 보았다" },
  { id: "ghost", ctx: "귀신이 말을 걸어옴", text: "귀신이 말을 걸어왔다" },
  { id: "ghost", ctx: "여성이 귀신 꿈을 꿈", text: "여자가 귀신을 보았다" },
  { id: "ghost", ctx: "하늘에 천사나 귀신이 나타남", text: "하늘에 귀신이 나타났다" },
  { id: "ghost", ctx: "하늘 오른쪽에 여자 귀신 왼쪽에 남자 귀신이 보임", text: "오른쪽에 여자 귀신 왼쪽에 남자 귀신이 있었다" },
  { id: "ghost", ctx: "여자 귀신이 긴 옷을 끌고 하늘을 떠감", text: "여자 귀신이 늘어진 옷을 끌고 떠갔다" },
  { id: "ghost", ctx: "살아 있는 살붙이나 벗의 귀신을 봄", text: "살아 있는 벗의 귀신을 보았다" },
  { id: "giant", ctx: "거인이 갑자기 앞에 나타남", text: "거인이 갑자기 앞에 나타났다" },
  { id: "giant", ctx: "거인이 길을 막음", text: "거인이 길을 막았다" },
  { id: "giant", ctx: "거인이 달아남", text: "거인이 달아났다" },
  { id: "gift", ctx: "선물을 받음", text: "선물을 받았다" },
  { id: "gift", ctx: "선물을 보냄", text: "선물을 보냈다" },
  { id: "gift", ctx: "처녀가 정인에게서 값진 선물을 받음", text: "아가씨가 정인에게서 값진 선물을 받았다" },
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
