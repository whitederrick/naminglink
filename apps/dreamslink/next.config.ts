import type { NextConfig } from "next";

import { adEligibleLocales, adsCspSources, adsEnabled, adsLive } from "./src/lib/ads";
import { localeCodes } from "./src/lib/locale-codes";
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

/**
 * **같은 출처가 갈래마다 들어와 중복된다.** 광고·GAM·결제·토스가 각자 목록을 내놓는데 겹치는
 * 도메인이 있어서 그렇다 — naminglink 운영 헤더에 `media-src 'self' https: https:`와
 * `connect-src … googleads.g.doubleclick.net … googleads.g.doubleclick.net`이 그대로 나갔다.
 *
 * **동작에는 영향이 없다**(같은 값이 두 번 있을 뿐). 다만 헤더를 읽을 때마다 사람이 헷갈리고,
 * 갈래가 늘수록 심해진다. 조립이 끝난 뒤 한 번에 정리한다 — 갈래마다 목록을 손보는 것보다
 * 이쪽이 낫다. 어느 갈래가 무엇을 여는지는 그 갈래의 목록에 그대로 남는다.
 *
 * 순서는 유지한다(처음 나온 자리에 남긴다). CSP는 순서에 의미가 없지만 diff가 흔들리지 않는다.
 */
const dedupeDirective = (directive: string) => {
  const [name, ...tokens] = directive.split(/\s+/).filter(Boolean);
  const seen = new Set<string>();
  return [name, ...tokens.filter((token) => !seen.has(token) && seen.add(token))].join(" ");
};

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      // Next.js 인라인 부트스트랩 스크립트 때문에 'unsafe-inline'이 필요하다.
      `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}${ads("script")}${gam("script")}${pay("script")}${toss("script")}`,
      // 보상형 소재가 Roboto를 구글 폰트에서 불러온다. 막으면 콘솔이 시끄럽고 소재가 깨진다.
      `style-src 'self' 'unsafe-inline'${gam("style")}`,
      `img-src 'self' data:${ads("image")}${pay("image")}${toss("image")}`,
      `font-src 'self' data:${ads("font")}${gam("font")}`,
      // **여태 없던 지시문이다.** 없으면 `default-src 'self'`로 떨어져 광고 동영상이 막힌다.
      `media-src 'self'${ads("media")}${gam("media")}`,
      `connect-src 'self'${isDev ? " ws: wss:" : ""}${ads("connect")}${gam("connect")}${pay("connect")}${toss("connect")}`,
      frameSrc,
      // 리디렉션 결제는 폼 전송으로 PG사에 넘어간다. 결제를 켜지 않으면 자기 자신만 허용한다.
      `form-action 'self'${pay("formAction")}${toss("formAction")}`,
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "object-src 'none'",
    ]
      .map(dedupeDirective)
      .join("; "),
  },
  /**
   * **광고 체제를 응답이 스스로 밝힌다.** 검사기가 「지금 이 사이트가 심사 모드인가」를 알아야
   * 기대값을 고를 수 있는데, 그 값을 검사기 쪽 `.env.local`에서 읽게 하면 운영 환경변수와
   * 어긋나는 날 엉뚱한 기대값으로 초록불을 낸다. 렌더링을 가르는 값과 **같은 모듈**에서
   * 헤더를 만들면 어긋날 수가 없다. 이용자에게는 보이지 않고 광고 요청도 아니다.
   */
  { key: "X-Ad-Mode", value: adsLive ? "live" : "review" },
  /** 광고 코드를 실어도 되는 로케일(지원 ∩ 검수). 검사기의 대조군이 여기서 온다. */
  { key: "X-Ad-Locales", value: adEligibleLocales(localeCodes).join(",") },
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

/**
 * 상세판에 흡수한 영어 요약 세 편.
 *
 * 이 문서들은 한국어 상세판의 짧은 영어판이었다. 상세판이 23개 언어로 나가는 지금은 같은
 * 내용의 요약이 따로 있을 이유가 없어 지웠다.
 *
 * **그냥 지우면 404다.** 이 주소들은 사이트맵에 실려 색인돼 있었고 외부 링크도 있을 수 있다.
 * 301로 넘겨 그동안 쌓인 신호를 상세판이 물려받게 한다.
 *
 * 로케일 접두사가 붙은 주소(`/ja/guide/…`)도 함께 잡는다 — 색인된 것은 대부분 그쪽이다.
 */
