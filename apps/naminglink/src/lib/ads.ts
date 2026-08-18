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
 *
 * **이 값은 「사이트가 애드센스에 연결되어 있는가」다.** ads.txt와 소유권 확인 메타 태그가
 * 여기서 갈린다 — 광고를 끄더라도 이 둘은 살아 있어야 한다(§아래 `adMode`).
 */
export const adsConfigured = /^ca-pub-\d{10,}$/.test(rawClient);

/**
 * **광고 체제 — 심사 모드인가 운영 모드인가** (2026-08-11).
 *
 * ## 왜 환경변수를 지우지 않고 별도 플래그를 두는가
 *
 * 예전에는 판정이 `adsEnabled` 하나였고 그것이 다섯 가지를 한꺼번에 정했다 — 로더·`<ins>`·
 * 오퍼월·CSP·**ads.txt**. 그래서 광고를 끄려면 `NEXT_PUBLIC_ADSENSE_CLIENT`를 지워야 했는데,
 * 그러면 **ads.txt가 404가 되고 사이트 연결도 함께 죽는다.** 애드센스 심사는 「코드가 설치되어
 * 있는가」를 보는 절차라, 연결을 끊는 것은 심사를 막는 일이다.
 *
 * 그래서 **연결(`adsConfigured`)과 게재(`adMode`)를 가른다.** 값을 지우지 말고 이 플래그만 쓸 것.
 *
 * ## 기본값은 심사 모드다
 *
 * 값이 없거나 `"live"`가 아니면 심사 모드다. 「켜는 것을 잊는 것」은 수익이 늦어지는 일이고,
 * 「끄는 것을 잊는 것」은 정책 위반이 되는 일이라 안전한 쪽을 기본으로 둔다.
 *
 * **`NEXT_PUBLIC_`이어야 한다.** `AdBanner`·관문이 클라이언트 컴포넌트라 서버에서만 읽으면
 * 서버 HTML과 하이드레이션 결과가 갈린다.
 */
const adMode = (process.env.NEXT_PUBLIC_AD_MODE ?? "").trim().toLowerCase();

/** 운영 모드인가. 거짓이면 심사 모드다. */
export const adsLive = adMode === "live";

/**
 * **광고 관문을 세워도 되는가.**
 *
 * 관문이란 「광고를 봐야 결과가 열리는」 자리다 — 오퍼월(진입)·GAM 보상형(후보 열기)·
 * 그 둘이 없을 때 도는 자체 게이트(셀프 광고 + 대기)가 전부 여기 해당한다.
 *
 * **심사 모드에서는 관문이 통째로 없다.** 광고를 띄우지 않으면서 화면이 "광고 확인 후 분석
 * 시작"이라고 말하면, 심사자에게는 미완성이거나 기만적인 화면으로 읽힌다. 관문의 유무와
 * 문구의 유무를 **같은 값**으로 묶어 두는 이유가 그것이다 — 스위치를 둘로 두면 한쪽만 꺼진다.
 */
export const adGatesEnabled = adsLive;

export const adsenseClient = adsConfigured ? rawClient : "";

/**
 * **구글 게시자 제품이 지원하는 언어.** 여기 없는 언어의 화면에는 광고 코드를 싣지 않는다.
 *
 * > "Placing Google ad code on pages with content primarily in an unsupported language is not
 * > permitted by the Google Publisher Policies."
 * > — support.google.com/adsense/answer/9727 (2026-08-10 확인)
 *
 * 이 서비스의 23개 로케일 중 **카자흐어·크메르어·몽골어·우즈베크어 넷이 목록에 없다.** 그
 * 화면들에 로더나 `<ins>`가 나가는 것 자체가 정책 위반이다 — 광고가 실제로 채워지는지와
 * 무관하다.
 *
 * ## 왜 「지원 목록」인가, 「비지원 목록」이 아니라
 *
 * 비지원 목록으로 두면 **24번째 로케일을 추가하는 날 조용히 광고가 붙는다** — 새 언어는 그
 * 목록에 없으니 통과한다. 이렇게 두면 새 로케일은 **여기에 명시적으로 넣기 전까지 광고가
 * 안 붙는다.** 빠진 것은 통과가 아니라 확인 안 된 것이다.
 *
 * 구글이 목록을 넓히면 여기에 더한다. 원문을 확인하고 넣을 것 — 추측으로 넣으면 정책 위반이
 * 조용히 살아난다.
 */
const ADSENSE_SUPPORTED_LOCALES = new Set<string>([
  "ko", "en", "ja", "zh", "de", "es", "fr", "it", "pt",
  "vi", "th", "id", "ru", "ar", "fil", "hi", "tr", "ms", "pl",
]);

/**
 * **사람이 번역을 검수한 로케일.** 「구글이 지원하는 언어」와 **다른 개념**이다.
 *
 * 위 목록에 en이 있는 것은 구글이 영어 광고를 지원한다는 뜻이지, 우리 영어판을 사람이 읽어
 * 봤다는 뜻이 아니다. 이 저장소의 번역은 **기계 번역이며 원어민 감수를 거치지 않았다**
 * (`doc-content` 자료에도 그렇게 적어 두었다).
 *
 * ## 지금은 한국어뿐이다
 *
 * 한때 이 값을 `ADSENSE_SUPPORTED_LOCALES`(지원 19개 전부)로 두었다. **이름은 「사람 검수」인데
 * 값은 아무도 읽어 보지 않은 19개**였고, 그 상태로 승인 뒤 `live`로 켜면 미검수 언어 열아홉에
 * 한꺼번에 광고가 열린다. 이름이 지키지 못하는 약속을 하고 있었다(외부 검토가 짚었다).
 *
 * 한국어는 번역이 아니라 원문이므로 검수 대상이 아니다 — 그래서 여기 있다. 나머지는
 * **사람이 그 언어 화면을 실제로 읽어 본 뒤** `docs/LOCALE_REVIEW_LOG.md`에 줄을 더하고
 * 여기에 함께 넣는다. 그 문서에 근거가 없는 로케일을 여기 적지 말 것.
 *
 * 색인 범위와는 **별개다.** 미검수 로케일의 sitemap·색인은 그대로 두고, 광고만 좁힌다.
 */
