// 주공해몽(周公解夢) 원문 12차 배치 — 身體面目齒髮·帝王文武呼召·水火盜賊燈燭·
// 衣帳毯褥匙櫡 갈래에서 기존 상징(머리카락·대통령/임금·도둑·벌거벗음·침대)과 겹치는
// 줄을 골라 새 문맥을 더한다.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다
// (apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json, source: "tradition").
//
// 실행: node scripts/add-dream-zhougong-batch12-body.mjs
//
// 뒤따를 것 (같은 파일에 손대지 말고 별도로):
//   1. apps/dreamslink/src/lib/dream-contexts-ko.ts 에 새 CONTEXT_KO 항목 추가
//      (표에 없으면 화면 문구가 그대로 매칭 키가 돼 늘 이긴다)
//   2. apps/dreamslink/src/lib/dream-contexts.ts 에 영어 키워드를 손으로 추가
//      (build-dream-contexts.ts는 돌리지 말 것 — CLAUDE.md §10 #49)
//   3. term_ko/term_en에 "·"·"/"가 있는 상징(president: 대통령·임금)은 새 의미를
//      추가하기 전에 own-term 누출·별칭 공백을 먼저 확인한다(클렌징 배치의 교훈)
//   4. verify-dream-context-parity.ts · verify-dream-match.ts · verify-guide-numbers.ts로 확인
//   5. 통과한 뒤에도 새 문맥 전부를 matchDream에 직접 태워 정답을 재확인한다

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

function addAlias(id, alias, why) {
  const symbol = data.symbols.find((s) => s.id === id);
  if (!symbol) throw new Error(`상징 없음: ${id}`);
  if (!symbol.aliases.includes(alias)) {
    symbol.aliases.push(alias);
    console.log(`별칭 추가: ${id} / ${alias} (${why})`);
  }
}

// 머리카락 — 「頭白主長命大吉」(머리가 하얗게 세면 장수의 길조다). 기존 세 문맥
// (빠짐·자름·감음)과 다른, 저절로 하얗게 세는 쪽이다.
addMeaning(
  "hair",
  {
    context: "머리가 하얗게 셈",
    interpretation_ko: "장수할 길조",
    interpretation_en: "a sign of long life",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「洗頭遷居疾病除」(머리를 감으면 이사하거나 병이 낫는다)· 「頭白主長命大吉」(머리가 하얗게 세면 장수한다)을 근거로 삼았다.",
);

// 대통령·임금 — 기존 "높은 사람을 만남"의 근거를 「王侯並坐大吉利」(왕후와 나란히
// 앉으면 크게 길하다)로 보강하고, 반대로 만나지 못하는 쪽 「來見貴人不得凶」(귀인을
// 만나러 왔다가 만나지 못하면 흉하다)을 새 문맥으로 더한다.
addMeaning(
  "president",
  {
    context: "높은 사람을 만나려다 만나지 못함",
    interpretation_ko: "일이 뜻대로 풀리지 않을 조짐",
    interpretation_en: "a sign that things won't go as planned",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「王侯並坐大吉利」(왕후와 나란히 앉으면 크게 길하다)· 「來見貴人不得凶」(귀인을 만나러 왔다가 만나지 못하면 흉하다)을 근거로 삼았다.",
);
addAlias("president", "귀인", "「王侯並坐大吉利」·「來見貴人不得凶」의 매칭 낱말");

// 도둑 — 기존 "도둑이 듦"의 근거를 「強賊入宅主家破」(강도가 집에 들면 집안이
// 망한다)로 보강하고, 반대로 도둑과 동행하는 역설적 길몽 「與賊同行大吉利」(도둑과
// 함께 다니면 크게 길하다)을 새 문맥으로 더한다.
addMeaning(
  "thief",
  {
    context: "도둑과 함께 다님",
    interpretation_ko: "뜻밖에 크게 길한 조짐",
    interpretation_en: "an unexpectedly very auspicious sign",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「趕賊行見者大吉」(도둑을 쫓아가는 것을 보면 크게 길하다)· 「強賊入宅主家破」(강도가 집에 들면 집안이 망한다)· 「與賊同行大吉利」(도둑과 함께 다니면 크게 길하다)를 근거로 삼았다.",
);

// 벌거벗음 — 「露體無衣大吉利」(몸을 드러내고 옷이 없으면 크게 길하다)는 원문에
// 있었지만 뺐다. 기존 "사람들 앞에서"(수치)·"개의치 않음"과 언어적으로 구분되는
// 매칭 키를 만들 수 없어(둘 다 "벗었다"류 서술을 그대로 쓴다) 억지로 채우지 않는다.

// 침대 — 「好被自蓋主大吉」(좋은 이불을 스스로 덮으면 크게 길하다). "이불"만 나오고
// "침대"는 안 나오는 문장도 있어 한국어 별칭에 "이불"을 추가한다(시험하다 발견, ko
// 쪽도 안 걸리고 있었다). 영어는 이 별칭 표(aliases)에 안 실리므로
// dream-aliases-en.ts의 ALIASES_EN.bed에 "blanket"·"quilt"를 손으로 추가했다
// (별도 파일 — build-dream-aliases-en.ts는 안 돌림).
addAlias("bed", "이불", "「好被自蓋主大吉」 새 문맥이 '침대' 없이 '이불'만으로도 걸려야 함");
addMeaning(
  "bed",
  {
    context: "포근한 이불을 덮음",
    interpretation_ko: "크게 길한 조짐",
    interpretation_en: "a strongly auspicious sign",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「好被自蓋主大吉」(좋은 이불을 스스로 덮으면 크게 길하다)를 근거로 삼았다.",
);

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
