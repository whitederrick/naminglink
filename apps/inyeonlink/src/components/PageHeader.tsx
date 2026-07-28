import Link from "next/link";

import { BrandMark } from "@/components/BrandMark";
import type { Locale } from "@/lib/i18n";

/**
 * 랜딩 외 페이지의 머리글 — 브랜드 하나뿐이다.
 *
 * 예전에는 아래에 구분선을 긋고 브랜드 옆에 고정 배너를 함께 두었다. 그러면 화면을 열자마자
 * 선 하나와 광고 자리가 먼저 눈에 들고, 정작 이 화면이 무엇인지(제목)는 그 아래에서 시작한다.
 * **구분선을 지우고 배너는 제목 옆으로 옮겼다**(`PageTitle`) — 광고는 읽을 것이 있는 자리에
 * 붙어야 하고, 머리글은 돌아갈 길만 있으면 된다.
 */
export function PageHeader({
  brand,
  locale,
}: {
  brand: string;
  locale: Locale;
}) {
  return (
    <header className="bg-background">
      <div className="mx-auto flex w-full max-w-5xl items-center px-6 py-4">
        <Link
          href={`/?lang=${locale}`}
          className="inline-flex shrink-0 items-center gap-2.5 text-foreground"
        >
          <BrandMark compact onLight />
          <span className="text-base font-semibold">{brand}</span>
        </Link>
      </div>
    </header>
  );
}
