// 애드센스 설정. **다크 런치**로 둔다 — 퍼블리셔 ID가 없으면 광고 스크립트도, ads.txt도,
// CSP 완화도 전부 꺼진 채로 배포된다. naminglink의 포트원 채널 키와 같은 방식이다.
//
// 왜 다크 런치인가: 애드센스는 심사를 통과해야 ID가 나오는데, 심사는 사이트가 이미 떠 있고
// 방침 페이지가 갖춰져 있어야 신청할 수 있다. 코드를 먼저 넣고 ID를 나중에 꽂는 순서가 된다.
//
// 값을 넣은 뒤에는 **재배포가 필요하다.** NEXT_PUBLIC_ 변수는 빌드 시점에 클라이언트 번들로
// 박히기 때문이다.

// **상대 경로로 둔다.** 이 파일은 `next.config.ts`가 직접 읽는데, 그 자리에서는
// tsconfig의 `@/` 별칭이 보장되지 않는다.
// `gam-rewarded`가 아니라 설정 파일에서 가져온다 — 그쪽은 `"use client"`라 서버에서 읽으면
// 값이 undefined가 된다(`gam-rewarded-config.ts` 주석 참고).
import { gamRewardedEnabled } from "./gam-rewarded-config";

/** 퍼블리셔 ID. 애드센스 계정의 `ca-pub-0000000000000000` 꼴. */
const rawClient = (process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "").trim();

/**
 * 형식까지 확인한다. 빈 문자열이나 오타가 들어간 채로 스크립트를 붙이면 광고는 안 나오는데
 * CSP만 열려 있는 최악의 상태가 된다.
 */
export const adsEnabled = /^ca-pub-\d{10,}$/.test(rawClient);

export const adsenseClient = adsEnabled ? rawClient : "";

/** ads.txt에 적는 형태. `ca-` 접두사를 뗀 값이다. */
export const adsensePublisherId = adsEnabled ? rawClient.slice("ca-".length) : "";

/**
 * 광고 자리별 슬롯 ID. 애드센스 콘솔에서 광고 단위를 만들면 하나씩 나온다.
 *
 * 자리를 나눠 두면 어느 자리가 얼마를 버는지 콘솔에서 갈라 볼 수 있다. 슬롯이 비어 있으면
 * 그 자리만 조용히 렌더링하지 않는다 — 자리 하나를 빼려고 배포를 다시 할 필요가 없다.
 */
export const adSlots = {
  /**
   * **화면 맨 위.** 머리글보다도 앞이다. 흐름 안의 자리라 스크롤하면 같이 올라간다 —
   * 화면에 붙어 따라다니는 스티키(구글이 '앵커 광고'라 부르는 것)가 아니다. 앵커는 자동
   * 광고로만 공식 지원되고, 직접 `position: fixed`로 만들면 정책 위험이 있다.
   */
  top: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOP ?? "").trim(),
  /** 결과 화면 — 결과를 다 읽은 뒤, 미저장 안내 앞. */
  result: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESULT ?? "").trim(),
  /**
   * **화면 맨 아래.** 푸터 바로 위다. 예전의 `form`(입력 화면 맨 아래) 자리를 이것이 대신한다 —
   * 둘을 함께 두면 입력 화면에서 광고 둘이 붙어 나온다.
   */
  bottom: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_BOTTOM ?? "").trim(),
  /**
   * **계산 중 팝업(`AdWatchOverlay`) 자리는 여기에 없다.** 예전에는 `analyzing` 슬롯이 있었다.
   * 그 팝업은 화면을 덮는 오버레이이고 결과를 여는 관문이라, 애드센스 표시 광고를 두면
   * 오버레이 게재 금지와 보상형 금지에 동시에 걸린다(naminglink에서 같은 이유로 걷어냈다).
   * 보상형이 필요하면 GAM·AdMob 보상형 포맷을 쓸 것. **이 표에 그 자리를 되돌리지 말 것.**
   *
   * **제목 옆 `header` 자리도 없앴다(2026-07-31).** 입력 화면은 폼 하나뿐인데 상단·제목 옆·하단
   * 으로 광고가 셋이 되어 콘텐츠보다 많아 보였다. 머리글을 다시 짜면서 가로형 배너 한 자리
   * (`top`)로 합쳤다 — 제목 줄 오른쪽 끝은 언어 선택기가 받았고, 누를 수 있는 것을 광고 옆에
   * 두면 오클릭이 난다. 되돌리려면 `PageTitle`에 자리를 만드는 것부터 다시 해야 한다.
   */
} as const;

export type AdPlacement = keyof typeof adSlots;

