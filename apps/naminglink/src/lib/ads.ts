// 애드센스 설정. **다크 런치**로 둔다(인연링크의 같은 파일과 규칙을 맞춘다) — 퍼블리셔 ID가 없으면 광고 스크립트도, ads.txt도,
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
 * **자리마다 슬롯을 하나씩 준다.** 결과 화면 머리글 넷을 한 슬롯으로 묶으면 어느 서비스가
 * 실제로 버는지 콘솔에서 갈라 볼 수 없다. 슬롯이 비어 있으면 그 자리만 조용히 렌더링하지
 * 않으므로, 한 자리씩 켜 보는 것도 된다.
 *
 * 키는 **snake_case**다. `trackAdEvent`의 `slotKey`(`analysis_wait`·`candidate_unlock`)와
 * 화면 컴포넌트가 넘기는 값이 이미 이 꼴이라 거기에 맞춘다 — 한 자리를 부르는 이름은 하나여야
 * 광고 수익과 이벤트 로그를 같은 키로 맞춰 볼 수 있다.
 *
 * 예전에는 이 표가 camelCase(`serviceHeader`)인데 호출부는 snake_case(`service_header`)를
 * 넘겨서 **아홉 자리가 전부 슬롯을 못 찾았다.** `slotKey?: string` + `as AdPlacement` 캐스팅이
 * 타입 검사를 통과시켜 배포까지 갔다. 지금은 `AdBanner`가 이 키 타입만 받으므로 이름이
 * 어긋나면 컴파일이 깨진다.
 */
export const adSlots = {
  /** 서비스 입력 화면 머리글 옆. 인연링크의 header와 같은 자리다. */
  service_header: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_SERVICE_HEADER ?? "").trim(),
  /** 입력 화면 동의 영역 옆. 제출 버튼과는 떨어뜨려 둔다(오클릭 방지). */
  consent_card: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_CONSENT_CARD ?? "").trim(),
  /**
   * **관문 자리는 여기에 없다.** 예전에는 `analysis_wait`·`candidate_unlock`·
   * `hangul_candidate_unlock` 셋이 있었다. 전부 "광고를 봐야 결과가 열리는" 자리인데,
   * 애드센스 표시 광고는 콘텐츠 해제의 대가로 쓸 수 없다(보상형은 GAM·AdMob 포맷 전용).
   * 게다가 분석 대기 자리는 닫을 수 없는 전면 오버레이라, 오버레이 게재 금지에도 걸렸다.
   *
   * 관문의 대가는 오퍼월(진입)과 GAM 보상형(후보 열기·다시 분석)이 맡고, 그 둘이 없으면
   * 셀프 광고가 자리를 채운다. **이 표에 그 세 자리를 다시 넣지 말 것** — 넣는 순간 같은
   * 위반이 되살아난다. 여기 남는 것은 관문이 아닌 일반 자리뿐이다.
   */

  /** 한자 의미 매칭 결과 머리글. */
  hanja_result_header: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_HANJA_RESULT_HEADER ?? "").trim(),
  /** 한국 이름 만들기 결과 머리글. */
  korean_name_result_header: (
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_KOREAN_NAME_RESULT_HEADER ?? ""
  ).trim(),
  /** 글로벌 이름 변환 결과 머리글. */
  korean_to_global_result_header: (
    process.env.NEXT_PUBLIC_ADSENSE_SLOT_KOREAN_TO_GLOBAL_RESULT_HEADER ?? ""
  ).trim(),
  /** 한글 발음 표기 결과 머리글. */
  hangul_result_header: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_HANGUL_RESULT_HEADER ?? "").trim(),
} as const;

export type AdPlacement = keyof typeof adSlots;

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
