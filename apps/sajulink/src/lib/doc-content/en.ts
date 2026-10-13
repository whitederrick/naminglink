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
    "title": "Saju-Link Introduction",
    "summary": "This is a service that establishes a saju (four-pillars reading) based on your birth date and time and explains what the eight characters signify. It clarifies what is calculated and what is not.",
    "backLabel": "Back to Home",
    "sections": [
      {
        "title": "What do we do?",
        "blocks": [
          {
            "p": "Saju-Link establishes the **saju (four-pillars) chart based on your birth date and time and shows what the eight characters signify**. It reads the strength of the five elements and the strength of the day pillar, and also examines today's fortune based on the day's stem."
          },
          {
            "p": "What you see on the screen is **free and does not require membership.** The paid product is a PDF document containing values not shown on the screen — the basis for distinguishing between a strong day pillar and a weak day pillar, Wang Sang Hyu Su Sa, and the correction details for true solar time."
          }
        ]
      },
      {
        "title": "What do we calculate?",
        "blocks": [
          {
            "p": "Saju is established using the **manseyeok (Korean lunisolar almanac)**. The time of birth is corrected to the **true solar time** of the birthplace — because the actual position of the sun varies by region even if the clock shows the same time."
          },
          {
            "p": "Scores are given only according to established rules. Concepts from traditional myeongri (Korean fate study) such as the Ten Gods, earthly branch relationships, and balancing elements are translated into rules for calculation, and **the same input will always yield the same value**. When rules are changed, regression testing is conducted to ensure that previous results remain unchanged."
          },
          {
            "p": "**AI is not used in the sentences on the screen.** The explanations appearing on the free screen are fixed phrases attached to the calculation results. **Only the interpretations in the paid reports** utilize generative AI, and even then, the AI does not create scores — it only writes sentences based on the values provided by the engine."
          }
        ]
      },
      {
        "title": "What do we not say?",
        "blocks": [
          {
            "ul": [
              "**We do not provide fortune-telling.** We do not write that you should meet or avoid anyone. This is a reference material summarizing the perspectives of traditional myeongri.",
              "**We do not save inputs.** The birth date and time are used only at the moment of calculation and are not retained on the server. The result link is also stored in a location that the browser does not send to the server.",
              "**Scores are not regarded as human values.** Just because today's fortune is low does not mean you should give up on that day."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Detailed calculation methods are written in the [User Guide](/guide). Business information and contact details can be found in [Contact Us](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Calculation Basis",
    "title": "What is the basis for the calculations?",
    "summary": "We disclose all the rules used by Saju-Link. You can check where the numbers displayed on the screen come from, including the adjustments for today's fortune, the scores from the earthly branch relationship table, and the boundary values that distinguish between a strong day pillar and a weak day pillar.",
    "backLabel": "Back to Home",
    "sections": [
      {
        "blocks": [
          {
            "p": "Saju writes down the year, month, day and hour of your birth as two Chinese characters each, eight characters in all. The upper character of each pair is called the **heavenly stem**, the lower one the **earthly branch**, and the two characters of your birth day are called the **Day Pillar**. If these words are new to you, start with [Stems, Branches and Day Pillars — How to Read the Letters](/guide/saju-letters)."
          },
          {
            "ul": [
              "**Heavenly stems** — the ten upper characters of Saju. Each has a fixed element and polarity, and the stem of your birth day is the day stem that points to you.",
              "**Earthly branches** — the twelve lower characters of Saju, the same characters as the zodiac animals. Each branch holds hidden stems inside it.",
              "**Day pillars** — the pair made by the stem and branch of your birth day. There are 60 of them, from 甲子 to 癸亥, and each has its own entry. You will find them in the collapsed lists below."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "The values written here are all **read directly from the calculation code**. Since they are not manually transcribed into the text, if the rules are changed, the numbers in this document will also change accordingly."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Service Basis",
    "title": "natal chart — Where do the eight characters come from?",
    "summary": "It explains how the year, month, day, and time of birth become the four pillars and eight characters, and identifies which character points to you. It also discusses why it can be viewed even without knowing the exact time of birth.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "Four Pillars, Eight Characters",
        "blocks": [
          {
            "p": "Saju (四柱) literally means **four pillars**. Each of the year, month, day, and time of birth is established as one pillar, and two characters are written for each pillar. Thus, there are a total of eight characters, which is referred to as **the natal chart**."
          },
          {
            "table": {
              "head": [
                "Pillar",
                "What does it come from?",
                "Two Characters"
              ],
              "rows": [
                [
                  "Year Pillar (年柱)",
                  "Year of birth",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Month Pillar (月柱)",
                  "Month of birth",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Day Pillar (日柱)",
                  "Day of birth",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Time Pillar (時柱)",
                  "Time of birth",
                  "Heavenly Stem + Earthly Branch"
                ]
              ]
            }
          },
          {
            "p": "The upper characters are called heavenly stems (天干), and the lower characters are called earthly branches (地支). There are ten heavenly stems and twelve earthly branches. The twelve earthly branches are commonly referred to as **zodiac signs**."
          }
        ]
      },
      {
        "title": "Among them, one character points to me.",
        "blocks": [
          {
            "p": "Not all eight characters carry the same weight. The **heavenly stem of the day of birth**, specifically the upper character of the day pillar, points to **myself**. This is called the **day stem (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Saju consists of eight characters established using two characters each for the year, month, day, and time of birth, represented by the heavenly stems and earthly branches. Here, the prominent day stem (日干) is the character that points to myself.",
            "labels": {
              "year": "Year Pillar",
              "yearNote": "Root · Zodiac Sign",
              "month": "Month Pillar",
              "monthNote": "Season · Strength",
              "day": "Day Pillar",
              "dayNote": "Self · Spouse Palace",
              "hour": "Hour Pillar",
              "hourNote": "Later Years · Usage",
              "stem": "Heavenly Stem",
              "stemNote": "Day Stem = Self",
              "branch": "Earthly Branch",
              "branchNote": "Day Branch = Spouse Palace"
            }
          },
          {
            "p": "What this service shows mostly derives from this one character — the interpretation of tendencies, the strength of the five elements, the energy currently needed, and today's fortune are all measured based on the Day Stem. The remaining seven characters indicate 'what environment the Day Stem is placed in'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Why the Day of Birth?",
        "blocks": [
          {
            "p": "The Year Stem is the same for everyone born in that year, and the Month Stem is the same for everyone born in that month. The Day Stem changes when the day changes, and traditional fortune-telling has regarded this position as the Self since the Song Dynasty. If the Hour Stem is included, it differentiates even among those born on the same day."
          }
        ]
      },
      {
        "title": "Divided by Solar Terms, Not Calendar Year",
        "blocks": [
          {
            "p": "A saju year does not change on January 1st but rather at **Ipchun (around February 4th)**. The month also divides based on solar terms."
          },
          {
            "p": "Thus, those born in **January and early February receive the Year Stem of the previous year**. This is where the common misunderstanding about zodiac signs arises. The same applies if you input a lunar birthday — it is converted back to solar and then divided by solar terms."
          }
        ]
      },
      {
        "title": "You Can Read It Even Without Knowing the Birth Time",
        "blocks": [
          {
            "p": "If you do not input the time, the reading will be based on the three pillars and six characters, excluding the Hour Pillar. We do not guess missing values — arbitrarily assigning an Hour Pillar can disrupt the strength of the five elements, leading to incorrect conclusions instead of potentially accurate ones."
          },
          {
            "p": "If you know the time, it is better to include it. Since two characters are added among the eight, the strength and assessment of the five elements can change. However, we do not use the clock time directly but instead use [True Solar Time](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "The method of counting the eight characters as five elements to assess strength is continued in [Five Elements Strength and Strong/Weak Day Pillar](/guide/five-elements), while the method of reading the remaining characters based on the Day Stem is continued in [Ten Gods](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Five Elements",
    "title": "Five Elements Strength and Strong/Weak Day Pillar",
    "summary": "We count the eight characters as five elements to see which energy is strong and which is weak. We disclose the threshold values (45%·35%) that determine the strength of the Day Stem.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "Counting Eight Characters as Five Energies",
        "blocks": [
          {
            "p": "The ten Heavenly Stems and twelve Earthly Branches each belong to one of the **Five Elements (五行)** — Wood (木), Fire (火), Earth (土), Metal (金), Water (水). By counting the characters in the natal chart by their respective elements, we can determine which energy is strong and which is weak."
          },
          {
            "p": "However, we do not only count the numbers. We also consider **whether the month of birth supports that energy**. Even the same character can have different strengths depending on whether it meets its season. This is called the Month Sign (月令), and it is divided into five stages: Wang (旺), Sang (相), Hyu (休), Su (囚), and Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Where Screen and Report Differ",
        "blocks": [
          {
            "p": "The free screen only shows the **strength after reflecting the Month Sign**. The values before the Month Sign and the table of Wang, Sang, Hyu, Su, and Sa are included in the paid report — this is provided for you to directly check where the assessment diverged."
          }
        ]
      },
      {
        "title": "Strength of the Day Stem — Strong and Weak",
        "blocks": [
          {
            "p": "After counting the strengths of the five elements, we assess whether the **Day Stem is strong or weak**. The criterion is the ratio of energies aligned with the Day Stem."
          },
          {
            "p": "The energies aligned with the Day Stem are **Resource and Companion** — the energies that give birth to me and those that are similar to me. Since there are two out of five, if there is no bias, it will be around {evenAllyRatio}. We treat the area around that figure as balanced, and read above and below it as strong or weak."
          },
          {
            "table": {
              "head": [
                "Ratio of Day Stem Aligned Energies",
                "Assessment",
                "What Does It Mean?"
              ],
              "rows": [
                [
                  "{strongThreshold} or higher",
                  "Strong Day Pillar (身强)",
                  "The energies supporting the Day Stem are abundant."
                ],
                [
                  "{weakThreshold} or higher and less than {strongThreshold}",
                  "Balanced (中和)",
                  "It is difficult to conclude in either direction."
                ],
                [
                  "Less than {weakThreshold}",
                  "Weak Day Pillar (身弱)",
                  "The energies supporting the Day Stem are weak."
                ]
              ]
            }
          },
          {
            "p": "The numbers in this table are not transcribed from the text but are **read directly from the engine**. If the rules change, this document will change as well."
          }
        ]
      },
      {
        "title": "Strength is Not Good or Bad",
        "blocks": [
          {
            "p": "Being strong does not mean good, and being weak does not mean bad. If strong, there is the power to push forward, but it is easy to lean to one side; if weak, it is easier to borrow the strength of others, but one may tire easily when enduring alone. **The needed energies differ in either case.**"
          },
          {
            "p": "Determining that 'needed energy' is the balancing element, and it continues in [Balancing Element](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "How the eight characters are established is in [natal chart](/guide/natal-chart). How today's Day Pillar interacts with this strength is covered in [today's fortune](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Balancing Element",
    "title": "Balancing Element — The Energy Needed Now",
    "summary": "If the Day Stem is strong, we consider the energy to reduce; if weak, we consider the energy to support as necessary. This explains how to choose that energy and how to handle it when balanced.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "The Five Elements Alone Are Not Enough",
        "blocks": [
          {
            "p": "There are ways to measure whether the five elements are evenly distributed. However, what is truly needed is **what is lacking and what is excessive in this saju**."
          },
          {
            "p": "A saju that is evenly distributed is not always comfortable, nor is a saju that is skewed always difficult. The direction of the skew and whether there is an element to alleviate it is the crossroads."
          }
        ]
      },
      {
        "title": "Balancing Element — Reduce If Excessive, Add If Lacking",
        "blocks": [
          {
            "p": "The balancing element (用神) is **the energy currently needed by this person**. There are several methods to determine it (suppress-and-support, seasonal balance, affliction, mediation), and the one that can be expressed as rules — and is most widely used — is **suppress-and-support (抑扶)**. If the day pillar is strong, it is believed that an energy to reduce is needed; if weak, an energy to add is required."
          },
          {
            "table": {
              "head": [
                "Judgment",
                "What is Needed",
                "Number of Types"
              ],
              "rows": [
                [
                  "Strong Day Pillar (身强)",
                  "Energy to drain — Output, Wealth and Officer",
                  "Three"
                ],
                [
                  "Weak Day Pillar (身弱)",
                  "Energy to Add — Resource, Companion",
                  "Two"
                ],
                [
                  "Balanced (中和)",
                  "Cannot be decided by suppress-and-support, so the thinnest energies",
                  "Two"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Threshold for Strength and Weakness",
        "blocks": [
          {
            "p": "The day pillar side is **Resource and Companion** — the energy that gives birth to me and the energy that is like me. Since two out of five are involved, the complete balance will be {evenAllyRatio}. The width is set above and below this {evenAllyRatio}."
          },
          {
            "table": {
              "caption": "The Ratio of Allies (Resource + Companion) in the Overall Force",
              "head": [
                "Ratio",
                "Judgment"
              ],
              "rows": [
                [
                  "{strongThreshold} or more",
                  "Strong Day Pillar"
                ],
                [
                  "{weakThreshold} or more and less than {strongThreshold}",
                  "Balanced"
                ],
                [
                  "Less than {weakThreshold}",
                  "Weak Day Pillar"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Balanced Is a 'Less Certain Judgment'",
        "blocks": [
          {
            "p": "Balanced means suppress-and-support cannot decide it. At this time, the two thinnest energies are simply regarded as necessary. In the result screen, it is noted as 'currently thin position' rather than a definitive statement."
          }
        ]
      },
      {
        "title": "Strength Is Not the Number of Characters",
        "blocks": [
          {
            "p": "When counting the strength of the five elements, the eight characters are not counted as they appear. The values reflect the hidden heavenly stems (地藏干) within the earthly branches and the season of the energy of the month (月令) in which one was born."
          },
          {
            "p": "Counting only the surface characters misses the fact that even the same 木 characters can have completely different strengths depending on the season. The 木 of spring and the 木 of autumn, while the same character, have different strengths."
          }
        ]
      },
      {
        "title": "Where to Use the Balancing Element",
        "blocks": [
          {
            "p": "The determined balancing element is used in two places. One is the result screen's **'currently needed energy'**, and the other is [today's fortune](/guide/today-fortune) — whether today's energy corresponds to the balancing element is the item that moves the score the most on that day."
          }
        ]
      },
      {
        "title": "This Is a Simple Judgment",
        "blocks": [
          {
            "p": "Actual destiny analysis considers the formation and seasonal conditions (the warmth and humidity of the season) to determine the balancing element, and conclusions may vary depending on the method. Saju-Link only uses **reducing that can be measured by strength values**. This is due to the principle of using only what can be converted into rules, so the same input will always yield the same answer."
          },
          {
            "p": "Instead, the result screen also presents the strong and weak day pillar along with the currently needed energy as **reading material**. This is to avoid hiding the basis of the score."
          }
        ]
      }
    ]
  },
  "guide/stem-gap": {
    "eyebrow": "Heavenly stems",
    "title": "Yang Wood (甲) — Wood, Yang",
    "summary": "The element and polarity of the heavenly stem 甲, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Yang Wood (甲) is the first of the ten heavenly stems",
        "blocks": [
          {
            "p": "甲 is the first of the ten heavenly stems. Its element is Wood and its polarity is Yang. Saju-Link calls a person whose day stem is 甲 \"Yang Wood (甲)\"."
          },
          {
            "p": "The line that the result screen shows for this day stem is: \"A tall tree growing straight. Once the direction is set it does not waver, and it would rather endure than bend.\" This line has nothing to do with the table or the scores below."
          }
        ]
      },
      {
        "title": "How it reads the other stems (the Ten Gods)",
        "blocks": [
          {
            "p": "With 甲 as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how 甲 reads the other stem, and when the other stem reads 甲 a different name can come out."
          },
          {
            "table": {
              "caption": "Ten Gods with Yang Wood (甲) as the day stem",
              "head": [
                "Other stem",
                "Element and polarity",
                "Ten God"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "Companion (比肩)"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "Rival (劫財)"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "Expression (食神)"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "Authority (正官)"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "Nurture (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The stems that read as the spouse position",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 甲 as the day stem, Steady Wealth is 己 and Authority is 辛. If you do not state your gender, this position is not read."
          }
        ]
      },
      {
        "title": "The branches that hold 甲",
        "blocks": [
          {
            "p": "This is where 甲 sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that 甲 takes."
          },
          {
            "table": {
              "caption": "The branches that hold 甲",
              "head": [
                "Branch",
                "Animal",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "寅",
                  "Tiger",
                  "principal (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Rabbit",
                  "residual (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Pig",
                  "middle (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One stem does not settle a person. A saju is read from how its eight characters relate.",
              "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."
            ]
          },
          {
            "p": "The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: [Yin Wood (乙)](/guide/stem-eul) · [Yang Fire (丙)](/guide/stem-byeong) · [Yin Fire (丁)](/guide/stem-jeong) · [Yang Earth (戊)](/guide/stem-mu) · [Yin Earth (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Water (壬)](/guide/stem-im) · [Yin Water (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Heavenly stems",
    "title": "Yin Wood (乙) — Wood, Yin",
    "summary": "The element and polarity of the heavenly stem 乙, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Yin Wood (乙) is the second of the ten heavenly stems",
        "blocks": [
          {
            "p": "乙 is the second of the ten heavenly stems. Its element is Wood and its polarity is Yin. Saju-Link calls a person whose day stem is 乙 \"Yin Wood (乙)\"."
          },
          {
            "p": "The line that the result screen shows for this day stem is: \"A vine — flexible grass. It bends with circumstance to keep moving, and it does not snap.\" This line has nothing to do with the table or the scores below."
          }
        ]
      },
      {
        "title": "How it reads the other stems (the Ten Gods)",
        "blocks": [
          {
            "p": "With 乙 as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how 乙 reads the other stem, and when the other stem reads 乙 a different name can come out."
          },
          {
            "table": {
              "caption": "Ten Gods with Yin Wood (乙) as the day stem",
              "head": [
                "Other stem",
                "Element and polarity",
                "Ten God"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "Rival (劫財)"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "Companion (比肩)"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "Expression (食神)"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "Authority (正官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "Nurture (正印)"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "Unconventional Support (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The stems that read as the spouse position",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 乙 as the day stem, Steady Wealth is 戊 and Authority is 庚. If you do not state your gender, this position is not read."
          }
        ]
      },
      {
        "title": "The branches that hold 乙",
        "blocks": [
          {
            "p": "This is where 乙 sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that 乙 takes."
          },
          {
            "table": {
              "caption": "The branches that hold 乙",
              "head": [
                "Branch",
                "Animal",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "卯",
                  "Rabbit",
                  "principal (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Dragon",
                  "residual (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Sheep",
                  "middle (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One stem does not settle a person. A saju is read from how its eight characters relate.",
              "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."
            ]
          },
          {
            "p": "The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: [Yang Wood (甲)](/guide/stem-gap) · [Yang Fire (丙)](/guide/stem-byeong) · [Yin Fire (丁)](/guide/stem-jeong) · [Yang Earth (戊)](/guide/stem-mu) · [Yin Earth (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Water (壬)](/guide/stem-im) · [Yin Water (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Heavenly stems",
    "title": "Yang Fire (丙) — Fire, Yang",
    "summary": "The element and polarity of the heavenly stem 丙, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Yang Fire (丙) is the third of the ten heavenly stems",
        "blocks": [
          {
            "p": "丙 is the third of the ten heavenly stems. Its element is Fire and its polarity is Yang. Saju-Link calls a person whose day stem is 丙 \"Yang Fire (丙)\"."
          },
          {
            "p": "The line that the result screen shows for this day stem is: \"The midday sun. Feelings show plainly, the room brightens, and stepping forward comes naturally.\" This line has nothing to do with the table or the scores below."
          }
        ]
      },
      {
        "title": "How it reads the other stems (the Ten Gods)",
        "blocks": [
          {
            "p": "With 丙 as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how 丙 reads the other stem, and when the other stem reads 丙 a different name can come out."
          },
          {
            "table": {
              "caption": "Ten Gods with Yang Fire (丙) as the day stem",
              "head": [
                "Other stem",
                "Element and polarity",
                "Ten God"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "Nurture (正印)"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "Companion (比肩)"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "Rival (劫財)"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "Expression (食神)"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "Authority (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The stems that read as the spouse position",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丙 as the day stem, Steady Wealth is 辛 and Authority is 癸. If you do not state your gender, this position is not read."
          }
        ]
      },
      {
        "title": "The branches that hold 丙",
        "blocks": [
          {
            "p": "This is where 丙 sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that 丙 takes."
          },
          {
            "table": {
              "caption": "The branches that hold 丙",
              "head": [
                "Branch",
                "Animal",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "寅",
                  "Tiger",
                  "middle (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Snake",
                  "principal (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Horse",
                  "residual (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One stem does not settle a person. A saju is read from how its eight characters relate.",
              "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."
            ]
          },
          {
            "p": "The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: [Yang Wood (甲)](/guide/stem-gap) · [Yin Wood (乙)](/guide/stem-eul) · [Yin Fire (丁)](/guide/stem-jeong) · [Yang Earth (戊)](/guide/stem-mu) · [Yin Earth (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Water (壬)](/guide/stem-im) · [Yin Water (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Heavenly stems",
    "title": "Yin Fire (丁) — Fire, Yin",
    "summary": "The element and polarity of the heavenly stem 丁, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Yin Fire (丁) is the fourth of the ten heavenly stems",
        "blocks": [
          {
            "p": "丁 is the fourth of the ten heavenly stems. Its element is Fire and its polarity is Yin. Saju-Link calls a person whose day stem is 丁 \"Yin Fire (丁)\"."
          },
          {
            "p": "The line that the result screen shows for this day stem is: \"Candlelight. It burns quietly and long, and warms those closest first.\" This line has nothing to do with the table or the scores below."
          }
        ]
      },
      {
        "title": "How it reads the other stems (the Ten Gods)",
        "blocks": [
          {
            "p": "With 丁 as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how 丁 reads the other stem, and when the other stem reads 丁 a different name can come out."
          },
          {
            "table": {
              "caption": "Ten Gods with Yin Fire (丁) as the day stem",
              "head": [
                "Other stem",
                "Element and polarity",
                "Ten God"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "Nurture (正印)"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "Rival (劫財)"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "Companion (比肩)"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "Expression (食神)"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "Authority (正官)"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The stems that read as the spouse position",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丁 as the day stem, Steady Wealth is 庚 and Authority is 壬. If you do not state your gender, this position is not read."
          }
        ]
      },
      {
        "title": "The branches that hold 丁",
        "blocks": [
          {
            "p": "This is where 丁 sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that 丁 takes."
          },
          {
            "table": {
              "caption": "The branches that hold 丁",
              "head": [
                "Branch",
                "Animal",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "午",
                  "Horse",
                  "principal (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Sheep",
                  "residual (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Dog",
                  "middle (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One stem does not settle a person. A saju is read from how its eight characters relate.",
              "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."
            ]
          },
          {
            "p": "The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: [Yang Wood (甲)](/guide/stem-gap) · [Yin Wood (乙)](/guide/stem-eul) · [Yang Fire (丙)](/guide/stem-byeong) · [Yang Earth (戊)](/guide/stem-mu) · [Yin Earth (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Water (壬)](/guide/stem-im) · [Yin Water (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Heavenly stems",
    "title": "Yang Earth (戊) — Earth, Yang",
    "summary": "The element and polarity of the heavenly stem 戊, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Yang Earth (戊) is the fifth of the ten heavenly stems",
        "blocks": [
          {
            "p": "戊 is the fifth of the ten heavenly stems. Its element is Earth and its polarity is Yang. Saju-Link calls a person whose day stem is 戊 \"Yang Earth (戊)\"."
          },
          {
            "p": "The line that the result screen shows for this day stem is: \"Open ground and mountains. Hard to shake and easy to lean on, though slow to change a decision once made.\" This line has nothing to do with the table or the scores below."
          }
        ]
      },
      {
        "title": "How it reads the other stems (the Ten Gods)",
        "blocks": [
          {
            "p": "With 戊 as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how 戊 reads the other stem, and when the other stem reads 戊 a different name can come out."
          },
          {
            "table": {
              "caption": "Ten Gods with Yang Earth (戊) as the day stem",
              "head": [
                "Other stem",
                "Element and polarity",
                "Ten God"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "Authority (正官)"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "Nurture (正印)"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "Companion (比肩)"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "Rival (劫財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "Expression (食神)"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "Steady Wealth (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The stems that read as the spouse position",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 戊 as the day stem, Steady Wealth is 癸 and Authority is 乙. If you do not state your gender, this position is not read."
          }
        ]
      },
      {
        "title": "The branches that hold 戊",
        "blocks": [
          {
            "p": "This is where 戊 sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that 戊 takes."
          },
          {
            "table": {
              "caption": "The branches that hold 戊",
              "head": [
                "Branch",
                "Animal",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "寅",
                  "Tiger",
                  "residual (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Dragon",
                  "principal (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Snake",
                  "residual (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Monkey",
                  "residual (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Dog",
                  "principal (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Pig",
                  "residual (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One stem does not settle a person. A saju is read from how its eight characters relate.",
              "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."
            ]
          },
          {
            "p": "The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: [Yang Wood (甲)](/guide/stem-gap) · [Yin Wood (乙)](/guide/stem-eul) · [Yang Fire (丙)](/guide/stem-byeong) · [Yin Fire (丁)](/guide/stem-jeong) · [Yin Earth (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Water (壬)](/guide/stem-im) · [Yin Water (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Heavenly stems",
    "title": "Yin Earth (己) — Earth, Yin",
    "summary": "The element and polarity of the heavenly stem 己, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Yin Earth (己) is the sixth of the ten heavenly stems",
        "blocks": [
          {
            "p": "己 is the sixth of the ten heavenly stems. Its element is Earth and its polarity is Yin. Saju-Link calls a person whose day stem is 己 \"Yin Earth (己)\"."
          },
          {
            "p": "The line that the result screen shows for this day stem is: \"Field soil. It takes in whatever comes and grows it, tending rather than displaying.\" This line has nothing to do with the table or the scores below."
          }
        ]
      },
      {
        "title": "How it reads the other stems (the Ten Gods)",
        "blocks": [
          {
            "p": "With 己 as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how 己 reads the other stem, and when the other stem reads 己 a different name can come out."
          },
          {
            "table": {
              "caption": "Ten Gods with Yin Earth (己) as the day stem",
              "head": [
                "Other stem",
                "Element and polarity",
                "Ten God"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "Authority (正官)"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "Nurture (正印)"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "Rival (劫財)"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "Companion (比肩)"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "Expression (食神)"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "Windfall (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The stems that read as the spouse position",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 己 as the day stem, Steady Wealth is 壬 and Authority is 甲. If you do not state your gender, this position is not read."
          }
        ]
      },
      {
        "title": "The branches that hold 己",
        "blocks": [
          {
            "p": "This is where 己 sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that 己 takes."
          },
          {
            "table": {
              "caption": "The branches that hold 己",
              "head": [
                "Branch",
                "Animal",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "丑",
                  "Ox",
                  "principal (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Horse",
                  "middle (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Sheep",
                  "principal (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One stem does not settle a person. A saju is read from how its eight characters relate.",
              "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."
            ]
          },
          {
            "p": "The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: [Yang Wood (甲)](/guide/stem-gap) · [Yin Wood (乙)](/guide/stem-eul) · [Yang Fire (丙)](/guide/stem-byeong) · [Yin Fire (丁)](/guide/stem-jeong) · [Yang Earth (戊)](/guide/stem-mu) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Water (壬)](/guide/stem-im) · [Yin Water (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Heavenly stems",
    "title": "Yang Metal (庚) — Metal, Yang",
    "summary": "The element and polarity of the heavenly stem 庚, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Yang Metal (庚) is the seventh of the ten heavenly stems",
        "blocks": [
          {
            "p": "庚 is the seventh of the ten heavenly stems. Its element is Metal and its polarity is Yang. Saju-Link calls a person whose day stem is 庚 \"Yang Metal (庚)\"."
          },
          {
            "p": "The line that the result screen shows for this day stem is: \"Unworked iron. Decisive and clear-cut, with little patience for things left hanging.\" This line has nothing to do with the table or the scores below."
          }
        ]
      },
      {
        "title": "How it reads the other stems (the Ten Gods)",
        "blocks": [
          {
            "p": "With 庚 as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how 庚 reads the other stem, and when the other stem reads 庚 a different name can come out."
          },
          {
            "table": {
              "caption": "Ten Gods with Yang Metal (庚) as the day stem",
              "head": [
                "Other stem",
                "Element and polarity",
                "Ten God"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "Authority (正官)"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "Nurture (正印)"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "Companion (比肩)"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "Rival (劫財)"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "Expression (食神)"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "Disruptor (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The stems that read as the spouse position",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 庚 as the day stem, Steady Wealth is 乙 and Authority is 丁. If you do not state your gender, this position is not read."
          }
        ]
      },
      {
        "title": "The branches that hold 庚",
        "blocks": [
          {
            "p": "This is where 庚 sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that 庚 takes."
          },
          {
            "table": {
              "caption": "The branches that hold 庚",
              "head": [
                "Branch",
                "Animal",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "巳",
                  "Snake",
                  "middle (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Monkey",
                  "principal (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Rooster",
                  "residual (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One stem does not settle a person. A saju is read from how its eight characters relate.",
              "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."
            ]
          },
          {
            "p": "The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: [Yang Wood (甲)](/guide/stem-gap) · [Yin Wood (乙)](/guide/stem-eul) · [Yang Fire (丙)](/guide/stem-byeong) · [Yin Fire (丁)](/guide/stem-jeong) · [Yang Earth (戊)](/guide/stem-mu) · [Yin Earth (己)](/guide/stem-gi) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Water (壬)](/guide/stem-im) · [Yin Water (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Heavenly stems",
    "title": "Yin Metal (辛) — Metal, Yin",
    "summary": "The element and polarity of the heavenly stem 辛, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Yin Metal (辛) is the eighth of the ten heavenly stems",
        "blocks": [
          {
            "p": "辛 is the eighth of the ten heavenly stems. Its element is Metal and its polarity is Yin. Saju-Link calls a person whose day stem is 辛 \"Yin Metal (辛)\"."
          },
          {
            "p": "The line that the result screen shows for this day stem is: \"A cut gem. Fine-grained taste and high standards; sloppiness is hard to let pass.\" This line has nothing to do with the table or the scores below."
          }
        ]
      },
      {
        "title": "How it reads the other stems (the Ten Gods)",
        "blocks": [
          {
            "p": "With 辛 as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how 辛 reads the other stem, and when the other stem reads 辛 a different name can come out."
          },
          {
            "table": {
              "caption": "Ten Gods with Yin Metal (辛) as the day stem",
              "head": [
                "Other stem",
                "Element and polarity",
                "Ten God"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "Authority (正官)"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "Nurture (正印)"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "Rival (劫財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "Companion (比肩)"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The stems that read as the spouse position",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 辛 as the day stem, Steady Wealth is 甲 and Authority is 丙. If you do not state your gender, this position is not read."
          }
        ]
      },
      {
        "title": "The branches that hold 辛",
        "blocks": [
          {
            "p": "This is where 辛 sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that 辛 takes."
          },
          {
            "table": {
              "caption": "The branches that hold 辛",
              "head": [
                "Branch",
                "Animal",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "丑",
                  "Ox",
                  "middle (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Rooster",
                  "principal (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Dog",
                  "residual (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One stem does not settle a person. A saju is read from how its eight characters relate.",
              "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."
            ]
          },
          {
            "p": "The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: [Yang Wood (甲)](/guide/stem-gap) · [Yin Wood (乙)](/guide/stem-eul) · [Yang Fire (丙)](/guide/stem-byeong) · [Yin Fire (丁)](/guide/stem-jeong) · [Yang Earth (戊)](/guide/stem-mu) · [Yin Earth (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yang Water (壬)](/guide/stem-im) · [Yin Water (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Heavenly stems",
    "title": "Yang Water (壬) — Water, Yang",
    "summary": "The element and polarity of the heavenly stem 壬, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Yang Water (壬) is the ninth of the ten heavenly stems",
        "blocks": [
          {
            "p": "壬 is the ninth of the ten heavenly stems. Its element is Water and its polarity is Yang. Saju-Link calls a person whose day stem is 壬 \"Yang Water (壬)\"."
          },
          {
            "p": "The line that the result screen shows for this day stem is: \"River and sea. Broad in outlook, with an eye for how things are flowing.\" This line has nothing to do with the table or the scores below."
          }
        ]
      },
      {
        "title": "How it reads the other stems (the Ten Gods)",
        "blocks": [
          {
            "p": "With 壬 as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how 壬 reads the other stem, and when the other stem reads 壬 a different name can come out."
          },
          {
            "table": {
              "caption": "Ten Gods with Yang Water (壬) as the day stem",
              "head": [
                "Other stem",
                "Element and polarity",
                "Ten God"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "Expression (食神)"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "Authority (正官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "Nurture (正印)"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "Companion (比肩)"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The stems that read as the spouse position",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 壬 as the day stem, Steady Wealth is 丁 and Authority is 己. If you do not state your gender, this position is not read."
          }
        ]
      },
      {
        "title": "The branches that hold 壬",
        "blocks": [
          {
            "p": "This is where 壬 sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that 壬 takes."
          },
          {
            "table": {
              "caption": "The branches that hold 壬",
              "head": [
                "Branch",
                "Animal",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "子",
                  "Rat",
                  "residual (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Monkey",
                  "middle (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Pig",
                  "principal (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One stem does not settle a person. A saju is read from how its eight characters relate.",
              "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."
            ]
          },
          {
            "p": "The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: [Yang Wood (甲)](/guide/stem-gap) · [Yin Wood (乙)](/guide/stem-eul) · [Yang Fire (丙)](/guide/stem-byeong) · [Yin Fire (丁)](/guide/stem-jeong) · [Yang Earth (戊)](/guide/stem-mu) · [Yin Earth (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yin Water (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Heavenly stems",
    "title": "Yin Water (癸) — Water, Yin",
    "summary": "The element and polarity of the heavenly stem 癸, how it reads the other nine stems (the Ten Gods) and which earthly branches hold it — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Yin Water (癸) is the tenth of the ten heavenly stems",
        "blocks": [
          {
            "p": "癸 is the tenth of the ten heavenly stems. Its element is Water and its polarity is Yin. Saju-Link calls a person whose day stem is 癸 \"Yin Water (癸)\"."
          },
          {
            "p": "The line that the result screen shows for this day stem is: \"Dew and rain. It seeps in quietly and reads the mood before the words.\" This line has nothing to do with the table or the scores below."
          }
        ]
      },
      {
        "title": "How it reads the other stems (the Ten Gods)",
        "blocks": [
          {
            "p": "With 癸 as the day stem, each of the ten stems reads as follows. The reading has a direction: this is how 癸 reads the other stem, and when the other stem reads 癸 a different name can come out."
          },
          {
            "table": {
              "caption": "Ten Gods with Yin Water (癸) as the day stem",
              "head": [
                "Other stem",
                "Element and polarity",
                "Ten God"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "Expression (食神)"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "Authority (正官)"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "Nurture (正印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "Rival (劫財)"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "Companion (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The stems that read as the spouse position",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 癸 as the day stem, Steady Wealth is 丙 and Authority is 戊. If you do not state your gender, this position is not read."
          }
        ]
      },
      {
        "title": "The branches that hold 癸",
        "blocks": [
          {
            "p": "This is where 癸 sits hidden inside the earthly branches (the hidden stems). The share is the proportion of that branch's thirty days that 癸 takes."
          },
          {
            "table": {
              "caption": "The branches that hold 癸",
              "head": [
                "Branch",
                "Animal",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "子",
                  "Rat",
                  "principal (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Ox",
                  "residual (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Dragon",
                  "middle (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One stem does not settle a person. A saju is read from how its eight characters relate.",
              "The Ten Gods are a judgement made from the day stem. The same two characters get a different name depending on which one is the day stem."
            ]
          },
          {
            "p": "The full Ten Gods are in [the Ten Gods guide](/guide/ten-gods), and the element strengths and the month sign are in [the five elements guide](/guide/five-elements). Other stems: [Yang Wood (甲)](/guide/stem-gap) · [Yin Wood (乙)](/guide/stem-eul) · [Yang Fire (丙)](/guide/stem-byeong) · [Yin Fire (丁)](/guide/stem-jeong) · [Yang Earth (戊)](/guide/stem-mu) · [Yin Earth (己)](/guide/stem-gi) · [Yang Metal (庚)](/guide/stem-gyeong) · [Yin Metal (辛)](/guide/stem-sin) · [Yang Water (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Earthly branches",
    "title": "子 — the branch of the Rat",
    "summary": "The stems held by the earthly branch 子 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "子 is the first of the twelve earthly branches",
        "blocks": [
          {
            "p": "子 is the first of the twelve earthly branches and belongs to the Rat. When the branch of the birth month is 子, the season is winter and the element that owns the season is Water."
          },
          {
            "p": "When the branch of the birth day is 子, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 子",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "residual (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "principal (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 子",
        "blocks": [
          {
            "p": "When the branch of the birth month is 子, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 子 (winter)",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fire",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Earth",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Water",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 子 become different Ten Gods depending on the day stem. When 子 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 子 are to each day stem",
              "head": [
                "Day stem",
                "Yang Water (壬) — residual (餘氣)",
                "Yin Water (癸) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Unconventional Support (偏印)",
                  "Nurture (正印)"
                ],
                [
                  "Yin Wood (乙)",
                  "Nurture (正印)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Fire (丙)",
                  "Challenger (偏官)",
                  "Authority (正官)"
                ],
                [
                  "Yin Fire (丁)",
                  "Authority (正官)",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Earth (戊)",
                  "Windfall (偏財)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Earth (己)",
                  "Steady Wealth (正財)",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Expression (食神)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Disruptor (傷官)",
                  "Expression (食神)"
                ],
                [
                  "Yang Water (壬)",
                  "Companion (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Yin Water (癸)",
                  "Rival (劫財)",
                  "Companion (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [丑 (Ox)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Rabbit)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Snake)](/guide/branch-sa) · [午 (Horse)](/guide/branch-o) · [未 (Sheep)](/guide/branch-mi) · [申 (Monkey)](/guide/branch-sin) · [酉 (Rooster)](/guide/branch-yu) · [戌 (Dog)](/guide/branch-sul) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Earthly branches",
    "title": "丑 — the branch of the Ox",
    "summary": "The stems held by the earthly branch 丑 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丑 is the second of the twelve earthly branches",
        "blocks": [
          {
            "p": "丑 is the second of the twelve earthly branches and belongs to the Ox. When the branch of the birth month is 丑, the season is winter and the element that owns the season is Water. It is a transition month (辰未戌丑), so Earth is also treated as prosperous."
          },
          {
            "p": "When the branch of the birth day is 丑, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 丑",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "residual (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "middle (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "principal (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 丑",
        "blocks": [
          {
            "p": "When the branch of the birth month is 丑, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 丑 (winter (transition month))",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fire",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Earth",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Water",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 丑 become different Ten Gods depending on the day stem. When 丑 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 丑 are to each day stem",
              "head": [
                "Day stem",
                "Yin Water (癸) — residual (餘氣)",
                "Yin Metal (辛) — middle (中氣)",
                "Yin Earth (己) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Nurture (正印)",
                  "Authority (正官)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Wood (乙)",
                  "Unconventional Support (偏印)",
                  "Challenger (偏官)",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Fire (丙)",
                  "Authority (正官)",
                  "Steady Wealth (正財)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Fire (丁)",
                  "Challenger (偏官)",
                  "Windfall (偏財)",
                  "Expression (食神)"
                ],
                [
                  "Yang Earth (戊)",
                  "Steady Wealth (正財)",
                  "Disruptor (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Yin Earth (己)",
                  "Windfall (偏財)",
                  "Expression (食神)",
                  "Companion (比肩)"
                ],
                [
                  "Yang Metal (庚)",
                  "Disruptor (傷官)",
                  "Rival (劫財)",
                  "Nurture (正印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Expression (食神)",
                  "Companion (比肩)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Water (壬)",
                  "Rival (劫財)",
                  "Nurture (正印)",
                  "Authority (正官)"
                ],
                [
                  "Yin Water (癸)",
                  "Companion (比肩)",
                  "Unconventional Support (偏印)",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [寅 (Tiger)](/guide/branch-in) · [卯 (Rabbit)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Snake)](/guide/branch-sa) · [午 (Horse)](/guide/branch-o) · [未 (Sheep)](/guide/branch-mi) · [申 (Monkey)](/guide/branch-sin) · [酉 (Rooster)](/guide/branch-yu) · [戌 (Dog)](/guide/branch-sul) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Earthly branches",
    "title": "寅 — the branch of the Tiger",
    "summary": "The stems held by the earthly branch 寅 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "寅 is the third of the twelve earthly branches",
        "blocks": [
          {
            "p": "寅 is the third of the twelve earthly branches and belongs to the Tiger. When the branch of the birth month is 寅, the season is spring and the element that owns the season is Wood."
          },
          {
            "p": "When the branch of the birth day is 寅, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 寅",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "residual (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "middle (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "principal (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 寅",
        "blocks": [
          {
            "p": "When the branch of the birth month is 寅, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 寅 (spring)",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fire",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Earth",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Water",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 寅 become different Ten Gods depending on the day stem. When 寅 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 寅 are to each day stem",
              "head": [
                "Day stem",
                "Yang Earth (戊) — residual (餘氣)",
                "Yang Fire (丙) — middle (中氣)",
                "Yang Wood (甲) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Windfall (偏財)",
                  "Expression (食神)",
                  "Companion (比肩)"
                ],
                [
                  "Yin Wood (乙)",
                  "Steady Wealth (正財)",
                  "Disruptor (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Yang Fire (丙)",
                  "Expression (食神)",
                  "Companion (比肩)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Fire (丁)",
                  "Disruptor (傷官)",
                  "Rival (劫財)",
                  "Nurture (正印)"
                ],
                [
                  "Yang Earth (戊)",
                  "Companion (比肩)",
                  "Unconventional Support (偏印)",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Earth (己)",
                  "Rival (劫財)",
                  "Nurture (正印)",
                  "Authority (正官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Unconventional Support (偏印)",
                  "Challenger (偏官)",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Nurture (正印)",
                  "Authority (正官)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Water (壬)",
                  "Challenger (偏官)",
                  "Windfall (偏財)",
                  "Expression (食神)"
                ],
                [
                  "Yin Water (癸)",
                  "Authority (正官)",
                  "Steady Wealth (正財)",
                  "Disruptor (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [丑 (Ox)](/guide/branch-chuk) · [卯 (Rabbit)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Snake)](/guide/branch-sa) · [午 (Horse)](/guide/branch-o) · [未 (Sheep)](/guide/branch-mi) · [申 (Monkey)](/guide/branch-sin) · [酉 (Rooster)](/guide/branch-yu) · [戌 (Dog)](/guide/branch-sul) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Earthly branches",
    "title": "卯 — the branch of the Rabbit",
    "summary": "The stems held by the earthly branch 卯 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "卯 is the fourth of the twelve earthly branches",
        "blocks": [
          {
            "p": "卯 is the fourth of the twelve earthly branches and belongs to the Rabbit. When the branch of the birth month is 卯, the season is spring and the element that owns the season is Wood."
          },
          {
            "p": "When the branch of the birth day is 卯, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 卯",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "residual (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "principal (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 卯",
        "blocks": [
          {
            "p": "When the branch of the birth month is 卯, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 卯 (spring)",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fire",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Earth",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Water",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 卯 become different Ten Gods depending on the day stem. When 卯 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 卯 are to each day stem",
              "head": [
                "Day stem",
                "Yang Wood (甲) — residual (餘氣)",
                "Yin Wood (乙) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Companion (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Yin Wood (乙)",
                  "Rival (劫財)",
                  "Companion (比肩)"
                ],
                [
                  "Yang Fire (丙)",
                  "Unconventional Support (偏印)",
                  "Nurture (正印)"
                ],
                [
                  "Yin Fire (丁)",
                  "Nurture (正印)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Earth (戊)",
                  "Challenger (偏官)",
                  "Authority (正官)"
                ],
                [
                  "Yin Earth (己)",
                  "Authority (正官)",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Windfall (偏財)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Steady Wealth (正財)",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Water (壬)",
                  "Expression (食神)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Water (癸)",
                  "Disruptor (傷官)",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [丑 (Ox)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Snake)](/guide/branch-sa) · [午 (Horse)](/guide/branch-o) · [未 (Sheep)](/guide/branch-mi) · [申 (Monkey)](/guide/branch-sin) · [酉 (Rooster)](/guide/branch-yu) · [戌 (Dog)](/guide/branch-sul) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Earthly branches",
    "title": "辰 — the branch of the Dragon",
    "summary": "The stems held by the earthly branch 辰 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "辰 is the fifth of the twelve earthly branches",
        "blocks": [
          {
            "p": "辰 is the fifth of the twelve earthly branches and belongs to the Dragon. When the branch of the birth month is 辰, the season is spring and the element that owns the season is Wood. It is a transition month (辰未戌丑), so Earth is also treated as prosperous."
          },
          {
            "p": "When the branch of the birth day is 辰, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 辰",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "residual (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin",
                  "middle (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "principal (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 辰",
        "blocks": [
          {
            "p": "When the branch of the birth month is 辰, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 辰 (spring (transition month))",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Fire",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Earth",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Water",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 辰 become different Ten Gods depending on the day stem. When 辰 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 辰 are to each day stem",
              "head": [
                "Day stem",
                "Yin Wood (乙) — residual (餘氣)",
                "Yin Water (癸) — middle (中氣)",
                "Yang Earth (戊) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Rival (劫財)",
                  "Nurture (正印)",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Wood (乙)",
                  "Companion (比肩)",
                  "Unconventional Support (偏印)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Fire (丙)",
                  "Nurture (正印)",
                  "Authority (正官)",
                  "Expression (食神)"
                ],
                [
                  "Yin Fire (丁)",
                  "Unconventional Support (偏印)",
                  "Challenger (偏官)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Earth (戊)",
                  "Authority (正官)",
                  "Steady Wealth (正財)",
                  "Companion (比肩)"
                ],
                [
                  "Yin Earth (己)",
                  "Challenger (偏官)",
                  "Windfall (偏財)",
                  "Rival (劫財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Steady Wealth (正財)",
                  "Disruptor (傷官)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Windfall (偏財)",
                  "Expression (食神)",
                  "Nurture (正印)"
                ],
                [
                  "Yang Water (壬)",
                  "Disruptor (傷官)",
                  "Rival (劫財)",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Water (癸)",
                  "Expression (食神)",
                  "Companion (比肩)",
                  "Authority (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [丑 (Ox)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Rabbit)](/guide/branch-myo) · [巳 (Snake)](/guide/branch-sa) · [午 (Horse)](/guide/branch-o) · [未 (Sheep)](/guide/branch-mi) · [申 (Monkey)](/guide/branch-sin) · [酉 (Rooster)](/guide/branch-yu) · [戌 (Dog)](/guide/branch-sul) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Earthly branches",
    "title": "巳 — the branch of the Snake",
    "summary": "The stems held by the earthly branch 巳 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "巳 is the sixth of the twelve earthly branches",
        "blocks": [
          {
            "p": "巳 is the sixth of the twelve earthly branches and belongs to the Snake. When the branch of the birth month is 巳, the season is summer and the element that owns the season is Fire."
          },
          {
            "p": "When the branch of the birth day is 巳, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 巳",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "residual (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "middle (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "principal (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 巳",
        "blocks": [
          {
            "p": "When the branch of the birth month is 巳, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 巳 (summer)",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fire",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Earth",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Water",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 巳 become different Ten Gods depending on the day stem. When 巳 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 巳 are to each day stem",
              "head": [
                "Day stem",
                "Yang Earth (戊) — residual (餘氣)",
                "Yang Metal (庚) — middle (中氣)",
                "Yang Fire (丙) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Windfall (偏財)",
                  "Challenger (偏官)",
                  "Expression (食神)"
                ],
                [
                  "Yin Wood (乙)",
                  "Steady Wealth (正財)",
                  "Authority (正官)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Fire (丙)",
                  "Expression (食神)",
                  "Windfall (偏財)",
                  "Companion (比肩)"
                ],
                [
                  "Yin Fire (丁)",
                  "Disruptor (傷官)",
                  "Steady Wealth (正財)",
                  "Rival (劫財)"
                ],
                [
                  "Yang Earth (戊)",
                  "Companion (比肩)",
                  "Expression (食神)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Earth (己)",
                  "Rival (劫財)",
                  "Disruptor (傷官)",
                  "Nurture (正印)"
                ],
                [
                  "Yang Metal (庚)",
                  "Unconventional Support (偏印)",
                  "Companion (比肩)",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Nurture (正印)",
                  "Rival (劫財)",
                  "Authority (正官)"
                ],
                [
                  "Yang Water (壬)",
                  "Challenger (偏官)",
                  "Unconventional Support (偏印)",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Water (癸)",
                  "Authority (正官)",
                  "Nurture (正印)",
                  "Steady Wealth (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [丑 (Ox)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Rabbit)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [午 (Horse)](/guide/branch-o) · [未 (Sheep)](/guide/branch-mi) · [申 (Monkey)](/guide/branch-sin) · [酉 (Rooster)](/guide/branch-yu) · [戌 (Dog)](/guide/branch-sul) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Earthly branches",
    "title": "午 — the branch of the Horse",
    "summary": "The stems held by the earthly branch 午 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "午 is the seventh of the twelve earthly branches",
        "blocks": [
          {
            "p": "午 is the seventh of the twelve earthly branches and belongs to the Horse. When the branch of the birth month is 午, the season is summer and the element that owns the season is Fire."
          },
          {
            "p": "When the branch of the birth day is 午, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 午",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yang Fire (丙)",
                  "Fire Yang",
                  "residual (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "middle (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "principal (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 午",
        "blocks": [
          {
            "p": "When the branch of the birth month is 午, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 午 (summer)",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fire",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Earth",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Water",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 午 become different Ten Gods depending on the day stem. When 午 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 午 are to each day stem",
              "head": [
                "Day stem",
                "Yang Fire (丙) — residual (餘氣)",
                "Yin Earth (己) — middle (中氣)",
                "Yin Fire (丁) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Expression (食神)",
                  "Steady Wealth (正財)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Wood (乙)",
                  "Disruptor (傷官)",
                  "Windfall (偏財)",
                  "Expression (食神)"
                ],
                [
                  "Yang Fire (丙)",
                  "Companion (比肩)",
                  "Disruptor (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Yin Fire (丁)",
                  "Rival (劫財)",
                  "Expression (食神)",
                  "Companion (比肩)"
                ],
                [
                  "Yang Earth (戊)",
                  "Unconventional Support (偏印)",
                  "Rival (劫財)",
                  "Nurture (正印)"
                ],
                [
                  "Yin Earth (己)",
                  "Nurture (正印)",
                  "Companion (比肩)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Metal (庚)",
                  "Challenger (偏官)",
                  "Nurture (正印)",
                  "Authority (正官)"
                ],
                [
                  "Yin Metal (辛)",
                  "Authority (正官)",
                  "Unconventional Support (偏印)",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Water (壬)",
                  "Windfall (偏財)",
                  "Authority (正官)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Water (癸)",
                  "Steady Wealth (正財)",
                  "Challenger (偏官)",
                  "Windfall (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [丑 (Ox)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Rabbit)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Snake)](/guide/branch-sa) · [未 (Sheep)](/guide/branch-mi) · [申 (Monkey)](/guide/branch-sin) · [酉 (Rooster)](/guide/branch-yu) · [戌 (Dog)](/guide/branch-sul) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Earthly branches",
    "title": "未 — the branch of the Sheep",
    "summary": "The stems held by the earthly branch 未 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "未 is the eighth of the twelve earthly branches",
        "blocks": [
          {
            "p": "未 is the eighth of the twelve earthly branches and belongs to the Sheep. When the branch of the birth month is 未, the season is summer and the element that owns the season is Fire. It is a transition month (辰未戌丑), so Earth is also treated as prosperous."
          },
          {
            "p": "When the branch of the birth day is 未, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 未",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "residual (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin",
                  "middle (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin",
                  "principal (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 未",
        "blocks": [
          {
            "p": "When the branch of the birth month is 未, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 未 (summer (transition month))",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Fire",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Earth",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Water",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 未 become different Ten Gods depending on the day stem. When 未 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 未 are to each day stem",
              "head": [
                "Day stem",
                "Yin Fire (丁) — residual (餘氣)",
                "Yin Wood (乙) — middle (中氣)",
                "Yin Earth (己) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Disruptor (傷官)",
                  "Rival (劫財)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Wood (乙)",
                  "Expression (食神)",
                  "Companion (比肩)",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Fire (丙)",
                  "Rival (劫財)",
                  "Nurture (正印)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Fire (丁)",
                  "Companion (比肩)",
                  "Unconventional Support (偏印)",
                  "Expression (食神)"
                ],
                [
                  "Yang Earth (戊)",
                  "Nurture (正印)",
                  "Authority (正官)",
                  "Rival (劫財)"
                ],
                [
                  "Yin Earth (己)",
                  "Unconventional Support (偏印)",
                  "Challenger (偏官)",
                  "Companion (比肩)"
                ],
                [
                  "Yang Metal (庚)",
                  "Authority (正官)",
                  "Steady Wealth (正財)",
                  "Nurture (正印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Challenger (偏官)",
                  "Windfall (偏財)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Water (壬)",
                  "Steady Wealth (正財)",
                  "Disruptor (傷官)",
                  "Authority (正官)"
                ],
                [
                  "Yin Water (癸)",
                  "Windfall (偏財)",
                  "Expression (食神)",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [丑 (Ox)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Rabbit)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Snake)](/guide/branch-sa) · [午 (Horse)](/guide/branch-o) · [申 (Monkey)](/guide/branch-sin) · [酉 (Rooster)](/guide/branch-yu) · [戌 (Dog)](/guide/branch-sul) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Earthly branches",
    "title": "申 — the branch of the Monkey",
    "summary": "The stems held by the earthly branch 申 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "申 is the ninth of the twelve earthly branches",
        "blocks": [
          {
            "p": "申 is the ninth of the twelve earthly branches and belongs to the Monkey. When the branch of the birth month is 申, the season is autumn and the element that owns the season is Metal."
          },
          {
            "p": "When the branch of the birth day is 申, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 申",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "residual (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "middle (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "principal (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 申",
        "blocks": [
          {
            "p": "When the branch of the birth month is 申, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 申 (autumn)",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fire",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Earth",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Water",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 申 become different Ten Gods depending on the day stem. When 申 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 申 are to each day stem",
              "head": [
                "Day stem",
                "Yang Earth (戊) — residual (餘氣)",
                "Yang Water (壬) — middle (中氣)",
                "Yang Metal (庚) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Windfall (偏財)",
                  "Unconventional Support (偏印)",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Wood (乙)",
                  "Steady Wealth (正財)",
                  "Nurture (正印)",
                  "Authority (正官)"
                ],
                [
                  "Yang Fire (丙)",
                  "Expression (食神)",
                  "Challenger (偏官)",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Fire (丁)",
                  "Disruptor (傷官)",
                  "Authority (正官)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Earth (戊)",
                  "Companion (比肩)",
                  "Windfall (偏財)",
                  "Expression (食神)"
                ],
                [
                  "Yin Earth (己)",
                  "Rival (劫財)",
                  "Steady Wealth (正財)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Metal (庚)",
                  "Unconventional Support (偏印)",
                  "Expression (食神)",
                  "Companion (比肩)"
                ],
                [
                  "Yin Metal (辛)",
                  "Nurture (正印)",
                  "Disruptor (傷官)",
                  "Rival (劫財)"
                ],
                [
                  "Yang Water (壬)",
                  "Challenger (偏官)",
                  "Companion (比肩)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Water (癸)",
                  "Authority (正官)",
                  "Rival (劫財)",
                  "Nurture (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [丑 (Ox)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Rabbit)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Snake)](/guide/branch-sa) · [午 (Horse)](/guide/branch-o) · [未 (Sheep)](/guide/branch-mi) · [酉 (Rooster)](/guide/branch-yu) · [戌 (Dog)](/guide/branch-sul) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Earthly branches",
    "title": "酉 — the branch of the Rooster",
    "summary": "The stems held by the earthly branch 酉 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "酉 is the tenth of the twelve earthly branches",
        "blocks": [
          {
            "p": "酉 is the tenth of the twelve earthly branches and belongs to the Rooster. When the branch of the birth month is 酉, the season is autumn and the element that owns the season is Metal."
          },
          {
            "p": "When the branch of the birth day is 酉, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 酉",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "Metal Yang",
                  "residual (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "principal (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 酉",
        "blocks": [
          {
            "p": "When the branch of the birth month is 酉, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 酉 (autumn)",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fire",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Earth",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Water",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 酉 become different Ten Gods depending on the day stem. When 酉 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 酉 are to each day stem",
              "head": [
                "Day stem",
                "Yang Metal (庚) — residual (餘氣)",
                "Yin Metal (辛) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Challenger (偏官)",
                  "Authority (正官)"
                ],
                [
                  "Yin Wood (乙)",
                  "Authority (正官)",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Fire (丙)",
                  "Windfall (偏財)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Fire (丁)",
                  "Steady Wealth (正財)",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Earth (戊)",
                  "Expression (食神)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Earth (己)",
                  "Disruptor (傷官)",
                  "Expression (食神)"
                ],
                [
                  "Yang Metal (庚)",
                  "Companion (比肩)",
                  "Rival (劫財)"
                ],
                [
                  "Yin Metal (辛)",
                  "Rival (劫財)",
                  "Companion (比肩)"
                ],
                [
                  "Yang Water (壬)",
                  "Unconventional Support (偏印)",
                  "Nurture (正印)"
                ],
                [
                  "Yin Water (癸)",
                  "Nurture (正印)",
                  "Unconventional Support (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [丑 (Ox)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Rabbit)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Snake)](/guide/branch-sa) · [午 (Horse)](/guide/branch-o) · [未 (Sheep)](/guide/branch-mi) · [申 (Monkey)](/guide/branch-sin) · [戌 (Dog)](/guide/branch-sul) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Earthly branches",
    "title": "戌 — the branch of the Dog",
    "summary": "The stems held by the earthly branch 戌 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "戌 is the eleventh of the twelve earthly branches",
        "blocks": [
          {
            "p": "戌 is the eleventh of the twelve earthly branches and belongs to the Dog. When the branch of the birth month is 戌, the season is autumn and the element that owns the season is Metal. It is a transition month (辰未戌丑), so Earth is also treated as prosperous."
          },
          {
            "p": "When the branch of the birth day is 戌, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 戌",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "Metal Yin",
                  "residual (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin",
                  "middle (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "principal (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 戌",
        "blocks": [
          {
            "p": "When the branch of the birth month is 戌, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 戌 (autumn (transition month))",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Fire",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Earth",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Water",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 戌 become different Ten Gods depending on the day stem. When 戌 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 戌 are to each day stem",
              "head": [
                "Day stem",
                "Yin Metal (辛) — residual (餘氣)",
                "Yin Fire (丁) — middle (中氣)",
                "Yang Earth (戊) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Authority (正官)",
                  "Disruptor (傷官)",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Wood (乙)",
                  "Challenger (偏官)",
                  "Expression (食神)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Fire (丙)",
                  "Steady Wealth (正財)",
                  "Rival (劫財)",
                  "Expression (食神)"
                ],
                [
                  "Yin Fire (丁)",
                  "Windfall (偏財)",
                  "Companion (比肩)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Earth (戊)",
                  "Disruptor (傷官)",
                  "Nurture (正印)",
                  "Companion (比肩)"
                ],
                [
                  "Yin Earth (己)",
                  "Expression (食神)",
                  "Unconventional Support (偏印)",
                  "Rival (劫財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Rival (劫財)",
                  "Authority (正官)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Metal (辛)",
                  "Companion (比肩)",
                  "Challenger (偏官)",
                  "Nurture (正印)"
                ],
                [
                  "Yang Water (壬)",
                  "Nurture (正印)",
                  "Steady Wealth (正財)",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Water (癸)",
                  "Unconventional Support (偏印)",
                  "Windfall (偏財)",
                  "Authority (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [丑 (Ox)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Rabbit)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Snake)](/guide/branch-sa) · [午 (Horse)](/guide/branch-o) · [未 (Sheep)](/guide/branch-mi) · [申 (Monkey)](/guide/branch-sin) · [酉 (Rooster)](/guide/branch-yu) · [亥 (Pig)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Earthly branches",
    "title": "亥 — the branch of the Pig",
    "summary": "The stems held by the earthly branch 亥 (the hidden stems), the strength of the five elements when it is the month branch, and the Ten Gods read for each day stem — laid out exactly as Saju-Link's calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "亥 is the twelfth of the twelve earthly branches",
        "blocks": [
          {
            "p": "亥 is the twelfth of the twelve earthly branches and belongs to the Pig. When the branch of the birth month is 亥, the season is winter and the element that owns the season is Water."
          },
          {
            "p": "When the branch of the birth day is 亥, this character is the spouse position. Below you can see which stems this branch holds and what they are to the day stem."
          }
        ]
      },
      {
        "title": "The stems this branch holds (hidden stems)",
        "blocks": [
          {
            "p": "A branch is one visible character but holds stems inside. The share is how the thirty days of the branch are divided among the stems, and the principal stem is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of 亥",
              "head": [
                "Stem",
                "Element and polarity",
                "Position",
                "Share"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "Earth Yang",
                  "residual (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Yang Wood (甲)",
                  "Wood Yang",
                  "middle (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang",
                  "principal (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The strength of the five elements when the month branch is 亥",
        "blocks": [
          {
            "p": "When the branch of the birth month is 亥, each element gets a state (Wang, Sang, Hyu, Su, Sa), and that state becomes the multiplier applied to its strength."
          },
          {
            "table": {
              "caption": "The element states for month branch 亥 (winter)",
              "head": [
                "Element",
                "State",
                "Multiplier"
              ],
              "rows": [
                [
                  "Wood",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Fire",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Earth",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Water",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The Ten Gods by day stem",
        "blocks": [
          {
            "p": "The same hidden stems of 亥 become different Ten Gods depending on the day stem. When 亥 is the day branch, this table is the reading of the spouse position."
          },
          {
            "table": {
              "caption": "What the hidden stems of 亥 are to each day stem",
              "head": [
                "Day stem",
                "Yang Earth (戊) — residual (餘氣)",
                "Yang Wood (甲) — middle (中氣)",
                "Yang Water (壬) — principal (本氣)"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Windfall (偏財)",
                  "Companion (比肩)",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Wood (乙)",
                  "Steady Wealth (正財)",
                  "Rival (劫財)",
                  "Nurture (正印)"
                ],
                [
                  "Yang Fire (丙)",
                  "Expression (食神)",
                  "Unconventional Support (偏印)",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Fire (丁)",
                  "Disruptor (傷官)",
                  "Nurture (正印)",
                  "Authority (正官)"
                ],
                [
                  "Yang Earth (戊)",
                  "Companion (比肩)",
                  "Challenger (偏官)",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Earth (己)",
                  "Rival (劫財)",
                  "Authority (正官)",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Metal (庚)",
                  "Unconventional Support (偏印)",
                  "Windfall (偏財)",
                  "Expression (食神)"
                ],
                [
                  "Yin Metal (辛)",
                  "Nurture (正印)",
                  "Steady Wealth (正財)",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Water (壬)",
                  "Challenger (偏官)",
                  "Expression (食神)",
                  "Companion (比肩)"
                ],
                [
                  "Yin Water (癸)",
                  "Authority (正官)",
                  "Disruptor (傷官)",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One branch does not settle a person. The same branch reads differently depending on the day stem and the month branch.",
              "Relationships between branches such as harmony, clash and discord are not covered here."
            ]
          },
          {
            "p": "The relationships between branches are in [the twelve-branch chart](/guide/branches), and its meaning as a zodiac animal is in [where the zodiac sits in a saju](/guide/zodiac). Other branches: [子 (Rat)](/guide/branch-ja) · [丑 (Ox)](/guide/branch-chuk) · [寅 (Tiger)](/guide/branch-in) · [卯 (Rabbit)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Snake)](/guide/branch-sa) · [午 (Horse)](/guide/branch-o) · [未 (Sheep)](/guide/branch-mi) · [申 (Monkey)](/guide/branch-sin) · [酉 (Rooster)](/guide/branch-yu) · [戌 (Dog)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Day pillars",
    "title": "The 甲子 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 甲子 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "甲子 is day pillar number 1 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 甲子, the day stem is 甲 (Wood, Yang) and the day branch is 子 (the Rat). In the sixty-year cycle it is the combination number 1."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 甲 \"Yang Wood (甲)\", and the line the result screen shows is: \"A tall tree growing straight. Once the direction is set it does not waver, and it would rather endure than bend.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 子 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 甲, the stems that 子 holds are as follows. The principal stem (癸) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 甲子",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 甲"
              ],
              "rows": [
                [
                  "Yang Water (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Water (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Nurture (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 甲 as the day stem, Steady Wealth is 己 and Authority is 辛."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 己. 己 is not held inside 子."
          },
          {
            "p": "For women, the spouse position (Authority) is 辛. 辛 is not held inside 子."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [癸亥](/guide/pillar-gye-hae) and the next is [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "It is made of [Yang Wood (甲)](/guide/stem-gap) and [子 (Rat)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Day pillars",
    "title": "The 乙丑 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 乙丑 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "乙丑 is day pillar number 2 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 乙丑, the day stem is 乙 (Wood, Yin) and the day branch is 丑 (the Ox). In the sixty-year cycle it is the combination number 2."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 乙 \"Yin Wood (乙)\", and the line the result screen shows is: \"A vine — flexible grass. It bends with circumstance to keep moving, and it does not snap.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 丑 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 乙, the stems that 丑 holds are as follows. The principal stem (己) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 乙丑",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 乙"
              ],
              "rows": [
                [
                  "Yin Water (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Metal (辛)",
                  "middle (中氣)",
                  "{hidChukJung}",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Earth (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Windfall (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 乙 as the day stem, Steady Wealth is 戊 and Authority is 庚."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 戊. 戊 is not held inside 丑."
          },
          {
            "p": "For women, the spouse position (Authority) is 庚. 庚 is not held inside 丑."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [甲子](/guide/pillar-gap-ja) and the next is [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "It is made of [Yin Wood (乙)](/guide/stem-eul) and [丑 (Ox)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Day pillars",
    "title": "The 丙寅 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丙寅 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丙寅 is day pillar number 3 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丙寅, the day stem is 丙 (Fire, Yang) and the day branch is 寅 (the Tiger). In the sixty-year cycle it is the combination number 3."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丙 \"Yang Fire (丙)\", and the line the result screen shows is: \"The midday sun. Feelings show plainly, the room brightens, and stepping forward comes naturally.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 寅 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丙, the stems that 寅 holds are as follows. The principal stem (甲) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丙寅",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丙"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Expression (食神)"
                ],
                [
                  "Yang Fire (丙)",
                  "middle (中氣)",
                  "{hidInJung}",
                  "Companion (比肩)"
                ],
                [
                  "Yang Wood (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Unconventional Support (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丙 as the day stem, Steady Wealth is 辛 and Authority is 癸."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 辛. 辛 is not held inside 寅."
          },
          {
            "p": "For women, the spouse position (Authority) is 癸. 癸 is not held inside 寅."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [乙丑](/guide/pillar-eul-chuk) and the next is [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "It is made of [Yang Fire (丙)](/guide/stem-byeong) and [寅 (Tiger)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Day pillars",
    "title": "The 丁卯 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丁卯 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丁卯 is day pillar number 4 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丁卯, the day stem is 丁 (Fire, Yin) and the day branch is 卯 (the Rabbit). In the sixty-year cycle it is the combination number 4."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丁 \"Yin Fire (丁)\", and the line the result screen shows is: \"Candlelight. It burns quietly and long, and warms those closest first.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 卯 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丁, the stems that 卯 holds are as follows. The principal stem (乙) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丁卯",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丁"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Nurture (正印)"
                ],
                [
                  "Yin Wood (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Unconventional Support (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丁 as the day stem, Steady Wealth is 庚 and Authority is 壬."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 庚. 庚 is not held inside 卯."
          },
          {
            "p": "For women, the spouse position (Authority) is 壬. 壬 is not held inside 卯."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丙寅](/guide/pillar-byeong-in) and the next is [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "It is made of [Yin Fire (丁)](/guide/stem-jeong) and [卯 (Rabbit)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Day pillars",
    "title": "The 戊辰 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 戊辰 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "戊辰 is day pillar number 5 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 戊辰, the day stem is 戊 (Earth, Yang) and the day branch is 辰 (the Dragon). In the sixty-year cycle it is the combination number 5."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 戊 \"Yang Earth (戊)\", and the line the result screen shows is: \"Open ground and mountains. Hard to shake and easy to lean on, though slow to change a decision once made.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 辰 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 戊, the stems that 辰 holds are as follows. The principal stem (戊) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 戊辰",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 戊"
              ],
              "rows": [
                [
                  "Yin Wood (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Authority (正官)"
                ],
                [
                  "Yin Water (癸)",
                  "middle (中氣)",
                  "{hidJinJung}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Earth (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Companion (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 戊 as the day stem, Steady Wealth is 癸 and Authority is 乙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 癸. 癸 is held inside 辰 (middle (中氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 乙. 乙 is held inside 辰 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丁卯](/guide/pillar-jeong-myo) and the next is [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "It is made of [Yang Earth (戊)](/guide/stem-mu) and [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Day pillars",
    "title": "The 己巳 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 己巳 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "己巳 is day pillar number 6 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 己巳, the day stem is 己 (Earth, Yin) and the day branch is 巳 (the Snake). In the sixty-year cycle it is the combination number 6."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 己 \"Yin Earth (己)\", and the line the result screen shows is: \"Field soil. It takes in whatever comes and grows it, tending rather than displaying.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 巳 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 己, the stems that 巳 holds are as follows. The principal stem (丙) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 己巳",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 己"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Yang Metal (庚)",
                  "middle (中氣)",
                  "{hidSaJung}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Fire (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Nurture (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 己 as the day stem, Steady Wealth is 壬 and Authority is 甲."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 壬. 壬 is not held inside 巳."
          },
          {
            "p": "For women, the spouse position (Authority) is 甲. 甲 is not held inside 巳."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [戊辰](/guide/pillar-mu-jin) and the next is [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "It is made of [Yin Earth (己)](/guide/stem-gi) and [巳 (Snake)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Day pillars",
    "title": "The 庚午 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 庚午 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "庚午 is day pillar number 7 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 庚午, the day stem is 庚 (Metal, Yang) and the day branch is 午 (the Horse). In the sixty-year cycle it is the combination number 7."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 庚 \"Yang Metal (庚)\", and the line the result screen shows is: \"Unworked iron. Decisive and clear-cut, with little patience for things left hanging.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 午 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 庚, the stems that 午 holds are as follows. The principal stem (丁) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 庚午",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 庚"
              ],
              "rows": [
                [
                  "Yang Fire (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Earth (己)",
                  "middle (中氣)",
                  "{hidOJung}",
                  "Nurture (正印)"
                ],
                [
                  "Yin Fire (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Authority (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 庚 as the day stem, Steady Wealth is 乙 and Authority is 丁."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 乙. 乙 is not held inside 午."
          },
          {
            "p": "For women, the spouse position (Authority) is 丁. 丁 is held inside 午 (principal (本氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [己巳](/guide/pillar-gi-sa) and the next is [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "It is made of [Yang Metal (庚)](/guide/stem-gyeong) and [午 (Horse)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Day pillars",
    "title": "The 辛未 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 辛未 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "辛未 is day pillar number 8 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 辛未, the day stem is 辛 (Metal, Yin) and the day branch is 未 (the Sheep). In the sixty-year cycle it is the combination number 8."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 辛 \"Yin Metal (辛)\", and the line the result screen shows is: \"A cut gem. Fine-grained taste and high standards; sloppiness is hard to let pass.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 未 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 辛, the stems that 未 holds are as follows. The principal stem (己) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 辛未",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 辛"
              ],
              "rows": [
                [
                  "Yin Fire (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Wood (乙)",
                  "middle (中氣)",
                  "{hidMiJung}",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Earth (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Unconventional Support (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 辛 as the day stem, Steady Wealth is 甲 and Authority is 丙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 甲. 甲 is not held inside 未."
          },
          {
            "p": "For women, the spouse position (Authority) is 丙. 丙 is not held inside 未."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [庚午](/guide/pillar-gyeong-o) and the next is [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "It is made of [Yin Metal (辛)](/guide/stem-sin) and [未 (Sheep)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Day pillars",
    "title": "The 壬申 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 壬申 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "壬申 is day pillar number 9 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 壬申, the day stem is 壬 (Water, Yang) and the day branch is 申 (the Monkey). In the sixty-year cycle it is the combination number 9."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 壬 \"Yang Water (壬)\", and the line the result screen shows is: \"River and sea. Broad in outlook, with an eye for how things are flowing.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 申 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 壬, the stems that 申 holds are as follows. The principal stem (庚) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 壬申",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 壬"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Water (壬)",
                  "middle (中氣)",
                  "{hidSinJung}",
                  "Companion (比肩)"
                ],
                [
                  "Yang Metal (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Unconventional Support (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 壬 as the day stem, Steady Wealth is 丁 and Authority is 己."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丁. 丁 is not held inside 申."
          },
          {
            "p": "For women, the spouse position (Authority) is 己. 己 is not held inside 申."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [辛未](/guide/pillar-sin-mi) and the next is [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "It is made of [Yang Water (壬)](/guide/stem-im) and [申 (Monkey)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Day pillars",
    "title": "The 癸酉 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 癸酉 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "癸酉 is day pillar number 10 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 癸酉, the day stem is 癸 (Water, Yin) and the day branch is 酉 (the Rooster). In the sixty-year cycle it is the combination number 10."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 癸 \"Yin Water (癸)\", and the line the result screen shows is: \"Dew and rain. It seeps in quietly and reads the mood before the words.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 酉 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 癸, the stems that 酉 holds are as follows. The principal stem (辛) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 癸酉",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 癸"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Nurture (正印)"
                ],
                [
                  "Yin Metal (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Unconventional Support (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 癸 as the day stem, Steady Wealth is 丙 and Authority is 戊."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丙. 丙 is not held inside 酉."
          },
          {
            "p": "For women, the spouse position (Authority) is 戊. 戊 is not held inside 酉."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [壬申](/guide/pillar-im-sin) and the next is [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "It is made of [Yin Water (癸)](/guide/stem-gye) and [酉 (Rooster)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Day pillars",
    "title": "The 甲戌 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 甲戌 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "甲戌 is day pillar number 11 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 甲戌, the day stem is 甲 (Wood, Yang) and the day branch is 戌 (the Dog). In the sixty-year cycle it is the combination number 11."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 甲 \"Yang Wood (甲)\", and the line the result screen shows is: \"A tall tree growing straight. Once the direction is set it does not waver, and it would rather endure than bend.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 戌 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 甲, the stems that 戌 holds are as follows. The principal stem (戊) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 甲戌",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 甲"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Authority (正官)"
                ],
                [
                  "Yin Fire (丁)",
                  "middle (中氣)",
                  "{hidSulJung}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Earth (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Windfall (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 甲 as the day stem, Steady Wealth is 己 and Authority is 辛."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 己. 己 is not held inside 戌."
          },
          {
            "p": "For women, the spouse position (Authority) is 辛. 辛 is held inside 戌 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [癸酉](/guide/pillar-gye-yu) and the next is [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "It is made of [Yang Wood (甲)](/guide/stem-gap) and [戌 (Dog)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Day pillars",
    "title": "The 乙亥 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 乙亥 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "乙亥 is day pillar number 12 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 乙亥, the day stem is 乙 (Wood, Yin) and the day branch is 亥 (the Pig). In the sixty-year cycle it is the combination number 12."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 乙 \"Yin Wood (乙)\", and the line the result screen shows is: \"A vine — flexible grass. It bends with circumstance to keep moving, and it does not snap.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 亥 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 乙, the stems that 亥 holds are as follows. The principal stem (壬) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 乙亥",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 乙"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Wood (甲)",
                  "middle (中氣)",
                  "{hidHaeJung}",
                  "Rival (劫財)"
                ],
                [
                  "Yang Water (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Nurture (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 乙 as the day stem, Steady Wealth is 戊 and Authority is 庚."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 戊. 戊 is held inside 亥 (residual (餘氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 庚. 庚 is not held inside 亥."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [甲戌](/guide/pillar-gap-sul) and the next is [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "It is made of [Yin Wood (乙)](/guide/stem-eul) and [亥 (Pig)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Day pillars",
    "title": "The 丙子 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丙子 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丙子 is day pillar number 13 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丙子, the day stem is 丙 (Fire, Yang) and the day branch is 子 (the Rat). In the sixty-year cycle it is the combination number 13."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丙 \"Yang Fire (丙)\", and the line the result screen shows is: \"The midday sun. Feelings show plainly, the room brightens, and stepping forward comes naturally.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 子 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丙, the stems that 子 holds are as follows. The principal stem (癸) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丙子",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丙"
              ],
              "rows": [
                [
                  "Yang Water (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Water (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Authority (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丙 as the day stem, Steady Wealth is 辛 and Authority is 癸."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 辛. 辛 is not held inside 子."
          },
          {
            "p": "For women, the spouse position (Authority) is 癸. 癸 is held inside 子 (principal (本氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [乙亥](/guide/pillar-eul-hae) and the next is [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "It is made of [Yang Fire (丙)](/guide/stem-byeong) and [子 (Rat)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Day pillars",
    "title": "The 丁丑 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丁丑 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丁丑 is day pillar number 14 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丁丑, the day stem is 丁 (Fire, Yin) and the day branch is 丑 (the Ox). In the sixty-year cycle it is the combination number 14."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丁 \"Yin Fire (丁)\", and the line the result screen shows is: \"Candlelight. It burns quietly and long, and warms those closest first.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 丑 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丁, the stems that 丑 holds are as follows. The principal stem (己) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丁丑",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丁"
              ],
              "rows": [
                [
                  "Yin Water (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Metal (辛)",
                  "middle (中氣)",
                  "{hidChukJung}",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Earth (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丁 as the day stem, Steady Wealth is 庚 and Authority is 壬."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 庚. 庚 is not held inside 丑."
          },
          {
            "p": "For women, the spouse position (Authority) is 壬. 壬 is not held inside 丑."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丙子](/guide/pillar-byeong-ja) and the next is [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "It is made of [Yin Fire (丁)](/guide/stem-jeong) and [丑 (Ox)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Day pillars",
    "title": "The 戊寅 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 戊寅 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "戊寅 is day pillar number 15 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 戊寅, the day stem is 戊 (Earth, Yang) and the day branch is 寅 (the Tiger). In the sixty-year cycle it is the combination number 15."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 戊 \"Yang Earth (戊)\", and the line the result screen shows is: \"Open ground and mountains. Hard to shake and easy to lean on, though slow to change a decision once made.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 寅 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 戊, the stems that 寅 holds are as follows. The principal stem (甲) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 戊寅",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 戊"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Companion (比肩)"
                ],
                [
                  "Yang Fire (丙)",
                  "middle (中氣)",
                  "{hidInJung}",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Wood (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 戊 as the day stem, Steady Wealth is 癸 and Authority is 乙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 癸. 癸 is not held inside 寅."
          },
          {
            "p": "For women, the spouse position (Authority) is 乙. 乙 is not held inside 寅."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丁丑](/guide/pillar-jeong-chuk) and the next is [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "It is made of [Yang Earth (戊)](/guide/stem-mu) and [寅 (Tiger)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Day pillars",
    "title": "The 己卯 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 己卯 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "己卯 is day pillar number 16 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 己卯, the day stem is 己 (Earth, Yin) and the day branch is 卯 (the Rabbit). In the sixty-year cycle it is the combination number 16."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 己 \"Yin Earth (己)\", and the line the result screen shows is: \"Field soil. It takes in whatever comes and grows it, tending rather than displaying.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 卯 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 己, the stems that 卯 holds are as follows. The principal stem (乙) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 己卯",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 己"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Authority (正官)"
                ],
                [
                  "Yin Wood (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 己 as the day stem, Steady Wealth is 壬 and Authority is 甲."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 壬. 壬 is not held inside 卯."
          },
          {
            "p": "For women, the spouse position (Authority) is 甲. 甲 is held inside 卯 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [戊寅](/guide/pillar-mu-in) and the next is [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "It is made of [Yin Earth (己)](/guide/stem-gi) and [卯 (Rabbit)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Day pillars",
    "title": "The 庚辰 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 庚辰 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "庚辰 is day pillar number 17 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 庚辰, the day stem is 庚 (Metal, Yang) and the day branch is 辰 (the Dragon). In the sixty-year cycle it is the combination number 17."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 庚 \"Yang Metal (庚)\", and the line the result screen shows is: \"Unworked iron. Decisive and clear-cut, with little patience for things left hanging.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 辰 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 庚, the stems that 辰 holds are as follows. The principal stem (戊) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 庚辰",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 庚"
              ],
              "rows": [
                [
                  "Yin Wood (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Water (癸)",
                  "middle (中氣)",
                  "{hidJinJung}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Earth (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Unconventional Support (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 庚 as the day stem, Steady Wealth is 乙 and Authority is 丁."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 乙. 乙 is held inside 辰 (residual (餘氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 丁. 丁 is not held inside 辰."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [己卯](/guide/pillar-gi-myo) and the next is [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "It is made of [Yang Metal (庚)](/guide/stem-gyeong) and [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Day pillars",
    "title": "The 辛巳 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 辛巳 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "辛巳 is day pillar number 18 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 辛巳, the day stem is 辛 (Metal, Yin) and the day branch is 巳 (the Snake). In the sixty-year cycle it is the combination number 18."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 辛 \"Yin Metal (辛)\", and the line the result screen shows is: \"A cut gem. Fine-grained taste and high standards; sloppiness is hard to let pass.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 巳 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 辛, the stems that 巳 holds are as follows. The principal stem (丙) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 辛巳",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 辛"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Nurture (正印)"
                ],
                [
                  "Yang Metal (庚)",
                  "middle (中氣)",
                  "{hidSaJung}",
                  "Rival (劫財)"
                ],
                [
                  "Yang Fire (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Authority (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 辛 as the day stem, Steady Wealth is 甲 and Authority is 丙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 甲. 甲 is not held inside 巳."
          },
          {
            "p": "For women, the spouse position (Authority) is 丙. 丙 is held inside 巳 (principal (本氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [庚辰](/guide/pillar-gyeong-jin) and the next is [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "It is made of [Yin Metal (辛)](/guide/stem-sin) and [巳 (Snake)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Day pillars",
    "title": "The 壬午 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 壬午 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "壬午 is day pillar number 19 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 壬午, the day stem is 壬 (Water, Yang) and the day branch is 午 (the Horse). In the sixty-year cycle it is the combination number 19."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 壬 \"Yang Water (壬)\", and the line the result screen shows is: \"River and sea. Broad in outlook, with an eye for how things are flowing.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 午 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 壬, the stems that 午 holds are as follows. The principal stem (丁) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 壬午",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 壬"
              ],
              "rows": [
                [
                  "Yang Fire (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Earth (己)",
                  "middle (中氣)",
                  "{hidOJung}",
                  "Authority (正官)"
                ],
                [
                  "Yin Fire (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Steady Wealth (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 壬 as the day stem, Steady Wealth is 丁 and Authority is 己."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丁. 丁 is held inside 午 (principal (本氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 己. 己 is held inside 午 (middle (中氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [辛巳](/guide/pillar-sin-sa) and the next is [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "It is made of [Yang Water (壬)](/guide/stem-im) and [午 (Horse)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Day pillars",
    "title": "The 癸未 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 癸未 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "癸未 is day pillar number 20 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 癸未, the day stem is 癸 (Water, Yin) and the day branch is 未 (the Sheep). In the sixty-year cycle it is the combination number 20."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 癸 \"Yin Water (癸)\", and the line the result screen shows is: \"Dew and rain. It seeps in quietly and reads the mood before the words.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 未 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 癸, the stems that 未 holds are as follows. The principal stem (己) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 癸未",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 癸"
              ],
              "rows": [
                [
                  "Yin Fire (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Wood (乙)",
                  "middle (中氣)",
                  "{hidMiJung}",
                  "Expression (食神)"
                ],
                [
                  "Yin Earth (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 癸 as the day stem, Steady Wealth is 丙 and Authority is 戊."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丙. 丙 is not held inside 未."
          },
          {
            "p": "For women, the spouse position (Authority) is 戊. 戊 is not held inside 未."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [壬午](/guide/pillar-im-o) and the next is [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "It is made of [Yin Water (癸)](/guide/stem-gye) and [未 (Sheep)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Day pillars",
    "title": "The 甲申 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 甲申 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "甲申 is day pillar number 21 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 甲申, the day stem is 甲 (Wood, Yang) and the day branch is 申 (the Monkey). In the sixty-year cycle it is the combination number 21."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 甲 \"Yang Wood (甲)\", and the line the result screen shows is: \"A tall tree growing straight. Once the direction is set it does not waver, and it would rather endure than bend.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 申 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 甲, the stems that 申 holds are as follows. The principal stem (庚) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 甲申",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 甲"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Water (壬)",
                  "middle (中氣)",
                  "{hidSinJung}",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Metal (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 甲 as the day stem, Steady Wealth is 己 and Authority is 辛."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 己. 己 is not held inside 申."
          },
          {
            "p": "For women, the spouse position (Authority) is 辛. 辛 is not held inside 申."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [癸未](/guide/pillar-gye-mi) and the next is [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "It is made of [Yang Wood (甲)](/guide/stem-gap) and [申 (Monkey)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Day pillars",
    "title": "The 乙酉 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 乙酉 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "乙酉 is day pillar number 22 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 乙酉, the day stem is 乙 (Wood, Yin) and the day branch is 酉 (the Rooster). In the sixty-year cycle it is the combination number 22."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 乙 \"Yin Wood (乙)\", and the line the result screen shows is: \"A vine — flexible grass. It bends with circumstance to keep moving, and it does not snap.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 酉 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 乙, the stems that 酉 holds are as follows. The principal stem (辛) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 乙酉",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 乙"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Authority (正官)"
                ],
                [
                  "Yin Metal (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 乙 as the day stem, Steady Wealth is 戊 and Authority is 庚."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 戊. 戊 is not held inside 酉."
          },
          {
            "p": "For women, the spouse position (Authority) is 庚. 庚 is held inside 酉 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [甲申](/guide/pillar-gap-sin) and the next is [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "It is made of [Yin Wood (乙)](/guide/stem-eul) and [酉 (Rooster)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Day pillars",
    "title": "The 丙戌 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丙戌 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丙戌 is day pillar number 23 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丙戌, the day stem is 丙 (Fire, Yang) and the day branch is 戌 (the Dog). In the sixty-year cycle it is the combination number 23."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丙 \"Yang Fire (丙)\", and the line the result screen shows is: \"The midday sun. Feelings show plainly, the room brightens, and stepping forward comes naturally.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 戌 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丙, the stems that 戌 holds are as follows. The principal stem (戊) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丙戌",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丙"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Fire (丁)",
                  "middle (中氣)",
                  "{hidSulJung}",
                  "Rival (劫財)"
                ],
                [
                  "Yang Earth (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丙 as the day stem, Steady Wealth is 辛 and Authority is 癸."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 辛. 辛 is held inside 戌 (residual (餘氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 癸. 癸 is not held inside 戌."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [乙酉](/guide/pillar-eul-yu) and the next is [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "It is made of [Yang Fire (丙)](/guide/stem-byeong) and [戌 (Dog)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Day pillars",
    "title": "The 丁亥 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丁亥 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丁亥 is day pillar number 24 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丁亥, the day stem is 丁 (Fire, Yin) and the day branch is 亥 (the Pig). In the sixty-year cycle it is the combination number 24."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丁 \"Yin Fire (丁)\", and the line the result screen shows is: \"Candlelight. It burns quietly and long, and warms those closest first.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 亥 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丁, the stems that 亥 holds are as follows. The principal stem (壬) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丁亥",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丁"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Wood (甲)",
                  "middle (中氣)",
                  "{hidHaeJung}",
                  "Nurture (正印)"
                ],
                [
                  "Yang Water (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Authority (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丁 as the day stem, Steady Wealth is 庚 and Authority is 壬."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 庚. 庚 is not held inside 亥."
          },
          {
            "p": "For women, the spouse position (Authority) is 壬. 壬 is held inside 亥 (principal (本氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丙戌](/guide/pillar-byeong-sul) and the next is [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "It is made of [Yin Fire (丁)](/guide/stem-jeong) and [亥 (Pig)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Day pillars",
    "title": "The 戊子 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 戊子 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "戊子 is day pillar number 25 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 戊子, the day stem is 戊 (Earth, Yang) and the day branch is 子 (the Rat). In the sixty-year cycle it is the combination number 25."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 戊 \"Yang Earth (戊)\", and the line the result screen shows is: \"Open ground and mountains. Hard to shake and easy to lean on, though slow to change a decision once made.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 子 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 戊, the stems that 子 holds are as follows. The principal stem (癸) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 戊子",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 戊"
              ],
              "rows": [
                [
                  "Yang Water (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Water (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Steady Wealth (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 戊 as the day stem, Steady Wealth is 癸 and Authority is 乙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 癸. 癸 is held inside 子 (principal (本氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 乙. 乙 is not held inside 子."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丁亥](/guide/pillar-jeong-hae) and the next is [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "It is made of [Yang Earth (戊)](/guide/stem-mu) and [子 (Rat)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Day pillars",
    "title": "The 己丑 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 己丑 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "己丑 is day pillar number 26 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 己丑, the day stem is 己 (Earth, Yin) and the day branch is 丑 (the Ox). In the sixty-year cycle it is the combination number 26."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 己 \"Yin Earth (己)\", and the line the result screen shows is: \"Field soil. It takes in whatever comes and grows it, tending rather than displaying.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 丑 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 己, the stems that 丑 holds are as follows. The principal stem (己) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 己丑",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 己"
              ],
              "rows": [
                [
                  "Yin Water (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Windfall (偏財)"
                ],
                [
                  "Yin Metal (辛)",
                  "middle (中氣)",
                  "{hidChukJung}",
                  "Expression (食神)"
                ],
                [
                  "Yin Earth (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Companion (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 己 as the day stem, Steady Wealth is 壬 and Authority is 甲."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 壬. 壬 is not held inside 丑."
          },
          {
            "p": "For women, the spouse position (Authority) is 甲. 甲 is not held inside 丑."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [戊子](/guide/pillar-mu-ja) and the next is [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "It is made of [Yin Earth (己)](/guide/stem-gi) and [丑 (Ox)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Day pillars",
    "title": "The 庚寅 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 庚寅 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "庚寅 is day pillar number 27 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 庚寅, the day stem is 庚 (Metal, Yang) and the day branch is 寅 (the Tiger). In the sixty-year cycle it is the combination number 27."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 庚 \"Yang Metal (庚)\", and the line the result screen shows is: \"Unworked iron. Decisive and clear-cut, with little patience for things left hanging.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 寅 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 庚, the stems that 寅 holds are as follows. The principal stem (甲) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 庚寅",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 庚"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Fire (丙)",
                  "middle (中氣)",
                  "{hidInJung}",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Wood (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Windfall (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 庚 as the day stem, Steady Wealth is 乙 and Authority is 丁."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 乙. 乙 is not held inside 寅."
          },
          {
            "p": "For women, the spouse position (Authority) is 丁. 丁 is not held inside 寅."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [己丑](/guide/pillar-gi-chuk) and the next is [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "It is made of [Yang Metal (庚)](/guide/stem-gyeong) and [寅 (Tiger)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Day pillars",
    "title": "The 辛卯 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 辛卯 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "辛卯 is day pillar number 28 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 辛卯, the day stem is 辛 (Metal, Yin) and the day branch is 卯 (the Rabbit). In the sixty-year cycle it is the combination number 28."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 辛 \"Yin Metal (辛)\", and the line the result screen shows is: \"A cut gem. Fine-grained taste and high standards; sloppiness is hard to let pass.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 卯 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 辛, the stems that 卯 holds are as follows. The principal stem (乙) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 辛卯",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 辛"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Wood (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Windfall (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 辛 as the day stem, Steady Wealth is 甲 and Authority is 丙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 甲. 甲 is held inside 卯 (residual (餘氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 丙. 丙 is not held inside 卯."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [庚寅](/guide/pillar-gyeong-in) and the next is [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "It is made of [Yin Metal (辛)](/guide/stem-sin) and [卯 (Rabbit)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Day pillars",
    "title": "The 壬辰 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 壬辰 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "壬辰 is day pillar number 29 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 壬辰, the day stem is 壬 (Water, Yang) and the day branch is 辰 (the Dragon). In the sixty-year cycle it is the combination number 29."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 壬 \"Yang Water (壬)\", and the line the result screen shows is: \"River and sea. Broad in outlook, with an eye for how things are flowing.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 辰 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 壬, the stems that 辰 holds are as follows. The principal stem (戊) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 壬辰",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 壬"
              ],
              "rows": [
                [
                  "Yin Wood (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Water (癸)",
                  "middle (中氣)",
                  "{hidJinJung}",
                  "Rival (劫財)"
                ],
                [
                  "Yang Earth (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 壬 as the day stem, Steady Wealth is 丁 and Authority is 己."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丁. 丁 is not held inside 辰."
          },
          {
            "p": "For women, the spouse position (Authority) is 己. 己 is not held inside 辰."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [辛卯](/guide/pillar-sin-myo) and the next is [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "It is made of [Yang Water (壬)](/guide/stem-im) and [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Day pillars",
    "title": "The 癸巳 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 癸巳 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "癸巳 is day pillar number 30 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 癸巳, the day stem is 癸 (Water, Yin) and the day branch is 巳 (the Snake). In the sixty-year cycle it is the combination number 30."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 癸 \"Yin Water (癸)\", and the line the result screen shows is: \"Dew and rain. It seeps in quietly and reads the mood before the words.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 巳 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 癸, the stems that 巳 holds are as follows. The principal stem (丙) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 癸巳",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 癸"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Authority (正官)"
                ],
                [
                  "Yang Metal (庚)",
                  "middle (中氣)",
                  "{hidSaJung}",
                  "Nurture (正印)"
                ],
                [
                  "Yang Fire (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Steady Wealth (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 癸 as the day stem, Steady Wealth is 丙 and Authority is 戊."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丙. 丙 is held inside 巳 (principal (本氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 戊. 戊 is held inside 巳 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [壬辰](/guide/pillar-im-jin) and the next is [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "It is made of [Yin Water (癸)](/guide/stem-gye) and [巳 (Snake)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Day pillars",
    "title": "The 甲午 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 甲午 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "甲午 is day pillar number 31 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 甲午, the day stem is 甲 (Wood, Yang) and the day branch is 午 (the Horse). In the sixty-year cycle it is the combination number 31."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 甲 \"Yang Wood (甲)\", and the line the result screen shows is: \"A tall tree growing straight. Once the direction is set it does not waver, and it would rather endure than bend.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 午 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 甲, the stems that 午 holds are as follows. The principal stem (丁) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 甲午",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 甲"
              ],
              "rows": [
                [
                  "Yang Fire (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Expression (食神)"
                ],
                [
                  "Yin Earth (己)",
                  "middle (中氣)",
                  "{hidOJung}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Fire (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Disruptor (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 甲 as the day stem, Steady Wealth is 己 and Authority is 辛."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 己. 己 is held inside 午 (middle (中氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 辛. 辛 is not held inside 午."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [癸巳](/guide/pillar-gye-sa) and the next is [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "It is made of [Yang Wood (甲)](/guide/stem-gap) and [午 (Horse)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Day pillars",
    "title": "The 乙未 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 乙未 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "乙未 is day pillar number 32 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 乙未, the day stem is 乙 (Wood, Yin) and the day branch is 未 (the Sheep). In the sixty-year cycle it is the combination number 32."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 乙 \"Yin Wood (乙)\", and the line the result screen shows is: \"A vine — flexible grass. It bends with circumstance to keep moving, and it does not snap.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 未 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 乙, the stems that 未 holds are as follows. The principal stem (己) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 乙未",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 乙"
              ],
              "rows": [
                [
                  "Yin Fire (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Expression (食神)"
                ],
                [
                  "Yin Wood (乙)",
                  "middle (中氣)",
                  "{hidMiJung}",
                  "Companion (比肩)"
                ],
                [
                  "Yin Earth (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Windfall (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 乙 as the day stem, Steady Wealth is 戊 and Authority is 庚."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 戊. 戊 is not held inside 未."
          },
          {
            "p": "For women, the spouse position (Authority) is 庚. 庚 is not held inside 未."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [甲午](/guide/pillar-gap-o) and the next is [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "It is made of [Yin Wood (乙)](/guide/stem-eul) and [未 (Sheep)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Day pillars",
    "title": "The 丙申 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丙申 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丙申 is day pillar number 33 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丙申, the day stem is 丙 (Fire, Yang) and the day branch is 申 (the Monkey). In the sixty-year cycle it is the combination number 33."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丙 \"Yang Fire (丙)\", and the line the result screen shows is: \"The midday sun. Feelings show plainly, the room brightens, and stepping forward comes naturally.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 申 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丙, the stems that 申 holds are as follows. The principal stem (庚) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丙申",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丙"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Expression (食神)"
                ],
                [
                  "Yang Water (壬)",
                  "middle (中氣)",
                  "{hidSinJung}",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Metal (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Windfall (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丙 as the day stem, Steady Wealth is 辛 and Authority is 癸."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 辛. 辛 is not held inside 申."
          },
          {
            "p": "For women, the spouse position (Authority) is 癸. 癸 is not held inside 申."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [乙未](/guide/pillar-eul-mi) and the next is [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "It is made of [Yang Fire (丙)](/guide/stem-byeong) and [申 (Monkey)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Day pillars",
    "title": "The 丁酉 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丁酉 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丁酉 is day pillar number 34 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丁酉, the day stem is 丁 (Fire, Yin) and the day branch is 酉 (the Rooster). In the sixty-year cycle it is the combination number 34."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丁 \"Yin Fire (丁)\", and the line the result screen shows is: \"Candlelight. It burns quietly and long, and warms those closest first.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 酉 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丁, the stems that 酉 holds are as follows. The principal stem (辛) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丁酉",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丁"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yin Metal (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Windfall (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丁 as the day stem, Steady Wealth is 庚 and Authority is 壬."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 庚. 庚 is held inside 酉 (residual (餘氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 壬. 壬 is not held inside 酉."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丙申](/guide/pillar-byeong-sin) and the next is [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "It is made of [Yin Fire (丁)](/guide/stem-jeong) and [酉 (Rooster)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Day pillars",
    "title": "The 戊戌 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 戊戌 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "戊戌 is day pillar number 35 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 戊戌, the day stem is 戊 (Earth, Yang) and the day branch is 戌 (the Dog). In the sixty-year cycle it is the combination number 35."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 戊 \"Yang Earth (戊)\", and the line the result screen shows is: \"Open ground and mountains. Hard to shake and easy to lean on, though slow to change a decision once made.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 戌 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 戊, the stems that 戌 holds are as follows. The principal stem (戊) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 戊戌",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 戊"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Fire (丁)",
                  "middle (中氣)",
                  "{hidSulJung}",
                  "Nurture (正印)"
                ],
                [
                  "Yang Earth (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Companion (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 戊 as the day stem, Steady Wealth is 癸 and Authority is 乙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 癸. 癸 is not held inside 戌."
          },
          {
            "p": "For women, the spouse position (Authority) is 乙. 乙 is not held inside 戌."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丁酉](/guide/pillar-jeong-yu) and the next is [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "It is made of [Yang Earth (戊)](/guide/stem-mu) and [戌 (Dog)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Day pillars",
    "title": "The 己亥 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 己亥 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "己亥 is day pillar number 36 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 己亥, the day stem is 己 (Earth, Yin) and the day branch is 亥 (the Pig). In the sixty-year cycle it is the combination number 36."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 己 \"Yin Earth (己)\", and the line the result screen shows is: \"Field soil. It takes in whatever comes and grows it, tending rather than displaying.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 亥 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 己, the stems that 亥 holds are as follows. The principal stem (壬) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 己亥",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 己"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Yang Wood (甲)",
                  "middle (中氣)",
                  "{hidHaeJung}",
                  "Authority (正官)"
                ],
                [
                  "Yang Water (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Steady Wealth (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 己 as the day stem, Steady Wealth is 壬 and Authority is 甲."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 壬. 壬 is held inside 亥 (principal (本氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 甲. 甲 is held inside 亥 (middle (中氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [戊戌](/guide/pillar-mu-sul) and the next is [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "It is made of [Yin Earth (己)](/guide/stem-gi) and [亥 (Pig)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Day pillars",
    "title": "The 庚子 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 庚子 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "庚子 is day pillar number 37 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 庚子, the day stem is 庚 (Metal, Yang) and the day branch is 子 (the Rat). In the sixty-year cycle it is the combination number 37."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 庚 \"Yang Metal (庚)\", and the line the result screen shows is: \"Unworked iron. Decisive and clear-cut, with little patience for things left hanging.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 子 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 庚, the stems that 子 holds are as follows. The principal stem (癸) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 庚子",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 庚"
              ],
              "rows": [
                [
                  "Yang Water (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Expression (食神)"
                ],
                [
                  "Yin Water (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Disruptor (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 庚 as the day stem, Steady Wealth is 乙 and Authority is 丁."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 乙. 乙 is not held inside 子."
          },
          {
            "p": "For women, the spouse position (Authority) is 丁. 丁 is not held inside 子."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [己亥](/guide/pillar-gi-hae) and the next is [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "It is made of [Yang Metal (庚)](/guide/stem-gyeong) and [子 (Rat)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Day pillars",
    "title": "The 辛丑 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 辛丑 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "辛丑 is day pillar number 38 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 辛丑, the day stem is 辛 (Metal, Yin) and the day branch is 丑 (the Ox). In the sixty-year cycle it is the combination number 38."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 辛 \"Yin Metal (辛)\", and the line the result screen shows is: \"A cut gem. Fine-grained taste and high standards; sloppiness is hard to let pass.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 丑 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 辛, the stems that 丑 holds are as follows. The principal stem (己) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 辛丑",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 辛"
              ],
              "rows": [
                [
                  "Yin Water (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Expression (食神)"
                ],
                [
                  "Yin Metal (辛)",
                  "middle (中氣)",
                  "{hidChukJung}",
                  "Companion (比肩)"
                ],
                [
                  "Yin Earth (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Unconventional Support (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 辛 as the day stem, Steady Wealth is 甲 and Authority is 丙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 甲. 甲 is not held inside 丑."
          },
          {
            "p": "For women, the spouse position (Authority) is 丙. 丙 is not held inside 丑."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [庚子](/guide/pillar-gyeong-ja) and the next is [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "It is made of [Yin Metal (辛)](/guide/stem-sin) and [丑 (Ox)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Day pillars",
    "title": "The 壬寅 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 壬寅 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "壬寅 is day pillar number 39 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 壬寅, the day stem is 壬 (Water, Yang) and the day branch is 寅 (the Tiger). In the sixty-year cycle it is the combination number 39."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 壬 \"Yang Water (壬)\", and the line the result screen shows is: \"River and sea. Broad in outlook, with an eye for how things are flowing.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 寅 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 壬, the stems that 寅 holds are as follows. The principal stem (甲) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 壬寅",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 壬"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Challenger (偏官)"
                ],
                [
                  "Yang Fire (丙)",
                  "middle (中氣)",
                  "{hidInJung}",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Wood (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 壬 as the day stem, Steady Wealth is 丁 and Authority is 己."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丁. 丁 is not held inside 寅."
          },
          {
            "p": "For women, the spouse position (Authority) is 己. 己 is not held inside 寅."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [辛丑](/guide/pillar-sin-chuk) and the next is [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "It is made of [Yang Water (壬)](/guide/stem-im) and [寅 (Tiger)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Day pillars",
    "title": "The 癸卯 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 癸卯 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "癸卯 is day pillar number 40 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 癸卯, the day stem is 癸 (Water, Yin) and the day branch is 卯 (the Rabbit). In the sixty-year cycle it is the combination number 40."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 癸 \"Yin Water (癸)\", and the line the result screen shows is: \"Dew and rain. It seeps in quietly and reads the mood before the words.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 卯 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 癸, the stems that 卯 holds are as follows. The principal stem (乙) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 癸卯",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 癸"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Wood (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 癸 as the day stem, Steady Wealth is 丙 and Authority is 戊."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丙. 丙 is not held inside 卯."
          },
          {
            "p": "For women, the spouse position (Authority) is 戊. 戊 is not held inside 卯."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [壬寅](/guide/pillar-im-in) and the next is [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "It is made of [Yin Water (癸)](/guide/stem-gye) and [卯 (Rabbit)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Day pillars",
    "title": "The 甲辰 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 甲辰 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "甲辰 is day pillar number 41 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 甲辰, the day stem is 甲 (Wood, Yang) and the day branch is 辰 (the Dragon). In the sixty-year cycle it is the combination number 41."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 甲 \"Yang Wood (甲)\", and the line the result screen shows is: \"A tall tree growing straight. Once the direction is set it does not waver, and it would rather endure than bend.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 辰 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 甲, the stems that 辰 holds are as follows. The principal stem (戊) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 甲辰",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 甲"
              ],
              "rows": [
                [
                  "Yin Wood (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Yin Water (癸)",
                  "middle (中氣)",
                  "{hidJinJung}",
                  "Nurture (正印)"
                ],
                [
                  "Yang Earth (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Windfall (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 甲 as the day stem, Steady Wealth is 己 and Authority is 辛."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 己. 己 is not held inside 辰."
          },
          {
            "p": "For women, the spouse position (Authority) is 辛. 辛 is not held inside 辰."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [癸卯](/guide/pillar-gye-myo) and the next is [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "It is made of [Yang Wood (甲)](/guide/stem-gap) and [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Day pillars",
    "title": "The 乙巳 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 乙巳 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "乙巳 is day pillar number 42 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 乙巳, the day stem is 乙 (Wood, Yin) and the day branch is 巳 (the Snake). In the sixty-year cycle it is the combination number 42."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 乙 \"Yin Wood (乙)\", and the line the result screen shows is: \"A vine — flexible grass. It bends with circumstance to keep moving, and it does not snap.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 巳 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 乙, the stems that 巳 holds are as follows. The principal stem (丙) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 乙巳",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 乙"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Metal (庚)",
                  "middle (中氣)",
                  "{hidSaJung}",
                  "Authority (正官)"
                ],
                [
                  "Yang Fire (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Disruptor (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 乙 as the day stem, Steady Wealth is 戊 and Authority is 庚."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 戊. 戊 is held inside 巳 (residual (餘氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 庚. 庚 is held inside 巳 (middle (中氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [甲辰](/guide/pillar-gap-jin) and the next is [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "It is made of [Yin Wood (乙)](/guide/stem-eul) and [巳 (Snake)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Day pillars",
    "title": "The 丙午 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丙午 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丙午 is day pillar number 43 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丙午, the day stem is 丙 (Fire, Yang) and the day branch is 午 (the Horse). In the sixty-year cycle it is the combination number 43."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丙 \"Yang Fire (丙)\", and the line the result screen shows is: \"The midday sun. Feelings show plainly, the room brightens, and stepping forward comes naturally.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 午 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丙, the stems that 午 holds are as follows. The principal stem (丁) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丙午",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丙"
              ],
              "rows": [
                [
                  "Yang Fire (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Companion (比肩)"
                ],
                [
                  "Yin Earth (己)",
                  "middle (中氣)",
                  "{hidOJung}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Fire (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丙 as the day stem, Steady Wealth is 辛 and Authority is 癸."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 辛. 辛 is not held inside 午."
          },
          {
            "p": "For women, the spouse position (Authority) is 癸. 癸 is not held inside 午."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [乙巳](/guide/pillar-eul-sa) and the next is [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "It is made of [Yang Fire (丙)](/guide/stem-byeong) and [午 (Horse)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Day pillars",
    "title": "The 丁未 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丁未 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丁未 is day pillar number 44 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丁未, the day stem is 丁 (Fire, Yin) and the day branch is 未 (the Sheep). In the sixty-year cycle it is the combination number 44."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丁 \"Yin Fire (丁)\", and the line the result screen shows is: \"Candlelight. It burns quietly and long, and warms those closest first.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 未 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丁, the stems that 未 holds are as follows. The principal stem (己) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丁未",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丁"
              ],
              "rows": [
                [
                  "Yin Fire (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Companion (比肩)"
                ],
                [
                  "Yin Wood (乙)",
                  "middle (中氣)",
                  "{hidMiJung}",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Earth (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丁 as the day stem, Steady Wealth is 庚 and Authority is 壬."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 庚. 庚 is not held inside 未."
          },
          {
            "p": "For women, the spouse position (Authority) is 壬. 壬 is not held inside 未."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丙午](/guide/pillar-byeong-o) and the next is [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "It is made of [Yin Fire (丁)](/guide/stem-jeong) and [未 (Sheep)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Day pillars",
    "title": "The 戊申 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 戊申 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "戊申 is day pillar number 45 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 戊申, the day stem is 戊 (Earth, Yang) and the day branch is 申 (the Monkey). In the sixty-year cycle it is the combination number 45."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 戊 \"Yang Earth (戊)\", and the line the result screen shows is: \"Open ground and mountains. Hard to shake and easy to lean on, though slow to change a decision once made.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 申 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 戊, the stems that 申 holds are as follows. The principal stem (庚) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 戊申",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 戊"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Companion (比肩)"
                ],
                [
                  "Yang Water (壬)",
                  "middle (中氣)",
                  "{hidSinJung}",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Metal (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 戊 as the day stem, Steady Wealth is 癸 and Authority is 乙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 癸. 癸 is not held inside 申."
          },
          {
            "p": "For women, the spouse position (Authority) is 乙. 乙 is not held inside 申."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丁未](/guide/pillar-jeong-mi) and the next is [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "It is made of [Yang Earth (戊)](/guide/stem-mu) and [申 (Monkey)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Day pillars",
    "title": "The 己酉 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 己酉 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "己酉 is day pillar number 46 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 己酉, the day stem is 己 (Earth, Yin) and the day branch is 酉 (the Rooster). In the sixty-year cycle it is the combination number 46."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 己 \"Yin Earth (己)\", and the line the result screen shows is: \"Field soil. It takes in whatever comes and grows it, tending rather than displaying.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 酉 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 己, the stems that 酉 holds are as follows. The principal stem (辛) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 己酉",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 己"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yin Metal (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 己 as the day stem, Steady Wealth is 壬 and Authority is 甲."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 壬. 壬 is not held inside 酉."
          },
          {
            "p": "For women, the spouse position (Authority) is 甲. 甲 is not held inside 酉."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [戊申](/guide/pillar-mu-sin) and the next is [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "It is made of [Yin Earth (己)](/guide/stem-gi) and [酉 (Rooster)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Day pillars",
    "title": "The 庚戌 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 庚戌 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "庚戌 is day pillar number 47 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 庚戌, the day stem is 庚 (Metal, Yang) and the day branch is 戌 (the Dog). In the sixty-year cycle it is the combination number 47."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 庚 \"Yang Metal (庚)\", and the line the result screen shows is: \"Unworked iron. Decisive and clear-cut, with little patience for things left hanging.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 戌 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 庚, the stems that 戌 holds are as follows. The principal stem (戊) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 庚戌",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 庚"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Yin Fire (丁)",
                  "middle (中氣)",
                  "{hidSulJung}",
                  "Authority (正官)"
                ],
                [
                  "Yang Earth (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Unconventional Support (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 庚 as the day stem, Steady Wealth is 乙 and Authority is 丁."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 乙. 乙 is not held inside 戌."
          },
          {
            "p": "For women, the spouse position (Authority) is 丁. 丁 is held inside 戌 (middle (中氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [己酉](/guide/pillar-gi-yu) and the next is [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "It is made of [Yang Metal (庚)](/guide/stem-gyeong) and [戌 (Dog)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Day pillars",
    "title": "The 辛亥 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 辛亥 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "辛亥 is day pillar number 48 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 辛亥, the day stem is 辛 (Metal, Yin) and the day branch is 亥 (the Pig). In the sixty-year cycle it is the combination number 48."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 辛 \"Yin Metal (辛)\", and the line the result screen shows is: \"A cut gem. Fine-grained taste and high standards; sloppiness is hard to let pass.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 亥 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 辛, the stems that 亥 holds are as follows. The principal stem (壬) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 辛亥",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 辛"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Nurture (正印)"
                ],
                [
                  "Yang Wood (甲)",
                  "middle (中氣)",
                  "{hidHaeJung}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Water (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Disruptor (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 辛 as the day stem, Steady Wealth is 甲 and Authority is 丙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 甲. 甲 is held inside 亥 (middle (中氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 丙. 丙 is not held inside 亥."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [庚戌](/guide/pillar-gyeong-sul) and the next is [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "It is made of [Yin Metal (辛)](/guide/stem-sin) and [亥 (Pig)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Day pillars",
    "title": "The 壬子 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 壬子 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "壬子 is day pillar number 49 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 壬子, the day stem is 壬 (Water, Yang) and the day branch is 子 (the Rat). In the sixty-year cycle it is the combination number 49."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 壬 \"Yang Water (壬)\", and the line the result screen shows is: \"River and sea. Broad in outlook, with an eye for how things are flowing.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 子 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 壬, the stems that 子 holds are as follows. The principal stem (癸) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 壬子",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 壬"
              ],
              "rows": [
                [
                  "Yang Water (壬)",
                  "residual (餘氣)",
                  "{hidJaYeo}",
                  "Companion (比肩)"
                ],
                [
                  "Yin Water (癸)",
                  "principal (本氣)",
                  "{hidJaBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 壬 as the day stem, Steady Wealth is 丁 and Authority is 己."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丁. 丁 is not held inside 子."
          },
          {
            "p": "For women, the spouse position (Authority) is 己. 己 is not held inside 子."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [辛亥](/guide/pillar-sin-hae) and the next is [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "It is made of [Yang Water (壬)](/guide/stem-im) and [子 (Rat)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Day pillars",
    "title": "The 癸丑 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 癸丑 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "癸丑 is day pillar number 50 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 癸丑, the day stem is 癸 (Water, Yin) and the day branch is 丑 (the Ox). In the sixty-year cycle it is the combination number 50."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 癸 \"Yin Water (癸)\", and the line the result screen shows is: \"Dew and rain. It seeps in quietly and reads the mood before the words.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 丑 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 癸, the stems that 丑 holds are as follows. The principal stem (己) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 癸丑",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 癸"
              ],
              "rows": [
                [
                  "Yin Water (癸)",
                  "residual (餘氣)",
                  "{hidChukYeo}",
                  "Companion (比肩)"
                ],
                [
                  "Yin Metal (辛)",
                  "middle (中氣)",
                  "{hidChukJung}",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Earth (己)",
                  "principal (本氣)",
                  "{hidChukBon}",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 癸 as the day stem, Steady Wealth is 丙 and Authority is 戊."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丙. 丙 is not held inside 丑."
          },
          {
            "p": "For women, the spouse position (Authority) is 戊. 戊 is not held inside 丑."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [壬子](/guide/pillar-im-ja) and the next is [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "It is made of [Yin Water (癸)](/guide/stem-gye) and [丑 (Ox)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Day pillars",
    "title": "The 甲寅 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 甲寅 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "甲寅 is day pillar number 51 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 甲寅, the day stem is 甲 (Wood, Yang) and the day branch is 寅 (the Tiger). In the sixty-year cycle it is the combination number 51."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 甲 \"Yang Wood (甲)\", and the line the result screen shows is: \"A tall tree growing straight. Once the direction is set it does not waver, and it would rather endure than bend.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 寅 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 甲, the stems that 寅 holds are as follows. The principal stem (甲) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 甲寅",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 甲"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidInYeo}",
                  "Windfall (偏財)"
                ],
                [
                  "Yang Fire (丙)",
                  "middle (中氣)",
                  "{hidInJung}",
                  "Expression (食神)"
                ],
                [
                  "Yang Wood (甲)",
                  "principal (本氣)",
                  "{hidInBon}",
                  "Companion (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 甲 as the day stem, Steady Wealth is 己 and Authority is 辛."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 己. 己 is not held inside 寅."
          },
          {
            "p": "For women, the spouse position (Authority) is 辛. 辛 is not held inside 寅."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [癸丑](/guide/pillar-gye-chuk) and the next is [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "It is made of [Yang Wood (甲)](/guide/stem-gap) and [寅 (Tiger)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Day pillars",
    "title": "The 乙卯 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 乙卯 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "乙卯 is day pillar number 52 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 乙卯, the day stem is 乙 (Wood, Yin) and the day branch is 卯 (the Rabbit). In the sixty-year cycle it is the combination number 52."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 乙 \"Yin Wood (乙)\", and the line the result screen shows is: \"A vine — flexible grass. It bends with circumstance to keep moving, and it does not snap.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 卯 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 乙, the stems that 卯 holds are as follows. The principal stem (乙) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 乙卯",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 乙"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "residual (餘氣)",
                  "{hidMyoYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Yin Wood (乙)",
                  "principal (本氣)",
                  "{hidMyoBon}",
                  "Companion (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 乙 as the day stem, Steady Wealth is 戊 and Authority is 庚."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 戊. 戊 is not held inside 卯."
          },
          {
            "p": "For women, the spouse position (Authority) is 庚. 庚 is not held inside 卯."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [甲寅](/guide/pillar-gap-in) and the next is [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "It is made of [Yin Wood (乙)](/guide/stem-eul) and [卯 (Rabbit)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Day pillars",
    "title": "The 丙辰 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丙辰 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丙辰 is day pillar number 53 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丙辰, the day stem is 丙 (Fire, Yang) and the day branch is 辰 (the Dragon). In the sixty-year cycle it is the combination number 53."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丙 \"Yang Fire (丙)\", and the line the result screen shows is: \"The midday sun. Feelings show plainly, the room brightens, and stepping forward comes naturally.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 辰 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丙, the stems that 辰 holds are as follows. The principal stem (戊) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丙辰",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丙"
              ],
              "rows": [
                [
                  "Yin Wood (乙)",
                  "residual (餘氣)",
                  "{hidJinYeo}",
                  "Nurture (正印)"
                ],
                [
                  "Yin Water (癸)",
                  "middle (中氣)",
                  "{hidJinJung}",
                  "Authority (正官)"
                ],
                [
                  "Yang Earth (戊)",
                  "principal (本氣)",
                  "{hidJinBon}",
                  "Expression (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丙 as the day stem, Steady Wealth is 辛 and Authority is 癸."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 辛. 辛 is not held inside 辰."
          },
          {
            "p": "For women, the spouse position (Authority) is 癸. 癸 is held inside 辰 (middle (中氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [乙卯](/guide/pillar-eul-myo) and the next is [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "It is made of [Yang Fire (丙)](/guide/stem-byeong) and [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Day pillars",
    "title": "The 丁巳 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 丁巳 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "丁巳 is day pillar number 54 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 丁巳, the day stem is 丁 (Fire, Yin) and the day branch is 巳 (the Snake). In the sixty-year cycle it is the combination number 54."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 丁 \"Yin Fire (丁)\", and the line the result screen shows is: \"Candlelight. It burns quietly and long, and warms those closest first.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 巳 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 丁, the stems that 巳 holds are as follows. The principal stem (丙) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 丁巳",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 丁"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidSaYeo}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Metal (庚)",
                  "middle (中氣)",
                  "{hidSaJung}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Fire (丙)",
                  "principal (本氣)",
                  "{hidSaBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 丁 as the day stem, Steady Wealth is 庚 and Authority is 壬."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 庚. 庚 is held inside 巳 (middle (中氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 壬. 壬 is not held inside 巳."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丙辰](/guide/pillar-byeong-jin) and the next is [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "It is made of [Yin Fire (丁)](/guide/stem-jeong) and [巳 (Snake)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Day pillars",
    "title": "The 戊午 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 戊午 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "戊午 is day pillar number 55 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 戊午, the day stem is 戊 (Earth, Yang) and the day branch is 午 (the Horse). In the sixty-year cycle it is the combination number 55."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 戊 \"Yang Earth (戊)\", and the line the result screen shows is: \"Open ground and mountains. Hard to shake and easy to lean on, though slow to change a decision once made.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 午 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 戊, the stems that 午 holds are as follows. The principal stem (丁) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 戊午",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 戊"
              ],
              "rows": [
                [
                  "Yang Fire (丙)",
                  "residual (餘氣)",
                  "{hidOYeo}",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Earth (己)",
                  "middle (中氣)",
                  "{hidOJung}",
                  "Rival (劫財)"
                ],
                [
                  "Yin Fire (丁)",
                  "principal (本氣)",
                  "{hidOBon}",
                  "Nurture (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 戊 as the day stem, Steady Wealth is 癸 and Authority is 乙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 癸. 癸 is not held inside 午."
          },
          {
            "p": "For women, the spouse position (Authority) is 乙. 乙 is not held inside 午."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [丁巳](/guide/pillar-jeong-sa) and the next is [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "It is made of [Yang Earth (戊)](/guide/stem-mu) and [午 (Horse)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Day pillars",
    "title": "The 己未 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 己未 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "己未 is day pillar number 56 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 己未, the day stem is 己 (Earth, Yin) and the day branch is 未 (the Sheep). In the sixty-year cycle it is the combination number 56."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 己 \"Yin Earth (己)\", and the line the result screen shows is: \"Field soil. It takes in whatever comes and grows it, tending rather than displaying.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 未 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 己, the stems that 未 holds are as follows. The principal stem (己) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 己未",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 己"
              ],
              "rows": [
                [
                  "Yin Fire (丁)",
                  "residual (餘氣)",
                  "{hidMiYeo}",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yin Wood (乙)",
                  "middle (中氣)",
                  "{hidMiJung}",
                  "Challenger (偏官)"
                ],
                [
                  "Yin Earth (己)",
                  "principal (本氣)",
                  "{hidMiBon}",
                  "Companion (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 己 as the day stem, Steady Wealth is 壬 and Authority is 甲."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 壬. 壬 is not held inside 未."
          },
          {
            "p": "For women, the spouse position (Authority) is 甲. 甲 is not held inside 未."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [戊午](/guide/pillar-mu-o) and the next is [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "It is made of [Yin Earth (己)](/guide/stem-gi) and [未 (Sheep)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Day pillars",
    "title": "The 庚申 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 庚申 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "庚申 is day pillar number 57 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 庚申, the day stem is 庚 (Metal, Yang) and the day branch is 申 (the Monkey). In the sixty-year cycle it is the combination number 57."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 庚 \"Yang Metal (庚)\", and the line the result screen shows is: \"Unworked iron. Decisive and clear-cut, with little patience for things left hanging.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 申 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 庚, the stems that 申 holds are as follows. The principal stem (庚) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 庚申",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 庚"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidSinYeo}",
                  "Unconventional Support (偏印)"
                ],
                [
                  "Yang Water (壬)",
                  "middle (中氣)",
                  "{hidSinJung}",
                  "Expression (食神)"
                ],
                [
                  "Yang Metal (庚)",
                  "principal (本氣)",
                  "{hidSinBon}",
                  "Companion (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 庚 as the day stem, Steady Wealth is 乙 and Authority is 丁."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 乙. 乙 is not held inside 申."
          },
          {
            "p": "For women, the spouse position (Authority) is 丁. 丁 is not held inside 申."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [己未](/guide/pillar-gi-mi) and the next is [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "It is made of [Yang Metal (庚)](/guide/stem-gyeong) and [申 (Monkey)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Day pillars",
    "title": "The 辛酉 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 辛酉 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "辛酉 is day pillar number 58 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 辛酉, the day stem is 辛 (Metal, Yin) and the day branch is 酉 (the Rooster). In the sixty-year cycle it is the combination number 58."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 辛 \"Yin Metal (辛)\", and the line the result screen shows is: \"A cut gem. Fine-grained taste and high standards; sloppiness is hard to let pass.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 酉 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 辛, the stems that 酉 holds are as follows. The principal stem (辛) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 辛酉",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 辛"
              ],
              "rows": [
                [
                  "Yang Metal (庚)",
                  "residual (餘氣)",
                  "{hidYuYeo}",
                  "Rival (劫財)"
                ],
                [
                  "Yin Metal (辛)",
                  "principal (本氣)",
                  "{hidYuBon}",
                  "Companion (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 辛 as the day stem, Steady Wealth is 甲 and Authority is 丙."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 甲. 甲 is not held inside 酉."
          },
          {
            "p": "For women, the spouse position (Authority) is 丙. 丙 is not held inside 酉."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [庚申](/guide/pillar-gyeong-sin) and the next is [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "It is made of [Yin Metal (辛)](/guide/stem-sin) and [酉 (Rooster)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Day pillars",
    "title": "The 壬戌 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 壬戌 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "壬戌 is day pillar number 59 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 壬戌, the day stem is 壬 (Water, Yang) and the day branch is 戌 (the Dog). In the sixty-year cycle it is the combination number 59."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 壬 \"Yang Water (壬)\", and the line the result screen shows is: \"River and sea. Broad in outlook, with an eye for how things are flowing.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 戌 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 壬, the stems that 戌 holds are as follows. The principal stem (戊) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 壬戌",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 壬"
              ],
              "rows": [
                [
                  "Yin Metal (辛)",
                  "residual (餘氣)",
                  "{hidSulYeo}",
                  "Nurture (正印)"
                ],
                [
                  "Yin Fire (丁)",
                  "middle (中氣)",
                  "{hidSulJung}",
                  "Steady Wealth (正財)"
                ],
                [
                  "Yang Earth (戊)",
                  "principal (本氣)",
                  "{hidSulBon}",
                  "Challenger (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 壬 as the day stem, Steady Wealth is 丁 and Authority is 己."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丁. 丁 is held inside 戌 (middle (中氣))."
          },
          {
            "p": "For women, the spouse position (Authority) is 己. 己 is not held inside 戌."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [辛酉](/guide/pillar-sin-yu) and the next is [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "It is made of [Yang Water (壬)](/guide/stem-im) and [戌 (Dog)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Day pillars",
    "title": "The 癸亥 Day Pillar",
    "summary": "How Saju-Link reads the day pillar 癸亥 — what the stems held by the day branch are to the day stem — laid out exactly as its calculation rules have it.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "癸亥 is day pillar number 60 of the sixty-year cycle",
        "blocks": [
          {
            "p": "When the stem-branch of the birth day is 癸亥, the day stem is 癸 (Water, Yin) and the day branch is 亥 (the Pig). In the sixty-year cycle it is the combination number 60."
          },
          {
            "p": "Saju-Link calls a person whose day stem is 癸 \"Yin Water (癸)\", and the line the result screen shows is: \"Dew and rain. It seeps in quietly and reads the mood before the words.\" This line has nothing to do with the reading below or the scores."
          }
        ]
      },
      {
        "title": "What the stems held by the day branch 亥 are to the day stem",
        "blocks": [
          {
            "p": "The day branch is the spouse position. Read from the day stem 癸, the stems that 亥 holds are as follows. The principal stem (壬) is the branch's representative energy."
          },
          {
            "table": {
              "caption": "The hidden stems of the day branch of 癸亥",
              "head": [
                "Hidden stem",
                "Position",
                "Share",
                "To the day stem 癸"
              ],
              "rows": [
                [
                  "Yang Earth (戊)",
                  "residual (餘氣)",
                  "{hidHaeYeo}",
                  "Authority (正官)"
                ],
                [
                  "Yang Wood (甲)",
                  "middle (中氣)",
                  "{hidHaeJung}",
                  "Disruptor (傷官)"
                ],
                [
                  "Yang Water (壬)",
                  "principal (本氣)",
                  "{hidHaeBon}",
                  "Rival (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "The spouse position and this day pillar",
        "blocks": [
          {
            "p": "Traditional myeongri reads the spouse position as Steady Wealth (正財) for men and Authority (正官) for women. With 癸 as the day stem, Steady Wealth is 丙 and Authority is 戊."
          },
          {
            "p": "For men, the spouse position (Steady Wealth) is 丙. 丙 is not held inside 亥."
          },
          {
            "p": "For women, the spouse position (Authority) is 戊. 戊 is held inside 亥 (residual (餘氣))."
          }
        ]
      },
      {
        "title": "The neighbouring day pillars and the characters it is made of",
        "blocks": [
          {
            "p": "In the sixty-year cycle the previous day pillar is [壬戌](/guide/pillar-im-sul) and the next is [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "It is made of [Yin Water (癸)](/guide/stem-gye) and [亥 (Pig)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "What this guide does not say",
        "blocks": [
          {
            "ul": [
              "One day pillar does not settle a person or a relationship. A saju is read from how the eight characters of the four pillars relate.",
              "The reading of the spouse position carries over a rule of traditional myeongri, and if you do not state your gender this position is not read."
            ]
          }
        ]
      }
    ]
  },

  "guide/saju-letters": {
    "eyebrow": "Start here",
    "title": "Stems, Branches and Day Pillars — How to Read the Letters",
    "summary": "What the eight characters of a Saju chart are, and what the heavenly stems, earthly branches and day pillar each mean, explained with two simple tables.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Saju is written with two kinds of characters",
        "blocks": [
          {
            "p": "The eight characters of a Saju chart are split into upper and lower characters. The upper character is one of ten **heavenly stems (天干)**, and the lower character is one of twelve **earthly branches (地支)**."
          },
          {
            "p": "Think of a stem as a label for a kind of energy and a branch as a label for a time and a place. You do not need to memorize them, any more than you would memorize the names of the weekdays; just look them up in the tables below. How the four pillars become eight characters is explained in [the natal chart guide](/guide/natal-chart)."
          }
        ]
      },
      {
        "title": "The ten heavenly stems",
        "blocks": [
          {
            "p": "There are ten heavenly stems. The five elements (Wood, Fire, Earth, Metal, Water) each take two stems, and within each pair the first is Yang (陽) and the second is Yin (陰)."
          },
          {
            "table": {
              "caption": "The ten heavenly stems with element and polarity",
              "head": [
                "Heavenly stem",
                "Element and polarity"
              ],
              "rows": [
                [
                  "Yang Wood (甲)",
                  "Wood Yang"
                ],
                [
                  "Yin Wood (乙)",
                  "Wood Yin"
                ],
                [
                  "Yang Fire (丙)",
                  "Fire Yang"
                ],
                [
                  "Yin Fire (丁)",
                  "Fire Yin"
                ],
                [
                  "Yang Earth (戊)",
                  "Earth Yang"
                ],
                [
                  "Yin Earth (己)",
                  "Earth Yin"
                ],
                [
                  "Yang Metal (庚)",
                  "Metal Yang"
                ],
                [
                  "Yin Metal (辛)",
                  "Metal Yin"
                ],
                [
                  "Yang Water (壬)",
                  "Water Yang"
                ],
                [
                  "Yin Water (癸)",
                  "Water Yin"
                ]
              ]
            }
          },
          {
            "p": "The stem of the day you were born is called the **day stem (日干)**, and it is the character that points to you."
          }
        ]
      },
      {
        "title": "The twelve earthly branches",
        "blocks": [
          {
            "p": "There are twelve earthly branches, and each one has an animal of the zodiac attached. So the twelve branches are the zodiac signs."
          },
          {
            "table": {
              "caption": "The Twelve Earthly Branches and Zodiac Signs",
              "head": [
                "Earthly Branch",
                "Zodiac Sign"
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
                  "Dragon"
                ],
                [
                  "巳",
                  "Snake"
                ],
                [
                  "午",
                  "Horse"
                ],
                [
                  "未",
                  "Goat"
                ],
                [
                  "申",
                  "Monkey"
                ],
                [
                  "酉",
                  "Rooster"
                ],
                [
                  "戌",
                  "Dog"
                ],
                [
                  "亥",
                  "Pig"
                ]
              ]
            }
          },
          {
            "p": "A branch looks like a single character, but it holds stems inside it. These are called the **hidden stems (支藏干)**. Which stems a branch holds, and how much of each, is laid out in the dictionary entry for each branch. For how the zodiac animal is decided, see [the zodiac guide](/guide/zodiac)."
          }
        ]
      },
      {
        "title": "The day pillar — a stem and a branch as a pair",
        "blocks": [
          {
            "p": "Each pillar of a Saju chart is two characters: one stem paired with one branch. The pillar of the day you were born is the **Day Pillar (日柱)**."
          },
          {
            "p": "Pair the stems and branches off in order and you get **sixty** combinations, from 甲子 and 乙丑 and 丙寅 through to 癸亥. This cycle is called the sexagenary cycle. It is sixty rather than 10 × 12 = 120 because a Yang stem is paired only with a Yang branch, and a Yin stem only with a Yin branch."
          },
          {
            "p": "The upper character of the day pillar is the day stem you met above. Entries that explain each pillar one by one are in the stem, branch and day pillar dictionaries at the bottom of [the guide list](/guide)."
          }
        ]
      }
    ]
  },

  "guide/ten-gods": {
    "eyebrow": "The Ten Gods",
    "title": "The Ten Gods — The Ten Positions Within My Saju",
    "summary": "Based on the day pillar, the remaining characters are divided into ten names. It discusses the reasons for distinguishing between regular wealth and side wealth, even if they are the same wealth element.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "The Day Pillar Is the Person Himself",
        "blocks": [
          {
            "p": "Among the eight characters of the saju, the **day pillar** (the heavenly stem of the day of birth) refers to the person himself. The remaining seven characters are read as the environment in which that day pillar exists."
          },
          {
            "p": "**The Ten Gods** (十神) are the ten divisions of how the day pillar perceives the other characters. The energy that nurtures me is Resource, the energy that is like me is Companion, the energy I give birth to is Food and Wealth, the energy that suppresses me is Official Position, and the energy that I suppress is Wealth — these five categories are further divided into yin and yang, forming ten."
          }
        ]
      },
      {
        "title": "What the Remaining Seven Characters Mean to Me",
        "blocks": [
          {
            "p": "Once the day pillar is determined, the remaining characters in the natal chart each receive a name. The energy that gives birth to me, the energy that is like me, the energy I give birth to, the energy that suppresses me, and the energy that I suppress — these five branches are further divided into **ten** through yin and yang. This is the Ten Gods."
          },
          {
            "p": "Thus, the Ten Gods refer not to relationships with others but to **the positions within myself**. Which positions are thick or thin indicate my tendencies and the way I live."
          }
        ]
      },
      {
        "title": "Why we read this through the Ten Gods rather than three elemental relations",
        "blocks": [
          {
            "p": "There is also a method of viewing the relationship of the day stem solely through the three aspects of the five elements (supporting, same, and opposing). It is simple, but **the yin and yang disappear.** 甲 (yang wood) and 乙 (yin wood) become the same as 甲, which is a representation of 'sameness', and the opposing relationship is lumped together into a single score without direction or yin and yang."
          },
          {
            "p": "The spouse position must be evaluated according to the Ten Gods in terms of yin and yang. If items viewed through the five elements are mixed with those viewed through the Ten Gods in one engine, there will be two standards for the same two characters. Therefore, we unify it under the Ten Gods."
          }
        ]
      },
      {
        "title": "The spouse position is Proper Wealth and Proper Officer",
        "blocks": [
          {
            "p": "Traditional fortune-telling views the spouse position differently based on gender. For men, it is **Proper Wealth (正財)**, and for women, it is **Proper Officer (正官)**. Even if they are the same wealth element, only the Proper Wealth that is misaligned in yin and yang is considered the spouse position, while Indirect Wealth is read not as a spouse but in terms of activity and wealth."
          }
        ]
      },
      {
        "kind": "note",
        "title": "If you do not specify gender, this position is omitted",
        "blocks": [
          {
            "p": "This is because it cannot be determined which side, Proper Wealth or Proper Officer, to consider as the spouse position. Instead of guessing to fill in a missing value, we read the remaining items without that one."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Today's fortune",
    "title": "How does today's fortune come out?",
    "summary": "Today's day stem is compared to the natal chart to score. Thirteen suppress-and-support relations and seven earthly branch relations, along with all twenty items and their respective additions and subtractions, are fully disclosed.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Today, we also establish it in the same way as the eight characters",
        "blocks": [
          {
            "p": "Every day has its own **the day pillar of the day (日辰)**. Using the same method as establishing the natal chart's day pillar, today also has one heavenly stem and one earthly branch attached. Today's fortune is about comparing those two characters to the natal chart."
          },
          {
            "p": "The base score is **{baseScore} points**. Items below are added and subtracted, and finally, it is confined between {clampLow} points and {clampHigh} points — we do not mention 0 points or 100 points."
          }
        ]
      },
      {
        "title": "① Is today's energy what I need?",
        "blocks": [
          {
            "p": "This is the most significant position. We check whether today's energy corresponds to the 'energy needed right now' determined by [the balancing element](/guide/yongsin)."
          },
          {
            "table": {
              "head": [
                "Today's energy is",
                "Addition/Subtraction"
              ],
              "rows": [
                [
                  "The energy needed right now",
                  "{todayIsYongsin}"
                ],
                [
                  "It generates the needed energy",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "It suppresses the needed energy",
                  "{todayControlsYongsin}"
                ],
                [
                  "It pushes more on the already overflowing side",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Do not consider the the adverse element as 'everything except the the balancing element'",
        "blocks": [
          {
            "p": "If you do that, both the energy that generates the the balancing element and the energy that suppresses the the balancing element become bad, and the last two rows in the table above become indistinguishable. Only the energy that **pushes harder in the opposite direction** according to the meaning of suppress-and-support is seen as the adverse element."
          }
        ]
      },
      {
        "title": "② The relationship between today's heavenly stem and the day stem",
        "blocks": [
          {
            "p": "The supporting and opposing relationships of the five elements are applied directly between the day stem and today's heavenly stem."
          },
          {
            "table": {
              "head": [
                "Relationship",
                "Addition/Subtraction"
              ],
              "rows": [
                [
                  "Today generates me",
                  "{generatesSelf}"
                ],
                [
                  "Today and I are the same energy",
                  "{sameElement}"
                ],
                [
                  "I suppress today",
                  "{selfControls}"
                ],
                [
                  "I flow out with today",
                  "{selfGenerates}"
                ],
                [
                  "Today suppresses me",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ Today's earthly branch meets the natal chart's earthly branches",
        "blocks": [
          {
            "p": "Today's earthly branch is compared to the natal chart's earthly branches. The relationship table itself is in [earthly branch relations](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relationship",
                "Addition/Subtraction"
              ],
              "rows": [
                [
                  "triad (三合)",
                  "{branchSamhap}"
                ],
                [
                  "six harmony (六合)",
                  "{branchYukhap}"
                ],
                [
                  "half triad (半合)",
                  "{branchBanhap}"
                ],
                [
                  "quiet discord (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "clash (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "When there are multiple pillars, multiple relationships arise. All are added, but this entire item is confined to **±{branchMaxAbs} points** — this is to prevent a single earthly branch relationship from determining the entire day."
          }
        ]
      },
      {
        "title": "④ Correction Based on Strength",
        "blocks": [
          {
            "p": "Even with the same energy, the meaning differs for a strong day pillar and a weak day pillar. Therefore, we make one last adjustment."
          },
          {
            "table": {
              "head": [
                "Situation",
                "Adjustment"
              ],
              "rows": [
                [
                  "Weak day pillar but today supports them",
                  "{weakTodayHelps}"
                ],
                [
                  "Strong day pillar but today appropriately reduces the burden",
                  "{strongTodayDrains}"
                ],
                [
                  "Strong day pillar but today thickens the support",
                  "{strongTodayHelps}"
                ],
                [
                  "Weak day pillar but today adds to the burden",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Scores by Grade and Area",
        "blocks": [
          {
            "p": "The total score is divided into five grades."
          },
          {
            "table": {
              "head": [
                "Score",
                "Grade"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} points or more",
                  "Great Luck (大吉)"
                ],
                [
                  "{gradeGilMin} points or more",
                  "Luck (吉)"
                ],
                [
                  "{gradePyeongMin} points or more",
                  "Average (平)"
                ],
                [
                  "{gradeJuuiMin} points or more",
                  "Caution (注意)"
                ],
                [
                  "{gradeJosimMin} points or more",
                  "Be Careful (操心)"
                ]
              ]
            }
          },
          {
            "p": "The four areas of wealth, love, career, and health inherit {overallShare} of the total score, while the rest is divided according to the Ten Gods and earthly branch relationships relevant to those areas. Therefore, even if the total score is the same, the numbers by area differ from person to person."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "The above numbers are all read from the engine settings. If the rules are changed, this document will also change, and any score-moving changes will be posted first in the [Notice](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Relationship Table",
    "title": "Earthly Branch Relationships — Combination, Clash, and Discord",
    "summary": "This is a relationship table showing how today's day pillar interacts with the natal chart. It reveals what each combination, clash, and discord is and how many points they have.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "Earthly Branches are Twelve Characters",
        "blocks": [
          {
            "p": "The twelve earthly branches (十二支) are 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Commonly known zodiac signs — Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Goat, Monkey, Rooster, Dog, Pig — are each attached to one of these twelve characters."
          },
          {
            "figure": "branch-wheel",
            "caption": "When the twelve characters are arranged in a circle, the relationships are clearly visible. Clash (沖) always faces each other, while six harmony and discord are closer pairs. These lines are not written in the text but are directly derived from the calculation rules.",
            "labels": {
              "alt": "A diagram showing the twelve earthly branches arranged in a circle with lines connecting six harmony, clash, and discord.",
              "yukhap": "six harmony",
              "chung": "Clash",
              "wonjin": "Discord",
              "rat": "Rat",
              "ox": "Ox",
              "tiger": "Tiger",
              "rabbit": "Rabbit",
              "dragon": "Dragon",
              "snake": "snake",
              "horse": "horse",
              "goat": "goat",
              "monkey": "monkey",
              "rooster": "rooster",
              "dog": "dog",
              "pig": "pig"
            }
          },
          {
            "p": "In saju, each of the four pillars has one earthly branch. **Today's reading** is determined by matching **the day's branch** with the four branches of the natal chart using the relationship table below."
          }
        ]
      },
      {
        "title": "Overall Relationship Table",
        "blocks": [
          {
            "table": {
              "caption": "In order of highest score. These are the values used by Saju-Link.",
              "head": [
                "Relationship",
                "Corresponding Pair",
                "Meaning",
                "Score"
              ],
              "rows": [
                [
                  "triad (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "When all three characters come together, they form a complete elemental formation (局). This is considered the strongest combination.",
                  "{scoreSamhap}"
                ],
                [
                  "six harmony (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pairs that attract each other. This is the most common combination as it consists of only two characters.",
                  "{scoreYukhap}"
                ],
                [
                  "half triad (半合)",
                  "Two characters that include one of the royal characters (子·酉·午·卯) from the triad",
                  "A half triad that includes a character that is central to the formation. It does not form a complete elemental formation with just two characters, making it lower than the triad.",
                  "{scoreBanhap}"
                ],
                [
                  "Same Branch",
                  "子子 · 丑丑 …",
                  "Characters that are the same. This means they resemble each other but does not imply attraction, so they are placed in the middle.",
                  "{scoreSame}"
                ],
                [
                  "No Relationship",
                  "Pairs that do not belong anywhere above or below",
                  "Combinations that have no special relationship. This serves as a reference point.",
                  "{scoreNeutral}"
                ],
                [
                  "quiet discord (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Pairs that cannot separate despite their dislike. They appear quiet on the surface but are considered to last long.",
                  "{scoreWonjin}"
                ],
                [
                  "Clash (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Pairs that clash head-on. These are six pairs that face each other.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "triads and half triads",
        "blocks": [
          {
            "p": "A triad requires all three characters to be present. Since there are four earthly branches in the natal chart, it is possible for the day's branch to combine with them, resulting in a triad — at that time, it receives a score of {scoreSamhap}. If only two characters are involved, it is a half triad."
          }
        ]
      },
      {
        "kind": "note",
        "title": "half triads Require Royal Characters to be Recognized",
        "blocks": [
          {
            "p": "There is also a method that counts as a half triad if both characters belong to the same triad group. This allows combinations like 申辰, which are difficult to call a combination, to receive high scores. Therefore, this service recognizes a half triad only when it includes royal characters (子·酉·午·卯), and does not consider combinations like 申辰·巳丑·寅戌·亥未 as valid."
          }
        ]
      },
      {
        "title": "Reason for Separating quiet discord",
        "blocks": [
          {
            "p": "The six pairs of quiet discord are seen as frequently as clashes. If one counted only combinations and clashes, these six pairs would all be buried under the no relationship score of {scoreNeutral}, so they are placed separately."
          },
          {
            "p": "If clashes are pairs that collide head-on and are prominently displayed, quiet discord is subtly misaligned. Therefore, it is placed at a score of {scoreWonjin}, which is higher than clashes ({scoreChung}) but definitely lower than no relationship ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Scores are also assigned for clashes",
        "blocks": [
          {
            "p": "The lowest clash score is {scoreChung}. It is intentional not to give a value close to 0. In traditional myeongri, a clash is not an 'end' but a 'collision', and giving a score close to the bottom would mean the service is making a definitive statement about the relationship."
          },
          {
            "p": "With a minimum of {scoreChung} and a maximum of {scoreSamhap}, the difference is clearly visible but not definitive."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiac Sign",
    "title": "Where is the Zodiac Sign in Saju?",
    "summary": "The zodiac sign is the earthly branch of the year you were born. This explains why it is drawn from the saju year rather than the calendar year, and why those born in early January or February have the zodiac sign of the previous year.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "The zodiac sign is the earthly branch of the year you were born.",
        "blocks": [
          {
            "p": "Saju consists of four pillars: year, month, day, and hour, with each pillar having one heavenly stem and one earthly branch. Among them, the **earthly branch of the year**, or year branch, is the animal we refer to as the zodiac sign."
          },
          {
            "table": {
              "caption": "The Twelve Earthly Branches and Zodiac Signs",
              "head": [
                "Earthly Branch",
                "Zodiac Sign"
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
                  "Dragon"
                ],
                [
                  "巳",
                  "Snake"
                ],
                [
                  "午",
                  "Horse"
                ],
                [
                  "未",
                  "Goat"
                ],
                [
                  "申",
                  "Monkey"
                ],
                [
                  "酉",
                  "Rooster"
                ],
                [
                  "戌",
                  "Dog"
                ],
                [
                  "亥",
                  "Pig"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "We use the saju year, not the calendar year.",
        "blocks": [
          {
            "p": "The point at which the zodiac sign changes is neither January 1st of the solar calendar nor Lunar New Year. The standard for changing the year in saju is **Ipchun**. Therefore, those born in early January or February may have a different zodiac sign than what the calendar indicates."
          }
        ]
      },
      {
        "kind": "note",
        "title": "The reason we do not directly ask for the zodiac sign.",
        "blocks": [
          {
            "p": "This is why we only ask for the birth date without selecting the zodiac sign on the input screen. When the saju engine calculates the year, it automatically aligns with the Ipchun boundary. If selected directly, someone born in early February would choose a zodiac sign that does not match their actual sign."
          }
        ]
      },
      {
        "title": "The zodiac sign is one character in saju.",
        "blocks": [
          {
            "p": "Among the eight characters, the one corresponding to the zodiac sign is **one year branch**. The other seven characters — especially the day stem that refers to oneself — have no relation to the zodiac sign."
          },
          {
            "p": "People born in the same year all share the same zodiac sign. Therefore, what can be known from the zodiac sign is only as much as one of the eight characters. This is the reason why this service does not **treat the zodiac sign separately or significantly** — the year branch is calculated for strength and today's the day pillar of the day judgment just like any other earthly branch."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Still, the reason we show the zodiac sign.",
        "blocks": [
          {
            "p": "It is the only position where the meaning is understood even if you do not know the terminology of myeongri. If the zodiac sign is noted alongside the year branch on the natal chart screen, it becomes a clue for reading the other seven characters."
          }
        ]
      },
      {
        "title": "The year branch remains the same even if you do not know the birth time.",
        "blocks": [
          {
            "p": "If you do not enter the time, the hour pillar is omitted and the strength of the the five elements (five elements) changes. However, the **year branch remains the same** — it is determined solely by the year you were born."
          },
          {
            "p": "Therefore, the story derived from the year branch does not change even for those who do not know the time. Conversely, this means that what can be said based solely on the zodiac sign is limited, regardless of whether the time is included or not."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Time",
    "title": "We convert the birth time to true solar time.",
    "summary": "Standard time and the actual position of the sun differ. This addresses why the time must be adjusted according to the longitude of the birthplace to ensure the hour pillar is correct.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "The time on the clock and the solar time are different",
        "blocks": [
          {
            "p": "The saju's hour pillar (時柱) is determined by the position of the sun. However, the clock we see uses a single standard time for the entire country, which misaligns with the sun's actual position."
          },
          {
            "p": "Korea's standard time is based on 135° east longitude. Seoul's longitude is about 127°, so it is approximately 8° to the west, causing the sun to reach its zenith later — when it is noon by the clock, the sun in Seoul is still before its zenith. This difference is about **32 minutes**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "32 minutes changes the hour pillar by one slot",
        "blocks": [
          {
            "p": "The time in saju is divided into two-hour units. Those born near the boundary will have their hour pillar completely changed by a 32-minute difference — adjustments are necessary precisely because of those who fall right on this boundary."
          }
        ]
      },
      {
        "title": "The reason for asking where you were born",
        "blocks": [
          {
            "p": "If the longitude is different, the adjustment amount will also differ. If you apply the Seoul-based adjustment to someone born overseas, the hour pillar will be significantly misaligned. Therefore, the input screen asks you to select your birthplace, and calculations are made based on that city's longitude and standard time. Currently, there are {cityCount} places in the list."
          },
          {
            "p": "Even within the same country, places with significantly different longitudes (such as the United States, Russia, Indonesia, etc.) have been divided into cities. **15° of longitude equals one hour pillar**."
          },
          {
            "p": "If you do not select, calculations will be made based on Seoul. Most births are domestic, so this is less prone to error, but if you were born overseas, please be sure to select."
          }
        ]
      },
      {
        "title": "Standard time has changed several times in the past",
        "blocks": [
          {
            "p": "There is a reason why the adjustment cannot be calculated simply as \"longitude difference ÷ 15° × 60 minutes.\" The standard time itself has varied over different eras."
          },
          {
            "table": {
              "caption": "Changes in Korea's standard time — those born in this period will be misaligned with simple calculations",
              "head": [
                "Period",
                "What was different?"
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
            "p": "Saju-Link does not fix the standard meridian as a constant value, but calculates the actual standard time used at that moment based on the **IANA time zone** information of the birthplace. Daylight saving time and past standard times are automatically reflected."
          }
        ]
      },
      {
        "title": "Birth just after midnight also considers the date",
        "blocks": [
          {
            "p": "Since the adjustment is -32 minutes, those born between 00:00 and 00:32 by the clock will be at **11 PM the previous day** in true solar time. If only the time is adjusted back and the date remains the same, it will write the day pillar (日柱) as \"11 PM the previous day.\""
          },
          {
            "p": "Saju-Link will also adjust the date in this case. The character above the day pillar refers to the day stem (日干), which indicates myself, so if this is misaligned, almost all items in the interpretation will be misaligned."
          }
        ]
      },
      {
        "title": "You do not need to know the time",
        "blocks": [
          {
            "p": "The birth time is optional. If you do not know it, calculations will be made without the hour pillar, and this fact will be displayed on the results screen. Since this means two out of the eight characters are missing, it will affect the assessment of the five elements' strength and weakness, so if you know it, it is more accurate to include it."
          },
          {
            "p": "The year branch (the zodiac animal) is always the same regardless of the time — [because we only look at the year branch](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Personal Information",
    "title": "A method that does not store the entered information",
    "summary": "It clarifies what it technically means that the date of birth is not recorded anywhere and what is contained in the result link.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "There is no membership registration",
        "blocks": [
          {
            "p": "Saju-Link does not create accounts. It does not collect names, emails, or phone numbers. The only information collected is the date of birth and (optionally) birth time, birthplace, and gender, and that information does not remain after the calculation is complete."
          },
          {
            "p": "There is a field to enter a title to display on the results screen, but that is **only for display purposes** and is not used in calculations. You do not need to enter your real name."
          }
        ]
      },
      {
        "title": "What is contained in the result link?",
        "blocks": [
          {
            "p": "Once the calculation is complete, the address looks like this."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "What follows **#** is the input values. This part is called the **fragment**, which is a section that **the browser does not send to the server**. This is standard web behavior and not a rule we created — it was originally designed to indicate a position within a document, so the server has no need to see it."
          },
          {
            "p": "In other words, when you open the result link, the browser reads that value to request the calculation, and our server receives the values to use for the calculation, returns the answer, and then forgets it."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Please be careful when sending the link to others",
        "blocks": [
          {
            "p": "The fact that it is not stored on the server does not mean the link is safe. The result link contains the birth dates of two individuals, so the person who receives that link can see the same result."
          }
        ]
      },
      {
        "title": "Why is the calculation done on the server but not stored?",
        "blocks": [
          {
            "p": "The calculation itself is done on the server. The lunar-solar almanac table is needed to generate the saju, and that table is too large to be sent down to the browser. However, **after processing the request, we do not use that value anywhere.** There is no code to insert it into a database."
          },
          {
            "p": "The minimum records necessary for operation are kept — a counter to prevent the same person from sending too many requests in a short time. This does not include the date of birth, and the access IP is not retained. Only one value hashed with the date is counted, and that value changes when the day changes."
          }
        ]
      },
      {
        "title": "Things that cannot be done because information is not stored",
        "blocks": [
          {
            "p": "To be honest, there are things that have been given up because we do not store information."
          },
          {
            "ul": [
              "**You cannot retrieve past results.** You need to have the link to view them again.",
              "**The same values will be recalculated.** There is no cache. However, since all rules are deterministic, [the same input will always yield the same value](/guide/natal-chart).",
              "**Refreshing will bring back the ad gate.** This is because there is no place to leave viewing history."
            ]
          }
        ]
      },
      {
        "title": "If you make a purchase",
        "blocks": [
          {
            "p": "When you purchase a report, a transaction record will be kept. Payment is subject to legal retention periods, and without an order history, refunds cannot be processed. However, at this time, **the birth date used for saju calculation will not be attached to the order** — it will be requested again when creating the PDF after payment confirmation."
          },
          {
            "p": "For more details, please refer to our [Privacy Policy](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Paid products",
    "title": "What is included in the paid report",
    "summary": "It clarifies what has been added to the PDF while keeping the screen unchanged. Values and contents are retrieved from the actual product settings.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Kept the screen unchanged, added only to the PDF",
        "blocks": [
          {
            "p": "Saju calculation and result inquiry are **free**. You can see everything on the screen, including the natal chart, the five elements, today's fortune, and their basis, as nothing has been omitted while creating the paid report."
          },
          {
            "p": "The role of the report is to **add layers not present on the screen**. These layers are not fabricated; they are values that were already calculated during the scoring process but were not used on the screen."
          }
        ]
      },
      {
        "title": "Lifetime saju and this year's luck report PDF — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Domestic payment {priceDomestic} (including VAT), international payment {priceGlobal}. It consists of {pageCount} A4 pages."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "The table of contents is read directly from the product description. **The number of pages is the same as the actual document** — it is not inflated as it is the value stated in the product information notice."
          }
        ]
      },
      {
        "title": "What is not on the screen",
        "blocks": [
          {
            "p": "The free screen shows the natal chart, the five elements, and today's fortune. There are three values that were produced during the calculation process but are not displayed on the screen, and these are the portions of the paid report."
          },
          {
            "ul": [
              "**Ratio of the day stem's allies** — It shows numerically where the judgment of a strong or weak day pillar was made. The judgment name alone does not indicate whether it was on the edge or ample.",
              "**Wang Sang Hyu Su Sa** — How much the month of birth has pushed up each energy. If the power bar indicates 'how much is there', this table indicates 'is it in season'.",
              "**True solar time correction details** — The concept is in the guidance document, but **'how many minutes were shifted in your case'** is a different value for each person, so it is included only in the report."
            ]
          }
        ]
      },
      {
        "title": "What you should know before purchasing",
        "blocks": [
          {
            "p": "**The server does not store files.** Once payment is approved, the document is created and sent immediately, leaving nothing on the server. This service's principle of not saving input values is upheld even in the paid flow."
          },
          {
            "p": "Therefore, **please save the file immediately after payment.** You can receive it up to five times with the same order, but if you leave the result screen and the input values disappear, it cannot be recreated."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Reports are also reference materials",
        "blocks": [
          {
            "p": "Just because the number of pages has increased does not mean the conclusions are more certain. What the report adds is **the basis of the same calculation**, not a stronger assertion. Destiny is a field where conclusions can vary depending on the practitioner, and this service only calculates what can be translated into rules."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Notice",
    "title": "Announcements",
    "summary": "This is a place to inform changes that may affect usage.",
    "backLabel": "Back to the beginning",
    "sections": []
  },
  "contact": {
    "eyebrow": "Contact",
    "title": "Inquiries",
    "summary": "This is the channel for inquiries about usage, refunds, personal information requests, and error reports, along with business information.",
    "backLabel": "Back to the beginning",
    "sections": [
      {
        "title": "Contact by email",
        "blocks": [
          {
            "p": "Please send inquiries to **{email}**. We will respond within 2 business days. For payment and refund inquiries, please include **the order number or the email used for payment** for quicker confirmation."
          },
          {
            "p": "Phone inquiries are received at {customerCenter}."
          }
        ]
      },
      {
        "title": "What can be sent to this channel",
        "blocks": [
          {
            "ul": [
              "**Payment and refund** — If the document has not been created or the payment amount differs from the order, a full refund will be provided. Conditions are in the [Refund Policy](/refund-policy).",
              "**Personal information** — We accept requests for viewing, correction, and deletion. The processing policy is in the [Privacy Policy](/privacy).",
              "**Calculation error report** — If the saju natal chart or scores seem strange, please let us know. If you include when you entered the birth date and time, we can recalculate with the same values."
            ]
          }
        ]
      },
      {
        "title": "Business information",
        "blocks": [
          {
            "ul": [
              "**Business name** — {companyName}",
              "**Representative** — {representative}",
              "**Business registration number** — {businessNumber}",
              "**Mail order business registration number** — {mailOrderNumber}",
              "**Address** — {address}",
              "**Customer center** — {customerCenter}",
              "**Email** — {email}",
              "**Personal information protection officer** — {privacyOfficer}",
              "**Hosting provider** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "There is no need to include your birth date and time in the inquiry email. We do not save inputs, so we cannot retrieve them later, and what needs confirmation is sufficient with the order number. Please only include it when values are absolutely necessary, such as in a calculation error report."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const EN_NOTICES = {
  "kindLabels": {
    "service": "Service",
    "product": "Report",
    "engine": "Calculation criteria",
    "support": "Inquiry"
  },
  "intro": "Changes that affect usage conditions, such as prices and terms, will be posted here before implementation. Internal improvements such as the screen getting faster are not posted here: what appears here is only what you need to know.",
  "empty": {
    "title": "No notices have been posted.",
    "body": "If there are any changes to inform you, they will be posted here."
  },
  "effective": "Effective from {date}",
  "pager": {
    "label": "Notice page",
    "newer": "← Latest",
    "older": "Previous notices →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "The inquiry window and service introduction page have been opened.",
      "body": [
        "We have gathered a single window for inquiries, refunds, personal information requests, and reporting calculation errors. You can check it at the bottom of the screen under 'Inquire'.",
        "When you inform us of something that appears to be a calculation error, please include the date and time of birth you entered. We do not save the input, so without that value, we cannot recalculate."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "In Arabic and Khmer screens, the report will be generated in English.",
      "body": [
        "If you are viewing the screen in Arabic or Khmer, the PDF report you purchase will be created in English. This is because the tool has not yet been able to format these two scripts into paragraphs.",
        "You can still see the screen as it is, and the name written in the report will be exactly as you entered it.",
        "The same information is also provided in advance on the payment screen. We will notify you here when the tool supports these scripts."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "The calculation criteria will be included with the results.",
      "body": [
        "Below the results screen and report, the calculation criteria (e.g., sajulink-natal-v1) are indicated. If the input is the same, the same value will always come out under the same criteria.",
        "If the rules for interpreting myeongri are changed and the scores may differ, we will first post that fact and the effective date here. This is because the numbers in the result links you received previously may change.",
        "The current criteria is v10, and payment is still in preparation."
      ]
    }
  }
} satisfies NoticeCopy;
