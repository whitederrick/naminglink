// 주공해몽(周公解夢) 원문 9차 배치 — 垢污沐浴凌辱·田園五榖耕種 갈래에서 아직 안 쓴
// 상징(똥·소변·목욕·머리카락·쌀·밥)에 새 문맥을 더한다.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다
// (apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json, source: "tradition").
//
// 실행: node scripts/add-dream-zhougong-batch9-farm.mjs
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

function citeOnly(id, cultureNote) {
  const symbol = data.symbols.find((s) => s.id === id);
  if (!symbol) throw new Error(`상징 없음: ${id}`);
  symbol.culture_note = cultureNote;
  console.log(`근거 갱신: ${id}`);
}

// **잡은 버그 — "쌀"·"밥"이 한 번도 안 걸리고 있었다.** term_ko가 "쌀·밥"이라 "·"가
// 리터럴이고 별칭도 "곡식"(포괄어)뿐이었다. 둘 다 동형이의어 충돌이 없어(확인함)
// 별칭에 추가한다 — "술(음료)"·"스님·성직자"와 같은 종류(6·8차 배치).
{
  const rice = data.symbols.find((s) => s.id === "rice");
  for (const alias of ["쌀", "밥"]) {
    if (!rice.aliases.includes(alias)) {
      rice.aliases.push(alias);
      console.log(`별칭 추가: rice / ${alias} (한 번도 안 걸리던 결함 수정)`);
    }
  }
}

// 똥 — 기존 "밟거나 몸에 묻음"을 원문으로 확인, 새 문맥은 실수로 지리는 쪽(흉).
// 「尿屎污身主得財」(오줌이나 똥이 몸을 더럽히면 재물을 얻는다) — 기존 긍정 문맥의
// 근거. 「失大小便主失財」(대소변을 실수로 지리면 재물을 잃는다) — 새 문맥의 근거.
citeOnly(
  "feces",
  "중국 고전 《주공해몽》 「尿屎污身主得財」(오줌이나 똥이 몸을 더럽히면 재물을 얻는다)를 근거로 삼았다.",
);
addMeaning(
  "feces",
  {
    context: "대소변을 실수로 지림",
    interpretation_ko: "재물이 흩어질 조짐",
    interpretation_en: "a sign that wealth will be lost",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「尿屎污身主得財」(오줌이나 똥이 몸을 더럽히면 재물을 얻는다)·「失大小便主失財」(대소변을 실수로 지리면 재물을 잃는다)를 근거로 삼았다.",
);

// 소변 — 기존 "시원하게 봄"을 같은 원문으로 확인만 한다(새 문맥 없음).
citeOnly(
  "urine",
  "중국 고전 《주공해몽》 「尿屎污身主得財」(오줌이나 똥이 몸을 더럽히면 재물을 얻는다)를 근거로 삼았다.",
);

// 목욕 — 「沐浴塵土疾病安」(먼지투성이로 목욕하면 병이 낫는다). 깨끗이 씻는 것과는
// 다른, 지저분한 채로 씻는 역설적 길몽이다.
addMeaning(
  "bathing",
  {
    context: "먼지투성이인 채로 목욕함",
    interpretation_ko: "병이 나을 조짐",
    interpretation_en: "a sign of recovering from illness",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「沐浴塵土疾病安」(먼지투성이로 목욕하면 병이 낫는다)을 근거로 삼았다.",
);

// 머리카락 — 「洗頭遷居疾病除」(머리를 감으면 이사하거나 병이 낫는다).
addMeaning(
  "hair",
  {
    context: "머리를 감음",
    interpretation_ko: "이사하거나 병이 나을 조짐",
    interpretation_en: "a sign of moving house or recovering from illness",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「洗頭遷居疾病除」(머리를 감으면 이사하거나 병이 낫는다)를 근거로 삼았다.",
);

// 쌀·밥 — 「米谷堆吉散主凶」(쌀이 쌓이면 길하고 흩어지면 흉하다). 기존 "가득함"과
// 반대 방향이다.
addMeaning(
  "rice",
  {
    context: "쌀이 흩어짐",
    interpretation_ko: "재물이 흩어질 조짐",
    interpretation_en: "a sign that wealth will scatter",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「米谷堆吉散主凶」(쌀이 쌓이면 길하고 흩어지면 흉하다)을 근거로 삼았다.",
);

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
