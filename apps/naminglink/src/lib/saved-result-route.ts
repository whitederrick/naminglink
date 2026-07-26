// 저장 결과(naming_logs)를 결과 화면으로 복원하기 위한 서비스별 세션 저장 키·라우트 매핑.
// GLOBAL_TO_KOREAN은 한 serviceType이 두 화면(한국 이름 만들기 / 발음 표기)을 담으므로
// input_factors의 serviceSlug로 구분한다.
export function savedResultTarget(
  serviceType: string,
  serviceSlug: string | null,
  resultId: string,
  locale: string,
): { storageKey: string; href: string } {
  const lang = `lang=${locale}`;

  if (serviceType === "HANJA_MEANING_MATCH") {
    return {
      storageKey: `naminglink:hanja-result:${resultId}`,
      href: `/hanja-meaning/result?${lang}&id=${encodeURIComponent(resultId)}`,
    };
  }

  if (serviceType === "KOREAN_TO_GLOBAL") {
    return {
      storageKey: `naminglink:korean-to-global-result:${resultId}`,
      href: `/korean-to-global/result?${lang}&id=${encodeURIComponent(resultId)}`,
    };
  }

  // GLOBAL_TO_KOREAN
  if (serviceSlug === "global-name-to-hangul") {
    return {
      storageKey: `naminglink:hangul-result:${resultId}`,
      href: `/global-to-korean/result?${lang}&mode=transliteration&id=${encodeURIComponent(resultId)}`,
    };
  }
  return {
    storageKey: `naminglink:korean-name-result:${resultId}`,
    href: `/global-to-korean/result?${lang}&id=${encodeURIComponent(resultId)}`,
  };
}
