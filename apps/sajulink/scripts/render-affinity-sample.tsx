// 인연의 결 리포트 PDF 샘플을 만든다. 레이아웃을 눈으로 확인하기 위한 것이다.
//
// **텍스트 추출로 확인하지 말 것.** 글자가 다 들어 있어도 칸을 넘치거나 겹치거나 다음 장으로
// 밀리는 것은 텍스트로 안 보인다. 만든 PDF를 PNG로 렌더해서 봐야 한다
// (naminglink의 프리미엄 리포트에서 같은 실수를 한 적이 있다).
//
// 한국어·영어 둘 다 만든다. 한 프로세스에서 두 문서를 이어 렌더하므로 `warmUpLayoutEngine`이
// 제 몫을 하는지도 여기서 함께 드러난다 — 영문 문단이 단어 한가운데서 끊기면 예열이 깨진 것이다.
//
// 실행: apps/inyeonlink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/render-affinity-sample.tsx

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { runAffinity, type Person } from "../src/lib/engines";
import { getDictionary, type Locale } from "../src/lib/i18n";
import { renderAffinityReport } from "../src/lib/pdf/affinity-report";

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };

const me: Person = {
  label: "지현",
  gender: "female",
  calendarType: "solar",
  year: 1992,
  month: 3,
  day: 14,
  birthHour: 9,
  birthMinute: 20,
  birthplace: SEOUL,
};

// 기존 궁합 샘플과 같은 자리에 둔다. `apps/*/tmp/`는 .gitignore가 이미 막고 있다.
const outDir = path.join(process.cwd(), "tmp/pdfs");

async function render(locale: Locale) {
  const dictionary = getDictionary(locale);
  const outcome = runAffinity(me, "male");
  const buffer = await renderAffinityReport({
    outcome,
    name: me.label ?? dictionary.affinity.meLegend,
    locale,
    dictionary,
    // 고정 값을 쓴다 — 같은 입력이면 같은 파일이 나와야 비교가 된다.
    generatedAt: "2026-07-28T09:00:00.000Z",
  });

  const file = path.join(outDir, `affinity-sample-${locale}.pdf`);
  await writeFile(file, buffer);
  console.log(`${locale}  ${(buffer.length / 1024).toFixed(0)}KB  ${file}`);
}

// tsx가 이 스크립트를 CJS로 돌려 최상위 await를 쓸 수 없다(`verify-match.ts`가 __dirname을
// 쓰는 것과 같은 이유다). 함수로 감싼다.
async function main() {
  await mkdir(outDir, { recursive: true });
  // 한국어를 먼저 렌더한다. 예열이 없으면 이 순서에서 영문이 깨진다(그래서 이 순서로 둔다).
  await render("ko");
  await render("en");
}

void main();
