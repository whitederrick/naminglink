import fs from "node:fs";

// sea(바다) — 배치 240: 밀러 「Sea」 셋을 더한다. 원문 각주 [198] 'See
// Ocean' 그대로.
const pSea = "apps/dreamslink/data-sources/extract/km8.json";
const dSea = JSON.parse(fs.readFileSync(pSea, "utf8"));
const sea = dSea.find((x) => x.id === "sea");
if (!sea) throw new Error("sea not found in km8.json");

Object.assign(sea.contexts, {
  "바다의 외로운 탄식 소리를 들음": "외로운 탄식 지치고헛된",
  "바다 꿈이 못다 채운 기대를 예고함": "못다 채운 물질적즐거움",
  "여성이 연인과 함께 바다 위를 미끄러지듯 나아감": "미끄러지듯 처녀다운소망 변치않는맹세",
});
Object.assign(sea.contexts_en, {
  "바다의 외로운 탄식 소리를 들음": "lonely sighing weary unfruitful",
  "바다 꿈이 못다 채운 기대를 예고함": "unfulfilled anticipations craving",
  "여성이 연인과 함께 바다 위를 미끄러지듯 나아감": "glides swiftly maidenly vows",
});

fs.writeFileSync(pSea, JSON.stringify(dSea, null, 2) + "\n");
console.log("patched sea in km8.json");

// chair(의자) — 배치 240: 밀러 「Seat」 둘을 더한다. 영어 별칭에 이미
// "seat"가 있던 자리다.
const pChair = "apps/dreamslink/data-sources/extract/kmm11.json";
const dChair = JSON.parse(fs.readFileSync(pChair, "utf8"));
const chair = dChair.find((x) => x.id === "chair");
if (!chair) throw new Error("chair not found in kmm11.json");

// 곁가지 — 문맥 이름에 "자리"(일반 낱말)를 썼다가 프로브가 못 걸리는 것을
// 잡았다. chair 의 own name 은 "의자"뿐이라 "자리"만 있는 문장은 상징
// 자체가 안 걸린다 — "의자"로 고쳤다.
Object.assign(chair.contexts, {
  "남이 자신의 의자를 차지함": "차지함 차지했 도움을청하는",
  "여성에게 의자를 내줌": "내줌 내주었 매력적인이의술수",
});
Object.assign(chair.contexts_en, {
  "남이 자신의 의자를 차지함": "taken tormented calling",
  "여성에게 의자를 내줌": "give woman yielding",
});

fs.writeFileSync(pChair, JSON.stringify(dChair, null, 2) + "\n");
console.log("patched chair in kmm11.json");
