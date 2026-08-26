"use client";

import { useEffect, useState } from "react";

import { submitAdGateEnabled } from "@/lib/ads";

/**
 * 광고 관문이 있는 제출 폼의 공통 배선.
 *
 * `AffinityForm.tsx`·`CompatibilityForm.tsx`가 각자 다음 세 가지를 복붙해 두고 있었다
 * (2026-08-26 코드 리뷰에서 발견 — 복붙 상태로는 한쪽만 고치는 순간 어긋난다):
 *
 *   1. bfcache 복원 시 제출 잠금 풀기 — 결과 화면에서 뒤로 가기로 돌아오면 브라우저가
 *      페이지를 통째로 되살릴 때가 있다(bfcache). 그러면 자바스크립트 상태까지 그대로
 *      복원되어 제출 버튼이 "계산 중…"인 채 잠겨 있고, 다시 눌러도 아무 일도 일어나지
 *      않는다. `pageshow`는 그 복원 시점에도 발생하므로 여기서 잠금을 푼다.
 *   2. 이전 조회의 프래그먼트 지우기 — 결과 화면에서 "다시 계산하기"로 돌아오면 남의
 *      생년월일이 주소창에 남아 있다. `replaceState`라 히스토리에 항목이 늘지 않는다.
 *   3. 광고 관문 통과 후 이동 — 관문이 켜져 있으면 광고를 띄우고(`pendingTarget`을 채워
 *      돌려준다), 꺼져 있으면 분석 시작 기록을 기다린 뒤 바로 이동한다.
 *
 * `goto`의 `started`는 `trackAnalytics(...)`가 돌려주는 진행 중인 약속이다 — 이동 직전에
 * 기다려야 시작 기록이 유실되지 않는다(문서를 갈아 끼우면 진행 중인 요청이 끊긴다).
 */
export function useAdGatedSubmit(setSubmitting: (value: boolean) => void) {
  useEffect(() => {
    const unlock = () => setSubmitting(false);
    window.addEventListener("pageshow", unlock);
    return () => window.removeEventListener("pageshow", unlock);
  }, [setSubmitting]);

  useEffect(() => {
    if (!window.location.hash) return;
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}`,
    );
  }, []);

  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  async function goto(target: string, started: Promise<unknown>) {
    if (submitAdGateEnabled) {
      // 광고 화면이 떠 있는 동안 전송이 끝난다. 여기서 기다리면 광고가 그만큼 늦게 뜬다.
      setPendingTarget(target);
      return;
    }
    await started;
    window.location.assign(target);
  }

  return { pendingTarget, goto };
}
