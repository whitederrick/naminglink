import { headers } from "next/headers";

import { detectLocale } from "@/lib/locale-detect";
import { supportedLocales, type Locale } from "@/lib/services";

export function isLocale(value: string | null | undefined): value is Locale {
  return supportedLocales.includes(value as Locale);
}

export function isRtlLocale(locale: Locale) {
  return locale === "ar";
}

export async function getRequestLocale(searchLocale?: string) {
  const headerStore = await headers();

  /**
   * 글로벌 전용 화면에는 한국어를 주지 않는다(`lib/route-locales.ts`). 미들웨어가 이 헤더로
   * 알려 준다.
   *
   * **판정의 모든 갈래에 걸어야 한다.** `?lang=ko`만 막으면 접속 국가가 KR일 때 그대로 한국어가
   * 나가고, 국가만 막으면 주소로 강제할 수 있다. 그래서 반환하는 자리마다 통과시킨다.
   */
  const blockKorean = headerStore.get("x-block-korean") === "1";
  const allow = (locale: Locale): Locale => (blockKorean && locale === "ko" ? "en" : locale);

  if (isLocale(searchLocale)) {
    return allow(searchLocale);
  }

  // 경로에 로케일이 있으면(`/ko/…`) 미들웨어가 `x-locale`로 넘겨 준다. 가장 먼저 본다 —
  // 이용자가 주소로 언어를 골랐다는 뜻이라 접속 국가·브라우저 설정보다 우선한다.
  // **레이아웃에는 이 경로뿐이다.** 레이아웃은 searchParams를 받지 못해 `?lang=`을 못 본다.
  const fromPath = headerStore.get("x-locale");
  if (isLocale(fromPath)) return allow(fromPath);

  /**
   * 접속 국가·브라우저 언어 판정은 `lib/locale-detect.ts`가 갖는다.
   *
   * **미들웨어가 같은 판정을 써야 하기 때문이다** — 루트(`/`)에서 감지해 그 언어판으로
   * 보내는 것은 미들웨어인데 `next/headers`를 거기서 못 쓴다. 표를 두 벌 두면 「루트가 보낸
   * 언어」와 「그 화면이 그리는 언어」가 어긋나는 날이 온다.
   */
  return allow(
    detectLocale(
      headerStore.get("x-vercel-ip-country"),
      headerStore.get("accept-language"),
    ) as Locale,
  );
}
