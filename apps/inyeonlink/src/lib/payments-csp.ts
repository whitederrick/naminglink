// 결제(포트원)를 켤 때만 여는 CSP 출처. 광고(`./ads.ts`)와 같은 방식이다 —
// 채널 키가 없으면 결제창을 띄울 일이 없으므로 CSP도 열지 않는다.
//
// **이 목록은 첫 실결제에서 반드시 확인해야 한다.** 포트원은 PG사 창을 iframe이나 리디렉션으로
// 띄우는데 어느 도메인이 오는지는 계약한 PG와 결제 수단에 따라 달라진다. naminglink가 전체
// CSP를 아직 확정하지 못하고 있는 이유가 이것이다(결제를 테스트할 수 없어 검증이 불가능하다).
// 여기서는 카카오페이·페이팔 기준으로 알려진 것을 적어 두고, 실결제에서 콘솔의 CSP 위반
// 보고를 보고 채운다. 막히면 결제가 조용히 실패하므로 반드시 눈으로 확인할 것.
//
// next.config.ts가 이 파일을 읽는다. 클라이언트 번들에는 들어가지 않는다.

/** 상점 ID와 채널 키가 하나라도 있으면 결제를 띄울 수 있는 상태로 본다. */
export const paymentsConfigured = Boolean(
  process.env.NEXT_PUBLIC_PORTONE_STORE_ID &&
    (process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_KAKAOPAY ||
      process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY_PAYPAL ||
      process.env.NEXT_PUBLIC_PORTONE_CHANNEL_KEY),
);

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
