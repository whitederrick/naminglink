// 에이전트가 원문에서 뽑아낸 항목들을 **새 해몽 사전으로 조립한다.**
//
// ## 옛 사전과 무엇이 다른가
//
// 옛 사전(2026-08-06 생성)은 AI가 상식으로 218개 상징을 만들고, 그 위에
// `source: "tradition"`이라는 **문자열 라벨**을 기계적으로 붙였다. 라벨은 적기만 하면
// 참이 되므로 347개 의미 중 345개가 "전통 근거 확인됨"이었는데 166개는 근거가 없었다
// (CLAUDE.md §21). 사용자 지시로 **전량 폐기**하고 원문에서 새로 만든다(2026-08-27).
//
// 새 사전의 규칙은 하나다 — **원문 인용이 없으면 항목이 존재할 수 없다.**
// 모든 의미가 `cites`를 갖고, `cite.original`은 `verify-dream-cite.mjs`가 원문 파일과
// 문자열로 대조한다. 지어낸 인용은 위조가 불가능하다.
//
// ## 두 원문을 하나의 사전으로 합친다 (2026-08-31, 사용자 결정)
//
// 주공해몽(동아시아 전통)과 밀러(1901, 서양)를 **한 사전으로 합치되 출처는 화면에서
// 구분해 보여 준다.** 출처는 이미 의미마다 `cites[].work`에 있으므로 별도 라벨을
// 만들지 않는다 — **§21의 병("라벨은 적기만 하면 참이 된다")을 되풀이하지 않기 위해서다.**
// 인용 자체가 출처의 증거이고, 화면은 그 증거를 읽어서 가른다.
//
// ## 상징의 동일성은 `term_en`으로 잡는다 — `term_ko`가 아니다 (2026-08-31)
//
// 처음엔 `term_ko`로 묶었다. **동음이의어가 한 상징으로 뭉개졌다:**
//
//   배 = 船(boat) + 梨(pear)   → `食梨者主失財帛`("배를 먹으면 재물을 잃는다")가
//                                 boat 상징 안에 들어가 있었다(실제로 그렇게 커밋됐다)
//   산 = 山(mountain) + 산성(acid, 밀러)  → 산을 오르는 꿈과 산을 마시는 꿈이 한자리에
//
// 한국어 이름은 **뜻을 가르지 못한다.** 영어 이름이 가른다. 그래서 `term_en`을 기준으로
// 삼되, 두 방향의 예외를 **목록으로 얼려 둔다**(§11 — 경계를 규칙으로 적으면 시간이
// 지나며 움직인다. 얼리려면 목록으로 적어야 한다):
//
//   SYNONYMS  다른 영어 이름인데 같은 상징      (bees→bee, burglars→thief …)
//   SPLIT_BY_KO  같은 영어 이름인데 다른 상징   (iron = 다리미 熨斗 / 쇠붙이 鐵器)
//
// 규칙(복수형 s를 떼기 등)으로 적지 않는다 — `bus`/`glass`처럼 규칙이 틀리는 자리가
// 반드시 생기고, 그때 조용히 뭉개진다.
//
// ## 화면에 쓸 이름 — `label_ko`
//
// 상징을 가르고 나면 **한국어 이름이 겹친다**(배 셋, 산 둘). 목록에서 구분이 안 되므로
// 괄호로 밝힌다(사용자 결정 2026-08-31): 「배(선박)」·「배(과일)」·「배(복부)」.
//
// **`term_ko`는 괄호 없는 본말 그대로 둔다** — 매칭 키가 그것을 쓰기 때문이다. 괄호를
// 본말에 넣으면 "배"라고 쓴 꿈이 안 걸린다. 화면용 이름만 `label_ko`로 따로 낸다.
//
// **이름이 겹치는데 목록에 없으면 조립을 멈춘다**(exit 1). 밀러 나머지 1,900여 표제어를
// 넣다 보면 새 충돌이 반드시 나온다 — 그때 조용히 통과시키지 않기 위해서다.
//
// ## 하는 일
//
// 1. `data-sources/extract/`의 주공해몽(`r*.json`)과 밀러(`m*.json`) 결과를 전부 읽는다
// 2. 같은 상징끼리 묶어 `meanings` 배열로 만든다(위 규칙)
// 3. 상징 id를 만든다(`term_en` 기반, 중복이면 접미사)
// 4. 새 사전 파일로 쓴다
//
// 실행: node scripts/build-dream-dictionary-v2.mjs
// 산출: apps/dreamslink/src/lib/dream-symbols.v2.data.json
//        (기존 `dream-symbols.data.json`은 건드리지 않는다 — 교체는 별도 단계)

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const EXTRACT_DIR = path.resolve("apps/dreamslink/data-sources/extract");
const OUT = path.resolve("apps/dreamslink/src/lib/dream-symbols.v2.data.json");

/**
 * **다른 영어 이름인데 같은 상징** — 왼쪽을 오른쪽으로 합친다.
 *
 * 전부 실제로 두 원문에 함께 나온 자리다(2026-08-31에 30개 겹침을 눈으로 대조해 가림).
 * 단수/복수와 동의어뿐이고, **뜻이 다른 것은 여기 넣지 않았다.**
 */
const SYNONYMS = new Map([
  ["bees", "bee"],
  ["ants", "ant"],
  ["bells", "bell"],
  ["books", "book"],
  ["bats", "bat"],
  ["bugs", "insect"],
  ["bath", "bathing"],
  ["banquet", "feast"],
  ["almanac", "calendar"],
  ["angling", "fishing"],
  ["burglars", "thief"],
  ["affront", "humiliation"],
  ["beans", "soybean"],
  ["brothers", "siblings"],
  ["belly", "abdomen"],

  // 아래 여섯은 **`term_ko`로 묶던 때에는 한 상징이었다.** 기준을 `term_en`으로 바꾸자
  // 갈라졌고, 원문을 하나씩 열어 보니 전부 같은 것이었다(2026-08-31). 에이전트가
  // 배치마다 영어 이름을 다르게 적었을 뿐이다 — 가르면 이용자에게 같은 이름이 둘 뜬다.
  ["abscess", "boil"],          // 종기 — 둘 다 밀러의 같은 피부 종기
  ["excrement", "feces"],       // 똥 — 둘 다 주공해몽 屎尿/糞
  ["latrine", "outhouse"],      // 뒷간 — 둘 다 廁. 상황 문구까지 겹친다
  ["clothes", "clothing"],      // 옷 — 둘 다 衣裳/衣冠
  ["knife", "sword"],           // 칼 — 「sword」 묶음에도 刀가 섞여 있다(임의로 갈린 것)
  ["castle", "city wall"],      // 성 — 宮城/城郭 둘 다 城
  ["bandits", "thief"],         // 도적 — 率眾破賊의 賊. km1의 thief 판별어에 이미 이 문맥이 있다

  // 침실 — 밀러에 `Bed-chamber`와 `Chamber`가 **따로** 있는데 한국어로는 같은 것이고
  // 내용도 「잘 꾸민 방 / 수수한 방」으로 이어진다. 가르면 이용자에게 같은 이름이 둘 뜬다
  // (2026-09-01 배치 14).
  ["chamber", "bedchamber"],

  // 수도원 — 밀러에 `Abbey`와 `Cloister`가 따로 있는데 한국어로는 같은 것이다
  // (회랑은 수도원의 한 부분이지 다른 건물이 아니다). 2026-09-01 배치 16.
  ["cloister", "abbey"],

  // 부뚜막 — 밀러 `Cooking Stove`와 주공해몽 竈는 한국어로 같은 것이다(밥 짓는 화덕).
  // 2026-09-01 배치 19.
  ["cooking stove", "kitchen stove"],

  // 아래 둘은 **같은 것이 갈라져 있던 자리**다(넷 다 주공해몽). 상징끼리 서로의 이름을
  // 별칭으로 쥐고 있어 늘 함께 걸렸다 — 2026-09-01 별칭 전수 대조에서 드러났다.
  ["white clothes", "white clothing"],
  ["soldiers", "soldier"],
]);

