import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { REPORT_PAGE_COUNT } from "@/lib/report-pages";
import { getDictionary } from "@/lib/i18n";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { getReportPrices } from "@/lib/report-product";

/** 한국어판 `guide/reports`의 영어판. 목차·금액을 손으로 적지 않는 규칙도 같다. */

const SLUG = "what-the-reports-contain";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

export default async function Page(props: GuidePageProps) {
  const { locale, entry, hubHref } = await guideContext(SLUG, props);
  const dictionary = getDictionary(locale);
  const prices = await getReportPrices();

  return (
    <GuideShell
      locale={locale}
      eyebrow={entry.eyebrow}
      title={entry.title}
      description={entry.summary}
      backHref={hubHref}
      backLabel="How it works"
    >
      <GuideSection title="The screen stays; the PDF adds">
        <p>
          Calculating and reading your chart is <b>free</b>. The four pillars, the elemental
          weights, the strength of your day master and today’s fortune, together with the
          relationship are all on screen. Nothing was taken off the screen to make room for a paid
          product.
        </p>
        <p>
          What the report does is <b>add a layer the screen does not show</b> — and that layer is
          not invented. It is material the engine already computes on the way to the score but
          never displays.
        </p>
      </GuideSection>

      <GuideSection title={`Life reading and year ahead report — ${prices.global}`}>
        <p>
          {prices.global} for international payment, {prices.domestic} (VAT
          included) in Korea. {REPORT_PAGE_COUNT} A4 pages.
        </p>
        <ul>
          {dictionary.report.contents.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          <b>Pages 1&ndash;3 tidy up what is already on screen</b> so it keeps well.{" "}
          <b>Page 4 onward is what the screen never shows.</b> Here is why each of those was
          missing.
        </p>
      </GuideSection>

      <GuideSection title="What the screen never shows">
        <p>
          The free screens give you the chart, the elemental weights and today’s fortune. Three
          values come out of that same calculation and are held back for the report.
        </p>
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>Ally ratio</b> — how close the strong/weak verdict actually was. The verdict alone
            cannot tell you whether it sat near the threshold or well clear of it.
          </li>
          <li>
            <b>Seasonal standing</b> — how far the month of birth pushed each element up or held
            it down. The bars say how much of an element there is; this says whether it is in
            season.
          </li>
          <li>
            <b>True-solar-time correction</b> — the idea is explained in{" "}
            <b>How we read your chart</b>, but <b>how many minutes your own birth hour moved</b>{" "}
            differs per person and appears only in the report.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="Before you buy">
        <p>
          <b>We do not keep the file.</b> Once payment is approved the document is generated in
          that same request, sent to you, and nothing is stored on the server. That is the same
          no-storage rule the free flow follows, kept intact for the paid one.
        </p>
        <p>
          So please <b>save the file right after payment.</b> The same order can be downloaded up
          to five times, but once you leave the result screen the input is gone and the document
          can no longer be produced.
        </p>
        <GuideNote title="A longer report is still reference material">
          More pages do not make the conclusion more certain. What the report adds is{" "}
          <b>the reasoning behind the same calculation</b>, not a stronger claim. Practitioners
          disagree on much of this tradition, and we only compute what can be written as a rule.
        </GuideNote>
      </GuideSection>
    </GuideShell>
  );
}
