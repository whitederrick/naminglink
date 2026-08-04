import type { Metadata } from "next";

import { GuideNote, GuideSection, GuideShell } from "@/components/GuideShell";
import { guideHubHref } from "@/lib/guide-back";
import { findGuideEntry } from "@/lib/guide-index";
import { getRequestLocale, isLocale } from "@/lib/locale";
import { buildPageMetadata } from "@/lib/seo";

type PageProps = { searchParams?: Promise<{ lang?: string; from?: string }> };

const ENTRY = findGuideEntry("hangul-spelling-basis")!;

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const params = await searchParams;
  const requested = isLocale(params?.lang) ? params.lang : null;
  const locale = await getRequestLocale(params?.lang);
  return buildPageMetadata({
    path: "/guide/hangul-spelling-basis",
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
      backHref={guideHubHref(locale, params?.from)}
      backLabel="Guide"
    >
      <GuideSection title="We carry the sound, not the meaning">
        <p>
          This service writes <b>your name</b> in Hangul. It does not give you a Korean name.
          Michael becomes 마이클 — the same name, written so Koreans can read and say it. We do
          not swap it for a Korean name that happens to mean something similar.
        </p>
        <p>
          If a Korean name is what you want, that is a different service. One keeps your name and
          changes only the script; the other proposes a new name.
        </p>
      </GuideSection>

      <GuideSection title="Sounds Korean does not have">
        <p>
          Every language has sounds Korean lacks — f, v, z, th, and vowel distinctions Korean does
          not make. For those we write what <b>a Korean speaker actually says</b> when they read
          your name aloud, rather than transcribing the original phonetics symbol by symbol. The
          goal is the spelling that will be used, not the most technically faithful one.
        </p>
        <p>
          The same spelling can differ depending on where a name comes from, so we ask for your
          language and country and work from that pronunciation.
        </p>
      </GuideSection>

      <GuideSection title="Several spellings, side by side">
        <p>
          There is no single right answer. The spelling closest to the original sound, the one
          most commonly used in Korea, and the one easiest to write are often three different
          things. So we show them together and say what separates them.
        </p>
        <p>
          If none of them feel right, you can add a hint about the sound you want and run it
          again — for example, that a particular syllable should be written differently.
        </p>
      </GuideSection>

      <GuideNote title="No Hanja here">
        <p>
          We do not attach Hanja to a transliteration. Hanja carry meaning, and this flow is about
          sound. Matching characters to sound alone can land you with a meaning you never asked
          for.
        </p>
      </GuideNote>
    </GuideShell>
  );
}
