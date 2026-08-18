import { notFound } from "next/navigation";

import { isGlobalOnlyPath } from "@/lib/route-locales";
import { isLocale } from "@/lib/locale";
import { localeCodes } from "@/lib/locale-codes";
import type { Locale } from "@/lib/services";

/**
 * 주소 앞의 로케일 조각(`/ja/about`의 `ja`)을 화면이 쓸 값으로 바꾼다.
 *
 * ## 왜 이 파일이 생겼나 (2026-08-18)
 *
 * 예전에는 미들웨어가 `/ja/about`을 `/about?lang=ja`로 rewrite하고, 화면은
 * `getRequestLocale(searchParams.lang)`으로 언어를 정했다. 그 함수는 `headers()`를 읽는다 —
 * **읽는 순간 그 화면은 미리 만들어지지 못한다.** 그래서 로케일이 붙은 주소 전부가 요청마다
 * 새로 그려지고 있었다(서치 콘솔 「발견됨 - 색인 안 됨」 139건이 전부 이쪽 주소다).
 *
 * 이제 로케일은 **경로 조각**이다(`app/[locale]/…`). 값이 요청이 아니라 주소에서 오므로
 * 빌드 때 23개 언어판을 모두 만들어 둘 수 있다.
 *
 * **공개 주소는 하나도 바뀌지 않는다.** 예전에도 이용자와 크롤러가 보던 주소는 `/ja/about`
 * 이었고, 미들웨어가 안에서만 평평한 라우트로 되돌렸을 뿐이다.
 */

/** 빌드 때 만들 언어판. 레이아웃이 이 값을 `generateStaticParams`로 내놓는다. */
export function localeParams() {
  return localeCodes.map((locale) => ({ locale }));
}

/**
 * **아는 로케일이 아니면 404다.** `dynamicParams = false`가 이미 막지만, 여기서도 막는다 —
 * 라우트 설정 한 줄이 빠지는 날 아무 값이나 언어판 주소가 되면 빈 페이지가 무한히 생긴다.
 *
 * `params.locale`의 타입이 `string`이라 어차피 좁히는 자리가 필요하다.
 */
export function routeLocale(raw: string): Locale {
  if (!isLocale(raw)) notFound();
  return raw;
}

/**
 * 글로벌 전용 화면의 로케일. **한국어판이 없다**(`lib/route-locales.ts`).
 *
 * 미들웨어가 `/ko/global-to-korean`을 영어판으로 301하므로 여기까지 ko가 올 일은 없다.
 * 그래도 **판정하는 쪽이 스스로 막게 둔다** — 라우팅이 바뀌어도 규칙이 살아남는다. 예전
 * `x-block-korean` 헤더가 하던 일을 경로 조각으로 옮긴 것이다.
 *
 * `null`을 돌려주면 부르는 쪽이 영어판으로 보낸다(빌드 때는 그 자리에 리다이렉트가 남는다).
 */
export function globalOnlyRouteLocale(raw: string): Locale | null {
  const locale = routeLocale(raw);
  return locale === "ko" ? null : locale;
}

export { isGlobalOnlyPath };
