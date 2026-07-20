import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/api/premium-reports/**/*": [
      "./assets/fonts/*.otf",
      "./assets/fonts/*.ttf",
    ],
  },
};

export default nextConfig;
