// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 24 — Cymbal~Death, 39건)
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
  { id: "cymbal", ctx: "심벌즈 소리를 들음", text: "심벌즈 소리를 들었다" },
  { id: "dagger", ctx: "단도를 봄", text: "번쩍이는 단도를 보았다" },
  { id: "dagger", ctx: "남의 손에서 단도를 빼앗음", text: "남의 손에서 단도를 빼앗았다" },
  { id: "dahlia", ctx: "싱싱하고 환한 달리아를 봄", text: "싱싱한 달리아를 보았다" },
  { id: "dairy", ctx: "낙농장 꿈을 꿈", text: "낙농장 꿈을 꾸었다" },
  { id: "daisy", ctx: "데이지 한 다발을 봄", text: "데이지 한 다발을 보았다" },
  { id: "daisy", ctx: "데이지가 활짝 핀 들에 있음", text: "데이지가 활짝 핀 들판에 있었다" },
  { id: "daisy", ctx: "철 아닌 때에 데이지를 봄", text: "제철이 아닌 때에 데이지를 보았다" },
  { id: "damask-rose", ctx: "잎과 꽃이 무성한 다마스크 장미 덤불을 봄", text: "잎이 무성한 다마스크 장미 덤불을 보았다" },
  { id: "damask-rose", ctx: "연인이 이 장미를 머리에 꽂아 줌", text: "애인이 다마스크 장미를 내 머리에 꽂아 주었다" },
  { id: "damask-rose", ctx: "여성이 봄에 다마스크 장미 다발을 받음", text: "여자가 봄에 다마스크 장미 다발을 받았다" },
  { id: "damask-rose", ctx: "여성이 겨울에 다마스크 장미 다발을 받음", text: "여자가 한겨울에 다마스크 장미 다발을 받았다" },
  { id: "damson", ctx: "자줏빛 열매가 그득한 나무를 봄", text: "가지마다 자줏빛 댐슨 자두가 그득한 나무를 보았다" },
  { id: "damson", ctx: "댐슨 자두를 먹음", text: "댐슨 자두를 먹었다" },
  { id: "dance", ctx: "즐거운 아이들이 춤추는 것을 봄", text: "즐거운 아이들이 춤추는 것을 보았다" },
  { id: "dance", ctx: "나이 든 이들이 춤추는 것을 봄", text: "나이 지긋한 어른들이 춤추는 것을 보았다" },
  { id: "dance", ctx: "제가 춤을 춤", text: "내가 스스로 춤을 췄다" },
  { id: "dancing-master", ctx: "춤선생을 봄", text: "춤선생을 만났다" },
  { id: "dancing-master", ctx: "젊은 여성이 제 연인이 춤선생인 꿈을 꿈", text: "여자가 애인이 춤선생인 꿈을 꾸었다" },
  { id: "dandelion", ctx: "푸른 잎 사이에 민들레가 핀 것을 봄", text: "푸른 잎 사이에 민들레가 핀 것을 보았다" },
  { id: "danger", ctx: "위험한 자리에 놓였다가 벗어남", text: "위험한 자리에 놓였다가 겨우 모면했다" },
  { id: "danger", ctx: "위험에서 벗어나지 못하고 죽거나 다침", text: "위험에서 다쳤다" },
  { id: "dark", ctx: "길을 가다 어둠이 덮침", text: "길을 가다 어둠이 덮쳤다" },
  { id: "dark", ctx: "어둠 속에서 벗이나 아이를 잃음", text: "어둠 속에서 아이를 잃어버렸다" },
  { id: "dates", ctx: "나무에 달린 대추야자를 봄", text: "나무에 달린 대추야자를 보았다" },
  { id: "dates", ctx: "말려 파는 대추야자를 먹음", text: "말린 대추야자를 사서 먹었다" },
  { id: "daughter", ctx: "딸 꿈을 꿈", text: "딸을 만났다" },
  { id: "daughter", ctx: "딸이 제 뜻에 맞지 않음", text: "딸이 내 뜻에 맞지 않았다" },
  { id: "daughter-in-law", ctx: "며느리 꿈을 꿈", text: "며느리 꿈을 꾸었다" },
  { id: "david", ctx: "다윗 꿈을 꿈", text: "성경의 다윗 꿈을 꾸었다" },
  { id: "day", ctx: "환한 낮 꿈을 꿈", text: "환한 낮 동안의 꿈을 꾸었다" },
  { id: "day", ctx: "흐리거나 구름 낀 낮을 봄", text: "구름이 낀 흐린 낮 동안이었다" },
  { id: "daybreak", ctx: "날이 밝아 오는 것을 봄", text: "새벽에 날이 밝아 오는 것을 지켜보았다" },
  { id: "daybreak", ctx: "새벽 빛이 흐릿하고 기괴함", text: "새벽 빛이 흐릿하고 기괴했다" },
  { id: "dead-person", ctx: "죽은 아버지를 보고 이야기함", text: "돌아가신 아버지를 보고 이야기했다" },
  { id: "dead-person", ctx: "죽은 어머니를 봄", text: "돌아가신 어머니를 보았다" },
  { id: "dead-person", ctx: "죽은 형제나 살붙이·벗을 봄", text: "돌아가신 형제를 보았다" },
  { id: "death", ctx: "가까운 이가 죽어 있는 것을 봄", text: "가까운 식구가 죽어 있는 것을 보았다" },
  { id: "death", ctx: "벗이나 살붙이가 죽었다는 말을 들음", text: "벗이 죽었다는 소식을 들었다" },
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
