import fs from "node:fs";

// saw(톱) — 배치 237: 문맥 0개이던 자리에 밀러 「Saw」 여덟을 채운다.
const pSaw = "apps/dreamslink/data-sources/extract/km5.json";
const dSaw = JSON.parse(fs.readFileSync(pSaw, "utf8"));
const saw = dSaw.find((x) => x.id === "saw");
if (!saw) throw new Error("saw not found in km5.json");

// 곁가지 — saw는 원래 의미가 하나(주공해몽 「톱을 봄」)라 판별어가
// 없어도 됐다(§35 곁가지). 이제 아홉이 됐으니 그 하나도 판별어가 있어야 한다.
saw.contexts["톱을 봄"] = "끊고결단할";
saw.contexts_en["톱을 봄"] = "cut off decided";

// 곁가지 — "hand-saw"를 처음엔 "손톱을 사용함"으로 옮겼다가, "손톱"이
// 톱이 아니라 손톱(손가락 끝)을 가리키는 낱말이라는 것을 프로브가 잡았다
// (전혀 안 걸렸다). "톱을 손으로 사용함"으로 고쳤다.
saw.aliases.push("톱들");
Object.assign(saw.contexts, {
  "톱을 손으로 사용함": "손으로 활기차고 명랑한",
  "기계 속 큰 톱들을 봄": "기계 큰사업 지휘하고",
  "여성이 기계 속 큰 톱들을 봄": "여성이 존경받고 조언",
  "녹슬거나 부러진 톱을 봄": "녹슬거나 부러진 실패와사고",
  "톱을 잃어버림": "잃어버 재앙으로 휘말릴",
  "톱질 소리를 들음": "톱질 소리를들 검약과번영",
  "녹슨 톱을 찾음": "찾는 찾았 재산을되찾",
  "등에 톱을 짐": "등에 짊어질 크지만수익성",
});
Object.assign(saw.contexts_en, {
  "톱을 손으로 사용함": "energetic busy cheerful",
  "기계 속 큰 톱들을 봄": "machinery enterprise superintend",
  "여성이 기계 속 큰 톱들을 봄": "woman esteemed counsels",
  "녹슬거나 부러진 톱을 봄": "rusty broken failure accidents",
  "톱을 잃어버림": "lose disaster culminate",
  "톱질 소리를 들음": "buzz thrift prosperity",
  "녹슨 톱을 찾음": "find restore fortune",
  "등에 톱을 짐": "carry back responsibilities",
});

fs.writeFileSync(pSaw, JSON.stringify(dSaw, null, 2) + "\n");
console.log("patched saw in km5.json");

// gallows(교수대) — 배치 237: 밀러 별개 표제어 「Scaffold」 셋을 더한다.
const pGallows = "apps/dreamslink/data-sources/extract/kmm38.json";
const dGallows = JSON.parse(fs.readFileSync(pGallows, "utf8"));
const gallows = dGallows.find((x) => x.id === "gallows");
if (!gallows) throw new Error("gallows not found in kmm38.json");

// "처형대"는 기존 별칭에 없어서 프로브가 안 걸리는 것을 잡았다.
gallows.aliases.push("처형대");
Object.assign(gallows.contexts, {
  "처형대 꿈을 꿈": "바라던애정 크게실망",
  "처형대에 오름": "오해받 비난받 저지르지않은",
  "처형대에서 내려감": "내려갔 잘못을저질 벌을받게",
});
Object.assign(gallows.contexts_en, {
  "처형대 꿈을 꿈": "keen disappointment affection",
  "처형대에 오름": "misunderstood censured undeserved",
  "처형대에서 내려감": "guilty wrongdoing penalty",
});

fs.writeFileSync(pGallows, JSON.stringify(dGallows, null, 2) + "\n");
console.log("patched gallows in kmm38.json");

// 곁가지 — 파일명 사전식 정렬은 숫자 크기와 다르다. "m237.json"이 "m38.json"보다
// **앞선다**("2" < "3"이라 두 자리·세 자리가 섞이면 자릿수가 아니라 글자로 갈린다).
// 그래서 새로 넣은 "처형대에 오름"의 판별어에 "올랐"을 넣었더니, 옛(m38) "제가
// 교수대에 오름"의 "내가/제가"와 동점이 났을 때 **새 것이 이겼다** — 새것이
// 옛것보다 늦게 처리될 거라는 가정이 틀렸다. 겹치는 낱말을 아예 없애 풀었다.
// → m2xx류 새 배치가 m1~m9 한두 자리 옛 배치와 동점이 나면 순서를 가정하지
//   말고 실제로 어느 쪽이 이기는지 프로브로 확인할 것.
