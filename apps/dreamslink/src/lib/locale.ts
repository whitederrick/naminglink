import { headers } from "next/headers";

import { isLocale, type Locale } from "@/lib/i18n";
import { countryLocaleMap, localeFromAcceptLanguage } from "@/lib/locale-detect";

// 판정 규칙은 `lib/locale-detect.ts`가 갖는다 — 미들웨어도 같은 표를 봐야 하기 때문이다.

export async function getRequestLocale(searchLocale?: string): Promise<Locale> {
  if (isLocale(searchLocale)) return searchLocale;

  const headerStore = await headers();

  // **화면은 더 이상 이 함수를 부르지 않는다** (2026-08-19). 로케일이 경로 조각이 되면서
  // 화면과 레이아웃은 `params.locale`을 읽는다(`lib/route-locale.ts`). 남은 소비자는 요청
  // 맥락밖에 없는 API 라우트뿐이라, 옛 `x-locale` 헤더 경로는 걷어냈다 — 미들웨어가 그 헤더를
  // 더는 붙이지 않으므로 **늘 비어 있는 값을 보는 죽은 가지**였다.

  const country = headerStore.get("x-vercel-ip-country")?.toUpperCase();
  const acceptLanguage = headerStore.get("accept-language") ?? "";

  if (country && countryLocaleMap[country]) return countryLocaleMap[country];

  return localeFromAcceptLanguage(acceptLanguage) ?? "en";
}
