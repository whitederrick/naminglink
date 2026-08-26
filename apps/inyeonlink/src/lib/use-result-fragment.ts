"use client";

import { useEffect, useState } from "react";

import { trackAnalytics, type InyeonServiceType } from "@/lib/analytics-client";
import type { Dictionary, Locale } from "@/lib/i18n";

/**
 * 주소의 프래그먼트(#)가 확정되기를 기다렸다가 돌려준다. null이면 아직 못 읽은 것이다.
 *
 * 입력값은 프래그먼트에만 있고 프래그먼트는 서버로 전송되지 않으므로, 결과 화면은 이 값을
 * 읽어야 계산을 요청할 수 있다. 그런데 **마운트 시점에 한 번 읽는 것으로는 부족하다.**
 *
 * 결과 화면에서 "다시 보기"로 돌아가 다시 조회하면, 그 경로가 이미 Next의 라우터 캐시에 있어
 * 서버를 다녀오지 않는다. 전환이 거의 한 틱에 끝나면서 **주소의 해시가 반영되기 전에 컴포넌트가
 * 마운트되어** 빈 문자열을 읽고, 화면은 "결과 정보를 읽을 수 없습니다"를 띄운다. 첫 조회에서는
 * RSC를 받아 오느라 시간이 걸려 그 사이 주소가 갱신되므로 멀쩡히 동작한다 — 두 번째부터만
 * 깨지는 종류라 찾기 어려웠다.
 *
 * 그래서 비어 있으면 곧바로 실패로 단정하지 않고 몇 차례 다시 본다. 정말로 해시 없이 들어온
 * 경우(주소를 직접 친 경우)에만 마지막에 빈 값을 확정해 오류를 보여 준다.
 *
 * 궁합과 인연의 결이 같은 것을 쓴다. 한쪽만 고치면 같은 증상이 다른 화면에서 되살아난다.
 */
export function useResultFragment() {
  const [fragment, setFragment] = useState<string | null>(null);

  useEffect(() => {
    let stopped = false;

    // commitEmpty=false면 빈 해시는 아직 "결론"으로 삼지 않는다.
    const sync = (commitEmpty: boolean) => {
      // 프래그먼트가 둘 붙어 있는 주소가 실제로 만들어졌었다(`#첫번째조회#두번째조회`).
      // 그런 주소가 이미 공유됐을 수 있으므로 마지막 조각을 쓴다 — 나중에 붙은 쪽이 그 화면이
      // 보여 주려던 결과다. 프래그먼트가 하나면 split 결과도 하나라 동작이 달라지지 않는다.
      const current = window.location.hash.slice(1).split("#").pop() ?? "";
      if (!current && !commitEmpty) return false;
      setFragment((previous) => (previous === current ? previous : current));
      return true;
    };

    const timers: number[] = [];
    if (!sync(false)) {
      // 주소가 갱신되기를 기다린다. 마지막 한 번은 빈 값이라도 확정해 오류를 띄운다 —
      // 그렇지 않으면 해시 없이 들어온 사람이 "계산 중…"에 영원히 갇힌다.
      for (const delay of [0, 30, 100, 300]) {
        timers.push(
          window.setTimeout(() => {
            if (!stopped) sync(false);
          }, delay),
        );
      }
      timers.push(
        window.setTimeout(() => {
          if (!stopped) sync(true);
        }, 700),
      );
    }

    // 리렌더 없이 주소만 바뀌는 경로도 있다. 이벤트가 왔다는 것은 주소가 확정됐다는 뜻이라
    // 빈 값도 그대로 받는다. pushState는 hashchange를 발생시키지 않으므로 popstate도 듣고,
    // 뒤로 가기로 되살아난 페이지(bfcache)까지 덮도록 pageshow도 듣는다.
    const onNavigate = () => sync(true);
    window.addEventListener("hashchange", onNavigate);
    window.addEventListener("popstate", onNavigate);
    window.addEventListener("pageshow", onNavigate);

    return () => {
      stopped = true;
      timers.forEach((timer) => window.clearTimeout(timer));
      window.removeEventListener("hashchange", onNavigate);
      window.removeEventListener("popstate", onNavigate);
      window.removeEventListener("pageshow", onNavigate);
    };
  }, []);

  return fragment;
}

/**
 * 프래그먼트를 원래 문자열로 되돌린다. 손댄 주소로 들어오면 null.
 *
 * 프래그먼트에는 base64가 들어가지만, 사용자가 주소를 손대 잘못된 퍼센트 인코딩이 섞이면
 * `decodeURIComponent`가 던진다. 그것도 "읽을 수 없는 결과"로 같이 다룬다.
 */
export function decodeFragment(fragment: string) {
  try {
    return fragment ? decodeURIComponent(fragment) : null;
  } catch {
    return null;
  }
}

