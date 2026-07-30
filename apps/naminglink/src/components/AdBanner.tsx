"use client";

import { useEffect, useRef } from "react";

import { adSlotFor, adsenseClient, type AdPlacement } from "@/lib/ads";

// 광고 자리. **슬롯 ID가 있으면 실제 애드센스 유닛을, 없으면 자리 표시만** 그린다.
//
// 자리 표시는 개발에서만 남긴다. 운영에서 슬롯이 비면 아무것도 그리지 않는다 — 빈 상자가
// 이용자에게 보일 이유가 없고, 애드센스 심사에서도 "광고처럼 보이는 빈 자리"는 좋을 것이 없다.
//
// `slotKey`가 광고 자리 이름(`lib/ads.ts`의 adSlots 키)과 이어진다. 이름이 맞지 않으면
// 슬롯을 못 찾아 자리 표시로 떨어지므로, 새 자리를 만들 때 양쪽을 함께 고칠 것.

type AdBannerProps = {
  variant?: "header" | "leaderboard" | "inline" | "sidebar";
  /**
   * **필수다.** 예전에는 선택이라 세 자리가 슬롯 없이 붙어 있었고, 그 자리들은 퍼블리셔 ID를
   * 넣어도 영원히 빈 채로 남았다. 타입도 `string`이 아니라 `AdPlacement`라 `lib/ads.ts`에
   * 없는 이름을 쓰면 컴파일이 깨진다.
   */
  slotKey: AdPlacement;
  label?: string;
  /**
   * 광고가 실제로 채워졌는지 알려준다. `null`은 아직 모른다는 뜻이다(요청 직후).
   *
   * 게이트 자리에서 쓴다 — 애드센스가 못 채우면 셀프 광고로 대신 채우기 위해서다.
   * 여기서는 알려 주기만 하고, 자리를 접거나 크기를 바꾸지는 않는다.
   */
  onFilledChange?: (filled: boolean | null) => void;
};

const labels = {
  header: "상단 배너 광고",
  leaderboard: "가로 배너 광고",
  inline: "콘텐츠 배너 광고",
  sidebar: "사이드 배너 광고",
};

