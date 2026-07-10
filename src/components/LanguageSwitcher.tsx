import Link from "next/link";
import {
  localeLabels,
  primaryLocales,
  secondaryLocales,
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
  return (
    <div
      className={`flex max-w-full flex-wrap items-center justify-end gap-2 text-sm ${className}`}
    >
      <span className="sr-only">
        {currentLanguageLabel}: {localeLabels[locale]}
      </span>
      {primaryLocales.map((item) => (
        <Link
          key={item}
          href={`/?lang=${item}`}
          className={`inline-flex h-10 w-[5.9rem] shrink-0 items-center justify-center rounded-lg border px-2 text-center transition ${
            locale === item
              ? "border-white bg-white text-foreground"
              : "border-white/35 bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {localeLabels[item]}
        </Link>
      ))}
      <details className="group relative">
        <summary className="flex h-10 w-[5.9rem] cursor-pointer list-none items-center justify-center rounded-lg border border-white/35 bg-white/10 px-2 text-center font-semibold text-white transition hover:bg-white/20">
          <span className="group-open:hidden">{moreLabel}</span>
          <span className="hidden group-open:inline">{closeLabel}</span>
        </summary>
        <div className="absolute right-0 z-30 mt-2 grid w-[min(92vw,42rem)] grid-cols-2 gap-2 rounded-lg border border-white/20 bg-foreground/96 p-3 shadow-xl backdrop-blur sm:grid-cols-4 lg:left-0 lg:right-auto lg:grid-cols-5">
          {secondaryLocales.map((item) => (
            <Link
              key={item}
              href={`/?lang=${item}`}
              className={`rounded-lg px-3 py-2 text-center text-sm leading-tight transition ${
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
