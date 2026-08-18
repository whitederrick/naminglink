/**
 * GAM 보상형 광고의 **설정값만** 담는다. 브라우저 코드(`gam-rewarded.ts`)와 갈라 둔 이유가 있다.
 *
 * `gam-rewarded.ts`는 `"use client"`다. 그 모듈에서 값을 내보내면 **서버에서 읽을 때 `undefined`가
 * 된다** — Next가 클라이언트 모듈을 서버에서 참조로 바꿔 넘기기 때문이다. 운영 상태 점검
 * 라우트(`/api/ops/status`)가 `gamRewardedEnabled`를 그대로 가져다 썼다가 응답에서 그 항목이
 * 통째로 사라지는 것을 실측으로 확인하고 갈랐다(JSON.stringify가 undefined 키를 지운다).
 *
 * 이 파일에는 `"use client"`가 없으므로 서버·클라이언트·`next.config.ts` 어디서 읽어도 값이 같다.
 * **여기에 브라우저 API를 쓰지 말 것** — 그 순간 다시 클라이언트 모듈이 된다.
 */

/** 광고 단위 경로. GAM 콘솔에서 보상형 광고 단위를 만들면 `/네트워크코드/이름` 꼴로 나온다. */
const rawUnit = (process.env.NEXT_PUBLIC_GAM_REWARDED_UNIT ?? "").trim();

/** 형식까지 확인한다. 오타가 들어간 채로 스크립트만 붙으면 CSP만 열리고 광고는 안 나온다. */
export const gamRewardedEnabled = /^\/\d{5,}\/[\w./-]+$/.test(rawUnit);

export const gamRewardedUnit = gamRewardedEnabled ? rawUnit : "";

/**
 * GAM이 쓰는 도메인. CSP에 넣어야 하는 값이라 `next.config.ts`와 공유한다.
 *
 * **보상형은 배너보다 도메인을 더 쓴다** (2026-08-18, naminglink 실측을 옮겨 왔다). 예전 목록은
 * `gpt.js`가 뜨는 데까지만 충분했고, 그 뒤 **재생기와 소재가 쓰는 자리들이 빠져 있었다.**
 * 그런데 `enableServices()`가 없어 광고가 거기까지 간 적이 없어서 드러나지 않았다 — 앞의
 * 결함이 뒤의 결함을 가리고 있었다.
 *
 * naminglink 운영에서 실제로 막힌 것들이다. **네 앱이 같은 코드를 쓰므로 여기도 같이 막힌다.**
 *
 *     script  www.gstatic.com/admanager/outstream/rewarded_web_video_ko.js
 *             → 막히면 `GoogleRewardedWebVideo is not defined`가 나고 광고가 준비 상태에
 *               도달하지 못한다. `rewardedSlotReady`가 영영 오지 않는 원인이었다
 *     frame   cm.g.doubleclick.net · <해시>.safeframe.googlesyndication.com
 *     style   fonts.googleapis.com (Roboto)
 *     media   지시문 자체가 없어 `default-src 'self'`로 떨어져 동영상이 통째로 막혔다
 *
 * safeframe은 소재마다 **호스트가 달라지므로** 와일드카드로 둔다.
 */
export const gamCspSources = {
  script: [
    "https://securepubads.g.doubleclick.net",
    "https://pagead2.googlesyndication.com",
    // 보상형 동영상 재생기.
    "https://www.gstatic.com",
  ],
  frame: [
    "https://securepubads.g.doubleclick.net",
    "https://googleads.g.doubleclick.net",
    // 쿠키 매칭.
    "https://cm.g.doubleclick.net",
    // 소재가 뜨는 안전 프레임. 호스트가 소재마다 다르다.
    "https://*.safeframe.googlesyndication.com",
    "https://tpc.googlesyndication.com",
  ],
  connect: ["https://securepubads.g.doubleclick.net", "https://googleads.g.doubleclick.net"],
  style: ["https://fonts.googleapis.com"],
  font: ["https://fonts.gstatic.com"],
  // 보상형은 **동영상**이다. 파일은 구글 CDN에서 오는데 호스트가 매번 바뀐다
  // (`redirector.gvt1.com` → `*.googlevideo.com`). 이미지와 같은 이유로 못 좁힌다.
  media: ["https:"],
} as const;
