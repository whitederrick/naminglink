import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "how-it-works";

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
      <GuideSection title="A dictionary, not a model">
        <p>
          Write down a dream and we look for symbols in it. What we then show you is{" "}
          <b>what the dictionary already says about those symbols</b> — nothing is composed on
          the spot. There is no language model anywhere in the reading.
        </p>
        <p>
          The dictionary holds <b>215 symbols</b> carrying <b>256 meanings</b> between them,
          drawn from the Korean tradition of dream reading. Where a symbol has no traditional
          meaning recorded, we leave the space empty rather than invent one.
        </p>
      </GuideSection>

      <GuideSection title="How a symbol is found">
        <p>
          You write freely — no form to fill in, no list to pick from. We scan what you wrote
          for the symbols we know, and we also watch for <b>242 alternate names</b>: different
          words for the same thing, and the forms a word takes once Korean endings attach to it.
        </p>
        <p>
          Short symbols are the hard part. Korean has one-syllable words for <i>star</i>,{" "}
          <i>horse</i>, <i>boat</i> and <i>hand</i>, and those syllables turn up inside
          completely unrelated words. So we check what sits on either side: a syllable with
          Korean text glued to the front is treated as part of a longer word, and what follows
          has to be a grammatical ending for the match to count.
        </p>
        <GuideNote title="Why that matters">
          Before this rule, twelve realistic test sentences produced twelve false matches — a
          sentence about nothing in particular came back tagged as a birth dream. Finding
          nothing is honest; finding the wrong thing puts a tradition behind words that never
          carried it.
        </GuideNote>
      </GuideSection>

      <GuideSection title="The same symbol can mean opposite things">
        <p>
          Holding a snake and being bitten by one were read in opposite ways. So each meaning is
          stored with <b>the situation it belongs to</b>, and we pick by what your dream
          describes. If nothing in your account points to a particular situation, the symbol&apos;s
          general meaning is used.
        </p>
        <p>
          This is why <i>what you did</i> matters as much as <i>what you saw</i>. &quot;A pig came
          into the house&quot; tells us more than &quot;I saw a pig&quot;.
        </p>
      </GuideSection>

      <GuideSection title="Birth dreams are judged by meaning, not by symbol">
        <p>
          Twenty-seven symbols have been read as <b>birth dreams</b> — dreams understood to
          announce a pregnancy. But a pig is both a birth-dream symbol and the classic symbol of
          wealth. Treating the symbol alone as the trigger would make every pig dream a birth
          dream, which is not how the tradition reads it.
        </p>
        <p>
          So we look at <b>the meaning actually selected</b> for your dream, not merely at which
          symbol appeared. ⚠️ We never state whether you are pregnant, and never state a
          child&apos;s sex. What we report is that a symbol traditionally read this way was present.
        </p>
      </GuideSection>

      <GuideSection title="Same dream, same reading">
        <p>
          Nothing in the matching is random, and no external service is called, so writing the
          same account again produces <b>the same symbols in the same order</b>. A reading you
          saw today will not have changed tomorrow.
        </p>
        <p>
          Nothing you write is stored either — see{" "}
          <a
            href={localePath("/guide/what-we-store", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            what happens to the dream you write
          </a>
          . Reading a dream is free and always will be; the two paid items are ways of{" "}
          <a
            href={localePath("/guide/what-the-reports-contain", locale)}
            className="font-semibold text-brand-violet underline underline-offset-2"
          >
            keeping a reading
          </a>
          , not of unlocking a better one.
        </p>
      </GuideSection>

      <GuideSection title="What we do not do">
        <p>
          No lottery numbers — the tradition records no rule for drawing digits out of a dream,
          so producing them would mean inventing one. No dream journal, because keeping one
          means storing the most private thing you could send us. No charms or remedies sold
          against an unlucky reading. And no claims about what will happen, when, or about your
          health or money.
        </p>
      </GuideSection>
    </GuideShell>
  );
}
