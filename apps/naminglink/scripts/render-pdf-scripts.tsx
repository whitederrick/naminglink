// 판매용 PDF **넷 모두**가 여러 문자 체계에서 실제로 만들어지는지 확인한다.
//
// 실행: apps/naminglink 에서
//   npx tsx --tsconfig scripts/tsconfig.sweep.json scripts/render-pdf-scripts.tsx
//
// 이 스크립트가 보는 것은 **레이아웃과 렌더 성공 여부**다. 글리프 누락은 여기서 안 보이므로
// `scripts/verify-pdf-glyphs.ts`가 따로 전수 대조한다. 둘은 서로를 대신하지 못한다.
//
//   verify-pdf-glyphs   글자가 찍히는가          (23로케일 전수, 렌더 없음)
//   render-pdf-scripts  넘치거나 겹치지 않는가   (표본 렌더 → PNG로 눈으로)
//
// AI를 부르지 않는다. 해설 문구는 그 언어의 **문단 표본**을 고정값으로 심는다 — 실제 주문에서
// 모델이 그 언어로 써 주는 자리이고, 확인하려는 것은 문장의 내용이 아니라 그 문자 체계가
// 지면에서 버티는가이기 때문이다. **문단은 반드시 여러 줄이 되게 길어야 한다** — 아랍어는
// 줄바꿈이 일어나는 순간에만 렌더가 죽는다.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import type { GlobalNameReportData } from "@/lib/global-name-premium";
import { getLandingCopy } from "@/lib/i18n";
import { getServiceOverride } from "@/lib/i18n-service";
import { localeCodes } from "@/lib/locale-codes";
import type { Locale } from "@/lib/services";
import type { HangulArtReportData } from "@/lib/hangul-art-premium";
import type { NameArtPackReportData } from "@/lib/name-art-pack";
import { renderGlobalNameReportPdf } from "@/lib/pdf/global-name-report";
import { renderHangulArtPdf } from "@/lib/pdf/hangul-art-report";
import { renderNameArtPackPdf } from "@/lib/pdf/name-art-pack-report";
import {
  renderPremiumHanjaReport,
  type PremiumHanjaReportData,
} from "@/lib/pdf/premium-hanja-report";
import type { ReportFontSnapshot } from "@/lib/report-fonts-registry";
import { calculatePremiumSaju } from "@naminglink/core/saju";

/**
 * 이용자가 자기 문자로 적는 원문 이름. 문자 체계마다 하나씩 둔다.
 * 로케일에 없으면 라틴 이름을 쓴다 — 이름 자리의 관심사는 문자 체계뿐이다.
 */
const NAME_IN_SCRIPT: Record<string, string> = {
  ko: "김하늘",
  ja: "さくら",
  zh: "小明",
  ru: "Анастасия",
  mn: "Оюунчимэг",
  kk: "Айгүл",
  tr: "Ayşegül",
  vi: "Nguyễn Thị Hà",
  th: "สมชาย",
  hi: "अनन्या",
  ar: "عبد الرحمن",
  km: "សុភា",
};

/**
 * 해설 문단은 **그 언어의 화면 문구를 이어 붙여** 만든다.
 *
 * 실제 PDF의 해설은 주문 시점에 모델이 그 언어로 써 준다. 미리 알 수 없으니 같은 언어의
 * 진짜 문장으로 대신한다 — 확인하려는 것은 내용이 아니라 **그 언어가 지면에서 버티는가**다.
 * 손으로 쓴 표본을 열 개만 두었을 때는 나머지 열세 개를 아예 못 봤다(2026-08-01에 넓혔다).
 *
 * **문단은 반드시 여러 줄이 되게 길어야 한다.** 아랍어는 줄바꿈이 일어나는 순간에만 죽고,
 * 넘침·겹침도 짧은 문장에서는 드러나지 않는다.
 */
function paragraphFor(locale: Locale) {
  const pool: string[] = [];
  collectStrings(getLandingCopy(locale), pool);
  collectStrings(getServiceOverride(locale), pool);
  const sentences = pool
    .map((value) => value.replace(/\*\*/g, "").trim())
    .filter((value) => value.length >= 20);
  let paragraph = "";
  for (const sentence of sentences) {
    if (paragraph.length >= 320) break;
    paragraph += (paragraph ? " " : "") + sentence;
  }
  // 화면 문구가 짧은 로케일을 위한 최소 길이 보정. 같은 문장을 이어 붙인다.
  while (paragraph.length < 240 && paragraph.length > 0) paragraph += ` ${paragraph}`;
  return paragraph.slice(0, 400);
}

