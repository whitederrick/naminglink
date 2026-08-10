import type { MetadataRoute } from "next";
import {
  absoluteUrl,
  hreflangMap,
  indexablePaths,
  localeUrl,
} from "@/lib/seo";
import { indexableChosungSlugs } from "@/lib/hanja-guide-data";
import { isGlobalOnlyPath, isKoreanOnlyPath } from "@/lib/route-locales";
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  /**
   * **인명용 한자 초성 목록도 싣는다** (2026-08-10).
   *
   * 열세 편이 각각 1,000자 안팎의 한자를 지정 독음·뜻과 함께 담는 자료 화면이고, 이 사이트에만
   * 있는 내용이다. 그런데 **sitemap에 없었다** — 허브에서 링크로만 닿아, 구글이 발견은 하되
   * 중요하지 않다고 판단하기 쉬운 상태였다(실제로 「중복 페이지」로 잡혀 있었다).
   *
   * 이제 한국어 한 벌이라 로케일 변형이 없다. **주소 열세 개가 느는 것뿐이고 중복은 0이다.**
   *
   * 목록은 라우트와 같은 함수에서 온다(`indexableChosungSlugs`). 조회가 실패하면 빈 배열이라
   * 이 경로들만 빠진다 — 없는 주소를 색인하라고 내미는 것보다 낫다.
   */
  const chosung = await indexableChosungSlugs();

  const rows = indexablePaths.flatMap((path) => {
    const priority = priorityOf(path);

    // 한국어 전용 화면은 주소가 하나뿐이다(로케일 주소는 `proxy.ts`가 301로 보낸다).
    // 여기에 언어판을 실으면 sitemap이 **리다이렉트되는 주소를 색인하라고 내미는 꼴**이 된다.
    if (isKoreanOnlyPath(path)) {
      return [{ url: absoluteUrl(path), priority }];
    }

    const languages = hreflangMap(path);
    /**
     * **무접두 주소는 싣지 않는다** (2026-08-10). 루트는 302로, 하위는 영어판으로 308 되는
     * 자리라 sitemap에 넣으면 **리다이렉트되는 주소를 색인하라고 내미는 꼴**이 된다.
     * 루트의 무접두 주소는 각 언어판의 hreflang 묶음에서 x-default로만 쓴다.
     */
    return [
      // 글로벌 전용 화면에는 한국어 주소를 싣지 않는다 — 308로 영어로 보내지는 주소다.
      ...supportedLocales
        .filter((locale) => !(locale === "ko" && isGlobalOnlyPath(path)))
        .map((locale) => ({
          url: localeUrl(path, locale),
          priority,
          alternates: { languages },
        })),
    ];
  });

  return [
    ...rows,
    // 초성 목록. 한국어 한 벌이라 로케일 변형도 hreflang도 없다.
    ...chosung.map((slug) => ({
      url: absoluteUrl(`/guide/hanja/${slug}`),
      priority: 0.4,
    })),
  ];
}
