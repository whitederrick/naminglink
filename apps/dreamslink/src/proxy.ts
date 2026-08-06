import { NextResponse, type NextRequest } from "next/server";

import { isLocaleCode } from "@/lib/locale-codes";

/**
 * 경로 앞의 로케일(`/ko/compatibility`)을 화면이 아는 형태(`/compatibility?lang=ko`)로 되돌린다.
 *
 * **rewrite이지 redirect가 아니다.** 주소창에는 `/ko/compatibility`가 그대로 남고, 서버는
 * 예전과 같은 라우트를 예전과 같은 쿼리로 처리한다. 그래서 라우트 파일을 `[locale]` 아래로
 * 옮기지 않아도 되고, 각 페이지는 계속 `searchParams.lang`만 읽는다.
 *
 * **두 형태를 모두 받는다.** 예전 주소(`/compatibility?lang=ko`)도 그대로 동작한다 — 이미
 * 공유된 링크와 색인된 주소를 끊지 않기 위해서다. 다만 canonical과 sitemap은 경로 쪽을
 * 가리키므로(`lib/seo.ts`), 검색엔진에는 경로 주소 하나로 모인다.
 *
 * naminglink `src/proxy.ts`와 같은 파일이다. 한쪽만 고치면 두 서비스의 주소 규칙이 갈린다.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const [, first, ...rest] = pathname.split("/");
  if (!isLocaleCode(first)) return NextResponse.next();

  // `/ko` → `/`, `/ko/a/b` → `/a/b`
  const target = request.nextUrl.clone();
  target.pathname = rest.length ? `/${rest.join("/")}` : "/";
  // 경로의 로케일이 기준이다. 주소에 `?lang=`이 함께 있어도 경로 쪽을 따른다 —
  // 둘이 어긋난 주소로 서로 다른 화면이 나오면 안 된다.
  target.searchParams.set("lang", first);

  // **레이아웃에도 알려 준다.** 루트 레이아웃은 searchParams를 받지 못해 `?lang=`을 볼 수 없다.
  // 헤더로 넘기지 않으면 `/ko/...`인데 `<html lang="en">`이 나간다 — 스크린 리더가 엉뚱한
  // 언어로 읽고, 아랍어에서 문서 방향(rtl)도 틀어진다.
  const headers = new Headers(request.headers);
  headers.set("x-locale", first);
  return NextResponse.rewrite(target, { request: { headers } });
}

export const config = {
  // 정적 파일과 API는 건드리지 않는다. `_next`·확장자가 있는 요청·robots·sitemap 제외.
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
