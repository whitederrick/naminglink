// 궁합 리포트가 **모든 문자 체계에서 실제로 글자가 찍히는지** 확인한다.
//
// 실행: apps/inyeonlink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/render-report-scripts.tsx
//
// 왜 필요한가: 서체를 등록하지 않아도 PDF는 **오류 없이 만들어진다.** 숫자와 표 정렬도
// 멀쩡하다. 글리프만 빠질 뿐이라 텍스트 추출로는 절대 드러나지 않는다 — 실제로 아랍어·
// 태국어·크메르어·힌디어 리포트가 한동안 깨진 채로 만들어지고 있었다(2026-07-31).
//
// 그래서 이 스크립트는 **PNG까지 만든다.** 눈으로 보라는 뜻이다.
// 로케일을 더하거나 `lib/pdf/fonts.tsx`를 손대면 다시 돌릴 것.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { runMatch, type Person } from "../src/lib/engines";
import { getDictionary, type Locale } from "../src/lib/i18n";
import { renderCompatibilityReport } from "../src/lib/pdf/compatibility-report";

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };

/**
 * 문자 체계가 서로 다른 로케일만 고른다. 23개를 다 돌릴 이유는 없다 — 같은 문자 체계는
 * 같은 서체를 타므로 하나만 확인하면 된다.
 *
 *   ko 한글 · ja 가나+한자 · zh 한자 · en 라틴 · ru 키릴 · tr 라틴 확장
 *   ar 아랍(RTL) · th 태국 · km 크메르 · hi 데바나가리
 */
const LOCALES: Locale[] = ["ko", "ja", "zh", "en", "ru", "tr", "ar", "th", "km", "hi"];

const personA: Person = {
  label: "A",
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
  label: "B",
  gender: "male",
  calendarType: "solar",
  year: 1989,
  month: 11,
  day: 2,
  birthHour: 21,
  birthMinute: 5,
  birthplace: SEOUL,
};

async function main() {
  const outDir = path.join(process.cwd(), "tmp", "report-scripts");
  await mkdir(outDir, { recursive: true });
  const outcome = runMatch(personA, personB);

  for (const locale of LOCALES) {
    try {
    const buffer = await renderCompatibilityReport({
      outcome,
      nameA: "A",
      nameB: "B",
      locale,
      dictionary: getDictionary(locale),
      // 시계를 읽지 않는다 — 같은 입력이면 같은 산출물이라야 비교가 된다.
      generatedAt: "2026-01-01T00:00:00.000Z",
    });
    await writeFile(path.join(outDir, `${locale}.pdf`), buffer);
    console.log(`  ${locale.padEnd(3)} ${String(Math.round(buffer.length / 1024)).padStart(4)} KB`);
    } catch (cause) {
      console.log(`  ${locale.padEnd(3)} 실패 — ${cause instanceof Error ? cause.message : cause}`);
    }
  }

  console.log(`\n${LOCALES.length}개 로케일을 ${outDir}에 만들었습니다.`);
  console.log("PNG로 렌더해 **눈으로** 확인하세요. 글리프 누락은 텍스트로 안 보입니다:");
  console.log("  python -c \"import fitz,glob;[fitz.open(f)[4].get_pixmap(dpi=95).save(f.replace('.pdf','-p5.png')) for f in glob.glob('tmp/report-scripts/*.pdf')]\"");
}

void main();
