import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

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
  "guide/reading": {
    "eyebrow": "Readings",
    "title": "Fixed readings — one pronunciation per character",
    "summary": "The official table does not only list characters. It also fixes how each one is read when used in a name.",
    "backLabel": "Guide",
    "sections": [
      {
        "title": "A fixed reading for each character",
        "blocks": [
          {
            "p": "The name-hanja table does not only decide which characters may be used. **It also fixes how each character is read when it appears in a name.** That fixed reading is what registration goes by."
          },
          {
            "p": "Most hanja have several possible readings. A name, though, is written on documents and spoken aloud, so it needs exactly one. The table therefore assigns each character its reading for use in names, and no other reading can be registered."
          }
        ]
      },
      {
        "title": "So the sound comes first",
        "blocks": [
          {
            "p": "This is why Naming-Link fixes the sound before looking for hanja. If the name is \"지은\", the meaning can only be chosen among characters assigned the reading **지** and characters assigned the reading **은**."
          },
          {
            "p": "However good a meaning is, a character whose reading does not match cannot be used for that name. We also never change the sound of a name to fit a character — a name is spoken for a lifetime, and the sound is settled first, with the hanja following."
          }
        ]
      },
      {
        "title": "Family names are outside this table",
        "blocks": [
          {
            "p": "This is often misunderstood. **The table governs the given name, not the family name.** A family name follows what is already on the family register, so some people do use characters that are not in the name-hanja table."
          },
          {
            "p": "That is why Naming-Link treats surname hanja differently. We only help you find a surname, and we leave a field for entering one directly, for people whose character is outside the table. Two-syllable surnames such as Namgung and Seonwoo are entered the same way."
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
  "guide/avoid": {
    "eyebrow": "Customs",
    "title": "Characters Traditionally Avoided",
    "summary": "It is not prohibited by law but is a custom. We have written about what has been avoided and why, and how we handle it.",
    "backLabel": "Usage Guide",
    "sections": [
      {
        "title": "Characters That Are Legally Acceptable",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} characters",
                "label": "Compiled Avoided Characters"
              },
              {
                "value": "{avoidCommonlyUsed} characters",
                "label": "Among them, characters still commonly used"
              }
            ]
          },
          {
            "p": "There are characters that are included in the list of characters for personal names and **are legally acceptable**, yet are considered unsuitable for names."
          },
          {
            "p": "The underlying thought is that **\"excessive meaning is actually undesirable.\"** This includes characters that are considered too precious (珍 treasure, 寶 jewel), characters viewed as having too strong a presence (王 king, 帝 emperor), and those regarded as too grand for a person to embody, like heaven or deities. This reflects an old sense of restraint, believing that a name can overshadow the person."
          },
          {
            "p": "**However, these characters are not unusable.** It is not a legal prohibition but a custom, and customs vary by region, family, and generation, and can change over time."
          },
          {
            "p": "In fact, among the {avoidTotal} characters we compiled, {avoidCommonlyUsed} are still commonly used in names. The fact that they are known to be avoided yet still widely used indicates that this custom is not absolute."
          }
        ]
      },
      {
        "title": "What Categories Are There?",
        "blocks": [
          {
            "p": "The currently compiled characters are divided into seven categories."
          },
          {
            "ul": [
              "**Treasures and Objects** — Characters that directly refer to wealth or items",
              "**Heaven and Nature** — Things like the sun, moon, and sky that are considered too grand for a person to embody",
              "**Kings and Nobility** — Characters that signify status, like king or emperor",
              "**Divine Beings** — Characters that refer to sacred realms, like gods or spirits",
              "**Seasons and Others** — Characters tied to specific times or states",
              "**Animals** — Animals considered to have strong energy, like dragons or tigers",
              "**Excessiveness** — Characters viewed as having overly large or overflowing meanings"
            ]
          }
        ]
      },
      {
        "title": "You Can Add or Remove Characters Yourself",
        "blocks": [
          {
            "p": "We do not arbitrarily delete these characters. **We have provided two options on the input screen for the namer to choose how to handle them.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Options Available on the Input Screen",
        "blocks": [
          {
            "p": "**Exclude Avoided Characters from Candidates** — If enabled, they are completely excluded. If disabled, they remain in the results with a \"Traditionally Avoided\" label and the reason attached."
          },
          {
            "p": "**Exclude Even Commonly Used Characters** — This excludes characters that are on the avoidance list but are actually widely used (圭·琳·玲·元·太·星·海, etc.). If enabled, the candidates will be significantly reduced."
          },
          {
            "p": "The default is to **not exclude but only display** them. If they are quietly removed from the list, it may appear to those who want to use that character as if it does not exist."
          }
        ]
      },
      {
        "title": "Ensuring Options Do Not Disappear",
        "blocks": [
          {
            "p": "If there are no usable characters left for that syllable, we will lift the exclusion for that syllable and show candidates. We believe it is better than having no options at all."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Service Basis",
    "title": "What Is the Basis for Global Name Conversion?",
    "summary": "We provide candidates from five perspectives, maintaining the writing systems of each language and using only existing names.",
    "backLabel": "Usage Guide",
    "sections": [
      {
        "title": "Candidates Are Provided from Five Perspectives",
        "blocks": [
          {
            "p": "There is not just one way to translate a name into another language. Depending on whether to preserve the sound or the meaning, choose a natural name in the local context or prioritize individuality, the answers will differ. Therefore, instead of presenting one option, we provide **one from each of five different perspectives**."
          },
          {
            "ul": [
              "**Sound Preservation Option** — Preserves the original name's sound as much as possible",
              "**Meaning Translation Option** — Translates the meaning contained in the name into the name of that language",
              "**Sound and Meaning Compromise Option** — Takes half from each",
              "**Local Authentic Option** — Chooses names that are actually commonly used in that cultural context",
              "**Individuality and Branding Option** — Prioritizes names that are memorable and distinctive"
            ]
          },
          {
            "p": "Five options are guaranteed to be provided. Since preferences vary from person to person, we believe it is better to allow choices rather than presenting one as the correct answer."
          }
        ]
      },
      {
        "title": "Each Language Has Different Writing System Rules",
        "blocks": [
          {
            "p": "When translating into a language that does not use Roman letters, it must be written in that language's script. For Japanese, it would be kana and kanji; for Russian, Mongolian, and Kazakh, it would be Cyrillic; for Arabic, it would be Arabic script; and for Thai, Khmer, and Hindi, it would be their respective scripts. If you write it in Roman letters and call it a \"Japanese name,\" it cannot be used in that country."
          },
          {
            "p": "Therefore, we have separate rules for each language's writing system, and the server checks once more to ensure the results are in that writing system. Mistakes such as omitting surnames or mixing in Hangul are filtered out here."
          }
        ]
      },
      {
        "title": "We Use Names That Are Actually Used",
        "blocks": [
          {
            "p": "To avoid creating names that sound plausible but do not exist in that country, we base our options on existing names. Names are used in documents and introductions, so if a local person thinks \"there is no such name,\" it cannot be used."
          }
        ]
      },
      {
        "title": "We Separate Selection and Description",
        "blocks": [
          {
            "p": "We handle the task of determining five candidates separately from the task of describing each candidate in detail. Since the description takes a lot of time, we separate that part to create it simultaneously."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Why Was This Changed?",
        "blocks": [
          {
            "p": "Initially, we created the five perspectives separately. It was faster, but **the number of candidates varied each time.** As each person selected candidates, there were overlaps or discrepancies, and if one failed, that candidate would disappear entirely, resulting in only two or three instead of five."
          },
          {
            "p": "Now, since we determine the candidate set and perspective distribution at once, **the number is fixed.** Even if one description fails, the candidates remain and are presented with brief information. We believe it is better to consistently have the same number, even if it takes a bit longer."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Service Basis",
    "title": "What is the basis for matching hanja meanings?",
    "summary": "First, the sounds are fixed, and only hanja that can be registered with that sound are gathered, and the meaning is viewed as a combination rather than a single character.",
    "backLabel": "Usage Guide",
    "sections": [
      {
        "title": "First, fix the sounds",
        "blocks": [
          {
            "p": "If you have decided on \"지은\", then **지** and **은** do not change. We do not alter the sound of the name to match the hanja. A name is something that is called for a lifetime, and we believe that the order is that the sound is fixed first, followed by the hanja."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "This is the order in which candidates are narrowed down. It is not about choosing hanja first and matching the sounds, but rather that the sounds come first, and only characters designated to be read with that sound become candidates."
          }
        ]
      },
      {
        "title": "Gather only hanja that can be registered with that sound",
        "blocks": [
          {
            "p": "The official name-hanja table has a designated reading for each character when used in names. Only characters designated to be read as **지** and **은** become candidates. No matter how good the meaning is, if the reading does not match, it cannot be the hanja for that name."
          },
          {
            "p": "The range for selecting candidates is the {characterTotal} characters from the Supreme Court table. Characters not in this table are not presented at all — even if shown, they cannot be registered."
          },
          {
            "p": "The number of characters in the table published by the Supreme Court is slightly more than this. The table also includes **characters without standard character codes**, which cannot be properly displayed on screens and documents, so those characters have been excluded from the candidates. You must check with the relevant authority whether you can register with those characters."
          }
        ]
      },
      {
        "title": "Meaning is viewed as a combination, not a single character",
        "blocks": [
          {
            "p": "The meaning of each individual character being good and the meaning read when two characters are combined being good are different. Names are read as combinations, so we look at the combinations together. If you have specific meanings you wish to include or avoid, those are taken into account."
          },
          {
            "p": "If you are using a generation character, that character is fixed, and combinations are sought from the remaining positions. The family name (성) is not restricted by the official name-hanja table, so it is treated separately."
          }
        ]
      },
      {
        "title": "We indicate avoidance customs without removing them",
        "blocks": [
          {
            "p": "If a character traditionally considered to be avoided is included in the candidates, we do not remove it but show the reason along with it. This is a matter of custom, not law, and you can choose to exclude it entirely from the input screen. For more details, see [Traditionally Avoided Hanja](/guide/avoid)."
          }
        ]
      },
      {
        "title": "We also inform you of the reasons for exclusion",
        "blocks": [
          {
            "p": "We show why certain characters were excluded from the candidates. If we only show what was chosen, you cannot know \"why this one?\" If there are no usable characters left for that syllable, we will lift the exclusion for that syllable and show the candidates."
          }
        ]
      },
      {
        "kind": "note",
        "title": "How to read the results",
        "blocks": [
          {
            "p": "Candidates are **perspectives, not rankings**. The first one does not mean it is the best name; they are selected from different perspectives. Those that prioritize the combination of meanings, those that choose uncommon characters, and those that emphasize neutrality are presented side by side. The answer varies depending on which perspective you value."
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
  "guide/hanja-basics": {
    "eyebrow": "System",
    "title": "What is the official name-hanja?",
    "summary": "The hanja that can be used for children's names has been established by the Supreme Court in a table. This summarizes what the table is and why it has been set.",
    "backLabel": "Usage Guide",
    "sections": [
      {
        "title": "What is the official name-hanja?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} characters",
                "label": "Official name-hanja"
              },
              {
                "value": "{syllableCount} syllables",
                "label": "Hangul syllables included"
              },
              {
                "value": "{effectiveDate}",
                "label": "Table reference date"
              }
            ]
          },
          {
            "p": "You cannot use just any character for a child's name. **The hanja that can be used for birth registration has been established by the Supreme Court in a table, and only the characters in that table can be registered as the hanja for names.** This is called official name-hanja."
          }
        ]
      },
      {
        "title": "Why has it been established?",
        "blocks": [
          {
            "p": "There are tens of thousands of hanja. Among them, some have unpleasant meanings, some are no longer used and have no known readings, and some cannot be displayed on computers at all. If such characters are included in a name, the person who ultimately bears the burden is the one who will use that name for a lifetime. Names can be broken or read differently in various places such as resident registration, passports, banks, and schools, requiring the individual to explain their own name."
          },
          {
            "p": "Therefore, a method has been chosen to predefine the range of hanja that can be used in names. Rather than being a restrictive regulation, it is more of a mechanism to ensure that names can be used without issues throughout a person's life."
          }
        ]
      },
      {
        "title": "What is the basis for the definitions?",
        "blocks": [
          {
            "p": "The Supreme Court establishes the official name-hanja table, which is revised as necessary, and characters are added."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Materials used in this screen",
        "blocks": [
          {
            "p": "{publisher} official name-hanja data · As of {effectiveDate}"
          },
          {
            "p": "{characterTotal} characters cover {syllableCount} Hangul syllables. The hash value of the original file is also stored, so if the table changes, it can be checked when and what has changed."
          }
        ]
      },
      {
        "title": "The number of characters announced by the Supreme Court differs from what we show",
        "blocks": [
          {
            "p": "**The official name-hanja announced by the Supreme Court is {announcedTotal} characters, while what we present as candidates is {characterTotal} characters.** There is no reason to hide this difference, so we state it plainly."
          },
          {
            "p": "If you check the Supreme Court's inquiry data, it contains {listedTotal} characters. Among them, **{excludedNoStandardCode} characters** are **characters that do not have a place in the global common character code (Unicode).** The Supreme Court's system treats such characters with numbers that only work within its own system, and they are displayed as **images** rather than characters on the screen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Adding more fonts won't solve the issue",
        "blocks": [
          {
            "p": "For a character to appear on the screen, it must have a **number agreed upon by the world**, and the font contains the image corresponding to that number. Characters that do not have a number cannot be included in any font. No matter how many fonts we add, these characters will appear as empty squares."
          }
        ]
      },
      {
        "title": "Therefore, they have been removed from the candidates",
        "blocks": [
          {
            "p": "**Filling the list with characters that cannot be displayed is not helpful.** Most of the meanings of these characters are also empty in our data, which does not align with the service's method of choosing names based on meanings."
          },
          {
            "p": "**The more important reason lies with the person who will use the name.** A name is a value that will be entered in various places throughout a person's life. Characters without character codes may not be able to be entered or printed in systems for banks, schools, hospitals, or passports, even after completing birth registration. Therefore, we cannot recommend such characters."
          },
          {
            "p": "However, **we do not determine whether those characters can be used or not.** Since they are characters in the Supreme Court's table, registration itself may be possible. If you really want to use that character, please check directly in the Supreme Court's electronic family relationship registration system, and **inquire with the relevant authority about the actual usability.**"
          }
        ]
      },
      {
        "title": "If you want to use hanja not in the table",
        "blocks": [
          {
            "p": "You cannot use them. To be precise, those characters will not be registered as hanja for the name, and the name will only be recorded in Hangul. If you want to use hanja alongside, you must choose from the table."
          },
          {
            "p": "Therefore, we do not present characters that are not in the table as candidates. All hanja visible on the screen are characters that can actually be used for birth registration. The complete list is available in the [Complete List of Official Name-Hanja](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "List",
    "title": "Complete List of Official Name Hanja",
    "summary": "We have organized the hanja that can be used for birth registration by initial consonant. You can see the designated reading and meaning for each character when used in names.",
    "backLabel": "Usage Guide",
    "sections": [
      {
        "title": "Search by Initial Consonant",
        "slot": "chosung",
        "blocks": [
          {
            "p": "This includes all {characterTotal} characters from the Supreme Court's official name-hanja table. Each character includes the **reading when used in names** and its meaning. Characters not included in the table cannot be registered as name hanja, so you should choose from the characters listed here."
          },
          {
            "p": "The two numbers on the button below represent the **number of characters with that initial consonant** and the **number of syllables covered**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "If the character you are looking for is not in the list",
        "blocks": [
          {
            "p": "The number of characters announced by the Supreme Court is {announcedTotal}, but this list contains {characterTotal} characters. **The difference of {excludedNoStandardCode} characters are those that cannot be displayed in any font due to the lack of a place in the universal character code.** The Supreme Court's system shows those characters as images."
          },
          {
            "p": "We have detailed the reasons for this and why we do not recommend those characters in [What is Official Name Hanja?](/guide/hanja-basics). You should check with the relevant authority for the actual usability of those characters."
          }
        ]
      },
      {
        "title": "Initial Consonants with Few Characters",
        "slot": "tiny",
        "blocks": [
          {
            "p": "The initial consonants below have very few official name hanja, so we have displayed them here without a separate page."
          }
        ]
      },
      {
        "kind": "note",
        "title": "How to Read This List",
        "blocks": [
          {
            "p": "For **伽 · 가 · 절**, when using \"伽\" in a name, it is read as **가** and means \"temple\". Even for the same hanja, the reading when used in names is fixed by the table, and it cannot be used in any other way."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

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
