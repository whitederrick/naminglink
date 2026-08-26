// 주공해몽(周公解夢) 원문 2차 배치 — 새 상징 둘(주움·이별) + 기존 "고양이" 문맥 추가.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다.
// source: "tradition" — 실재하는 텍스트에 근거가 있다.
//
// 실행: node scripts/add-dream-zhougong-batch2.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.resolve(
  "apps/dreamslink/src/lib/dream-symbols.data.json",
);
const raw = readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

function addSymbol(symbol) {
  if (data.symbols.some((s) => s.id === symbol.id)) {
    console.log(`이미 있음, 건너뜀: ${symbol.id}`);
    return;
  }
  data.symbols.push(symbol);
  console.log(`상징 추가: ${symbol.id}`);
}

function addMeaning(id, meaning, cultureNote) {
  const symbol = data.symbols.find((s) => s.id === id);
  if (!symbol) throw new Error(`상징 없음: ${id}`);
  if (symbol.meanings.some((m) => m.context === meaning.context)) {
    console.log(`이미 있음, 건너뜀: ${id} / ${meaning.context}`);
    return;
  }
  symbol.meanings.push(meaning);
  if (cultureNote) symbol.culture_note = cultureNote;
  console.log(`문맥 추가: ${id} / ${meaning.context}`);
}

// "잃어버림"(losing-item)의 반대 방향. 주공해몽 「拾得錢物皆大吉」(돈이나 물건을 주우면
// 모두 크게 길하다) — 오늘날 한국 "돈 줍는 꿈=길몽·횡재수" 통설과도 대조 확인했다.
addSymbol({
  id: "found-item",
  term_ko: "주움",
  term_en: "finding",
  aliases: ["주웠", "줍는", "발견했", "습득"],
  category: "action",
  polarity: "positive",
  tags: ["재물", "행운"],
  weight: 2,
  culture_note:
    "중국 고전 《주공해몽》 「拾得錢物皆大吉」(돈이나 물건을 주우면 모두 크게 길하다)을 1차 근거로 삼고, 오늘날 한국의 '돈 줍는 꿈=길몽·횡재수' 통설과도 대조 확인했다.",
  meanings: [
    {
      context: "돈이나 물건을 주움",
      interpretation_ko: "뜻밖의 재물이나 좋은 소식",
      interpretation_en: "an unexpected gain or good news",
      polarity: "positive",
      source: "tradition",
    },
  ],
});

// 헤어짐·이별. 주공해몽 「夫妻分釵主離別」(부부가 비녀를 나눠 가지면 이별의 조짐이다 —
// 전통 혼례에서 비녀를 나누는 것이 이별 의식이었다).
addSymbol({
  id: "breakup",
  term_ko: "이별",
  term_en: "breakup",
  aliases: ["헤어졌", "헤어지는", "이별하는", "작별"],
  category: "action",
  polarity: "neutral",
  tags: ["관계", "변화"],
  weight: 2,
  culture_note:
    "중국 고전 《주공해몽》 「夫妻分釵主離別」(부부가 비녀를 나눠 가지면 이별의 조짐이다 — 전통 혼례에서 비녀를 나누는 것이 이별 의식이었다).",
  meanings: [
    {
      context: "연인이나 배우자와 헤어짐",
      interpretation_ko: "지금 관계나 마음의 정리가 필요하다는 신호",
      interpretation_en: "a sign that a relationship or your feelings need sorting out",
      polarity: "neutral",
      source: "tradition",
    },
  ],
});

// 기존 "고양이" — 지금은 부정적 의미(질투·구설) 하나뿐이다. 주공해몽 「貓捕鼠者大得財」
// (고양이가 쥐를 잡으면 크게 재물을 얻는다)로 긍정적 문맥을 더한다.
addMeaning(
  "cat",
  {
    context: "고양이가 쥐를 잡음",
    interpretation_ko: "재물이나 성과를 얻음",
    interpretation_en: "a sign of gain or achievement",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「貓捕鼠者大得財」(고양이가 쥐를 잡으면 크게 재물을 얻는다)를 근거로 문맥을 추가했다.",
);

const previousVersion = data.dictVer;
data.dictVer = "1.6.0";

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
