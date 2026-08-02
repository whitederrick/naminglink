// 공식 인명용 한자 자료를 **무엇을 기준으로 세는지** 확인한다.
//
// 안내 문서는 `getGuideCounts()`의 `hanjaTotal`을 "표 전체 N자"로 적고 있는데, 그 값은
// `official_hanja_entries`의 **행 수**다. 한 글자가 여러 독음으로 등록되면 행이 늘어나므로
// 글자 수와 다르다. 숫자를 안내 문서에 적어 두고 파는 서비스라 어느 쪽인지 분명히 해 둔다.
//
// 실행: apps/naminglink 에서  node scripts/count-official-hanja.mjs
import { readFileSync } from "node:fs";
import path from "node:path";

for (const line of readFileSync(path.join(process.cwd(), ".env.local"), "utf8").split(/\r?\n/)) {
  const index = line.indexOf("=");
  if (index < 0) continue;
  const key = line.slice(0, index).trim();
  const value = line.slice(index + 1).trim().replace(/^"|"$/g, "");
  if (key && !(key in process.env)) process.env[key] = value;
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !key) throw new Error("Supabase 환경변수가 없습니다.");

const headers = { apikey: key, authorization: `Bearer ${key}` };
const PAGE = 1000;

async function scan(status) {
  const hanja = new Set();
  const syllables = new Set();
  let rows = 0;
  for (let from = 0; ; from += PAGE) {
    const response = await fetch(
      `${url}/rest/v1/official_hanja_entries?select=hanja,hangul_syllable&review_status=eq.${status}&offset=${from}&limit=${PAGE}`,
      { headers },
    );
    if (!response.ok) throw new Error(`HTTP ${response.status} ${await response.text()}`);
    const page = await response.json();
    for (const row of page) {
      rows += 1;
      hanja.add(row.hanja);
      syllables.add(row.hangul_syllable);
    }
    if (page.length < PAGE) break;
  }
  return { rows, hanja: hanja.size, syllables: syllables.size };
}

for (const status of ["production", "reviewed"]) {
  const result = await scan(status);
  console.log(
    `${status.padEnd(11)} 행 ${String(result.rows).padStart(6)}   고유 한자 ${String(result.hanja).padStart(6)}   음절 ${result.syllables}`,
  );
}
