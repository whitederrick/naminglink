import { headers } from "next/headers";

import { isLocale, type Locale } from "@/lib/i18n";
import { countryLocaleMap, localeFromAcceptLanguage } from "@/lib/locale-detect";

// naminglink의 판정 규칙과 같은 방식이다. 다만 사전이 다르므로 코드를 공유하지 않고
// 이 앱 안에 둔다 — 두 번째 소비자가 생기면 그때 packages/core로 옮긴다.

export async function getRequestLocale(searchLocale?: string): Promise<Locale> {
  if (isLocale(searchLocale)) return searchLocale;

  const headerStore = await headers();

  // 경로에 로케일이 있으면(`/ko/…`) 미들웨어(`proxy.ts`)가 `x-locale`로 넘겨 준다. 가장 먼저
  // 본다 — 이용자가 주소로 언어를 골랐다는 뜻이라 접속 국가·브라우저 설정보다 우선한다.
  // **루트 레이아웃에는 이 경로뿐이다.** 레이아웃은 searchParams를 받지 못해 `?lang=`을 못 본다.
  const fromPath = headerStore.get("x-locale");
  if (isLocale(fromPath)) return fromPath;

  const country = headerStore.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = headerStore.get("accept-language") ?? "";

  if (country && countryLocaleMap[country]) return countryLocaleMap[country];

  return localeFromAcceptLanguage(acceptLanguage) ?? "en";
}
