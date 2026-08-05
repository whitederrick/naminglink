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
import { prepare, toReading } from "../src/lib/engines/prepare";
import {
  todayFortune,
  todayPillarOf,
  yearPillarOf,
} from "../src/lib/engines/today-fortune";
import { getDictionary, type Locale } from "../src/lib/i18n";
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
 * 해설은 실제 GPT를 부르지 않고 **가장 긴 경우에 가까운 더미**를 쓴다. 지면 검사는 짧은 글이
 * 아니라 긴 글에서 깨지므로, 여기서 짧게 넣으면 검사가 통과해도 실제로는 밀린다.
 */
const interpretation: SajuInterpretation = {
  summary:
    "봄의 초입에 태어난 을목(乙木) 일간입니다. 곧게 뻗기보다 상황에 맞춰 휘어지며 나아가는 결이고, 주변의 흐름을 먼저 읽은 뒤 움직이는 편입니다. 원국 전체로 보면 목과 화가 두텁고 금이 얇아, 벌여 놓은 것을 정리하고 끊어 내는 일에서 부담을 느끼기 쉽습니다.",
  personality:
    "말수가 많지 않은데 자리의 공기는 정확히 읽습니다. 부딪치는 자리를 피해 다른 길로 돌아가지만 결국 자기 뜻대로 가 있는 경우가 많고, 그 과정에서 주변과 크게 어긋나지 않는 것이 이 사주의 강점입니다. 다만 결정을 미루는 습관이 붙으면 기회가 지나간 뒤에 움직이게 됩니다.",
  element_balance:
    "목이 가장 두텁고 금이 가장 얇습니다. 태어난 달이 목을 밀어 올리는 자리라 실제 체감은 수치보다 더 큽니다. 얇은 금을 채우는 자리에서 일이 수월해지는데, 규칙을 정해 두거나 마감을 걸어 두는 방식이 그 몫을 대신합니다.",
  today: {
    headline: "미뤄 둔 것을 꺼내기 좋은 날입니다",
    message:
      "오늘의 기운이 지금 필요한 자리에 그대로 닿습니다. 평소보다 결정이 빨라지고, 미뤄 두었던 연락이나 정리를 시작하기에 알맞습니다.",
    advice:
      "다만 하루에 다 끝내려 들지 않는 편이 좋습니다. 시작을 걸어 두는 것까지가 오늘의 몫입니다.",
    lucky_note: "청록과 초록, 동쪽 자리에서 일이 수월합니다.",
  },
  strengths: [
    "상황을 읽는 눈이 빨라 큰 사고를 미리 피합니다.",
    "부드럽게 말하면서도 결국 자기 방향을 지킵니다.",
    "사람 사이에서 오래 남는 인상을 남깁니다.",
  ],
  cautions: [
    "결정을 미루다 기회가 지나가는 일이 반복될 수 있습니다.",
    "끊어 내야 할 자리에서 관계를 먼저 생각해 손해를 봅니다.",
    "혼자 오래 버티는 일에서는 예상보다 빨리 지칩니다.",
  ],
  domains: {
    wealth:
      "크게 벌리기보다 쌓아 가는 결입니다. 한 번에 큰 것을 노리는 자리에서는 손이 늦고, 꾸준히 들어오는 자리를 만드는 쪽에서 오히려 성과가 납니다.",
    love:
      "먼저 다가가기보다 상대의 결을 오래 살피는 편입니다. 표현을 미루면 상대가 확신을 갖지 못하니, 마음을 정한 뒤에는 말로 옮기는 편이 낫습니다.",
    career:
      "규칙과 마감이 분명한 자리에서 힘을 냅니다. 스스로 판을 짜야 하는 자리보다, 주어진 틀 안에서 방식을 고르는 자리가 맞습니다.",
    health:
      "간과 신경 쪽이 먼저 신호를 보냅니다. 무리했을 때 몸보다 잠이 먼저 흔들리므로, 수면이 밀리기 시작하면 그때 속도를 줄이십시오.",
  },
  year_outlook:
    "올해는 벌여 둔 것을 정리하는 해에 가깝습니다. 새로 시작하는 일보다 이미 손에 있는 것을 끝내는 자리에서 성과가 나고, 특히 하반기에 얇았던 금의 자리가 채워지며 결정이 빨라집니다.",
  disclaimer:
    "전통 명리 관점의 참고 자료이며, 과학적 예측이나 미래에 대한 단정이 아닙니다.",
};

