"use client";

import { useEffect, useRef, useState } from "react";

import { SelfAdCard } from "@/components/SelfAdCard";
import { adGatesEnabled, adsAllowedForLocale } from "@/lib/ads";
import { showRewardedAd } from "@/lib/gam-rewarded";
import { fillTemplate, type Dictionary } from "@/lib/i18n";
import { useSelfGateNeeded } from "@/lib/offerwall";

/**
 * **결과 화면에 들어올 때 광고 하나를 치른다.** naminglink·dreamslink `ResultEntryGate`와 같은
 * 구조다(드림링크 2026-10-19, 인연링크 2026-10-21에 옮겼다).
 *
 * ## 왜 입력 화면이 아니라 여기인가
 *
 * 관문은 원래 입력 화면(`CompatibilityForm`·`AffinityForm`)에 있었다. 그런데 **입력 화면에서는
 * 「오퍼월이 있는가」를 잴 수 없다** — 판정 근거인 `window.googlefc`는 애드센스 태그가 있는
 * 화면에만 생기고, 입력 화면에는 그 태그가 **일부러 없다**(광고는 발행한 화면에만). 그래서 입력
 * 화면에 관문을 두면 오퍼월이 도는 방문에도 관문이 하나 더 붙어 **한 번의 이용에 광고가 둘**이
 * 된다.
 *
 * 결과 화면에는 태그가 있으므로 여기서는 잴 수 있다. 관문을 여기 두면 세 갈래가 한 자리에서
 * 갈리고, 어느 갈래로 가든 **광고는 정확히 하나**다.
 *
 *     오퍼월이 있다      → 오퍼월이 화면을 덮는다. 우리는 비켜 준다
 *     오퍼월이 없다      → GAM 보상형
 *     GAM 도 없다        → 셀프 광고 + 기다림
 *
 * ## 이 자리에 애드센스 표시 광고를 두지 않는다
 *
 * 닫을 수 없는 전면 오버레이이고(오버레이 게재 금지), 결과를 보는 대가다(콘텐츠 해제의 대가로
 * 표시 광고를 쓸 수 없다). 대가는 오퍼월·GAM 보상형이 맡고, 둘 다 없을 때만 셀프 광고가 그
 * 자리를 채운다. **관문을 없애거나 기다림을 건너뛰지 않는다 — 채울 것만 바꾼다.**
 *
 * ## 결제를 마치고 돌아온 화면에서는 서지 않는다 (드림링크에 없는 점)
 *
 * 리포트를 결제하면 같은 결과 화면으로 `?payment=…`를 달고 돌아온다. 돈을 낸 이용자에게
 * 광고를 또 치르게 할 이유가 없고, 결제 직후에 화면이 덮이면 파일 받기 흐름이 끊긴다.
 *
 * ## 계산이 끝난 뒤에만 부른다
 *
 * 부르는 쪽(`MatchResultView`·`AffinityResultView`)이 결과를 손에 쥔 뒤의 반환에만 그린다.
 * 로딩·오류 화면에는 관문이 없다 — 보여 줄 것이 없는데 광고를 보게 할 수는 없다.
 *
 * ## 달라진 점 (naminglink와 비교)
 *
 * 관문을 세우는 조건이 「GAM 보상형 광고 단위가 있는가」(`submitAdGateEnabled`)에서
 * 「운영 모드인가」(`adGatesEnabled`)로 바뀐다. 보상형 수요가 없어도 셀프 광고가 그 자리를
 * 채우므로 단위 유무로 관문을 끌 이유가 없다 — naminglink와 같은 판단이다.
 * 광고 노출 집계(`trackAdEvent`)는 옮기지 않았다. 이 앱의 집계 이벤트에는 그 종류가 없다.
 */

/**
 * 셀프 광고를 보여 주는 시간. naminglink와 같은 3초다.
 *
 * 이 자리는 셀프 광고에 닿기까지 이미 시간을 쓴다 — 오퍼월이 뜨는지 지켜보고, 안 뜨면 GAM
 * 보상형을 부르고, 그것도 안 채워져야 셀프 광고다. 그 앞단이 몇 초를 먹은 뒤라 예전 입력 화면
 * 관문의 5초를 그대로 두면 체감 대기가 겹쳐 쌓인다. **줄이려면 앞단을 재고 정한다.**
 */
const ENTRY_AD_SECONDS = 3;

type Stage = "deciding" | "rewarded" | "self" | "done";

/** 결제를 마치고 돌아온 주소인가. 이 컴포넌트는 결과를 읽은 뒤 클라이언트에서만 그려진다. */
function returnedFromPayment(): boolean {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has("payment");
}