/**
 * **같은 영어 이름인데 다른 상징** — 한국어 이름으로 가른다.
 *
 * `iron`이 그렇다: 熨斗(다리미)와 鐵器(쇠붙이)가 둘 다 iron 이다. 영어가 못 가르는
 * 자리라 한국어가 가른다 — 위의 배·산과 정확히 반대 방향이다.
 */
const SPLIT_BY_KO = new Set(["iron"]);

/**
 * **갈라 놓은 상징의 id를 못 박는다.**
 *
 * 가른 상징은 영어 이름이 같으므로 id가 겹치고, 뒤에 오는 쪽이 `-2`를 받는다. 그런데
 * **누가 뒤에 오는지는 추출 파일을 읽는 순서에 달려 있다** — 배치 하나가 늘거나 파일
 * 이름이 바뀌면 `iron`과 `iron-2`가 조용히 뒤바뀐다. 그러면 매칭 키 표(`km*.json`)가
 * 이름으로 붙여 둔 별칭이 **엉뚱한 상징에 붙는다**(쇠붙이의 "무쇠"가 다리미에 붙는 식).
 * id는 주소이기도 해서 바뀌면 링크도 깨진다.
 *
 * 키는 `symbolKey()`가 만드는 값이다.
 */
const EXPLICIT_IDS = new Map([
  [JSON.stringify(["iron", "다리미"]), "iron"],
  [JSON.stringify(["iron", "쇠붙이"]), "iron-2"],
]);

/**
 * **상징의 「기본값」을 못 박는다 — 첫 의미가 곧 아무것도 안 걸렸을 때의 답이다.**
 *
 * `dream-match.ts`의 `pickByScore`는 판별어 점수가 전부 0이면 `from[0]`을 돌려준다.
 * 곧 **의미 배열의 첫째가 그 상징의 기본값**이다(CLAUDE.md §25 곁가지 3 — 그래서 대표
 * 의미의 판별어는 비워 두라고 적혀 있다).
 *
 * 그런데 **누가 첫째가 되는지는 위 `files`의 정렬 순서**가 정한다. `m*.json`(밀러)이
 * `r*.json`(주공해몽)보다 먼저 정렬되므로, **밀러 배치를 하나 넣을 때마다 이미 있던
 * 상징의 기본값이 조용히 밀러 쪽으로 갈아치워진다.** 배치 27b에서 실측으로 다섯이
 * 걸렸다(2026-09-02):
 *
 *   물   「물을 마심」(길)              → 「맑은 물을 마시려 해도 마시지 못함」(흉)
 *   문   「문이 높고 큼」(길)            → 「문으로 들어감」(흉)
 *   용   「용을 타고 하늘에 오름」(길)   → 「용을 봄」(흉)
 *   술   「남이 권하는 술을 마심」(길)   → 「여성이 흥청거리며 술을 마심」(흉)
 *   비둘기 「비둘기가 욺」(흉)           → 「비둘기가 짝을 짓고 둥지를 지음」(길)
 *
 * tsc·검사기·하니스 어디에도 안 걸린다. **화면에 뜨는 답만 바뀐다.**
 * `EXPLICIT_IDS`가 id에 대해 하는 일을 기본값에 대해 하는 것이다 — 순서에 기대지 말고
 * **목록으로 얼린다**(CLAUDE.md §11).
 *
 * **여기 없는 상징의 기본값은 여전히 파일 순서가 정한다.** 그것을 그대로 두지 않도록
 * 아래 「기본값이 바뀐 상징」 관문이 **이전 사전과 대조**해서 잡는다.
 */
