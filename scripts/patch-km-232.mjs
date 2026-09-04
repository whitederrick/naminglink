import fs from "node:fs";

// rouge(연지) — 배치 232: 밀러 「Rouge」 넷을 더한다.
const pRouge = "apps/dreamslink/data-sources/extract/km4.json";
const dRouge = JSON.parse(fs.readFileSync(pRouge, "utf8"));
const rouge = dRouge.find((x) => x.id === "rouge");
if (!rouge) throw new Error("rouge not found in km4.json");

Object.assign(rouge.contexts, {
  "연지를 사용함": "사용했 이루려 속임수",
  "남이 얼굴에 연지를 바른 것을 봄": "남이 발랐 이용당",
  "손이나 옷에 연지가 묻은 것을 봄": "손이나 옷에 묻은 들통날",
  "얼굴에서 연지가 지워짐": "지워졌 굴욕 부자연스",
});
Object.assign(rouge.contexts_en, {
  "연지를 사용함": "practice trickery wishes",
  "남이 얼굴에 연지를 바른 것을 봄": "others faces artfully deceitful",
  "손이나 옷에 연지가 묻은 것을 봄": "hands clothing detected scheme",
  "얼굴에서 연지가 지워짐": "comes off humiliated rival",
});

fs.writeFileSync(pRouge, JSON.stringify(dRouge, null, 2) + "\n");
console.log("patched rouge in km4.json");

// india-rubber(고무) — 배치 232: 밀러 별개 표제어 「Rubber」(India Rubber와는
// 다른 표제어) 다섯을 더한다. 같은 재료라 새 상징을 세우지 않고 여기 붙인다.
// 곁가지 — m232.json 의 term_en 을 "india-rubber"(하이픈)로 처음 적었다가
// 조립기가 FALLBACK_FIRST 를 못 찾았다 — 기존 m61.json 은 term_en 이 정확히
// "India rubber"(대문자 I, 공백)라서 다른 문자열은 **딴 상징으로 갈린다**
// (둘 다 슬러그는 india-rubber가 돼도 그룹핑은 원래 term_en 문자열로 한다).
// term_en 을 "India rubber"로 정확히 맞춰야 같은 상징에 합쳐진다.
const pRubber = "apps/dreamslink/data-sources/extract/kmm61.json";
const dRubber = JSON.parse(fs.readFileSync(pRubber, "utf8"));
const rubber = dRubber.find((x) => x.id === "india-rubber");
if (!rubber) throw new Error("india-rubber not found in kmm61.json");

Object.assign(rubber.contexts, {
  "고무 옷을 입음": "입었다 순결하고 명예를",
  "고무 옷이 해지거나 찢어짐": "해지거나 찢어 추문 조심해야",
  "속어로 '고무'라는 말을 씀": "속어로 슬랭 까다롭지",
  "제 팔다리가 고무처럼 늘어남": "팔다리가 늘어남 병이다가오",
  "고무 제품 꿈을 꿈": "제품 은밀하게 이해하지못",
});
Object.assign(rubber.contexts_en, {
  "고무 옷을 입음": "clothed honors purity morality",
  "고무 옷이 해지거나 찢어짐": "ragged torn scandal cautious",
  "속어로 '고무'라는 말을 씀": "slang term easy please",
  "제 팔다리가 고무처럼 늘어남": "limbs elastic illness deceit",
  "고무 제품 꿈을 꿈": "goods secret conduct",
});

fs.writeFileSync(pRubber, JSON.stringify(dRubber, null, 2) + "\n");
console.log("patched india-rubber in kmm61.json");
