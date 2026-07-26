// 만세력 라이브러리의 날짜 조회를 감싸는 층.
//
// `@fullstackfamily/manseryeok`은 양력 날짜 하나를 표에서 찾아 사주를 돌려주는데, 그 표에
// **빠진 날이 있다.** 1900~2050년 55,152일을 전수 조회하면 1956-12-31 하루가
// `Invalid solar date`로 던진다(`scripts/verify-calendar-gaps.ts`가 이 사실을 검증한다).
//
// 표에 없다고 그날 태어난 사람이 없는 것은 아니다. 인연링크 궁합은 성인의 생년월일을 받으므로
// 그대로 두면 그 사람에게는 서비스 전체가 500으로 죽는다.
//
// 또 진태양시 보정이 자정을 넘겨 전날로 넘어가면 지원 범위(1900~2050)를 한 칸 벗어날 수 있다.
// 1900-01-01 00:10 출생이면 보정 후 1899-12-31이 되는데 표에는 1900년부터만 있다.
//
// 두 경우 모두 **이웃 날에서 계산해 메운다.** 근거:
//
//   - 일주(日柱)는 절기와 무관한 60갑자 순환이라 하루 차이는 한 칸 차이다. 산술로 정확하다.
//   - 년주는 입춘, 월주는 각 절기의 입절일에만 바뀐다. 메워야 하는 날들(12/31, 1/1 언저리)은
//     대설~소한 사이 한복판이라 경계가 걸리지 않으므로 이웃과 같은 년주·월주를 쓴다.
//   - 양쪽 이웃이 모두 있으면 두 이웃의 년·월주가 같은지 확인한 뒤에만 메운다. 다르면
//     경계가 끼어 있다는 뜻이므로 메우지 않고 원래 오류를 그대로 던진다.
//
// 시주는 일간에서 오자시두법으로 나오므로 일주를 옮기면 함께 다시 계산해야 한다.

import { calculateSaju } from "@fullstackfamily/manseryeok";

const STEM_HANGUL = ["갑", "을", "병", "정", "무", "기", "경", "신", "임", "계"];
const STEM_HANJA = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const BRANCH_HANGUL = ["자", "축", "인", "묘", "진", "사", "오", "미", "신", "유", "술", "해"];
const BRANCH_HANJA = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"];

/** 오자시두법 — 일간에 따라 자시(子時)의 천간이 어디서 시작하는가. */
const HOUR_STEM_START: Record<string, number> = {
  갑: 0, 기: 0,
  을: 2, 경: 2,
  병: 4, 신: 4,
  정: 6, 임: 6,
  무: 8, 계: 8,
};

export type Pillar = { hangul: string; hanja: string };

export type SajuPillars = {
  year: Pillar;
  month: Pillar;
  day: Pillar;
  hour: Pillar | null;
  /** 라이브러리 표에 없는 날이라 이웃 날에서 계산해 메웠는가. */
  gapFilled: boolean;
};

function pillarAt(stemIndex: number, branchIndex: number): Pillar {
  const stem = ((stemIndex % 10) + 10) % 10;
  const branch = ((branchIndex % 12) + 12) % 12;
  return {
    hangul: STEM_HANGUL[stem] + BRANCH_HANGUL[branch],
    hanja: STEM_HANJA[stem] + BRANCH_HANJA[branch],
  };
}

/** 60갑자 순환에서 일주를 `offset`칸 옮긴다. */
function shiftDayPillar(dayPillarHangul: string, offset: number): Pillar {
  const stemIndex = STEM_HANGUL.indexOf(dayPillarHangul.charAt(0));
  const branchIndex = BRANCH_HANGUL.indexOf(dayPillarHangul.charAt(1));
  if (stemIndex < 0 || branchIndex < 0) {
    throw new Error(`알 수 없는 일주 표기입니다: ${dayPillarHangul}`);
  }
  return pillarAt(stemIndex + offset, branchIndex + offset);
}

/**
 * 시지(時支)를 정한다. 23시와 0시는 함께 자시로 본다 — 라이브러리와 같은 규칙을 쓴다
 * (조자시 관행. `apps/naminglink/src/lib/birth-hour.ts`의 대표 시 변환과도 맞물린다).
 */
function hourBranchIndex(hour: number) {
  if (hour === 23 || hour === 0) return 0;
  return Math.floor((hour + 1) / 2);
}

