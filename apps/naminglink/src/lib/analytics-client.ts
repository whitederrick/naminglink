"use client";

export type AnalyticsEvent = {
  eventType:
    | "PAGE_VIEW"
    | "ANALYSIS_STARTED"
    | "ANALYSIS_COMPLETED"
    | "ANALYSIS_FAILED";
  path?: string;
  locale?: string;
  serviceType?: string;
  metadata?: Record<string, string | number | boolean | null>;
};

/** 전송을 기다리는 최대 시간. 넘으면 그냥 넘어간다 — 통계 때문에 이용자를 세워 둘 수 없다. */
const SEND_TIMEOUT_MS = 400;

/**
 * 이벤트 하나를 보낸다. **인연링크의 같은 이름 파일과 방식을 맞춘다.**
 *
 * 예전에는 `navigator.sendBeacon`을 썼다. 지금 이 앱에서는 그래도 숫자가 맞았다 — 제출해도
 * 화면을 갈아 끼우지 않고 제자리에서 결과를 그리기 때문이다. **인연링크는 같은 코드로 시작
 * 기록이 통째로 날아갔다**(제출 직후 `location.assign`으로 문서를 바꾼다. 완료 6건에 시작
 * 1건이었다, 2026-08-04).
 *
 * 그래서 여기도 같은 전송으로 바꾼다. **지금 고장 나서가 아니라, 나중에 이 근처에 화면 이동이
 * 하나 들어오는 순간 같은 유실이 아무 표시 없이 재현되기 때문이다.** beacon은 기다릴 방법이
 * 없지만 `keepalive` fetch는 프라미스를 주므로, 이동 직전에 `await`할 수 있다.
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

  return Promise.race([
    sent,
    new Promise<void>((resolve) => window.setTimeout(resolve, SEND_TIMEOUT_MS)),
  ]);
}

export function trackAdEvent(input: {
  eventType: "IMPRESSION" | "CLICK" | "REWARD_GRANTED" | "ERROR";
  slotKey: string;
  locale?: string;
  serviceType?: string;
}) {
  void fetch("/api/ad-events", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
    keepalive: true,
  });
}
