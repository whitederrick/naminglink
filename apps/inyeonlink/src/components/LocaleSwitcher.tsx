import {
  getDictionary,
  localeLabels,
  primaryLocales,
  translatedLocales,
  type Locale,
} from "@/lib/i18n";

/**
 * 언어 선택기. **배치는 naminglink의 `LanguageSwitcher`와 같다** — 기본 줄에 6개(ko·en·ja·
 * zh·de·es)를 두고 나머지는 '더보기'로 접는다. 23개를 한 줄에 늘어놓으면 히어로가 한 화면에
 * 안 들어가고, 두 서비스의 자리가 달라지면 오가는 사용자가 매번 다시 찾아야 한다.
 *
 * 노출 대상은 번역이 있는 로케일(`translatedLocales`)뿐이다. 사전을 채우면 자동으로 늘어나므로
 * 이 컴포넌트는 고치지 않는다.
 *
 * naminglink와 다른 점이 하나 있다: 링크를 `/?lang=`가 아니라 상대 경로 `?lang=`으로 둔다.
 * 그래야 하위 페이지에서 언어를 바꿔도 보던 화면에 그대로 머문다(naminglink는 전부 루트로
 * 튕기는 문제가 있어 SEO 정리 때 이쪽에 맞출 예정).
 *
 * `tone="onDark"`는 히어로 위에 얹을 때 쓴다.
 */
export function LocaleSwitcher({
  current,
  tone = "onLight",
  className = "",
}: {
  current: Locale;
  tone?: "onLight" | "onDark";
  className?: string;
}) {
  const onDark = tone === "onDark";
  const { currentLanguage, moreLanguages, closeLanguages } =
    getDictionary(current);

  // 감지된(또는 선택된) 언어가 '더보기'에 숨지 않도록 기본 줄에 끼워 넣는다. 자리는 한국어
  // 다음이고, 대신 기본 줄의 마지막 항목이 더보기로 내려간다 — naminglink와 같은 규칙이다.
  const available = primaryLocales.filter((locale) =>
    translatedLocales.includes(locale),
  );
  const primaryRow = available.includes(current)
    ? available
    : [available[0], current, ...available.slice(1, available.length - 1)];
  const secondaryRow = translatedLocales.filter(
    (locale) => !primaryRow.includes(locale),
  );

  const pill = (active: boolean) =>
    onDark
      ? active
        ? "border-white bg-white text-[#3d1327]"
        : "border-white/35 bg-white/10 text-white hover:bg-white/20"
      : active
        ? "border-brand-plum bg-brand-plum text-white"
        : "border-line/70 bg-surface/75 text-muted hover:bg-surface-strong";

  return (
    <nav
      aria-label="Language"
      className={`flex max-w-full flex-wrap items-center justify-end gap-2 text-sm lg:flex-nowrap ${className}`}
    >
      <span className="sr-only">
        {currentLanguage}: {localeLabels[current]}
      </span>
      {primaryRow.map((locale) => (
        <a
          key={locale}
          href={`?lang=${locale}`}
          aria-current={locale === current ? "true" : undefined}
          className={`inline-flex h-10 w-[4.8rem] shrink-0 items-center justify-center rounded-lg border px-2 text-center transition ${pill(
            locale === current,
          )}`}
        >
          {localeLabels[locale]}
        </a>
      ))}
      {secondaryRow.length > 0 ? (
        <details className="group relative shrink-0">
          <summary
            className={`flex h-10 w-[4.8rem] cursor-pointer list-none items-center justify-center rounded-lg border px-1 text-center text-[12px] font-semibold leading-none transition ${pill(
              false,
            )}`}
          >
            <span className="whitespace-nowrap group-open:hidden">
              {moreLanguages}
            </span>
            <span className="hidden whitespace-nowrap group-open:inline">
              {closeLanguages}
            </span>
          </summary>
          <div className="absolute right-0 z-50 mt-1.5 grid w-[min(92vw,48rem)] grid-cols-2 gap-x-2 gap-y-1 rounded-lg border border-white/20 bg-[#2a1019]/96 p-2 shadow-xl backdrop-blur sm:grid-cols-3 lg:grid-cols-6">
            {secondaryRow.map((locale) => (
              <a
                key={locale}
                href={`?lang=${locale}`}
                aria-current={locale === current ? "true" : undefined}
                className={`flex min-h-7 items-center justify-center rounded-md px-2 py-1 text-center text-sm leading-none transition ${
                  locale === current
                    ? "bg-white text-[#3d1327]"
                    : "text-white/82 hover:bg-white/12 hover:text-white"
                }`}
              >
                {localeLabels[locale]}
              </a>
            ))}
          </div>
        </details>
      ) : null}
    </nav>
  );
}
