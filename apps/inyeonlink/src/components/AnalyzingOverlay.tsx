"use client";

import { useEffect, useState } from "react";

import { AdBanner } from "@/components/AdBanner";
import type { Dictionary, Locale } from "@/lib/i18n";

/**
 * 계산 중 띄우는 팝업. 광고 한 자리와, 그 아래에서 하나씩 바뀌는 궁합 문구.
 *
 * 궁합 계산 자체는 규칙 기반이라 0.1초면 끝난다. 그대로 두면 팝업이 깜빡이고 광고는 뜰 새도
 * 없으므로 결과를 잠시 붙잡아 둔다(호출부의 MINIMUM_ANALYZING_MS). 기다리는 시간을 빈 화면으로
 * 두지 않으려고 문구를 함께 싣는 것이다.
 *
 * 닫기 버튼을 두지 않는다. 잠깐 뒤 스스로 사라지는 진행 표시이지 이용자가 처리해야 할 창이
 * 아니고, 광고 옆에 누를 것을 두면 오클릭이 난다(애드센스 계정 정지 사유다).
 */
export function AnalyzingOverlay({
  dictionary,
  locale,
  durationMs,
}: {
  dictionary: Dictionary;
  locale: Locale;
  /** 진행 막대를 채우는 데 쓰는 예상 시간. */
  durationMs: number;
}) {
  const { analyzing } = dictionary;

  const [index, setIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    // 매번 같은 문구부터 시작하면 두 번째 조회부터는 읽히지 않는다. 그래서 시작 지점을
    // 무작위로 잡되 **첫 렌더에서는 잡지 않는다.** 이 팝업은 서버에서도 그려지므로 첫 렌더에
    // 난수를 쓰면 서버와 클라이언트가 다른 문구를 내놓아 하이드레이션이 어긋난다.
    // 0ms 뒤로 미뤄 하이드레이션이 끝난 다음에 옮긴다.
    const seedTimer = window.setTimeout(() => {
      setIndex(Math.floor(Math.random() * analyzing.quotes.length));
    }, 0);

    const quoteTimer = window.setInterval(() => {
      setIndex((current) => current + 1);
    }, 2600);
    // 진행 막대는 100ms마다 조금씩 채운다. 실제 계산 진행률이 아니라 남은 시간의 표시다 —
    // 계산은 이미 끝났을 수도 있어서 진행률이라고 말하지 않는다.
    const tickTimer = window.setInterval(() => {
      setElapsed((current) => current + 100);
    }, 100);
    return () => {
      window.clearTimeout(seedTimer);
      window.clearInterval(quoteTimer);
      window.clearInterval(tickTimer);
    };
  }, [analyzing.quotes.length]);

  const progress = Math.min(100, (elapsed / durationMs) * 100);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1d1518]/55 px-5 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl border border-line bg-surface p-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="size-3 shrink-0 animate-pulse rounded-full bg-brand-plum"
          />
          <p className="break-keep-all text-sm font-semibold">{analyzing.title}</p>
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

        {/* 광고가 꺼져 있으면(퍼블리셔 ID 미등록) AdBanner가 아무것도 그리지 않는다.
            그때도 팝업은 문구와 진행 막대만으로 성립한다. */}
        <AdBanner placement="analyzing" locale={locale} className="mt-5" />

        {/* 높이를 고정해 문구 길이가 바뀔 때 팝업이 들썩이지 않게 한다. */}
        <p className="break-keep-all mt-5 flex min-h-[4.5rem] items-center justify-center text-center text-sm leading-6 text-muted">
          {analyzing.quotes[index % analyzing.quotes.length]}
        </p>
      </div>
    </div>
  );
}
