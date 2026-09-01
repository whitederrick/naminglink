// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 28 — Drouth~Dynamo, 45건)
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
  { id: "drought", ctx: "가뭄이 듦", text: "가뭄이 들어 땅이 갈라져 있었다" },
  { id: "drowning", ctx: "물에 빠져 죽음", text: "물에 빠져 죽었다" },
  { id: "drowning", ctx: "물에 빠졌다가 구조됨", text: "물에 빠졌다가 구조되었다" },
  { id: "drowning", ctx: "물에 빠진 남을 건지러 감", text: "물에 빠진 사람을 구하러 뛰어들었다" },
  { id: "drowning", ctx: "처녀가 정인이 물에 빠져 죽는 것을 봄", text: "애인이 물에 빠져 죽는 것을 보았다" },
  { id: "drum", ctx: "북이 낮게 울리는 소리를 들음", text: "북이 낮게 둔하게 울리는 소리를 들었다" },
  { id: "drum", ctx: "북을 봄", text: "북을 보았다" },
  { id: "drum", ctx: "북을 침", text: "북을 두드렸다" },
  { id: "drunk", ctx: "독한 술에 취함", text: "독한 술에 취했다" },
  { id: "drunk", ctx: "포도주에 취함", text: "포도주에 취했다" },
  { id: "drunk", ctx: "남이 취해 있는 것을 봄", text: "사람들이 술에 취해 있는 것을 보았다" },
  { id: "wild-duck", ctx: "맑은 시내에 물오리가 있음", text: "맑은 시내에 물오리가 떠 있었다" },
  { id: "wild-duck", ctx: "물오리가 집 안으로 들어옴", text: "물오리가 집 안으로 들어왔다" },
  { id: "duck", ctx: "흰 오리가 농가 둘레에 있음", text: "흰 오리가 농가 마당에 있었다" },
  { id: "duck", ctx: "오리를 사냥함", text: "오리를 사냥했다" },
  { id: "duck", ctx: "오리가 총에 맞는 것을 봄", text: "오리가 총에 맞는 것을 보았다" },
  { id: "duck", ctx: "오리가 나는 것을 봄", text: "오리가 하늘을 날아가는 것을 보았다" },
  { id: "duck", ctx: "오리를 잡음", text: "오리를 손으로 붙잡았다" },
  { id: "duet", ctx: "이중주를 켜는 소리를 들음", text: "이중주를 연주하는 소리를 들었다" },
  { id: "duet", ctx: "두 사람이 함께 부르는 노래를 들음", text: "이중창을 부르는 노래를 들었다" },
  { id: "dulcimer", ctx: "양금을 봄", text: "양금을 보았다" },
  { id: "dumb", ctx: "말을 못 하게 됨", text: "말을 못 했다" },
  { id: "dumb", ctx: "말을 못 하게 됨", text: "말문이 막혔다" },
  { id: "dun", ctx: "빚 독촉을 받음", text: "빚 독촉을 받았다" },
  { id: "prison", ctx: "지하 감옥에 갇혀 있음", text: "지하 감옥에 갇혀 있었다" },
  { id: "prison", ctx: "여성이 지하 감옥에 갇혀 있음", text: "여자가 지하 감옥에 갇혀 있었다" },
  { id: "prison", ctx: "불이 밝혀진 지하 감옥을 봄", text: "불이 밝혀진 지하 감옥을 보았다" },
  { id: "prison", ctx: "감옥이 무너짐", text: "감옥이 무너졌다" },
  { id: "manure", ctx: "거름더미를 봄", text: "거름더미를 보았다" },
  { id: "manure", ctx: "처녀가 거름더미를 봄", text: "처녀가 거름더미를 보았다" },
  { id: "dusk", ctx: "땅거미가 짐", text: "땅거미가 졌다" },
  { id: "dust", ctx: "먼지를 뒤집어씀", text: "먼지를 뒤집어썼다" },
  { id: "dust", ctx: "처녀가 먼지를 뒤집어씀", text: "아가씨가 먼지를 뒤집어썼다" },
  { id: "dust", ctx: "먼지를 털어 냄", text: "먼지를 털어 냈다" },
  { id: "dwarf", ctx: "몸이 반듯하고 보기 좋은 키 작은 사람을 봄", text: "몸이 반듯한 난쟁이를 보았다" },
  { id: "dwarf", ctx: "벗이 키가 작아진 것을 봄", text: "친구가 난쟁이처럼 작아진 것을 보았다" },
  { id: "dwarf", ctx: "흉하고 끔찍한 모습의 키 작은 사람을 봄", text: "흉하고 끔찍한 난쟁이를 보았다" },
  { id: "dye", ctx: "천을 푸르게나 붉게나 금빛으로 물들임", text: "천을 붉게 물들였다" },
  { id: "dye", ctx: "천을 검게나 희게 물들임", text: "천을 검게 물들였다" },
  { id: "death", ctx: "사나운 들짐승이 죽어 가는 것을 봄", text: "사나운 맹수가 죽어 가는 것을 보았다" },
  { id: "death", ctx: "집짐승이 죽어 가는 것을 봄", text: "집짐승이 죽어 가는 것을 보았다" },
  { id: "dynamite", ctx: "다이너마이트를 봄", text: "다이너마이트를 보았다" },
  { id: "dynamite", ctx: "다이너마이트에 놀람", text: "다이너마이트에 놀랐다" },
  { id: "dynamo", ctx: "발전기를 봄", text: "발전기를 보았다" },
  { id: "dynamo", ctx: "고장 난 발전기를 봄", text: "고장 난 발전기를 보았다" },
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
