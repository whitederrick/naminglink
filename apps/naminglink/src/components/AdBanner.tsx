type AdBannerProps = {
  variant?: "header" | "leaderboard" | "inline" | "sidebar";
  slotKey?: string;
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