const FALLBACK_FIRST = new Map([
  ["water", "물을 마심"],
  ["door", "문이 높고 큼"],
  ["dragon", "용을 타고 하늘에 오름"],
  ["liquor", "남이 권하는 술을 마심"],
  ["dove", "비둘기가 욺"],

  // 배치 28(밀러 Drouth~Dynamo)이 밀어낸 다섯. **전부 있던 답을 그대로 둔다** — 새로 들어온
  // 밀러 의미는 다섯 다 「흰 오리가 농가 둘레에」·「여성이 지하 감옥에」처럼 **좁은 상황**이라
  // 아무것도 안 걸린 꿈이 떨어질 자리가 아니다(2026-09-02).
  ["drum", "북을 침"],
  ["duck", "오리가 거위와 함께 헤엄침"],
  ["wild-duck", "물오리가 집 안으로 들어옴"],
  ["prison", "감옥이 무너짐"],
  ["manure", "땅을 쓸어 거름을 치움"],

  // 배치 29(밀러 Eagles~Elevator)가 밀어낸 둘. 둘 다 **있던 답 그대로** 둔다.
  // `elephant` 는 얼릴 이유가 하나 더 있다 — 「흰 코끼리」의 「흰」은 1글자라 판별어가 될 수
  // 없다(`scoringWordsOf` 의 `length >= 2`). 기본값 자리에 두어야 「흰 코끼리를 보았다」가
  // 제자리로 떨어진다(2026-09-02).
  ["being-taught-letters", "누군가 글을 가르쳐 줌"],
  ["elephant", "흰 코끼리를 봄"],

  // 배치 30(밀러 Elixir of Life~Engineer)이 밀어낸 둘. 둘 다 **있던 답 그대로** 둔다 —
  // 들어온 밀러 의미가 「먼 길에서 다른 나라의 황제를 만남」·「황후를 봄」이라 임금·왕비
  // 꿈이 아무것에도 안 걸렸을 때 떨어질 자리가 아니다(2026-09-02).
  ["king", "임금을 의장 앞에서 마주함"],
  ["queen", "왕비가 불러 마시게 함"],

  // 배치 31(밀러 English~Eyeglass)이 밀어낸 다섯. 전부 **있던 답 그대로** 둔다 —
  // 들어온 밀러 의미가 「봉투를 봄」·「여성이 귀양 감」처럼 좁거나, 판별어로 제대로
  // 걸리는 것들이라 기본값 자리를 차지할 이유가 없다(2026-09-02).
  ["letter", "편지를 봉함"],
  ["fleeing", "몸이 달아나 벗어남"],
  ["bequest", "유산(증여)에 관한 꿈을 꿈"],
  ["banishment", "외국으로 추방됨"],
  ["eyebrows", "눈썹이 머리털과 가지런히 자람"],

  // 배치 32(밀러 Fables~Father-in-law)가 밀어낸 둘. 둘 다 **있던 답 그대로** 둔다
  // (2026-09-02).
  ["face", "얼굴에 검은 부스럼이 남"],
  ["marketplace", "부부가 함께 시장에 들어감"],

  // 배치 33(밀러 Fatigue~Fever)이 밀어낸 하나. 있던 답 그대로 둔다(2026-09-02).
  ["feast", "잔치(연회) 꿈을 꿈"],

  // 배치 34(밀러 Fiddle~Fireman)가 밀어낸 넷. 전부 있던 답 그대로 둔다(2026-09-02).
  ["field", "밭에 풀이 자람"],
  ["flute", "남이 피리를 줌"],
  ["fight", "집안 사람끼리 다툼"],
  ["fire", "불 위에 차려 놓은 것을 봄"],

  // 배치 35(밀러 Fireworks~Flies)가 밀어낸 여덟. 전부 있던 답 그대로 둔다 — 이 배치는
  // 거의 전부가 「임자가 이미 있는」 상징에 붙는 자리였다(2026-09-02).
  ["fireworks", "불꽃놀이를 봄"],
  ["sky", "하늘의 문이 열림"],
  ["fish", "물고기가 물 위로 날아오름"],
  ["net", "몸이 그물에 걸림"],
  ["banner", "맑은 하늘에 자국 깃발이 휘날리는 것을 봄"],
  ["spinning-thread", "실을 자아 길쌈함"],
  ["flea", "벼룩이 날고 고치를 짓지 않음"],
  ["fly", "파리가 사람의 옷을 더럽힘"],

  // 배치 36(밀러 Flight~Foot-log)이 밀어낸 다섯. 전부 있던 답 그대로 둔다(2026-09-02).
  ["wheat-flour", "밀가루와 겨가 서로 섞임"],
  ["flower", "남과 꽃을 나누어 가짐"],
  ["horse", "말이 뜰 앞에서 춤추듯 뛰놂"],
  ["fog", "안개가 앞을 가림"],
  ["bridge", "낡고 어둠 속으로 이어진 긴 다리를 봄"],

  // 배치 37(밀러 Forest~Frogs)이 밀어낸 둘. 있던 답 그대로 둔다(2026-09-02).
  ["forest", "동산의 숲이 우거짐"],
  ["divination", "남에게 가서 점을 침"],

  // 배치 38(밀러 Frost~Garden)이 밀어낸 넷. 전부 **있던 답 그대로** 둔다 — 들어온 밀러
  // 의미가 「어둡고 음산한 아침의 서리」·「거센 바람에 휘말림」·「노름을 해서 땀」·
  // 「늘 푸른 나무와 꽃이 가득한 정원」처럼 **조건이 붙은 상황**이라, 아무것도 안 걸린
  // 꿈이 떨어질 자리가 아니다(2026-09-02).
  ["frost", "서리가 내림"],
  ["wind", "사나운 바람이 몰아침"],
  ["bet", "경마에 돈을 거는 꿈을 꿈"],
  ["garden", "동산으로 나감"],

  // 배치 39(밀러 Garlic~Gift)가 밀어낸 여섯. 전부 **있던 답 그대로** 둔다 — 들어온 밀러
  // 의미가 「마늘밭을 지나감」·「다락방으로 올라감」·「어버이의 귀신을 봄」처럼 **조건이
  // 붙은 상황**이고, 있던 답이 그 상징의 가장 넓은 그림이다(2026-09-02).
  ["garlic", "마늘을 먹음"],
  ["attic", "다락방에 있음"],
  ["goose", "거위와 오리가 함께 헤엄침"],
  ["jade", "금은과 주옥을 봄"],
  ["atlas", "지도책을 들여다봄"],
  ["ghost", "신과 귀신에게 맞음"],

  // 배치 40(밀러 Gig~Gold Leaves)이 밀어낸 둘. 있던 답 그대로 둔다 — 들어온 밀러 의미가
  // 「허리띠가 몸을 죔」·「은잔으로 물을 마심」이라 아무것도 안 걸린 꿈이 떨어질 자리가
  // 아니다. **얼린 의미의 판별어가 좁은지 함께 확인했다**(§30 곁가지, 배치 39의 교훈) —
  // 「최신 새것 세련 멋진 신상」·「깨졌 깨진 부서」 둘 다 형제와 겹치지 않는다(2026-09-02).
  ["belt", "최신 유행 벨트를 가진 꿈을 꿈"],
  ["cup", "잔이 깨짐"],

  // 배치 41(밀러 Golf~Gravy)이 밀어낸 넷. 있던 답 그대로 둔다. **얼린 의미의 판별어가
  // 형제를 가로채지 않는지 함께 봤고**(§30 곁가지), `broth` 하나가 실제로 걸렸다 —
  // 「고기 국물을 보는 꿈을 꿈」이 「고기」를 쥐고 있어 새 「고기 국물을 먹음」과 동점이
  // 됐다. 그 낱말을 빼어 풀었다(2026-09-02).
  ["grain", "오곡이 무성하게 자람"],
  ["grass", "문 앞에 풀이 자람"],
  ["grave", "무덤이 높이 솟아 있음"],
  ["broth", "고기 국물을 보는 꿈을 꿈"],

  // 배치 42(밀러 Grease~Hail)가 밀어낸 하나. 있던 답 그대로 둔다 — 「기름 속에 있음」은
  // 조건이 붙은 상황이고 「기름을 먹음」이 그 상징의 가장 넓은 그림이다. 얼린 쪽 판별어가
  // 「먹었 마셨」로 좁아 새 의미를 가로채지 않는 것도 함께 봤다(§30 곁가지, 2026-09-02).
  ["oil", "기름을 먹음"],

  // 배치 43(밀러 Hair~Hammer)이 밀어낸 다섯. 전부 있던 답 그대로 둔다. **얼린 의미의
  // 판별어가 형제를 가로채는지 함께 봤고**(§30 곁가지) 둘이 걸려 좁혔다 —
  // `hair` 의 「여자가」와 `barber` 의 「보았」이 새 의미와 동점을 만들고 있었다(2026-09-02).
  ["hair", "부인이 머리를 풀어 헤침"],
  ["barber", "이발사 꿈을 꿈"],
  ["hand", "손이 부러짐"],
  ["bridle", "굴레(고삐)를 보는 꿈을 꿈"],
  ["hammer", "망치와 송곳을 봄"],

  // 배치 44(밀러 Hand~Harlequin)가 밀어낸 셋. 있던 답 그대로 둔다. 얼린 의미의 판별어도
  // 함께 봤고 `handkerchief` 의 「보았」이 「찢어진 손수건을 봄」과 동점을 만들고 있어
  // 좁혔다(§30 곁가지, 2026-09-02).
  ["shackles", "칼과 쇠사슬이 몸에 채워짐"],
  ["handkerchief", "손수건을 봄"],
  ["rabbit", "토끼 무리가 하늘로 오름"],

  // 배치 45(밀러 Harlot~Head)가 밀어낸 셋. 있던 답 그대로 둔다 — 얼린 셋의 판별어가
  // 좁아 새 의미를 가로채지 않는 것도 함께 봤다(§30 곁가지, 2026-09-02).
  ["hat", "관을 쓰고 수레에 오름"],
  ["axe", "도끼를 봄"],
  ["head", "남이 자기 머리를 내리침"],

  // 배치 46(밀러 Headgear~Hemp Seed)이 밀어낸 둘. 있던 답 그대로 둔다 — 얼린 둘의
  // 판별어가 좁아 새 의미를 가로채지 않는 것도 함께 봤다(§30 곁가지, 2026-09-02).
  ["funeral-carriage", "상여와 마주침"],
  ["hemp", "삼이 몸에 우거짐"],

  // 배치 47(밀러 Hen~Hissing)이 밀어낸 하나. 있던 답 그대로 둔다 — 얼린 「비탈길을 걸어
  // 오름」의 판별어가 「비탈길 걸어서」로 좁아 새 의미를 가로채지 않는다(2026-09-02).
  ["slope", "비탈길을 걸어 오름"],

  // 배치 48(밀러 History~Honeysuckle)이 밀어낸 셋. 있던 답 그대로 둔다 — 얼린 셋의
  // 판별어가 좁아 새 의미를 가로채지 않는 것도 함께 봤다(§30 곁가지, 2026-09-02).
  ["pig", "돼지를 잡음"],
  ["killing-someone", "남을 죽임"],
  ["honey", "남과 함께 꿀을 먹음"],

  // 배치 49(밀러 Hood~Horoscope)가 밀어낸 하나. 있던 답 그대로 둔다 — 얼린 「나팔에서 나는
  // 즐거운 소리를 들음」의 판별어(「들렸 들었 소리가 울려 경쾌」)가 새 셋(부러진 · 아이들 ·
  // 여성이)과 한 낱말도 안 겹쳐 동점을 가로채지 않는 것도 함께 봤다(§30 곁가지, 2026-09-02).
  ["bugle", "나팔에서 나는 즐거운 소리를 들음"],

  // 배치 54(밀러 Hounds~Hurt) — **이 둘은 있던 답을 그대로 두는 것이 아니라 바꾼 것이다.**
  // 밀러가 그 상징의 **가장 일반적인 그림**을 처음으로 들여왔기 때문이다. 막연한 문장
  // (「사냥을 했다」·「누군가를 껴안았다」)은 판별어가 하나도 안 걸리므로 기본값으로 떨어지는데,
  // 그 자리에 있던 것은 **좁은 상황**이었다(주공해몽 「숲속에서 사냥을 함」 · 밀러 「지아비나
  // 지어미를 시들하게 껴안음」). 얼린 둘의 판별어는 좁게 적었다(「쫓았 좇았」·「덥석 와락」).
  ["hunting", "사냥을 함"],
  ["embrace", "껴안음"],

  // 배치 55(밀러 Hurricane·Husband)가 밀어낸 하나. **있던 답 그대로 둔다** — 밀러 열둘은
  // 전부 좁은 상황(떠남·죽음·창백함…)이라 기본값 자리가 아니다. 얼린 「남편을 품에 안음」의
  // 판별어는 「품에 안았」로 좁혀 동점을 가로채지 않게 했다(§30 곁가지).
  ["husband", "남편을 품에 안음"],

  // 배치 58(밀러 Absalom~Illness)이 밀어낸 하나. **있던 답 그대로 둔다** — 들어온 밀러 의미는
  // 「여자가 제 병을 앓는 꿈을 꿈」 하나뿐이고 **꾸는 사람이 여자라는 조건이 붙은 자리**다.
  // 아무것도 안 걸린 꿈이 떨어질 자리가 아니다(2026-09-03).
  ["illness", "병들어 누웠는데 남이 부축해 줌"],

  // 배치 62(밀러 Infants~Ink)가 밀어낸 둘. **있던 답 그대로 둔다** — 들어온 밀러 의미가
  // 「처녀가 갓난아이를 가짐」·「옷에 먹물이 쏟아진 것을 봄」처럼 **조건이 붙은 상황**이고,
  // 있던 주공해몽 의미가 그 상징의 가장 넓은 그림이다(2026-09-03).
  ["newborn-baby", "갓 태어난 아들딸을 봄"],
  ["ink-stick", "남이 먹을 줌"],

  // 배치 65(밀러 Invective~Iron)가 밀어낸 둘. **있던 답 그대로 둔다** — 들어온 밀러 의미가
  // 「제가 욕설을 퍼부음」·「쇳덩이에 짓눌림」처럼 조건이 붙은 상황이고, 있던 주공해몽 의미가
  // 그 상징의 가장 넓은 그림이다(2026-09-03).
  ["verbal-abuse", "남에게 욕을 먹고 모욕을 당함"],
  ["iron-2", "쇠로 만든 기물을 봄"],

  // 배치 66(밀러 Ironing) — **이것은 있던 답을 그대로 두는 것이 아니라 바꾼 것이다**
  // (배치 54의 `hunting`·`embrace` 와 같은 자리). 다리미 꿈의 가장 일반적인 그림은
  // 「다림질을 함」이고, 있던 주공해몽 의미 「다리미에 불이 담겨 있음」은 숯불 다리미라는
  // **좁은 상황**이다. 아무것도 안 걸린 꿈이 떨어질 자리는 앞엣것이다(2026-09-03).
  ["iron", "다림질을 함"],

  // 배치 68(밀러 Jar)이 밀어낸 하나. **있던 답 그대로 둔다** — 들어온 밀러 넷이 「빈」·「가득
  // 찬」·「깨진」처럼 **조건이 붙은 상황**이고, 있던 주공해몽 의미가 이 상징의 넓은 그림이다
  // (2026-09-03).
  ["jar", "항아리 안으로 들어감"],

  // 배치 70(밀러 Jewelry·Jewels) — **이것도 바꾼 것이다**(배치 54·66과 같은 자리).
  // 밀러 열하나가 들어오면서 「보석」이라는 낱말을 어느 판별어에도 줄 수 없게 됐다 —
  // 「보석을 봄」이 **아무것도 안 걸렸을 때 떨어질 자리**이고 그것이 이 상징의 가장 넓은
  // 그림이다. 이 자리를 얼리지 않으면 「보석을 보았다」가 주공해몽의 「금은과 주옥을 봄」으로
  // 간다(2026-09-03).
  ["jade", "보석을 봄"],

  // 배치 71(밀러 Journey·Joy)이 밀어낸 둘. **한쪽은 두고 한쪽은 바꿨다**(2026-09-03).
  //   long-journey — **바꾼 것.** 「길을 떠났다」가 이용자의 가장 흔한 말이고 그것이 상징의
  //     이름(「먼 길 떠남」)과도 같다. 판별어에서 「떠났」을 빼야 형제(「벗들이 슬픈 낯으로
  //     떠나는 것을 봄」)를 동점으로 안 가로채는데, 그러면 이 의미가 0점이 되므로 **여기를
  //     떨어지는 자리로 삼는다**. 풀이가 「즐거우면 이문, 궂으면 실망」이라 얼버무린 것도
  //     아무것도 안 걸렸을 때의 답으로 알맞다
  //   joy — **바꾼 것.** 있던 「집안에 기쁜 일이 있음」은 「집안」이라는 조건이 붙어 있고,
  //     들어온 밀러 「어떤 일로 기쁨을 느낌」이 조건 없는 가장 넓은 그림이다
  ["long-journey", "길을 떠남"],
  ["joy", "어떤 일로 기쁨을 느낌"],

  // 배치 74(밀러 Kettle)가 밀어낸 하나. **있던 답 그대로 둔다** — 들어온 셋이 「물이 끓는」·
  // 「어두운 빛깔」·「밝은 빛깔」처럼 조건이 붙은 상황이고, 있던 「큰 솥을 봄」이 가장 넓다
  // (2026-09-03).
  ["cauldron", "큰 솥을 봄"],

  // 배치 77(밀러 Kitchen) — **바꾼 것이다**(배치 54·66·70·71과 같은 자리). 있던
  // 「부엌과 부뚜막을 고쳐 지음」은 **고쳐 짓는다는 조건**이 붙은 좁은 상황이고, 들어온
  // 「부엌을 봄」이 이 상징의 가장 넓은 그림이다(2026-09-03).
  ["kitchen", "부엌을 봄"],

  // 배치 78(밀러 Knife) — **바꾼 것이다**. 있던 「깃발과 칼이 산속으로 이끌어 들임」은
  // 주공해몽의 아주 좁은 그림이고, 들어온 「칼을 봄」이 이 상징의 가장 넓은 자리다.
  // 의미가 스물여덟인 상징이라 **아무것도 안 걸린 꿈이 떨어질 자리**를 제대로 잡아야 한다
  // (2026-09-03).
  ["sword", "칼을 봄"],
  // 배치 83(밀러 Lamb 열다섯) — **되돌린 것이다**. 밀러가 「어린 양들이 푸른 들에서 뛰놂」을
  // 맨 앞으로 밀어 넣었으나, 이 상징의 넓은 자리는 주공해몽의 「양을 끌고 집으로 돌아옴」이다
  // — 밀러 쪽은 **어린 양**이라는 좁은 그림이고, 막연한 「양 꿈」이 떨어질 자리가 아니다
  // (2026-09-03).
  ["sheep", "양을 끌고 집으로 돌아옴"],
  // 배치 84(밀러 Lamp 열둘) — **되돌린 것이다**. 밀러의 첫 문장 「기름이 가득 찬 등불을 봄」은
  // 조건이 붙은 그림이고, 막연한 「등불 꿈」이 떨어질 자리는 주공해몽의 「등불과 촛불이 밝게
  // 빛남」이다 (2026-09-03).
  ["lamp", "등불과 촛불이 밝게 빛남"],
  // 배치 85(밀러 Lance·Land) — **둘 다 되돌린 것이다**. 밀러가 들여온 「창에 찔려 다침」·
  // 「땅이 기름져 보임」은 조건이 붙은 그림이고, 막연한 꿈이 떨어질 자리는 주공해몽의
  // 넓은 그림이다 (2026-09-03).
  ["spear", "창을 봄"],
  ["ground", "땅이 흔들려 움직임"],
  // 배치 89(밀러 Law and Lawsuits) — **되돌린 것이다**. 「송사에 휘말림」은 흉하고 좁은
  // 그림이고, 막연한 「송사 꿈」이 떨어질 자리는 주공해몽의 「관가에 들어가 송사함」이다
  // (2026-09-03).
  ["lawsuit", "관가에 들어가 송사함"],
  // 배치 90(밀러 Lead) — **바꾼 것이다**. 주공해몽의 「납과 주석을 봄」은 **주석까지 있어야**
  // 하는 좁은 그림이고, 밀러가 들여온 「납을 봄」이 이 상징의 가장 넓은 자리다 (2026-09-03).
  ["lead", "납을 봄"],
  // 배치 92(밀러 Leeches) — **되돌린 것이다**. 밀러가 들여온 셋은 전부 조건이 붙은 그림이고
  // (몸에 붙임 · 남에게 붙임 · 물림), 막연한 「거머리 꿈」이 떨어질 자리는 주공해몽의
  // 「거머리를 봄」이다 (2026-09-03).
  ["leech", "거머리를 봄"],
  // 배치 95(밀러 Leopard) — **되돌린 것이다**. 밀러의 첫 문장 「표범이 덤벼듦」은 조건이
  // 붙은 그림이고, 막연한 「표범 꿈」이 떨어질 자리는 주공해몽의 「표범을 봄」이다 (2026-09-03).
  ["leopard", "표범을 봄"],
]);

