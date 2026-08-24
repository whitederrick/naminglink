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

/**
 * `googlefcInactive` 마커를 본 뒤에도 **더 지켜보는 시간**.
 *
 * 그 마커는 「안 띄운다」의 최종 통보가 아니다. 2026-08-24 에 운영에서 관측했다 —
 * 마커를 보고 우리 카드를 그린 **2~3초 뒤에 오퍼월이 떴다.** 둘이 겹쳐 보였고, 우리
 * 카운트다운이 오퍼월 뒤에 그대로 남았다.
 *
 * 그래서 마커는 **「아마 안 뜬다」로만** 받고 이만큼 더 본다. 오퍼월이 그 사이에 뜨면
 * 우리 카드는 **아예 그려지지 않는다**. 안 뜨면 그때 그린다 — 8초를 다 기다리지 않는
 * 마커의 본래 값은 그대로 남는다.
 */
const INACTIVE_GRACE_MS = 3500;

/**
 * 자체 관문이 도는 동안에도 오퍼월을 계속 지켜보는 상한.
 *
 * 판정을 한 번 내리고 끝내면 **되돌릴 수 없다** — 그것이 위 사고의 구조적 원인이다.
 * 늦게 뜬 오퍼월도 대가를 치른 것이므로, 보이면 그 자리에서 비켜 준다.
 */
const LATE_WATCH_MS = 20000;

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
 * **iframe 만 센다** (2026-08-19). 예전에는 `body` 바로 밑에서 화면을 덮는 요소를 찾았는데,
 * 그러면 **우리 자신의 오버레이가 걸린다** — 실측에서 입력 화면의 분석 중 상자가 오퍼월로
 * 읽혔고, 관문은 열리자마자 「오퍼월이 있다」며 비켜 줬다. 광고가 0개가 됐다.
 *
 * 오퍼월은 구글이 **iframe 안에** 그린다. 우리 오버레이에는 iframe이 없다. 그래서 「화면을
 * 덮는 iframe」이 우리 것과 남의 것을 가르는 선이 된다 — 표식을 일일이 붙이는 것보다 튼튼하다
 * (붙이는 것을 잊은 오버레이 하나가 다시 같은 결함을 만든다).
 *
 * 배너 광고 iframe 은 걸리지 않는다 — 화면 절반을 덮지 않는다. GAM 보상형의 전면 iframe 은
 * 이 판정이 끝난 **뒤에** 뜬다(그때는 이미 폴링을 멈춘 상태다).
 */
function offerwallVisible() {
  if (typeof window === "undefined") return false;
  for (const frame of Array.from(document.querySelectorAll("iframe"))) {
    const style = window.getComputedStyle(frame);
    if (style.visibility === "hidden" || style.display === "none") continue;
    if (coversViewport(frame.getBoundingClientRect(), window.innerWidth, window.innerHeight)) {
      return true;
    }
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

/** 한 번 재어 본 결과. 시각은 관문이 시작한 때로부터의 밀리초다. */
export type GateProbe = {
  readonly offerwallVisible: boolean;
  readonly fcInactive: boolean;
  readonly elapsedMs: number;
  /** 마커를 처음 본 시각. 아직 못 봤으면 null. */
  readonly inactiveSeenAtMs: number | null;
};

/**
 * 지금 무엇을 할 것인가. **순수 함수로 꺼내 둔다** — 검사기가 대조군으로 잰다
 * (`scripts/verify-offerwall-detection.ts`). 폴링 안에 인라인으로 두면
 * 「이 판정이 겹침을 막는가」를 물을 수 없다.
 *
 *   yield — 오퍼월이 떴다. 우리는 비켜 준다.
 *   self  — 우리 관문을 돌린다.
 *   wait  — 아직 모른다. 더 본다.
 */
export type GateDecision = "yield" | "self" | "wait";

export function decideSelfGate(probe: GateProbe): GateDecision {
  // ① 실제로 떴다. 이 판정만이 관측이고 나머지는 추정이다 — 언제 나오든 이긴다.
  if (probe.offerwallVisible) return "yield";
  // ② 마커를 봤다. **끝내지 않고** 유예만큼 더 본다.
  if (probe.fcInactive && probe.inactiveSeenAtMs !== null) {
    return probe.elapsedMs - probe.inactiveSeenAtMs >= INACTIVE_GRACE_MS ? "self" : "wait";
  }
  // ③ 상한. 광고차단기·로딩 실패·구글이 늦는 경우 전부 여기로 온다.
  //    광고가 하나도 안 나가는 것보다 우리 관문이 도는 편이 낫다.
  if (probe.elapsedMs >= OFFERWALL_WAIT_MS) return "self";
  return "wait";
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
    let inactiveSeenAtMs: number | null = null;
    let decided = false;

    const timer = window.setInterval(() => {
      const elapsedMs = Date.now() - startedAt;
      const visible = offerwallVisible();
      if (inactiveSeenAtMs === null && googlefcInactive()) inactiveSeenAtMs = elapsedMs;

      const decision = decideSelfGate({
        offerwallVisible: visible,
        fcInactive: inactiveSeenAtMs !== null,
        elapsedMs,
        inactiveSeenAtMs,
      });

      if (decision === "yield") {
        // 늦게 떴어도 대가는 치러졌다. 우리 관문이 이미 돌고 있었다면 그쪽이 걷는다.
        window.clearInterval(timer);
        setNeeded(false);
        return;
      }

      if (decision === "self" && !decided) {
        decided = true;
        setNeeded(true);
        // **여기서 멈추지 않는다.** 예전에는 이 자리에서 인터벌을 껐고, 그래서 뒤늦게
        // 오퍼월이 떠도 ①이 받아 줄 기회가 없었다 — 자체 광고와 오퍼월이 겹쳤다.
      }

      // 판정을 내린 뒤에도 상한까지는 계속 본다. 되돌릴 수 있어야 겹치지 않는다.
      if (elapsedMs >= LATE_WATCH_MS) window.clearInterval(timer);
    }, POLL_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, []);

  return needed;
}
