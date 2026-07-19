import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/premium-reports/**/*": [
      "./assets/fonts/*.otf",
      "./node_modules/@fontsource/noto-sans-kr/files/noto-sans-kr-korean-*.woff",
    ],
  },
};

export default nextConfig;
