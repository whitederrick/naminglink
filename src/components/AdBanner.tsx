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
  const heightClass =
    variant === "header"
      ? "min-h-[100px] lg:min-h-[90px]"
      : "min-h-20";
  const displayLabel = label ?? labels[variant];

  return (
    <div
      data-ad-placement={variant}
      data-ad-slot={slotKey}
      aria-label={displayLabel}
      className={`flex w-full items-center justify-center rounded-lg border border-dashed border-line bg-surface-strong px-4 text-center text-xs text-muted ${heightClass}`}
    >
      {displayLabel}
    </div>
  );
}
