"use client";

import { useEffect, useRef } from "react";

import { adSlotFor, adsAllowedForLocale, adsenseClient, type AdPlacement } from "@/lib/ads";
import { ensureAdsenseLoader } from "@/lib/adsense-loader";
import type { LocaleCode } from "@/lib/locale-codes";
import type { Locale } from "@/lib/services";

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
  /**
   * 이 화면의 언어. **필수다** — 구글 게시자 정책이 지원하지 않는 언어(kk·km·mn·uz)의 화면에는
   * 광고 코드를 실을 수 없고, 그 판정은 **서버가 보내는 HTML에서 이미 갈려 있어야** 한다.
   * 클라이언트에서 지우면 크롤러가 보는 HTML에는 그대로 남는다.
   *
   * 옵셔널로 두면 새 호출부가 빠뜨리고, 빠뜨려도 화면은 멀쩡해 아무도 모른다. 판정은
   * `lib/ads.ts`의 `adsAllowedForLocale` 한 곳에 있다.
   */
  locale: Locale;
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

/**
 * **눈에 보이는 라벨은 「광고」 한 단어여야 한다.**
 *
 * 애드센스는 광고에 라벨을 붙일 경우 **「광고」나 「스폰서 링크」만** 쓰도록 정해 두었다.
 * 그런데 이 컴포넌트는 `label`(서술형)을 **화면낭독기용과 화면용에 동시에** 써 왔다. 그래서
 * 결과 화면에 「한자 추천 결과 상단 배너 광고」가 그대로 찍혔고, 그 문구는 형식에 맞지 않을
 * 뿐 아니라 **광고가 「한자 추천 결과」인 것처럼 읽힌다** — 라벨이 광고를 콘텐츠로 오인하게
 * 만드는 자리다(2026-08-18 운영 화면에서 발견).
 *
 * 서술형은 `aria-label`에만 남긴다. 그 자리에서는 「어떤 자리의 광고인가」가 도움이 되고,
 * 화면에는 보이지 않으므로 정책이 다스리는 대상이 아니다.
 *
 * 지금 광고가 실제로 나가는 로케일은 ko 하나지만(`adsAllowedForLocale`) **표는 23개를 다
 * 채운다.** `Record<LocaleCode, …>`라 하나라도 빠지면 tsc가 잡는다 — 나중에 검수 로케일이
 * 늘어나는 날 라벨만 한국어로 남는 사고를 구조적으로 막는다.
 */
const AD_NOTICE: Record<LocaleCode, string> = {
  ko: "광고",
  en: "Advertisement",
  ja: "広告",
  zh: "广告",
  de: "Werbung",
  es: "Publicidad",
  fr: "Publicité",
  it: "Pubblicità",
  pt: "Publicidade",
  vi: "Quảng cáo",
  th: "โฆษณา",
  id: "Iklan",
  ru: "Реклама",
  ar: "إعلان",
  fil: "Patalastas",
  uz: "Reklama",
  mn: "Сурталчилгаа",
  hi: "विज्ञापन",
  tr: "Reklam",
  km: "ការផ្សាយពាណិជ្ជកម្ម",
  ms: "Iklan",
  kk: "Жарнама",
  pl: "Reklama",
};

