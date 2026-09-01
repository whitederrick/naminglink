// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 27a — Doctor~Doomsday, 43건)
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
  { id: "doctor", ctx: "의사를 사사로이 만남", text: "의사를 사석에서 친구로 만났다" },
  { id: "doctor", ctx: "의사에게 진찰을 받음", text: "의사에게 진찰을 받았다" },
  { id: "doctor", ctx: "의사가 살을 째는데 피가 나지 않음", text: "의사가 살을 째고 있는데 피가 나지 않았다" },
  { id: "dog", ctx: "사나운 개가 나타남", text: "개가 달려들어 물려는 듯했다" },
  { id: "dog", ctx: "개가 다정하게 굶", text: "개가 꼬리를 흔들며 다정하게 굴었다" },
  { id: "dog", ctx: "품 좋은 개를 기름", text: "훌륭한 개를 기르고 있었다" },
  { id: "dog", ctx: "사냥개가 뒤를 쫓음", text: "사냥개가 냄새를 맡으며 뒤를 따라왔다" },
  { id: "dog", ctx: "작은 개들을 봄", text: "자그마한 개들을 보았다" },
  { id: "dog", ctx: "개에게 물림", text: "개에게 깨물렸다" },
  { id: "dog", ctx: "여위고 더러운 개를 봄", text: "비쩍 여윈 개를 보았다" },
  { id: "dog", ctx: "개 품평회를 봄", text: "개 품평회를 보았다" },
  { id: "dog", ctx: "개 짖는 소리를 들음", text: "개들이 컹컹 짖어대는 것을 들었다" },
  { id: "dog", ctx: "개들이 여우 따위를 뒤쫓는 것을 봄", text: "개들이 여우를 뒤쫓는 것을 보았다" },
  { id: "dog", ctx: "곱게 꾸민 애완견을 봄", text: "곱게 꾸민 애완견을 보았다" },
  { id: "dog", ctx: "큰 맹견을 보고 몹시 놀람", text: "커다란 맹견을 보고 몹시 놀랐다" },
  { id: "dog", ctx: "개가 으르렁거리는 소리를 들음", text: "개가 으르렁거리며 위협하는 소리를 들었다" },
  { id: "dog", ctx: "개가 외로이 길게 우는 소리를 들음", text: "개가 길게 구슬프게 우는 소리를 들었다" },
  { id: "dog", ctx: "개들이 으르렁대며 서로 싸움", text: "개들이 서로 뒤엉켜 싸웠다" },
  { id: "dog", ctx: "개와 고양이가 사이좋다가 갑자기 싸움", text: "개와 고양이가 사이좋다가 갑자기 이빨을 드러냈다" },
  { id: "dog", ctx: "다정한 흰 개가 다가옴", text: "하얀 개가 다정하게 다가왔다" },
  { id: "dog", ctx: "머리가 여럿 달린 개를 봄", text: "머리가 여럿 달린 개를 보았다" },
  { id: "dog", ctx: "미친개를 봄", text: "광견이 날뛰는 것을 보았다" },
  { id: "dog", ctx: "미친개에게 물림", text: "광견에게 물려 침을 흘렸다" },
  { id: "dog", ctx: "개를 데리고 홀로 길을 감", text: "개를 데리고 홀로 길을 갔다" },
  { id: "dog", ctx: "개가 헤엄치는 것을 봄", text: "개가 물속에서 헤엄치는 것을 보았다" },
  { id: "dog", ctx: "개가 눈앞에서 고양이를 죽임", text: "개가 고양이를 죽였다" },
  { id: "dog", ctx: "개가 눈앞에서 뱀을 죽임", text: "개가 뱀을 잡았다" },
  { id: "dolphin", ctx: "돌고래를 봄", text: "돌고래를 보았다" },
  { id: "dome", ctx: "둥근지붕 위에서 낯선 경치를 내려다봄", text: "둥근지붕 위에서 낯선 경치를 내려다보았다" },
  { id: "dome", ctx: "둥근지붕을 멀리서 바라봄", text: "둥근지붕을 아득히 멀리서 바라보았다" },
  { id: "dominoes", ctx: "도미노 놀이에서 짐", text: "도미노 놀이에서 졌다" },
  { id: "dominoes", ctx: "도미노 놀이에서 이김", text: "도미노 놀이에서 이겼다" },
  { id: "donkey", ctx: "당나귀가 얼굴에 대고 욺", text: "당나귀가 얼굴에 대고 울었다" },
  { id: "donkey", ctx: "멀리서 들리는 당나귀 울음이 구슬픔", text: "멀리서 당나귀 울음이 구슬프게 들렸다" },
  { id: "donkey", ctx: "당나귀를 타고 낯선 땅을 다님", text: "당나귀를 타고 낯선 나라를 돌아다녔다" },
  { id: "donkey", ctx: "남이 당나귀를 타는 것을 봄", text: "다른 사람이 당나귀를 타는 것을 보았다" },
  { id: "donkey", ctx: "당나귀를 몲", text: "당나귀를 채찍으로 몰았다" },
  { id: "donkey", ctx: "당나귀에게 걷어차임", text: "당나귀에게 뒷발로 걷어차였다" },
  { id: "donkey", ctx: "고삐를 잡고 당나귀를 이끎", text: "고삐를 잡고 당나귀를 끌고 갔다" },
  { id: "donkey", ctx: "아이들이 당나귀를 타고 모는 것을 봄", text: "아이들이 당나귀를 타고 모는 것을 보았다" },
  { id: "donkey", ctx: "당나귀에서 떨어짐", text: "당나귀에서 굴러떨어졌다" },
  { id: "doomsday", ctx: "최후의 심판을 기다림", text: "살아남아 최후의 심판을 기다리고 있었다" },
  { id: "doomsday", ctx: "젊은 여성에게 최후의 심판 꿈이 나타남", text: "여자가 최후의 심판 꿈을 꾸었다" },
];

let notFound = 0;
let wrongCtx = 0;
for (const c of CASES) {
  const r = matchDream(c.text);
  const hit = r.matched.find((m) => m.id === c.id);
  if (!hit) {
    notFound += 1;
    console.log(`✗ 안 걸림  [${c.id}] "${c.text}" → ${r.matched.map((m) => m.id).join(",") || "(0개)"}`);
    continue;
  }
  const got = hit.meaning?.context ?? "(없음)";
  if (got !== c.ctx) {
    wrongCtx += 1;
    console.log(`△ 다른 뜻 [${c.id}] "${c.text}" → 「${got}」 (바란 것: 「${c.ctx}」)`);
  } else {
    console.log(`✓ [${c.id}] "${c.text}" → 「${got}」`);
  }
}
console.log(`\n시험 ${CASES.length}건 · 안 걸림 ${notFound}건 · 다른 뜻 ${wrongCtx}건`);
process.exit(notFound + wrongCtx > 0 ? 1 : 0);
