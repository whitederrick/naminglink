import type { LegalDocument, LegalDocumentKey } from "@/lib/legal-content";

/**
 * 광고·결제 플래그 조합. 약관 문구가 이 둘에 따라 갈리기 때문에 조합마다 문서를 따로 담는다.
 *
 * `a`는 `adsEnabled`, `p`는 `paymentsConfigured`다. 둘은 **독립적으로 켜진다**(광고만 먼저 켤
 * 수도 있다). 묶어서 두 상태만 담으면 한쪽만 켠 순간 다른 쪽 문단이 사실과 어긋난다.
 */
export type LegalFlagCombo = "a0p0" | "a1p0" | "a0p1" | "a1p1";

export function legalFlagCombo(ads: boolean, payments: boolean): LegalFlagCombo {
  return `a${ads ? 1 : 0}p${payments ? 1 : 0}` as LegalFlagCombo;
}

/**
 * 한 로케일의 약관 4종 × 플래그 조합 4가지.
 *
 * 문서 안의 사업자 정보와 가격은 **플레이스홀더**로 들어 있다(`{email}`·`{priceDomestic}` 등).
 * 실제 값은 `getLegalDocument`가 넣는다 — 그래야 번역 파일이 DB에 묶이지 않고, 값이 바뀌어도
 * 21개 파일을 다시 만들지 않아도 된다.
 */
export type LegalLocaleDocuments = Record<
  LegalFlagCombo,
  Record<LegalDocumentKey, LegalDocument>
>;

/** 번역 파일이 유지해야 하는 플레이스홀더. 검증기가 이 목록으로 대조한다. */
export const LEGAL_PLACEHOLDERS = [
  "{customerCenter}",
  "{email}",
  "{hostingProvider}",
  "{privacyOfficer}",
  // 이름 없는 두 자리는 **궁합 가격**이다. 21로케일 번역이 이미 이 이름으로 쓰고 있어
  // 뜻을 바꾸지 않았다(2026-07-31에 상품이 둘로 갈리면서 아래 두 자리를 더했다).
  "{priceDomestic}",
  "{priceGlobal}",
  "{priceAffinityDomestic}",
  "{priceAffinityGlobal}",
] as const;
