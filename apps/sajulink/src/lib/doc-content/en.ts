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
            "p": "Saju-Link establishes the **saju (four-pillars) chart based on your birth date and time and shows what the eight characters signify**. It reads the strength of the five elements and the strength of the day master, and also examines today's fortune based on the day's stem."
          },
          {
            "p": "What you see on the screen is **free and does not require membership.** The paid product is a PDF document containing values not shown on the screen — the basis for distinguishing between a strong day master and a weak day master, Wang Sang Hyu Su Sa, and the correction details for true solar time."
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
            "p": "Scores are given only according to established rules. Concepts from traditional 명리 (myeongri, the study of fate) such as the Ten Gods, earthly branch relationships, and supporting elements are translated into rules for calculation, and **the same input will always yield the same value**. When rules are changed, regression testing is conducted to ensure that previous results remain unchanged."
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
              "**We do not provide fortune-telling.** We do not write that you should meet or avoid anyone. This is a reference material summarizing the perspectives of traditional 명리.",
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
    "summary": "We disclose all the rules used by Saju-Link. You can check where the numbers displayed on the screen come from, including the adjustments for today's fortune, the scores from the earthly branch relationship table, and the boundary values that distinguish between a strong day master and a weak day master.",
    "backLabel": "Back to Home",
    "sections": [
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
    "title": "Saju Chart — Where do the eight characters come from?",
    "summary": "It explains how the year, month, day, and time of birth become the four pillars and eight characters, and identifies which character points to you. It also discusses why it can be viewed even without knowing the exact time of birth.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "Four Pillars, Eight Characters",
        "blocks": [
          {
            "p": "Saju (四柱) literally means **four pillars**. Each of the year, month, day, and time of birth is established as one pillar, and two characters are written for each pillar. Thus, there are a total of eight characters, which is referred to as **원국 (won-guk)**."
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
              "day": "Day Master",
              "dayNote": "Self · Spouse Palace",
              "hour": "Hour Master",
              "hourNote": "Later Years · Usage",
              "stem": "Heavenly Stem",
              "stemNote": "Day Stem = Self",
              "branch": "Earthly Branch",
              "branchNote": "Day Branch = Spouse Palace"
            }
          },
          {
            "p": "What this service shows mostly derives from this one character — the interpretation of tendencies, the strength of the five elements, the energy currently needed, and today's reading are all measured based on the Day Stem. The remaining seven characters indicate 'what environment the Day Stem is placed in'."
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
            "p": "If you do not input the time, the reading will be based on the three pillars and six characters, excluding the Hour Master. We do not guess missing values — arbitrarily assigning an Hour Master can disrupt the strength of the five elements, leading to incorrect conclusions instead of potentially accurate ones."
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
            "p": "The method of counting the eight characters as five elements to assess strength is continued in [Five Elements Strength and Strong/Weak Day Master](/guide/five-elements), while the method of reading the remaining characters based on the Day Stem is continued in [Ten Gods](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Five Elements",
    "title": "Five Elements Strength and Strong/Weak Day Master",
    "summary": "We count the eight characters as five elements to see which energy is strong and which is weak. We disclose the threshold values (45%·35%) that determine the strength of the Day Stem.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "Counting Eight Characters as Five Energies",
        "blocks": [
          {
            "p": "The ten Heavenly Stems and twelve Earthly Branches each belong to one of the **Five Elements (五行)** — Wood (木), Fire (火), Earth (土), Metal (金), Water (水). By counting the characters in the original chart by their respective elements, we can determine which energy is strong and which is weak."
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
            "p": "The energies aligned with the Day Stem are **Humanity and Companion** — the energies that give birth to me and those that are similar to me. Since there are two out of five, if there is no bias, it will be around {evenAllyRatio}. We assess above and below this boundary as balanced."
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
                  "Strong Day Master (身强)",
                  "The energies supporting the Day Stem are abundant."
                ],
                [
                  "{weakThreshold} or higher and less than {strongThreshold}",
                  "Balanced (中和)",
                  "It is difficult to conclude in either direction."
                ],
                [
                  "Less than {weakThreshold}",
                  "Weak Day Master (身弱)",
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
            "p": "Determining that 'needed energy' is the supporting element, and it continues in [Supporting Element](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "How the eight characters are established is in [Saju Original Chart](/guide/natal-chart). How today's Day Master interacts with this strength is covered in [Today's Reading](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Supporting Element",
    "title": "Supporting Element — The Energy Needed Now",
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
        "title": "Supporting Element — Reduce If Excessive, Add If Lacking",
        "blocks": [
          {
            "p": "The supporting element (用神) is **the energy currently needed by this person**. There are several methods to determine it (reducing, adding, illness, and harmony), but the most widely used is **reducing (抑扶)**. If the day master is strong, it is believed that an energy to reduce is needed; if weak, an energy to add is required."
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
                  "Strong Day Master (身强)",
                  "Energy to Reduce — Food and Wealth, Official Position",
                  "Three"
                ],
                [
                  "Weak Day Master (身弱)",
                  "Energy to Add — Resource, Companion",
                  "Two"
                ],
                [
                  "Balanced (中和)",
                  "Cannot be covered by reducing, thus the thinnest energy",
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
            "p": "The day master side is **Resource and Companion** — the energy that gives birth to me and the energy that is like me. Since two out of five are involved, the complete balance will be {evenAllyRatio}. The width is set above and below this {evenAllyRatio}."
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
                  "Strong Day Master"
                ],
                [
                  "{weakThreshold} or more and less than {strongThreshold}",
                  "Balanced"
                ],
                [
                  "Less than {weakThreshold}",
                  "Weak Day Master"
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
            "p": "Balanced means it cannot be covered by reducing. At this time, the two thinnest energies are simply regarded as necessary. In the result screen, it is noted as 'currently thin position' rather than a definitive statement."
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
        "title": "Where to Use the Supporting Element",
        "blocks": [
          {
            "p": "The determined supporting element is used in two places. One is the result screen's **'currently needed energy'**, and the other is [today's fortune](/guide/today-fortune) — whether today's energy corresponds to the supporting element is the item that moves the score the most on that day."
          }
        ]
      },
      {
        "title": "This Is a Simple Judgment",
        "blocks": [
          {
            "p": "Actual destiny analysis considers the formation and seasonal conditions (the warmth and humidity of the season) to determine the supporting element, and conclusions may vary depending on the method. Saju-Link only uses **reducing that can be measured by strength values**. This is due to the principle of using only what can be converted into rules, so the same input will always yield the same answer."
          },
          {
            "p": "Instead, the result screen also presents the strong and weak day master along with the currently needed energy as **reading material**. This is to avoid hiding the basis of the score."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "The Ten Gods",
    "title": "The Ten Gods — The Ten Positions Within My Saju",
    "summary": "Based on the day master, the remaining characters are divided into ten names. It discusses the reasons for distinguishing between regular wealth and side wealth, even if they are the same wealth element.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "The Day Master Is the Person Himself",
        "blocks": [
          {
            "p": "Among the eight characters of the saju, the **day master** (the heavenly stem of the day of birth) refers to the person himself. The remaining seven characters are read as the environment in which that day master exists."
          },
          {
            "p": "**The Ten Gods** (十神) are the ten divisions of how the day master perceives the other characters. The energy that nurtures me is Resource, the energy that is like me is Companion, the energy I give birth to is Food and Wealth, the energy that suppresses me is Official Position, and the energy that I suppress is Wealth — these five branches are further divided into yin and yang, forming ten."
          }
        ]
      },
      {
        "title": "What the Remaining Seven Characters Mean to Me",
        "blocks": [
          {
            "p": "Once the day master is determined, the remaining characters in the original chart each receive a name. The energy that gives birth to me, the energy that is like me, the energy I give birth to, the energy that suppresses me, and the energy that I suppress — these five branches are further divided into **ten** through yin and yang. This is the Ten Gods."
          },
          {
            "p": "Thus, the Ten Gods refer not to relationships with others but to **the positions within myself**. Which positions are thick or thin indicate my tendencies and the way I live."
          }
        ]
      },
      {
        "title": "The Reason for Viewing as the Ten Gods Instead of Three Elements",
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
        "title": "The spouse position is 정재 and 정관",
        "blocks": [
          {
            "p": "Traditional fortune-telling views the spouse position differently based on gender. For men, it is **정재 (正財)**, and for women, it is **정관 (正官)**. Even if they are the same wealth element, only the 정재 that is misaligned in yin and yang is considered the spouse position, while 편재 is read not as a spouse but in terms of activity and wealth."
          }
        ]
      },
      {
        "kind": "note",
        "title": "If you do not specify gender, this position is omitted",
        "blocks": [
          {
            "p": "This is because it cannot be determined which side, 정재 or 정관, to consider as the spouse position. Instead of guessing to fill in a missing value, we read the remaining items without that one."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Today's fortune",
    "title": "How does today's fortune come out?",
    "summary": "Today's day stem is compared to the original chart to score. The twelve relationships of the supporting elements and the seven relationships of the earthly branches, along with all twenty items and their respective additions and subtractions, are fully disclosed.",
    "backLabel": "Calculation basis",
    "sections": [
      {
        "title": "Today, we also establish it in the same way as the eight characters",
        "blocks": [
          {
            "p": "Every day has its own **일진 (日辰)**. Using the same method as establishing the original chart's day cycle, today also has one heavenly stem and one earthly branch attached. Today's fortune is about comparing those two characters to the original chart."
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
            "p": "This is the most significant position. We check whether today's energy corresponds to the 'energy needed right now' determined by [억부용신](/guide/yongsin)."
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
        "title": "Do not consider the 기신 as 'everything except the 용신'",
        "blocks": [
          {
            "p": "If you do that, both the energy that generates the 용신 and the energy that suppresses the 용신 become bad, and the last two rows in the table above become indistinguishable. Only the energy that **pushes harder in the opposite direction** according to the meaning of 억부 is seen as 기신."
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
        "title": "③ Today's earthly branch meets the original chart's earthly branches",
        "blocks": [
          {
            "p": "Today's earthly branch is compared to the original chart's earthly branches. The relationship table itself is in [십이지 관계](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relationship",
                "Addition/Subtraction"
              ],
              "rows": [
                [
                  "full triad (三合)",
                  "{branchSamhap}"
                ],
                [
                  "six-harmony pair (六合)",
                  "{branchYukhap}"
                ],
                [
                  "half triad (半合)",
                  "{branchBanhap}"
                ],
                [
                  "quiet, lasting discord (怨嗔)",
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
            "p": "Even with the same energy, the meaning differs for a strong day master and a weak day master. Therefore, we make one last adjustment."
          },
          {
            "table": {
              "head": [
                "Situation",
                "Adjustment"
              ],
              "rows": [
                [
                  "Weak day master but today supports them",
                  "{weakTodayHelps}"
                ],
                [
                  "Strong day master but today appropriately reduces the burden",
                  "{strongTodayDrains}"
                ],
                [
                  "Strong day master but today thickens the support",
                  "{strongTodayHelps}"
                ],
                [
                  "Weak day master but today adds to the burden",
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
            "p": "The four areas of wealth, love, career, and health inherit a total score of {overallShare}, while the rest is divided according to the Ten Gods and earthly branch relationships relevant to those areas. Therefore, even if the total score is the same, the numbers by area differ from person to person."
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
    "summary": "This is a relationship table showing how today's day master interacts with the natal chart. It reveals what each combination, clash, and discord is and how many points they have.",
    "backLabel": "Calculation Basis",
    "sections": [
      {
        "title": "Earthly Branches are Twelve Characters",
        "blocks": [
          {
            "p": "The twelve earthly branches (十二支) are 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Commonly known zodiac signs — Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep, Monkey, Rooster, Dog, Pig — are each attached to one of these twelve characters."
          },
          {
            "figure": "branch-wheel",
            "caption": "When the twelve characters are arranged in a circle, the relationships are clearly visible. Clash (沖) always faces each other, while six-harmony and discord are closer pairs. These lines are not written in the text but are directly derived from the calculation rules.",
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
            "p": "In saju, each of the four pillars has one earthly branch. **Today's reading** is determined by matching **the day's branch** with the four branches of the original chart using the relationship table below."
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
                  "Triad (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "When all three characters come together, they form a complete elemental formation (局). This is considered the strongest combination.",
                  "{scoreSamhap}"
                ],
                [
                  "Six Harmony (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Pairs that attract each other. This is the most common combination as it consists of only two characters.",
                  "{scoreYukhap}"
                ],
                [
                  "Half Triad (半合)",
                  "Two characters that include one of the royal characters (子·酉·午·卯) from the triad",
                  "A half combination that includes a character that is central to the formation. It does not form a complete elemental formation with just two characters, making it lower than the triad.",
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
                  "Quiet Discord (怨嗔)",
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
        "title": "Triads and Half Triads",
        "blocks": [
          {
            "p": "A triad requires all three characters to be present. Since there are four earthly branches in the original chart, it is possible for the day's branch to combine with them, resulting in a triad — at that time, it receives a score of {scoreSamhap}. If only two characters are involved, it is a half triad."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Half Triads Require Royal Characters to be Recognized",
        "blocks": [
          {
            "p": "There is also a method that counts as a half triad if both characters belong to the same triad group. This allows combinations like 申辰, which are difficult to call a combination, to receive high scores. Therefore, this service recognizes a half triad only when it includes royal characters (子·酉·午·卯), and does not consider combinations like 申辰·巳丑·寅戌·亥未 as valid."
          }
        ]
      },
      {
        "title": "Reason for Separating Quiet Discord",
        "blocks": [
          {
            "p": "The six pairs of quiet discord are seen as frequently as clashes. If we count combinations of both clashes and combinations, these six pairs would all be buried under the no relationship score of {scoreNeutral}, so they are placed separately."
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
            "p": "The lowest clash score is {scoreChung}. It is intentional not to give a value close to 0. In traditional 명리 (myeongri), a clash is not an 'end' but a 'collision', and giving a score close to the bottom would mean the service is making a definitive statement about the relationship."
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
            "p": "Saju consists of four pillars: year, month, day, and hour, with each pillar having one heavenly stem and one earthly branch. Among them, the **earthly branch of the year**, or 연지 (year branch), is the animal we refer to as the zodiac sign."
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
            "p": "Among the eight characters, the one corresponding to the zodiac sign is **one 연지 (year branch)**. The other seven characters — especially the day stem that refers to oneself — have no relation to the zodiac sign."
          },
          {
            "p": "People born in the same year all share the same zodiac sign. Therefore, what can be known from the zodiac sign is only as much as one of the eight characters. This is the reason why this service does not **treat the zodiac sign separately or significantly** — the 연지 (year branch) is calculated for strength and today's 일진 (daily fortune) judgment just like any other earthly branch."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Still, the reason we show the zodiac sign.",
        "blocks": [
          {
            "p": "It is the only position where the meaning is understood even if you do not know the terminology of 명리 (myeongri). If the zodiac sign is noted alongside the 연지 (year branch) on the original chart screen, it becomes a clue for reading the other seven characters."
          }
        ]
      },
      {
        "title": "The year branch remains the same even if you do not know the birth time.",
        "blocks": [
          {
            "p": "If you do not enter the time, the hour pillar is omitted and the strength of the 오행 (five elements) changes. However, the **year branch remains the same** — it is determined solely by the year you were born."
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
            "p": "The year branch (띠) is always the same regardless of the time — [because we only look at the year branch](/guide/zodiac)."
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
            "p": "Saju calculation and result inquiry are **free**. You can see everything on the screen, including the original chart, the five elements, today's luck, and their basis, as nothing has been omitted while creating the paid report."
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
            "p": "The free screen shows the original chart, the five elements, and today's luck. There are three values that were produced during the calculation process but are not displayed on the screen, and these are the portions of the paid report."
          },
          {
            "ul": [
              "**Day stem convenience ratio** — It shows numerically where the judgment of a strong or weak day master was made. The judgment name alone does not indicate whether it was on the edge or ample.",
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
              "**Calculation error report** — If the saju original chart or scores seem strange, please let us know. If you include when you entered the birth date and time, we can recalculate with the same values."
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
  "intro": "Changes that affect usage conditions, such as prices and terms, will be posted here before implementation. There are many internal improvements, such as the screen becoming faster — only what you need to know will be noted here.",
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
        "If the rules for interpreting 명리 (myeongri) are changed and the scores may differ, we will first post that fact and the effective date here. This is because the numbers in the result links you received previously may change.",
        "The current criteria is v10, and payment is still in preparation."
      ]
    }
  }
} satisfies NoticeCopy;
