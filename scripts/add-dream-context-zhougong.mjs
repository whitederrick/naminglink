// 주공해몽(周公解夢) 원문에서 옮긴 문맥을 "돼지"·"죽음" 두 상징에 추가한다 (파일럿).
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다.
// source: "tradition" — AI가 지어낸 "general"과 달리 실재하는 텍스트에 근거가 있다.
//
// 실행: node scripts/add-dream-context-zhougong.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.resolve(
  "apps/dreamslink/src/lib/dream-symbols.data.json",
);
const raw = readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

function addMeanings(id, newMeanings, cultureNote) {
  const symbol = data.symbols.find((s) => s.id === id);
  if (!symbol) throw new Error(`상징 없음: ${id}`);
  const existingContexts = new Set(symbol.meanings.map((m) => m.context));
  for (const meaning of newMeanings) {
    if (existingContexts.has(meaning.context)) {
      console.log(`이미 있음, 건너뜀: ${id} / ${meaning.context}`);
      continue;
    }
    symbol.meanings.push(meaning);
    console.log(`추가: ${id} / ${meaning.context}`);
  }
  symbol.culture_note = cultureNote;
}

addMeanings(
  "pig",
  [
    {
      context: "돼지를 죽임",
      interpretation_ko: "재물이나 이로운 일이 생김",
      interpretation_en: "a sign of gain or benefit",
      polarity: "positive",
      source: "tradition",
    },
    {
      context: "돼지가 저절로 죽음",
      interpretation_ko: "재물이 새거나 좋지 않은 조짐",
      interpretation_en: "a sign of loss or misfortune",
      polarity: "negative",
      source: "tradition",
    },
  ],
  "한국 대표 재물 길몽. 중국 고전 《주공해몽》: 「殺豬吉豬自死凶」(돼지를 잡으면 길하고 저절로 죽으면 흉하다).",
);

addMeanings(
  "death",
  [
    {
      context: "자신이 죽음",
      interpretation_ko: "전통적으로 오히려 좋은 일이 생길 조짐으로 봄",
      interpretation_en: "traditionally seen as a sign that something good is coming",
      polarity: "positive",
      source: "tradition",
    },
    {
      context: "타인이 죽는 것을 봄",
      interpretation_ko: "그 관계나 상황에 변화가 있으리라는 신호",
      interpretation_en: "a sign of change in that relationship or situation",
      polarity: "neutral",
      source: "tradition",
    },
  ],
  "죽음꿈은 재생·장수의 길몽으로 봄. 중국 고전 《주공해몽》: 「見人死自死者吉」(남이 죽는 것보다 자신이 죽는 꿈이 더 길하다).",
);

const previousVersion = data.dictVer;
data.dictVer = "1.5.0";

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
