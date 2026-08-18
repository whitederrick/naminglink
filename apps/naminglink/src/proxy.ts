import { NextResponse, type NextRequest } from "next/server";

import { isLocaleCode } from "@/lib/locale-codes";
import { detectLocale } from "@/lib/locale-detect";
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
 * 로케일 주소로 보낸다. **`lang`만 지우고 나머지 쿼리는 그대로 싣는다.**
 *
 * 쿼리를 통째로 버리면 `mode=transliteration`(발음 표기 흐름)이나 `from=`(안내로 들어온 출처)이
 * 사라져 **다른 화면으로 떨어진다.** 루트는 `/en/`이 아니라 `/en`으로 둔다 — 끝 슬래시가
 * 있는 쪽과 없는 쪽이 섞이면 같은 화면이 두 주소로 잡힌다.
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

/** 무접두 주소를 그대로 두고 `lang`만 떼어 낸다(한국어 전용 화면). */
function redirectStrippingLang(request: NextRequest, pathname: string, status: 301) {
  const target = request.nextUrl.clone();
  target.pathname = pathname;
  target.searchParams.delete("lang");
  return NextResponse.redirect(target, status);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 운영자 콘솔의 옛 경로. 열려 있을 이유가 없다.
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const [, first, ...rest] = pathname.split("/");

  if (!isLocaleCode(first)) {
    const queryLocale = request.nextUrl.searchParams.get("lang");

    /**
     * 한국어 전용 화면. 주소가 하나뿐이므로 **항상 한국어**로 그린다 — 요청 헤더에 따라 다른
     * 언어가 나오면 그 주소가 무엇인지 모호해진다.
     *
     * `?lang=`이 붙어 있으면 떼어 낸다(301). 같은 화면이 두 주소로 잡힐 이유가 없다.
     */
    if (isKoreanOnlyPath(pathname)) {
      if (queryLocale !== null) return redirectStrippingLang(request, pathname, 301);
      /**
       * **되돌릴 것이 없다** (2026-08-18). 예전에는 여기서 `?lang=ko`를 붙여 rewrite하고
       * `x-locale` 헤더로 레이아웃에 알려 줬다. 이제 이 갈래의 화면들은 **스스로 ko로 못
       * 박혀 있어서**(`app/(korean)/`) 알려 줄 것이 없다.
       *
       * 그리고 rewrite를 남겨 두면 **미리 만들어 둔 화면을 쿼리 붙은 주소로 요청하게 된다.**
       * 그 화면들을 정적으로 만든 이유가 그것이라 여기서 손대지 않고 그대로 통과시킨다.
       */
      return NextResponse.next();
    }

    /**
     * **`?lang=xx`는 경로 주소로 옮긴다(301).** 두 주소 체계를 영원히 병행할 이유가 없다.
     *
     * `lang`만 지우고 **나머지 쿼리는 그대로 싣는다** — `mode=transliteration`이나 `from=`을
     * 잃으면 다른 화면으로 떨어진다.
     *
     * **이용자가 고른 언어가 고정 목적지보다 앞선다.** 처음에는 글로벌 전용 판정을 이 앞에
     * 두었는데, 그러면 `?lang=ja`로 들어온 사람이 일본어가 아니라 영어로 떨어졌다 — 글로벌
     * 전용은 「한국어가 없다」는 뜻이지 「영어만」이 아니다. ko만 영어로 바꾼다.
     */
    if (isLocaleCode(queryLocale)) {
      const wanted =
        queryLocale === "ko" && isGlobalOnlyPath(pathname) ? "en" : queryLocale;
      return redirectToLocale(request, wanted, pathname, 301);
    }

    /**
     * 글로벌 전용 화면의 무접두 주소. **영어판으로 고정 이동한다(308).**
     *
     * 예전에는 여기서 감지해 그 자리에 그렸는데, 그러면 `/global-to-korean`과
     * `/en/global-to-korean`이 **본문은 같은데 서로 다른 정본을 주장**한다. 미국 IP로 오는
     * Googlebot에게는 늘 영어로 보이므로 정확히 그 상태가 된다.
     */
    if (isGlobalOnlyPath(pathname)) {
      return redirectToLocale(request, "en", pathname, 308);
    }

    /**
     * ## 무접두 주소를 남겨 두지 않는다 (2026-08-10)
     *
     * 예전에는 여기서 접속 국가로 언어를 정해 **그 자리에 그렸다.** 그래서 `/about`은 미국
     * Googlebot에게 영어로 보이면서 canonical은 `/about`을 주장하고, `/en/about`은 같은 영어
     * 본문에 canonical `/en/about`을 주장했다 — **본문이 같은 두 URL이 각자 정본**이었다.
     * 서치 콘솔의 「구글에서 사용자와 다른 표준을 선택함」이 이 구조에서 나온다.
     *
     * **루트만 감지해 302로 보낸다.** 공유받은 사람이 자기 언어로 가는 것이 자연스럽고, 구글도
     * 국제 사이트의 홈이 언어에 따라 이동하고 그 주소를 x-default로 쓰는 구성을 명시적으로
     * 허용한다. 동적으로 목적지가 갈리므로 **301이 아니라 302**다.
     *
     * **하위 경로는 영어로 고정(308).** 하위까지 감지 302로 두면 무접두 주소 하나하나가
     * 「영원히 리다이렉트되는 URL」로 남아 구글이 계속 크롤한다. 고정이면 신호가 한 번에
     * 수렴한다. 대가는 옛 공유 링크로 `/about`에 온 한국 이용자가 영어로 떨어지는 것인데,
     * 내부 링크는 더 이상 무접두 주소를 만들지 않으므로 그런 경우가 적고 언어 선택기가 받는다.
     */
    if (pathname === "/") {
      const detected = detectLocale(
        request.headers.get("x-vercel-ip-country"),
        request.headers.get("accept-language"),
      );
      return redirectToLocale(request, detected, "/", 302);
    }

    return redirectToLocale(request, "en", pathname, 308);
  }

  /**
   * **경로에 로케일이 있는데 `?lang=`도 붙은 주소는 정규화한다(301).**
   *
   * `/ja/about?lang=ko` 같은 꼴이다. 경로가 기준이므로 화면은 어차피 일본어인데, 주소만 두
   * 가지로 존재해 같은 화면이 둘로 잡힌다. `lang`만 떼고 나머지 쿼리는 싣는다.
   */
  if (request.nextUrl.searchParams.has("lang")) {
    return redirectStrippingLang(request, pathname, 301);
  }

  /**
   * 경로에서 로케일을 뗀 나머지. **규칙 판정에만 쓴다 — 더 이상 rewrite하지 않는다**
   * (2026-08-18).
   *
   * 예전에는 `/ja/about`을 `/about?lang=ja`로 되돌리고 헤더로 레이아웃에 알려 줬다. 그래야
   * 라우트 파일을 `[locale]` 아래로 옮기지 않아도 됐기 때문이다. 그 편의의 대가가 **정적
   * 페이지 0장**이었다 — 레이아웃이 요청 헤더를 읽는 순간 그 아래 전부가 미리 만들어지지
   * 못한다. 이제 라우트가 `app/[locale]/…`이라 언어가 경로 조각으로 그대로 간다.
   */
  const bare = rest.length ? `/${rest.join("/")}` : "/";

  /**
   * 한국어 전용 화면에는 **로케일 주소를 두지 않는다.** rewrite가 아니라 301로 보낸다.
   *
   * canonical만 모아도 색인은 한 벌이 되지만, 주소 자체가 살아 있으면 링크·공유·크롤러가 계속
   * 24벌을 찾아온다. 실제로 그 상태에서 서치 콘솔이 중복으로 잡았고 애드센스가 「가치가 별로
   * 없는 콘텐츠」로 판정했다. 왜 이 화면들이 한 벌인지는 `lib/route-locales.ts`에 있다.
   *
   * **404가 아니라 301이다.** 이미 색인되고 공유된 주소를 끊으면 흐름이 거기서 막힌다.
   */
  if (isKoreanOnlyPath(bare)) {
    const target = request.nextUrl.clone();
    target.pathname = bare;
    target.searchParams.delete("lang");
    return NextResponse.redirect(target, 301);
  }

  // 글로벌 전용 화면에는 **한국어 주소를 두지 않는다.** 지우는 것이 아니라 영어로 보낸다 —
  // 404로 끊으면 그 링크를 밟은 사람이 거기서 막힌다.
  if (first === "ko" && isGlobalOnlyPath(bare)) {
    const english = request.nextUrl.clone();
    english.pathname = `/en${bare}`;
    english.searchParams.delete("lang");
    return NextResponse.redirect(english, 301);
  }

  // 나머지는 손대지 않는다. `app/[locale]`이 이 주소를 그대로 받는다.
  return NextResponse.next();
}

export const config = {
  // 정적 파일과 API는 건드리지 않는다. `_next`·확장자가 있는 요청·robots·sitemap 제외.
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
