"use client";

import { CreditCard, Eye, Unlock } from "lucide-react";
import { useState } from "react";
import { AdBanner } from "@/components/AdBanner";

const UNLOCK_AD_SECONDS = 5;

export function CandidateUnlockPanel({
  revealedCount,
  totalCount,
  onUnlock,
}: {
  revealedCount: number;
  totalCount: number;
  onUnlock: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const remainingCount = Math.max(0, totalCount - revealedCount);

  async function unlockWithAd() {
    if (loading || remainingCount === 0) return;

    setLoading(true);
    setCountdown(UNLOCK_AD_SECONDS);
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      const elapsed = Math.floor((Date.now() - startedAt) / 1000);
      setCountdown(Math.max(0, UNLOCK_AD_SECONDS - elapsed));
    }, 250);

    try {
      await new Promise((resolve) =>
        window.setTimeout(resolve, UNLOCK_AD_SECONDS * 1000),
      );
      onUnlock();
    } finally {
      window.clearInterval(timer);
      setCountdown(0);
      setLoading(false);
    }
  }

  if (totalCount <= 1) return null;

  return (
    <section className="rounded-lg border border-brand-teal/25 bg-surface p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
          <Unlock aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-teal">추가 후보 열기</p>
          <h2 className="mt-1 text-lg font-semibold">
            현재 {Math.min(revealedCount, totalCount)}개 공개 · {remainingCount}개 잠금
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            광고를 한 번 확인할 때마다 다음 후보 1개가 열립니다. 추가 결제 방식은 결제 연동 후 제공됩니다.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="mt-5 grid gap-3">
          <AdBanner variant="leaderboard" />
          <p className="text-center text-sm font-medium text-brand-teal">
            광고 확인 후 후보 1개를 엽니다. {countdown}초
          </p>
        </div>
      ) : null}

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <button
          type="button"
          onClick={unlockWithAd}
          disabled={loading || remainingCount === 0}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-foreground px-4 text-sm font-semibold text-background transition hover:bg-brand-teal disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Eye aria-hidden="true" size={17} />
          {remainingCount === 0
            ? "모든 후보 공개 완료"
            : loading
              ? "광고 확인 중"
              : "광고 보고 후보 1개 열기"}
        </button>
        <button
          type="button"
          disabled
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-line bg-surface-strong px-4 text-sm font-semibold text-muted disabled:cursor-not-allowed"
        >
          <CreditCard aria-hidden="true" size={17} />
          결제로 후보 1개 열기 · 준비 중
        </button>
      </div>
    </section>
  );
}