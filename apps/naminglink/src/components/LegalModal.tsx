"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ManagedLegalDocumentContent } from "@/components/LegalDocumentContent";
import type {
  LegalDocumentKind,
  PolicyDocumentContent,
} from "@/lib/site-content";
import type { LegalPageLabels } from "@/lib/legal-content/types";
import type { Locale } from "@/lib/services";

export type LegalDocument = LegalDocumentKind;

// 로케일 문서는 번들에 넣지 않고 API에서 로케일 버전을 바로 받아 렌더한다.
// (예전에는 한국어 폴백을 먼저 그려서 비한국어 사용자에게 한글이 번쩍이는 문제가 있었음.)
type LoadedDoc = { content: PolicyDocumentContent; labels: LegalPageLabels };

type LoadState =
  | { status: "loading" }
  | { status: "error" }
  | ({ status: "ready" } & LoadedDoc);

// 세션 내 메모리 캐시(kind:locale 단위). 한 번 받아온 약관은 재열람 시 네트워크 없이 즉시 렌더한다.
// 새로고침하면 비워지므로 운영자 DB 수정이 세션 경계에서 반영된다(엣지 캐시 TTL과 별개).
const legalCache = new Map<string, LoadedDoc>();

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
  const cacheKey = `${kind}:${locale}`;
  // 캐시가 있으면 스켈레톤 없이 곧바로 렌더한다.
  const [state, setState] = useState<LoadState>(() => {
    const cached = legalCache.get(cacheKey);
    return cached ? { status: "ready", ...cached } : { status: "loading" };
  });
  const title =
    titleOverride ?? (state.status === "ready" ? state.content.title : "");

  useEffect(() => {
    const controller = new AbortController();
    // 캐시로 이미 렌더 중이어도 백그라운드로 갱신해 최신 DB 내용을 반영한다(stale-while-revalidate).
    fetch(`/api/site-content?kind=${kind}&locale=${locale}`, {
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        if (payload?.content && payload?.labels) {
          const loaded: LoadedDoc = {
            content: payload.content,
            labels: payload.labels,
          };
          legalCache.set(cacheKey, loaded);
          setState({ status: "ready", ...loaded });
        } else if (!legalCache.has(cacheKey)) {
          setState({ status: "error" });
        }
      })
      .catch((error) => {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Failed to load legal content", error);
          // 캐시된 내용이 있으면 그대로 두고, 없을 때만 오류를 표시한다.
          if (!legalCache.has(cacheKey)) setState({ status: "error" });
        }
      });

    return () => controller.abort();
  }, [kind, locale, cacheKey]);

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
            {state.status === "ready" ? (
              <p className="mt-1 text-xs text-[#6b716d]">
                {state.labels.effectiveDate}: {state.content.effectiveDate}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={`${title} ×`}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-[#ded9cc] bg-white text-[#17201b] transition hover:border-[#17201b] hover:bg-[#f1eadb]"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </header>
        <div className="grid gap-7 overflow-y-auto px-5 py-2 sm:px-6">
          {state.status === "ready" ? (
            <ManagedLegalDocumentContent content={state.content} />
          ) : state.status === "error" ? (
            <p className="py-8 text-center text-sm text-[#6b716d]">
              일시적인 오류로 문서를 불러오지 못했습니다. / Failed to load the
              document. Please try again.
            </p>
          ) : (
            <div className="grid gap-3 py-6" aria-hidden="true">
              <span className="h-4 w-2/3 animate-pulse rounded bg-[#f1eadb]" />
              <span className="h-4 w-full animate-pulse rounded bg-[#f1eadb]" />
              <span className="h-4 w-full animate-pulse rounded bg-[#f1eadb]" />
              <span className="h-4 w-5/6 animate-pulse rounded bg-[#f1eadb]" />
              <span className="h-4 w-3/4 animate-pulse rounded bg-[#f1eadb]" />
            </div>
          )}
        </div>
        <footer className="border-t border-[#ded9cc] px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-[#17201b] px-4 text-sm font-semibold text-white"
          >
            {state.status === "ready" ? state.labels.close : "×"}
          </button>
        </footer>
      </section>
    </div>,
    document.body,
  );
}
