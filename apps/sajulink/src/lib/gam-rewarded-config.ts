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

/** GAM이 쓰는 도메인. CSP에 넣어야 하는 값이라 `next.config.ts`와 공유한다. */
export const gamCspSources = {
  script: ["https://securepubads.g.doubleclick.net", "https://pagead2.googlesyndication.com"],
  frame: ["https://securepubads.g.doubleclick.net", "https://googleads.g.doubleclick.net"],
  connect: ["https://securepubads.g.doubleclick.net", "https://googleads.g.doubleclick.net"],
} as const;
