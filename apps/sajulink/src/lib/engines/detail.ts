import { STEM_ELEMENT } from "@naminglink/core/saju/elements";
import { tenGod, type TenGod } from "@naminglink/core/saju/ten-gods";

import {
  BRANCH_RELATION_SCORE,
  branchOf,
  branchRelation,
  type Branch,
  type BranchRelation,
} from "./branches";
import type { Prepared } from "./prepare";
import { dayMasterBond, mutualRelation, type DayMasterBond } from "./relations";
import { resolveYongsin, supplyScore } from "./yongsin";

/**
 * 유료 리포트에만 싣는 심화 자료.
 *
 * **점수에는 관여하지 않는다.** 총점과 항목 점수는 `saju.ts`·`zodiac.ts`가 정하고 이 모듈은
 * 거기에 손대지 않는다. 규칙을 두 곳에서 만들면 같은 입력에 다른 답이 나오고, 유료 상품에서
 * 재조회 때 숫자가 달라지면 환불 사유가 된다.
 *
 * 여기 있는 것은 두 갈래다.
 *
 *   ① **엔진이 이미 계산해 놓고 버리던 값** — 방향별 보완 점수, 일간 짝의 이름.
 *      점수를 내는 과정에서 나왔는데 평균만 남기고 사라지던 것들이다.
 *   ② **규칙은 있는데 적용하지 않던 자리** — 일지 말고 나머지 세 기둥의 지지 관계,
 *      일간 말고 나머지 세 기둥 천간의 십신.
 *
 * ②를 점수에 넣지 않는 이유: 넣으면 총점이 달라져 지금까지 나간 결과 링크와 어긋난다.
 * 읽을거리로만 쓴다 — **무엇이 점수에 들어갔는지는 항목별 점수표가 그대로 보여 준다.**
 */

export type PillarKey = "year" | "month" | "day" | "hour";

/** 두 사람의 같은 자리 기둥끼리 맺는 지지 관계. */
export type PillarBranchRelation = {
  pillar: PillarKey;
  a: Branch;
  b: Branch;
  relation: BranchRelation;
  /** 관계표의 점수. **총점에 반영되지 않는다** — 세기를 비교해 보라고 함께 싣는다. */
  score: number;
};

/** 한 사람의 일간이 볼 때 상대의 기둥 천간이 무슨 십신인가. */
export type StemGod = { pillar: PillarKey; stem: string; god: TenGod };

export type MatchDetail = {
  /**
   * 방향별 보완 점수.
   *
   * 총점에 들어가는 것은 이 둘의 평균이다. 평균만 보면 **이 서비스 설계의 핵심인 비대칭이
   * 사라진다** — A에게 필요한 것과 B에게 필요한 것이 다르므로 한쪽만 크게 채워 주는 관계가
   * 있을 수 있고, 그것이 평균으로 뭉개진다.
   *
   * `toA`는 **A가 받는 정도**다(상대 B가 A의 용신을 얼마나 채우는가).
   */
  supply: { toA: number; toB: number };
  /** 두 일간이 맺는 짝 여섯 종 중 하나. 점수는 항목표에 이미 있으므로 종류만 싣는다. */
  bond: DayMasterBond;
  /**
   * 네 기둥의 지지 관계. 두 사람 모두 그 기둥이 있을 때만 넣는다 — 출생 시각을 모르면
   * 시주가 없다.
   */
  pillarBranches: PillarBranchRelation[];
  /** 상대의 네 기둥 천간이 내 일간에게 무엇인가. 방향이 있으므로 양쪽을 따로 낸다. */
  stemGods: { aSeesB: StemGod[]; bSeesA: StemGod[] };
};

const PILLAR_KEYS: PillarKey[] = ["year", "month", "day", "hour"];

/** 기둥의 한자 두 글자. 시주는 없거나 한자가 비어 있을 수 있다. */
function pillarHanja(prepared: Prepared, pillar: PillarKey): string | null {
  const value = prepared.saju.pillars[pillar];
  if (!value || !value.hanja) return null;
  return value.hanja;
}

/** 천간은 첫 글자, 지지는 둘째 글자다(`branchOf`와 같은 규칙). */
function stemOf(hanja: string): string {
  return Array.from(hanja)[0];
}

export function matchDetail(a: Prepared, b: Prepared): MatchDetail {
  // ① 방향별 보완. `saju.ts`가 평균을 내기 전에 쓰는 것과 **같은 함수**를 부른다 —
  //    여기서 따로 계산하면 리포트의 숫자와 점수의 근거가 갈린다.
  const yongsinA = resolveYongsin(a.dayMaster.element, a.elements.strength);
  const yongsinB = resolveYongsin(b.dayMaster.element, b.elements.strength);

  const relation = mutualRelation(a, b);

  const pillarBranches: PillarBranchRelation[] = [];
  for (const pillar of PILLAR_KEYS) {
    const hanjaA = pillarHanja(a, pillar);
    const hanjaB = pillarHanja(b, pillar);
    if (!hanjaA || !hanjaB) continue;
    const branchA = branchOf(hanjaA);
    const branchB = branchOf(hanjaB);
    const kind = branchRelation(branchA, branchB);
    pillarBranches.push({
      pillar,
      a: branchA,
      b: branchB,
      relation: kind,
      score: BRANCH_RELATION_SCORE[kind],
    });
  }

  return {
    supply: {
      toA: Math.round(supplyScore(yongsinA, b.elements.strength)),
      toB: Math.round(supplyScore(yongsinB, a.elements.strength)),
    },
    bond: dayMasterBond(relation).bond,
    pillarBranches,
    stemGods: {
      aSeesB: stemGodsOf(a, b),
      bSeesA: stemGodsOf(b, a),
    },
  };
}

/**
 * `self`의 일간이 볼 때 `other`의 각 기둥 천간이 무슨 십신인가.
 *
 * 지금까지는 일간 대 일간만 봤다. 나머지 세 기둥도 같은 규칙(`tenGod`)으로 정해지는데,
 * 일주만 보면 "이 사람이 내게 무엇인가"는 알아도 **그 사람의 어느 자리가 내게 무엇인가**는
 * 알 수 없다. 계산 규칙을 새로 만들지 않고 이미 있는 함수를 자리마다 부를 뿐이다.
 */
function stemGodsOf(self: Prepared, other: Prepared): StemGod[] {
  const result: StemGod[] = [];
  for (const pillar of PILLAR_KEYS) {
    const hanja = pillarHanja(other, pillar);
    if (!hanja) continue;
    const stem = stemOf(hanja);
    const element = STEM_ELEMENT[stem];
    // 표에 없는 글자는 건너뛴다. 만세력이 준 값이라 실제로는 없지만, 여기서 터지면
    // 리포트 전체가 안 나온다.
    if (!element) continue;
    result.push({
      pillar,
      stem,
      god: tenGod(
        { stem: self.dayMaster.character, element: self.dayMaster.element },
        { stem, element },
      ),
    });
  }
  return result;
}
