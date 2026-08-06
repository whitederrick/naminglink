import type { MetadataRoute } from "next";
import { absoluteUrl, hreflangMap, indexablePaths, localeUrl } from "@/lib/seo";
import { supportedLocales } from "@/lib/i18n";

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
const servicePaths: string[] = ["/compatibility", "/affinity"];

function priorityOf(path: string) {
  if (path === "/") return 1;
  if (servicePaths.includes(path)) return 0.8;
  // 안내 문서는 정책 문서보다 먼저 크롤되게 한다 — 검색으로 들어올 만한 글은 이쪽이다.
  if (path.startsWith("/guide")) return 0.6;
  return 0.4;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.flatMap((path) => {
    const languages = hreflangMap(path);
    const priority = priorityOf(path);

    return [
      // 로케일 없는 주소(x-default). 헤더를 보고 언어를 정하는 자리다.
      { url: absoluteUrl(path), priority, alternates: { languages } },
      ...supportedLocales.map((locale) => ({
        url: localeUrl(path, locale),
        priority,
        alternates: { languages },
      })),
    ];
  });
}
