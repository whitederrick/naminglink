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
  /**
   * 강약 판정(신강·중화·신약).
   *
   * **2026-08-05에 옮겼다.** 화면이 그리지도 않으면서 응답에는 실려 나가고 있었다 —
   * 「화면이 안 그린다」는 방어가 아니다(개발자도구 하나면 보인다). 상품 개편에서 강약과
   * 용신을 유료로 정했으므로 응답에서도 빠져야 맞다.
   */
  bodyStrength: true,
  /** 억부용신 — 위와 같다. 아래 `publicSajuOutcome` 주석의 예외 하나를 함께 볼 것. */
  favorableElements: true,
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

/**
 * 남기는 것은 **화면이 실제로 그리는 것뿐이다.**
 *
 * 이 함수의 목록과 `SajuResultView`가 그리는 것이 어긋나면 둘 중 하나가 잘못이다 — 여기 있고
 * 화면에 없으면 새는 것이고, 화면에 있고 여기 없으면 화면이 깨진다.
 */
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
  };
}

/**
 * 무료 사주 결과. 원국 개략 + 오늘의 운세.
 *
 * **유료 전용 값은 `publicReading`이 이미 걷어낸다**(강약 판정·용신·근거 숫자·왕상휴수사·
 * 진태양시 보정 내역 등). 오늘의 운세는 무료로 전부 준다 — 매일 다시 오게 만드는 것이 이
 * 화면의 존재 이유라, 여기서 아끼면 리텐션을 잃고 얻는 것이 없다.
 *
 * ## 겹치는 자리 하나 — 적어 두고 남긴다
 *
 * `today.lucky.element`는 **용신의 첫 오행 그대로다**(`luckyOf(favorable[0] ?? …)`). 그러니
 * 용신을 유료로 옮겨도 그 한 오행은 오늘의 운세를 타고 매일 나간다.
 *
 * 그래도 남기는 이유: 상품 결정이 **오늘의 운세는 무료·화면 전용**이고 행운 요소는 그 화면의
 * 핵심이다. 그리고 파는 것은 오행 이름 하나가 아니라 **강약 판정과 용신 풀이**다 — 어느 쪽이
 * 강한지, 왜 그 기운이 필요한지, 그래서 무엇을 하라는지(`yongsinDepth`)는 여기 없다.
 *
 * **모르고 새는 것과 알고 남기는 것은 다르다.** 검사기(`verify-public-outcome`)가 이 겹침을
 * 이름으로 확인한다 — 나중에 행운 요소의 출처를 바꾸면 그 검사가 먼저 말해 준다.
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
