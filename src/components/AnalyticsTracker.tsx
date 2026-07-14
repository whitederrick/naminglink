"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { trackAnalytics } from "@/lib/analytics-client";

export function AnalyticsTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin") || pathname.startsWith("/naming-artist")) return;
    trackAnalytics({
      eventType: "PAGE_VIEW",
      path: pathname,
      locale: document.documentElement.lang || navigator.language,
    });
  }, [pathname]);

  return null;
}
