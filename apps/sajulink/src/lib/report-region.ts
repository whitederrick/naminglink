import type { Locale } from "@/lib/i18n";

/**
 * 화면 언어로 결제권역을 정한다. **클라이언트·서버 양쪽에서 부른다.**
 *
 * 한국어 화면이면 국내(토스페이먼츠 990원), 그 외에는 해외(페이팔 US$1.99)다. 접속 국가가
 * 아니라 **화면 언어**를 기준으로 삼는 이유는, 이용자가 실제로 보고 있는 가격 표기와
 * 결제 수단이 어긋나지 않게 하기 위해서다(naminglink의 일괄 공개와 같은 규칙).
 *
 * **`report-product.ts`가 아니라 여기 있는 이유.** 그 파일은 `server-only`를 들여와
 * `ReportPurchasePanel.tsx`(클라이언트 컴포넌트)가 못 부른다. 예전에는 이 함수 자체를
 * 그대로 복붙해 두 벌 두었는데(2026-08-26 코드 리뷰에서 발견), 규칙을 한쪽만 고치면
 * 화면이 보여 준 가격과 서버가 만드는 주문이 어긋나고 타입이 같아서 컴파일러도 못 잡는
 * 자리였다. 순수 함수라 `server-only`가 필요 없으므로 이 작은 파일로 뽑아 양쪽이 가져다
 * 쓴다(inyeonlink에도 같은 모양으로 뽑았다).
 */
export const REPORT_REGIONS = ["domestic", "global"] as const;
export type ReportRegion = (typeof REPORT_REGIONS)[number];

export function regionForLocale(locale: Locale): ReportRegion {
  return locale === "ko" ? "domestic" : "global";
}
