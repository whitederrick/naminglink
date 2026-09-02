// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 37 — Forest~Frogs, 49건)
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
  { id: "forest", ctx: "빽빽한 숲속에 있음", text: "빽빽한 숲속에서 길을잃고 헤맸다" },
  { id: "forest", ctx: "숲에서 춥고 배고픔", text: "숲에서 춥고 배고팠다" },
  { id: "forest", ctx: "잎이 우거진 큰 나무 숲을 봄", text: "아름드리 나무가 우거진 숲을 보았다" },
  { id: "forest", ctx: "글하는 이가 우거진 숲을 봄", text: "글하는 사람이 숲을 보았다" },
  { id: "forehead", ctx: "곱고 반반한 이마를 봄", text: "반반한 이마를 보았다" },
  { id: "forehead", ctx: "볼품없는 이마를 봄", text: "볼품없는 이마를 보았다" },
  { id: "forehead", ctx: "제 아이의 이마를 손으로 쓸어 줌", text: "아이의 이마를 쓸어 주었다" },
  { id: "forehead", ctx: "처녀가 정인의 이마에 입 맞춤", text: "아가씨가 정인의 이마에 입맞춤을 했다" },
  { id: "fork", ctx: "포크를 봄", text: "포크가 놓여 있었다" },
  { id: "fork", ctx: "여성이 포크를 봄", text: "여자가 포크를 보았다" },
  { id: "form", ctx: "볼품없는 몸매를 봄", text: "볼품없는 몸매를 보았다" },
  { id: "form", ctx: "고운 몸매를 지님", text: "고운 몸매를 지니고 있었다" },
  { id: "abandon", ctx: "처녀가 제 집이나 벗을 저버림", text: "아가씨가 벗을 저버렸다" },
  { id: "fort", ctx: "성채를 지킴", text: "성채를 지켰다" },
  { id: "fort", ctx: "성채를 쳐서 빼앗음", text: "성채를 쳐서 빼앗았다" },
  { id: "fortress", ctx: "요새에 갇힘", text: "요새에 갇혔다" },
  { id: "fortress", ctx: "남을 요새에 가둠", text: "남을 요새에 가두었다" },
  { id: "divination", ctx: "점을 치거나 점을 봄", text: "점을 보러 가서 망설였다" },
  { id: "divination", ctx: "처녀가 점을 봄", text: "아가씨가 점을 보았다" },
  { id: "divination", ctx: "처녀가 점쟁이와 정혼함", text: "아가씨가 점쟁이와 정혼했다" },
  { id: "fountain", ctx: "햇빛에 반짝이는 맑은 샘을 봄", text: "햇빛에 반짝이는 맑은 샘을 보았다" },
  { id: "fountain", ctx: "흐릿한 샘을 봄", text: "흐릿한 샘을 보았다" },
  { id: "fountain", ctx: "마르고 부서진 샘을 봄", text: "마르고 부서진 샘을 보았다" },
  { id: "fountain", ctx: "처녀가 달빛에 반짝이는 샘을 봄", text: "아가씨가 달빛에 반짝이는 샘을 보았다" },
  { id: "chicken", ctx: "닭을 봄", text: "닭이 마당에 있었다" },
  { id: "chicken", ctx: "여성이 닭을 봄", text: "여자가 닭을 보았다" },
  { id: "fox", ctx: "여우를 뒤쫓음", text: "여우를 뒤쫓았다" },
  { id: "fox", ctx: "여우가 슬그머니 뜰로 들어옴", text: "여우가 슬그머니 뜰로 들어왔다" },
  { id: "fox", ctx: "여우를 죽임", text: "여우를 죽였다" },
  { id: "cheated", ctx: "남을 속임", text: "남을 속였다" },
  { id: "cheated", ctx: "남에게 속아 넘어감", text: "남에게 속아 넘어갔다" },
  { id: "cheated", ctx: "남이 나를 속였다고 나무람", text: "속였다고 따졌다" },
  { id: "freckle", ctx: "여성이 제 얼굴에 주근깨가 난 것을 봄", text: "얼굴에 주근깨가 났다" },
  { id: "freckle", ctx: "거울에 비친 주근깨를 봄", text: "거울에 비친 주근깨를 보았다" },
  { id: "friend", ctx: "벗이 성하고 즐거운 것을 봄", text: "친구가 즐거운 것을 보았다" },
  { id: "friend", ctx: "벗이 괴로워하고 수척한 것을 봄", text: "친구가 수척해 보였다" },
  { id: "friend", ctx: "벗의 낯빛이 검게 보임", text: "친구의 낯빛이 검게 보였다" },
  { id: "friend", ctx: "벗이 짐승의 모습이 됨", text: "친구가 짐승 모습이 되었다" },
  { id: "friend", ctx: "수수하게 입던 벗이 새빨간 옷을 입음", text: "친구가 새빨간 옷을 입었다" },
  { id: "friend", ctx: "벗이 언덕 위에 조각상처럼 서 있음", text: "친구가 언덕 위에 조각상처럼 서 있었다" },
  { id: "friend", ctx: "벗이 흰 천으로 얼굴을 가리고 있음", text: "친구가 천으로 얼굴을 가리고 있었다" },
  { id: "friend", ctx: "나를 해친 사람과 손을 잡고 그가 슬픈 낯으로 떠남", text: "나를 해친 친구와 악수했다" },
  { id: "afraid", ctx: "무언가에 깜짝 놀람", text: "무언가에 깜짝 놀랐다" },
  { id: "frog", ctx: "개구리를 잡음", text: "개구리를 잡았다" },
  { id: "frog", ctx: "풀밭의 개구리를 봄", text: "풀밭의 개구리를 보았다" },
  { id: "frog", ctx: "여성이 황소개구리를 봄", text: "여자가 황소개구리를 보았다" },
  { id: "frog", ctx: "낮고 눅눅한 곳의 개구리를 봄", text: "눅눅한 곳의 개구리를 보았다" },
  { id: "frog", ctx: "개구리를 먹음", text: "개구리를 먹었다" },
  { id: "frog", ctx: "개구리 우는 소리를 들음", text: "개구리 우는 소리를 들었다" },
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
