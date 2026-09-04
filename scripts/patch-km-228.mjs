import fs from "node:fs";

// road(길) — 배치 228: 밀러 「Road」 세 그림을 더한다. 「나무와 꽃이 늘어선 길」은
// 기존 밀러 Path 문맥과 같은 그림이라 뺐다(mb228.json skipped_sentences 참고).
const pRoad = "apps/dreamslink/data-sources/extract/km2.json";
const dRoad = JSON.parse(fs.readFileSync(pRoad, "utf8"));
const road = dRoad.find((x) => x.id === "road");
if (!road) throw new Error("road not found in km2.json");

Object.assign(road.contexts, {
  "험한 미지의 길을 감": "미지의 낯선 처음 가는",
  "동행하는 벗과 함께 길을 감": "동행 함께간 벗과 친구와",
  "길을 잃음": "잃어버 잃었다 헤매다 헤매었",
});
Object.assign(road.contexts_en, {
  "험한 미지의 길을 감": "unknown undertakings grief traveling",
  "동행하는 벗과 함께 길을 감": "friends accompany ideal home",
  "길을 잃음": "lose mistake trade loss",
});

fs.writeFileSync(pRoad, JSON.stringify(dRoad, null, 2) + "\n");
console.log("patched road in km2.json");

// rock(바위) — 배치 228: 밀러 「Rocks」의 첫 그림만 더한다. 「가파른 바위를 오름」은
// 기존 「바위에 오름」(주공해몽, 길)과 같은 그림·정반대 극성이라 뺐다.
const pRock = "apps/dreamslink/data-sources/extract/km3.json";
const dRock = JSON.parse(fs.readFileSync(pRock, "utf8"));
const rock = dRock.find((x) => x.id === "rock");
if (!rock) throw new Error("rock not found in km3.json");

Object.assign(rock.contexts, {
  "바위를 봄": "역경 불화 전반적 불행",
});
Object.assign(rock.contexts_en, {
  "바위를 봄": "reverses discord unhappiness",
});

// 곁가지 — 프로브 지킴 케이스가 옛 상처 둘을 찾았다(§29 곁가지). "너럭바위"는
// 앞 글자가 한글인 합성어라 별칭이 없으면 bare "바위" 로는 안 걸린다. "바위에
// 오름"은 "오르다"가 르 불규칙이라 "올랐다" 꼴이 "올라"/"오르" 어느 판별어에도
// 안 걸리고 있었다 — 심어진 뒤로 한 번도 안 걸린 자리다.
rock.aliases.push("너럭바위");
rock.contexts["바위에 오름"] += " 올랐";

fs.writeFileSync(pRock, JSON.stringify(dRock, null, 2) + "\n");
console.log("patched rock in km3.json");

// fireworks(불꽃놀이) — 배치 228: 밀러 「Rocket」·「Roman Candle」 넷을 더한다.
// 로켓도 로마 폭죽도 쏘아 올리는 불꽃이라 새 상징을 세우지 않고 여기 붙인다 —
// 새 상징 "로켓"은 기존 locket(로켓 목걸이)과 겹쳐 화면에 상징이 둘 뜰 위험이 있다.
const pFireworks = "apps/dreamslink/data-sources/extract/km3.json";
const dFireworks = JSON.parse(fs.readFileSync(pFireworks, "utf8"));
const fireworks = dFireworks.find((x) => x.id === "fireworks");
if (!fireworks) throw new Error("fireworks not found in km3.json");

Object.assign(fireworks.contexts, {
  "쏘아 올린 불꽃이 하늘로 치솟음": "치솟 솟구쳐 날아올라 갑작스런",
  "쏘아 올린 불꽃이 떨어짐": "떨어지 떨어졌 낙하 꺼지며",
  "화려한 불꽃놀이용 통을 봄": "화려한 즐거움 지위 빠르게",
  "쥐고 있던 불꽃놀이용 통이 빈 것을 발견함": "비어있 발견 실망 오래도록",
});
Object.assign(fireworks.contexts_en, {
  "쏘아 올린 불꽃이 하늘로 치솟음": "ascending elevation wooing",
  "쏘아 올린 불꽃이 떨어짐": "falling unhappy unions",
  "화려한 불꽃놀이용 통을 봄": "speedy attainment coveted positions",
  "쥐고 있던 불꽃놀이용 통이 빈 것을 발견함": "loaded empty disappointed",
});
// "roman candles"를 판별어로 썼다가 바로 아래서 aliases_en 에 같은 문구를 더해
// ownTerms 로 죽었다(§29 곁가지 ①의 영어판) — 판별어를 "speedy attainment..."로 바꿨다.
fireworks.aliases_en.push("rocket", "rockets", "roman candles");

fs.writeFileSync(pFireworks, JSON.stringify(dFireworks, null, 2) + "\n");
console.log("patched fireworks in km3.json");
