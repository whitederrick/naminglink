// 리포트가 **같은 입력이면 같은 문서**인지 본다.
//
// **왜 필요한가.** 이 상품은 한 사람이 한 번 사서 평생 보관하고, 같은 주문으로 다섯 번까지
// 다시 받을 수 있다. 그때마다 글이 달라지면 "내가 산 그 문서"가 아니게 된다 — 궁합처럼 또
// 뽑으면 되는 것과 다르다.
//
// 그래서 이 서비스는 약속을 좁게 정했다: **`MUTABLE_FIELDS`에 적힌 자리만 달라질 수 있다.**
// 상품 정보와 약관이 같은 말을 하고, 이 검사기가 그것을 강제한다. 목록을 늘리면 여기가 먼저
// 빨개져 고지를 함께 고치게 된다.
//
// 실행: apps/sajulink 에서
//   ../naminglink/node_modules/.bin/tsx --tsconfig tsconfig.json scripts/verify-report-determinism.ts

import { createRequire } from "node:module";

// `saju-narrative`는 `server-only`를 들여온다(유료 서술을 만드는 자리라 클라이언트에서 불리면
// 안 된다). 이 스크립트는 서버 밖이라 **가드만 비운다** — 가드는 실제 코드에 그대로 남는다.
const nodeRequire = createRequire(import.meta.url);
nodeRequire.cache[nodeRequire.resolve("server-only")] = {
  exports: {},
} as unknown as NodeModule;

import { natalOutlook } from "../src/lib/engines/natal-outlook";
import { prepare, toReading } from "../src/lib/engines/prepare";
import { todayFortune, todayPillarOf, yearPillarOf } from "../src/lib/engines/today-fortune";
import { getDictionary, translatedLocales } from "../src/lib/i18n";
import type { ReportKind } from "../src/lib/report-product";

const SEOUL = { timeZone: "Asia/Seoul", longitude: 126.978 };
const DATE = "2026-08-04";

const PEOPLE = [
  { label: "가", gender: "female" as const, year: 1992, month: 3, day: 14, birthHour: 9, birthMinute: 20 },
  { label: "나", gender: "male" as const, year: 1977, month: 11, day: 2, birthHour: null, birthMinute: null },
];

let failures = 0;
function check(label: string, ok: boolean, detail?: string) {
  console.log(`${ok ? "PASS" : "FAIL"}  ${label}${detail ? ` — ${detail}` : ""}`);
  if (!ok) failures += 1;
}

/** 허용목록에 적힌 자리를 지운 사본. 이것이 같아야 "같은 문서"다. */
function withoutMutable(value: unknown, mutable: readonly string[]): unknown {
  const clone = JSON.parse(JSON.stringify(value)) as Record<string, unknown>;
  for (const field of mutable) delete clone[field];
  return clone;
}

