// 주공해몽(周公解夢) 원문 5차 배치 — 門戶井灶廚廁·宮室屋宇倉庫·刀劍旌節鐘鼓 갈래에서
// 아직 안 쓴 상징(우물·집·우산·칼)에 새 문맥을 더한다.
//
// 원문은 저작권 만료 고전(송대, 작자 미상) — zh.wikisource.org에서 실측 확인했다
// (apps/dreamslink/data-sources/zhougong-jiemeng-parsed.json, source: "tradition").
//
// 실행: node scripts/add-dream-zhougong-batch5-house.mjs
//
// 뒤따를 것 (같은 파일에 손대지 말고 별도로):
//   1. apps/dreamslink/src/lib/dream-contexts-ko.ts 에 새 CONTEXT_KO 항목 추가
//      (표에 없으면 화면 문구가 그대로 매칭 키가 돼 늘 이긴다 — "돼지"·"고양이" 전례)
//   2. apps/dreamslink/src/lib/dream-contexts.ts 에 영어 키워드를 손으로 추가
//      (build-dream-contexts.ts는 돌리지 말 것 — 이 파일은 손으로 관리된다.
//      CLAUDE.md §10 #49 참고)
//   3. verify-dream-context-parity.ts · verify-dream-match.ts · verify-guide-numbers.ts로 확인
//   4. 새 매칭 키가 같은 상징의 기존 문맥과 동점을 만들지 않는지 손으로 한 번 더 돌려 본다
//      (CLAUDE.md §10 #51 — "산 정상에 오름" 사고 참고)

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.resolve(
  "apps/dreamslink/src/lib/dream-symbols.data.json",
);
const raw = readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

function addMeaning(id, meaning, cultureNote) {
  const symbol = data.symbols.find((s) => s.id === id);
  if (!symbol) throw new Error(`상징 없음: ${id}`);
  if (symbol.meanings.some((m) => m.context === meaning.context)) {
    console.log(`이미 있음, 건너뜀: ${id} / ${meaning.context}`);
    return;
  }
  symbol.meanings.push(meaning);
  symbol.culture_note = cultureNote;
  console.log(`문맥 추가: ${id} / ${meaning.context}`);
}

// 우물 — 마름(흉) · 빠짐(흉). 기존 "맑은 물이 솟는 우물"(길)과 대비되는 두 방향.
// 「井枯涸者家財散」(우물이 마르면 집안 재물이 흩어진다), 「身墜井中疾病凶」(우물에
// 빠지면 질병으로 흉하다).
addMeaning(
  "well",
  {
    context: "우물이 마름",
    interpretation_ko: "집안 재물이 흩어질 조짐",
    interpretation_en: "a sign that household wealth will scatter",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「井枯涸者家財散」(우물이 마르면 집안 재물이 흩어진다)·「身墜井中疾病凶」(우물에 빠지면 질병으로 흉하다)을 근거로 삼았다.",
);
addMeaning(
  "well",
  {
    context: "우물에 빠짐",
    interpretation_ko: "질병을 조심할 조짐",
    interpretation_en: "a caution about illness",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「井枯涸者家財散」(우물이 마르면 집안 재물이 흩어진다)·「身墜井中疾病凶」(우물에 빠지면 질병으로 흉하다)을 근거로 삼았다.",
);

// 집 — 「屋宅無人主死亡」(집에 사람이 없으면 사망을 뜻한다). 불안을 키우지 않는 서술로
// "집안 우환"으로 완화했다(§의례 축의 서술 원칙과 같은 이유).
addMeaning(
  "house",
  {
    context: "집에 아무도 없음",
    interpretation_ko: "집안에 큰 우환이 생길 조짐",
    interpretation_en: "a sign of serious trouble in the household",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「屋宅無人主死亡」(집에 사람이 없으면 집안에 큰 우환이 생긴다)을 근거로 삼았다.",
);

// 우산 — 「與人分傘主分散」(우산을 나눠주면 헤어질 조짐이다). "남에게 나눠 줌=이별"
// 이라는 같은 통설이 "꽃"(4차 배치)에도 있었다 — 원문에서 두 번 확인되는 만큼 더 신뢰할 만하다.
addMeaning(
  "umbrella",
  {
    context: "우산을 남에게 나눠 줌",
    interpretation_ko: "이별할 조짐",
    interpretation_en: "a sign of parting",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「與人分傘主分散」(우산을 나눠주면 헤어질 조짐이다)을 근거로 삼았다.",
);

// 칼 — 「失落刀劍主破財」(칼을 잃어버리면 재물이 깨진다). 기존 "칼에 다침"(부상)과
// 구분되는, 물건을 잃는 쪽의 흉조다.
addMeaning(
  "knife",
  {
    context: "칼을 잃어버림",
    interpretation_ko: "재물이 흩어질 조짐",
    interpretation_en: "a sign that wealth will be lost",
    polarity: "negative",
    source: "tradition",
  },
  "중국 고전 《주공해몽》 「失落刀劍主破財」(칼을 잃어버리면 재물이 깨진다)를 근거로 삼았다.",
);

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
