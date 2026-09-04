import fs from "node:fs";

// anger(분노) — 배치 206: 「Rage」 셋을 더한다. "rage"가 이미 그 영어 별칭이었다.
const pAnger = "apps/dreamslink/data-sources/extract/kmm5.json";
const dAnger = JSON.parse(fs.readFileSync(pAnger, "utf8"));
const anger = dAnger.find((x) => x.id === "anger");
if (!anger) throw new Error("anger not found in kmm5.json");

anger.aliases.push("분노하는", "분노했다", "분노하여");
// term_ko "분노"는 "~하다"로 쓰이는 명사인데(§29, 배치 109·116·117과 같은 자리) 활용형
// 별칭이 없어 "분노하는 꿈을 꿈"이라는 맨 그 자신의 문맥조차 한 번도 안 걸리고
// 있었다(몇 주 전 상처) — 이번에 이 상징을 여는 김에 넓힌다.
anger.aliases.push("격노하여", "격노한", "화를 내는", "화를 냈다");

Object.assign(anger.contexts, {
  "제가 격노하여 물건을 부수고 소리 지름": "부수고 소리",
  "남이 격노한 것을 봄": "남이 사업이",
  "처녀가 애인이 격노한 것을 봄": "처녀가 불협화음",
});
Object.assign(anger.contexts_en, {
  "제가 격노하여 물건을 부수고 소리 지름": "scolding tearing quarrels",
  "남이 격노한 것을 봄": "unfavorable business unhappiness",
  "처녀가 애인이 격노한 것을 봄": "lover discordant misunderstandings",
});

fs.writeFileSync(pAnger, JSON.stringify(dAnger, null, 2) + "\n");
console.log("patched anger in kmm5.json");

// balcony(발코니) — 배치 206: 「Railing」이 진짜 임자다. balcony의 두 문맥 어디에도
// "난간"이 안 쓰여서(디스크립터에도 없음) 별칭에서 뺀다 — railing으로 옮긴다.
const pBalcony = "apps/dreamslink/data-sources/extract/kmm6.json";
const dBalcony = JSON.parse(fs.readFileSync(pBalcony, "utf8"));
const balcony = dBalcony.find((x) => x.id === "balcony");
if (!balcony) throw new Error("balcony not found in kmm6.json");

balcony.aliases = balcony.aliases.filter((a) => a !== "난간");

fs.writeFileSync(pBalcony, JSON.stringify(dBalcony, null, 2) + "\n");
console.log("removed 난간 alias from balcony in kmm6.json");
