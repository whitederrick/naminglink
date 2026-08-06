import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { getDictionary } from "@/lib/i18n";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { getAllReportPrices } from "@/lib/report-product";

/** 한국어판 `guide/reports`의 영어판. 목차·금액을 손으로 적지 않는 규칙도 같다. */

const SLUG = "what-the-reports-contain";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

export default async function Page(props: GuidePageProps) {
  const { locale, entry, hubHref } = await guideContext(SLUG, props);
  const dictionary = getDictionary(locale);
  const prices = await getAllReportPrices();

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
          Calculating and reading a compatibility result is <b>free</b>. The match rate, the score
          and weight of every factor, both charts with elemental strength, and the shape of the
          relationship are all on screen. Nothing was taken off the screen to make room for a paid
          product.
        </p>
        <p>
          What the report does is <b>add a layer the screen does not show</b> — and that layer is
          not invented. It is material the engine already computes on the way to the score but
          never displays.
        </p>
      </GuideSection>

      <GuideSection title={`Saju compatibility report — ${prices.card.global}`}>
        <p>
          {prices.card.global} for international payment, {prices.card.domestic} (VAT
          included) in Korea. {dictionary.report.contents.length} A4 pages.
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

      <GuideSection title="Page 4 — which way the energy flows">
        <p>
          On screen the Five Elements factor is a single number. That number is the{" "}
          <b>average of two directions</b> — how much your partner supplies what you need, and how
          much you supply what they need.
        </p>
        <p>
          Supply is inherently <b>asymmetric</b>: what you need and what they need are different.
          An average makes a pairing where only one side is well supplied look identical to one
          where both are. The report separates them.
        </p>
        <p>
          The same page carries the <b>branch relations of all four pillars</b>. Only the Day
          branch enters the match rate — it is the spouse seat — but the Year, Month and Hour
          pillars can be read with the same table.
        </p>
        <GuideNote title="Those scores are not part of the match rate">
          Adding them would change the total and break result links already shared. So they are
          printed as reading material, with a note under the table saying exactly that.
        </GuideNote>
      </GuideSection>

      <GuideSection title="Page 5 — a closer look at each chart">
        <p>
          The bars on screen show <b>how much</b> of each element is present. The report adds{" "}
          <b>whether the birth month pushes it forward</b>. The same amount behaves differently at
          Wang (旺) than at Sa (死).
        </p>
        <p>
          Strength before and after the month&rsquo;s influence sits side by side, so you can see
          what the season lifted and by how much. The <b>ally ratio</b> behind the strong/weak
          verdict is printed too — the screen gives the verdict, the report shows where it fell.
        </p>
      </GuideSection>

      <GuideSection title="Page 6 — what each of their pillars is to you">
        <p>
          The match rate compares <b>Day Masters only</b>. The same rule fixes a Ten God for their
          other three pillars as well. Knowing the Day pillar tells you what that person is to you;
          it does not tell you <b>which part of them is what to you</b>.
        </p>
        <p>This has direction, so both sides are printed: your view of them, and theirs of you.</p>
      </GuideSection>

      <GuideSection title="Page 7 — how the charts were calculated">
        <p>
          How far the birth time was corrected to true solar time, whether that correction moved
          the date, and the solar and lunar dates the chart was drawn from. The concept is
          explained in <b>How we calculate compatibility</b>; the specific minutes are different
          for every person, so they appear only in the report.
        </p>
      </GuideSection>

      <GuideSection title={`Match profile report — ${prices.conception.global}`}>
        <p>
          {prices.conception.global} for international payment, {prices.conception.domestic} (VAT
          included) in Korea. {dictionary.affinityReport.contents.length} A4 pages.
        </p>
        <ul>
          {dictionary.affinityReport.contents.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p>
          Here the <b>full ranking</b> is the point. The screen shows only the three types that
          suit you best; the report ranks <b>all</b> ten heavenly stems and all twelve zodiac
          signs. With only the top three you cannot see who comes next, or who sits at the bottom.
        </p>
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
