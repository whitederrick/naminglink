// 태몽 리포트 PDF 견본을 **로케일마다** 만든다. 장수를 세고, 눈으로 지면을 보기 위한 것이다.
//
// **왜 없었나.** 형제 앱 셋에는 다 있는데(사주 `render-saju-sample`, 인연 `render-report-
// scripts`, naminglink `render-premium-hanja-report`) 드림링크만 카드(PNG) 견본뿐이었다.
// 돈을 받고 주는 PDF가 **로케일별로 한 번도 렌더된 적이 없었다는 뜻이다**(2026-08-07).
//
// **텍스트 추출로 확인하지 말 것.** 글자가 다 들어 있어도 칸을 넘치거나 겹치거나 다음 장으로
// 밀리는 것은 텍스트로 안 보인다. PNG로 렌더해서 눈으로 봐야 한다.
//
// 장수가 중요한 이유는 따로 있다 — **상품 정보 고시에 적는 값**이라 실제와 달라선 안 된다.
//
// 실행: apps/dreamslink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/render-conception-sample.tsx
//   ../naminglink/node_modules/.bin/tsx scripts/render-conception-sample.tsx ja,de   (일부만)

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

import { DREAM_SYMBOLS, DICT_VERSION } from "../src/lib/dream-symbols";
import { matchDream } from "../src/lib/engines/dream-match";
import { supportedLocales, type Locale } from "../src/lib/i18n";
import { pdfLocale } from "../src/lib/pdf/fonts";
import { renderConceptionReport } from "../src/lib/pdf/conception-report";
import { CONCEPTION_PAGE_COUNT } from "../src/lib/report-pages";

/**
 * **태몽으로 읽히는 상징이 여럿 걸리는 문장을 쓴다.** 하나짜리로 재면 넘침을 못 본다.
 * 임신을 말하는 낱말을 넣어 태몽 쪽 의미가 골라지게 한다(`isConceptionDream`).
 */
const SAMPLE_KO =
  "임신한 뒤로 자주 꾸는 꿈입니다. 맑은 물에서 커다란 잉어가 뛰어올랐고, 돼지가 집으로 들어왔습니다. 하늘에는 용이 있었고 품에 안았습니다.";
const SAMPLE_EN =
  "A dream I have often since becoming pregnant. A large carp leapt from clear water and a pig came into the house. A dragon was in the sky and I held it.";

/**
 * **최악의 입력을 사전에서 만들어 낸다.**
 *
 * 시험 문장을 손으로 적으면 사전이 자랄 때 낡는다 — 상징을 백 개 더 넣어도 옛 문장은 여전히
 * 일곱 개만 걸리고, 검사는 통과를 찍는다. 그래서 **지금 사전에 있는 상징을 그대로 이어 붙여**
 * 걸릴 수 있는 최대에 가까운 입력을 만든다. 사전이 자라면 이 케이스도 함께 자란다.
 *
 * 상징 사이에 「그리고」를 넣는다 — 붙여 쓰면 낱말 경계 규칙(`isStandalone`)에 걸려 오히려
 * 덜 잡힌다. 실제 문장에 가깝게 두어야 실제로 일어날 수 있는 최악을 재는 것이 된다.
 */
function stressText(count: number, locale: Locale) {
  // **그 로케일 이용자가 쓸 법한 말로 만든다.** 한국어 문장을 스물세 로케일에 그대로 쓰면
  // 문서에 한국어가 실리는데, 그건 결함이 아니라 **내가 넣은 것**이다 — 사주 견본이 모든
  // 로케일에 한국어 요약을 박아 넣던 것과 같은 실수다(2026-08-07에 둘 다 고쳤다).
  // 이용자가 적은 꿈은 어느 언어든 원문 그대로 싣는 것이 맞으므로, 시험 입력이 그 판단을
  // 흐리면 안 된다.
  if (locale === "ko") {
    const terms = DREAM_SYMBOLS.map((symbol) => symbol.term_ko).slice(0, count);
    return `임신한 뒤로 꾼 꿈입니다. ${terms.join(" 그리고 ")} 이 모두 나왔습니다.`;
  }
  const terms = DREAM_SYMBOLS.map((symbol) => symbol.term_en).slice(0, count);
  return `A dream I had after becoming pregnant. ${terms.join(" and ")} all appeared.`;
}

