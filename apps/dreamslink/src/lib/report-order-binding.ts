import { createHash } from "node:crypto";

/**
 * 주문 하나는 **한 사람(또는 한 쌍)**의 리포트만 만든다.
 *
 * 재발급 여유(`REISSUE_LIMIT`)는 "파일을 잃어버린 같은 사람"을 위한 것이지 다른 사람 것을 더
 * 받으라는 뜻이 아니다. 그런데 입력은 주문에 남지 않고 매 요청마다 클라이언트가 보내므로,
 * 한 번 결제한 뒤 생년월일만 바꿔 다시 부르면 서로 다른 사람 다섯 쌍의 유료 리포트가 나왔다
 * (2026-08-02 발견).
 *
 * **입력 자체를 저장하지는 않는다.** 처음 발급할 때 지문만 주문에 적고, 그다음부터는 지문이
 * 같은지만 본다. 지문에서 생년월일을 되돌릴 수 없으므로 미저장 원칙과 부딪히지 않는다
 * (naminglink의 일괄 공개 주문이 결과 한 벌에 묶이는 것과 같은 방식이다).
 */
export function inputFingerprint(input: unknown) {
  return createHash("sha256").update(JSON.stringify(stable(input))).digest("hex");
}

/**
 * 키 순서가 흔들려도 같은 값이 나오도록 정렬해 직렬화한다.
 *
 * 언어(locale)는 애초에 넘어오지 않는다 — 같은 사람의 리포트를 다른 언어로 다시 받는 것은
 * 막을 이유가 없다.
 */
function stable(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([left], [right]) => left.localeCompare(right))
        .map(([key, entry]) => [key, stable(entry)]),
    );
  }
  return value;
}
