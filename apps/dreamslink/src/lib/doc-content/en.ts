import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/**
 * 영어판. **번역기가 21개 로케일을 만들 때 구조와 어투의 본이 되는 벌이다.**
 *
 * 저장소에 직접 적어 둔 글과, `--fill-en`이 한국어에서 만든 글이 함께 있다. 뒤엣것은
 * `translate-doc-content.ts --fill-en`이 **없는 키만** 채운 것이라 앞엣것을 덮지 않는다.
 */
export const EN_DOCS = {
  "guide": {
    "eyebrow": "Basis for Calculation",
    "title": "What is the basis for calculation?",
    "summary": "We disclose all the rules that Dreams-Link uses. You can check which symbols are found, what is written in the dictionary — where the interpretations displayed on the screen come from.",
    "backLabel": "Back to Home",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "All the numbers written here are **read directly from the symbol dictionary and the matching rules.** Since we do not manually transcribe the text, if the dictionary is expanded or the rules are changed, the numbers in these documents will also change."
          }
        ]
      }
    ]
  },
  "guide/how-matching-works": {
    "eyebrow": "Basis for the Service",
    "title": "How to find symbols in dream stories.",
    "summary": "It explains how symbols are selected from freely written sentences and how we filter out a symbol that merely happens to sit inside a longer word — 별 (\"star\") inside 특별할 (\"nothing special\").",
    "backLabel": "Basis for Interpretation",
    "sections": [
      {
        "title": "We find symbols in the text you provide.",
        "blocks": [
          {
            "p": "When you freely write your dream story, we search for symbols in that text from the dictionary. You do not need to select items or write in a specific format. Just write as you normally would, like 'Last night, a huge python wrapped around me.'"
          },
          {
            "p": "When searching, we look not only at the name of the symbol but also at **{aliasTotal} alternative names**. These are words that refer to the same thing, like 구렁이 (gureongi) and 뱀 (baem), 떨어지다 (tteoreojida) and 빠지다 (ppajida). Variations with endings, such as 「떨어지는」 (tteoreojineun) · 「쫓겨서」 (jjotgyeoseo) · 「빠졌다」 (ppajyeotda), are also included."
          }
        ]
      },
      {
        "title": "Characters that accidentally appear within a word do not count",
        "blocks": [
          {
            "p": "This is the most challenging aspect in Korean. Among the symbols, there are **{singleCharSymbolTotal} single-character symbols** like **별** (byeol) · **말** (mal) · **배** (bae) · **손** (son), which frequently appear in other words."
          },
          {
            "ul": [
              "별 (\"star\") hiding inside 특**별**할 (\"nothing special\")",
              "게 (\"crab\") hiding inside 누군가에**게** (\"by someone\")",
              "The symbol 말 (mal, \"horse\") sits inside the everyday word **말**했다 (malhaetda, \"said\"), and 배 (bae, \"boat\" or \"pear\") sits inside **배**가 고팠다 (baega gopatda, \"I was hungry\")"
            ]
          },
          {
            "p": "Counting these as symbols leads to irrelevant interpretations. Therefore, we examine the surrounding characters — if **there is a Korean character in front**, we treat it as part of a longer word and do not count it, and we look at **whether what follows is a particle or a verb ending**, allowing 「소가」 (soga) to pass while filtering out 「소리」 (sori)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "This is how it has been working",
        "blocks": [
          {
            "p": "Before implementing this rule, when testing with twelve actual sentences, **all twelve** contained irrelevant symbols. One sentence with no significant content was even marked as a a conception dream."
          },
          {
            "p": "Now, one remains — the 배 (bae) in 「배가 고팠다」 (bae ga gopatda). Since it sounds the same but has a different meaning, it cannot be filtered out by just the surrounding characters."
          },
          {
            "p": "Not finding something is an honest matter. However, finding something irrelevant means establishing a tradition behind that word that it never had."
          }
        ]
      },
      {
        "title": "The same characters always yield the same results",
        "blocks": [
          {
            "p": "There is no place for coincidence in the matching rules. Since the dictionary is fixed and the rules are established, if you input the same sentence again, **the same symbol will appear in the same order**. The interpretation you see today will not differ from the one you see tomorrow."
          },
          {
            "p": "This quality is also a promise we have made to ourselves. Interpretations that change every time are entertaining but lack foundation. This connects to the story of [why we do not use models](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Personal Information",
    "title": "The Method of Not Storing Dreams You Write Down",
    "summary": "We explain what it technically means that dream stories are not recorded anywhere, and what is contained in the result link.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "No Membership Required",
        "blocks": [
          {
            "p": "Dreams-Link does not create accounts. We do not collect names, emails, or phone numbers. The only things we collect are the dreams you write down, how you felt when you woke up, and whether you dream the same dream repeatedly, and that does not remain after the interpretation is complete."
          },
          {
            "p": "Dream stories are the most private of the values this service receives. This is why the rules are stricter than necessary — we have not even created a table to write down what you submit."
          }
        ]
      },
      {
        "title": "What is contained in the result link",
        "blocks": [
          {
            "p": "When the calculation is complete, the address will look like this."
          },
          {
            "p": "**/ko/dream/result#eyJ0IjoiSSBkcmVhbXQgb2YgYSBjYXJwLi4u**"
          },
          {
            "p": "What follows **#** is the input value. This part is called a **fragment**, which is a **part that the browser does not send to the server**. This is standard web behavior and not a rule we created — it was originally designed to indicate a location within a document, so the server has no need to see it."
          },
          {
            "p": "Here, this property is particularly important — the dream you provided **does not remain in the access records.**"
          },
          {
            "p": "In other words, when you open the result link, the browser reads that value to request a calculation, and our server receives the value for the calculation, returns the answer, and then forgets it."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Please be careful when sending links to others",
        "blocks": [
          {
            "p": "The fact that it is not stored on the server does not mean that the link is safe. The result link contains the dream you provided, so the person who receives that link can read that content."
          }
        ]
      },
      {
        "title": "Why is the calculation done on the server but not stored?",
        "blocks": [
          {
            "p": "The calculation itself is done on the server. Finding symbols requires the entire dictionary, and that dictionary is too large to be sent down to the browser. Keeping the dictionary on the server also means that when a mistake is fixed, it is reflected for everyone at once. However, **after processing the request, that value is not used anywhere.** There is no code to insert it into the database."
          },
          {
            "p": "A minimal record necessary for operation is kept — a counter to prevent the same person from sending too many requests in a short time. This does not include the dream content, and the access IP is also not retained. Only one value, hashed with the date, is counted, and that value changes when the day changes."
          }
        ]
      },
      {
        "title": "What cannot be done because it is not stored",
        "blocks": [
          {
            "p": "To be honest, there are things we have given up because we do not store data."
          },
          {
            "ul": [
              "**There is no dream diary.** You cannot retrieve the interpretation from last week, and you must have the link to see it again. This is done intentionally — to create a diary, the most private writings must be continuously stored.",
              "**We compute the same value again every time.** There is no cache. Instead, the dictionary is fixed, and the matching rules are deterministic, so the same text will always yield the same symbol — the rules replace what the cache would have guaranteed.",
              "**Refreshing will bring up the advertisement gate again.** This is because there is nowhere to leave viewing records."
            ]
          }
        ]
      },
      {
        "title": "In case of purchase",
        "blocks": [
          {
            "p": "If you purchase a report, a transaction record will be kept at that time. The payment has a legally defined retention period, and without an order history, refunds cannot be processed. However, even then, **the dream text used for the reading is not attached to the order** — it is received again and written at that moment when creating the document after payment confirmation."
          },
          {
            "p": "For details, please refer to the [privacy policy](/privacy)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notice",
    "title": "Announcements",
    "summary": "This is a place to inform you of changes that may affect your use.",
    "backLabel": "Back to Home",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contact",
    "title": "Inquiries",
    "summary": "This is the channel for inquiries about use, refunds, personal information requests, and error reports, along with business information.",
    "backLabel": "Back to Home",
    "sections": [
      {
        "title": "Contact by Email",
        "blocks": [
          {
            "p": "Please send inquiries to **{email}**. We will respond within 2 business days. For payment and refund inquiries, it is faster to include your **order number or payment email**."
          },
          {
            "p": "Phone inquiries are received at {customerCenter}."
          }
        ]
      },
      {
        "title": "What can be sent to this channel?",
        "blocks": [
          {
            "ul": [
              "**Payment and Refund** — If the document has not been created or the payment amount differs from the order, a full refund will be provided. Conditions are in the [refund policy](/refund-policy).",
              "**Personal Information** — We accept requests for access, correction, and deletion. The processing policy is in the [privacy policy](/privacy).",
              "**Report Interpretation Errors** — If symbols were found incorrectly or the interpretation seems strange, please let us know. If you include when you wrote that dream story, we can look it up again with the same text."
            ]
          }
        ]
      },
      {
        "title": "Business Information",
        "blocks": [
          {
            "ul": [
              "**Business Name** — {companyName}",
              "**Representative** — {representative}",
              "**Business Registration Number** — {businessNumber}",
              "**Mail Order Business Registration Number** — {mailOrderNumber}",
              "**Address** — {address}",
              "**Customer Center** — {customerCenter}",
              "**Email** — {email}",
              "**Personal Information Protection Officer** — {privacyOfficer}",
              "**Hosting Provider** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "You do not need to rewrite the dream you provided in the inquiry email. We do not save inputs, so we cannot look them up again, and the order number is sufficient for verification. Please only write it down if it is absolutely necessary, such as for reporting interpretation errors."
          }
        ]
      }
    ]
  },
  "guide/what-we-do-not-do": {
    "eyebrow": "Service Principles",
    "title": "What We Do Not Do",
    "summary": "We do not provide lottery numbers, dream journals, pregnancy determinations, or talismans. We explain why we have chosen not to do each of these.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "We do not provide lottery numbers",
        "blocks": [
          {
            "p": "Although it is commonly addressed in dream interpretation services, we do not do this. **There is no basis in traditional dream interpretation for drawing numbers from dreams.** While there are records of interpreting pig dreams as wealth, there is no rule in any literature that produces six numbers from that."
          },
          {
            "p": "To create them, we would have to make them up, and at that moment, this service would no longer be a place for conveying the interpretations handed down by tradition. This is especially concerning as it could lead to financial loss."
          }
        ]
      },
      {
        "title": "We do not create dream journals",
        "blocks": [
          {
            "p": "While it would be convenient to have a feature to collect past dreams, it would require us to **continuously store the dreams you provide.** Dream narratives are the most private aspect of what this service receives, and we have decided not to exchange that."
          },
          {
            "p": "Instead, dreams you wish to keep can be **taken as images or documents.** The responsibility for storage lies with the users, not us — [Two Ways to Keep Your Dreams](/guide/reports)"
          }
        ]
      },
      {
        "title": "We do not determine pregnancy or gender",
        "blocks": [
          {
            "p": "We will only state that a symbol interpreted as a a conception dream (conception dream) has appeared. Whether you are pregnant or whether the child is a daughter or son is **not something that can be known through dreams.** Such statements do not appear on the screen or in paid documents."
          }
        ]
      },
      {
        "title": "We do not sell talismans or charms",
        "blocks": [
          {
            "p": "A symbol read as inauspicious is not a reason to buy anything. An inauspicious dream has traditionally been used to **indicate a situation to examine now**, not to pay to avert something."
          },
          {
            "p": "We do not create anxiety to sell something based on it. The only things we sell are the two mentioned above, and neither provides additional interpretation but rather **ways to keep the same content.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "We do not make definitive statements about the future",
        "blocks": [
          {
            "p": "We do not make definitive statements about whether something will happen, when it will happen, or regarding health, wealth, or lifespan. Conveying the meanings of traditional symbols and predicting the future are different matters."
          }
        ]
      },
      {
        "title": "We do not fabricate interpretations that do not exist",
        "blocks": [
          {
            "p": "For symbols that do not exist in the dictionary, we will **state that we could not find them.** We do not cobble together similar ones or fill the space with plausible sentences. Therefore, this service does not [use artificial intelligence for dream interpretation](/guide/no-ai). The model does not say it does not know what it does not know."
          }
        ]
      }
    ]
  },
  "about": {
    "eyebrow": "Introduction",
    "title": "Introduction to Dreams-Link",
    "summary": "This is a service that interprets dreams using a traditional dream interpretation symbol dictionary. It clarifies what is based on and what is not stated.",
    "backLabel": "Back to Home",
    "sections": [
      {
        "title": "What do we do?",
        "blocks": [
          {
            "p": "Dreams-Link finds **symbols used in traditional dream interpretation** from the dreams you write and shows their meanings. Since dreams are something we have every day, the interpretations you see on the screen are **free and do not require membership.**"
          },
          {
            "p": "The only things sold for a fee are **two forms of preservation** — an image containing a good dream (dream card) and a PDF that contains the background when a symbol traditionally considered a conception dream appears."
          }
        ]
      },
      {
        "title": "What is the basis?",
        "blocks": [
          {
            "p": "The basis for interpretation is a **dictionary of {symbolTotal} symbols**. We find symbols in the dream text and only show the meanings recorded in the dictionary for those symbols. If a symbol has multiple meanings, we choose based on the situation — as the rising sun and the setting sun are traditionally interpreted as opposites."
          },
          {
            "p": "All meanings in the dictionary are **translated from the original texts of old dream interpretation books**, and each meaning is accompanied by the original text that served as its basis. The original texts used as the basis are two — the **Zhou Gong's Dream Interpretation**, which has been read for a long time in East Asia, and the **Miller's Dream Book** from the West published in 1901."
          },
          {
            "p": "The search is done **only by fixed rules**. The same dream will always yield the same symbols, and interpretations do not change from yesterday to today."
          }
        ]
      },
      {
        "title": "What do we not say?",
        "blocks": [
          {
            "p": "**We do not create traditional meanings that are not in the dictionary.** If no symbols are found, we simply state that none were found and conclude. Filling that space with plausible words is what this service is most cautious about."
          },
          {
            "p": "**Conception dreams are merely indications, not determinations.** We only inform you that a symbol traditionally considered a conception dream appeared in the dream. We do not predict pregnancy or the child's gender, and there is no basis for such claims."
          },
          {
            "p": "We do not **make definitive statements about health, wealth, or career.** This is a reference from the perspective of traditional dream interpretation and is not medical, financial, or legal advice."
          }
        ]
      },
      {
        "title": "We do not keep the dreams you write.",
        "blocks": [
          {
            "p": "Dream stories are the most private part of what this service receives. Therefore, we **do not store them.** Inputs are only used for calculations and are not recorded on any form on the server."
          },
          {
            "p": "We decided **not to create a function to collect dreams like a dream diary.** It is a valuable feature, but it would require keeping the most private writings."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "The method is described in more detail in the [guide document](/guide). Business information and contact details can be found in [contact us](/contact)."
          }
        ]
      }
    ]
  },
  "guide/symbol-dictionary": {
    "eyebrow": "Basis of the service",
    "title": "What is the basis of the symbol dictionary?",
    "summary": "It clarifies where the interpretations come from. The criteria for dividing {symbolTotal} symbols into eight categories, the reason for attaching original text passages to each meaning, and the principle of not filling in empty spaces.",
    "backLabel": "Interpretation basis",
    "sections": [
      {
        "title": "We only show what is written in the dictionary.",
        "blocks": [
          {
            "p": "Dreams-Link's interpretations come from a **pre-written symbol dictionary**. We find symbols in the text you provide and show the meanings recorded in the dictionary for those symbols as they are. We do not create words that are not in the dictionary."
          },
          {
            "p": "Currently, the dictionary contains **{symbolTotal} symbols**, and all those symbols have a total of **{meaningTotal} meanings**. Some symbols have only one meaning, but most have several, and for each meaning, **the situation in which that meaning applies** is also noted."
          }
        ]
      },
      {
        "title": "Divided into eight categories.",
        "blocks": [
          {
            "p": "We grouped what appears in dreams into eight categories based on their characteristics. The number currently listed is in parentheses."
          },
          {
            "ul": [
              "**Objects**({categoryThing}) · **Actions**({categoryAction}) · **Animals**({categoryAnimal}) — the three thickest categories. These are mainly what old dream interpretation books discuss: visible objects, beasts, and actions taken in dreams.",
              "**Nature**({categoryNature}) · **People**({categoryPerson}) — large and ancient things like water, fire, sun, and moon, and people who appear in dreams like kings, thieves, and the deceased.",
              "**Places**({categoryPlace}) · **Body**({categoryBody}) · **Colors**({categoryColor}) — locations like houses and graves, body parts like teeth, hair, and blood, and colors."
            ]
          },
          {
            "p": "To view them by category, you can see the complete list in the [symbol dictionary](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Each meaning is accompanied by an original text passage.",
        "blocks": [
          {
            "p": "Each of the **{meaningTotal} meanings** in the dictionary is accompanied by the **original text passage** that served as the basis for that meaning. All {symbolTotal} symbols have this — if there is no original text passage, the entry itself cannot be created."
          },
          {
            "p": "The original texts used as the basis are two. **Zhou Gong's Dream Interpretation** is a dream interpretation book that has been read for a long time in East Asia, and **Miller's Dream Book** is a Western book published in 1901. When you open a symbol, you can see which original text the meaning comes from, along with the passage and its meaning."
          },
          {
            "p": "**We do not fill in empty spaces.** Adding plausible origins would make the document thicker, but at that moment, this dictionary would no longer be a translation of what has been handed down but rather a fabrication. We do not write what is not in the original text, and for what we write, we must attach the original text."
          }
        ]
      },
      {
        "kind": "note",
        "title": "When expanding, we only expand from the original text.",
        "blocks": [
          {
            "p": "We have tried to create entries based on models of symbols, but the resulting entries either repeat the same words like 「love → good relationship」 or fail to provide any basis from the tradition. Therefore, **we did not include any.** The current size of the dictionary is due to translating the original texts, not creating entries — the reasons for not using models are detailed in [why we don't use models](/guide/no-ai)."
          }
        ]
      },
      {
        "title": "Good and bad are predetermined by the dictionary.",
        "blocks": [
          {
            "p": "Each symbol is accompanied by indications of auspiciousness and inauspiciousness. **Good {polarityPositive}**, **ambivalent depending on the situation {polarityAmbivalent}**, **cautionary {polarityNegative}**, and **neutral {polarityNeutral}**."
          },
          {
            "p": "Among the four categories, **the most are those that vary depending on the situation.** This is not something we balanced; it is how it is written in the original texts — even for the same symbol, there are many places where it has been interpreted oppositely depending on what was done. This value reflects the nature of each symbol, and the overall atmosphere of the dream is recalculated by gathering the found symbols."
          }
        ]
      }
    ]
  },
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Service Basis",
    "title": "Why the same symbol has different meanings.",
    "summary": "The rising sun and the setting sun are traditionally interpreted as opposites. This discusses the structure where {symbolTotal} symbols have {meaningTotal} meanings and how to discern the situation.",
    "backLabel": "Interpretation basis",
    "sections": [
      {
        "title": "Even if the symbols are the same, different situations yield different meanings.",
        "blocks": [
          {
            "p": "In old dream interpretation books, a symbol does not always have one meaning. Even for the same sun, **the rising sun and the setting sun have been interpreted oppositely** — the former indicates prosperity in the household, while the latter indicates worries about losing parents. The dictionary is written that way."
          },
          {
            "p": "The reason the {symbolTotal} symbols have a total of {meaningTotal} meanings is that for each meaning, **the situation in which that meaning applies** is also noted, so if that situation is visible in the text you provide, we choose that meaning."
          }
        ]
      },
      {
        "title": "How do we discern the situation?",
        "blocks": [
          {
            "p": "We look to see if there are words indicating the situation in the text you provide. In the phrase 「I saw the sun setting」, the situation of setting is indicated, while in 「I saw the sun just rising」, the situation of rising is indicated. If there are no words indicating the situation, we interpret it based on the **basic meaning** of that symbol."
          },
          {
            "p": "So when you write down your dream, please include **not only what appeared but also what actions were taken**; this will make the interpretation more accurate. Saying \"I saw a pig\" conveys less than \"the pig entered the house.\""
          }
        ]
      },
      {
        "kind": "note",
        "title": "The more you write, the better, but there is no need to write extensively.",
        "blocks": [
          {
            "p": "A few sentences are sufficient. Writing more does not necessarily mean finding more symbols; rather, if unrelated statements are mixed in, it may lead to incorrect symbols."
          }
        ]
      },
      {
        "title": "There are {contextSplitSymbolTotal} symbols with varying meanings.",
        "blocks": [
          {
            "p": "Out of the {symbolTotal} symbols in the dictionary, **{contextSplitSymbolTotal}** have meanings that vary depending on the situation. The rest can be interpreted in one direction regardless of the situation."
          },
          {
            "p": "These **{contextSplitSymbolTotal}** symbols are the most delicate. Misreading the situation can lead to conveying good news as bad news, or vice versa. Therefore, if the situation is unclear, we go with the **basic meaning of the symbol** without forcing a choice — we do not want to speak of the uncertain as if it were certain."
          }
        ]
      },
      {
        "kind": "note",
        "title": "The feeling upon waking is also taken into account.",
        "blocks": [
          {
            "p": "The feelings and repetition asked about below the dream content are not used to find symbols. They are referenced when determining which way to interpret in cases of varying meanings. You do not need to choose; the results will still be provided."
          }
        ]
      },
      {
        "title": "The overall atmosphere of the dream is counted separately.",
        "blocks": [
          {
            "p": "If multiple symbols are found, we gather whether each symbol is positive or cautionary to determine the overall tone of the dream. A dream that features one good symbol and one cautionary symbol is not simply called a \"good dream.\""
          },
          {
            "p": "You can preview the various symbols and their meanings in the [symbol dictionary](/dream/symbols). It is also good to skim through what is included before writing down your dream."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Basis of the service",
    "title": "Criteria for distinguishing between auspicious and ominous dreams",
    "summary": "The four values assigned to each symbol and their distribution, the reasons for the most varying meanings, and why we discuss mixed dreams as mixed.",
    "backLabel": "Basis of interpretation",
    "sections": [
      {
        "title": "Each symbol is assigned one of four categories.",
        "blocks": [
          {
            "p": "The {symbolTotal} symbols in the dictionary are each categorized as one of the following."
          },
          {
            "ul": [
              "**Positive {polarityPositive}** — interpreted as pleasant events like wealth, celebrations, or benefactors.",
              "**Ambivalent {polarityAmbivalent}** — symbols like the sun or pig that can have their meanings flipped depending on the actions taken. **This is the most common and the most cautious category.**",
              "**Cautionary {polarityNegative}** — interpreted as disputes, losses, or negative events.",
              "**Neutral {polarityNeutral}** — symbols that are neither auspicious nor ominous in themselves, like colors."
            ]
          }
        ]
      },
      {
        "title": "Reasons for the most varying meanings",
        "blocks": [
          {
            "p": "This is not a balance we have struck. **It is how the original texts are written.** Old dream interpretation texts recorded different meanings for the same symbol depending on the situation, and many of those situations are oppositional — catching a pig is auspicious, but a pig dying on its own is ominous, and the same goes for the rising and setting sun."
          },
          {
            "p": "Therefore, the fact that \"a good symbol appeared\" does not mean \"good things will happen.\" What we can convey is limited to how that symbol has been interpreted in the tradition."
          }
        ]
      },
      {
        "title": "The tone of a dream is gathered from its symbols.",
        "blocks": [
          {
            "p": "If multiple symbols are found, we gather their auspicious and cautionary meanings to determine the overall tone of the dream. If only positive symbols appear, it is a good dream; if only cautionary symbols appear, it is a cautionary dream; if **mixed, we will discuss it as mixed.**"
          },
          {
            "p": "We do not force a mixed interpretation into one side. In reality, dreams that people have are mostly mixed, and summarizing them as \"a good dream\" is neither accurate nor helpful."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Words not spoken",
        "blocks": [
          {
            "p": "We do not make definitive statements about what will happen, when it will happen, or regarding health and wealth. Translating the meanings of traditional symbols is different from predicting the future."
          }
        ]
      },
      {
        "title": "When cautionary dreams appear",
        "blocks": [
          {
            "p": "Even if a symbol interpreted as cautionary appears, it does not necessarily mean bad news. In traditional dream interpretation, ominous dreams have generally been used to indicate **the situation that needs to be examined now.** If a symbol interpreted as a dispute appears, it can be read as a suggestion to hold your tongue."
          },
          {
            "p": "For the same reason, this service does not sell talismans or charms. The only things sold are [two methods to keep your dreams](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Conception dreams",
    "title": "How to distinguish conception dreams",
    "summary": "How we determine the {conceptionSymbolTotal} conception dream symbols, why not all pig dreams are conception dreams, and the principle that we do not determine pregnancy or gender.",
    "backLabel": "Basis of interpretation",
    "sections": [
      {
        "title": "First, let’s clarify.",
        "blocks": [
          {
            "p": "**Dreams-Link does not determine pregnancy status. We do not state the gender of the child either.** This is not something that can be known through dreams, nor is it something we can do."
          },
          {
            "p": "What we can convey is limited to this — **the fact that a symbol traditionally interpreted as a conception dream appeared in this dream.** How that symbol was interpreted by the ancients is all we can provide."
          }
        ]
      },
      {
        "title": "There are {conceptionSymbolTotal} symbols interpreted as conception dreams.",
        "blocks": [
          {
            "p": "Out of the {symbolTotal} symbols in the dictionary, **{conceptionSymbolTotal}** are marked as conception dreams. Many are animals like dragons, pigs, and tigers, as well as fruits like peaches, persimmons, and jujubes, and also include the sun and moon."
          },
          {
            "p": "However, **just because that symbol appeared does not immediately mean it is a conception dream.** This is where this service has put in significant effort."
          }
        ]
      },
      {
        "title": "We determine based on the chosen meaning, not the symbol.",
        "blocks": [
          {
            "p": "The pig is a symbol of conception dreams, but it is also **the representative of wealth dreams.** If we declare it a conception dream solely because the symbol appeared, then everyone who dreams of pigs would be having conception dreams. In reality, most have been interpreted as wealth dreams."
          },
          {
            "p": "Therefore, we look at **the actual chosen meaning from that symbol, not just the symbol itself.** We only mark it as a conception dream when the meaning leaning towards conception is chosen based on the situation you provided. Even with the same pig, the interpretation can differ based on the sentence."
          }
        ]
      },
      {
        "kind": "note",
        "title": "If you mention pregnancy, we will look at that first.",
        "blocks": [
          {
            "p": "If your writing includes terms like pregnancy, conception dreams, or childbirth, we will prioritize the conception meaning among the meanings that symbol holds. Even the same dream can be interpreted differently based on the current situation."
          }
        ]
      },
      {
        "title": "The reason for having a separate conception dream report.",
        "blocks": [
          {
            "p": "Conception dreams serve a different purpose than other dreams. They are often discussed long after the child is born and shared among family members. Therefore, rather than just viewing it on a screen, we created a **document that can be kept.**"
          },
          {
            "p": "What is included is outlined in [two methods to keep your dreams](/guide/reports). You can view all interpretations without purchasing them."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "How to Use",
    "title": "How to Write a Dream",
    "summary": "If you write down what you saw and did, it will be interpreted well. We explain why a single verb decides the meaning, and why we also ask how you felt and whether the dream recurs.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "Please write down what you saw and did",
        "blocks": [
          {
            "p": "There is no specific format. Two or three sentences, as you would normally speak, are sufficient. However, what is well interpreted is determined — **what you saw** and **what happened**."
          },
          {
            "ul": [
              "Well interpreted — 「A large snake wrapped around me」, 「I saw clear water flowing」, 「My tooth fell out on its own」",
              "Not interpreted — 「I was scared」, 「I felt strange」, 「It seemed like someone hated me」"
            ]
          },
          {
            "p": "If you only write your feelings, there will be no symbols to find. Traditional dream interpretation speaks of [objects and actions](/guide/categories), not emotions."
          }
        ]
      },
      {
        "title": "Writing down what you did makes it more accurate",
        "blocks": [
          {
            "p": "Even the same symbol can have different meanings depending on the situation, with {contextSplitSymbolTotal} cases. The sunrise and sunset have traditionally been interpreted in opposite ways."
          },
          {
            "p": "Therefore, 「I saw a pig」 is less accurate than 「The pig came into the house」, and 「There was water」 is less accurate than 「I drank clear water」. **A single verb determines the meaning.**"
          }
        ]
      },
      {
        "title": "The reason for asking about feelings and recurrence",
        "blocks": [
          {
            "p": "Below the dream content, there is a place to choose **how you felt when you woke up** and **whether you have recurring dreams**. You do not have to select both for results to be provided."
          },
          {
            "p": "These values are not used to find symbols. They are referenced when deciding **which meaning to choose** from the same symbol and how to convey the results. Recurring dreams have traditionally been viewed differently from a dream that was had once."
          }
        ]
      },
      {
        "kind": "note",
        "title": "In cases mentioning pregnancy",
        "blocks": [
          {
            "p": "If the text includes words like pregnancy, conception dream, or childbirth, we look first at the conception-dream meaning of that symbol. Even the same pig dream has been interpreted differently by ancient people depending on the situation — [how to distinguish 태몽](/guide/conception-dreams)"
          }
        ]
      },
      {
        "title": "There is no need to write long",
        "blocks": [
          {
            "p": "A longer length does not mean more symbols will be found. In fact, if unrelated words are mixed in lengthily, there is an increased chance that irrelevant words will be interpreted as symbols. Please write down only the **memorable scenes**."
          },
          {
            "p": "The text you write will not be saved anywhere. The reason you can write freely is explained in [the method of not saving](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Service Basis",
    "title": "Criteria Divided into Eight Categories",
    "summary": "Eight categories — from objects, actions and animals through to the body and colours — with how many symbols each holds, and why there is no category for emotions.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "Divided into eight categories of what appears in dreams",
        "blocks": [
          {
            "p": "We grouped {symbolTotal} symbols into eight categories by their character. The dividing question is **what it appears as in the dream** — a beast, an object, or something you did."
          },
          {
            "ul": [
              "**Objects {categoryThing}** — tangible items like money, mirrors, and knives. This is the thickest category.",
              "**Actions {categoryAction}** — things done or experienced in the dream, like bathing, partying, or being beaten.",
              "**Animals {categoryAnimal}** — dragons, pigs, snakes, and cows. Many of these have been viewed as 태몽.",
              "**Nature {categoryNature}** — large and ancient things like water, fire, sun, and moon.",
              "**People {categoryPerson}** — people appearing in dreams, such as kings, thieves, and deceased individuals.",
              "**Places {categoryPlace}** — locations where dreams occur, like houses, wells, and graves.",
              "**Body {categoryBody}** — teeth, hair, blood. The meaning varies depending on where on the body it is.",
              "**Colors {categoryColor}** — they have no inherent good or bad and are interpreted based on what they are associated with."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "The reason for not having numerical categories",
        "blocks": [
          {
            "p": "We did not create a category for numbers such as 「three」 or 「seven」. **Neither of the two original texts sets a number down as an entry.** To open that category and fill it, we would have to write something that appears in neither text."
          }
        ]
      },
      {
        "title": "Why there is no emotional category",
        "blocks": [
          {
            "p": "We did not create a category for feelings such as 「anxiety」 or 「longing」. **This is because ancient dream interpretation texts do not mention emotions.** Both original texts speak of what is seen and what happens, not the dreamer's feelings as a subject of interpretation."
          },
          {
            "p": "We did try building a category for feelings once. What came out were phrases such as \"loss of affection\" and \"emotional stability\" — the vocabulary of modern psychology, not the **shapes** a dream actually shows. That is a different kind of service, and not what this dictionary sets out to do."
          }
        ]
      },
      {
        "kind": "note",
        "title": "So when you write",
        "blocks": [
          {
            "p": "Please write down **what you saw and did** rather than feelings, as it will be much better interpreted. However, we ask separately about how you felt when you woke up — this is referenced in situations where meanings can vary even for the same symbol."
          }
        ]
      },
      {
        "title": "Colors are not used alone",
        "blocks": [
          {
            "p": "Colors {categoryColor} have no inherent good or bad. Just as blue snakes and red snakes have been interpreted differently, their meanings change based on **what they are associated with**. Therefore, this category is considered as values read when appearing with other symbols."
          },
          {
            "p": "The complete list by category is available in the [Symbol Dictionary](/dream/symbols). When you open a symbol, the conveyed meaning, category, and related symbols will be provided."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "How to Use",
    "title": "When a Symbol is Not Found",
    "summary": "If nothing is found, we say so. We cover why that happens, what we show on that screen instead, and how the dictionary is expanded.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "When we find nothing, we say we found nothing",
        "blocks": [
          {
            "p": "If we cannot find a single symbol in the text you wrote, we **tell you that we found nothing.** We do not force a similar symbol onto it, or write a plausible sentence to fill the gap."
          },
          {
            "p": "This is the most concerning issue for this service. The moment you fill in the blank, the interpretation that comes through and what is actually done diverges."
          }
        ]
      },
      {
        "title": "Why can't it be found?",
        "blocks": [
          {
            "p": "It is usually one of the following."
          },
          {
            "ul": [
              "**It is a symbol that is not yet in the dictionary.** Currently, there are {symbolTotal} symbols listed, but there are many more that could appear in dreams.",
              "**You only wrote your feelings.** If you only have emotions like \"I was scared\" or \"I felt strange,\" there are no symbols that can be identified. Traditional dream interpretation refers to **visible objects and actions**, not emotions.",
              "**It is too short.** It is better to write in sentences rather than just one or two words."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "When you try writing again",
        "blocks": [
          {
            "p": "Please include **what you saw and what you did** in the dream. Saying \"I was anxious\" is less effective than saying \"my teeth fell out on their own,\" and \"I liked it\" is less effective than saying \"I saw clear water flowing.\""
          }
        ]
      },
      {
        "title": "We do not leave a blank screen",
        "blocks": [
          {
            "p": "When something cannot be found, we also show **{popularSymbolCount} frequently searched symbols** on that screen. These are selected from the most representative in the dictionary, which can help you recall if one of them was in your dream."
          },
          {
            "p": "If you want to browse through everything, you can find {symbolTotal} symbols organized by category in the [symbol dictionary](/dream/symbols). Each symbol includes its conveyed meaning and related symbols."
          }
        ]
      },
      {
        "title": "How will the dictionary expand in the future?",
        "blocks": [
          {
            "p": "Rather than increasing the numbers, we are first focusing on **accurately identifying what is already there**. We have included {aliasTotal} alternative names for the same symbols, and we have made sure that words with suffixes that change their forms can also be identified."
          },
          {
            "p": "When expanding the symbols themselves, we only include **what is written in the original text**. If a meaning does not have a corresponding original phrase, an entry will not be created — simply increasing numbers without basis turns it into creation, not a dictionary. The reasons for this attempt and its results are documented in [why we do not use models](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Service Basis",
    "title": "Reasons for not using artificial intelligence in dream interpretation",
    "summary": "There is no code that calls a model to create interpretations. This is the result of attempting to expand the dictionary using a model and what was gained and what was sacrificed as a result.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "Artificial intelligence is not used in dream interpretation",
        "blocks": [
          {
            "p": "Many current dream interpretation services show writings generated by inserting dream stories into generative models. Dreams-Link does not do this. **There is no code that calls a model to create interpretations.**"
          },
          {
            "p": "What we do is simple. We find the symbols in the text you provide and select the meanings that the dictionary has written about those symbols. There is no room for sentences that are not in the dictionary."
          },
          {
            "p": "The dictionary itself is not created by a model. Each meaning is accompanied by **which passage from the original dream interpretation text it comes from**, and that passage is compared word-for-word with the original file."
          }
        ]
      },
      {
        "title": "Why was this decision made?",
        "blocks": [
          {
            "p": "**Models do not say they do not know what they do not know.** When asked about symbols without conveyed basis, they fabricate plausible origins. And whether it is fabricated or not is something the reader cannot discern. If creation is inserted in the place of conveying tradition, the premise of the service collapses."
          },
          {
            "p": "We did try letting a model create symbols to expand the dictionary. Out of sixty-six examples selected as worthy of adoption, **fifty-five could not provide any conveyed basis**, and there were also examples like subway and highway that cannot exist in traditional dream interpretation. Therefore, **none were included.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "The same was true even with a larger model",
        "blocks": [
          {
            "p": "When we ran the same thing on a better model, one out of nineteen passed, and that one was merely a repetition of the same word with the same basis. A larger model only speaks **more plausibly** about what it does not know."
          }
        ]
      },
      {
        "title": "The benefits of not using a model",
        "blocks": [
          {
            "ul": [
              "**If it is the same dream, the same interpretation will come out.** The words do not change each time you look at it.",
              "**It is fast.** There is no waiting for the model's response, so the results are immediately available.",
              "**The dream you wrote does not go outside.** There is no need to send it to an external company's server — please read this together with [the method that does not save](/guide/no-storage).",
              "**It can be offered for free.** Dreams are something we have every day, so there are many inquiries. If a model is called for each inquiry, the cost must be covered from somewhere."
            ]
          }
        ]
      },
      {
        "title": "Instead, what has been sacrificed",
        "blocks": [
          {
            "p": "We cannot interpret what is not in the dictionary. If we had used a model, there would have been a plausible answer for whatever you wrote. We chose to **say that we could not find it when we could not find it.** What we show at that time is documented in [when a symbol cannot be found](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Paid Products",
    "title": "Two Ways to Keep Your Dreams",
    "summary": "The interpretation itself does not incur a fee. It explains what the two paid options are, what they contain, and why they are not better interpretations.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "The interpretation itself does not incur a fee",
        "blocks": [
          {
            "p": "Writing down your dream and seeing what symbols are included **does not cost money and does not require membership.** Since people dream every day, we judged that this space should be offered for free."
          },
          {
            "p": "**The two paid options are not better interpretations.** They are **two ways to keep the same interpretation.** The content you see on the screen does not change after payment."
          }
        ]
      },
      {
        "title": "Dream Card — One Image",
        "blocks": [
          {
            "p": "We provide the symbols found in your dream and their meanings in **one image.** It is an image file, not a PDF, so you can save it as is or send it to others."
          },
          {
            "p": "This is for those who feel regret when a good dream disappears after closing the screen. Since we do not save dreams, this is the only way to keep them if you want to preserve them."
          }
        ]
      },
      {
        "title": "Conception Dream Report — Document {conceptionPages} pages",
        "blocks": [
          {
            "p": "We create a **{conceptionPages}-page document** about dreams that show symbols indicating a conception dream. It includes which symbols appeared, how those symbols have traditionally been interpreted, and a space to record that information."
          },
          {
            "p": "Conception dreams are often discussed and shared among family members even after the child is born, so we created a separate document for dreams that are too valuable to just view on the screen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Words not used here either",
        "blocks": [
          {
            "p": "We do not make judgments about pregnancy status or the child's gender. Such statements are not included in the document. For more details, please refer to [how conception dreams are filtered](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Why is there no longer document?",
        "blocks": [
          {
            "p": "The sibling service produces a nine-page report. This is because the saju engine extracts a lot of values from a single birth date. Dream interpretation in the Korean tradition does not work that way."
          },
          {
            "p": "The dictionary contains {symbolTotal} symbols and {meaningTotal} meanings, but **only a few symbols actually apply to a single dream**. To expand that into nine pages, one would have to write things that are not found in any original text, and that is precisely what this service has chosen not to do. Therefore, the document is as long as the materials honestly allow, and no longer."
          }
        ]
      },
      {
        "title": "Values and Availability",
        "blocks": [
          {
            "p": "The prices are available in the [pricing guide](/pricing). The reason this document does not list amounts is intentional — to prevent situations where the guidance document remains with outdated amounts when values change. The screen and terms all read the amounts from the same place."
          },
          {
            "p": "The document you paid for can **be received again with the same order.** However, since we do not store files, it cannot be recreated once you leave the results screen — please keep the file you received."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const EN_NOTICES = {
  "kindLabels": {
    "service": "Service",
    "product": "Reports",
    "engine": "Calculation",
    "support": "Support"
  },
  "intro": "Changes to your terms of use — prices, policies — are posted here before they take effect. Internal improvements such as the screen getting faster are not posted here: what appears here is what you need to know.",
  "empty": {
    "title": "No notices posted",
    "body": "If there are any changes to inform you about, they will be posted here."
  },
  "effective": "Effective from {date}",
  "pager": {
    "label": "Notice Page",
    "newer": "← Newest",
    "older": "Previous Notices →"
  },
  "items": {
    "2026-08-06-no-storage": {
      "title": "The dream you provided is not stored.",
      "body": [
        "Dream stories are the most private values that this service receives. Therefore, they are not recorded in any table. The input is only carried in the result address for calculation, and once the window is closed, it disappears.",
        "We decided not to create a feature that collects dreams and shows the flow (dream diary). It is a useful feature, but to do so, the most private writings must be continuously stored.",
        "When you send the result link to others, it contains the dream content. Please be careful when sharing."
      ]
    },
    "2026-08-06-engine-version": {
      "title": "The results include the symbol dictionary and calculation criteria.",
      "body": [
        "The basis for interpretation is the traditional dream interpretation symbol dictionary. The results and documents will include the version of that dictionary (e.g., 1.2.0) and the version of the matching rules (for example dream-1.0.0). The same dream will always yield the same symbol based on the same criteria.",
        "If we add symbols to the dictionary or change meanings in a way that can alter results, this fact is presented here. This is because the results you received previously may change.",
        "We do not create traditional meanings that are not in the dictionary. If no symbols are found, we simply state that none were found and conclude."
      ]
    },
    "2026-08-06-conception": {
      "title": "We only inform you about a conception dream and do not make judgments.",
      "body": [
        "If symbols traditionally viewed as a conception dream appear in the dream, we will inform you of that fact. However, we do not determine pregnancy status or the child's gender — such claims have no basis, and medical judgments are the responsibility of medical institutions.",
        "The mention of sons and daughters in traditional narratives is a reflection of customs that have been passed down, and it does not mean that we are predicting it correctly."
      ]
    }
  }
} satisfies NoticeCopy;
