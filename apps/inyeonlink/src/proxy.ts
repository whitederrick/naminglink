import { NextResponse, type NextRequest } from "next/server";

import { isLocaleCode } from "@/lib/locale-codes";
import { detectLocale } from "@/lib/locale-detect";

/**
 * 공개 주소는 `/ko/compatibility`처럼 **로케일 경로 한 벌**이다.
 *
 * ## 왜 바뀌었나 (2026-08-19)
 *
 * 예전에는 라우트 파일이 평평했고(`app/compatibility`), 미들웨어가 `/ko/compatibility`를
 * `/compatibility?lang=ko`로 **rewrite**했다. 그래서 화면은 `searchParams`를, 루트 레이아웃은 `headers()`를 읽어야 했고,
 * **이 앱은 정적 페이지가 한 장도 없었다** — 모든 응답이 `no-store`였다. 서치 콘솔이 로케일
 * 붙은 주소를 「발견됨 — 현재 색인이 생성되지 않음」으로 잡던 자리다(`lib/route-locale.ts`).
 *
 * 이제 로케일은 실제 경로 조각이다(`app/[locale]/…`). 미들웨어는 **로케일 주소를 그대로
 * 통과시킨다** — rewrite하면 없는 무접두 라우트로 보내게 되고, 미리 만들어 둔 정적 산출물도
 * 함께 우회한다.
 *
 * ## 옛 주소를 끊지 않는다
 *
 * 무접두 주소(`/compatibility`)와 `?lang=` 주소는 이미 공유됐고 색인돼 있다. 라우트를 옮기면
 * 그 주소들이 **404가 된다** — 실제로 옮긴 직후 `/`가 404였다. 리다이렉트로 언어판에 모은다.
 *
 *     /                    302 → /{접속 국가·브라우저 언어로 고른 언어판}
 *     /compatibility       308 → /en/compatibility
 *     /a?lang=ko           301 → /ko/a
 *     /ko/a?lang=en        301 → /ko/a          (경로가 기준이다)
 *
 * 루트만 302인 것은 **고른 언어가 사람마다 다르기 때문**이다. 영구 이동으로 알리면 크롤러가
 * 한 언어판을 루트의 정본으로 굳힌다. 하위 경로는 언제나 영어판으로 가므로 308이다.
 *
 * naminglink `src/proxy.ts`와 같은 규칙이다. 한쪽만 고치면 두 서비스의 주소 규칙이 갈린다.
 */
function redirectToLocale(
  request: NextRequest,
  locale: string,
  pathname: string,
  status: 301 | 302 | 308,
) {
  const target = request.nextUrl.clone();
  target.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
  target.searchParams.delete("lang");
  return NextResponse.redirect(target, status);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const [, first] = pathname.split("/");

  if (!isLocaleCode(first)) {
    // 옛 `?lang=` 주소는 그 언어판으로 옮긴다. 이용자가 언어를 고른 주소라 영어판이 아니다.
    const requested = request.nextUrl.searchParams.get("lang");
    if (isLocaleCode(requested)) {
      return redirectToLocale(request, requested, pathname, 301);
    }
    if (pathname === "/") {
      const locale = detectLocale(
        request.headers.get("x-vercel-ip-country"),
        request.headers.get("accept-language"),
      );
      return redirectToLocale(request, locale, pathname, 302);
    }
    return redirectToLocale(request, "en", pathname, 308);
  }

  // 경로에 로케일이 있는데 `?lang=`도 붙어 있으면 쿼리를 뗀다. 둘이 어긋난 주소로 서로 다른
  // 화면이 나오면 안 되고, 같은 화면에 주소가 둘이면 색인이 갈린다.
  if (request.nextUrl.searchParams.has("lang")) {
    const target = request.nextUrl.clone();
    target.searchParams.delete("lang");
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  // 정적 파일과 API는 건드리지 않는다. `_next`·확장자가 있는 요청·robots·sitemap 제외.
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
