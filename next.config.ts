import type { NextConfig } from "next";

// 전역 보안 헤더. 클릭재킹 차단(frame-ancestors + X-Frame-Options)과 MIME 스니핑·리퍼러
// 누출 방지가 핵심. script-src를 제한하는 강한 CSP는 Next 인라인 스크립트·PortOne SDK를
// 깨뜨릴 수 있어 지금은 프레이밍 차단만 CSP로 걸고, 나머지는 개별 헤더로 처리한다.
const securityHeaders = [
  { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
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
