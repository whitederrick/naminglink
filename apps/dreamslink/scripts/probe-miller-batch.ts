// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 30 — Elixir of Life~Engineer, 46건)
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
  { id: "elixir-of-life", ctx: "불로장생약을 봄", text: "불로초를 보았다" },
  { id: "elopement", ctx: "혼인한 이가 눈이 맞아 달아남", text: "혼인한 몸으로 눈이 맞아 달아났다" },
  { id: "elopement", ctx: "혼인하지 않은 이가 눈이 맞아 달아남", text: "총각이 눈이 맞아 달아났다" },
  { id: "elopement", ctx: "정인이 남과 눈이 맞아 달아남", text: "애인이 다른사람과 눈이 맞아 달아났다" },
  { id: "elopement", ctx: "벗이 마뜩잖은 사람과 눈이 맞아 달아남", text: "친구가 마뜩잖은 사람과 눈이 맞아 달아났다" },
  { id: "eloquence", ctx: "말솜씨가 좋아짐", text: "말을 잘해서 술술 나왔다" },
  { id: "eloquence", ctx: "말솜씨로 남을 움직이지 못함", text: "웅변이 남에게 통하지 않았다" },
  { id: "embalming", ctx: "주검을 방부 처리하는 것을 봄", text: "주검을 방부 처리하는 것을 보았다" },
  { id: "embalming", ctx: "방부 처리된 제 모습을 봄", text: "방부 처리된 내가 누워 있었다" },
  { id: "embankment", ctx: "제방을 따라 수레를 몲", text: "둑을 따라 수레를 몰았다" },
  { id: "embankment", ctx: "제방 길을 탈 없이 끝까지 감", text: "둑길을 무사히 끝까지 갔다" },
  { id: "embankment", ctx: "제방을 따라 말을 타고 감", text: "강둑을 말을 타고 갔다" },
  { id: "embankment", ctx: "제방을 걸어서 감", text: "둑을 걸어서 갔다" },
  { id: "embrace", ctx: "지아비나 지어미를 시들하게 껴안음", text: "남편을 시들하게 껴안았다" },
  { id: "embrace", ctx: "살붙이를 껴안음", text: "친척을 껴안았다" },
  { id: "embrace", ctx: "정든 사이끼리 껴안음", text: "애인과 껴안았다" },
  { id: "embrace", ctx: "낯선 사람을 껴안음", text: "낯선 사람을 껴안았다" },
  { id: "embroidery", ctx: "여성이 수를 놓음", text: "여자가 수를 놓고 있었다" },
  { id: "embroidery", ctx: "혼인한 남자가 수놓은 것을 봄", text: "남자가 수놓은 것을 보았다" },
  { id: "embroidery", ctx: "정든 이가 수놓은 것을 봄", text: "애인이 수놓은 것을 보았다" },
  { id: "emerald", ctx: "에메랄드를 봄", text: "에메랄드가 빛나고 있었다" },
  { id: "emerald", ctx: "정혼한 이가 지닌 에메랄드를 봄", text: "약혼자가 지닌 에메랄드를 보았다" },
  { id: "emerald", ctx: "에메랄드를 삼", text: "에메랄드를 샀다" },
  { id: "king", ctx: "먼 길에서 다른 나라의 황제를 만남", text: "여행 중에 다른 나라의 황제를 만났다" },
  { id: "king", ctx: "임금을 의장 앞에서 마주함", text: "임금을 알현했다" },
  { id: "employee", ctx: "부리는 사람이 밉살스럽게 굶", text: "직원이 밉살스럽게 굴었다" },
  { id: "employee", ctx: "부리는 사람이 살갑게 굶", text: "일꾼이 살갑게 굴었다" },
  { id: "employment", ctx: "일자리 꿈을 꿈", text: "일자리가 걱정되어 벌이가 시원찮았다" },
  { id: "employment", ctx: "일자리를 잃고 놀고 있음", text: "일자리를 잃고 놀고 있었다" },
  { id: "employment", ctx: "남에게 일자리를 줌", text: "남에게 일자리를 주었다" },
  { id: "queen", ctx: "황후를 봄", text: "황후를 보았다" },
  { id: "queen", ctx: "황후와 황제를 함께 봄", text: "황후와 황제를 함께 보았다" },
  { id: "queen", ctx: "왕비가 불러 마시게 함", text: "왕비가 불러 술을 마시게 했다" },
  { id: "enchantment", ctx: "마법에 홀려 있음", text: "마법에 홀려 있었다" },
  { id: "enchantment", ctx: "마법을 뿌리침", text: "마법을 뿌리쳤다" },
  { id: "enchantment", ctx: "남을 홀리려 함", text: "남을 홀리려 했다" },
  { id: "encyclopedia", ctx: "백과사전을 뒤적임", text: "백과사전을 뒤적였다" },
  { id: "adversary", ctx: "적에게 헐뜯김", text: "적에게 험담을 들었다" },
  { id: "adversary", ctx: "적에게 짐", text: "적에게 졌다" },
  { id: "adversary", ctx: "적을 이겨냄", text: "적을 이겼다" },
  { id: "engagement", ctx: "약혼함", text: "약혼을 맺었다" },
  { id: "engagement", ctx: "약혼을 깸", text: "약혼을 깼다" },
  { id: "business-engagement", ctx: "일로 만날 약속을 함", text: "사업 약속을 잡았다" },
  { id: "engine", ctx: "기관차를 봄", text: "기관차가 달리는 것을 보았다" },
  { id: "engine", ctx: "고장 난 기관차를 봄", text: "고장 난 기관차를 보았다" },
  { id: "engineer", ctx: "기관사를 봄", text: "기관사를 보았다" },
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