/**
 * **「자주 찾는 상징」으로 내보낼 상징** — `weight: 3`.
 *
 * 상징을 하나도 못 찾은 결과 화면이 이 값으로 목록을 고른다
 * (`app/[locale]/dream/result/page.tsx` 의 `weight >= 3`).
 *
 * **v2 로 갈아 끼우면서 이 자리가 조용히 죽었다** — 조립기가 678개 전부에 `weight: 1`
 * 을 주어 목록이 빈 배열이 됐고, 그 절이 화면에서 통째로 사라졌다. tsc 도 검사기도
 * 하니스도 안 잡는다(CLAUDE.md §25 — 데이터를 갈면 그것을 읽는 기능이 조용히 죽는다).
 *
 * **목록은 옛 사전의 편집 판단을 그대로 옮긴 것이다.** 새로 고르면 근거 없이 내가 지어낸
 * 목록이 된다. 옛 사전에서 `weight: 3` 이던 아홉 중 v2 에 있는 일곱만 남았다 —
 * 「이빨 빠짐」·「추락」·「쫓김」은 두 원문 어디에도 표제어가 없다.
 *
 * 여기 적은 id 가 사전에 없으면 조립을 멈춘다. 목록이 조용히 낡지 않게 하는 관문이다.
 */
const POPULAR_SYMBOL_IDS = new Set([
  "pig",    // 돼지
  "snake",  // 뱀
  "dragon", // 용
  "feces",  // 똥
  "death",  // 죽음
  "money",  // 돈
  "teeth",  // 이
]);

