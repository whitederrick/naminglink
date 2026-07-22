import type { NextConfig } from "next";

// 전역 보안 헤더. 클릭재킹 차단(frame-ancestors + X-Frame-Options)과 MIME 스니핑·리퍼러
// 누출 방지가 핵심. script-src·frame-src를 제한하는 강한 CSP는 PortOne 결제창(cdn.portone.io
// 스크립트 + PG사 iframe/redirect)을 깨뜨릴 수 있는데 현재 결제를 테스트할 수 없어 검증이
// 불가능하다 — 결제 흐름과 무관하게 안전한 지시어만 걸고, 전체 CSP는 실결제 테스트 후 확정한다.
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'",
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
