"use client";

import { useEffect, useState } from "react";

import { restoreFragmentAfterPayment } from "@/lib/pending-payment";

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
 * 사주 풀이와 오늘의 운세가 같은 것을 쓴다. 한쪽만 고치면 같은 증상이 다른 화면에서
 * 되살아난다.
 */
export function useResultFragment() {
  const [fragment, setFragment] = useState<string | null>(null);

  useEffect(() => {
    let stopped = false;

    // 결제에서 돌아왔다면 주소에 프래그먼트가 없다. 아래에서 읽기 전에 되돌려 놓는다.
    // **화면마다 두지 않고 여기 둔다** — 프래그먼트를 읽는 곳이 여기 하나라, 결과 화면이
    // 늘어도 결제 복귀가 한쪽에만 있는 일이 생기지 않는다(인연링크에서 실제로 났던 결함이다).
    restoreFragmentAfterPayment();

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
