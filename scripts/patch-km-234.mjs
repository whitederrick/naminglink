import fs from "node:fs";

// rye(호밀) — 배치 234: 밀러 「Rye Bread」 하나를 더한다.
const pRye = "apps/dreamslink/data-sources/extract/kmm233.json";
const dRye = JSON.parse(fs.readFileSync(pRye, "utf8"));
const rye = dRye.find((x) => x.id === "rye");
if (!rye) throw new Error("rye not found in kmm233.json");

rye.aliases.push("호밀빵");
Object.assign(rye.contexts, {
  "호밀빵을 보거나 먹음": "호밀빵 명랑하고 잘꾸며진",
});
Object.assign(rye.contexts_en, {
  "호밀빵을 보거나 먹음": "bread cheerful home",
});

fs.writeFileSync(pRye, JSON.stringify(dRye, null, 2) + "\n");
console.log("patched rye in kmm233.json");

// cash-box(금고) — 배치 234: 밀러 별개 표제어 「Safe」 둘을 더한다(「금고가
// 비어 있음」은 기존 Cash Box 표제어와 같은 그림이라 뺐다).
const pCash = "apps/dreamslink/data-sources/extract/kmm10.json";
const dCash = JSON.parse(fs.readFileSync(pCash, "utf8"));
const cash = dCash.find((x) => x.id === "cash-box");
if (!cash) throw new Error("cash-box not found in kmm10.json");

Object.assign(cash.contexts, {
  "금고를 봄": "안전 낙담스러운 벗어나",
  "금고를 열려고 애씀": "열려고 애쓰는 계획이걱정",
});
Object.assign(cash.contexts_en, {
  "금고를 봄": "security discouraging business",
  "금고를 열려고 애씀": "unlock worried maturity",
});

fs.writeFileSync(pCash, JSON.stringify(dCash, null, 2) + "\n");
console.log("patched cash-box in kmm10.json");

// mariner(뱃사람) — 배치 234: 밀러 「Sailor」 셋을 더한다.
const pMariner = "apps/dreamslink/data-sources/extract/kmm116.json";
const dMariner = JSON.parse(fs.readFileSync(pMariner, "utf8"));
const mariner = dMariner.find((x) => x.id === "mariner");
if (!mariner) throw new Error("mariner not found in kmm116.json");

// 곁가지 — 문맥 이름을 "선원"이 아니라 "뱃사람"으로 지었다. bare "선원"은
// 이미 `crew`(선원들/승무원, 집단)의 별칭이라 그대로 쓰면 두 상징이 함께
// 뜬다. mariner 는 개인(뱃사람)이라 그 별칭과 겹치지 않는 이름으로 갈랐다.
Object.assign(mariner.contexts, {
  "뱃사람 꿈을 꿈": "길고긴 짜릿한 여정을",
  "여성이 뱃사람 꿈을 꿈": "여성이 헤어질 불장난 경솔한",
  "여성이 스스로 뱃사람이라고 여김": "스스로 정숙하지못한 일탈에",
});
// 곁가지 — "여성이 뱃사람 꿈을 꿈"과 "여성이 스스로 뱃사람이라고 여김"이
// "여성이"를 함께 쓰면 둘 다 나온 문장에서 동점이 난다. m234.json에서
// "스스로"쪽(좁은 쪽)을 앞에 둬 순서로 풀었다(§25 곁가지 3과 같은 자리).
Object.assign(mariner.contexts_en, {
  "뱃사람 꿈을 꿈": "exciting thrilling adventurous",
  "여성이 뱃사람 꿈을 꿈": "woman flirtation separation",
  "여성이 스스로 뱃사람이라고 여김": "herself escapade unmaidenly",
});

fs.writeFileSync(pMariner, JSON.stringify(dMariner, null, 2) + "\n");
console.log("patched mariner in kmm116.json");

// sea(바다) — 배치 234: 밀러 「Sailing」의 한 그림만 더한다(잔잔한 물 항해는
// 기존 밀러 Ocean 표제어의 「바다가 잔잔함」과 같은 그림이라 뺐다).
const pSea = "apps/dreamslink/data-sources/extract/km8.json";
const dSea = JSON.parse(fs.readFileSync(pSea, "utf8"));
const sea = dSea.find((x) => x.id === "sea");
if (!sea) throw new Error("sea not found in km8.json");

Object.assign(sea.contexts, {
  "작은 배를 타고 항해함": "작은 힘을넘어서지 바라는바가",
});
Object.assign(sea.contexts_en, {
  "작은 배를 타고 항해함": "small vessel desires excel",
});
// 곁가지 — 기존 "바다가 잔잔함"의 판별어에 있던 "항해"가 너무 넓어서
// (모든 뱃놀이 문장에 걸림) 이 새 문맥과 동점을 냈다. "잔잔한"·"뱃사람"만
// 남기고 "항해"는 뺐다 — 그 자체로도 "바다가 잔잔함"을 가리키는 데
// 충분하다(§30 곁가지, 붙이는 쪽만이 아니라 기존 판별어도 함께 좁힌다).
sea.contexts["바다가 잔잔함"] = "잔잔한 뱃사람";
sea.contexts_en["바다가 잔잔함"] = "calm propitious voyage";

fs.writeFileSync(pSea, JSON.stringify(dSea, null, 2) + "\n");
console.log("patched sea in km8.json");
