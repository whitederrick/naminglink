// 주공해몽(周公解夢) 원문 11차 배치 — 金銀珠玉絹帛·船車遊行物件·道路橋梁市集 갈래에서
// 아직 안 쓴 상징(금·보석·배·자동차·길·다리·시장)에 새 문맥을 더한다.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다
// (apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json, source: "tradition").
//
// 실행: node scripts/add-dream-zhougong-batch11-travel.mjs
//
// 뒤따를 것 (같은 파일에 손대지 말고 별도로):
//   1. apps/dreamslink/src/lib/dream-contexts-ko.ts 에 새 CONTEXT_KO 항목 추가
//   2. apps/dreamslink/src/lib/dream-contexts.ts 에 영어 키워드를 손으로 추가
//      (build-dream-contexts.ts는 돌리지 말 것 — CLAUDE.md §10 #49)
//   3. **term_en이 "A / B" 꼴인 상징(gold·boat·road가 여기 해당)은 새 의미를 추가하는
//      순간부터 own-term 누출 위험이 생긴다** — 기존 단일 의미의 영어 키워드에 "A"·"B"
//      낱말이 남아 있지 않은지 클렌징 배치의 교훈대로 확인할 것.
//   4. verify-dream-context-parity.ts · verify-dream-match.ts · verify-guide-numbers.ts로 확인
//   5. **통과한 뒤에도 새 문맥 전부를 matchDream에 직접 태워 정답을 재확인한다**

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

// 금·보석 — 「珠玉滿懷主大凶」(구슬이나 옥이 품에 가득하면 크게 흉하다). 기존
// "얻음"(길)과 반대되는, 넘치도록 품는 쪽의 흉조다.
// **문맥 표기는 "보석"으로 통일한다** — "구슬"·"옥"은 이 사전에서 이미 별개 상징
// ("구슬", id: bead)의 트리거라 여기 쓰면 이 상징(gold) 자체가 안 걸린다(실측으로
// 확인). 상징의 실제 별칭(금·보석)과 맞는 낱말로 적어야 트리거와 문맥이 일치한다.
addMeaning(
  "gold",
  {
    context: "보석이 품에 가득함",
    interpretation_ko: "크게 흉한 조짐",
    interpretation_en: "a strongly inauspicious sign",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「珠玉滿懷主大凶」(구슬이나 옥이 품에 가득하면 크게 흉하다)을 근거로 삼았다.",
);

// 배 — 「船車破碎主不祥」(배와 수레가 부서지면 상서롭지 못하다).
addMeaning(
  "boat",
  {
    context: "배가 부서짐",
    interpretation_ko: "불길한 조짐",
    interpretation_en: "an inauspicious sign",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「船車破碎主不祥」(배와 수레가 부서지면 상서롭지 못하다)을 근거로 삼았다.",
);

// 자동차 — 「病人上車主大凶」(병자가 수레를 타면 크게 흉하다). 기존 "사고·브레이크
// 고장"과는 다른, 몸이 아픈 채로 타는 쪽이다.
addMeaning(
  "car",
  {
    context: "몸이 아픈 채로 차를 탐",
    interpretation_ko: "건강을 크게 조심할 조짐",
    interpretation_en: "a strong caution about health",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「病人上車主大凶」(병자가 수레를 타면 크게 흉하다)을 근거로 삼았다.",
);

// **잡은 버그 — 기존 문맥 "갈림길" 자체가 한 번도 안 걸리고 있었다.** "갈림길"은
// "갈림"+"길"의 합성어라, 상징 이름 "길"이 그 안에서는 경계 검사에 걸려 낱말의
// 조각으로 처리된다(맞는 판정이지만, 그러면 이 상징의 **원래 있던 유일한 문맥**을
// 가리키는 말 자체가 트리거로 못 쓰인다). "거미줄"·"이가 빠졌다"와 같은 종류(클렌징
// 배치 참고) — 통째로 별칭에 올린다.
{
  const road = data.symbols.find((s) => s.id === "road");
  if (!road.aliases.includes("갈림길")) {
    road.aliases.push("갈림길");
    console.log("별칭 추가: road / 갈림길 (기존 문맥 자체가 한 번도 안 걸리던 결함 수정)");
  }
}

// 길 — 「道中得財主通達」(길에서 재물을 얻으면 다 통한다).
addMeaning(
  "road",
  {
    context: "길에서 재물을 얻음",
    interpretation_ko: "뜻이 통하고 일이 풀릴 조짐",
    interpretation_en: "a sign that things will go smoothly",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「道中得財主通達」(길에서 재물을 얻으면 다 통한다)을 근거로 삼았다.",
);

// 다리 — 「見橋壞主有官事」(다리가 무너진 것을 보면 관재가 생긴다). 기존 "건넘"과
// 다른, 무너진 다리를 보는 쪽이다.
addMeaning(
  "bridge",
  {
    context: "다리가 무너진 것을 봄",
    interpretation_ko: "관재구설을 조심할 조짐",
    interpretation_en: "a caution about legal trouble or disputes",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「見橋壞主有官事」(다리가 무너진 것을 보면 관재가 생긴다)를 근거로 삼았다.",
);

// 시장 — 「見市中無人主凶」(시장에 사람이 없는 것을 보면 흉하다). 기존 "북적이는
// 시장"과 반대되는 쪽이다.
addMeaning(
  "market",
  {
    context: "사람이 없는 시장을 봄",
    interpretation_ko: "흉한 조짐",
    interpretation_en: "an inauspicious sign",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「見市中無人主凶」(시장에 사람이 없는 것을 보면 흉하다)을 근거로 삼았다.",
);

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
