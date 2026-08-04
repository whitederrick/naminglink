"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home } from "lucide-react";
import { useMemo, useState, useSyncExternalStore } from "react";
import { AdBanner } from "@/components/AdBanner";
import { CandidateUnlockPanel } from "@/components/CandidateUnlockPanel";
import { GlobalNamePremiumPanel } from "@/components/GlobalNamePremiumPanel";
import { ResultAddOnServices } from "@/components/ResultAddOnServices";
import { ResultCard } from "@/components/ResultCard";
import { ResultStorageNotice } from "@/components/ResultStorageNotice";
import { SiteFooter } from "@/components/SiteFooter";
import { services, type Locale } from "@/lib/services";
import { cappedCandidateCount } from "@/lib/candidate-count";
import {
  lockedSeals,
  persistUnsealedResult,
  unlockedCandidateCount,
  unsealAllCandidates,
  unsealNextCandidate,
} from "@/lib/candidate-seal";
import { getResultCopy } from "@/lib/i18n-result";
import { getServiceOverride, localizeServiceHero } from "@/lib/i18n-service";
import { localePath } from "@/lib/locale-path";

type StoredResult = {
  result: unknown;
  logId: string | null;
  persistence: "saved" | "skipped" | "failed";
  createdAt: string;
  // 2026-07-23부터 저장(프리미엄 PDF 주문에 필요). 이전 결과에는 없을 수 있다.
  inputFactors?: Record<string, unknown>;
};

function premiumCandidatesOf(result: unknown) {
  const candidates = (result as { candidates?: unknown[] } | null)?.candidates;
  if (!Array.isArray(candidates)) return [];
  return candidates
    .map((candidate) => {
      const record =
        candidate && typeof candidate === "object"
          ? (candidate as Record<string, unknown>)
          : {};
      const textOf = (value: unknown) => (typeof value === "string" ? value : undefined);
      const hangul = textOf(record.hangul)?.trim() ?? "";
      return {
        hangul,
        pronunciation: textOf(record.pronunciation),
        meaning: textOf(record.meaning),
        recommendation_reason: textOf(record.recommendation_reason),
        cultural_fit: textOf(record.cultural_fit),
        usage_note: textOf(record.usage_note),
      };
    })
    .filter((candidate) => /^[가-힣]{2,6}$/.test(candidate.hangul));
}

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
      <section className="mx-auto grid w-full max-w-5xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="grid gap-3 border-b border-line pb-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <div className="order-2 flex flex-wrap gap-2 lg:order-1">
            <button
              type="button"
              onClick={() => router.push(localePath("/global-to-korean", locale))}
              className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-line bg-surface px-4 text-sm font-semibold shadow-sm"
            >
              <ArrowLeft aria-hidden="true" size={17} />
              {copy.editInput}
            </button>
            <Link
              href={localePath("/", locale)}
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
              result={currentResult}
              locale={locale}
            />
            {/* 순서: 종합 리포트 → 후보 열기 → 아트 팩 → 도장.
                한자 매핑과 같은 원칙이다(유료 → 광고로 열기 → 굿즈).

                **종합 리포트를 앞에 두는 이유**: 이 상품은 후보 전체를 담으므로 후보를 열었는지와
                무관하다. 그래서 후보 열기보다 앞에 와도 화면이 비지 않는다.

                **아트 팩만 후보 열기 뒤에 남기는 이유**: 아트 팩은 *열린 후보 중 하나를 골라*
                만드는 상품이라 선택지가 revealedCount에 묶여 있다(`selectable`). 앞으로 당기면
                "고르라"면서 선택지가 하나뿐인 화면이 된다 — 후보 열기가 이 상품의 값어치를
                만들어 주므로 그 뒤여야 한다. */}
            <GlobalNamePremiumPanel
              candidates={premiumCandidatesOf(currentResult)}
              // 이 상품은 후보 전체를 담는다. 아직 열지 않은 후보는 봉인문으로 넘겨 서버가 채운다.
              seals={lockedSeals(currentResult).map((entry) => entry.seal)}
              revealedCount={revealedCount}
              inputFactors={stored.inputFactors}
              locale={locale}
            />
            <CandidateUnlockPanel
              persistKey={resultId}
              revealedCount={revealedCount}
              totalCount={totalCount}
              locale={locale}
              serviceType={service.serviceType}
              onUnlock={revealNextCandidate}
              onUnlockAll={revealAllCandidates}
            />
            <GlobalNamePremiumPanel
              product="NAME_ART_PACK"
              candidates={premiumCandidatesOf(currentResult)}
              revealedCount={revealedCount}
              inputFactors={stored.inputFactors}
              locale={locale}
            />
            {totalCount > 0 ? (
              <ResultAddOnServices
                service={service}
                locale={locale}
                // 오픈된 후보의 한글 이름만 도장 문구 선택지로 넘긴다(잠금 후보는 제외).
                stampNameOptions={premiumCandidatesOf(currentResult)
                  .slice(0, Math.max(1, revealedCount))
                  .map((candidate) => candidate.hangul)
                  .filter((hangul) => /^[가-힣]{2,6}$/.test(hangul))}
              />
            ) : null}
          </div>
        ) : (
          <section className="rounded-lg border border-line bg-surface p-6 shadow-sm">
            <h1 className="text-lg font-semibold">{copy.emptyTitle}</h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              {copy.emptyDescription}
            </p>
            <Link
              href={localePath("/global-to-korean", locale)}
              className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
            >
              {copy.backToInput}
            </Link>
          </section>
        )}
      </section>
      <SiteFooter locale={locale} policyMode="modal" guideFrom="global-to-korean" />
    </main>
  );
}
