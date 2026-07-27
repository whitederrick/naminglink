"use client";

import { useEffect, useState } from "react";

import { AdBanner } from "@/components/AdBanner";
import { fillTemplate, type Dictionary, type Locale } from "@/lib/i18n";

/**
 * "광고 보고 결과 보기" — 이용자가 **눌러야** 광고가 뜨는 보상형 게이트.
 *
 * 자동으로 뜨는 팝업이 아니라 버튼으로 시작하는 것이 핵심이다. 구글이 금지하는 것은 광고가
 * 뜨는 것 자체가 아니라 **이용자가 고르지 않았는데 콘텐츠를 가리고 뜨는 것**(프리스티셜)이다.
 * 같은 광고, 같은 5초라도 누가 시작했는지로 갈린다. naminglink의 후보 공개도 같은 방식이다.
 *
 * 시청 여부를 서버에 남기지 않는다. 웹 보상형 광고는 서버 검증 자체가 불가능하고
 * ("Server-side verification is an app only feature" — 구글 문서), 이 서비스는 입력을
 * 저장하지 않으므로 남길 곳도 없다. 새로고침하면 다시 묻는다 — 광고 게이트의 보통 동작이다.
 */
const AD_SECONDS = 5;

export function AdRewardGate({
  dictionary,
  locale,
  onReward,
}: {
  dictionary: Dictionary;
  locale: Locale;
  /** 시청이 끝나 결과를 열어도 될 때. */
  onReward: () => void;
}) {
  const { analyzing } = dictionary;
  const [watching, setWatching] = useState(false);

  if (!watching) {
    return (
      <section className="mt-10 rounded-2xl border border-line bg-surface p-6 text-center shadow-sm">
        <h2 className="break-keep-all text-lg font-semibold">
          {analyzing.gateTitle}
        </h2>
        <p className="break-keep-all mx-auto mt-2 max-w-md text-sm leading-6 text-muted">
          {analyzing.gateBody}
        </p>
        <button
          type="button"
          onClick={() => setWatching(true)}
          className="mt-6 rounded-full bg-brand-plum px-8 py-3.5 font-semibold text-white transition hover:opacity-90"
        >
          {analyzing.watchButton}
        </button>
      </section>
    );
  }

  return <AdWatchOverlay dictionary={dictionary} locale={locale} onDone={onReward} />;
}

/**
 * 광고를 보는 동안의 화면. 버튼을 누른 뒤에만 나타난다.
 *
 * 닫기 버튼을 두지 않는다. 보상형 광고는 끝까지 봐야 보상이 주어지는 형식이고, 광고 옆에
 * 누를 것을 두면 오클릭이 난다(애드센스 계정 정지 사유다). 남은 시간은 숫자로 보여 준다.
 */
function AdWatchOverlay({
  dictionary,
  locale,
  onDone,
}: {
  dictionary: Dictionary;
  locale: Locale;
  onDone: () => void;
}) {
  const { analyzing } = dictionary;
  const [remaining, setRemaining] = useState(AD_SECONDS);
  // 매번 같은 문구부터 시작하면 두 번째 조회에서는 읽히지 않는다. 이 화면은 버튼을 누른
  // 뒤에만 그려지므로(서버 렌더 없음) 첫 렌더에 난수를 써도 하이드레이션 문제가 없다.
  const [quoteIndex, setQuoteIndex] = useState(() =>
    Math.floor(Math.random() * analyzing.quotes.length),
  );

  useEffect(() => {
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
    // 마운트할 때 한 번만 건다. onDone이 바뀌어도 타이머를 다시 시작하면 안 된다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const progress = ((AD_SECONDS - remaining) / AD_SECONDS) * 100;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d1518]/60 px-5 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="size-3 shrink-0 animate-pulse rounded-full bg-brand-plum"
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
            className="h-full rounded-full bg-brand-plum transition-[width] duration-200 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* 광고가 꺼져 있으면(퍼블리셔 ID 미등록) AdBanner가 아무것도 그리지 않는다. */}
        <AdBanner placement="analyzing" locale={locale} className="mt-5" />

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