export function AdBanner({
  variant = "inline",
  slotKey,
  label,
  onFilledChange,
}: AdBannerProps) {
  const isHeaderSlot = variant === "header";
  const isConsentSlot = slotKey === "consent_card";
  const mobileSizes = isHeaderSlot
    ? "320x100,320x50"
    : isConsentSlot
      ? "300x100,250x100"
      : undefined;
  const desktopSizes = isHeaderSlot
    ? "970x90,728x90"
    : isConsentSlot
      ? "336x100,300x100"
      : undefined;
  const heightClass =
    isHeaderSlot
      ? "min-h-[100px] lg:min-h-[90px]"
      : isConsentSlot
        ? "min-h-[100px]"
      : "min-h-20";
  const displayLabel = label ?? labels[variant];

  /**
   * 광고 모양을 자리에 맞춰 **고정한다.**
   *
   * `auto`로 두면 애드센스가 컨테이너에 맞는 아무 크기나 고르는데, 우리 자리는 높이 하한
   * (`min-h`)만 있고 상한이 없어 세로로 큰 사각형이 들어와 머리글이 통째로 밀렸다.
   * 콘솔에서 광고 단위를 수평형으로 만들어도 이 속성이 그것을 덮는다.
   *
   * `<ins>`에 실제 높이를 함께 준다 — 애드센스는 요소의 계산된 크기를 보고 소재를 고르므로,
   * 높이가 없으면 format만으로는 크기가 잡히지 않는다.
   */
  const adFormat = isConsentSlot
    ? "rectangle"
    : variant === "sidebar"
      ? "vertical"
      : "horizontal";
  /**
   * 애드센스 표준 크기. 모바일 320×50(표준 배너) · PC 728×90·970×90(리더보드).
   *
   * **`!`(important)가 꼭 있어야 한다.** 애드센스 스크립트는 소재를 고른 뒤 `<ins>`에 인라인
   * `height`를 직접 써 넣는데, 인라인 스타일은 보통 클래스를 이기므로 important가 없으면 우리가
   * 정한 높이가 무시된다.
   *
   * 앞자리 표기(`!h-[50px]`)를 쓴다. 이 프로젝트는 Tailwind v4지만 v4도 이 표기를 그대로
   * 생성한다 — 배포된 CSS에서 `.\!h-\[50px\]{height:50px!important}`를 확인했다.
   *
   * **`data-full-width-responsive`는 반드시 꺼 둔다.** 브라우저에서 실측한 결과, 켜면 애드센스가
   * `<ins>`에 이렇게 써 넣는다.
   *
   *     margin-left: -20px;  width: 456px;  height: auto !important;
   *
   * 광고를 컨테이너 패딩 밖까지 늘리려는 장치인데, **음수 마진과 고정 폭이 조상 grid 트랙을
   * 벌려 페이지가 가로로 넘친다**(456px 뷰포트에서 477px). 게다가 소재가 안 채워지면
   * `height: auto !important`를 써서 위 클래스 important까지 이기고 자리가 463px로 커진다.
   * 인라인 `!important`는 클래스 `!important`를 이기므로 CSS로는 막을 수 없다.
   */
  const adHeightClass = isConsentSlot
    ? "!h-[250px] lg:!h-[280px]"
    : "!h-[50px] lg:!h-[90px]";

  const slot = adSlotFor(slotKey);
  const pushed = useRef(false);
  const insRef = useRef<HTMLModElement>(null);

  // 애드센스는 소재를 정한 뒤 `<ins>`에 `data-ad-status="filled" | "unfilled"`를 붙인다.
  // 요청 직후에는 없으므로 속성이 붙는 순간을 지켜본다.
  useEffect(() => {
    const element = insRef.current;
    if (!slot || !element || !onFilledChange) return;

    const read = () => {
      const status = element.getAttribute("data-ad-status");
      onFilledChange(status === null ? null : status === "filled");
    };
    read();

    const observer = new MutationObserver(read);
    observer.observe(element, { attributes: true, attributeFilter: ["data-ad-status"] });
    return () => observer.disconnect();
  }, [slot, onFilledChange]);

  useEffect(() => {
    if (!slot || pushed.current) return;
    try {
      // 스크립트가 아직 안 왔어도 밀어 둔 요청은 로드 후 처리된다(배열에 쌓이는 구조).
      const w = window as unknown as { adsbygoogle?: unknown[] };
      (w.adsbygoogle = w.adsbygoogle ?? []).push({});
      pushed.current = true;
    } catch {
      // 광고 로드 실패가 화면을 망가뜨리면 안 된다.
    }
  }, [slot]);

  if (slot) {
    return (
      <aside aria-label={displayLabel} className="w-full max-w-full overflow-hidden">
        {/* 라벨도 자리 높이에 더해진다. 여백을 8px에서 2px로 줄여 머리글이 화면을 덜 먹게 한다. */}
        <p className="mb-0.5 text-center text-[10px] uppercase tracking-wide text-muted">
          {displayLabel}
        </p>
        {/* **높이는 이 바깥 상자가 정한다.** 애드센스는 소재가 안 채워지면 `<ins>`에
            `height: auto !important`를 써 넣는데, 인라인 `!important`는 클래스 `!important`를
            이기므로 CSS로 막을 수 없다. 실제로 머리글 자리가 463px까지 늘어나 화면이 통째로
            빈 공간이 됐다(실측). 애드센스는 `<ins>`만 건드리므로 바깥 상자는 우리 값을 지킨다.
            자리를 늘 같은 높이로 잡아 두면 광고가 채워지든 아니든 화면이 흔들리지 않는다. */}
        <div className={`w-full overflow-hidden ${adHeightClass}`}>
          <ins
            ref={insRef}
            // `!max-w-full`이 없으면 안 된다. 애드센스는 `<ins>`에 인라인 `width`를 직접 써
            // 넣는데(456px 등), 그 폭이 조상 grid/flex 트랙을 밀어내 화면이 오른쪽으로 넘친다.
            //
            // **`[contain:inline-size]`도 함께 있어야 한다.** `!max-w-full`은 `<ins>` 자신의
            // 폭만 막고, **그 안쪽에서 새는 것은 못 막는다.** 애드센스는 `<ins>` 안에 소재
            // 크기 그대로의 div+iframe을 넣는데(실측 831px), 그 본질 폭(min-content)이 조상으로
            // 올라가 헤더·섹션·폼이 전부 그 폭이 된다. 바깥 상자의 `overflow-hidden`은 **보이는
            // 것만** 자르고 폭 계산은 막지 못한다.
            //
            // 실측(뷰포트 395, 운영, 광고 로드된 상태):
            //   처방 전  문서 457 · 헤더 437 · 광고상자 437×50   ← 오른쪽이 잘리고 좌우로 밀림
            //   처방 후  문서 395 · 헤더 355 · 광고상자 355×50   ← 높이는 그대로, 폭만 정상화
            //
            // `contain: inline-size`는 "가로 크기를 내용과 무관하게 정한다"는 뜻뿐이다. 이
            // `<ins>`는 이미 `w-full`이라 폭이 부모에서 오므로 **그려지는 크기는 바뀌지 않는다.**
            className="adsbygoogle block h-full w-full !max-w-full [contain:inline-size]"
            style={{ display: "block" }}
            data-ad-client={adsenseClient}
            data-ad-slot={slot}
            data-ad-format={adFormat}
            data-full-width-responsive="false"
          />
        </div>
      </aside>
    );
  }

  // 슬롯이 없을 때. 운영에서는 아무것도 그리지 않는다.
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div
      data-ad-placement={variant}
      data-ad-slot={slotKey}
      data-ad-sizes-mobile={mobileSizes}
      data-ad-sizes-desktop={desktopSizes}
      data-ad-responsive={mobileSizes && desktopSizes ? "true" : undefined}
      aria-label={displayLabel}
      className={`flex w-full max-w-full items-center justify-center overflow-hidden rounded-lg border border-dashed border-line bg-surface-strong px-4 text-center text-xs text-muted ${heightClass}`}
    >
      {isHeaderSlot ? (
        <>
          <span className="lg:hidden">{displayLabel} · 모바일 320×100 / 320×50</span>
          <span className="hidden lg:inline">{displayLabel} · PC 970×90 / 728×90</span>
        </>
      ) : isConsentSlot ? (
        <>
          <span className="lg:hidden">{displayLabel} · 모바일 300×100 / 250×100</span>
          <span className="hidden lg:inline">{displayLabel} · PC 336×100 / 300×100</span>
        </>
      ) : (
        displayLabel
      )}
    </div>
  );
}