const ABSORBED_GUIDES = [
  ["how-it-works", "how-matching-works"],
  ["what-we-store", "no-storage"],
  ["what-the-reports-contain", "reports"],
].flatMap(([from, to]) => [
  { source: `/guide/${from}`, destination: `/guide/${to}`, permanent: true },
  { source: `/:locale/guide/${from}`, destination: `/:locale/guide/${to}`, permanent: true },
]);

/**
 * 옛 사전의 상징 주소 → 새 사전에서 **같은 뜻**인 상징 (2026-10-13).
 *
 * 해몽 사전을 원문에서 다시 지으며(v2, 2026-08-31) 옛 사전에만 있던 상징 페이지가 사라졌고,
 * 서치 콘솔이 그 주소 124건(상징 59개 × 언어판)을 404로 잡았다. 그중 **뜻이 같은 18개**(+10-21 에 10개)만
 * 301로 잇는다. 나머지 41개는 일부러 잇지 않는다 — 새 사전에 같은 뜻이 없거나(공룡·공항·
 * 시험…), 이름이 비슷해도 다른 뜻이거나(계단≠ascend · 칼≠sword), 새 사전에서 둘로 갈라져
 * 하나로 못 보낸다(신부·신랑). 틀린 곳으로 보내는 것이 404보다 나쁘다.
 *
 * 짝은 새 사전의 `term_ko`/`term_en`을 눈으로 대조해 고른 것이다(옛 값은 `dream-symbols.data.json`).
 * **짝을 더할 때는 도착 id가 `dream-symbols.v2.data.json`에 실제로 있는지 먼저 본다** —
 * `verify-declared-urls` 같은 검사기는 이 표를 모른다.
 *
 * 무접두 주소(`/dream/symbol/…`)는 `proxy.ts`가 어차피 영어판으로 308 보내므로 한 번에 영어판으로 잇는다.
 */
const RENAMED_SYMBOLS: Array<[from: string, to: string]> = [
  ["dancing", "dance"],
  ["falling", "fall"],
  ["old-person", "old-man-or-woman"],
  ["temple", "buddhist-temple"],
  ["market", "marketplace"],
  ["crying", "weeping"],
  ["kissing", "kiss"],
  ["car", "automobile"],
  ["foot", "feet"],
  ["toilet", "outhouse"],
  ["clothes", "clothing"],
  ["naked", "naked-body"],
  ["wallet", "pocketbook"],
  ["fighting", "fight"],
  ["photo", "photograph"],
  ["bead", "beads"],
  ["glasses", "eyeglass"],
  ["nail", "fingernail"],
  // 2026-10-21 추가 — 같은 대상 7개(사용자 결정)
  ["rat", "mouse"],
  ["giving-birth", "birth"],
  ["singing", "song"],
  ["shoe", "shoes"],
  ["drinking-alcohol", "liquor"],
  ["marriage", "wedding"],
  ["tooth-fall", "teeth"],
  // 2026-10-21 추가 — 부분만 겹치지만 사용자가 잇기로 한 3개(뼈→해골만, 여행→먼 길 떠남, 외국인→이방인)
  ["bone", "skeleton"],
  ["traveling", "long-journey"],
  ["foreigner", "alien"],
];
const RENAMED_SYMBOL_REDIRECTS = RENAMED_SYMBOLS.flatMap(([from, to]) => [
  { source: `/dream/symbol/${from}`, destination: `/en/dream/symbol/${to}`, permanent: true },
  {
    source: `/:locale/dream/symbol/${from}`,
    destination: `/:locale/dream/symbol/${to}`,
    permanent: true,
  },
]);

const nextConfig: NextConfig = {
  // 응답에서 `X-Powered-By: Next.js`를 뺀다(naminglink와 같은 이유·같은 설정).
  poweredByHeader: false,
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
  async redirects() {
    return [...ABSORBED_GUIDES, ...RENAMED_SYMBOL_REDIRECTS];
  },
};

export default nextConfig;
