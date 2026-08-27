// 주공해몽(周公解夢) 원문 8차 배치 — 佛道僧尼鬼神·捕禁刑罰獄具 갈래에서 아직 안 쓴
// 상징(스님·신령·감옥·도둑)에 새 문맥을 더한다.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다
// (apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json, source: "tradition").
//
// 실행: node scripts/add-dream-zhougong-batch8-spirit.mjs
//
// 뒤따를 것 (같은 파일에 손대지 말고 별도로):
//   1. apps/dreamslink/src/lib/dream-contexts-ko.ts 에 새 CONTEXT_KO 항목 추가
//   2. apps/dreamslink/src/lib/dream-contexts.ts 에 영어 키워드를 손으로 추가
//      (build-dream-contexts.ts는 돌리지 말 것 — CLAUDE.md §10 #49)
//   3. verify-dream-context-parity.ts · verify-dream-match.ts · verify-guide-numbers.ts로 확인
//   4. **통과한 뒤에도 새 문맥 전부를 matchDream에 직접 태워 정답을 재확인한다**
//      (CLAUDE.md §10 #51·#52)

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.resolve(
  "apps/dreamslink/src/lib/dream-symbols.data.json",
);
const raw = readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

function addMeaning(id, meaning, cultureNote) {
  const symbol = data.symbols.find((s) => s.id === id);
  if (!symbol) throw new Error(`상징 없음: ${id}`);
  if (symbol.meanings.some((m) => m.context === meaning.context)) {
    console.log(`이미 있음, 건너뜀: ${id} / ${meaning.context}`);
    return;
  }
  symbol.meanings.push(meaning);
  symbol.culture_note = cultureNote;
  console.log(`문맥 추가: ${id} / ${meaning.context}`);
}

// **잡은 버그 — "스님"이 한 번도 안 걸리고 있었다.** `term_ko`가 "스님·성직자"라 "·"가
// 그대로 리터럴이고, 별칭도 "종교인"(격식체)뿐이었다. "술(음료)" 사고(6차 배치)와 같은
// 종류다. "스님"은 다른 낱말과 헷갈릴 위험이 없어(동형이의어 충돌 없음, 확인함) 바로
// 고친다. **"신"은 여기 넣지 않는다** — "신이 나다"(신나다, 흥분하다)와 동형이의어로
// 겹쳐 오탐을 낼 위험이 있다(memory에 이미 "별도 검토 필요"로 적어 둔 항목).
{
  const monk = data.symbols.find((s) => s.id === "monk");
  if (!monk.aliases.includes("스님")) {
    monk.aliases.push("스님");
    console.log("별칭 추가: monk / 스님 (한 번도 안 걸리던 결함 수정)");
  }
  // term_ko의 나머지 절반 "성직자"도 같은 이유로 한 번도 안 걸리고 있었다(손으로
  // matchDream에 태워 확인). 이쪽도 동형이의어 충돌이 없어 함께 고친다.
  if (!monk.aliases.includes("성직자")) {
    monk.aliases.push("성직자");
    console.log("별칭 추가: monk / 성직자 (한 번도 안 걸리던 결함 수정)");
  }
}

// **곁가지 — "귀신"도 별칭에 추가한다.** 아래 "귀신과 싸움"·"신에게 맞음"은 한국어
// 문장에서 실제로 이 상징(god)에 도달할 방법이 없었다 — term_ko가 "신·신령"이라 "·"가
// 리터럴이고, "신"단독은 "신나다"(흥분하다)와 헷갈려 별칭에 못 넣는다(memory에 이미
// 적어 둔 판단). "귀신"은 그런 동형이의어 충돌이 없어(확인함) 안전하게 추가한다 —
// 이 상징에 지금 막 붙이는 새 문맥 자체가 한국어로는 "귀신" 경로로만 닿을 수 있다.
{
  const god = data.symbols.find((s) => s.id === "god");
  if (!god.aliases.includes("귀신")) {
    god.aliases.push("귀신");
    console.log("별칭 추가: god / 귀신 (한국어로 전혀 안 닿던 것을 부분 수정)");
  }
}

// 스님·성직자 — 가르침을 줌(길) · 경 읽는 모습을 봄(흉).
// 「僧師教人唸經吉」(스님이 경 읽는 법을 가르치면 길하다), 「和尚尼姑看經悶」(스님이나
// 비구니가 경을 보면 답답한 일이 생긴다).
addMeaning(
  "monk",
  {
    context: "스님이 가르침을 줌",
    interpretation_ko: "길한 일이 생길 조짐",
    interpretation_en: "a sign of good fortune",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「僧師教人唸經吉」(스님이 경 읽는 법을 가르치면 길하다)·「和尚尼姑看經悶」(스님이나 비구니가 경을 보면 답답한 일이 생긴다)을 근거로 삼았다.",
);
addMeaning(
  "monk",
  {
    context: "스님이 경 읽는 모습을 봄",
    interpretation_ko: "답답한 일이 생길 조짐",
    interpretation_en: "a sign of frustration or worry",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「僧師教人唸經吉」(스님이 경 읽는 법을 가르치면 길하다)·「和尚尼姑看經悶」(스님이나 비구니가 경을 보면 답답한 일이 생긴다)을 근거로 삼았다.",
);

// 신·신령 — 신에게 맞음(흉) · 귀신과 싸움(길, 장수).
// 「被神鬼打大不祥」(신이나 귀신에게 맞으면 매우 불길하다), 「與鬼鬥者主延壽」(귀신과
// 싸우면 수명이 늘어난다).
addMeaning(
  "god",
  {
    context: "신에게 맞음",
    interpretation_ko: "불길한 조짐",
    interpretation_en: "an inauspicious sign",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「被神鬼打大不祥」(신이나 귀신에게 맞으면 매우 불길하다)·「與鬼鬥者主延壽」(귀신과 싸우면 수명이 늘어난다)를 근거로 삼았다.",
);
addMeaning(
  "god",
  {
    context: "귀신과 싸움",
    interpretation_ko: "장수할 조짐",
    interpretation_en: "a sign of long life",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「被神鬼打大不祥」(신이나 귀신에게 맞으면 매우 불길하다)·「與鬼鬥者主延壽」(귀신과 싸우면 수명이 늘어난다)를 근거로 삼았다.",
);

// 감옥 — 「牢獄崩壞有赦吉」(감옥이 무너지면 사면을 받아 길하다). 기존 "갇힘"(흉)과는
// 다른, 무너지는 쪽의 길조다.
addMeaning(
  "prison",
  {
    context: "감옥이 무너짐",
    interpretation_ko: "사면을 받을 조짐",
    interpretation_en: "a sign of being pardoned",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「牢獄崩壞有赦吉」(감옥이 무너지면 사면을 받아 길하다)을 근거로 삼았다.",
);

// 도둑 — 「趕賊行見者大吉」(도둑을 쫓아가는 것을 보면 크게 길하다).
addMeaning(
  "thief",
  {
    context: "도둑을 쫓아냄",
    interpretation_ko: "길한 조짐",
    interpretation_en: "an auspicious sign",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「趕賊行見者大吉」(도둑을 쫓아가는 것을 보면 크게 길하다)를 근거로 삼았다.",
);

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