function collectStrings(value: unknown, out: string[]) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) for (const item of value) collectStrings(item, out);
  else if (value && typeof value === "object") {
    for (const item of Object.values(value)) collectStrings(item, out);
  }
}

/**
 * **23개를 전부 돌린다.**
 *
 * **ar·km은 실제로는 이 언어로 나가지 않는다** — `lib/pdf/pdf-language.ts`가 영어로 돌린다.
 * 여기서 굳이 원래 언어로 렌더하는 것은 라이브러리가 고쳐졌는지 확인하는 자리이기 때문이다.
 * 지금 기대값은 **km은 실패, ar은 성공하지만 지면이 뒤엉킴**이다. ar은 오류를 내지 않으므로
 * 이 스크립트가 판정하지 못한다 — 반드시 PNG로 볼 것.
 */
const SAMPLES: Array<{ locale: string; name: string; paragraph: string }> = (
  localeCodes as readonly Locale[]
).map((locale) => ({
  locale,
  name: NAME_IN_SCRIPT[locale] ?? "Emily Carter",
  paragraph: paragraphFor(locale),
}));

const FONT: ReportFontSnapshot = {
  code: "nanum-brush",
  name_ko: "나눔손글씨 붓",
  name_en: "Nanum Brush Script",
  copyright_holder: "NAVER Corp.",
  license_type: "OFL 1.1",
  source_url: "https://hangeul.naver.com/font",
};

const GENERATED_AT = "2026-01-01T00:00:00.000Z";

function globalNameData(sample: (typeof SAMPLES)[number]): GlobalNameReportData {
  return {
    reportId: "NL-SCRIPTS-01",
    generatedAt: GENERATED_AT,
    outputLanguage: sample.locale,
    original: { name: sample.name, country: "us" },
    analysisSummary: sample.paragraph,
    fonts: [FONT],
    candidates: [
      {
        name: { hangul: "김하늘", romanized: "Kim Ha-neul" },
        sections: {
          meaningBreakdown: [
            { syllable: "하", meaning: sample.paragraph.slice(0, 40) },
            { syllable: "늘", meaning: sample.paragraph.slice(0, 40) },
          ],
          whyThisName: sample.paragraph,
          soundConnection: sample.paragraph,
          pronunciationTips: sample.paragraph,
          culturalNotes: sample.paragraph,
          usageGuide: sample.paragraph,
        },
      },
    ],
    saju: {
      engineName: "naminglink-saju",
      engineVersion: "v3",
      birthLabel: "1995-08-17",
      dayMaster: "甲木",
      counts: [
        { element: "WOOD", label: "Wood 목", count: 2 },
        { element: "FIRE", label: "Fire 화", count: 1 },
        { element: "EARTH", label: "Earth 토", count: 3 },
        { element: "METAL", label: "Metal 금", count: 1 },
        { element: "WATER", label: "Water 수", count: 1 },
      ],
      dominant: "Earth 토",
      weakest: "Metal 금",
      overview: sample.paragraph,
      nameAlignment: sample.paragraph,
    },
  };
}

function hangulArtData(sample: (typeof SAMPLES)[number]): HangulArtReportData {
  return {
    reportId: "NL-SCRIPTS-02",
    generatedAt: GENERATED_AT,
    outputLanguage: sample.locale,
    original: { name: sample.name, language: sample.locale },
    fonts: [FONT],
    candidates: [
      {
        name: { hangul: "에밀리", romanized: "Emily" },
        pronunciation: {
          basis: sample.paragraph,
          syllables: "에·밀·리",
          ipa: "/e.mil.li/",
          reason: sample.paragraph,
          culturalFit: sample.paragraph,
          usageNote: sample.paragraph,
          cautionNotes: sample.paragraph,
        },
      },
    ],
  };
}

function nameArtPackData(sample: (typeof SAMPLES)[number]): NameArtPackReportData {
  return {
    reportId: "NL-SCRIPTS-03",
    generatedAt: GENERATED_AT,
    outputLanguage: sample.locale,
    original: { name: sample.name },
    name: { hangul: "김하늘", romanized: "Kim Ha-neul" },
    fonts: [FONT],
  };
}

