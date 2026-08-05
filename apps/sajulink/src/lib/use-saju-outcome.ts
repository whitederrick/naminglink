"use client";

import { useEffect, useState } from "react";

import { trackAnalytics, type SajuServiceType } from "@/lib/analytics-client";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { PublicSajuOutcome } from "@/lib/public-outcome";
import { decodeSajuInput, type SajuInput } from "@/lib/saju-input";
import { useResultFragment } from "@/lib/use-result-fragment";

/**
 * 결과 화면 두 곳이 함께 쓰는 값 가져오기.
 *
 * ## 왜 갈라 두는가
 *
 * 사주 풀이(`/reading/result`)와 오늘의 운세(`/today/result`)는 **보여 주는 것이 다르지만
 * 가져오는 것은 같다.** 같은 생년월일로 같은 계산을 부르고, 프래그먼트를 읽는 방식도, 실패를
 * 다루는 방식도, 집계를 남기는 자리도 같다.
 *
 * 그 부분을 화면마다 복사해 두면 한쪽만 고치는 일이 생긴다 — 실제로 복제 앱에서 결제 복귀
 * 처리가 한 화면에만 있어 다른 화면은 결제하고도 파일을 못 받았다([[paid-content-in-free-response]]).
 * 그래서 **다른 것(무엇을 그리는가)만 화면에 두고 같은 것은 여기 모은다.**
 *
 * ## 입력은 프래그먼트에만 있다
 *
 * 서버 컴포넌트는 프래그먼트를 볼 수 없다(브라우저가 서버로 보내지 않는다). 그래서 여기서
 * 읽어 POST로 계산을 요청한다 — 생년월일이 접속 로그에 남지 않게 하려는 것이고, 이 서비스가
 * 입력을 저장하지 않는다는 원칙이 결과 화면에서도 유지되는 이유다.
 */

export type SajuOutcomeState =
  | { status: "loading" }
  | { status: "ready"; outcome: PublicSajuOutcome; input: SajuInput; fragment: string }
  | { status: "error"; message: string; fragment: string };

export function useSajuOutcome({
  dictionary,
  locale,
  /**
   * 어느 메뉴에서 온 화면인가. **집계가 이 값으로 갈린다.**
   *
   * 예전에는 두 메뉴가 결과 화면 하나를 함께 써서 둘 다 `SAJU_READING`으로 남았다 — 열거에
   * `SAJU_TODAY`가 있었지만 아무도 보내지 않아, 콘솔에서 두 메뉴를 가를 수 없었다.
   */
  serviceType,
}: {
  dictionary: Dictionary;
  locale: Locale;
  serviceType: SajuServiceType;
}): SajuOutcomeState {
  const resolvedFragment = useResultFragment();
  const [state, setState] = useState<SajuOutcomeState>({ status: "loading" });

  useEffect(() => {
    if (resolvedFragment === null) return;
    const fragment = resolvedFragment;
    let cancelled = false;

    // 프래그먼트 해석 실패도 예외로 던져 한 갈래로 모은다. effect 안에서 setState를 동기로
    // 호출하면 렌더가 연쇄로 도는데, .catch는 마이크로태스크라 그 문제가 없다.
    async function resolve() {
      const input = decodeSajuInput(fragment);
      if (!input) throw new Error("MISSING_INPUT");

      const response = await fetch("/api/saju", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "UNKNOWN");
      }
      return { outcome: (await response.json()) as PublicSajuOutcome, input };
    }

    resolve()
      .then(({ outcome, input }) => {
        if (cancelled) return;
        setState({ status: "ready", outcome, input, fragment });
        // 분석 완료. 입력값은 싣지 않는다 — 메뉴 구분과 경로뿐이다.
        trackAnalytics({ eventType: "ANALYSIS_COMPLETED", serviceType, locale });
      })
      .catch((cause: Error) => {
        if (cancelled) return;
        setState({ status: "error", message: errorMessage(cause.message), fragment });
        // **실패도 남긴다.** 완료만 세면 완료율이 항상 100%로 보이고, 입력 형식 문제나 엔진
        // 오류가 늘어도 화면에서는 아무 일도 일어나지 않는 것처럼 보인다.
        trackAnalytics({ eventType: "ANALYSIS_FAILED", serviceType, locale });
      });

    function errorMessage(code: string) {
      if (code === "MISSING_INPUT") return dictionary.result.missingInput;
      if (code === "UNCALCULABLE_DATE" || code === "INVALID_INPUT") {
        return dictionary.form.errorInvalidDate;
      }
      return dictionary.form.errorGeneric;
    }

    return () => {
      cancelled = true;
    };
  }, [resolvedFragment, dictionary, locale, serviceType]);

  return state;
}
