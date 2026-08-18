"use client";

/**
 * GAM(Google Ad Manager) 보상형 광고.
 *
 * **왜 애드센스가 아니라 GAM인가.** 결과를 여는 대가로 보는 광고는 보상형이고, 애드센스
 * 표시 광고는 콘텐츠 해제의 대가로 쓸 수 없다(계정 정지 사유다). 보상형은 GAM·AdMob 포맷으로만
 * 허용된다. 그래서 `AdWatchOverlay`에는 애드센스 배너를 두지 않고 이 모듈을 부른다.
 *
 * **naminglink `lib/gam-rewarded.ts`와 같은 파일이다.** 광고 단위만 각자 만든다.
 *
 * **다크 런치다.** 광고 단위 경로가 없으면 스크립트도 안 붙고 아무 일도 일어나지 않는다
 * (`lib/ads.ts`의 퍼블리셔 ID와 같은 규칙). 값을 넣은 뒤에는 재배포가 필요하다 —
 * `NEXT_PUBLIC_` 값은 빌드 시점에 박힌다.
 *
 * **채워지지 않는 경우가 흔하다.** 트래픽이 적은 초기에는 보상형 수요가 붙지 않아 no-fill이
 * 잦다(일반 배너와 다른 점이다). 그래서 이 모듈은 **실패를 정상 경로로 취급한다** —
 * `unavailable`을 돌려주면 호출한 쪽이 셀프 광고로 대신 채운다. 광고가 없다고 버튼이
 * 죽거나 이용자가 막히면 안 된다.
 *
 * **지금 이 계정에는 보상형 수요가 아예 없다** (2026-08-18 확정). 무료 Google Ad Manager라
 * Ad Exchange(공개 입찰)가 없고, 보상형이 지원하는 수요 목록에 AdSense 백필이 없다. 코드가
 * 옳아도 `isEmpty: true`로 돌아온다 — 그래서 셀프 광고 폴백이 지금의 실제 경로다. 그래도
 * 되돌리지 않는 이유는 수요가 붙는 날 그대로 작동하기 때문이다.
 */

/**
 * **설정값은 `gam-rewarded-config.ts`에 있다.** 이 파일은 `"use client"`라, 여기서 내보낸 값을
 * 서버에서 읽으면 `undefined`가 된다(그쪽 파일 주석에 사연이 있다). 서버 코드는 반드시
 * 설정 파일에서 직접 가져올 것.
 */
import {
  gamCspSources,
  gamRewardedEnabled,
  gamRewardedUnit,
} from "@/lib/gam-rewarded-config";

export { gamCspSources, gamRewardedEnabled, gamRewardedUnit };

const GPT_SRC = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
/** 이 시간 안에 준비되지 않으면 없는 것으로 본다. 이용자를 무한정 세워 둘 수 없다. */
const READY_TIMEOUT_MS = 4000;

type PubAds = {
  addEventListener: (name: string, fn: (event: unknown) => void) => void;
  removeEventListener?: (name: string, fn: (event: unknown) => void) => void;
};

type Googletag = {
  cmd: { push: (fn: () => void) => void };
  enums?: { OutOfPageFormat?: { REWARDED?: unknown } };
  defineOutOfPageSlot?: (path: string, format: unknown) => unknown;
  pubads: () => PubAds;
  destroySlots?: (slots: unknown[]) => void;
  display: (slot: unknown) => void;
  /**
   * **빠져 있던 단계다** (2026-08-18). 이걸 부르지 않으면 슬롯이 광고를 **요청하지 않는다** —
   * 정의하고 `display`까지 불러도 조용히 아무 일도 안 일어난다. 보상형이 늘 `unavailable`로
   * 떨어져 셀프 광고 폴백만 돌던 원인이 여기였다.
   */
  enableServices?: () => void;
};

function googletagOf(): Googletag | null {
  if (typeof window === "undefined") return null;
  const w = window as unknown as { googletag?: Googletag };
  w.googletag = w.googletag ?? ({ cmd: [] } as unknown as Googletag);
  return w.googletag;
}

let scriptPromise: Promise<boolean> | null = null;

