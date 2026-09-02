// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 45 — Harlot~Head, 36건)
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
  { id: "harlot", ctx: "몸 파는 이와 어울림", text: "창녀와 함께 어울렸다" },
  { id: "harlot", ctx: "몸 파는 이와 짝을 맺음", text: "창녀와 혼인을 했다" },
  { id: "bridle", ctx: "번쩍이는 새 마구를 지님", text: "번쩍이는 새 마구를 지니고 있었다" },
  { id: "harp", ctx: "하프의 구슬픈 가락을 들음", text: "하프의 구슬픈 가락을 들었다" },
  { id: "harp", ctx: "부서진 하프를 봄", text: "부서진 하프를 보았다" },
  { id: "harp", ctx: "하프를 손수 켬", text: "하프를 손수 켰다" },
  { id: "harvest", ctx: "가을걷이 철을 봄", text: "가을걷이 무렵이었다" },
  { id: "harvest", ctx: "거둔 곡식이 넉넉함", text: "가을걷이가 푸짐했다" },
  { id: "harvest", ctx: "거둔 곡식이 시원찮음", text: "가을걷이가 시원찮았다" },
  { id: "hash", ctx: "다진 고기 요리를 먹음", text: "다진 고기 요리를 먹었다" },
  { id: "hash", ctx: "여성이 다진 고기 요리를 만듦", text: "다진 고기 요리를 만들었다" },
  { id: "hassock", ctx: "발받침을 봄", text: "발받침이 놓여 있었다" },
  { id: "hassock", ctx: "여성이 발받침 꿈을 꿈", text: "여자가 발받침을 보았다" },
  { id: "hat", ctx: "남자가 새 모자를 씀", text: "남자가 새 모자를 썼다" },
  { id: "hat", ctx: "여성이 곱고 새로운 모자를 씀", text: "여자가 고운 모자를 썼다" },
  { id: "hat", ctx: "바람에 모자가 날아감", text: "바람에 모자가 날아갔다" },
  { id: "axe", ctx: "손도끼를 봄", text: "손도끼를 보았다" },
  { id: "falcon", ctx: "매를 쏘아 맞힘", text: "매를 쏘아 맞혔다" },
  { id: "falcon", ctx: "처녀가 닭에게서 매를 쫓아냄", text: "닭에게서 매를 쫓아냈다" },
  { id: "falcon", ctx: "닭이 다치기 전에 매를 쫓아냄", text: "닭이 다치기 전에 매를 쫓았다" },
  { id: "falcon", ctx: "죽은 매를 봄", text: "죽은 매를 보았다" },
  { id: "falcon", ctx: "매를 향해 총을 쏨", text: "매를 향해 총을 겨누었다" },
  { id: "hay", ctx: "건초를 벰", text: "건초를 베었다" },
  { id: "hay", ctx: "갓 베어 놓은 건초밭을 봄", text: "갓베어 놓은 건초밭을 보았다" },
  { id: "hay", ctx: "건초를 실어 곳간에 들임", text: "건초를 곳간에 들였다" },
  { id: "hay", ctx: "건초를 실은 짐이 길을 지나감", text: "건초를 실은 짐이 거리를 지나갔다" },
  { id: "hay", ctx: "짐승에게 건초를 먹임", text: "짐승에게 건초를 먹였다" },
  { id: "head", ctx: "잘 생기고 반듯한 남의 머리를 봄", text: "반듯한 머리를 보았다" },
  { id: "head", ctx: "제 머리를 봄", text: "자기 머리를 보았다" },
  { id: "head", ctx: "몸에서 떨어져 피 흐르는 머리를 봄", text: "몸에서 떨어져나온 머리를 보았다" },
  { id: "head", ctx: "제 머리가 둘 이상인 것을 봄", text: "머리가 두개였다" },
  { id: "head", ctx: "머리가 아픔", text: "머리가 아팠다" },
  { id: "head", ctx: "부어오른 머리를 봄", text: "머리가 부어 있었다" },
  { id: "head", ctx: "아이의 머리를 봄", text: "아이의 머리를 보았다" },
  { id: "head", ctx: "짐승의 머리를 봄", text: "짐승 머리를 보았다" },
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
