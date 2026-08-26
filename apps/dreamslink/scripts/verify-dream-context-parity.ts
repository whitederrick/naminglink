// **같은 상황을 적은 한국어 글과 영어 글이 같은 뜻을 고르는가.**
//
// ## 왜 이 검사가 필요한가 (2026-08-07)
//
// 상황(`meaning.context`)은 화면 문구가 아니라 **매칭 키**다 — 「뱀을 품다」와 「뱀에 물리다」를
// 가르는 자리다. 그런데 한국어 하나뿐이라 **22개 언어에서 판별이 통째로 죽어 있었다.**
// 영어 글에서는 한국어 낱말이 안 걸려 점수가 전부 0이 되고 언제나 첫 의미로 떨어졌다:
//
//   "뱀에게 물렸다"    → 구설·건강 주의   ✓
//   "A snake bit me"  → 재물·태몽 가능   ✗
//
// `dream-contexts.ts`로 영어 키워드를 만들었는데, **그 번역이 맞는지 읽어서는 판정할 수 없다.**
// 256개를 사람이 다 검수할 수 없고, 오역 하나가 「무는 것」과 「품는 것」을 뒤집으면 결과가
// 정반대가 된다.
//
// **그래서 뜻을 겨루지 않고 행동을 겨룬다.** 같은 상황을 두 언어로 적어 넣고 **같은 의미가
// 골라지는지** 본다. 오역이 있으면 그 쌍에서 갈라진다. 번역문을 못 읽어도 결과는 셀 수 있다.
//
// ## 무엇을 세지 않는가
//
// **의미가 하나뿐인 상징은 판별을 안 한다**(`chooseMeaning`이 먼저 돌려보낸다). 그런 상징의
// 상황은 영어가 없어도 아무 일이 없으므로 세지 않는다 — 세면 고칠 필요 없는 것을 고치게 된다.
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/verify-dream-context-parity.ts

import { CONTEXT_EN } from "../src/lib/dream-contexts";
import { DREAM_SYMBOLS } from "../src/lib/dream-symbols";
import { matchDream } from "../src/lib/engines/dream-match";

let failures = 0;
function fail(label: string, detail: string) {
  failures += 1;
  console.log(`  ✗ ${label}`);
  console.log(`      ${detail}`);
}

/** 판별이 실제로 일어나는 상황만 모은다. */
const discriminating = DREAM_SYMBOLS.flatMap((symbol) =>
  symbol.meanings.length <= 1
    ? []
    : symbol.meanings
        .filter((meaning) => meaning.context)
        .map((meaning) => ({ symbol, meaning, context: meaning.context as string })),
);

// ---------------------------------------------------------------------------
// 1) 판별에 쓰이는 상황에 영어가 다 있는가
// ---------------------------------------------------------------------------
console.log("판별에 쓰이는 상황의 영어 키워드");
const missing = discriminating.filter((item) => !CONTEXT_EN[item.context]);
for (const item of missing) {
  fail(
    `${item.symbol.term_ko} / ${item.context}`,
    "영어 키워드가 없다 — 영어 글에서 이 의미는 절대 골라지지 않는다",
  );
}
console.log(`  상황 ${discriminating.length}개 · 영어 없음 ${missing.length}개`);

// ---------------------------------------------------------------------------
// 2) 영어 키워드가 상징 이름만으로 이뤄져 있지 않은가
//
// 상징 이름은 점수에서 빠진다(`chooseMeaning`) — 이미 걸려서 온 것이라 판별 정보가 없다.
// 이름만 있으면 그 상황은 **영어가 있으나 마나**이므로 없는 것과 같이 취급해야 한다.
// ---------------------------------------------------------------------------
console.log("\n영어 키워드에 판별할 낱말이 남는가");
let nameOnly = 0;
for (const item of discriminating) {
  const english = CONTEXT_EN[item.context];
  if (!english) continue;
  const own = [item.symbol.term_ko, item.symbol.term_en, ...(item.symbol.aliases ?? [])]
    .filter(Boolean)
    .map((term) => term.toLowerCase());
  const rest = english
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter((word) => word.length >= 2 && !own.includes(word));
  if (rest.length === 0) {
    nameOnly += 1;
    fail(
      `${item.symbol.term_ko} / ${item.context}`,
      `상징 이름뿐이라 판별에 못 쓴다: "${english}"`,
    );
  }
}
console.log(`  판별할 낱말이 없는 상황 ${nameOnly}개`);

