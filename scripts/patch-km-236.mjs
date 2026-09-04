import fs from "node:fs";

// belt(허리띠) — 배치 236: 밀러 「Sash」 둘을 더한다. 영어 별칭에 이미
// "sash"가 있던 자리다(밀러 Girdle 표제어에서 옴).
const pBelt = "apps/dreamslink/data-sources/extract/km9.json";
const dBelt = JSON.parse(fs.readFileSync(pBelt, "utf8"));
const belt = dBelt.find((x) => x.id === "belt");
if (!belt) throw new Error("belt not found in km9.json");

belt.aliases.push("장식띠");
Object.assign(belt.contexts, {
  "장식띠를 두름": "장식 바람기 애정을붙잡",
  "여성이 장식띠를 삼": "샀다 성실하고 존경",
});
// 곁가지 — "장식"이 두 문맥 모두에서 걸려("장식띠"가 별칭이라 자동 포함)
// 동점이 난다. 좁은 쪽("여성이 장식띠를 삼")을 m236.json에서 앞에 둬
// 순서로 풀었다(§25 곁가지 3 · 229의 chicken · 234의 mariner와 같은 자리).
Object.assign(belt.contexts_en, {
  "장식띠를 두름": "flirtatious retain affections",
  "여성이 장식띠를 삼": "buy faithful esteem",
});

// 곁가지 — 프로브 지킴 케이스가 옛 상처를 찾았다. "허리띠를 맴"의 판별어
// "매었/매고"는 축약형 "맸다"를 못 잡는다 — 심어진 뒤로 한 번도 안 걸리고
// 있었다.
belt.contexts["허리띠를 맴"] += " 맸다";

fs.writeFileSync(pBelt, JSON.stringify(dBelt, null, 2) + "\n");
console.log("patched belt in km9.json");

// devil(악마) — 배치 236: 밀러 「Satan」 일곱을 더한다. 원문 각주 [197]
// 'See Devil' 그대로.
const pDevil = "apps/dreamslink/data-sources/extract/kmm25.json";
const dDevil = JSON.parse(fs.readFileSync(pDevil, "utf8"));
const devil = dDevil.find((x) => x.id === "devil");
if (!devil) throw new Error("devil not found in kmm25.json");

Object.assign(devil.contexts, {
  "악마 꿈을 꿈": "위험한모험 술수를써 명예로운",
  "악마를 죽임": "죽임 죽였 사악하거나",
  "악마가 문학의 모습으로 옴": "문학 아첨꾼 닥치는대로",
  "악마가 부나 권력의 모습으로 옴": "부나 권력 화합이나",
  "악마가 음악의 모습으로 옴": "음악 술수에넘어가 무너질",
  "악마가 아름다운 여인의 모습으로 옴": "아름다운 여인 애무",
  "악마로부터 자신을 지키려 함": "지키려 이기적인쾌락 굴레를벗어",
});
Object.assign(devil.contexts_en, {
  "악마 꿈을 꿈": "dangerous adventures strategy",
  "악마를 죽임": "kill desert companions",
  "악마가 문학의 모습으로 옴": "literature flatterers promiscuous",
  "악마가 부나 권력의 모습으로 옴": "wealth power influence",
  "악마가 음악의 모습으로 옴": "music wiles succumb",
  "악마가 아름다운 여인의 모습으로 옴": "fair woman caresses crush",
  "악마로부터 자신을 지키려 함": "shield selfish bondage",
});

fs.writeFileSync(pDevil, JSON.stringify(dDevil, null, 2) + "\n");
console.log("patched devil in kmm25.json");
