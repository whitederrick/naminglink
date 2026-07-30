import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { localePath } from "@/lib/locale-path";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string }> };

const ENTRY = findGuideEntry("korean-name-basis")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  return buildPageMetadata({
    path: "/guide/korean-name-basis",
    locale,
    requested,
    title: ENTRY.title,
    description: ENTRY.summary,
  });
}

export default async function Page({ searchParams }: PageProps) {
  const params = await searchParams;
  const locale = await getRequestLocale(params?.lang);

  return (
    <GuideShell
      locale={locale}
      eyebrow={ENTRY.eyebrow}
      title={ENTRY.title}
      description={ENTRY.summary}
      backHref={localePath("/guide", locale)}
      backLabel="Guide"
    >
      <GuideSection title="We start with the family name">
        <p>
          In Korea the family name comes first, and unlike given names it is not freely
          invented — you inherit it. So we only suggest surnames that Korean people actually
          have. Our default pool is the <b>20 most common surnames</b>, which together cover
          roughly 80% of the population.
        </p>
        <p>
          If your own surname happens to line up with a real Korean one by sound — Wang with
          왕, Ye with 예 — we put that one first. Keeping a thread back to your original name
          is worth more than a surname chosen at random.
        </p>
        <p>
          You can pick a surname yourself or let us recommend one. Either way it will be a
          surname that exists.
        </p>
      </GuideSection>

      <GuideSection title="Easy to say, easy to write">
        <p>
          This is a name people in Korea will actually call you by, so the first thing we check
          is whether a Korean can hear it once and write it down. A name that needs spelling out
          every time is a burden you carry, not us.
        </p>
        <p>
          Meaning matters too. Korean given names usually carry one, so we tell you what the
          name reads as and why we picked it — not just the name itself.
        </p>
      </GuideSection>

      <GuideSection title="We ask what the name is for">
        <p>
          A name for university paperwork is not the same as a name friends will shout across a
          room, or a handle you will use online. We ask how you plan to use it and take that
          into account.
        </p>
      </GuideSection>

      <GuideNote title="What this is not">
        <p>
          This is not a transliteration. If you want your existing name written in Hangul —
          Michael as 마이클 — that is a different service, and we explain how it works
          separately. Here we propose a <b>new Korean name</b>.
        </p>
      </GuideNote>
    </GuideShell>
  );
}