/**
 * **화면에 쓸 이름** — 한국어 이름이 겹치는 상징에만 붙인다. 키는 상징 id.
 *
 * 목록에 없는 충돌이 나오면 조립이 멈춘다. 새 원문을 넣다가 멈추면 여기 한 줄 적는다.
 */
const LABEL_KO = new Map([
  ["boat", "배(선박)"],
  ["pear", "배(과일)"],
  ["abdomen", "배(복부)"],
  ["mountain", "산(山)"],
  ["acid", "산(산성)"],
  // 절 — 「身拜尊長」(절하다)과 「入寺院中」(사찰)은 한국어로만 같은 말이다.
  ["bowing", "절(인사)"],
  ["buddhist-temple", "절(사찰)"],
  // 눈 — 밀러 `Eye` 를 넣으면서 겹쳤다(2026-09-02 배치 31). 한국어로만 같은 말이다.
  ["eye", "눈(眼)"],
  ["snow", "눈(雪)"],
  // 발 — 밀러 `Feet` 을 넣으면서 겹쳤다(2026-09-02 배치 33). 足과 대나무 발이다.
  ["feet", "발(足)"],
  ["bamboo-blind", "발(가리개)"],
]);

/**
 * **태몽 상징** — 옛 218개 사전에서 옮겨 온 목록(2026-08-31).
 *
 * 태몽은 「이 상징의 뜻이 무엇인가」가 아니라 **「이 상징이 태몽으로 전해지는가」**다.
 * 원문(주공해몽·밀러)은 태몽이라는 갈래 자체를 따로 두지 않으므로 인용으로 세울 수 없고,
 * 그래서 이것은 **의미가 아니라 표시**다(`isConceptionDream` 주석과 같은 결).
 *
 * 옛 사전에 28개가 있었고 그중 **21개만** 옮겼다. 나머지 일곱(고래·진주·사과·계란·밤·
 * 포도·고추)은 **v2 사전에 그 상징 자체가 없다** — 원문에 표제어가 없기 때문이다.
 * 없는 상징을 태몽으로 만들려면 인용 없는 항목을 지어내야 하는데, 그것이 이 사전이
 * 폐기한 옛 사전의 병이다(§21). **없으면 없는 대로 둔다**(사용자 결정 2026-08-31).
 *
 * 밀러 나머지 표제어가 들어오며 해당 상징이 생기면 그때 여기 한 줄 더한다.
 */
