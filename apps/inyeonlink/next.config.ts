import type { NextConfig } from "next";

import { adsCspSources, adsEnabled } from "./src/lib/ads";
// 설정 파일에서 직접 가져온다. `gam-rewarded`는 `"use client"`라 이 자리에서 읽을 값이 아니다.
import { gamCspSources, gamRewardedEnabled } from "./src/lib/gam-rewarded-config";
import {
  paymentCspSources,
  paymentsConfigured,
  tossConfiguredForCsp,
  tossCspSources,
} from "./src/lib/payments-csp";

// naminglink와 같은 기준의 전역 보안 헤더. 이 앱은 결제창을 띄우지 않으므로 script-src까지
// 조이는 전체 CSP를 처음부터 적용할 수 있다(naminglink는 PortOne 때문에 보류 중).
//
// 개발 모드에서만 'unsafe-eval'과 웹소켓을 허용한다. React 개발 빌드가 콜스택 복원 같은
// 디버깅 기능에 eval()을 쓰고, Turbopack HMR이 웹소켓으로 붙기 때문이다. 운영 빌드의 React는
// eval()을 쓰지 않으므로 배포되는 CSP는 그대로 조여 둔다.
const isDev = process.env.NODE_ENV !== "production";

// 광고를 켤 때만 구글 도메인을 연다. 퍼블리셔 ID가 없으면(=다크 런치) 아래 값은 전부 빈
// 배열이라 CSP는 광고 이전과 정확히 같다. 무엇을 여는지는 `src/lib/ads.ts` 참고.
const ads = (kind: keyof typeof adsCspSources) =>
  adsEnabled ? adsCspSources[kind].map((source) => ` ${source}`).join("") : "";

// GAM 보상형(결과 열기 게이트). 광고 단위를 비우면 스크립트가 아예 안 붙으므로 CSP도 닫힌 채로 둔다.
const gam = (kind: keyof typeof gamCspSources) =>
  gamRewardedEnabled ? gamCspSources[kind].map((source) => ` ${source}`).join("") : "";

// 결제도 같은 방식이다. 채널 키가 없으면 결제창을 띄울 일이 없으므로 열지 않는다.
const pay = (kind: keyof typeof paymentCspSources) =>
  paymentsConfigured
    ? paymentCspSources[kind].map((source) => ` ${source}`).join("")
    : "";

// 국내 결제(토스페이먼츠)도 같은 방식이다. 키가 없으면 열지 않는다.
const toss = (kind: keyof typeof tossCspSources) =>
  tossConfiguredForCsp
    ? tossCspSources[kind].map((source) => ` ${source}`).join("")
    : "";

// 광고 프레임도 결제창도 없으면 프레임 자체를 막아 둔다.
// **보상형도 프레임으로 뜬다.** 여기서 빠지면 광고 단위를 넣어도 게이트에서 아무것도 안 뜬다.
const framed =
  adsEnabled || gamRewardedEnabled || paymentsConfigured || tossConfiguredForCsp;
const frameSrc = framed
  ? `frame-src 'self'${ads("frame")}${gam("frame")}${pay("frame")}${toss("frame")}`
  : "frame-src 'none'";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js 인라인 부트스트랩 스크립트 때문에 'unsafe-inline'이 필요하다.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${ads("script")}${gam("script")}${pay("script")}${toss("script")}`,
      "style-src 'self' 'unsafe-inline'",
      `img-src 'self' data:${ads("image")}${pay("image")}${toss("image")}`,
      `font-src 'self' data:${ads("font")}`,
      `connect-src 'self'${isDev ? " ws: wss:" : ""}${ads("connect")}${gam("connect")}${pay("connect")}${toss("connect")}`,
      frameSrc,
      // 리디렉션 결제는 폼 전송으로 PG사에 넘어간다. 결제를 켜지 않으면 자기 자신만 허용한다.
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
  // packages/core는 .ts 소스를 그대로 export하므로 앱에서 트랜스파일한다.
  transpilePackages: ["@naminglink/core"],
  // PDF 리포트가 쓰는 폰트를 배포 산출물에 넣는다. `src/lib/pdf/fonts.tsx`가 이 경로를
  // `process.cwd()` 기준으로 읽으므로 둘 중 하나만 고치면 운영에서만 폰트를 못 찾는다.
  // 아직 PDF를 내려보내는 라우트가 없어 지금은 걸리는 경로가 없지만, 라우트를 만들 때
  // 이 설정을 잊지 않도록 먼저 적어 둔다.
  outputFileTracingIncludes: {
    "/api/report/**/*": ["./assets/fonts/*.otf", "./assets/fonts/*.ttf"],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