const HUMAN_REVIEWED_LOCALES: ReadonlySet<string> = new Set(["ko"]);

/**
 * 이 화면에 구글 광고 코드를 실어도 되는가. **애드센스·GAM 양쪽에 같이 적용된다** —
 * 정책 문서가 「Google publisher products」 전체를 대상으로 한다.
 *
 * **심사 모드에서도 참이다.** 결과 화면 배너는 발행한 콘텐츠가 실제로 그려진 자리에만 있고
 * (`adSlots`는 결과 머리글 넷뿐이다), 애드센스 심사는 코드가 설치된 상태를 확인한다. 심사
 * 모드에서 꺼지는 것은 **관문**이다(`adGatesEnabled`).
 */
export function adsAllowedForLocale(locale: string): boolean {
  return (
    adsConfigured &&
    ADSENSE_SUPPORTED_LOCALES.has(locale) &&
    HUMAN_REVIEWED_LOCALES.has(locale)
  );
}

/** 검사기가 대조군으로 쓴다. 지원하지 않는 로케일 목록(우리 23개 중). */
export function unsupportedAdLocales(locales: readonly string[]): string[] {
  return locales.filter((locale) => !ADSENSE_SUPPORTED_LOCALES.has(locale));
}

/** 검사기 대조군. 광고 코드가 **있어야 하는** 로케일이다(지원 ∩ 검수). */
export function adEligibleLocales(locales: readonly string[]): string[] {
  return locales.filter(
    (locale) => ADSENSE_SUPPORTED_LOCALES.has(locale) && HUMAN_REVIEWED_LOCALES.has(locale),
  );
}

/** ads.txt에 적는 형태. `ca-` 접두사를 뗀 값이다. */
export const adsensePublisherId = adsConfigured ? rawClient.slice("ca-".length) : "";

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
  /**
   * **입력 화면 자리는 여기에 없다** (2026-08-10에 뺐다).
   *
   * `service_header`(폼 위 배너)와 `consent_card`(동의·제출 옆 인라인) 둘이 있었다. 두 가지가
   * 겹쳐 걷어냈다.
   *
   * · 입력 화면은 **아직 아무것도 발행하지 않은 화면**이다. 보이는 글의 대부분이 폼 라벨과
   *   선택지인데, 그런 화면에 광고를 얹는 것이 애드센스가 「가치 있는 인벤토리」로 재는
   *   항목에 정면으로 걸린다 — 2026-08-10 거절 사유가 그것이었다.
   * · `consent_card`는 **제출 버튼 바로 옆**이었다. 실수 클릭을 유발하는 배치라 분량을
   *   늘려도 해소되지 않는다.
   *
   * **승인 뒤에도 되돌리지 않는다**(사용자 결정). 고정형 배너는 결과 화면에만 둔다.
   */

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
  /**
   * 한자 의미 매칭 결과 본문 중간 — **무료 결과가 끝나고 유료 안내가 시작되는 경계**다
   * (2026-08-18).
   *
   * **왜 이 자리인가.** 후보 열기 버튼 바로 밑은 피했다. 거기 표시 광고를 두면 「광고를 봐야
   * 열린다」는 그 광고로 오인되고, 표시 광고는 콘텐츠 해제의 대가로 쓸 수 없다. 이 자리는
   * 보상형 CTA와 떨어져 있고 절이 바뀌는 지점이라 그 오해가 없다.
   *
   * **관문 자리가 아니다.** 위 주석의 금지 목록과 헷갈리지 말 것 — 여기는 아무것도 열어 주지
   * 않는 일반 배너다.
   */
  hanja_result_inline: (process.env.NEXT_PUBLIC_ADSENSE_SLOT_HANJA_RESULT_INLINE ?? "").trim(),
} as const;

export type AdPlacement = keyof typeof adSlots;

export function adSlotFor(placement: AdPlacement) {
  if (!adsConfigured) return "";
  return adSlots[placement];
}

/**
 * 애드센스가 붙는 도메인들. CSP에 넣어야 하는 값이라 `next.config.ts`와 공유한다.
 *
 * 애드센스는 CSP를 공식 지원하지 않는다(구글 문서에도 그렇게 적혀 있다). 광고 소재가 임의의
 * CDN에서 오기 때문에 img-src는 사실상 https 전체를 열어야 하고, 그래서 **광고를 켜는 순간
 * 지금의 조인 CSP는 느슨해진다.** 이 목록은 그 대가를 한곳에 모아 두려는 것이다 —
 * 사이트 연결을 끊으면(`adsConfigured`가 거짓) CSP는 원래대로 돌아간다.
 *
 * **심사 모드에서도 이 자리는 열려 있다.** 결과 화면 배너가 그대로 나가기 때문이다. 심사
 * 모드에서 닫히는 것은 GAM 쪽이다(`lib/gam-rewarded.ts` — 보상형은 관문이라 함께 꺼진다).
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
