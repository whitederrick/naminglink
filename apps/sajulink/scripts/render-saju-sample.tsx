// 사주 리포트 PDF 샘플을 만든다. 레이아웃을 눈으로 확인하고 **실제 장수를 세기** 위한 것이다.
//
// **텍스트 추출로 확인하지 말 것.** 글자가 다 들어 있어도 칸을 넘치거나 겹치거나 다음 장으로
// 밀리는 것은 텍스트로 안 보인다. 만든 PDF를 PNG로 렌더해서 봐야 한다.
//
// 장수가 중요한 이유는 따로 있다 — **상품 정보 고시에 적는 값**이라 실제와 달라선 안 된다.
// 목차를 먼저 쓰고 문서를 맞추는 것이 아니라, 문서가 정한 장수로 목차와 고시를 쓴다.
//
// 실행: apps/sajulink 에서
//   ../naminglink/node_modules/.bin/tsx scripts/render-saju-sample.tsx

import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";

import { ENGINE_VERSION } from "../src/lib/engines";
import { natalOutlook } from "../src/lib/engines/natal-outlook";
import { prepare, toReading } from "../src/lib/engines/prepare";
import {
  todayFortune,
  todayPillarOf,
  yearPillarOf,
} from "../src/lib/engines/today-fortune";
import { getDictionary, translatedLocales, type Locale } from "../src/lib/i18n";
import { pdfLocale } from "../src/lib/pdf/fonts";
import { renderSajuReport } from "../src/lib/pdf/saju-report";
import type { SajuInterpretation } from "../src/lib/saju-interpretation";
import type { ReportKind } from "../src/lib/report-product";

// 폴백 모듈은 `server-only`를 들여온다 — 유료 서술을 만드는 자리라 클라이언트에서 불리면
// 안 되기 때문이다. 이 스크립트는 서버 밖이므로 **가드만 비운다**(다른 검사 스크립트와 같은
// 방식). 가드는 실제 코드에 그대로 남고, 모듈은 이 줄 **뒤에** 동적으로 불러온다.
const nodeRequire = createRequire(import.meta.url);
nodeRequire.cache[nodeRequire.resolve("server-only")] = {
  exports: {},
} as unknown as NodeModule;

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };

const person = {
  label: "김서윤",
  gender: "female" as const,
  calendarType: "solar" as const,
  year: 1992,
  month: 3,
  day: 14,
  birthHour: 9,
  birthMinute: 20,
  birthplace: SEOUL,
};

/**
 * 모델이 쓰는 자리에 넣어 볼 견본 문단.
 *
 * **한 문단뿐인 것이 맞다.** ②-1에서 `MUTABLE_FIELDS`가 `summary` 하나로 좁혀졌다 — 나머지
 * 아홉 자리는 엔진이 쓰고 모델이 무엇을 보내오든 버린다. 그러니 견본도 그 자리에만 필요하다.
 */
const SAMPLE_SUMMARY =
  "봄의 초입에 태어난 을목(乙木) 일간입니다. 곧게 뻗기보다 상황에 맞춰 휘어지며 나아가는 결이고, 주변의 흐름을 먼저 읽은 뒤 움직이는 편입니다. 원국 전체로 보면 목과 화가 두텁고 금이 얇아, 벌여 놓은 것을 정리하고 끊어 내는 일에서 부담을 느끼기 쉽습니다.";

/**
 * 상한을 꽉 채운다. **모델이 쓰는 자리에만 쓴다** — 아래 `modes` 주석 참고.
 */
function stretch(base: string, target: number) {
  let out = base;
  while (out.length < target) out += ` ${base}`;
  return out.slice(0, target);
}

