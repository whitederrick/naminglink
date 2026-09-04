import fs from "node:fs";

// salt(소금) — 배치 235: 문맥 0개이던 자리에 밀러 「Salt」 둘을 채운다.
// 「여성이 소금을 먹음」은 기존 「소금을 먹음」(길)과 같은 그림(성별만
// 다름)·정반대 극성이라 뺐다(mb235.json skipped_sentences 참고).
const pSalt = "apps/dreamslink/data-sources/extract/km4.json";
const dSalt = JSON.parse(fs.readFileSync(pSalt, "utf8"));
const salt = dSalt.find((x) => x.id === "salt");
if (!salt) throw new Error("salt not found in km4.json");

Object.assign(salt.contexts, {
  "소금 꿈을 꿈": "매사가어긋 가족사이 불만",
  "고기에 소금을 침": "고기에 소금을침 빚과저당",
});
Object.assign(salt.contexts_en, {
  "소금 꿈을 꿈": "discordant surroundings awry",
  "고기에 소금을 침": "meat debts mortgages",
});

// 곁가지 — salt는 원래 의미가 하나(주공해몽 「소금을 먹음」)라 판별어가
// 없어도 됐다(§35 곁가지). 이제 셋이 됐으니 그 하나도 판별어가 있어야 한다.
salt.contexts["소금을 먹음"] = "먹었 길한";
salt.contexts_en["소금을 먹음"] = "auspicious sign";

fs.writeFileSync(pSalt, JSON.stringify(dSalt, null, 2) + "\n");
console.log("patched salt in km4.json");

// ointment(연고) — 배치 235: 밀러 별개 표제어 「Salve」 하나를 더한다.
const pOint = "apps/dreamslink/data-sources/extract/kmm144.json";
const dOint = JSON.parse(fs.readFileSync(pOint, "utf8"));
const ointment = dOint.find((x) => x.id === "ointment");
if (!ointment) throw new Error("ointment not found in kmm144.json");

Object.assign(ointment.contexts, {
  "역경 속에서도 번영할 연고 꿈을 꿈": "역경 번영하고 적을벗으로",
});
Object.assign(ointment.contexts_en, {
  "역경 속에서도 번영할 연고 꿈을 꿈": "adverse prosper enemies converted",
});

fs.writeFileSync(pOint, JSON.stringify(dOint, null, 2) + "\n");
console.log("patched ointment in kmm144.json");
