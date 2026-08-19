"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import { useMemo, useState, useSyncExternalStore } from "react";
import { AdBanner } from "@/components/AdBanner";
import { CandidateUnlockPanel } from "@/components/CandidateUnlockPanel";
import { ResultAddOnServices } from "@/components/ResultAddOnServices";
import { ResultCard } from "@/components/ResultCard";
import { ResultEntryGate } from "@/components/ResultEntryGate";
import { ResultStorageNotice } from "@/components/ResultStorageNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { services, type Locale } from "@/lib/services";
import { cappedCandidateCount } from "@/lib/candidate-count";
import {
  persistUnsealedResult,
  unlockedCandidateCount,
  unsealAllCandidates,
  unsealNextCandidate,
} from "@/lib/candidate-seal";
import { localePath } from "@/lib/locale-path";

type StoredResult = {
  result: unknown;
  logId: string | null;
  persistence: "saved" | "skipped" | "failed";
  createdAt: string;
};

const candidateCount = (result: unknown) => cappedCandidateCount(result, 5);

const emptySubscribe = () => () => {};

export function KoreanToGlobalResultPage({
  resultId,
  locale,
}: {
  resultId: string;
  locale: Locale;
}) {
  const router = useRouter();
  const storageKey = `naminglink:korean-to-global-result:${resultId}`;
  const raw = useSyncExternalStore(
    emptySubscribe,
    () => sessionStorage.getItem(storageKey),
    () => null,
  );
  const ready = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const stored = useMemo(() => {
    if (!raw) return null;

    try {
      return JSON.parse(raw) as StoredResult;
    } catch {
      return null;
    }
  }, [raw]);
  // 광고·결제로 실제로 열린 결과. 잠긴 후보는 봉인문으로만 와 있어 서버가 풀어 준 것을 받는다.
  const [openedResult, setOpenedResult] = useState<unknown>(null);
  const currentResult = openedResult ?? stored?.result ?? null;
  const totalCount = stored ? candidateCount(currentResult) : 0;
  const revealedCount = unlockedCandidateCount(currentResult);

  function applyOpened(next: unknown) {
    setOpenedResult(next);
    persistUnsealedResult(storageKey, next);
  }

  async function revealNextCandidate(ticket: string | null) {
    if (!currentResult) return;
    applyOpened(await unsealNextCandidate(currentResult, ticket));
  }

  async function revealAllCandidates(order: { orderId: string; paymentId: string }) {
    if (!currentResult) return;
    applyOpened(await unsealAllCandidates(currentResult, { order }));
  }

  return (
    <main className="min-h-screen">
      {/* **결과가 실제로 있을 때만 관문을 세운다.** 복원에 실패한 화면에서 관문이 돌면 발행한
          콘텐츠가 하나도 없는 자리에서 광고를 보게 하는 셈이 된다(머리글 배너와 같은 조건). */}
      {ready && stored ? (
        <ResultEntryGate locale={locale} serviceType={services.koreanToGlobal.serviceType} />
      ) : null}
      <section className="mx-auto grid w-full max-w-5xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="grid gap-3 border-b border-line pb-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <div className="order-2 flex flex-wrap gap-2 lg:order-1">
            <button
              type="button"
              onClick={() => router.push(localePath("/korean-to-global", locale))}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-sm font-semibold shadow-sm"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              입력 수정
            </button>
            <Link
              href={localePath("/", locale)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-foreground/80 bg-[linear-gradient(135deg,#10150f,#1c211a)] px-4 text-sm font-semibold text-white shadow-sm"
            >
              <Home aria-hidden="true" size={17} />
              홈
            </Link>
          </div>
          {/* **결과가 실제로 그려질 때만 광고를 둔다** (2026-08-10).

              예전에는 머리글에 무조건 있어서 **대기 화면·결과 없음 화면에도 광고가 먼저**
              나갔다. 결과 주소로 직접 들어와 복원에 실패하면 화면에 우리가 발행한 것이 아무것도
              없는데 광고만 남는다 — 애드센스가 「게시자 콘텐츠 없는 화면의 광고」로 보는 자리다.

              `ready`는 하이드레이션 여부라 서버 HTML에서는 거짓이다. 즉 크롤러가 받는 HTML에는
              이 자리에 광고 코드가 아예 없다. */}
          {ready && stored ? (
            <div className="order-1 min-w-0 lg:order-2">
            <AdBanner
              variant="header"
              slotKey="korean_to_global_result_header"
              locale={locale}
              label="글로벌 이름 결과 상단 배너 광고"
            />
            </div>
          ) : null}
        </header>

        {!ready ? (
          <section className="rounded-lg border border-line bg-surface p-6 text-sm text-muted shadow-sm">
            결과를 불러오고 있습니다.
          </section>
        ) : stored ? (
          <div className="grid gap-5">
            <ResultStorageNotice persistence={stored.persistence} />
            <ResultCard
              service={services.koreanToGlobal}
              result={currentResult}
            />
            <CandidateUnlockPanel
              revealedCount={revealedCount}
              totalCount={totalCount}
              locale={locale}
              serviceType={services.koreanToGlobal.serviceType}
              onUnlock={revealNextCandidate}
              onUnlockAll={revealAllCandidates}
            />
            {totalCount > 0 ? (
              <ResultAddOnServices service={services.koreanToGlobal} />
            ) : null}
          </div>
        ) : (
          <section className="rounded-lg border border-line bg-surface p-6 shadow-sm">
            <h1 className="text-lg font-semibold">결과를 불러올 수 없습니다.</h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              이 결과는 분석을 진행한 브라우저 탭에서만 확인할 수 있습니다.
            </p>
            <Link
              href={localePath("/korean-to-global", locale)}
              className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
            >
              입력 화면으로 돌아가기
            </Link>
          </section>
        )}
      </section>
      <SiteFooter locale={locale} policyMode="modal" guideFrom="korean-to-global" />
    </main>
  );
}
