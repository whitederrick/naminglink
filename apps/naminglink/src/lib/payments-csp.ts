// 결제(포트원)를 켤 때만 여는 CSP 출처. 인연링크의 같은 파일과 **같은 목록을 유지한다** —
// 포트원 상점이 하나이고 같은 PG(카카오페이·페이팔)를 쓰므로 한쪽만 고치면 어긋난다.
//
// **이 목록은 첫 실결제에서 반드시 확인해야 한다.** 포트원은 PG사 창을 iframe이나 리디렉션으로
// 띄우는데 어느 도메인이 오는지는 계약한 PG와 결제 수단에 따라 달라진다. 막히면 결제창이 조용히
// 실패하므로 콘솔의 CSP 위반 보고를 눈으로 볼 것.
//
// next.config.ts가 이 파일을 읽는다. 클라이언트 번들에는 들어가지 않는다.

/** 상점 ID와 채널 키가 하나라도 있으면 결제를 띄울 수 있는 상태로 본다. */
export const paymentsConfigured = Boolean(
  process.env.NEXT_PUBLIC_PORTONE_STORE_ID &&
    (process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_KAKAOPAY ||
      process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL ||
      process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY),
);

/**
 * 토스페이먼츠(국내)를 켤 수 있는 상태인가.
 *
 * next.config.ts가 읽으므로 `toss.ts`(server-only)와 따로 둔다. 서버 전용 모듈을 설정 파일에서
 * 부르면 빌드가 깨진다.
 */
export const tossConfiguredForCsp = Boolean(
  process.env.NEXT_PUBLIC_TOSS_CLIENT_KEY && process.env.TOSS_SECRET_KEY,
);

/**
 * 토스 결제창이 쓰는 출처.
 *
 * **첫 실결제에서 반드시 확인할 것.** 카드사 인증창은 발급사마다 도메인이 달라 여기 목록으로
 * 다 덮이지 않을 수 있다. 막히면 결제창이 조용히 실패하므로 콘솔의 CSP 위반 보고를 봐야 한다.
 */
export const tossCspSources = {
  script: ["https://js.tosspayments.com"],
  frame: ["https://js.tosspayments.com", "https://*.tosspayments.com"],
  connect: ["https://api.tosspayments.com", "https://*.tosspayments.com"],
  image: ["https://static.tosspayments.com", "https://*.tosspayments.com"],
  // 카드 인증은 폼 전송으로 발급사로 넘어간다.
  formAction: ["https://*.tosspayments.com"],
} as const;

export const paymentCspSources = {
  script: ["https://cdn.portone.io", "https://www.paypal.com", "https://www.paypalobjects.com"],
  frame: [
    "https://cdn.portone.io",
    // 카카오페이
    "https://*.kakao.com",
    "https://*.kakaopay.com",
    // 페이팔 SPB
    "https://www.paypal.com",
    "https://*.paypal.com",
  ],
  connect: [
    "https://api.portone.io",
    "https://cdn.portone.io",
    "https://*.paypal.com",
  ],
  image: ["https://cdn.portone.io", "https://www.paypalobjects.com"],
  /** 리디렉션 방식(모바일 간편결제)은 폼 전송으로 PG사로 넘어간다. */
  formAction: ["https://*.kakao.com", "https://*.kakaopay.com", "https://*.paypal.com"],
} as const;

/**
 * 브라우저가 직접 부르는 Supabase 주소.
 *
 * **인연링크에는 없고 naminglink에만 필요하다.** 이 앱은 로그인·계정 화면·관리자 콘솔이
 * 브라우저에서 Supabase를 직접 부른다(`getSupabaseBrowserClient`). connect-src에 넣지 않으면
 * 로그인과 운영 콘솔이 통째로 막힌다.
 *
 * **`img-src`에도 필요하다.** 서체 미리보기(`font-previews` 버킷)와 배경 이미지
 * (`report-backdrops` 버킷)를 Storage 공개 URL로 그대로 불러온다. connect-src에만 넣고
 * img-src를 빠뜨리면 로그인은 되는데 **미리보기만 조용히 깨진다** — 콘솔을 열지 않으면
 * 이미지가 없는 것인지 막힌 것인지 구분되지 않는다(2026-07-28 실제로 겪음).
 */
export const supabaseCspOrigin = (() => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  if (!url) return null;
  try {
    return new URL(url).origin;
  } catch {
    return null;
  }
})();
