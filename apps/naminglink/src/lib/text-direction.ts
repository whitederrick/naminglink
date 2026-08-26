import type { Locale } from "@/lib/services";

/**
 * 이 로케일이 RTL(오른쪽에서 왼쪽)인가. **클라이언트·서버 양쪽에서 부른다.**
 *
 * `lib/locale.ts`에도 같은 이름의 함수가 있지만, 그 파일은 `next/headers`를 들여와
 * **서버 컴포넌트에서만** 부를 수 있다 — 클라이언트 컴포넌트(`ReportModal.tsx`·
 * `SiteFooter.tsx`)에서 그쪽을 가져다 쓰면 빌드가 죽는다("You're importing a module
 * that depends on next/headers"). 2026-08-26에 RTL 하드코딩을 고치며 실제로 그렇게
 * 빌드를 깨뜨렸다 — tsc는 이 경계를 안 보므로 못 잡았고 `next build`에서만 드러났다.
 *
 * 순수 함수라 서버 전용일 이유가 없으므로 이 작은 파일로 뽑는다(`report-region.ts`와
 * 같은 이유). `lib/locale.ts`의 `isRtlLocale`은 이 함수를 다시 부른다.
 */
export function isRtlLocale(locale: Locale) {
  return locale === "ar";
}
