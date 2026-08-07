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

import { DICT_VERSION } from "../src/lib/dream-symbols";
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
    // 사전이 ko·en 두 벌이라 꿈 문장도 두 벌이다. 한국어 문서에 영어 꿈을 넣으면 상징이 안 걸린다.
    const dreamText = locale === "ko" ? SAMPLE_KO : SAMPLE_EN;
    const outcome = matchDream(dreamText);

    const buffer = await renderConceptionReport({
      outcome,
      dreamText,
      locale,
      // 견본이라 시각을 고정한다. 매번 달라지면 diff로 볼 수 없다.
      generatedAt: "2026-08-07T00:00:00.000Z",
      dictVersion: DICT_VERSION,
    });

    const file = path.join(outDir, `conception-${locale}.pdf`);
    await writeFile(file, buffer);

    // 장수는 PDF의 `/Type /Page` 개수로 센다. 고시에 적을 값이라 눈대중으로 세지 않는다.
    const pages = (buffer.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
    const ok = pages === CONCEPTION_PAGE_COUNT;
    if (!ok) mismatch += 1;
    console.log(
      `  conception-${locale}.pdf  ${pages}장(기대 ${CONCEPTION_PAGE_COUNT})` +
        `  ${Math.round(buffer.length / 1024)}KB${ok ? "" : "  ← 어긋남"}`,
    );
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
