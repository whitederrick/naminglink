"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getReportCopy } from "@/lib/report-copy";
import type { Locale } from "@/lib/i18n";

// 신고 채널 트리거 모달. docs/LOCALE_AD_STRATEGY_2026-08-21.md §3.5 ⑤ — 광고 개방의
// 관측망이다. 검토의 실체는 사람이 하는 거래 문구 확인이고, 이 채널은 추가 접수 창구다.
//
// 뒤로가기·Escape로 닫히는 것과 히스토리 항목 처리는 LegalModal.tsx와 같은 패턴이다
// (모바일에서 뒤로가기가 페이지 이탈이 아니라 모달을 닫아야 한다).
export function ReportModal({ locale, onClose }: { locale: Locale; onClose: () => void }) {
  const copy = getReportCopy(locale);
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

  // 지연 초기화라 렌더 도중이 아니라 첫 마운트 시 한 번만 읽는다. 이 모달은 클릭
  // 핸들러로만 열리므로(SiteFooter.tsx) 마운트 시점에는 항상 브라우저다.
  const [url, setUrl] = useState(() => (typeof window === "undefined" ? "" : window.location.href));
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    const previous = window.history.state as Record<string, unknown> | null;
    window.history.pushState({ ...previous, __reportModal: true }, "");
    let closedByBack = false;
    const onPopState = () => {
      closedByBack = true;
      closeRef.current();
    };
    window.addEventListener("popstate", onPopState);
    return () => {
      window.removeEventListener("popstate", onPopState);
      const current = window.history.state as Record<string, unknown> | null;
      if (!closedByBack && current?.__reportModal === true) window.history.back();
    };
    // 의존성을 비운 것은 LegalModal.tsx와 같은 이유다 — closeRef로 최신 함수를 읽는다.
  }, []);

  async function submit() {
    if (!url.trim() || !message.trim() || status === "submitting") return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/locale-reports", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim(), message: message.trim(), locale }),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="report-modal-title"
        dir={locale === "ar" ? "rtl" : "ltr"}
        className="flex w-full max-w-md flex-col overflow-hidden rounded-xl border border-[#ded9cc] bg-white text-[#17201b] shadow-2xl"
      >
        <header className="flex items-start justify-between gap-4 border-b border-[#ded9cc] px-5 py-4">
          <h2 id="report-modal-title" className="text-lg font-semibold text-[#17201b]">
            {copy.title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label={copy.cancel}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#ded9cc] bg-white text-[#17201b] transition hover:border-[#17201b] hover:bg-[#f1eadb]"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </header>
        <div className="grid gap-4 px-5 py-4">
          {status === "success" ? (
            <p className="py-6 text-center text-sm text-[#17201b]">{copy.success}</p>
          ) : (
            <>
              <label className="grid gap-1 text-sm">
                <span className="text-[#6b716d]">{copy.urlLabel}</span>
                <input
                  type="text"
                  value={url}
                  onChange={(event) => setUrl(event.target.value)}
                  placeholder={copy.urlPlaceholder}
                  className="rounded-lg border border-[#ded9cc] px-3 py-2 text-sm"
                />
              </label>
              <label className="grid gap-1 text-sm">
                <span className="text-[#6b716d]">{copy.messageLabel}</span>
                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder={copy.messagePlaceholder}
                  rows={4}
                  className="rounded-lg border border-[#ded9cc] px-3 py-2 text-sm"
                />
              </label>
              {status === "error" ? <p className="text-sm text-red-600">{copy.error}</p> : null}
            </>
          )}
        </div>
        <footer className="flex gap-2 border-t border-[#ded9cc] px-5 py-4">
          {status === "success" ? (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#17201b] px-4 text-sm font-semibold text-white"
            >
              {copy.cancel}
            </button>
          ) : (
            <>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-[#ded9cc] px-4 text-sm font-semibold text-[#17201b]"
              >
                {copy.cancel}
              </button>
              <button
                type="button"
                onClick={() => void submit()}
                disabled={status === "submitting" || !url.trim() || !message.trim()}
                className="inline-flex h-10 flex-1 items-center justify-center rounded-lg bg-[#17201b] px-4 text-sm font-semibold text-white disabled:opacity-50"
              >
                {copy.submit}
              </button>
            </>
          )}
        </footer>
      </section>
    </div>,
    document.body,
  );
}
