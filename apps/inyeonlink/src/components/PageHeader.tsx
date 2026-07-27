import Link from "next/link";

import { AdBanner } from "@/components/AdBanner";
import { BrandMark } from "@/components/BrandMark";
import type { Locale } from "@/lib/i18n";

/**
 * 랜딩 외 페이지의 머리글. **naminglink의 서비스 머리글과 같은 구성이다** — 밝은 배경 위에
 * 브랜드가 왼쪽, 고정 배너 광고가 오른쪽. 두 서비스를 오가는 이용자가 같은 자리에서 같은
 * 것을 보게 하려는 것이다.
 *
 * 예전에는 자두색 띠를 깔아 랜딩과 같은 계열로 읽히게 했는데, 입력·결과 화면은 읽기가
 * 우선이고 어두운 띠 위에는 광고를 얹을 자리가 마땅치 않았다.
 *
 * 광고는 슬롯이 비어 있으면 통째로 렌더되지 않는다(`AdBanner`). 지금은 퍼블리셔 ID가 없어
 * 자리만 잡혀 있고 아무것도 그려지지 않는다.
 */
export function PageHeader({
  brand,
  locale,
}: {
  brand: string;
  locale: Locale;
}) {
  return (
    <header className="border-b border-line bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
        <Link
          href={`/?lang=${locale}`}
          className="inline-flex shrink-0 items-center gap-2.5 text-foreground"
        >
          <BrandMark compact onLight />
          <span className="text-base font-semibold">{brand}</span>
        </Link>

        {/* 고정 배너. 브랜드 옆 남는 폭을 쓰고, 좁은 화면에서는 아래로 내려간다. */}
        <div className="min-w-0 flex-1 lg:max-w-2xl">
          <AdBanner placement="header" locale={locale} />
        </div>
      </div>
    </header>
  );
}
