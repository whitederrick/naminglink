import fs from "node:fs";

// claret-cup-and-punch(펀치) — 배치 198: 「Punch」 마시는 쪽. 지금까지 의미가 하나도
// 없었다.
const pPunch = "apps/dreamslink/data-sources/extract/kmm14.json";
const dPunch = JSON.parse(fs.readFileSync(pPunch, "utf8"));
const punch = dPunch.find((x) => x.id === "claret-cup-and-punch");
if (!punch) throw new Error("claret-cup-and-punch not found in kmm14.json");

Object.assign(punch.contexts, {
  "펀치술을 봄": "새로 알게",
  "펀치술을 마심": "명예와 도덕",
});
Object.assign(punch.contexts_en, {
  "펀치술을 봄": "attention new acquaintances",
  "펀치술을 마심": "selfish pleasures morality",
});

fs.writeFileSync(pPunch, JSON.stringify(dPunch, null, 2) + "\n");
console.log("patched claret-cup-and-punch in kmm14.json");

// blow(구타) — 배치 198: 「Punch」 주먹질하는 쪽을 더한다.
const pBlow = "apps/dreamslink/data-sources/extract/kmm4.json";
const dBlow = JSON.parse(fs.readFileSync(pBlow, "utf8"));
const blow = dBlow.find((x) => x.id === "blow");
if (!blow) throw new Error("blow not found in kmm4.json");

blow.aliases.push("몽둥이로 쳤다", "주먹으로 쳤다", "매를 맞는", "매를 맞았다");
// 옛 "매를 맞는 꿈을 꿈"이 별칭에 "맞다" 활용형이 없어 심어진 뒤로 한 번도 안 걸리고
// 있었다(몇 주 전 상처) — 이번에 이 상징을 여는 김에 넓힌다.

Object.assign(blow.contexts, {
  "몽둥이나 주먹으로 남을 침": "몽둥이 주먹으로 헐뜯",
});
Object.assign(blow.contexts_en, {
  "몽둥이나 주먹으로 남을 침": "club fist quarrels recriminations",
});

fs.writeFileSync(pBlow, JSON.stringify(dBlow, null, 2) + "\n");
console.log("patched blow in kmm4.json");
