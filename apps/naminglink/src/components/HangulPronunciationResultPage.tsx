"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, RotateCcw } from "lucide-react";
import { useMemo, useState, useSyncExternalStore } from "react";
import { AdBanner } from "@/components/AdBanner";
import { trackAdEvent } from "@/lib/analytics-client";
import { showRewardedAd } from "@/lib/gam-rewarded";
import { CandidateUnlockPanel } from "@/components/CandidateUnlockPanel";
import { GlobalNamePremiumPanel } from "@/components/GlobalNamePremiumPanel";
import { HangulStampCard } from "@/components/HangulStampCard";
import { ResultCard } from "@/components/ResultCard";
import { ResultStorageNotice } from "@/components/ResultStorageNotice";
import { SelfAdCard } from "@/components/SelfAdCard";
import { SiteFooter } from "@/components/SiteFooter";
import {
  globalNameToHangulService,
  type Locale,
} from "@/lib/services";
import {
  lockedSeals,
  persistUnsealedResult,
  unlockedCandidateCount,
  unsealAllCandidates,
  unsealNextCandidate,
} from "@/lib/candidate-seal";
import { getResultCopy, type ResultCopy } from "@/lib/i18n-result";
import { getServiceOverride, localizeServiceHero } from "@/lib/i18n-service";
import { localePath } from "@/lib/locale-path";

type StoredResult = {
  result: unknown;
  logId: string | null;
  persistence: "saved" | "skipped" | "failed";
  createdAt: string;
  inputFactors?: Record<string, unknown>;
};

type ApiResult = {
  ok: boolean;
  logId?: string | null;
  result?: unknown;
  persistence?: "saved" | "skipped" | "failed";
  error?: string;
};

// 발음 표기 아트 PDF(HANGUL_ART_PDF) 주문에 넘길 후보 데이터 추출.
function artCandidatesOf(result: unknown) {
  const candidates = (result as { candidates?: unknown[] } | null)?.candidates;
  if (!Array.isArray(candidates)) return [];
  return candidates
    .map((candidate) => {
      const record =
        candidate && typeof candidate === "object"
          ? (candidate as Record<string, unknown>)
          : {};
      const textOf = (value: unknown) => (typeof value === "string" ? value : undefined);
      return {
        hangul: textOf(record.hangul)?.replace(/\s+/g, " ").trim() ?? "",
        pronunciation: textOf(record.pronunciation),
        ipa: textOf(record.ipa),
        syllables: textOf(record.syllables),
        source_pronunciation_basis: textOf(record.source_pronunciation_basis),
        recommendation_reason: textOf(record.recommendation_reason),
        cultural_fit: textOf(record.cultural_fit),
        usage_note: textOf(record.usage_note),
        caution_notes: textOf(record.caution_notes),
      };
    })
    .filter((candidate) =>
      /^[가-힣]{1,12}(?:\s[가-힣]{1,12}){0,3}$/.test(candidate.hangul),
    );
}

/**
 * 다시 분석을 몇 번 했는지. **컴포넌트 state로 두면 안 된다** — 이 구역은
 * `key={currentStored.createdAt}`으로 붙어 있어 재분석에 성공할 때마다 새로 마운트되고,
 * 그때 state가 0으로 돌아가 2회차가 영원히 오지 않는다.
 *
 * sessionStorage에 두면 새로고침도 견딘다. 화면을 새로 고쳐 한 번 더 공짜로 돌리는 것을 막는다.
 * (지우려 들면 지울 수 있지만, 이 관문은 원래 전부 클라이언트에 있다 — 입력값을 서버에
 * 저장하지 않는다는 원칙과 맞바꾼 것이다.)
 */
function reanalysisCountKey(storageKey: string) {
  return `${storageKey}:reanalysis-count`;
}

function readReanalysisCount(storageKey: string) {
  const raw = sessionStorage.getItem(reanalysisCountKey(storageKey));
  const parsed = Number(raw);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 0;
}