const CONCEPTION_SYMBOL_IDS = new Set([
  "pig", "snake", "dragon", "tiger", "ox", "horse", "fish", "carp", "turtle",
  "bear", "deer", "phoenix", "flower", "sun", "moon", "star", "stone",
  "peach", "jujube", "persimmon", "beads",
  // 밤 — 옛 사전의 태몽 28개 중 **v2에 상징이 없어 못 옮긴 일곱** 가운데 하나였다.
  // 밀러 `Chestnuts`가 들어오며 상징이 생겨서 위 주석대로 한 줄 더한다(2026-09-01 배치 14).
  "chestnut",
]);

/** 화면·PDF가 이 문자열로 태몽을 가린다(`CONCEPTION_TAG`). */
const CONCEPTION_TAG = "태몽";

if (!existsSync(EXTRACT_DIR)) {
  console.error(`추출 결과 디렉터리가 없다: ${EXTRACT_DIR}`);
  process.exit(2);
}

/**
 * 주공해몽은 `r1.json`~`r9.json`·`result-tomb.json`, 밀러는 `m1.json`·`m4a.json`·
 * `miller-pilot.json` 꼴이다. **글롭이 실제 파일명과 어긋나면 0개를 읽고도 조용히 도는데**,
 * 그 사고를 이미 한 번 냈다(`verify-dream-cite.mjs`가 `result*.json`을 찾아 늘 0건이었다,
 * 2026-08-28). 아래 정규식은 두 검사기와 **같은 모양**으로 맞춰 둔다.
 */
const FILE_RE = /^(r\d+|result-tomb|m\d+[ab]?|miller-pilot)\.json$/;

const files = readdirSync(EXTRACT_DIR).filter((f) => FILE_RE.test(f)).sort();

// **검사 0건은 통과가 아니다**(CLAUDE.md §1·§3).
if (files.length === 0) {
  console.error("추출 결과 파일이 하나도 없다 — 조립할 것이 없다.");
  process.exit(2);
}

const items = [];
for (const f of files) {
  const parsed = JSON.parse(readFileSync(path.join(EXTRACT_DIR, f), "utf8"));
  if (!Array.isArray(parsed)) {
    console.error(`배열이 아님: ${f}`);
    process.exit(1);
  }
  items.push(...parsed);
  console.log(`${f}: ${parsed.length}개`);
}

if (items.length === 0) {
  console.error("항목이 0개다.");
  process.exit(2);
}

// ── 상징 단위로 묶는다 ──────────────────────────────────────────────────────

/** 영어 이름을 상징 키로 만든다. 동의어는 대표 이름으로 접는다. */
function canonicalEn(termEn) {
  const en = String(termEn ?? "").trim().toLowerCase();
  return SYNONYMS.get(en) ?? en;
}

/**
 * 상징의 동일성 키. 보통은 대표 영어 이름이고, 영어가 못 가르는 자리
 * (`SPLIT_BY_KO`)에서만 한국어 이름을 덧붙인다.
 */
function symbolKey(item) {
  const en = canonicalEn(item.term_en);
  if (!en) return "";
  // 구분자를 문자로 적지 않는다 — 유니코드 이스케이프는 진짜 제어 바이트로 박힌다
  // (CLAUDE.md §10 #30·#43). JSON.stringify 로 감싸면 이스케이프가 필요 없다.
  return SPLIT_BY_KO.has(en) ? JSON.stringify([en, String(item.term_ko).trim()]) : en;
}

const bySymbol = new Map();

for (const item of items) {
  const key = symbolKey(item);
  if (!key) continue;
  if (!bySymbol.has(key)) {
    bySymbol.set(key, {
      key,
      canonEn: canonicalEn(item.term_en),
      koVotes: new Map(),
      enVotes: new Map(),
      catVotes: new Map(),
      meanings: [],
    });
  }
  const sym = bySymbol.get(key);

  /**
   * 한국어·영어 이름은 **다수결로 고른다.** 같은 상징을 여러 에이전트가 조금씩 다르게
   * 적는다(침상/침대, 도둑/도적, 쇠고기/소고기). 표기 하나를 골라야 화면과 매칭이
   * 한 벌로 선다.
   */
  const ko = String(item.term_ko ?? "").trim();
  if (ko) sym.koVotes.set(ko, (sym.koVotes.get(ko) ?? 0) + 1);
  const en = String(item.term_en ?? "").trim();
  if (en) sym.enVotes.set(en, (sym.enVotes.get(en) ?? 0) + 1);
  const cat = String(item.category ?? "").trim();
  if (cat) sym.catVotes.set(cat, (sym.catVotes.get(cat) ?? 0) + 1);

  /**
   * **같은 상황이 두 번 나오면 인용을 합친다.**
   *
   * 원문에는 같은 말을 하는 줄이 둘씩 있는 자리가 있다 — 「殺豬吉豬自死凶」와
   * 「殺豬豖者大吉利」는 둘 다 "돼지를 잡으면 길하다"이다. 이런 것은 **버리는 것이
   * 아니라 근거가 두 겹이라는 뜻**이므로, 의미 하나에 인용을 여럿 단다.
   *
   * 합치지 않으면 매칭 키 표(`contexts`)가 상황 문구를 키로 쓰는데 **같은 키가 둘이
   * 되어 하나가 조용히 사라진다**(JSON 객체의 성질). 실제로 매칭 키를 만들던 중에
   * 이 자리가 드러났다.
   *
   * **합치는 것은 같은 원문 안에서만이다.** 두 원문이 같은 상황 문구를 내면서 **뜻은
   * 다르게 말하는 자리가 있다** — 「거울이 깨짐」이 주공해몽에선 `鏡破主夫妻離別`
   * (부부가 헤어진다)이고 밀러에선 "가까운 사람의 갑작스러운 죽음"이다.
   *
   * 처음엔 상황 문구만 같으면 합쳤다. 그러자 **살아남은 해석은 밀러의 "죽음"인데 그
   * 아래 주공해몽 인용("부부가 이별한다")이 붙어 있었다** — 인용은 진짜인데 그 인용이
   * 그 해석을 뒷받침하지 않는다. CLAUDE.md §22가 말한 바로 그 병이고, §21의 재발이다
   * (근거 없는 것에 근거가 있는 것처럼 보이는 표시가 붙는 것).
   *
   * 그래서 **`work`가 같을 때만 합친다.** 두 원문이 같은 말을 하면 의미가 둘로 남고,
   * 화면은 출처를 갈라 둘 다 보여 준다 — 그것이 이 사전이 하려는 일이다.
   */
  const same = sym.meanings.find(
    (m) => m.context === item.context && m.cites[0].work === item.cite.work,
  );
  if (same) {
    const already = same.cites.some((c) => c.original === item.cite.original);
    if (!already) same.cites.push(item.cite);
    continue;
  }

  sym.meanings.push({
    context: item.context,
    interpretation_ko: item.interpretation_ko,
    interpretation_en: item.interpretation_en,
    polarity: item.polarity,
    cites: [item.cite],
  });
}

const topOf = (votes, fallback) => {
  let best = fallback;
  let bestN = -1;
  for (const [k, n] of votes) if (n > bestN) { best = k; bestN = n; }
  return best;
};

// ── id를 만든다 ────────────────────────────────────────────────────────────

/**
 * id는 주소가 된다(`/dream/symbol/<id>`). **한글을 넣지 않는다** — 주소가 인코딩되며
 * 깨진다(`symbol-pages.ts` 주석 참고). `term_en`을 슬러그로 만든다.
 */
function slugify(en, fallback) {
  const s = String(en)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return s || fallback;
}

