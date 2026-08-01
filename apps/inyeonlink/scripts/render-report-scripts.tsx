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
import { getDictionary, supportedLocales, type Locale } from "../src/lib/i18n";
import { renderAffinityReport } from "../src/lib/pdf/affinity-report";
import { renderCompatibilityReport } from "../src/lib/pdf/compatibility-report";

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };

/**
 * **23개를 전부 돌린다.**
 *
 * 처음에는 문자 체계가 다른 열 개만 골랐다 — 같은 체계는 같은 서체를 타니 하나면 된다는
 * 생각이었다. 글리프만 보면 맞는 말이지만 **지면은 다르다.** 같은 라틴이라도 독일어는
 * 단어가 길어 칸을 넘고, 베트남어는 성조 부호로 줄 높이가 달라진다. 문장 길이가 로케일마다
 * 다른 이상 레이아웃은 로케일마다 확인해야 한다(2026-08-01에 열 개→23개로 넓혔다).
 *
 * ar·km은 `pdfLocale`이 영어로 돌리는 로케일이다. **여기서는 일부러 원래 로케일 그대로
 * 렌더한다** — 라이브러리가 고쳐졌는지 확인하는 자리가 여기이기 때문이다. 지금은 실패가
 * 정상이고, 실패가 사라지면 `PDF_FALLBACK_TO_EN`을 비울 때가 된 것이다.
 */
const LOCALES: readonly Locale[] = supportedLocales;

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

/**
 * **입력 한 가지로는 부족하다.**
 *
 * 처음에는 사람 둘을 고정해 놓고 로케일만 돌렸다. 그러면 그 입력에서 나오는 지면만 보게 되는데,
 * 이 리포트의 분량은 입력에 따라 달라진다 — 시주를 모르면 표가 줄고, 이름이 24자면 머리글이
 * 두 줄이 되고, 같은 사주면 관계 문구가 달라진다. 케이스를 갈라 **로케일 × 케이스를 전부**
 * 돌린다(2026-08-01 사용자 지적).
 *
 * 케이스를 더할 때는 **지면 분량이 달라지는 축**을 고를 것. 값만 다르고 길이가 같은 입력은
 * 늘려 봐야 같은 지면을 다시 보는 것이다.
 */
type Case = {
  key: string;
  a: Person;
  b: Person;
  /** 이름 자리에 넣을 문자열. 로케일 문자로 채우려면 비워 둔다. */
  nameOverride?: string;
};

const CASES: Case[] = [
  { key: "base", a: personA, b: personB },
  // 시주를 모르는 입력. 시주 칸이 비고 관련 항목이 계산에서 빠진다.
  {
    key: "notime",
    a: { ...personA, birthHour: null, birthMinute: null },
    b: { ...personB, birthHour: null, birthMinute: null },
  },
  // 음력 입력. 변환 결과가 부록에 실린다.
  {
    key: "lunar",
    a: { ...personA, calendarType: "lunar" },
    b: { ...personB, calendarType: "lunar", lunarLeapMonth: false },
  },
  // 같은 날 태어난 두 사람. 관계 판정이 한쪽으로 몰려 문구 길이가 달라진다.
  { key: "sameday", a: personA, b: { ...personB, year: 1992, month: 3, day: 14 } },
  // 성별을 밝히지 않은 입력. 배우자성 항목이 빠진다.
  { key: "nogender", a: { ...personA, gender: null }, b: { ...personB, gender: null } },
  // 이름 상한(24자). 머리글과 표 제목이 가장 길어지는 경우다.
  {
    key: "longname",
    a: personA,
    b: personB,
    nameOverride: "가나다라마바사아자차카타파하가나다라마바사아자",
  },
];

// 시계를 읽지 않는다 — 같은 입력이면 같은 산출물이라야 비교가 된다.
const GENERATED_AT = "2026-01-01T00:00:00.000Z";

type RenderCase = {
  file: string;
  /** 지금은 실패가 정상인 자리(ar·km 문서). 성공하면 라이브러리가 고쳐진 것이다. */
  expectFailure?: boolean;
  render: () => Promise<Buffer | Uint8Array>;
};

function casesFor(locale: Locale, testCase: Case): RenderCase[] {
  const dictionary = getDictionary(locale);
  const nameA = testCase.nameOverride ?? NAME_IN_SCRIPT[locale] ?? "Alexandra";
  const suffix = `${testCase.key}-${locale}`;
  // ar·km 문서는 `pdfLocale`이 영어로 돌리는 자리다. 여기서는 일부러 원래 언어로 렌더해
  // **라이브러리가 아직도 죽는지** 확인한다. 지금은 실패가 정상이다.
  const expectFailure = locale === "ar" || locale === "km";
  return [
    {
      file: `gunghap-${suffix}`,
      expectFailure,
      render: () =>
        renderCompatibilityReport({
          outcome: runMatch(testCase.a, testCase.b),
          nameA,
          nameB: "B",
          locale,
          dictionary,
          generatedAt: GENERATED_AT,
        }),
    },
    {
      file: `affinity-${suffix}`,
      expectFailure,
      render: () =>
        renderAffinityReport({
          outcome: runAffinity({ ...testCase.a, label: nameA }, "male"),
          name: nameA,
          locale,
          dictionary,
          generatedAt: GENERATED_AT,
        }),
    },
    // 문서는 영어인데 이름만 다른 문자 체계인 경우(ar·km 이용자가 실제로 받는 파일).
    ...(expectFailure
      ? [
          {
            file: `gunghap-en-name-${suffix}`,
            render: () =>
              renderCompatibilityReport({
                outcome: runMatch(testCase.a, testCase.b),
                nameA,
                nameB: "B",
                locale: "en" as Locale,
                dictionary: getDictionary("en"),
                generatedAt: GENERATED_AT,
              }),
          },
          {
            file: `affinity-en-name-${suffix}`,
            render: () =>
              renderAffinityReport({
                outcome: runAffinity({ ...testCase.a, label: nameA }, "male"),
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
  let count = 0;
  for (const inputCase of CASES) {
    for (const locale of LOCALES) {
      for (const testCase of casesFor(locale, inputCase)) {
        count += 1;
        try {
          const buffer = await testCase.render();
          await writeFile(path.join(outDir, `${testCase.file}.pdf`), buffer);
          const size = String(Math.round(buffer.length / 1024)).padStart(4);
          if (testCase.expectFailure) {
            fixed += 1;
            console.log(`  ! ${testCase.file.padEnd(34)} ${size} KB — 죽던 자리가 살아났다`);
          } else if (process.env.VERBOSE) {
            console.log(`  O ${testCase.file.padEnd(34)} ${size} KB`);
          }
        } catch (cause) {
          const reason = cause instanceof Error ? cause.message : cause;
          if (testCase.expectFailure) {
            if (process.env.VERBOSE) {
              console.log(`  - ${testCase.file.padEnd(34)} 실패(예상) — ${reason}`);
            }
          } else {
            failures += 1;
            console.log(`  X ${testCase.file.padEnd(34)} 실패 — ${reason}`);
          }
        }
      }
    }
    console.log(`  · ${inputCase.key} 케이스 완료`);
  }

  console.log(
    `\n${outDir}에 ${count}개를 만들었습니다 (케이스 ${CASES.length} × 로케일 ${LOCALES.length}, 예상 못 한 실패 ${failures}건).`,
  );
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
