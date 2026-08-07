import { lunarToSolar, solarToLunar } from "@fullstackfamily/manseryeok";

import { calculateSajuAtDate } from "./calendar";

/**
 * 간지의 로마자 표기. **한글 독음을 읽을 수 없는 이용자를 위한 것**이고, 한자는 그대로 둔다.
 * 여기서 다시 export 하는 것은 앱들이 `@naminglink/core/saju` 하나만 보기 때문이다.
 */
export { romanizePillar } from "./calendar";
import { resolveTrueSolarTime, type Birthplace } from "./timezone";

export const SAJU_ENGINE = {
  name: "@fullstackfamily/manseryeok",
  version: "1.0.8",
  algorithmVersion: "naminglink-saju-v2",
  referenceVersionKey: "manseryeok-js-1.0.8-kasi-pending",
  supportedYearFrom: 1900,
  supportedYearTo: 2050,
} as const;

/**
 * 출생지를 넘기지 않았을 때 쓰는 기준점. 한국 표준시간대 + 서울 경도다.
 *
 * v2부터 라이브러리의 자체 시간 보정(`applyTimeCorrection`)은 **쓰지 않는다.** 그 보정에는
 * 결함이 셋 있고, 셋 다 시주(時柱)를 한 칸 어긋나게 한다.
 *
 *  1. 표준 자오선을 135°로 하드코딩해 **서머타임과 과거 표준시를 통째로 놓친다.**
 *     한국은 1948~51·1955~60·1987~88년에 서머타임을 시행했고 1954~61년에는 UTC+8:30,
 *     1912년 이전에는 표준시 자체가 없었다(지방 평시). 이 구간 출생자가 전부 어긋난다.
 *  2. 보정 후 시각이 전날로 넘어가도 **날짜를 되돌리지 않는다.** 라이브러리는 `calcHour`가
 *     음수면 `+24`만 하고 일주는 입력 날짜로 계산한다. 서울 기준 보정은 -32분이므로
 *     00:00~00:32 출생자는 "전날 23:2x"라는 시각으로 **당일** 일주를 쓰게 된다.
 *  3. 보정량을 **분 단위로 반올림한다**(`Math.round(32.088) = 32`). 두 시간 경계 직전
 *     1분(01:32 등)에서 반올림이 시각을 경계 너머로 밀어 시주가 한 칸 올라간다.
 *
 * 셋 다 `./timezone`의 IANA 기반 변환에는 없다. 그래서 출생지를 받지 않은 경우에도 같은
 * 경로를 태우고, 넘어온 `timeZone`/`longitude`를 그 경로의 기준점으로 쓴다.
 * 무엇이 어떻게 달라지는지는 `scripts/verify-korea-time.ts`가 전부 나열한다.
 */
const DEFAULT_TIME_ZONE = "Asia/Seoul";
const DEFAULT_LONGITUDE = 126.978;

export type FiveElement = "WOOD" | "FIRE" | "EARTH" | "METAL" | "WATER";

export type PremiumSajuInput = {
  calendarType: "solar" | "lunar";
  year: number;
  month: number;
  day: number;
  lunarLeapMonth?: boolean;
  birthHour: number | null;
  birthMinute: number | null;
  longitude?: number;
  birthplaceLabel?: string;
  /** IANA 표준시간대. 생략하면 `Asia/Seoul`. */
  timeZone?: string;
  /**
   * 출생지를 한 덩어리로 넘기고 싶을 때 쓴다. `timeZone`/`longitude`를 각각 넘기는 것과
   * 결과가 같고, 이쪽이 우선한다.
   *
   * 생략해도 시주는 `DEFAULT_TIME_ZONE`/`DEFAULT_LONGITUDE` 기준 진태양시로 계산한다 —
   * v1처럼 라이브러리 보정으로 되돌아가지 않는다.
   */
  birthplace?: Birthplace;
};

const elementLabels: Record<FiveElement, string> = {
  WOOD: "목",
  FIRE: "화",
  EARTH: "토",
  METAL: "금",
  WATER: "수",
};

const pillarCharacterElements: Record<string, FiveElement> = {
  甲: "WOOD",
  乙: "WOOD",
  寅: "WOOD",
  卯: "WOOD",
  丙: "FIRE",
  丁: "FIRE",
  巳: "FIRE",
  午: "FIRE",
  戊: "EARTH",
  己: "EARTH",
  辰: "EARTH",
  戌: "EARTH",
  丑: "EARTH",
  未: "EARTH",
  庚: "METAL",
  辛: "METAL",
  申: "METAL",
  酉: "METAL",
  壬: "WATER",
  癸: "WATER",
  亥: "WATER",
  子: "WATER",
};

function assertIntegerInRange(
  value: number,
  minimum: number,
  maximum: number,
  label: string,
) {
  if (!Number.isInteger(value) || value < minimum || value > maximum) {
    throw new RangeError(`${label} 값이 지원 범위를 벗어났습니다.`);
  }
}

