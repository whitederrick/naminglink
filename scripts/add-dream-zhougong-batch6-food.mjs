// 주공해몽(周公解夢) 원문 6차 배치 — 冠帶衣服鞋襪·飲食酒肉瓜菜 갈래에서 아직 안 쓴
// 상징(대추·감·복숭아·술·옷·신발)에 새 문맥을 더한다.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다
// (apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json, source: "tradition").
//
// 실행: node scripts/add-dream-zhougong-batch6-food.mjs
//
// 뒤따를 것 (같은 파일에 손대지 말고 별도로):
//   1. apps/dreamslink/src/lib/dream-contexts-ko.ts 에 새 CONTEXT_KO 항목 추가
//   2. apps/dreamslink/src/lib/dream-contexts.ts 에 영어 키워드를 손으로 추가
//      (build-dream-contexts.ts는 돌리지 말 것 — CLAUDE.md §10 #49)
//   3. verify-dream-context-parity.ts · verify-dream-match.ts · verify-guide-numbers.ts로 확인
//   4. **통과한 뒤에도 새 문맥 전부를 matchDream에 직접 태워 정답을 재확인한다** —
//      4·5차 배치 둘 다 자동 시험은 통과했는데 실제로는 틀린 문맥을 고르고 있었다
//      (CLAUDE.md §10 #51·#52). 이 확인 없이 끝내지 않는다.

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

/** 새 의미 없이, 이미 있는 단일 의미에 원문 근거만 붙인다. */
function citeOnly(id, cultureNote) {
  const symbol = data.symbols.find((s) => s.id === id);
  if (!symbol) throw new Error(`상징 없음: ${id}`);
  if (symbol.culture_note) {
    console.log(`이미 근거 있음, 건너뜀: ${id}`);
    return;
  }
  symbol.culture_note = cultureNote;
  console.log(`근거만 추가: ${id}`);
}

// 대추 — 기존 태몽 의미를 그대로 확인해 주는 원문. 새 문맥은 없다.
// 「食棗者主生貴子」(대추를 먹으면 귀한 자식을 낳는다).
citeOnly(
  "jujube",
  "중국 고전 《주공해몽》 「食棗者主生貴子」(대추를 먹으면 귀한 자식을 낳는다)를 근거로 삼았다.",
);

// 감 — 기존 태몽 의미와 별개로, 「食柿食柑主疾病」(감이나 귤을 먹으면 질병이 생긴다)은
// 흉조를 말한다. 태몽과 질병 둘 다 전통에 있으므로 나란히 둔다.
addMeaning(
  "persimmon",
  {
    context: "감을 먹음",
    interpretation_ko: "질병을 조심할 조짐",
    interpretation_en: "a caution about illness",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「食柿食柑主疾病」(감이나 귤을 먹으면 질병이 생긴다)을 근거로 삼았다. 태몽 쪽 통설과는 별개의 흉조다.",
);

// 복숭아 — 「食柿桃離而復合」(감이나 복숭아를 먹으면 헤어졌던 사람과 다시 만난다).
addMeaning(
  "peach",
  {
    context: "복숭아를 먹음",
    interpretation_ko: "헤어진 사람과 다시 만날 조짐",
    interpretation_en: "a sign of reuniting with someone you parted from",
    polarity: "positive",
    source: "tradition",
  },
  "장수·연애의 상징으로 통하던 것에 더해, 중국 고전 《주공해몽》 「食柿桃離而復合」(감이나 복숭아를 먹으면 헤어졌던 사람과 다시 만난다)는 근거도 있다.",
);

// 술 — 남이 청하는 술을 받음(길) · 취하도록 마심(흉).
// 「人請飲酒主長命」(남이 청하는 술을 받으면 장수한다), 「飲酒至醉主疾病」(취하도록
// 마시면 질병이 온다).
addMeaning(
  "wine",
  {
    context: "남이 권하는 술을 받음",
    interpretation_ko: "장수할 조짐",
    interpretation_en: "a sign of long life",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「人請飲酒主長命」(남이 청하는 술을 받으면 장수한다)·「飲酒至醉主疾病」(취하도록 마시면 질병이 온다)을 근거로 삼았다.",
);
addMeaning(
  "wine",
  {
    context: "술에 취하도록 마심",
    interpretation_ko: "질병을 조심할 조짐",
    interpretation_en: "a caution about illness",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「人請飲酒主長命」(남이 청하는 술을 받으면 장수한다)·「飲酒至醉主疾病」(취하도록 마시면 질병이 온다)을 근거로 삼았다.",
);

// 옷 — 「衣服忽破妻外心」(옷이 갑자기 찢어지면 배우자의 외도를 뜻한다). 특정 인물을
// 지목하는 서술 대신 "가정의 근심"으로 완화했다(§의례 축 서술 원칙과 같은 이유).
addMeaning(
  "clothes",
  {
    context: "옷이 갑자기 찢어짐",
    interpretation_ko: "가정에 근심이 생길 조짐",
    interpretation_en: "a sign of trouble at home",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「衣服忽破妻外心」(옷이 갑자기 찢어지면 가정에 근심이 생긴다)을 근거로 삼았다.",
);

// 신발 — 「鞋破子孫妻妾病」(신발이 해지면 자손이나 배우자가 병든다). 기존 "잃음"과는
// 다른, 닳아 해지는 쪽의 흉조다.
addMeaning(
  "shoe",
  {
    context: "신발이 해짐",
    interpretation_ko: "가족의 건강을 조심할 조짐",
    interpretation_en: "a caution about a family member's health",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「鞋破子孫妻妾病」(신발이 해지면 자손이나 배우자가 병든다)을 근거로 삼았다.",
);

// **잡은 버그 — "술" 자체가 한 번도 안 걸리고 있었다.** `term_ko`가 "술(음료)"로 괄호가
// 붙어 있는데, `findTerm`은 "/"로만 여러 이름을 가른다 — "·"·"()"는 그대로 리터럴이라
// "술(음료)"이라는 문자열 전체가 있어야 걸린다. 별칭도 "와인"(외래어)뿐이라, **평범한
// "술을 마셨다" 문장은 이 상징이 생긴 이래 한 번도 안 걸렸다.** 이번 배치로 이 상징을
// 처음 실제로 시험해 보다가 드러났다. "술"을 별칭에 추가한다(다른 상징과 안 겹침, 확인함).
{
  const wine = data.symbols.find((s) => s.id === "wine");
  if (!wine.aliases.includes("술")) {
    wine.aliases.push("술");
    console.log("별칭 추가: wine / 술 (한 번도 안 걸리던 결함 수정)");
  }
}

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
