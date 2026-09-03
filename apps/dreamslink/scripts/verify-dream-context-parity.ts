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

import { CONTEXT_EN_V2 as CONTEXT_EN } from "../src/lib/dream-contexts.v2";
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
// v2 표의 키는 `상징id::상황`이다(옛 표는 상황 문구만 써서 두 상징이 같은 문구를
// 쓰면 한쪽이 조용히 사라졌다). 엔진의 `contextFor`와 **같은 키로** 물어야 한다 —
// 다른 키로 물으면 이 검사기가 다른 것을 보게 된다(CLAUDE.md §「검사기가 다른 것을 보고 있었다」).
const ctxKey = (item: { symbol: { id: string }; context: string }) =>
  `${item.symbol.id}::${item.context}`;
const missing = discriminating.filter((item) => !CONTEXT_EN[ctxKey(item)]);
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
  const english = CONTEXT_EN[ctxKey(item)];
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
  { id: "thunderbolt", label: "벼락 — 벼락을 맞음", ko: "벼락을 맞았다", en: "I was struck by a bolt of lightning" },
  { id: "rainbow", label: "무지개 — 선명함", ko: "선명한 무지개가 떴다", en: "a vivid rainbow appeared" },
  { id: "rainbow", label: "무지개 — 검음", ko: "무지개의 색이 검었다", en: "the rainbow was black" },
  // **두 문장이 같은 상황을 가리켜야 이 검사가 뜻을 갖는다.** 옛 쌍은 한국어가 「활활」,
  // 영어가 「enormously」를 말해 v2의 두 이웃 의미(「불꽃이 활활 타오름」·「큰불이 하늘을
  // 태움」)로 갈렸다 — 사전이 아니라 **쌍이 어긋난 것**이다. 한쪽으로 모아 적는다.
  { id: "fire", label: "불 — 활활", ko: "불꽃이 활활 타올랐다", en: "the flames blazed up" },
  { id: "fire", label: "불 — 꺼져감", ko: "작은 불이 꺼져 갔다", en: "a small fire was dying out" },
  { id: "flower", label: "꽃 — 활짝", ko: "활짝 핀 꽃을 보았다", en: "I saw flowers in full bloom" },
  // **v2에는 「시든 꽃」 의미가 없다** — 주공해몽·밀러 원문에 그 줄이 없기 때문이다.
  // 없는 뜻을 시험하면 양쪽이 서로 다른 대표 의미로 떨어져 「갈린다」고 신고할 뿐이다.
  // 사전에 실제로 있는 상황으로 옮긴다(원문에 그 줄이 들어오면 그때 시듦을 되살릴 것).
  { id: "flower", label: "꽃 — 나눠 가짐", ko: "남과 꽃을 나누어 가졌다", en: "we shared the flowers together" },
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
  { id: "naked", label: "벌거벗음 — 개의치 않음", ko: "개의치 않고 벌거벗은 채로 있었다", en: "I was naked but did not care at all" },
  { id: "flying", label: "날다 — 자유", ko: "자유롭게 하늘을 날았다", en: "I was flying freely through the sky" },
  { id: "flying", label: "날다 — 두려움", ko: "날다가 떨어질까 두려웠다", en: "while flying I feared I would fall" },
  { id: "money", label: "돈 — 들어옴", ko: "돈이 들어왔다", en: "money came in to me" },
  { id: "money", label: "돈 — 주움", ko: "길에서 돈을 주웠다", en: "I picked up money on the street" },
  { id: "ring", label: "반지 — 낌", ko: "반지를 손가락에 꼈다", en: "I put a ring on my finger" },
  { id: "ring", label: "반지 — 잃음", ko: "반지를 잃어버렸다", en: "I lost my ring" },
  { id: "sword", label: "칼 — 쥠", ko: "칼을 손에 쥐었다", en: "I held a knife in my hand" },
  { id: "sword", label: "칼 — 다침", ko: "칼에 손을 다쳤다", en: "I was cut by a knife" },
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
  { id: "earthquake", label: "지진 — 흔들림", ko: "지진이 나서 땅이 흔들렸다", en: "an earthquake made the ground shake" },
  { id: "earthquake", label: "지진 — 갈라짐", ko: "지진이 나서 땅이 갈라졌다", en: "an earthquake cracked the ground open" },
  { id: "mountain", label: "산 — 정상", ko: "산 정상까지 올라갔다", en: "I climbed to the mountain peak" },
  { id: "mountain", label: "산 — 떨어짐", ko: "산에 올랐다가 굴러떨어졌다", en: "I fell while climbing the mountain" },
  { id: "tree", label: "나무 — 무성함", ko: "나무가 무성하게 우거져 있었다", en: "the tree was lush and thick with leaves" },
  { id: "tree", label: "나무 — 말라 죽음", ko: "나무가 말라 죽어 있었다", en: "the tree had withered and died" },
  { id: "flower", label: "꽃 — 나눠 줌", ko: "누군가에게 꽃을 나눠 줬다", en: "I gave flowers away to someone" },
  { id: "rock", label: "바위 — 큰 바위", ko: "커다란 바위가 있었다", en: "there was a huge rock" },
  { id: "stone", label: "돌 — 위에 누움", ko: "돌 위에 누워 있었다", en: "I was lying atop a stone" },
  { id: "apple", label: "과일 — 익음", ko: "과일이 탐스럽게 익어 있었다", en: "the fruit was ripe and inviting" },
  { id: "apple", label: "과일 — 과수원", ko: "과일이 열린 과수원을 거닐었다", en: "I strolled through an orchard full of fruit trees" },
  { id: "well", label: "우물 — 솟음", ko: "우물에서 맑은 물이 솟아났다", en: "clear water rose up from the well" },
  { id: "well", label: "우물 — 마름", ko: "우물이 바닥나 말라 있었다", en: "the well had dried up completely" },
  { id: "well", label: "우물 — 빠짐", ko: "우물에 빠졌다", en: "I fell into the well" },
  { id: "house", label: "집 — 아무도 없음", ko: "집에 갔더니 아무도 없었다", en: "I went to my house, but it was empty and silent" },
  { id: "umbrella", label: "우산 — 나눠 줌", ko: "누군가에게 우산을 나눠 줬다", en: "I gave my umbrella away to someone" },
  { id: "sword", label: "칼 — 잃어버림", ko: "칼을 잃어버렸다", en: "I lost my knife" },
  { id: "persimmon", label: "감 — 먹음", ko: "감을 먹었다", en: "I ate a persimmon" },
  { id: "peach", label: "복숭아 — 익음", ko: "탐스럽게 익은 복숭아를 보았다", en: "I saw a plump, ripe peach" },
  { id: "peach", label: "복숭아 — 재회", ko: "헤어졌던 사람과 다시 만났고 복숭아를 먹었다", en: "I reunited with someone I had parted from and ate a peach" },
  { id: "wine", label: "술 — 권함을 받음", ko: "누군가 권하는 술을 받아 마셨다", en: "someone offered me wine and I accepted" },
  { id: "wine", label: "술 — 취함", ko: "술에 취하도록 마셨다", en: "I drank wine until I was completely drunk" },
  { id: "clothes", label: "옷 — 새옷", ko: "새 옷을 사서 차려입었다", en: "I bought new clothes and dressed up" },
  { id: "clothes", label: "옷 — 찢어짐", ko: "입고 있던 옷이 갑자기 찢어졌다", en: "the clothes I was wearing suddenly tore" },
  { id: "shoe", label: "신발 — 해짐", ko: "신발이 다 해져 있었다", en: "my shoes were completely worn out" },
  { id: "book", label: "책 — 가르침", ko: "책을 통해 누군가 글을 가르쳐 줬다", en: "someone taught me to read using a book" },
  { id: "letter", label: "편지 — 받음", ko: "편지를 받았다", en: "I received a letter" },
  { id: "letter", label: "편지 — 보냄", ko: "편지를 써서 부쳤다", en: "I wrote a letter and mailed it" },
  { id: "writing", label: "글쓰기 — 필기구를 줌", ko: "글을 쓰는 중에 쓰던 펜을 남에게 줬다", en: "I gave away the pen I had been writing with" },
  { id: "grave", label: "무덤 — 나무가 자람", ko: "무덤에 나무가 자라나 있었다", en: "a tree was growing on the grave" },
  { id: "grave", label: "무덤 — 나무가 꺾임", ko: "무덤의 나무가 꺾여 있었다", en: "the tree on the grave had broken" },
  { id: "coffin", label: "관 — 시신을 넣음", ko: "관에 시신을 넣는 것을 보았다", en: "I saw a body being placed into a coffin" },
  { id: "marriage", label: "결혼 — 남의 결혼", ko: "남의 결혼식을 보았다", en: "I watched someone else's wedding" },
  { id: "monk", label: "스님 — 가르침", ko: "스님이 나에게 가르침을 줬다", en: "a monk taught me something" },
  { id: "monk", label: "스님 — 경 읽는 모습", ko: "스님이 경을 읽는 모습을 보았다", en: "I watched a monk reading a sutra" },
  { id: "ghost", label: "귀신 — 맞음", ko: "귀신에게 맞았다", en: "I was struck by a ghost" },
  { id: "ghost", label: "귀신 — 싸움", ko: "귀신과 싸웠다", en: "I fought with a vengeful ghost" },
  { id: "prison", label: "감옥 — 무너짐", ko: "감옥이 무너져 있었다", en: "the prison had collapsed" },
  { id: "thief", label: "도둑 — 쫓아냄", ko: "도둑을 쫓아냈다", en: "I chased the thief away" },
  { id: "feces", label: "똥 — 실수로 지림", ko: "대변을 실수로 지렸다", en: "I had an accident and soiled myself with feces" },
  { id: "bathing", label: "목욕 — 먼지투성이", ko: "먼지투성이인 채로 목욕을 했다", en: "I was bathing while still covered in dust" },
  { id: "hair", label: "머리카락 — 감음", ko: "머리카락을 감았다", en: "I washed my hair" },
  { id: "rice", label: "쌀 — 흩어짐", ko: "쌀이 바닥에 흩어져 있었다", en: "rice was scattered all over the floor" },
  { id: "chicken", label: "닭 — 알을 품음", ko: "닭이 알을 품고 있었다", en: "a chicken was brooding over an egg" },
  { id: "bird", label: "새 — 품에 듦", ko: "새가 내 품에 안겼다", en: "a bird nestled in my arms" },
  { id: "crow", label: "까마귀 — 다툼", ko: "까마귀가 다른 새와 시끄럽게 다투고 있었다", en: "a crow was noisily quarreling with another bird" },
  { id: "rat", label: "쥐 — 길을 인도함", ko: "흰 쥐가 나타나 길을 인도했다", en: "a white rat appeared and led the way" },
  { id: "deer", label: "사슴 — 집 안에 있음", ko: "사슴이 집 안에 들어와 있었다", en: "a deer was inside the house" },
  { id: "rabbit", label: "토끼 — 하늘로 오름", ko: "토끼가 하늘로 날아올랐다", en: "a rabbit rose up into the sky" },
  { id: "gold", label: "황금 — 얻음", ko: "황금을 찾았다", en: "I found and obtained some gold" },
  { id: "jade", label: "옥 — 품에 가득함", ko: "보석이 품에 넘치도록 가득했다", en: "my arms were overflowing with jewels" },
  { id: "boat", label: "배 — 나아감", ko: "배를 타고 나아갔다", en: "I sailed forward on a boat" },
  { id: "boat", label: "배 — 부서짐", ko: "배가 부서졌다", en: "the boat broke apart" },
  { id: "car", label: "차 — 아픈 채로 탐", ko: "몸이 아픈 채로 차를 탔다", en: "I was sick and got in the car" },
  // 「갈림길」은 2026-09-02에 road → cross-roads 로 넘겼다(밀러 Cross Roads 가 들어오며 §28).
  // 옛 기대는 road 가 그 별칭을 쥐고 있던 것에 기대 있었으므로, 새 임자 쪽으로 옮긴다.
  { id: "cross-roads", label: "갈림길 — 망설임", ko: "갈림길 앞에서 어느 쪽으로 갈지 망설였다", en: "at the cross roads I was undecided which one to take" },
  { id: "road", label: "길 — 재물을 얻음", ko: "길에서 재물을 주웠다", en: "I found wealth on the road" },
  { id: "bridge", label: "다리 — 건넘", ko: "다리를 건넜다", en: "I crossed the bridge" },
  { id: "bridge", label: "다리 — 무너짐", ko: "다리가 무너진 것을 보았다", en: "I saw the bridge had collapsed" },
  { id: "market", label: "시장 — 북적임", ko: "북적이는 시장을 구경했다", en: "I visited a bustling market" },
  { id: "market", label: "시장 — 사람 없음", ko: "사람이 없는 시장을 보았다", en: "I saw an empty, deserted market" },

  // 12차 배치(2026-08-27) — 帝王文武呼召·身體面目齒髮·被害鬥傷打罵·衣帳毯褥匙櫡 갈래
  { id: "hair", label: "머리카락 — 하얗게 셈", ko: "머리카락이 갑자기 하얗게 세었다", en: "my hair suddenly turned gray" },
  { id: "president", label: "높은 사람 — 만남", ko: "귀인을 만나 나란히 앉았다", en: "I met the king and sat together" },
  { id: "president", label: "높은 사람 — 못 만남", ko: "귀인을 만나러 갔지만 만나지 못했다", en: "I tried to visit the president but could not meet them" },
  { id: "thief", label: "도둑 — 함께 다님", ko: "도둑과 함께 길을 다녔다", en: "I traveled along the road together with a thief" },
  { id: "bed", label: "침대 — 편안함", ko: "편안한 침대에 누워 잤다", en: "I lay down and slept in a comfortable bed" },
  // v2(2026-08-31)는 **이불을 독립 상징으로 둔다**(`quilt`, 好衾自蓋). 옛 사전은 이불을
  // 침대의 별칭으로 삼았지만 원문이 그렇게 적혀 있지 않다 — 대상을 사전에 맞춘다.
  { id: "quilt", label: "이불 — 덮음", ko: "포근한 이불을 덮었다", en: "I covered myself with a warm quilt" },

  // 밀러(Miller, 1901) 1차 배치(2026-08-27) — 218개 상징 vs 밀러 2,257개 표제어 대조로
  // 아직 안 쓴 자료 72개를 발견, 그중 거미·반지·열쇠부터
  { id: "spider", label: "거미 — 죽임", ko: "거미를 발로 밟아 죽였다", en: "I stepped on a spider and killed it" },
  { id: "ring", label: "반지 — 깨짐", ko: "반지가 갑자기 깨졌다", en: "the ring on my finger broke" },
  { id: "key", label: "열쇠 — 잃어버림", ko: "열쇠를 잃어버려서 곤란했다", en: "I lost my key and it caused trouble" },
];

