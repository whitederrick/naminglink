"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { trackAnalytics } from "@/lib/analytics-client";

/**
 * 페이지 조회 집계. naminglink의 같은 이름 컴포넌트와 짝이다.
 *
 * 루트 레이아웃에 두어 모든 화면을 덮는다. 경로가 바뀔 때마다 한 번 보낸다 — 로케일 접두사가
 * 붙은 주소(`/ko/compatibility`)가 그대로 실리므로 어느 언어판이 얼마나 읽히는지도 함께 남는다.
 */
export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    trackAnalytics({
      eventType: "PAGE_VIEW",
      path: pathname,
      locale: document.documentElement.lang || navigator.language,
    });
  }, [pathname]);

  return null;
}
