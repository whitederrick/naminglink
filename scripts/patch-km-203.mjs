import fs from "node:fs";

// quilt(솜이불) — 배치 203: 「Quilts」 넷을 더한다. "quilts"가 이미 그 영어 별칭이었고
// 지금까지 의미가 하나도 없었다.
const pQuilt = "apps/dreamslink/data-sources/extract/km5.json";
const dQuilt = JSON.parse(fs.readFileSync(pQuilt, "utf8"));
const quilt = dQuilt.find((x) => x.id === "quilt");
if (!quilt) throw new Error("quilt not found in km5.json");

quilt.aliases.push("이불을", "이불이");
// 옛 "좋은 이불을 스스로 덮음"이 term_ko가 "이불"인데 별칭엔 "솜이불"류만 있어
// 심어진 뒤로 한 번도 안 걸리고 있었다(몇 주 전 상처) — 이번에 이 상징을 여는 김에 넓힌다.

Object.assign(quilt.contexts, {
  "좋은 이불을 스스로 덮음": "이불을 덮었",
  "솜이불 꿈을 꿈": "즐겁고 편안한",
  "처녀가 솜이불 꿈을 꿈": "처녀가 살림 솜씨",
  "깨끗하지만 구멍 난 솜이불을 봄": "구멍 값어치",
  "더러운 솜이불을 봄": "더러운 조심성",
});
Object.assign(quilt.contexts_en, {
  "좋은 이불을 스스로 덮음": "covered yourself warm",
  "솜이불 꿈을 꿈": "pleasant comfortable circumstances",
  "처녀가 솜이불 꿈을 꿈": "practical business esteem",
  "깨끗하지만 구멍 난 솜이불을 봄": "holes appreciates worth",
  "더러운 솜이불을 봄": "soiled carelessness dress",
});

fs.writeFileSync(pQuilt, JSON.stringify(dQuilt, null, 2) + "\n");
console.log("patched quilt in km5.json");
