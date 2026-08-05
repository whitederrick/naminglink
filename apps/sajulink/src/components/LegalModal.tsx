"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { LegalDocumentBody } from "@/components/LegalDocumentBody";
// **`legal-content`에서는 타입만 가져온다.** 값을 하나라도 가져오면 그 모듈이 통째로
// 클라이언트 번들에 실리고, 거기 딸린 `payments-csp`·`ads`와 23로케일 약관 원문까지 따라온다
// (2026-08-03 전수 감사에서 실제로 그렇게 실려 있었다). 문서는 `/api/legal`로 받아 온다.
import { LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalDocument, LegalDocumentKey } from "@/lib/legal-content";

// naminglink의 `LegalModal`과 **같은 구조·같은 동작**이다. 두 서비스를 오가는 사용자가 같은
// 자리에서 같은 방식으로 약관을 보게 하려는 것이라, 마크업과 상호작용을 일부러 맞췄다.
//   - 바깥을 눌러 닫기(onMouseDown 기준 — 드래그로 텍스트를 고르다 놓아도 닫히지 않는다)
//   - Esc로 닫기, 열려 있는 동안 뒤 화면 스크롤 잠금
//   - 받아 오는 동안 스켈레톤, 실패하면 한 줄 안내
//   - 헤더에 제목과 시행일, 바닥에 닫기 버튼
//
// 다른 점은 문서를 어디서 받아 오는가 하나뿐이다. naminglink는 관리자 화면이 고치는 DB 문서를
// `/api/site-content`로 받고, 이 앱은 코드에 있는 문서에 사업자 정보와 가격만 서버에서 주입해
// `/api/legal`로 받는다. 인연링크 약관은 아직 관리자 화면 대상이 아니기 때문이다.

// 한 번 받은 문서는 세션 동안 기억한다(kind:locale 단위). 다시 열 때 네트워크를 타지 않는다.
const legalCache = new Map<string, LegalDocument>();

type LoadState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; document: LegalDocument };

export function LegalModal({
  kind,
  locale,
  onClose,
}: {
  kind: LegalDocumentKey;
  locale: string;
  onClose: () => void;
}) {
  const cacheKey = `${kind}:${locale}`;
  // 캐시가 있으면 스켈레톤 없이 곧바로 렌더한다.
  const [state, setState] = useState<LoadState>(() => {
    const cached = legalCache.get(cacheKey);
    return cached ? { status: "ready", document: cached } : { status: "loading" };
  });
  const title = state.status === "ready" ? state.document.title : "";

  useEffect(() => {
    const controller = new AbortController();
    // 캐시로 이미 렌더 중이어도 백그라운드로 갱신한다(stale-while-revalidate). 사업자 정보나
    // 가격이 관리자 화면에서 바뀌면 다음에 열 때 반영된다.
    fetch(`/api/legal?kind=${kind}&lang=${encodeURIComponent(locale)}`, {
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : null))
      .then((payload) => {
        if (payload?.ok && payload.document) {
          legalCache.set(cacheKey, payload.document);
          setState({ status: "ready", document: payload.document });
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
        className="flex max-h-[88vh] w-full max-w-3xl flex-col overflow-hidden rounded-xl border border-line bg-background text-foreground shadow-2xl"
      >
        <header className="flex items-start justify-between gap-4 border-b border-line px-5 py-4 sm:px-6">
          <div>
            <h2
              id="legal-modal-title"
              className="break-keep-all text-xl font-semibold"
            >
              {title}
            </h2>
            {state.status === "ready" ? (
              <p className="mt-1 text-xs text-muted">
                {state.document.effectiveLabel} {LEGAL_EFFECTIVE_DATE}
              </p>
            ) : null}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={`${title} ×`}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-line bg-background transition hover:border-foreground hover:bg-surface"
          >
            <X aria-hidden="true" size={18} />
          </button>
        </header>

        <div className="overflow-y-auto px-5 py-2 sm:px-6">
          {state.status === "ready" ? (
            <LegalDocumentBody document={state.document} hideEffectiveDate />
          ) : state.status === "error" ? (
            <p className="py-8 text-center text-sm text-muted">
              일시적인 오류로 문서를 불러오지 못했습니다. / Failed to load the
              document. Please try again.
            </p>
          ) : (
            <div className="grid gap-3 py-6" aria-hidden="true">
              <span className="h-4 w-2/3 animate-pulse rounded bg-surface" />
              <span className="h-4 w-full animate-pulse rounded bg-surface" />
              <span className="h-4 w-full animate-pulse rounded bg-surface" />
              <span className="h-4 w-5/6 animate-pulse rounded bg-surface" />
              <span className="h-4 w-3/4 animate-pulse rounded bg-surface" />
            </div>
          )}
        </div>

        <footer className="border-t border-line px-5 py-4 sm:px-6">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-full items-center justify-center rounded-lg bg-brand-navy px-4 text-sm font-semibold text-white"
          >
            닫기
          </button>
        </footer>
      </section>
    </div>,
    document.body,
  );
}
