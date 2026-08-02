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
import { PremiumHanjaCheckoutPanel } from "@/components/PremiumHanjaCheckoutPanel";
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
  inputFactors?: Record<string, unknown>;
};

const candidateCount = (result: unknown) => cappedCandidateCount(result, 10);

/** 결과에서 이름 한자만 뽑는다. 도장 후보 선택지로 쓴다. */
function hanjaOptionsOf(result: unknown, limit: number) {
  const candidates = (result as { candidates?: unknown[] } | null)?.candidates;
  if (!Array.isArray(candidates)) return [];
  return candidates
    .slice(0, Math.max(1, limit))
    .map((candidate) => {
      const record =
        candidate && typeof candidate === "object"
          ? (candidate as Record<string, unknown>)
          : {};
      return typeof record.hanja === "string" ? record.hanja.trim() : "";
    })
    .filter((hanja) => /^[㐀-䶿一-鿿]{1,4}$/u.test(hanja));
}

const emptySubscribe = () => () => {};

export function HanjaMeaningResultPage({
  resultId,
  locale,
  premiumTestMode,
  paymentConfigured,
}: {
  resultId: string;
  locale: Locale;
  premiumTestMode: boolean;
  paymentConfigured: boolean;
}) {
  const router = useRouter();
  const storageKey = `naminglink:hanja-result:${resultId}`;
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
  // 광고·결제로 실제로 열린 결과. 잠긴 후보는 봉인문으로만 와 있어 서버가 풀어 준 것을 받아
  // 여기에 담는다(원래 기록에도 되쓴다 — `persistUnsealedResult`).
  const [openedResult, setOpenedResult] = useState<unknown>(null);
  const currentResult = openedResult ?? stored?.result ?? null;
  const [candidateLimit, setCandidateLimit] = useState(5);
  const [detailedHanja, setDetailedHanja] = useState(false);
  const totalCount = stored ? candidateCount(currentResult) : 0;
  const freeCandidateCount = Math.min(totalCount, 5);
  const revealedCount = unlockedCandidateCount(currentResult);

  function applyOpened(next: unknown) {
    setOpenedResult(next);
    persistUnsealedResult(storageKey, next);
  }

  /** 광고를 본 대가로 잠긴 첫 후보 하나를 연다. */
  async function revealNextCandidate(ticket: string | null) {
    if (!currentResult) return;
    applyOpened(await unsealNextCandidate(currentResult, ticket));
  }

  return (
    <main className="min-h-screen font-hanja">
      <section className="mx-auto grid w-full max-w-5xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="grid gap-3 border-b border-line pb-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <div className="order-2 flex flex-wrap gap-2 lg:order-1">
            <button
              type="button"
              onClick={() => router.push(localePath("/hanja-meaning", locale))}
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
          <div className="order-1 min-w-0 lg:order-2">
            <AdBanner
              variant="header"
              slotKey="hanja_result_header"
              label="한자 추천 결과 상단 배너 광고"
            />
          </div>
        </header>

        {!ready ? (
          <section className="rounded-lg border border-line bg-surface p-6 text-sm text-muted shadow-sm">
            결과를 불러오고 있습니다.
          </section>
        ) : stored ? (
          <div className="grid gap-5">
            <ResultStorageNotice persistence={stored.persistence} />
            {totalCount > 0 && totalCount < 5 ? (
              <div className="rounded-lg border border-brand-teal/25 bg-brand-teal/5 p-4 text-sm leading-6 text-muted">
                <p className="font-semibold text-foreground">
                  유효한 한자 후보 {totalCount}개
                </p>
                <p className="mt-1">
                  제공된 공식 인명용 한자 데이터에서 지정 발음과 의미가 분명한 후보가 {totalCount}개만
                  확인되었습니다. 약자 표기만 있는 글자, 뜻 없이 음가 목록만 있는 글자, 의미가 겹치거나
                  부적합한 글자는 결과 품질을 위해 제외했으며, 후보 수를 억지로 채우지 않습니다.
                </p>
              </div>
            ) : null}
            <ResultCard
              service={services.hanjaMeaning}
              result={currentResult}
              candidateLimit={candidateLimit}
              detailedHanja={detailedHanja}
            />
            <PremiumHanjaCheckoutPanel
              inputFactors={stored.inputFactors}
              result={currentResult}
              paymentConfigured={paymentConfigured}
              premiumTestMode={premiumTestMode}
              // 상품이 여는 범위는 서버가 상품표를 보고 정한다. 화면은 결제 증명만 넘긴다 —
              // 여기서 개수를 넘겨 서버가 그대로 믿으면 잠금이 다시 화면 몫이 된다.
              onPremiumReady={async (unlockedCandidateCount, entitlement, headers) => {
                setCandidateLimit(unlockedCandidateCount);
                setDetailedHanja(true);
                if (currentResult) {
                  applyOpened(await unsealAllCandidates(currentResult, entitlement, headers));
                }
              }}
            />
            <CandidateUnlockPanel
              revealedCount={revealedCount}
              totalCount={freeCandidateCount}
              locale={locale}
              serviceType={services.hanjaMeaning.serviceType}
              onUnlock={revealNextCandidate}
            />
            {totalCount > 0 ? (
              <ResultAddOnServices
                service={services.hanjaMeaning}
                // 오픈된 후보의 이름 한자만 넘긴다(잠금 후보는 제외).
                hanjaNameOptions={hanjaOptionsOf(currentResult, revealedCount)}
                familyNameHanja={
                  typeof stored.inputFactors?.familyNameHanja === "string"
                    ? stored.inputFactors.familyNameHanja.trim()
                    : undefined
                }
                familyNameHangul={
                  typeof stored.inputFactors?.familyName === "string"
                    ? stored.inputFactors.familyName.trim()
                    : undefined
                }
              />
            ) : null}
          </div>
        ) : (
          <section className="rounded-lg border border-line bg-surface p-6 shadow-sm">
            <h1 className="text-lg font-semibold">결과를 불러올 수 없습니다.</h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              이 결과는 분석을 진행한 브라우저 탭에서만 확인할 수 있습니다.
            </p>
            <Link
              href={localePath("/hanja-meaning", locale)}
              className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-semibold text-background"
            >
              입력 화면으로 돌아가기
            </Link>
          </section>
        )}
      </section>
      <SiteFooter locale={locale} policyMode="modal" />
    </main>
  );
}