/**
 * **v2 교체(2026-08-31) — 사전에 없는 상징을 가리키는 쌍은 건너뛴다.**
 *
 * 이 쌍들은 옛 218개 사전을 보고 손으로 쓴 것이다. v2는 원문(주공해몽·밀러)에서 다시
 * 지었으므로 **옛 사전에 있던 상징 여럿이 아직 없다** — 자동차·열쇠·거미처럼 원문에
 * 표제어가 없거나, 밀러 2,257개 중 13%만 처리해 아직 안 들어온 것들이다.
 *
 * 없는 상징을 「안 걸렸다」로 신고하면 **진짜 신호가 그 잡음에 묻힌다.** 그렇다고 조용히
 * 빼면 「통과」로 위장된다(CLAUDE.md §1) — 그래서 **건너뛴 수를 크게 찍고**, 그 목록을
 * 다음 사람이 볼 수 있게 남긴다. 사전이 넓어지면 이 수가 저절로 줄어든다.
 */
const knownIds = new Set(DREAM_SYMBOLS.map((symbol) => symbol.id));
const skipped = PAIRS.filter((pair) => !knownIds.has(pair.id));
const livePairs = PAIRS.filter((pair) => knownIds.has(pair.id));

console.log("\n같은 상황을 두 언어로 적으면 같은 뜻이 나오는가");
if (skipped.length > 0) {
  const ids = [...new Set(skipped.map((pair) => pair.id))].sort();
  console.log(
    `  ⚠ 건너뜀 ${skipped.length}쌍 — v2 사전에 아직 없는 상징 ${ids.length}종: ${ids.join(", ")}`,
  );
  console.log("    (검사한 것이 아니다. 그 상징이 사전에 들어오면 이 줄이 줄어든다.)");
}
for (const pair of livePairs) {
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
console.log(`  문장 쌍 ${livePairs.length}개 검사 · ${skipped.length}쌍 건너뜀(사전에 없음)`);

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
