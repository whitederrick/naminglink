import fs from "node:fs";

// pork(돼지고기) — 배치 190: 「Pork」의 둘째 문장(그냥 봄)만 더한다. 첫 문장(먹음)은
// 기존 「돼지고기를 먹음」(주공해몽, 흉)과 같은 그림·같은 극성이라 건너뛴다(mb190 참고).
// m190.json이 r4.json보다 먼저 읽혀 이 문맥이 배열 맨 앞으로 온다 — "그냥 봄"이 "먹음"·
// "자름"보다 조건 없는 자리라 기본값이 되는 쪽이 맞다(FALLBACK_FIRST에서 그대로 받아들인다).
const pPork = "apps/dreamslink/data-sources/extract/km7.json";
const dPork = JSON.parse(fs.readFileSync(pPork, "utf8"));
const pork = dPork.find((x) => x.id === "pork");
if (!pork) throw new Error("pork not found in km7.json");

Object.assign(pork.contexts, {
  "돼지고기를 봄": "다툼에서 승리",
});
Object.assign(pork.contexts_en, {
  "돼지고기를 봄": "conflict victoriously",
});

fs.writeFileSync(pPork, JSON.stringify(dPork, null, 2) + "\n");
console.log("patched pork in km7.json");

// china(도자기) — 배치 190: 「Porcelain」 둘을 더한다. ⓪ grep이 kmm/km 파일만 봐서
// m15.json의 기존 china(도자기, 밀러 China)를 놓쳤다 — LABEL_KO 겹침 관문이 잡았다.
// 새 「도자기 꿈을 꿈」이 조건 없는 자리라 기본값으로 얼린다(FALLBACK_FIRST).
const pChina = "apps/dreamslink/data-sources/extract/kmm13.json";
const dChina = JSON.parse(fs.readFileSync(pChina, "utf8"));
const china = dChina.find((x) => x.id === "china");
if (!china) throw new Error("china not found in kmm13.json");

china.aliases_en.push("porcelain");
Object.assign(china.contexts, {
  "도자기를 칠하거나 매만짐": "칠하거나 매만",
  "도자기 꿈을 꿈": "좋은 기회",
  "깨지거나 얼룩진 도자기를 봄": "깨지거나 얼룩진",
});
Object.assign(china.contexts_en, {
  "도자기를 칠하거나 매만짐": "painting arranging matron",
  "도자기 꿈을 꿈": "favorable opportunities progressing",
  "깨지거나 얼룩진 도자기를 봄": "broken soiled offense",
});

fs.writeFileSync(pChina, JSON.stringify(dChina, null, 2) + "\n");
console.log("patched china in kmm13.json");
