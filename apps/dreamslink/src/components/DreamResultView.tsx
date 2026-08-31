"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { AdBanner } from "@/components/AdBanner";
import { ReportPurchasePanel } from "@/components/ReportPurchasePanel";
import { trackAnalytics } from "@/lib/analytics-client";
import {
  citeLines,
  meaningText,
  meaningWorkLabel,
  readingLanguage,
  symbolTerm,
  themeLabels,
} from "@/lib/dream-language";
import { meaningWork } from "@/lib/dream-symbols";
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
  cardPrice,
  conceptionPrice,
  popularSymbols,
  symbolsHref,
}: {
  dictionary: Dictionary;
  locale: Locale;
  /** 서버가 정한 표시 가격. 판매 전이면 null이라 패널이 "준비 중"으로 뜬다. */
  cardPrice: string | null;
  conceptionPrice: string | null;
  /**
   * 상징을 못 찾았을 때 보여 줄 대표 상징들.
   *
   * **서버가 골라 넘긴다.** 이 컴포넌트는 클라이언트라, 여기서 사전을 불러 고르면 상징
   * 215개짜리 JSON이 통째로 브라우저로 내려간다. 필요한 것은 이름과 주소 몇 개뿐이다.
   */
  popularSymbols: Array<{ term: string; href: string }>;
  symbolsHref: string;
}) {
  const t = dictionary.dream;
  // 화면 언어는 23개지만 **해몽 내용은 ko·en 두 벌뿐**이다(사전이 그렇게 생겼다).
  const language = readingLanguage(locale);
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
        // **사전 갭 계측.** 상징 id는 216개 닫힌 목록의 분류값이지 꿈 원문이 아니다(자세한
        // 근거는 `analytics-client.ts` 머리말). `contextMatchedCount`가 `matchedCount`보다
        // 작을수록 "대표 의미로만 떨어진" 상징이 많았다는 뜻 — 다음에 문맥을 넓힐 우선순위를
        // 감이 아니라 이 숫자로 정한다.
        void trackAnalytics({
          eventType: "ANALYSIS_COMPLETED",
          serviceType: "DREAM_READING",
          locale,
          metadata: {
            matchedCount: outcome.matched.length,
            matchedIds: outcome.matched.map((item) => item.id).join(","),
            contextMatchedCount: outcome.matched.filter((item) => item.contextMatched).length,
          },
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
  // 표에 없는 태그는 빠지므로, 걸린 태그가 있어도 목록이 빌 수 있다. 그때는 절 자체를 감춘다.
  const themes = themeLabels(outcome.themes, language);

  return (
    // `mt-10`은 사주링크 `SajuResultView`와 같은 값이다. 없으면 첫 카드가 제목에 붙는다.
    <div className="mt-10 grid gap-6">
      <section className="rounded-2xl border border-line bg-surface p-5">
        <p className="break-keep-all text-sm leading-6 text-muted">{input.text}</p>
      </section>

      {/* **태몽은 표시일 뿐 판정이 아니다.** 문구가 여기서 한 걸음 더 나가면 의학적 단정이 된다. */}
      {outcome.conception ? (
        <p className="break-keep-all rounded-xl border border-line bg-background p-5 text-sm leading-6">
          {t.conceptionNotice}
        </p>
      ) : null}

      <section>
        <h2 className="mb-3 text-lg font-semibold">{t.symbolsHeading}</h2>
        {outcome.matched.length ? (
          <div className="grid gap-3">
            {outcome.matched.map((item) => (
              <div key={item.id} className="rounded-xl border border-line bg-surface p-5">
                {/* **한국어를 박아 두지 말 것.** 예전에는 `item.term`(= term_ko)과
                    `interpretation_ko`를 그대로 그려, 스물세 언어 전부에서 상징 이름과 풀이가
                    한국어로 나갔다. 고르는 규칙은 `lib/dream-language.ts` 한 곳에 있다. */}
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <p className="font-semibold">{symbolTerm(item, language)}</p>
                  {/* **어느 원문의 말인지 언제나 밝힌다**(2026-08-31).
                      옛 화면은 "일반 해석"에만 라벨을 붙이고 전통은 무표시로 뒀는데, 그때는
                      출처가 한 갈래(전통)뿐이었기 때문이다. 지금은 두 원문(주공해몽·밀러)이
                      섞여 있고 **같은 상징을 정반대로 읽는 자리도 있다** — 무표시로 두면
                      이용자가 어느 전통의 말인지 알 방법이 없다. */}
                  {meaningWork(item.meaning) ? (
                    <span className="rounded-full border border-line bg-surface-strong px-2 py-0.5 text-[11px] font-semibold text-muted">
                      {meaningWorkLabel(meaningWork(item.meaning)!, language)}
                    </span>
                  ) : null}
                </div>
                <p className="break-keep-all mt-1 text-sm leading-6 text-muted">
                  {meaningText(item.meaning, language)}
                </p>
                {/* 인용 원문 한 줄. **근거를 화면에서 확인할 수 있어야 한다**(§21) —
                    옛 사전은 근거가 없는 것에도 「전통」 라벨이 붙어 있었고, 이용자는 그것을
                    확인할 방법이 없었다. 결과 화면은 좁으므로 첫 인용만 보이고 나머지는
                    상징 페이지에서 본다. */}
                {item.meaning.cites?.[0] ? (
                  <p className="break-keep-all mt-2 text-xs leading-5 text-muted opacity-80">
                    {citeLines(item.meaning.cites[0], language).translation ??
                      item.meaning.cites[0].original}
                  </p>
                ) : null}
              </div>
            ))}
          </div>
        ) : (
          // 매칭 0건은 정상 결과다. 여기서 무언가를 만들면 그때부터 날조가 시작된다.
          //
          // **다만 막다른 길로 두지는 않는다.** 예전에는 이 문구 하나로 끝났고, 이용자는 거기서
          // 나갔다 — 서비스도 광고도 함께 끝났다. 지어내지 않으면서 다음 걸음을 주는 길은
          // **사전 안으로 들여보내는 것**이다. 찾던 상징을 직접 찾을 수 있고, 그 페이지가
          // 광고를 싣는다.
          <div className="rounded-2xl border border-line bg-surface p-5">
            <p className="break-keep-all text-sm leading-6 text-muted">{t.noSymbols}</p>
            {popularSymbols.length ? (
              <>
                <p className="mt-4 text-xs font-semibold text-muted">{t.popularSymbols}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {popularSymbols.map((symbol) => (
                    <Link
                      key={symbol.href}
                      href={symbol.href}
                      className="rounded-full border border-line bg-background px-3.5 py-1.5 text-sm font-semibold transition hover:border-brand-violet hover:text-brand-violet"
                    >
                      {symbol.term}
                    </Link>
                  ))}
                </div>
              </>
            ) : null}
            <Link
              href={symbolsHref}
              className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-brand-violet px-4 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              {t.browseSymbols}
            </Link>
          </div>
        )}
      </section>

      {themes.length ? (
        <section>
          <h2 className="mb-2 text-lg font-semibold">{t.themesHeading}</h2>
          <p className="text-sm text-muted">{themes.join(" · ")}</p>
        </section>
      ) : null}

      {/* 중간 배너. 읽을 것이 끝난 자리가 아니라 **읽는 도중**의 섹션 경계에 둔다 — 사주링크
          `SajuResultView`와 같은 자리(상징 다 읽은 뒤, 파는 자리 전)다. 예전에는 이 배너가
          꿈카드·태몽 리포트 패널보다 **아래**에 있어 "꿈카드로 간직하기" 버튼 밑에 묻혀
          있었다(2026-08-26 사용자 지적) — 위아래로 버튼이 없는 자리로 옮긴다. */}
      <AdBanner
        variant="inline"
        slotKey="dream_result_inline"
        locale={locale}
        className="mb-6 mt-6"
      />

      {/* 파는 자리. **결과를 다 읽은 뒤, 광고 다음**이다 — 파는 것이 먼저다.
          예전에는 `ReportPurchasePanel`이 만들어져 있는데 **어디에서도 부르지 않았다.**
          상품을 켜는 날 구매로 가는 길이 없는 상태였다(사주링크가 같은 자리를 고쳤다).

          **상징을 하나도 못 찾았으면 팔지 않는다.** 카드에 담을 것이 "찾지 못했습니다"
          한 줄뿐이라, 그 상태로 파는 것은 빈 것을 파는 것이다. 무료 화면이 정직하게 비워
          두고서 그 옆에서 결제를 권하면 그 정직함이 미끼가 된다. */}
      {outcome.matched.length ? (
        <ReportPurchasePanel
          kind="card"
          copy={dictionary.dreamCard}
          locale={locale}
          input={input}
          offerPrice={cardPrice}
        />
      ) : null}

      {/* **태몽 리포트는 태몽 상징이 걸렸을 때만 판다.** 없는 사람에게 띄우면 "당신 꿈에 태몽이
          있다"는 뜻으로 읽히고, 사서 열면 3장이 «찾지 못했습니다»로 채워진다. 파는 것과 있는
          것이 어긋나는 자리라 조건을 화면에 둔다. */}
      {outcome.conception ? (
        <ReportPurchasePanel
          kind="conception"
          copy={dictionary.conceptionReport}
          locale={locale}
          input={input}
          offerPrice={conceptionPrice}
        />
      ) : null}

      <p className="break-keep-all text-xs leading-5 text-muted">{t.disclaimer}</p>
    </div>
  );
}