const symbols = [];
const usedIds = new Set();
const usedExplicitIds = new Set();
const usedFallbackIds = new Set();
let seq = 0;

for (const sym of bySymbol.values()) {
  const term_ko = topOf(sym.koVotes, "");
  /**
   * **영어 이름은 다수결이 아니라 대표 이름(`canonEn`)을 쓴다.**
   *
   * 다수결로 뽑으면 밀러 표제어의 복수형이 이긴다 — `벌`의 `term_en`이 "bees"가 되고, 그러면
   * **영어 문장 "a bee stung me"가 그 상징에 안 걸린다**(`findTerm`은 `term_en`과 별칭을
   * 찾는데 단수 "bee"가 어디에도 없다). 실제로 회귀 하니스가 이 자리를 잡았다(2026-08-31).
   *
   * 밀린 변형("bees")은 `km*.json`의 `aliases_en`에 이미 들어 있다 — 그래서 대표 이름으로
   * 바꿔도 복수형 문장이 안 걸리게 되지는 않는다. 없는 자리는 조립 뒤에 확인해서 채웠다.
   */
  const term_en = sym.canonEn || topOf(sym.enVotes, "");
  const category = topOf(sym.catVotes, "object");
  // **id 는 대표 영어 이름으로 짓는다** — 다수결로 고른 표기(bees 등)가 아니라.
  // 그래야 같은 상징이 배치마다 다른 주소를 갖지 않는다.
  const pinned = EXPLICIT_IDS.get(sym.key);
  if (pinned) usedExplicitIds.add(sym.key);
  let id = pinned ?? slugify(sym.canonEn, `symbol-${++seq}`);
  if (usedIds.has(id)) {
    let n = 2;
    while (usedIds.has(`${id}-${n}`)) n++;
    id = `${id}-${n}`;
  }
  usedIds.add(id);

  // 상징의 전체 성향 — 의미들의 다수결. 갈리면 ambivalent.
  const pol = { positive: 0, negative: 0, neutral: 0 };
  for (const m of sym.meanings) pol[m.polarity] = (pol[m.polarity] ?? 0) + 1;
  let polarity = "neutral";
  if (pol.positive > 0 && pol.negative > 0) polarity = "ambivalent";
  else if (pol.positive > pol.negative && pol.positive > pol.neutral) polarity = "positive";
  else if (pol.negative > pol.positive && pol.negative > pol.neutral) polarity = "negative";

  /** 이 상징이 어느 원문에서 왔는가 — 인용에서 **세어서** 낸다(라벨을 믿지 않는다). */
  const works = [...new Set(sym.meanings.flatMap((m) => m.cites.map((c) => c.work)))].sort();

  /**
   * **기본값으로 못 박은 의미를 맨 앞으로 옮긴다.** 못 박아 놓고 그 상황 문구가 사라지면
   * 조용히 딴 것이 기본값이 되므로 **멈춘다**(검사 0건은 통과가 아니다 — §3).
   */
  const wantFirst = FALLBACK_FIRST.get(id);
  if (wantFirst !== undefined) {
    const at = sym.meanings.findIndex((m) => m.context === wantFirst);
    if (at < 0) {
      console.error(
        `FALLBACK_FIRST: ${id} 의 「${wantFirst}」가 의미에 없다 — 기본값이 딴 것으로 바뀐다.`,
      );
      process.exit(1);
    }
    usedFallbackIds.add(id);
    if (at > 0) sym.meanings.unshift(...sym.meanings.splice(at, 1));
  }

  symbols.push({
    id,
    term_ko,
    term_en,
    aliases: [],          // 매칭 키는 별도 단계에서 손으로 채운다
    category,
    polarity,
    works,
    tags: CONCEPTION_SYMBOL_IDS.has(id) ? [CONCEPTION_TAG] : [],
    weight: POPULAR_SYMBOL_IDS.has(id) ? 3 : 1,
    meanings: sym.meanings,
  });
}

/**
 * **표가 실제로 쓰였는지 센다.** 검사 0건은 통과가 아니라 「검사 안 됨」이다
 * (CLAUDE.md §3). 실제로 EXPLICIT_IDS 는 구분자가 어긋나 **한 번도 맞은 적이 없었는데**,
 * id 가 우연히 맞아떨어져 아무도 몰랐다(2026-09-01에 발견).
 */
const unusedExplicit = [...EXPLICIT_IDS.keys()].filter((k) => !usedExplicitIds.has(k));
if (unusedExplicit.length > 0) {
  console.error(
    `\nEXPLICIT_IDS 에 적혔는데 한 번도 안 쓰인 키 ${unusedExplicit.length}개:`,
  );
  for (const k of unusedExplicit) console.error("  " + k);
  console.error(
    "\n키는 symbolKey() 가 만드는 값과 **같은 표기**여야 한다." +
      "\n안 쓰이면 id 가 추출 파일 순서로 정해진다 — 주소가 조용히 뒤바뀔 수 있다.",
  );
  process.exit(1);
}

const unusedFallback = [...FALLBACK_FIRST.keys()].filter((k) => !usedFallbackIds.has(k));
if (unusedFallback.length > 0) {
  console.error(
    `\nFALLBACK_FIRST 에 적혔는데 사전에 없는 상징: ${unusedFallback.join(", ")}`,
  );
  process.exit(1);
}

/**
 * **기본값이 바뀐 상징을 이전 사전과 대조해서 잡는다.**
 *
 * `FALLBACK_FIRST`는 내가 **알고 정한** 자리만 지킨다. 여기 없는 상징의 기본값은 여전히
 * 추출 파일 이름의 정렬 순서가 정하고, 밀러 배치를 하나 넣을 때마다 조용히 갈아치워질 수
 * 있다(2026-09-02에 다섯이 그랬다). 그래서 **덮어쓰기 전의 사전**을 자로 삼아 잰다.
 *
 * 자를 이 조립기 자신의 옛 산출물에서 가져오는 것은 §24가 경고한 자리지만, 여기서 재려는
 * 것은 「원문을 옳게 읽었는가」가 아니라 **「이번 조립이 이미 나가 있는 답을 바꿨는가」**다 —
 * 그 물음의 자는 정의상 **지금 나가 있는 사전**이다.
 *
 * ## 이것이 못 잡는 것 (§22)
 *
 *   · 새로 생긴 상징은 못 본다 — 견줄 옛 값이 없다.
 *   · 첫 의미만 본다. 둘째 이하의 순서가 바뀌는 것은 판별어가 정하므로 여기서 안 잰다.
 *   · **바뀐 것이 옳은지는 판정하지 않는다.** 사람이 보고 `FALLBACK_FIRST`에 적으라는 뜻이다.
 */
