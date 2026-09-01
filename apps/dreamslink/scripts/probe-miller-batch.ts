// **방금 넣은 밀러 배치의 상징이 자연스러운 문장에서 실제로 걸리는지** 본다.
// (지금 담긴 것: 배치 11 — `Calm`~`Cap`, 63건)
//
// ## 왜 이것이 따로 있어야 하나 (2026-09-01)
//
// 배치를 넣는 절차의 ⑨단계다. ⑧까지의 검사기 셋(`verify-dream-km`·`audit-km-dead-words`·
// `verify-dream-cite`)은 **「적어 둔 것이 규칙에 맞는가」만 본다.** 「이용자가 쓸 말로
// 걸리는가」는 아무도 안 본다 — 09-01 앞 세션에서 셋 다 초록불인데 **다섯 상징이 하나도
// 안 걸렸다**(별칭을 어간으로 적어서, CLAUDE.md §25). 이번 배치에서도 이 프로브가
// **9건을 잡았다**(안 걸림 2 · 엉뚱한 뜻 7) — 검사기 셋은 그때도 전부 초록불이었다.
//
// ## 이 프로브가 못 잡는 것 (§22 — 먼저 적는다)
//
//   · 뜻이 맞는지는 안 본다. **걸리는가와 어느 의미로 갈리는가**만 본다.
//   · 한국어 문장만 본다. 영어 판별어는 여기서 안 밟힌다.
//   · 문장을 **손으로 적는다** — 새 배치를 넣으면 `CASES`를 그 배치 것으로 갈아야 한다.
//     갈지 않으면 옛 배치를 다시 재면서 「새 배치를 쟀다」고 착각한다.
//   · 지난 배치는 여기 안 남는다. 영구 회귀는 `verify-dream-match.ts`가 맡는다.
//
// 재구현하지 않는다 — 제품이 쓰는 matchDream 을 그대로 부른다(CLAUDE.md §23).
//
// 실행: apps/dreamslink 에서  npx tsx scripts/probe-miller-batch.ts
// 종료 코드: 0 전부 걸림 / 1 안 걸리거나 엉뚱한 뜻으로 걸린 것이 있음
import { matchDream } from "../src/lib/engines/dream-match";

type Case = { id: string; ctx: string; text: string };

