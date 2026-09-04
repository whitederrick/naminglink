import fs from "node:fs";

// advancement(전진) — 배치 226: 밀러 「Rising」 둘을 더한다(각주 없이 같은 주제).
const pAdv = "apps/dreamslink/data-sources/extract/kmm5.json";
const dAdv = JSON.parse(fs.readFileSync(pAdv, "utf8"));
const adv = dAdv.find((x) => x.id === "advancement");
if (!adv) throw new Error("advancement not found in kmm5.json");

// 곁가지(옛 상처) — 프로브가 찾았다. "승진"·"출세"는 명사인데 "~하다"로도 쓰여
// "승진했다"·"출세했다" 같은 문장에서 뒤의 "했"이 조사가 아니라 이름 자체가 안
// 걸리고 있었다(§29 곁가지 ①, 배치 109·116·117과 같은 자리). "떠올랐다"류는
// 기존 별칭에 아예 없어 새로 올린다.
adv.aliases.push("출세했다", "승진했다", "진급했다", "떠올랐다", "높이 떠오");
Object.assign(adv.contexts, {
  "공부하고 애써 출세함": "공부하고 지위로",
  "공중으로 높이 떠오름": "공중으로 떠올랐다",
});
Object.assign(adv.contexts_en, {
  "공부하고 애써 출세함": "positions study wealth",
  "공중으로 높이 떠오름": "air riches pleasures",
});

fs.writeFileSync(pAdv, JSON.stringify(dAdv, null, 2) + "\n");
console.log("patched advancement in kmm5.json");
