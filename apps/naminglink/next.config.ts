import type { NextConfig } from "next";

import {
  paymentCspSources,
  paymentsConfigured,
  supabaseCspOrigin,
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

// 채널 키가 없으면 결제창을 띄울 일이 없으므로 열지 않는다(인연링크와 같은 규칙).
const pay = (kind: keyof typeof paymentCspSources) =>
  paymentsConfigured
    ? paymentCspSources[kind].map((source) => ` ${source}`).join("")
    : "";

const supabaseConnect = supabaseCspOrigin ? ` ${supabaseCspOrigin}` : "";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js 인라인 부트스트랩 스크립트 때문에 'unsafe-inline'이 필요하다.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${pay("script")}`,
      "style-src 'self' 'unsafe-inline'",
      `img-src 'self' data: blob:${pay("image")}`,
      "font-src 'self' data:",
      `connect-src 'self'${isDev ? " ws: wss:" : ""}${supabaseConnect}${pay("connect")}`,
      paymentsConfigured
        ? `frame-src 'self'${pay("frame")}`
        : "frame-src 'none'",
      `form-action 'self'${pay("formAction")}`,
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
};

export default nextConfig;