async function main() {
  const { buildNarrative } = await import("../src/lib/saju-narrative");
  const { LIMITS } = await import("../src/lib/saju-interpretation");

  const outDir = path.join(process.cwd(), "tmp", "saju-report");
  await mkdir(outDir, { recursive: true });

  const prepared = prepare(person);
  const reading = toReading(prepared);
  // 일진은 날짜 문자열이 아니라 간지까지 뽑아 넘긴다. 견본은 날짜를 고정해 둔다 —
  // 돌릴 때마다 값이 바뀌면 지면 검사 결과를 견줄 수 없다.
  const today = todayFortune(reading, todayPillarOf("2026-08-04"));
  const outlook = natalOutlook(reading, person.gender);

  // **번역이 있는 로케일을 전부 낸다.** ko·en으로 못 박아 두었더니 ja·vi를 더한 뒤에도
  // 그 둘만 재고 넘어갔다 — 지면이 깨지는 것은 글자가 다른 언어에서다.
  //
  // 다만 **라우트가 실제로 렌더하는 언어**로 재야 한다. 아랍어·크메르어 문서는 영어로 나가는데
  // (`pdfLocale` — 그 언어의 문단을 라이브러리가 렌더하다 죽는다), 여기서 화면 언어 그대로
  // 넘기면 아무도 받지 않는 문서를 재다가 **그 라이브러리 결함에 스크립트가 죽는다.** 실제로
  // 문단이 길어지자 아랍어에서 죽었다 — 재던 대상이 애초에 상품이 아니었다.
  //
  // **좁혀 볼 수 있어야 한다.** 전부 돌리면 백 벌이 넘어 몇 분이 걸리는데, 지면을 손보는 동안은
  // 한두 언어만 되풀이해 재게 된다. 그때 스크립트를 고쳐 가며 재면 그 손질이 커밋에 섞인다.
  //   LOCALES=ko,de,fil MODES=long tsx scripts/render-saju-sample.tsx
  const pick = (value: string | undefined) =>
    value ? new Set(value.split(",").filter(Boolean)) : null;
  const onlyLocales = pick(process.env.LOCALES);
  const onlyModes = pick(process.env.MODES);

  const locales: Locale[] = [...new Set(translatedLocales.map(pdfLocale))].filter(
    (locale) => !onlyLocales || onlyLocales.has(locale),
  );
  const kinds: ReportKind[] = ["chongun", "premium"];

  /**
   * **세 경우를 다 낸다.** 해설이 온 문서와 오지 않은 문서의 장수가 같아야 상품 정보 고시가
   * 언제나 참이 된다(총운 5장·프리미엄 7장). 한쪽만 재고 넘어가면 고시가 조용히 거짓이 된다.
   *
   *   fallback  모델을 부르지 않은 문서 — 엔진이 쓴 그대로
   *   gpt       엔진 + 모델이 보낸 요약 한 문단
   *   long      엔진 + 요약이 상한을 꽉 채운 경우
   *
   * **셋 다 뼈대는 엔진 것이다.** 예전에는 `gpt`와 `long`이 열 자리를 전부 더미로 채웠는데,
   * ②-1 뒤로 그건 **일어날 수 없는 문서**다 — 모델 글은 `summary` 한 자리에만 들어가고
   * 나머지는 무엇이 오든 버려진다. 일어날 수 없는 경우로 지면을 재면 두 가지가 어긋난다.
   *
   * 하나는 **너무 빡빡해진다.** 열 자리를 동시에 상한까지 채운 문서는 실물보다 훨씬 길어,
   * 그것에 맞추면 아무도 받지 않을 여백을 지면마다 남기게 된다. 다른 하나는 **글자 수 상한이
   * 언어마다 다른 지면을 뜻한다는 것** — 라틴 문자 451자와 한글 451자는 지면에서 두 배 넘게
   * 차이가 난다. 그래서 상한 하나를 스물세 언어에 똑같이 씌우면 어느 쪽이든 틀린다.
   *
   * 지금 지면을 정하는 것은 사전 문안이고, 그것은 **로케일마다 실제 길이로 여기서 렌더된다.**
   * 상한(`LIMITS`)은 그 문안이 소리 없이 자라지 않게 막는 신호로 남아 `verify-report-
   * determinism`이 센다.
   */
  const modes = (["gpt", "long", "fallback"] as const).filter(
    (mode) => !onlyModes || onlyModes.has(mode),
  );
  const expected: Record<ReportKind, number> = { chongun: 5, premium: 7 };
  let mismatch = 0;

  for (const locale of locales) {
    const dictionary = getDictionary(locale);
    for (const kind of kinds) {
      for (const mode of modes) {
        const narrative = buildNarrative({
          reading,
          today,
          outlook,
          yearPillar: yearPillarOf("2026-08-04"),
          kind,
          locale,
          dictionary,
        });
        // 모델이 손대는 자리는 `summary` 하나다. 서버도 여기서 하는 것과 같은 일만 한다
        // (`applyMutableFields` — 허용목록 밖은 무엇이 오든 버린다).
        const copy: SajuInterpretation =
          mode === "fallback"
            ? narrative
            : {
                ...narrative,
                summary:
                  mode === "long" ? stretch(SAMPLE_SUMMARY, LIMITS.summary) : SAMPLE_SUMMARY,
              };

        const buffer = await renderSajuReport({
          kind,
          reading,
          today,
          interpretation: copy,
          locale,
          dictionary,
          generatedAt: "2026-08-04T00:00:00.000Z",
          engineVersion: ENGINE_VERSION,
        });
        const file = path.join(outDir, `${kind}-${locale}-${mode}.pdf`);
        await writeFile(file, buffer);
        // 장수는 PDF의 /Type /Page 개수로 센다. 목차·고시에 적을 값이라 눈대중으로 세지 않는다.
        const pages = (buffer.toString("latin1").match(/\/Type\s*\/Page[^s]/g) ?? []).length;
        const ok = pages === expected[kind];
        if (!ok) mismatch += 1;
        console.log(
          `${ok ? "  " : "✗ "}${kind}-${locale}-${mode}.pdf  ${pages}장(기대 ${expected[kind]})  ${(buffer.length / 1024).toFixed(0)}KB`,
        );
      }
    }
  }
  console.log(`\n→ ${outDir}`);
  if (mismatch) {
    console.error(`\n장수가 고시와 어긋난 문서 ${mismatch}건.`);
    process.exit(1);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
