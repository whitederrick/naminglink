import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";

/**
 * **미리보기 배포는 통째로 막는다.** Vercel은 커밋마다 공개 URL을 만들고, 그것이 색인되면
 * 운영 도메인과 완전히 같은 내용이 중복으로 잡힌다. `VERCEL_ENV`는 운영에서만 "production"이다.
 * (지역 개발에는 값이 없으므로 막지 않는다 — 어차피 크롤러가 오지 않는다.)
 */
const isPreviewDeployment =
  Boolean(process.env.VERCEL_ENV) && process.env.VERCEL_ENV !== "production";

/**
 * **실 도메인이 붙기 전에는 색인을 열지 않는다.**
 *
 * 배포 주소(`*.vercel.app`)로 색인이 쌓이면, 실 도메인을 연결하는 순간 색인된 URL이 전부
 * 이동한다 — 리다이렉트 정리가 따라붙고 순위도 한 번 흔들린다. 오픈 전이라 트래픽이 없으니
 * 지금 여는 이득은 사실상 없고, 잃을 것만 있다.
 *
 * **`NEXT_PUBLIC_SITE_URL`을 실 도메인으로 바꾸면 저절로 열린다.** 따로 기억해 두었다가
 * 꺼야 하는 스위치를 만들지 않은 이유가 그것이다 — 그런 스위치는 잊힌다. 도메인을 넣는 일과
 * 색인을 여는 일은 어차피 같은 시점에 일어나야 한다.
 */
const isDeploymentHost = (() => {
  try {
    return new URL(siteUrl).hostname.endsWith(".vercel.app");
  } catch {
    return false;
  }
})();

export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeployment || isDeploymentHost) {
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
