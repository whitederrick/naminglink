import { NextResponse, type NextRequest } from "next/server";

import { isLocaleCode } from "@/lib/locale-codes";
import { isGlobalOnlyPath, isKoreanOnlyPath } from "@/lib/route-locales";

/**
 * 경로 앞의 로케일(`/ko/hanja-meaning`)을 화면이 아는 형태(`/hanja-meaning?lang=ko`)로 되돌린다.
 *
 * **rewrite이지 redirect가 아니다.** 주소창에는 `/ko/hanja-meaning`이 그대로 남고, 서버는
 * 예전과 같은 라우트를 예전과 같은 쿼리로 처리한다. 그래서 라우트 파일을 `[locale]` 아래로
 * 옮기지 않아도 되고, 각 페이지는 계속 `searchParams.lang`만 읽는다.
 *
 * **두 형태를 모두 받는다.** 예전 주소(`/hanja-meaning?lang=ko`)도 그대로 동작한다 — 이미
 * 공유된 링크와 색인된 주소를 끊지 않기 위해서다. 다만 canonical과 sitemap은 경로 쪽을
 * 가리키므로(`lib/seo.ts`), 검색엔진에는 경로 주소 하나로 모인다.
 *
 * **경로마다 쓸 수 있는 언어가 다르다**(2026-08-10). 한국어 전용 화면은 로케일 주소를 갖지
 * 않고, 글로벌 전용 화면은 한국어를 갖지 않는다 — 어느 화면이 어느 쪽인지와 그 이유는
 * `lib/route-locales.ts`에 있다.
 */

/**
 * 루트 레이아웃에 로케일을 알리는 헤더. 레이아웃은 searchParams를 못 받아 `?lang=`을 볼 수 없다.
 */
function localeHeaders(request: NextRequest, locale: string) {
  const headers = new Headers(request.headers);
  headers.set("x-locale", locale);
  return headers;
}

const koreanLocaleHeaders = (request: NextRequest) => localeHeaders(request, "ko");

/**
 * 「이 화면에는 한국어를 주지 말라」를 화면 코드에 알린다.
 *
 * 로케일 판정은 접속 국가·브라우저 설정까지 보므로(`lib/locale.ts`) 미들웨어에서 `lang`만
 * 지워서는 막히지 않는다 — 한국에서 접속하면 그대로 ko가 나온다. 판정하는 쪽에 조건을 넘긴다.
 */
function noKoreanHeaders(request: NextRequest) {
  const headers = new Headers(request.headers);
  headers.delete("x-locale");
  headers.set("x-block-korean", "1");
  return headers;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 운영자 콘솔의 옛 경로. 열려 있을 이유가 없다.
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const [, first, ...rest] = pathname.split("/");

  if (!isLocaleCode(first)) {
    // 로케일이 없는 한국어 전용 주소. 브라우저 언어를 따르지 않고 **항상 한국어**로 그린다 —
    // 주소가 하나뿐인 화면이 요청 헤더에 따라 다른 언어로 나오면 그 주소가 무엇인지 모호해진다.
    if (isKoreanOnlyPath(pathname)) {
      const target = request.nextUrl.clone();
      target.searchParams.set("lang", "ko");
      return NextResponse.rewrite(target, { request: { headers: koreanLocaleHeaders(request) } });
    }

    // 글로벌 전용 화면. `?lang=ko`로도 열 수 없다 — 여기서 지우지 않으면 주소 하나로 한국어판을
    // 강제로 볼 수 있게 된다. 접속 국가가 KR이어서 ko로 떨어지는 경로는 `lib/locale.ts`가 막는다.
    if (isGlobalOnlyPath(pathname)) {
      const target = request.nextUrl.clone();
      if (target.searchParams.get("lang") === "ko") target.searchParams.delete("lang");
      return NextResponse.rewrite(target, { request: { headers: noKoreanHeaders(request) } });
    }

    /**
     * **옛 형태 주소(`?lang=xx`)의 로케일도 레이아웃에 알린다.**
     *
     * 루트 레이아웃은 `searchParams`를 못 받아 `?lang=`을 볼 수 없다. 그래서 지금까지
     * `/hanja-meaning?lang=kk`는 **화면은 카자흐어인데 `<html lang>`은 딴 값**이었다 —
     * 스크린 리더가 엉뚱한 언어로 읽고, 아랍어면 `dir=rtl`도 틀어진다.
     *
     * 광고 판정도 여기에 걸린다. 레이아웃이 로케일을 잘못 알면 **지원하지 않는 언어의
     * 화면에 광고 로더가 실린다**(`lib/ads.ts`).
     *
     * 경로 로케일이 없을 때만 본다 — 경로가 있으면 그쪽이 기준이다(아래).
     */
    const queryLocale = request.nextUrl.searchParams.get("lang");
    if (isLocaleCode(queryLocale)) {
      return NextResponse.rewrite(request.nextUrl, {
        request: { headers: localeHeaders(request, queryLocale) },
      });
    }

    return NextResponse.next();
  }

  // `/ko` → `/`, `/ko/a/b` → `/a/b`
  const target = request.nextUrl.clone();
  target.pathname = rest.length ? `/${rest.join("/")}` : "/";

  /**
   * 한국어 전용 화면에는 **로케일 주소를 두지 않는다.** rewrite가 아니라 301로 보낸다.
   *
   * canonical만 모아도 색인은 한 벌이 되지만, 주소 자체가 살아 있으면 링크·공유·크롤러가 계속
   * 24벌을 찾아온다. 실제로 그 상태에서 서치 콘솔이 중복으로 잡았고 애드센스가 「가치가 별로
   * 없는 콘텐츠」로 판정했다. 왜 이 화면들이 한 벌인지는 `lib/route-locales.ts`에 있다.
   *
   * **404가 아니라 301이다.** 이미 색인되고 공유된 주소를 끊으면 흐름이 거기서 막힌다.
   */
  if (isKoreanOnlyPath(target.pathname)) {
    target.searchParams.delete("lang");
    return NextResponse.redirect(target, 301);
  }

  // 글로벌 전용 화면에는 **한국어 주소를 두지 않는다.** 지우는 것이 아니라 영어로 보낸다 —
  // 404로 끊으면 그 링크를 밟은 사람이 거기서 막힌다.
  if (first === "ko" && isGlobalOnlyPath(target.pathname)) {
    const english = request.nextUrl.clone();
    english.pathname = `/en${target.pathname}`;
    english.searchParams.delete("lang");
    return NextResponse.redirect(english, 301);
  }
  // 경로의 로케일이 기준이다. 주소에 `?lang=`이 함께 있어도 경로 쪽을 따른다 —
  // 둘이 어긋난 주소로 서로 다른 화면이 나오면 안 된다.
  target.searchParams.set("lang", first);

  // **레이아웃에도 알려 준다.** 헤더로 넘기지 않으면 `/ko/...`인데 `<html lang="en">`이 나간다
  // — 스크린 리더가 엉뚱한 언어로 읽고, 아랍어에서 문서 방향(rtl)도 틀어진다.
  return NextResponse.rewrite(target, {
    request: { headers: localeHeaders(request, first) },
  });
}

export const config = {
  // 정적 파일과 API는 건드리지 않는다. `_next`·확장자가 있는 요청·robots·sitemap 제외.
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