/**
 * 상한을 꽉 채운 견본.
 *
 * **장수를 정하는 것은 가장 긴 경우다.** 폴백은 우리가 쓴 글이라 길이를 알지만, 모델은 얼마나
 * 길게 쓸지 알 수 없다 — 그래서 서버가 필드마다 상한을 씌운다(`LIMITS`). 그 상한을 전부 채운
 * 문서가 5장·7장이면, 어떤 응답이 와도 장수는 흔들리지 않는다.
 */
function stretch(base: string, target: number) {
  let out = base;
  while (out.length < target) out += ` ${base}`;
  return out.slice(0, target);
}

async function main() {
  const { buildFallbackInterpretation } = await import("../src/lib/saju-fallback");
  const { LIMITS } = await import("../src/lib/saju-interpretation");

  const longest: SajuInterpretation = {
    summary: stretch(interpretation.summary, LIMITS.summary),
    personality: stretch(interpretation.personality, LIMITS.personality),
    element_balance: stretch(interpretation.element_balance, LIMITS.element_balance),
    today: {
      headline: stretch(interpretation.today.headline, LIMITS.todayHeadline),
      message: stretch(interpretation.today.message, LIMITS.todayMessage),
      advice: stretch(interpretation.today.advice, LIMITS.todayAdvice),
      lucky_note: stretch(interpretation.today.lucky_note, LIMITS.luckyNote),
    },
    strengths: Array.from({ length: LIMITS.lineCount }, (_, index) =>
      stretch(interpretation.strengths[index % interpretation.strengths.length], LIMITS.line),
    ),
    cautions: Array.from({ length: LIMITS.lineCount }, (_, index) =>
      stretch(interpretation.cautions[index % interpretation.cautions.length], LIMITS.line),
    ),
    domains: {
      wealth: stretch(interpretation.domains.wealth, LIMITS.domain),
      love: stretch(interpretation.domains.love, LIMITS.domain),
      career: stretch(interpretation.domains.career, LIMITS.domain),
      health: stretch(interpretation.domains.health, LIMITS.domain),
    },
    year_outlook: stretch(interpretation.year_outlook!, LIMITS.yearOutlook),
    disclaimer: interpretation.disclaimer,
  };

  const outDir = path.join(process.cwd(), "tmp", "saju-report");
  await mkdir(outDir, { recursive: true });

  const prepared = prepare(person);
  const reading = toReading(prepared);
  // 일진은 날짜 문자열이 아니라 간지까지 뽑아 넘긴다. 견본은 날짜를 고정해 둔다 —
  // 돌릴 때마다 값이 바뀌면 지면 검사 결과를 견줄 수 없다.
  const today = todayFortune(reading, todayPillarOf("2026-08-04"));

  const locales: Locale[] = ["ko", "en"];
  const kinds: ReportKind[] = ["chongun", "premium"];

  // **두 경우를 다 낸다.** 해설이 온 문서와 오지 않은 문서의 장수가 같아야 상품 정보 고시가
  // 언제나 참이 된다(총운 5장·프리미엄 7장). 한쪽만 재고 넘어가면 고시가 조용히 거짓이 된다.
  const modes = ["gpt", "long", "fallback"] as const;
  const expected: Record<ReportKind, number> = { chongun: 5, premium: 7 };
  let mismatch = 0;

  for (const locale of locales) {
    const dictionary = getDictionary(locale);
    for (const kind of kinds) {
      for (const mode of modes) {
        const copy =
          mode === "gpt"
            ? interpretation
            : mode === "long"
            ? longest
            : buildFallbackInterpretation({
                reading,
                today,
                yearPillar: yearPillarOf("2026-08-04"),
                kind,
                locale,
                dictionary,
              });

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
