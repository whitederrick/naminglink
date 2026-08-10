"use client";

import { useRouter } from "next/navigation";
import { Sparkles } from "lucide-react";

import { localePath } from "@/lib/locale-path";
import { localeLabels, type Locale } from "@/lib/services";

/**
 * 좁은 화면의 언어 선택기. **`<select>`를 쓴다.**
 *
 * 목록을 우리가 그리지 않고 브라우저에 맡기는 것이 핵심이다. iOS Safari는 이 요소를 누르면
 * 화면 아래에서 휠 피커를 올려 주고, 안드로이드는 네이티브 목록 시트를 띄운다. 23개가 아무리
 * 길어도 **화면 위에 상자를 그리지 않으므로 레이아웃이 깨질 수 없다** — 광고 배너·푸터
 * 선택기·서비스 칩에서 세 번 겪은 폭 문제가 여기서는 구조적으로 생기지 않는다.
 *
 * 넓은 화면에서는 이것을 감추고 `<details>` 드롭다운을 쓴다. 마우스로는 23개를 한눈에 보고
 * 바로 누르는 편이 빠르고, 그 폭에서는 상자를 띄워도 깨질 일이 없기 때문이다.
 *
 * **크롤러는 이 요소를 보지 않아도 된다.** 같은 DOM에 `<details>`의 `<a href>`가 그대로 있고
 * (좁은 화면에서 CSS로 감출 뿐), `<head>`의 hreflang이 언어판을 따로 알린다. 개수는 화면마다
 * 다르다 — 글로벌 전용 화면에는 한국어판이 없어 하나 적다(`lib/route-locales.ts`).
 *
 * **고를 수 있는 언어는 부모가 정해 넘긴다.** 여기서 `supportedLocales`를 직접 돌면 넓은
 * 화면과 좁은 화면이 서로 다른 목록을 갖게 된다 — 2026-08-10에 실제로 그랬다. 드롭다운에서는
 * 한국어를 뺐는데 이 `<select>`는 그대로 두어, **휴대폰에서만** 눌러도 영어로 되돌아오는
 * 선택지가 보였다. 목록은 한 곳에서 만든다.
 */
export function LanguageSelectMobile({
  locale,
  label,
  path,
  query,
  options,
  className = "",
}: {
  locale: Locale;
  label: string;
  path: string;
  query?: string;
  /** 고를 수 있는 언어. 부모가 화면에 맞게 정해 넘긴다. */
  options: readonly Locale[];
  className?: string;
}) {
  const router = useRouter();

  return (
    <label
      className={`inline-flex items-center gap-2 break-keep rounded-lg bg-surface px-3 py-2 text-sm text-muted ${className}`}
    >
      <Sparkles aria-hidden="true" size={15} />
      <span>{label}</span>
      {/* 화면에 보이는 것은 현재 언어뿐이고, 목록은 누를 때 OS가 띄운다.
          `appearance-none`으로 기본 화살표를 지우면 iOS에서 탭 영역이 좁아지는 기기가 있어
          그대로 둔다 — 모양보다 눌리는 것이 먼저다. */}
      <select
        aria-label={label}
        value={locale}
        onChange={(event) => {
          const next = event.target.value as Locale;
          if (next === locale) return;
          router.push(localePath(path, next, query));
        }}
        className="min-w-0 bg-transparent text-sm font-medium text-foreground outline-none"
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {localeLabels[item]}
          </option>
        ))}
      </select>
    </label>
  );
}