export function AdBanner({
  variant = "inline",
  slotKey,
  locale,
  label,
  onFilledChange,
}: AdBannerProps) {
  /**
   * **지원하지 않는 언어의 화면에는 아무것도 그리지 않는다.**
   *
   * 개발용 자리 표시(아래 점선 상자)도 그리지 않는다 — 그 상자에는 `data-ad-*` 속성이 붙어
   * 있어서, 「이 화면에 광고 자리가 있다」는 표시가 HTML에 남는다. 정책이 금지하는 것은
   * 광고가 채워지는 것이 아니라 **광고 코드를 두는 것**이다.
   *
   * **값만 여기서 구하고 반환은 훅 뒤에서 한다.** 훅보다 앞에서 `return`하면 훅 호출 순서가
   * 조건에 따라 달라진다(React 훅 규칙 위반). 처음에 그렇게 썼다가 고쳤다.
   */
  const adsAllowed = adsAllowedForLocale(locale);
  const isHeaderSlot = variant === "header";
  // 입력 화면 자리(`consent_card`)를 걷어내면서 그 자리 전용 크기 분기도 함께 없앴다.
  // 남은 자리는 전부 결과 화면 머리글이다(`lib/ads.ts`).
  const mobileSizes = isHeaderSlot ? "320x100,320x50" : undefined;
  const desktopSizes = isHeaderSlot ? "970x90,728x90" : undefined;
  const heightClass = isHeaderSlot ? "min-h-[100px] lg:min-h-[90px]" : "min-h-20";
  const displayLabel = label ?? labels[variant];
  // 화면에 찍히는 한 단어. 서술형(`displayLabel`)은 aria-label 전용이다.
  const adNotice = AD_NOTICE[locale];

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
  const adFormat = variant === "sidebar" ? "vertical" : "horizontal";
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
/**
   * 모바일 50 → **100**으로 올린다 (2026-08-18).
   *
   * 320×50(표준 배너)은 430px 폭 화면에서 **너무 작다** — 좌우가 비고 세로도 얇아 자리가
   * 있는지도 모르고 지나간다. 100으로 올리면 애드센스가 **320×100(큰 모바일 배너)**을 고를 수
   * 있다. 폭은 그대로 320이지만 존재감이 두 배가 된다.
   *
   * **폭까지 채우려면 `data-full-width-responsive`를 켜야 하는데 그건 아직 안 켠다.** 예전에
   * 켰다가 음수 마진과 고정 폭이 조상 트랙을 벌려 화면이 가로로 넘쳤다(아래 주석). 그때는
   * `!max-w-full`과 `[contain:inline-size]`가 없었고 지금은 있으므로 **다시 시도할 값은
   * 있지만, 실측 전에는 켜지 않는다.**
   */
  const adHeightClass = "!h-[100px] lg:!h-[90px]";

  const slot = adSlotFor(slotKey);
  const pushed = useRef(false);
  const insRef = useRef<HTMLModElement>(null);

  // 애드센스는 소재를 정한 뒤 `<ins>`에 `data-ad-status="filled" | "unfilled"`를 붙인다.
  // 요청 직후에는 없으므로 속성이 붙는 순간을 지켜본다.
  useEffect(() => {
    const element = insRef.current;
    if (!adsAllowed || !slot || !element || !onFilledChange) return;

    const read = () => {
      const status = element.getAttribute("data-ad-status");
      onFilledChange(status === null ? null : status === "filled");
    };
    read();

    const observer = new MutationObserver(read);
    observer.observe(element, { attributes: true, attributeFilter: ["data-ad-status"] });
    return () => observer.disconnect();
  }, [adsAllowed, slot, onFilledChange]);

  useEffect(() => {
    if (!adsAllowed || !slot || pushed.current) return;
    try {
      /**
       * **로더를 여기서 부른다** (2026-08-11). 예전에는 `app/layout.tsx`가 모든 화면에 실었는데,
       * 로더는 혼자서도 자동 광고 자리(앵커·비네트)를 만든다 — 광고 단위를 두지 않은 로그인·
       * 요금 화면에도 광고 자리가 생겨 있었다(실측). 부르는 자리를 **광고 단위가 실제로 그려질
       * 때**로 좁히면 그 자리가 아예 생기지 않는다. 사연은 `lib/adsense-loader.ts`.
       */
      ensureAdsenseLoader();
      // 스크립트가 아직 안 왔어도 밀어 둔 요청은 로드 후 처리된다(배열에 쌓이는 구조).
      const w = window as unknown as { adsbygoogle?: unknown[] };
      (w.adsbygoogle = w.adsbygoogle ?? []).push({});
      pushed.current = true;
    } catch {
      // 광고 로드 실패가 화면을 망가뜨리면 안 된다.
    }
  }, [adsAllowed, slot]);

  if (!adsAllowed) return null;

  if (slot) {
    return (
      <aside aria-label={displayLabel} className="w-full max-w-full overflow-hidden">
        {/* 라벨도 자리 높이에 더해진다. 여백을 8px에서 2px로 줄여 머리글이 화면을 덜 먹게 한다. */}
        <p className="mb-0.5 text-center text-[10px] uppercase tracking-wide text-muted">
          {adNotice}
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
      ) : (
        displayLabel
      )}
    </div>
  );
}