// 프리미엄 한자 리포트는 **한국어 전용 흐름**이라 로케일이 없다. 표본 하나만 렌더한다.
const premiumHanja: PremiumHanjaReportData = {
  reportId: "NL-SCRIPTS-04",
  generatedAt: GENERATED_AT,
  expiresAt: "2026-01-02T00:00:00.000Z",
  childNameHangul: "안덕규",
  parentWishes: "밝은 지혜와 바른 마음으로 자기 길을 걸어가는 사람",
  excludedMeanings: "병약함이나 지나치게 강압적인 인상",
  saju: calculatePremiumSaju({
    calendarType: "solar",
    year: 2024,
    month: 2,
    day: 10,
    birthHour: 12,
    birthMinute: 30,
    longitude: 126.978,
    birthplaceLabel: "서울",
    timeZone: "Asia/Seoul",
  }),
  primaryCandidate: {
    displayName: "안덕규",
    hanjaName: "安德奎",
    focusLabel: "종합 의미 우선안",
    summary:
      "평안함을 바탕으로 덕을 쌓고, 별처럼 자기 자리에서 빛나는 사람이라는 의미를 담은 조합입니다.",
    characters: [
      {
        hangul: "덕",
        hanja: "德",
        meaning: "큰 덕, 바른 품성과 배려",
        elementLabel: "화",
        officialReadingConfirmed: true,
      },
      {
        hangul: "규",
        hanja: "奎",
        meaning: "별 이름, 빛나는 문장과 재능",
        elementLabel: "토",
        officialReadingConfirmed: true,
      },
    ],
    story:
      "德은 사람 사이에서 신뢰를 쌓는 바른 마음을, 奎는 밤하늘에서 방향을 밝히는 별의 이미지를 전합니다. 두 글자를 함께 쓰면 타인을 존중하는 품성을 바탕으로 자기 재능을 온전히 펼치는 사람이라는 이야기가 만들어집니다.",
    practicalUse:
      "각 글자의 뜻이 독립적으로 분명하고 결합 방향도 자연스러워, 학교와 사회생활 및 공식 문서에서 이름의 의미를 간결하게 설명하기 좋습니다.",
    officialSourceLabel:
      "후보 글자와 지정 음가는 서비스에 등록된 공식 인명용 한자 자료의 production 검수본을 기준으로 확인했습니다.",
  },
};

async function main() {
  const outDir = path.join(process.cwd(), "tmp", "pdf-scripts");
  await mkdir(outDir, { recursive: true });

  const cases: Array<{ file: string; render: () => Promise<Buffer | Uint8Array> }> = [];
  for (const sample of SAMPLES) {
    cases.push({
      file: `global-name-${sample.locale}`,
      render: () => renderGlobalNameReportPdf(globalNameData(sample)),
    });
    cases.push({
      file: `hangul-art-${sample.locale}`,
      render: () => renderHangulArtPdf(hangulArtData(sample)),
    });
    cases.push({
      file: `name-art-pack-${sample.locale}`,
      render: () => renderNameArtPackPdf(nameArtPackData(sample)),
    });
  }
  cases.push({
    file: "premium-hanja-ko",
    render: () => renderPremiumHanjaReport(premiumHanja),
  });

  let failures = 0;
  for (const testCase of cases) {
    // 실제로는 영어로 나가는 로케일. 실패해도 판매에 영향이 없다(위 주석 참고).
    const expectFailure = /-(ar|km)$/.test(testCase.file);
    try {
      const buffer = await testCase.render();
      await writeFile(path.join(outDir, `${testCase.file}.pdf`), buffer);
      console.log(
        `  ${expectFailure ? "-" : "O"} ${testCase.file.padEnd(24)} ${String(
          Math.round(buffer.length / 1024),
        ).padStart(4)} KB`,
      );
    } catch (cause) {
      const reason = cause instanceof Error ? cause.message : cause;
      if (expectFailure) {
        console.log(`  - ${testCase.file.padEnd(24)} 실패(예상) — ${reason}`);
      } else {
        failures += 1;
        console.log(`  X ${testCase.file.padEnd(24)} ${reason}`);
      }
    }
  }

  console.log(`\n${outDir} (예상 못 한 실패 ${failures}건)`);
  console.log("레이아웃은 PNG로 **눈으로** 볼 것:");
  console.log(
    "  python -c \"import fitz,glob;[[fitz.open(f)[p].get_pixmap(dpi=80).save(f.replace('.pdf',f'-p{p+1}.png')) for p in range(fitz.open(f).page_count)] for f in glob.glob('tmp/pdf-scripts/*.pdf')]\"",
  );
  process.exitCode = failures === 0 ? 0 : 1;
}

void main();
