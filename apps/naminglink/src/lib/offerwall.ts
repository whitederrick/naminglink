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
 * **예측하지 않는다. 관측한다** (2026-08-19).
 *
 * 예전에는 `window.googlefc`가 정의되는가로 판단했다. **그것은 「오퍼월이 뜬다」는 뜻이
 * 아니다** — 구글 메시징 스크립트가 실렸다는 뜻일 뿐이고, 띄울지는 그 뒤에 정해진다.
 * 그래서 양쪽으로 다 틀렸다(운영 실측).
 *
 *   스크립트가 빨리 오면   안 띄우는데도 비켜 줬다   → **광고 0개**
 *   스크립트가 늦게 오면   띄우는데도 셀프를 먼저 냈다 → **광고 2개**
 *
 * 임계값을 늘리면 뒤쪽만 줄고 앞쪽은 더 나빠진다. 숫자로 고칠 수 있는 결함이 아니었다.
 *
 * 지금은 셋 중 먼저 오는 것을 따른다.
 *
 *   ① 화면을 덮는 남의 요소가 나타남 → 오퍼월이다 → 비켜 준다
 *   ② `googlefcInactive` 마커        → 안 띄운다  → 우리 게이트
 *   ③ 상한 시간                      → 안 뜬 것으로 본다 → 우리 게이트
 *
 * ②는 **지름길일 뿐이다.** 뜻이 달라져도 ①이 받고 ③이 받는다 — 광고가 둘이 되거나 0이
 * 되지 않는다. 하나뿐인 근거 위에 판정을 세우지 않는다.
 *
 * 구글은 여전히 "오퍼월이 떴는가"를 알려주는 API를 주지 않는다. 있는 것은 반대 방향
 * (`controlledMessagingFunction`으로 **우리가** 띄울지 정하는 것)뿐이다.
 */

/** 오퍼월을 게시했는가. 값을 넣은 뒤에는 재배포해야 한다(NEXT_PUBLIC_은 빌드 시점에 박힌다). */
export const offerwallEnabled =
  adGatesEnabled && (process.env.NEXT_PUBLIC_OFFERWALL_ENABLED ?? "").trim() === "true";

/**
 * 오퍼월이 뜨기를 기다릴 시간.
 *
 * 이 안에 안 뜨면 안 뜨는 것으로 본다. 예전 값은 2.5초였는데, 그때는 기다리는 대상이
 * **스크립트**였고 지금은 **화면**이다 — 스크립트가 온 뒤에도 구글이 띄울지 정하는 데
 * 시간이 걸린다. 실측에서 스크립트가 오고 마커가 붙기까지 1초가 더 걸렸고, 휴대폰
 * 회선에서는 스크립트만으로도 2.5초를 넘겼다.
 */
const OFFERWALL_WAIT_MS = 8000;
const POLL_INTERVAL_MS = 100;

/** 「화면을 덮는다」로 볼 최소 크기(px). 0×0 요소가 통과하는 것을 막는다. */
const MIN_COVER_PX = 200;

/**
 * 이 상자가 화면을 덮는가. **판정을 순수 함수로 꺼내 둔다** — 검사기가 대조군으로 잰다.
 *
 * **잴 수 없는 상태에서는 거짓이다.** 배경 탭에서는 `innerWidth`·`innerHeight`가 0이다.
 * 그러면 「화면의 절반 이상」이 0 이상이 되어 **0×0 요소까지 전부 화면을 덮는 것으로 읽힌다** —
 * 실측에서 Next의 `<next-route-announcer>`(0×0, position:absolute)가 그렇게 잡혔다. 그대로
 * 두면 오퍼월이 없는데도 비켜 주고 광고가 하나도 안 나간다.
 *
 * 비율과 절대 크기를 **함께** 본다. 비율만 보면 같은 함정에 다시 걸린다.
 */
