// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 264 — 새 상징 여섯(sweetheart·sweet-oil·
// sweet-taste·swelling·sybil·syringe)을 세우고, 기존 cheese·music·
// church 셋에 문맥을 보탰다. Symphony·Synagogue 는 원문 각주가
// 각각 "See Music"·"See Church"로 가리켜 그대로 따랐다. Sweetheart
// 의 각주는 "See Lover, Hugging, and Kissing"인데 그 셋이 아직
// 사전에 없어(L이 훨씬 앞선 자리인데도 아직 안 들어와 있었다) 새로
// 세웠다 — 나중에 Lover 표제어 차례가 오면 병합 여부를 다시 볼 것.
// cheese·music·church 셋 다 기존 정의가 더 앞선 m 파일에서 와
// 기본값 플립이 없었다.
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
  // ── 배치 264 새 문맥 (16건) ──────────────────────────────────────────────
  { id: "sweetheart", ctx: "애인이 상냥하고 외모도 마음에 듦", text: "애인이 상냥하고 외모도 마음에 들었다" },
  { id: "sweetheart", ctx: "애인이 그렇지 않게 보임", text: "애인이 그렇지 않게 보였다" },
  { id: "sweetheart", ctx: "애인이 아프거나 괴로워하는 것을 봄", text: "애인이 아프거나 괴로워하는 것을 보았다" },
  { id: "sweetheart", ctx: "애인이 주검이 되어 있음", text: "애인이 주검이 되어 있었다" },
  { id: "sweet-oil", ctx: "단맛 나는 기름 꿈을 꿈", text: "단맛 나는 기름 꿈을 꾸었다" },
  { id: "sweet-taste", ctx: "입안에 단맛이 남", text: "입안에 단맛이 남았다" },
  { id: "sweet-taste", ctx: "입안의 단맛을 없애려 애씀", text: "입안의 단맛을 없애려 애썼다" },
  { id: "swelling", ctx: "스스로 부어오른 것을 봄", text: "스스로 부어오른 것을 보았다" },
  { id: "swelling", ctx: "남이 부어오른 것을 봄", text: "남이 부어오른 것을 보았다" },
  { id: "cheese", ctx: "스위스 치즈 꿈을 꿈", text: "스위스 치즈 꿈을 꾸었다" },
  { id: "sybil", ctx: "여자 예언자 꿈을 꿈", text: "여자 예언자 꿈을 꾸었다" },
  { id: "music", ctx: "교향곡 꿈을 꿈", text: "교향곡 꿈을 꾸었다" },
  { id: "church", ctx: "원수가 재물로 가는 문턱을 막고 있음을 뜻하는 유대교 회당을 봄", text: "유대교 회당을 보았는데 오르면 원수를 이겨낼 것 같았다" },
  { id: "church", ctx: "유대교 회당의 히브리어 글귀를 읽음", text: "유대교 회당의 히브리어 글귀를 읽었다" },
  { id: "syringe", ctx: "주사기 꿈을 꿈", text: "주사기 꿈을 꾸었다" },
  { id: "syringe", ctx: "부서진 주사기를 봄", text: "부서진 주사기를 보았다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ────────────
  { id: "cheese", ctx: "치즈를 먹음", text: "치즈를 먹었다" },
  { id: "music", ctx: "남이 풍악을 울림", text: "남이 풍악을 울렸다" },
  { id: "church", ctx: "멀리 있는 교회를 봄", text: "멀리 있는 교회를 보았다" },
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
