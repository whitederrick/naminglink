import fs from "node:fs";

// rain(비) — 배치 207: 「Rain」 열을 더한다. 기존 네 문맥(주공해몽)에 밀러 열을 더한다.
const pRain = "apps/dreamslink/data-sources/extract/km3.json";
const dRain = JSON.parse(fs.readFileSync(pRain, "utf8"));
const rain = dRain.find((x) => x.id === "rain");
if (!rain) throw new Error("rain not found in km3.json");

// 프로브가 찾은 옛 상처(배치 207 이전부터 있던 것) — 「궂은비가 내려 어둑함」·
// 「큰비가 쏟아짐」은 그 문맥 이름 자체가 매칭 문장인데, "궂은비"·"큰비"는 앞 글자가
// 한글이라 isStandalone이 "비"를 낱말 조각으로 버려 rain이라는 이름 자체가 한 번도
// 안 걸리고 있었다(CLAUDE.md §29 곁가지 ①과 같은 자리 — 죽은 것이 별칭이 아니라
// 상징의 이름 그 자체였다). 합성어를 별칭으로 올린다.
rain.aliases.push("궂은비", "큰비");

// 열 문맥 모두 서로 판별어를 공유하지 않도록 골랐다(verify-dream-km의 「동점 위험」 회피) —
// 특히 두 leaking 문맥(맑음/더러움)은 "새는 집에서 물이"를 공유하면 동점이 나서 뺐고,
// 각자 물의 상태를 나타내는 낱말만으로 갈랐다.
Object.assign(rain.contexts, {
  "화창한 소나기를 맞음": "화창한 상쾌하게 젊음의",
  "비가 다가옴을 보고 듣되 젖지 않고 피함": "다가오는 피했다 성공할",
  "집 안에서 창으로 비 내림을 봄": "창문으로 앉아서 격정적",
  "지붕에 떨어지는 빗소리를 들음": "지붕에 후드득 타닥타닥",
  "비가 새는 집에서 물이 맑음": "새어 맑았다 은밀한",
  "비가 새는 집에서 물이 흐리고 더러움": "흐렸다 더러웠다 들통날",
  "빗소리를 들으며 못다한 일을 후회함": "빗소리에 후회했다 도리를",
  "남에게 비가 내리는 것을 봄": "남에게 밀어낼 믿음에서",
  "처녀가 비에 옷이 젖고 더러워짐": "젖고 더러워졌다 경솔하게",
  "가축에게 비가 내리는 것을 봄": "가축에게 실망할 불쾌해질",
});
Object.assign(rain.contexts_en, {
  "화창한 소나기를 맞음": "fair youth zest prosperity",
  "비가 다가옴을 보고 듣되 젖지 않고 피함": "escape wet succeed mature",
  "집 안에서 창으로 비 내림을 봄": "window sitting passionate requited",
  "지붕에 떨어지는 빗소리를 들음": "patter roof domestic bliss",
  "비가 새는 집에서 물이 맑음": "pure illicit unexpectedly hidden",
  "비가 새는 집에서 물이 흐리고 더러움": "filthy muddy reverse exposure",
  "빗소리를 들으며 못다한 일을 후회함": "regretting duty listening",
  "남에게 비가 내리는 것을 봄": "others exclude confidence",
  "처녀가 비에 옷이 젖고 더러워짐": "soiled indiscreetly suspicions",
  "가축에게 비가 내리는 것을 봄": "stock disappointment unpleasantness",
});

fs.writeFileSync(pRain, JSON.stringify(dRain, null, 2) + "\n");
console.log("patched rain in km3.json");
