"use client";

/**
 * 접속·이용 집계를 서버로 보낸다. **naminglink의 같은 이름 파일과 짝이다.**
 *
 * 두 앱이 한 `site_events` 표를 쓰고 `app` 컬럼으로 갈린다. 그 값은 클라이언트가 정하지 않는다
 * — 서버 라우트(`/api/analytics`)가 박아 넣는다. 브라우저가 보내는 값을 믿으면 남의 서비스
 * 통계에 행을 넣을 수 있다.
 *
 * **입력값은 담지 않는다.** 이 서비스는 생년월일을 저장하지 않는 것이 원칙이라, 여기 실리는
 * 것은 어떤 화면에서 무엇이 시작·완료됐는지뿐이다.
 */

/** 인연링크의 메뉴 구분. 콘솔의 `inyeonServiceTypeLabels`와 같은 값이어야 한다. */
export type InyeonServiceType = "GUNGHAP_MATCH" | "AFFINITY_MATCH";

export type AnalyticsEvent = {
  eventType:
    | "PAGE_VIEW"
    | "ANALYSIS_STARTED"
    | "ANALYSIS_COMPLETED"
    | "ANALYSIS_FAILED";
  path?: string;
  locale?: string;
  serviceType?: InyeonServiceType;
};

export function trackAnalytics(event: AnalyticsEvent) {
  const body = JSON.stringify({
    ...event,
    path: event.path ?? window.location.pathname,
  });

  // `sendBeacon`은 화면을 떠나는 중에도 전송이 보장된다. 제출 직후 결과 화면으로 넘어가는
  // 흐름이라 일반 `fetch`는 취소될 수 있다.
  if (navigator.sendBeacon) {
    navigator.sendBeacon(
      "/api/analytics",
      new Blob([body], { type: "application/json" }),
    );
    return;
  }

  void fetch("/api/analytics", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  });
}
