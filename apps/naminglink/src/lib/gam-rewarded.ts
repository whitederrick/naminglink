"use client";

/**
 * GAM(Google Ad Manager) 보상형 광고.
 *
 * **왜 오퍼월이 아니라 GAM인가.** 오퍼월은 구글이 페이지 진입 시점에 띄우고 우리가 부르는
 * 시점을 정할 수 없다. 입력 화면에서 돌고 결과 화면으로 **페이지가 바뀌는** 흐름에는 맞지만,
 * 잠긴 후보를 여는 일은 **같은 페이지 안에서** 일어나 오퍼월이 다시 뜰 수 없다. 그래서 이
 * 자리는 우리가 시점을 정할 수 있는 GAM 보상형이 맡는다.
 *
 * **다크 런치다.** 광고 단위 경로가 없으면 스크립트도 안 붙고 아무 일도 일어나지 않는다
 * (`lib/ads.ts`의 퍼블리셔 ID와 같은 규칙). 값을 넣은 뒤에는 재배포가 필요하다 —
 * `NEXT_PUBLIC_` 값은 빌드 시점에 박힌다.
 *
 * **채워지지 않는 경우가 흔하다.** 트래픽이 적은 초기에는 보상형 수요가 붙지 않아 no-fill이
 * 잦다(일반 배너와 다른 점이다). 그래서 이 모듈은 **실패를 정상 경로로 취급한다** —
 * `unavailable`을 돌려주면 호출한 쪽이 셀프 광고로 대신 채운다. 광고가 없다고 버튼이
 * 죽거나 이용자가 막히면 안 된다.
 */

/** 광고 단위 경로. GAM 콘솔에서 보상형 광고 단위를 만들면 `/네트워크코드/이름` 꼴로 나온다. */
const rawUnit = (process.env.NEXT_PUBLIC_GAM_REWARDED_UNIT ?? "").trim();

/** 형식까지 확인한다. 오타가 들어간 채로 스크립트만 붙으면 CSP만 열리고 광고는 안 나온다. */
export const gamRewardedEnabled = /^\/\d{5,}\/[\w./-]+$/.test(rawUnit);

export const gamRewardedUnit = gamRewardedEnabled ? rawUnit : "";

/** GAM이 쓰는 도메인. CSP에 넣어야 하는 값이라 `next.config.ts`와 공유한다. */
export const gamCspSources = {
  script: ["https://securepubads.g.doubleclick.net", "https://pagead2.googlesyndication.com"],
  frame: ["https://securepubads.g.doubleclick.net", "https://googleads.g.doubleclick.net"],
  connect: ["https://securepubads.g.doubleclick.net", "https://googleads.g.doubleclick.net"],
} as const;

const GPT_SRC = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
/** 이 시간 안에 준비되지 않으면 없는 것으로 본다. 이용자를 무한정 세워 둘 수 없다. */
const READY_TIMEOUT_MS = 4000;

type Googletag = {
  cmd: { push: (fn: () => void) => void };
  enums?: { OutOfPageFormat?: { REWARDED?: unknown } };
  defineOutOfPageSlot?: (path: string, format: unknown) => unknown;
  pubads: () => {
    addEventListener: (name: string, fn: (event: unknown) => void) => void;
    removeEventListener?: (name: string, fn: (event: unknown) => void) => void;
    refresh: (slots: unknown[]) => void;
  };
  destroySlots?: (slots: unknown[]) => void;
  display: (slot: unknown) => void;
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
 * 보상형 광고를 한 번 띄운다.
 *
 * **`unavailable`은 오류가 아니다.** 초기 트래픽에서는 이쪽이 더 흔하다. 호출한 쪽은 이 값을
 * 받으면 셀프 광고 같은 대안으로 넘어가야 하고, 이용자를 막으면 안 된다.
 */
export async function showRewardedAd(): Promise<RewardedOutcome> {
  if (!gamRewardedEnabled) return "unavailable";
  if (!(await loadGpt())) return "unavailable";

  const googletag = googletagOf();
  if (!googletag) return "unavailable";

  return new Promise<RewardedOutcome>((resolve) => {
    let settled = false;
    const finish = (outcome: RewardedOutcome) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      resolve(outcome);
    };
    // 준비 신호가 안 오면 없는 것으로 본다. 광고가 안 붙는 이유는 여러 가지인데
    // (no-fill·차단기·네트워크) 이용자 입장에서는 다 같으므로 하나로 묶는다.
    const timeout = window.setTimeout(() => finish("unavailable"), READY_TIMEOUT_MS);

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

        const pubads = googletag.pubads();
        let granted = false;

        const onReady = (event: unknown) => {
          // 준비되면 곧바로 보여 준다. 이용자는 이미 버튼을 눌러 의사를 밝혔다.
          (event as { makeRewardedVisible?: () => void }).makeRewardedVisible?.();
        };
        const onGranted = () => {
          granted = true;
        };
        const onClosed = () => {
          googletag.destroySlots?.([slot]);
          finish(granted ? "granted" : "dismissed");
        };
        const onRenderEnded = (event: unknown) => {
          // 소재가 없으면 여기서 끝난다. 준비 신호는 오지 않는다.
          const rendered = event as { slot?: unknown; isEmpty?: boolean };
          if (rendered.slot === slot && rendered.isEmpty) {
            googletag.destroySlots?.([slot]);
            finish("unavailable");
          }
        };

        pubads.addEventListener("rewardedSlotReady", onReady);
        pubads.addEventListener("rewardedSlotGranted", onGranted);
        pubads.addEventListener("rewardedSlotClosed", onClosed);
        pubads.addEventListener("slotRenderEnded", onRenderEnded);

        (slot as { addService?: (service: unknown) => unknown }).addService?.(pubads);
        googletag.display(slot);
        pubads.refresh([slot]);
      } catch {
        finish("unavailable");
      }
    });
  });
}
