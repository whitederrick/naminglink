// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 31 — English~Eyeglass, 57건)
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
  { id: "english-people", ctx: "낯선 땅에서 영국 사람을 만남", text: "영국인을 만났다" },
  { id: "entertainment", ctx: "풍악과 춤이 있는 연회에 감", text: "풍악과 춤이 있는 연회에 갔다" },
  { id: "entertainment", ctx: "젊은이가 연회를 봄", text: "젊은이가 연회를 보았다" },
  { id: "entrails", ctx: "사람의 창자를 봄", text: "사람의 창자를 보았다" },
  { id: "entrails", ctx: "들짐승의 창자를 봄", text: "들짐승의 창자를 보았다" },
  { id: "entrails", ctx: "남의 창자를 찢음", text: "남의 창자를 찢었다" },
  { id: "entrails", ctx: "제 창자를 봄", text: "자신의 창자를 보았다" },
  { id: "entrails", ctx: "제 자식의 창자를 봄", text: "자식의 창자를 보았다" },
  { id: "letter", ctx: "봉투를 봄", text: "봉투를 보았다" },
  { id: "letter", ctx: "편지를 봉함", text: "편지를 봉했다" },
  { id: "envy", ctx: "남을 시샘함", text: "남을 시샘했다" },
  { id: "envy", ctx: "남에게 시샘받음", text: "남들이 나를 시샘했다" },
  { id: "epaulet", ctx: "군인이 견장을 닮", text: "군인이 견장을 달고 있었다" },
  { id: "epaulet", ctx: "여성이 견장을 단 사람을 소개받음", text: "여자가 견장을 단 사람을 소개받았다" },
  { id: "epicure", ctx: "미식가와 한 상에 앉음", text: "미식가와 함께 앉아 있었다" },
  { id: "epicure", ctx: "제가 미식가가 됨", text: "내가 미식가가 되었다" },
  { id: "epicure", ctx: "여성이 미식가의 입맛을 맞추려 애씀", text: "여자가 미식가의 입맛을 맞추려 애썼다" },
  { id: "epidemic", ctx: "돌림병이 도는 것을 봄", text: "돌림병이 돌고 있었다" },
  { id: "ermine", ctx: "담비 옷을 입음", text: "담비 옷을 입었다" },
  { id: "ermine", ctx: "남이 담비 옷을 입은 것을 봄", text: "남이 담비 옷을 입고 있었다" },
  { id: "ermine", ctx: "정인이 담비 옷을 입은 것을 봄", text: "애인이 담비 옷을 입고 있었다" },
  { id: "ermine", ctx: "담비 옷이 더러움", text: "담비 옷이 더러웠다" },
  { id: "errand", ctx: "심부름을 감", text: "심부름을 다녀왔다" },
  { id: "errand", ctx: "처녀가 남을 심부름 보냄", text: "아가씨가 남을 심부름 보냈다" },
  { id: "fleeing", ctx: "다치거나 사고를 당할 뻔한 데서 벗어남", text: "사고를 당할 뻔했다가 벗어났다" },
  { id: "fleeing", ctx: "갇힌 곳에서 빠져나옴", text: "갇힌 곳에서 빠져나왔다" },
  { id: "fleeing", ctx: "옮는 병에서 벗어남", text: "옮는 병에서 벗어났다" },
  { id: "fleeing", ctx: "벗어나려다 실패함", text: "벗어나려다 붙잡혔다" },
  { id: "bequest", ctx: "너른 땅과 집을 물려받게 됨", text: "너른 땅과 저택을 물려받았다" },
  { id: "bequest", ctx: "처녀가 너른 땅을 물려받게 됨", text: "아가씨가 물려받을 땅이 있었다" },
  { id: "europe", ctx: "유럽을 돌아다님", text: "유럽을 여행했다" },
  { id: "europe", ctx: "처녀가 유럽의 볼거리에 시들해함", text: "아가씨가 유럽 구경에 시들해했다" },
  { id: "adam-and-eve", ctx: "이브를 봄", text: "이브를 보았다" },
  { id: "adam-and-eve", ctx: "처녀가 제가 이브가 된 꿈을 꿈", text: "처녀가 제가 이브가 된 꿈을 꾸었다" },
  { id: "evening", ctx: "저녁이 되어 있음", text: "저녁이 되어 어둑했다" },
  { id: "evening", ctx: "저녁에 별이 맑게 빛나는 것을 봄", text: "저녁에 별이 맑게 반짝였다" },
  { id: "evening", ctx: "정든 사이가 저녁에 함께 거닒", text: "저녁에 애인과 함께 거닐었다" },
  { id: "evergreen", ctx: "늘푸른나무를 봄", text: "상록수를 보았다" },
  { id: "exchange", ctx: "물건을 맞바꿈", text: "물건을 맞바꾸었다" },
  { id: "exchange", ctx: "처녀가 벗과 정인을 맞바꿈", text: "아가씨가 벗과 애인을 맞바꾸었다" },
  { id: "execution", ctx: "처형하는 것을 봄", text: "남이 처형되는 것을 지켜보았다" },
  { id: "execution", ctx: "처형당하려다 뜻밖에 풀려남", text: "처형당하려다 뜻밖에 풀려났다" },
  { id: "banishment", ctx: "여성이 귀양 감", text: "여자가 귀양을 갔다" },
  { id: "explosion", ctx: "폭발이 일어남", text: "폭발이 일어났다" },
  { id: "explosion", ctx: "얼굴이 검게 그을리거나 다침", text: "폭발로 얼굴이 검게 그을렸다" },
  { id: "explosion", ctx: "연기와 잔해가 하늘에 가득함", text: "폭발로 연기와 잔해가 하늘에 자욱했다" },
  { id: "explosion", ctx: "불길에 휩싸이거나 폭발로 하늘에 떠 있음", text: "폭발로 불길에 휩싸였다" },
  { id: "eye", ctx: "눈을 봄", text: "누군가 나를 노려보는 눈이 있었다" },
  { id: "eye", ctx: "밤색 눈을 봄", text: "밤색 눈을 보았다" },
  { id: "eye", ctx: "푸른 눈을 봄", text: "푸른 눈을 보았다" },
  { id: "eye", ctx: "잿빛 눈을 봄", text: "잿빛 눈을 보았다" },
  { id: "eye", ctx: "눈을 잃거나 눈이 아픔", text: "눈이 아팠다" },
  { id: "eye", ctx: "한쪽 눈만 있는 사람을 봄", text: "한쪽 눈만 있는 사람을 보았다" },
  { id: "eyebrows", ctx: "눈썹을 봄", text: "눈썹을 보았다" },
  { id: "eyebrows", ctx: "눈썹이 머리털과 가지런히 자람", text: "눈썹이 머리털과 가지런히 자랐다" },
  { id: "eyeglass", ctx: "안경을 보거나 씀", text: "안경을 쓰고 있었다" },
  { id: "eyeglass", ctx: "처녀가 정인이 안경 쓴 것을 봄", text: "아가씨가 애인이 안경 쓴 것을 보았다" },
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
