// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 44 — Hand~Harlequin, 47건)
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
  { id: "hand", ctx: "고운 손을 봄", text: "고운 손을 보았다" },
  { id: "hand", ctx: "밉고 일그러진 손을 봄", text: "일그러진 손을 보았다" },
  { id: "hand", ctx: "손에 피가 묻은 것을 봄", text: "손에 피가 묻어 있었다" },
  { id: "hand", ctx: "손을 다침", text: "손을 다쳤다" },
  { id: "hand", ctx: "몸에서 떨어져 나온 손을 봄", text: "잘린 손을 보았다" },
  { id: "hand", ctx: "손을 뎀", text: "손을 데었다" },
  { id: "hand", ctx: "손이 커진 것을 봄", text: "손이 커진 것을 보았다" },
  { id: "hand", ctx: "손이 작아진 것을 봄", text: "손이 작아졌다" },
  { id: "hand", ctx: "손이 더러워진 것을 봄", text: "손이 더러워져 있었다" },
  { id: "hand", ctx: "손을 씻음", text: "손을 씻었다" },
  { id: "hand", ctx: "여성이 제 손을 흐뭇하게 바라봄", text: "내 손을 흐뭇하게 바라보았다" },
  { id: "hand", ctx: "여성이 남의 손을 흐뭇하게 바라봄", text: "남의 손을 바라보았다" },
  { id: "hand", ctx: "여성이 남자에게 손을 잡힘", text: "남자에게 손을 잡혔다" },
  { id: "hand", ctx: "여성이 남에게 손등에 입맞춤을 받음", text: "손등에 입맞춤을 받았다" },
  { id: "hand", ctx: "손을 데지 않고 불을 다룸", text: "불길을 맨손으로 만졌다" },
  { id: "hand", ctx: "손이 묶임", text: "손이 묶였다" },
  { id: "hand", ctx: "묶인 손을 풀어냄", text: "묶인 손을 풀어냈다" },
  { id: "handbill", ctx: "전단지를 뿌리고 다님", text: "전단지를 뿌리고 다녔다" },
  { id: "handbill", ctx: "전단지를 찍어 냄", text: "전단지를 찍어 냈다" },
  { id: "shackles", ctx: "제 손에 수갑이 채워짐", text: "손목에 수갑이 채워졌다" },
  { id: "shackles", ctx: "남이 수갑을 찬 것을 봄", text: "남들이 수갑을 차고 있었다" },
  { id: "shackles", ctx: "수갑을 봄", text: "수갑을 보았다" },
  { id: "shackles", ctx: "수갑을 끊어 냄", text: "수갑을 부수고 벗어던졌다" },
  { id: "handkerchief", ctx: "손수건을 봄", text: "손수건이 놓여 있었다" },
  { id: "handkerchief", ctx: "손수건을 잃음", text: "손수건을 잃어버렸다" },
  { id: "handkerchief", ctx: "찢어진 손수건을 봄", text: "찢어진 손수건을 보았다" },
  { id: "handkerchief", ctx: "더러워진 손수건을 봄", text: "더러워진 손수건을 보았다" },
  { id: "handkerchief", ctx: "새하얀 손수건이 무더기로 있음", text: "새하얀 손수건이 무더기로 있었다" },
  { id: "handkerchief", ctx: "물들인 손수건을 봄", text: "알록달록 물들인 손수건을 보았다" },
  { id: "handkerchief", ctx: "비단 손수건을 봄", text: "비단 손수건을 보았다" },
  { id: "handkerchief", ctx: "처녀가 손수건을 흔들어 인사함", text: "손수건을 흔들어 작별 인사를 했다" },
  { id: "face", ctx: "제 얼굴이 잘생겨 보임", text: "내 얼굴이 잘생겨 보였다" },
  { id: "face", ctx: "남이 잘생겨 보임", text: "남들의 얼굴이 잘생겨 보였다" },
  { id: "handwriting", ctx: "제 필체를 알아봄", text: "제 필체를 알아보았다" },
  { id: "gallows", ctx: "교수형을 보려고 사람들이 몰려듦", text: "교수형을 보려고 사람들이 몰려들었다" },
  { id: "rabbit", ctx: "토끼가 달아나는 것을 봄", text: "토끼가 달아났다" },
  { id: "rabbit", ctx: "토끼를 붙잡음", text: "토끼를 붙잡았다" },
  { id: "rabbit", ctx: "토끼를 길들여 기름", text: "토끼를 길들여 길렀다" },
  { id: "rabbit", ctx: "죽은 토끼를 봄", text: "죽은 토끼를 보았다" },
  { id: "rabbit", ctx: "개에게 쫓기는 토끼를 봄", text: "개에게 쫓기는 토끼를 보았다" },
  { id: "rabbit", ctx: "토끼를 쏘아 잡음", text: "토끼를 총으로 쏘았다" },
  { id: "harem", ctx: "하렘을 거느림", text: "하렘을 거느렸다" },
  { id: "harem", ctx: "여성이 하렘에 머무는 사람이 됨", text: "하렘에 갇혀 머물렀다" },
  { id: "harem", ctx: "여성이 하렘에서 가장 아낌을 받음", text: "하렘에서 총애를 받았다" },
  { id: "acrobat", ctx: "어릿광대에게 속음", text: "어릿광대에게 속았다" },
  { id: "acrobat", ctx: "어릿광대를 봄", text: "어릿광대가 있었다" },
  { id: "acrobat", ctx: "어릿광대 옷을 입음", text: "어릿광대 차림을 하고 있었다" },
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
