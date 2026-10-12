import type { MetadataRoute } from "next";
import { hreflangMap, indexablePaths, localeUrl } from "@/lib/seo";
import { supportedLocales } from "@/lib/i18n";
import {
  SYMBOL_PAGE_LOCALES,
  SYMBOLS_INDEX_PATH,
  symbolPagePaths,
} from "@/lib/symbol-pages";

/**
 * 공개 페이지 × 23개 로케일.
 *
 * 언어판은 경로로 갈린다 — `/ko/compatibility`(`lib/locale-path.ts`). 화면의 언어 선택기가
 * 보고 있는 경로의 다른 언어판으로 이어지므로 크롤러가 링크만으로도 옮겨 다닐 수 있지만,
 * 색인 대상 전체를 빠짐없이 훑게 하려면 이 목록이 필요하다.
 *
 * `lastModified`는 일부러 넣지 않았다. 요청마다 현재 시각을 적으면 "모든 페이지가 늘 방금
 * 바뀌었다"는 신호가 되어 오히려 신뢰를 잃는다.
 */
const servicePaths: string[] = ["/dream"];

function priorityOf(path: string) {
  if (path === "/") return 1;
  if (servicePaths.includes(path)) return 0.8;
  // 안내 문서는 정책 문서보다 먼저 크롤되게 한다 — 검색으로 들어올 만한 글은 이쪽이다.
  if (path.startsWith("/guide")) return 0.6;
  return 0.4;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = indexablePaths.flatMap((path) => {
    const languages = hreflangMap(path);
    const priority = priorityOf(path);

    // **무접두 주소는 싣지 않는다**(naminglink 와 같다, 2026-10-12). 하위 경로의 무접두 주소는
    // 영어판으로 308 되므로 sitemap 에 넣으면 리다이렉트되는 주소를 색인하라고 내미는 꼴이다.
    // 루트의 무접두 주소는 각 언어판의 hreflang 묶음에서 x-default 로만 쓴다.
    return [
      ...supportedLocales.map((locale) => ({
        url: localeUrl(path, locale),
        priority,
        alternates: { languages },
      })),
    ];
  });

  /**
   * 상징 페이지. **검색으로 들어오는 자리라 우선순위를 서비스 화면 다음으로 둔다.**
   *
   * 로케일을 23개가 아니라 **둘만** 펼친다. 사전이 ko·en 두 벌뿐이라(`lib/dream-language.ts`),
   * 나머지 21개 주소에는 같은 영어 내용이 깔린다 — 얇은 중복 페이지 수천 개는 색인에 해가
   * 된다. 안내 문서를 ko·global로 가른 것과 같은 판단이다.
   */
  const symbols = [SYMBOLS_INDEX_PATH, ...symbolPagePaths].flatMap((path) => {
    // x-default 는 영어판을 직접 가리킨다 — 무접두 주소는 영어로 308 이동한다(위와 같은 이유).
    const languages: Record<string, string> = {
      "x-default": localeUrl(path, "en"),
    };
    for (const locale of SYMBOL_PAGE_LOCALES) languages[locale] = localeUrl(path, locale);

    return [
      ...SYMBOL_PAGE_LOCALES.map((locale) => ({
        url: localeUrl(path, locale),
        priority: 0.7,
        alternates: { languages },
      })),
    ];
  });

  return [...pages, ...symbols];
}