function assertValidSolarDate(year: number, month: number, day: number) {
  const date = new Date(Date.UTC(year, month - 1, day));
  if (
    date.getUTCFullYear() !== year ||
    date.getUTCMonth() !== month - 1 ||
    date.getUTCDate() !== day
  ) {
    throw new RangeError("유효한 출생일을 입력해 주세요.");
  }
}

/**
 * 양력 → 음력. 라이브러리 표에 없는 날이면 `null`.
 *
 * 1900~2050년 55,152일 중 1956-12-31 하루가 표에서 빠져 있다
 * (`scripts/verify-calendar-gaps.ts`). 음력 표기는 참고 정보라 없어도 사주 계산은 진행한다 —
 * 이웃 날에서 지어낸 음력 날짜를 보여 주는 쪽이 더 나쁘다.
 */
function safeSolarToLunar(date: { year: number; month: number; day: number }) {
  try {
    return solarToLunar(date.year, date.month, date.day).lunar;
  } catch {
    return null;
  }
}

export function validatePremiumBirthDate(
  input: Pick<
    PremiumSajuInput,
    "calendarType" | "year" | "month" | "day" | "lunarLeapMonth"
  >,
) {
  assertIntegerInRange(
    input.year,
    SAJU_ENGINE.supportedYearFrom,
    SAJU_ENGINE.supportedYearTo,
    "출생 연도",
  );
  assertIntegerInRange(input.month, 1, 12, "출생 월");
  assertIntegerInRange(
    input.day,
    1,
    input.calendarType === "lunar" ? 30 : 31,
    "출생 일",
  );

  if (input.calendarType !== "lunar") {
    const solarDate = { year: input.year, month: input.month, day: input.day };
    assertValidSolarDate(solarDate.year, solarDate.month, solarDate.day);
    return solarDate;
  }

  const leap = input.lunarLeapMonth ?? false;
  let solarDate: { year: number; month: number; day: number };
  try {
    solarDate = lunarToSolar(input.year, input.month, input.day, leap).solar;
  } catch {
    throw new RangeError(
      "입력한 음력 출생일이 실제 달력에 존재하지 않습니다. 날짜와 윤달 여부를 확인해 주세요.",
    );
  }

  // 되돌려 변환해 입력과 맞는지 확인한다. 다만 라이브러리 표에 빠진 날(1956-12-31)로 떨어지면
  // 이 조회 자체가 던진다 — 그건 입력이 틀렸다는 뜻이 아니므로 확인을 건너뛴다.
  // `./calendar`가 사주는 이웃 날에서 메워 계산한다.
  const lunarEcho = safeSolarToLunar(solarDate);
  if (
    lunarEcho &&
    (lunarEcho.year !== input.year ||
      lunarEcho.month !== input.month ||
      lunarEcho.day !== input.day ||
      lunarEcho.isLeapMonth !== leap)
  ) {
    throw new RangeError(
      "음력-양력 변환 결과가 입력한 출생일과 일치하지 않습니다. 날짜를 확인해 주세요.",
    );
  }
  assertValidSolarDate(solarDate.year, solarDate.month, solarDate.day);
  assertIntegerInRange(
    solarDate.year,
    SAJU_ENGINE.supportedYearFrom,
    SAJU_ENGINE.supportedYearTo,
    "출생 연도(양력 변환)",
  );
  return solarDate;
}

function normalizeInput(input: PremiumSajuInput) {
  const solarDate = validatePremiumBirthDate(input);

  if (input.birthHour !== null) {
    assertIntegerInRange(input.birthHour, 0, 23, "출생 시");
    assertIntegerInRange(input.birthMinute ?? 0, 0, 59, "출생 분");
  } else if (input.birthMinute !== null) {
    throw new RangeError("출생 시를 모르는 경우 출생 분도 입력하지 않아야 합니다.");
  }

  return { solarDate, lunarDate: safeSolarToLunar(solarDate) };
}

function countVisibleElements(pillars: Array<string | null>) {
  const counts: Record<FiveElement, number> = {
    WOOD: 0,
    FIRE: 0,
    EARTH: 0,
    METAL: 0,
    WATER: 0,
  };

  pillars
    .filter((pillar): pillar is string => Boolean(pillar))
    .flatMap((pillar) => Array.from(pillar))
    .forEach((character) => {
      const element = pillarCharacterElements[character];
      if (element) counts[element] += 1;
    });

  const minimum = Math.min(...Object.values(counts));
  const observedLowestElements = (Object.keys(counts) as FiveElement[]).filter(
    (element) => counts[element] === minimum,
  );

  return {
    counts,
    labels: Object.fromEntries(
      (Object.keys(counts) as FiveElement[]).map((element) => [
        element,
        elementLabels[element],
      ]),
    ) as Record<FiveElement, string>,
    observedLowestElements,
  };
}

