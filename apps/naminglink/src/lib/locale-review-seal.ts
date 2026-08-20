/**
 * **검수 봉인** — 관리자 약관 게시 관문이 런타임에 보는 값.
 *
 * 구현 명세 §8. 판정의 **진실은 `docs/locale-review/manifest.json`** 이고 이 파일은 그것의
 * 복사본이다. 왜 복사가 필요한가 — 배포된 함수는 저장소의 `docs/` 를 읽을 수 없다. 그렇다고
 * manifest 를 `src/` 로 옮기면 검수 기록이 제품 코드에 섞인다.
 *
 * **손으로 고치지 말 것.** `npx tsx scripts/seal-locale-review.ts` 가 manifest 에서 만든다.
 * 둘이 어긋나면 `scripts/verify-legal-publish-gate.ts` 가 실패시킨다 — 복사본이 원본과 갈라진
 * 채로 관문이 도는 것이 이 구조의 유일한 위험이라, 그 자리에 검사기를 세워 둔다.
 *
 * 키는 `<locale>:<kind>` 이고 값은 **승인된 문서의 검수 해시**다. 여기 없는 (로케일, 문서)는
 * 아직 검수되지 않았다는 뜻이므로 게시를 막지 않는다.
 */
export const LEGAL_REVIEW_SEAL: Readonly<Record<string, string>> = {
  // 아직 사람이 검수를 마친 약관 로케일이 없다(단계 6 전). 비어 있는 것이 현재 상태다.
};

/** 그 (로케일, 문서)가 검수돼 봉인됐는가. */
export function sealedLegalHash(locale: string, kind: string): string | null {
  return LEGAL_REVIEW_SEAL[`${locale}:${kind}`] ?? null;
}
