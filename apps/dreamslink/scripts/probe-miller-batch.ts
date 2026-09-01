// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 18 — Collar~Concubine, 44건)
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
  { id: "collar", ctx: "옷깃을 두름", text: "옷깃을 둘렀다" },
  { id: "collar", ctx: "여성이 옷깃을 봄", text: "여자가 옷깃을 보았다" },
  { id: "college", ctx: "대학을 봄", text: "멀리서 대학 건물을 보았다" },
  { id: "college", ctx: "대학으로 돌아감", text: "대학으로 돌아갔다" },
  { id: "colliery", ctx: "탄광에서 광부를 봄", text: "탄광에서 광부들을 보았다" },
  { id: "colliery", ctx: "탄광의 지분을 가짐", text: "탄광의 지분을 가지고 있었다" },
  { id: "colliery", ctx: "석탄을 캠", text: "탄광에서 석탄을 캐고 있었다" },
  { id: "collision", ctx: "충돌을 봄", text: "충돌 사고를 보았다" },
  { id: "collision", ctx: "젊은 여성이 충돌을 봄", text: "여자가 충돌을 보았다" },
  { id: "combat", ctx: "격투를 벌임", text: "격투를 벌였다" },
  { id: "combat", ctx: "싸우는 이들을 봄", text: "격투에서 싸우는 이들을 보았다" },
  { id: "combing-one-s-hair", ctx: "머리를 빗음", text: "빗으로 머리를 빗질했다" },
  { id: "combing-one-s-hair", ctx: "머리를 곱게 빗음", text: "머리를 곱게 빗었다" },
  { id: "comedy", ctx: "가벼운 연극을 봄", text: "가벼운 연극을 보았다" },
  { id: "comedy", ctx: "희극을 봄", text: "웃긴 코미디를 보았다" },
  { id: "comet", ctx: "하늘을 가르는 혜성을 봄", text: "혜성이 하늘을 가르며 지나갔다" },
  { id: "comet", ctx: "젊은이가 혜성을 봄", text: "청년이 혜성을 보았다" },
  { id: "comic-songs", ctx: "우스운 노래를 들음", text: "우스운 노래를 들었다" },
  { id: "comic-songs", ctx: "우스운 노래를 부름", text: "우스운 노래를 불렀다" },
  { id: "command", ctx: "명령을 받음", text: "명령을 받았다" },
  { id: "command", ctx: "명령을 내림", text: "명령을 내렸다" },
  { id: "command", ctx: "으스대며 명령함", text: "으스대며 명령을 했다" },
  { id: "commandment", ctx: "계명을 받음", text: "계명을 받았다" },
  { id: "commandment", ctx: "십계명을 읽거나 들음", text: "십계명을 읽었다" },
  { id: "commerce", ctx: "상업에 몸담음", text: "상업에 몸담고 있었다" },
  { id: "commerce", ctx: "상업계가 어두운 것을 봄", text: "상업이 어두운 것을 보았다" },
  { id: "committee", ctx: "위원회를 봄", text: "위원회가 열린 것을 보았다" },
  { id: "committee", ctx: "위원회가 나를 찾아옴", text: "위원회가 나를 찾아왔다" },
  { id: "companion", ctx: "아내나 남편을 봄", text: "동반자인 아내를 보았다" },
  { id: "companion", ctx: "어울려 노는 동무들을 봄", text: "동반자들과 어울려 놀았다" },
  { id: "compass", ctx: "나침반을 봄", text: "나침반을 손에 들고 있었다" },
  { id: "compass", ctx: "뱃사람의 나침반 바늘을 봄", text: "뱃사람의 나침반 바늘을 보았다" },
  { id: "compass", ctx: "나침반이 엉뚱한 곳을 가리킴", text: "나침반이 엉뚱한 곳을 가리켰다" },
  { id: "completion", ctx: "일을 끝마침", text: "맡은 일을 끝마쳤다" },
  { id: "completion", ctx: "옷 한 벌을 지어 마침", text: "옷을 다 지어 끝마쳤다" },
  { id: "completion", ctx: "여행을 마침", text: "여행을 끝마쳤다" },
  { id: "complexion", ctx: "낯빛이 고움", text: "낯빛이 고왔다" },
  { id: "complexion", ctx: "낯빛이 나쁘고 어두움", text: "낯빛이 어두웠다" },
  { id: "composing", ctx: "조판 스틱을 봄", text: "식자 스틱을 보았다" },
  { id: "concert", ctx: "격조 높은 음악회를 봄", text: "격조 높은 음악회를 보았다" },
  { id: "concert", ctx: "여느 음악회를 봄", text: "여느 음악회를 보았다" },
  { id: "concubine", ctx: "첩과 함께 있음", text: "첩과 함께 있었다" },
  { id: "concubine", ctx: "여성이 스스로 첩이 됨", text: "여자가 스스로 첩이 되었다" },
  { id: "concubine", ctx: "첩이 배신함", text: "첩이 배신했다" },
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
