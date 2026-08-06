// 사전 표제어에 **어간 별칭**을 붙인다.
//
// ## 왜 필요한가
//
// 표제어가 명사형인데(`추락`·`쫓김`·`이빨 빠짐`) 사람은 동사 활용형으로 쓴다("떨어지는",
// "쫓겨서", "이가 빠졌다"). 매칭이 부분 문자열이라 그 둘이 만나지 않는다 — 사전에 있는데도
// 0건이 나온다(2026-08-06 실측).
//
// ## 어간을 고르는 규칙
//
// **짧고 흔한 어간은 넣지 않는다.** `날다`에 "나는"을 넣으면 "나는 학교에 갔다"가 걸리고,
// `오름`에 "오르"를 넣으면 "오른쪽"이 걸린다. 오탐은 미탐보다 나쁘다 — 없는 전통 의미를
// 사실인 양 내보내기 때문이다.
//
//   1. 두 음절 이상
//   2. 꿈 이야기 밖에서 흔히 쓰이는 말이 아닐 것
//   3. 활용 어미 앞까지만 적을 것("떨어지" → 떨어지는/떨어지다/떨어진다를 모두 잡는다)
//
// 넣은 뒤에는 반드시 `scripts/verify-dream-match.ts`를 돌려 오탐 대조군을 확인한다.
//
// 실행: apps/dreamslink 에서  node scripts/add-stem-aliases.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const FILE = path.join(process.cwd(), "src", "lib", "dream-symbols.data.json");

/** 표제어(term_ko) → 더할 어간 별칭. */
const STEMS = {
  "추락": ["떨어지", "떨어졌", "떨어질", "추락하", "굴러떨어"],
  "쫓김": ["쫓기", "쫓겨", "도망치", "도망쳤", "도망갔", "도망가"],
  "이빨 빠짐": ["이가 빠", "이빨 빠", "이가 흔들", "치아가 빠"],
  "날다": ["날았", "날아올", "날아다", "하늘을 날"],
  "우는 것": ["울었", "울고 있", "엉엉 울", "흐느"],
  "웃는 것": ["웃었", "웃고 있", "깔깔"],
  "싸움": ["싸웠", "싸우는", "다퉜", "말다툼"],
  "길 잃음": ["길을 잃", "길을 헤매", "헤맸"],
  "목욕": ["목욕하", "씻었", "샤워"],
  "오름": ["올라갔", "올라가", "기어올"],
  "내려감": ["내려갔", "내려가"],
  "먹는 것": ["먹었", "먹고 있", "먹는 꿈"],
  "물에 빠짐": ["물에 빠", "익사"],
  "출산": ["아기를 낳", "출산하", "애를 낳"],
  "땅 파기": ["땅을 파", "땅을 팠"],
  "잃어버림": ["잃어버", "잃었"],
  "춤": ["춤췄", "춤추", "춤을 추"],
  "노래": ["노래했", "노래를 부", "노래 부"],
  "기도": ["기도했", "기도하"],
  "요리": ["요리했", "요리하", "음식을 만"],
  "쇼핑": ["쇼핑했", "장을 봤"],
  "여행": ["여행했", "여행을 가", "여행 가"],
  "차·기차 놓침": ["기차를 놓", "버스를 놓", "차를 놓", "놓쳤"],
  "지각": ["늦었", "지각했"],
  "숨음": ["숨었", "숨어 있", "숨는"],
  "키스": ["키스했", "입을 맞"],
  "술 마심": ["술을 마시", "술을 마셨", "술에 취"],
  "이사": ["이사했", "이사 가", "이사를 가"],
  "글쓰기": ["글을 쓰", "글을 썼", "편지를 쓰"],
  "그림": ["그림을 그리", "그림을 그렸"],
  "죽음": ["죽었", "죽는 꿈", "돌아가셨"],
  "결혼": ["결혼했", "결혼하", "결혼식"],
  "벌거벗음": ["벌거벗", "알몸", "옷이 벗겨"],
  "시험": ["시험을 봤", "시험을 보", "시험 치"],
};

const data = JSON.parse(readFileSync(FILE, "utf8"));
const byTerm = new Map(data.symbols.map((symbol) => [symbol.term_ko, symbol]));

let added = 0;
const missing = [];
for (const [term, stems] of Object.entries(STEMS)) {
  const symbol = byTerm.get(term);
  if (!symbol) {
    missing.push(term);
    continue;
  }
  const aliases = new Set(symbol.aliases ?? []);
  const before = aliases.size;
  for (const stem of stems) aliases.add(stem);
  symbol.aliases = [...aliases];
  added += aliases.size - before;
}

// **사전을 고치면 판을 올린다.** 캐시 키에 들어가므로 올리지 않으면 옛 해석이 계속 나온다.
const [major, minor] = data.dictVer.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

writeFileSync(FILE, `${JSON.stringify(data, null, 1)}\n`);
console.log(`별칭 ${added}개 추가 · dictVer ${data.dictVer}`);
if (missing.length) console.log(`  표제어를 못 찾음: ${missing.join(", ")}`);
