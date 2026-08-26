import { romanizePillar } from "@naminglink/core/saju";

import type { Locale } from "@/lib/i18n";

/**
 * 오행의 관습적인 색과 간지 독음 — 결과 화면(`SajuResultView.tsx`)과 유료
 * PDF(`pdf/saju-report.tsx`)가 함께 쓴다. **두 곳의 값이 갈리면 같은 서비스로 안 읽힌다.**
 *
 * 예전에는 두 파일에 같은 상수·함수가 복붙돼 있었다(2026-08-26 코드 리뷰에서 발견) — 팔레트를
 * 손보면서 한쪽만 고치면 무료 화면과 유료 PDF가 다른 색을 보여 줄 수 있는 자리였다.
 */
export const ELEMENT_COLOR: Record<string, string> = {
  WOOD: "#4f6f5e",
  FIRE: "#b4535a",
  EARTH: "#b4832f",
  METAL: "#9aa0a6",
  WATER: "#3f4a63",
};

/**
 * 간지 아래에 적을 독음. **한국어면 한글, 그 밖에는 로마자다.**
 *
 * 한자(壬申)는 어느 언어에서도 그대로 둔다 — 그것이 간지의 원문이다. 바꾸는 것은 독음뿐인데,
 * 예전에는 로케일과 무관하게 언제나 한글이라 **독일어 이용자에게 「임신」이 나갔다**(2026-08-07).
 * 읽을 수 없는 글자는 정보가 아니다.
 */
export function pillarReading(hangul: string, locale: Locale) {
  return locale === "ko" ? hangul : romanizePillar(hangul);
}
