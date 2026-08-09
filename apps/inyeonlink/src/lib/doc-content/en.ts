import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/**
 * 영어판. **번역기가 21개 로케일을 만들 때 구조와 어투의 본이 되는 벌이다.**
 *
 * 사람이 쓴 글과 `--fill-en`이 채운 글이 섞여 있다. 뒤엣것은 **없는 키만** 채우므로 앞엣것을
 * 덮지 않는다. **절과 문단의 수는 ko와 같게 둘 것** — 번역기가 구조를 복사하므로 여기서
 * 어긋나면 21개 로케일이 전부 그 어긋남을 물려받는다.
 */
export const EN_DOCS = {
  about: {
    eyebrow: "About",
    title: "About Inyeon-Link",
    summary:
      "We compare two birth charts in the Korean Saju tradition. Here is what we calculate, and what we refuse to claim.",
    backLabel: "Home",
    sections: [
      {
        title: "What we do",
        blocks: [
          {
            p: "Inyeon-Link builds two birth charts from dates and times of birth and shows **how the two sets of energies meet.** You can also read your own chart alone and see which temperaments tend to suit you.",
          },
          {
            p: "Reading on screen is **free and needs no account.** The paid items are PDF reports carrying figures the screen never shows — element strengths, ten-god pairings and the relationships across all four pillars.",
          },
        ],
      },
      {
        title: "What we calculate",
        blocks: [
          {
            p: "Charts are built from the **Korean lunisolar almanac**, and the birth time is corrected to **true solar time** for the birthplace — the same clock time means a different sun position depending on where you were born.",
          },
          {
            p: "Scores come from fixed rules only. Traditional concepts — ten gods, branch relations, the supporting element — are expressed as rules, so **the same input always gives the same result.** When a rule changes we run a regression harness to be sure older readings did not move.",
          },
          {
            p: "**No AI is involved.** Every sentence on screen is fixed text attached to a calculated result.",
          },
        ],
      },
      {
        title: "What we will not claim",
        blocks: [
          {
            ul: [
              "**We do not tell fortunes.** Nothing here tells you to pursue or avoid anyone. It is a reference drawn from a tradition.",
              "**We do not store what you enter.** Birth details are used for the moment of calculation and never written down; result links live in the part of the URL a browser does not send to a server.",
              "**A score is not a verdict on a person.** A low number does not invalidate a relationship.",
            ],
          },
        ],
      },
      {
        kind: "note",
        blocks: [
          {
            p: "The method is described in detail in the [guides](/guide). Company details and how to reach us are on the [contact page](/contact).",
          },
        ],
      },
    ],
  },
} satisfies Record<DocKey, DocPage>;

export const EN_NOTICES = {
  kindLabels: { service: "Service", product: "Products", policy: "Policy", support: "Support" },
  intro:
    "Changes to your terms of use — prices, policies — are posted here before they take effect. Internal improvements are not listed: what appears here is what you need to know.",
  empty: {
    title: "No notices yet",
    body: "When something changes, it will appear here.",
  },
  effective: "Takes effect {date}",
  pager: { label: "Notice pages", newer: "← Newer", older: "Older →" },
  items: {},
} satisfies NoticeCopy;
