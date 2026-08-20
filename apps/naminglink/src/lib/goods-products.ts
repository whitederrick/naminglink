// 실물 굿즈 상품표. 가격은 반드시 이 표에서만 읽는다.
// 굿즈 로드맵(2026-07-23): 당분간 도장만 판매(캘리그라피 보류).
// 결제사(2026-07-29 일원화): 국내는 토스페이먼츠 직접, 해외는 포트원 경유 페이팔.
//
// **여기에 금액을 두지 않는다.** 값은 `product_settings`(모델별 3종)가 정하고 주문 라우트가
// 거기서만 읽는다. 예전에는 이 구조체에 단일 상품가(₩39,000 / US$34.99)가 함께 들어 있었는데,
// 아무도 읽지 않는 값이 낡은 채로 남아 약관에 옮겨 적히는 통로가 됐다(US$34.99는 모델별 가격이
// 생긴 뒤 어느 모델과도 맞지 않는 값이었다). 금액은 한 곳에만 둔다.
export const STAMP_PRODUCT = {
  code: "STAMP_BASIC",
  orderType: "STAMP_DELIVERY",
  name: "이름 도장 (국내 배송)",
  orderName: "Naming-Link 이름 도장",
  provider: "TOSS",
} as const;

export const STAMP_PRODUCT_GLOBAL = {
  code: "STAMP_BASIC_GLOBAL",
  orderType: "STAMP_DELIVERY",
  name: "Name Stamp (international shipping included)",
  orderName: "Naming-Link Name Stamp",
  provider: "PORTONE_PAYPAL",
} as const;

/** 모델과 권역으로 `product_settings`의 어느 행을 읽을지 정한다. */
export function stampSettingCode(model: StampModelCode, region: StampRegion) {
  return STAMP_MODELS[model].settingCode[region];
}

/**
 * 그 로케일이 **국내인가 해외인가**. 배송·결제사·가격표가 여기서 갈린다.
 *
 * 2026-08-20에 꺼냈다. `stamp-order` 페이지에만 인라인으로 있어서, 결과 화면 카드가 같은
 * 판정을 하려면 규칙을 옮겨 적어야 했다.
 */
export function stampRegionForLocale(locale: string): StampRegion {
  return locale === "ko" ? "domestic" : "global";
}

/**
 * 판정의 **알맹이**. 이미 읽어 둔 표시 가격에서 정한다.
 *
 * `stamp-order` 페이지는 화면에 쓰려고 가격 셋을 이미 읽는다. 거기서 서버 조회를 또
 * 하면 같은 조회를 두 번 하고, 그렇다고 페이지가 규칙을 **옮겨 적으면** 판정이 두 벌이
 * 된다 — 지금 고치고 있는 바로 그 결함이다. 그래서 알맹이를 꺼내 둘이 같이 부른다.
 */
export function stampOrderableFrom(prices: readonly (string | null)[]): boolean {
  return prices.some((price) => price !== null);
}

export function getStampProduct(region: StampRegion) {
  return region === "global" ? STAMP_PRODUCT_GLOBAL : STAMP_PRODUCT;
}

export const STAMP_REGIONS = ["domestic", "global"] as const;

export type StampRegion = (typeof STAMP_REGIONS)[number];

// 도장 모델 3종. **모델마다 값이 다르다**(2026-07-27 사용자 확정 — 재질·형태가 다른데 같은
// 값을 받던 것을 바로잡았다). 실제 금액은 코드가 아니라 `product_settings`가 정하고, 여기서는
// 어느 행을 읽을지(settingCode)만 정한다. 폴백 금액은 DB를 못 읽었을 때만 쓴다.
export const STAMP_MODEL_CODES = ["ROUND_WOOD", "SQUARE_WOOD", "EBONY"] as const;

export type StampModelCode = (typeof STAMP_MODEL_CODES)[number];

export const STAMP_MODELS = {
  ROUND_WOOD: {
    code: "ROUND_WOOD",
    settingCode: { domestic: "STAMP_ROUND_WOOD_KRW", global: "STAMP_ROUND_WOOD_USD" },
    fallbackAmount: { domestic: 39000, global: 3990 },
    name: "원형 목도장",
    nameEn: "Round wooden stamp",
    description: "둥근 몸체의 기본형 목도장. 은행·관공서 제출용으로 두루 쓰입니다.",
    descriptionEn: "The classic round body, widely used for banks and official paperwork in Korea.",
  },
  SQUARE_WOOD: {
    code: "SQUARE_WOOD",
    settingCode: { domestic: "STAMP_SQUARE_WOOD_KRW", global: "STAMP_SQUARE_WOOD_USD" },
    fallbackAmount: { domestic: 59000, global: 5990 },
    name: "사각 목도장",
    nameEn: "Square wooden stamp",
    description: "각진 몸체에 또렷한 인영. 서명 대용과 소장용으로 인기 있는 형태입니다.",
    descriptionEn: "A squared body with a crisp imprint — popular as a signature stamp and keepsake.",
  },
  EBONY: {
    code: "EBONY",
    settingCode: { domestic: "STAMP_EBONY_KRW", global: "STAMP_EBONY_USD" },
    fallbackAmount: { domestic: 79000, global: 7990 },
    name: "흑단 도장",
    nameEn: "Ebony stamp",
    description: "단단하고 묵직한 흑단 원목. 선물·기념용으로 좋은 프리미엄 재질입니다.",
    descriptionEn: "Dense, weighty ebony wood — a premium material that makes a great gift.",
  },
} as const satisfies Record<
  StampModelCode,
  {
    code: StampModelCode;
    settingCode: Record<StampRegion, string>;
    fallbackAmount: Record<StampRegion, number>;
    name: string;
    nameEn: string;
    description: string;
    descriptionEn: string;
  }
>;
