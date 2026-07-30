import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "what-we-store";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

export default async function Page(props: GuidePageProps) {
  const { locale, entry } = await guideContext(SLUG, props);

  return (
    <GuideShell
      locale={locale}
      eyebrow={entry.eyebrow}
      title={entry.title}
      description={entry.summary}
      backHref={localePath("/guide", locale)}
      backLabel="How this works"
    >
      <GuideSection title="There is no account">
        <p>
          Inyeon-Link has no sign-up. We do not ask for a name, an email address or a phone
          number. What you enter is a birth date and, optionally, a birth time, a city and a
          gender — and none of it is written down after the reading is produced.
        </p>
        <p>
          There is a field for what to call each person on the result screen. That label is for
          display only; it never enters the calculation, and you do not need to use a real name.
        </p>
      </GuideSection>

      <GuideSection title="What a result link actually carries">
        <p>When a reading is produced, the address looks like this:</p>
        <p className="overflow-x-auto rounded-lg border border-line bg-surface-strong px-4 py-3 font-mono text-xs leading-6">
          /en/compatibility/result<b className="text-brand-plum">#</b>
          eyJhIjp7InkiOjE5OTAsLi4u
        </p>
        <p>
          Everything after the <b>#</b> is your input. That part of a URL is called the{" "}
          <b>fragment</b>, and browsers do not send it to the server. This is standard web
          behaviour, not something we invented — the fragment exists to point at a place inside
          a document, so a server has no reason to see it.
        </p>
        <p>
          Opening the link makes your browser read that value and ask for a calculation. Our
          server answers and then forgets it.
        </p>
        <GuideNote title="A link is still worth guarding">
          Not being stored is not the same as being private. A result link contains both birth
          dates, so anyone you send it to can open the same reading.
        </GuideNote>
      </GuideSection>

      <GuideSection title="Why the calculation runs on a server at all">
        <p>
          Working out a four-pillar chart needs a calendar table that is too large to ship to a
          browser. So the calculation happens on our server — but the request is answered and
          discarded. There is no code that writes it to a database.
        </p>
        <p>
          One operational record does exist: a counter that stops a single visitor from firing
          an unreasonable number of requests. It contains no birth data, and it does not keep
          your IP address either — the address is hashed together with the date, so the value
          changes when the day does.
        </p>
      </GuideSection>

      <GuideSection title="What we give up by not storing">
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>You cannot look up a past reading.</b> Keep the link if you want to return to it.
          </li>
          <li>
            <b>Everything is recomputed.</b> There is no cache. Because every rule is
            deterministic, the{" "}
            <a
              href={localePath("/guide/how-it-works", locale)}
              className="font-semibold text-brand-plum underline underline-offset-2"
            >
              same input always yields the same result
            </a>
            , which is what a cache would have guaranteed.
          </li>
          <li>
            <b>Reloading brings the ad gate back.</b> There is nowhere to record that you
            already watched one.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="If you buy a report">
        <p>
          A purchase does create a record. Payment history has a legally required retention
          period, and without an order there would be no way to process a refund. Even then,
          the birth dates used for the reading are not attached to the order — they are
          supplied again, at the moment the PDF is generated, and used there.
        </p>
        <p>
          The full detail is in our{" "}
          <a
            href={localePath("/privacy", locale)}
            className="font-semibold text-brand-plum underline underline-offset-2"
          >
            privacy policy
          </a>
          .
        </p>
      </GuideSection>
    </GuideShell>
  );
}
