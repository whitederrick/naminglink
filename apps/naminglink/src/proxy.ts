import { NextResponse, type NextRequest } from "next/server";

import { isLocaleCode } from "@/lib/locale-codes";

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
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 운영자 콘솔의 옛 경로. 열려 있을 이유가 없다.
  if (pathname === "/admin" || pathname.startsWith("/admin/")) {
    return new NextResponse("Not Found", { status: 404 });
  }

  const [, first, ...rest] = pathname.split("/");
  if (!isLocaleCode(first)) return NextResponse.next();

  // `/ko` → `/`, `/ko/a/b` → `/a/b`
  const target = request.nextUrl.clone();
  target.pathname = rest.length ? `/${rest.join("/")}` : "/";
  // 경로의 로케일이 기준이다. 주소에 `?lang=`이 함께 있어도 경로 쪽을 따른다 —
  // 둘이 어긋난 주소로 서로 다른 화면이 나오면 안 된다.
  target.searchParams.set("lang", first);
  return NextResponse.rewrite(target);
}

export const config = {
  // 정적 파일과 API는 건드리지 않는다. `_next`·확장자가 있는 요청·robots·sitemap 제외.
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt|sitemap.xml|.*\\..*).*)",
  ],
};
