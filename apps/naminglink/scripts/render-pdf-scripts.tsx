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
import {
  buildHangulArtResult,
  type HangulArtReportData,
} from "@/lib/hangul-art-premium";
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

/** 서체를 여러 개 고른 주문. 아트 페이지 수와 서체 표기 줄 수가 함께 늘어난다. */
const FONTS = (count: number): ReportFontSnapshot[] =>
  Array.from({ length: count }, (_, index) => ({
    ...FONT,
    code: `${FONT.code}-${index + 1}`,
    name_en: `${FONT.name_en} ${index + 1}`,
  }));

/**
 * **입력 한 가지로는 부족하다.**
 *
 * 상품마다 입력 하나만 돌리면 그 입력에서 나오는 지면만 보게 된다. 이 PDF들의 분량은 주문에
 * 따라 달라진다 — 후보가 다섯이면 장이 열 장을 넘고, 서체를 세 개 고르면 아트 페이지가 세 배가
 * 되며, 생년월일을 안 냈으면 사주 지면이 통째로 빠진다. 케이스를 갈라 **로케일 × 케이스를
 * 전부** 돌린다(2026-08-01 사용자 지적으로 늘렸다).
 *
 * 케이스를 더할 때는 **지면 분량이 달라지는 축**을 고를 것. 값만 다르고 길이가 같은 입력은
 * 늘려 봐야 같은 지면을 다시 보는 것이다.
 */
type Case = {
  key: string;
  /** 후보 수. 글로벌 프리미엄은 최대 5, 발음 아트는 최대 3이다. */
  candidates: number;
  fonts: number;
  /**
   * 해설 길이.
   *   short  모델이 짧게 쓴 주문
   *   long   흔한 길이
   *   max    **스키마 상한**(`global-order`의 `max(2000)`)까지 채운 주문
   */
  text: "short" | "long" | "max";
  /** 생년월일을 내지 않은 주문. 사주 지면이 빠진다. */
  noSaju?: boolean;
  /** 한글 이름을 스키마 상한으로 잡은 경우(음차는 성명 전체라 길어진다). */
  longHangul?: boolean;
  /** 원문 이름을 길게 잡은 경우. 아트 페이지 머리에 그대로 실린다. */
  longOriginal?: boolean;
};

/**
 * **케이스는 임의로 고르지 않는다 — 스키마 상한에서 가져온다.**
 *
 * 케이스를 하나씩 늘리면 결함도 하나씩 나온다. 끝이 없다. 대신 이용자가 **실제로 낼 수 있는
 * 가장 큰 값**과 **가장 작은 값**을 넣는다. 분량은 값이 커질수록 단조롭게 늘어나므로, 양 끝이
 * 지면에서 버티면 그 사이는 따로 볼 필요가 없다(2026-08-01 사용자 지적에 대한 답).
 *
 * 상한의 출처는 `api/premium-reports/global-order/route.ts`의 zod 스키마다.
 * **스키마를 고치면 여기도 고쳐야 한다.**
 */
const CASES: Case[] = [
  { key: "base", candidates: 1, fonts: 1, text: "long" },
  // 상한: 후보 5(글로벌)·서체 5·해설 상한 길이.
  { key: "max", candidates: 5, fonts: 5, text: "max", longHangul: true, longOriginal: true },
  // 하한: 후보 1·서체 1·해설이 한 문장.
  { key: "short", candidates: 1, fonts: 1, text: "short" },
  // 생년월일 미입력(사주 지면이 통째로 빠진다).
  { key: "nosaju", candidates: 3, fonts: 2, text: "long", noSaju: true },
  // 한글 표기 상한만 단독으로 — 낙관·아트 글자 크기가 이 값에서 가장 작아진다.
  { key: "longname", candidates: 1, fonts: 1, text: "long", longHangul: true },
];

/**
 * 음차 표기의 스키마 상한: `[가-힣]{1,12}` 어절 네 개(공백 포함 51자).
 * 아트 페이지의 글자 크기와 낙관 열 나눔이 이 길이에서 가장 크게 흔들린다.
 */
const LONG_HANGUL = "가나다라마바사아자차카타 가나다라마바사아자차카타 가나다라마바사아자차카타 가나다라마바사아자차카타";

/** 원문 이름은 이용자가 자기 문자로 적는다. 아트 페이지에 `for {이름}`으로 그대로 실린다. */
const LONG_ORIGINAL = "Maria Isabella Alexandra Fitzgerald-Montgomery de la Cruz";

const GENERATED_AT = "2026-01-01T00:00:00.000Z";

/** 케이스의 해설 길이를 문단에 반영한다. short는 모델이 짧게 쓴 주문을 흉내 낸다. */
function bodyFor(sample: (typeof SAMPLES)[number], testCase: Case) {
  if (testCase.text === "short") return sample.paragraph.slice(0, 70);
  if (testCase.text === "long") return sample.paragraph;
  // 상한(2,000자)까지 채운다. 같은 문단을 이어 붙여 그 언어의 글자를 유지한다.
  let body = sample.paragraph;
  while (body.length < 2000) body += ` ${sample.paragraph}`;
  return body.slice(0, 2000);
}

