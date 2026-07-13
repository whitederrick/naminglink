"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import {
  PrivacyDocumentContent,
  TermsDocumentContent,
} from "@/components/LegalDocumentContent";
import { LEGAL_EFFECTIVE_DATE } from "@/lib/company";

export type LegalDocument = "terms" | "privacy";

export function LegalModal({
  kind,
  onClose,
}: {
  kind: LegalDocument;
  onClose: () => void;
}) {
  const title = kind === "terms" ? "이용약관" : "개인정보처리방침";

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

  return (
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
        aria-labelledby="legal-modal-title"
        className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-line bg-background shadow-2xl"
      >
        <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
          <div>
            <h2 id="legal-modal-title" className="text-xl font-semibold">
              {title}
            </h2>
            <p className="mt-1 text-xs text-muted">
              시행일: {LEGAL_EFFECTIVE_DATE}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={`${title} 닫기`}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line transition hover:border-foreground"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </header>
        <div className="grid gap-7 overflow-y-auto px-5 py-2 sm:px-6">
          {kind === "terms" ? (
            <TermsDocumentContent />
          ) : (
            <PrivacyDocumentContent />
          )}
        </div>
        <footer className="border-t border-line px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
          >
            닫기
          </button>
        </footer>
      </section>
    </div>
  );
}