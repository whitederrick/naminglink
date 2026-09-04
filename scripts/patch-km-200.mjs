import fs from "node:fs";

// dance(춤) — 배치 200: 「Quadrille」를 더한다. "dancing"이 이미 그 영어 별칭이었다.
const pDance = "apps/dreamslink/data-sources/extract/km5.json";
const dDance = JSON.parse(fs.readFileSync(pDance, "utf8"));
const dance = dDance.find((x) => x.id === "dance");
if (!dance) throw new Error("dance not found in km5.json");

Object.assign(dance.contexts, {
  "카드리유 춤을 춤": "카드리유 약속으로",
});
Object.assign(dance.contexts_en, {
  "카드리유 춤을 춤": "quadrille pleasant engagement",
});

fs.writeFileSync(pDance, JSON.stringify(dDance, null, 2) + "\n");
console.log("patched dance in km5.json");

// bog(수렁) — 배치 200: 「Quagmire」 셋을 더한다. "a quagmire"가 이미 그 영어 별칭이었다.
const pBog = "apps/dreamslink/data-sources/extract/kmm7.json";
const dBog = JSON.parse(fs.readFileSync(pBog, "utf8"));
const bog = dBog.find((x) => x.id === "bog");
if (!bog) throw new Error("bog not found in kmm7.json");

bog.aliases.push("늪지", "수렁에 빠졌다", "수렁에 빠지");
// 옛 "늪지 꿈을 꿈"이 별칭에 "늪지가"·"늪지를"(조사 붙은 꼴)만 있고 맨 "늪지"가 없어
// 심어진 뒤로 한 번도 안 걸리고 있었다(몇 주 전 상처) — 이번에 이 상징을 여는 김에 넓힌다.

Object.assign(bog.contexts, {
  "수렁에 빠짐": "빠졌 책무를",
  "남이 수렁에 빠진 것을 봄": "남이 실패가",
});
Object.assign(bog.contexts_en, {
  "수렁에 빠짐": "inability obligations illness",
  "남이 수렁에 빠진 것을 봄": "others situated failures",
});

fs.writeFileSync(pBog, JSON.stringify(dBog, null, 2) + "\n");
console.log("patched bog in kmm7.json");
