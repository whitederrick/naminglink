// 밀러(Miller, 1901) 《10,000 Dreams Interpreted》 1차 배치 — 지금까지 12차례 배치가
// 전부 주공해몽만 쓰고 밀러(퍼블릭 도메인, 상업 이용 가능)는 한 번도 안 열어봤다.
// 218개 상징을 밀러 표제어 2,257개와 대조해 72개가 완전히 안 쓰인 채 남아 있던 것 중
// 거미·반지·열쇠 셋에 원문 근거를 채운다.
//
// 원문: apps/dreamslink/data-sources/miller-1901-parsed.json
// (source: "Miller, Gustavus Hindman. 10,000 Dreams Interpreted. 1901.",
//  license: "Public domain... Commercially usable.")
//
// 실행: node scripts/add-dream-miller-batch1.mjs
//
// 뒤따를 것 (같은 파일에 손대지 말고 별도로):
//   1. apps/dreamslink/src/lib/dream-contexts-ko.ts 에 새 CONTEXT_KO 항목 추가
//   2. apps/dreamslink/src/lib/dream-contexts.ts 에 영어 키워드를 손으로 추가
//   3. verify-dream-context-parity.ts · verify-dream-match.ts · verify-guide-numbers.ts로 확인
//   4. 통과한 뒤에도 새 문맥 전부를 matchDream에 직접 태워 정답을 재확인한다

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

// 거미 — 밀러 "To kill one, signifies quarrels with your wife or sweetheart."
// 기존 "아침 거미"(길)·"거미줄에 얽힘"과는 다른, 거미를 죽이는 쪽이다.
addMeaning(
  "spider",
  {
    context: "거미를 죽임",
    interpretation_ko: "배우자나 연인과 다툼이 생길 조짐",
    interpretation_en: "a sign of quarrels with your spouse or partner",
    polarity: "negative",
    source: "tradition",
  },
  "밀러(Gustavus Hindman Miller) 《10,000 Dreams Interpreted》(1901) \"To kill one [a spider], signifies quarrels with your wife or sweetheart.\"(거미를 죽이면 배우자나 연인과 다툼이 생긴다)를 근거로 삼았다.",
);

// 반지 — 밀러 "To dream of wearing rings, denotes new enterprises in which you
// will be successful." 기존 "반지를 낌"의 근거를 보강한다(문맥 재사용, 새 의미 아님).
{
  const ring = data.symbols.find((s) => s.id === "ring");
  ring.culture_note =
    "밀러(Gustavus Hindman Miller) 《10,000 Dreams Interpreted》(1901) \"To dream of wearing rings, denotes new enterprises in which you will be successful.\"(반지를 끼는 꿈은 새로 시작하는 일이 성공할 조짐이다) \"A broken ring, foretells quarrels and unhappiness in the married state, and separation to lovers.\"(반지가 깨지면 부부간 다툼과 불행, 연인 사이의 이별을 예고한다)를 근거로 삼았다.";
  const wearing = ring.meanings.find((m) => m.context === "반지를 낌");
  wearing.source = "tradition";
  console.log("근거만 추가: ring / 반지를 낌 (밀러 근거로 source를 tradition으로 되돌림)");
}
addMeaning(
  "ring",
  {
    context: "반지가 깨짐",
    interpretation_ko: "다툼과 이별을 조심할 조짐",
    interpretation_en: "a caution about quarrels or separation",
    polarity: "negative",
    source: "tradition",
  },
  "밀러(Gustavus Hindman Miller) 《10,000 Dreams Interpreted》(1901) \"To dream of wearing rings, denotes new enterprises in which you will be successful.\" \"A broken ring, foretells quarrels and unhappiness in the married state, and separation to lovers.\"(반지가 깨지면 부부간 다툼과 불행, 연인 사이의 이별을 예고한다)를 근거로 삼았다.",
);

// 열쇠 — 밀러 "To find keys, brings domestic peace and brisk turns to business."
// 기존 "열쇠를 얻음"의 근거를 보강하고, 반대로 잃어버리는 쪽을 새 문맥으로 더한다.
addMeaning(
  "key",
  {
    context: "열쇠를 잃어버림",
    interpretation_ko: "곤란한 일을 겪을 조짐",
    interpretation_en: "a sign of running into an unpleasant situation",
    polarity: "negative",
    source: "tradition",
  },
  "밀러(Gustavus Hindman Miller) 《10,000 Dreams Interpreted》(1901) \"To find keys, brings domestic peace and brisk turns to business.\"(열쇠를 찾으면 집안이 평안하고 사업이 활기를 띤다) \"If the keys are lost, unpleasant adventures will affect you.\"(열쇠를 잃어버리면 곤란한 일을 겪는다)를 근거로 삼았다.",
);
{
  const key = data.symbols.find((s) => s.id === "key");
  const found = key.meanings.find((m) => m.context === "열쇠를 얻음");
  found.source = "tradition";
  console.log("근거만 추가: key / 열쇠를 얻음 (밀러 근거로 source를 tradition으로 되돌림)");
}

const previousVersion = data.dictVer;
const [major, minor] = previousVersion.split(".").map(Number);
data.dictVer = `${major}.${minor + 1}.0`;

const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