function ReanalysisSection({
  stored,
  storageKey,
  onUpdated,
  copy,
  locale,
}: {
  stored: StoredResult;
  storageKey: string;
  onUpdated: (next: StoredResult) => void;
  copy: ResultCopy;
  locale: Locale;
}) {
  const savedInputFactors = stored.inputFactors ?? {};
  const initialHint =
    typeof savedInputFactors.pronunciationHint === "string"
      ? savedInputFactors.pronunciationHint
      : "";
  const [pronunciationHint, setPronunciationHint] = useState(initialHint);
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [error, setError] = useState<string | null>(null);

  async function reanalyze() {
    setError(null);

    // **오퍼월과 무관하게 항상 광고를 요구한다.** 오퍼월은 입력 화면에서 돌고 결과 화면으로
    // 페이지가 바뀌는 것까지가 그 몫이다. 다시 분석은 같은 페이지에서 새 결과를 만들므로
    // 오퍼월이 다시 뜰 수 없다. 오퍼월 판정을 여기서 보면 한 번 통과한 이용자가 결과를
    // 무제한으로 다시 뽑게 된다(후보 열기와 같은 이유).
    //
    // **첫 번째는 가볍게, 두 번째부터 보상형.** 이 자리는 세 관문 중 유일하게 누를 때마다
    // AI를 다시 부른다(후보 열기는 이미 만들어 둔 후보를 화면에서 여는 것이라 원가가 0이다).
    // 그래서 반복이 곧 비용인데, 힌트를 고쳐가며 두세 번 돌리는 흐름이라 매번 보상형 영상을
    // 강제하면 첫 시도조차 안 하게 된다. 한 번은 열어 두고 반복하는 쪽에만 무게를 단다.
    const previousRuns = readReanalysisCount(storageKey);
    const rewardedTurn = previousRuns >= 1;

    trackAdEvent({
      eventType: "IMPRESSION",
      slotKey: "hangul_candidate_unlock",
      locale,
      serviceType: "GLOBAL_TO_KOREAN",
    });

    if (rewardedTurn) {
      // **보상형을 API 호출보다 먼저 띄운다.** 순서가 반대면 이용자가 광고를 닫아도 AI 비용은
      // 이미 나간 뒤다. 후보 열기는 닫아도 잃을 것이 없어 순서가 문제되지 않지만 여기는 다르다.
      const outcome = await showRewardedAd();
      // 보상 전에 닫았다 — 분석을 돌리지 않는다. 횟수도 올리지 않는다.
      if (outcome === "dismissed") return;
      if (outcome === "granted") {
        trackAdEvent({
          eventType: "REWARD_GRANTED",
          slotKey: "hangul_candidate_unlock",
          locale,
          serviceType: "GLOBAL_TO_KOREAN",
        });
        await runAnalysis(0);
        return;
      }
      // unavailable — 광고 단위 미설정·no-fill·차단기. 아래 5초 관문이 대신 돈다.
      // 광고가 없다고 버튼이 죽으면 안 된다(후보 열기와 같은 원칙).
    }

    await runAnalysis(5);
  }

  /** 관문을 통과한 뒤의 실제 분석. `waitSeconds`가 0이면 기다리지 않는다(보상형이 이미 시간을 썼다). */
  async function runAnalysis(waitSeconds: number) {
    setLoading(true);
    setCountdown(waitSeconds);
    const timer = waitSeconds
      ? window.setInterval(() => {
          setCountdown((current) => Math.max(0, current - 1));
        }, 1000)
      : null;

    try {
      const inputFactors = {
        ...savedInputFactors,
        pronunciationHint: pronunciationHint.trim(),
      };
      const request = fetch("/api/naming", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceType: "GLOBAL_TO_KOREAN",
          inputFactors,
        }),
      });
      const [response] = await Promise.all([
        request,
        new Promise((resolve) => window.setTimeout(resolve, waitSeconds * 1000)),
      ]);
      const payload = (await response.json()) as ApiResult;

      if (!response.ok || !payload.ok || !payload.result) {
        throw new Error(payload.error || copy.reanalysisError);
      }

      const next: StoredResult = {
        result: payload.result,
        logId: payload.logId ?? null,
        persistence: payload.persistence ?? "skipped",
        createdAt: new Date().toISOString(),
        inputFactors,
      };
      sessionStorage.setItem(storageKey, JSON.stringify(next));
      // **성공했을 때만 횟수를 올린다.** 실패한 분석이 공짜 한 번을 잡아먹으면 안 된다.
      // `onUpdated` 앞에 둔다 — 그것이 이 구역을 통째로 다시 마운트하기 때문이다.
      sessionStorage.setItem(
        reanalysisCountKey(storageKey),
        String(readReanalysisCount(storageKey) + 1),
      );
      onUpdated(next);
    } catch (caught) {
      setError(
        caught instanceof Error ? caught.message : copy.reanalysisErrorGeneric,
      );
    } finally {
      if (timer !== null) window.clearInterval(timer);
      setCountdown(0);
      setLoading(false);
    }
  }

  return (
    <section className="rounded-lg border border-brand-teal/25 bg-surface p-5 shadow-sm">
      <p className="text-sm font-semibold text-brand-teal">
        {copy.reanalysisEyebrow}
      </p>
      <h2 className="mt-2 text-lg font-semibold">{copy.reanalysisTitle}</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        {copy.reanalysisDescription}
      </p>
      <label className="mt-5 grid gap-2">
        <span className="text-sm font-medium">{copy.hintLabel}</span>
        <input
          value={pronunciationHint}
          onChange={(event) => setPronunciationHint(event.target.value)}
          placeholder={copy.hintPlaceholder}
          className="h-11 rounded-lg border border-line bg-background px-3 text-sm outline-none transition focus:border-foreground"
        />
      </label>
      {loading ? (
        <div className="mt-5 grid gap-3">
          {/* **이 자리에 애드센스 표시 광고를 두지 않는다.** 다시 분석을 여는 대가로 광고를
              보게 하는 자리라 애드센스 기준으로는 보상형이다(`CandidateUnlockPanel`과 같은 이유).
              대가는 GAM 보상형이 맡고, 없거나 못 뜨면 셀프 광고가 자리를 채운다. */}
          <SelfAdCard />
          <p className="text-center text-sm font-medium text-brand-teal">
            {copy.reanalysisCountdown(countdown)}
          </p>
        </div>
      ) : null}
      {error ? (
        <p className="mt-4 rounded-lg border border-brand-rose/30 bg-brand-rose/10 px-3 py-2 text-sm text-brand-rose">
          {error}
        </p>
      ) : null}
      <button
        type="button"
        onClick={reanalyze}
        // **임시 조치 — 애드센스 승인 전까지만이다.** 띄울 광고가 없는데 다시 분석해 주면
        // **애드센스 상태로 잠그지 않는다.** 관문에서 애드센스를 걷어낸 뒤로는 광고가 꺼져
        // 있어도 관문(1회차 셀프 광고 · 2회차부터 GAM 보상형)이 그대로 돈다.
        disabled={loading || !pronunciationHint.trim()}
        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-50"
      >
        <RotateCcw aria-hidden="true" size={17} />
        {loading ? copy.reanalyzing : copy.reanalysisTitle}
      </button>
    </section>
  );
}

