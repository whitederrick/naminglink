import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "what-we-store";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

export default async function Page(props: GuidePageProps) {
  const { locale, entry, hubHref } = await guideContext(SLUG, props);

  return (
    <GuideShell
      locale={locale}
      eyebrow={entry.eyebrow}
      title={entry.title}
      description={entry.summary}
      backHref={hubHref}
      backLabel="How this works"
    >
      <GuideSection title="There is no account">
        <p>
          Dreams-Link has no sign-up. We do not ask for a name, an email address or a phone
          number. What you enter is the dream itself, how you felt on waking, and whether the
          dream repeats — and none of it is written down after the reading is produced.
        </p>
        <p>
          A dream is the most personal thing this service receives. That is the reason the
          rule here is stricter than it would need to be: there is no table to write it to.
        </p>
      </GuideSection>

      <GuideSection title="What a result link actually carries">
        <p>When a reading is produced, the address looks like this:</p>
        <p className="overflow-x-auto rounded-lg border border-line bg-surface-strong px-4 py-3 font-mono text-xs leading-6">
          /en/dream/result<b className="text-brand-plum">#</b>
          eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u
        </p>
        <p>
          Everything after the <b>#</b> is what you wrote. That part of a URL is called the{" "}
          <b>fragment</b>, and browsers do not send it to the server. This is standard web
          behaviour, not something we invented — the fragment exists to point at a place inside
          a document, so a server has no reason to see it.
        </p>
        <p>
          It matters here for a specific reason: it keeps your dream out of the access log.
          Opening the link makes your browser read that value and post it once, asking for the
          symbols to be looked up. The server answers and then forgets it.
        </p>
        <GuideNote title="A link is still worth guarding">
          Not being stored is not the same as being private. A result link carries the dream you
          wrote, so anyone you send it to can read it.
        </GuideNote>
      </GuideSection>

      <GuideSection title="Why the lookup runs on a server at all">
        <p>
          The symbol dictionary is too large to ship to a browser on every visit, and keeping it
          on the server is also what lets us fix a wrong match for everyone at once. So the
          lookup happens on our server — but the request is answered and discarded. There is no
          code that writes it to a database.
        </p>
        <p>
          One operational record does exist: a counter that stops a single visitor from firing
          an unreasonable number of requests. It contains nothing you wrote, and it does not keep
          your IP address either — the address is hashed together with the date, so the value
          changes when the day does.
        </p>
      </GuideSection>

      <GuideSection title="What we give up by not storing">
        <ul className="ml-5 list-disc space-y-2">
          <li>
            <b>There is no dream journal.</b> You cannot look up a dream you read last week. That
            was a deliberate choice — a journal would mean keeping the most private thing here on
            file indefinitely.
          </li>
          <li>
            <b>Everything is looked up again.</b> There is no cache. The dictionary is fixed and
            the matching rules are deterministic, so the same dream text yields the same symbols
            — which is what a cache would have guaranteed.
          </li>
          <li>
            <b>Reloading brings the ad gate back.</b> There is nowhere to record that you
            already watched one.
          </li>
        </ul>
      </GuideSection>

      <GuideSection title="If you buy a card or a report">
        <p>
          A purchase does create a record. Payment history has a legally required retention
          period, and without an order there would be no way to process a refund. Even then,
          the dream you wrote is not attached to the order — it is supplied again, at the moment
          the file is generated, and used there.
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
