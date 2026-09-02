// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 34 — Fiddle~Fireman, 46건)
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
  { id: "fiddle", ctx: "바이올린을 봄", text: "바이올린을 보았다" },
  { id: "field", ctx: "마른 대만 남은 밭을 봄", text: "마른 그루터기만 남은 밭을 보았다" },
  { id: "field", ctx: "푸르거나 곡식이 익은 밭을 봄", text: "곡식이 익은 밭을 보았다" },
  { id: "field", ctx: "갓 갈아엎은 밭을 봄", text: "갓 갈아엎은 밭을 보았다" },
  { id: "field", ctx: "써레질을 마쳐 씨 뿌릴 채비가 된 밭을 봄", text: "써레질을 마친 밭을 보았다" },
  { id: "fiend", ctx: "악귀와 마주침", text: "악귀와 마주쳤다" },
  { id: "fiend", ctx: "여성이 악귀 꿈을 꿈", text: "여자가 악귀 꿈을 꾸었다" },
  { id: "fiend", ctx: "악귀를 봄", text: "악귀를 보았다" },
  { id: "fiend", ctx: "악귀를 이김", text: "악귀를 물리쳤다" },
  { id: "flute", ctx: "피리 소리를 들음", text: "피리 소리를 들었다" },
  { id: "flute", ctx: "제가 피리를 붊", text: "내가 피리를 불었다" },
  { id: "flute", ctx: "여성이 피리 꿈을 꿈", text: "여자가 피리 꿈을 꾸었다" },
  { id: "fight", ctx: "싸움에 뛰어듦", text: "싸움에 뛰어들었다" },
  { id: "fight", ctx: "남이 싸우는 것을 봄", text: "남들이 싸우는 것을 보았다" },
  { id: "fight", ctx: "여성이 싸움 꿈을 꿈", text: "여성이 싸우는 꿈을 꾸었다" },
  { id: "fight", ctx: "처녀가 정인이 싸우는 것을 봄", text: "아가씨가 애인이 싸우는 것을 보았다" },
  { id: "fight", ctx: "싸움에서 짐", text: "싸움에서 졌다" },
  { id: "fight", ctx: "덤빈 자를 물리침", text: "싸움에서 덤빈 자를 물리쳤다" },
  { id: "fight", ctx: "두 사람이 총으로 싸우는 것을 봄", text: "두사람이 권총으로 싸우는 것을 보았다" },
  { id: "fig", ctx: "무화과를 먹음", text: "무화과를 먹었다" },
  { id: "fig", ctx: "무화과가 자라는 것을 봄", text: "무화과가 자라는 것을 보았다" },
  { id: "fig", ctx: "처녀가 무화과가 자라는 것을 봄", text: "아가씨가 무화과가 자라는 것을 보았다" },
  { id: "figure", ctx: "숫자를 봄", text: "숫자를 보았다" },
  { id: "filbert", ctx: "개암을 봄", text: "개암이 놓여 있었다" },
  { id: "filbert", ctx: "개암을 먹음", text: "개암을 먹었다" },
  { id: "file", ctx: "서류철을 봄", text: "서류철을 보았다" },
  { id: "file", ctx: "고지서와 중요한 서류를 갈무리해 둔 서류철을 봄", text: "고지서를 보관한 서류철을 보았다" },
  { id: "finger", ctx: "손가락이 더럽거나 긁혀 피가 남", text: "손가락이 긁혀 피가 났다" },
  { id: "finger", ctx: "손가락이 흰 고운 손을 봄", text: "손가락이 흰 고운 손을 보았다" },
  { id: "finger", ctx: "손가락이 잘려 나감", text: "손가락이 잘렸다" },
  { id: "fingernail", ctx: "더러운 손톱을 봄", text: "더러운 손톱을 보았다" },
  { id: "fingernail", ctx: "잘 손질된 손톱을 봄", text: "잘 손질된 손톱을 보았다" },
  { id: "fire", ctx: "불을 보되 데지 않음", text: "불을 보았는데 멀쩡했다" },
  { id: "fire", ctx: "제 집이 불타는 것을 봄", text: "우리 집이 불타는 것을 보았다" },
  { id: "fire", ctx: "장사하는 이가 제 가게가 타는 것을 지켜봄", text: "불이 나서 가게가 타는 것을 지켜보았다" },
  { id: "fire", ctx: "불을 끄면서 데지 않음", text: "불을 끄면서 데지 않았다" },
  { id: "fire", ctx: "불탄 가게의 잔해를 봄", text: "불탄 가게의 잔해를 보았다" },
  { id: "fire", ctx: "불을 지핌", text: "불을 지폈다" },
  { id: "fire", ctx: "큰불이 난 것을 봄", text: "대화재가 난 것을 보았다" },
  { id: "firebrand", ctx: "불붙은 나뭇가지를 봄", text: "횃불을 보았다" },
  { id: "fire-budget", ctx: "불 끄는 데 드는 돈을 헤아림", text: "소방 비용을 헤아렸다" },
  { id: "fire-engine", ctx: "소방차를 봄", text: "소방차가 달려왔다" },
  { id: "fire-engine", ctx: "고장 난 소방차를 봄", text: "고장 난 소방차를 보았다" },
  { id: "fire-engine", ctx: "처녀가 소방차를 타고 감", text: "아가씨가 소방차를 타고 갔다" },
  { id: "fireman", ctx: "소방수를 봄", text: "소방수를 보았다" },
  { id: "fireman", ctx: "처녀가 다친 소방수를 봄", text: "아가씨가 다친 소방수를 보았다" },
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
