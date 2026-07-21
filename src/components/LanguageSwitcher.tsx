import Link from "next/link";
import {
  localeLabels,
  primaryLocales,
  supportedLocales,
  type Locale,
} from "@/lib/services";

type LanguageSwitcherProps = {
  locale: Locale;
  currentLanguageLabel: string;
  moreLabel: string;
  closeLabel: string;
  className?: string;
};

export function LanguageSwitcher({
  locale,
  currentLanguageLabel,
  moreLabel,
  closeLabel,
  className = "",
}: LanguageSwitcherProps) {
  // 접속 위치/브라우저 언어로 감지된(또는 선택된) 언어가 '더보기'에 숨지 않도록
  // 기본 노출 줄에 끼워 넣는다. 자리는 한국어 다음, 마지막 기본 항목은 더보기로 내려간다.
  const primaryRow = primaryLocales.includes(locale)
    ? primaryLocales
    : [
        primaryLocales[0],
        locale,
        ...primaryLocales.slice(1, primaryLocales.length - 1),
      ];
  const secondaryRow = supportedLocales.filter(
    (item) => !primaryRow.includes(item),
  );

  return (
    <div
      className={`flex max-w-full flex-wrap items-center justify-end gap-2 text-sm lg:flex-nowrap ${className}`}
    >
      <span className="sr-only">
        {currentLanguageLabel}: {localeLabels[locale]}
      </span>
      {primaryRow.map((item) => (
        <Link
          key={item}
          href={`/?lang=${item}`}
          className={`inline-flex h-10 w-[4.8rem] shrink-0 items-center justify-center rounded-lg border px-2 text-center transition ${
            locale === item
              ? "border-white bg-white text-foreground"
              : "border-white/35 bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {localeLabels[item]}
        </Link>
      ))}
      <details className="group relative shrink-0">
        <summary className="flex h-10 w-[4.8rem] cursor-pointer list-none items-center justify-center rounded-lg border border-white/35 bg-white/10 px-1 text-center text-[12px] font-semibold leading-none text-white transition hover:bg-white/20">
          <span className="whitespace-nowrap group-open:hidden">
            {moreLabel}
          </span>
          <span className="hidden whitespace-nowrap group-open:inline">
            {closeLabel}
          </span>
        </summary>
        <div className="absolute right-0 z-50 mt-1.5 grid w-[min(92vw,48rem)] grid-cols-2 gap-x-2 gap-y-1 rounded-lg border border-white/20 bg-foreground/96 p-2 shadow-xl backdrop-blur sm:grid-cols-3 lg:grid-cols-6">
          {secondaryRow.map((item) => (
            <Link
              key={item}
              href={`/?lang=${item}`}
              className={`flex min-h-7 items-center justify-center rounded-md px-2 py-1 text-center text-sm leading-none transition ${
                locale === item
                  ? "bg-white text-foreground"
                  : "text-white/82 hover:bg-white/12 hover:text-white"
              }`}
            >
              {localeLabels[item]}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}
