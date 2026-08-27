// 2026-08-06에 `backfill-dream-meaning-source.mjs`가 "source 필드가 없으면 무조건
// tradition"으로 기계적으로 채웠다. 그 결과 원래 209개 상징(대부분 근거 문헌 없이 AI가
// 상식으로 채운 것)의 의미 대부분이 "전통 근거로 확인됨"처럼 라벨링된 채 방치돼 있었다.
// 화면(`dream/symbol/[id]/page.tsx`)은 `source: "tradition"`을 "전해 오는 뜻" 절에,
// `source: "general"`을 "일반적인 해석"(전통 근거 없음, 사람이 검토) 절에 따로 보여
// 주도록 이미 설계돼 있었는데 — 데이터가 그 구분을 정직하게 안 지키고 있었다(2026-08-27,
// 사용자 지적: "근거도 없는 자료를 기준으로 잡은 게 문제").
//
// 이 스크립트는 git 이력 전체(21개 커�밋)를 손으로 대조해, **실제로 원문 인용
// (「」)이 그 정확한 의미에 붙어 있다고 확인된 것만** "tradition"으로 남기고 나머지는
// 전부 "general"로 되돌린다. 상징 단위(culture_note 존재 여부)가 아니라
// **의미(symbolId+context) 단위**로 골랐다 — 같은 상징 안에서도 어떤 의미는 원문이
// 있고 어떤 의미는 없는 경우가 많았다(예: fire는 "활활 크게 타오름"만 근거가 있고
// "작은 불·꺼져감"은 없다).
//
// 대조 방법: add-dream-*.mjs 배치 스크립트 전부(addMeaning 호출·citeOnly 호출·주석의
// "기존 X를 원문으로 확인" 선언)와, 배치 스크립트가 생기기 전 직접 JSON을 고친 6개
// 커밋(5cf4333 이후 9ced06d·f14c4ca·713dffa·3847fee·dc28636·6eded6c)의 diff를 전부
// 읽어 「」 원문 인용이 실제로 어느 의미에 붙는지 하나씩 확인했다.
//
// 실행: node scripts/reclassify-dream-meaning-source.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.resolve(
  "apps/dreamslink/src/lib/dream-symbols.data.json",
);
const raw = readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

