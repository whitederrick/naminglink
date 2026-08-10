import { isLocaleCode } from "@/lib/locale-codes";
import { isGlobalOnlyPath, isKoreanOnlyPath } from "@/lib/route-locales";

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
/**
 * **글자 그대로 로케일을 앞에 붙인다.** 경로 규칙을 보지 않는다.
 *
 * 선언(canonical·hreflang·sitemap)에서만 쓴다 — 거기서는 「그 언어판의 주소가 무엇인가」를
 * 그대로 적어야 하고, 어느 주소를 실을지는 `lib/seo.ts`가 이미 갈라 놓았다.
 *
 * **링크에는 쓰지 말 것.** 링크는 `localePath`를 쓴다(아래).
 */
export function rawLocalePath(
  path: string,
  locale?: string | null,
  query?: string,
) {
  return buildPath(path, locale, query);
}

/**
 * **화면에 놓을 링크의 최종 주소.** 경로 성격을 보고 접두사를 정한다.
 *
 * ## 왜 규칙을 알아야 하는가 (2026-08-10)
 *
 * 2026-08-10에 한국어 전용 화면을 단일 URL로 모으고 글로벌 전용 화면에서 한국어를 내렸는데,
 * **이 함수는 그 규칙을 모른 채 무조건 접두사를 붙이고 있었다.** 그래서 sitemap에서 뺀 주소를
 * **내부 링크가 계속 구글에 다시 알려 주는** 상태였다 — 홈의 `/ko/hanja-meaning`, 안내 허브의
 * 한국어 전용 문서 여섯, 한자 목록의 초성 링크 열셋이 전부 301을 거쳤다.
 *
 * 색인에서 지운 주소를 링크가 되살리면 「발견됨-색인 안 됨」 더미가 줄지 않는다. 규칙은
 * `lib/route-locales.ts`에 있고, 여기서는 그것을 읽어 쓰기만 한다.
 */
export function localePath(
  path: string,
  locale?: string | null,
  query?: string,
) {
  const [rawPath] = (path.startsWith("/") ? path : `/${path}`).split("?");
  const base = rawPath!;

  // 한국어 전용 화면은 로케일 주소를 갖지 않는다. 어느 언어에서 걸든 무접두 주소로 보낸다.
  if (isKoreanOnlyPath(base)) return buildPath(path, null, query);

  // 글로벌 전용 화면에는 한국어판이 없다. ko로 걸면 영어판으로 보낸다.
  if (locale === "ko" && isGlobalOnlyPath(base)) return buildPath(path, "en", query);

  return buildPath(path, locale, query);
}

function buildPath(
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
