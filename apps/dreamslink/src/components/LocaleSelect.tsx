import { Languages } from "lucide-react";

import { LocaleSelectMobile } from "@/components/LocaleSelectMobile";
import {
  getDictionary,
  localeLabels,
  translatedLocales,
  type Locale,
} from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";

/**
 * 화면 제목 줄에 놓는 **작은** 언어 선택기. naminglink `ServiceLanguageSwitcher`와 같은 방식이다.
 *
 * **왜 바꿨나.** 예전에는 머리글에 언어 단추 6개 + '더보기'가 한 줄로 늘어서 있었다
 * (`LocaleSwitcher`). 랜딩 히어로에서는 그 줄이 화면을 채우는 요소라 어울리지만, 서비스 화면에서는
 * 제목보다 언어 단추가 먼저 눈에 들어왔다. 지금 언어가 무엇인지만 보여 주고 나머지는 접는다.
 *
 * **랜딩은 그대로 둔다.** `LocaleSwitcher`(단추 줄)를 계속 쓴다 — naminglink 랜딩과 같은 꼴이라야
 * 두 서비스가 한 사이트로 읽힌다.
 *
 * **자바스크립트가 없다(넓은 화면).** `<details>`는 브라우저가 직접 여닫으므로 서버에서 그려진다.
 *
 * **지금 보고 있는 화면에 머문다.** 언어만 갈아 끼운다(`/ko/compatibility` → `/es/compatibility`).
 */
export function LocaleSelect({
  locale,
  path,
  className = "",
}: {
  locale: Locale;
  /** 지금 화면의 경로(로케일 없는 형태). 예: `/compatibility` */
  path: string;
  className?: string;
}) {
  const { currentLanguage } = getDictionary(locale);

  // 드롭다운이 `absolute`로 뜨는 기준점이다. 이것이 없으면 상자가 페이지 전체를 기준으로 잡혀
  // 엉뚱한 자리에 뜬다.
  return (
    <div className={`relative shrink-0 ${className}`}>
      {/* 좁은 화면: `<select>`. 목록을 우리가 그리지 않고 OS에 맡긴다 — 상자를 화면에 그리지
          않으므로 23개가 아무리 길어도 레이아웃이 깨질 수 없다. */}
      <LocaleSelectMobile
        locale={locale}
        label={currentLanguage}
        path={path}
        className="sm:hidden"
      />

      {/* 넓은 화면: 드롭다운. 마우스로는 23개를 한눈에 보고 바로 누르는 편이 빠르다. */}
      <details className="group hidden sm:block">
        <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 rounded-lg border border-line/70 bg-surface/75 px-2.5 py-2 text-sm text-muted transition hover:bg-surface-strong hover:text-foreground">
          <Languages aria-hidden="true" size={15} />
          <span className="sr-only">{currentLanguage}: </span>
          <span className="font-medium text-foreground">
            {localeLabels[locale]}
          </span>
          {/* 여닫이라는 것을 알린다. 화살표는 열리면 뒤집는다. */}
          <span aria-hidden="true" className="text-[10px] group-open:rotate-180">
            ▼
          </span>
        </summary>

        {/* **오른쪽 끝에 걸어 고정 폭 대신 상한만 준다.** 절대 배치 + 고정 폭은 이 저장소가 광고
            배너와 푸터 선택기에서 두 번 겪은 함정이다. `right-0`으로 오른쪽에 붙이고 폭은
            `min(92vw, …)`로 묶으면 어느 폭에서도 화면 밖으로 넘칠 수 없다. 게다가 이 상자는
            `sm:` 이상에서만 존재한다(좁은 화면은 `<select>`).

            언어가 23개라 길어질 수 있어 높이를 제한하고 스크롤을 준다. */}
        <div className="absolute right-0 top-full z-50 mt-1.5 max-h-[60vh] w-[min(92vw,34rem)] overflow-y-auto rounded-lg border border-line bg-surface p-2 shadow-xl">
          <div className="flex flex-wrap gap-1">
            {translatedLocales.map((item) => (
              /* **`<a>`다. `next/link`가 아니다.** 로케일은 미들웨어가 `x-locale` 헤더로 알려 주고
                 루트 레이아웃이 그것으로 `<html lang>`·`<html dir>`을 정한다. 소프트 내비게이션은
                 루트 레이아웃을 다시 그리지 않아 아랍어로 바꿔도 `dir="rtl"`이 따라오지 않는다. */
              <a
                key={item}
                href={localePath(path, item)}
                hrefLang={item}
                aria-current={item === locale ? "true" : undefined}
                className={`inline-flex min-h-8 items-center rounded-md px-2.5 py-1 text-[13px] leading-tight transition ${
                  item === locale
                    ? "bg-brand-violet text-white"
                    : "text-foreground hover:bg-surface-strong"
                }`}
              >
                {localeLabels[item]}
              </a>
            ))}
          </div>
        </div>
      </details>
    </div>
  );
}