function globalNameData(
  sample: (typeof SAMPLES)[number],
  testCase: Case,
): GlobalNameReportData {
  const body = bodyFor(sample, testCase);
  const hangul = testCase.longHangul ? LONG_HANGUL : "김하늘";
  return {
    reportId: "NL-SCRIPTS-01",
    generatedAt: GENERATED_AT,
    outputLanguage: sample.locale,
    original: { name: testCase.longOriginal ? LONG_ORIGINAL : sample.name, country: "us" },
    analysisSummary: body,
    fonts: FONTS(testCase.fonts),
    candidates: Array.from({ length: testCase.candidates }, (_, index) => ({
      name: {
        hangul: index === 0 ? hangul : `김하늘${index}`,
        romanized: `Kim Ha-neul ${index + 1}`,
      },
      sections: {
        meaningBreakdown: [...hangul.replace(/\s/g, "")].map((syllable) => ({
          syllable,
          meaning: body.slice(0, 40),
        })),
        whyThisName: body,
        soundConnection: body,
        pronunciationTips: body,
        culturalNotes: body,
        usageGuide: body,
      },
    })),
    // 생년월일을 내지 않은 주문은 사주 지면이 통째로 빠진다.
    saju: testCase.noSaju
      ? null
      : {
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
          overview: body,
          nameAlignment: body,
        },
  };
}

/**
 * **실제 생성 함수를 거친다.** 리포트 데이터를 손으로 만들면 서버 normalize(`buildHangulArtResult`)를
 * 건너뛰게 되어, 정작 운영에서 도는 코드가 검사에서 빠진다. 모델이 주는 것과 같은 모양의
 * 원자료를 넣고 함수에 맡긴다.
 */
function hangulArtData(
  sample: (typeof SAMPLES)[number],
  testCase: Case,
): HangulArtReportData {
  const body = bodyFor(sample, testCase);
  const hangul = testCase.longHangul ? LONG_HANGUL : "에밀리";
  // 음차 후보는 최대 셋이다(`global-order` 스키마).
  const count = Math.min(testCase.candidates, 3);
  return buildHangulArtResult({
    inputFactors: {
      originalName: testCase.longOriginal ? LONG_ORIGINAL : sample.name,
      originalNameLanguage: sample.locale,
    },
    candidates: Array.from({ length: count }, (_, index) => ({
      hangul: index === 0 ? hangul : `에밀리${index}`,
      pronunciation: `Emily ${index + 1}`,
      // 모델은 가운뎃점만으로 이어 붙여 준다. 공백을 넣는 것은 서버가 할 일이다.
      syllables: [...hangul.replace(/\s/g, "")].join("·"),
      ipa: "/e.mil.li/",
      source_pronunciation_basis: body,
      recommendation_reason: body,
      cultural_fit: body,
      usage_note: body,
      caution_notes: body,
    })),
    fonts: FONTS(testCase.fonts),
    outputLanguage: sample.locale,
    reportId: "NL-SCRIPTS-02",
  }).reportData;
}

function nameArtPackData(
  sample: (typeof SAMPLES)[number],
  testCase: Case,
): NameArtPackReportData {
  return {
    reportId: "NL-SCRIPTS-03",
    generatedAt: GENERATED_AT,
    outputLanguage: sample.locale,
    original: { name: testCase.longOriginal ? LONG_ORIGINAL : sample.name },
    name: {
      hangul: testCase.longHangul ? LONG_HANGUL : "김하늘",
      romanized: "Kim Ha-neul",
    },
    fonts: FONTS(testCase.fonts),
  };
}

