// 기존 215개 상징의 모든 meaning에 source: "tradition"을 명시적으로 채운다.
//
// 왜 명시적으로 적는가 — `DreamMeaning.source`가 없으면 코드가 "tradition"으로 취급하지만,
// 그 묵시적 기본값에 기대면 나중에 실수로 데이터를 편집하다 값을 빠뜨려도 아무도 못 알아챈다.
// 이 필드는 콘텐츠 출처 표시(전통 vs 일반)라 조용히 틀리면 안 되는 자리다.
//
// 실행: node scripts/backfill-dream-meaning-source.mjs

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

const filePath = path.resolve(
  "apps/dreamslink/src/lib/dream-symbols.data.json",
);
const raw = readFileSync(filePath, "utf8");
const data = JSON.parse(raw);

let touched = 0;
for (const symbol of data.symbols) {
  for (const meaning of symbol.meanings) {
    if (meaning.source === undefined) {
      meaning.source = "tradition";
      touched++;
    }
  }
}

const previousVersion = data.dictVer;
data.dictVer = "1.4.0";

// 원본이 CRLF다(§7). LF로 쓰면 git diff가 전체 파일을 바뀐 것으로 본다.
const body = `${JSON.stringify(data, null, 2)}\n`.replace(/\n/g, "\r\n");
writeFileSync(filePath, body, "utf8");

console.log(`meanings backfilled: ${touched}`);
console.log(`dictVer: ${previousVersion} -> ${data.dictVer}`);
