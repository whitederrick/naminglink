// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 42 — Grease~Hail, 36건)
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
  { id: "oil", ctx: "기름을 먹음", text: "기름을 먹었다" },
  { id: "oil", ctx: "기름 속에 있음", text: "기름 속에 빠져 범벅이 되었다" },
  { id: "greek", ctx: "그리스어를 읽음", text: "그리스어를 읽었다" },
  { id: "greek", ctx: "그리스어를 읽지 못함", text: "그리스어를 읽지못했다" },
  { id: "dog", ctx: "날쌘 사냥개를 봄", text: "날쌘 사냥개를 보았다" },
  { id: "dog", ctx: "사냥개가 어린 여자아이를 따라감", text: "사냥개가 여자아이를 따라갔다" },
  { id: "dog", ctx: "제 사냥개를 가짐", text: "사냥개가 내것이었다" },
  { id: "grindstone", ctx: "숫돌을 돌림", text: "숫돌을 돌렸다" },
  { id: "grindstone", ctx: "숫돌에 연장을 갊", text: "숫돌에 연장을 갈았다" },
  { id: "grindstone", ctx: "숫돌을 사고팖", text: "숫돌을 팔았다" },
  { id: "groan", ctx: "신음 소리를 들음", text: "신음 소리를 들었다" },
  { id: "groan", ctx: "두려움에 겨워 신음함", text: "두려움에 겨워 신음했다" },
  { id: "groceries", ctx: "싱싱하고 깨끗한 식료품을 봄", text: "싱싱한 식료품을 보았다" },
  { id: "cave", ctx: "석굴을 봄", text: "석굴을 보았다" },
  { id: "guardian", ctx: "후견인을 봄", text: "후견인을 만났다" },
  { id: "guardian", ctx: "처녀가 후견인에게 모질게 다루어짐", text: "아가씨가 후견인에게 모질게 다루어졌다" },
  { id: "guitar", ctx: "기타를 지님", text: "기타를 가지고 있었다" },
  { id: "guitar", ctx: "처녀가 줄이 풀리거나 부서진 기타를 봄", text: "아가씨가 줄이 끊어진 기타를 보았다" },
  { id: "guitar", ctx: "기타의 기묘한 가락을 들음", text: "기타의 기묘한 가락을 들었다" },
  { id: "guitar", ctx: "남자가 기타 가락을 들음", text: "남자가 기타 소리를 들었다" },
  { id: "guitar", ctx: "기타를 켬", text: "기타를 켰다" },
  { id: "gull", ctx: "갈매기를 봄", text: "갈매기가 날아다녔다" },
  { id: "gull", ctx: "죽은 갈매기를 봄", text: "죽은 갈매기를 보았다" },
  { id: "gun", ctx: "총소리를 들음", text: "총소리를 들었다" },
  { id: "gun", ctx: "총으로 남을 쏨", text: "총으로 남을 쐈다" },
  { id: "gun", ctx: "총에 맞음", text: "총에 맞았다" },
  { id: "gun", ctx: "여성이 총을 쏨", text: "여자가 총을 쏘았다" },
  { id: "gutter", ctx: "시궁창을 봄", text: "시궁창을 보았다" },
  { id: "gutter", ctx: "시궁창에서 값진 것을 주움", text: "시궁창에서 값진 것을 주웠다" },
  { id: "acrobat", ctx: "체조하는 이를 봄", text: "체조하는 사람을 보았다" },
  { id: "face", ctx: "초췌한 얼굴을 봄", text: "초췌한 얼굴을 보았다" },
  { id: "face", ctx: "제 얼굴이 초췌하고 지쳐 보임", text: "내 얼굴이 지쳐 보였다" },
  { id: "hail", ctx: "우박이 쏟아지는 속에 있음", text: "우박이 쏟아지는 속에 있었다" },
  { id: "hail", ctx: "햇빛과 비 사이로 우박이 떨어지는 것을 봄", text: "햇빛 사이로 우박이 떨어졌다" },
  { id: "hail", ctx: "처녀가 우박 꿈을 꿈", text: "아가씨가 우박을 보았다" },
  { id: "hail", ctx: "우박이 집을 때리는 소리를 들음", text: "우박이 지붕을 때리는 소리를 들었다" },
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
