import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/**
 * 영어판. **번역기가 21개 로케일을 만들 때 구조와 어투의 본이 되는 벌이다.**
 *
 * 저장소에 직접 적어 둔 글과, `--fill-en`이 한국어에서 만든 글이 함께 있다. 뒤엣것은
 * `translate-doc-content.ts --fill-en`이 **없는 키만** 채운 것이라 앞엣것을 덮지 않는다.
 */
export const EN_DOCS = {
  "about": {
    "eyebrow": "Introduction",
    "title": "Introduction to Dreams-Link",
    "summary": "This is a service that interprets dreams using a traditional dream interpretation symbol dictionary. It clarifies what is used as a basis and what is not mentioned.",
    "backLabel": "Back to Home",
    "sections": [
      {
        "title": "What do we do?",
        "blocks": [
          {
            "p": "Dreams-Link finds **symbols used in traditional dream interpretation** from the dreams you write down and shows their meanings. Since dreams are something we experience daily, the interpretations displayed on the screen are **free and do not require membership.**"
          },
          {
            "p": "The only things sold for a fee are **two forms of preservation** — an image (dream card) containing a good dream and a PDF that captures the background when a symbol traditionally considered a a conception dream appears."
          }
        ]
      },
      {
        "title": "What is the basis for interpretation?",
        "blocks": [
          {
            "p": "The basis for interpretation is a **dictionary of {symbolTotal} symbols**. We find symbols in the dream text and only show the meanings recorded in the dictionary for those symbols. If a symbol has multiple meanings, we choose based on the context — for example, holding a snake and being bitten are traditionally considered opposites."
          },
          {
            "p": "The searching is done **only according to fixed rules**. If it is the same dream, the same symbols will always appear, and the interpretation will not change from yesterday to today."
          }
        ]
      },
      {
        "title": "What do we not say?",
        "blocks": [
          {
            "p": "**We do not invent traditional meanings that are not in the dictionary.** If no symbols are found, we simply state that none were found and conclude. Filling that space with plausible words is what this service is most cautious about."
          },
          {
            "p": "**A a conception dream is merely a sign, not a judgment.** We only inform you that a symbol traditionally considered a a conception dream appeared in the dream. We do not predict pregnancy or the child's gender, and there is no basis for such claims."
          },
          {
            "p": "We do not **make definitive statements about health, wealth, or career.** This is a reference from the perspective of traditional dream interpretation and is not medical, financial, or legal advice."
          }
        ]
      },
      {
        "title": "We do not keep the dreams you write down.",
        "blocks": [
          {
            "p": "Dream stories are the most private part of what this service receives. Therefore, we **do not store them.** What you enter is carried only in the URL and used for the reading; it is not recorded in any table on our servers."
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
  "guide/symbol-dictionary": {
    "eyebrow": "Basis for the Service",
    "title": "What is the basis of the symbol dictionary?",
    "summary": "It clarifies where the interpretations come from. The criteria for dividing 218 symbols into nine categories, the reason only 24 can be substantiated, and why we do not fill in the gaps.",
    "backLabel": "Basis for Interpretation",
    "sections": [
      {
        "title": "We only show what is written in the dictionary.",
        "blocks": [
          {
            "p": "The interpretations from Dreams-Link come from a **pre-written symbol dictionary**. We find symbols in the text you provide and show the meanings recorded in the dictionary for those symbols. We do not create words that are not in the dictionary."
          },
          {
            "p": "Currently, the dictionary contains **{symbolTotal} symbols**, and those symbols have a total of **{meaningTotal} meanings**. Most symbols have only one meaning, while some have multiple depending on the context."
          }
        ]
      },
      {
        "title": "Divided into nine categories.",
        "blocks": [
          {
            "p": "We grouped what appears in dreams into nine categories based on their characteristics. The numbers in parentheses are the current counts."
          },
          {
            "ul": [
              "**Objects**({categoryThing}) · **Animals**({categoryAnimal}) · **Nature**({categoryNature}) — the three largest categories. Traditional dream interpretation mainly discusses visible objects, animals, and elements of the sky and water.",
              "**Actions**({categoryAction}) · **Body**({categoryBody}) — what was done, like being chased or falling, and where on the body, like the face or hair.",
              "**People**({categoryPerson}) · **Places**({categoryPlace}) · **Colors**({categoryColor}) · **Numbers**({categoryNumber})"
            ]
          },
          {
            "p": "To view them by category, you can see the full list in the [symbol dictionary](/dream/symbols)."
          }
        ]
      },
      {
        "title": "Only {cultureNoteTotal} can be substantiated.",
        "blocks": [
          {
            "p": "Among the symbols, **{cultureNoteTotal}** have reasons for interpretation written alongside them. For example, the reason for distinguishing between upper and lower teeth in a dream of losing teeth. The remaining symbols have empty spaces."
          },
          {
            "p": "**We have not filled in the empty spaces.** Adding plausible origins would make the document thicker, but at that moment, this dictionary would not be conveying tradition but fabricating it. It is more honest to distinguish between what can and cannot be substantiated."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Reasons for not arbitrarily expanding the dictionary.",
        "blocks": [
          {
            "p": "We actually attempted to expand the symbols to hundreds but gave up. The automatically generated entries either repeated the same phrases like 'romance → good relationship' or failed to provide any a documented traditional source. We concluded that **accurately finding what exists** is better than simply increasing the numbers."
          }
        ]
      },
      {
        "title": "Good and bad are predetermined by the dictionary.",
        "blocks": [
          {
            "p": "Each symbol carries its auspiciousness recorded alongside it. **Good {polarityPositive}**, **ambivalent {polarityAmbivalent}**, **cautionary {polarityNegative}**, and **neutral {polarityNeutral}**."
          },
          {
            "p": "The fact that the good meanings exceed half is not because we are generous, but because traditional dream interpretation has always been like that — large and strong symbols like pigs, dragons, and fire have generally been seen as good omens. However, not all dreams are interpreted positively. This value reflects the nature of each symbol, and the overall atmosphere of the dream is reassessed by gathering the found symbols."
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
              "말 (\"horse\") inside **말**했다 (\"said\"), and 배 (\"boat, pear\") inside **배**가 고팠다 (\"We was hungry\")"
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
  "guide/one-symbol-many-meanings": {
    "eyebrow": "Service Basis",
    "title": "The reason the same symbol has different meanings",
    "summary": "Traditionally, holding a snake and being bitten by one are opposites. This discusses the structure where 218 symbols have 288 meanings and how to interpret situations.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "Even if the symbols are the same, different situations yield different meanings",
        "blocks": [
          {
            "p": "In traditional dream interpretation, a single symbol does not always have one meaning. Even for the same snake, **holding it and being bitten have been interpreted as completely opposite.** This is also noted in the dictionary."
          },
          {
            "p": "This is why the {symbolTotal} symbols have a total of {meaningTotal} meanings. Each meaning includes **the context in which it applies**, and if that context is visible in the text you provide, we select that meaning."
          }
        ]
      },
      {
        "title": "How to identify the situation",
        "blocks": [
          {
            "p": "We check whether the text you provided contains words indicating that situation. In 「뱀이 나를 물었다」 (baemi nareul mul-eotda), the biting situation is described, while in 「뱀을 품에 안았다」 (baemeul pume anatda), the holding situation is described. If there are no words indicating the situation, we interpret it using the **basic meaning** of that symbol."
          },
          {
            "p": "Therefore, when writing your dream, if you include **not only what appeared but also what actions were taken**, the interpretation will be more accurate. 「돼지를 봤다」 (dwaeji-reul bwatda) conveys less than 「돼지가 집으로 들어왔다」 (dwaeji-ga jib-euro deureowatda)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "The more you write, the better, but there is no need to write long",
        "blocks": [
          {
            "p": "Two or three sentences are sufficient. Writing longer does not mean finding more symbols; rather, if unrelated words are mixed in, irrelevant symbols may be identified."
          }
        ]
      },
      {
        "title": "There are {contextSplitSymbolTotal} symbols with divided meanings",
        "blocks": [
          {
            "p": "Among the {symbolTotal} symbols in the dictionary, **{contextSplitSymbolTotal}** have meanings that vary depending on the situation. The rest have been read in one direction regardless of the situation."
          },
          {
            "p": "These {contextSplitSymbolTotal} are the most cautious areas. Misreading the situation can lead to conveying good news as bad news, or vice versa. Therefore, if the situation is unclear, we do not **forcefully choose one side and instead go with the basic meaning** of that symbol — we do not want to state something uncertain as if it were certain."
          }
        ]
      },
      {
        "kind": "note",
        "title": "The feelings upon waking are also considered",
        "blocks": [
          {
            "p": "The feelings and repetition asked about below the dream content are not used to find symbols. They are referenced when deciding which way to interpret in situations with divided meanings. You do not need to choose; results will still be provided."
          }
        ]
      },
      {
        "title": "The overall atmosphere of the dream is counted separately",
        "blocks": [
          {
            "p": "If multiple symbols are found, we gather whether each of those symbols is positive or cautious to determine the overall tone of the dream. A dream that includes one good symbol and one cautious symbol is not simply referred to as a 'good dream.'"
          },
          {
            "p": "You can preview the various symbols and their meanings in the [symbol dictionary](/dream/symbols). It is also good to glance over what is included before writing your dream."
          }
        ]
      }
    ]
  },
  "guide/good-and-bad": {
    "eyebrow": "Service Basis",
    "title": "Criteria for distinguishing auspicious dreams and inauspicious dreams",
    "summary": "The four values assigned to each symbol and their distribution, the reason why positive ones exceed half, and why we communicate mixed dreams as mixed.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "Each symbol is assigned one of four values",
        "blocks": [
          {
            "p": "Among the {symbolTotal} symbols in the dictionary, each is categorized as one of the following."
          },
          {
            "ul": [
              "**{polarityPositive} positive symbols** — those interpreted as fortunate events like wealth, celebrations, and benefactors.",
              "**{polarityAmbivalent} symbols that vary by situation** — like snakes, where the meaning can flip depending on what was done. This category is the most cautious.",
              "**{polarityNegative} inauspicious symbols** — those seen as gossip, disputes, or losses.",
              "**{polarityNeutral} neutral symbols** — those that are neither good nor bad in themselves, like colors or numbers."
            ]
          }
        ]
      },
      {
        "title": "The reason positive symbols exceed half",
        "blocks": [
          {
            "p": "This is not because we are generous in our assessments. **Traditional dream interpretation (dream interpretation) has always been this way.** Large and powerful symbols like pigs, dragons, fire, and water have generally been viewed as good omens, and the dictionary reflects that tradition."
          },
          {
            "p": "Thus, the fact that 'a good symbol appeared' does not mean 'good things will happen.' What we can convey is limited to how that symbol has been interpreted in the tradition."
          }
        ]
      },
      {
        "title": "The tone of a dream is gathered from its symbols",
        "blocks": [
          {
            "p": "If multiple symbols are found, we gather their respective auspiciousness to determine the overall tone of the dream. If only positive symbols appear, it is a good dream; if only inauspicious symbols appear, it is a inauspicious dream; if **mixed, we communicate it as mixed.**"
          },
          {
            "p": "We do not forcefully categorize mixed symbols into one side. In reality, dreams people have are often mixed, and summarizing them as 'a good dream' is neither accurate nor helpful."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Words Not to Use",
        "blocks": [
          {
            "p": "Do not make definitive statements about what will happen, when it will happen, or regarding health and wealth. Conveying the meanings of symbols passed down through tradition is different from predicting the future."
          }
        ]
      },
      {
        "title": "When a Inauspicious Dream Appears",
        "blocks": [
          {
            "p": "Even if a symbol interpreted as caution appears, it is not necessarily bad news. In traditional dream interpretation, an inauspicious dream has generally been used as **a statement pointing to the situation at hand**. If a symbol that suggests conflict appears, it can be read as a reminder to hold back on words."
          },
          {
            "p": "For the same reason, this service does not sell talismans or charms. What is sold is only [two ways to keep your dreams](/guide/reports)."
          }
        ]
      }
    ]
  },
  "guide/conception-dreams": {
    "eyebrow": "Conception Dream",
    "title": "How to Interpret Conception Dreams",
    "summary": "It reveals how to determine 27 conception dream symbols, why not all pig dreams are considered conception dreams, and the principle that does not predict pregnancy or gender.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "First, Clarify This",
        "blocks": [
          {
            "p": "**Dreams-Link does not determine pregnancy status. It also does not indicate the child's gender.** These are matters that cannot be known through dreams, and it is not something we can do."
          },
          {
            "p": "What we can tell you is limited to this — **the fact that a symbol traditionally regarded as a conception dream appeared in this dream.** That is all there is to how our ancestors interpreted that symbol."
          }
        ]
      },
      {
        "title": "There are {conceptionSymbolTotal} symbols regarded as Conception Dreams",
        "blocks": [
          {
            "p": "Among the {symbolTotal} symbols in the dictionary, **{conceptionSymbolTotal}** are marked as conception dreams. There are many animals like dragons, pigs, and snakes, as well as fruits like peaches and chestnuts, and the sun and moon are included."
          },
          {
            "p": "However, **the appearance of that symbol does not immediately mean it is a conception dream.** This is where this service has put in effort."
          }
        ]
      },
      {
        "title": "Judgment is Based on Actual Meaning, Not Symbols",
        "blocks": [
          {
            "p": "The pig is a symbol of conception dreams and at the same time **represents wealth dreams.** If it is considered a conception dream just because the symbol appeared, then everyone who dreamed of pigs would have had a conception dream. In reality, it has mostly been interpreted as a wealth dream."
          },
          {
            "p": "Therefore, we look at **the actual meaning derived from that symbol, not the symbol itself.** We only mark it as a conception dream when the meaning leaning towards conception is chosen in the situation you provided. Even with the same pig, the reading changes if the sentence differs."
          }
        ]
      },
      {
        "kind": "note",
        "title": "If You Mention Pregnancy, We Look at That First",
        "blocks": [
          {
            "p": "If your writing includes words like pregnancy, conception dream, or childbirth, we first look at the meaning of that symbol leaning towards conception. Even with the same pig dream, the way our ancestors interpreted it varied depending on the current situation."
          }
        ]
      },
      {
        "title": "The Reason for Separating Conception Dream Reports",
        "blocks": [
          {
            "p": "Conception dreams serve a different purpose than other dreams. They are often talked about even after the child is born and shared among family members. Therefore, rather than just viewing it on a screen, we created a separate **document that can be kept.**"
          },
          {
            "p": "What is included is noted in [two ways to keep your dreams](/guide/reports). You can see all interpretations without purchasing what you see on the screen."
          }
        ]
      }
    ]
  },
  "guide/how-to-write": {
    "eyebrow": "How to Use",
    "title": "How to Write Your Dream Effectively",
    "summary": "If you write down what you saw and did, it will be well interpreted. It explains why a single verb can determine meaning and why we ask about feelings and repetition.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "Please Write What You Saw and Did",
        "blocks": [
          {
            "p": "There is no specific format. A couple of sentences as you normally speak is sufficient. However, what works well is determined — **what is visible** and **what happened.**"
          },
          {
            "ul": [
              "Works well — 「A large snake wrapped around me」, 「I saw clear water flowing」, 「I fell from a high place」",
              "Does not work — 「I was scared」, 「I felt strange」, 「I felt like someone hated me」"
            ]
          },
          {
            "p": "If you only write down feelings, there will be no symbols to find. This is because traditional dream interpretation speaks of [objects and actions](/guide/categories), not emotions."
          }
        ]
      },
      {
        "title": "Writing What You Did Makes It More Accurate",
        "blocks": [
          {
            "p": "Even with the same symbol, there are {contextSplitSymbolTotal} cases where meanings differ depending on the situation. Traditionally, holding a snake and being bitten have been interpreted as opposites."
          },
          {
            "p": "Thus, 「I saw a pig」 is less accurate than 「A pig came into the house」, and 「There was water」 is less accurate than 「I drank clear water.」 **A single verb determines the meaning.**"
          }
        ]
      },
      {
        "title": "Why We Ask About Feelings and Repetition",
        "blocks": [
          {
            "p": "Below the dream content, there is a place to select **the feeling when you woke up** and **whether you have repeated the same dream.** You do not have to choose both for a result to be provided."
          },
          {
            "p": "These values are not used to find symbols. They are referenced when determining **which meaning to choose** from the same symbol and how to convey the result."
          }
        ]
      },
      {
        "kind": "note",
        "title": "In Cases Where You Mention Pregnancy",
        "blocks": [
          {
            "p": "If your writing includes words like pregnancy, conception dream, or childbirth, we first look at the meaning of that symbol leaning towards conception. Even with the same pig dream, the way our ancestors interpreted it varied depending on the current situation — [how to interpret conception dreams](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "There is No Need to Write Lengthy Texts",
        "blocks": [
          {
            "p": "A longer text does not mean more symbols will be found. Rather, if irrelevant words are mixed in lengthily, there is a greater chance that unrelated words will be interpreted as symbols. **Please write only the scenes you remember.**"
          },
          {
            "p": "The text you provide is not saved anywhere. The reason you can write freely is noted in [the method of not storing](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/categories": {
    "eyebrow": "Basis of Service",
    "title": "Criteria Divided into Nine Categories",
    "summary": "From objects, animals, and nature to colors and numbers, there are nine categories and a reason for not including an emotional category.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "The Symbols in Dreams Are Divided into Nine Categories",
        "blocks": [
          {
            "p": "The {symbolTotal} symbols are grouped into nine categories based on their characteristics. The criteria for division is **how they appear in dreams** — whether as animals, objects, or actions we took."
          },
          {
            "ul": [
              "**Objects {categoryThing}** — Tangible items like money, mirrors, and knives. This is the thickest category.",
              "**Animals {categoryAnimal}** — dragon·pig·snake·cow. Many of these are seen as conception dreams.",
              "**Nature {categoryNature}** — things that are large and ancient like water·fire·sun·moon·mountain.",
              "**Action {categoryAction}** — things done in dreams like being chased·falling·flying.",
              "**Body {categoryBody}** — teeth·hair·blood. The meaning varies depending on where on the body it is.",
              "**Person {categoryPerson}** · **Place {categoryPlace}** · **Color {categoryColor}** · **Number {categoryNumber}**"
            ]
          }
        ]
      },
      {
        "title": "Why is there no emotion category?",
        "blocks": [
          {
            "p": "Categories like 「anxiety」·「longing」 are not included. **This is because traditional dream interpretation does not address emotions.** Old interpretations focused on what was visible and what happened, rather than the dreamer's feelings."
          },
          {
            "p": "we have tried to create an emotion category, but the results were terms like 「loss of affection」·「emotional stability」. These are not **symbols** from dreams but vocabulary from modern psychology. That is a different type of service and not what this dictionary aims to do."
          }
        ]
      },
      {
        "kind": "note",
        "title": "So when you write",
        "blocks": [
          {
            "p": "Please write down **what you saw and did** rather than feelings; it will yield much better results. However, we will ask about your feelings upon waking separately — even the same symbol can have different meanings depending on the situation."
          }
        ]
      },
      {
        "title": "Colors and numbers do not stand alone",
        "blocks": [
          {
            "p": "Color {categoryColor} and number {categoryNumber} do not have inherent good or bad meanings. Just as a white snake and a black snake are different, their meanings change depending on **what they are associated with**. Therefore, these two categories are considered in conjunction with other symbols."
          },
          {
            "p": "A complete list by category is available in the [symbol dictionary](/dream/symbols). Opening a symbol will show its traditional meaning, category, and related symbols."
          }
        ]
      }
    ]
  },
  "guide/not-found": {
    "eyebrow": "How to use",
    "title": "When a symbol cannot be found",
    "summary": "If you cannot find it, we will inform you that it is not found. we will discuss why it cannot be found, what we will show you instead on that screen, and how the dictionary is expanded.",
    "backLabel": "Interpretation basis",
    "sections": [
      {
        "title": "When not found, we will inform you that it is not found",
        "blocks": [
          {
            "p": "If we cannot find any symbols in the text you provided, we will **inform you that it is not found.** we will not forcefully associate it with something similar or create plausible sentences to fill the space."
          },
          {
            "p": "This is what this service is most cautious about. The moment we fill a gap, it breaks the promise that we only pass on handed-down interpretations."
          }
        ]
      },
      {
        "title": "Why can't it be found?",
        "blocks": [
          {
            "p": "Usually, it is one of the following."
          },
          {
            "ul": [
              "**It is a symbol not yet in the dictionary.** Currently, there are {symbolTotal} symbols listed, but there are many more that could appear in dreams.",
              "**You only wrote feelings.** If there are only emotions like 「I was scared」·「I felt strange」, there are no symbols that can be matched. Traditional dream interpretation speaks of **visible objects and actions** rather than emotions.",
              "**It is too short.** It is better to write in sentences rather than one or two words."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "When you try writing again",
        "blocks": [
          {
            "p": "Please include **what you saw and what you did** in the dream. Saying 「I was anxious」 is less effective than saying 「I fell from a high place」, and saying 「I liked it」 is less effective than saying 「I saw clear water flowing」."
          }
        ]
      },
      {
        "title": "we do not leave a blank screen",
        "blocks": [
          {
            "p": "When something cannot be found, we will also show **{popularSymbolCount} frequently searched symbols** on that screen. These are selected from the dictionary based on their representativeness, which can help you recall if one of them appeared in your dream."
          },
          {
            "p": "If you want to browse the entire list, there are {symbolTotal} symbols organized by category in the [symbol dictionary](/dream/symbols). Each symbol includes its traditional meaning and related symbols."
          }
        ]
      },
      {
        "title": "How will the dictionary be expanded in the future?",
        "blocks": [
          {
            "p": "Rather than increasing the numbers, we am focusing on **accurately identifying what is already there**. we have included {aliasTotal} alternative names for the same symbol, and we have made it possible to recognize words that change form with suffixes."
          },
          {
            "p": "When expanding the symbols themselves, we will only include those that can **provide a documented traditional source.** Simply increasing numbers without evidence becomes creation rather than a dictionary — we have documented the attempts and results in [why we do not use models](/guide/no-ai)."
          }
        ]
      }
    ]
  },
  "guide/no-ai": {
    "eyebrow": "Service basis",
    "title": "Reasons for not using artificial intelligence in dream interpretation",
    "summary": "There is no code that calls a model in the interpretation creation process. we have abandoned the attempt to expand the dictionary using a model based on empirical results, and thus what was gained and what was given up.",
    "backLabel": "Interpretation basis",
    "sections": [
      {
        "title": "Artificial intelligence is not used in dream interpretation",
        "blocks": [
          {
            "p": "Many current dream interpretation services show texts generated by inserting dream stories into generative models. Dreams-Link does not do that. **There is no code that calls a model in the interpretation creation process.**"
          },
          {
            "p": "What we do is simple. we find symbols in the text you provide that are in the dictionary and select and show the meanings that the dictionary has written for those symbols. There is no place for sentences that are not in the dictionary."
          }
        ]
      },
      {
        "title": "Why was this decision made?",
        "blocks": [
          {
            "p": "**Models do not say they do not know what they do not know.** When asked about symbols without a documented traditional source, they fabricate plausible origins. And whether it is fabricated or not is something the reader cannot discern. If one inserts creation in the place of conveying tradition, the premise of the service collapses."
          },
          {
            "p": "we have actually tried to have a model create symbols to expand the dictionary. Out of sixty-six examples that were worth considering, **fifty-five could not provide any a documented traditional source**, and some included things that could not exist in traditional dream interpretation, like subways and highways. Therefore, **none were included.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "The same was true even with larger models",
        "blocks": [
          {
            "p": "When we tried the same task with a better model, only one out of nineteen passed, and that one was just a repetition of the same words in the evidence position. Larger models only speak **more plausibly** about what they do not know."
          }
        ]
      },
      {
        "title": "The benefits of not using a model",
        "blocks": [
          {
            "ul": [
              "**If it is the same dream, the same interpretation will come out.** The wording does not change each time.",
              "**It is fast.** There is no waiting for a model's response, so results are delivered immediately.",
              "**The dream you provided does not go outside.** There is no need to send it to external company servers — please read along with [the method of not storing](/guide/no-storage).",
              "**It can be offered for free.** Dreams are something we dream every day, so there are many inquiries. If a model is called for each inquiry, the costs must be covered somewhere."
            ]
          }
        ]
      },
      {
        "title": "What is given up instead",
        "blocks": [
          {
            "p": "We cannot interpret what is not in the dictionary. If a model had been used, anything you wrote would have produced a plausible answer. We chose the side that **says it could not be found when it could not be found**. What we show at that time is written in [when a symbol cannot be found](/guide/not-found)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Paid Products",
    "title": "Two Ways to Keep Your Dreams",
    "summary": "The interpretation itself does not incur a fee. We explain what the two things we sell are, what they contain, and why they are not better interpretations.",
    "backLabel": "Interpretation Basis",
    "sections": [
      {
        "title": "The interpretation itself does not incur a fee",
        "blocks": [
          {
            "p": "Writing down your dreams and seeing what symbols are present **does not cost money and does not require membership.** Since people dream every day, we decided that this space should be free."
          },
          {
            "p": "**The two things we sell are not better interpretations.** They are **two ways to keep the same interpretation.** The content you see on the screen does not change after payment."
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
            "p": "This is for those who feel regret when a good dream disappears after closing the screen. Since we do not save dreams, if you want to keep it, this is the only way to take it."
          }
        ]
      },
      {
        "title": "Conception Dream Report — Document {conceptionPages} Pages",
        "blocks": [
          {
            "p": "For dreams that show symbols interpreted as conception dreams, we create a **{conceptionPages}-page document.** It includes what symbols appeared, how those symbols have traditionally been interpreted, and a place to record that."
          },
          {
            "p": "Since a conception dream are often discussed and shared among family members even after the child is born, we created a separate document for dreams that are too precious to just view on the screen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Words Not Said Here Either",
        "blocks": [
          {
            "p": "We do not determine pregnancy status or the child's gender. Such statements do not appear in the document. For details, see [how to interpret a conception dream](/guide/conception-dreams)."
          }
        ]
      },
      {
        "title": "Why There Is No Longer Document",
        "blocks": [
          {
            "p": "Sibling services provide nine-page reports. The saju engine extracts a lot of values from just one birth date. Dream interpretation does not work that way."
          },
          {
            "p": "The symbols listed in the dictionary total {symbolTotal}, and most of them have **one meaning each.** To stretch that into nine pages, we would have to write traditional meanings that are not found in any material, and that is exactly what this service has decided not to do. Therefore, the document is only as long as the materials honestly allow, and not longer."
          }
        ]
      },
      {
        "title": "Prices and Sales Status",
        "blocks": [
          {
            "p": "Prices are listed in the [pricing guide](/pricing). The reason this document does not list amounts is intentional — to prevent situations where the guidance document remains with old amounts when prices change. The screen and terms all read the same amount from one place."
          },
          {
            "p": "The documents you purchase can **be received again with the same order.** However, since we do not keep files, once you leave the result screen, you cannot recreate them — please keep the files you receive."
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
