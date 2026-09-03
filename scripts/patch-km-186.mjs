import fs from "node:fs";

const pDagger = "apps/dreamslink/data-sources/extract/kmm24.json";
const dDagger = JSON.parse(fs.readFileSync(pDagger, "utf8"));
const dagger = dDagger.find((x) => x.id === "dagger");
if (!dagger) throw new Error("dagger not found in kmm24.json");

Object.assign(dagger.contexts, {
  "누가 단도로 저를 찌름": "누가 저를 찔렀",
  "제가 남을 단도로 공격함": "제가 남을 공격했",
});
Object.assign(dagger.contexts_en, {
  "누가 단도로 저를 찌름": "stabbing secret",
  "제가 남을 단도로 공격함": "attack suspect unfaithfulness",
});

fs.writeFileSync(pDagger, JSON.stringify(dDagger, null, 2) + "\n");
console.log("patched dagger in kmm24.json");

const pSword = "apps/dreamslink/data-sources/extract/km5.json";
const dSword = JSON.parse(fs.readFileSync(pSword, "utf8"));
const sword = dSword.find((x) => x.id === "sword");
if (!sword) throw new Error("sword not found in km5.json");

const beforeKo = sword.aliases.length;
sword.aliases = sword.aliases.filter((a) => a !== "단검");
if (sword.aliases.length === beforeKo) {
  throw new Error("expected to remove '단검' from sword aliases");
}
const beforeEn = sword.aliases_en.length;
sword.aliases_en = sword.aliases_en.filter((a) => a !== "dagger");
if (sword.aliases_en.length === beforeEn) {
  throw new Error("expected to remove 'dagger' from sword aliases_en");
}

fs.writeFileSync(pSword, JSON.stringify(dSword, null, 2) + "\n");
console.log("removed stale '단검'/'dagger' aliases from sword in km5.json (배치 186 — 전용 상징 dagger에 넘긴다)");
