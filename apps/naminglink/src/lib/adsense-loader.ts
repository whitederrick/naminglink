"use client";

import { adsConfigured, adsenseClient } from "@/lib/ads";

/**
 * 애드센스 로더를 **광고 자리가 실제로 그려질 때만** 붙인다.
 *
 * ## 왜 전역에서 뺐나 (2026-08-11)
 *
 * 예전에는 `app/layout.tsx`가 로더를 **모든 화면**에 실었다. 광고 단위(`<ins>`)는 결과 화면
 * 넷에만 두었으니 「광고는 결과 화면에만 나간다」고 생각했는데, **실측에서 아니었다.**
 *
 *     /en/login    우리가 넣지 않은 <ins class="adsbygoogle adsbygoogle-noablate">  1개
 *     /en/pricing  같음                                                            1개
 *
 * 로더 스크립트는 자기 혼자서 **자동 광고(앵커·비네트) 자리를 만든다.** 즉 로더가 있는 화면은
 * 우리가 광고 단위를 두지 않아도 광고 화면이 된다. 로그인·요금·빈 결과처럼 **발행한 콘텐츠가
 * 없는 화면**이 그렇게 되는 것이 2026-08-10 반려 사유(「가치가 별로 없는 콘텐츠」)와 정확히
 * 같은 자리다.
 *
 * **콘솔로는 못 막는다.** 자동 광고는 사이트별 설정인데, 광고 게재 준비가 되지 않은 사이트에는
 * 그 설정 행 자체가 없다(2026-08-11 콘솔 확인). 그래서 통제할 수 있는 곳은 여기뿐이다 —
 * **스크립트를 안 부르면 자리도 안 생긴다.**
 *
 * ## 연결은 끊기지 않는다
 *
 * 사이트 소유권은 `<meta name="google-adsense-account">`(전 화면)와 `/ads.txt`가 맡는다.
 * 둘 다 구글이 공식 지원하는 연결 방법이고, 콘솔에서 소유권 확인이 초록인 것을 실측했다.
 * 로더는 **광고를 요청하는 코드**이지 연결을 증명하는 코드가 아니다.
 *
 * ## 한 번만 붙인다
 *
 * 결과 화면에 광고 자리가 하나뿐이지만, 이동·재렌더로 여러 번 불릴 수 있다. 이미 붙어 있으면
 * 아무 일도 하지 않는다. `adsbygoogle.push({})`는 배열에 쌓이므로 스크립트가 늦게 와도 된다.
 */

const SRC_PREFIX = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";

export function ensureAdsenseLoader() {
  if (!adsConfigured) return;
  if (typeof document === "undefined") return;
  if (document.querySelector(`script[src^="${SRC_PREFIX}"]`)) return;

  const script = document.createElement("script");
  script.src = `${SRC_PREFIX}?client=${adsenseClient}`;
  script.async = true;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}
