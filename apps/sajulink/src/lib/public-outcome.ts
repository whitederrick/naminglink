import type { PersonReading } from "@/lib/engines";
import type { TodayFortune } from "@/lib/engines/today-fortune";

/**
 * 무료 API가 화면으로 내보내는 몫만 남긴다.
 *
 * **왜 필요한가.** 이 서비스가 파는 것은 PDF 하나뿐이고, 그 PDF의 값어치는 오로지 "화면에 없는
 * 것이 여기 있다"에서 나온다. 그런데 `/api/saju`가 엔진 결과를 통째로
 * 돌려주고 있어, 파는 내용이 결제 없이 브라우저까지 그대로 갔다. 화면이 그리지 않을 뿐이라
 * 개발자도구 Network 탭 하나면 보였다. 상품이 있는데 값을 청구할 근거가 없는 상태였다.
 *
 * **허용목록으로 만든다.** 빼야 할 것을 지우는 방식(`delete`)이면, 나중에 엔진에 유료 필드가
 * 하나 늘 때 아무도 여기를 고치지 않고 그대로 새어 나간다. 남길 것을 적는 방식이라야 새 필드가
 * 기본으로 막힌다. 목록이 어긋나면 `scripts/verify-public-outcome.ts`가 실패한다.
 *
 * **PDF는 영향받지 않는다.** 발급 라우트가 입력으로 엔진을 다시 돌리므로(`api/report/pdf`),
 * 여기서 무엇을 빼든 문서 내용은 그대로다.
 */

/** 결과 화면이 실제로 그리는 한 사람의 풀이. 유료 리포트 전용 값은 담지 않는다. */
export type PublicPersonReading = Pick<
  PersonReading,
  | "label"
  | "pillars"
  | "dayMaster"
  | "animal"
  | "elements"
  | "strongestElement"
  | "scarcestElement"
  | "seasonElement"
  | "bodyStrength"
  | "favorableElements"
>;

/**
 * 화면 몫에서 빠진 필드 목록.
 *
 * **이 상수의 쓸모는 값이 아니라 컴파일이다.** `PersonReading`에 필드가 하나 늘면 여기 없는
 * 키가 생겨 타입이 맞지 않고, 그 순간 빌드가 깨진다 — 새 필드를 무료로 내보낼지 리포트에만
 * 실을지 **누군가 반드시 정하게 된다.** 이번 결함이 바로 "정하지 않아서" 생겼다.
 * (`PublicPersonReading`이 `Pick`이라 목록을 안 고쳐도 타입만으로는 통과한다.)
 */
const PAID_ONLY_READING_KEYS: Record<
  Exclude<keyof PersonReading, keyof PublicPersonReading>,
  true
> = {
  /** 신강·신약을 가른 근거 숫자 */
  allyRatio: true,
  /** 왕상휴수사 */
  vitality: true,
  /** 월령을 곱하기 전 세력 */
  rawElements: true,
  /** 환절기(辰未戌丑) 월 여부 */
  earthSeason: true,
  /** 진태양시 보정 내역 */
  timeCorrection: true,
  /** 양력·음력 대응 */
  convertedDate: true,
};

/** 검사 스크립트가 "정말 빠졌는지" 대조하는 데 쓴다. */
export const PAID_ONLY_READING_FIELDS = Object.keys(PAID_ONLY_READING_KEYS);

/** 빼는 것은 전부 궁합 리포트 4~6장과 부록을 채우는 값이다. */
export function publicReading(reading: PersonReading): PublicPersonReading {
  return {
    label: reading.label,
    pillars: reading.pillars,
    dayMaster: reading.dayMaster,
    animal: reading.animal,
    elements: reading.elements,
    strongestElement: reading.strongestElement,
    scarcestElement: reading.scarcestElement,
    seasonElement: reading.seasonElement,
    bodyStrength: reading.bodyStrength,
    favorableElements: reading.favorableElements,
  };
}

/**
 * 무료 사주 결과. 원국 풀이 + 오늘의 운세.
 *
 * **유료 전용 값은 `publicReading`이 이미 걷어낸다**(신강·신약 근거 숫자·왕상휴수사·진태양시
 * 보정 내역 등). 오늘의 운세는 무료로 전부 준다 — 매일 다시 오게 만드는 것이 이 화면의
 * 존재 이유라, 여기서 아끼면 리텐션을 잃고 얻는 것이 없다.
 */
export type PublicSajuOutcome = {
  reading: PublicPersonReading;
  today: TodayFortune;
};

export function publicSajuOutcome(
  reading: PersonReading,
  today: TodayFortune,
): PublicSajuOutcome {
  return { reading: publicReading(reading), today };
}
