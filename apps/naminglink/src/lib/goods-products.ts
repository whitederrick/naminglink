// 실물 굿즈 상품표. 가격은 반드시 이 표에서만 읽는다.
// 굿즈 로드맵(2026-07-23): 당분간 도장만 판매(캘리그라피 보류).
// 국내: ₩39,000 카카오페이 / 글로벌: US$34.99(국제배송비 포함, 2026-07-23 확정) 페이팔.
export const STAMP_PRODUCT = {
  code: "STAMP_BASIC",
  orderType: "STAMP_DELIVERY",
  name: "이름 도장 (국내 배송)",
  orderName: "Naming-Link 이름 도장",
  amount: 39000,
  currency: "KRW",
  display: "₩39,000",
  channel: "kakaopay",
} as const;

export const STAMP_PRODUCT_GLOBAL = {
  code: "STAMP_BASIC_GLOBAL",
  orderType: "STAMP_DELIVERY",
  name: "Name Stamp (international shipping included)",
  orderName: "Naming-Link Name Stamp",
  // 포트원 V2는 USD를 센트 단위 정수로 받는다.
  amount: 3499,
  currency: "USD",
  display: "US$34.99",
  channel: "paypal",
} as const;

/** 모델과 권역으로 `product_settings`의 어느 행을 읽을지 정한다. */
export function stampSettingCode(model: StampModelCode, region: StampRegion) {
  return STAMP_MODELS[model].settingCode[region];
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
