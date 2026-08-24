// **거래 문구 검수 기록을 읽는다.** 광고 개방 조건 ②·③의 증거다
// (`LOCALE_AD_STRATEGY_2026-08-21.md` §3.1).
//
// 기록이 없거나 모양이 틀리면 **던지지 않고 빈 목록을 준다** — 그러면 부르는 쪽에서
// 「기록이 없다」로 빨간불이 난다. 여기서 던지면 그 크래시가 「검사기 결함」으로 분류되어
// 진짜 결함과 섞인다(CLAUDE.md §1 — 실패는 셋으로 가른다).
//
// 다만 **파일이 있는데 JSON 이 깨진 경우**는 다르다. 그건 조용히 넘기면 안 되므로 던진다.

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

export type TradeCopyReviewRecord = {
  readonly locale: string;
  readonly reviewedOn: string;
  readonly reviewer: string;
  readonly record: string;
  readonly positions: number;
  readonly verdicts: { readonly good: number; readonly doubt: number; readonly fix: number };
  readonly unresolvedCritical: number;
  readonly sourceHash: string;
};

const REL = "docs/locale-review/trade-copy-review.json";

/** 저장소 뿌리 기준 경로. 검사기가 화면에 찍어 사람이 찾아갈 수 있게 한다. */
export function tradeCopyReviewPath(): string {
  return REL;
}

function absolutePath(): string {
  // scripts/ → apps/naminglink/ → apps/ → 저장소 뿌리
  return path.resolve(__dirname, "..", "..", "..", REL);
}

/**
 * 기록 하나가 광고 개방 조건 ②·③을 채우는가. **채우지 못하는 이유를 전부 돌려준다** —
 * 하나만 돌려주면 고치고 다시 돌렸을 때 다음 것이 나와 왕복이 늘어난다.
 *
 * 판정을 함수로 뺀 이유는 **검사기가 자기 판정기를 대조군으로 시험할 수 있게** 하기
 * 위해서다. 판정이 절 안에 인라인으로 있으면 「이 관문이 막기는 하는가」를 물을 수 없다
 * (CLAUDE.md §13 — 세 판 연속 뚫렸던 자리가 정확히 그것이다).
 */
export function tradeCopyReviewProblems(
  record: TradeCopyReviewRecord,
  expectedPositions: number,
  currentHash: string,
): string[] {
  const problems: string[] = [];

  if (record.positions !== expectedPositions) {
    problems.push(
      `검수 기록이 ${record.positions}자리 — 거래 문구는 ${expectedPositions}자리다. 일부만 읽은 것은 통과가 아니다.`,
    );
  }

  const judged = record.verdicts.good + record.verdicts.doubt + record.verdicts.fix;
  if (judged !== record.positions) {
    problems.push(`판정 수 ${judged}건이 자리 수 ${record.positions}과 다르다 — 안 읽은 자리가 있다.`);
  }
  if (judged === 0) {
    problems.push("판정이 하나도 없다 — 기록만 있고 읽지는 않았다.");
  }

  if (record.unresolvedCritical !== 0) {
    problems.push(`미해결 중대 결함 ${record.unresolvedCritical}건이 남아 있다(조건 ③).`);
  }

  if (record.sourceHash !== currentHash) {
    problems.push(
      "검수 기록이 낡았다 — 읽은 뒤로 거래 문구가 바뀌었다.\n" +
        `      기록 ${record.sourceHash.slice(0, 16)}… / 지금 ${currentHash.slice(0, 16)}…\n` +
        "      바뀐 문구를 다시 읽고 sourceHash 를 갱신할 것.",
    );
  }

  return problems;
}

export function loadTradeCopyReview(): TradeCopyReviewRecord[] {
  const file = absolutePath();
  if (!existsSync(file)) return [];

  const parsed = JSON.parse(readFileSync(file, "utf8")) as { reviews?: unknown };
  const rows = Array.isArray(parsed.reviews) ? parsed.reviews : [];

  return rows.filter((row): row is TradeCopyReviewRecord => {
    if (typeof row !== "object" || row === null) return false;
    const r = row as Record<string, unknown>;
    const v = r.verdicts as Record<string, unknown> | undefined;
    return (
      typeof r.locale === "string" &&
      typeof r.positions === "number" &&
      typeof r.unresolvedCritical === "number" &&
      typeof r.sourceHash === "string" &&
      typeof v === "object" &&
      v !== null &&
      typeof v.good === "number" &&
      typeof v.doubt === "number" &&
      typeof v.fix === "number"
    );
  });
}
