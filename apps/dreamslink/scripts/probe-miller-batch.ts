// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 255 — 기존 spider·spinning-thread·ghost·bobbin에 문맥을
// 보태고, 새 상징 다섯(spitting·spleen·splendor·splinter·sponge)을 세웠다.
// ghost·spinning-thread는 파일명 정렬(m255 < m5·m35) 때문에 기본값이 바뀌어
// FALLBACK_FIRST로 새 값을 얼렸고, bobbin은 옛 값을 그대로 얼렸다 — 넷 다
// 손댄 기존 상징의 옛 답이 그대로인지 재는 지킴 케이스를 함께 넣었다)
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
  // ── 배치 255 새 문맥 (19건, 「귀신이 말을 걸어옴」과 같은 그림인 스킵 1건 제외) ──
  { id: "spider", ctx: "거미줄을 봄", text: "거미줄이 잔뜩 쳐진 것을 보았다" },
  { id: "spinning-thread", ctx: "스스로 실을 잣고 있음", text: "스스로 실을 잣고 있었다" },
  { id: "ghost", ctx: "귀신을 봄", text: "귀신을 보았다" },
  { id: "ghost", ctx: "흰옷 입은 귀신을 봄", text: "흰옷 입은 귀신을 보았다" },
  { id: "ghost", ctx: "검은 옷 입은 귀신을 봄", text: "검은 옷을 입은 귀신을 보았다" },
  { id: "ghost", ctx: "귀신이 문이나 벽을 두드리는 소리를 들음", text: "귀신이 문을 두드리는 소리를 들었다" },
  { id: "ghost", ctx: "귀신이 휘장을 움직이거나 그 뒤에서 움직이는 것을 봄", text: "귀신이 휘장을 움직이는 것을 보았다" },
  { id: "ghost", ctx: "벗의 귀신이 방 안에 떠 있는 것을 봄", text: "벗의 귀신이 방 안에 떠다니는 것을 보았다" },
  { id: "ghost", ctx: "귀신에게서 나는 듯한 음악을 들음", text: "귀신에게서 나는 듯한 음악을 들었다" },
  { id: "spitting", ctx: "남이 나에게 침을 뱉음", text: "누가 나에게 침을 뱉었다" },
  { id: "spitting", ctx: "침을 뱉는 꿈을 꿈", text: "침을 뱉었다" },
  { id: "spleen", ctx: "지라(비장) 꿈을 꿈", text: "지라 꿈을 꾸었다" },
  { id: "splendor", ctx: "스스로 화려하게 삶", text: "스스로 화려하게 살았다" },
  { id: "splendor", ctx: "남이 화려하게 사는 것을 봄", text: "남이 화려하게 사는 것을 보았다" },
  { id: "splinter", ctx: "살에 나무 가시가 박힘", text: "살에 나무 가시가 박혔다" },
  { id: "splinter", ctx: "남의 집을 찾았다가 발에 가시가 박힘", text: "남의 집을 방문했다가 발에 가시가 박혔다" },
  { id: "sponge", ctx: "스펀지를 봄", text: "스펀지를 보았다" },
  { id: "sponge", ctx: "스펀지로 지움", text: "스펀지로 지웠다" },
  { id: "bobbin", ctx: "실이 잔뜩 감긴 보빈을 봄", text: "실이 잔뜩 감긴 보빈을 보았다" },
  { id: "bobbin", ctx: "보빈이 비어 있음", text: "보빈이 비어 있었다" },

  // ── 지킴 케이스 — 이번에 손댄 기존 상징의 옛 답이 그대로인지 ──────────────
  { id: "spider", ctx: "거미 꿈을 꿈", text: "거미 꿈을 꾸었다" },
  { id: "spider", ctx: "거미가 거미줄을 짓는 것을 봄", text: "거미가 거미줄을 짓는 것을 보았다" },
  { id: "spider", ctx: "거미를 죽임", text: "거미를 죽였다" },
  { id: "spider", ctx: "거미에게 물림", text: "거미에게 물렸다" },
  { id: "spider", ctx: "많은 거미가 거미줄에 매달려 있는 것을 봄", text: "많은 거미가 거미줄에 매달려 있는 것을 보았다" },
  { id: "spider", ctx: "큰 거미가 앞을 가로막음", text: "큰 거미가 앞을 가로막았다" },
  { id: "spider", ctx: "크고 작은 거미가 함께 다가오는 것을 봄", text: "크고 작은 거미가 함께 다가오는 것을 보았다" },
  { id: "spider", ctx: "큰 거미에게 물림", text: "커다란 거미에게 물렸다" },
  { id: "spider", ctx: "작은 거미에게 물림", text: "조그만 거미에게 물렸다" },
  { id: "spider", ctx: "큰 거미로부터 도망침", text: "큰 거미로부터 도망쳤다" },
  { id: "spider", ctx: "쫓아오던 거미를 죽임", text: "쫓아오던 거미를 죽였다" },
  { id: "spider", ctx: "죽인 거미가 되살아나 쫓아옴", text: "죽인 거미가 되살아나 쫓아왔다" },
  { id: "spider", ctx: "여성이 금빛 거미가 주위를 기어다니는 것을 봄", text: "여성이 금빛 거미가 주위를 기어다니는 것을 보았다" },
  { id: "ghost", ctx: "신과 귀신에게 맞음", text: "신과 귀신에게 맞았다" },
  { id: "ghost", ctx: "귀신과 싸움", text: "귀신과 싸웠다" },
  { id: "ghost", ctx: "어버이의 귀신을 봄", text: "어버이의 귀신을 보았다" },
  { id: "ghost", ctx: "죽은 벗의 귀신을 봄", text: "죽은 벗의 귀신을 보았다" },
  { id: "ghost", ctx: "귀신이 말을 걸어옴", text: "귀신이 말을 걸어왔다" },
  { id: "ghost", ctx: "여성이 귀신 꿈을 꿈", text: "여성이 귀신 꿈을 꾸었다" },
  { id: "ghost", ctx: "하늘에 천사나 귀신이 나타남", text: "하늘에 천사와 귀신이 나타났다" },
  { id: "ghost", ctx: "하늘 오른쪽에 여자 귀신 왼쪽에 남자 귀신이 보임", text: "하늘 오른쪽에 여자 귀신, 왼쪽에 남자 귀신이 보였다" },
  { id: "ghost", ctx: "여자 귀신이 긴 옷을 끌고 하늘을 떠감", text: "여자 귀신이 긴 옷을 끌고 하늘을 떠갔다" },
  { id: "ghost", ctx: "살아 있는 살붙이나 벗의 귀신을 봄", text: "살아 있는 벗의 귀신을 보았다" },
  { id: "spinning-thread", ctx: "실을 자아 길쌈함", text: "실을 자아 길쌈했다" },
  { id: "spinning-thread", ctx: "아마 실을 자음", text: "아마 실을 잣는 꿈을 꾸었다" },
  { id: "bobbin", ctx: "실패(보빈)를 보는 꿈을 꿈", text: "보빈 꿈을 꾸었다" },
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
