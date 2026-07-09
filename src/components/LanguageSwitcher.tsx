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
};

export function LanguageSwitcher({
  locale,
  currentLanguageLabel,
  moreLabel,
  closeLabel,
}: LanguageSwitcherProps) {
  return (
    <div className="flex flex-wrap items-center justify-end gap-2 text-sm">
      <span className="sr-only">
        {currentLanguageLabel}: {localeLabels[locale]}
      </span>
      {primaryLocales.map((item) => (
        <Link
          key={item}
          href={`/?lang=${item}`}
          className={`rounded-lg border px-3 py-2 transition ${
            locale === item
              ? "border-white bg-white text-foreground"
              : "border-white/35 bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          {localeLabels[item]}
        </Link>
      ))}
      <details className="group relative">
        <summary className="flex h-10 cursor-pointer list-none items-center rounded-lg border border-white/35 bg-white/10 px-3 font-semibold text-white transition hover:bg-white/20">
          <span className="group-open:hidden">{moreLabel}</span>
          <span className="hidden group-open:inline">{closeLabel}</span>
        </summary>
        <div className="absolute right-0 z-30 mt-2 grid w-64 grid-cols-2 gap-2 rounded-lg border border-white/20 bg-foreground/96 p-3 shadow-xl backdrop-blur">
          {secondaryLocales.map((item) => (
            <Link
              key={item}
              href={`/?lang=${item}`}
              className={`rounded-lg px-3 py-2 text-sm transition ${
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