/** gpt.js를 필요할 때 한 번만 불러온다. 광고를 안 쓰는 화면에는 아예 안 붙는다. */
function loadGpt(): Promise<boolean> {
  if (!gamRewardedEnabled) return Promise.resolve(false);
  if (scriptPromise) return scriptPromise;

  scriptPromise = new Promise<boolean>((resolve) => {
    if (typeof document === "undefined") {
      resolve(false);
      return;
    }
    if (document.querySelector(`script[src="${GPT_SRC}"]`)) {
      resolve(true);
      return;
    }
    const script = document.createElement("script");
    script.src = GPT_SRC;
    script.async = true;
    script.crossOrigin = "anonymous";
    script.onload = () => resolve(true);
    // 광고차단기가 막는 것이 정상 경로다. 여기서 화면이 깨지면 안 된다.
    script.onerror = () => resolve(false);
    document.head.appendChild(script);
  });
  return scriptPromise;
}

export type RewardedOutcome =
  /** 광고를 끝까지 봤다. 보상을 줘도 된다. */
  | "granted"
  /** 보상 전에 닫았다. 보상을 주지 않는다. */
  | "dismissed"
  /** 광고 자체가 없거나(no-fill) 불러오지 못했다. 호출한 쪽이 대안을 써야 한다. */
  | "unavailable";

/**
 * 서비스는 페이지당 **한 번만** 켠다. `enableServices()`는 여러 번 불러도 되는 호출이 아니고,
 * 첫 슬롯을 만들 때 한 번 켜면 이후 슬롯에도 그대로 적용된다.
 */
let servicesEnabled = false;

/**
 * 광고가 뜬 뒤 닫힘 신호가 **영영 오지 않는** 경우의 마지막 안전망.
 *
 * 준비 대기(`READY_TIMEOUT_MS`)와 성격이 다르다. 그쪽은 「광고가 없다」를 판정하는 시계이고,
 * 이쪽은 「광고는 떴는데 끝을 못 봤다」를 정리하는 시계다. 없으면 약속이 영원히 매달린 채
 * 남아 버튼이 다시 눌리지 않는다. 보상은 주지 않는다(`dismissed`).
 */
const CLOSE_SAFETY_MS = 5 * 60 * 1000;

/**
 * 보상형 광고를 한 번 띄운다.
 *
 * **`unavailable`은 오류가 아니다.** 초기 트래픽에서는 이쪽이 더 흔하다. 호출한 쪽은 이 값을
 * 받으면 셀프 광고 같은 대안으로 넘어가야 하고, 이용자를 막으면 안 된다.
 *
 * ## 2026-08-18에 고친 것 (naminglink에서 잡아 네 앱에 옮겼다)
 *
 * 호출 순서를 GPT 공식 흐름으로 맞췄다 — **정의 → addService → 이벤트 등록 →
 * `enableServices()` → `display()`**. 예전에는 `enableServices()`가 없고 `display()` 뒤에
 * `refresh()`를 또 불렀다. 앞의 것은 요청을 아예 막고, 뒤의 것은 요청을 두 번 내는 자리였다.
 * `display()` 하나가 **후보당 요청 한 번**을 보장한다.
 *
 * 그리고 **모든 종료 경로가 같은 `cleanup()`을 지난다.** 예전에는 타임아웃으로 끝나도 리스너와
 * 슬롯이 살아 있어서, 폴백(셀프 광고)이 시작된 **뒤에** 늦게 온 `rewardedSlotReady`가
 * `makeRewardedVisible()`을 불러 광고가 갑자기 튀어나올 수 있었다. 리스너가 호출마다 넷씩
 * 쌓이는 문제도 같은 자리였다.
 *
 * 이벤트는 **우리 슬롯인지 확인한다.** 한 번에 하나만 띄우므로 지금은 티가 안 나지만, 리스너가
 * 쌓이던 시절에는 옛 호출의 리스너가 새 광고의 신호를 가로챌 수 있었다.
 */