async function main() {
  const { buildNarrative } = await import("../src/lib/saju-narrative");
  const { MUTABLE_FIELDS } = await import("../src/lib/saju-interpretation");

  console.log(`허용목록(달라져도 되는 자리): ${MUTABLE_FIELDS.join(", ")}\n`);

  const kinds: ReportKind[] = ["chongun", "premium"];
  let compared = 0;

  console.log("== 같은 입력을 두 번 — 허용목록 밖은 글자까지 같아야 한다");
  for (const spec of PEOPLE) {
    for (const locale of translatedLocales) {
      for (const kind of kinds) {
        const build = () => {
          const reading = toReading(
            prepare({ ...spec, calendarType: "solar", birthplace: SEOUL }),
          );
          return buildNarrative({
            reading,
            today: todayFortune(reading, todayPillarOf(DATE)),
            outlook: natalOutlook(reading, spec.gender),
            yearPillar: yearPillarOf(DATE),
            kind,
            locale,
            dictionary: getDictionary(locale),
          });
        };
        const first = build();
        const second = build();
        compared += 1;
        if (JSON.stringify(first) !== JSON.stringify(second)) {
          check(`${spec.label}/${locale}/${kind}`, false, "두 번 뽑은 값이 다르다");
        }
      }
    }
  }
  check(`뼈대가 언제나 같다 (${compared}건)`, true);

  console.log("\n== 대조군 — 검사가 살아 있는가");
  // 이 검사가 의미 있으려면 "다르면 잡는다"가 증명돼야 한다. 허용목록 밖 한 자리를 일부러
  // 바꿔 보고 잡히는지 본다. 이걸 안 하면 늘 통과하는 검사기가 된다.
  const reading = toReading(
    prepare({ ...PEOPLE[0]!, calendarType: "solar", birthplace: SEOUL }),
  );
  const base = buildNarrative({
    reading,
    today: todayFortune(reading, todayPillarOf(DATE)),
    outlook: natalOutlook(reading, PEOPLE[0]!.gender),
    yearPillar: yearPillarOf(DATE),
    kind: "premium",
    locale: "ko",
    dictionary: getDictionary("ko"),
  });
  const tampered = { ...base, personality: `${base.personality} (손댄 자리)` };
  check(
    "허용목록 밖이 달라지면 잡는다",
    JSON.stringify(withoutMutable(base, MUTABLE_FIELDS)) !==
      JSON.stringify(withoutMutable(tampered, MUTABLE_FIELDS)),
  );
  // 반대로 허용목록 안은 달라도 통과해야 한다 — 그러라고 만든 목록이다.
  const differentSummary = { ...base, summary: "다른 첫인상 문단입니다." };
  check(
    "허용목록 안은 달라도 통과한다",
    JSON.stringify(withoutMutable(base, MUTABLE_FIELDS)) ===
      JSON.stringify(withoutMutable(differentSummary, MUTABLE_FIELDS)),
  );
  // 입력이 바뀌면 뼈대도 바뀌어야 한다. 늘 같은 값을 내는 엔진이면 위의 검사가 전부 무의미하다.
  const otherReading = toReading(
    prepare({ ...PEOPLE[1]!, calendarType: "solar", birthplace: SEOUL }),
  );
  const otherNarrative = buildNarrative({
    reading: otherReading,
    today: todayFortune(otherReading, todayPillarOf(DATE)),
    outlook: natalOutlook(otherReading, PEOPLE[1]!.gender),
    yearPillar: yearPillarOf(DATE),
    kind: "premium",
    locale: "ko",
    dictionary: getDictionary("ko"),
  });
  check(
    "다른 사주는 다른 뼈대를 낸다",
    JSON.stringify(withoutMutable(base, MUTABLE_FIELDS)) !==
      JSON.stringify(withoutMutable(otherNarrative, MUTABLE_FIELDS)),
  );

  // ── 지면 상한 ──────────────────────────────────────────────────────────────
  //
  // 상한(`LIMITS`)은 모델 응답을 자르려고 만든 것이었다. 그런데 본문 대부분을 엔진이 쓰게 되면서
  // 지면을 실제로 채우는 것은 **23로케일의 사전 문안**이 되었고, 그쪽은 잘라 낼 수 없다 —
  // 문장 중간이 잘린 문서를 팔 수는 없다. 그러니 상한은 사전이 지켜야 할 선이고, 그 선을
  // 넘었는지는 사람이 아니라 여기서 센다. 넘으면 문안을 줄이거나 상한을 올리고 장수를 다시 잰다.
  console.log("\n== 지면 상한 — 엔진이 쓴 글도 상한 안이어야 한다");
  const { LIMITS } = await import("../src/lib/saju-interpretation");

  type Measured = { field: string; limit: number; length: number; where: string };
  function measure(narrative: Awaited<ReturnType<typeof buildNarrative>>, where: string): Measured[] {
    const out: Measured[] = [
      { field: "personality", limit: LIMITS.personality, length: narrative.personality.length, where },
      { field: "element_balance", limit: LIMITS.element_balance, length: narrative.element_balance.length, where },
      { field: "todayHeadline", limit: LIMITS.todayHeadline, length: narrative.today.headline.length, where },
      { field: "todayMessage", limit: LIMITS.todayMessage, length: narrative.today.message.length, where },
      { field: "todayAdvice", limit: LIMITS.todayAdvice, length: narrative.today.advice.length, where },
      { field: "luckyNote", limit: LIMITS.luckyNote, length: narrative.today.lucky_note.length, where },
      { field: "yongsin", limit: LIMITS.yongsin, length: narrative.yongsin.length, where },
      { field: "disclaimer", limit: LIMITS.disclaimer, length: narrative.disclaimer.length, where },
      // 줄 단위 목록은 개수와 길이를 함께 본다. 넘치는 방식이 둘이다.
      { field: "strengths(개수)", limit: LIMITS.lineCount, length: narrative.strengths.length, where },
      { field: "cautions(개수)", limit: LIMITS.lineCount, length: narrative.cautions.length, where },
      { field: "ten_gods(개수)", limit: LIMITS.tenGodCount, length: narrative.ten_gods.length, where },
    ];
    for (const line of [...narrative.strengths, ...narrative.cautions]) {
      out.push({ field: "line", limit: LIMITS.line, length: line.length, where });
    }
    for (const line of narrative.ten_gods) {
      out.push({ field: "tenGodLine", limit: LIMITS.tenGodLine, length: line.length, where });
    }
    for (const [key, value] of Object.entries(narrative.domains)) {
      out.push({ field: `domain(${key})`, limit: LIMITS.domain, length: value.length, where });
    }
    if (narrative.year_outlook) {
      out.push({ field: "yearOutlook", limit: LIMITS.yearOutlook, length: narrative.year_outlook.length, where });
    }
    return out;
  }

  const measured: Measured[] = [];
  for (const spec of PEOPLE) {
    const person = toReading(prepare({ ...spec, calendarType: "solar", birthplace: SEOUL }));
    const outlook = natalOutlook(person, spec.gender);
    for (const locale of translatedLocales) {
      for (const kind of kinds) {
        measured.push(
          ...measure(
            buildNarrative({
              reading: person,
              today: todayFortune(person, todayPillarOf(DATE)),
              outlook,
              yearPillar: yearPillarOf(DATE),
              kind,
              locale,
              dictionary: getDictionary(locale),
            }),
            `${spec.label}/${locale}/${kind}`,
          ),
        );
      }
    }
  }

  const over = measured.filter((item) => item.length > item.limit);
  for (const item of over.slice(0, 12)) {
    check(`${item.field} ${item.where}`, false, `${item.length} > 상한 ${item.limit}`);
  }
  if (over.length > 12) {
    console.log(`      … 그 밖 ${over.length - 12}건`);
    failures += over.length - 12;
  }
  check(`상한 안 (${measured.length}건 측정)`, over.length === 0);

  // **가장 빠듯한 자리를 찍어 둔다.** 통과했다고 안심할 자리가 아니다 — 어느 필드가 상한에
  // 얼마나 가까운지 보이지 않으면, 문안을 한 문장 늘렸을 때 무엇이 먼저 깨질지 알 수 없다.
  const tightest = new Map<string, Measured>();
  for (const item of measured) {
    const previous = tightest.get(item.field);
    if (!previous || item.length / item.limit > previous.length / previous.limit) {
      tightest.set(item.field, item);
    }
  }
  const ranked = [...tightest.values()].sort((a, b) => b.length / b.limit - a.length / a.limit);
  for (const item of ranked.slice(0, 5)) {
    console.log(
      `      여유 ${Math.round((1 - item.length / item.limit) * 100)}%  ${item.field} ${item.length}/${item.limit} (${item.where})`,
    );
  }

  // 대조군 — 상한을 넘긴 값을 넣어 실제로 걸리는지 본다.
  check(
    "상한을 넘으면 잡는다",
    measure(
      { ...base, yongsin: "가".repeat(LIMITS.yongsin + 1) },
      "대조군",
    ).some((item) => item.length > item.limit),
  );

  console.log(failures === 0 ? "\nALL PASS" : `\n${failures}건 실패`);
  if (failures > 0) process.exitCode = 1;
}

void main();