/**
 * 제출을 누를 때 광고 관문(`AdWatchOverlay`)을 세울 것인가.
 *
 * **GAM 보상형 광고 단위가 있을 때만 참이다.** 예전에는 `adSlotFor("analyzing")`으로 판단했는데,
 * 그 자리에 있던 애드센스 표시 광고를 정책 때문에 걷어내면서 판단 근거가 사라져 한동안 항상
 * 거짓이었다.
 *
 * 띄울 광고 없이 켜 두면 안 되는 이유: 인연링크는 규칙 엔진이라 결과가 즉시 나온다. 광고
 * 없이 5초를 붙잡으면 **이용자만 잃고 우리가 버는 것은 없는 순수한 지연**이 된다(naminglink는
 * 그 시간에 실제로 AI를 부르고 있어 사정이 다르다). 그래서 판단 근거를 실제로 띄울 광고가
 * 있는지(`gamRewardedEnabled`)에 묶는다 — 단위를 비우면 게이트가 통째로 사라진다.
 *
 * 타입을 boolean으로 못 박은 것은 리터럴 타입이 되면 아래 분기가 죽은 코드로 취급되기 때문이다.
 */
export const submitAdGateEnabled: boolean = gamRewardedEnabled;

export function adSlotFor(placement: AdPlacement) {
  if (!adsEnabled) return "";
  return adSlots[placement];
}

/**
 * 애드센스가 붙는 도메인들. CSP에 넣어야 하는 값이라 `next.config.ts`와 공유한다.
 *
 * 애드센스는 CSP를 공식 지원하지 않는다(구글 문서에도 그렇게 적혀 있다). 광고 소재가 임의의
 * CDN에서 오기 때문에 img-src는 사실상 https 전체를 열어야 하고, 그래서 **광고를 켜는 순간
 * 지금의 조인 CSP는 느슨해진다.** 이 목록은 그 대가를 한곳에 모아 두려는 것이다 —
 * 광고를 끄면(퍼블리셔 ID 제거) CSP는 원래대로 돌아간다.
 */
export const adsCspSources = {
  script: [
    "https://pagead2.googlesyndication.com",
    "https://partner.googleadservices.com",
    "https://tpc.googlesyndication.com",
    "https://www.googletagservices.com",
    "https://adservice.google.com",
    // EEA·영국 이용자에게 띄우는 동의 메시지(구글 CMP). 애드센스 콘솔에서 켜면 이 도메인에서
    // 내려온다 — 켜지 않으면 EEA 트래픽에 광고를 못 싣는다.
    "https://fundingchoicesmessages.google.com",
    "https://ep2.adtrafficquality.google",
  ],
  frame: [
    "https://googleads.g.doubleclick.net",
    "https://tpc.googlesyndication.com",
    "https://www.google.com",
    "https://ep2.adtrafficquality.google",
  ],
  connect: [
    "https://pagead2.googlesyndication.com",
    "https://googleads.g.doubleclick.net",
    "https://ep1.adtrafficquality.google",
    "https://csi.gstatic.com",
    /**
     * **script-src에는 있는데 connect-src에 없었다** (2026-08-18, naminglink 실측).
     *
     * 구글 메시징(Funding Choices)은 스크립트만 내려받는 게 아니라 **여기로 계속 통신한다** —
     * 동의 신호(TCF)·쿠키 갱신·**광고 차단 감지**가 전부 이 주소를 쓴다. 막히면 콘솔이
     * `ad_blocking_detection_executable`·`web_iab_tcf_v2_signal_executable`·
     * `cookie_refresh_executable`에서 줄줄이 차단된다.
     *
     * 이 앱은 아직 광고 차단 회복을 켜지 않았지만, EEA 동의 메시지가 같은 도메인을 쓴다 —
     * 켜는 날 같은 자리에서 막힌다.
     */
    "https://fundingchoicesmessages.google.com",
    // ep1은 connect, ep2는 script에만 있었다. 같은 광고 품질 신호라 쌍으로 둔다.
    "https://ep2.adtrafficquality.google",
  ],
  // 광고 소재는 어느 도메인에서 올지 알 수 없다. 여기만은 목록으로 못 좁힌다.
  image: ["https:"],
  /**
   * **동영상 소재도 같다** (2026-08-18). `media-src`가 아예 없어서 `default-src 'self'`로
   * 떨어졌고, 그래서 광고 동영상이 통째로 막혀 있었다 — 창은 열리는데 안이 비는 증상이다.
   *
   *     redirector.gvt1.com/videoplayback/…/file.mp4  → 차단
   *     NotSupportedError: The element has no supported sources.
   *
   * 이미지와 같은 이유로 목록으로 못 좁힌다. 소재가 어느 CDN에서 올지 우리가 정하지 않는다.
   */
  media: ["https:"],
  font: ["https://fonts.gstatic.com"],
} as const;