function hourPillarFor(dayPillarHangul: string, hour: number): Pillar {
  const branch = hourBranchIndex(hour);
  const start = HOUR_STEM_START[dayPillarHangul.charAt(0)] ?? 0;
  return pillarAt(start + branch, branch);
}

function shiftDate(year: number, month: number, day: number, days: number) {
  const shifted = new Date(Date.UTC(year, month - 1, day + days));
  return {
    year: shifted.getUTCFullYear(),
    month: shifted.getUTCMonth() + 1,
    day: shifted.getUTCDate(),
  };
}

function readTable(year: number, month: number, day: number) {
  // 시각을 넘기지 않으면 라이브러리가 시주를 만들지 않는다. 여기서는 년·월·일주만 필요하다.
  const saju = calculateSaju(year, month, day);
  return {
    year: { hangul: saju.yearPillar, hanja: saju.yearPillarHanja },
    month: { hangul: saju.monthPillar, hanja: saju.monthPillarHanja },
    day: { hangul: saju.dayPillar, hanja: saju.dayPillarHanja },
  };
}

/**
 * 표에 없는 날을 이웃에서 메운다. 메울 수 없으면 `null`.
 *
 * 가까운 쪽부터 ±1, ±2일을 본다. 양쪽이 다 읽히면 두 이웃의 년·월주가 같을 때만 메운다 —
 * 다르면 사이에 절기 경계가 있다는 뜻이라 어느 쪽을 따를지 정할 근거가 없다.
 */
function fillFromNeighbors(year: number, month: number, day: number) {
  for (const distance of [1, 2]) {
    const before = shiftDate(year, month, day, -distance);
    const after = shiftDate(year, month, day, distance);

    let beforeRead: ReturnType<typeof readTable> | null = null;
    let afterRead: ReturnType<typeof readTable> | null = null;
    try {
      beforeRead = readTable(before.year, before.month, before.day);
    } catch {
      beforeRead = null;
    }
    try {
      afterRead = readTable(after.year, after.month, after.day);
    } catch {
      afterRead = null;
    }

    if (beforeRead && afterRead) {
      const sameContext =
        beforeRead.year.hanja === afterRead.year.hanja &&
        beforeRead.month.hanja === afterRead.month.hanja;
      if (!sameContext) return null;
      return {
        year: beforeRead.year,
        month: beforeRead.month,
        day: shiftDayPillar(beforeRead.day.hangul, distance),
      };
    }
    // 한쪽만 읽히는 경우는 지원 범위의 끝(1900-01-01 앞, 2050-12-31 뒤)뿐이다. 그 자리는
    // 대설~소한 사이라 절기 경계가 걸리지 않으므로 읽히는 쪽의 년·월주를 그대로 쓴다.
    if (beforeRead) {
      return {
        year: beforeRead.year,
        month: beforeRead.month,
        day: shiftDayPillar(beforeRead.day.hangul, distance),
      };
    }
    if (afterRead) {
      return {
        year: afterRead.year,
        month: afterRead.month,
        day: shiftDayPillar(afterRead.day.hangul, -distance),
      };
    }
  }
  return null;
}

/**
 * 양력 날짜(+선택적 시각)의 사주를 구한다. 시간 보정은 하지 않는다 — 넘어온 값을 이미 보정된
 * 진태양시로 본다(`./timezone` 참고).
 */
export function calculateSajuAtDate(
  year: number,
  month: number,
  day: number,
  hour?: number,
  minute?: number,
): SajuPillars {
  try {
    const saju =
      hour === undefined
        ? calculateSaju(year, month, day)
        : calculateSaju(year, month, day, hour, minute ?? 0, {
            applyTimeCorrection: false,
          });
    return {
      year: { hangul: saju.yearPillar, hanja: saju.yearPillarHanja },
      month: { hangul: saju.monthPillar, hanja: saju.monthPillarHanja },
      day: { hangul: saju.dayPillar, hanja: saju.dayPillarHanja },
      hour:
        saju.hourPillar && saju.hourPillarHanja
          ? { hangul: saju.hourPillar, hanja: saju.hourPillarHanja }
          : null,
      gapFilled: false,
    };
  } catch (error) {
    const filled = fillFromNeighbors(year, month, day);
    if (!filled) throw error;
    return {
      ...filled,
      hour:
        hour === undefined ? null : hourPillarFor(filled.day.hangul, hour),
      gapFilled: true,
    };
  }
}
