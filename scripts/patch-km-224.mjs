import fs from "node:fs";

// ring(반지) — 배치 224: 밀러 「Ring」 넷으로 처음 채운다(그동안 문맥 0개였다).
const pRing = "apps/dreamslink/data-sources/extract/km6.json";
const dRing = JSON.parse(fs.readFileSync(pRing, "utf8"));
const ring = dRing.find((x) => x.id === "ring");
if (!ring) throw new Error("ring not found in km6.json");

// 곁가지(옛 상처) — 프로브가 찾았다. 기존 의미("금과 옥으로 된 가락지를 얻음")가
// "가락지"라는 말을 쓰는데 별칭에는 "반지"류만 있어 그 문장 자체가 한 번도 안
// 걸리고 있었다(CLAUDE.md §29 곁가지 ①과 같은 자리).
ring.aliases.push("가락지");

// 기존에 문맥 0개였지만 실은 이미 있던 의미가 하나 있었다("금과 옥으로 된 가락지를
// 얻음", 주공해몽) — 의미가 하나뿐이라 판별어 없이도 괜찮았는데, 이번에 넷을 더하며
// 다섯이 되어 그 의미도 판별어를 채워야 한다(§30 곁가지와 같은 자리).
Object.assign(ring.contexts, {
  "금과 옥으로 된 가락지를 얻음": "금과 옥으로",
  "반지를 낌": "꼈다 사업을",
  "부러진 반지를 봄": "부러진 다툼",
  "처녀가 반지를 받음": "받았다 근심이",
  "남이 반지를 낀 것을 봄": "남이 번영",
});
Object.assign(ring.contexts_en, {
  "금과 옥으로 된 가락지를 얻음": "jade noble bearing",
  "반지를 낌": "wearing new enterprises",
  "부러진 반지를 봄": "broken quarrels unhappiness",
  "처녀가 반지를 받음": "receive worries cease",
  "남이 반지를 낀 것을 봄": "others prosperity friends",
});

fs.writeFileSync(pRing, JSON.stringify(dRing, null, 2) + "\n");
console.log("patched ring in km6.json");