if (existsSync(OUT)) {
  const prev = JSON.parse(readFileSync(OUT, "utf8"));
  const prevFirst = new Map(
    (Array.isArray(prev) ? prev : (prev.symbols ?? [])).map((s) => [
      s.id,
      s.meanings?.[0]?.context,
    ]),
  );
  /**
   * **`FALLBACK_FIRST` 에 적어 얼린 것은 「사람이 보고 정한 것」이므로 멈추지 않는다.**
   *
   * 아래 안내문이 「바꿀 뜻이었으면 FALLBACK_FIRST 에 적어 얼리고」라고 말하는데 **코드는
   * 그것을 보지 않고 있었다**(2026-09-02 배치 54에서 드러났다). 지금까지는 바뀐 기본값을
   * 늘 옛 값으로 되돌렸기 때문에 아무도 안 밟은 자리다 — 처음으로 **바꾸는 것이 옳은** 자리가
   * 나오자 관문이 그 길을 막았다. 주석이 약속한 것을 코드가 하게 맞춘다.
   *
   * **얼리지 않은 채 바뀐 것은 그대로 멈춘다** — 그것이 이 관문이 지키는 일이다.
   */
  const flipped = symbols.filter(
    (s) =>
      prevFirst.has(s.id) &&
      prevFirst.get(s.id) !== s.meanings[0].context &&
      FALLBACK_FIRST.get(s.id) !== s.meanings[0].context,
  );
  if (flipped.length > 0) {
    console.error(
      `\n기본값(첫 의미)이 바뀐 상징 ${flipped.length}개 — 판별어가 하나도 안 걸린 꿈의 답이 바뀐다:`,
    );
    for (const s of flipped) {
      console.error(`  ${s.id} (${s.term_ko})`);
      console.error(`     전: ${prevFirst.get(s.id)}`);
      console.error(`     후: ${s.meanings[0].context}`);
    }
    console.error(
      "\n바꿀 뜻이었으면 FALLBACK_FIRST 에 적어 얼리고, 아니면 그 배치가 어느 의미를" +
        "\n앞에 밀어 넣었는지 본다. 첫 의미는 아무것도 안 걸렸을 때 화면에 뜨는 답이다.",
    );
    process.exit(1);
  }
}

/** **「자주 찾는 상징」 목록이 사전과 어긋나면 멈춘다.** 빈 목록은 화면에서 절이 사라진다. */
const symbolIds = new Set(symbols.map((s) => s.id));
const missingPopular = [...POPULAR_SYMBOL_IDS].filter((id) => !symbolIds.has(id));
if (missingPopular.length > 0) {
  console.error(`\nPOPULAR_SYMBOL_IDS 에 적혔는데 사전에 없는 상징: ${missingPopular.join(", ")}`);
  console.error("이대로 두면 「자주 찾는 상징」 목록이 짧아지거나 비어 그 절이 화면에서 사라진다.");
  process.exit(1);
}

// ── 한국어 이름이 겹치는 자리를 잡는다 ──────────────────────────────────────

/**
 * **겹치는데 화면 이름이 없으면 멈춘다.**
 *
 * 조용히 통과시키면 목록에 「배」가 셋 나란히 뜨고 이용자는 무엇이 무엇인지 모른다.
 * §11의 "얼리려면 목록으로" — 새 충돌은 사람이 한 줄 적어야 지나간다.
 */
const byKo = new Map();
for (const s of symbols) {
  if (!byKo.has(s.term_ko)) byKo.set(s.term_ko, []);
  byKo.get(s.term_ko).push(s);
}

const unlabeled = [];
for (const [ko, group] of byKo) {
  if (group.length < 2) continue;
  for (const s of group) {
    if (LABEL_KO.has(s.id)) s.label_ko = LABEL_KO.get(s.id);
    else unlabeled.push(`  「${ko}」 ← id=${s.id} (term_en=${s.term_en}, 의미 ${s.meanings.length}개)`);
  }
}

if (unlabeled.length > 0) {
  console.error(
    `\n한국어 이름이 겹치는데 화면 이름이 정해지지 않은 상징 ${unlabeled.length}개:`,
  );
  for (const line of unlabeled) console.error(line);
  console.error(
    "\n같은 이름이 목록에 여럿 뜨면 이용자가 가릴 수 없다." +
      "\nbuild-dream-dictionary-v2.mjs 의 LABEL_KO 에 「이름(구분)」을 적고 다시 돌린다.",
  );
  process.exit(1);
}

/**
 * **한 상징 안에서 상황 문구가 겹치는 자리를 센다.**
 *
 * 두 원문이 같은 상황을 다르게 해석하면 의미가 둘로 남는다(위 참고). 그런데 매칭 키
 * 표(`dream-contexts*.ts`)는 **상황 문구를 객체 키로 쓴다** — 같은 키가 둘이면 하나가
 * 조용히 사라진다(JSON 객체의 성질). 이 사전 자체는 배열이라 안전하지만, **다음 단계인
 * 매칭 표 조립이 여기서 깨진다.** 조립을 멈추지는 않되 반드시 눈에 띄게 적는다.
 */
/**
 * **태몽 목록의 id가 실제로 있는지 본다.**
 *
 * 없는 id를 적어 두면 태그가 조용히 안 붙고, 유료 태몽 리포트가 상징을 못 찾는다 —
 * 화면에는 아무 오류도 안 뜬다. 「검사 0건은 통과가 아니다」와 같은 자리다(§1).
 */
const missingConception = [...CONCEPTION_SYMBOL_IDS].filter(
  (id) => !symbols.some((s) => s.id === id),
);
if (missingConception.length > 0) {
  console.error(
    `\n태몽 목록에 있는데 사전에 없는 id ${missingConception.length}개: ${missingConception.join(", ")}`,
  );
  console.error("태그가 조용히 안 붙으면 태몽 리포트가 상징을 못 찾는다 — 목록을 고칠 것.");
  process.exit(1);
}

const dupContexts = [];
for (const s of symbols) {
  const seen = new Map();
  for (const m of s.meanings) seen.set(m.context, (seen.get(m.context) ?? 0) + 1);
  for (const [ctx, n] of seen) {
    if (n > 1) dupContexts.push(`  ${s.term_ko}(${s.id}) — 「${ctx}」 ${n}번`);
  }
}

symbols.sort((a, b) => b.meanings.length - a.meanings.length || a.id.localeCompare(b.id));

const out = {
  dictVer: "2.1.0",
  builtFrom: files,
  symbols,
};

// 원본이 CRLF다(§7). LF로 쓰면 git diff가 전체 파일을 바뀐 것으로 본다.
writeFileSync(OUT, `${JSON.stringify(out, null, 2)}\n`.replace(/\n/g, "\r\n"), "utf8");

const meaningTotal = symbols.reduce((n, s) => n + s.meanings.length, 0);
const citeTotal = symbols.reduce(
  (n, s) => n + s.meanings.reduce((k, m) => k + m.cites.length, 0),
  0,
);
const byWork = { zhougong: 0, miller: 0, both: 0 };
for (const s of symbols) {
  if (s.works.length > 1) byWork.both++;
  else if (s.works[0] === "miller") byWork.miller++;
  else byWork.zhougong++;
}

console.log(`\n상징 ${symbols.length}개 · 의미 ${meaningTotal}개 · 인용 ${citeTotal}개`);
console.log(
  `출처별 상징: 주공해몽만 ${byWork.zhougong} · 밀러만 ${byWork.miller} · 둘 다 ${byWork.both}`,
);
console.log(`이름이 겹쳐 구분을 붙인 상징: ${[...byKo.values()].filter((g) => g.length > 1).flat().length}개`);

if (dupContexts.length > 0) {
  console.log(
    `\n두 원문이 같은 상황을 다르게 해석하는 자리 ${dupContexts.length}개 — 의미를 둘로 남겼다:`,
  );
  for (const line of dupContexts) console.log(line);
  console.log(
    "  → 매칭 표(dream-contexts*.ts)는 상황 문구를 객체 키로 쓴다." +
      "\n    이 자리들은 키가 겹치므로 매칭 표 조립 때 출처까지 키에 넣어야 한다.",
  );
}

console.log(`→ ${path.relative(process.cwd(), OUT)}`);
console.log(`\n확인: node scripts/verify-dream-cite.mjs <추출 파일들>`);
