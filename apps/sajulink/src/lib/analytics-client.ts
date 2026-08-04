"use client";

/**
 * 접속·이용 집계를 서버로 보낸다. **naminglink의 같은 이름 파일과 짝이다.**
 *
 * 앱들이 한 `site_events` 표를 쓰고 `app` 컬럼으로 갈린다. 그 값은 클라이언트가 정하지 않는다
 * — 서버 라우트(`/api/analytics`)가 박아 넣는다. 브라우저가 보내는 값을 믿으면 남의 서비스
 * 통계에 행을 넣을 수 있다.
 *
 * **입력값은 담지 않는다.** 이 서비스는 생년월일을 저장하지 않는 것이 원칙이라, 여기 실리는
 * 것은 어떤 화면에서 무엇이 시작·완료됐는지뿐이다.
 */

/**
 * 사주링크의 메뉴 구분. 콘솔의 라벨 표와 같은 값이어야 한다.
 *
 *   SAJU_READING  사주 풀이 — 원국 + 오늘의 운세
 *   SAJU_TODAY    오늘의 운세만 — 매일 다시 오는 자리
 */
export type SajuServiceType = "SAJU_READING" | "SAJU_TODAY";

export type AnalyticsEvent = {
  eventType:
    | "PAGE_VIEW"
    | "ANALYSIS_STARTED"
    | "ANALYSIS_COMPLETED"
    | "ANALYSIS_FAILED";
  path?: string;
  locale?: string;
  serviceType?: SajuServiceType;
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
