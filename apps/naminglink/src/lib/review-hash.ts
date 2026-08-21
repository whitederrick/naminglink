import { createHash } from "node:crypto";

/**
 * **검수 해시** — 관리자 게시 관문과 검수 도구가 **같은 방법으로** 값을 센다.
 *
 * 두 자리가 각자 세면 언젠가 갈라지고, 갈라지면 관문이 「승인된 내용인데 다르다」고 하거나
 * 반대로 다른 내용을 통과시킨다. 그래서 계산은 여기 한 곳에만 둔다.
 *
 * `scripts/locale-manifest.ts` 가 이 함수를 그대로 쓴다.
 */

/** 문자열 잎 하나. `path` 는 값의 자리 이름이다. */
export type ReviewLeaf = { readonly path: string; readonly value: string };

/**
 * 값을 재귀로 훑어 **문자열 잎만** 모은다. 숫자·불리언은 번역 대상이 아니라 세지 않고,
 * 배열은 자리를 `[n]` 으로 적어 순서가 바뀌면 경로가 달라지게 한다.
 */
export function reviewLeaves(value: unknown, prefix = "", out: ReviewLeaf[] = []): ReviewLeaf[] {
  if (typeof value === "string") {
    out.push({ path: prefix, value });
    return out;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => reviewLeaves(item, `${prefix}[${index}]`, out));
    return out;
  }
  if (value && typeof value === "object") {
    for (const key of Object.keys(value as Record<string, unknown>).sort()) {
      reviewLeaves((value as Record<string, unknown>)[key], prefix ? `${prefix}.${key}` : key, out);
    }
    return out;
  }
  return out;
}

/**
 * 값 하나의 해시. **NFC 로 맞춘 뒤 센다** — 같은 글자를 다르게 적은 유니코드 표현(한글 자모
 * 분리, 결합 악센트)이 다른 해시를 내면 드리프트가 헛울린다.
 */
export function hashReviewValue(value: string): string {
  return createHash("sha256").update(value.normalize("NFC"), "utf8").digest("hex").slice(0, 16);
}

/** 잎 여럿을 한 값으로. 경로까지 넣어 **순서가 아니라 이름**으로 고정한다. */
export function hashReviewLeaves(leaves: readonly ReviewLeaf[]): string {
  const shape = [...leaves]
    .sort((a, b) => (a.path < b.path ? -1 : a.path > b.path ? 1 : 0))
    .map((leaf) => `${leaf.path} ${leaf.value.normalize("NFC")}`)
    .join("");
  return createHash("sha256").update(shape, "utf8").digest("hex").slice(0, 16);
}

/** 문서 하나의 검수 해시. 관리자 게시 관문이 들어오는 내용에 이것을 건다. */
export function hashReviewDocument(document: unknown): string {
  return hashReviewLeaves(reviewLeaves(document));
}
