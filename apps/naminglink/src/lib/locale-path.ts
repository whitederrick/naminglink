import { isLocaleCode } from "@/lib/locale-codes";

/**
 * 로케일이 앞에 붙은 경로를 만든다 — `/ko/hanja-meaning` 꼴.
 *
 * **왜 경로인가.** 언어판을 `?lang=`으로만 가르면 구글의 다국어 URL 권장안에서 가장 낮은
 * 선택지가 된다. 경로로 두면 언어판이 각자 독립된 주소를 갖고, 공유된 링크에서도 언어가
 * 유지되며, 나중에 언어별 하위 도메인·디렉터리 전략으로 옮기기도 쉽다.
 *
 * **화면 코드는 그대로 둔다.** 미들웨어(`proxy.ts`)가 `/ko/hanja-meaning`을
 * `/hanja-meaning?lang=ko`로 되돌려 넘기므로, 각 페이지는 예전처럼 `searchParams.lang`만 읽으면
 * 된다. 라우트 파일을 `[locale]` 아래로 옮기지 않은 이유가 그것이다 — 얻는 것은 같은데
 * 바꿔야 할 코드가 훨씬 많다.
 *
 * @param path   `/`로 시작하는 경로. 쿼리는 `query`로 따로 준다.
 * @param locale 없으면 로케일 없는 주소를 돌려준다(헤더로 언어를 정하는 x-default 자리).
 * @param query  `mode=transliteration`처럼 함께 실을 쿼리(앞의 `?`는 빼고).
 */
export function localePath(
  path: string,
  locale?: string | null,
  query?: string,
) {
  // 경로에 쿼리가 딸려 온 경우(`/global-to-korean?mode=…`)를 갈라 둔다. 그대로 앞에 로케일을
  // 붙이면 되지만, 뒤에 쿼리를 더 붙일 때 `?`가 두 번 들어가기 때문이다.
  const [rawPath, inlineQuery] = (path.startsWith("/") ? path : `/${path}`).split("?");
  const base = rawPath!;
  const merged = [inlineQuery, query].filter(Boolean).join("&");
  const prefixed = isLocaleCode(locale)
    ? // 루트는 `/ko/`가 아니라 `/ko`로 둔다. 끝 슬래시가 있는 쪽과 없는 쪽이 섞이면
      // 같은 화면이 두 주소로 잡힌다.
      base === "/"
      ? `/${locale}`
      : `/${locale}${base}`
    : base;
  return merged ? `${prefixed}?${merged}` : prefixed;
}
