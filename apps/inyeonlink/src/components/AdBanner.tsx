"use client";

import { useEffect, useRef } from "react";

import { adSlotFor, adsAllowedForLocale, adsenseClient, type AdPlacement } from "@/lib/ads";
import { ensureAdsenseLoader } from "@/lib/adsense-loader";
import { getDictionary, type Locale } from "@/lib/i18n";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * 애드센스 고정형 배너 한 자리. **naming-link의 `AdBanner`와 같은 형태다**(2026-08-18에 맞췄다).
 *
 * 자리를 부르는 곳이 지켜야 할 것:
 *  - **발행한 화면에만 둔다.** 입력·안내·약관·오류·빈 결과에 광고를 실으면 정책 위반이고,
 *    naming-link이 2026-08-10에 그 이유로 반려당했다.
 *  - **버튼과 떨어뜨린다.** 오클릭은 정책 위반이자 계정 정지 사유다.
 */
type AdBannerProps = {
  /** 자리의 모양. `header`는 제목 아래 가로형, `inline`은 본문 중간이다. */
  variant?: "header" | "inline";
  /**
   * **필수다.** 타입이 `string`이 아니라 `AdPlacement`라 `lib/ads.ts`의 표에 없는 이름을 쓰면
   * 컴파일이 깨진다. 예전에 `string`이라 이름이 어긋난 자리들이 슬롯을 못 찾은 채 배포됐다.
   */
  slotKey: AdPlacement;
  /**
   * 이 화면의 언어. **필수다** — 구글 게시자 정책이 지원하지 않는 언어(kk·km·mn·uz)와 사람이
   * 검수하지 않은 언어의 화면에는 광고 코드를 실을 수 없고, 그 판정은 **서버가 보내는 HTML에서
   * 이미 갈려 있어야** 한다. 클라이언트에서 지우면 크롤러가 보는 HTML에는 그대로 남는다.
   */
  locale: Locale;
  /** 화면낭독기용 서술형 설명. 화면에 보이는 글자가 아니다. */
  label?: string;
  className?: string;
};

export function AdBanner({
  variant = "inline",
  slotKey,
  locale,
  label,
  className = "",
}: AdBannerProps) {
  /**
   * **값만 여기서 구하고 반환은 훅 뒤에서 한다.** 훅보다 앞에서 `return`하면 훅 호출 순서가
   * 조건에 따라 달라진다(React 훅 규칙 위반).
   */
  const adsAllowed = adsAllowedForLocale(locale);
  const slot = adSlotFor(slotKey);
  // React 개발 모드는 effect를 두 번 돌린다. 두 번째 push는 "이미 광고가 들어 있다"는 오류가
  // 되므로 이 자리에서 한 번 밀었는지 직접 기억한다.
  const pushed = useRef(false);

  useEffect(() => {
    if (!adsAllowed || !slot || pushed.current) return;
    try {
      /**
       * **로더를 여기서 부른다.** 전역에 두면 로더가 혼자서 자동 광고(앵커·비네트) 자리를
       * 만들어, 광고 단위를 두지 않은 화면까지 광고 화면이 된다. 부르는 자리를 **광고 단위가
       * 실제로 그려질 때**로 좁히면 그 자리가 아예 생기지 않는다. 사연은 `lib/adsense-loader.ts`.
       */
      ensureAdsenseLoader();
      // 스크립트가 아직 안 왔어도 밀어 둔 요청은 로드 후 처리된다(배열에 쌓이는 구조).
      (window.adsbygoogle = window.adsbygoogle ?? []).push({});
      pushed.current = true;
    } catch {
      // 광고 로드 실패가 화면을 망가뜨리면 안 된다. 조용히 넘어간다.
    }
  }, [adsAllowed, slot]);

  /**
   * **실을 수 없는 언어에는 아무것도 그리지 않는다.** 개발용 자리 표시도 그리지 않는다 —
   * 그 상자에는 `data-ad-*`가 붙어 있어 「이 화면에 광고 자리가 있다」는 표시가 HTML에 남는다.
   * 정책이 금지하는 것은 광고가 채워지는 것이 아니라 **광고 코드를 두는 것**이다.
   */
  if (!adsAllowed) return null;

  const dictionary = getDictionary(locale);
  const displayLabel = label ?? dictionary.ads.label;

  if (slot) {
    /**
     * 광고 모양을 자리에 맞춰 **고정한다.** `auto`로 두면 애드센스가 컨테이너에 맞는 아무
     * 크기나 고르는데, 세로로 큰 사각형이 들어오면 머리글이 통째로 밀린다.
     */
    return (
      <aside aria-label={displayLabel} className={`w-full max-w-full overflow-hidden ${className}`}>
        {/**
         * **눈에 보이는 라벨은 「광고」 한 단어여야 한다.** 애드센스는 라벨을 붙일 경우
         * 「광고」나 「스폰서 링크」만 쓰도록 정해 두었다. 서술형(`displayLabel`)을 화면에도
         * 쓰면 광고가 그 콘텐츠인 것처럼 읽힌다 — naming-link에서 실제로 그랬다.
         * `dictionary.ads.label`은 23로케일이 다 채워져 있다(`Dictionary` 타입이 강제한다).
         */}
        <p className="mb-0.5 text-center text-[10px] uppercase tracking-wide text-muted">
          {dictionary.ads.label}
        </p>
        {/**
         * **높이는 이 바깥 상자가 정한다.** 애드센스는 소재가 안 채워지면 `<ins>`에
         * `height: auto !important`를 써 넣는데, 인라인 `!important`는 클래스 `!important`를
         * 이기므로 CSS로 막을 수 없다(naming-link에서 자리가 463px까지 늘어났다). 애드센스는
         * `<ins>`만 건드리므로 바깥 상자는 우리 값을 지킨다.
         */}
        <div className="w-full overflow-hidden !h-[100px] lg:!h-[90px]">
          <ins
            /**
             * `!max-w-full`과 `[contain:inline-size]`가 **둘 다** 있어야 한다. 애드센스는
             * `<ins>`에 인라인 `width`를 써 넣고(456px 등), 그 안에는 소재 크기 그대로의
             * div+iframe을 넣는다. 그 본질 폭이 조상 grid/flex 트랙으로 올라가 화면이 가로로
             * 넘친다 — 바깥의 `overflow-hidden`은 **보이는 것만** 자르고 폭 계산은 못 막는다.
             *
             * **`data-full-width-responsive`는 반드시 꺼 둔다.** 켜면 애드센스가 음수 마진과
             * 고정 폭을 써 넣어 페이지가 가로로 넘친다(naming-link 실측).
             */
            className="adsbygoogle block h-full w-full !max-w-full [contain:inline-size]"
            style={{ display: "block" }}
            data-ad-client={adsenseClient}
            data-ad-slot={slot}
            data-ad-format="horizontal"
            data-full-width-responsive="false"
          />
        </div>
      </aside>
    );
  }

  // 슬롯이 없을 때. **운영에서는 아무것도 그리지 않는다** — `NODE_ENV`는 Next가 빌드 시점에
  // 값으로 박아 넣으므로 이 분기 자체가 운영 번들에서 사라진다.
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div
      data-ad-placement={variant}
      data-ad-slot={slotKey}
      aria-label={displayLabel}
      className={`flex w-full max-w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-line bg-surface-strong px-4 text-center text-xs text-muted !h-[100px] lg:!h-[90px] ${className}`}
    >
      <span className="lg:hidden">{displayLabel} · 모바일 320×100</span>
      <span className="hidden lg:inline">{displayLabel} · PC 970×90 / 728×90</span>
    </div>
  );
}
