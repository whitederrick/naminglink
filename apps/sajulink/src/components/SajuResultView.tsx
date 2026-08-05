"use client";

import Link from "next/link";

import { GuideLink } from "@/components/GuideLink";
import { SelfAdCard } from "@/components/SelfAdCard";
import { emphasize } from "@/lib/emphasize";
import type { Dictionary, Locale } from "@/lib/i18n";
import { localePath } from "@/lib/locale-path";
import { useSajuOutcome } from "@/lib/use-saju-outcome";

/**
 * 사주 풀이 결과 — **평생 것만 있다.**
 *
 * 원국·일간·오행까지가 무료 몫이고, 강약·용신·십신·삶의 네 영역은 리포트가 판다
 * (`public-outcome.ts`가 응답에서부터 걷어낸다 — 화면이 안 그리는 것으로는 부족하다).
 *
 * **오늘의 운세는 여기 없다.** 예전에는 이 화면 한가운데에 하루짜리 점수가 가장 큰 글씨로
 * 있었다 — 사주를 보러 온 사람에게 그것이 결과처럼 읽혔다. 지금은 `/today/result`가 맡고
 * 아래에서 서로 오갈 수 있다(`TodayResultView` 주석 참고).
 */

/** 오행의 관습적인 색. **리포트(`pdf/saju-report.tsx`)와 같은 값이어야 한다.** */
const ELEMENT_COLOR: Record<string, string> = {
  WOOD: "#4f6f5e",
  FIRE: "#b4535a",
  EARTH: "#b4832f",
  METAL: "#9aa0a6",
  WATER: "#3f4a63",
};

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
  const p = dictionary.report;
  const state = useSajuOutcome({ dictionary, locale, serviceType: "SAJU_READING" });

  if (state.status === "loading") {
    return <p className="mt-10 text-center text-muted">{t.title}</p>;
  }

  if (state.status === "error") {
    return (
      <p role="alert" className="mt-10 break-keep-all text-center text-brand-navy">
        {state.message}
      </p>
    );
  }

  const { reading } = state.outcome;
  const dayMaster = dictionary.dayMasters[reading.dayMaster.character];

  // 리포트의 막대와 **같은 방식으로** 센다(합을 100으로 본다). 두 곳이 다른 눈금을 쓰면 산
  // 사람이 화면과 문서를 나란히 놓고 볼 때 값이 어긋난 것으로 읽힌다.
  const elementTotal =
    Object.values(reading.elements).reduce((sum, value) => sum + value, 0) || 1;
  const elementPercents = (
    Object.keys(reading.elements) as Array<keyof typeof reading.elements>
  ).map((element) => ({
    element,
    percent: Math.round((reading.elements[element] / elementTotal) * 100),
  }));

  return (
    <div className="mt-10 space-y-10">
      {/* 사주 원국 — 네 기둥. 시각을 모르면 시주가 없다. */}
      <section className="rounded-2xl border border-line/70 bg-surface/80 p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-brand-navy">{r.chartTitle}</h2>
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

      {/* 일간 한 줄 — 무료 화면에서 가장 개인적인 자리다.
          **강약 판정은 여기 없다.** 일간이 무엇인지는 원국 표에서 이미 보이므로 무료로 주고,
          그 일간이 강한지 약한지와 그래서 어떤 기운이 필요한지(용신)는 리포트가 판다.
          이름과 성향 한 줄은 사전이 갖는다 — 엔진은 글자(`甲`)만 준다. */}
      <section className="rounded-2xl border border-line/70 bg-surface/80 p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-brand-navy">{r.dayMasterLabel}</h2>
        <p className="mt-2 text-2xl font-semibold text-brand-navy">
          {dayMaster?.name ?? reading.dayMaster.character}
        </p>
        {dayMaster ? (
          <p className="break-keep-all mt-2 text-sm leading-7">{dayMaster.trait}</p>
        ) : null}
        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-xs leading-6">
          <div className="flex gap-2">
            <dt className="text-muted">{r.animalLabel}</dt>
            <dd>{dictionary.animals[reading.animal] ?? reading.animal}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-muted">{r.seasonLabel}</dt>
            <dd>{dictionary.elements[reading.seasonElement]}</dd>
          </div>
        </dl>
      </section>

      {/* 오행 세력 — **막대로 개략만.** 리포트와 같은 눈금(합을 100으로 본 비율)이라 두 곳이
          같은 그림을 말한다. 월령 전 세력·왕상휴수사·강약 근거 숫자는 리포트에만 있다. */}
      <section className="rounded-2xl border border-line/70 bg-surface/80 p-5 shadow-sm">
        <h2 className="text-sm font-semibold text-brand-navy">{r.elementsTitle}</h2>
        <div className="mt-3 flex h-2.5 overflow-hidden rounded-full bg-surface-strong">
          {elementPercents.map(({ element, percent }) => (
            <div
              key={element}
              style={{ width: `${percent}%`, backgroundColor: ELEMENT_COLOR[element] }}
            />
          ))}
        </div>
        <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs leading-6">
          {elementPercents.map(({ element, percent }) => (
            <div key={element} className="flex items-center gap-1.5">
              <span
                aria-hidden
                className="size-2 rounded-full"
                style={{ backgroundColor: ELEMENT_COLOR[element] }}
              />
              <dt>{dictionary.elements[element]}</dt>
              <dd className="tabular-nums text-muted">{percent}%</dd>
            </div>
          ))}
        </dl>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-sm">
          <div className="rounded-lg border border-line/60 bg-surface px-3 py-2">
            <dt className="text-xs text-muted">{r.strongest}</dt>
            <dd className="mt-0.5 font-semibold">
              {dictionary.elements[reading.strongestElement]}
            </dd>
          </div>
          <div className="rounded-lg border border-line/60 bg-surface px-3 py-2">
            <dt className="text-xs text-muted">{r.scarcest}</dt>
            <dd className="mt-0.5 font-semibold">
              {dictionary.elements[reading.scarcestElement]}
            </dd>
          </div>
        </dl>
      </section>

      {/* 유료 리포트 자리.
          예전에는 가격만 한 줄 떠 있었다 — 무엇의 값인지 말하지 않는 숫자라, 판매 중지일 때는
          아예 사라져 리포트가 있다는 것조차 알 수 없었다. 문구는 상품 사전(`report`) 한 곳에
          있고 결제 패널과 같은 것을 읽는다. 값이 없으면 "준비 중"으로 뜬다. */}
      <section className="rounded-2xl border border-brand-gold/40 bg-surface-strong p-5">
        <h2 className="text-sm font-semibold text-brand-navy">{p.title}</h2>
        <p className="break-keep-all mt-2 text-xs leading-6 text-muted">{emphasize(p.body)}</p>
        <ul className="mt-3 space-y-1 text-xs leading-6">
          {p.contents.map((line) => (
            <li key={line} className="break-keep-all flex gap-2">
              <span aria-hidden className="text-brand-gold">
                ·
              </span>
              <span>{line}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-semibold text-brand-navy">
          {offerPrice ?? p.preparing}
        </p>
      </section>

      {/* 오늘의 운세로 건너가는 자리. **같은 프래그먼트를 그대로 이어 붙인다** — 입력은 주소의
          프래그먼트에만 있으므로, 빠뜨리면 생년월일을 다시 넣게 된다.
          **구매 자리 뒤에 둔다** — 파는 것이 먼저다. */}
      <Link
        href={`${localePath("/today/result", locale)}#${state.fragment}`}
        className="block rounded-2xl border border-line/70 bg-surface/80 px-5 py-4 text-center text-sm font-semibold text-brand-navy"
      >
        {t.seeToday}
      </Link>

      {/* 형제 서비스. 파는 것과 우리 다른 화면 다음이다. */}
      <SelfAdCard dictionary={dictionary} />

      <GuideLink locale={locale} from="reading" className="mt-12" />
    </div>
  );
}
