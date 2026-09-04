import fs from "node:fs";

// river(강) — 배치 227: 밀러 「River」 다섯을 더한다. 기존 네 문맥(주공해몽)과
// 겹치지 않는다. "넘쳐"는 이미 「강과 바다가 넘쳐 불어남」이 쥐고 있어 새 문맥에서는 피한다.
const pRiver = "apps/dreamslink/data-sources/extract/km1.json";
const dRiver = JSON.parse(fs.readFileSync(pRiver, "utf8"));
const river = dRiver.find((x) => x.id === "river");
if (!river) throw new Error("river not found in km1.json");

Object.assign(river.contexts, {
  "맑고 잔잔하게 흐르는 강을 봄": "맑고 잔잔",
  "강물이 흐리고 거칢": "흐리고 거칠",
  "강물이 넘쳐 발이 묶임": "발이 묶여",
  "맑은 강을 항해하다 바닥에 시신을 봄": "항해하다 시신을",
  "메마른 강을 봄": "메마른 불운",
});
Object.assign(river.contexts_en, {
  "맑고 잔잔하게 흐르는 강을 봄": "clear smooth pleasures",
  "강물이 흐리고 거칢": "muddy tumultuous jealous",
  "강물이 넘쳐 발이 묶임": "bound embarrassments escapade",
  "맑은 강을 항해하다 바닥에 시신을 봄": "sailing corpses gloom",
  "메마른 강을 봄": "empty sickness unusual",
});

fs.writeFileSync(pRiver, JSON.stringify(dRiver, null, 2) + "\n");
console.log("patched river in km1.json");
