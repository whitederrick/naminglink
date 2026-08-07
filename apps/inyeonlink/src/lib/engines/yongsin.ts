import {

// 📄 **이 규칙을 고치면 `app/guide/yongsin`도 함께 볼 것.** 그 문서가 이용자에게
// 용신 판정 규칙을 설명한다. 규칙만 고치면 문서가 조용히 거짓이 된다 — 숫자는
// `verify-guide-numbers`가 세지만 서술은 사람이 봐야 한다.
  CONTROLLED_BY,
  CONTROLS,
  FIVE_ELEMENTS,
  GENERATED_BY,
  GENERATES,
  type FiveElement,
} from "@naminglink/core/saju/elements";

// 억부용신(抑扶用神) — "이 사람에게 지금 필요한 기운이 무엇인가".
//
// 왜 넣는가: 예전 오행 항목은 **두 사람을 합쳐 다섯 기운이 고른가**만 봤다. 그래서 둘 다 木이
// 넘치면 그냥 감점될 뿐, 궁합의 진짜 질문인 *"상대가 내게 필요한 것을 갖고 있는가"* 가 빠져
// 있었다. 균형도는 대칭적이지만 보완은 본래 비대칭이다 — A에게 필요한 것과 B에게 필요한 것이
// 다르기 때문이다.
//
// 용신을 정하는 방법은 여럿이지만(억부·조후·병약·통관) 규칙으로 옮길 수 있고 가장 널리 쓰이는
// 것이 억부다. 일간이 강하면 덜어 내는 기운이, 약하면 보태는 기운이 필요하다고 본다.
//
// **이것은 간이 판정이다.** 실제 명리는 격국과 조후(계절의 한난조습)까지 보고 용신을 정하며,
// 술사에 따라 결론이 갈리기도 한다. 여기서는 세력 수치로 잴 수 있는 억부만 쓰고, 화면에도
// 단정이 아니라 "지금 얇은 자리"로 표현한다.

export type BodyStrength = "STRONG" | "BALANCED" | "WEAK";

export type Yongsin = {
  /** 신강·중화·신약 */
  strength: BodyStrength;
  /** 일간 편(인성+비겁)이 전체 세력에서 차지하는 비율 0~1 */
  allyRatio: number;
  /** 이 사람에게 필요한 오행. 신강이면 덜어 내는 셋, 신약이면 보태는 둘. */
  favorable: FiveElement[];
};

/**
 * 아군 비율의 경계.
 *
 * 인성+비겁은 다섯 중 둘이므로 기운이 완전히 고르면 40%가 된다. 그래서 40%를 중심으로 잡고
 * 위아래로 폭을 둔다 — 45%를 넘으면 신강, 35%에 못 미치면 신약, 사이는 중화로 본다.
 * 중화는 억부로 가릴 수 없다는 뜻이므로 **덜 확신하는 판정**이고, 이때는 단순히 얇은 기운을
 * 필요한 것으로 본다.
 */
const STRONG_THRESHOLD = 0.45;
const WEAK_THRESHOLD = 0.35;

export function resolveYongsin(
  dayMasterElement: FiveElement,
  strength: Record<FiveElement, number>,
): Yongsin {
  const total = FIVE_ELEMENTS.reduce((sum, element) => sum + strength[element], 0);

  // 인성(나를 생하는 것) + 비겁(나와 같은 것)이 일간의 편이다.
  const resource = GENERATED_BY[dayMasterElement];
  const allyRatio =
    total === 0 ? 0.4 : (strength[dayMasterElement] + strength[resource]) / total;

  if (allyRatio >= STRONG_THRESHOLD) {
    // 넘치므로 덜어 낸다 — 식상(내가 생하는 것)·재성(내가 극하는 것)·관성(나를 극하는 것).
    return {
      strength: "STRONG",
      allyRatio,
      favorable: [
        GENERATES[dayMasterElement],
        CONTROLS[dayMasterElement],
        CONTROLLED_BY[dayMasterElement],
      ],
    };
  }

  if (allyRatio < WEAK_THRESHOLD) {
    // 모자라므로 보탠다 — 인성·비겁.
    return {
      strength: "WEAK",
      allyRatio,
      favorable: [resource, dayMasterElement],
    };
  }

  // 중화. 억부로는 가릴 수 없으므로 가장 얇은 두 기운을 필요한 것으로 본다.
  const ranked = [...FIVE_ELEMENTS].sort((a, b) => strength[a] - strength[b]);
  return { strength: "BALANCED", allyRatio, favorable: [ranked[0], ranked[1]] };
}

/**
 * 상대가 내 용신을 얼마나 채워 주는가. 0~100.
 *
 * 상대 세력에서 내 용신군이 차지하는 비율을 보되, **용신군의 크기로 기대치를 나눈다.** 신강일
 * 때 용신군은 셋(기대 60%)이고 신약일 때는 둘(기대 40%)이라, 비율을 그대로 쓰면 신강인 사람이
 * 늘 높은 점수를 받는다.
 *
 * 폭은 예전 균형도(55~100)를 그대로 둔다. 기대치와 같으면 78 근처가 나온다.
 */
export function supplyScore(yongsin: Yongsin, partnerStrength: Record<FiveElement, number>) {
  const total = FIVE_ELEMENTS.reduce((sum, element) => sum + partnerStrength[element], 0);
  if (total === 0) return 70;

  const supplied = yongsin.favorable.reduce((sum, element) => sum + partnerStrength[element], 0);
  const ratio = supplied / total;
  const expected = yongsin.favorable.length / FIVE_ELEMENTS.length;
  const lift = ratio / expected;

  // lift 0.4에서 바닥(55), 1.6에서 천장(100). 기대치(1.0)는 그 사이 78 근처.
  const normalized = Math.max(0, Math.min(1, (lift - 0.4) / 1.2));
  return 55 + normalized * 45;
}

/** 상대가 채워 주는 정도를 문구 구간으로 나눈다. */
export function supplyLevel(score: number) {
  if (score >= 88) return "AMPLE" as const;
  if (score >= 74) return "ENOUGH" as const;
  if (score >= 62) return "THIN" as const;
  return "SCARCE" as const;
}
