import { z } from "zod";

import {
  decodePayload,
  encodePayload,
  personSchema,
  toPerson,
} from "@/lib/match-input";

// 궁합과 같은 원칙을 그대로 따른다 — 생년월일은 쿼리스트링에 싣지 않고(접속 로그에 남는다)
// POST 본문으로 보내며, 공유·새로고침용 링크는 URL 프래그먼트(#)에 담는다. 사람이 하나로
// 줄었을 뿐이라 지킬 것은 같다.
//
// 사람 스키마는 궁합의 것을 **그대로 쓴다.** 같은 만세력 계산에 들어가는 값이므로 규칙이
// 두 벌이 되면 한쪽에서만 통과하는 입력이 생긴다.

export const affinityInputSchema = z.object({
  me: personSchema,
  /**
   * 찾는 상대의 성별.
   *
   * 배우자성(남=정재, 여=정관)은 **양쪽 성별이 다 있어야** 판정된다. 밝히지 않으면 그 항목을
   * 빼고 남은 항목으로만 순위를 매긴다 — 궁합 화면이 성별 미입력을 다루는 방식과 같다.
   */
  seeking: z.enum(["male", "female"]).nullable().default(null),
});

export type AffinityInput = z.infer<typeof affinityInputSchema>;

export { toPerson };

export function encodeAffinityInput(input: AffinityInput) {
  return encodePayload(input);
}

export function decodeAffinityInput(value: string): AffinityInput | null {
  return decodePayload(value, affinityInputSchema);
}
