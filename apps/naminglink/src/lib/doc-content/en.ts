import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/**
 * 영어판. **번역기가 21개 로케일을 만들 때 구조와 어투의 본이 되는 벌이다.**
 *
 * ko를 그대로 옮긴 것이 아니라 사람이 쓴 글이다 — 한국 밖 독자를 향해 쓰였고, 그래서 문장이
 * ko와 하나씩 대응하지 않아도 된다. **다만 절과 문단의 수는 ko와 같게 둔다** — 번역기가
 * 구조를 복사하므로, 여기서 어긋나면 21개 로케일이 전부 그 어긋남을 물려받는다.
 */
export const EN_DOCS = {
  about: {
    eyebrow: "About",
    title: "About Naming-Link",
    summary:
      "We help you choose and understand Korean names. Here is what we base our results on, and what we deliberately do not do.",
    backLabel: "Home",
    sections: [
      {
        title: "What we do",
        blocks: [
          {
            p: "Naming-Link helps you **choose and understand Korean names** — the hanja behind a child's name, a Korean name to use abroad, a Hangul spelling of your own name, and keepsakes such as a seal or a printed report.",
          },
          {
            p: "Seeing your results is **free and needs no account.** Paid items never resell what the screen already showed you: they open more candidates, add written analysis, or turn the result into something you can keep.",
          },
        ],
      },
      {
        title: "What our answers are based on",
        blocks: [
          {
            p: "Hanja come from the **Supreme Court of Korea's official name-hanja table.** Each character has a fixed reading for use in names, and characters outside the table cannot be registered. We do not add to that list or pick favourites.",
          },
          {
            p: "Saju and five-element figures are calculated from the **Korean lunisolar almanac**, with the birth time corrected to true solar time for the birthplace. The reading is a traditional reference, not a prediction.",
          },
          {
            p: "The written explanations are produced by AI. To keep it from **inventing things**, the model is given only your input and our own reference data, and is told to stay inside it. The guides explain this in detail.",
          },
        ],
      },
      {
        title: "What we do not do",
        blocks: [
          {
            ul: [
              "**We do not tell fortunes.** Nothing here promises luck, wealth or protection.",
              "**We do not store your name.** Free results are never written to our servers, and paid documents are delivered without keeping a copy of the file.",
              "**Paying does not buy a better answer.** Unlocking with an ad and unlocking with a payment give exactly the same content.",
            ],
          },
        ],
      },
      {
        kind: "note",
        blocks: [
          {
            p: "The service is available in 23 languages. Paid PDFs are issued in English for Arabic and Khmer — the PDF renderer does not support those scripts — and we say so on screen before you pay.",
          },
        ],
      },
      {
        title: "Contact",
        blocks: [
          {
            p: "Company details and how to reach us are on the [contact page](/contact), including refunds, privacy requests and error reports.",
          },
        ],
      },
    ],
  },
  "guide/reading": {
    eyebrow: "Readings",
    title: "Fixed readings — one pronunciation per character",
    summary:
      "The official table does not only list characters. It also fixes how each one is read when used in a name.",
    backLabel: "Guide",
    sections: [
      {
        title: "A fixed reading for each character",
        blocks: [
          {
            p: "The name-hanja table does not only decide which characters may be used. **It also fixes how each character is read when it appears in a name.** That fixed reading is what registration goes by.",
          },
          {
            p: "Most hanja have several possible readings. A name, though, is written on documents and spoken aloud, so it needs exactly one. The table therefore assigns each character its reading for use in names, and no other reading can be registered.",
          },
        ],
      },
      {
        title: "So the sound comes first",
        blocks: [
          {
            p: "This is why Naming-Link fixes the sound before looking for hanja. If the name is \"지은\", the meaning can only be chosen among characters assigned the reading **지** and characters assigned the reading **은**.",
          },
          {
            p: "However good a meaning is, a character whose reading does not match cannot be used for that name. We also never change the sound of a name to fit a character — a name is spoken for a lifetime, and the sound is settled first, with the hanja following.",
          },
        ],
      },
      {
        title: "Family names are outside this table",
        blocks: [
          {
            p: "This is often misunderstood. **The table governs the given name, not the family name.** A family name follows what is already on the family register, so some people do use characters that are not in the name-hanja table.",
          },
          {
            p: "That is why Naming-Link treats surname hanja differently. We only help you find a surname, and we leave a field for entering one directly, for people whose character is outside the table. Two-syllable surnames such as Namgung and Seonwoo are entered the same way.",
          },
        ],
      },
    ],
  },
  "guide/how-hangul-transliteration": {
    eyebrow: "How it works",
    title: "How we spell your name in Hangul",
    summary:
      "How we choose the sounds when writing a foreign name in Hangul, and why we do not attach hanja.",
    backLabel: "Guide",
    sections: [
      {
        title: "We carry the sound, not the meaning",
        blocks: [
          {
            p: "This service writes **your name** in Hangul. It does not give you a Korean name. Michael becomes 마이클 — the same name, written so Koreans can read and say it. We do not swap it for a Korean name that happens to mean something similar.",
          },
          {
            p: "If a Korean name is what you want, **that is a different service**. One keeps your name and changes only the script; the other proposes a new name.",
          },
        ],
      },
      {
        title: "Sounds Korean does not have",
        blocks: [
          {
            p: "Every language has sounds Korean lacks — f, v, z, th, and vowel distinctions Korean does not make. For those we write what **a Korean speaker actually says** when they read your name aloud, rather than transcribing the original phonetics symbol by symbol. The goal is the spelling that will be used, not the most technically faithful one.",
          },
          {
            p: "The same spelling can differ depending on where a name comes from, so we ask for your language and country and work from that pronunciation.",
          },
        ],
      },
      {
        title: "Several spellings, side by side",
        blocks: [
          {
            p: "There is no single right answer. The spelling closest to the original sound, the one most commonly used in Korea, and the one easiest to write are often three different things. So we show them together and say what separates them.",
          },
          {
            p: "If none of them feel right, you can add a hint about the sound you want and run it again — for example, that a particular syllable should be written differently.",
          },
        ],
      },
      {
        kind: "note",
        title: "No hanja here",
        blocks: [
          {
            p: "We do not attach hanja to a transliteration. Hanja carry meaning, and this flow is about sound. Matching characters to sound alone can land you with a meaning you never asked for.",
          },
        ],
      },
    ],
  },
  "guide/how-global-to-korean": {
    eyebrow: "How it works",
    title: "How we build a Korean name",
    summary:
      "We choose from surnames that exist, weigh how easily the name is said and written, and ask what the name is for.",
    backLabel: "Guide",
    sections: [
      {
        title: "We start with the family name",
        blocks: [
          {
            p: "In Korea the family name comes first, and unlike given names it is not freely invented — you inherit it. So we only suggest surnames that Korean people actually have. Our default pool is the **20 most common surnames**, which together cover roughly 80% of the population.",
          },
          {
            p: "If your own surname happens to line up with a real Korean one by sound — Wang with 왕, Ye with 예 — we put that one first. Keeping a thread back to your original name is worth more than a surname chosen at random.",
          },
          {
            p: "You can pick a surname yourself or let us recommend one. Either way it will be **a surname that exists**.",
          },
        ],
      },
      {
        title: "Easy to say, easy to write",
        blocks: [
          {
            p: "This is a name people in Korea will actually call you by, so the first thing we check is whether a Korean can hear it once and write it down. A name that needs spelling out every time is a burden you carry, not us.",
          },
          {
            p: "Meaning matters too. Korean given names usually carry one, so we tell you what the name reads as and why we picked it — not just the name itself.",
          },
        ],
      },
      {
        title: "We ask what the name is for",
        blocks: [
          {
            p: "A name for university paperwork is not the same as a name friends will shout across a room, or a handle you will use online. We ask how you plan to use it and take that into account.",
          },
        ],
      },
      {
        kind: "note",
        title: "This is not a transliteration",
        blocks: [
          {
            p: "Here we propose a **new Korean name**. If you want your existing name written in Hangul — Michael as 마이클 — see the [Hangul spelling guide](/guide/how-hangul-transliteration).",
          },
        ],
      },
    ],
  },
  notice: {
    eyebrow: "Notices",
    title: "Notices",
    summary: "Where we announce changes that affect how you use the service.",
    backLabel: "Home",
    sections: [],
  },
  contact: {
    eyebrow: "Contact",
    title: "Contact us",
    summary:
      "How to reach us for questions, refunds, privacy requests and error reports, with our company details.",
    backLabel: "Home",
    sections: [
      {
        title: "Email us",
        blocks: [
          {
            p: "Write to **{email}**. We reply within two business days. For anything about an order — payment, refund, a file you did not receive — please include your **order number or the email you paid with**.",
          },
          { p: "Phone enquiries: {customerCenter} (Korean business hours)." },
        ],
      },
      {
        title: "What to send here",
        blocks: [
          {
            ul: [
              "**Payments and refunds** — if a document was never produced, or the amount charged differs from your order, we refund in full. See the [refund policy](/refund-policy).",
              "**Privacy** — requests to access, correct or delete your data. See the [privacy policy](/privacy).",
              "**Corrections** — if a hanja meaning, reading or calculation looks wrong, tell us. Mentioning which screen and what you entered helps a great deal.",
              "**Anything else** — partnerships and press go to the same address.",
            ],
          },
        ],
      },
      {
        title: "Company details",
        blocks: [
          {
            ul: [
              "**Legal entity** — {companyName}",
              "**Representative** — {representative}",
              "**Business registration no.** — {businessNumber}",
              "**Mail-order sales no.** — {mailOrderNumber}",
              "**Address** — {address}",
              "**Customer service** — {customerCenter}",
              "**Email** — {email}",
              "**Privacy officer** — {privacyOfficer}",
              "**Hosting provider** — {hostingProvider}",
            ],
          },
        ],
      },
      {
        kind: "note",
        blocks: [
          {
            p: "You do not need to include a name or birth date in your message. Free results are never stored on our servers, so we cannot look them up again — an order number is enough.",
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
  items: {
    "2026-08-02-contact": {
      title: "Contact and About pages are now open",
      body: [
        "Questions, refunds, privacy requests and error reports now have one place to go. The contact page in the footer lists our email and company details.",
        "What our answers are based on, and what we deliberately do not do, is written on the about page.",
      ],
    },
    "2026-08-01-pdf-language": {
      title: "PDF reports are issued in English for Arabic and Khmer",
      body: [
        "If you are using the service in Arabic or Khmer, the PDF you buy is produced in English. The tool that lays out our documents cannot yet set paragraphs in those two scripts.",
        "The screen stays in your language, and your name is printed in your own script inside the document.",
        "The same note appears before payment. When the tool supports these scripts, we will say so here.",
      ],
    },
    "2026-08-01-payments-preparing": {
      title: "Payments are not open yet",
      body: [
        "Creating a name and reading the result is free today, and no account is needed.",
        "Paid items are not on sale yet. The amounts shown on the pricing page are what will apply once sales open.",
      ],
    },
  },
} satisfies NoticeCopy;
