"use client";

import { useEffect, useState } from "react";

import { SelfAdCard } from "@/components/SelfAdCard";
import { showRewardedAd } from "@/lib/gam-rewarded";
import { fillTemplate, type Dictionary } from "@/lib/i18n";

const AD_SECONDS = 5;

/**
 * 광고를 보는 동안의 화면. **이용자가 버튼을 누른 뒤에만** 나타난다.
 *
 * 자동으로 뜨는 팝업이 아니라 버튼으로 시작하는 것이 핵심이다. 구글이 금지하는 것은 광고가
 * 뜨는 것 자체가 아니라 **이용자가 고르지 않았는데 콘텐츠를 가리고 뜨는 것**(프리스티셜)이다.
 * 같은 광고, 같은 5초라도 누가 시작했는지로 갈린다. 이 서비스에서는 `DreamForm`의 "해몽
 * 보기"가 그 버튼이다.
 *
 * 닫기 버튼을 두지 않는다. 보상형 광고는 끝까지 봐야 보상이 주어지는 형식이고, 광고 옆에
 * 누를 것을 두면 오클릭이 난다(애드센스 계정 정지 사유다). 남은 시간은 숫자로 보여 준다.
 *
 * **시청 여부를 서버에 남기지 않는다.** 웹 보상형에는 서버 검증(SSV)이 없다 — "Server-side
 * verification is an app only feature and it is unavailable for web use."
 * (support.google.com/admanager/answer/9116812). 그래서 여기서 확인할 수 있는 것은 없고,
 * 새로고침하면 다시 묻는다 — 광고 게이트의 보통 동작이다.
 *
 * naminglink는 같은 한계를 다르게 다룬다. 그쪽은 광고 뒤에 **유료로도 파는 것**(잠긴 후보)이
 * 있어 그냥 두면 결제 우회가 되므로, 증명 대신 **시간**을 서버가 재는 관문 표를 둔다
 * (`apps/naminglink/src/lib/unlock-ticket.ts`). 이쪽 화면 결과는 무료라 아직 그만한 장치를
 * 두지 않았다. 화면 뒤에 파는 것이 생기면 그때는 같은 표가 필요하다.
 */
