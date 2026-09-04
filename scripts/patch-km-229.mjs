import fs from "node:fs";

// roof(지붕) — 배치 229: 문맥 0개이던 자리에 밀러 「Roof」 다섯을 채운다.
const pRoof = "apps/dreamslink/data-sources/extract/km1.json";
const dRoof = JSON.parse(fs.readFileSync(pRoof, "utf8"));
const roof = dRoof.find((x) => x.id === "roof");
if (!roof) throw new Error("roof not found in km1.json");

Object.assign(roof.contexts, {
  "지붕 위에 있는 자신을 발견함": "발견했 자신을 있는것을",
  "지붕에서 겁에 질려 떨어진다고 생각함": "겁에 질려 떨어진다 굳건히",
  "지붕이 무너져 내리는 것을 봄": "무너져 내리는 재앙",
  "지붕을 고치거나 지음": "고치거나 고쳤 짓는 불어날",
  "지붕 위에서 잠을 잠": "잠을 자는 잠들어 안전",
});
Object.assign(roof.contexts_en, {
  "지붕 위에 있는 자신을 발견함": "unbounded success discover",
  "지붕에서 겁에 질려 떨어진다고 생각함": "frightened precarious insecure",
  "지붕이 무너져 내리는 것을 봄": "collapsing calamity threatened",
  "지붕을 고치거나 지음": "repair rebuilding fortune",
  "지붕 위에서 잠을 잠": "sleeping security robust",
});

fs.writeFileSync(pRoof, JSON.stringify(dRoof, null, 2) + "\n");
console.log("patched roof in km1.json");

// 곁가지 — roof는 원래 의미가 하나(주공해몽 「지붕 위에 올라섬」)라 판별어가
// 없어도 됐다(§35 곁가지). 이제 여섯이 됐으니 그 하나도 판별어가 있어야 한다.
roof.contexts["지붕 위에 올라섬"] = "올라섰 올랐다 기어올라";
roof.contexts_en["지붕 위에 올라섬"] = "climbed climbing ascended";
fs.writeFileSync(pRoof, JSON.stringify(dRoof, null, 2) + "\n");

// chicken(닭) — 배치 229: 밀러 「Rooster」 둘을 더한다. 원문 각주 [194] 'See
// Chickens' 그대로 기존 chicken 상징에 붙인다. 「수탉들이 싸우는 것을 봄」이
// 「수탉」한 낱말만으로 동점이 나면 「수탉 꿈을 꿈」과 갈릴 수 없어(둘 다 그
// 문장에 "수탉"이 있다), m229.json에서 좁은 쪽(싸우는 것을 봄)을 앞에 두어
// 동점을 차례로 풀었다(§25 곁가지 3과 같은 자리) — 판별어를 공유시키는
// 대신 순서로 푼 것이다.
const pChicken = "apps/dreamslink/data-sources/extract/km8.json";
const dChicken = JSON.parse(fs.readFileSync(pChicken, "utf8"));
const chicken = dChicken.find((x) => x.id === "chicken");
if (!chicken) throw new Error("chicken not found in km8.json");

Object.assign(chicken.contexts, {
  "수탉 꿈을 꿈": "수탉 성공하여 떨치 우쭐",
  "수탉들이 싸우는 것을 봄": "싸우는 다툼 경쟁자",
});
Object.assign(chicken.contexts_en, {
  "수탉 꿈을 꿈": "successful prominence conceited",
  "수탉들이 싸우는 것을 봄": "fighting altercations rivals",
});
// 곁가지 — "수탉들이"는 "들"이 조사가 아니라 접미사라 bare "수탉"(alias)도
// "닭"(term_ko, "수"가 앞을 막음)도 안 걸렸다(§25 §4). "수탉들" 별칭을 더했다.
chicken.aliases.push("수탉들");

fs.writeFileSync(pChicken, JSON.stringify(dChicken, null, 2) + "\n");
console.log("patched chicken in km8.json");

// rope(밧줄) — 배치 229: 밀러 「Ropes」 둘만 더한다(오르기·내려가기). 일반적으로
// 「보는」 것과 「몸에 묶이는」 것은 기존 문맥과 같은 그림·정반대 극성이라 뺐다
// (mb229.json skipped_sentences 참고).
const pRope = "apps/dreamslink/data-sources/extract/km9.json";
const dRope = JSON.parse(fs.readFileSync(pRope, "utf8"));
const rope = dRope.find((x) => x.id === "rope");
if (!rope) throw new Error("rope not found in km9.json");

Object.assign(rope.contexts, {
  "밧줄을 타고 오름": "올랐 이겨낼 해치려는",
  "밧줄을 타고 내려감": "내려 실망 낙관",
});
Object.assign(rope.contexts_en, {
  "밧줄을 타고 오름": "climb overcome enemies injure",
  "밧줄을 타고 내려감": "descend disappointment sanguine",
});

fs.writeFileSync(pRope, JSON.stringify(dRope, null, 2) + "\n");
console.log("patched rope in km9.json");
