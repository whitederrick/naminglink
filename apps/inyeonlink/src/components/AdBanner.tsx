"use client";

import { useEffect, useRef } from "react";

import { adSlotFor, adsenseClient, type AdPlacement } from "@/lib/ads";
import { getDictionary, type Locale } from "@/lib/i18n";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

/**
 * 애드센스 고정형 배너 한 자리.
 *
 * 퍼블리셔 ID나 슬롯 ID가 없으면 **아무것도 렌더링하지 않는다.** 빈 자리를 남기지 않는 이유는
 * 광고가 꺼진 상태(다크 런치)에서 화면에 설명 없는 여백이 생기면 그게 더 이상해 보이기
 * 때문이다.
 *
 * 자리를 부르는 곳이 지켜야 할 것:
 *  - **내용이 있는 화면에만 둔다.** 오류 화면이나 빈 결과에 광고를 실으면 애드센스 정책 위반이다.
 *  - **버튼과 떨어뜨린다.** 오클릭은 정책 위반이자 계정 정지 사유다.
 */
export function AdBanner({
  placement,
  locale,
  className = "",
}: {
  placement: AdPlacement;
  locale: Locale;
  className?: string;
}) {
  const slot = adSlotFor(placement);
  // React 개발 모드는 effect를 두 번 돌린다. 두 번째 push는 "이미 광고가 들어 있다"는 오류가
  // 되므로 이 자리에서 한 번 밀었는지 직접 기억한다.
  const pushed = useRef(false);

  useEffect(() => {
    if (!slot || pushed.current) return;
    // 스크립트가 아직 안 왔어도 push해 둔 요청은 로드 후 처리된다 — 배열에 쌓아 두는 구조다.
    try {
      (window.adsbygoogle = window.adsbygoogle ?? []).push({});
      pushed.current = true;
    } catch {
      // 광고 로드 실패가 화면을 망가뜨리면 안 된다. 조용히 넘어간다.
    }
  }, [slot]);

  // 슬롯이 없으면 운영에서는 아무것도 그리지 않지만, **개발에서는 자리만 표시한다.**
  // 자리가 안 보이면 광고를 켜기 전에는 배치를 판단할 수 없다 — 크기가 맞는지, 버튼과 너무
  // 가깝지는 않은지는 눈으로 봐야 안다.
  //
  // `NODE_ENV`는 Next가 빌드 시점에 값으로 박아 넣는다. 운영 빌드에서는 이 분기 자체가 사라져
  // **자리 표시가 배포에 실려 나갈 수 없다.**
  if (!slot) {
    if (process.env.NODE_ENV === "production") return null;
    return <AdPlaceholder placement={placement} className={className} />;
  }

  const { ads } = getDictionary(locale);

  return (
    <aside
      className={`overflow-hidden ${className}`}
      // 광고임을 보조기기에도 알린다.
      aria-label={ads.label}
    >
      <p className="mb-2 text-center text-xs uppercase tracking-wide text-muted">
        {ads.label}
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={adsenseClient}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}

/**
 * 개발용 자리 표시. 운영 빌드에는 들어가지 않는다.
 *
 * 어느 자리인지와 무엇을 채워야 켜지는지를 함께 적는다 — 자리만 그려 두면 나중에 "이건 왜
 * 비어 있나"를 다시 찾아봐야 한다.
 */
function AdPlaceholder({
  placement,
  className,
}: {
  placement: AdPlacement;
  className: string;
}) {
  const variable = `NEXT_PUBLIC_ADSENSE_SLOT_${placement.toUpperCase()}`;

  return (
    <div
      className={`flex min-h-[72px] flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-line px-3 py-4 text-center ${className}`}
    >
      <span className="text-xs font-semibold text-muted">
        광고 자리 · {placement}
      </span>
      <code className="text-[11px] leading-4 text-muted/80">{variable}</code>
    </div>
  );
}