const CASES: Case[] = [
  { id: "calm", ctx: "고요한 바다를 봄", text: "고요한 바다를 보았다" },
  { id: "calm", ctx: "마음이 고요하고 행복함", text: "마음이 고요하고 행복했다" },

  { id: "calumny", ctx: "내가 중상모략의 대상이 됨", text: "누군가 나를 모함해서 누명을 썼다" },
  { id: "calumny", ctx: "젊은 여성이 중상모략을 당함", text: "젊은 여자가 모략을 당하는 것을 봤다" },

  { id: "camera", ctx: "사진기를 봄", text: "책상 위에 카메라가 놓여 있었다" },
  { id: "camera", ctx: "사진기로 사진을 찍음", text: "카메라로 사진을 찍었다" },

  { id: "cameo-brooch", ctx: "카메오 브로치를 봄", text: "오래된 카메오 브로치를 보았다" },

  { id: "camel", ctx: "낙타를 봄", text: "낙타 한 마리가 홀로 서 있었다" },
  { id: "camel", ctx: "짐 나르는 낙타를 봄", text: "짐을 잔뜩 실은 낙타를 보았다" },
  { id: "camel", ctx: "낙타를 가짐", text: "내가 낙타를 가지고 있었다" },
  { id: "camel", ctx: "사막에서 낙타 떼를 봄", text: "사막에서 낙타 떼가 지나갔다" },

  { id: "camp", ctx: "노천에서 야영함", text: "들판 한데서 야영을 했다" },
  { id: "camp", ctx: "야영지 마을을 봄", text: "천막이 늘어선 야영지 마을을 보았다" },
  { id: "camp", ctx: "젊은 여성이 야영지에 있음", text: "처녀가 애인과 야영지에 있었다" },
  { id: "camp", ctx: "군대 야영지에 있음", text: "군대 야영지 안에 있었다" },
  { id: "camp", ctx: "혼인한 여성이 병사들의 야영지에 있음", text: "결혼한 아내가 병영 야영지에 있었다" },

  { id: "campaign", ctx: "정치 운동을 벌임", text: "선거 유세를 하는 캠페인을 벌였다" },
  { id: "campaign", ctx: "죄악에 맞선 신앙 운동을 봄", text: "교회 사람들이 죄악에 맞서는 캠페인을 하고 있었다" },

  { id: "cane", ctx: "사탕수수가 자라는 것을 봄", text: "사탕수수가 푸르게 자라는 것을 보았다" },
  { id: "cane", ctx: "베어 낸 사탕수수를 봄", text: "베어 낸 사탕수수가 쌓여 있었다" },

  { id: "cancer", ctx: "암을 고쳐 낫게 함", text: "암을 치료해서 완치되었다" },
  { id: "cancer", ctx: "암을 봄", text: "암에 걸렸다는 말을 들었다" },

  { id: "canal", ctx: "운하 물이 흐리고 괴어 있음", text: "운하 물이 흐리고 고여 있었다" },
  { id: "canal", ctx: "운하 물이 맑음", text: "운하 물이 맑고 깨끗했다" },
  { id: "canal", ctx: "카누로 운하를 미끄러지듯 건너감", text: "카누로 운하를 미끄러지듯 건넜다" },
  { id: "canal", ctx: "다리로 운하를 건너 물가에서 풀을 뜯음", text: "다리로 운하를 건너 고사리를 뜯었다" },
  { id: "canal", ctx: "운하를 건너는데 물이 탁함", text: "운하를 건너는데 물이 탁했다" },

  { id: "canary", ctx: "카나리아를 봄", text: "카나리아를 보았다" },
  { id: "canary", ctx: "고운 카나리아를 가짐", text: "예쁜 카나리아를 기르고 있었다" },
  { id: "canary", ctx: "카나리아를 선물로 받음", text: "카나리아를 선물로 받았다" },
  { id: "canary", ctx: "카나리아를 남에게 줌", text: "카나리아를 남에게 주었다" },
  { id: "canary", ctx: "카나리아가 죽음", text: "카나리아가 죽었다" },
  { id: "canary", ctx: "호화로운 방에서 카나리아가 날며 노래함", text: "화려한 방에서 카나리아가 노래했다" },

  { id: "candle", ctx: "맑고 흔들림 없는 불꽃으로 타는 초를 봄", text: "촛불이 흔들림 없이 곧게 타오르고 있었다" },
  { id: "candle", ctx: "초를 만듦", text: "양초를 만들고 있었다" },
  { id: "candle", ctx: "초에 불을 붙임", text: "촛불에 불을 붙였다" },
  { id: "candle", ctx: "바람에 초가 녹아 스러짐", text: "바람에 촛불이 녹아 스러졌다" },
  { id: "candle", ctx: "촛불을 끔", text: "촛불을 껐다" },

  { id: "candlestick", ctx: "초가 온전히 꽂힌 촛대를 봄", text: "초가 꽂힌 촛대를 보았다" },
  { id: "candlestick", ctx: "촛대가 비어 있음", text: "촛대가 비어 있었다" },

  { id: "canker", ctx: "무언가에 헐어 썩은 자리를 봄", text: "물건에 헌데가 생긴 것을 보았다" },
  { id: "canker", ctx: "살에 궤양이 자람", text: "살에 궤양이 자라고 있었다" },

  { id: "cannon", ctx: "대포를 봄", text: "대포가 늘어서 있는 것을 보았다" },
  { id: "cannon", ctx: "대포 소리를 들음", text: "대포 소리가 울렸다" },

  { id: "cannon-ball", ctx: "포탄을 봄", text: "포탄이 날아오는 것을 보았다" },
  { id: "cannon-ball", ctx: "처녀가 포탄을 봄", text: "처녀가 포탄을 보았다" },
  { id: "cannon-ball", ctx: "젊은이가 포탄을 봄", text: "젊은이가 포탄을 보았다" },

  { id: "canoe", ctx: "잔잔한 시내에서 카누를 저음", text: "잔잔한 개울에서 카누를 저었다" },
  { id: "canoe", ctx: "연인과 함께 노를 저음", text: "애인과 함께 카누를 저었다" },
  { id: "canoe", ctx: "거친 물에서 노를 저음", text: "사나운 물살에서 카누를 저었다" },
  { id: "canoe", ctx: "흙탕물에서 노를 저음", text: "흙탕물에서 카누를 저었다" },
  { id: "canoe", ctx: "얕고 물살 빠른 데서 노를 저음", text: "물살이 급한 데서 카누를 저었다" },
  { id: "canoe", ctx: "얕고 맑고 잔잔한 물에서 노를 저음", text: "얕고 맑은 물에서 카누를 저었다" },

  { id: "candy", ctx: "사탕을 만듦", text: "사탕을 만들고 있었다" },
  { id: "candy", ctx: "바삭한 새 사탕을 먹음", text: "바삭한 사탕을 먹었다" },
  { id: "candy", ctx: "신 사탕을 봄", text: "새콤한 사탕을 보았다" },
  { id: "candy", ctx: "사탕 상자를 받음", text: "사탕 상자를 선물로 받았다" },
  { id: "candy", ctx: "사탕 상자를 보냄", text: "사탕 상자를 보냈다" },

  { id: "canopy", ctx: "차양 아래에 있음", text: "차양 아래에 서 있었다" },

  { id: "cap", ctx: "여성이 캡모자를 봄", text: "여자가 챙모자를 보았다" },
  { id: "cap", ctx: "연인이 캡모자를 쓰고 있음", text: "애인이 챙모자를 쓰고 있었다" },
  { id: "cap", ctx: "죄수의 모자를 봄", text: "죄수가 쓴 챙모자를 보았다" },
  { id: "cap", ctx: "광부의 모자를 봄", text: "광부가 쓴 챙모자를 보았다" },
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