// ---------------------------------------------------------------------------
// 3) 같은 상황의 ko·en 문장이 같은 의미를 고르는가 — **이 검사의 본체**
//
// 문장 쌍은 손으로 적는다. 상황을 기계로 문장화하면 그 문장이 바로 키워드라 언제나 통과하고,
// **검사가 자기 자신을 확인하는 꼴**이 된다. 이용자가 쓸 법한 말로 적어야 뜻이 있다.
// ---------------------------------------------------------------------------
/**
 * **영어 문장은 `dream-contexts.ts`를 보지 않고 한국어 상황만 보고 적었다.**
 *
 * 키워드를 보고 적으면 그 키워드를 되비추게 되고, 검사가 「내가 적은 낱말이 내가 적은 낱말과
 * 맞는가」를 묻는 꼴이 된다. 이용자가 쓸 법한 말로 적어야 키워드가 실제로 쓸모 있는지 드러난다.
 *
 * 의미가 여럿인 상징 39개 중 **상황으로 갈리는 것을 모두** 넣었다(나머지는 태몽 신호로
 * 갈리므로 아래에서 따로 센다).
 */
const PAIRS: Array<{ id: string; label: string; ko: string; en: string }> = [
  { id: "snake", label: "뱀 — 품다", ko: "뱀을 품에 안았다", en: "I picked up a snake and held it" },
  { id: "snake", label: "뱀 — 물리다", ko: "뱀에게 물렸다", en: "a snake bit my hand" },
  { id: "dog", label: "개 — 온순", ko: "온순한 개가 다가왔다", en: "a gentle dog came up to me" },
  { id: "dog", label: "개 — 물림", ko: "개에게 물렸다", en: "a dog bit my leg" },
  { id: "rat", label: "쥐 — 곡식 모음", ko: "쥐가 곡식을 모으고 있었다", en: "a rat was gathering grain" },
  { id: "rat", label: "쥐 — 갉음", ko: "쥐가 물건을 갉았다", en: "a rat gnawed through my things" },
  { id: "bee", label: "벌 — 벌떼", ko: "벌떼가 날아다녔다", en: "a swarm of bees was flying" },
  { id: "bee", label: "벌 — 쏘임", ko: "벌에 쏘였다", en: "a bee stung me" },
  { id: "spider", label: "거미 — 아침", ko: "아침 거미를 보았다", en: "I saw a spider in the morning" },
  { id: "spider", label: "거미 — 얽힘", ko: "거미줄에 얽혔다", en: "I got tangled in a spider web" },
  { id: "flood", label: "홍수 — 맑은 물", ko: "맑은 물의 큰 홍수가 났다", en: "a huge flood of clear water rose" },
  { id: "flood", label: "홍수 — 휩쓸림", ko: "홍수에 휩쓸렸다", en: "I was swept away by the flood" },
  { id: "sea", label: "바다 — 잔잔", ko: "잔잔한 바다를 보았다", en: "the sea was calm and still" },
  { id: "sea", label: "바다 — 거친 파도", ko: "바다에 거친 파도가 몰아쳤다", en: "rough waves crashed against me" },
  { id: "rain", label: "비 — 단비", ko: "오랜 가뭄 끝에 비가 내려 단비 같았다", en: "a welcome rain finally fell" },
  { id: "rain", label: "비 — 궂은 비", ko: "궂은 비가 계속 내렸다", en: "dreary rain kept falling all day" },
  { id: "rain", label: "비 — 길에서 만남", ko: "길을 가다가 비를 만났다", en: "I encountered rain on the road" },
  { id: "star", label: "별 — 떨어짐", ko: "별이 떨어지는 것을 보았다", en: "I saw a star falling" },
  { id: "star", label: "별 — 손에 쥠", ko: "별을 손에 꼭 쥐었다", en: "I grasped a star tightly in my hand" },
  { id: "wind", label: "바람 — 강함", ko: "강한 바람이 불었다", en: "a strong wind was blowing" },
  { id: "wind", label: "바람 — 옷깃을 스침", ko: "바람이 옷깃을 스치고 지나갔다", en: "the wind brushed against my collar" },
  { id: "lightning", label: "번개 — 몸을 비침", ko: "번개가 내 몸을 환하게 비췄다", en: "lightning lit up my body with a flash" },
  { id: "lightning", label: "번개 — 벼락을 맞음", ko: "벼락을 맞았다", en: "I was struck by a bolt of lightning" },
  { id: "rainbow", label: "무지개 — 선명함", ko: "선명한 무지개가 떴다", en: "a vivid rainbow appeared" },
  { id: "rainbow", label: "무지개 — 검음", ko: "무지개의 색이 검었다", en: "the rainbow was black" },
  { id: "fire", label: "불 — 크게", ko: "불이 활활 크게 타올랐다", en: "a fire blazed up enormously" },
  { id: "fire", label: "불 — 꺼져감", ko: "작은 불이 꺼져 갔다", en: "a small fire was dying out" },
  { id: "flower", label: "꽃 — 활짝", ko: "활짝 핀 꽃을 보았다", en: "I saw flowers in full bloom" },
  { id: "flower", label: "꽃 — 시듦", ko: "시든 꽃이 있었다", en: "the flowers had withered" },
  { id: "snow", label: "눈 — 깨끗", ko: "깨끗한 눈이 쌓였다", en: "clean white snow had piled up" },
  { id: "snow", label: "눈 — 눈보라", ko: "눈보라가 몰아쳐 눈 속에 갇혔다", en: "I was trapped in a blizzard" },
  { id: "cloud", label: "구름 — 오색", ko: "오색구름이 떴다", en: "clouds of many colors appeared" },
  { id: "cloud", label: "구름 — 먹구름", ko: "먹구름이 몰려왔다", en: "dark storm clouds gathered" },
  { id: "cloud", label: "구름 — 사방에서 일어남", ko: "구름이 사방에서 일어났다", en: "clouds began rising in every direction" },
  { id: "tooth-fall", label: "이 — 윗니", ko: "윗니가 하나 빠졌다 이가 빠지는 꿈이었다", en: "my upper tooth fell out" },
  { id: "tooth-fall", label: "이 — 피 없이", ko: "피 없이 이가 빠졌다", en: "a tooth fell out without any blood" },
  { id: "hair", label: "머리 — 빠짐", ko: "머리카락이 자꾸 빠졌다", en: "my hair kept falling out" },
  { id: "hair", label: "머리 — 자름", ko: "머리카락을 짧게 잘랐다", en: "I cut my hair short" },
  { id: "naked", label: "벌거벗음 — 사람 앞", ko: "사람들 앞에서 벌거벗었다", en: "I was naked in front of a crowd" },
  { id: "naked", label: "벌거벗음 — 개의치 않음", ko: "벌거벗었지만 개의치 않았다", en: "I was naked but did not care at all" },
  { id: "flying", label: "날다 — 자유", ko: "자유롭게 하늘을 날았다", en: "I was flying freely through the sky" },
  { id: "flying", label: "날다 — 두려움", ko: "날다가 떨어질까 두려웠다", en: "while flying I feared I would fall" },
  { id: "money", label: "돈 — 들어옴", ko: "돈이 들어왔다", en: "money came in to me" },
  { id: "money", label: "돈 — 주움", ko: "길에서 돈을 주웠다", en: "I picked up money on the street" },
  { id: "ring", label: "반지 — 낌", ko: "반지를 손가락에 꼈다", en: "I put a ring on my finger" },
  { id: "ring", label: "반지 — 잃음", ko: "반지를 잃어버렸다", en: "I lost my ring" },
  { id: "knife", label: "칼 — 쥠", ko: "칼을 손에 쥐었다", en: "I held a knife in my hand" },
  { id: "knife", label: "칼 — 다침", ko: "칼에 손을 다쳤다", en: "I was cut by a knife" },
  { id: "shoe", label: "신발 — 새것", ko: "새 신발을 신었다", en: "I put on new shoes" },
  { id: "shoe", label: "신발 — 잃음", ko: "신발을 잃어버렸다", en: "I lost my shoes" },
  { id: "mirror", label: "거울 — 봄", ko: "거울을 들여다보았다", en: "I looked into the mirror" },
  { id: "mirror", label: "거울 — 깨짐", ko: "거울이 깨졌다", en: "the mirror was broken" },
  { id: "house", label: "집 — 크고 좋음", ko: "크고 좋은 집이 있었다", en: "there was a large fine house" },
  { id: "house", label: "집 — 허물어짐", ko: "집이 허물어졌다", en: "the house was collapsing" },
  { id: "car", label: "자동차 — 잘 몲", ko: "차를 잘 몰았다", en: "I was driving smoothly" },
  { id: "car", label: "자동차 — 사고", ko: "브레이크가 고장 나 사고가 났다", en: "the brakes failed and I crashed" },
  { id: "baby", label: "아기 — 예쁨", ko: "예쁜 아기가 웃었다", en: "a lovely baby smiled at me" },
  { id: "baby", label: "아기 — 울음", ko: "아기가 계속 울었다", en: "a baby kept crying" },
  { id: "toilet", label: "화장실 — 깨끗", ko: "깨끗한 화장실에 갔다", en: "I went into a clean toilet" },
  { id: "toilet", label: "화장실 — 더러움", ko: "더러운 화장실이었다", en: "the toilet was filthy" },
  { id: "tiger", label: "호랑이 — 탐", ko: "호랑이를 타고 달렸다", en: "I rode on a tiger" },
  { id: "tiger", label: "호랑이 — 쫓김", ko: "호랑이에게 쫓겼다", en: "a tiger chased after me" },
  { id: "ancestor", label: "조상 — 밝음", ko: "돌아가신 할아버지가 환하게 웃으셨다", en: "my late grandfather smiled brightly" },
  { id: "ancestor", label: "조상 — 어두움", ko: "돌아가신 분이 어두운 얼굴로 무언가를 요구했다", en: "the deceased looked dark and demanded something" },
];

