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
  "guide/branches": {
    "eyebrow": "Relationship Table",
    "title": "Twelve Earthly Branches — Combination, Clash, Discord",
    "summary": "This is a relationship table used for both day branch compatibility and zodiac compatibility. It fully discloses what each combination, clash, and discord means and their respective scores.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "The earthly branches consist of twelve characters",
        "blocks": [
          {
            "p": "The twelve earthly branches (十二支) are 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. The commonly known zodiac signs are associated with each of these twelve characters."
          },
          {
            "figure": "branch-wheel",
            "caption": "Arranging the twelve characters in a circle provides a clear view of the relationships. A clash always sits directly opposite, while a six-harmony pair and a quiet discord are nearer neighbours. These lines are derived directly from the calculation rules, not written in the text.",
            "labels": {
              "alt": "A diagram showing the twelve earthly branches arranged in a circle with lines connecting six-harmony, clash, and discord.",
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
              "goat": "Goat",
              "monkey": "Monkey",
              "rooster": "Rooster",
              "dog": "Dog",
              "pig": "Pig"
            }
          },
          {
            "p": "In saju, each of the four pillars has one earthly branch. Inyeon-Link uses the **day branch** (the spouse palace) and the **year branch** (the zodiac animal) among them. Both positions are assessed using the relationship table below."
          }
        ]
      },
      {
        "title": "Entire Relationship Table",
        "blocks": [
          {
            "table": {
              "caption": "Ordered by highest score. These are the values actually used by Inyeon-Link.",
              "head": [
                "Relationship",
                "Corresponding Pair",
                "Meaning",
                "Score"
              ],
              "rows": [
                [
                  "Combination (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "When all three characters gather, they form a complete elemental formation — a **guk** (局). This is considered the strongest combination.",
                  "{scoreSamhap}"
                ],
                [
                  "Six-Harmony (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pairs that attract each other. This is the most common combination in compatibility as it consists of only two characters.",
                  "{scoreYukhap}"
                ],
                [
                  "Half triad (半合)",
                  "Two characters that include a royal branch (王地) from the triad (子·酉·午·卯)",
                  "A half combination that includes the character at the center of the formation. It cannot form a complete combination with just two characters, making it lower than a full triad.",
                  "{scoreBanhap}"
                ],
                [
                  "Same earthly branch",
                  "子子 · 丑丑 …",
                  "Characters that are the same. This means they resemble each other, but it does not imply attraction, so it is placed in the middle.",
                  "{scoreSame}"
                ],
                [
                  "Neutral",
                  "Pairs that do not belong anywhere above or below",
                  "A combination with no special relationship. This is the reference point.",
                  "{scoreNeutral}"
                ],
                [
                  "Quiet discord (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pairs that cannot separate despite harboring resentment. They appear quiet on the surface but are considered to last long.",
                  "{scoreWonjin}"
                ],
                [
                  "Clash (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pairs that clash head-on. These are six pairs facing each other.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Full triads do not appear in this service",
        "blocks": [
          {
            "p": "A full triad requires three characters to form. However, compatibility is structured by matching the earthly branches of two people **one by one**, resulting in only two characters. Therefore, what appears here is always a half triad, and the full triad {scoreSamhap} points are reserved for when examining the formations within each saju."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Half triads must include a royal branch",
        "blocks": [
          {
            "p": "There is also a method that counts as a half triad if both characters belong to the same triad group. This can lead to high scores even for combinations that are difficult to call a triad, such as 申辰. Therefore, this service recognizes a half triad only for pairs that include a royal branch (王地) (子·酉·午·卯), and combinations like 申辰·巳丑·寅戌·亥未 without a royal branch are not counted as triads."
          }
        ]
      },
      {
        "title": "The reason for separating quiet discord",
        "blocks": [
          {
            "p": "The six pairs of quiet discord are seen as frequently in compatibility as clashes. If we count combinations as pairs and clashes, these six pairs would all be buried under neutral {scoreNeutral} points, so they are placed separately."
          },
          {
            "p": "While clashes are overt and striking, quiet discord is subtly misaligned. Therefore, it is placed at a score of {scoreWonjin}, which is higher than clashes ({scoreChung}) but definitely lower than neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Scores are also assigned to clashes",
        "blocks": [
          {
            "p": "The lowest clash score is {scoreChung}. The intention is not to assign a value close to 0. In the tradition a clash is not an 'end' but a 'collision', and assigning a low score would imply the service is making a definitive statement about the relationship."
          },
          {
            "p": "With a minimum of {scoreChung} and a maximum of {scoreSamhap}, the range is clear, but it does not make a definitive conclusion."
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
  "guide/true-solar-time": {
    "eyebrow": "Time",
    "title": "Convert birth time to true solar time",
    "summary": "Standard time and the actual position of the sun differ. The time must be corrected based on the longitude of the birthplace to address why the time pillar is accurate.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "The time on the clock and the time of the sun are different",
        "blocks": [
          {
            "p": "The time pillar (時柱) of the saju is determined by the position of the sun. However, the clock we see uses a single standard time for the entire country, which causes a discrepancy with the actual position of the sun."
          },
          {
            "p": "Korea's standard time is based on 135° east longitude. Since Seoul's longitude is about 127°, it is approximately 8° west, causing the sun to reach its zenith later — when it is noon by the clock, the sun in Seoul has not yet reached its zenith. This difference is about **32 minutes**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutes changes the time pillar by one slot",
        "blocks": [
          {
            "p": "The time in saju is divided into two-hour units. Those born near the boundary will have their time pillar completely changed by a 32-minute difference — this correction is necessary due to those who fall exactly on this boundary."
          }
        ]
      },
      {
        "title": "Why we ask for the birthplace",
        "blocks": [
          {
            "p": "If the longitude is different, the correction amount will also differ. Applying the Seoul-based correction to someone born overseas will result in a significant discrepancy in the time pillar. Therefore, the input screen requires you to select your birthplace, and the calculation is based on the longitude and standard time of that city. Currently, there are {cityCount} places in the list."
          },
          {
            "p": "In places where the longitude varies greatly even within the same country (such as the USA, Russia, Indonesia, etc.), the cities have been divided. **15° of longitude equals one time pillar slot**."
          },
          {
            "p": "If you do not select, the calculation will be based on Seoul. Since most births are domestic, this reduces the chance of error, but if you were born overseas, please be sure to select."
          }
        ]
      },
      {
        "title": "Standard time has changed several times in the past",
        "blocks": [
          {
            "p": "There is a reason why the correction cannot be calculated simply as 'longitude difference ÷ 15° × 60 minutes'. The standard time itself has varied over different eras."
          },
          {
            "table": {
              "caption": "Changes in Korea's standard time — those born in this period will have discrepancies with simple calculations",
              "head": [
                "Period",
                "What was different"
              ],
              "rows": [
                [
                  "Before 1912",
                  "There was no standard time (local mean time)"
                ],
                [
                  "1954 – 1961",
                  "The standard time was UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Daylight saving time was implemented"
                ]
              ]
            }
          },
          {
            "p": "Inyeon-Link does not use a fixed value for the standard meridian, but calculates the standard time that was actually used at that time based on the **IANA time zone** information of the birthplace. Daylight saving time and past standard times are automatically reflected."
          }
        ]
      },
      {
        "title": "Births just after midnight also consider the date",
        "blocks": [
          {
            "p": "Since the correction is -32 minutes, those born between 00:00 and 00:32 by the clock will be **23:00 of the previous day** in true solar time. If only the time is reverted and the date is left unchanged, it will write the day pillar as '23:00 of the previous day'."
          },
          {
            "p": "Inyeon-Link will also revert the date in this case. The day pillar indicates the person themselves in saju, so if this is incorrect, almost all compatibility items will be incorrect."
          }
        ]
      },
      {
        "title": "You do not need to know the time",
        "blocks": [
          {
            "p": "The birth time is optional. If you do not know it, the calculation will be done without the time pillar, and this fact will be displayed on the results screen. There are no items in compatibility that require the time pillar to be written directly, but it does influence the five elements, so if you know it, it is more accurate to include it."
          },
          {
            "p": "Zodiac compatibility is always the same value regardless of the time — [because it only looks at the year branch](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Personal Information",
    "title": "Method of not storing entered information",
    "summary": "This explains what it technically means that your birth date is not recorded anywhere and what is included in the result link.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "No membership required",
        "blocks": [
          {
            "p": "Inyeon-Link does not create accounts. It does not collect names, emails, or phone numbers. The only information collected is the birth date and (optionally) the time of birth, place of birth, and gender, and even that does not remain after the calculation is complete."
          },
          {
            "p": "There is a field to enter a title to display on the results screen, but that is **only for display purposes** and is not used in the calculation. You do not need to enter your real name."
          }
        ]
      },
      {
        "title": "What is included in the result link?",
        "blocks": [
          {
            "p": "Once the calculation is complete, the address looks like this."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "What follows **#** is the input values. This part is called a **fragment**, which is a **section that the browser does not send to the server**. This is standard web behavior and not a rule we created — it was originally designed to indicate a location within a document, so the server has no need to see it."
          },
          {
            "p": "In other words, when you open the result link, the browser reads that value to request the calculation, and our server receives the values needed for the calculation, returns the answer, and then forgets it."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Please be careful when sending links to others",
        "blocks": [
          {
            "p": "The fact that it is not stored on the server and that the link is safe are not the same. The result link contains both of your birth dates, so the person receiving that link can see the same result."
          }
        ]
      },
      {
        "title": "Why is the calculation done on the server but not stored?",
        "blocks": [
          {
            "p": "The calculation itself is done on the server. The Korean lunisolar almanac is needed to generate the saju, and that table is too large to be sent down to the browser. However, **after processing the request, that value is not used anywhere.** There is no code to store it in a database."
          },
          {
            "p": "A minimal record necessary for operation is kept — a counter to prevent the same person from sending too many requests in a short time. This does not include the birth date, and the access IP is not retained either. Only one value, hashed with the date, is counted, and that value changes when the day changes."
          }
        ]
      },
      {
        "title": "Things that cannot be done because information is not stored",
        "blocks": [
          {
            "p": "To be honest, there are things we have given up because we do not store information."
          },
          {
            "ul": [
              "**You cannot retrieve past results.** You need to have the link to view them again.",
              "**The same values will be recalculated.** There is no cache. However, since all rules are deterministic, [the same input will always yield the same value](/guide/how-compatibility).",
              "**Refreshing will bring back the ad gate.** This is because there is no place to keep viewing records."
            ]
          }
        ]
      },
      {
        "title": "In case of purchase",
        "blocks": [
          {
            "p": "If you purchase a report, a transaction record will be kept at that time. The law specifies a retention period for payments, and without an order history, refunds cannot be processed. However, even then, **the birth date used for compatibility calculations does not attach to the order** — it is collected again when creating the PDF after payment confirmation."
          },
          {
            "p": "Details are outlined in the [Privacy Policy](/privacy)."
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
