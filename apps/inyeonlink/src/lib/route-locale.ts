import { notFound } from "next/navigation";

import { localeCodes } from "@/lib/locale-codes";
import { isLocale, type Locale } from "@/lib/i18n";

/**
 * 주소 앞의 로케일 조각(`/ja/about`의 `ja`)을 화면이 쓸 값으로 바꾼다.
 *
 * ## 왜 이 파일이 생겼나 (2026-08-19)
 *
 * 예전에는 미들웨어가 `/ja/about`을 `/about?lang=ja`로 rewrite하고, 화면은 `searchParams.lang`
 * 으로, 루트 레이아웃은 `getRequestLocale()`(=`headers()`)로 언어를 정했다. **둘 다 요청을
 * 읽으므로 그 화면은 미리 만들어지지 못한다.** 그래서 이 앱은 **정적 페이지가 한 장도 없었고**
 * 모든 응답이 `no-store`·`X-Vercel-Cache: MISS`였다.
 *
 * 대가는 색인이 치렀다. naminglink에서 같은 구조를 고칠 때 서치 콘솔의 「발견됨 — 현재 색인이
 * 생성되지 않음」 139건이 **전부 로케일 붙은 주소**였다.
 *
 * 이제 로케일은 **경로 조각**이다(`app/[locale]/…`). 값이 요청이 아니라 주소에서 오므로 빌드
 * 때 23개 언어판을 모두 만들어 둘 수 있다.
 *
 * **공개 주소는 하나도 바뀌지 않는다.** 이용자와 크롤러가 보던 주소는 이미 `/ja/about`이었고,
 * 미들웨어가 안에서만 평평한 라우트로 되돌렸을 뿐이다.
 */

/** 빌드 때 만들 언어판. 레이아웃이 이 값을 `generateStaticParams`로 내놓는다. */
export function localeParams() {
  return localeCodes.map((locale) => ({ locale }));
}

/**
 * **아는 로케일이 아니면 404다.** `dynamicParams = false`가 이미 막지만, 여기서도 막는다 —
 * 라우트 설정 한 줄이 빠지는 날 아무 값이나 언어판 주소가 되면 빈 페이지가 무한히 생긴다.
 */
export function routeLocale(raw: string): Locale {
  if (!isLocale(raw)) notFound();
  return raw;
}
