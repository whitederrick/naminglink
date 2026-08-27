// 주공해몽(周公解夢) 원문 7차 배치 — 文書筆硯兵器·塚墓棺槨迎送·夫妻產孕交懽 갈래에서
// 아직 안 쓴 상징(책·편지·글쓰기·무덤·관·결혼)에 새 문맥을 더한다.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다
// (apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json, source: "tradition").
//
// 실행: node scripts/add-dream-zhougong-batch7-writing.mjs
//
// 뒤따를 것 (같은 파일에 손대지 말고 별도로):
//   1. apps/dreamslink/src/lib/dream-contexts-ko.ts 에 새 CONTEXT_KO 항목 추가
//   2. apps/dreamslink/src/lib/dream-contexts.ts 에 영어 키워드를 손으로 추가
//      (build-dream-contexts.ts는 돌리지 말 것 — CLAUDE.md §10 #49)
//   3. verify-dream-context-parity.ts · verify-dream-match.ts · verify-guide-numbers.ts로 확인
//   4. **통과한 뒤에도 새 문맥 전부를 matchDream에 직접 태워 정답을 재확인한다**
//      (CLAUDE.md §10 #51·#52 — 4·5차 배치 둘 다 자동 시험은 통과했는데 실제로는
//      틀린 문맥을 고르고 있었다)
//   5. 상징을 처음 실제로 시험해 볼 때 term_ko/term_en에 괄호·슬래시가 있는데 평범한
//      낱말이 안 걸리지는 않는지 본다("술(음료)" 사고, 6차 배치)

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

// 책 — 「有人教書大富貴」(남이 글을 가르쳐 주면 크게 부귀하다).
addMeaning(
  "book",
  {
    context: "누군가 글을 가르쳐 줌",
    interpretation_ko: "큰 부귀를 얻을 조짐",
    interpretation_en: "a sign of great wealth and honor",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「有人教書大富貴」(남이 글을 가르쳐 주면 크게 부귀하다)를 근거로 삼았다.",
);

// 편지 — 「封書信者主通達」(편지를 봉해 보내면 뜻이 통한다). 기존 "받음"과 반대 방향
// (보내는 쪽)이다.
addMeaning(
  "letter",
  {
    context: "편지를 써서 보냄",
    interpretation_ko: "뜻이 통하고 일이 풀릴 조짐",
    interpretation_en: "a sign that things will go smoothly and be understood",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「封書信者主通達」(편지를 봉해 보내면 뜻이 통한다)을 근거로 삼았다.",
);

// 글쓰기 — 「人將己筆文章退」(자신의 붓을 남에게 주면 글솜씨가 물러난다). 물건을
// 남에게 주는 것이 흉조라는 통설이 이번 배치(6차 우산·꽃)와도 같은 결이다.
addMeaning(
  "writing",
  {
    context: "쓰던 필기구를 남에게 줌",
    interpretation_ko: "실력이나 기회를 잃을 조짐",
    interpretation_en: "a sign of losing skill or opportunity",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「人將己筆文章退」(자신의 붓을 남에게 주면 글솜씨가 물러난다)를 근거로 삼았다.",
);

// 무덤 — 나무가 자람(길) · 나무가 꺾임(흉). 「塚墓生樹吉折凶」(무덤에 나무가 자라면
// 길하고 꺾이면 흉하다) 한 줄이 두 문맥의 근거다.
addMeaning(
  "grave",
  {
    context: "무덤에 나무가 자람",
    interpretation_ko: "길한 조짐",
    interpretation_en: "an auspicious sign",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「塚墓生樹吉折凶」(무덤에 나무가 자라면 길하고 꺾이면 흉하다)을 근거로 삼았다.",
);
addMeaning(
  "grave",
  {
    context: "무덤의 나무가 꺾임",
    interpretation_ko: "흉한 조짐",
    interpretation_en: "an inauspicious sign",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「塚墓生樹吉折凶」(무덤에 나무가 자라면 길하고 꺾이면 흉하다)을 근거로 삼았다.",
);

// 관 — 「棺殮死人主得財」(관에 시신을 넣는 것을 보면 재물을 얻는다). 기존 "관을 봄"과는
// 구체적으로 다른 장면(시신을 넣는 순간)이다.
addMeaning(
  "coffin",
  {
    context: "관에 시신을 넣는 것을 봄",
    interpretation_ko: "재물을 얻을 조짐",
    interpretation_en: "a sign of gaining wealth",
    polarity: "positive",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「棺殮死人主得財」(관에 시신을 넣는 것을 보면 재물을 얻는다)를 근거로 삼았다.",
);

// 결혼 — 「見嫁娶及孝主凶」(남의 혼인이나 상복 입은 것을 보면 흉하다). 기존 "본인의
// 결혼"과 다른, 남의 혼인을 지켜보는 쪽이다.
addMeaning(
  "marriage",
  {
    context: "남의 결혼을 봄",
    interpretation_ko: "근심거리가 생길 조짐",
    interpretation_en: "a sign of upcoming worry",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「見嫁娶及孝主凶」(남의 혼인을 보면 흉하다)을 근거로 삼았다. 본인의 결혼과는 다른 방향이다.",
);

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
