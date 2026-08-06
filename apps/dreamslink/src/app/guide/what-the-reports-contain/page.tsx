import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { getAllReportPrices } from "@/lib/report-product";
import { CONCEPTION_PAGE_COUNT } from "@/lib/report-pages";
import { DREAM_SYMBOLS } from "@/lib/dream-symbols";

/**
 * 유료 상품 안내(영어판).
 *
 * **금액과 장수를 손으로 적지 않는다.** 값은 `product_settings`에서, 장수는
 * `CONCEPTION_PAGE_COUNT`에서 읽는다. 손으로 적으면 값을 바꾸는 날 이 문서만 옛 값으로 남고,
 * 그것이 곧 고지 위반이 된다(약관도 같은 자리를 본다).
 */

const SLUG = "what-the-reports-contain";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

export default async function Page(props: GuidePageProps) {
  const { locale, entry, hubHref } = await guideContext(SLUG, props);
  const prices = await getAllReportPrices();

  return (
    <GuideShell
      locale={locale}
      eyebrow={entry.eyebrow}
      title={entry.title}
      description={entry.summary}
      backHref={hubHref}
      backLabel="Guides"
    >
      <GuideSection title="The reading itself is free">
        <p>
          Writing down a dream and seeing which traditional symbols it contains costs nothing and
          needs no account. People dream every night, so that had to stay free.
        </p>
        <p>
          The two paid products do not unlock a better reading. They are two ways of{" "}
          <b>keeping</b> one.
        </p>
      </GuideSection>

      <GuideSection title={`Dream card — ${prices.card.global}`}>
        <p>
          {prices.card.global} for international payment, {prices.card.domestic} (VAT included) in
          Korea. <b>A single image file, not a PDF.</b>
        </p>
        <p>
          It holds the symbols found in your dream and what they have traditionally meant, laid out
          as one card you can keep or share. Nothing in it is absent from the free screen — you are
          paying for the form, not for hidden content.
        </p>
      </GuideSection>

      <GuideSection
        title={`Conception-dream report — ${prices.conception.global}`}
      >
        <p>
          {prices.conception.global} for international payment, {prices.conception.domestic} (VAT
          included) in Korea. {CONCEPTION_PAGE_COUNT} A4 pages.
        </p>
        <p>
          When symbols traditionally read as conception omens appear, this report sets out those
          symbols, the meanings our dictionary records for them, and the cultural background where
          we have it. The last page is left for you to write the date and a few words by hand.
        </p>
        <p>
          <b>It does not determine pregnancy or the sex of a child.</b> It tells you that symbols
          traditionally read as conception omens appeared in your dream, and nothing beyond that.
          Medical judgement belongs to a clinician.
        </p>
      </GuideSection>

      <GuideSection title="Why there is no long report">
        <p>
          Our sibling service issues a nine-page reading, because a Saju engine produces a great many
          values from one birth date. Dream reading does not work that way.
        </p>
        <p>
          The dictionary holds {DREAM_SYMBOLS.length} symbols, and most of them record{" "}
          <b>one meaning each</b>. Stretching that to nine pages would mean writing traditional
          meanings that no source records — the one thing this service refuses to do. So the
          documents are as long as the material honestly allows, and no longer.
        </p>
      </GuideSection>

      <GuideNote>
        We keep neither your dream nor the file we produce. Once payment is approved the document is
        made in that same request and sent to you; nothing is stored on our side. The same order can
        be downloaded a few more times in case a download is interrupted, but once you leave the
        result screen the dream is gone and it can no longer be produced — please save the file
        right away.
      </GuideNote>
    </GuideShell>
  );
}
