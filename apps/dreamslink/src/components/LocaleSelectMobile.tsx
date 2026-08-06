"use client";

import { Languages } from "lucide-react";

import { localeLabels, translatedLocales, type Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";

/**
 * 좁은 화면의 언어 선택기. **`<select>`를 쓴다** — naminglink `LanguageSelectMobile`과 같은 방식이다.
 *
 * 목록을 우리가 그리지 않고 브라우저에 맡기는 것이 핵심이다. iOS Safari는 이 요소를 누르면
 * 화면 아래에서 휠 피커를 올려 주고, 안드로이드는 네이티브 목록 시트를 띄운다. 23개가 아무리
 * 길어도 **화면 위에 상자를 그리지 않으므로 레이아웃이 깨질 수 없다** — 이 저장소가 광고 배너와
 * 푸터 선택기에서 이미 두 번 겪은 폭 문제가 여기서는 구조적으로 생기지 않는다.
 *
 * 넓은 화면에서는 이것을 감추고 `<details>` 드롭다운을 쓴다(`LocaleSelect`).
 *
 * **`router.push`가 아니라 문서를 통째로 다시 부른다.** 로케일은 미들웨어가 `x-locale` 헤더로
 * 알려 주고 루트 레이아웃이 그것으로 `<html lang>`·`<html dir>`을 정한다. 소프트 내비게이션은
 * 루트 레이아웃을 다시 그리지 않으므로 아랍어로 바꿔도 `dir="rtl"`이 따라오지 않는다.
 * 기존 `LocaleSwitcher`가 `<a href>`를 쓰는 이유와 같다.
 *
 * **크롤러는 이 요소를 보지 않아도 된다.** 같은 DOM에 `<details>`의 `<a href>`가 그대로 있고
 * (좁은 화면에서 CSS로 감출 뿐), `<head>`의 hreflang이 언어판을 따로 알린다.
 */
export function LocaleSelectMobile({
  locale,
  label,
  path,
  className = "",
}: {
  locale: Locale;
  /** "현재 언어"처럼 이미 로케일별로 번역돼 있는 라벨. 여기서 새로 짓지 않는다. */
  label: string;
  /** 지금 화면의 경로(로케일 없는 형태). 예: `/compatibility` */
  path: string;
  className?: string;
}) {
  return (
    <label
      className={`inline-flex items-center gap-1.5 rounded-lg border border-line/70 bg-surface/75 px-2.5 py-2 text-sm text-muted ${className}`}
    >
      <Languages aria-hidden="true" size={15} />
      <span className="sr-only">{label}</span>
      {/* 화면에 보이는 것은 현재 언어뿐이고, 목록은 누를 때 OS가 띄운다.
          `appearance-none`으로 기본 화살표를 지우면 iOS에서 탭 영역이 좁아지는 기기가 있어
          그대로 둔다 — 모양보다 눌리는 것이 먼저다. */}
      <select
        aria-label={label}
        value={locale}
        onChange={(event) => {
          const next = event.target.value as Locale;
          if (next === locale) return;
          window.location.assign(localePath(path, next));
        }}
        className="min-w-0 bg-transparent text-sm font-medium text-foreground outline-none"
      >
        {translatedLocales.map((item) => (
          <option key={item} value={item}>
            {localeLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
