import fs from "node:fs";

// religion(종교) — 배치 219: 밀러 「Revival」 둘을 더한다(각주 See Religion).
const pRel = "apps/dreamslink/data-sources/extract/kmm215.json";
const dRel = JSON.parse(fs.readFileSync(pRel, "utf8"));
const rel = dRel.find((x) => x.id === "religion");
if (!rel) throw new Error("religion not found in kmm215.json");

rel.aliases.push("부흥회", "부흥회에서");
Object.assign(rel.contexts, {
  "종교 부흥회에 참석함": "부흥회 가족간",
  "부흥회에서 적극적으로 참여함": "적극적으로 참여했다",
});
Object.assign(rel.contexts_en, {
  "종교 부흥회에 참석함": "revival family disturbances",
  "부흥회에서 적극적으로 참여함": "part displeasure contrary",
});

fs.writeFileSync(pRel, JSON.stringify(dRel, null, 2) + "\n");
console.log("patched religion in kmm215.json");

// gun(총) — 배치 219: 밀러 「Revolver」 하나를 더한다(각주 See Pistol, Firearms, etc.).
// 별칭 "권총"이 이미 있다.
const pGun = "apps/dreamslink/data-sources/extract/kmm42.json";
const dGun = JSON.parse(fs.readFileSync(pGun, "utf8"));
const gun = dGun.find((x) => x.id === "gun");
if (!gun) throw new Error("gun not found in kmm42.json");

Object.assign(gun.contexts, {
  "처녀에게 애인이 권총을 든 것을 봄": "애인이 심각한",
});
Object.assign(gun.contexts_en, {
  "처녀에게 애인이 권총을 든 것을 봄": "sweetheart disagreement separation",
});

fs.writeFileSync(pGun, JSON.stringify(dGun, null, 2) + "\n");
console.log("patched gun in kmm42.json");
