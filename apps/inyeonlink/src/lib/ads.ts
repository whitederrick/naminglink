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

/**
 * **광고 체제 — 심사와 운영을 가른다** (naminglink에서 이식, 2026-08-18).
 *
 * 연결(`adsEnabled`)과 게재(`adMode`)는 다른 값이다. 광고를 끄려고
 * `NEXT_PUBLIC_ADSENSE_CLIENT`를 지우면 **ads.txt가 404가 되고 사이트 연결도 함께 죽는다** —
 * 애드센스 심사는 「코드가 설치되어 있는가」를 보는 절차라 연결을 끊는 것은 심사를 막는 일이다.
 * 값을 지우지 말고 이 플래그만 쓸 것.
 *
 * **기본값은 심사 모드다.** 「켜는 것을 잊는 것」은 수익이 늦어지는 일이고 「끄는 것을 잊는
 * 것」은 정책 위반이 되는 일이라, 안전한 쪽을 기본으로 둔다.
 *
 * **`NEXT_PUBLIC_`이어야 한다.** 광고 컴포넌트가 클라이언트라, 서버에서만 읽으면 서버 HTML과
 * 하이드레이션 결과가 갈린다.
 */
const adMode = (process.env.NEXT_PUBLIC_AD_MODE ?? "").trim().toLowerCase();

/** 운영 모드인가. 거짓이면 심사 모드다. */
export const adsLive = adMode === "live";

/**
 * **광고 관문을 세워도 되는가.** 관문이란 「광고를 봐야 결과가 열리는」 자리다.
 *
 * 심사 모드에서는 관문이 통째로 없다. 광고를 띄우지 않으면서 화면이 「광고 확인 후 시작」이라고
 * 말하면 심사자에게는 미완성이거나 기만적인 화면으로 읽힌다.
 */
export const adGatesEnabled = adsLive;

/**
 * **구글 게시자 제품이 지원하는 언어.** 여기 없는 언어의 화면에는 광고 코드를 싣지 않는다.
 *
 * > "Placing Google ad code on pages with content primarily in an unsupported language is not
 * > permitted by the Google Publisher Policies."
 * > — support.google.com/adsense/answer/9727
 *
 * 23개 로케일 중 **카자흐어·크메르어·몽골어·우즈베크어 넷이 목록에 없다.** 그 화면에 로더나
 * `<ins>`가 나가는 것 자체가 위반이다 — 광고가 실제로 채워지는지와 무관하다.
 */
const ADSENSE_SUPPORTED_LOCALES = new Set<string>([
  "ko", "en", "ja", "zh", "de", "es", "fr", "it", "pt",
  "vi", "th", "id", "ru", "ar", "fil", "hi", "tr", "ms", "pl",
]);

/**
 * **사람이 번역을 검수한 로케일.** 위 목록과 **다른 개념**이다.
 *
 * 목록에 en이 있는 것은 구글이 영어 광고를 지원한다는 뜻이지, 우리 영어판을 사람이 읽어 봤다는
 * 뜻이 아니다. 이 저장소의 번역은 기계 번역이며 원어민 감수를 거치지 않았다.
 *
 * **한국어는 번역이 아니라 원문이므로** 검수 대상이 아니다 — 그래서 여기 있다. 나머지는 사람이
 * 그 언어 화면을 실제로 읽어 본 뒤 `docs/LOCALE_REVIEW_LOG.md`에 줄을 더하고 여기 넣는다.
 * 근거가 없는 로케일을 여기 적지 말 것 — 이름이 지키지 못하는 약속을 하게 된다.
 */
// 신고 채널(관측망, naminglink docs/LOCALE_AD_STRATEGY_2026-08-21.md §3.5 ⑤)이 이 값을
// 그대로 가져다 쓴다 — 광고 검수가 열릴 때 신고 버튼도 같은 커밋에서 함께 열리게 하려는
// 것이다. 그래서 export한다.
export const HUMAN_REVIEWED_LOCALES: ReadonlySet<string> = new Set(["ko"]);

