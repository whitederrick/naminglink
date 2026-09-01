// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 12 — `Captive`~`Castoria`, 60건)
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
  { id: "captive", ctx: "내가 포로가 됨", text: "내가 포로가 되어 갇혔다" },
  { id: "captive", ctx: "남을 사로잡음", text: "남을 사로잡아 포로로 데려왔다" },
  { id: "captive", ctx: "젊은 여성이 포로가 됨", text: "젊은 여자가 포로가 되었다" },

  { id: "captain", ctx: "지휘관을 봄", text: "군복을 입은 지휘관을 보았다" },
  { id: "captain", ctx: "연인이 지휘관임", text: "애인이 지휘관이었다" },

  { id: "railway-car", ctx: "객차를 봄", text: "객차가 여러 대 서 있었다" },
  { id: "railway-car", ctx: "객차에 올라탐", text: "객차에 올라탔다" },
  { id: "railway-car", ctx: "객차를 놓침", text: "객차를 놓쳤다" },
  { id: "railway-car", ctx: "객차에서 내림", text: "객차에서 내렸다" },
  { id: "railway-car", ctx: "침대차를 봄", text: "침대차를 보았다" },
  { id: "railway-car", ctx: "전차를 봄", text: "전차를 보았다" },
  { id: "railway-car", ctx: "객차를 타고 감", text: "객차를 타고 갔다" },
  { id: "railway-car", ctx: "달리는 전차의 발판에 서 있음", text: "달리는 전차에 매달려 있었다" },
  { id: "railway-car", ctx: "발판이 높은 곳에 있음", text: "객차 발판이 높은 곳에 있었다" },
  { id: "railway-car", ctx: "발판이 낮은 곳에 있음", text: "객차 발판이 낮은 곳에 있었다" },

  { id: "cardinal", ctx: "예복을 입은 추기경을 봄", text: "붉은 예복을 입은 추기경을 보았다" },
  { id: "cardinal", ctx: "여성이 추기경을 봄", text: "여자가 추기경을 보았다" },

  { id: "cards", ctx: "어울려 재미로 카드놀이를 함", text: "여럿이 재미로 카드놀이를 했다" },
  { id: "cards", ctx: "돈을 걸고 카드놀이를 함", text: "판돈을 걸고 카드놀이를 했다" },
  { id: "cards", ctx: "카드놀이에서 짐", text: "카드놀이에서 졌다" },
  { id: "cards", ctx: "카드놀이에서 이김", text: "카드놀이에서 이겼다" },
  { id: "cards", ctx: "연인이 카드놀이를 함", text: "애인이 카드놀이를 하고 있었다" },
  { id: "cards", ctx: "다이아몬드 짝패를 봄", text: "카드놀이에서 다이아몬드가 나왔다" },
  { id: "cards", ctx: "클로버 짝패를 봄", text: "카드놀이에서 클로버가 나왔다" },
  { id: "cards", ctx: "하트 짝패를 봄", text: "카드놀이에서 하트가 나왔다" },
  { id: "cards", ctx: "스페이드 짝패를 봄", text: "카드놀이에서 스페이드가 나왔다" },

  { id: "carnival", ctx: "카니발에 어울려 참여함", text: "카니발에 참여했다" },
  { id: "carnival", ctx: "가면을 쓰거나 광대 차림이 보이는 카니발", text: "가면을 쓴 사람들이 있는 카니발이었다" },

  { id: "cart", ctx: "수레를 봄", text: "수레를 보았다" },
  { id: "cart", ctx: "수레를 타고 감", text: "수레를 탔다" },
  { id: "cart", ctx: "수레를 몲", text: "수레를 몰았다" },
  { id: "cart", ctx: "연인끼리 함께 수레를 탐", text: "애인과 함께 수레를 탔다" },

  { id: "cartridge", ctx: "탄약통을 봄", text: "탄약통을 보았다" },
  { id: "cartridge", ctx: "탄약통이 비어 있음", text: "탄약통이 비어 있었다" },

  { id: "carving", ctx: "새고기를 썲", text: "새고기를 칼질해 썰었다" },
  { id: "carving", ctx: "고깃덩이를 썲", text: "고깃덩이를 칼질해 썰었다" },

  { id: "carpet", ctx: "바닥에 깔린 양탄자를 봄", text: "바닥에 깔린 양탄자를 보았다" },
  { id: "carpet", ctx: "양탄자 위를 걸음", text: "양탄자 위를 걸었다" },
  { id: "carpet", ctx: "양탄자를 삼", text: "양탄자를 샀다" },
  { id: "carpet", ctx: "양탄자를 팜", text: "양탄자를 팔았다" },
  { id: "carpet", ctx: "젊은 여성이 양탄자를 봄", text: "여자가 양탄자를 보았다" },

  { id: "carpenter", ctx: "목수가 일하는 것을 봄", text: "목수들이 일하는 것을 보았다" },

  { id: "carriage", ctx: "마차를 봄", text: "마차가 세워져 있었다" },
  { id: "carriage", ctx: "마차를 타고 감", text: "마차를 타고 갔다" },
  { id: "carriage", ctx: "마차를 찾아다님", text: "마차를 찾아다녔다" },

  { id: "carrot", ctx: "당근을 봄", text: "밭에서 당근을 보았다" },
  { id: "carrot", ctx: "당근을 먹음", text: "당근을 먹었다" },

  { id: "cask", ctx: "가득 찬 통을 봄", text: "술통이 가득 차 있었다" },
  { id: "cask", ctx: "통이 비어 있음", text: "술통이 비어 있었다" },

  { id: "cash", ctx: "빌린 현금을 잔뜩 가지고 있음", text: "현금을 잔뜩 가지고 있었다" },
  { id: "cash", ctx: "빌린 돈을 씀", text: "빌린 현금을 썼다" },

  { id: "cash-box", ctx: "가득 찬 금고를 봄", text: "금고가 가득 차 있었다" },
  { id: "cash-box", ctx: "금고가 비어 있음", text: "금고가 비어 있었다" },

  { id: "cashier", ctx: "출납원을 봄", text: "출납원을 보았다" },
  { id: "cashier", ctx: "남에게 빚이 있음", text: "출납원에게 빚이 있었다" },

  { id: "city-wall", ctx: "성 안에 있음", text: "성 안에 머물러 있었다" },
  { id: "city-wall", ctx: "덩굴에 덮인 오래된 성을 봄", text: "담쟁이덩굴에 덮인 오래된 성을 보았다" },
  { id: "city-wall", ctx: "성을 떠남", text: "성을 떠났다" },

  { id: "castor-oil", ctx: "피마자기름을 봄", text: "피마자기름을 보았다" },
  { id: "castoria", ctx: "캐스토리아를 봄", text: "캐스토리아를 보았다" },
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
