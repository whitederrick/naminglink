"use client";

import { adsEnabled, adsenseClient } from "@/lib/ads";

/**
 * 애드센스 로더를 **광고 자리가 실제로 그려질 때만** 붙인다.
 *
 * ## 왜 전역에서 뺐고, 왜 여기가 필요한가
 *
 * 2026-08-11에 이 앱들의 `app/layout.tsx`에서 로더 `<script>`를 걷어냈다. 로더는 **모든
 * 화면**에 실려 있었고, 광고 단위를 두지 않은 화면(로그인·요금·없는 주소·미지원 언어)까지
 * 광고 요청을 냈다. naming-link을 2026-08-10에 반려시킨 「가치가 별로 없는 콘텐츠에 광고」와
 * 정확히 같은 자리다.
 *
 * **그런데 대신 부를 자리를 만들지 않았다.** 그래서 이 세 앱은 슬롯 ID를 넣어도
 * `adsbygoogle.push({})`만 배열에 쌓이고 스크립트가 없어 **광고가 영영 안 나오는 상태**였다
 * (2026-08-18 발견). 파일이 빠진 것이 아니라 배선이 빠진 자리다 — naminglink에는 이 파일이
 * 있었고 셋에만 없었다.
 *
 * ## 왜 로더 자체가 위험한가
 *
 * 로더 스크립트는 자기 혼자서 **자동 광고(앵커·비네트) 자리를 만든다.** 즉 로더가 있는 화면은
 * 우리가 `<ins>`를 두지 않아도 광고 화면이 된다. **콘솔로는 못 막는다** — 자동 광고는 사이트별
 * 설정인데 게재 준비가 안 된 사이트에는 그 설정 행 자체가 없다. 통제할 수 있는 곳은 여기뿐이고,
 * **스크립트를 안 부르면 자리도 안 생긴다.**
 *
 * ## 연결은 끊기지 않는다
 *
 * 사이트 소유권은 `<meta name="google-adsense-account">`(전 화면)와 `/ads.txt`가 맡는다. 둘 다
 * 구글이 공식 지원하는 연결 방법이다. 로더는 **광고를 요청하는 코드**이지 연결을 증명하는
 * 코드가 아니다.
 *
 * ## 한 번만 붙인다
 *
 * 한 화면에 광고 자리가 둘이고 이동·재렌더로 여러 번 불린다. 이미 붙어 있으면 아무 일도 하지
 * 않는다. `adsbygoogle.push({})`는 배열에 쌓이므로 스크립트가 늦게 와도 된다.
 */

const SRC_PREFIX = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

export function ensureAdsenseLoader() {
  if (!adsEnabled) return;
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[src^="${SRC_PREFIX}"]`)) return;

  const script = document.createElement("script");
  script.src = `${SRC_PREFIX}?client=${adsenseClient}`;
  script.async = true;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}
