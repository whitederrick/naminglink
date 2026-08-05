"use client";

import Link from "next/link";

import { GuideLink } from "@/components/GuideLink";
import { SelfAdCard } from "@/components/SelfAdCard";
import { emphasize } from "@/lib/emphasize";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { useSajuOutcome } from "@/lib/use-saju-outcome";

/**
 * 오늘의 운세 결과 — **하루짜리다.**
 *
 * ## 왜 사주 풀이와 갈랐는가
 *
 * 예전에는 메뉴가 둘인데 결과 화면이 하나였다. 「오늘의 운세」로 들어와도 「사주 풀이 결과」가
 * 뜨고 원국·일간이 먼저 나왔고, 반대로 사주를 보러 온 사람에게는 **하루짜리 점수가 화면
 * 한가운데에서 가장 큰 글씨로** 나왔다.
 *
 * 엔진은 이미 갈라 두었는데(①에서 삶의 네 영역을 원국 기준으로 다시 뽑았다) 화면이 그대로라
 * 같은 혼동이 남아 있었다 — **사주는 평생이고 오늘의 운세는 그 사주에 오늘 일진을 대 본
 * 하루치다.** 파는 것도 앞엣것이다.
 *
 * ## 이 화면의 몫
 *
 * 무료이고 **아끼지 않는다.** 점수·등급·네 영역·행운 요소·근거를 전부 준다 — 매일 다시 오게
 * 만드는 것이 이 화면의 존재 이유라, 여기서 아끼면 리텐션을 잃고 얻는 것이 없다. 값을 거두는
 * 길은 광고와 형제 서비스뿐이다.
 *
 * 여기서 파는 것을 권하지 않는다. 리포트는 사주 풀이 화면이 판다 — 하루치를 보러 온 사람에게
 * 평생 리포트를 들이미는 것보다, **자기 원국을 먼저 보게 하는 편**이 순서가 맞다.
 */
export function TodayResultView({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const t = dictionary.result;
  const d = dictionary.today;
  const state = useSajuOutcome({ dictionary, locale, serviceType: "SAJU_TODAY" });

  if (state.status === "loading") {
    return <p className="mt-10 text-center text-muted">{d.title}</p>;
  }

  if (state.status === "error") {
    return (
      <p role="alert" className="mt-10 break-keep-all text-center text-brand-navy">
        {state.message}
      </p>
    );
  }

  const { today } = state.outcome;

  return (
    <div className="mt-10 space-y-10">
      {/* **엔진 값은 전부 열거값이다.** 그대로 그리면 `DAEGIL`·`wealth`·`WOOD`가 화면에 뜬다.
          사람이 읽을 말은 전부 사전(`today`·`elements`)에 있고 여기서는 이름만 건다. */}
      <section className="rounded-2xl border border-brand-navy/25 bg-surface-strong p-5">
        <p className="text-xs text-muted">
          {today.date} · {d.pillarLabel} {today.todayPillar.stem}
          {today.todayPillar.branch}
        </p>
        <p className="mt-3 text-4xl font-semibold tabular-nums">{today.score}</p>
        <p className="mt-1 text-sm font-semibold text-brand-navy">{d.grades[today.grade].name}</p>
        <p className="break-keep-all mt-1 text-xs leading-6 text-muted">
          {d.grades[today.grade].body}
        </p>

        {/* 오늘 기준 네 영역. **원국 기준 네 영역과 다른 값이다** — 이쪽은 오늘 일진의 십신으로
            매긴다. 평생 성향 쪽은 리포트가 `natal-outlook.ts`로 따로 뽑는다. */}
        <dl className="mt-4 grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
          {(Object.keys(today.categories) as Array<keyof typeof today.categories>).map((key) => (
            <div key={key} className="rounded-lg border border-line/60 bg-surface px-3 py-2">
              <dt className="text-xs text-muted">{d.categories[key]}</dt>
              <dd className="mt-0.5 font-semibold tabular-nums">{today.categories[key]}</dd>
            </div>
          ))}
        </dl>

        {/* 행운 요소. 색과 방위는 엔진이 코드로 내고 이름은 사전이 갖는다. */}
        <h2 className="mt-5 text-xs font-semibold text-brand-navy">{d.luckyTitle}</h2>
        <dl className="mt-2 grid grid-cols-2 gap-x-4 gap-y-1 text-xs leading-6 sm:grid-cols-3">
          <div className="flex gap-2">
            <dt className="text-muted">{d.luckyElement}</dt>
            <dd>{dictionary.elements[today.lucky.element]}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted">{d.luckyColor}</dt>
            {/* 사전에서 찾는다. 예전에는 `locale === "ko"`로 두 벌 중 하나를 골랐는데,
                ko가 아닌 모든 언어가 영어로 떨어져 일본어 화면에도 영어 색 이름이 나왔다. */}
            <dd>{today.lucky.colors.map((color) => d.luckyColors[color]).join(", ")}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted">{d.luckyDirection}</dt>
            <dd>{d.luckyDirections[today.lucky.direction]}</dd>
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
        <h2 className="mt-5 text-xs font-semibold text-brand-navy">{d.basisTitle}</h2>
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

        {/* 이 문구에는 `**강조**`가 들어 있다. 처리하지 않으면 별표가 그대로 보인다. */}
        <p className="break-keep-all mt-4 text-xs leading-6 text-muted">
          {emphasize(d.bookmarkHint)}
        </p>
      </section>

      {/* 사주 풀이로 건너가는 자리. **같은 프래그먼트를 그대로 이어 붙인다** — 입력은 주소의
          프래그먼트에만 있으므로, 빠뜨리면 생년월일을 다시 넣게 된다. */}
      <Link
        href={`${localePath("/reading/result", locale)}#${state.fragment}`}
        className="block rounded-2xl border border-brand-gold/40 bg-surface-strong px-5 py-4 text-center text-sm font-semibold text-brand-navy"
      >
        {t.seeReading}
      </Link>

      <SelfAdCard dictionary={dictionary} />

      <GuideLink locale={locale} from="today" className="mt-12" />
    </div>
  );
}