export function AdWatchOverlay({
  dictionary,
  onDone,
}: {
  dictionary: Dictionary;
  onDone: () => void;
}) {
  const { analyzing } = dictionary;
  const [remaining, setRemaining] = useState(AD_SECONDS);
  // 보상형을 먼저 띄운다. 끝까지 보면 기다림 없이 통과시킨다 — 이미 광고를 봤는데 5초를 더
  // 세워 둘 이유가 없다. 광고가 없거나(no-fill·차단기) 중간에 닫으면 그때부터 5초를 센다
  // (`showRewardedAd` 주석: unavailable은 오류가 아니라 흔한 정상 경로다).
  const [rewardHandled, setRewardHandled] = useState(false);
  // 매번 같은 문구부터 시작하면 두 번째 조회에서는 읽히지 않는다. 이 화면은 버튼을 누른
  // 뒤에만 그려지므로(서버 렌더 없음) 첫 렌더에 난수를 써도 하이드레이션 문제가 없다.
  const [quoteIndex, setQuoteIndex] = useState(() =>
    Math.floor(Math.random() * analyzing.quotes.length),
  );

  // 보상형을 한 번 띄운다. 마운트 직후 딱 한 번이고, 결과가 무엇이든 이 화면은 계속 돈다 —
  // 광고가 뜨지 않는다고 이용자가 막히면 안 된다.
  useEffect(() => {
    let alive = true;
    void showRewardedAd().then((outcome) => {
      if (!alive) return;
      setRewardHandled(true);
      // 끝까지 봤으면 즉시 통과. 닫았거나 광고가 없으면 아래 5초 타이머가 마저 돈다.
      if (outcome === "granted") onDone();
    });
    return () => {
      alive = false;
    };
    // 마운트할 때 한 번만. onDone이 바뀌어도 광고를 다시 띄우면 안 된다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // **보상형 시도가 끝난 뒤에 센다.** 함께 돌리면 15초짜리 광고를 보는 중에 5초가 지나
  // 광고 뒤에서 결과 화면으로 넘어가 버린다. 광고가 없을 때는 `showRewardedAd`가 곧바로
  // `unavailable`을 돌려주므로 기다림이 늘지 않는다.
  useEffect(() => {
    if (!rewardHandled) return;
    const startedAt = Date.now();

    const tick = window.setInterval(() => {
      const elapsed = (Date.now() - startedAt) / 1000;
      setRemaining(Math.max(0, Math.ceil(AD_SECONDS - elapsed)));
    }, 200);

    const done = window.setTimeout(() => onDone(), AD_SECONDS * 1000);

    const rotate = window.setInterval(() => {
      setQuoteIndex((current) => current + 1);
    }, 2400);

    return () => {
      window.clearInterval(tick);
      window.clearInterval(rotate);
      window.clearTimeout(done);
    };
    // 보상형 시도가 끝나는 순간 한 번만 건다. onDone이 바뀌어도 타이머를 다시 시작하면 안 된다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rewardHandled]);

  const progress = ((AD_SECONDS - remaining) / AD_SECONDS) * 100;

  return (
    <div
      role="status"
      aria-live="polite"
      // **보상형이 뜨는 동안에도 이 상자를 감추지 않는다.** 구글 보상형은 자기 오버레이를 더
      // 위에 그리므로 가려질 일이 없고, 미리 감춰 두면 광고가 끝내 안 뜨는 경우(no-fill·차단기)
      // 최대 4초 동안 화면이 텅 빈 채로 남는다.
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d1518]/60 px-5 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="size-3 shrink-0 animate-pulse rounded-full bg-brand-violet"
          />
          <p className="break-keep-all text-sm font-semibold">
            {analyzing.watching}
          </p>
        </div>

        <div
          aria-hidden
          className="mt-4 h-1.5 overflow-hidden rounded-full bg-surface-strong"
        >
          <div
            className="h-full rounded-full bg-brand-violet transition-[width] duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* **이 자리에 애드센스 표시 광고를 두지 않는다.** 예전에는 `analyzing` 슬롯이 있었다.
            두 가지가 겹쳐 정책에 걸린다(naminglink에서 같은 이유로 걷어냈다).

              ① 이 상자는 화면을 덮는 오버레이다(fixed inset-0). 구글은 표시 광고를
                 오버레이·팝업에 싣는 것을 금지한다.
              ② 결과를 보려면 이것을 지나야 한다 — 보상형이다. 애드센스 표시 광고는 콘텐츠
                 해제의 대가로 쓸 수 없고, 보상형은 GAM·AdMob 포맷으로만 허용된다.

            **지금은 GAM 보상형이 이 자리를 맡는다**(`lib/gam-rewarded.ts`). 광고 단위를 넣으면
            이 상자가 뜨는 순간 구글 보상형이 그 위에 뜬다. 여기에 애드센스 배너를 되돌리지 말 것. */}

        {/* 보상형이 안 뜰 때 이 자리를 채운다 — no-fill·차단기, 그리고 지금처럼 광고 단위를
            아직 안 넣은 상태. 관문을 없애거나 기다림을 건너뛰지 않고 **채울 것만 바꾼다.**
            형제 서비스(naming·inyeon·saju)를 보여 준다. */}
        <SelfAdCard dictionary={dictionary} className="mt-5" />

        {/* 높이를 고정해 문구 길이가 바뀔 때 팝업이 들썩이지 않게 한다. */}
        <p className="break-keep-all mt-5 flex min-h-[4.5rem] items-center justify-center text-center text-sm leading-6 text-muted">
          {analyzing.quotes[quoteIndex % analyzing.quotes.length]}
        </p>

        <p className="mt-1 text-center text-xs text-muted">
          {fillTemplate(analyzing.remaining, { seconds: String(remaining) })}
        </p>
      </div>
    </div>
  );
}
