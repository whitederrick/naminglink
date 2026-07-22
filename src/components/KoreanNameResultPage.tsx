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
import { getResultCopy } from "@/lib/i18n-result";
import { getServiceOverride, localizeServiceHero } from "@/lib/i18n-service";

type StoredResult = {
  result: unknown;
  logId: string | null;
  persistence: "saved" | "skipped" | "failed";
  createdAt: string;
};

const candidateCount = (result: unknown) => cappedCandidateCount(result, 5);

const emptySubscribe = () => () => {};

// 외국인 대상 "한국 이름 만들기"(global-to-korean) 전용 결과 화면.
// 다른 서비스처럼 입력 화면과 분리된 전용 페이지로 결과를 보여준다.
export function KoreanNameResultPage({
  resultId,
  locale,
}: {
  resultId: string;
  locale: Locale;
}) {
  const router = useRouter();
  const copy = getResultCopy(locale);
  const service = localizeServiceHero(
    getServiceOverride(locale),
    services.globalToKorean,
  );
  const storageKey = `naminglink:korean-name-result:${resultId}`;
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
              onClick={() => router.push(`/global-to-korean?lang=${locale}`)}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-sm font-semibold shadow-sm"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              {copy.editInput}
            </button>
            <Link
              href={`/?lang=${locale}`}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-foreground/80 bg-[linear-gradient(135deg,#10150f,#1c211a)] px-4 text-sm font-semibold text-white shadow-sm"
            >
              <Home aria-hidden="true" size={17} />
              {copy.home}
            </Link>
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <AdBanner
              variant="header"
              slotKey="korean_name_result_header"
              label={copy.headerAdLabel}
            />
          </div>
          <p className="order-3 text-sm text-muted">{service.title}</p>
        </header>

        {!ready ? (
          <section className="rounded-lg border border-line bg-surface p-6 text-sm text-muted shadow-sm">
            {copy.loading}
          </section>
        ) : stored ? (
          <div className="grid gap-5">
            <ResultStorageNotice
              persistence={stored.persistence}
              locale={locale}
            />
            <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
              <p className="text-sm font-semibold text-brand-teal">
                {copy.analysisDone}
              </p>
              <h1 className="mt-2 text-2xl font-semibold">
                {service.resultLabel}
              </h1>
            </section>
            <ResultCard
              service={service}
              result={stored.result}
              revealedCount={revealedCount}
              locale={locale}
            />
            <CandidateUnlockPanel
              revealedCount={revealedCount}
              totalCount={totalCount}
              locale={locale}
              serviceType={service.serviceType}
              onUnlock={() =>
                setRevealedCount((current) => Math.min(totalCount, current + 1))
              }
            />
            {totalCount > 0 ? (
              <ResultAddOnServices service={service} locale={locale} />
            ) : null}
          </div>
        ) : (
          <section className="rounded-lg border border-line bg-surface p-6 shadow-sm">
            <h1 className="text-lg font-semibold">{copy.emptyTitle}</h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              {copy.emptyDescription}
            </p>
            <Link
              href={`/global-to-korean?lang=${locale}`}
              className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
            >
              {copy.backToInput}
            </Link>
          </section>
        )}
      </section>
      <SiteFooter locale={locale} policyMode="modal" />
    </main>
  );
}
