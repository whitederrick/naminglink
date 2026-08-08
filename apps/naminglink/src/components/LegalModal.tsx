"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  // 뒤로가기 효과가 한 번만 돌게 하려고 최신 `onClose`를 여기에 담아 둔다(아래 주석 참고).
  // **렌더 중에 넣지 않고 효과에서 넣는다** — 렌더 중 ref 쓰기는 React 규칙 위반이다.
  const closeRef = useRef(onClose);
  useEffect(() => {
    closeRef.current = onClose;
  }, [onClose]);

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

  /**
   * **뒤로가기가 모달을 닫게 한다.**
   *
   * 예전에는 Escape만 봤다. 그런데 이 서비스는 **모바일이 다수**이고, 안드로이드에는 Escape가
   * 없다 — 덮인 화면을 치우려고 누르는 것은 뒤로가기다. 그때 모달이 닫히는 대신 **페이지를
   * 떠났다.** 결과 화면에서 약관을 열어 본 사람이 뒤로가기 한 번에 결과에서 튕겨 나갔다.
   *
   * 열 때 히스토리 항목을 하나 쌓고, 뒤로가기가 오면 그것을 닫는 신호로 읽는다. Escape나 X로
   * 닫혔을 때는 **우리가 쌓은 항목을 도로 걷어낸다** — 안 그러면 모달을 열었다 닫은 횟수만큼
   * 뒤로가기를 눌러야 이전 화면으로 나간다.
   *
   * `history.state`를 통째로 갈아 끼우지 않고 **펼쳐서 표시만 더한다.** App Router가 자기
   * 상태를 그 자리에 두기 때문에, 덮어쓰면 라우터가 뒤로가기를 처리하지 못한다.
   */
  useEffect(() => {
    const previous = window.history.state as Record<string, unknown> | null;
    window.history.pushState({ ...previous, __legalModal: true }, "");

    let closedByBack = false;
    const onPopState = () => {
      closedByBack = true;
      closeRef.current();
    };
    window.addEventListener("popstate", onPopState);

    return () => {
      window.removeEventListener("popstate", onPopState);
      // 뒤로가기로 닫힌 것이 아니고 **아직 우리 항목 위에 있을 때만** 되돌린다. 그 사이 다른
      // 화면으로 이동했다면 표시가 남아 있지 않으므로, 남의 이동을 되감지 않는다.
      const current = window.history.state as Record<string, unknown> | null;
      if (!closedByBack && current?.__legalModal === true) window.history.back();
    };
    // **의존성을 비워 둔 것은 의도다.** 부르는 세 곳이 전부 `onClose={() => …}`를 인라인으로
    // 넘겨 매 렌더 새 함수가 된다. `onClose`를 의존성에 넣으면 부모가 그려질 때마다 이 효과가
    // 다시 돌아 **히스토리 항목이 렌더 수만큼 쌓인다.** 최신 함수는 ref로 읽는다.
  }, []);

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
