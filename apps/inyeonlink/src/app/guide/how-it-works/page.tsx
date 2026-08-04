import type { Metadata } from "next";

import { FourPillarsDiagram, GuideFigure } from "@/components/GuideFigure";
import {
  GuideNote,
  GuideSection,
  GuideShell,
  GuideTable,
} from "@/components/GuideShell";
import { ENGINE_WEIGHTS } from "@/lib/engines";
import { BRANCH_RELATION_SCORE } from "@/lib/engines/branches";
import { SAJU_WEIGHTS } from "@/lib/engines/saju";
import { guideContext, guideMetadata, type GuidePageProps } from "@/lib/guide-page";
import { localePath } from "@/lib/locale-path";

const SLUG = "how-it-works";

export function generateMetadata(props: GuidePageProps): Promise<Metadata> {
  return guideMetadata(SLUG, props);
}

const percent = (value: number) => `${Math.round(value * 100)}%`;

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
      <GuideSection title="Two readings, combined">
        <p>
          The match rate comes from two separate readings. <b>Saju compatibility</b> reads the
          full four-pillar chart of both people. <b>Zodiac compatibility</b> reads a single
          character — the branch of the birth year, which is what an animal sign actually is.
          The two are combined as a weighted average.
        </p>
        <GuideTable
          head={["Reading", "What it looks at", "Weight"]}
          rows={[
            ["Saju", "Four factors drawn from the whole chart", percent(ENGINE_WEIGHTS.saju)],
            ["Zodiac", "One relation between two year branches", percent(ENGINE_WEIGHTS.zodiac)],
          ]}
        />
        <p>
          Saju weighs more because it uses far more information. We keep the zodiac anyway for
          two reasons: it is the part everyone already understands, and it is the only axis
          that does not move when the birth time is unknown.
        </p>
      </GuideSection>

      <GuideSection title="The four Saju factors">
        <GuideFigure caption="A Saju chart is the year, month, day and hour of birth, each written as two characters — a heavenly stem and an earthly branch. The day stem and day branch, highlighted here, are the two seats this service reads most.">
          <FourPillarsDiagram language="en" />
        </GuideFigure>
        <GuideTable
          head={["Factor", "What it asks", "Weight"]}
          rows={[
            [
              "Day master relation",
              "What each person's day stem is to the other, read as one of the Ten Gods",
              percent(SAJU_WEIGHTS.dayMasterRelation),
            ],
            [
              "Elemental supply",
              "Does the other person carry the element you currently lack",
              percent(SAJU_WEIGHTS.elementSupply),
            ],
            [
              "Spouse star",
              "Does the other person's day stem sit in your spouse position",
              percent(SAJU_WEIGHTS.spouseStar),
            ],
            [
              "Day branch relation",
              "Whether the two day branches attract or clash",
              percent(SAJU_WEIGHTS.dayBranchRelation),
            ],
          ]}
        />
        <p>
          The day branch matters because in this tradition it <b>is</b> the spouse position —
          of the four pillars, that is the one that speaks about a partner.
        </p>
        <GuideNote title="If you do not state a gender">
          The spouse star cannot be read without it, because the tradition places the spouse
          differently for men and women. We drop that factor and renormalise the remaining
          weights. We do not score it as zero — that would penalise you for declining to answer.
        </GuideNote>
      </GuideSection>

      <GuideSection title="The branch relation table">
        <p>
          Both the day branch and the year branch are judged with the same table. These are the
          actual numbers the service uses.
        </p>
        <GuideTable
          head={["Relation", "Meaning", "Score"]}
          rows={[
            ["Samhap", "Three branches forming a complete bureau", BRANCH_RELATION_SCORE.SAMHAP],
            ["Yukhap", "A pair that draws together", BRANCH_RELATION_SCORE.YUKHAP],
            ["Banhap", "Half of a bureau, including its leading branch", BRANCH_RELATION_SCORE.BANHAP],
            ["Same branch", "Alike, but not drawn together", BRANCH_RELATION_SCORE.SAME],
            ["Neutral", "No named relation", BRANCH_RELATION_SCORE.NEUTRAL],
            ["Wonjin", "Quiet, lasting friction", BRANCH_RELATION_SCORE.WONJIN],
            ["Chung", "A head-on clash", BRANCH_RELATION_SCORE.CHUNG],
          ]}
        />
        <p>
          Note that the floor is {BRANCH_RELATION_SCORE.CHUNG}, not zero. In this tradition a
          clash is a collision, not an ending. Scoring it near zero would let the service
          pronounce a verdict on a relationship, which is not what it is for.
        </p>
      </GuideSection>

      <GuideSection title="Rules only — no AI, no randomness">
        <p>
          Every number above is a rule. Nothing is generated by a language model and nothing is
          random, so the same two birth dates always produce the same result. Since we store
          nothing, that determinism is what stands in for a saved record.
        </p>
        <p>
          When we change a scoring rule we raise the engine version, which is printed under
          your result. That tells you which set of rules produced the number you are looking at.
        </p>
      </GuideSection>

      <GuideSection title="Birth time and birth place">
        <p>
          The birth time is optional. Without it we leave out the hour pillar and mark the
          result accordingly. If you do know it, please also pick the city — clock time and
          solar time differ by up to half an hour, and the hour pillar changes in two-hour
          steps, so people born near a boundary land in the wrong pillar without the correction.
        </p>
      </GuideSection>

      <GuideSection title="What this is not">
        <p>
          This is a reading offered from the perspective of a traditional East Asian system. It
          is not a scientific prediction, and it is not a verdict on any relationship. Read it
          as one angle on two people, not as an answer.
        </p>
        <p>
          For what happens to the dates you type, see{" "}
          <a
            href={localePath("/guide/what-we-store", locale)}
            className="font-semibold text-brand-plum underline underline-offset-2"
          >
            what we store
          </a>
          .
        </p>
      </GuideSection>
    </GuideShell>
  );
}
