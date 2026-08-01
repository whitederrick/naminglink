// 유료 리포트 **둘 다**가 모든 문자 체계에서 실제로 글자가 찍히는지 확인한다.
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

import { runAffinity, runMatch, type Person } from "../src/lib/engines";
import { getDictionary, type Locale } from "../src/lib/i18n";
import { renderAffinityReport } from "../src/lib/pdf/affinity-report";
import { renderCompatibilityReport } from "../src/lib/pdf/compatibility-report";

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };

/**
 * 문자 체계가 서로 다른 로케일만 고른다. 23개를 다 돌릴 이유는 없다 — 같은 문자 체계는
 * 같은 서체를 타므로 하나만 확인하면 된다.
 *
 *   ko 한글 · ja 가나+한자 · zh 한자 · en 라틴 · ru 키릴 · tr 라틴 확장
 *   ar 아랍(RTL) · th 태국 · km 크메르 · hi 데바나가리
 *
 * ar·km은 `pdfLocale`이 영어로 돌리는 로케일이다. **여기서는 일부러 원래 로케일 그대로
 * 렌더한다** — 라이브러리가 고쳐졌는지 확인하는 자리가 여기이기 때문이다. 지금은 실패가
 * 정상이고, 실패가 사라지면 `PDF_FALLBACK_TO_EN`을 비울 때가 된 것이다.
 */
const LOCALES: Locale[] = ["ko", "ja", "zh", "en", "ru", "tr", "ar", "th", "km", "hi"];

/**
 * 이름은 이용자가 자기 문자로 적는다. **문서 언어가 영어로 바뀌어도 이름은 그대로다** —
 * ar·km 이용자는 `pdfLocale` 때문에 영어 리포트를 받지만 거기 찍히는 이름은 아랍 문자다.
 * 그 조합을 따로 확인한다(문서 전체가 아랍어일 때와 달리 한 줄이라 줄바꿈이 없다).
 */
const NAME_IN_SCRIPT: Partial<Record<Locale, string>> = {
  ko: "지현",
  ja: "さくら",
  zh: "小明",
  ru: "Анастасия",
  tr: "Ayşegül",
  ar: "عبد الرحمن",
  th: "สมชาย",
  km: "សុភា",
  hi: "अनन्या",
};

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

// 시계를 읽지 않는다 — 같은 입력이면 같은 산출물이라야 비교가 된다.
const GENERATED_AT = "2026-01-01T00:00:00.000Z";

type Case = {
  file: string;
  /** 지금은 실패가 정상인 자리(ar·km 문서). 성공하면 라이브러리가 고쳐진 것이다. */
  expectFailure?: boolean;
  render: () => Promise<Buffer | Uint8Array>;
};

function casesFor(locale: Locale): Case[] {
  const dictionary = getDictionary(locale);
  const nameA = NAME_IN_SCRIPT[locale] ?? "Alexandra";
  // ar·km 문서는 `pdfLocale`이 영어로 돌리는 자리다. 여기서는 일부러 원래 언어로 렌더해
  // **라이브러리가 아직도 죽는지** 확인한다. 지금은 실패가 정상이다.
  const expectFailure = locale === "ar" || locale === "km";
  return [
    {
      file: `gunghap-${locale}`,
      expectFailure,
      render: () =>
        renderCompatibilityReport({
          outcome: runMatch(personA, personB),
          nameA,
          nameB: "B",
          locale,
          dictionary,
          generatedAt: GENERATED_AT,
        }),
    },
    {
      file: `affinity-${locale}`,
      expectFailure,
      render: () =>
        renderAffinityReport({
          outcome: runAffinity({ ...personA, label: nameA }, "male"),
          name: nameA,
          locale,
          dictionary,
          generatedAt: GENERATED_AT,
        }),
    },
    // 문서는 영어인데 이름만 다른 문자 체계인 경우(ar·km 이용자가 실제로 받는 파일).
    ...(locale === "ar" || locale === "km"
      ? [
          {
            file: `gunghap-en-name-${locale}`,
            render: () =>
              renderCompatibilityReport({
                outcome: runMatch(personA, personB),
                nameA,
                nameB: "B",
                locale: "en" as Locale,
                dictionary: getDictionary("en"),
                generatedAt: GENERATED_AT,
              }),
          },
          {
            file: `affinity-en-name-${locale}`,
            render: () =>
              renderAffinityReport({
                outcome: runAffinity({ ...personA, label: nameA }, "male"),
                name: nameA,
                locale: "en" as Locale,
                dictionary: getDictionary("en"),
                generatedAt: GENERATED_AT,
              }),
          },
        ]
      : []),
  ];
}

async function main() {
  const outDir = path.join(process.cwd(), "tmp", "report-scripts");
  await mkdir(outDir, { recursive: true });

  let failures = 0;
  let fixed = 0;
  for (const locale of LOCALES) {
    for (const testCase of casesFor(locale)) {
      try {
        const buffer = await testCase.render();
        await writeFile(path.join(outDir, `${testCase.file}.pdf`), buffer);
        const size = String(Math.round(buffer.length / 1024)).padStart(4);
        if (testCase.expectFailure) {
          fixed += 1;
          console.log(`  ! ${testCase.file.padEnd(24)} ${size} KB — 죽던 자리가 살아났다`);
        } else {
          console.log(`  O ${testCase.file.padEnd(24)} ${size} KB`);
        }
      } catch (cause) {
        const reason = cause instanceof Error ? cause.message : cause;
        if (testCase.expectFailure) {
          console.log(`  - ${testCase.file.padEnd(24)} 실패(예상) — ${reason}`);
        } else {
          failures += 1;
          console.log(`  X ${testCase.file.padEnd(24)} 실패 — ${reason}`);
        }
      }
    }
  }

  console.log(`\n${outDir}에 만들었습니다 (예상 못 한 실패 ${failures}건).`);
  if (fixed > 0) {
    console.log(
      `아랍어·크메르어 문서 ${fixed}건이 이제 렌더된다. 라이브러리가 고쳐졌는지 확인하고,`,
    );
    console.log("맞다면 `pdfLocale`의 `PDF_FALLBACK_TO_EN`을 비울 때다(양쪽 앱).");
  }
  console.log("PNG로 렌더해 **눈으로** 확인하세요. 글리프 누락은 텍스트로 안 보입니다:");
  console.log(
    "  python -c \"import fitz,glob;[[fitz.open(f)[p].get_pixmap(dpi=95).save(f.replace('.pdf',f'-p{p+1}.png')) for p in range(fitz.open(f).page_count)] for f in glob.glob('tmp/report-scripts/*.pdf')]\"",
  );
  process.exitCode = failures === 0 ? 0 : 1;
}

void main();
