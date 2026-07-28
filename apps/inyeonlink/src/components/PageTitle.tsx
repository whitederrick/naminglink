import { AdBanner } from "@/components/AdBanner";
import type { Locale } from "@/lib/i18n";

/**
 * 화면 제목과 그 옆의 고정 배너 자리.
 *
 * 배너가 머리글에 있을 때는 화면을 열자마자 브랜드·구분선·광고가 먼저 나오고 제목이 그 아래에서
 * 시작했다. 제목 옆으로 내리면 **읽을 것이 있는 자리에 광고가 붙고** 머리글은 돌아갈 길만 남는다.
 *
 * 폭에 상한을 둔다. 제목 옆 남는 자리를 다 내주면 좁은 데스크탑에서 광고가 제목보다 커진다.
 * 좁은 화면에서는 제목 아래로 내려간다.
 *
 * 슬롯이 비어 있으면 `AdBanner`가 아무것도 그리지 않는다 — 지금은 퍼블리셔 ID가 없어 제목만 보인다.
 */
export function PageTitle({
  title,
  locale,
  className = "",
}: {
  title: string;
  locale: Locale;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 ${className}`}
    >
      <h1 className="break-keep-all text-3xl font-bold">{title}</h1>
      <div className="w-full min-w-0 sm:w-auto sm:max-w-[18rem] sm:flex-1">
        <AdBanner placement="header" locale={locale} />
      </div>
    </div>
  );
}
