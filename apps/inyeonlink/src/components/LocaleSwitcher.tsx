"use client";

import { localeLabels, translatedLocales, type Locale } from "@/lib/i18n";

/**
 * 지금은 번역이 있는 로케일(ko·en)만 노출한다. 나머지 21개는 사전을 채우면
 * `translatedLocales`가 자동으로 늘어나므로 이 컴포넌트는 고치지 않아도 된다.
 */
/**
 * `tone="onDark"`는 히어로 위에 얹을 때 쓴다. naminglink 히어로와 같은 유리질 처리
 * (반투명 흰 배경 + backdrop-blur)라 두 서비스가 같은 계열로 보인다.
 */
export function LocaleSwitcher({
  current,
  tone = "onLight",
}: {
  current: Locale;
  tone?: "onLight" | "onDark";
}) {
  const onDark = tone === "onDark";
  return (
    <nav aria-label="Language" className="flex items-center gap-1 text-sm">
      {translatedLocales.map((locale) => {
        const active = locale === current;
        const className = onDark
          ? active
            ? "rounded-full border border-white/40 bg-white/20 px-3 py-1 text-white backdrop-blur"
            : "rounded-full border border-white/15 px-3 py-1 text-white/70 backdrop-blur transition hover:bg-white/12 hover:text-white"
          : active
            ? "rounded-full bg-brand-plum px-3 py-1 text-white"
            : "rounded-full px-3 py-1 text-muted transition hover:bg-surface-strong";

        return (
          <a
            key={locale}
            href={`?lang=${locale}`}
            aria-current={active ? "true" : undefined}
            className={className}
          >
            {localeLabels[locale]}
          </a>
        );
      })}
    </nav>
  );
}
