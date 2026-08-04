"use client";

import { useEffect, useState } from "react";

import { GuideLink } from "@/components/GuideLink";
import { trackAnalytics } from "@/lib/analytics-client";
import type { Dictionary, Locale } from "@/lib/i18n";
import type { PublicSajuOutcome } from "@/lib/public-outcome";
import { decodeSajuInput, type SajuInput } from "@/lib/saju-input";
import { useResultFragment } from "@/lib/use-result-fragment";

/**
 * 사주 결과 — 원국 + 오행 + 오늘의 운세.
 *
 * 입력값은 **프래그먼트(#)에만 있다.** 서버 컴포넌트는 그것을 볼 수 없으므로(브라우저가
 * 서버로 보내지 않는다) 여기서 읽어 POST로 계산을 요청한다. 인연링크 결과 화면과 같은 구조다.
 */

type State =
  | { status: "loading" }
  | { status: "ready"; outcome: PublicSajuOutcome; input: SajuInput; fragment: string }
  | { status: "error"; message: string; fragment: string };

export function SajuResultView({
  dictionary,
  locale,
  offerPrice,
}: {
  dictionary: Dictionary;
  locale: Locale;
  /** 서버가 `product_settings`에서 읽어 내려보낸 표시 가격. 판매 전이면 null이다. */
  offerPrice: string | null;
}) {
  const t = dictionary.result;
  const r = dictionary.reading;
  const d = dictionary.today;
  const resolvedFragment = useResultFragment();
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    if (resolvedFragment === null) return;
    const fragment = resolvedFragment;
    let cancelled = false;

    // 프래그먼트 해석 실패도 예외로 던져 한 갈래로 모은다. effect 안에서 setState를 동기로
    // 호출하면 렌더가 연쇄로 도는데, .catch는 마이크로태스크라 그 문제가 없다.
    async function resolve() {
      const input = decodeSajuInput(fragment);
      if (!input) throw new Error("MISSING_INPUT");

      const response = await fetch("/api/saju", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => null);
        throw new Error(body?.error ?? "UNKNOWN");
      }
      return { outcome: (await response.json()) as PublicSajuOutcome, input };
    }

    resolve()
      .then(({ outcome, input }) => {
        if (cancelled) return;
        setState({ status: "ready", outcome, input, fragment });
        // 분석 완료. 입력값은 싣지 않는다 — 메뉴 구분과 경로뿐이다.
        trackAnalytics({ eventType: "ANALYSIS_COMPLETED", serviceType: "SAJU_READING", locale });
      })
      .catch((cause: Error) => {
        if (cancelled) return;
        setState({ status: "error", message: errorMessage(cause.message), fragment });
        // **실패도 남긴다.** 완료만 세면 완료율이 항상 100%로 보이고, 입력 형식 문제나 엔진
        // 오류가 늘어도 화면에서는 아무 일도 일어나지 않는 것처럼 보인다.
        trackAnalytics({ eventType: "ANALYSIS_FAILED", serviceType: "SAJU_READING", locale });
      });

    function errorMessage(code: string) {
      if (code === "MISSING_INPUT") return t.missingInput;
      if (code === "UNCALCULABLE_DATE" || code === "INVALID_INPUT") {
        return dictionary.form.errorInvalidDate;
      }
      return dictionary.form.errorGeneric;
    }

    return () => {
      cancelled = true;
    };
  }, [resolvedFragment, dictionary, locale, t]);

  if (state.status === "loading") {
    return <p className="mt-10 text-center text-muted">{t.title}</p>;
  }

  if (state.status === "error") {
    return (
      <p role="alert" className="mt-10 break-keep-all text-center text-brand-plum">
        {state.message}
      </p>
    );
  }

  const { reading, today } = state.outcome;

  return (
    <div className="mt-10 space-y-10">
      {/* 사주 원국 — 네 기둥. 시각을 모르면 시주가 없다. */}
      <section className="rounded-2xl border border-line/70 bg-surface/80 p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-brand-plum">{r.chartTitle}</h2>
        <div className="mt-3 grid grid-cols-4 gap-2 text-center">
          {[reading.pillars.year, reading.pillars.month, reading.pillars.day, reading.pillars.hour].map(
            (pillar, index) => (
              <div key={index} className="rounded-xl border border-line/60 bg-surface px-2 py-3">
                <div className="text-2xl font-semibold">{pillar?.hanja ?? "—"}</div>
                <div className="mt-1 text-xs text-muted">{pillar?.hangul ?? ""}</div>
              </div>
            ),
          )}
        </div>
        <p className="break-keep-all mt-3 text-xs leading-6 text-muted">{r.chartHint}</p>
      </section>

      {/* 오늘의 운세 — 이 화면의 리텐션 훅이다. 점수·등급·카테고리를 함께 보여 준다.
          **엔진 값은 전부 열거값이다.** 그대로 그리면 `DAEGIL`·`wealth`·`WOOD`가 화면에 뜬다.
          사람이 읽을 말은 전부 사전(`today`·`elements`)에 있고 여기서는 이름만 건다. */}
      <section className="rounded-2xl border border-brand-plum/25 bg-surface-strong p-5">
        <h2 className="text-sm font-semibold text-brand-plum">{d.title}</h2>
        <p className="mt-1 text-xs text-muted">
          {today.date} · {d.pillarLabel} {today.todayPillar.stem}
          {today.todayPillar.branch}
        </p>
        <p className="mt-3 text-4xl font-semibold tabular-nums">{today.score}</p>
        <p className="mt-1 text-sm font-semibold text-brand-plum">
          {d.grades[today.grade].name}
        </p>
        <p className="break-keep-all mt-1 text-xs leading-6 text-muted">
          {d.grades[today.grade].body}
        </p>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
          {(Object.keys(today.categories) as Array<keyof typeof today.categories>).map((key) => (
            <div key={key} className="rounded-lg border border-line/60 bg-surface px-3 py-2">
              <dt className="text-xs text-muted">{d.categories[key]}</dt>
              <dd className="mt-0.5 font-semibold tabular-nums">{today.categories[key]}</dd>
            </div>
          ))}
        </dl>

        {/* 행운 요소. 색과 방위는 엔진이 한국어·영어 두 벌로 들고 있다 — 나머지 로케일은
            영어 쪽을 쓴다(사전에 옮기면 오행마다 23벌이라 엔진 값을 그대로 쓰는 편이 맞다). */}
        <h3 className="mt-5 text-xs font-semibold text-brand-plum">{d.luckyTitle}</h3>
        <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs leading-6 sm:grid-cols-3">
          <div className="flex gap-2">
            <dt className="text-muted">{d.luckyElement}</dt>
            <dd>{dictionary.elements[today.lucky.element]}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted">{d.luckyColor}</dt>
            <dd>{(locale === "ko" ? today.lucky.colorsKo : today.lucky.colorsEn).join(", ")}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted">{d.luckyDirection}</dt>
            <dd>{locale === "ko" ? today.lucky.directionKo : today.lucky.directionEn}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted">{d.luckyTime}</dt>
            <dd>{today.lucky.timeRange}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted">{d.luckyNumber}</dt>
            <dd className="tabular-nums">{today.lucky.numbers.join(", ")}</dd>
          </div>
        </dl>

        {/* 점수의 근거. 엔진은 항목(`Factor.key`)만 주고 문장은 사전이 갖는다. 사전 쪽이
            열거로 닫혀 있어 엔진에 항목이 늘면 컴파일에서 걸린다. */}
        <h3 className="mt-5 text-xs font-semibold text-brand-plum">{d.basisTitle}</h3>
        <ul className="mt-2 space-y-1 text-xs leading-6 text-muted">
          {today.factors.map((factor) => (
            <li key={factor.key} className="break-keep-all flex justify-between gap-3">
              <span>{d.factors[factor.key as keyof typeof d.factors] ?? factor.key}</span>
              <span className="shrink-0 tabular-nums">
                {factor.delta > 0 ? `+${factor.delta}` : factor.delta}
              </span>
            </li>
          ))}
        </ul>

        <p className="break-keep-all mt-4 text-xs leading-6 text-muted">{d.bookmarkHint}</p>
      </section>

      {/* 오행 세력. 무료로 보여 주는 몫이고, 근거 숫자(allyRatio·왕상휴수사)는 리포트에만 있다. */}
      <section className="rounded-2xl border border-line/70 bg-surface/80 p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-brand-plum">{r.elementsTitle}</h2>
        <dl className="mt-3 grid grid-cols-5 gap-2 text-center text-sm">
          {(Object.keys(reading.elements) as Array<keyof typeof reading.elements>).map((element) => (
            <div key={element} className="rounded-lg border border-line/60 bg-surface px-2 py-2">
              <dt className="text-xs text-muted">{dictionary.elements[element]}</dt>
              <dd className="mt-0.5 font-semibold tabular-nums">
                {reading.elements[element].toFixed(1)}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 유료 리포트 자리. 상품이 아직 안 켜져 있으면 가격이 null이라 "준비 중"으로 뜬다. */}
      {offerPrice ? (
        <p className="text-center text-sm text-muted">{offerPrice}</p>
      ) : null}

      <GuideLink locale={locale} from="reading" className="mt-12" />
    </div>
  );
}