export function calculatePremiumSaju(input: PremiumSajuInput) {
  const { solarDate, lunarDate } = normalizeInput(input);
  const hasBirthTime = input.birthHour !== null;
  const longitude =
    input.birthplace?.longitude ?? input.longitude ?? DEFAULT_LONGITUDE;
  const timeZone =
    input.birthplace?.timeZone ?? input.timeZone ?? DEFAULT_TIME_ZONE;

  // 벽시계 시각을 출생지의 진태양시로 직접 바꾼 뒤 라이브러리 보정은 끈다. 라이브러리 보정은
  // 표준 자오선이 135°로 고정돼 있어 서머타임·과거 표준시를 놓치고, 자정을 넘겨도 날짜를
  // 되돌리지 않는다(위 DEFAULT_TIME_ZONE 주석 참고).
  const trueSolar = hasBirthTime
    ? resolveTrueSolarTime(
        solarDate,
        { hour: input.birthHour as number, minute: input.birthMinute ?? 0 },
        { timeZone, longitude },
      )
    : null;

  const saju = trueSolar
    ? calculateSajuAtDate(
        trueSolar.year,
        trueSolar.month,
        trueSolar.day,
        trueSolar.hour,
        trueSolar.minute,
      )
    : calculateSajuAtDate(solarDate.year, solarDate.month, solarDate.day);
  const visibleElements = countVisibleElements([
    saju.year.hanja,
    saju.month.hanja,
    saju.day.hanja,
    saju.hour?.hanja ?? null,
  ]);
  const dayMasterCharacter = Array.from(saju.day.hanja)[0];
  const dayMasterElement = pillarCharacterElements[dayMasterCharacter];

  return {
    engine: SAJU_ENGINE,
    calculationStatus: hasBirthTime ? "COMPLETE" : "PARTIAL_NO_TIME",
    input: {
      calendarType: input.calendarType,
      originalDate: {
        year: input.year,
        month: input.month,
        day: input.day,
        lunarLeapMonth:
          input.calendarType === "lunar"
            ? (input.lunarLeapMonth ?? false)
            : undefined,
      },
      birthTime: hasBirthTime
        ? { hour: input.birthHour, minute: input.birthMinute ?? 0 }
        : null,
      birthplaceLabel: input.birthplaceLabel ?? "대한민국 표준 위치",
      longitude,
      timeZone,
    },
    convertedDate: {
      solar: solarDate,
      // 라이브러리 표에 빠진 날이면 null이다(`safeSolarToLunar` 참고).
      lunar: lunarDate,
    },
    pillars: {
      year: saju.year,
      month: saju.month,
      day: saju.day,
      hour: saju.hour,
    },
    /** 사주를 이웃 날에서 계산해 메웠는가(`./calendar`). 표시용이 아니라 추적용이다. */
    calendarGapFilled: saju.gapFilled,
    timeCorrection: {
      // 보정은 라이브러리가 아니라 이 모듈이 하므로 직접 표시한다.
      applied: Boolean(trueSolar),
      correctedTime: trueSolar
        ? { hour: trueSolar.hour, minute: trueSolar.minute }
        : null,
      /**
       * 보정으로 날짜가 넘어간 경우에만 채운다. 서울 기준 보정은 -32분이라 00:00~00:32
       * 출생자는 전날로 넘어가고, 그 전날 일주로 사주가 잡힌다. `convertedDate.solar`
       * (사용자가 입력한 날짜)와 다르므로 화면에서 설명이 필요할 때 이 값을 쓴다.
       */
      correctedDate:
        trueSolar &&
        (trueSolar.year !== solarDate.year ||
          trueSolar.month !== solarDate.month ||
          trueSolar.day !== solarDate.day)
          ? { year: trueSolar.year, month: trueSolar.month, day: trueSolar.day }
          : null,
      method: trueSolar
        ? ("TRUE_SOLAR_AT_BIRTHPLACE" as const)
        : ("NONE" as const),
    },
    dayMaster: {
      character: dayMasterCharacter,
      element: dayMasterElement,
      elementLabel: elementLabels[dayMasterElement],
    },
    visibleFiveElements: visibleElements,
    interpretationPolicy: {
      wording:
        "전통 명리 관점의 참고 분석이며 과학적 예측이나 운명에 대한 단정이 아닙니다.",
      namingUse:
        "표면 오행 개수만으로 특정 오행을 반드시 보완한다고 단정하지 않고, 절기·월령과 검수된 해석 규칙을 함께 확인한 뒤 이름 후보의 참고 근거로만 사용합니다.",
      officialHanja:
        "후보 한자는 공식 자료 기준으로 필터링하되, 최종 출생신고 가능 여부는 신고 시점의 대법원 인명용 한자 조회에서 다시 확인해야 합니다.",
      incompleteTime:
        hasBirthTime
          ? null
          : "출생 시각이 없어 시주와 시간 보정은 계산에서 제외했습니다.",
    },
  };
}