export function ResultEntryGate({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: string;
}) {
  const { analyzing } = dictionary;
  /**
   * **광고가 나갈 수 없는 언어에서는 오퍼월을 기다리지 않는다.**
   *
   * 지원하지 않거나 열지 않은 언어에는 애드센스 태그 자체가 실리지 않으므로 `googlefc`가 생길
   * 수 없다. 그대로 두면 그 언어 이용자만 매번 빈 화면으로 기다린다. 판정을 건너뛰고 곧바로
   * 셀프 광고 갈래로 보낸다.
   */
  const offerwallPossible = adGatesEnabled && adsAllowedForLocale(locale);
  const detected = useSelfGateNeeded();
  const selfGateNeeded = offerwallPossible ? detected : true;

  const [paidReturn] = useState(returnedFromPayment);
  const [stage, setStage] = useState<Stage>(
    adGatesEnabled && !paidReturn ? "deciding" : "done",
  );
  const [countdown, setCountdown] = useState(0);
  // 한 번 시작한 관문은 다시 세우지 않는다.
  const ran = useRef(false);
  const timer = useRef<number | null>(null);

  /**
   * **타이머는 언마운트 때만 거둔다.**
   *
   * 관문이 도는 도중에 취소하는 정리 함수를 두면 **개발 모드에서 관문이 통째로 멎는다.**
   * React는 개발 모드에서 효과를 마운트 직후 한 번 더 돌리는데(StrictMode), 그 사이에
   * 정리가 끼어들어 「돌던 것은 취소됐고, `ran`이 참이라 다시 시작하지도 않는」 상태가 된다.
   * 그래서 취소 표식을 두지 않는다. 언마운트 뒤의 `setState`는 React 18에서 무해하다.
   */
  useEffect(
    () => () => {
      if (timer.current !== null) window.clearInterval(timer.current);
    },
    [],
  );

  useEffect(() => {
    if (!adGatesEnabled || paidReturn || ran.current) return;
    // 아직 오퍼월 유무를 모른다. 그동안 결과를 보여 주면 관문이 없는 것과 같다.
    if (selfGateNeeded === null) return;
    ran.current = true;

    void (async () => {
      /** **오퍼월이 도는 방문에서는 우리가 비켜 준다.** 이미 대가를 치른 것이다. */
      if (selfGateNeeded === false) {
        setStage("done");
        return;
      }

      /**
       * **GAM 보상형이 먼저다.** 지원하지 않는 언어에서는 부르지 않는다 — `showRewardedAd`가
       * `gpt.js`를 붙이므로, 부르는 순간 그 화면에 구글 광고 코드가 실린다.
       */
      if (offerwallPossible) {
        setStage("rewarded");
        const outcome = await showRewardedAd();
        // 끝까지 봤으면 대가를 치른 것이다. 셀프 광고를 겹쳐 세우지 않는다.
        if (outcome === "granted") {
          setStage("done");
          return;
        }
      }

      /**
       * **`dismissed`도 셀프 광고로 내려보낸다.** 여기서는 돌아갈 자리가 없다 — 결과를 영영
       * 안 보여 줄 수는 없고, 그냥 통과시키면 닫기만 하면 광고를 건너뛰게 된다.
       */
      setStage("self");
      const waitMs = ENTRY_AD_SECONDS * 1000;
      const startedAt = Date.now();
      setCountdown(ENTRY_AD_SECONDS);
      timer.current = window.setInterval(() => {
        setCountdown(Math.max(0, Math.ceil((waitMs - (Date.now() - startedAt)) / 1000)));
      }, 250);
      await new Promise((resolve) => window.setTimeout(resolve, waitMs));
      if (timer.current !== null) {
        window.clearInterval(timer.current);
        timer.current = null;
      }
      setCountdown(0);
      setStage("done");
    })();
  }, [selfGateNeeded, offerwallPossible, paidReturn]);

  /**
   * **오퍼월이 늦게 뜨면 우리 관문을 걷는다.** 오퍼월이 떴다는 것은 대가를 이미 치렀다는
   * 뜻이다. `useSelfGateNeeded`가 판정 뒤에도 계속 지켜보다가 `false`로 되돌린다. 걷는 것은
   * 아래에서 **파생**으로 판정하고, 여기서는 돌던 카운트다운만 끈다(효과에서 `setState` 금지).
   */
  useEffect(() => {
    if (selfGateNeeded !== false) return;
    if (timer.current !== null) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  }, [selfGateNeeded]);

  /** 관문이 도는 동안 뒤 화면이 스크롤되지 않게 한다. */
  useEffect(() => {
    if (stage === "done") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [stage]);

  /** **오퍼월이 떴으면 우리는 없다.** 언제 떴든 마찬가지다 — `ran`을 거치지 않고 파생한다. */
  if (stage === "done" || selfGateNeeded === false) return null;

  /**
   * **기다리는 동안에는 상자를 그리지 않는다.** 아직 광고가 없는데 광고를 말하는 빈 상자가
   * 뜨면 안 된다. 이 구간에 필요한 것은 결과를 가리는 일 하나뿐이라 덮개만 남긴다. GAM 갈래도
   * 같다 — 구글이 자기 화면을 띄운다.
   */
  const showCard = stage === "self";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={analyzing.watching}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d1518]/60 px-5 backdrop-blur-sm"
    >
      {showCard ? (
        <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-6 shadow-2xl">
          <p className="break-keep-all text-sm font-semibold">{analyzing.watching}</p>
          <SelfAdCard dictionary={dictionary} className="mt-5" />
          <p className="mt-5 text-center text-xs text-muted">
            {fillTemplate(analyzing.remaining, { seconds: String(countdown) })}
          </p>
        </div>
      ) : null}
    </div>
  );
}
