import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { displayPrice, getProductSetting } from "@/lib/product-settings";
import { buildPageMetadata } from "@/lib/seo";

/**
 * 한국어판 `guide/what-we-sell`의 영어판.
 *
 * **다루는 상품이 다르다.** 한자 상세 3종은 한국어 흐름 전용이고, 도장은 배송이 붙는다.
 * 글로벌 이용자가 실제로 마주치는 것은 PDF 둘과 후보 일괄 공개, 그리고 도장이다.
 * 금액을 손으로 적지 않는 규칙은 한국어판과 같다.
 */

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const ENTRY = findGuideEntry("what-you-can-buy")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);

  return buildPageMetadata({
    path: "/guide/what-you-can-buy",
    locale,
    requested,
    title: ENTRY.title,
    description: ENTRY.summary,
  });
}

async function price(code: string) {
  try {
    return displayPrice(await getProductSetting(code));
  } catch {
    return "coming soon";
  }
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  const [unlock, namePdf, artPdf, stampRound, stampSquare, stampEbony] = await Promise.all([
    price("CANDIDATE_UNLOCK_USD"),
    price("GLOBAL_NAME_PDF"),
    price("HANGUL_ART_PDF"),
    price("STAMP_ROUND_WOOD_USD"),
    price("STAMP_SQUARE_WOOD_USD"),
    price("STAMP_EBONY_USD"),
  ]);

  return (
    <GuideShell
      locale={locale}
      eyebrow={ENTRY.eyebrow}
      title={ENTRY.title}
      description={ENTRY.summary}
      backHref={localePath("/guide", locale)}
      backLabel="How it works"
    >
      <GuideSection title="How far the free result goes">
        <p>
          Getting a name and reading the result is <b>free</b>, and requires no account. Whether
          you are turning your name into a Korean one or writing it in Hangul, the suggestions and
          the reasoning behind them are on screen.
        </p>
        <p>
          Paid products do not resell what you have already seen. They open more candidates, add
          explanation, or turn the result into something you can keep and share.
        </p>
      </GuideSection>

      <GuideSection title={`Unlock all candidates — ${unlock}`}>
        <p>
          Candidates open one at a time. Watching an ad opens one; this unlocks{" "}
          <b>all the remaining ones at once</b>.
        </p>
        <p>
          You do not have to buy it. Opening by ad and opening by payment give{" "}
          <b>exactly the same names</b> — the difference is waiting, not quality.
        </p>
      </GuideSection>

      <GuideSection title={`Korean Name Premium Report — ${namePdf}`}>
        <p>
          A three-page PDF. A brush-calligraphy cover, then what the name means and why it was
          chosen for you, then a reading of the four pillars and the Five Elements behind it.
        </p>
        <p>
          The reasoning is the point. A name you cannot explain is hard to introduce yourself
          with, so the document is written to be read aloud to someone else.
        </p>
      </GuideSection>

      <GuideSection title={`Hangul Name Art — ${artPdf}`}>
        <p>
          A two-page PDF: a brush-calligraphy cover and a pronunciation guide. It shows how your
          name is written in Hangul and how it is actually said.
        </p>
        <GuideNote title="This carries sound, not meaning">
          Writing your name in Hangul is transliteration. It does not give you a Korean name with
          a meaning — that is the Korean Name Premium Report above. We keep the two apart on
          purpose, because conflating them produces names that Koreans find strange.
        </GuideNote>
      </GuideSection>

      <GuideSection title="Name stamp">
        <p>
          A physical seal carved with the name you made, shipped internationally. Prices differ by
          model — round wooden {stampRound}, square wooden {stampSquare}, ebony {stampEbony}.
        </p>
        <p>
          <b>This is the one product that ships.</b> It takes time to carve and deliver, and it
          needs an address. Shipping details are used only to fulfil the order and to meet record
          keeping required by law, then destroyed after the period set in the privacy policy.
        </p>
      </GuideSection>

      <GuideSection title="Before you buy">
        <p>
          <b>Digital products are delivered immediately.</b> Before the download starts you may
          cancel for a full refund; once it completes, withdrawal for a simple change of mind is
          restricted under Article 17(2) of the Korean Act on Consumer Protection in Electronic
          Commerce. You are asked to confirm this on the payment screen.
        </p>
        <p>
          <b>Dissatisfaction with the suggestions is not a ground for refund.</b> But if the
          document was never produced, the file will not open, or the amount charged differs from
          the order, we reissue it or refund in full.
        </p>
        <p>
          The full conditions are in the <b>Refund Policy</b> and <b>Pricing</b> pages. This page
          explains what you get; those pages are the binding terms.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
