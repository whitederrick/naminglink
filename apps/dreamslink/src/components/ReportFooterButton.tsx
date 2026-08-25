"use client";

import { useState } from "react";
import { ReportModal } from "@/components/ReportModal";
import { getReportCopy } from "@/lib/report-copy";
import type { Locale } from "@/lib/i18n";

// SiteFooter.tsx는 서버 컴포넌트라 직접 상태를 못 갖는다 — LegalLinks.tsx와 같은 이유로
// 이 작은 클라이언트 컴포넌트가 버튼과 모달의 열림 상태를 대신 갖는다.
export function ReportFooterButton({
  locale,
  linkClass,
  textDirection,
}: {
  locale: Locale;
  linkClass: string;
  textDirection: "ltr" | "rtl";
}) {
  const [open, setOpen] = useState(false);
  const copy = getReportCopy(locale);
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={linkClass} dir={textDirection}>
        {copy.triggerLabel}
      </button>
      {open ? <ReportModal locale={locale} onClose={() => setOpen(false)} /> : null}
    </>
  );
}