// symbolId -> Set(context) — 원문 인용이 그 의미에 실제로 붙어 있다고 확인된 것만.
const GROUNDED = {
  pig: ["돼지를 죽임", "돼지가 저절로 죽음"],
  death: [
    "자신이 죽음",
    "타인이 죽는 것을 봄",
    "타인에게 살해당함",
    "타인을 죽임",
    "스스로 목숨을 끊음",
    "죽은 사람이 서 있음",
    "죽은 사람이 되살아남",
  ],
  "tooth-fall": ["윗니가 빠짐", "아랫니가 빠짐", "이가 빠졌다가 다시 남"],
  mirror: ["거울이 밝음", "거울이 어두움", "깨진 거울"],
  fire: ["활활 크게 타오름"],
  snake: ["뱀이 용으로 변함", "뱀의 색이 붉거나 검음", "뱀의 색이 푸르거나 초록"],
  dragon: ["용이 죽음", "용을 타고 이동함", "용이 우물에 들어감"],
  tiger: ["호랑이가 집에 들어옴"],
  ox: ["소가 사람을 받음"],
  horse: ["말을 타고 빨리 달림", "말이 느리게 감"],
  fish: ["물고기가 떼지어 헤엄침"],
  turtle: ["거북이를 잡음"],
  sun: ["임신 태몽 아기 아이 임산부 출산"],
  moon: ["임신 태몽 아기 아이 임산부 출산"],
  money: ["돈을 주움", "빌린 돈을 갚음"],
  "found-item": ["돈이나 물건을 주움"],
  breakup: ["연인이나 배우자와 헤어짐"],
  cat: ["고양이가 쥐를 잡음"],
  star: ["별이 품에 듦", "별이 떨어짐", "별을 손에 쥠"],
  rain: ["길에서 비를 만남"],
  wind: ["바람이 옷깃을 스침"],
  lightning: ["번개가 몸을 비침", "벼락을 맞음"],
  cloud: ["구름이 사방에서 일어남"],
  rainbow: ["무지개 색이 검음"],
  earthquake: ["땅이 갈라짐"],
  mountain: ["산에 올랐다가 떨어짐"],
  tree: ["나무가 말라 죽음"],
  flower: ["남에게 꽃을 나눠 줌"],
  stone: ["돌 위에 누움", "임신 태몽 아기 아이 임산부 출산"],
  apple: ["과수원을 거닒"],
  well: ["우물이 마름", "우물에 빠짐"],
  house: ["집에 아무도 없음"],
  umbrella: ["우산을 남에게 나눠 줌"],
  knife: ["칼을 잃어버림"],
  jujube: ["임신 태몽 아기 아이 임산부 출산"],
  persimmon: ["감을 먹음"],
  peach: ["복숭아를 먹음"],
  wine: ["남이 권하는 술을 받음", "술에 취하도록 마심"],
  clothes: ["옷이 갑자기 찢어짐"],
  shoe: ["신발이 해짐"],
  book: ["누군가 글을 가르쳐 줌"],
  letter: ["편지를 써서 보냄"],
  writing: ["쓰던 필기구를 남에게 줌"],
  grave: ["무덤에 나무가 자람", "무덤의 나무가 꺾임"],
  coffin: ["관에 시신을 넣는 것을 봄"],
  marriage: ["남의 결혼을 봄"],
  monk: ["스님이 가르침을 줌", "스님이 경 읽는 모습을 봄"],
  god: ["신에게 맞음", "귀신과 싸움"],
  prison: ["감옥이 무너짐"],
  thief: ["도둑을 쫓아냄", "도둑이 듦", "도둑과 함께 다님"],
  feces: ["똥을 밟거나 몸에 묻음", "대소변을 실수로 지림"],
  urine: ["시원하게 봄"],
  bathing: ["먼지투성이인 채로 목욕함"],
  hair: ["머리를 감음", "머리가 하얗게 셈"],
  rice: ["쌀이 흩어짐"],
  chicken: ["닭이 알을 품음"],
  bird: ["새가 품에 듦"],
  crow: ["까마귀가 다른 새와 시끄럽게 다툼"],
  rat: ["흰 쥐가 길을 인도함"],
  deer: ["사슴이 집 안에 있음"],
  rabbit: ["토끼가 하늘로 오름"],
  gold: ["보석이 품에 가득함"],
  boat: ["배가 부서짐"],
  car: ["몸이 아픈 채로 차를 탐"],
  road: ["길에서 재물을 얻음"],
  bridge: ["다리가 무너진 것을 봄"],
  market: ["사람이 없는 시장을 봄"],
  president: ["높은 사람을 만남", "높은 사람을 만나려다 만나지 못함"],
  bed: ["포근한 이불을 덮음"],
};

let toGeneral = 0;
let keptTradition = 0;
let alreadyGeneral = 0;

for (const symbol of data.symbols) {
  const groundedContexts = new Set(GROUNDED[symbol.id] ?? []);
  for (const meaning of symbol.meanings) {
    if (meaning.source === "general") {
      alreadyGeneral++;
      continue;
    }
    if (groundedContexts.has(meaning.context)) {
      meaning.source = "tradition";
      keptTradition++;
    } else {
      meaning.source = "general";
      toGeneral++;
      console.log(`general로 재분류: ${symbol.id} / ${meaning.context}`);
    }
  }
}

console.log(`\ntradition으로 남음: ${keptTradition}`);
console.log(`general로 재분류됨: ${toGeneral}`);
console.log(`원래부터 general이던 것: ${alreadyGeneral}`);
console.log(`전체: ${keptTradition + toGeneral + alreadyGeneral}`);

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`\ndictVer: ${previousVersion} -> ${data.dictVer}`);
