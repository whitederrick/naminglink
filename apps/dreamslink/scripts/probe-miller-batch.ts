// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 48 — History~Honeysuckle, 37건)
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
  { id: "history", ctx: "역사책을 읽음", text: "역사책을 읽었다" },
  { id: "hives", ctx: "제 아이가 두드러기가 남", text: "내아이가 두드러기가 났다" },
  { id: "hives", ctx: "낯선 아이들이 두드러기가 난 것을 봄", text: "낯선 아이들이 두드러기가 났다" },
  { id: "hoe", ctx: "호미를 봄", text: "호미가 놓여 있었다" },
  { id: "hoe", ctx: "호미를 씀", text: "호미를 들고 썼다" },
  { id: "hoe", ctx: "여성이 호미로 김을 맴", text: "호미로 김을 매었다" },
  { id: "hoe", ctx: "정인에게 호미 꿈이 나타남", text: "정인이 호미를 들고 있었다" },
  { id: "hoe", ctx: "원수가 호미로 나를 내리침", text: "원수가 호미로 나를 내리쳤다" },
  { id: "pig", ctx: "돼지를 잡음", text: "돼지를 잡았다" },
  { id: "pig", ctx: "살지고 튼튼한 돼지를 봄", text: "살지고 튼튼한 돼지를 보았다" },
  { id: "pig", ctx: "여윈 돼지를 봄", text: "여윈 돼지를 보았다" },
  { id: "pig", ctx: "어미 돼지와 새끼들을 봄", text: "어미 돼지와 새끼들을 보았다" },
  { id: "pig", ctx: "돼지 울부짖는 소리를 들음", text: "돼지가 꽥꽥 울부짖었다" },
  { id: "pig", ctx: "제 돼지에게 먹이를 줌", text: "돼지에게 먹이를 주었다" },
  { id: "pig", ctx: "돼지를 사고팖", text: "돼지를 사고팔았다" },
  { id: "holiday", ctx: "휴일을 봄", text: "휴일을 보냈다" },
  { id: "holiday", ctx: "처녀가 휴일을 언짢아함", text: "휴일이 언짢았다" },
  { id: "communion", ctx: "성찬에 참여함", text: "성찬에 참여했다" },
  { id: "communion", ctx: "성찬에 빵도 술도 없음", text: "성찬에 빵도 술도 없었다" },
  { id: "communion", ctx: "성찬을 거절당했으나 떳떳함", text: "성찬을 거절당했지만 떳떳했다" },
  { id: "communion", ctx: "성찬을 거절당하고 떳떳하지 못함", text: "성찬을 거절당하고 부끄러웠다" },
  { id: "communion", ctx: "낯선 무리와 함께 성찬을 받음", text: "낯선 무리와 함께 성찬을 받았다" },
  { id: "abode", ctx: "옛 살던 집을 찾아감", text: "옛집을 찾아갔다" },
  { id: "abode", ctx: "옛 살던 집이 허물어져 있음", text: "옛집이 허물어져 있었다" },
  { id: "abode", ctx: "처녀가 허물어진 옛집을 봄", text: "아가씨가 허물어진 옛집을 보았다" },
  { id: "abode", ctx: "집에 가니 모든 것이 밝고 아늑함", text: "고향집이 밝고 아늑했다" },
  { id: "hominy", ctx: "옥수수죽을 봄", text: "옥수수죽을 보았다" },
  { id: "homesick", ctx: "고향을 그리워함", text: "고향이 그리웠다" },
  { id: "killing-someone", ctx: "남을 죽임", text: "남을 죽였다" },
  { id: "killing-someone", ctx: "제가 사람을 죽임", text: "내가 사람을 죽였다" },
  { id: "killing-someone", ctx: "벗이 스스로 목숨을 끊음", text: "벗이 스스로 목숨을 끊었다" },
  { id: "honey", ctx: "남과 함께 꿀을 먹음", text: "남과 함께 꿀을 나눠 먹었다" },
  { id: "honey", ctx: "꿀을 봄", text: "꿀이 놓여 있었다" },
  { id: "honey", ctx: "거른 꿀을 봄", text: "거른 꿀을 보았다" },
  { id: "honey", ctx: "꿀을 먹음", text: "꿀을 먹었다" },
  { id: "honey", ctx: "정인에게 꿀 꿈이 나타남", text: "정인이 꿀을 들고 있었다" },
  { id: "honeysuckle", ctx: "인동꽃을 보거나 땀", text: "인동꽃을 보았다" },
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
