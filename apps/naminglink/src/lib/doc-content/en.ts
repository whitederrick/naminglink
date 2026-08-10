import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/**
 * 영어판. **번역기가 21개 로케일을 만들 때 구조와 어투의 본이 되는 벌이다.**
 *
 * 소개·문의처럼 사람이 쓴 글과, 한국어 원문에서 옮겨 온 글이 함께 있다. 뒤엣것은
 * `translate-doc-content.ts --fill-en`이 **없는 키만** 채운 것이라 앞엣것을 덮지 않는다.
 */
export const EN_DOCS = {
  "about": {
    "eyebrow": "About",
    "title": "About Naming-Link",
    "summary": "We help you choose and understand Korean names. Here is what we base our results on, and what we deliberately do not do.",
    "backLabel": "Home",
    "sections": [
      {
        "title": "What we do",
        "blocks": [
          {
            "p": "Naming-Link helps you **choose and understand Korean names** — the hanja behind a child's name, a Korean name to use abroad, a Hangul spelling of your own name, and keepsakes such as a seal or a printed report."
          },
          {
            "p": "Seeing your results is **free and needs no account.** Paid items never resell what the screen already showed you: they open more candidates, add written analysis, or turn the result into something you can keep."
          }
        ]
      },
      {
        "title": "What our answers are based on",
        "blocks": [
          {
            "p": "Hanja come from the **Supreme Court of Korea's official name-hanja table.** Each character has a fixed reading for use in names, and characters outside the table cannot be registered. We do not add to that list or pick favourites."
          },
          {
            "p": "Saju and five-element figures are calculated from the **Korean lunisolar almanac**, with the birth time corrected to true solar time for the birthplace. The reading is a traditional reference, not a prediction."
          },
          {
            "p": "The written explanations are produced by AI. To keep it from **inventing things**, the model is given only your input and our own reference data, and is told to stay inside it. The guides explain this in detail."
          }
        ]
      },
      {
        "title": "What we do not do",
        "blocks": [
          {
            "ul": [
              "**We do not tell fortunes.** Nothing here promises luck, wealth or protection.",
              "**We do not store your name.** Free results are never written to our servers, and paid documents are delivered without keeping a copy of the file.",
              "**Paying does not buy a better answer.** Unlocking with an ad and unlocking with a payment give exactly the same content."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "The service is available in 23 languages. Paid PDFs are issued in English for Arabic and Khmer — the PDF renderer does not support those scripts — and we say so on screen before you pay."
          }
        ]
      },
      {
        "title": "Contact",
        "blocks": [
          {
            "p": "Company details and how to reach us are on the [contact page](/contact), including refunds, privacy requests and error reports."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "How Naming-Link works",
    "title": "What we base your name on",
    "summary": "How we choose a Korean surname, what we check before suggesting a given name, and how we write your name in Hangul — with the parts we deliberately leave out.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              { "value": "{characterTotal}", "label": "name-hanja characters" },
              { "value": "{syllableCount}", "label": "Hangul syllables covered" },
              { "value": "{effectiveDate}", "label": "table effective date" },
              { "value": "{avoidTotal}", "label": "traditionally avoided characters" }
            ]
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "How it works",
    "title": "How we spell your name in Hangul",
    "summary": "How we choose the sounds when writing a foreign name in Hangul, and why we do not attach hanja.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "We carry the sound, not the meaning",
        "blocks": [
          {
            "p": "This service writes **your name** in Hangul. It does not give you a Korean name. Michael becomes 마이클 — the same name, written so Koreans can read and say it. We do not swap it for a Korean name that happens to mean something similar."
          },
          {
            "p": "If a Korean name is what you want, **that is a different service**. One keeps your name and changes only the script; the other proposes a new name."
          }
        ]
      },
      {
        "title": "Sounds Korean does not have",
        "blocks": [
          {
            "p": "Every language has sounds Korean lacks — f, v, z, th, and vowel distinctions Korean does not make. For those we write what **a Korean speaker actually says** when they read your name aloud, rather than transcribing the original phonetics symbol by symbol. The goal is the spelling that will be used, not the most technically faithful one."
          },
          {
            "p": "The same spelling can differ depending on where a name comes from, so we ask for your language and country and work from that pronunciation."
          }
        ]
      },
      {
        "title": "Several spellings, side by side",
        "blocks": [
          {
            "p": "There is no single right answer. The spelling closest to the original sound, the one most commonly used in Korea, and the one easiest to write are often three different things. So we show them together and say what separates them."
          },
          {
            "p": "If none of them feel right, you can add a hint about the sound you want and run it again — for example, that a particular syllable should be written differently."
          }
        ]
      },
      {
        "kind": "note",
        "title": "No hanja here",
        "blocks": [
          {
            "p": "We do not attach hanja to a transliteration. Hanja carry meaning, and this flow is about sound. Matching characters to sound alone can land you with a meaning you never asked for."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "How it works",
    "title": "How we build a Korean name",
    "summary": "We choose from surnames that exist, weigh how easily the name is said and written, and ask what the name is for.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "We start with the family name",
        "blocks": [
          {
            "p": "In Korea the family name comes first, and unlike given names it is not freely invented — you inherit it. So we only suggest surnames that Korean people actually have. Our default pool is the **20 most common surnames**, which together cover roughly 80% of the population."
          },
          {
            "p": "If your own surname happens to line up with a real Korean one by sound — Wang with 왕, Ye with 예 — we put that one first. Keeping a thread back to your original name is worth more than a surname chosen at random."
          },
          {
            "p": "You can pick a surname yourself or let us recommend one. Either way it will be **a surname that exists**."
          }
        ]
      },
      {
        "title": "Easy to say, easy to write",
        "blocks": [
          {
            "p": "This is a name people in Korea will actually call you by, so the first thing we check is whether a Korean can hear it once and write it down. A name that needs spelling out every time is a burden you carry, not us."
          },
          {
            "p": "Meaning matters too. Korean given names usually carry one, so we tell you what the name reads as and why we picked it — not just the name itself."
          }
        ]
      },
      {
        "title": "We ask what the name is for",
        "blocks": [
          {
            "p": "A name for university paperwork is not the same as a name friends will shout across a room, or a handle you will use online. We ask how you plan to use it and take that into account."
          }
        ]
      },
      {
        "kind": "note",
        "title": "This is not a transliteration",
        "blocks": [
          {
            "p": "Here we propose a **new Korean name**. If you want your existing name written in Hangul — Michael as 마이클 — see the [Hangul spelling guide](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notices",
    "title": "Notices",
    "summary": "Where we announce changes that affect how you use the service.",
    "backLabel": "Home",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contact",
    "title": "Contact us",
    "summary": "How to reach us for questions, refunds, privacy requests and error reports, with our company details.",
    "backLabel": "Home",
    "sections": [
      {
        "title": "Email us",
        "blocks": [
          {
            "p": "Write to **{email}**. We reply within two business days. For anything about an order — payment, refund, a file you did not receive — please include your **order number or the email you paid with**."
          },
          {
            "p": "Phone enquiries: {customerCenter} (Korean business hours)."
          }
        ]
      },
      {
        "title": "What to send here",
        "blocks": [
          {
            "ul": [
              "**Payments and refunds** — if a document was never produced, or the amount charged differs from your order, we refund in full. See the [refund policy](/refund-policy).",
              "**Privacy** — requests to access, correct or delete your data. See the [privacy policy](/privacy).",
              "**Corrections** — if a hanja meaning, reading or calculation looks wrong, tell us. Mentioning which screen and what you entered helps a great deal.",
              "**Anything else** — partnerships and press go to the same address."
            ]
          }
        ]
      },
      {
        "title": "Company details",
        "blocks": [
          {
            "ul": [
              "**Legal entity** — {companyName}",
              "**Representative** — {representative}",
              "**Business registration no.** — {businessNumber}",
              "**Mail-order sales no.** — {mailOrderNumber}",
              "**Address** — {address}",
              "**Customer service** — {customerCenter}",
              "**Email** — {email}",
              "**Privacy officer** — {privacyOfficer}",
              "**Hosting provider** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "You do not need to include a name or birth date in your message. Free results are never stored on our servers, so we cannot look them up again — an order number is enough."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Our Standards",
    "title": "What We Do Not Use",
    "summary": "We do not assign total fortune or numerical scores, nor do we use stroke counts. The five elements are used only as a supplementary axis. Here are the reasons.",
    "backLabel": "Usage Guide",
    "sections": [
      {
        "title": "Reasons for not assigning total fortune or numerical scores",
        "blocks": [
          {
            "p": "There are methods that assign total fortune or numerical scores to names to grade them. Naming-Link does not provide those numbers. The reasons are fourfold."
          },
          {
            "p": "**First, there is not just one standard.** The methods for calculating fortune vary by school, and the same name can be rated positively by one standard and negatively by another. We have no basis to decide which one is correct. It is dishonest to present one as if it were the answer."
          },
          {
            "p": "**Second, those calculations rely on stroke counts.** However, the Supreme Court data does not include stroke counts at all. Moreover, stroke counts can vary depending on whether they are counted as regular or simplified characters and how radicals are counted. Since the foundational numbers are not definitively established, the scores built on top of them cannot be definitive."
          },
          {
            "p": "**Third, numbers appear more solid than reality.** When it says \"87 points\", it reads like a measured value rather than a conventional interpretation. Those naming may feel pressured by that number, pushing aside what is truly important (Is it pleasant to call? Does the meaning fit? Does it contain the desired wishes?)."
          },
          {
            "p": "**Fourth, there is no way to verify.** The relationship between a name and a person's life cannot be verified. Converting something that cannot be said to be right or wrong into a score results in a number that cannot be confirmed, even though it cannot be wrong."
          },
          {
            "p": "We only use what can be **substantiated.** The Supreme Court official name-hanja table, the designated readings for each character, and the meanings listed in the table. Instead, we provide reasons for why this candidate was selected and why certain characters were excluded, showing **reasons instead of scores**."
          }
        ]
      },
      {
        "title": "We do not use stroke counts",
        "blocks": [
          {
            "p": "The official name-hanja data provided by the Supreme Court does not include stroke counts. Among the {characterTotal} characters we received, **not a single character has stroke counts.**"
          },
          {
            "p": "To use stroke counts, we would need to obtain numbers from somewhere else, but if we cannot clarify where those numbers came from and what criteria were used to count them, it would mean judging names based on unfounded numbers. We have decided not to evaluate names based on values that cannot be substantiated."
          }
        ]
      },
      {
        "title": "We use the five elements only as a reference",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "The five elements placed in a circle: generation runs between neighbours, control skips one",
              "wood": "wood",
              "fire": "fire",
              "earth": "earth",
              "metal": "metal",
              "water": "water",
              "saeng": "Generation — each gives rise to its neighbour",
              "geuk": "Control — each restrains the one it skips to"
            },
            "caption": "The relationships among the five elements. Moving along the circle represents mutual generation (相生), while skipping one and pressing down represents mutual restraint (相剋). We use this relationship only as a supplementary axis for comparing candidates."
          },
          {
            "p": "If you have entered your birth month, we use a simplified reference of the five elements based on that month as a supplementary axis for comparing candidates. However, this is not a precise saju analysis, and **we do not claim that names determine a person's fate or character.**"
          },
          {
            "p": "In the final selection, what we prioritize are sounds, combinations of meanings, the values the family wishes to convey, and whether it can actually be registered. If you have not entered your birth month, we completely exclude the five elements reference from the analysis — we do not make arbitrary assumptions about unknown information."
          },
          {
            "p": "If you want a precise saju-based analysis, we cover that in a separate detailed report. The reason we do not prioritize the five elements in the free hanja matching is that we do not want to present judgments based on the five elements derived from an incomplete birth date and time as if they were definitive."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Paid Products",
    "title": "What is included in paid products?",
    "summary": "We clarify how much is visible for free and what additional features come with payment for each product. Prices are retrieved from the actual product settings.",
    "backLabel": "Usage Guide",
    "sections": [
      {
        "title": "What is visible for free?",
        "blocks": [
          {
            "p": "Creating a name and viewing the results is **free**. No membership registration is required. You can see the matching meanings of hanja, creating Korean names, global name conversion, and Hangul pronunciation notation, along with recommended results and their justifications on the screen."
          },
          {
            "p": "Paid products do not **resell what has already been shown on the screen.** They open more candidates, add more explanations, or create a format that can be stored or transmitted."
          }
        ]
      },
      {
        "title": "Full disclosure of all candidates — {priceUnlock}",
        "blocks": [
          {
            "p": "Recommended results are structured to open candidates one by one. When viewing ads, one opens at a time, while this product **opens all remaining candidates at once**."
          },
          {
            "p": "If you are not in a hurry, you do not have to purchase. The **results from opening via ads and those from payment are completely the same** — it is just a matter of waiting, and paying does not yield better candidates."
          }
        ]
      },
      {
        "title": "Hanja Details — Three Stages",
        "blocks": [
          {
            "p": "There are three detailed products in the flow of selecting hanja to attach to a Hangul name."
          },
          {
            "ul": [
              "**Maximum 5 hanja candidates detailed** — {priceFiveDetail}. You can expand explanations for up to five candidates on the screen. There is no PDF.",
              "**Maximum 10 hanja candidates extended detailed PDF** — {priceTenDetail}. The number of candidates increases to ten, and a PDF document is included.",
              "**Maximum 10 hanja candidates saju and the five elements comprehensive report** — {priceTenSaju}. In addition to the above, it includes the saju chart derived from the birth date and the forces of the five elements, examining why a particular hanja suits that name from the perspective of the five elements."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja itself is publicly available information",
        "blocks": [
          {
            "p": "The usable hanja and their meanings come from the official name-hanja table set by the Supreme Court of Korea, and all are publicly available in the service's guidance documents. What the paid products sell is not hanja information but **the act of selecting and explaining it according to the name**."
          }
        ]
      },
      {
        "title": "PDFs for Global Users",
        "blocks": [
          {
            "p": "Documents available for converting foreign names into Korean names or writing names in Hangul. Prices follow the amounts displayed on the payment screen."
          },
          {
            "ul": [
              "**Korean Name Premium Report** — 3 pages. Includes a calligraphy cover, the meaning of the name and the reason for choosing it, and saju and the five elements interpretation.",
              "**Hangul Name Art** — 2 pages. Includes a calligraphy cover and pronunciation guide. It contains how to write the name in Hangul and how to pronounce it."
            ]
          }
        ]
      },
      {
        "title": "Name Stamp",
        "blocks": [
          {
            "p": "We engrave the name created on the screen into a physical stamp and send it to you. Prices vary by model — round seal {priceStampRound}, square seal {priceStampSquare}, ebony seal {priceStampEbony}. International shipping is also available."
          },
          {
            "p": "**From here, products include shipping.** Unlike the previous items, production and shipping take time, and a receiving address is required. Shipping information is used only for order processing and legal retention, and once processing is complete, it will be destroyed after the period specified in the policy."
          }
        ]
      },
      {
        "title": "Things to Know Before Buying",
        "blocks": [
          {
            "p": "**Digital products are provided immediately upon payment.** You can cancel and receive a full refund at any time before the download starts, but once the download is complete, withdrawal due to simple change of mind is restricted (Article 17, Paragraph 2 of the Electronic Commerce Act). This condition is separately agreed upon on the payment screen."
          },
          {
            "p": "**Complaints about the content of the results are not a reason for a refund.** However, if the document was not created, the file cannot be opened, or the payment amount differs from the order, it will be processed as a reissue or full refund."
          },
          {
            "p": "Detailed conditions are outlined in the [Refund Policy](/refund-policy) and [Pricing Guide](/pricing). This text serves as a guide to what is included, and the legal conditions are prioritized in those two documents."
          }
        ]
      }
    ]
  },
} satisfies Record<GlobalDocKey, DocPage>;

export const EN_NOTICES = {
  "kindLabels": {
    "service": "Service",
    "product": "Products",
    "policy": "Policy",
    "support": "Support"
  },
  "intro": "Changes to your terms of use — prices, policies — are posted here before they take effect. Internal improvements are not listed: what appears here is what you need to know.",
  "empty": {
    "title": "No notices yet",
    "body": "When something changes, it will appear here."
  },
  "effective": "Takes effect {date}",
  "pager": {
    "label": "Notice pages",
    "newer": "← Newer",
    "older": "Older →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Contact and About pages are now open",
      "body": [
        "Questions, refunds, privacy requests and error reports now have one place to go. The contact page in the footer lists our email and company details.",
        "What our answers are based on, and what we deliberately do not do, is written on the about page."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF reports are issued in English for Arabic and Khmer",
      "body": [
        "If you are using the service in Arabic or Khmer, the PDF you buy is produced in English. The tool that lays out our documents cannot yet set paragraphs in those two scripts.",
        "The screen stays in your language, and your name is printed in your own script inside the document.",
        "The same note appears before payment. When the tool supports these scripts, we will say so here."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Payments are not open yet",
      "body": [
        "Creating a name and reading the result is free today, and no account is needed.",
        "Paid items are not on sale yet. The amounts shown on the pricing page are what will apply once sales open."
      ]
    }
  }
} satisfies NoticeCopy;
