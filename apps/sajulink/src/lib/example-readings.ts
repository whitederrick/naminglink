import { BRANCH_HIDDEN_STEMS } from "@naminglink/core/saju/elements";

import { prepare, toReading } from "@/lib/engines/prepare";
import { getDictionary, type Locale } from "@/lib/i18n";
import { pillarReading } from "@/lib/pillar-display";
import { publicReading, type PublicPersonReading } from "@/lib/public-outcome";

/**
 * 안내 「예시로 읽는 사주」(`/guide/examples`)가 싣는 가상의 사주 셋.
 *
 * ## 왜 있는가
 *
 * 이 서비스의 풀이는 생년월일을 넣어야만 나오고 입력은 저장하지 않으므로, **크롤러가 볼 수 있는
 * 화면에는 풀이 결과가 한 장도 없었다.** 입력 폼과 설명 문서뿐이라 서비스의 핵심이 검색·심사에
 * 보이지 않았다(2026-10-23, 애드센스 「가치가 별로 없는 콘텐츠」 재거절 뒤 운영 HTML 을 구글
 * 크롤러 UA 로 받아 확인). 그 자리를 **실제 엔진 출력**으로 채운다.
 *
 * ## 지어낸 풀이가 아니다
 *
 * 값은 전부 `prepare`·`toReading` 이 낸다 — 사용자가 결과 화면에서 보는 것과 같은 계산이다.
 * 그리고 **무료 몫(`publicReading`)만** 쓴다. 신강·신약·용신·왕상휴수사는 유료 리포트의 내용이라
 * 예시에도 싣지 않는다(`public-outcome.ts` 의 허용목록이 그 경계다).
 *
 * ## 생년월일은 가상이다
 *
 * 실존 인물이 아니다. 고른 기준은 **서로 다른 유형이 하나씩 되도록**이다.
 *
 *     A  일간(木)과 가장 강한 기운(金)이 다르고, 계절 기운은 가장 강한 기운과 같다
 *     B  일간(土)·가장 강한 기운(金)·계절 기운(木)이 모두 다르고, 水가 거의 없다
 *     C  일간(火)·가장 강한 기운(火)·계절 기운(火)이 모두 같아 한쪽으로 쏠린다
 *
 * 글이 이 관계를 문장으로 말하므로, 날짜를 바꾸면 글이 거짓이 된다 —
 * `scripts/verify-example-readings.ts` 가 그 관계를 대조한다.
 */

export type ExampleKey = "A" | "B" | "C";

export const EXAMPLE_KEYS: ExampleKey[] = ["A", "B", "C"];

type ExampleInput = {
  year: number;
  month: number;
  day: number;
  hour: number;
};

/** 출생지는 넣지 않는다 — 안내는 지역 보정을 다루지 않고, 엔진은 서울 기준으로 계산한다. */
export const EXAMPLE_INPUTS: Record<ExampleKey, ExampleInput> = {
  A: { year: 1988, month: 9, day: 17, hour: 11 },
  B: { year: 1969, month: 4, day: 4, hour: 13 },
  C: { year: 1990, month: 7, day: 21, hour: 14 },
};

/** 같은 입력이면 언제나 같은 값이라 프로세스 안에서 한 번만 계산한다. */
const cache = new Map<ExampleKey, PublicPersonReading>();

export function exampleReading(key: ExampleKey): PublicPersonReading {
  const cached = cache.get(key);
  if (cached) return cached;

  const input = EXAMPLE_INPUTS[key];
  const reading = publicReading(
    toReading(
      prepare({
        gender: null,
        calendarType: "solar",
        year: input.year,
        month: input.month,
        day: input.day,
        birthHour: input.hour,
        birthMinute: 0,
      }),
    ),
  );
  cache.set(key, reading);
  return reading;
}

/** 오행 세력을 합 100 으로 본 비율. 결과 화면 막대와 같은 눈금이다(`SajuResultView`). */
export function elementPercents(reading: PublicPersonReading): Record<string, number> {
  const total = Object.values(reading.elements).reduce((sum, value) => sum + value, 0) || 1;
  const out: Record<string, number> = {};
  for (const [element, value] of Object.entries(reading.elements)) {
    out[element] = Math.round((value / total) * 100);
  }
  return out;
}

const pad = (value: number) => String(value).padStart(2, "0");

/**
 * 문서 자리표시자(`{exAYear}` …)에 넣을 값. 자리표시자는 영문자만 허용돼 키는 `ex<A|B|C><Name>` 이다.
 *
 * 이름·성향·오행·띠는 **그 로케일의 화면 사전에서** 가져온다 — 결과 화면과 같은 낱말이 나와야
 * 이용자가 예시와 자기 결과를 같은 말로 읽는다.
 */
export function exampleValues(locale: Locale): Record<string, string> {
  const dictionary = getDictionary(locale);
  const values: Record<string, string> = {};

  for (const key of EXAMPLE_KEYS) {
    const input = EXAMPLE_INPUTS[key];
    const reading = exampleReading(key);
    const percents = elementPercents(reading);
    const stemName = dictionary.dayMasters[reading.dayMaster.character];
    const dayPillar = reading.pillars.day;
    const dayBranch = dayPillar.hanja.slice(1);
    const hidden = BRANCH_HIDDEN_STEMS[dayBranch as keyof typeof BRANCH_HIDDEN_STEMS] ?? [];

    // 사전에 일간이 없으면 값을 넣지 않는다 — `DocBody` 가 그 문단을 통째로 뺀다. 한자만 덜렁
    // 나가는 것보다 문단이 빠지는 편이 낫다(`doc-values.ts` 머리말).
    if (!stemName) continue;

    const label = (pillar: { hangul: string; hanja: string } | null) =>
      pillar ? `${pillar.hanja} (${pillarReading(pillar.hangul, locale)})` : "";

    values[`ex${key}Birth`] =
      `${input.year}-${pad(input.month)}-${pad(input.day)} ${pad(input.hour)}:00`;
    values[`ex${key}Year`] = label(reading.pillars.year);
    values[`ex${key}Month`] = label(reading.pillars.month);
    values[`ex${key}Day`] = label(dayPillar);
    values[`ex${key}Hour`] = label(reading.pillars.hour);
    values[`ex${key}DayMaster`] = stemName.name;
    values[`ex${key}Trait`] = stemName.trait;
    values[`ex${key}DayElement`] = dictionary.elements[reading.dayMaster.element];
    values[`ex${key}Strongest`] = dictionary.elements[reading.strongestElement];
    values[`ex${key}StrongestPct`] = `${percents[reading.strongestElement]}%`;
    values[`ex${key}Scarcest`] = dictionary.elements[reading.scarcestElement];
    values[`ex${key}ScarcestPct`] = `${percents[reading.scarcestElement]}%`;
    values[`ex${key}Season`] = dictionary.elements[reading.seasonElement];
    values[`ex${key}Animal`] = dictionary.animals[reading.animal] ?? reading.animal;
    values[`ex${key}YearBranch`] = reading.pillars.year.hanja.slice(1);
    values[`ex${key}DayBranch`] = dayBranch;
    values[`ex${key}HiddenStems`] = hidden.map(([stem]) => stem).join(" · ");
  }

  return values;
}
