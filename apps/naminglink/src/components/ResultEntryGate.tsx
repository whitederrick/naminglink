"use client";

import { useEffect, useRef, useState } from "react";

import { adGatesEnabled, adsAllowedForLocale } from "@/lib/ads";
import { trackAdEvent } from "@/lib/analytics-client";
import { showRewardedAd } from "@/lib/gam-rewarded";
import { useSelfGateNeeded } from "@/lib/offerwall";
import { SelfAdCard } from "@/components/SelfAdCard";
import { unlockCopyFor } from "@/components/CandidateUnlockPanel";

/**
 * **결과 화면에 들어올 때 광고 하나를 치른다.**
 *
 * ## 왜 입력 화면이 아니라 여기인가 (2026-08-19)
 *
 * 관문은 원래 입력 화면에 있었다. 그런데 **입력 화면에서는 「오퍼월이 있는가」를 잴 수 없다** —
 * 판정 근거인 `window.googlefc`는 애드센스 태그가 있는 화면에만 생기고, 입력 화면에는 그
 * 태그가 **일부러 없다**(2026-08-10 반려 이후 「광고는 발행한 화면에만」). 그래서 입력 화면에
 * 관문을 두면 오퍼월이 도는 방문에도 관문이 하나 더 붙어 **한 번의 이용에 광고가 둘**이 된다.
 *
 * 결과 화면에는 태그가 있으므로 여기서는 잴 수 있다. 관문을 여기 두면 세 갈래가 한 자리에서
 * 갈리고, 어느 갈래로 가든 **광고는 정확히 하나**다.
 *
 *     오퍼월이 있다      → 오퍼월이 화면을 덮는다. 우리는 비켜 준다
 *     오퍼월이 없다      → GAM 보상형
 *     GAM 도 없다        → 셀프 광고 + 기다림
 *
 * ## 후보 1개는 어느 갈래에서도 열려 있다
 *
 * 관문이 끝나면 결과 화면이 그대로 보인다. 무료 후보 수는 `FREE_CANDIDATE_COUNT`(=1)이 정하고
 * 이 부품은 그 값을 건드리지 않는다 — 관문을 통과했는데 아무 후보도 없는 화면은 2026-08-10
 * 거절 사유의 모양이다.
 *
 * ## 이 자리에 애드센스 표시 광고를 두지 않는다
 *
 * 닫을 수 없는 전면 오버레이이고(오버레이 게재 금지), 결과를 보는 대가다(콘텐츠 해제의 대가로
 * 표시 광고를 쓸 수 없다). 대가는 오퍼월·GAM 보상형이 맡고, 둘 다 없을 때만 셀프 광고가 그
 * 자리를 채운다. **관문을 없애거나 기다림을 건너뛰지 않는다 — 채울 것만 바꾼다.**
 *
 * ## 결과가 없으면 부르지 않는다
 *
 * 결과 주소로 바로 들어와 복원에 실패한 화면에서 관문이 돌면, 발행한 콘텐츠가 하나도 없는
 * 자리에서 광고를 보게 하는 셈이 된다. 부르는 쪽이 `stored`를 확인한 뒤에만 그린다.
 */

/**
 * 셀프 광고를 보여 주는 시간.
 *
 * 예전 입력 화면 관문은 10초(한자는 15초)였는데, 그때는 **분석과 동시에** 돌아 체감 대기가
 * 0이었다. 여기서는 분석이 끝난 뒤에 도므로 그대로 옮기면 대기가 통째로 더해진다.
 *
 * ## 후보 열기 관문(`UNLOCK_AD_SECONDS` = 5초)보다 짧다 (2026-08-24, 사용자 판단)
 *
 * 값이 어긋난 것이 아니다. **이 자리는 셀프 광고에 닿기까지 이미 시간을 쓴다** —
 * 오퍼월이 뜨는지 지켜보고(마커를 봐도 유예만큼 더 본다), 안 뜨면 GAM 보상형을 부르고,
 * 그것도 안 채워져야 셀프 광고다. 그 앞단이 몇 초를 먹은 뒤라 5초를 그대로 두면 체감
 * 대기가 겹쳐 쌓인다. 후보 열기 관문은 그 앞단이 없어 5초 그대로다.
 *
 * **줄이려면 앞단을 재고 정한다.** 앞단이 빨라지면 이 값을 5초로 되돌려도 된다.
 */
const ENTRY_AD_SECONDS = 3;

type Stage = "deciding" | "rewarded" | "self" | "done";

