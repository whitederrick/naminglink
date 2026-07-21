"use client";

import { CreditCard, Eye, Unlock } from "lucide-react";
import { useState } from "react";
import { AdBanner } from "@/components/AdBanner";
import { trackAdEvent } from "@/lib/analytics-client";

const UNLOCK_AD_SECONDS = 5;

// 외국인 대상 서비스(GLOBAL_TO_KOREAN)에서만 로케일 문구를 쓰고, 한국어 대상 서비스는 항상 ko를 유지한다.
type UnlockCopy = {
  title: string;
  status: (revealed: number, locked: number) => string;
  descHanja: string;
  descDefault: string;
  watchingNote: (seconds: number) => string;
  watching: string;
  watchButton: string;
  hanjaProductsLink: string;
  bulkButton: string;
  bulkPreparing: string;
};

const unlockCopies: Record<string, UnlockCopy> = {
  ko: {
    title: "추가 후보 열기",
    status: (revealed, locked) => `현재 ${revealed}개 공개 · ${locked}개 잠금`,
    descHanja:
      "광고를 한 번 확인할 때마다 서로 다른 추천 관점의 다음 후보 1개가 열립니다. 전체 결제 시에는 모든 후보와 한자 종합 상세를 광고 없이 확인할 수 있도록 준비 중입니다.",
    descDefault:
      "광고를 한 번 확인할 때마다 서로 다른 추천 관점의 다음 후보 1개가 열립니다. 990원 결제로 남은 후보 전체를 광고 없이 한 번에 공개하는 기능을 준비 중입니다.",
    watchingNote: (seconds) => `광고 확인 후 후보 1개를 엽니다. ${seconds}초`,
    watching: "광고 확인 중",
    watchButton: "광고 보고 다음 후보 열기",
    hanjaProductsLink: "전체 후보 상품 보기 · 2,900원부터",
    bulkButton: "전체 후보 일괄 공개 · 990원 (준비 중)",
    bulkPreparing: "결제 기능 준비 중입니다.",
  },
  vi: {
    title: "Mở thêm ứng viên",
    status: (revealed, locked) => `Đã mở ${revealed} · còn khóa ${locked}`,
    descHanja:
      "Mỗi lần xem quảng cáo sẽ mở thêm một ứng viên với góc nhìn khác.",
    descDefault:
      "Mỗi lần xem quảng cáo sẽ mở thêm một ứng viên với góc nhìn khác. Tính năng mở toàn bộ ứng viên còn lại với ₩990 sắp ra mắt.",
    watchingNote: (seconds) => `Sẽ mở một ứng viên sau quảng cáo. ${seconds} giây`,
    watching: "Đang xem quảng cáo",
    watchButton: "Xem quảng cáo để mở ứng viên tiếp theo",
    hanjaProductsLink: "Xem gói toàn bộ ứng viên · từ ₩2.900",
    bulkButton: "Mở toàn bộ ứng viên · ₩990 (sắp ra mắt)",
    bulkPreparing: "Tính năng thanh toán sắp ra mắt.",
  },
  th: {
    title: "เปิดชื่อที่แนะนำเพิ่มเติม",
    status: (revealed, locked) => `เปิดแล้ว ${revealed} รายการ · ล็อกอยู่ ${locked} รายการ`,
    descHanja:
      "การชมโฆษณาแต่ละครั้งจะเปิดชื่อที่แนะนำถัดไปอีก 1 รายการจากมุมมองการแนะนำที่ต่างกัน",
    descDefault:
      "การชมโฆษณาแต่ละครั้งจะเปิดชื่อที่แนะนำถัดไปอีก 1 รายการจากมุมมองการแนะนำที่ต่างกัน ฟีเจอร์ปลดล็อกชื่อที่แนะนำที่เหลือทั้งหมดในครั้งเดียวด้วย ₩990 กำลังจะเปิดเร็ว ๆ นี้",
    watchingNote: (seconds) => `จะเปิดชื่อที่แนะนำ 1 รายการหลังชมโฆษณา ${seconds} วินาที`,
    watching: "กำลังชมโฆษณา",
    watchButton: "ชมโฆษณาเพื่อเปิดชื่อที่แนะนำถัดไป",
    hanjaProductsLink: "ดูแพ็กเกจชื่อที่แนะนำทั้งหมด · เริ่มต้น ₩2,900",
    bulkButton: "เปิดชื่อที่แนะนำทั้งหมดในครั้งเดียว · ₩990 (เร็ว ๆ นี้)",
    bulkPreparing: "ฟีเจอร์การชำระเงินกำลังจะเปิดเร็ว ๆ นี้",
  },
  en: {
    title: "Unlock more candidates",
    status: (revealed, locked) => `${revealed} revealed · ${locked} locked`,
    descHanja:
      "Each ad you watch reveals the next candidate with a different perspective.",
    descDefault:
      "Each ad you watch reveals the next candidate with a different perspective. A one-time ₩990 unlock for all remaining candidates is coming soon.",
    watchingNote: (seconds) => `Revealing one candidate after the ad. ${seconds}s`,
    watching: "Watching ad",
    watchButton: "Watch an ad to reveal the next candidate",
    hanjaProductsLink: "View full candidate products · from ₩2,900",
    bulkButton: "Unlock all candidates · ₩990 (coming soon)",
    bulkPreparing: "Payment is coming soon.",
  },
};

