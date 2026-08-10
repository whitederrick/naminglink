import type { MetadataRoute } from "next";
import { headers } from "next/headers";
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

/**
 * **설정된 주소만 보면 절반만 막힌다** (2026-08-10에 드러남).
 *
 * 위 `isDeploymentHost`는 `NEXT_PUBLIC_SITE_URL`이 무엇인가만 본다. 그런데 실 도메인을 넣는
 * 순간 그 값은 거짓이 되고, **배포 주소로 들어온 요청까지 열어 준다** — 운영 도메인과 글자
 * 하나 다르지 않은 사이트 복사본이 크롤링 가능한 채로 하나 더 생긴다. 실측에서 네 앱 중 셋이
 * 그 상태였다(`naminglink.vercel.app`이 `Allow: /`를 냈다).
 *
 * 주석은 「`*.vercel.app`이면 전면 차단」이라고 적혀 있었는데 **코드는 그렇게 하고 있지
 * 않았다.** 막아야 하는 것은 「어디로 들어왔는가」이므로 요청 호스트를 함께 본다.
 *
 * canonical이 apex를 가리키니 구글이 합칠 가능성은 높다. 다만 서치 콘솔이 낸 판정이 하필
 * 「중복 페이지, 구글에서 사용자와 다른 표준을 선택함」이었다 — 합쳐 주기를 기대하느니 애초에
 * 두 벌을 만들지 않는 편이 맞다.
 */
async function servedFromDeploymentHost() {
  const host = (await headers()).get("host") ?? "";
  return host.endsWith(".vercel.app");
}

export default async function robots(): Promise<MetadataRoute.Robots> {
  if (isPreviewDeployment || isDeploymentHost || (await servedFromDeploymentHost())) {
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
