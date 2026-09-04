import fs from "node:fs";

// rainbow(무지개) — 배치 208: 「Rainbow」 셋을 더한다. 주공해몽은 색깔(붉은/검은)로만
// 갈렸는데 밀러는 색깔 조건 없는 일반적인 무지개를 본다 — 조건 없는 쪽이 더 넓다.
const pRainbow = "apps/dreamslink/data-sources/extract/km1.json";
const dRainbow = JSON.parse(fs.readFileSync(pRainbow, "utf8"));
const rainbow = dRainbow.find((x) => x.id === "rainbow");
if (!rainbow) throw new Error("rainbow not found in km1.json");

Object.assign(rainbow.contexts, {
  "무지개를 봄": "예사롭지 풍년이",
  "연인들이 무지개를 봄": "연인들이 혼인에서",
  "푸른 나무 위로 낮게 걸린 무지개를 봄": "낮게 걸린 나무",
});
Object.assign(rainbow.contexts_en, {
  "무지개를 봄": "unusual happenings promising crops",
  "연인들이 무지개를 봄": "lovers omen union",
  "푸른 나무 위로 낮게 걸린 무지개를 봄": "hanging low green trees",
});

// 곁가지(옛 상처) — 「붉은 무지개를 봄」의 영어 판별어 "red"가 "appeared"·"disappeared"·
// "prepared" 같은 흔한 낱말의 부분 문자열이라 오탐 위험이 있었다. `contextScore`는
// 낱말 경계 없이 단순 부분 문자열로만 세므로("appea" + "red" = "appeared") 짧고 흔한
// 낱말은 위험하다(CLAUDE.md §30 곁가지 — 세 글자짜리가 가장 위험하다). 지금까지는 기본값이
// 우연히 이 문맥과 같아서 안 드러났는데, 이번에 기본값을 「무지개를 봄」으로 바꾸자
// `verify-dream-context-parity`가 "a vivid rainbow appeared"를 이 문맥으로 잘못 골라
// 잡아냈다. "red"를 빼고 "crimson"·"scarlet"만 남긴다.
rainbow.contexts_en["붉은 무지개를 봄"] = "crimson scarlet";

fs.writeFileSync(pRainbow, JSON.stringify(dRainbow, null, 2) + "\n");
console.log("patched rainbow in km1.json");
