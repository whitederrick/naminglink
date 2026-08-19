import { headers } from "next/headers";

import type { Locale } from "@/lib/i18n";
import {
  countryLocaleMap,
  localeFromAcceptLanguage,
  translated,
} from "@/lib/locale-detect";

// 판정 규칙은 `lib/locale-detect.ts`가 갖는다 — 미들웨어도 같은 표를 봐야 하기 때문이다.

export async function getRequestLocale(searchLocale?: string): Promise<Locale> {
  const fromSearch = translated(searchLocale);
  if (fromSearch) return fromSearch;

  const headerStore = await headers();

  // 경로에 로케일이 있으면(`/ko/…`) 미들웨어(`proxy.ts`)가 `x-locale`로 넘겨 준다. 가장 먼저
  // 본다 — 이용자가 주소로 언어를 골랐다는 뜻이라 접속 국가·브라우저 설정보다 우선한다.
  // **루트 레이아웃에는 이 경로뿐이다.** 레이아웃은 searchParams를 받지 못해 `?lang=`을 못 본다.
  const fromPath = translated(headerStore.get("x-locale"));
  if (fromPath) return fromPath;

  const country = headerStore.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = headerStore.get("accept-language") ?? "";

  const fromCountry = translated(country ? countryLocaleMap[country] : null);
  if (fromCountry) return fromCountry;

  return translated(localeFromAcceptLanguage(acceptLanguage)) ?? "en";
}
