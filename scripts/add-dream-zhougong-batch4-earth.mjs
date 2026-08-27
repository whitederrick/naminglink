// 주공해몽(周公解夢) 원문 4차 배치 — 地理山石樹木 갈래(56줄)에서 아직 안 쓴 상징
// (지진·산·나무·꽃·돌바위·사과과일)에 새 문맥을 더한다.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다
// (apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json, source: "tradition").
//
// 실행: node scripts/add-dream-zhougong-batch4-earth.mjs
//
// 뒤따를 것 (같은 파일에 손대지 말고 별도로):
//   1. apps/dreamslink/src/lib/dream-contexts-ko.ts 에 새 CONTEXT_KO 항목 추가
//      (표에 없으면 화면 문구가 그대로 매칭 키가 돼 늘 이긴다 — "돼지"·"고양이" 전례)
//   2. apps/dreamslink/src/lib/dream-contexts.ts 에 영어 키워드를 손으로 추가
//      (build-dream-contexts.ts는 돌리지 말 것 — 이 파일은 손으로 관리된다.
//      CLAUDE.md §10 #49 참고)
//   3. verify-dream-context-parity.ts · verify-dream-match.ts · verify-guide-numbers.ts로 확인

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

// 지진 — 「地裂主疾病大凶」(땅이 갈라지면 질병으로 크게 흉하다).
// 기존 "땅이 흔들림"(단순 흔들림)과 구분되는, 땅이 갈라지는 더 심한 형상이다.
addMeaning(
  "earthquake",
  {
    context: "땅이 갈라짐",
    interpretation_ko: "질병을 조심할 조짐",
    interpretation_en: "a caution about illness",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「地裂主疾病大凶」(땅이 갈라지면 질병으로 크게 흉하다)을 근거로 삼았다.",
);

// 산 — 「昇山落地主失位」(산에 올랐다가 땅으로 떨어지면 지위를 잃는다).
// 기존 "산 정상에 오름"(성취)의 반대 방향이다.
addMeaning(
  "mountain",
  {
    context: "산에 올랐다가 떨어짐",
    interpretation_ko: "지위를 잃을 조짐",
    interpretation_en: "a sign of losing one's position",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「昇山落地主失位」(산에 올랐다가 땅으로 떨어지면 지위를 잃는다)를 근거로 삼았다.",
);

// 나무 — 「樹木枯死宅不安」(나무가 말라 죽으면 집안이 불안해진다).
addMeaning(
  "tree",
  {
    context: "나무가 말라 죽음",
    interpretation_ko: "집안이 불안해질 조짐",
    interpretation_en: "a sign of unrest in the family",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「樹木枯死宅不安」(나무가 말라 죽으면 집안이 불안해진다)을 근거로 삼았다.",
);

// 꽃 — 「與人分花主分散」(남과 꽃을 나누면 헤어질 조짐이다).
addMeaning(
  "flower",
  {
    context: "남에게 꽃을 나눠 줌",
    interpretation_ko: "이별할 조짐",
    interpretation_en: "a sign of parting",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「與人分花主分散」(남과 꽃을 나누면 헤어질 조짐이다)을 근거로 삼았다.",
);

// 돌·바위 — 위에 누움(길) · 작은 돌을 손으로 만짐(태몽).
// 「臥於石上主大吉」(돌 위에 누우면 크게 길하다), 「手弄小石生貴子」(작은 돌을 손으로
// 만지작거리면 귀한 자식을 낳는다). 후자는 태몽 문맥이라 상징의 tags에도 "태몽"을 더한다
// (verify-guide-numbers가 세는 "태몽 상징" 수 27 → 28, 문서 숫자도 함께 고칠 것).
addMeaning(
  "stone",
  {
    context: "돌 위에 누움",
    interpretation_ko: "크게 길한 조짐",
    interpretation_en: "a sign of great fortune",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「臥於石上主大吉」(돌 위에 누우면 크게 길하다)·「手弄小石生貴子」(작은 돌을 손으로 만지작거리면 귀한 자식을 낳는다)를 근거로 삼았다.",
);
addMeaning(
  "stone",
  {
    context: "임신 태몽 아기 아이 임산부 출산",
    interpretation_ko: "귀한 자식을 얻을 태몽",
    interpretation_en: "traditionally read as a conception dream of a noble child",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「臥於石上主大吉」(돌 위에 누우면 크게 길하다)·「手弄小石生貴子」(작은 돌을 손으로 만지작거리면 귀한 자식을 낳는다)를 근거로 삼았다.",
);
{
  const stone = data.symbols.find((s) => s.id === "stone");
  if (!stone.tags.includes("태몽")) {
    stone.tags.push("태몽");
    console.log("태그 추가: stone / 태몽");
  }
}

// 사과·과일 — 「果林中行主得財」(과수원을 거닐면 재물을 얻는다).
addMeaning(
  "apple",
  {
    context: "과수원을 거닒",
    interpretation_ko: "재물을 얻을 조짐",
    interpretation_en: "a sign of gaining wealth",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「果林中行主得財」(과수원을 거닐면 재물을 얻는다)를 근거로 삼았다.",
);

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