/**
 * 회귀 케이스. **넘침은 빽빽한 입력에서만 드러난다** — 2026-08-07에 이 문서가 스물한 개
 * 로케일에서 5장으로 나가고 있었는데, 견본이 표본 하나뿐이라 아무도 몰랐다.
 */
const CASES = [
  { name: "base", text: (locale: Locale) => (locale === "ko" ? SAMPLE_KO : SAMPLE_EN) },
  // 상한(6) 바로 위. 예전에 5장이 되던 자리다.
  { name: "dense", text: (locale: Locale) => stressText(12, locale) },
  // 이름 줄 상한(24)까지 넘기는 입력. 카드만 막고 이름 줄을 안 막으면 여기서 갈라진다.
  { name: "flood", text: (locale: Locale) => stressText(60, locale) },
  // 하나도 안 걸리는 경우. 빈 자리 문안도 지면을 지켜야 한다.
  {
    name: "empty",
    text: (locale: Locale) =>
      locale === "ko"
        ? "임신한 뒤로 아무것도 기억나지 않는 밤을 보냈습니다."
        : "A night after becoming pregnant that I cannot remember at all.",
  },
] as const;

async function main() {
  const only = process.argv[2]?.split(",").filter(Boolean);

  /**
   * **`pdfLocale`을 거친 뒤 중복을 없앤다.** 아랍어·크메르어는 영어로 나가므로(→
   * `lib/pdf/fonts.tsx`) 따로 렌더할 문서가 없다. 그것을 여기서 다시 판단하지 않는다 —
   * 판단이 두 곳에 있으면 갈린다.
   */
  const locales = [...new Set(supportedLocales.map(pdfLocale))].filter(
    (locale) => !only || only.includes(locale),
  );

  const outDir = path.join(process.cwd(), "tmp", "conception-report");
  await mkdir(outDir, { recursive: true });

  let mismatch = 0;
  for (const locale of locales as Locale[]) {
    for (const testCase of CASES) {
      // 사전이 ko·en 두 벌이라 꿈 문장도 두 벌이다. 한국어 문서에 영어 꿈을 넣으면 상징이 안 걸린다.
      const dreamText = testCase.text(locale);
      const outcome = matchDream(dreamText);

      const buffer = await renderConceptionReport({
        outcome,
        dreamText,
        locale,
        // 견본이라 시각을 고정한다. 매번 달라지면 diff로 볼 수 없다.
        generatedAt: "2026-08-07T00:00:00.000Z",
        dictVersion: DICT_VERSION,
      });

      const file = path.join(outDir, `conception-${locale}-${testCase.name}.pdf`);
      await writeFile(file, buffer);

      // 장수는 PDF의 `/Type /Page` 개수로 센다. 고시에 적을 값이라 눈대중으로 세지 않는다.
      const pages = (buffer.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
      const ok = pages === CONCEPTION_PAGE_COUNT;
      if (!ok) mismatch += 1;
      console.log(
        `  ${locale}-${testCase.name}`.padEnd(20) +
          ` 상징 ${String(outcome.matched.length).padStart(3)}개` +
          ` → ${pages}장(기대 ${CONCEPTION_PAGE_COUNT})${ok ? "" : "  ← 어긋남"}`,
      );
    }
  }

  console.log(`\n→ ${outDir}`);
  if (mismatch) {
    console.log(`\n장수가 어긋난 문서 ${mismatch}개 — 고시가 거짓이 된다. 지면을 볼 것.`);
    process.exit(1);
  }
  console.log("\nPNG로 렌더해 **눈으로** 확인하세요. 글리프 누락은 텍스트로 안 보입니다:");
  console.log(
    '  python -c "import fitz,glob;[[fitz.open(f)[p].get_pixmap(dpi=95).save(f.replace(\'.pdf\',f\'-p{p+1}.png\')) for p in range(fitz.open(f).page_count)] for f in glob.glob(\'tmp/conception-report/*.pdf\')]"',
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
