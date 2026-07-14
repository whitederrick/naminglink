"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ManagedLegalDocumentContent } from "@/components/LegalDocumentContent";
import {
  getFallbackPolicyDocument,
  type LegalDocumentKind,
  type PolicyDocumentContent,
} from "@/lib/site-content";
import type { Locale } from "@/lib/services";

export type LegalDocument = LegalDocumentKind;

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
  locale = "ko",
}: {
  kind: LegalDocument;
  onClose: () => void;
  title?: string;
  locale?: Locale;
}) {
  const [content, setContent] = useState<PolicyDocumentContent>(() =>
    getFallbackPolicyDocument(kind),
  );
  const title = titleOverride ?? content.title ?? documentTitles[kind];

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/site-content?kind=${kind}&locale=${locale}`, {
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        if (payload?.content) setContent(payload.content);
      })
      .catch((error) => {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Failed to load legal content", error);
        }
      });

    return () => controller.abort();
  }, [kind, locale]);

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
        aria-labelledby="legal-modal-title"
        className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-[#ded9cc] bg-white text-[#17201b] shadow-2xl"
      >
        <header className="flex items-start justify-between gap-4 border-b border-[#ded9cc] px-5 py-4 sm:px-6">
          <div>
            <h2
              id="legal-modal-title"
              className="text-xl font-semibold text-[#17201b]"
            >
              {title}
            </h2>
            <p className="mt-1 text-xs text-[#6b716d]">
              {"\uC2DC\uD589\uC77C"}: {content.effectiveDate}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={`${title} ${"\uB2EB\uAE30"}`}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#ded9cc] bg-white text-[#17201b] transition hover:border-[#17201b] hover:bg-[#f1eadb]"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </header>
        <div className="grid gap-7 overflow-y-auto px-5 py-2 sm:px-6">
          <ManagedLegalDocumentContent content={content} />
        </div>
        <footer className="border-t border-[#ded9cc] px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#17201b] px-4 text-sm font-semibold text-white"
          >
            {"\uB2EB\uAE30"}
          </button>
        </footer>
      </section>
    </div>,
    document.body,
  );
}
