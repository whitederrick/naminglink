// 애드센스 설정. **다크 런치**로 둔다 — 퍼블리셔 ID가 없으면 광고 스크립트도, ads.txt도,
// CSP 완화도 전부 꺼진 채로 배포된다. naminglink의 포트원 채널 키와 같은 방식이다.
//
// 왜 다크 런치인가: 애드센스는 심사를 통과해야 ID가 나오는데, 심사는 사이트가 이미 떠 있고
// 방침 페이지가 갖춰져 있어야 신청할 수 있다. 코드를 먼저 넣고 ID를 나중에 꽂는 순서가 된다.
//
// 값을 넣은 뒤에는 **재배포가 필요하다.** NEXT_PUBLIC_ 변수는 빌드 시점에 클라이언트 번들로
// 박히기 때문이다.

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
  /** 결과 화면 — 결과를 다 읽은 뒤, 미저장 안내 앞. */
  result: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_RESULT ?? "").trim(),
  /** 입력 화면 — 맨 아래. 제출 버튼과 멀리 둔다(오클릭 방지는 애드센스 정책이기도 하다). */
  form: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_FORM ?? "").trim(),
  /**
   * **계산 중 팝업(`AdRewardGate`) 자리는 여기에 없다.** 예전에는 `analyzing` 슬롯이 있었다.
   * 그 팝업은 화면을 덮는 오버레이이고 결과를 여는 관문이라, 애드센스 표시 광고를 두면
   * 오버레이 게재 금지와 보상형 금지에 동시에 걸린다(naminglink에서 같은 이유로 걷어냈다).
   * 보상형이 필요하면 GAM·AdMob 보상형 포맷을 쓸 것. **이 표에 그 자리를 되돌리지 말 것.**
   */
  /** 머리글 옆 고정 배너. naminglink의 service_header와 같은 자리다. */
  header: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_HEADER ?? "").trim(),
} as const;

export type AdPlacement = keyof typeof adSlots;

/**
 * 제출을 누를 때 광고 관문(`AdWatchOverlay`)을 세울 것인가.
 *
 * **지금은 항상 거짓이다.** 예전에는 `adSlotFor("analyzing")`으로 판단했는데, 그 자리에 있던
 * 애드센스 표시 광고를 정책 때문에 걷어내면서 판단 근거가 함께 사라졌다.
 *
 * 그대로 켜 두면 안 되는 이유: 인연링크는 규칙 엔진이라 결과가 즉시 나온다. 띄울 광고 없이
 * 5초를 붙잡으면 **이용자만 잃고 우리가 버는 것은 없는 순수한 지연**이 된다(naminglink는
 * 그 시간에 실제로 AI를 부르고 있어 사정이 다르다).
 *
 * 되살리는 방법은 GAM 보상형을 붙이는 것이다 — naminglink의 `lib/gam-rewarded.ts`가 본이다.
 * 그때 이 값을 그 준비 여부로 바꾸면 `AdWatchOverlay` 흐름이 그대로 다시 돈다.
 * 타입을 boolean으로 못 박은 것은 `false` 리터럴이 되면 아래 분기가 죽은 코드로 취급되기 때문이다.
 */
export const submitAdGateEnabled: boolean = false;

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
  ],
  // 광고 소재는 어느 도메인에서 올지 알 수 없다. 여기만은 목록으로 못 좁힌다.
  image: ["https:"],
  font: ["https://fonts.gstatic.com"],
} as const;
