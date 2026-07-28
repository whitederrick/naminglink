import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/**
 * **미리보기 배포는 통째로 막는다.** Vercel은 커밋마다 공개 URL을 만들고, 그것이 색인되면
 * 운영 도메인과 완전히 같은 내용이 중복으로 잡힌다. `VERCEL_ENV`는 운영에서만 "production"이다.
 * (지역 개발에는 값이 없으므로 막지 않는다 — 어차피 크롤러가 오지 않는다.)
 */
const isPreviewDeployment =
  Boolean(process.env.VERCEL_ENV) && process.env.VERCEL_ENV !== "production";

export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeployment) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // 여기서 막는 것은 **애초에 가져갈 필요가 없는 것**뿐이다.
        // 결과·계정·로그인 화면은 robots로 막지 않고 화면 쪽에 noindex를 붙였다.
        // robots로 막으면 크롤러가 페이지를 못 읽어 noindex 자체를 못 보게 되고,
        // 외부 링크가 하나라도 있으면 내용 없이 URL만 색인되는 쪽이 오히려 나빠진다.
        disallow: ["/api/", "/naming-artist", "/admin"],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
