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
    "eyebrow": "About",
    "title": "About Inyeon-Link",
    "summary": "We compare two birth charts in the Korean Saju tradition. Here is what we calculate, and what we refuse to claim.",
    "backLabel": "Home",
    "sections": [
      {
        "title": "What we do",
        "blocks": [
          {
            "p": "Inyeon-Link builds two birth charts from dates and times of birth and shows **how the two sets of energies meet.** You can also read your own chart alone and see which temperaments tend to suit you."
          },
          {
            "p": "Reading on screen is **free and needs no account.** The paid items are PDF reports carrying figures the screen never shows — element strengths, ten-god pairings and the relationships across all four pillars."
          }
        ]
      },
      {
        "title": "What we calculate",
        "blocks": [
          {
            "p": "Charts are built from the **Korean lunisolar almanac**, and the birth time is corrected to **true solar time** for the birthplace — the same clock time means a different sun position depending on where you were born."
          },
          {
            "p": "Scores come from fixed rules only. Traditional concepts — ten gods, branch relations, the supporting element — are expressed as rules, so **the same input always gives the same result.** When a rule changes we run a regression harness to be sure older readings did not move."
          },
          {
            "p": "**No AI is involved.** Every sentence on screen is fixed text attached to a calculated result."
          }
        ]
      },
      {
        "title": "What we will not claim",
        "blocks": [
          {
            "ul": [
              "**We do not tell fortunes.** Nothing here tells you to pursue or avoid anyone. It is a reference drawn from a tradition.",
              "**We do not store what you enter.** Birth details are used for the moment of calculation and never written down; result links live in the part of the URL a browser does not send to a server.",
              "**A score is not a verdict on a person.** A low number does not invalidate a relationship."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "The method is described in detail in the [guides](/guide). Company details and how to reach us are on the [contact page](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Calculation Basis",
    "title": "What is the Basis for Calculation?",
    "summary": "Inyeon-Link reveals all the rules it uses. You can check the items and their weights, the scores from the earthly branch relationship table, and the threshold values that distinguish between a strong day master and a weak day master — you can see where the numbers on the screen come from.",
    "backLabel": "Back to Start",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "The values written here are all **directly read from the calculation code**. Since they are not manually transcribed into the text, if the rules change, the numbers in this document will also change."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Service Basis",
    "title": "What Does Saju Compatibility Look At?",
    "summary": "It clarifies four items and their respective weights, and explains why those four are chosen. It also addresses why calculations can be made even without knowing the birth time.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "Calculating and Combining Two Axes",
        "blocks": [
          {
            "p": "The matching rate comes from two branches. **Saju compatibility** looks at the entire saju original chart of both individuals, while **zodiac compatibility** only considers one earthly branch from the year of birth. The final value is obtained by weighted averaging the two."
          },
          {
            "table": {
              "head": [
                "Axis",
                "What is Considered",
                "Weight"
              ],
              "rows": [
                [
                  "Saju Compatibility",
                  "Day stem, day branch, and the five elements — four items",
                  "{weightSaju}"
                ],
                [
                  "Zodiac Compatibility",
                  "The relationship between the year branches",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "The saju side is much heavier because the amount of information used is different. Saju considers all four pillars, while the zodiac only looks at one character. However, the zodiac is not excluded for two reasons — it is the most intuitively understandable item, and it is the **only axis whose value does not fluctuate even without knowing the birth time**."
          }
        ]
      },
      {
        "title": "The Four Items of Saju Compatibility",
        "blocks": [
          {
            "p": "The saju side is further divided into four. Each item is chosen to ensure that what they consider does not overlap."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju consists of eight characters formed by the heavenly stems and earthly branches of the year, month, day, and hour of birth. The day stem and day branch mentioned below are the two characters in the day pillar.",
            "labels": {
              "year": "Year Pillar",
              "yearNote": "Root · Zodiac",
              "month": "Month Pillar",
              "monthNote": "Season · Power",
              "day": "Day Pillar",
              "dayNote": "Me · Spouse Palace",
              "hour": "Hour Pillar",
              "hourNote": "Later Years · Usage",
              "stem": "Heavenly Stem",
              "stemNote": "Day Stem = Me",
              "branch": "Earthly Branch",
              "branchNote": "Day Branch = Spouse Palace"
            }
          },
          {
            "table": {
              "head": [
                "Item",
                "What is Considered",
                "Weight"
              ],
              "rows": [
                [
                  "Day Stem Relationship",
                  "What the two people's day stems (日干) are to each other — viewed through the Ten Gods",
                  "{weightDayMaster}"
                ],
                [
                  "Five Elements Complementation",
                  "Does the partner have the energy I need — viewed through the supporting element a chart currently needs",
                  "{weightElementSupply}"
                ],
                [
                  "Spouse Star",
                  "Does the partner's day stem correspond to my spouse position?",
                  "{weightSpouseStar}"
                ],
                [
                  "Day Branch Relationship",
                  "Are the two people's day branches (日支) a combination or a clash?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "The day branch is read because the tradition treats it as the **spouse palace**. Of the four pillars it is the one that points at the partner, which makes it the first place compatibility looks."
          }
        ]
      },
      {
        "title": "If the gender is not disclosed, the spouse element is omitted",
        "blocks": [
          {
            "p": "The spouse element requires knowledge of gender for calculation. The tradition reads the position that points at a spouse differently depending on gender. If not disclosed, this item will be **excluded** and the weights of the remaining three items will be renormalized."
          }
        ]
      },
      {
        "kind": "note",
        "title": "It will not be treated as 0 points",
        "blocks": [
          {
            "p": "If missing positions are treated as 0 points, the score will be unfairly lowered simply because the gender was not disclosed. Renormalizing the weights prevents this issue."
          }
        ]
      },
      {
        "title": "Calculations can be done without knowing the birth time",
        "blocks": [
          {
            "p": "The birth time is used to determine the hour pillar. If unknown, calculations will be done without the hour pillar, and this fact will be indicated on the results screen. Since there is no direct input for the hour pillar among the four compatibility items, the values will not fluctuate significantly, but it does affect the balance of the five elements."
          },
          {
            "p": "If you know the time, please also select the place of birth. If the standard time differs from the actual solar position, using it as is may misalign the hour pillar [(true solar time correction)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "The same input will always yield the same value",
        "blocks": [
          {
            "p": "All scores are determined by rules. No artificial intelligence is used, nor are random numbers employed. Therefore, entering the same two birth dates multiple times will not yield different results. As a service that does not store data, previous results cannot be retrieved, but **determinism** compensates for that."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Changing the rules will raise the version",
        "blocks": [
          {
            "p": "Each time the scoring rules are changed, the engine version is updated. The version is noted at the bottom of the results screen, allowing you to distinguish which rules were used to calculate the numbers you are currently viewing."
          }
        ]
      },
      {
        "title": "What this result is not",
        "blocks": [
          {
            "p": "This is a **reference material** calculated from rules built on the perspective of the tradition. It is not a scientific prediction, nor is it a definitive statement about the relationship between the two individuals. The score range is set to a minimum of around 45 points for this reason — no combination will yield a value close to 0 points."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiac",
    "title": "Why does zodiac compatibility consider the year branch?",
    "summary": "The zodiac is the earthly branch of the year of birth. This explains why it is derived from the saju year pillar rather than the calendar year, and clarifies the significance of zodiac compatibility.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "The zodiac is the earthly branch of the year of birth",
        "blocks": [
          {
            "p": "Saju consists of four pillars: year, month, day, and hour, with each pillar containing one heavenly stem and one earthly branch. The **year branch** is the one that carries the animal we call the zodiac sign."
          },
          {
            "table": {
              "caption": "The Twelve Earthly Branches and Zodiac",
              "head": [
                "Earthly Branch",
                "Zodiac"
              ],
              "rows": [
                [
                  "子",
                  "Rat"
                ],
                [
                  "丑",
                  "Ox"
                ],
                [
                  "寅",
                  "Tiger"
                ],
                [
                  "卯",
                  "Rabbit"
                ],
                [
                  "辰",
                  "dragon"
                ],
                [
                  "巳",
                  "snake"
                ],
                [
                  "午",
                  "horse"
                ],
                [
                  "未",
                  "sheep"
                ],
                [
                  "申",
                  "monkey"
                ],
                [
                  "酉",
                  "rooster"
                ],
                [
                  "戌",
                  "dog"
                ],
                [
                  "亥",
                  "pig"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "We use the year of saju, not the calendar year",
        "blocks": [
          {
            "p": "The point at which the zodiac changes is neither January 1st of the solar calendar nor Lunar New Year. The standard for changing the year in saju is **Ipchun**. Therefore, those born in January or early February may have a different zodiac year than the one on the calendar."
          }
        ]
      },
      {
        "kind": "note",
        "title": "The reason we do not ask directly about the zodiac",
        "blocks": [
          {
            "p": "This is why we only collect the birth date without asking for the zodiac on the input screen. When the saju engine calculates the year branch, the boundary of Ipchun is automatically adjusted. If you select it directly, someone born in early February may choose a zodiac that does not match their actual one."
          }
        ]
      },
      {
        "title": "Zodiac compatibility only considers one relationship",
        "blocks": [
          {
            "p": "The calculation of zodiac compatibility is simple. It compares the year branches of two people to determine whether the relationship is harmonious, a clash, or a quiet discord, and uses that score as is. Since there is only one item, there is no need to distribute weights."
          },
          {
            "p": "The scores for each relationship are all listed in the [Twelve Branches Relationship Table](/guide/branches). The day branch compatibility uses the same table."
          }
        ]
      },
      {
        "title": "The reason for determining weight",
        "blocks": [
          {
            "p": "Zodiac compatibility accounts for {weightZodiac} of the final matching rate. While saju compatibility looks at all four pillars, the zodiac only considers one character, so they cannot be weighted equally."
          },
          {
            "p": "However, there are two reasons why it is not excluded."
          },
          {
            "ul": [
              "**It is the most intuitively understandable item**. Even without knowing the vocabulary of the tradition, 'the tiger and the monkey clash' makes sense.",
              "**It is the only axis that does not fluctuate even if the birth time is unknown**. If you do not know the time, the hour pillar is missing and the strength of the five elements changes, but the year branch remains the same."
            ]
          }
        ]
      },
      {
        "title": "You can also view zodiac compatibility separately",
        "blocks": [
          {
            "p": "On the results screen, we show the scores for both saju compatibility and zodiac compatibility separately. If only the final matching rate is presented, it is unclear where that number comes from. If the two values are significantly different, that in itself is worth noting."
          }
        ]
      }
    ]
  },
  "guide/zodiac-rat": {
    "eyebrow": "By animal",
    "title": "How the Rat Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Rat (子) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rat is the first of the twelve branches",
        "blocks": [
          {
            "p": "The Rat is someone whose birth-year branch is **子**. 子 is the first of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 午 (the Horse)."
          },
          {
            "p": "The line that the compatibility result shows for a Rat person is: \"Quick to notice and quick to secure what matters. First to move in a crisis.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Rat in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Rat and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Ox (丑)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Tiger (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rabbit (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Snake (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Horse (午)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Sheep (未)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Monkey (申)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Rooster (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dog (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Pig (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ox — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "子 and 丑 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Rat and the Ox score {scoreYukhap}, the highest the Rat can get."
          }
        ]
      },
      {
        "title": "Dragon and Monkey — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "申子辰 is one triad group (the water group), and 子 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Rat forms a half triad ({scoreBanhap}) with both the Dragon and the Monkey."
          },
          {
            "p": "**The Monkey and the Dragon together**, on the other hand, lack the central character 子, so they are not counted as a harmony and are treated as neutral. Even within one triad group, it is the Rat that makes the half triad."
          }
        ]
      },
      {
        "title": "Horse — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "子 and 午 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Rat can receive."
          }
        ]
      },
      {
        "title": "Sheep — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "子 and 未 sit right next to 午 (the Horse), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 6 animals, and the Rat with another Rat",
        "blocks": [
          {
            "p": "The Tiger, Rabbit, Snake, Rooster, Dog and Pig are neither a harmony, a clash nor a discord with the Rat: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Rat people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Rat person meets a Horse person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With an Ox person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Rat people whose day branches are 子 and 午 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Ox](/guide/zodiac-ox) · [Tiger](/guide/zodiac-tiger) · [Rabbit](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Snake](/guide/zodiac-snake) · [Horse](/guide/zodiac-horse) · [Sheep](/guide/zodiac-goat) · [Monkey](/guide/zodiac-monkey) · [Rooster](/guide/zodiac-rooster) · [Dog](/guide/zodiac-dog) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-ox": {
    "eyebrow": "By animal",
    "title": "How the Ox Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Ox (丑) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Ox is the second of the twelve branches",
        "blocks": [
          {
            "p": "The Ox is someone whose birth-year branch is **丑**. 丑 is the second of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 未 (the Sheep)."
          },
          {
            "p": "The line that the compatibility result shows for an Ox person is: \"Slow-looking but sees things through. What it takes on, it does not drop.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Ox in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Ox and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Ox (丑)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Tiger (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rabbit (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Snake (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Horse (午)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Sheep (未)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Monkey (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rooster (酉)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Dog (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Pig (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Rat — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "丑 and 子 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Ox and the Rat score {scoreYukhap}, the highest the Ox can get."
          }
        ]
      },
      {
        "title": "Rooster — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "巳酉丑 is one triad group (the metal group), and 酉 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Ox forms a half triad ({scoreBanhap}) only with the Rooster."
          },
          {
            "p": "With the Snake (巳) of the same group, the central character 酉 is missing, so it is not counted as a harmony and is treated as neutral ({scoreNeutral}). Belonging to the same group does not make every pair a harmony."
          }
        ]
      },
      {
        "title": "Sheep — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "丑 and 未 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Ox can receive."
          }
        ]
      },
      {
        "title": "Horse — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "丑 and 午 sit right next to 未 (the Sheep), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 7 animals, and the Ox with another Ox",
        "blocks": [
          {
            "p": "The Tiger, Rabbit, Dragon, Snake, Monkey, Dog and Pig are neither a harmony, a clash nor a discord with the Ox: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Ox people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when an Ox person meets a Sheep person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Rat person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Ox people whose day branches are 丑 and 未 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Tiger](/guide/zodiac-tiger) · [Rabbit](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Snake](/guide/zodiac-snake) · [Horse](/guide/zodiac-horse) · [Sheep](/guide/zodiac-goat) · [Monkey](/guide/zodiac-monkey) · [Rooster](/guide/zodiac-rooster) · [Dog](/guide/zodiac-dog) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-tiger": {
    "eyebrow": "By animal",
    "title": "How the Tiger Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Tiger (寅) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Tiger is the third of the twelve branches",
        "blocks": [
          {
            "p": "The Tiger is someone whose birth-year branch is **寅**. 寅 is the third of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 申 (the Monkey)."
          },
          {
            "p": "The line that the compatibility result shows for a Tiger person is: \"Fearless and out in front. Cannot let unfairness pass.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Tiger in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Tiger and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ox (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tiger (寅)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Rabbit (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Snake (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Horse (午)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Sheep (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monkey (申)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Rooster (酉)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Dog (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Pig (亥)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Pig — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "寅 and 亥 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Tiger and the Pig score {scoreYukhap}, the highest the Tiger can get."
          }
        ]
      },
      {
        "title": "Horse — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "寅午戌 is one triad group (the fire group), and 午 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Tiger forms a half triad ({scoreBanhap}) only with the Horse."
          },
          {
            "p": "With the Dog (戌) of the same group, the central character 午 is missing, so it is not counted as a harmony and is treated as neutral ({scoreNeutral}). Belonging to the same group does not make every pair a harmony."
          }
        ]
      },
      {
        "title": "Monkey — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "寅 and 申 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Tiger can receive."
          }
        ]
      },
      {
        "title": "Rooster — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "寅 and 酉 sit right next to 申 (the Monkey), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 7 animals, and the Tiger with another Tiger",
        "blocks": [
          {
            "p": "The Rat, Ox, Rabbit, Dragon, Snake, Sheep and Dog are neither a harmony, a clash nor a discord with the Tiger: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Tiger people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Tiger person meets a Monkey person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Pig person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Tiger people whose day branches are 寅 and 申 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Ox](/guide/zodiac-ox) · [Rabbit](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Snake](/guide/zodiac-snake) · [Horse](/guide/zodiac-horse) · [Sheep](/guide/zodiac-goat) · [Monkey](/guide/zodiac-monkey) · [Rooster](/guide/zodiac-rooster) · [Dog](/guide/zodiac-dog) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rabbit": {
    "eyebrow": "By animal",
    "title": "How the Rabbit Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Rabbit (卯) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rabbit is the fourth of the twelve branches",
        "blocks": [
          {
            "p": "The Rabbit is someone whose birth-year branch is **卯**. 卯 is the fourth of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 酉 (the Rooster)."
          },
          {
            "p": "The line that the compatibility result shows for a Rabbit person is: \"Gentle and perceptive. Knows how to go around rather than collide.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Rabbit in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Rabbit and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ox (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tiger (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rabbit (卯)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Snake (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Horse (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Sheep (未)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Monkey (申)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Rooster (酉)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Dog (戌)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Pig (亥)",
                  "Half triad",
                  "{scoreBanhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dog — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "卯 and 戌 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Rabbit and the Dog score {scoreYukhap}, the highest the Rabbit can get."
          }
        ]
      },
      {
        "title": "Sheep and Pig — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "亥卯未 is one triad group (the wood group), and 卯 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Rabbit forms a half triad ({scoreBanhap}) with both the Sheep and the Pig."
          },
          {
            "p": "**The Pig and the Sheep together**, on the other hand, lack the central character 卯, so they are not counted as a harmony and are treated as neutral. Even within one triad group, it is the Rabbit that makes the half triad."
          }
        ]
      },
      {
        "title": "Rooster — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "卯 and 酉 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Rabbit can receive."
          }
        ]
      },
      {
        "title": "Monkey — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "卯 and 申 sit right next to 酉 (the Rooster), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 6 animals, and the Rabbit with another Rabbit",
        "blocks": [
          {
            "p": "The Rat, Ox, Tiger, Dragon, Snake and Horse are neither a harmony, a clash nor a discord with the Rabbit: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Rabbit people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Rabbit person meets a Rooster person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Dog person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Rabbit people whose day branches are 卯 and 酉 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Ox](/guide/zodiac-ox) · [Tiger](/guide/zodiac-tiger) · [Dragon](/guide/zodiac-dragon) · [Snake](/guide/zodiac-snake) · [Horse](/guide/zodiac-horse) · [Sheep](/guide/zodiac-goat) · [Monkey](/guide/zodiac-monkey) · [Rooster](/guide/zodiac-rooster) · [Dog](/guide/zodiac-dog) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dragon": {
    "eyebrow": "By animal",
    "title": "How the Dragon Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Dragon (辰) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Dragon is the fifth of the twelve branches",
        "blocks": [
          {
            "p": "The Dragon is someone whose birth-year branch is **辰**. 辰 is the fifth of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 戌 (the Dog)."
          },
          {
            "p": "The line that the compatibility result shows for a Dragon person is: \"Large-hearted with high ideals. Rarely content with the ordinary.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Dragon in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Dragon and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Ox (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tiger (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rabbit (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Snake (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Horse (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Sheep (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monkey (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rooster (酉)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Dog (戌)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Pig (亥)",
                  "Discord",
                  "{scoreWonjin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Rooster — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "辰 and 酉 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Dragon and the Rooster score {scoreYukhap}, the highest the Dragon can get."
          }
        ]
      },
      {
        "title": "Rat — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "申子辰 is one triad group (the water group), and 子 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Dragon forms a half triad ({scoreBanhap}) only with the Rat."
          },
          {
            "p": "With the Monkey (申) of the same group, the central character 子 is missing, so it is not counted as a harmony and is treated as neutral ({scoreNeutral}). Belonging to the same group does not make every pair a harmony."
          }
        ]
      },
      {
        "title": "Dog — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "辰 and 戌 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Dragon can receive."
          }
        ]
      },
      {
        "title": "Pig — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "辰 and 亥 sit right next to 戌 (the Dog), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 7 animals, and the Dragon with another Dragon",
        "blocks": [
          {
            "p": "The Ox, Tiger, Rabbit, Snake, Horse, Sheep and Monkey are neither a harmony, a clash nor a discord with the Dragon: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Dragon people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Dragon person meets a Dog person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Rooster person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Dragon people whose day branches are 辰 and 戌 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Ox](/guide/zodiac-ox) · [Tiger](/guide/zodiac-tiger) · [Rabbit](/guide/zodiac-rabbit) · [Snake](/guide/zodiac-snake) · [Horse](/guide/zodiac-horse) · [Sheep](/guide/zodiac-goat) · [Monkey](/guide/zodiac-monkey) · [Rooster](/guide/zodiac-rooster) · [Dog](/guide/zodiac-dog) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-snake": {
    "eyebrow": "By animal",
    "title": "How the Snake Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Snake (巳) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Snake is the sixth of the twelve branches",
        "blocks": [
          {
            "p": "The Snake is someone whose birth-year branch is **巳**. 巳 is the sixth of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 亥 (the Pig)."
          },
          {
            "p": "The line that the compatibility result shows for a Snake person is: \"Keeps its own counsel and thinks deeply. Judges accurately.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Snake in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Snake and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ox (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tiger (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rabbit (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Snake (巳)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Horse (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Sheep (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monkey (申)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Rooster (酉)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Dog (戌)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Pig (亥)",
                  "Clash",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Monkey — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "巳 and 申 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Snake and the Monkey score {scoreYukhap}, the highest the Snake can get."
          }
        ]
      },
      {
        "title": "Rooster — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "巳酉丑 is one triad group (the metal group), and 酉 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Snake forms a half triad ({scoreBanhap}) only with the Rooster."
          },
          {
            "p": "With the Ox (丑) of the same group, the central character 酉 is missing, so it is not counted as a harmony and is treated as neutral ({scoreNeutral}). Belonging to the same group does not make every pair a harmony."
          }
        ]
      },
      {
        "title": "Pig — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "巳 and 亥 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Snake can receive."
          }
        ]
      },
      {
        "title": "Dog — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "巳 and 戌 sit right next to 亥 (the Pig), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 7 animals, and the Snake with another Snake",
        "blocks": [
          {
            "p": "The Rat, Ox, Tiger, Rabbit, Dragon, Horse and Sheep are neither a harmony, a clash nor a discord with the Snake: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Snake people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Snake person meets a Pig person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Monkey person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Snake people whose day branches are 巳 and 亥 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Ox](/guide/zodiac-ox) · [Tiger](/guide/zodiac-tiger) · [Rabbit](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Horse](/guide/zodiac-horse) · [Sheep](/guide/zodiac-goat) · [Monkey](/guide/zodiac-monkey) · [Rooster](/guide/zodiac-rooster) · [Dog](/guide/zodiac-dog) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-horse": {
    "eyebrow": "By animal",
    "title": "How the Horse Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Horse (午) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Horse is the seventh of the twelve branches",
        "blocks": [
          {
            "p": "The Horse is someone whose birth-year branch is **午**. 午 is the seventh of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 子 (the Rat)."
          },
          {
            "p": "The line that the compatibility result shows for a Horse person is: \"Bright and restless. Being fenced in is the hardest thing.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Horse in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Horse and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Ox (丑)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Tiger (寅)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Rabbit (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Snake (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Horse (午)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Sheep (未)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Monkey (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rooster (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dog (戌)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Pig (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sheep — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "午 and 未 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Horse and the Sheep score {scoreYukhap}, the highest the Horse can get."
          }
        ]
      },
      {
        "title": "Tiger and Dog — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "寅午戌 is one triad group (the fire group), and 午 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Horse forms a half triad ({scoreBanhap}) with both the Tiger and the Dog."
          },
          {
            "p": "**The Tiger and the Dog together**, on the other hand, lack the central character 午, so they are not counted as a harmony and are treated as neutral. Even within one triad group, it is the Horse that makes the half triad."
          }
        ]
      },
      {
        "title": "Rat — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "午 and 子 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Horse can receive."
          }
        ]
      },
      {
        "title": "Ox — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "午 and 丑 sit right next to 子 (the Rat), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 6 animals, and the Horse with another Horse",
        "blocks": [
          {
            "p": "The Rabbit, Dragon, Snake, Monkey, Rooster and Pig are neither a harmony, a clash nor a discord with the Horse: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Horse people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Horse person meets a Rat person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Sheep person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Horse people whose day branches are 午 and 子 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Ox](/guide/zodiac-ox) · [Tiger](/guide/zodiac-tiger) · [Rabbit](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Snake](/guide/zodiac-snake) · [Sheep](/guide/zodiac-goat) · [Monkey](/guide/zodiac-monkey) · [Rooster](/guide/zodiac-rooster) · [Dog](/guide/zodiac-dog) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-goat": {
    "eyebrow": "By animal",
    "title": "How the Sheep Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Sheep (未) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Sheep is the eighth of the twelve branches",
        "blocks": [
          {
            "p": "The Sheep is someone whose birth-year branch is **未**. 未 is the eighth of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 丑 (the Ox)."
          },
          {
            "p": "The line that the compatibility result shows for a Sheep person is: \"Warm and considerate. Holds harsh words for a long time.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Sheep in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Sheep and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Ox (丑)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Tiger (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rabbit (卯)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Snake (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Horse (午)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Sheep (未)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Monkey (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rooster (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dog (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Pig (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Horse — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "未 and 午 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Sheep and the Horse score {scoreYukhap}, the highest the Sheep can get."
          }
        ]
      },
      {
        "title": "Rabbit — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "亥卯未 is one triad group (the wood group), and 卯 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Sheep forms a half triad ({scoreBanhap}) only with the Rabbit."
          },
          {
            "p": "With the Pig (亥) of the same group, the central character 卯 is missing, so it is not counted as a harmony and is treated as neutral ({scoreNeutral}). Belonging to the same group does not make every pair a harmony."
          }
        ]
      },
      {
        "title": "Ox — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "未 and 丑 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Sheep can receive."
          }
        ]
      },
      {
        "title": "Rat — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "未 and 子 sit right next to 丑 (the Ox), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 7 animals, and the Sheep with another Sheep",
        "blocks": [
          {
            "p": "The Tiger, Dragon, Snake, Monkey, Rooster, Dog and Pig are neither a harmony, a clash nor a discord with the Sheep: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Sheep people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Sheep person meets an Ox person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Horse person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Sheep people whose day branches are 未 and 丑 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Ox](/guide/zodiac-ox) · [Tiger](/guide/zodiac-tiger) · [Rabbit](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Snake](/guide/zodiac-snake) · [Horse](/guide/zodiac-horse) · [Monkey](/guide/zodiac-monkey) · [Rooster](/guide/zodiac-rooster) · [Dog](/guide/zodiac-dog) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-monkey": {
    "eyebrow": "By animal",
    "title": "How the Monkey Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Monkey (申) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Monkey is the ninth of the twelve branches",
        "blocks": [
          {
            "p": "The Monkey is someone whose birth-year branch is **申**. 申 is the ninth of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 寅 (the Tiger)."
          },
          {
            "p": "The line that the compatibility result shows for a Monkey person is: \"Resourceful and quick to adapt. Bored by repetition.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Monkey in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Monkey and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Ox (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tiger (寅)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Rabbit (卯)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Snake (巳)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Horse (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Sheep (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monkey (申)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Rooster (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dog (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Pig (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Snake — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "申 and 巳 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Monkey and the Snake score {scoreYukhap}, the highest the Monkey can get."
          }
        ]
      },
      {
        "title": "Rat — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "申子辰 is one triad group (the water group), and 子 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Monkey forms a half triad ({scoreBanhap}) only with the Rat."
          },
          {
            "p": "With the Dragon (辰) of the same group, the central character 子 is missing, so it is not counted as a harmony and is treated as neutral ({scoreNeutral}). Belonging to the same group does not make every pair a harmony."
          }
        ]
      },
      {
        "title": "Tiger — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "申 and 寅 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Monkey can receive."
          }
        ]
      },
      {
        "title": "Rabbit — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "申 and 卯 sit right next to 寅 (the Tiger), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 7 animals, and the Monkey with another Monkey",
        "blocks": [
          {
            "p": "The Ox, Dragon, Horse, Sheep, Rooster, Dog and Pig are neither a harmony, a clash nor a discord with the Monkey: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Monkey people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Monkey person meets a Tiger person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Snake person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Monkey people whose day branches are 申 and 寅 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Ox](/guide/zodiac-ox) · [Tiger](/guide/zodiac-tiger) · [Rabbit](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Snake](/guide/zodiac-snake) · [Horse](/guide/zodiac-horse) · [Sheep](/guide/zodiac-goat) · [Rooster](/guide/zodiac-rooster) · [Dog](/guide/zodiac-dog) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rooster": {
    "eyebrow": "By animal",
    "title": "How the Rooster Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Rooster (酉) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rooster is the tenth of the twelve branches",
        "blocks": [
          {
            "p": "The Rooster is someone whose birth-year branch is **酉**. 酉 is the tenth of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 卯 (the Rabbit)."
          },
          {
            "p": "The line that the compatibility result shows for a Rooster person is: \"Diligent and exacting. Cannot leave a thing out of place.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Rooster in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Rooster and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ox (丑)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Tiger (寅)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Rabbit (卯)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Dragon (辰)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Snake (巳)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Horse (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Sheep (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monkey (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rooster (酉)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Dog (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Pig (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dragon — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "酉 and 辰 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Rooster and the Dragon score {scoreYukhap}, the highest the Rooster can get."
          }
        ]
      },
      {
        "title": "Ox and Snake — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "巳酉丑 is one triad group (the metal group), and 酉 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Rooster forms a half triad ({scoreBanhap}) with both the Ox and the Snake."
          },
          {
            "p": "**The Snake and the Ox together**, on the other hand, lack the central character 酉, so they are not counted as a harmony and are treated as neutral. Even within one triad group, it is the Rooster that makes the half triad."
          }
        ]
      },
      {
        "title": "Rabbit — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "酉 and 卯 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Rooster can receive."
          }
        ]
      },
      {
        "title": "Tiger — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "酉 and 寅 sit right next to 卯 (the Rabbit), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 6 animals, and the Rooster with another Rooster",
        "blocks": [
          {
            "p": "The Rat, Horse, Sheep, Monkey, Dog and Pig are neither a harmony, a clash nor a discord with the Rooster: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Rooster people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Rooster person meets a Rabbit person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Dragon person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Rooster people whose day branches are 酉 and 卯 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Ox](/guide/zodiac-ox) · [Tiger](/guide/zodiac-tiger) · [Rabbit](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Snake](/guide/zodiac-snake) · [Horse](/guide/zodiac-horse) · [Sheep](/guide/zodiac-goat) · [Monkey](/guide/zodiac-monkey) · [Dog](/guide/zodiac-dog) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dog": {
    "eyebrow": "By animal",
    "title": "How the Dog Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Dog (戌) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Dog is the eleventh of the twelve branches",
        "blocks": [
          {
            "p": "The Dog is someone whose birth-year branch is **戌**. 戌 is the eleventh of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 辰 (the Dragon)."
          },
          {
            "p": "The line that the compatibility result shows for a Dog person is: \"Loyal to the end once trust is given. Betrayal cuts especially deep.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Dog in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Dog and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ox (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tiger (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rabbit (卯)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Dragon (辰)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Snake (巳)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Horse (午)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Sheep (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monkey (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rooster (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dog (戌)",
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Pig (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Rabbit — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "戌 and 卯 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Dog and the Rabbit score {scoreYukhap}, the highest the Dog can get."
          }
        ]
      },
      {
        "title": "Horse — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "寅午戌 is one triad group (the fire group), and 午 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Dog forms a half triad ({scoreBanhap}) only with the Horse."
          },
          {
            "p": "With the Tiger (寅) of the same group, the central character 午 is missing, so it is not counted as a harmony and is treated as neutral ({scoreNeutral}). Belonging to the same group does not make every pair a harmony."
          }
        ]
      },
      {
        "title": "Dragon — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "戌 and 辰 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Dog can receive."
          }
        ]
      },
      {
        "title": "Snake — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "戌 and 巳 sit right next to 辰 (the Dragon), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 7 animals, and the Dog with another Dog",
        "blocks": [
          {
            "p": "The Rat, Ox, Tiger, Sheep, Monkey, Rooster and Pig are neither a harmony, a clash nor a discord with the Dog: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Dog people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Dog person meets a Dragon person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Rabbit person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Dog people whose day branches are 戌 and 辰 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Ox](/guide/zodiac-ox) · [Tiger](/guide/zodiac-tiger) · [Rabbit](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Snake](/guide/zodiac-snake) · [Horse](/guide/zodiac-horse) · [Sheep](/guide/zodiac-goat) · [Monkey](/guide/zodiac-monkey) · [Rooster](/guide/zodiac-rooster) · [Pig](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pig": {
    "eyebrow": "By animal",
    "title": "How the Pig Meets the Twelve Zodiac Animals",
    "summary": "What relationship the Pig (亥) has with each of the twelve zodiac animals, what each one scores, and what share of the final match rate that score takes — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Pig is the twelfth of the twelve branches",
        "blocks": [
          {
            "p": "The Pig is someone whose birth-year branch is **亥**. 亥 is the twelfth of the twelve earthly branches, and when the twelve characters are set in a circle it sits directly opposite 巳 (the Snake)."
          },
          {
            "p": "The line that the compatibility result shows for a Pig person is: \"Generous and straightforward. Trusts readily, sometimes at a cost.\" This line has nothing to do with the relationship scores and does not affect the scores below."
          }
        ]
      },
      {
        "title": "The twelve zodiac animals at a glance",
        "blocks": [
          {
            "p": "Each of the other animals is set against the Pig in turn. Only the pairs this service recognises as harmonies are written as relationships; everything else is neutral."
          },
          {
            "table": {
              "caption": "The Pig and the twelve zodiac animals",
              "head": [
                "Other animal",
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ox (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tiger (寅)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Rabbit (卯)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Dragon (辰)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Snake (巳)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Horse (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Sheep (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Monkey (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Rooster (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dog (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Pig (亥)",
                  "Same branch",
                  "{scoreSame}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tiger — the pair that attracts (Six-Harmony)",
        "blocks": [
          {
            "p": "亥 and 寅 form a harmony with only two characters. A six-harmony is the good relationship that appears most often in compatibility, and the Pig and the Tiger score {scoreYukhap}, the highest the Pig can get."
          }
        ]
      },
      {
        "title": "Rabbit — a half triad that includes the royal branch",
        "blocks": [
          {
            "p": "亥卯未 is one triad group (the wood group), and 卯 is the **royal branch** at its centre. Inyeon-Link accepts only pairs that include the royal branch, so the Pig forms a half triad ({scoreBanhap}) only with the Rabbit."
          },
          {
            "p": "With the Sheep (未) of the same group, the central character 卯 is missing, so it is not counted as a harmony and is treated as neutral ({scoreNeutral}). Belonging to the same group does not make every pair a harmony."
          }
        ]
      },
      {
        "title": "Snake — the head-on collision (Clash)",
        "blocks": [
          {
            "p": "亥 and 巳 sit directly opposite each other on the circle. This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people. Even so, it is the lowest score the Pig can receive."
          }
        ]
      },
      {
        "title": "Dragon — the quiet discord (Discord)",
        "blocks": [
          {
            "p": "亥 and 辰 sit right next to 巳 (the Snake), the clash position, and are traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "The other 7 animals, and the Pig with another Pig",
        "blocks": [
          {
            "p": "The Rat, Ox, Horse, Sheep, Monkey, Rooster and Dog are neither a harmony, a clash nor a discord with the Pig: they are **neutral** and score {scoreNeutral}. They are the baseline, neither good nor bad."
          },
          {
            "p": "Two Pig people score {scoreSame}. It means they resemble each other, not that they attract, so it sits just above neutral."
          }
        ]
      },
      {
        "title": "What share of the final match rate this score takes",
        "blocks": [
          {
            "p": "There are two places where two people's branches are set side by side."
          },
          {
            "ul": [
              "**Zodiac compatibility** looks at the branch of the birth year. It takes {weightZodiac} of the final match rate.",
              "**Day branch compatibility** looks at the branch of the birth day. It takes {weightDayBranch} of the saju compatibility ({weightSaju}), which is {weightDayBranchTotal} of the final match rate."
            ]
          },
          {
            "p": "For example, when a Pig person meets a Snake person, zodiac compatibility gives a clash. If everything else is equal, the final match rate comes out {swingZodiacChung} points lower than with a neutral pair. With a Tiger person it is a six-harmony, and the rate comes out {swingZodiacYukhap} points higher."
          },
          {
            "p": "Year and day branches can differ. Two Pig people whose day branches are 亥 and 巳 get the same branch ({scoreSame}) in zodiac compatibility and a clash ({scoreChung}) in day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju.",
              "The full chart of which relationship scores what is in the [twelve-branch chart](/guide/branches), and why the zodiac is read from the year branch is in [Why zodiac compatibility considers the year branch](/guide/zodiac)."
            ]
          },
          {
            "p": "The other animals are laid out in the same way. [Rat](/guide/zodiac-rat) · [Ox](/guide/zodiac-ox) · [Tiger](/guide/zodiac-tiger) · [Rabbit](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Snake](/guide/zodiac-snake) · [Horse](/guide/zodiac-horse) · [Sheep](/guide/zodiac-goat) · [Monkey](/guide/zodiac-monkey) · [Rooster](/guide/zodiac-rooster) · [Dog](/guide/zodiac-dog)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-rat": {
    "eyebrow": "By pair",
    "title": "The Rat and the Rat — Same Branch",
    "summary": "What relationship two Rat people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Rat people share the same branch",
        "blocks": [
          {
            "p": "Two Rat people share the same branch (子 and 子). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "子 is the first of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Rat people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Rat",
        "blocks": [
          {
            "ul": [
              "**The Rat**'s special partners — Six-Harmony [Ox](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Monkey](/guide/zodiac-pair-rat-monkey) · Discord [Sheep](/guide/zodiac-pair-rat-goat) · Clash [Horse](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rat](/guide/zodiac-rat), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-ox": {
    "eyebrow": "By pair",
    "title": "The Rat and the Ox — Six-Harmony",
    "summary": "What relationship the Rat and the Ox have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rat and the Ox form a six-harmony",
        "blocks": [
          {
            "p": "The Rat and the Ox form a six-harmony. 子 and 丑 make a harmony with only two characters."
          },
          {
            "p": "A six-harmony is the good relationship that appears most often in compatibility, and at {scoreYukhap} it is the highest score either animal can get."
          },
          {
            "p": "On the circle, 子 is in the first place and 丑 in the second, and the two characters are one step apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Rat and the Ox",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacYukhap} points in zodiac compatibility and by {swingDayBranchYukhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Rat**'s special partners — Six-Harmony [Ox](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Monkey](/guide/zodiac-pair-rat-monkey) · Discord [Sheep](/guide/zodiac-pair-rat-goat) · Clash [Horse](/guide/zodiac-pair-rat-horse)",
              "**The Ox**'s special partners — Six-Harmony [Rat](/guide/zodiac-pair-rat-ox) · Half triad [Rooster](/guide/zodiac-pair-ox-rooster) · Discord [Horse](/guide/zodiac-pair-ox-horse) · Clash [Sheep](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rat](/guide/zodiac-rat) · [the Ox](/guide/zodiac-ox), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-dragon": {
    "eyebrow": "By pair",
    "title": "The Rat and the Dragon — Half triad",
    "summary": "What relationship the Rat and the Dragon have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rat and the Dragon form a half triad",
        "blocks": [
          {
            "p": "The Rat and the Dragon form a half triad. 申子辰 is one triad group (the water group), and 子 is the **royal branch** at its centre."
          },
          {
            "p": "Inyeon-Link accepts only pairs that include the royal branch, so this pair is a half triad ({scoreBanhap})."
          },
          {
            "p": "The Monkey (申) and the Dragon (辰) of the same group lack the central character 子, so they are not counted as a harmony and are treated as neutral."
          },
          {
            "p": "On the circle, 子 is in the first place and 辰 in the fifth, and the two characters are four steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Rat and the Dragon",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacBanhap} points in zodiac compatibility and by {swingDayBranchBanhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Rat**'s special partners — Six-Harmony [Ox](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Monkey](/guide/zodiac-pair-rat-monkey) · Discord [Sheep](/guide/zodiac-pair-rat-goat) · Clash [Horse](/guide/zodiac-pair-rat-horse)",
              "**The Dragon**'s special partners — Six-Harmony [Rooster](/guide/zodiac-pair-dragon-rooster) · Half triad [Rat](/guide/zodiac-pair-rat-dragon) · Discord [Pig](/guide/zodiac-pair-dragon-pig) · Clash [Dog](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rat](/guide/zodiac-rat) · [the Dragon](/guide/zodiac-dragon), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-horse": {
    "eyebrow": "By pair",
    "title": "The Rat and the Horse — Clash",
    "summary": "What relationship the Rat and the Horse have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rat and the Horse form a clash",
        "blocks": [
          {
            "p": "The Rat and the Horse form a clash. 子 and 午 sit directly opposite each other on the circle."
          },
          {
            "p": "This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people."
          },
          {
            "p": "On the circle, 子 is in the first place and 午 in the seventh, and the two characters are six steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Rat and the Horse",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacChung} points in zodiac compatibility and by {swingDayBranchChung} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Rat**'s special partners — Six-Harmony [Ox](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Monkey](/guide/zodiac-pair-rat-monkey) · Discord [Sheep](/guide/zodiac-pair-rat-goat) · Clash [Horse](/guide/zodiac-pair-rat-horse)",
              "**The Horse**'s special partners — Six-Harmony [Sheep](/guide/zodiac-pair-horse-goat) · Half triad [Tiger](/guide/zodiac-pair-tiger-horse), [Dog](/guide/zodiac-pair-horse-dog) · Discord [Ox](/guide/zodiac-pair-ox-horse) · Clash [Rat](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rat](/guide/zodiac-rat) · [the Horse](/guide/zodiac-horse), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-goat": {
    "eyebrow": "By pair",
    "title": "The Rat and the Sheep — Discord",
    "summary": "What relationship the Rat and the Sheep have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rat and the Sheep form a discord",
        "blocks": [
          {
            "p": "The Rat and the Sheep form a discord. The clash position of 子 is 午 (the Horse), and 未 sits right next to it; right next to 丑 (the Ox), the clash position of 未, sits 子."
          },
          {
            "p": "It is traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          },
          {
            "p": "On the circle, 子 is in the first place and 未 in the eighth, and the two characters are five steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Rat and the Sheep",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacWonjin} points in zodiac compatibility and by {swingDayBranchWonjin} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Rat**'s special partners — Six-Harmony [Ox](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Monkey](/guide/zodiac-pair-rat-monkey) · Discord [Sheep](/guide/zodiac-pair-rat-goat) · Clash [Horse](/guide/zodiac-pair-rat-horse)",
              "**The Sheep**'s special partners — Six-Harmony [Horse](/guide/zodiac-pair-horse-goat) · Half triad [Rabbit](/guide/zodiac-pair-rabbit-goat) · Discord [Rat](/guide/zodiac-pair-rat-goat) · Clash [Ox](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rat](/guide/zodiac-rat) · [the Sheep](/guide/zodiac-goat), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-monkey": {
    "eyebrow": "By pair",
    "title": "The Rat and the Monkey — Half triad",
    "summary": "What relationship the Rat and the Monkey have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rat and the Monkey form a half triad",
        "blocks": [
          {
            "p": "The Rat and the Monkey form a half triad. 申子辰 is one triad group (the water group), and 子 is the **royal branch** at its centre."
          },
          {
            "p": "Inyeon-Link accepts only pairs that include the royal branch, so this pair is a half triad ({scoreBanhap})."
          },
          {
            "p": "The Dragon (辰) and the Monkey (申) of the same group lack the central character 子, so they are not counted as a harmony and are treated as neutral."
          },
          {
            "p": "On the circle, 子 is in the first place and 申 in the ninth, and the two characters are four steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Rat and the Monkey",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacBanhap} points in zodiac compatibility and by {swingDayBranchBanhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Rat**'s special partners — Six-Harmony [Ox](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Monkey](/guide/zodiac-pair-rat-monkey) · Discord [Sheep](/guide/zodiac-pair-rat-goat) · Clash [Horse](/guide/zodiac-pair-rat-horse)",
              "**The Monkey**'s special partners — Six-Harmony [Snake](/guide/zodiac-pair-snake-monkey) · Half triad [Rat](/guide/zodiac-pair-rat-monkey) · Discord [Rabbit](/guide/zodiac-pair-rabbit-monkey) · Clash [Tiger](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rat](/guide/zodiac-rat) · [the Monkey](/guide/zodiac-monkey), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-ox": {
    "eyebrow": "By pair",
    "title": "The Ox and the Ox — Same Branch",
    "summary": "What relationship two Ox people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Ox people share the same branch",
        "blocks": [
          {
            "p": "Two Ox people share the same branch (丑 and 丑). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "丑 is the second of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Ox people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Ox",
        "blocks": [
          {
            "ul": [
              "**The Ox**'s special partners — Six-Harmony [Rat](/guide/zodiac-pair-rat-ox) · Half triad [Rooster](/guide/zodiac-pair-ox-rooster) · Discord [Horse](/guide/zodiac-pair-ox-horse) · Clash [Sheep](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Ox](/guide/zodiac-ox), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-horse": {
    "eyebrow": "By pair",
    "title": "The Ox and the Horse — Discord",
    "summary": "What relationship the Ox and the Horse have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Ox and the Horse form a discord",
        "blocks": [
          {
            "p": "The Ox and the Horse form a discord. The clash position of 丑 is 未 (the Sheep), and 午 sits right next to it; right next to 子 (the Rat), the clash position of 午, sits 丑."
          },
          {
            "p": "It is traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          },
          {
            "p": "On the circle, 丑 is in the second place and 午 in the seventh, and the two characters are five steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Ox and the Horse",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacWonjin} points in zodiac compatibility and by {swingDayBranchWonjin} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Ox**'s special partners — Six-Harmony [Rat](/guide/zodiac-pair-rat-ox) · Half triad [Rooster](/guide/zodiac-pair-ox-rooster) · Discord [Horse](/guide/zodiac-pair-ox-horse) · Clash [Sheep](/guide/zodiac-pair-ox-goat)",
              "**The Horse**'s special partners — Six-Harmony [Sheep](/guide/zodiac-pair-horse-goat) · Half triad [Tiger](/guide/zodiac-pair-tiger-horse), [Dog](/guide/zodiac-pair-horse-dog) · Discord [Ox](/guide/zodiac-pair-ox-horse) · Clash [Rat](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Ox](/guide/zodiac-ox) · [the Horse](/guide/zodiac-horse), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-goat": {
    "eyebrow": "By pair",
    "title": "The Ox and the Sheep — Clash",
    "summary": "What relationship the Ox and the Sheep have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Ox and the Sheep form a clash",
        "blocks": [
          {
            "p": "The Ox and the Sheep form a clash. 丑 and 未 sit directly opposite each other on the circle."
          },
          {
            "p": "This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people."
          },
          {
            "p": "On the circle, 丑 is in the second place and 未 in the eighth, and the two characters are six steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Ox and the Sheep",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacChung} points in zodiac compatibility and by {swingDayBranchChung} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Ox**'s special partners — Six-Harmony [Rat](/guide/zodiac-pair-rat-ox) · Half triad [Rooster](/guide/zodiac-pair-ox-rooster) · Discord [Horse](/guide/zodiac-pair-ox-horse) · Clash [Sheep](/guide/zodiac-pair-ox-goat)",
              "**The Sheep**'s special partners — Six-Harmony [Horse](/guide/zodiac-pair-horse-goat) · Half triad [Rabbit](/guide/zodiac-pair-rabbit-goat) · Discord [Rat](/guide/zodiac-pair-rat-goat) · Clash [Ox](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Ox](/guide/zodiac-ox) · [the Sheep](/guide/zodiac-goat), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-rooster": {
    "eyebrow": "By pair",
    "title": "The Ox and the Rooster — Half triad",
    "summary": "What relationship the Ox and the Rooster have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Ox and the Rooster form a half triad",
        "blocks": [
          {
            "p": "The Ox and the Rooster form a half triad. 巳酉丑 is one triad group (the metal group), and 酉 is the **royal branch** at its centre."
          },
          {
            "p": "Inyeon-Link accepts only pairs that include the royal branch, so this pair is a half triad ({scoreBanhap})."
          },
          {
            "p": "The Snake (巳) and the Ox (丑) of the same group lack the central character 酉, so they are not counted as a harmony and are treated as neutral."
          },
          {
            "p": "On the circle, 丑 is in the second place and 酉 in the tenth, and the two characters are four steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Ox and the Rooster",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacBanhap} points in zodiac compatibility and by {swingDayBranchBanhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Ox**'s special partners — Six-Harmony [Rat](/guide/zodiac-pair-rat-ox) · Half triad [Rooster](/guide/zodiac-pair-ox-rooster) · Discord [Horse](/guide/zodiac-pair-ox-horse) · Clash [Sheep](/guide/zodiac-pair-ox-goat)",
              "**The Rooster**'s special partners — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Ox](/guide/zodiac-pair-ox-rooster), [Snake](/guide/zodiac-pair-snake-rooster) · Discord [Tiger](/guide/zodiac-pair-tiger-rooster) · Clash [Rabbit](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Ox](/guide/zodiac-ox) · [the Rooster](/guide/zodiac-rooster), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-tiger": {
    "eyebrow": "By pair",
    "title": "The Tiger and the Tiger — Same Branch",
    "summary": "What relationship two Tiger people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Tiger people share the same branch",
        "blocks": [
          {
            "p": "Two Tiger people share the same branch (寅 and 寅). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "寅 is the third of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Tiger people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Tiger",
        "blocks": [
          {
            "ul": [
              "**The Tiger**'s special partners — Six-Harmony [Pig](/guide/zodiac-pair-tiger-pig) · Half triad [Horse](/guide/zodiac-pair-tiger-horse) · Discord [Rooster](/guide/zodiac-pair-tiger-rooster) · Clash [Monkey](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Tiger](/guide/zodiac-tiger), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-horse": {
    "eyebrow": "By pair",
    "title": "The Tiger and the Horse — Half triad",
    "summary": "What relationship the Tiger and the Horse have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Tiger and the Horse form a half triad",
        "blocks": [
          {
            "p": "The Tiger and the Horse form a half triad. 寅午戌 is one triad group (the fire group), and 午 is the **royal branch** at its centre."
          },
          {
            "p": "Inyeon-Link accepts only pairs that include the royal branch, so this pair is a half triad ({scoreBanhap})."
          },
          {
            "p": "The Dog (戌) and the Tiger (寅) of the same group lack the central character 午, so they are not counted as a harmony and are treated as neutral."
          },
          {
            "p": "On the circle, 寅 is in the third place and 午 in the seventh, and the two characters are four steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Tiger and the Horse",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacBanhap} points in zodiac compatibility and by {swingDayBranchBanhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Tiger**'s special partners — Six-Harmony [Pig](/guide/zodiac-pair-tiger-pig) · Half triad [Horse](/guide/zodiac-pair-tiger-horse) · Discord [Rooster](/guide/zodiac-pair-tiger-rooster) · Clash [Monkey](/guide/zodiac-pair-tiger-monkey)",
              "**The Horse**'s special partners — Six-Harmony [Sheep](/guide/zodiac-pair-horse-goat) · Half triad [Tiger](/guide/zodiac-pair-tiger-horse), [Dog](/guide/zodiac-pair-horse-dog) · Discord [Ox](/guide/zodiac-pair-ox-horse) · Clash [Rat](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Tiger](/guide/zodiac-tiger) · [the Horse](/guide/zodiac-horse), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-monkey": {
    "eyebrow": "By pair",
    "title": "The Tiger and the Monkey — Clash",
    "summary": "What relationship the Tiger and the Monkey have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Tiger and the Monkey form a clash",
        "blocks": [
          {
            "p": "The Tiger and the Monkey form a clash. 寅 and 申 sit directly opposite each other on the circle."
          },
          {
            "p": "This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people."
          },
          {
            "p": "On the circle, 寅 is in the third place and 申 in the ninth, and the two characters are six steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Tiger and the Monkey",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacChung} points in zodiac compatibility and by {swingDayBranchChung} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Tiger**'s special partners — Six-Harmony [Pig](/guide/zodiac-pair-tiger-pig) · Half triad [Horse](/guide/zodiac-pair-tiger-horse) · Discord [Rooster](/guide/zodiac-pair-tiger-rooster) · Clash [Monkey](/guide/zodiac-pair-tiger-monkey)",
              "**The Monkey**'s special partners — Six-Harmony [Snake](/guide/zodiac-pair-snake-monkey) · Half triad [Rat](/guide/zodiac-pair-rat-monkey) · Discord [Rabbit](/guide/zodiac-pair-rabbit-monkey) · Clash [Tiger](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Tiger](/guide/zodiac-tiger) · [the Monkey](/guide/zodiac-monkey), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-rooster": {
    "eyebrow": "By pair",
    "title": "The Tiger and the Rooster — Discord",
    "summary": "What relationship the Tiger and the Rooster have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Tiger and the Rooster form a discord",
        "blocks": [
          {
            "p": "The Tiger and the Rooster form a discord. The clash position of 寅 is 申 (the Monkey), and 酉 sits right next to it; right next to 卯 (the Rabbit), the clash position of 酉, sits 寅."
          },
          {
            "p": "It is traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          },
          {
            "p": "On the circle, 寅 is in the third place and 酉 in the tenth, and the two characters are five steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Tiger and the Rooster",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacWonjin} points in zodiac compatibility and by {swingDayBranchWonjin} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Tiger**'s special partners — Six-Harmony [Pig](/guide/zodiac-pair-tiger-pig) · Half triad [Horse](/guide/zodiac-pair-tiger-horse) · Discord [Rooster](/guide/zodiac-pair-tiger-rooster) · Clash [Monkey](/guide/zodiac-pair-tiger-monkey)",
              "**The Rooster**'s special partners — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Ox](/guide/zodiac-pair-ox-rooster), [Snake](/guide/zodiac-pair-snake-rooster) · Discord [Tiger](/guide/zodiac-pair-tiger-rooster) · Clash [Rabbit](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Tiger](/guide/zodiac-tiger) · [the Rooster](/guide/zodiac-rooster), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-pig": {
    "eyebrow": "By pair",
    "title": "The Tiger and the Pig — Six-Harmony",
    "summary": "What relationship the Tiger and the Pig have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Tiger and the Pig form a six-harmony",
        "blocks": [
          {
            "p": "The Tiger and the Pig form a six-harmony. 寅 and 亥 make a harmony with only two characters."
          },
          {
            "p": "A six-harmony is the good relationship that appears most often in compatibility, and at {scoreYukhap} it is the highest score either animal can get."
          },
          {
            "p": "On the circle, 寅 is in the third place and 亥 in the twelfth, and the two characters are three steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Tiger and the Pig",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacYukhap} points in zodiac compatibility and by {swingDayBranchYukhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Tiger**'s special partners — Six-Harmony [Pig](/guide/zodiac-pair-tiger-pig) · Half triad [Horse](/guide/zodiac-pair-tiger-horse) · Discord [Rooster](/guide/zodiac-pair-tiger-rooster) · Clash [Monkey](/guide/zodiac-pair-tiger-monkey)",
              "**The Pig**'s special partners — Six-Harmony [Tiger](/guide/zodiac-pair-tiger-pig) · Half triad [Rabbit](/guide/zodiac-pair-rabbit-pig) · Discord [Dragon](/guide/zodiac-pair-dragon-pig) · Clash [Snake](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Tiger](/guide/zodiac-tiger) · [the Pig](/guide/zodiac-pig), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rabbit": {
    "eyebrow": "By pair",
    "title": "The Rabbit and the Rabbit — Same Branch",
    "summary": "What relationship two Rabbit people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Rabbit people share the same branch",
        "blocks": [
          {
            "p": "Two Rabbit people share the same branch (卯 and 卯). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "卯 is the fourth of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Rabbit people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Rabbit",
        "blocks": [
          {
            "ul": [
              "**The Rabbit**'s special partners — Six-Harmony [Dog](/guide/zodiac-pair-rabbit-dog) · Half triad [Sheep](/guide/zodiac-pair-rabbit-goat), [Pig](/guide/zodiac-pair-rabbit-pig) · Discord [Monkey](/guide/zodiac-pair-rabbit-monkey) · Clash [Rooster](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rabbit](/guide/zodiac-rabbit), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-goat": {
    "eyebrow": "By pair",
    "title": "The Rabbit and the Sheep — Half triad",
    "summary": "What relationship the Rabbit and the Sheep have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rabbit and the Sheep form a half triad",
        "blocks": [
          {
            "p": "The Rabbit and the Sheep form a half triad. 亥卯未 is one triad group (the wood group), and 卯 is the **royal branch** at its centre."
          },
          {
            "p": "Inyeon-Link accepts only pairs that include the royal branch, so this pair is a half triad ({scoreBanhap})."
          },
          {
            "p": "The Pig (亥) and the Sheep (未) of the same group lack the central character 卯, so they are not counted as a harmony and are treated as neutral."
          },
          {
            "p": "On the circle, 卯 is in the fourth place and 未 in the eighth, and the two characters are four steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Rabbit and the Sheep",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacBanhap} points in zodiac compatibility and by {swingDayBranchBanhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Rabbit**'s special partners — Six-Harmony [Dog](/guide/zodiac-pair-rabbit-dog) · Half triad [Sheep](/guide/zodiac-pair-rabbit-goat), [Pig](/guide/zodiac-pair-rabbit-pig) · Discord [Monkey](/guide/zodiac-pair-rabbit-monkey) · Clash [Rooster](/guide/zodiac-pair-rabbit-rooster)",
              "**The Sheep**'s special partners — Six-Harmony [Horse](/guide/zodiac-pair-horse-goat) · Half triad [Rabbit](/guide/zodiac-pair-rabbit-goat) · Discord [Rat](/guide/zodiac-pair-rat-goat) · Clash [Ox](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rabbit](/guide/zodiac-rabbit) · [the Sheep](/guide/zodiac-goat), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-monkey": {
    "eyebrow": "By pair",
    "title": "The Rabbit and the Monkey — Discord",
    "summary": "What relationship the Rabbit and the Monkey have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rabbit and the Monkey form a discord",
        "blocks": [
          {
            "p": "The Rabbit and the Monkey form a discord. The clash position of 卯 is 酉 (the Rooster), and 申 sits right next to it; right next to 寅 (the Tiger), the clash position of 申, sits 卯."
          },
          {
            "p": "It is traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          },
          {
            "p": "On the circle, 卯 is in the fourth place and 申 in the ninth, and the two characters are five steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Rabbit and the Monkey",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacWonjin} points in zodiac compatibility and by {swingDayBranchWonjin} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Rabbit**'s special partners — Six-Harmony [Dog](/guide/zodiac-pair-rabbit-dog) · Half triad [Sheep](/guide/zodiac-pair-rabbit-goat), [Pig](/guide/zodiac-pair-rabbit-pig) · Discord [Monkey](/guide/zodiac-pair-rabbit-monkey) · Clash [Rooster](/guide/zodiac-pair-rabbit-rooster)",
              "**The Monkey**'s special partners — Six-Harmony [Snake](/guide/zodiac-pair-snake-monkey) · Half triad [Rat](/guide/zodiac-pair-rat-monkey) · Discord [Rabbit](/guide/zodiac-pair-rabbit-monkey) · Clash [Tiger](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rabbit](/guide/zodiac-rabbit) · [the Monkey](/guide/zodiac-monkey), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rooster": {
    "eyebrow": "By pair",
    "title": "The Rabbit and the Rooster — Clash",
    "summary": "What relationship the Rabbit and the Rooster have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rabbit and the Rooster form a clash",
        "blocks": [
          {
            "p": "The Rabbit and the Rooster form a clash. 卯 and 酉 sit directly opposite each other on the circle."
          },
          {
            "p": "This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people."
          },
          {
            "p": "On the circle, 卯 is in the fourth place and 酉 in the tenth, and the two characters are six steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Rabbit and the Rooster",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacChung} points in zodiac compatibility and by {swingDayBranchChung} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Rabbit**'s special partners — Six-Harmony [Dog](/guide/zodiac-pair-rabbit-dog) · Half triad [Sheep](/guide/zodiac-pair-rabbit-goat), [Pig](/guide/zodiac-pair-rabbit-pig) · Discord [Monkey](/guide/zodiac-pair-rabbit-monkey) · Clash [Rooster](/guide/zodiac-pair-rabbit-rooster)",
              "**The Rooster**'s special partners — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Ox](/guide/zodiac-pair-ox-rooster), [Snake](/guide/zodiac-pair-snake-rooster) · Discord [Tiger](/guide/zodiac-pair-tiger-rooster) · Clash [Rabbit](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rabbit](/guide/zodiac-rabbit) · [the Rooster](/guide/zodiac-rooster), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-dog": {
    "eyebrow": "By pair",
    "title": "The Rabbit and the Dog — Six-Harmony",
    "summary": "What relationship the Rabbit and the Dog have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rabbit and the Dog form a six-harmony",
        "blocks": [
          {
            "p": "The Rabbit and the Dog form a six-harmony. 卯 and 戌 make a harmony with only two characters."
          },
          {
            "p": "A six-harmony is the good relationship that appears most often in compatibility, and at {scoreYukhap} it is the highest score either animal can get."
          },
          {
            "p": "On the circle, 卯 is in the fourth place and 戌 in the eleventh, and the two characters are five steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Rabbit and the Dog",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacYukhap} points in zodiac compatibility and by {swingDayBranchYukhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Rabbit**'s special partners — Six-Harmony [Dog](/guide/zodiac-pair-rabbit-dog) · Half triad [Sheep](/guide/zodiac-pair-rabbit-goat), [Pig](/guide/zodiac-pair-rabbit-pig) · Discord [Monkey](/guide/zodiac-pair-rabbit-monkey) · Clash [Rooster](/guide/zodiac-pair-rabbit-rooster)",
              "**The Dog**'s special partners — Six-Harmony [Rabbit](/guide/zodiac-pair-rabbit-dog) · Half triad [Horse](/guide/zodiac-pair-horse-dog) · Discord [Snake](/guide/zodiac-pair-snake-dog) · Clash [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rabbit](/guide/zodiac-rabbit) · [the Dog](/guide/zodiac-dog), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-pig": {
    "eyebrow": "By pair",
    "title": "The Rabbit and the Pig — Half triad",
    "summary": "What relationship the Rabbit and the Pig have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Rabbit and the Pig form a half triad",
        "blocks": [
          {
            "p": "The Rabbit and the Pig form a half triad. 亥卯未 is one triad group (the wood group), and 卯 is the **royal branch** at its centre."
          },
          {
            "p": "Inyeon-Link accepts only pairs that include the royal branch, so this pair is a half triad ({scoreBanhap})."
          },
          {
            "p": "The Sheep (未) and the Pig (亥) of the same group lack the central character 卯, so they are not counted as a harmony and are treated as neutral."
          },
          {
            "p": "On the circle, 卯 is in the fourth place and 亥 in the twelfth, and the two characters are four steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Rabbit and the Pig",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacBanhap} points in zodiac compatibility and by {swingDayBranchBanhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Rabbit**'s special partners — Six-Harmony [Dog](/guide/zodiac-pair-rabbit-dog) · Half triad [Sheep](/guide/zodiac-pair-rabbit-goat), [Pig](/guide/zodiac-pair-rabbit-pig) · Discord [Monkey](/guide/zodiac-pair-rabbit-monkey) · Clash [Rooster](/guide/zodiac-pair-rabbit-rooster)",
              "**The Pig**'s special partners — Six-Harmony [Tiger](/guide/zodiac-pair-tiger-pig) · Half triad [Rabbit](/guide/zodiac-pair-rabbit-pig) · Discord [Dragon](/guide/zodiac-pair-dragon-pig) · Clash [Snake](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rabbit](/guide/zodiac-rabbit) · [the Pig](/guide/zodiac-pig), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dragon": {
    "eyebrow": "By pair",
    "title": "The Dragon and the Dragon — Same Branch",
    "summary": "What relationship two Dragon people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Dragon people share the same branch",
        "blocks": [
          {
            "p": "Two Dragon people share the same branch (辰 and 辰). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "辰 is the fifth of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Dragon people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Dragon",
        "blocks": [
          {
            "ul": [
              "**The Dragon**'s special partners — Six-Harmony [Rooster](/guide/zodiac-pair-dragon-rooster) · Half triad [Rat](/guide/zodiac-pair-rat-dragon) · Discord [Pig](/guide/zodiac-pair-dragon-pig) · Clash [Dog](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Dragon](/guide/zodiac-dragon), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-rooster": {
    "eyebrow": "By pair",
    "title": "The Dragon and the Rooster — Six-Harmony",
    "summary": "What relationship the Dragon and the Rooster have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Dragon and the Rooster form a six-harmony",
        "blocks": [
          {
            "p": "The Dragon and the Rooster form a six-harmony. 辰 and 酉 make a harmony with only two characters."
          },
          {
            "p": "A six-harmony is the good relationship that appears most often in compatibility, and at {scoreYukhap} it is the highest score either animal can get."
          },
          {
            "p": "On the circle, 辰 is in the fifth place and 酉 in the tenth, and the two characters are five steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Dragon and the Rooster",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacYukhap} points in zodiac compatibility and by {swingDayBranchYukhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Dragon**'s special partners — Six-Harmony [Rooster](/guide/zodiac-pair-dragon-rooster) · Half triad [Rat](/guide/zodiac-pair-rat-dragon) · Discord [Pig](/guide/zodiac-pair-dragon-pig) · Clash [Dog](/guide/zodiac-pair-dragon-dog)",
              "**The Rooster**'s special partners — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Ox](/guide/zodiac-pair-ox-rooster), [Snake](/guide/zodiac-pair-snake-rooster) · Discord [Tiger](/guide/zodiac-pair-tiger-rooster) · Clash [Rabbit](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Dragon](/guide/zodiac-dragon) · [the Rooster](/guide/zodiac-rooster), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dog": {
    "eyebrow": "By pair",
    "title": "The Dragon and the Dog — Clash",
    "summary": "What relationship the Dragon and the Dog have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Dragon and the Dog form a clash",
        "blocks": [
          {
            "p": "The Dragon and the Dog form a clash. 辰 and 戌 sit directly opposite each other on the circle."
          },
          {
            "p": "This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people."
          },
          {
            "p": "On the circle, 辰 is in the fifth place and 戌 in the eleventh, and the two characters are six steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Dragon and the Dog",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacChung} points in zodiac compatibility and by {swingDayBranchChung} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Dragon**'s special partners — Six-Harmony [Rooster](/guide/zodiac-pair-dragon-rooster) · Half triad [Rat](/guide/zodiac-pair-rat-dragon) · Discord [Pig](/guide/zodiac-pair-dragon-pig) · Clash [Dog](/guide/zodiac-pair-dragon-dog)",
              "**The Dog**'s special partners — Six-Harmony [Rabbit](/guide/zodiac-pair-rabbit-dog) · Half triad [Horse](/guide/zodiac-pair-horse-dog) · Discord [Snake](/guide/zodiac-pair-snake-dog) · Clash [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Dragon](/guide/zodiac-dragon) · [the Dog](/guide/zodiac-dog), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-pig": {
    "eyebrow": "By pair",
    "title": "The Dragon and the Pig — Discord",
    "summary": "What relationship the Dragon and the Pig have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Dragon and the Pig form a discord",
        "blocks": [
          {
            "p": "The Dragon and the Pig form a discord. The clash position of 辰 is 戌 (the Dog), and 亥 sits right next to it; right next to 巳 (the Snake), the clash position of 亥, sits 辰."
          },
          {
            "p": "It is traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          },
          {
            "p": "On the circle, 辰 is in the fifth place and 亥 in the twelfth, and the two characters are five steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Dragon and the Pig",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacWonjin} points in zodiac compatibility and by {swingDayBranchWonjin} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Dragon**'s special partners — Six-Harmony [Rooster](/guide/zodiac-pair-dragon-rooster) · Half triad [Rat](/guide/zodiac-pair-rat-dragon) · Discord [Pig](/guide/zodiac-pair-dragon-pig) · Clash [Dog](/guide/zodiac-pair-dragon-dog)",
              "**The Pig**'s special partners — Six-Harmony [Tiger](/guide/zodiac-pair-tiger-pig) · Half triad [Rabbit](/guide/zodiac-pair-rabbit-pig) · Discord [Dragon](/guide/zodiac-pair-dragon-pig) · Clash [Snake](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Dragon](/guide/zodiac-dragon) · [the Pig](/guide/zodiac-pig), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-snake": {
    "eyebrow": "By pair",
    "title": "The Snake and the Snake — Same Branch",
    "summary": "What relationship two Snake people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Snake people share the same branch",
        "blocks": [
          {
            "p": "Two Snake people share the same branch (巳 and 巳). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "巳 is the sixth of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Snake people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Snake",
        "blocks": [
          {
            "ul": [
              "**The Snake**'s special partners — Six-Harmony [Monkey](/guide/zodiac-pair-snake-monkey) · Half triad [Rooster](/guide/zodiac-pair-snake-rooster) · Discord [Dog](/guide/zodiac-pair-snake-dog) · Clash [Pig](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Snake](/guide/zodiac-snake), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-monkey": {
    "eyebrow": "By pair",
    "title": "The Snake and the Monkey — Six-Harmony",
    "summary": "What relationship the Snake and the Monkey have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Snake and the Monkey form a six-harmony",
        "blocks": [
          {
            "p": "The Snake and the Monkey form a six-harmony. 巳 and 申 make a harmony with only two characters."
          },
          {
            "p": "A six-harmony is the good relationship that appears most often in compatibility, and at {scoreYukhap} it is the highest score either animal can get."
          },
          {
            "p": "On the circle, 巳 is in the sixth place and 申 in the ninth, and the two characters are three steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Snake and the Monkey",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacYukhap} points in zodiac compatibility and by {swingDayBranchYukhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Snake**'s special partners — Six-Harmony [Monkey](/guide/zodiac-pair-snake-monkey) · Half triad [Rooster](/guide/zodiac-pair-snake-rooster) · Discord [Dog](/guide/zodiac-pair-snake-dog) · Clash [Pig](/guide/zodiac-pair-snake-pig)",
              "**The Monkey**'s special partners — Six-Harmony [Snake](/guide/zodiac-pair-snake-monkey) · Half triad [Rat](/guide/zodiac-pair-rat-monkey) · Discord [Rabbit](/guide/zodiac-pair-rabbit-monkey) · Clash [Tiger](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Snake](/guide/zodiac-snake) · [the Monkey](/guide/zodiac-monkey), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-rooster": {
    "eyebrow": "By pair",
    "title": "The Snake and the Rooster — Half triad",
    "summary": "What relationship the Snake and the Rooster have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Snake and the Rooster form a half triad",
        "blocks": [
          {
            "p": "The Snake and the Rooster form a half triad. 巳酉丑 is one triad group (the metal group), and 酉 is the **royal branch** at its centre."
          },
          {
            "p": "Inyeon-Link accepts only pairs that include the royal branch, so this pair is a half triad ({scoreBanhap})."
          },
          {
            "p": "The Ox (丑) and the Snake (巳) of the same group lack the central character 酉, so they are not counted as a harmony and are treated as neutral."
          },
          {
            "p": "On the circle, 巳 is in the sixth place and 酉 in the tenth, and the two characters are four steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Snake and the Rooster",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacBanhap} points in zodiac compatibility and by {swingDayBranchBanhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Snake**'s special partners — Six-Harmony [Monkey](/guide/zodiac-pair-snake-monkey) · Half triad [Rooster](/guide/zodiac-pair-snake-rooster) · Discord [Dog](/guide/zodiac-pair-snake-dog) · Clash [Pig](/guide/zodiac-pair-snake-pig)",
              "**The Rooster**'s special partners — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Ox](/guide/zodiac-pair-ox-rooster), [Snake](/guide/zodiac-pair-snake-rooster) · Discord [Tiger](/guide/zodiac-pair-tiger-rooster) · Clash [Rabbit](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Snake](/guide/zodiac-snake) · [the Rooster](/guide/zodiac-rooster), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-dog": {
    "eyebrow": "By pair",
    "title": "The Snake and the Dog — Discord",
    "summary": "What relationship the Snake and the Dog have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Snake and the Dog form a discord",
        "blocks": [
          {
            "p": "The Snake and the Dog form a discord. The clash position of 巳 is 亥 (the Pig), and 戌 sits right next to it; right next to 辰 (the Dragon), the clash position of 戌, sits 巳."
          },
          {
            "p": "It is traditionally seen as a pair who resent each other yet cannot part. It looks calm on the surface, but the misalignment is believed to last, so it gets {scoreWonjin} — higher than a clash ({scoreChung}) and lower than neutral ({scoreNeutral})."
          },
          {
            "p": "On the circle, 巳 is in the sixth place and 戌 in the eleventh, and the two characters are five steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Snake and the Dog",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacWonjin} points in zodiac compatibility and by {swingDayBranchWonjin} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Snake**'s special partners — Six-Harmony [Monkey](/guide/zodiac-pair-snake-monkey) · Half triad [Rooster](/guide/zodiac-pair-snake-rooster) · Discord [Dog](/guide/zodiac-pair-snake-dog) · Clash [Pig](/guide/zodiac-pair-snake-pig)",
              "**The Dog**'s special partners — Six-Harmony [Rabbit](/guide/zodiac-pair-rabbit-dog) · Half triad [Horse](/guide/zodiac-pair-horse-dog) · Discord [Snake](/guide/zodiac-pair-snake-dog) · Clash [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Snake](/guide/zodiac-snake) · [the Dog](/guide/zodiac-dog), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-pig": {
    "eyebrow": "By pair",
    "title": "The Snake and the Pig — Clash",
    "summary": "What relationship the Snake and the Pig have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Snake and the Pig form a clash",
        "blocks": [
          {
            "p": "The Snake and the Pig form a clash. 巳 and 亥 sit directly opposite each other on the circle."
          },
          {
            "p": "This service keeps {scoreChung} points even for a clash. In traditional myeongri a clash is a collision, not the end of a relationship, and giving a score near the floor would amount to pronouncing a verdict on two people."
          },
          {
            "p": "On the circle, 巳 is in the sixth place and 亥 in the twelfth, and the two characters are six steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Snake and the Pig",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair lowers the final match rate by {swingZodiacChung} points in zodiac compatibility and by {swingDayBranchChung} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Snake**'s special partners — Six-Harmony [Monkey](/guide/zodiac-pair-snake-monkey) · Half triad [Rooster](/guide/zodiac-pair-snake-rooster) · Discord [Dog](/guide/zodiac-pair-snake-dog) · Clash [Pig](/guide/zodiac-pair-snake-pig)",
              "**The Pig**'s special partners — Six-Harmony [Tiger](/guide/zodiac-pair-tiger-pig) · Half triad [Rabbit](/guide/zodiac-pair-rabbit-pig) · Discord [Dragon](/guide/zodiac-pair-dragon-pig) · Clash [Snake](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Snake](/guide/zodiac-snake) · [the Pig](/guide/zodiac-pig), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-horse": {
    "eyebrow": "By pair",
    "title": "The Horse and the Horse — Same Branch",
    "summary": "What relationship two Horse people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Horse people share the same branch",
        "blocks": [
          {
            "p": "Two Horse people share the same branch (午 and 午). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "午 is the seventh of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Horse people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Horse",
        "blocks": [
          {
            "ul": [
              "**The Horse**'s special partners — Six-Harmony [Sheep](/guide/zodiac-pair-horse-goat) · Half triad [Tiger](/guide/zodiac-pair-tiger-horse), [Dog](/guide/zodiac-pair-horse-dog) · Discord [Ox](/guide/zodiac-pair-ox-horse) · Clash [Rat](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Horse](/guide/zodiac-horse), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-goat": {
    "eyebrow": "By pair",
    "title": "The Horse and the Sheep — Six-Harmony",
    "summary": "What relationship the Horse and the Sheep have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Horse and the Sheep form a six-harmony",
        "blocks": [
          {
            "p": "The Horse and the Sheep form a six-harmony. 午 and 未 make a harmony with only two characters."
          },
          {
            "p": "A six-harmony is the good relationship that appears most often in compatibility, and at {scoreYukhap} it is the highest score either animal can get."
          },
          {
            "p": "On the circle, 午 is in the seventh place and 未 in the eighth, and the two characters are one step apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Horse and the Sheep",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacYukhap} points in zodiac compatibility and by {swingDayBranchYukhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Horse**'s special partners — Six-Harmony [Sheep](/guide/zodiac-pair-horse-goat) · Half triad [Tiger](/guide/zodiac-pair-tiger-horse), [Dog](/guide/zodiac-pair-horse-dog) · Discord [Ox](/guide/zodiac-pair-ox-horse) · Clash [Rat](/guide/zodiac-pair-rat-horse)",
              "**The Sheep**'s special partners — Six-Harmony [Horse](/guide/zodiac-pair-horse-goat) · Half triad [Rabbit](/guide/zodiac-pair-rabbit-goat) · Discord [Rat](/guide/zodiac-pair-rat-goat) · Clash [Ox](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Horse](/guide/zodiac-horse) · [the Sheep](/guide/zodiac-goat), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-dog": {
    "eyebrow": "By pair",
    "title": "The Horse and the Dog — Half triad",
    "summary": "What relationship the Horse and the Dog have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The Horse and the Dog form a half triad",
        "blocks": [
          {
            "p": "The Horse and the Dog form a half triad. 寅午戌 is one triad group (the fire group), and 午 is the **royal branch** at its centre."
          },
          {
            "p": "Inyeon-Link accepts only pairs that include the royal branch, so this pair is a half triad ({scoreBanhap})."
          },
          {
            "p": "The Tiger (寅) and the Dog (戌) of the same group lack the central character 午, so they are not counted as a harmony and are treated as neutral."
          },
          {
            "p": "On the circle, 午 is in the seventh place and 戌 in the eleventh, and the two characters are four steps apart."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "The Horse and the Dog",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacBanhap} points in zodiac compatibility and by {swingDayBranchBanhap} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of each animal",
        "blocks": [
          {
            "ul": [
              "**The Horse**'s special partners — Six-Harmony [Sheep](/guide/zodiac-pair-horse-goat) · Half triad [Tiger](/guide/zodiac-pair-tiger-horse), [Dog](/guide/zodiac-pair-horse-dog) · Discord [Ox](/guide/zodiac-pair-ox-horse) · Clash [Rat](/guide/zodiac-pair-rat-horse)",
              "**The Dog**'s special partners — Six-Harmony [Rabbit](/guide/zodiac-pair-rabbit-dog) · Half triad [Horse](/guide/zodiac-pair-horse-dog) · Discord [Snake](/guide/zodiac-pair-snake-dog) · Clash [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Horse](/guide/zodiac-horse) · [the Dog](/guide/zodiac-dog), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-goat-goat": {
    "eyebrow": "By pair",
    "title": "The Sheep and the Sheep — Same Branch",
    "summary": "What relationship two Sheep people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Sheep people share the same branch",
        "blocks": [
          {
            "p": "Two Sheep people share the same branch (未 and 未). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "未 is the eighth of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Sheep people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Sheep",
        "blocks": [
          {
            "ul": [
              "**The Sheep**'s special partners — Six-Harmony [Horse](/guide/zodiac-pair-horse-goat) · Half triad [Rabbit](/guide/zodiac-pair-rabbit-goat) · Discord [Rat](/guide/zodiac-pair-rat-goat) · Clash [Ox](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Sheep](/guide/zodiac-goat), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-monkey-monkey": {
    "eyebrow": "By pair",
    "title": "The Monkey and the Monkey — Same Branch",
    "summary": "What relationship two Monkey people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Monkey people share the same branch",
        "blocks": [
          {
            "p": "Two Monkey people share the same branch (申 and 申). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "申 is the ninth of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Monkey people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Monkey",
        "blocks": [
          {
            "ul": [
              "**The Monkey**'s special partners — Six-Harmony [Snake](/guide/zodiac-pair-snake-monkey) · Half triad [Rat](/guide/zodiac-pair-rat-monkey) · Discord [Rabbit](/guide/zodiac-pair-rabbit-monkey) · Clash [Tiger](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Monkey](/guide/zodiac-monkey), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rooster-rooster": {
    "eyebrow": "By pair",
    "title": "The Rooster and the Rooster — Same Branch",
    "summary": "What relationship two Rooster people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Rooster people share the same branch",
        "blocks": [
          {
            "p": "Two Rooster people share the same branch (酉 and 酉). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "酉 is the tenth of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Rooster people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Rooster",
        "blocks": [
          {
            "ul": [
              "**The Rooster**'s special partners — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Ox](/guide/zodiac-pair-ox-rooster), [Snake](/guide/zodiac-pair-snake-rooster) · Discord [Tiger](/guide/zodiac-pair-tiger-rooster) · Clash [Rabbit](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Rooster](/guide/zodiac-rooster), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dog-dog": {
    "eyebrow": "By pair",
    "title": "The Dog and the Dog — Same Branch",
    "summary": "What relationship two Dog people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Dog people share the same branch",
        "blocks": [
          {
            "p": "Two Dog people share the same branch (戌 and 戌). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "戌 is the eleventh of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Dog people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Dog",
        "blocks": [
          {
            "ul": [
              "**The Dog**'s special partners — Six-Harmony [Rabbit](/guide/zodiac-pair-rabbit-dog) · Half triad [Horse](/guide/zodiac-pair-horse-dog) · Discord [Snake](/guide/zodiac-pair-snake-dog) · Clash [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Dog](/guide/zodiac-dog), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-pig-pig": {
    "eyebrow": "By pair",
    "title": "The Pig and the Pig — Same Branch",
    "summary": "What relationship two Pig people have, what it scores, and how far that score moves the final match rate — laid out exactly as Inyeon-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Two Pig people share the same branch",
        "blocks": [
          {
            "p": "Two Pig people share the same branch (亥 and 亥). It means they resemble each other, not that they attract."
          },
          {
            "p": "So it scores {scoreSame}, just above neutral ({scoreNeutral}): not a harmony, a clash or a discord, only slightly raised."
          },
          {
            "p": "亥 is the twelfth of the twelve earthly branches."
          }
        ]
      },
      {
        "title": "The numbers of this pair",
        "blocks": [
          {
            "table": {
              "caption": "Two Pig people",
              "head": [
                "Item",
                "Value"
              ],
              "rows": [
                [
                  "Relationship",
                  "Same branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Share of the final match rate in zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Share of the final match rate in day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "How far it moves the final match rate",
        "blocks": [
          {
            "p": "If everything else is equal, this pair raises the final match rate by {swingZodiacSame} points in zodiac compatibility and by {swingDayBranchSame} points in day branch compatibility, compared with a neutral pair."
          },
          {
            "p": "Zodiac compatibility sets the branches of the birth years side by side, and day branch compatibility sets those of the birth days. The two can be different branches, so the same two people can show different relationships in each."
          }
        ]
      },
      {
        "title": "The other special relationships of the Pig",
        "blocks": [
          {
            "ul": [
              "**The Pig**'s special partners — Six-Harmony [Tiger](/guide/zodiac-pair-tiger-pig) · Half triad [Rabbit](/guide/zodiac-pair-rabbit-pig) · Discord [Dragon](/guide/zodiac-pair-dragon-pig) · Clash [Snake](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One animal does not settle a relationship between two people. {weightSaju} of the final match rate is decided by the saju compatibility.",
              "The point changes above assume that everything else is equal; the real result is set by both people's whole saju."
            ]
          },
          {
            "p": "The full guide to each animal is at [the Pig](/guide/zodiac-pig), and the full chart is in the [twelve-branch chart](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "Ten Gods",
    "title": "Ten Gods and Spouse Position",
    "summary": "We look at what each person's day stem is to each other through the Ten Gods. We explain why direct wealth and indirect wealth are read differently even though both are wealth.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "The day stem is the person themselves",
        "blocks": [
          {
            "p": "Among the eight characters of saju, the **day stem** (the heavenly stem of the day of birth) refers to the person themselves. The remaining seven characters are read as the environment in which that day stem is placed."
          },
          {
            "p": "**Ten Gods** (十神) divides how the day stem perceives other characters into ten categories. What nurtures me is **resource**, what is the same as me is **peer**, what I produce is **output**, what I control is **wealth**, and what controls me is **authority** — each of the five is then split by polarity, making ten."
          }
        ]
      },
      {
        "title": "What each person's day stem is to each other",
        "blocks": [
          {
            "p": "This is the first item in compatibility. Once it is determined what A's day stem perceives B's day stem as, B's perception of A is also determined, so there are **only six possibilities**."
          },
          {
            "table": {
              "caption": "In order of highest score",
              "head": [
                "Pair",
                "Yin/Yang",
                "Name",
                "Meaning"
              ],
              "rows": [
                [
                  "Direct Wealth ↔ Direct Authority",
                  "Opposite polarity",
                  "Warm bond (有情)",
                  "This is the pair traditionally seen as the spouse's position. The yin and yang are mismatched, attracting each other."
                ],
                [
                  "Hurting Officer ↔ Direct Resource",
                  "Opposite polarity",
                  "Hurting Officer wearing the Seal (傷官佩印)",
                  "One side wraps the intense energy of the other side."
                ],
                [
                  "Friend ↔ Friend",
                  "Same polarity",
                  "Equal",
                  "They resemble each other and are equal, but do not push each other."
                ],
                [
                  "Rival ↔ Rival",
                  "Opposite polarity",
                  "Competition",
                  "They are attracted to each other but compete for the same position."
                ],
                [
                  "Indirect Wealth ↔ Indirect Authority",
                  "Same polarity",
                  "Cold bond (無情)",
                  "The stimulation is great, but the burden is also heavy."
                ],
                [
                  "Eating God ↔ Indirect Resource",
                  "Same polarity",
                  "The owl star robs the food (梟神奪食)",
                  "The energy given is taken by the counterpart, blocking the flow."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Yin and Yang are at a crossroads",
        "blocks": [
          {
            "p": "The side where yin and yang are misaligned (Proper Wealth, Proper Officer, Proper Companion) is emotional, while the same side (Resource, Officer, Companion) is unemotional, which is the principle that distinguishes the proper and the side of the Ten Gods."
          }
        ]
      },
      {
        "title": "The reason for viewing with Ten Gods rather than three elements",
        "blocks": [
          {
            "p": "There is a method of viewing the relationship of the day stem with the three elements (mutual generation, sameness, mutual overcoming). It is simple, but **yin and yang disappear.** 甲 (yang wood) and 乙 (yin wood) become the same 'sameness' like 甲 and 甲, and mutual overcoming is crushed into a single score without direction or yin and yang."
          },
          {
            "p": "The spouse position must be evaluated in terms of the Ten Gods. If the items viewed by the five elements and the items viewed by the Ten Gods are mixed in one engine, there will be two standards for the same two characters. Therefore, we unify with the Ten Gods."
          }
        ]
      },
      {
        "title": "The spouse position is Proper Wealth and Proper Officer",
        "blocks": [
          {
            "p": "In the tradition, which of the Ten Gods stands for a spouse differs by gender."
          },
          {
            "table": {
              "head": [
                "Gender",
                "Spouse Position",
                "Corresponding Position"
              ],
              "rows": [
                [
                  "Male",
                  "Direct Wealth (正財)",
                  "Indirect Wealth (偏財)"
                ],
                [
                  "Female",
                  "Direct Authority (正官)",
                  "Indirect Authority (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Even if they are the same resource, only the emotional **Proper Wealth** is considered the spouse position, while Resource is read as the nature of activity and wealth. Therefore, Proper Wealth and Proper Officer count as 2 points, while Resource and Officer count as 1 point, and both directions are summed — if both are seen as spouse positions, it is the highest."
          }
        ]
      },
      {
        "kind": "note",
        "title": "If gender is not disclosed, omit this item",
        "blocks": [
          {
            "p": "If an undecidable item is set to 0 points, it results in an unfairly low score. The remaining weight after omitting the item is normalized again [(item and weight)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "We also show the shape of the relationship",
        "blocks": [
          {
            "p": "Apart from the score, we describe **what shape** the pair of day stems has on the results screen. Whether they are similar positions, whether one side supports the other, or whether one side is suppressed — if it is a supportive or suppressive relationship, we clarify which side holds that position."
          },
          {
            "p": "If only one score is presented, it leaves the question 'so what'. The shape is not a score but something to read, and even pairs with low scores have something to interpret."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "The five elements",
    "title": "Supporting Element — The energy needed now",
    "summary": "We view the five elements not as 'did they choose two' but as 'does the counterpart have what I need'. We also disclose the boundary value that distinguishes a strong day master from a weak one.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Whether the five elements are 'balanced' is not a question of compatibility",
        "blocks": [
          {
            "p": "There is a method of measuring whether the five energies are evenly distributed by combining the two people's five elements. However, the question of compatibility is not that. **Does the counterpart have what I need?**"
          },
          {
            "p": "The degree of balance is symmetrical, but complementarity is inherently asymmetrical. This is because what A needs is different from what B needs. Therefore, we measure each side separately and average — since it is an average, the total score remains symmetrical."
          }
        ]
      },
      {
        "title": "Supporting Element — Reduce if excessive, add if insufficient",
        "blocks": [
          {
            "p": "The Supporting Element (用神) is 'the energy this person needs right now'. There are several methods to determine it (suppressing, supporting, illness, and communication), but it can be translated into rules, and the most widely used is **suppressing (抑扶)**. If the day master is strong, it is seen that the energy to reduce is needed, and if weak, the energy to add is needed."
          },
          {
            "table": {
              "head": [
                "Judgment",
                "What is needed",
                "How many"
              ],
              "rows": [
                [
                  "Strong day master (身强)",
                  "Diminishing energy — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Three"
                ],
                [
                  "Weak day master (身弱)",
                  "Adding energy — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Two"
                ],
                [
                  "Balanced (中和)",
                  "Cannot be covered by the supporting element, so it is the thinnest energy",
                  "Two"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Threshold values for strength and weakness",
        "blocks": [
          {
            "p": "The day stem side is **印星 and 比劫** — the energy that gives birth to me and the energy that is like me. Since two out of five, if the energy is completely balanced, it becomes {evenAllyRatio}. A range is set above and below that value."
          },
          {
            "table": {
              "caption": "The proportion of allies (印星 + 比劫) in the total power",
              "head": [
                "Proportion",
                "Judgment"
              ],
              "rows": [
                [
                  "{strongThreshold} or more",
                  "Strong day master"
                ],
                [
                  "{weakThreshold} or more and less than {strongThreshold}",
                  "Balanced"
                ],
                [
                  "Less than {weakThreshold}",
                  "Weak day master"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Balance is a 'less certain judgment'",
        "blocks": [
          {
            "p": "Balance means it cannot be covered by the supporting element. At this time, we simply see the two thinnest energies as necessary. On the result screen, it is noted as 'currently in a thin position' rather than a definitive statement."
          }
        ]
      },
      {
        "title": "Power is not the number of characters",
        "blocks": [
          {
            "p": "When counting the power of the five elements, we do not simply count the eight characters as they appear. We use a value that reflects the hidden heavenly stems (地藏干) within the earthly branches and the season of the energy of the month (月令) in which one was born."
          },
          {
            "p": "If we only count the surface characters, we miss the fact that even two characters of 木 can have completely different strengths depending on the season. The 木 of spring and the 木 of autumn, although they are the same character, have different powers."
          }
        ]
      },
      {
        "title": "Scoring the degree of filling",
        "blocks": [
          {
            "p": "We look at the proportion of my supporting element in the opponent's power. However, we do not use that proportion directly but **divide the expectation by the size of the supporting element.** When strong, the supporting element is three (expectation 60%), and when weak, it is two (expectation 40%), so using the proportion directly would mean that a strong person always receives a higher score."
          },
          {
            "p": "If filled to the expected level, a score near 78 points is obtained, and if filled much more, it reaches 100 points, while if it is significantly lacking, it goes towards 55 points. Here, too, the bottom is not set at 0."
          }
        ]
      },
      {
        "title": "This is a preliminary judgment",
        "blocks": [
          {
            "p": "Actual saju analysis considers the formation and seasonal climate (the warmth and humidity of the season) to determine the supporting element, and conclusions can vary depending on the method used. Inyeon-Link only uses the supporting elements that can be measured by **power values.** This is due to the principle of only using what can be translated into rules, so the same input will always yield the same answer."
          },
          {
            "p": "Instead, the result screen also presents each person's strength and weakness along with the currently needed energy as **reading material**. This is to avoid hiding the basis of the score."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Our standards",
    "title": "Inyeon’s Match — The reason for not providing a total score",
    "summary": "We only take one person's data while leaving the opponent's position empty and substitute all possible values into that position. We explain the reason for not attaching a total score to the type obtained in this way.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Calculations are done while leaving the opponent's position empty",
        "blocks": [
          {
            "p": "Compatibility scores are calculated by matching two people. **Inyeon’s Match** only takes one person's data while leaving the opponent's position empty and tests all possible values that could enter that position. It is like running the compatibility engine in reverse."
          },
          {
            "p": "Thus, it is not necessary to know the opponent's birth date. We can still say, 'What kind of match profile is suitable for me?' about someone we have not yet met."
          }
        ]
      },
      {
        "title": "We do not run millions of combinations",
        "blocks": [
          {
            "p": "The compatibility score in saju consists of four items, and **each item does not overlap in what it examines.**"
          },
          {
            "table": {
              "head": [
                "Item",
                "What is the axis of examination",
                "Number of cases"
              ],
              "rows": [
                [
                  "Day stem relationship · Spousal nature",
                  "The day stems of both people — heavenly stems",
                  "10"
                ],
                [
                  "Five elements complement",
                  "My supporting element and the opponent's five element power",
                  "5"
                ],
                [
                  "day branch relationship",
                  "the day branches of the two people",
                  "12"
                ],
                [
                  "zodiac relationship",
                  "the year branches of the two people",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Since values do not exchange between items, **finding the highest point for each branch will be the overall highest point**. There is no need to check all combinations of birth dates — just setting the ten heavenly stems, twelve earthly branches, and five elements is sufficient."
          }
        ]
      },
      {
        "kind": "note",
        "title": "The same rules apply",
        "blocks": [
          {
            "p": "The scores written here are directly pulled from the compatibility engine. Since no new rules have been created, the type that comes out on top here will also have the highest score for that item in actual compatibility. If the compatibility rules are changed, this screen will follow suit."
          }
        ]
      },
      {
        "title": "No total score is provided",
        "blocks": [
          {
            "p": "This is the most important decision on this screen. Collecting the top scores for each branch may seem to yield a 'perfect match', but that person may **not actually exist.**"
          },
          {
            "p": "In real people, the day master and the five elements do not operate separately. A person with 甲木 usually has a strong 木 energy as well. This method of counting branches separately ignores that correlation, so the value obtained by connecting the top scores for each branch becomes a combination that does not exist in reality."
          },
          {
            "p": "Therefore, the screen only displays **item scores** and does not provide a total score. The total score will be calculated by receiving the other person's birth date for [saju compatibility](/compatibility)."
          }
        ]
      },
      {
        "title": "How to read 'matching types'",
        "blocks": [
          {
            "p": "The result means 'if you meet a person of this type, this item will score highly'. It is not a criterion for choosing a person, but rather a way to read it from one perspective of understanding myself."
          },
          {
            "p": "The reasons why certain types scored highly are also noted item by item — whether the day master is in a favorable position, or whether that person possesses the energy I currently need."
          }
        ]
      },
      {
        "title": "Confirmation tool",
        "blocks": [
          {
            "p": "You may be curious if the person you have in mind corresponds to that type. By entering their birth date into the confirmation tool on the results screen, you will be informed of their day master, day branch, and year branch. The input values are not saved at this time [(not saved)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Paid Products",
    "title": "What is included in the paid report?",
    "summary": "This explains what has been added to the PDF while keeping the screen unchanged, item by item. Values and contents are read from the actual product settings.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "The screen remains unchanged, only added to the PDF",
        "blocks": [
          {
            "p": "Compatibility calculations and result inquiries are **free**. Matching rates, item scores and weights, the saju original charts of both individuals, and the shape of the relationship can all be viewed on the screen. Nothing has been removed from the screen while creating the paid report."
          },
          {
            "p": "The purpose of the report is to **add layers that are not on the screen**. And that layer is not fabricated; it consists of values that were already calculated during the scoring process but were not used on the screen."
          }
        ]
      },
      {
        "title": "Saju Compatibility Report PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Domestic payment {priceGunghapDomestic} (including VAT), international payment {priceGunghapGlobal}. A4 {pagesGunghap} pages."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Pages 1-3 are organized to keep what is on the screen** and **from page 4 onwards is content not on the screen**. Below, it explains why certain things were not displayed on the screen."
          }
        ]
      },
      {
        "title": "Page 4 — The direction of the two energies",
        "blocks": [
          {
            "p": "The items of the five elements on the screen are presented as a single score. However, that single score is the **average of the two directions** — measuring how much the other fills me and how much I fill the other, and averaging those values."
          },
          {
            "p": "Complementarity is inherently **asymmetric**. This is because the energies needed by me and the energies needed by the other are different. If you only look at the average, a relationship where one side fills the other significantly and a relationship where both fill each other evenly will appear as the same number. The report separates those two."
          },
          {
            "p": "Also included in the same section is the **relationship chart of the four pillars**. The only one that goes into the matching rate is the day branch (日支) — because it is the spouse position — but the other year, month, and hour branches can also be read with the same relationship chart."
          }
        ]
      },
      {
        "kind": "note",
        "title": "The scores in this table do not go into the matching rate",
        "blocks": [
          {
            "p": "If included, the total score would change and would not match the already sent result link. Therefore, it is included only as reading material, and that fact is noted below the table."
          }
        ]
      },
      {
        "title": "Page 5 — A closer look at each person's saju",
        "blocks": [
          {
            "p": "The bars of the five elements on the screen show **how much is present**. The report adds **whether the month of birth supports that energy**. Even with the same amount, the energy that is strong (旺) and the energy that is dead (死) have different strengths."
          },
          {
            "p": "You can see the forces before and after multiplying by the month’s energy side by side, showing how much the season has pushed it up. The **ally ratio** that distinguishes between strong day master and weak day master is also noted — the screen only shows the judgment, but the report shows where that judgment was made."
          }
        ]
      },
      {
        "title": "Page 6 — What the other person's four pillars mean to me",
        "blocks": [
          {
            "p": "The matching rate only compares the **day stems** of both individuals. However, the other person's remaining three pillars are also determined by the Ten Gods using the same rules. While you can understand **what this person means to me** by looking at the day stem alone, you cannot know **what position of that person means to me**."
          },
          {
            "p": "Since there are directions, both sides are presented separately. What I see and what the other sees are different."
          }
        ]
      },
      {
        "title": "Page 7 — How this saju was calculated",
        "blocks": [
          {
            "p": "It states how much the birth time was adjusted to true solar time, whether the correction caused the date to change, and what the solar and lunar dates were when the saju was generated. The concept is explained in the document [Adjusting the birth time to true solar time](/guide/true-solar-time), but **the value of how many minutes were adjusted in your case** varies from person to person, so it is only included in the report."
          }
        ]
      },
      {
        "title": "Inyeon match-profile report PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Domestic payment {priceAffinityDomestic} (including VAT), international payment {priceAffinityGlobal}. A4 {pagesAffinity} pages."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "This section is the **overall ranking table**. The screen only shows the sets that match well, but the report ranks all ten heavenly stems and the twelve earthly branches **completely**. If you only look at the top sets, you won't know 'who comes next' and 'which is the least compatible'."
          }
        ]
      },
      {
        "title": "Things to know before purchasing",
        "blocks": [
          {
            "p": "**The server does not store files.** Once payment is approved, the document is generated and sent immediately, leaving nothing on the server. This service's principle of not saving input values is maintained even in the paid flow."
          },
          {
            "p": "So, **please save the file immediately after payment.** You can receive the same order up to five times, but if you leave the results screen and the input values disappear, you cannot recreate it."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Reports are also reference materials",
        "blocks": [
          {
            "p": "Just because the length has increased does not mean the conclusion is more certain. What the report contains more of is **the basis of the same calculation**, not a stronger assertion. Destiny reading is a field where conclusions can vary depending on the practitioner, and this service only calculates what can be translated into rules."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notice",
    "title": "Announcements",
    "summary": "This is a place to inform changes that affect usage.",
    "backLabel": "Back to Home",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contact",
    "title": "Inquiries",
    "summary": "This is the channel for inquiries about usage, refunds, personal information requests, and error reports, along with business information.",
    "backLabel": "Back to Home",
    "sections": [
      {
        "title": "Contact by Email",
        "blocks": [
          {
            "p": "Please send inquiries to **{email}**. We will respond within 2 business days. For payment and refund inquiries, please include **the order number or the email used for payment** for quicker confirmation."
          },
          {
            "p": "Phone inquiries can be made at {customerCenter}."
          }
        ]
      },
      {
        "title": "What can be sent to this channel?",
        "blocks": [
          {
            "ul": [
              "**Payment and Refund** — If the document was not created or the payment amount differs from the order, a full refund will be provided. Conditions are in the [refund policy](/refund-policy).",
              "**Personal Information** — We accept requests for viewing, correction, and deletion. The processing policy is in the [privacy policy](/privacy).",
              "**Calculation Error Report** — If the saju original chart or score seems strange, please let us know. If you include when you entered the date and time, we can recalculate with the same values."
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
            "p": "You do not need to include your birth date and time in the inquiry email. We do not save inputs, so we cannot retrieve them, and the order number is sufficient for confirmation. Please only include it if it is necessary for a calculation error report."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Relationship chart",
    "title": "How Zodiac Animals and Day Branches Meet — The Twelve-Branch Chart",
    "summary": "The relationship chart used when two people's zodiac animals and day branches are set side by side. It lays out which animals form a harmony, a clash or a discord with which, for each of the twelve, and discloses the score of every relationship.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Zodiac animals and day branches use the same chart",
        "blocks": [
          {
            "p": "Inyeon-Link sets two people's earthly branches side by side in two places: the **zodiac compatibility**, which looks at the branch of the birth year, and the **day branch compatibility** (the spouse palace), which looks at the branch of the birth day. Both are judged with the chart below; the only difference is how much weight each carries in the final score."
          },
          {
            "figure": "branch-wheel",
            "caption": "Arranging the twelve characters in a circle makes the relationships clear at a glance. A clash always sits directly opposite, while a six-harmony pair and a quiet discord are nearer neighbours. These lines are not written by hand; they are drawn directly from the calculation rules.",
            "labels": {
              "alt": "A diagram showing the twelve earthly branches arranged in a circle, with lines connecting six-harmony, clash and discord pairs.",
              "yukhap": "Six-Harmony",
              "chung": "Clash",
              "wonjin": "Discord",
              "rat": "Rat",
              "ox": "Ox",
              "tiger": "Tiger",
              "rabbit": "Rabbit",
              "dragon": "Dragon",
              "snake": "Snake",
              "horse": "Horse",
              "goat": "Sheep",
              "monkey": "Monkey",
              "rooster": "Rooster",
              "dog": "Dog",
              "pig": "Pig"
            }
          }
        ]
      },
      {
        "title": "Relationships for each of the twelve zodiac animals",
        "blocks": [
          {
            "p": "For each animal, the chart lists which animals it forms each relationship with. Only the pairs this service recognises as harmonies are listed, so an animal that does not appear in a row has no particular relationship with it — it is **neutral**."
          },
          {
            "table": {
              "caption": "Four kinds of relationship seen from one animal",
              "head": [
                "Your animal",
                "Attracted pair (Six-Harmony)",
                "Half triad",
                "Quietly at odds (Discord)",
                "Head-on collision (Clash)"
              ],
              "rows": [
                [
                  "Rat (子)",
                  "Ox",
                  "Monkey · Dragon",
                  "Sheep",
                  "Horse"
                ],
                [
                  "Ox (丑)",
                  "Rat",
                  "Rooster",
                  "Horse",
                  "Sheep"
                ],
                [
                  "Tiger (寅)",
                  "Pig",
                  "Horse",
                  "Rooster",
                  "Monkey"
                ],
                [
                  "Rabbit (卯)",
                  "Dog",
                  "Pig · Sheep",
                  "Monkey",
                  "Rooster"
                ],
                [
                  "Dragon (辰)",
                  "Rooster",
                  "Rat",
                  "Pig",
                  "Dog"
                ],
                [
                  "Snake (巳)",
                  "Monkey",
                  "Rooster",
                  "Dog",
                  "Pig"
                ],
                [
                  "Horse (午)",
                  "Sheep",
                  "Tiger · Dog",
                  "Ox",
                  "Rat"
                ],
                [
                  "Sheep (未)",
                  "Horse",
                  "Rabbit",
                  "Rat",
                  "Ox"
                ],
                [
                  "Monkey (申)",
                  "Snake",
                  "Rat",
                  "Rabbit",
                  "Tiger"
                ],
                [
                  "Rooster (酉)",
                  "Dragon",
                  "Snake · Ox",
                  "Tiger",
                  "Rabbit"
                ],
                [
                  "Dog (戌)",
                  "Rabbit",
                  "Horse",
                  "Snake",
                  "Dragon"
                ],
                [
                  "Pig (亥)",
                  "Tiger",
                  "Rabbit",
                  "Dragon",
                  "Snake"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "When two people meet in the chart",
        "blocks": [
          {
            "p": "Reading the chart means finding the two animals on one row. Here are a few pairs as examples."
          },
          {
            "ul": [
              "**Rat and Ox** — a six-harmony. It needs only two characters, so it is the harmony that appears most often in compatibility, and a good one.",
              "**Rat and Dragon** — a half triad: two of the three characters 申子辰, including the middle one (子).",
              "**Rat and Tiger** — not in the chart, so neutral: neither a harmony nor a clash, just the baseline.",
              "**Rat and Sheep** — a discord. It looks calm on the surface, but the misalignment is believed to last.",
              "**Tiger and Monkey** — a clash. They sit directly opposite each other and are seen as colliding head-on."
            ]
          }
        ]
      },
      {
        "title": "How many points each relationship gets",
        "blocks": [
          {
            "table": {
              "caption": "Highest first. These are the values Inyeon-Link actually uses.",
              "head": [
                "Relationship",
                "Score"
              ],
              "rows": [
                [
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Same branch",
                  "{scoreSame}"
                ],
                [
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Clash",
                  "{scoreChung}"
                ]
              ]
            }
          },
          {
            "p": "The same branch (two people of the same animal) means resemblance, not attraction, so it sits just above neutral. Whether it is zodiac or day branch compatibility, the value in this table goes straight into the final score."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Why full triads are not in the chart",
        "blocks": [
          {
            "p": "A full triad (申子辰, 巳酉丑, 寅午戌, 亥卯未) needs all three characters. Setting two people side by side gives only two, so a full triad cannot occur in compatibility and only half triads appear. The full-triad score of {scoreSamhap} is kept for the case where three characters come together within one person's own chart."
          }
        ]
      },
      {
        "title": "申辰, 巳丑, 寅戌 and 亥未 are not counted as harmonies",
        "blocks": [
          {
            "p": "Some methods count any two characters of the same triad group as a half triad. Inyeon-Link does not: as the half-triad column above shows, it accepts only pairs that include the **royal branch** at the centre of the group (子, 午, 卯, 酉). A pair without it has no centre for the formation to gather around, so it is treated as neutral."
          }
        ]
      },
      {
        "title": "Discord and clash do not sit on the floor",
        "blocks": [
          {
            "p": "If only harmonies and clashes were counted, all six discord pairs would be buried in neutral. So discord has a place of its own: higher than the head-on clash and lower than neutral, at {scoreWonjin} points."
          },
          {
            "p": "Even a clash keeps {scoreChung} points. In traditional myeongri a clash is a collision, not the end of a relationship. A value near zero would make the service pronounce a verdict on two people, so the range is kept wide enough to show the difference without pronouncing one."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Time",
    "title": "Each Person's Birth Time Is Corrected Separately",
    "summary": "Compatibility works out the two people's times separately. This explains how the correction applies when their birthplaces and eras differ, and what changes when only one of them does not know their time.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The clock and the sun disagree",
        "blocks": [
          {
            "p": "In saju, the time of birth is read from the position of the sun, not from the clock. But a whole country keeps one standard time, so the clock and the sun of any given place drift apart."
          },
          {
            "p": "Korea's standard time is based on 135°E, while Seoul sits at about 127°E. Seoul's sun reaches its highest point later than the clock says, by about **32 minutes**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutes can move the hour pillar by one step",
        "blocks": [
          {
            "p": "Someone born in Seoul at 11:40 by the clock was born at 11:08 in true solar time, which is still inside the Horse hour (午, 11:00–13:00). Born at 11:20 by the clock, they were born at 10:48, which falls in the Snake hour (巳, 9:00–11:00). The correction exists for people who stand on exactly this kind of boundary."
          }
        ]
      },
      {
        "title": "The correction is applied to each person separately",
        "blocks": [
          {
            "p": "Compatibility builds each person's chart on its own. That is why the input screen asks for the birthplace **for each person**. If one person was born in Seoul and the other abroad, their times are corrected separately, with different longitudes and time zones."
          },
          {
            "p": "The city list currently holds {cityCount} places. For countries whose longitude varies widely, cities are split, because **15° of longitude moves the hour pillar by one step**."
          },
          {
            "p": "If you do not choose, Seoul is used. If only one person was born abroad and both are left on Seoul, only the hour pillar of the person born abroad is off; the other person's values are not affected, because the correction is applied person by person."
          }
        ]
      },
      {
        "title": "Different eras used different standard times",
        "blocks": [
          {
            "p": "Two people of different ages lived under the standard time of different periods. That is why a longitude difference alone is not enough."
          },
          {
            "ul": [
              "**Before 1912** — Korea had no unified standard time (local mean time).",
              "**1954–1961** — standard time was UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — daylight saving time was in effect."
            ]
          },
          {
            "p": "Inyeon-Link does not hard-code a standard meridian. It looks up the **IANA time zone** of the birthplace to find the standard time actually in use at that moment, so each person's own era is applied even when their birth years differ."
          }
        ]
      },
      {
        "title": "Just after midnight, the day stem changes",
        "blocks": [
          {
            "p": "The correction is −32 minutes, so someone born between 00:00 and 00:32 by the clock was born in the **23:00 hour of the previous day** in true solar time. The date is rolled back with it."
          },
          {
            "p": "In compatibility this matters a great deal. When the day pillar moves back a day, both the day stem and the day branch change, so the day-stem relationship, the Spouse Star and the day-branch relationship are all recalculated with different characters, and the five-element strengths move with them."
          }
        ]
      },
      {
        "title": "It is fine if only one person does not know their time",
        "blocks": [
          {
            "p": "Birth time is optional, and compatibility is still calculated if just one of the two does not know theirs. Only the person who does not know it is calculated without an hour pillar, and the result screen says so. The other person's values stay as they are."
          },
          {
            "p": "None of the four compatibility items uses the hour pillar directly, but it does affect the five-element strengths, so it is more accurate to enter it if you know it. Zodiac compatibility gives the same value with or without a time — [it looks only at the year branch](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Privacy",
    "title": "How We Avoid Storing Two People's Details",
    "summary": "Compatibility asks you to enter someone else's date of birth as well. This explains, technically, what it means that neither person's input is recorded anywhere, and what travels with a result link.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "You are entering someone else's information",
        "blocks": [
          {
            "p": "The compatibility screen takes your date of birth and the other person's together. The other person's date of birth is their personal information, so we spell out separately how Inyeon-Link handles both."
          },
          {
            "p": "There is no account, and we ask for no name, email address or phone number. We receive only the two dates of birth and, optionally, birth time, birthplace and gender, and none of it remains once the calculation is finished."
          },
          {
            "p": "There is a field for a display name to show on the result screen, but it is only for display and is not used in the calculation. You do not need to enter a real name."
          }
        ]
      },
      {
        "title": "A result link contains both dates of birth",
        "blocks": [
          {
            "p": "When the calculation is done, the address looks like this."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "The part after the **#** holds the two people's input. It is called the fragment, and by standard web behaviour **the browser does not send it to the server**. It was designed to point to a position inside a document, so the server never sees it."
          },
          {
            "p": "When you open a result link, the browser reads that value and asks for a calculation; the server receives the values it needs, returns the answer and forgets them."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Before you send the link to the other person",
        "blocks": [
          {
            "p": "Not being stored on a server is not the same as a link being secret. Whoever receives the link can see both dates of birth as they are, and a link left in a chat room stays in that chat room regardless of our server. Please send it remembering that it contains the other person's details."
          }
        ]
      },
      {
        "title": "Why nothing remains although the calculation runs on a server",
        "blocks": [
          {
            "p": "To set up a saju chart we need an almanac table, which is too large to send to the browser, so the calculation runs on the server. But **once the request has been handled, the values are used nowhere else.** There is no code that writes them to a database."
          },
          {
            "p": "The only record that remains is a counter that stops one person from sending too many requests in a short time. It holds no date of birth and does not keep the IP address as it is; it counts a single value, hashed together with the date, and that value changes when the day changes."
          }
        ]
      },
      {
        "title": "What we give up by not storing",
        "blocks": [
          {
            "p": "Because nothing is stored, there are some things we have given up."
          },
          {
            "ul": [
              "**You cannot retrieve a past compatibility result.** You need to keep the link to see it again.",
              "**The same two people are recalculated every time.** There is no cache. But every rule is deterministic, so [the same input always gives the same value](/guide/how-compatibility).",
              "**Refreshing brings back the ad gate.** There is nowhere to keep a record of having watched it."
            ]
          }
        ]
      },
      {
        "title": "If you buy a report",
        "blocks": [
          {
            "p": "If you buy a report, a transaction record is kept at that point: payment records have a legally required retention period, and without an order history a refund cannot be processed. Even then, **the two dates of birth are not attached to the order**; they are asked for again when the PDF is created after payment confirmation, and used only at that moment."
          },
          {
            "p": "Details are in the [privacy policy](/privacy)."
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
        "Questions, refunds, privacy requests and reports of calculation errors now have one place to go — see the contact page in the footer.",
        "If something looks miscalculated, please include the birth details that produced it. We do not store what you enter, so without them we cannot reproduce the reading."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Reports are issued in English for Arabic and Khmer",
      "body": [
        "If you are reading in Arabic or Khmer, the PDF report you buy is produced in English. The tool that lays out our documents cannot yet set paragraphs in those scripts.",
        "The screen stays in your language, and your name is printed in your own script inside the report.",
        "The same note appears before payment. When the tool supports these scripts, we will say so here."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Every reading carries the version of the rules used",
      "body": [
        "Each reading and report carries the rule set used to produce it (for example inyeonlink-match-v10). The same input on the same rule set always gives the same numbers.",
        "If we change the interpretation rules in a way that can move a score, we post that here first, with the date it takes effect — because a result link you already hold would then read differently.",
        "The current rule set is v10. Payments are not open yet."
      ]
    }
  }
} satisfies NoticeCopy;