/**
 * 이 화면에 구글 광고 코드를 실어도 되는가. **애드센스·GAM 양쪽에 같이 적용된다** —
 * 정책 문서가 「Google publisher products」 전체를 대상으로 한다.
 *
 * **심사 모드에서도 참이다.** 발행한 콘텐츠가 그려진 자리의 배너는 그대로 있어야 애드센스가
 * 코드를 찾는다. 심사 모드에서 꺼지는 것은 **관문**이다(`adGatesEnabled`).
 */
export function adsAllowedForLocale(locale: string): boolean {
  return (
    adsEnabled &&
    ADSENSE_SUPPORTED_LOCALES.has(locale) &&
    HUMAN_REVIEWED_LOCALES.has(locale)
  );
}

/** 검사기 대조군. 지원하지 않는 로케일(우리 23개 중). */
export function unsupportedAdLocales(locales: readonly string[]): string[] {
  return locales.filter((locale) => !ADSENSE_SUPPORTED_LOCALES.has(locale));
}

/** 검사기 대조군. 광고 코드가 **있어야 하는** 로케일이다(지원 ∩ 검수). */
export function adEligibleLocales(locales: readonly string[]): string[] {
  return locales.filter(
    (locale) => ADSENSE_SUPPORTED_LOCALES.has(locale) && HUMAN_REVIEWED_LOCALES.has(locale),
  );
}


export const adsenseClient = adsEnabled ? rawClient : "";

/** ads.txt에 적는 형태. `ca-` 접두사를 뗀 값이다. */
export const adsensePublisherId = adsEnabled ? rawClient.slice("ca-".length) : "";

/**
 * **슬롯 ID 형식 검사 — 틀리면 빌드를 세운다.**
 *
 * 빈 값은 통과시킨다. 자리를 하나씩 켜는 것이 설계이고(다크 런치), 슬롯이 비면 그 자리만
 * 조용히 렌더링하지 않는다.
 *
 * ## 왜 필요한가 (2026-08-18)
 *
 * 열네 자리 **전부에 퍼블리셔 ID**가 들어간 채 운영까지 갔다.
 *
 *     넣은 값   5084236528895241   ← 퍼블리셔 ID, 16자리, 계정에 하나
 *     넣을 값   4148237335         ← 광고 단위 ID, 10자리, 자리마다 하나
 *
 * 애드센스가 **사이트 확인 화면**에서 보여 준 ads.txt 줄
 * (`google.com, pub-5084236528895241, DIRECT, …`)에서 가져온 값이었다. 그 줄은 이 코드가
 * 이미 자동으로 내고 있어 어디에도 붙여넣을 필요가 없는데, 화면에 나란히 보이니 그것이 슬롯
 * ID로 읽혔다.
 *
 * **화면으로는 안 보인다.** 틀린 슬롯은 no-fill과 똑같이 빈 자리로 나오고, 승인 전에는 no-fill이
 * 정상이라 「아직 승인이 안 나서 그렇겠지」로 지나간다. 그래서 사람이 아니라 여기가 세야 한다.
 *
 * **런타임에는 못 터진다.** `NEXT_PUBLIC_`은 빌드 때 값으로 박히므로, 빌드가 통과했다면
 * 브라우저에서도 같은 값이다.
 */
function adSlot(name: string, raw: string | undefined): string {
  const value = (raw ?? "").trim();
  if (!value) return "";
  if (!/^\d{10}$/.test(value)) {
    throw new Error(
      `NEXT_PUBLIC_ADSENSE_SLOT_${name}: 광고 단위 ID는 숫자 10자리여야 합니다. ` +
        `받은 값 "${value}" (${value.length}자리).\n` +
        "애드센스 → 광고 → '광고 단위 기준'에서 단위를 만들면 나오는 코드의 " +
        "data-ad-slot 값입니다. ads.txt의 퍼블리셔 ID(pub-…, 16자리)나 " +
        "data-ad-client 값이 아닙니다.",
    );
  }
  return value;
}

