import { z } from "zod";

import { findBirthplace } from "@/lib/birthplaces";
import type { Person } from "@/lib/engines";

// 입력 데이터는 어디에도 저장하지 않는다(사용자 방침). 그래서 다음 두 가지를 지킨다.
//
// 1. 생년월일은 **쿼리스트링에 넣지 않는다.** Vercel 접속 로그에 URL이 그대로 남기 때문이다.
//    계산 요청은 POST 본문으로 보낸다(본문은 로그에 남지 않는다).
// 2. 공유·새로고침용 링크는 **URL 프래그먼트(#)**에 담는다. 프래그먼트는 브라우저가 서버로
//    전송하지 않으므로 링크를 열어도 서버 로그에는 경로만 남는다.
//
// 결과적으로 서버는 요청을 처리하는 순간에만 값을 메모리에서 보고, 응답 뒤에는 아무것도
// 남기지 않는다.

const CURRENT_YEAR = new Date().getFullYear();

/**
 * 입력 가능한 출생 연도. 화면과 스키마가 **같은 값**을 써야 한다.
 *
 * 예전에는 입력 칸이 2050까지 받고 스키마는 올해까지만 받아서, 미래 연도를 넣으면 폼은
 * 통과하고 결과 화면이 프래그먼트를 디코드하지 못해 "결과 정보를 읽을 수 없습니다"가 떴다.
 * 상한(2050)은 만세력 라이브러리의 지원 범위이고, 아직 태어나지 않은 사람의 사주는 볼 수
 * 없으므로 올해가 실질적인 상한이다.
 */
export const MIN_BIRTH_YEAR = 1900;
export const MAX_BIRTH_YEAR = Math.min(2050, CURRENT_YEAR);

export const personSchema = z.object({
  // 표시용 별칭. 실명을 요구하지 않는다 — 사주 계산에 쓰이지 않는 값이라 받을 이유가 없다.
  label: z.string().trim().max(24).optional(),
  // 배우자성(남=재성, 여=관성) 판정에 쓴다. 밝히지 않으면 그 항목을 빼고 계산한다.
  gender: z.enum(["male", "female"]).nullable().default(null),
  // 출생지 코드. 시주를 그 지역 진태양시로 계산하는 데 쓴다.
  birthplaceCode: z.string().max(32).optional(),
  calendarType: z.enum(["solar", "lunar"]),
  year: z.number().int().min(MIN_BIRTH_YEAR).max(MAX_BIRTH_YEAR),
  month: z.number().int().min(1).max(12),
  day: z.number().int().min(1).max(31),
  lunarLeapMonth: z.boolean().optional(),
  birthHour: z.number().int().min(0).max(23).nullable(),
  birthMinute: z.number().int().min(0).max(59).nullable(),
});

/**
 * 사주는 **한 사람**만 받는다. 궁합의 `{a, b}`에서 사람 하나만 남긴 꼴이다.
 *
 * 객체로 감싼 채로 두는 이유: 나중에 "오늘의 운세"처럼 기준 날짜 같은 항목이 붙어도
 * 프래그먼트 형식이 바뀌지 않는다. 값 하나를 그대로 실으면 그때 옛 링크가 전부 깨진다.
 */
export const sajuInputSchema = z.object({
  me: personSchema,
});

export type SajuInput = z.infer<typeof sajuInputSchema>;

export function toPerson(value: z.infer<typeof personSchema>): Person {
  // 목록에 없는 코드가 오면 출생지를 넘기지 않는다. 그러면 엔진이 서울(Asia/Seoul, 126.978°)
  // 기준 진태양시로 계산하므로 해외 출생이면 값이 틀리는 대신 조용히 넘어가는데, 코드는 화면이
  // 고른 값이라 실제로는 없다.
  const place = value.birthplaceCode ? findBirthplace(value.birthplaceCode) : null;

  return {
    label: value.label,
    gender: value.gender,
    calendarType: value.calendarType,
    year: value.year,
    month: value.month,
    day: value.day,
    lunarLeapMonth: value.lunarLeapMonth,
    birthHour: value.birthHour,
    birthMinute: value.birthHour === null ? null : (value.birthMinute ?? 0),
    birthplace: place
      ? { timeZone: place.timeZone, longitude: place.longitude }
      : undefined,
  };
}

/**
 * 프래그먼트에 실을 문자열로 만든다. 암호화가 아니라 URL 안전 인코딩일 뿐이다.
 *
 * 서비스마다 담는 값은 다르지만 **담는 방식은 같아야 한다.** 한쪽만 인코딩을 바꾸면
 * 화면끼리 서로의 링크를 못 읽게 되고, 그 어긋남은 사용자에게 "결과를 읽을 수 없습니다"로만
 * 보인다. 그래서 인코딩은 이 두 함수 하나뿐이고 스키마만 갈아 끼운다.
 */
export function encodePayload(value: unknown) {
  const json = JSON.stringify(value);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export function decodePayload<T>(
  value: string,
  schema: { safeParse: (input: unknown) => { success: boolean; data?: T } },
): T | null {
  try {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const binary = atob(normalized);
    const bytes = Uint8Array.from(binary, (character) =>
      character.charCodeAt(0),
    );
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    const result = schema.safeParse(parsed);
    return result.success ? (result.data as T) : null;
  } catch {
    return null;
  }
}

export function encodeSajuInput(input: SajuInput) {
  return encodePayload(input);
}

export function decodeSajuInput(value: string): SajuInput | null {
  return decodePayload(value, sajuInputSchema);
}
