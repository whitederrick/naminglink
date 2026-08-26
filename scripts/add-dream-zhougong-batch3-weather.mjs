// 주공해몽(周公解夢) 원문 3차 배치 — 天地日月星辰 갈래(64줄)에서 아직 안 쓴 날씨류 여섯
// 상징(별·비·바람·번개·구름·무지개)에 새 문맥을 더한다.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다
// (apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json, source: "tradition").
//
// 실행: node scripts/add-dream-zhougong-batch3-weather.mjs
//
// 뒤따를 것 (같은 파일에 손대지 말고 별도로):
//   1. apps/dreamslink/src/lib/dream-contexts-ko.ts 에 새 CONTEXT_KO 항목 추가
//      (표에 없으면 화면 문구 "별이…"가 그대로 매칭 키가 돼 늘 이긴다 — "돼지"·"고양이" 전례)
//   2. apps/dreamslink 에서 build-dream-contexts.ts 로 CONTEXT_EN 갱신
//   3. verify-dream-context-parity.ts · verify-guide-numbers.ts 로 확인

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

// 별 — 품에 듦(기존)에 더해 떨어짐(흉) · 손에 쥠(길)을 더한다.
// 「星入懷主生貴子」(별이 품에 들면 귀한 자식을 낳는다) — 기존 문맥의 근거이기도 하다.
addMeaning(
  "star",
  {
    context: "별이 떨어짐",
    interpretation_ko: "구설·건강 주의",
    interpretation_en: "caution: disputes or health issues",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「星入懷主生貴子」(별이 품에 들면 귀한 자식을 낳는다)·「星落有病及官事」(별이 떨어지면 병이나 관재구설이 생긴다)·「持執星宿大富貴」(별을 손에 쥐면 크게 부귀해진다)를 근거로 삼았다.",
);
addMeaning(
  "star",
  {
    context: "별을 손에 쥠",
    interpretation_ko: "큰 부귀를 얻음",
    interpretation_en: "a sign of great wealth and honor",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「星入懷主生貴子」(별이 품에 들면 귀한 자식을 낳는다)·「星落有病及官事」(별이 떨어지면 병이나 관재구설이 생긴다)·「持執星宿大富貴」(별을 손에 쥐면 크게 부귀해진다)를 근거로 삼았다.",
);

// 비 — 「行路逢雨有酒食」(길을 가다 비를 만나면 술과 음식이 생긴다).
addMeaning(
  "rain",
  {
    context: "길에서 비를 만남",
    interpretation_ko: "뜻밖의 대접이나 좋은 소식",
    interpretation_en: "an unexpected treat or good news",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「行路逢雨有酒食」(길을 가다 비를 만나면 술과 음식이 생긴다)을 근거로 삼았다.",
);

// 바람 — 「風吹人衣主疾病」(바람이 옷을 스치면 질병을 조심해야 한다).
addMeaning(
  "wind",
  {
    context: "바람이 옷깃을 스침",
    interpretation_ko: "질병을 조심할 조짐",
    interpretation_en: "a caution about illness",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「風吹人衣主疾病」(바람이 옷을 스치면 질병을 조심해야 한다)을 근거로 삼았다.",
);

// 번개 — 몸을 비침(길) · 벼락을 맞음(길).
// 「電光照身有吉慶」(번개 빛이 몸을 비치면 길한 경사가 있다), 「身被霹靂主富貴」(벼락을 맞으면 부귀를 얻는다).
addMeaning(
  "lightning",
  {
    context: "번개가 몸을 비침",
    interpretation_ko: "경사스러운 일이 생길 조짐",
    interpretation_en: "a sign of an auspicious occasion",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「電光照身有吉慶」(번개 빛이 몸을 비치면 길한 경사가 있다)·「身被霹靂主富貴」(벼락을 맞으면 부귀를 얻는다)를 근거로 삼았다.",
);
addMeaning(
  "lightning",
  {
    context: "벼락을 맞음",
    interpretation_ko: "부귀를 얻을 조짐",
    interpretation_en: "a sign of gaining wealth and status",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「電光照身有吉慶」(번개 빛이 몸을 비치면 길한 경사가 있다)·「身被霹靂主富貴」(벼락을 맞으면 부귀를 얻는다)를 근거로 삼았다.",
);

// 구름 — 「雲起四方交易吉」(구름이 사방에서 일어나면 거래가 길하다).
addMeaning(
  "cloud",
  {
    context: "구름이 사방에서 일어남",
    interpretation_ko: "거래나 계약이 순조로울 조짐",
    interpretation_en: "a sign that dealings or agreements will go smoothly",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「雲起四方交易吉」(구름이 사방에서 일어나면 거래가 길하다)을 근거로 삼았다.",
);

// 무지개 — 「赤虹見吉黑虹凶」(붉은 무지개는 길하고 검은 무지개는 흉하다).
addMeaning(
  "rainbow",
  {
    context: "무지개 색이 검음",
    interpretation_ko: "안 좋은 일이 생길 조짐",
    interpretation_en: "a sign of misfortune",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「赤虹見吉黑虹凶」(붉은 무지개는 길하고 검은 무지개는 흉하다)을 근거로 삼았다.",
);

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
