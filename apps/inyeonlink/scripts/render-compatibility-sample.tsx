// 궁합 리포트 PDF 샘플을 만든다. 레이아웃을 눈으로 확인하기 위한 것이다.
//
// **텍스트 추출로 확인하지 말 것.** 글자가 다 들어 있어도 칸을 넘치거나 겹치거나 다음 장으로
// 밀리는 것은 텍스트로 안 보인다. 만든 PDF를 PNG로 렌더해서 봐야 한다
// (naminglink의 프리미엄 리포트에서 같은 실수를 한 적이 있다).
//
// 실행: apps/inyeonlink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/render-compatibility-sample.tsx

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { runMatch, type Person } from "../src/lib/engines";
import { getDictionary, type Locale } from "../src/lib/i18n";
import { renderCompatibilityReport } from "../src/lib/pdf/compatibility-report";

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };

const personA: Person = {
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

const personB: Person = {
  label: "民俊",
  gender: "male",
  calendarType: "solar",
  year: 1990,
  month: 11,
  day: 2,
  birthHour: 22,
  birthMinute: 5,
  birthplace: SEOUL,
};

// 출생 시각을 모르는 경우도 한 벌 만든다 — 시주 칸이 "시각 미입력"으로 바뀌고 안내 문구가
// 한 줄 더 붙는다. 그 상태에서 레이아웃이 밀리지 않는지 봐야 한다.
const personNoTime: Person = { ...personB, birthHour: null, birthMinute: null };

async function render(
  locale: Locale,
  a: Person,
  b: Person,
  suffix: string,
) {
  const outcome = runMatch(a, b);
  const dictionary = getDictionary(locale);
  const buffer = await renderCompatibilityReport({
    outcome,
    nameA: a.label ?? dictionary.form.personA,
    nameB: b.label ?? dictionary.form.personB,
    locale,
    dictionary,
    generatedAt: "2026-07-27T00:00:00.000Z",
  });

  const outDir = path.join(process.cwd(), "tmp/pdfs");
  await mkdir(outDir, { recursive: true });
  const file = path.join(outDir, `compatibility-${locale}${suffix}.pdf`);
  await writeFile(file, buffer);
  console.log(
    `  ${file}  (${(buffer.length / 1024).toFixed(0)} KB, 매칭률 ${outcome.totalScore}%, ${outcome.precision})`,
  );
}

// tsx(esbuild)가 cjs로 변환하므로 최상위 await은 못 쓴다. main으로 감싼다.
main();

async function main() {
  const started = process.hrtime.bigint();
  await render("ko", personA, personB, "");
  await render("en", personA, personB, "");
  await render("ko", personA, personNoTime, "-no-time");
  const elapsedMs = Number(process.hrtime.bigint() - started) / 1_000_000;
  console.log(`\n총 ${elapsedMs.toFixed(0)}ms`);
}
