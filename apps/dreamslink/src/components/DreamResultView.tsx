"use client";

import { useEffect, useState } from "react";

import { trackAnalytics } from "@/lib/analytics-client";
import { decodeDreamInput, type DreamInput } from "@/lib/dream-input";
import type { DreamOutcome } from "@/lib/engines/dream-match";
import type { Dictionary, Locale } from "@/lib/i18n";
import { decodeFragment, useResultFragment } from "@/lib/use-result-fragment";

/**
 * 해몽 결과.
 *
 * 입력은 프래그먼트에만 있고 서버 컴포넌트는 그것을 볼 수 없다(브라우저가 서버로 보내지
 * 않는다). 그래서 여기서 읽어 POST로 계산을 요청한다 — 꿈 이야기가 접속 로그에 남지 않게 하려는
 * 것이고, 이 서비스가 입력을 저장하지 않는다는 원칙이 결과 화면에서도 유지되는 이유다.
 */

type State =
  | { status: "loading" }
  | { status: "ready"; outcome: DreamOutcome; input: DreamInput }
  | { status: "error"; message: string };

export function DreamResultView({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const t = dictionary.dream;
  const resolvedFragment = useResultFragment();
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    if (resolvedFragment === null) return;
    let cancelled = false;

    // 프래그먼트 해석 실패도 예외로 던져 한 갈래로 모은다. effect 안에서 setState를 동기로
    // 호출하면 렌더가 연쇄로 도는데, .catch는 마이크로태스크라 그 문제가 없다.
    async function resolve() {
      const decoded = decodeFragment(resolvedFragment as string);
      const input = decoded ? decodeDreamInput(decoded) : null;
      if (!input) throw new Error("MISSING_INPUT");

      const response = await fetch("/api/dream", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!response.ok) throw new Error("UNKNOWN");
      const body = (await response.json()) as { outcome: DreamOutcome };
      return { outcome: body.outcome, input };
    }

    resolve()
      .then(({ outcome, input }) => {
        if (cancelled) return;
        setState({ status: "ready", outcome, input });
        void trackAnalytics({
          eventType: "ANALYSIS_COMPLETED",
          serviceType: "DREAM_READING",
          locale,
        });
      })
      .catch(() => {
        if (cancelled) return;
        setState({ status: "error", message: t.errorGeneric });
        // **실패도 남긴다.** 완료만 세면 완료율이 늘 100%로 보인다.
        void trackAnalytics({
          eventType: "ANALYSIS_FAILED",
          serviceType: "DREAM_READING",
          locale,
        });
      });

    return () => {
      cancelled = true;
    };
  }, [resolvedFragment, locale, t.errorGeneric]);

  if (state.status === "loading") {
    return <p className="text-sm text-muted">{t.submitting}</p>;
  }
  if (state.status === "error") {
    return (
      <p role="alert" className="text-sm text-red-600">
        {state.message}
      </p>
    );
  }

  const { outcome, input } = state;

  return (
    <div className="grid gap-6">
      <section className="rounded-2xl border border-line bg-surface p-6">
        <p className="break-keep-all text-sm leading-6 text-muted">{input.text}</p>
      </section>

      {/* **태몽은 표시일 뿐 판정이 아니다.** 문구가 여기서 한 걸음 더 나가면 의학적 단정이 된다. */}
      {outcome.conception ? (
        <p className="break-keep-all rounded-xl border border-line bg-background p-4 text-sm leading-6">
          {t.conceptionNotice}
        </p>
      ) : null}

      <section>
        <h2 className="mb-3 text-lg font-semibold">{t.symbolsHeading}</h2>
        {outcome.matched.length ? (
          <div className="grid gap-3">
            {outcome.matched.map((item) => (
              <div key={item.id} className="rounded-xl border border-line bg-surface p-4">
                <p className="font-semibold">{item.term}</p>
                <p className="break-keep-all mt-1 text-sm leading-6 text-muted">
                  {item.meaning.interpretation_ko}
                </p>
                {item.culture_note ? (
                  <p className="break-keep-all mt-1 text-xs leading-5 text-muted">
                    {item.culture_note}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          // 매칭 0건은 정상 결과다. 여기서 무언가를 만들면 그때부터 날조가 시작된다.
          <p className="break-keep-all text-sm leading-6 text-muted">{t.noSymbols}</p>
        )}
      </section>

      {outcome.themes.length ? (
        <section>
          <h2 className="mb-2 text-lg font-semibold">{t.themesHeading}</h2>
          <p className="text-sm text-muted">{outcome.themes.join(" · ")}</p>
        </section>
      ) : null}

      <p className="break-keep-all text-xs leading-5 text-muted">{t.disclaimer}</p>
    </div>
  );
}