/**
 * 광고 자리별 슬롯 ID. 애드센스 콘솔에서 광고 단위를 만들면 하나씩 나온다.
 *
 * **발행한 화면에만, 화면마다 두 자리.** 이미 내용이 실린 화면에 머리글(`_header`)과 본문
 * 중간(`_inline`) 한 쌍을 둔다. 중간은 읽는 도중의 섹션 경계에 두고 맨 아래에는 두지 않는다 —
 * 결과 맨 아래는 아무도 안 본다.
 *
 * **자리마다 슬롯을 하나씩 준다.** 한 슬롯으로 묶으면 어느 화면이 실제로 버는지 콘솔에서
 * 갈라 볼 수 없다. 슬롯이 비면 그 자리만 조용히 렌더링하지 않으므로 **한 자리씩 켜 보는 것도
 * 된다** — 자리 하나를 빼려고 배포를 다시 할 필요가 없다.
 *
 * 키는 **snake_case**다. naming-link의 `adSlots`와 같은 규칙이라 네 앱을 한 눈으로 본다.
 *
 * ## 되돌리지 말 것 — 여기에 없는 자리들
 *
 * · **`top`·`bottom`** (2026-08-18에 뺐다). 머리글(`PageHeader`)·안내(`GuideShell`)·
 *   약관(`LegalDocumentView`)·입력 화면이 **함께 쓰던 자리**라, 슬롯 ID를 하나 넣으면
 *   아직 아무것도 발행하지 않은 화면 전부에 광고가 나갔다. naming-link을 2026-08-10에
 *   반려시킨(「가치가 별로 없는 콘텐츠」) 것이 정확히 그 구조다.
 * · **계산 중 팝업(`AdWatchOverlay`)**. 화면을 덮는 오버레이이자 결과를 여는 관문이라
 *   오버레이 게재 금지와 보상형 금지에 동시에 걸린다. 보상형이 필요하면 GAM 보상형 포맷을 쓸 것.
 */
export const adSlots = {
  /** 궁합 결과 — 제목 아래 머리글. */
  compatibility_result_header: adSlot("COMPATIBILITY_RESULT_HEADER", process.env.NEXT_PUBLIC_ADSENSE_SLOT_COMPATIBILITY_RESULT_HEADER),
  /** 궁합 결과 — 본문 중간, 무료와 유료의 경계. */
  compatibility_result_inline: adSlot("COMPATIBILITY_RESULT_INLINE", process.env.NEXT_PUBLIC_ADSENSE_SLOT_COMPATIBILITY_RESULT_INLINE),
  /** 인연의 결 결과 — 제목 아래 머리글. */
  affinity_result_header: adSlot("AFFINITY_RESULT_HEADER", process.env.NEXT_PUBLIC_ADSENSE_SLOT_AFFINITY_RESULT_HEADER),
  /** 인연의 결 결과 — 본문 중간. */
  affinity_result_inline: adSlot("AFFINITY_RESULT_INLINE", process.env.NEXT_PUBLIC_ADSENSE_SLOT_AFFINITY_RESULT_INLINE),
} as const;

/**
 * **같은 슬롯 ID를 두 자리에 쓰지 않는다.** 자리를 나눈 이유가 어느 화면이 버는지 갈라 보려는
 * 것이므로, 값이 겹치면 나눈 의미가 사라진다. 한 자리를 복사해 붙여 넣다가 이름만 바꾸고 값을
 * 안 바꾸는 실수가 이 검사에 걸린다. **빈 값끼리는 겹쳐도 된다**(아직 안 켠 자리들이다).
 */
{
  const seen = new Map<string, string>();
  for (const [key, value] of Object.entries(adSlots)) {
    if (!value) continue;
    const first = seen.get(value);
    if (first) {
      throw new Error(
        `광고 슬롯 ID ${value}가 두 자리에 들어가 있습니다 — ${first} 와 ${key}. ` +
          "자리마다 다른 광고 단위를 만들어야 화면별 수익이 갈려 보입니다.",
      );
    }
    seen.set(value, key);
  }
}

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
