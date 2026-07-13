"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import {
  PricingDocumentContent,
  PrivacyDocumentContent,
  RefundDocumentContent,
  TermsDocumentContent,
} from "@/components/LegalDocumentContent";
import { LEGAL_EFFECTIVE_DATE } from "@/lib/company";

export type LegalDocument = "terms" | "privacy" | "refund" | "pricing";

const documentTitles: Record<LegalDocument, string> = {
  terms: "\uC774\uC6A9\uC57D\uAD00",
  privacy: "\uAC1C\uC778\uC815\uBCF4\uCC98\uB9AC\uBC29\uCE68",
  refund: "\uD658\uBD88\uC815\uCC45",
  pricing: "\uC694\uAE08\uC548\uB0B4",
};

export function LegalModal({
  kind,
  onClose,
  title: titleOverride,
}: {
  kind: LegalDocument;
  onClose: () => void;
  title?: string;
}) {
  const title = titleOverride ?? documentTitles[kind];

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
              {"\uC2DC\uD589\uC77C"}: {LEGAL_EFFECTIVE_DATE}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={`${title} ${"\uB2EB\uAE30"}`}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line transition hover:border-foreground"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </header>
        <div className="grid gap-7 overflow-y-auto px-5 py-2 sm:px-6">
          {kind === "terms" && <TermsDocumentContent />}
          {kind === "privacy" && <PrivacyDocumentContent />}
          {kind === "refund" && <RefundDocumentContent />}
          {kind === "pricing" && <PricingDocumentContent />}
        </div>
        <footer className="border-t border-line px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
          >
            {"\uB2EB\uAE30"}
          </button>
        </footer>
      </section>
    </div>
  );
}