/**
 * 토스 결제에서 돌아온 경우 입력값 프래그먼트를 되살린다.
 *
 * 국내 결제는 우리 서버 라우트로 리디렉트되어 승인되므로, 돌아온 주소에는 입력값 프래그먼트가
 * 없다. 결제 직전에 브라우저(sessionStorage)에 맡겨 둔 값을 주소에 되돌려 놓아야 결과를 다시
 * 그리고 PDF를 받을 수 있다. **서버에 저장한 것이 아니다** — 탭을 닫으면 함께 사라진다.
 *
 * **`AffinityResultView.tsx`·`MatchResultView.tsx`가 복붙해 두고 있었다** — 한쪽에만
 * 넣었다가 실제로 사고가 났다(2026-08-07, 국내에서 인연의 결 PDF를 결제하면 오류 화면으로
 * 돌아와 파일을 받을 방법이 없었다). 세 번째 결과 화면이 생겨도 이 훅만 부르면 같은 사고가
 * 반복되지 않는다(2026-08-26 코드 리뷰에서 복붙 상태 자체를 지적받아 훅으로 뽑았다).
 */
export function useRestorePendingPaymentFragment() {
  useEffect(() => {
    if (window.location.hash) return;
    const params = new URLSearchParams(window.location.search);
    if (!params.get("payment")) return;
    try {
      const raw = window.sessionStorage.getItem("inyeonlink.pendingPayment");
      if (!raw) return;
      const saved = JSON.parse(raw) as { fragment?: string };
      if (saved.fragment) {
        window.location.replace(`${window.location.href}#${saved.fragment}`);
      }
    } catch {
      // 복원에 실패하면 이어지는 흐름이 "결과를 읽을 수 없습니다"로 안내한다.
    }
  }, []);
}

export type ResolveState<TOutcome, TInput> =
  | { status: "loading" }
  | { status: "error"; message: string; fragment: string }
  | { status: "ready"; outcome: TOutcome; input: TInput; fragment: string };

/**
 * 프래그먼트를 읽어 계산 API에 POST하고, 결과·오류·분석 이벤트를 함께 관리한다.
 *
 * **`AffinityResultView.tsx`·`MatchResultView.tsx`가 이 로직 전체를 복붙해 두고 있었다**
 * (2026-08-26 코드 리뷰에서 발견) — 다른 것은 디코더·API 경로·분석 이벤트 이름뿐이라
 * 파라미터로 받는다.
 */
export function useResolveResult<TInput, TOutcome>({
  fragment,
  decode,
  fetchUrl,
  serviceType,
  locale,
  dictionary,
  missingInputMessage,
}: {
  /** `useResultFragment()`가 돌려주는 값을 그대로 넘긴다. */
  fragment: string | null;
  /** 프래그먼트를 해석한 원문 문자열을 입력값으로 바꾼다(`decodeAffinityInput` 등). */
  decode: (decoded: string) => TInput | null;
  fetchUrl: string;
  serviceType: InyeonServiceType;
  locale: Locale;
  dictionary: Dictionary;
  missingInputMessage: string;
}): ResolveState<TOutcome, TInput> {
  const [state, setState] = useState<ResolveState<TOutcome, TInput>>({ status: "loading" });

  useEffect(() => {
    if (fragment === null) return;
    // 새 바인딩으로 좁힌다 — 중첩 함수 선언(resolve) 안에서는 매개변수의 null 좁힘이
    // 유지되지 않는다(TS의 알려진 한계).
    const resolvedFragment = fragment;
    let cancelled = false;

    // 프래그먼트 해석 실패도 예외로 던져 한 갈래로 모은다. effect 안에서 setState를 동기로
    // 호출하면 렌더가 연쇄로 도는데, .catch는 마이크로태스크라 그 문제가 없다.
    async function resolve() {
      const decoded = decodeFragment(resolvedFragment);
      const input = decoded ? decode(decoded) : null;
      if (!input) throw new Error("MISSING_INPUT");

      const response = await fetch(fetchUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "UNKNOWN");
      }
      return { outcome: (await response.json()) as TOutcome, input };
    }

    resolve()
      .then(({ outcome, input }) => {
        if (cancelled) return;
        setState({ status: "ready", outcome, input, fragment: resolvedFragment });
        trackAnalytics({ eventType: "ANALYSIS_COMPLETED", serviceType, locale });
      })
      .catch((cause: Error) => {
        if (cancelled) return;
        setState({
          status: "error",
          message: errorMessage(cause.message),
          fragment: resolvedFragment,
        });
        // 실패도 남긴다 — 완료만 세면 완료율이 항상 100%로 보인다.
        trackAnalytics({ eventType: "ANALYSIS_FAILED", serviceType, locale });
      });

    function errorMessage(code: string) {
      if (code === "MISSING_INPUT") return missingInputMessage;
      if (code === "UNCALCULABLE_DATE" || code === "INVALID_INPUT") {
        return dictionary.form.errorInvalidDate;
      }
      return dictionary.form.errorGeneric;
    }

    return () => {
      cancelled = true;
    };
    // decode는 호출부가 모듈 최상위 함수(decodeAffinityInput 등)를 그대로 넘긴다는 전제라
    // 참조가 매 렌더 안정적이다 — 의존성에 넣어도 불필요한 재실행이 없다.
  }, [fragment, decode, dictionary, locale, missingInputMessage, fetchUrl, serviceType]);

  return state;
}
