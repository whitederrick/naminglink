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

export function trackAnalytics(event: AnalyticsEvent) {
  const body = JSON.stringify({
    ...event,
    path: event.path ?? window.location.pathname,
  });

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

export function trackAdEvent(input: {
  eventType: "IMPRESSION" | "CLICK" | "REWARD_GRANTED" | "ERROR";
  slotKey: string;
  namingLogId?: string | null;
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
