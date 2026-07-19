"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, RotateCcw, ShoppingBag } from "lucide-react";
import { useMemo, useState, useSyncExternalStore } from "react";
import { AdBanner } from "@/components/AdBanner";
import { ResultCard } from "@/components/ResultCard";
import { ResultStorageNotice } from "@/components/ResultStorageNotice";
import { SiteFooter } from "@/components/SiteFooter";
import {
  globalNameToHangulService,
  type Locale,
} from "@/lib/services";

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

function ReanalysisSection({
  stored,
  storageKey,
  onUpdated,
}: {
  stored: StoredResult;
  storageKey: string;
  onUpdated: (next: StoredResult) => void;
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
    setLoading(true);
    setCountdown(5);
    const timer = window.setInterval(() => {
      setCountdown((current) => Math.max(0, current - 1));
    }, 1000);

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
        new Promise((resolve) => window.setTimeout(resolve, 5000)),
      ]);
      const payload = (await response.json()) as ApiResult;

      if (!response.ok || !payload.ok || !payload.result) {
        throw new Error(payload.error || "발음 재분석을 완료하지 못했습니다.");
      }

      const next: StoredResult = {
        result: payload.result,
        logId: payload.logId ?? null,
        persistence: payload.persistence ?? "skipped",
        createdAt: new Date().toISOString(),
        inputFactors,
      };
      sessionStorage.setItem(storageKey, JSON.stringify(next));
      onUpdated(next);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "발음 재분석 중 오류가 발생했습니다.",
      );
    } finally {
      window.clearInterval(timer);
      setCountdown(0);
      setLoading(false);
    }
  }

  return (
    <section className="rounded-lg border border-brand-teal/25 bg-surface p-5 shadow-sm">
      <p className="text-sm font-semibold text-brand-teal">
        실제 발음과 다른가요?
      </p>
      <h2 className="mt-2 text-lg font-semibold">발음 힌트로 다시 분석</h2>
      <p className="mt-2 text-sm leading-6 text-muted">
        실제 발음 방법을 더 구체적으로 입력하면 같은 이름과 언어·국가 조건으로
        다시 분석합니다.
      </p>
      <label className="mt-5 grid gap-2">
        <span className="text-sm font-medium">실제 발음 힌트</span>
        <input
          value={pronunciationHint}
          onChange={(event) => setPronunciationHint(event.target.value)}
          placeholder="예: Dan-yell과 비슷함"
          className="h-11 rounded-lg border border-line bg-background px-3 text-sm outline-none transition focus:border-foreground"
        />
      </label>
      {loading ? (
        <div className="mt-5 grid gap-3">
          <AdBanner variant="leaderboard" />
          <p className="text-center text-sm font-medium text-brand-teal">
            광고 확인 후 다시 분석합니다. {countdown}초
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
        disabled={loading || !pronunciationHint.trim()}
        className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-50"
      >
        <RotateCcw aria-hidden="true" size={17} />
        {loading ? "다시 분석 중" : "발음 힌트로 다시 분석"}
      </button>
    </section>
  );
}

function ResultServices() {
  return (
    <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
      <p className="text-sm font-semibold text-brand-teal">
        결과를 더 활용해 보세요
      </p>
      <h2 className="mt-2 text-lg font-semibold">이름 굿즈</h2>
      <div className="mt-5 grid gap-4">
        <article className="flex h-full flex-col rounded-lg border border-line bg-background p-5">
          <span className="flex size-10 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
            <ShoppingBag aria-hidden="true" size={20} />
          </span>
          <h3 className="mt-4 font-semibold">
            한글 이름 굿즈
            <span className="ml-1 text-sm font-medium text-muted">
              (모자 · 키링 · 티셔츠 등)
            </span>
          </h3>
          <p className="mt-2 text-sm leading-6 text-muted">
            선택한 한글 이름을 모자, 키링, 티셔츠 등에 새겨 나만의 굿즈를
            만들어보세요.
          </p>

          <button
            type="button"
            disabled
            className="mt-5 inline-flex h-10 items-center justify-center rounded-lg bg-surface-strong px-3 text-sm font-semibold text-muted disabled:cursor-not-allowed"
          >
            굿즈 신청 준비 중
          </button>
        </article>
      </div>
    </section>
  );
}

const emptySubscribe = () => () => {};

export function HangulPronunciationResultPage({
  resultId,
  locale,
}: {
  resultId: string;
  locale: Locale;
}) {
  const router = useRouter();
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

  return (
    <main className="min-h-screen">
      <section className="mx-auto grid w-full max-w-5xl gap-6 px-5 py-6 sm:px-8 lg:px-10">
        <header className="grid gap-3 border-b border-line pb-5 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center">
          <div className="order-2 flex flex-wrap gap-2 lg:order-1">
            <button
              type="button"
              onClick={() =>
                router.push(`/global-to-korean?lang=${locale}&mode=transliteration`)
              }
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
              slotKey="hangul_result_header"
              label="한글 발음 결과 상단 배너 광고"
            />
          </div>
          <p className="order-3 text-sm text-muted">한글 발음 분석 결과</p>
        </header>

        {!ready ? (
          <section className="rounded-lg border border-line bg-surface p-6 text-sm text-muted shadow-sm">
            결과를 불러오고 있습니다.
          </section>
        ) : currentStored ? (
          <div className="grid gap-5">
            <ResultStorageNotice persistence={currentStored.persistence} />
            <section className="rounded-lg border border-line bg-surface p-5 shadow-sm">
              <p className="text-sm font-semibold text-brand-teal">분석 완료</p>
              <h1 className="mt-2 text-2xl font-semibold">
                본인 이름의 한글 발음 표기
              </h1>
            </section>
            <ResultCard
              service={globalNameToHangulService}
              result={currentStored.result}
              revealedCount={1}
            />
            <ReanalysisSection
              key={currentStored.createdAt}
              stored={currentStored}
              storageKey={storageKey}
              onUpdated={setUpdatedStored}
            />
            <ResultServices />
          </div>
        ) : (
          <section className="rounded-lg border border-line bg-surface p-6 shadow-sm">
            <h1 className="text-lg font-semibold">결과를 불러올 수 없습니다.</h1>
            <p className="mt-2 text-sm leading-6 text-muted">
              이 결과는 분석을 진행한 브라우저 탭에서만 확인할 수 있습니다.
            </p>
            <Link
              href={`/global-to-korean?lang=${locale}&mode=transliteration`}
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