export function CandidateUnlockPanel({
  revealedCount,
  totalCount,
  locale,
  serviceType,
  onUnlock,
}: {
  revealedCount: number;
  totalCount: number;
  locale?: string;
  serviceType?: string;
  onUnlock: () => void;
}) {
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const remainingCount = Math.max(0, totalCount - revealedCount);
  const copy =
    serviceType === "GLOBAL_TO_KOREAN" && locale && locale !== "ko"
      ? unlockCopies[locale] ?? unlockCopies.en
      : unlockCopies.ko;

  async function unlockWithAd() {
    if (loading || remainingCount === 0) return;

    setLoading(true);
    trackAdEvent({ eventType: "IMPRESSION", slotKey: "candidate_unlock", locale, serviceType });
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
      trackAdEvent({ eventType: "REWARD_GRANTED", slotKey: "candidate_unlock", locale, serviceType });
    } finally {
      window.clearInterval(timer);
      setCountdown(0);
      setLoading(false);
    }
  }

  if (totalCount <= 1 || remainingCount === 0) return null;

  return (
    <section className="rounded-lg border border-brand-teal/25 bg-surface p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-surface-strong text-brand-teal">
          <Unlock aria-hidden="true" size={20} />
        </span>
        <div>
          <p className="text-sm font-semibold text-brand-teal">{copy.title}</p>
          <h2 className="mt-1 text-lg font-semibold">
            {copy.status(Math.min(revealedCount, totalCount), remainingCount)}
          </h2>
          <p className="mt-2 text-sm leading-6 text-muted">
            {serviceType === "HANJA_MEANING_MATCH" ? copy.descHanja : copy.descDefault}
          </p>
        </div>
      </div>

      {loading ? (
        <div className="mt-5 grid gap-3">
          <AdBanner variant="leaderboard" />
          <p className="text-center text-sm font-medium text-brand-teal">
            {copy.watchingNote(countdown)}
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
          {loading ? copy.watching : copy.watchButton}
        </button>
        {serviceType === "HANJA_MEANING_MATCH" ? (
          <a
            href="#premium-hanja-analysis"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal"
          >
            <CreditCard aria-hidden="true" size={17} />
            {copy.hanjaProductsLink}
          </a>
        ) : (
          <button
            type="button"
            disabled
            title={copy.bulkPreparing}
            className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-lg border border-brand-teal/35 bg-surface-strong px-4 text-sm font-semibold text-brand-teal opacity-60"
          >
            <CreditCard aria-hidden="true" size={17} />
            {copy.bulkButton}
          </button>
        )}
      </div>
    </section>
  );
}
