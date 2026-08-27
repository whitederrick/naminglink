// 주공해몽(周公解夢) 원문 10차 배치 — 龍蛇禽獸等類 갈래(68줄)에서 아직 안 쓴 상징
// (닭·새·까마귀·쥐·사슴·토끼)에 새 문맥을 더한다.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다
// (apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json, source: "tradition").
//
// 실행: node scripts/add-dream-zhougong-batch10-beasts.mjs
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

// 닭 — 「雞抱卵主有大喜」(닭이 알을 품으면 큰 기쁨이 있다).
addMeaning(
  "chicken",
  {
    context: "닭이 알을 품음",
    interpretation_ko: "큰 기쁨이 생길 조짐",
    interpretation_en: "a sign of great joy",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「雞抱卵主有大喜」(닭이 알을 품으면 큰 기쁨이 있다)를 근거로 삼았다.",
);

// 새 — 「飛鳥入懷皆主吉」(나는 새가 품에 들면 다 길하다).
addMeaning(
  "bird",
  {
    context: "새가 품에 듦",
    interpretation_ko: "길한 조짐",
    interpretation_en: "an auspicious sign",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「飛鳥入懷皆主吉」(나는 새가 품에 들면 다 길하다)를 근거로 삼았다.",
);

// 까마귀 — 「鴉雀相噪主酒食」(까마귀와 참새가 시끄럽게 다투면 술과 음식이 생긴다).
// 기존 "까마귀가 욺"(흉)과는 다른, 다른 새와 다투며 시끄러운 쪽이다.
addMeaning(
  "crow",
  {
    context: "까마귀가 다른 새와 시끄럽게 다툼",
    interpretation_ko: "뜻밖의 대접을 받을 조짐",
    interpretation_en: "a sign of an unexpected treat",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「鴉雀相噪主酒食」(까마귀와 참새가 시끄럽게 다투면 술과 음식이 생긴다)를 근거로 삼았다.",
);

// 쥐 — 「白鼠引路人提攜」(흰 쥐가 길을 인도하면 남의 도움을 받는다).
addMeaning(
  "rat",
  {
    context: "흰 쥐가 길을 인도함",
    interpretation_ko: "남의 도움을 받을 조짐",
    interpretation_en: "a sign of receiving help from someone",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「白鼠引路人提攜」(흰 쥐가 길을 인도하면 남의 도움을 받는다)를 근거로 삼았다.",
);

// 사슴 — 「獐鹿在家得官祿」(노루나 사슴이 집에 있으면 벼슬과 녹을 얻는다). 기존
// "사슴을 봄"과는 다른, 집 안에 있는 구체적인 장면이다.
addMeaning(
  "deer",
  {
    context: "사슴이 집 안에 있음",
    interpretation_ko: "벼슬과 녹을 얻을 조짐",
    interpretation_en: "a sign of gaining rank and reward",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「獐鹿在家得官祿」(노루나 사슴이 집에 있으면 벼슬과 녹을 얻는다)를 근거로 삼았다.",
);

// 토끼 — 「群兔上天得貴位」(토끼 떼가 하늘로 오르면 귀한 지위를 얻는다).
addMeaning(
  "rabbit",
  {
    context: "토끼가 하늘로 오름",
    interpretation_ko: "귀한 지위를 얻을 조짐",
    interpretation_en: "a sign of gaining a noble position",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「群兔上天得貴位」(토끼 떼가 하늘로 오르면 귀한 지위를 얻는다)를 근거로 삼았다.",
);

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
