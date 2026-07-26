"use client";

import { localeLabels, translatedLocales, type Locale } from "@/lib/i18n";

/**
 * 지금은 번역이 있는 로케일(ko·en)만 노출한다. 나머지 21개는 사전을 채우면
 * `translatedLocales`가 자동으로 늘어나므로 이 컴포넌트는 고치지 않아도 된다.
 */
export function LocaleSwitcher({ current }: { current: Locale }) {
  return (
    <nav aria-label="Language" className="flex items-center gap-1 text-sm">
      {translatedLocales.map((locale) => {
        const active = locale === current;
        return (
          <a
            key={locale}
            href={`?lang=${locale}`}
            aria-current={active ? "true" : undefined}
            className={
              active
                ? "rounded-full bg-brand-plum px-3 py-1 text-white"
                : "rounded-full px-3 py-1 text-muted hover:bg-surface-strong"
            }
          >
            {localeLabels[locale]}
          </a>
        );
      })}
    </nav>
  );
}
