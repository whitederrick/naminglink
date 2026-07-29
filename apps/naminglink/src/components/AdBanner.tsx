"use client";

import { useEffect, useRef } from "react";

import { adSlotFor, adsenseClient, type AdPlacement } from "@/lib/ads";

// 광고 자리. **슬롯 ID가 있으면 실제 애드센스 유닛을, 없으면 자리 표시만** 그린다.
//
// 자리 표시는 개발에서만 남긴다. 운영에서 슬롯이 비면 아무것도 그리지 않는다 — 빈 상자가
// 이용자에게 보일 이유가 없고, 애드센스 심사에서도 "광고처럼 보이는 빈 자리"는 좋을 것이 없다.
//
// `slotKey`가 광고 자리 이름(`lib/ads.ts`의 adSlots 키)과 이어진다. 이름이 맞지 않으면
// 슬롯을 못 찾아 자리 표시로 떨어지므로, 새 자리를 만들 때 양쪽을 함께 고칠 것.

type AdBannerProps = {
  variant?: "header" | "leaderboard" | "inline" | "sidebar";
  /**
   * **필수다.** 예전에는 선택이라 세 자리가 슬롯 없이 붙어 있었고, 그 자리들은 퍼블리셔 ID를
   * 넣어도 영원히 빈 채로 남았다. 타입도 `string`이 아니라 `AdPlacement`라 `lib/ads.ts`에
   * 없는 이름을 쓰면 컴파일이 깨진다.
   */
  slotKey: AdPlacement;
  label?: string;
};

const labels = {
  header: "상단 배너 광고",
  leaderboard: "가로 배너 광고",
  inline: "콘텐츠 배너 광고",
  sidebar: "사이드 배너 광고",
};

export function AdBanner({
  variant = "inline",
  slotKey,
  label,
}: AdBannerProps) {
  const isHeaderSlot = variant === "header";
  const isConsentSlot = slotKey === "consent_card";
  const mobileSizes = isHeaderSlot
    ? "320x100,320x50"
    : isConsentSlot
      ? "300x100,250x100"
      : undefined;
  const desktopSizes = isHeaderSlot
    ? "970x90,728x90"
    : isConsentSlot
      ? "336x100,300x100"
      : undefined;
  const heightClass =
    isHeaderSlot
      ? "min-h-[100px] lg:min-h-[90px]"
      : isConsentSlot
        ? "min-h-[100px]"
      : "min-h-20";
  const displayLabel = label ?? labels[variant];

  const slot = adSlotFor(slotKey);
  const pushed = useRef(false);
  useEffect(() => {
    if (!slot || pushed.current) return;
    try {
      // 스크립트가 아직 안 왔어도 밀어 둔 요청은 로드 후 처리된다(배열에 쌓이는 구조).
      const w = window as unknown as { adsbygoogle?: unknown[] };
      (w.adsbygoogle = w.adsbygoogle ?? []).push({});
      pushed.current = true;
    } catch {
      // 광고 로드 실패가 화면을 망가뜨리면 안 된다.
    }
  }, [slot]);

  if (slot) {
    return (
      <aside aria-label={displayLabel} className="w-full max-w-full overflow-hidden">
        <p className="mb-2 text-center text-xs uppercase tracking-wide text-muted">
          {displayLabel}
        </p>
        <ins
          className="adsbygoogle block"
          style={{ display: "block" }}
          data-ad-client={adsenseClient}
          data-ad-slot={slot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </aside>
    );
  }

  // 슬롯이 없을 때. 운영에서는 아무것도 그리지 않는다.
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div
      data-ad-placement={variant}
      data-ad-slot={slotKey}
      data-ad-sizes-mobile={mobileSizes}
      data-ad-sizes-desktop={desktopSizes}
      data-ad-responsive={mobileSizes && desktopSizes ? "true" : undefined}
      aria-label={displayLabel}
      className={`flex w-full max-w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-line bg-surface-strong px-4 text-center text-xs text-muted ${heightClass}`}
    >
      {isHeaderSlot ? (
        <>
          <span className="lg:hidden">{displayLabel} · 모바일 320×100 / 320×50</span>
          <span className="hidden lg:inline">{displayLabel} · PC 970×90 / 728×90</span>
        </>
      ) : isConsentSlot ? (
        <>
          <span className="lg:hidden">{displayLabel} · 모바일 300×100 / 250×100</span>
          <span className="hidden lg:inline">{displayLabel} · PC 336×100 / 300×100</span>
        </>
      ) : (
        displayLabel
      )}
    </div>
  );
}
