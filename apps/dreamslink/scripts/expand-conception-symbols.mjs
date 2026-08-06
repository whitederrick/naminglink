// 태몽 상징을 넓힌다. **손으로 JSON을 고치지 않는다** — 209개를 눈으로 맞추면 반드시 빠진다.
//
// 실행: apps/dreamslink 에서  node scripts/expand-conception-symbols.mjs
//
// ## 무엇을 하는가
//
// 1. 이미 사전에 있는 대표 태몽 상징에 `태몽` 태그를 붙이고, **태몽 맥락의 의미를 하나 더한다.**
// 2. 사전에 없는 대표 태몽 상징을 새로 넣는다.
// 3. `dictVer`를 올린다 — 캐시 키에 들어가므로 안 올리면 옛 해석이 계속 나온다.
//
// ## 왜 의미를 "더하는가" (바꾸지 않고)
//
// 돼지꿈은 보통 재물 꿈이고, 임신한 사람이 꾸면 태몽으로 읽힌다. **둘 다 참이다.** 그래서 기존
// 의미를 갈아치우지 않고 태몽 의미를 나란히 둔다. 어느 쪽을 고를지는 엔진이 꿈 텍스트로 정한다
// (`chooseMeaning` — context의 낱말이 꿈에 나오는지 센다). 임신·태몽·아기 같은 말이 없으면
// 원래 의미가 그대로 나온다.
//
// ## 성별은 단정하지 않는다
//
// 전통에서 "아들 태몽·딸 태몽"으로 보아 온 것은 서술로 남기되, **판정하지 않는다.** 문장은
// "전통적으로 …로 보았다"까지만 간다. 태몽으로 성별을 맞힌다는 근거는 없고, 서비스가 단정하면
// 그 자체가 문제가 된다. PDF 고지에도 같은 말이 들어간다.

import { readFileSync, writeFileSync } from "node:fs";

const PATH = new URL("../src/lib/dream-symbols.data.json", import.meta.url);
const NEXT_DICT_VERSION = "1.2.0";

/** 태몽 의미가 골라지는 상황. 이 낱말들이 꿈에 있으면 아래 의미가 선택된다. */
const CONCEPTION_CONTEXT = "임신 태몽 아기 아이 임산부 출산";

/** 이미 사전에 있는 상징에 태몽 맥락을 더한다. */
const ADD_TO_EXISTING = {
  pig: "전통적으로 재물복을 지닌 아이의 태몽으로 보았다",
  fish: "전통적으로 귀한 자식을 얻는 태몽으로 보았다",
  tiger: "전통적으로 기개가 큰 아이의 태몽으로 보았다",
  ox: "전통적으로 부지런하고 복이 있는 아이의 태몽으로 보았다",
  horse: "전통적으로 활달하고 크게 나아가는 아이의 태몽으로 보았다",
  deer: "전통적으로 귀하고 순한 아이의 태몽으로 보았다",
  turtle: "전통적으로 장수하는 아이의 태몽으로 보았다",
  phoenix: "전통적으로 귀한 자식의 태몽으로 보았다",
  flower: "전통적으로 딸의 태몽으로 보아 온 상징이다",
  sun: "전통적으로 귀한 아이의 태몽으로 보았다",
  moon: "전통적으로 딸의 태몽으로 보아 온 상징이다",
  pearl: "전통적으로 귀한 딸의 태몽으로 보아 온 상징이다",
  apple: "전통적으로 딸의 태몽으로 보아 온 상징이다",
  egg: "전통적으로 새 생명이 깃드는 태몽으로 보았다",
};

/** 사전에 없던 대표 태몽 상징. */
const NEW_SYMBOLS = [
  ["chestnut", "밤", "chestnut", ["밤송이"], "object", ["태몽", "자손"], "전통적으로 자손을 얻는 태몽으로 보았다"],
  ["jujube", "대추", "jujube", ["대추나무"], "object", ["태몽", "자손"], "전통적으로 자손을 얻는 태몽으로 보았다"],
  ["persimmon", "감", "persimmon", ["홍시"], "object", ["태몽", "결실"], "전통적으로 결실과 자손의 태몽으로 보았다"],
  ["grape", "포도", "grapes", ["포도송이"], "object", ["태몽", "다산"], "전통적으로 자손이 번성하는 태몽으로 보았다"],
  ["chili", "고추", "chili pepper", ["붉은 고추"], "object", ["태몽"], "전통적으로 아들의 태몽으로 보아 온 상징이다"],
  ["ring", "반지", "ring", ["가락지"], "object", ["태몽", "귀함"], "전통적으로 귀한 딸의 태몽으로 보아 온 상징이다"],
  ["bead", "구슬", "bead", ["옥구슬"], "object", ["태몽", "귀함"], "전통적으로 귀한 자식의 태몽으로 보았다"],
];

const data = JSON.parse(readFileSync(PATH, "utf8"));
const byId = new Map(data.symbols.map((symbol) => [symbol.id, symbol]));

let tagged = 0;
let added = 0;
const missing = [];

for (const [id, interpretation] of Object.entries(ADD_TO_EXISTING)) {
  const symbol = byId.get(id);
  if (!symbol) {
    missing.push(id);
    continue;
  }
  symbol.tags = [...new Set([...(symbol.tags ?? []), "태몽"])];
  const already = symbol.meanings.some((meaning) => meaning.context === CONCEPTION_CONTEXT);
  if (!already) {
    symbol.meanings.push({
      context: CONCEPTION_CONTEXT,
      interpretation_ko: interpretation,
      interpretation_en: "traditionally read as a conception dream",
      polarity: "positive",
    });
  }
  tagged += 1;
}

for (const [id, ko, en, aliases, category, tags, interpretation] of NEW_SYMBOLS) {
  if (byId.has(id)) continue;
  data.symbols.push({
    id,
    term_ko: ko,
    term_en: en,
    aliases,
    category,
    polarity: "positive",
    tags,
    weight: 2,
    meanings: [
      {
        context: CONCEPTION_CONTEXT,
        interpretation_ko: interpretation,
        interpretation_en: "traditionally read as a conception dream",
        polarity: "positive",
      },
    ],
  });
  added += 1;
}

// **못 찾은 id가 있으면 실패로 끝낸다.** 조용히 넘어가면 넓힌 줄 알고 넘어간다.
if (missing.length) {
  console.error("사전에 없는 id:", missing.join(", "));
  process.exit(1);
}

data.dictVer = NEXT_DICT_VERSION;
writeFileSync(PATH, JSON.stringify(data, null, 1) + "\n");

const total = data.symbols.filter((symbol) => (symbol.tags ?? []).includes("태몽")).length;
console.log(`태몽 태그 부여 ${tagged}개 · 신규 상징 ${added}개`);
console.log(`태몽 상징 합계 ${total}개 · 전체 ${data.symbols.length}개 · dictVer ${data.dictVer}`);
