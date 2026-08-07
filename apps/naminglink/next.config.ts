import type { NextConfig } from "next";

import { adsCspSources, adsEnabled } from "./src/lib/ads";
import { gamCspSources, gamRewardedEnabled } from "./src/lib/gam-rewarded";

import {
  paymentCspSources,
  paymentsConfigured,
  supabaseCspOrigin,
  tossConfiguredForCsp,
  tossCspSources,
} from "./src/lib/payments-csp";

// 전역 보안 헤더. **인연링크와 같은 기준으로 맞춘다.**
//
// 예전에는 `frame-ancestors`·`base-uri`·`object-src`만 걸어 두었다. 결제를 테스트할 수 없어
// script-src·frame-src를 조이면 PortOne 결제창이 깨지는지 확인할 방법이 없었기 때문이다. 그
// 상태에서는 **스크립트 출처 제한이 사실상 없어**, 주입된 스크립트가 어디로든 데이터를 보낼 수
// 있었다. 결제 키가 등록되어 실제 흐름을 확인할 수 있게 되었으므로 인연링크와 같은 모양으로 조인다.
//
// 이 앱만 다른 점이 하나 있다: **브라우저가 Supabase를 직접 부른다**(로그인·계정·운영 콘솔).
// connect-src에 그 주소를 넣지 않으면 로그인이 통째로 막힌다.
//
// 개발 모드에서만 'unsafe-eval'과 웹소켓을 허용한다. React 개발 빌드가 eval()을 쓰고 HMR이
// 웹소켓으로 붙기 때문이다. 운영 빌드는 그대로 조여 둔다.
const isDev = process.env.NODE_ENV !== "production";

// 광고(애드센스)도 결제와 같은 규칙이다. 퍼블리셔 ID가 없으면 열지 않는다 — 광고를 켜는
// 순간에만 CSP가 느슨해지고, 끄면 원래대로 돌아간다. 애드센스는 CSP를 공식 지원하지 않아
// 소재가 임의의 CDN에서 온다(`src/lib/ads.ts` 주석 참고).
const ads = (kind: keyof typeof adsCspSources) =>
  adsEnabled ? adsCspSources[kind].map((source) => ` ${source}`).join("") : "";

// GAM 보상형(잠긴 후보 열기)도 같은 규칙이다. 광고 단위 경로가 없으면 gpt.js를 부르지
// 않으므로 CSP도 열지 않는다(`src/lib/gam-rewarded.ts` 주석 참고).
const gam = (kind: keyof typeof gamCspSources) =>
  gamRewardedEnabled ? gamCspSources[kind].map((source) => ` ${source}`).join("") : "";

// 채널 키가 없으면 결제창을 띄울 일이 없으므로 열지 않는다(인연링크와 같은 규칙).
const pay = (kind: keyof typeof paymentCspSources) =>
  paymentsConfigured
    ? paymentCspSources[kind].map((source) => ` ${source}`).join("")
    : "";

// 국내 결제(토스페이먼츠)도 같은 방식이다. 키가 없으면 열지 않는다.
const toss = (kind: keyof typeof tossCspSources) =>
  tossConfiguredForCsp
    ? tossCspSources[kind].map((source) => ` ${source}`).join("")
    : "";

const supabaseConnect = supabaseCspOrigin ? ` ${supabaseCspOrigin}` : "";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js 인라인 부트스트랩 스크립트 때문에 'unsafe-inline'이 필요하다.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${ads("script")}${gam("script")}${pay("script")}${toss("script")}`,
      "style-src 'self' 'unsafe-inline'",
      // Supabase Storage: 서체 미리보기(SVG)와 PDF 배경 이미지를 공개 URL로 불러온다.
      //
      // `blob:`이 오래 붙어 있었는데 **쓰는 곳이 없었다**(2026-08-07에 뺐다). PDF를 만들 때
      // `URL.createObjectURL`을 세 곳에서 쓰지만 셋 다 `anchor.download`로 내려받기다 —
      // 그림으로 그리는 자리가 아니라 `img-src`가 다스리는 대상이 아니다. 얻는 것 없이 열려
      // 있던 자리라 닫는다. 나중에 blob을 **그림으로** 그릴 일이 생기면 그때 다시 넣을 것.
      `img-src 'self' data:${supabaseConnect}${ads("image")}${pay("image")}${toss("image")}`,
      `font-src 'self' data:${ads("font")}`,
      `connect-src 'self'${isDev ? " ws: wss:" : ""}${supabaseConnect}${ads("connect")}${gam("connect")}${pay("connect")}${toss("connect")}`,
      // 보상형 광고는 iframe으로 뜬다. GAM만 켜고 애드센스를 끈 상태도 가능하므로
      // 조건에 함께 넣지 않으면 frame-src가 'none'이 되어 광고가 통째로 막힌다.
      adsEnabled || gamRewardedEnabled || paymentsConfigured || tossConfiguredForCsp
        ? `frame-src 'self'${ads("frame")}${gam("frame")}${pay("frame")}${toss("frame")}`
        : "frame-src 'none'",
      `form-action 'self'${pay("formAction")}${toss("formAction")}`,
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
    ].join("; "),
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig: NextConfig = {
  // 응답에서 `X-Powered-By: Next.js`를 뺀다. 어떤 프레임워크를 쓰는지 굳이 알릴 이유가 없다 —
  // 공격자가 프레임워크별 알려진 취약점을 먼저 훑는 데 쓰는 정보다. 동작에는 영향이 없다.
  poweredByHeader: false,
  // packages/core는 빌드 산출물이 아니라 .ts 소스를 그대로 export하므로 앱에서 트랜스파일한다.
  transpilePackages: ["@naminglink/core"],
  outputFileTracingIncludes: {
    "/api/premium-reports/**/*": [
      "./assets/fonts/*.otf",
      "./assets/fonts/*.ttf",
      "./public/images/logo-current.png",
    ],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  /**
   * `www`를 정본 주소로 넘긴다.
   *
   * 지금은 apex와 `www` **둘 다 200을 낸다**(실측). 내용이 같은 사이트가 두 호스트로 살아 있는
   * 셈이라, canonical이 apex를 가리켜 색인은 한쪽으로 모이더라도 크롤링은 두 배로 돌고 외부
   * 링크도 갈린다. 애드센스처럼 "사이트 단위"로 보는 곳에서도 주소가 하나인 편이 낫다.
   *
   * **도메인을 여기에 적지 않는다.** `NEXT_PUBLIC_SITE_URL`에서 호스트를 끌어와 그 앞에 `www.`가
   * 붙은 요청만 잡는다 — 도메인이 바뀌어도 이 파일은 그대로다(크론 주소를 하드코딩했다가
   * 조용히 죽었던 것과 같은 교훈이다). 값이 없거나 이미 `www.`로 시작하면 아무것도 하지 않는다.
   */
  async redirects() {
    let apexHost: string;
    try {
      apexHost = new URL(
        process.env.NEXT_PUBLIC_SITE_URL ?? "https://naminglink.vercel.app",
      ).hostname;
    } catch {
      return [];
    }
    if (apexHost.startsWith("www.")) return [];

    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: `www.${apexHost}` }],
        destination: `https://${apexHost}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
