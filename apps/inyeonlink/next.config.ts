import type { NextConfig } from "next";

import { adsCspSources, adsEnabled } from "./src/lib/ads";

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

// 광고 프레임을 띄우려면 frame-src가 필요하고, 광고가 없으면 프레임 자체를 막아 둔다.
const frameSrc = adsEnabled ? `frame-src 'self'${ads("frame")}` : "frame-src 'none'";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js 인라인 부트스트랩 스크립트 때문에 'unsafe-inline'이 필요하다.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${ads("script")}`,
      "style-src 'self' 'unsafe-inline'",
      `img-src 'self' data:${ads("image")}`,
      `font-src 'self' data:${ads("font")}`,
      `connect-src 'self'${isDev ? " ws: wss:" : ""}${ads("connect")}`,
      frameSrc,
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
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