export async function showRewardedAd(): Promise<RewardedOutcome> {
  if (!gamRewardedEnabled) return "unavailable";
  if (!(await loadGpt())) return "unavailable";

  const googletag = googletagOf();
  if (!googletag) return "unavailable";

  return new Promise<RewardedOutcome>((resolve) => {
    let settled = false;
    let timer: number | undefined;
    /** 종료 경로마다 따로 적지 않는다. 하나를 등록해 두고 `finish()`가 부른다. */
    let cleanup = () => {};

    const finish = (outcome: RewardedOutcome) => {
      if (settled) return;
      settled = true;
      if (timer !== undefined) window.clearTimeout(timer);
      cleanup();
      cleanup = () => {};
      resolve(outcome);
    };

    // 준비 신호가 안 오면 없는 것으로 본다. 광고가 안 붙는 이유는 여러 가지인데
    // (no-fill·차단기·네트워크) 이용자 입장에서는 다 같으므로 하나로 묶는다.
    timer = window.setTimeout(() => finish("unavailable"), READY_TIMEOUT_MS);

    googletag.cmd.push(() => {
      try {
        const format = googletag.enums?.OutOfPageFormat?.REWARDED;
        const slot =
          format !== undefined
            ? googletag.defineOutOfPageSlot?.(gamRewardedUnit, format)
            : null;
        // 보상형을 지원하지 않는 화면에서는 null이 온다(문서에 명시된 정상 반환값이다).
        if (!slot) {
          finish("unavailable");
          return;
        }
        // `cmd` 큐가 늦게 풀려 이미 포기한 뒤일 수 있다. 그 슬롯은 쓰지 않고 바로 버린다 —
        // 남겨 두면 나중에 광고가 실려 화면에 튀어나온다.
        if (settled) {
          googletag.destroySlots?.([slot]);
          return;
        }

        const pubads = googletag.pubads();
        let granted = false;

        /** GPT 이벤트는 전부 `slot`을 싣는다. 우리 것이 아니면 무시한다. */
        const isOurs = (event: unknown) =>
          (event as { slot?: unknown } | null)?.slot === slot;

        const onReady = (event: unknown) => {
          if (settled || !isOurs(event)) return;
          const makeVisible = (event as { makeRewardedVisible?: () => void })
            .makeRewardedVisible;
          // 준비 신호가 왔는데 띄울 방법이 없으면 없는 것과 같다. 이용자를 세워 두지 않는다.
          if (typeof makeVisible !== "function") {
            finish("unavailable");
            return;
          }
          try {
            makeVisible.call(event);
          } catch {
            finish("unavailable");
            return;
          }
          // 광고가 떴다. **준비 대기 시계를 끈다** — 안 끄면 이용자가 보고 있는 도중에
          // 타임아웃이 슬롯을 부숴 버린다. 대신 닫힘용 안전망으로 갈아 끼운다.
          if (timer !== undefined) window.clearTimeout(timer);
          timer = window.setTimeout(() => finish("dismissed"), CLOSE_SAFETY_MS);
        };
        const onGranted = (event: unknown) => {
          if (isOurs(event)) granted = true;
        };
        const onClosed = (event: unknown) => {
          if (isOurs(event)) finish(granted ? "granted" : "dismissed");
        };
        const onRenderEnded = (event: unknown) => {
          // 소재가 없으면 여기서 끝난다. 준비 신호는 오지 않는다.
          const rendered = event as { slot?: unknown; isEmpty?: boolean };
          if (rendered.slot === slot && rendered.isEmpty) {
            finish("unavailable");
          }
        };

        cleanup = () => {
          pubads.removeEventListener?.("rewardedSlotReady", onReady);
          pubads.removeEventListener?.("rewardedSlotGranted", onGranted);
          pubads.removeEventListener?.("rewardedSlotClosed", onClosed);
          pubads.removeEventListener?.("slotRenderEnded", onRenderEnded);
          googletag.destroySlots?.([slot]);
        };

        pubads.addEventListener("rewardedSlotReady", onReady);
        pubads.addEventListener("rewardedSlotGranted", onGranted);
        pubads.addEventListener("rewardedSlotClosed", onClosed);
        pubads.addEventListener("slotRenderEnded", onRenderEnded);

        (slot as { addService?: (service: unknown) => unknown }).addService?.(pubads);
        // **순서가 중요하다.** 서비스를 켠 뒤에 `display()`를 불러야 요청이 나간다.
        if (!servicesEnabled) {
          googletag.enableServices?.();
          servicesEnabled = true;
        }
        // `display()` 하나로 끝낸다. 뒤에 `refresh()`를 또 부르면 요청이 두 번 나간다.
        googletag.display(slot);
      } catch {
        finish("unavailable");
      }
    });
  });
}
