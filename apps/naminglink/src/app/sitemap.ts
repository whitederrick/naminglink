import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  hreflangMap,
  indexablePaths,
  localeUrl,
} from "@/lib/seo";
import { supportedLocales } from "@/lib/services";

/**
 * 공개 페이지 × 23개 로케일.
 *
 * 언어판이 `?lang=`으로만 갈리기 때문에 **sitemap이 언어판을 발견하는 유일한 경로다.**
 * 화면의 언어 선택기는 루트(`/?lang=xx`)로만 가므로, 하위 페이지의 언어판으로 가는 링크가
 * 어디에도 없다. 여기서 빠지면 그 언어판은 크롤러에게 존재하지 않는 것과 같다.
 *
 * `lastModified`는 일부러 넣지 않았다. 요청마다 현재 시각을 적으면 "모든 페이지가 늘 방금
 * 바뀌었다"는 신호가 되어 오히려 신뢰를 잃는다. 실제 갱신 시각을 댈 근거가 생기면 그때 넣는다.
 */
// 서비스 화면이 정책 문서보다 먼저 크롤되게 한다. 구글은 priority를 무시하지만
// 다른 검색엔진 일부는 참고한다.
const servicePaths: string[] = [
  "/hanja-meaning",
  "/korean-to-global",
  "/global-to-korean",
  "/stamp-order",
];

function priorityOf(path: string) {
  if (path === "/") return 1;
  return servicePaths.includes(path) ? 0.8 : 0.4;
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
