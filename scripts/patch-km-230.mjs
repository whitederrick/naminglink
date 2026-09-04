import fs from "node:fs";

// rope(밧줄) — 배치 230: 배치 229가 「Ropes」 표제어를 중간에서 끊은 나머지
// 여덟을 마저 붙인다. 기존 다섯(묶임·봄·끊어짐·오름·내려감)과 겹치지 않게
// "묶","끊/잘","올랐","내려" 어근을 판별어에서 피했다.
const pRope = "apps/dreamslink/data-sources/extract/km9.json";
const dRope = JSON.parse(fs.readFileSync(pRope, "utf8"));
const rope = dRope.find((x) => x.id === "rope");
if (!rope) throw new Error("rope not found in km9.json");

Object.assign(rope.contexts, {
  "밧줄을 끊음": "끊었 원한 겨룸",
  "밧줄이나 말을 묶어 둠": "말을 다스릴 원하는대로 힘을",
  "밧줄 위를 걸음": "위를 걸으 투기 성공할",
  "남이 밧줄 위를 걷는 것을 봄": "남이 남들의 행운 이득을",
  "밧줄을 뛰어넘음": "뛰어넘 짜릿 파격 일탈",
  "아이들과 줄넘기를 함": "줄넘기 이기적 업신여",
  "발로 밧줄을 붙잡음": "발로 붙잡 인자 다정",
  "위층 창문에서 아래 사람들에게 밧줄을 전해 줌": "위층 창문 전해줌 호텔",
});
Object.assign(rope.contexts_en, {
  "밧줄을 끊음": "ability enmity competition",
  "밧줄이나 말을 묶어 둠": "horses control power wish",
  "밧줄 위를 걸음": "walk hazardous speculation succeed",
  "남이 밧줄 위를 걷는 것을 봄": "see others fortunate ventures",
  "밧줄을 뛰어넘음": "jump startle sensational",
  "아이들과 줄넘기를 함": "children selfish overbearing",
  "발로 밧줄을 붙잡음": "catch foot benevolent tender",
  "위층 창문에서 아래 사람들에게 밧줄을 전해 줌": "window hotel propriety",
});

// 곁가지 — "아이들과 줄넘기를 함"은 이용자가 "밧줄"을 안 쓰고 "줄넘기"라고만
// 쓴다. 별칭에 "줄넘기"를 더해야 상징 자체가 걸린다(프로브가 잡음).
rope.aliases.push("줄넘기");
// 곁가지 — "남이 밧줄 위를 걷는 것을 봄"과 "밧줄 위를 걸음"은 "위를 걸"이
// 겹쳐 동점이 나면 앞선 쪽이 이긴다 — 좁은 쪽(남이~)을 m230.json에서 앞에
// 두어 순서로 풀었다(§25 곁가지 3, 229의 chicken과 같은 자리).

fs.writeFileSync(pRope, JSON.stringify(dRope, null, 2) + "\n");
console.log("patched rope in km9.json");
