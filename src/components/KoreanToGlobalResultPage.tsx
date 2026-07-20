"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import { useMemo, useState, useSyncExternalStore } from "react";
import { AdBanner } from "@/components/AdBanner";
import { CandidateUnlockPanel } from "@/components/CandidateUnlockPanel";
import { ResultAddOnServices } from "@/components/ResultAddOnServices";
import { ResultCard } from "@/components/ResultCard";
import { ResultStorageNotice } from "@/components/ResultStorageNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { services, type Locale } from "@/lib/services";
import { cappedCandidateCount } from "@/lib/candidate-count";

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
  const [revealedCount, setRevealedCount] = useState(1);
  const totalCount = stored ? candidateCount(stored.result) : 0;

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-5xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="grid gap-3 border-b border-line pb-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <div className="order-2 flex flex-wrap gap-2 lg:order-1">
            <button
              type="button"
              onClick={() => router.push(`/korean-to-global?lang=${locale}`)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-sm font-semibold shadow-sm"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              입력 수정
            </button>
            <Link
              href={`/?lang=${locale}`}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-foreground/80 bg-[linear-gradient(135deg,#10150f,#1c211a)] px-4 text-sm font-semibold text-white shadow-sm"
            >
              <Home aria-hidden="true" size={17} />
              홈
            </Link>
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <AdBanner
              variant="header"
              slotKey="korean_to_global_result_header"
              label="글로벌 이름 결과 상단 배너 광고"
            />
          </div>
          <p className="order-3 text-sm text-muted">글로벌 이름 변환 결과</p>
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
              result={stored.result}
              revealedCount={revealedCount}
            />
            <CandidateUnlockPanel
              revealedCount={revealedCount}
              totalCount={totalCount}
              locale={locale}
              serviceType={services.koreanToGlobal.serviceType}
              onUnlock={() =>
                setRevealedCount((current) =>
                  Math.min(totalCount, current + 1),
                )
              }
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
              href={`/korean-to-global?lang=${locale}`}
              className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
            >
              입력 화면으로 돌아가기
            </Link>
          </section>
        )}
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
