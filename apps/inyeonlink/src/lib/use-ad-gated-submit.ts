"use client";

import { useEffect } from "react";

/**
 * 제출 폼의 공통 배선. (이름의 「광고 관문」은 옛 이름이다 — 관문은 2026-10-21 에 결과 화면 진입
 * `ResultEntryGate` 로 옮겼고, 이 훅은 더 이상 광고를 모른다.)
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
 *   3. 이동 — 분석 시작 기록을 기다린 뒤 결과 화면으로 간다.
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

  async function goto(target: string, started: Promise<unknown>) {
    // 문서를 갈아 끼우기 전에 기다린다. 안 기다리면 분석 시작 기록이 그대로 날아간다.
    await started;
    window.location.assign(target);
  }

  return { goto };
}
