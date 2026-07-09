type AdBannerProps = {
  variant?: "leaderboard" | "inline" | "sidebar";
};

const labels = {
  leaderboard: "광고 슬롯 · 결과 대기 화면 상단",
  inline: "네이티브 광고 슬롯",
  sidebar: "사이드 광고 슬롯",
};

export function AdBanner({ variant = "inline" }: AdBannerProps) {
  return (
    <div className="flex min-h-20 items-center justify-center rounded-lg border border-dashed border-line bg-surface-strong px-4 py-5 text-center text-sm text-muted">
      {labels[variant]}
    </div>
  );
}
