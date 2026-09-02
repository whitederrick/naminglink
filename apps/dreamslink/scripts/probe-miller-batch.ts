// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 32 — Fables~Father-in-law, 54건)
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
  { id: "fable", ctx: "우화를 읽거나 들려줌", text: "우화를 읽었다" },
  { id: "fable", ctx: "젊은이가 우화를 봄", text: "젊은이가 우화를 보았다" },
  { id: "fable", ctx: "믿음에 관한 이야기를 듣거나 들려줌", text: "믿음에 관한 우화를 들려주었다" },
  { id: "face", ctx: "젊은이가 밉상인 얼굴을 봄", text: "밉상인 얼굴을 보았다" },
  { id: "face", ctx: "정인의 얼굴이 늙어 보임", text: "애인의 얼굴이 늙어 보였다" },
  { id: "face", ctx: "낯설고 섬뜩한 얼굴을 봄", text: "낯설고 섬뜩한 얼굴을 보았다" },
  { id: "face", ctx: "제 얼굴을 봄", text: "자기 얼굴을 보았다" },
  { id: "face", ctx: "거울에 비친 제 얼굴을 봄", text: "거울에 비친 얼굴을 보았다" },
  { id: "face", ctx: "얼굴에 검은 부스럼이 남", text: "얼굴에 검은 부스럼이 났다" },
  { id: "fagot", ctx: "나뭇단에서 짙은 연기가 오름", text: "나뭇단에서 연기가 자욱하게 올랐다" },
  { id: "fagot", ctx: "나뭇단이 환하게 타오름", text: "나뭇단이 환하게 타올랐다" },
  { id: "fagot", ctx: "타는 나뭇단 위를 걷다 뎀", text: "타는 나뭇단 위를 걷다가 데었다" },
  { id: "fagot", ctx: "타는 나뭇단 위를 데지 않고 건넘", text: "타는 나뭇단 위를 데지 않고 건넜다" },
  { id: "failure", ctx: "정든 이가 구애에 실패함", text: "구애에 실패했다" },
  { id: "failure", ctx: "처녀가 제 삶이 실패로 끝나리라 여김", text: "아가씨가 제 삶이 실패로 끝나리라 여겼다" },
  { id: "failure", ctx: "장사하는 이가 일을 그르침", text: "장사에서 실패했다" },
  { id: "fainting", ctx: "기절함", text: "내가 기절해 쓰러졌다" },
  { id: "fainting", ctx: "처녀가 기절함", text: "아가씨가 기절했다" },
  { id: "marketplace", ctx: "장이 선 곳에 감", text: "장이 열린 곳에 갔다" },
  { id: "marketplace", ctx: "처녀가 장이 선 곳에 감", text: "아가씨가 장이 열린 곳에 갔다" },
  { id: "fairy", ctx: "요정을 봄", text: "요정을 보았다" },
  { id: "faithless", ctx: "벗이 마음을 저버림", text: "벗이 마음이 변했다" },
  { id: "faithless", ctx: "정인이 마음을 저버림", text: "애인이 마음이 변했다" },
  { id: "fakir", ctx: "탁발승을 봄", text: "탁발승을 보았다" },
  { id: "falcon", ctx: "송골매를 봄", text: "송골매를 보았다" },
  { id: "falcon", ctx: "처녀가 송골매를 봄", text: "아가씨가 송골매를 보았다" },
  { id: "fall", ctx: "떨어져 몹시 놀람", text: "높은 데서 떨어졌다가 몹시 놀랐다" },
  { id: "fall", ctx: "떨어져 다침", text: "떨어졌다가 다쳤다" },
  { id: "fame", ctx: "제가 이름난 사람이 됨", text: "내가 유명해졌다" },
  { id: "fame", ctx: "이름난 사람을 봄", text: "이름난 사람들을 보았다" },
  { id: "famine", ctx: "기근이 든 것을 봄", text: "기근이 들었다" },
  { id: "famine", ctx: "적이 기근으로 죽어 가는 것을 봄", text: "적들이 기근으로 죽어가고 있었다" },
  { id: "famish", ctx: "제가 굶주림", text: "내가 굶주렸다" },
  { id: "famish", ctx: "남이 굶주리는 것을 봄", text: "남들이 굶주리는 것을 보았다" },
  { id: "family", ctx: "집안 식구가 화목하고 즐거움", text: "가족이 화목하고 즐거웠다" },
  { id: "family", ctx: "집안에 병이나 다툼이 있음", text: "가족이 다툼이 있었다" },
  { id: "fan", ctx: "부채를 봄", text: "부채가 놓여 있었다" },
  { id: "fan", ctx: "처녀가 부채질을 하거나 받음", text: "아가씨가 부채질을 했다" },
  { id: "fan", ctx: "낡은 부채를 잃음", text: "낡은 부채를 잃었다" },
  { id: "adieu", ctx: "작별을 고함", text: "작별을 고했다" },
  { id: "adieu", ctx: "처녀가 정인에게 작별을 고함", text: "아가씨가 애인에게 작별을 고했다" },
  { id: "adieu", ctx: "작별하면서 슬프지 않음", text: "작별하면서 담담했다" },
  { id: "farm", ctx: "농장에서 살고 있음", text: "농장에서 살고 있었다" },
  { id: "farm", ctx: "농장을 삼", text: "농장을 샀다" },
  { id: "farm", ctx: "농장에 들름", text: "농장에 들렀다" },
  { id: "corpulence", ctx: "제 몸이 뚱뚱해짐", text: "내가 살이 쪘다" },
  { id: "corpulence", ctx: "남이 뚱뚱한 것을 봄", text: "남이 뚱뚱한 것을 보았다" },
  { id: "fates", ctx: "운명의 여신을 봄", text: "운명의 여신을 보았다" },
  { id: "fates", ctx: "처녀가 운명을 가지고 놂", text: "아가씨가 운명을 가지고 놀았다" },
  { id: "father", ctx: "아버지를 봄", text: "살아 계신 아버지를 만났다" },
  { id: "father", ctx: "돌아가신 아버지를 봄", text: "돌아가신 아버지를 보았다" },
  { id: "father", ctx: "처녀가 돌아가신 아버지를 봄", text: "아가씨가 돌아가신 아버지를 보았다" },
  { id: "father-in-law", ctx: "시아버지를 봄", text: "시아버지를 만났다" },
  { id: "father-in-law", ctx: "시아버지가 성하고 밝은 낯으로 있음", text: "시아버지가 밝은 낯으로 있었다" },
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