// 프리미엄 한자 리포트는 **한국어 전용 흐름**이라 로케일이 없다. 대신 이름 길이와 글자 수가
// 지면을 바꾸므로 그 축으로 케이스를 나눈다.
function premiumHanjaData(variant: {
  key: string;
  name: string;
  hanja: string;
  characters: number;
  longWishes?: boolean;
  noHour?: boolean;
}): PremiumHanjaReportData {
  const characters = [
    { hangul: "덕", hanja: "德", meaning: "큰 덕, 바른 품성과 배려", elementLabel: "화" },
    { hangul: "규", hanja: "奎", meaning: "별 이름, 빛나는 문장과 재능", elementLabel: "토" },
    { hangul: "하", hanja: "河", meaning: "큰 강, 넉넉히 흐르는 기운", elementLabel: "수" },
  ].slice(0, variant.characters);
  return {
    reportId: `NL-SCRIPTS-04-${variant.key}`,
    generatedAt: GENERATED_AT,
    expiresAt: "2026-01-02T00:00:00.000Z",
    childNameHangul: variant.name,
    // 자유서술의 상한은 3,000자다(`checkInputFactorsSize`). 상한 케이스는 그만큼 채운다.
    parentWishes: variant.longWishes
      ? LONG_WISHES
      : "밝은 지혜와 바른 마음으로 자기 길을 걸어가는 사람",
    excludedMeanings: "병약함이나 지나치게 강압적인 인상",
    saju: calculatePremiumSaju({
      calendarType: "solar",
      year: 2024,
      month: 2,
      day: 10,
      birthHour: variant.noHour ? null : 12,
      birthMinute: variant.noHour ? null : 30,
      longitude: 126.978,
      birthplaceLabel: "서울",
      timeZone: "Asia/Seoul",
    }),
    primaryCandidate: {
      displayName: variant.name,
      hanjaName: variant.hanja,
      focusLabel: "종합 의미 우선안",
      summary:
        "평안함을 바탕으로 덕을 쌓고, 별처럼 자기 자리에서 빛나는 사람이라는 의미를 담은 조합입니다.",
      characters: characters.map((character) => ({
        ...character,
        officialReadingConfirmed: true,
      })),
      story:
        "德은 사람 사이에서 신뢰를 쌓는 바른 마음을, 奎는 밤하늘에서 방향을 밝히는 별의 이미지를 전합니다. 두 글자를 함께 쓰면 타인을 존중하는 품성을 바탕으로 자기 재능을 온전히 펼치는 사람이라는 이야기가 만들어집니다.",
      practicalUse:
        "각 글자의 뜻이 독립적으로 분명하고 결합 방향도 자연스러워, 학교와 사회생활 및 공식 문서에서 이름의 의미를 간결하게 설명하기 좋습니다.",
      officialSourceLabel:
        "후보 글자와 지정 음가는 서비스에 등록된 공식 인명용 한자 자료의 production 검수본을 기준으로 확인했습니다.",
    },
  };
}

/** 자유서술 상한(3,000자). 같은 문장을 이어 붙여 채운다. */
const LONG_WISHES = (() => {
  const sentence =
    "밝은 지혜와 바른 마음으로 자기 길을 걸어가되, 주변 사람을 살피는 따뜻함을 잃지 않고, 어려운 자리에서도 스스로 판단해 책임을 지는 사람으로 자라기를 바랍니다. ";
  let value = "";
  while (value.length < 3000) value += sentence;
  return value.slice(0, 3000);
})();

const HANJA_CASES = [
  { key: "base", name: "안덕규", hanja: "安德奎", characters: 2 },
  { key: "twochar", name: "김하", hanja: "金河", characters: 1 },
  { key: "fourchar", name: "남궁덕규하", hanja: "南宮德奎河", characters: 3, longWishes: true },
  { key: "nohour", name: "안덕규", hanja: "安德奎", characters: 2, noHour: true },
];

async function main() {
  const outDir = path.join(process.cwd(), "tmp", "pdf-scripts");
  await mkdir(outDir, { recursive: true });

  const cases: Array<{ file: string; render: () => Promise<Buffer | Uint8Array> }> = [];
  for (const testCase of CASES) {
    for (const sample of SAMPLES) {
      const suffix = `${testCase.key}-${sample.locale}`;
      cases.push({
        file: `global-name-${suffix}`,
        render: () => renderGlobalNameReportPdf(globalNameData(sample, testCase)),
      });
      cases.push({
        file: `hangul-art-${suffix}`,
        render: () => renderHangulArtPdf(hangulArtData(sample, testCase)),
      });
      cases.push({
        file: `name-art-pack-${suffix}`,
        render: () => renderNameArtPackPdf(nameArtPackData(sample, testCase)),
      });
    }
  }
  for (const variant of HANJA_CASES) {
    cases.push({
      file: `premium-hanja-${variant.key}-ko`,
      render: () => renderPremiumHanjaReport(premiumHanjaData(variant)),
    });
  }

  let failures = 0;
  for (const testCase of cases) {
    // 실제로는 영어로 나가는 로케일. 실패해도 판매에 영향이 없다(위 주석 참고).
    const expectFailure = /-(ar|km)$/.test(testCase.file);
    try {
      const buffer = await testCase.render();
      await writeFile(path.join(outDir, `${testCase.file}.pdf`), buffer);
      if (process.env.VERBOSE) {
        console.log(
          `  ${expectFailure ? "-" : "O"} ${testCase.file.padEnd(34)} ${String(
            Math.round(buffer.length / 1024),
          ).padStart(4)} KB`,
        );
      }
    } catch (cause) {
      const reason = cause instanceof Error ? cause.message : cause;
      if (expectFailure) {
        if (process.env.VERBOSE) {
          console.log(`  - ${testCase.file.padEnd(34)} 실패(예상) — ${reason}`);
        }
      } else {
        failures += 1;
        console.log(`  X ${testCase.file.padEnd(34)} ${reason}`);
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