export function coversViewport(
  box: { width: number; height: number },
  viewWidth: number,
  viewHeight: number,
) {
  if (viewWidth < MIN_COVER_PX || viewHeight < MIN_COVER_PX) return false;
  return (
    box.width >= Math.max(MIN_COVER_PX, viewWidth * 0.5) &&
    box.height >= Math.max(MIN_COVER_PX, viewHeight * 0.5)
  );
}

/**
 * **오퍼월이 지금 화면을 덮고 있는가.**
 *
 * 구글의 클래스 이름에 기대지 않는다 — 이름은 바뀌지만 「화면을 덮는다」는 성질은 안 바뀐다.
 * 오퍼월은 `body` 바로 밑에 화면을 덮는 요소로 들어온다.
 *
 * **우리 오버레이는 세지 않는다.** 결과 진입 관문도 같은 모양이라 그대로 두면 자기 자신을
 * 오퍼월로 읽는다.
 */
function offerwallVisible() {
  if (typeof window === "undefined") return false;

  /**
   * **잴 수 없는 상태에서는 판정하지 않는다.**
   *
   * 배경 탭에서는 `innerWidth`·`innerHeight`가 0이다. 그러면 「너비가 화면의 절반 이상」이
   * 0 이상이 되어 **0×0 요소까지 전부 화면을 덮는 것으로 읽힌다** — 실측에서 Next의
   * `<next-route-announcer>`(0×0, position:absolute)가 그렇게 잡혔다. 그대로 두면 오퍼월이
   * 없는데도 비켜 주고 광고가 하나도 안 나간다.
   */
  for (const el of Array.from(document.body.children)) {
    if (el.hasAttribute("data-result-entry-gate")) continue;
    const style = window.getComputedStyle(el);
    if (style.position !== "fixed" && style.position !== "absolute") continue;
    if (style.visibility === "hidden" || style.display === "none") continue;
    const box = el.getBoundingClientRect();
    if (coversViewport(box, window.innerWidth, window.innerHeight)) return true;
  }
  return false;
}

/**
 * **구글이 「이 방문에는 아무것도 안 띄운다」고 표시했는가.**
 *
 * Funding Choices 는 상태를 0×0 짜리 숨은 iframe 이름으로 남긴다 —
 * `googlefcPresent`(태그 있음) · `googlefcLoaded`(로드됨) · `googlefcInactive`(안 띄움).
 *
 * **이것은 지름길일 뿐이다.** 이 판정이 틀려도 위의 `offerwallVisible`이 받아 주고, 아무
 * 신호가 없으면 상한 시간이 받는다. 마커가 하는 일은 「안 뜰 것이 확실할 때 8초를 안
 * 기다리게」 하는 것뿐이라, 뜻이 달라져도 광고가 둘이 되거나 0이 되지 않는다.
 */
function googlefcInactive() {
  if (typeof window === "undefined") return false;
  return Array.from(document.querySelectorAll("iframe")).some(
    (frame) => frame.name === "googlefcInactive",
  );
}

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

    const startedAt = Date.now();
    const timer = window.setInterval(() => {
      // ① 오퍼월이 실제로 화면을 덮었다. 대가를 이미 받은 것이니 우리는 비켜 준다.
      if (offerwallVisible()) {
        window.clearInterval(timer);
        setNeeded(false);
        return;
      }
      // ② 구글이 안 띄우기로 했다. 더 기다릴 것이 없다.
      if (googlefcInactive()) {
        window.clearInterval(timer);
        setNeeded(true);
        return;
      }
      // ③ 상한. 광고차단기·로딩 실패·구글이 늦는 경우 전부 여기로 온다.
      //    **광고가 하나도 안 나가는 것보다 우리 게이트가 도는 편이 낫다.**
      if (Date.now() - startedAt >= OFFERWALL_WAIT_MS) {
        window.clearInterval(timer);
        setNeeded(true);
      }
    }, POLL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return needed;
}
