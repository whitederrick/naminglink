"use client";

import { useEffect, useState } from "react";

import { adGatesEnabled } from "@/lib/ads";

/**
 * 오퍼월과 자체 게이트의 역할 분담.
 *
 * **오퍼월이 먼저다.** 오퍼월이 도는 방문에서는 우리 게이트(광고 확인 후 분석 시작)를 띄우지
 * 않는다. 한 번의 이용에 광고 관문이 둘이면 이용자는 두 번 붙잡히고, 애드센스가 보기에도
 * 보상형 광고 위에 자체 게이트를 겹쳐 놓은 모양이 된다.
 *
 * **오퍼월이 못 도는 방문에서만 우리 게이트가 대신 돈다.** 광고차단기가 구글 스크립트를 막았거나,
 * 오퍼월을 아직 게시하지 않았거나, 스크립트가 늦어 안 뜨는 경우다.
 *
 * ---
 *
 * **왜 이렇게 판단하는가.** 구글은 "오퍼월이 이 방문에 실제로 떴는가"를 알려주는 API를 주지
 * 않는다. `googlefc.callbackQueue`가 받는 키는 동의·광고차단·미국 주 규정뿐이고, 오퍼월의
 * 표시·해제·통과 여부를 알려주는 콜백은 문서에 없다. 있는 것은 반대 방향
 * (`controlledMessagingFunction`으로 **우리가** 띄울지 정하는 것)뿐이다.
 *
 * 그래서 두 가지를 곱해서 판단한다.
 *
 *   1. 오퍼월을 게시했는가  → `NEXT_PUBLIC_OFFERWALL_ENABLED` (배포 시점에 우리가 아는 사실)
 *   2. 구글 메시징이 떴는가 → `window.googlefc` 가 실제로 정의되는가 (런타임)
 *
 * 2번이 실제 세계에서 오퍼월이 못 도는 대부분의 경우(광고차단기·네트워크 차단·미지원 지역에서의
 * 스크립트 미로드)를 걸러 준다.
 *
 * **한계를 적어 둔다.** `window.googlefc`는 오퍼월 전용이 아니라 개인정보 동의 메시지가 있어도
 * 만들어진다. 그래서 EEA·영국 방문자처럼 동의 메시지만 뜨고 오퍼월은 안 뜨는 경우에도 우리
 * 게이트를 건너뛸 수 있다. 판정이 틀리는 방향이 "게이트를 덜 띄우는" 쪽이라 이용자가 두 번
 * 붙잡히는 일은 없고, 구글이 오퍼월 상태를 노출하기 전까지는 이보다 정확히 알 방법이 없다.
 */

/** 오퍼월을 게시했는가. 값을 넣은 뒤에는 재배포해야 한다(NEXT_PUBLIC_은 빌드 시점에 박힌다). */
export const offerwallEnabled =
  adGatesEnabled && (process.env.NEXT_PUBLIC_OFFERWALL_ENABLED ?? "").trim() === "true";

/** 구글 메시징 스크립트가 뜰 때까지 기다릴 시간. 이 안에 안 뜨면 못 뜬 것으로 본다. */
const GOOGLEFC_WAIT_MS = 2500;
const POLL_INTERVAL_MS = 100;

function googlefcPresent() {
  return typeof window !== "undefined" && Boolean((window as { googlefc?: unknown }).googlefc);
}

/**
 * 자체 게이트를 돌려야 하는가.
 *
 * 판정이 끝나기 전에는 `null`을 돌려준다. 호출하는 쪽은 그동안 제출을 막아야 한다 — 기본값을
 * 참으로 두면 오퍼월이 도는 방문에서도 게이트가 한 번 번쩍이고, 거짓으로 두면 광고 없이
 * 결과가 나간다. 둘 다 곤란하므로 "아직 모름"을 따로 표현한다.
 */
export function useSelfGateNeeded(): boolean | null {
  const [needed, setNeeded] = useState<boolean | null>(() =>
    // **심사 모드에서는 관문 자체가 없다** (2026-08-11). 여기서 참을 돌려주면 광고가 하나도
    // 나가지 않는 상태에서 셀프 광고 관문만 남아, 화면이 "광고 확인 후 분석 시작"이라고
    // 말하면서 보여 줄 광고가 없는 꼴이 된다. 판정은 `lib/ads.ts` 한 곳에 있다.
    !adGatesEnabled ? false : offerwallEnabled ? null : true,
  );

  useEffect(() => {
    // 관문이 없으면(심사 모드) 기다릴 것도 없다.
    if (!adGatesEnabled) return;
    // 오퍼월을 게시하지 않았으면 기다릴 것이 없다. 우리 게이트가 그대로 돈다.
    if (!offerwallEnabled) return;

    // 이미 떠 있는 경우(뒤로 가기·클라이언트 이동)도 아래 첫 tick이 100ms 안에 잡는다.
    // 여기서 곧바로 setState를 하면 렌더가 연쇄로 도는 것을 lint가 막는다.
    let cancelled = false;
    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      if (cancelled) return;
      if (googlefcPresent()) {
        window.clearInterval(timer);
        setNeeded(false);
        return;
      }
      if (Date.now() - startedAt >= GOOGLEFC_WAIT_MS) {
        window.clearInterval(timer);
        // 못 떴다 — 광고차단기이거나 로딩 실패다. 우리 게이트가 대신 돈다.
        setNeeded(true);
      }
    }, POLL_INTERVAL_MS);

    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, []);

  return needed;
}