// 도장 소개 카드(ResultServices)는 지웠다. 바로 위의 HangulStampCard가 같은 상품을 파는데
// 결과의 표기까지 채워 주므로, 빈 `/stamp-order` 링크만 있는 카드가 아래에 또 있으면 같은
// 구매 자리가 화면에 두 번 나온다. copy의 goods* 키는 다른 화면과 공유하므로 그대로 둔다.

const emptySubscribe = () => () => {};

export function HangulPronunciationResultPage({
  resultId,
  locale,
}: {
  resultId: string;
  locale: Locale;
}) {
  const router = useRouter();
  const copy = getResultCopy(locale);
  const storageKey = `naminglink:hangul-result:${resultId}`;
  const raw = useSyncExternalStore(
    emptySubscribe,
    () => sessionStorage.getItem(storageKey),
    () => null,
  );
  const ready = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const stored = useMemo(() => {
    if (!raw) return null;

    try {
      return JSON.parse(raw) as StoredResult;
    } catch {
      return null;
    }
  }, [raw]);
  const [updatedStored, setUpdatedStored] = useState<StoredResult | null>(null);
  const currentStored = updatedStored ?? stored;
  // 대안 표기 후보(최대 3개)도 다른 서비스와 동일하게 광고 확인으로 하나씩 연다. 잠긴 후보는
  // 봉인문으로만 와 있어 서버가 풀어 준 것을 받는다.
  const revealedCount = unlockedCandidateCount(currentStored?.result);

  function applyOpened(next: unknown) {
    if (!currentStored) return;
    setUpdatedStored({ ...currentStored, result: next });
    persistUnsealedResult(storageKey, next);
  }

  async function revealNextCandidate(ticket: string | null) {
    if (!currentStored) return;
    applyOpened(await unsealNextCandidate(currentStored.result, ticket));
  }

  async function revealAllCandidates(order: { orderId: string; paymentId: string }) {
    if (!currentStored) return;
    applyOpened(await unsealAllCandidates(currentStored.result, { order }));
  }
  const candidateCount = useMemo(() => {
    const record =
      currentStored?.result && typeof currentStored.result === "object"
        ? (currentStored.result as Record<string, unknown>)
        : null;
    return Array.isArray(record?.candidates) ? record.candidates.length : 0;
  }, [currentStored]);

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-5xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="grid gap-3 border-b border-line pb-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <div className="order-2 flex flex-wrap gap-2 lg:order-1">
            <button
              type="button"
              onClick={() =>
                router.push(localePath("/global-to-korean", locale, "mode=transliteration"))
              }
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
              slotKey="hangul_result_header"
              label={copy.headerAdLabel}
            />
          </div>
        </header>

        {!ready ? (
          <section className="rounded-lg border border-line bg-surface p-6 text-sm text-muted shadow-sm">
            {copy.loading}
          </section>
        ) : currentStored ? (
          <div className="grid gap-5">
            <ResultStorageNotice
              persistence={currentStored.persistence}
              locale={locale}
            />
            <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
              <p className="text-sm font-semibold text-brand-teal">{copy.analysisDone}</p>
              <h1 className="mt-2 text-2xl font-semibold">
                {copy.resultHeading}
              </h1>
            </section>
            <ResultCard
              service={localizeServiceHero(
                getServiceOverride(locale),
                globalNameToHangulService,
              )}
              result={currentStored.result}
              locale={locale}
            />
            <CandidateUnlockPanel
              persistKey={resultId}
              revealedCount={revealedCount}
              totalCount={candidateCount}
              locale={locale}
              serviceType={globalNameToHangulService.serviceType}
              onUnlock={revealNextCandidate}
              onUnlockAll={revealAllCandidates}
            />
            {/* 순서: 결과를 다듬는 것 → 그 결과로 만드는 것.
                발음 교정이 먼저 와야 한다 — 아트 PDF와 도장은 **확정된 표기를 새기는** 상품이라,
                교정을 뒤에 두면 이미 산 뒤에 표기를 고치게 된다. */}
            <ReanalysisSection
              key={currentStored.createdAt}
              stored={currentStored}
              storageKey={storageKey}
              onUpdated={setUpdatedStored}
              copy={copy}
              locale={locale}
            />
            <GlobalNamePremiumPanel
              product="HANGUL_ART_PDF"
              candidates={artCandidatesOf(currentStored.result)}
              // 표기 후보 전체를 담는 상품이라 잠긴 후보도 봉인문으로 함께 넘긴다.
              seals={lockedSeals(currentStored.result).map((entry) => entry.seal)}
              revealedCount={revealedCount}
              inputFactors={currentStored.inputFactors}
              locale={locale}
            />
            {/* 오픈된 음차 표기 후보에서 이름 조각을 골라 도장을 신청한다(발음 이름은 길어서 파트 선택).
                도장 구매 자리는 **여기 하나뿐이다.** 예전에는 이 아래에 도장 소개 카드가 하나 더
                있어 같은 상품 구매 자리가 화면에 두 번 나왔다. 이쪽은 결과의 표기를 그대로
                채워 주므로 남기고, 빈 링크만 있던 소개 카드를 지웠다. */}
            <HangulStampCard
              candidates={artCandidatesOf(currentStored.result)}
              revealedCount={revealedCount}
              locale={locale}
            />
          </div>
        ) : (
          <section className="rounded-lg border border-line bg-surface p-6 shadow-sm">
            <h1 className="text-lg font-semibold">{copy.emptyTitle}</h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              {copy.emptyDescription}
            </p>
            <Link
              href={localePath("/global-to-korean", locale, "mode=transliteration")}
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
