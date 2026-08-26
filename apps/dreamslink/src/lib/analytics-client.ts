"use client";

/**
 * 접속·이용 집계를 서버로 보낸다. **naminglink의 같은 이름 파일과 짝이다.**
 *
 * 두 앱이 한 `site_events` 표를 쓰고 `app` 컬럼으로 갈린다. 그 값은 클라이언트가 정하지 않는다
 * — 서버 라우트(`/api/analytics`)가 박아 넣는다. 브라우저가 보내는 값을 믿으면 남의 서비스
 * 통계에 행을 넣을 수 있다.
 *
 * **입력값(꿈 이야기 원문)은 담지 않는다.** 이 서비스는 생년월일을 저장하지 않는 것이 원칙이고
 * 여기도 같다.
 *
 * **예외 하나— `metadata`(2026-08-26).** 상징 사전이 216개 항목의 **닫힌 목록**이라, 어느
 * `id`가 걸렸는지는 이용자가 쓴 문장이 아니라 "이 216개 중 무엇"이라는 분류값이다. 꿈 내용을
 * 복원할 수 없고, 상징 상세 페이지 주소에도 이미 공개돼 있는 값이다. 이걸 쌓는 이유는 사전의
 * 빈 자리를 감으로 고르지 않기 위해서다 — 어느 상징이 자주 "대표 의미로만 떨어지는지"
 * (`contextMatched: false`)를 실측해서 다음에 채울 문맥의 우선순위를 정한다.
 */

/**
 * 드림링크의 메뉴 구분. **콘솔의 `SERVICE_CONSOLE.dreamslink.serviceTypes`와 같은 값이어야 한다.**
 *
 * 한쪽만 고치면 콘솔의 「메뉴별 활용」 표가 조용히 0으로 나온다 — 이벤트는 쌓이는데 표가 다른
 * 이름을 찾기 때문이다. 사주링크에서 실제로 그랬다(`SAJU_TODAY`를 아무도 보내지 않았다).
 */
export type DreamServiceType = "DREAM_READING";

export type AnalyticsEvent = {
  eventType:
    | "PAGE_VIEW"
    | "ANALYSIS_STARTED"
    | "ANALYSIS_COMPLETED"
    | "ANALYSIS_FAILED";
  path?: string;
  locale?: string;
  serviceType?: DreamServiceType;
  /**
   * 사전 갭 계측용(`ANALYSIS_COMPLETED`에서만 쓴다). naminglink 라우트와 같은 얕은
   * record다 — 값은 문자열·숫자·불리언뿐, 중첩 객체·배열은 못 담는다(서버 스키마가 막는다).
   * 상징 id 목록은 쉼표로 이어 붙인 문자열 하나로 보낸다.
   */
  metadata?: Record<string, string | number | boolean | null>;
};

/** 전송을 기다리는 최대 시간. 넘으면 그냥 넘어간다 — 통계 때문에 이용자를 세워 둘 수 없다. */
const SEND_TIMEOUT_MS = 400;

/**
 * 이벤트 하나를 보낸다. **결과를 기다릴 수 있도록 프라미스를 돌려준다.**
 *
 * 예전에는 `navigator.sendBeacon`을 썼는데 **`ANALYSIS_STARTED`가 통째로 유실됐다.** 제출
 * 버튼을 누르면 이 함수를 부르고 **바로 다음 줄에서 `window.location.assign`으로 문서를 갈아
 * 끼우는데**, 그 사이에 beacon이 나가지 못했다. 실제 집계가 증거였다 — 인연링크는 완료 6건에
 * 시작 1건인데, 화면을 갈아 끼우지 않고 제자리에서 결과를 그리는 naminglink는 네 메뉴 모두
 * 시작과 완료가 정확히 같았다. 코드는 양쪽이 같았으므로 남는 차이는 이동 방식뿐이다.
 *
 * `keepalive`는 문서가 사라져도 요청을 끝까지 보내라는 표시이면서 **프라미스를 준다**. 부르는
 * 쪽이 이동 직전에 `await`할 수 있는 것이 핵심이다 — beacon은 기다릴 방법이 없었다.
 *
 * 실패는 삼킨다. 통계를 못 남긴 것이 이용자의 흐름을 끊을 이유는 되지 않는다.
 */
export function trackAnalytics(event: AnalyticsEvent): Promise<void> {
  const body = JSON.stringify({
    ...event,
    path: event.path ?? window.location.pathname,
  });

  const sent = fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).then(
    () => undefined,
    () => undefined,
  );

  // 네트워크가 느릴 때 화면 이동이 그만큼 늦어지면 안 된다.
  return Promise.race([
    sent,
    new Promise<void>((resolve) => window.setTimeout(resolve, SEND_TIMEOUT_MS)),
  ]);
}
