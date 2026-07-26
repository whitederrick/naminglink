import Link from "next/link";

import type { Locale } from "@/lib/i18n";

/**
 * 랜딩 외 페이지의 머리글. 히어로만큼 어둡게 깔지는 않되, 자두색 띠를 얹어 랜딩과 같은
 * 계열로 읽히게 한다. 입력·결과 화면은 읽기가 우선이라 본문은 밝은 배경을 유지한다.
 */
export function PageHeader({
  brand,
  locale,
}: {
  brand: string;
  locale: Locale;
}) {
  return (
    <div className="hero-backdrop relative overflow-hidden">
      <div aria-hidden className="hero-texture absolute inset-0" />
      <div className="relative mx-auto w-full max-w-2xl px-6 py-5">
        <Link
          href={`/?lang=${locale}`}
          className="inline-flex items-center gap-2.5 text-white"
        >
          <span
            aria-hidden
            className="flex size-8 items-center justify-center rounded-md border border-white/30 bg-white/12 backdrop-blur"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 26 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="10" cy="13" r="6.2" />
              <circle cx="16" cy="13" r="6.2" />
            </svg>
          </span>
          <span className="text-base font-semibold">{brand}</span>
        </Link>
      </div>
    </div>
  );
}