console.log("\n같은 상황을 두 언어로 적으면 같은 뜻이 나오는가");
for (const pair of PAIRS) {
  /**
   * **`matched[0]`이 아니라 그 상징을 찾는다.**
   *
   * 실제 문장에는 상징이 여럿 걸린다 — 「쥐가 곡식을 모으고 있었다」는 쥐와 곡식이 함께
   * 걸리고, 어느 쪽이 앞에 오는지는 무게와 위치가 정한다. 첫 번째끼리 겨루면 **판별과 무관한
   * 차이를 결함으로 신고한다**(처음에 그렇게 만들어 여섯 건이 거짓으로 걸렸다).
   */
  const ko = matchDream(pair.ko).matched.find((item) => item.id === pair.id);
  const en = matchDream(pair.en).matched.find((item) => item.id === pair.id);
  if (!ko || !en) {
    fail(pair.label, `${pair.id}이(가) 안 걸렸다 — ko ${ko ? "○" : "✗"} / en ${en ? "○" : "✗"}`);
    continue;
  }
  if (ko.meaning.interpretation_ko !== en.meaning.interpretation_ko) {
    fail(
      pair.label,
      `고른 뜻이 다르다\n        ko → ${ko.meaning.interpretation_ko}\n        en → ${en.meaning.interpretation_ko}`,
    );
  }
}
console.log(`  문장 쌍 ${PAIRS.length}개`);

// ---------------------------------------------------------------------------
// 대조군 — 검사가 살아 있는지 증명한다.
//
// 실제로 갈려야 하는 쌍이 갈리는지 본다. 이것이 통과하지 못하면 위 결과는 「판별이 잘 된다」가
// 아니라 「판별이 아무 일도 안 한다」일 수 있다.
// ---------------------------------------------------------------------------
console.log("\n대조군 — 정반대 상황이 실제로 갈리는가");
for (const [label, a, b] of [
  ["ko 뱀", "뱀을 품에 안았다", "뱀에게 물렸다"],
  ["en 뱀", "I held a snake in my arms", "a snake bit me"],
] as const) {
  const first = matchDream(a).matched[0];
  const second = matchDream(b).matched[0];
  const split =
    first && second && first.meaning.interpretation_ko !== second.meaning.interpretation_ko;
  if (!split) {
    fail(`대조군 ${label}`, "정반대 상황인데 같은 뜻이 나온다 — 판별이 죽어 있다");
  } else {
    console.log(`  ✓ ${label} — 갈린다`);
  }
}

console.log(`\n실패 ${failures}건`);
process.exit(failures > 0 ? 1 : 0);
