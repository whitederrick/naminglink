import {
  calculateSaju,
  lunarToSolar,
  solarToLunar,
} from "@fullstackfamily/manseryeok";

export const SAJU_ENGINE = {
  name: "@fullstackfamily/manseryeok",
  version: "1.0.8",
  algorithmVersion: "naminglink-saju-v1",
  referenceVersionKey: "manseryeok-js-1.0.8-kasi-pending",
  supportedYearFrom: 1900,
  supportedYearTo: 2050,
} as const;

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
  timeZone?: "Asia/Seoul";
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

function normalizeInput(input: PremiumSajuInput) {
  assertIntegerInRange(
    input.year,
    SAJU_ENGINE.supportedYearFrom,
    SAJU_ENGINE.supportedYearTo,
    "출생 연도",
  );
  assertIntegerInRange(input.month, 1, 12, "출생 월");
  assertIntegerInRange(input.day, 1, 31, "출생 일");

  if (input.birthHour !== null) {
    assertIntegerInRange(input.birthHour, 0, 23, "출생 시");
    assertIntegerInRange(input.birthMinute ?? 0, 0, 59, "출생 분");
  } else if (input.birthMinute !== null) {
    throw new RangeError("출생 시를 모르는 경우 출생 분도 입력하지 않아야 합니다.");
  }

  const solarDate =
    input.calendarType === "lunar"
      ? lunarToSolar(
          input.year,
          input.month,
          input.day,
          input.lunarLeapMonth ?? false,
        ).solar
      : { year: input.year, month: input.month, day: input.day };

  assertValidSolarDate(solarDate.year, solarDate.month, solarDate.day);

  return {
    solarDate,
    lunarDate: solarToLunar(
      solarDate.year,
      solarDate.month,
      solarDate.day,
    ).lunar,
  };
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
  const longitude = input.longitude ?? 126.978;
  const saju = hasBirthTime
    ? calculateSaju(
        solarDate.year,
        solarDate.month,
        solarDate.day,
        input.birthHour ?? undefined,
        input.birthMinute ?? 0,
        { longitude, applyTimeCorrection: true },
      )
    : calculateSaju(solarDate.year, solarDate.month, solarDate.day);
  const visibleElements = countVisibleElements([
    saju.yearPillarHanja,
    saju.monthPillarHanja,
    saju.dayPillarHanja,
    saju.hourPillarHanja,
  ]);
  const dayMasterCharacter = Array.from(saju.dayPillarHanja)[0];
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
      timeZone: input.timeZone ?? "Asia/Seoul",
    },
    convertedDate: {
      solar: solarDate,
      lunar: lunarDate,
    },
    pillars: {
      year: { hangul: saju.yearPillar, hanja: saju.yearPillarHanja },
      month: { hangul: saju.monthPillar, hanja: saju.monthPillarHanja },
      day: { hangul: saju.dayPillar, hanja: saju.dayPillarHanja },
      hour: saju.hourPillar
        ? { hangul: saju.hourPillar, hanja: saju.hourPillarHanja }
        : null,
    },
    timeCorrection: {
      applied: saju.isTimeCorrected,
      correctedTime: saju.correctedTime ?? null,
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
