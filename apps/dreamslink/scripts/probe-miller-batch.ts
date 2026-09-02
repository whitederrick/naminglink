// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 54 — Hounds~Hurt, 17건)
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
  { id: "embrace", ctx: "껴안음", text: "누군가를 껴안았다" },
  { id: "embrace", ctx: "여성이 남자를 껴안음", text: "여자가 남자를 껴안았다" },
  { id: "embrace", ctx: "지어미가 남편 아닌 이를 껴안음", text: "남편이 아닌 사람을 껴안았다" },
  { id: "hunting", ctx: "사냥을 함", text: "사냥을 했다" },
  { id: "famish", ctx: "배가 고픔", text: "배가 고팠다" },
  { id: "dog", ctx: "사냥개가 사냥에 나선 것을 봄", text: "사냥개가 사냥에 나섰다" },
  { id: "dog", ctx: "여성이 사냥개 꿈을 꿈", text: "여자가 사냥개를 보았다" },
  { id: "housekeeper", ctx: "제가 가정부가 됨", text: "내가 가정부가 되었다" },
  { id: "housekeeper", ctx: "가정부를 들임", text: "가정부를 들였다" },
  { id: "hunchback", ctx: "등이 굽은 사람을 봄", text: "등이 굽은 사람을 보았다" },
  { id: "hurt", ctx: "남을 다치게 함", text: "남을 다치게 했다" },
  { id: "hurt", ctx: "제가 다침", text: "내가 다쳤다" },

  // 이 배치가 기존 판별어를 좁힌 자리 — **옛 답이 그대로인지** 함께 잰다.
  { id: "embrace", ctx: "지아비나 지어미를 시들하게 껴안음", text: "지아비를 시들하게 껴안았다" },
  { id: "famish", ctx: "제가 굶주림", text: "내가 굶주렸다" },
  { id: "hunting", ctx: "숲속에서 사냥을 함", text: "숲속에서 사냥을 했다" },
  { id: "dog", ctx: "사냥개가 뒤를 쫓음", text: "사냥개가 냄새를 맡고 뒤를 따라왔다" },
  { id: "horseshoe", ctx: "편자를 봄", text: "편자가 반짝이고 있었다" },
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