export function ResultEntryGate({
  locale,
  serviceType,
}: {
  locale?: string;
  serviceType?: string;
}) {
  const copy = unlockCopyFor(locale, serviceType);
  /**
   * **광고가 나갈 수 없는 언어에서는 오퍼월을 기다리지 않는다.**
   *
   * 지원하지 않거나 사람이 검수하지 않은 언어에는 애드센스 태그 자체가 실리지 않으므로
   * `googlefc`가 생길 수 없다. 그대로 두면 그 언어 이용자만 매번 2.5초를 빈 화면으로 기다린다.
   * 판정을 건너뛰고 곧바로 셀프 광고 갈래로 보낸다.
   */
  const offerwallPossible = adGatesEnabled && adsAllowedForLocale(locale ?? "");
  const detected = useSelfGateNeeded();
  const selfGateNeeded = offerwallPossible ? detected : true;

  const [stage, setStage] = useState<Stage>(adGatesEnabled ? "deciding" : "done");
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
   * 실측으로 확인했다 — 45초가 지나도 관문이 걷히지 않았다.
   *
   * 그래서 취소 표식을 두지 않는다. 언마운트 뒤의 `setState`는 React 18에서 무해하다.
   */
  useEffect(
    () => () => {
      if (timer.current !== null) window.clearInterval(timer.current);
    },
    [],
  );

  useEffect(() => {
    if (!adGatesEnabled || ran.current) return;
    // 아직 오퍼월 유무를 모른다. 그동안 결과를 보여 주면 관문이 없는 것과 같다.
    if (selfGateNeeded === null) return;
    ran.current = true;

    void (async () => {
      trackAdEvent({ eventType: "IMPRESSION", slotKey: "analysis_wait", locale, serviceType });

      /**
       * **오퍼월이 도는 방문에서는 우리가 비켜 준다.** 오퍼월이 화면을 덮고 있다가 통과해야
       * 걷히므로, 그 방문에서는 결과를 보는 대가를 이미 치른 것이다.
       */
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
       * **`dismissed`도 셀프 광고로 내려보낸다.** 후보 열기 관문에서는 닫으면 아무것도 열지
       * 않지만(누르기 전 상태로 돌아가면 된다), 여기서는 돌아갈 자리가 없다 — 결과를 영영
       * 안 보여 줄 수는 없고, 그렇다고 그냥 통과시키면 닫기만 하면 광고를 건너뛰게 된다.
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
  }, [selfGateNeeded, offerwallPossible, locale, serviceType]);

  /**
   * **오퍼월이 늦게 뜨면 우리 관문을 걷는다.**
   *
   * 2026-08-24 운영 관측 — 자체 광고가 뜬 2~3초 뒤에 오퍼월이 나왔다. 둘이 겹쳤고, 우리
   * 카운트다운이 오퍼월 뒤에 그대로 남아 있었다. 판정을 한 번 내리고 끝냈기 때문이다
   * (`ran`은 관문을 다시 세우지 않으려고 둔 것이지, 되돌리지 않으려고 둔 것이 아니다).
   *
   * 오퍼월이 떴다는 것은 **대가를 이미 치렀다**는 뜻이다. 언제 떴든 우리는 비켜 준다.
   * `useSelfGateNeeded`가 판정 뒤에도 계속 지켜보다가 `false`로 되돌린다.
   *
   * **효과에서 `setState` 하지 않는다**(`react-hooks/set-state-in-effect`, 2026-08-20 커밋
   * `3d21920`). 걷는 것은 아래에서 **파생**으로 판정하고, 여기서는 돌던 카운트다운만 끈다.
   */
  useEffect(() => {
    if (selfGateNeeded !== false) return;
    if (timer.current !== null) {
      window.clearInterval(timer.current);
      timer.current = null;
    }
  }, [selfGateNeeded]);

  /**
   * 관문이 도는 동안 뒤 화면이 스크롤되지 않게 한다. 오버레이가 덮고 있는데 뒤가 움직이면
   * 관문을 지나친 것처럼 보인다.
   */
  useEffect(() => {
    if (stage === "done") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [stage]);

  /**
   * **오퍼월이 떴으면 우리는 없다.** 언제 떴든 마찬가지다 — 대가는 이미 치러졌다.
   *
   * 2026-08-24 운영 관측: 자체 광고가 뜬 2~3초 뒤에 오퍼월이 나와 둘이 겹쳤고, 우리
   * 카운트다운이 오퍼월 뒤에 그대로 남았다. `ran`은 관문을 **다시 세우지 않으려고** 둔
   * 것이지 **되돌리지 않으려고** 둔 것이 아니다. 그래서 걷는 판정은 `ran`을 거치지 않고
   * 여기서 파생한다.
   */
  if (stage === "done" || selfGateNeeded === false) return null;

  /**
   * **기다리는 동안에는 상자를 그리지 않는다** (2026-08-19).
   *
   * 오퍼월이 뜰지 정해지기 전에도 「광고 확인 중」이라고 쓰인 **빈 상자**가 떠 있었다.
   * 사용자가 휴대폰 화면으로 짚어 준 자리다 — 아직 광고가 없는데 광고를 말하고, 상자 안에는
   * 아무것도 없다.
   *
   * 이 구간에 필요한 것은 **결과를 가리는 일** 하나뿐이다. 그래서 덮개만 남긴다. GAM 갈래도
   * 같다 — 구글이 자기 화면을 띄우므로 그 아래에 우리 상자를 둘 이유가 없다.
   */
  const showCard = stage === "self";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={copy.watching}
      className="fixed inset-0 z-50 grid place-items-center bg-foreground/55 p-4 backdrop-blur-sm"
    >
      {showCard ? (
        <div className="grid w-full max-w-xl gap-4 rounded-xl border border-line bg-background p-5 shadow-2xl sm:p-6">
          {/* **제목을 따로 두지 않는다.** 후보 열기 관문의 제목(`copy.title`)은 「추가 후보
              열기」라 이 자리에서는 틀린 말이 된다 — 여기는 결과를 처음 여는 자리라 「추가」가
              없다. 새 문구를 만들면 23로케일을 새로 번역해야 하므로, 이미 있는 두 문장
              (`watching`·`watchingNote`)만으로 말한다. 둘 다 이 자리에서 그대로 참이다. */}
          <p className="text-sm font-semibold text-brand-teal">{copy.watching}</p>
          <SelfAdCard />
          <p className="text-center text-sm font-medium text-brand-teal">
            {copy.watchingNote(countdown)}
          </p>
        </div>
      ) : null}
    </div>
  );
}
