import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Tungkol sa",
    "title": "Tungkol sa Inyeon-Link",
    "summary": "Ikinukumpara namin ang dalawang birth chart sa tradisyong Korean Saju. Narito ang aming mga kinakalkula, at kung ano ang hindi namin inaangkin.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "Ano ang ginagawa namin",
        "blocks": [
          {
            "p": "Ang Inyeon-Link ay bumubuo ng dalawang birth chart mula sa mga petsa at oras ng kapanganakan at ipinapakita **kung paano nagtatagpo ang dalawang set ng enerhiya.** Maaari mo ring basahin ang iyong sariling chart nang mag-isa at makita kung aling mga temperamento ang karaniwang akma sa iyo."
          },
          {
            "p": "Ang pagbabasa sa screen ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay mga PDF report na nagdadala ng mga numero na hindi ipinapakita ng screen — mga lakas ng elemento, mga pares ng ten-god at ang mga relasyon sa lahat ng apat na haligi."
          }
        ]
      },
      {
        "title": "Ano ang aming kinakalkula",
        "blocks": [
          {
            "p": "Ang mga chart ay binuo mula sa **Korean lunisolar almanac**, at ang oras ng kapanganakan ay itinatama sa **true solar time** para sa lugar ng kapanganakan — ang parehong oras ng orasan ay nangangahulugang ibang posisyon ng araw depende sa kung saan ka ipinanganak."
          },
          {
            "p": "Ang mga score ay nagmumula lamang sa mga nakatakdang patakaran. Ang mga tradisyunal na konsepto — ten gods, relasyon ng mga sanga, ang sumusuportang elemento — ay ipinahayag bilang mga patakaran, kaya **ang parehong input ay palaging nagbibigay ng parehong resulta.** Kapag nagbago ang isang patakaran, nagsasagawa kami ng regression harness upang matiyak na ang mga mas lumang pagbabasa ay hindi nagbago."
          },
          {
            "p": "**Walang AI na kasangkot.** Bawat pangungusap sa screen ay nakatakdang teksto na nakakabit sa isang nakalkulang resulta."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin inaangkin",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagtataya ng kapalaran.** Walang sinuman dito ang nagsasabi sa iyo na ituloy o iwasan ang sinuman. Ito ay isang sanggunian na hinango mula sa isang tradisyon.",
              "**Hindi namin iniimbak ang iyong ipinasok.** Ang mga detalye ng kapanganakan ay ginagamit para sa sandali ng pagkalkula at hindi kailanman isinusulat; ang mga link ng resulta ay nananatili sa bahagi ng URL na hindi ipinapadala ng browser sa server.",
              "**Ang isang score ay hindi hatol sa isang tao.** Ang mababang numero ay hindi nagpapawalang-bisa sa isang relasyon."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang pamamaraan ay inilarawan nang detalyado sa [mga gabay](/guide). Ang mga detalye ng kumpanya at kung paano kami makokontak ay nasa [pahina ng contact](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Batayan ng Kalkulasyon",
    "title": "Ano ang Batayan para sa Kalkulasyon?",
    "summary": "Ibinubunyag ng Inyeon-Link ang lahat ng mga patakaran na ginagamit nito. Maaari mong suriin ang mga item at ang kanilang mga timbang, ang mga score mula sa talahanayan ng relasyon ng earthly branch, at ang mga threshold values na nagtatangi sa pagitan ng isang malakas na day master at isang mahina na day master — makikita mo kung saan nagmumula ang mga numero sa screen.",
    "backLabel": "Bumalik sa Simula",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang mga halagang nakasulat dito ay lahat **direktang binasa mula sa code ng kalkulasyon**. Dahil hindi sila manu-manong isinusulat sa teksto, kung magbago ang mga patakaran, ang mga numero sa dokumentong ito ay magbabago rin."
          }
        ]
      }
    ]
  },
  "guide/how-compatibility": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Ano ang Tinitingnan ng Saju Compatibility?",
    "summary": "Nililinaw nito ang apat na item at ang kani-kanilang mga timbang, at ipinaliliwanag kung bakit ang mga apat na ito ay pinili. Tinutukoy din nito kung bakit maaaring gawin ang mga kalkulasyon kahit na hindi alam ang oras ng kapanganakan.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Pagkalkula at Pagsasama ng Dalawang Axis",
        "blocks": [
          {
            "p": "Ang matching rate ay nagmumula sa dalawang sanga. **Ang Saju compatibility** ay tumitingin sa buong orihinal na chart ng saju ng parehong indibidwal, habang ang **zodiac compatibility** ay tanging isinasaalang-alang ang isang earthly branch mula sa taon ng kapanganakan. Ang huling halaga ay nakukuha sa pamamagitan ng weighted averaging ng dalawa."
          },
          {
            "table": {
              "head": [
                "Axis",
                "Ano ang Isinasaalang-alang",
                "Timbang"
              ],
              "rows": [
                [
                  "Saju Compatibility",
                  "Day stem, day branch, at ang five elements — apat na item",
                  "{weightSaju}"
                ],
                [
                  "Zodiac Compatibility",
                  "Ang relasyon sa pagitan ng mga year branches",
                  "{weightZodiac}"
                ]
              ]
            }
          },
          {
            "p": "Mas mabigat ang bahagi ng saju dahil sa pagkakaiba ng dami ng impormasyong ginamit. Isinasaalang-alang ng saju ang lahat ng apat na haligi, habang ang zodiac ay tumitingin lamang sa isang karakter. Gayunpaman, hindi inaalis ang zodiac sa dalawang dahilan — ito ang pinaka-intuitively understandable na item, at ito ang **tanging axis na ang halaga ay hindi nagbabago kahit na hindi alam ang oras ng kapanganakan**."
          }
        ]
      },
      {
        "title": "Ang Apat na Item ng Saju Compatibility",
        "blocks": [
          {
            "p": "Ang bahagi ng saju ay higit pang nahahati sa apat. Ang bawat item ay pinili upang matiyak na ang kanilang isinasaalang-alang ay hindi nag-ooverlap."
          },
          {
            "figure": "four-pillars",
            "caption": "Ang Saju ay binubuo ng walong karakter na nabuo mula sa mga heavenly stems at earthly branches ng taon, buwan, araw, at oras ng kapanganakan. Ang day stem at day branch na nabanggit sa ibaba ay ang dalawang karakter sa day pillar.",
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
                "Ano ang Itinuturing",
                "Timbang"
              ],
              "rows": [
                [
                  "Relasyon ng Day Stem",
                  "Ano ang relasyon ng mga day stem (日干) ng dalawang tao sa isa't isa — tiningnan sa pamamagitan ng Ten Gods",
                  "{weightDayMaster}"
                ],
                [
                  "Pagkukumplemento ng Five Elements",
                  "Mayroon bang enerhiya ang kapareha na kailangan ko — tiningnan sa pamamagitan ng sumusuportang elemento na kasalukuyang kailangan ng tsart",
                  "{weightElementSupply}"
                ],
                [
                  "Spouse Star",
                  "Tumutugma ba ang day stem ng kapareha sa aking posisyon ng asawa?",
                  "{weightSpouseStar}"
                ],
                [
                  "Relasyon ng Day Branch",
                  "Ang mga day branch (日支) ng dalawang tao ba ay isang kombinasyon o isang clash?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Ang day branch ay binabasa dahil ang tradisyon ay itinuturing ito bilang ang **spouse palace**. Sa apat na haligi, ito ang tumuturo sa kapareha, na ginagawang ito ang unang lugar na tinitingnan para sa pagkakatugma."
          }
        ]
      },
      {
        "title": "Kung ang kasarian ay hindi ibinunyag, ang elemento ng asawa ay hindi isasama",
        "blocks": [
          {
            "p": "Ang elemento ng asawa ay nangangailangan ng kaalaman sa kasarian para sa pagkalkula. Binabasa ng tradisyon ang posisyon na tumuturo sa asawa nang iba depende sa kasarian. Kung hindi ibinunyag, ang item na ito ay **ibubukod** at ang timbang ng natitirang tatlong item ay muling irenormalize."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hindi ito ituturing na 0 puntos",
        "blocks": [
          {
            "p": "Kung ang mga nawawalang posisyon ay itinuturing na 0 puntos, ang iskor ay hindi patas na bababa dahil lamang sa hindi ibinunyag ang kasarian. Ang muling irenormalize ng mga timbang ay pumipigil sa isyung ito."
          }
        ]
      },
      {
        "title": "Maaaring gawin ang mga kalkulasyon nang hindi alam ang oras ng kapanganakan",
        "blocks": [
          {
            "p": "Ang oras ng kapanganakan ay ginagamit upang matukoy ang hour pillar. Kung hindi alam, ang mga kalkulasyon ay gagawin nang walang hour pillar, at ang katotohanang ito ay ipapakita sa screen ng mga resulta. Dahil walang direktang input para sa hour pillar sa apat na item ng pagkakatugma, ang mga halaga ay hindi gaanong magbabago, ngunit ito ay nakakaapekto sa balanse ng five elements."
          },
          {
            "p": "Kung alam mo ang oras, mangyaring piliin din ang lugar ng kapanganakan. Kung ang pamantayang oras ay naiiba mula sa aktwal na solar na posisyon, ang paggamit nito bilang ito ay maaaring magdulot ng hindi pagkakatugma sa hour pillar [(true solar time correction)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Ang parehong input ay palaging magbibigay ng parehong halaga",
        "blocks": [
          {
            "p": "Ang lahat ng mga iskor ay tinutukoy ng mga patakaran. Walang artipisyal na intelihensiya ang ginagamit, ni walang mga random na numero ang ginagamit. Samakatuwid, ang pagpasok ng parehong dalawang petsa ng kapanganakan nang maraming beses ay hindi magbibigay ng iba't ibang resulta. Bilang isang serbisyo na hindi nag-iimbak ng data, ang mga nakaraang resulta ay hindi maaaring ma-retrieve, ngunit binabawi iyon ng **determinismo**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang pagbabago ng mga patakaran ay magtataas ng bersyon",
        "blocks": [
          {
            "p": "Tuwing ang mga patakaran sa pag-score ay binabago, ang bersyon ng engine ay ina-update. Ang bersyon ay nakasulat sa ibaba ng screen ng mga resulta, na nagbibigay-daan sa iyo upang makilala kung aling mga patakaran ang ginamit upang kalkulahin ang mga numerong kasalukuyan mong tinitingnan."
          }
        ]
      },
      {
        "title": "Kung ano ang hindi ang resultang ito",
        "blocks": [
          {
            "p": "Ito ay isang **reference material** na kinakalkula mula sa mga patakaran na itinayo sa pananaw ng tradisyon. Hindi ito isang siyentipikong prediksyon, ni isang tiyak na pahayag tungkol sa relasyon ng dalawang indibidwal. Ang saklaw ng iskor ay itinakda sa isang minimum na humigit-kumulang 45 puntos para sa kadahilanang ito — walang kombinasyon ang magbibigay ng halaga na malapit sa 0 puntos."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Tsart ng relasyon",
    "title": "Paano Nagtatagpo ang mga Zodiac Animal at Day Branch — Ang Tsart ng Labindalawang Branch",
    "summary": "Ang tsart ng relasyon na ginagamit kapag magkatabing inilalagay ang zodiac animal at day branch ng dalawang tao. Ipinapakita nito, para sa bawat isa sa labindalawa, kung aling mga hayop ang bumubuo ng harmonya, clash o discord, at inilalantad ang score ng bawat relasyon.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Iisang tsart ang ginagamit ng mga zodiac animal at day branch",
        "blocks": [
          {
            "p": "Inilalagay ng Inyeon-Link nang magkatabi ang mga earthly branch ng dalawang tao sa dalawang lugar: ang **zodiac compatibility**, na tumitingin sa branch ng taon ng kapanganakan, at ang **day branch compatibility** (ang spouse palace), na tumitingin sa branch ng araw ng kapanganakan. Parehong hinuhusgahan gamit ang tsart sa ibaba; ang pagkakaiba lang ay kung gaano kabigat ang bawat isa sa huling score."
          },
          {
            "figure": "branch-wheel",
            "caption": "Kapag inayos ang labindalawang karakter sa isang bilog, madaling makita ang mga relasyon. Ang clash ay laging nasa tapat mismo, habang ang six-harmony pair at ang tahimik na discord ay mas malapit na magkapitbahay. Hindi iginuhit ng kamay ang mga linyang ito; direkta silang iginuhit mula sa mga patakaran ng kalkulasyon.",
            "labels": {
              "alt": "Isang diagram ng labindalawang earthly branch na nakaayos sa bilog, na may mga linyang nag-uugnay sa mga pares ng six-harmony, clash at discord.",
              "yukhap": "Six-Harmony",
              "chung": "Clash",
              "wonjin": "Discord",
              "rat": "Daga",
              "ox": "Baka",
              "tiger": "Tigre",
              "rabbit": "Kuneho",
              "dragon": "Dragon",
              "snake": "Ahas",
              "horse": "Kabayo",
              "goat": "Tupa",
              "monkey": "Unggoy",
              "rooster": "Manok",
              "dog": "Aso",
              "pig": "Baboy"
            }
          }
        ]
      },
      {
        "title": "Mga relasyon ng bawat isa sa labindalawang zodiac animal",
        "blocks": [
          {
            "p": "Para sa bawat hayop, inililista ng tsart kung aling mga hayop ang may bawat uri ng relasyon dito. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang nakalista, kaya ang hayop na wala sa isang hanay ay walang partikular na relasyon dito — ito ay **neutral**."
          },
          {
            "table": {
              "caption": "Apat na uri ng relasyon mula sa pananaw ng isang hayop",
              "head": [
                "Ang iyong hayop",
                "Magkaakit na pares (Six-Harmony)",
                "Half triad",
                "Tahimik na magkasalungat (Discord)",
                "Harapang banggaan (Clash)"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Baka",
                  "Unggoy · Dragon",
                  "Tupa",
                  "Kabayo"
                ],
                [
                  "Baka (丑)",
                  "Daga",
                  "Manok",
                  "Kabayo",
                  "Tupa"
                ],
                [
                  "Tigre (寅)",
                  "Baboy",
                  "Kabayo",
                  "Manok",
                  "Unggoy"
                ],
                [
                  "Kuneho (卯)",
                  "Aso",
                  "Baboy · Tupa",
                  "Unggoy",
                  "Manok"
                ],
                [
                  "Dragon (辰)",
                  "Manok",
                  "Daga",
                  "Baboy",
                  "Aso"
                ],
                [
                  "Ahas (巳)",
                  "Unggoy",
                  "Manok",
                  "Aso",
                  "Baboy"
                ],
                [
                  "Kabayo (午)",
                  "Tupa",
                  "Tigre · Aso",
                  "Baka",
                  "Daga"
                ],
                [
                  "Tupa (未)",
                  "Kabayo",
                  "Kuneho",
                  "Daga",
                  "Baka"
                ],
                [
                  "Unggoy (申)",
                  "Ahas",
                  "Daga",
                  "Kuneho",
                  "Tigre"
                ],
                [
                  "Manok (酉)",
                  "Dragon",
                  "Ahas · Baka",
                  "Tigre",
                  "Kuneho"
                ],
                [
                  "Aso (戌)",
                  "Kuneho",
                  "Kabayo",
                  "Ahas",
                  "Dragon"
                ],
                [
                  "Baboy (亥)",
                  "Tigre",
                  "Kuneho",
                  "Dragon",
                  "Ahas"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kapag nagkita ang dalawang tao sa tsart",
        "blocks": [
          {
            "p": "Ang pagbasa sa tsart ay paghahanap sa dalawang hayop sa iisang hanay. Narito ang ilang pares bilang halimbawa."
          },
          {
            "ul": [
              "**Daga at Baka** — isang six-harmony. Dalawang karakter lang ang kailangan nito, kaya ito ang harmonyang pinakamadalas lumitaw sa compatibility, at isang magandang harmonya.",
              "**Daga at Dragon** — isang half triad: dalawa sa tatlong karakter na 申子辰, kasama ang nasa gitna (子).",
              "**Daga at Tigre** — wala sa tsart, kaya neutral: hindi harmonya at hindi clash, kundi ang batayang antas lang.",
              "**Daga at Tupa** — isang discord. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma.",
              "**Tigre at Unggoy** — isang clash. Magkaharap sila nang eksakto at itinuturing na nagbabanggaan nang harapan."
            ]
          }
        ]
      },
      {
        "title": "Ilang puntos ang nakukuha ng bawat relasyon",
        "blocks": [
          {
            "table": {
              "caption": "Mula sa pinakamataas. Ito ang mga halagang aktuwal na ginagamit ng Inyeon-Link.",
              "head": [
                "Relasyon",
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
                  "Parehong branch",
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
            "p": "Ang parehong branch (dalawang taong magkaparehong hayop) ay nangangahulugang pagkakahawig, hindi atraksyon, kaya bahagya itong nasa itaas ng neutral. Zodiac man o day branch compatibility, ang halaga sa talahanayang ito ang direktang pumapasok sa huling score."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bakit wala sa tsart ang buong triad",
        "blocks": [
          {
            "p": "Ang buong triad (申子辰, 巳酉丑, 寅午戌, 亥卯未) ay nangangailangan ng lahat ng tatlong karakter. Kapag dalawang tao ang pinagtabi, dalawa lang ang makukuha, kaya hindi puwedeng mangyari ang buong triad sa compatibility at half triad lang ang lumilitaw. Pinananatili ang score ng buong triad na {scoreSamhap} para sa kasong nagsasama ang tatlong karakter sa loob ng sariling tsart ng isang tao."
          }
        ]
      },
      {
        "title": "Ang 申辰, 巳丑, 寅戌 at 亥未 ay hindi binibilang na harmonya",
        "blocks": [
          {
            "p": "May mga pamamaraang itinuturing na half triad ang alinmang dalawang karakter ng iisang triad group. Hindi ito ginagawa ng Inyeon-Link: gaya ng ipinapakita ng half-triad column sa itaas, tinatanggap lang nito ang mga pares na may kasamang **royal branch** sa gitna ng grupo (子, 午, 卯, 酉). Ang pares na wala nito ay walang sentrong mapagtitipunan ng pormasyon, kaya itinuturing itong neutral."
          }
        ]
      },
      {
        "title": "Hindi nasa pinakailalim ang discord at clash",
        "blocks": [
          {
            "p": "Kung harmonya at clash lang ang bibilangin, malilibing sa neutral ang lahat ng anim na pares ng discord. Kaya may sarili itong lugar ang discord: mas mataas kaysa sa harapang clash at mas mababa kaysa sa neutral, sa {scoreWonjin} puntos."
          },
          {
            "p": "Kahit ang clash ay may natitirang {scoreChung} puntos. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon. Kung halos zero ang halaga, magpapahayag ang serbisyo ng hatol sa dalawang tao, kaya pinananatiling sapat ang lawak ng saklaw upang maipakita ang pagkakaiba nang hindi nagpapahayag ng hatol."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiac",
    "title": "Bakit isinasama ng zodiac compatibility ang year branch?",
    "summary": "Ang zodiac ay ang earthly branch ng taon ng kapanganakan. Ito ang nagpapaliwanag kung bakit ito ay nagmula sa saju year pillar sa halip na sa kalendaryo, at nililinaw ang kahalagahan ng zodiac compatibility.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang zodiac ay ang earthly branch ng taon ng kapanganakan",
        "blocks": [
          {
            "p": "Ang saju ay binubuo ng apat na pillars: taon, buwan, araw, at oras, kung saan ang bawat pillar ay naglalaman ng isang heavenly stem at isang earthly branch. Ang **year branch** ang nagdadala ng hayop na tinatawag nating zodiac sign."
          },
          {
            "table": {
              "caption": "Ang Labindalawang Earthly Branches at Zodiac",
              "head": [
                "Earthly Branch",
                "Zodiac"
              ],
              "rows": [
                [
                  "子",
                  "Daga"
                ],
                [
                  "丑",
                  "Baka"
                ],
                [
                  "寅",
                  "Tigre"
                ],
                [
                  "卯",
                  "Kuneho"
                ],
                [
                  "辰",
                  "Dragon"
                ],
                [
                  "巳",
                  "Ahas"
                ],
                [
                  "午",
                  "Kabayo"
                ],
                [
                  "未",
                  "Tupa"
                ],
                [
                  "申",
                  "Unggoy"
                ],
                [
                  "酉",
                  "Manok"
                ],
                [
                  "戌",
                  "Aso"
                ],
                [
                  "亥",
                  "Baboy"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gumagamit kami ng taon ng saju, hindi ng taon ng kalendaryo",
        "blocks": [
          {
            "p": "Ang punto kung saan nagbabago ang zodiac ay hindi Enero 1 ng solar calendar o Lunar New Year. Ang pamantayan para sa pagbabago ng taon sa saju ay **Ipchun**. Samakatuwid, ang mga ipinanganak sa Enero o maagang Pebrero ay maaaring magkaroon ng ibang zodiac year kaysa sa nasa kalendaryo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang dahilan kung bakit hindi kami nagtatanong nang direkta tungkol sa zodiac",
        "blocks": [
          {
            "p": "Ito ang dahilan kung bakit kinokolekta lamang namin ang petsa ng kapanganakan nang hindi nagtatanong para sa zodiac sa input screen. Kapag kinakalkula ng saju engine ang year branch, ang hangganan ng Ipchun ay awtomatikong inaayos. Kung pipiliin mo ito nang direkta, ang isang ipinanganak sa maagang Pebrero ay maaaring pumili ng zodiac na hindi tumutugma sa kanilang aktwal na zodiac."
          }
        ]
      },
      {
        "title": "Ang zodiac compatibility ay isinasaalang-alang lamang ang isang relasyon",
        "blocks": [
          {
            "p": "Ang kalkulasyon ng zodiac compatibility ay simple. Ito ay naghahambing sa year branches ng dalawang tao upang matukoy kung ang relasyon ay harmonya, clash, o quiet discord, at ginagamit ang score na iyon. Dahil isa lamang ang item, walang pangangailangan na ipamahagi ang mga timbang."
          },
          {
            "p": "Ang mga score para sa bawat relasyon ay nakalista lahat sa [Twelve Branches Relationship Table](/guide/branches). Ang day branch compatibility ay gumagamit ng parehong talahanayan."
          }
        ]
      },
      {
        "title": "Ang dahilan para sa pagtukoy ng timbang",
        "blocks": [
          {
            "p": "Ang zodiac compatibility ay kumakatawan sa {weightZodiac} ng huling matching rate. Habang ang saju compatibility ay tumitingin sa lahat ng apat na pillars, ang zodiac ay isinasaalang-alang lamang ang isang karakter, kaya hindi sila maaaring timbangin nang pantay."
          },
          {
            "p": "Gayunpaman, may dalawang dahilan kung bakit hindi ito tinanggal."
          },
          {
            "ul": [
              "**Ito ang pinaka-intuitively understandable na item**. Kahit na hindi alam ang bokabularyo ng tradisyon, 'ang tigre at ang unggoy ay nagkakaroon ng clash' ay may kahulugan.",
              "**Ito ang tanging axis na hindi nagbabago kahit na hindi alam ang oras ng kapanganakan**. Kung hindi mo alam ang oras, nawawala ang hour pillar at nagbabago ang lakas ng five elements, ngunit ang year branch ay nananatiling pareho."
            ]
          }
        ]
      },
      {
        "title": "Maaari mo ring tingnan ang zodiac compatibility nang hiwalay",
        "blocks": [
          {
            "p": "Sa resulta ng screen, ipinapakita namin ang mga score para sa parehong saju compatibility at zodiac compatibility nang hiwalay. Kung ang huling matching rate lamang ang ipinakita, hindi malinaw kung saan nagmula ang numerong iyon. Kung ang dalawang halaga ay makabuluhang magkakaiba, ang sarili nito ay karapat-dapat na pansinin."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Ten Gods",
    "title": "Ten Gods at Posisyon ng Asawa",
    "summary": "Tinitingnan namin kung ano ang day stem ng bawat tao sa isa't isa sa pamamagitan ng Ten Gods. Ipinaliwanag namin kung bakit ang direktang kayamanan at hindi direktang kayamanan ay binabasa nang iba kahit na pareho silang kayamanan.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang day stem ay ang tao mismo",
        "blocks": [
          {
            "p": "Sa walong karakter ng saju, ang **day stem** (ang heavenly stem ng araw ng kapanganakan) ay tumutukoy sa tao mismo. Ang natitirang pitong karakter ay binabasa bilang kapaligiran kung saan nakalagay ang day stem na iyon."
          },
          {
            "p": "**Ten Gods** (十神) ay naghahati kung paano nakikita ng day stem ang ibang mga karakter sa sampung kategorya. Ang nag-aalaga sa akin ay **resource** (pinagkukunan), ang kapareho ko ay **peer** (kapantay), ang aking nililikha ay **output** (produkto), ang aking kontrolado ay **wealth** (yaman), at ang kumokontrol sa akin ay **authority** (awtoridad) — bawat isa sa limang ito ay nahahati pa sa polaridad, na bumubuo ng sampu."
          }
        ]
      },
      {
        "title": "Ano ang day stem ng bawat tao sa isa't isa",
        "blocks": [
          {
            "p": "Ito ang unang item sa pagkakatugma. Kapag natukoy na kung paano nakikita ng day stem ni A ang day stem ni B, natutukoy din ang pananaw ni B kay A, kaya't may **anim na posibilidad lamang**."
          },
          {
            "table": {
              "caption": "Sa pagkakasunod-sunod ng pinakamataas na iskor",
              "head": [
                "Pares",
                "Yin/Yang",
                "Pangalan",
                "Kahulugan"
              ],
              "rows": [
                [
                  "Direct Wealth ↔ Direct Authority",
                  "Taliwas na polarity",
                  "Mainit na ugnayan (有情)",
                  "Ito ang pares na tradisyonal na nakikita bilang posisyon ng asawa. Ang yin at yang ay hindi magkatugma, na umaakit sa isa't isa."
                ],
                [
                  "Hurting Officer ↔ Direct Resource",
                  "Taliwas na polarity",
                  "Hurting Officer na may Seal (傷官佩印)",
                  "Isang panig ang bumabalot sa matinding enerhiya ng kabilang panig."
                ],
                [
                  "Kaibigan ↔ Kaibigan",
                  "Parehong polarity",
                  "Pantay",
                  "Sila ay magkatulad at pantay, ngunit hindi nagtutulak sa isa't isa."
                ],
                [
                  "Kakalaban ↔ Kakalaban",
                  "Taliwas na polarity",
                  "Kumpetisyon",
                  "Sila ay umaakit sa isa't isa ngunit nagkakaroon ng kumpetisyon para sa parehong posisyon."
                ],
                [
                  "Indirect Wealth ↔ Indirect Authority",
                  "Parehong polarity",
                  "Malamig na ugnayan (無情)",
                  "Ang stimulasyon ay malaki, ngunit ang pasanin ay mabigat din."
                ],
                [
                  "Eating God ↔ Indirect Resource",
                  "Parehong polarity",
                  "Ang owl star ay umaagaw ng pagkain (梟神奪食)",
                  "Ang enerhiya na ibinibigay ay kinukuha ng kapareha, na humaharang sa daloy."
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang Yin at Yang ay nasa isang sangandaan",
        "blocks": [
          {
            "p": "Ang panig kung saan hindi magkatugma ang yin at yang (Proper Wealth, Proper Officer, Proper Companion) ay emosyonal, habang ang parehong panig (Resource, Officer, Companion) ay walang emosyon, na siyang prinsipyo na naghihiwalay sa tamang at panig ng Ten Gods."
          }
        ]
      },
      {
        "title": "Ang dahilan para tingnan gamit ang Ten Gods sa halip na tatlong elemento",
        "blocks": [
          {
            "p": "May isang paraan ng pagtingin sa relasyon ng day stem sa tatlong elemento (mutual generation, sameness, mutual overcoming). Ito ay simple, ngunit **nawawala ang yin at yang.** 甲 (yang wood) at 乙 (yin wood) ay nagiging parehong 'sameness' tulad ng 甲 at 甲, at ang mutual overcoming ay pinagsasama sa isang solong iskor na walang direksyon o yin at yang."
          },
          {
            "p": "Ang posisyon ng asawa ay dapat suriin batay sa Ten Gods. Kung ang mga item na tiningnan ng five elements at ang mga item na tiningnan ng Ten Gods ay pinagsama sa isang makina, magkakaroon ng dalawang pamantayan para sa parehong dalawang karakter. Samakatuwid, pinagsasama natin gamit ang Ten Gods."
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa ay Proper Wealth at Proper Officer",
        "blocks": [
          {
            "p": "Sa tradisyon, kung aling Ten Gods ang kumakatawan sa isang asawa ay nag-iiba ayon sa kasarian."
          },
          {
            "table": {
              "head": [
                "Kasarian",
                "Puwesto ng Asawa",
                "Kaukulang Puwesto"
              ],
              "rows": [
                [
                  "Lalaki",
                  "Direct Wealth (正財)",
                  "Indirect Wealth (偏財)"
                ],
                [
                  "Babae",
                  "Direct Authority (正官)",
                  "Indirect Authority (偏官)"
                ]
              ]
            }
          },
          {
            "p": "Kahit na pareho silang resource, tanging ang emosyonal na **Proper Wealth** ang itinuturing na posisyon ng asawa, habang ang Resource ay binabasa bilang kalikasan ng aktibidad at yaman. Samakatuwid, ang Proper Wealth at Proper Officer ay binibilang bilang 2 puntos, habang ang Resource at Officer ay binibilang bilang 1 punto, at ang parehong direksyon ay pinagsasama — kung pareho silang nakikita bilang mga posisyon ng asawa, ito ang pinakamataas."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kung ang kasarian ay hindi isiniwalat, alisin ang item na ito",
        "blocks": [
          {
            "p": "Kung ang isang hindi mapagpasyang item ay itinakda sa 0 puntos, nagreresulta ito sa hindi patas na mababang iskor. Ang natitirang timbang pagkatapos alisin ang item ay muling pinapantay [(item at weight)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Ipinapakita rin namin ang hugis ng relasyon",
        "blocks": [
          {
            "p": "Bilang karagdagan sa iskor, inilalarawan namin **ano ang hugis** ng pares ng mga day stem sa resulta ng screen. Kung sila ay magkatulad na posisyon, kung ang isang panig ay sumusuporta sa isa, o kung ang isang panig ay pinipigilan — kung ito ay isang sumusuportang o pinipigilang relasyon, nililinaw namin kung aling panig ang humahawak sa posisyon na iyon."
          },
          {
            "p": "Kung isang iskor lamang ang ipinapakita, naiwan ang tanong na 'ano ngayon'. Ang hugis ay hindi isang iskor kundi isang bagay na dapat basahin, at kahit ang mga pares na may mababang iskor ay mayroong bagay na dapat ipaliwanag."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Ang five elements",
    "title": "Suportang Elemento — Ang enerhiya na kinakailangan ngayon",
    "summary": "Tinitingnan namin ang five elements hindi bilang 'pumili ba sila ng dalawa' kundi bilang 'mayroon ba ang kapareha ng kailangan ko'. Ipinapahayag din namin ang hangganan na nagtatangi sa isang malakas na day master mula sa isang mahina.",
    "backLabel": "Batayan ng pagkalkula",
    "sections": [
      {
        "title": "Kung ang five elements ay 'balanse' ay hindi isang tanong ng pagkakatugma",
        "blocks": [
          {
            "p": "Mayroong isang paraan ng pagsukat kung ang limang enerhiya ay pantay na ipinamamahagi sa pamamagitan ng pagsasama ng five elements ng dalawang tao. Gayunpaman, ang tanong ng pagkakatugma ay hindi iyon. **Mayroon ba ang kapareha ng kailangan ko?**"
          },
          {
            "p": "Ang antas ng balanse ay simetriko, ngunit ang pagkumplemento ay likas na asimetriko. Ito ay dahil ang kailangan ni A ay iba sa kailangan ni B. Samakatuwid, sinusukat namin ang bawat panig nang hiwalay at kinukuha ang average — dahil ito ay isang average, ang kabuuang iskor ay nananatiling simetriko."
          }
        ]
      },
      {
        "title": "Suportang Elemento — Bawasan kung labis, idagdag kung kulang",
        "blocks": [
          {
            "p": "Ang Suportang Elemento (用神) ay 'ang enerhiya na kailangan ng taong ito sa ngayon'. Mayroong ilang mga paraan upang matukoy ito (pagsugpo, pagsuporta, sakit, at komunikasyon), ngunit maaari itong isalin sa mga patakaran, at ang pinaka-malawak na ginagamit ay **pagsugpo (抑扶)**. Kung ang day master ay malakas, nakikita na ang enerhiya na dapat bawasan ay kinakailangan, at kung mahina, ang enerhiya na dapat idagdag ay kinakailangan."
          },
          {
            "table": {
              "head": [
                "Hatol",
                "Ano ang kinakailangan",
                "Gaano karami"
              ],
              "rows": [
                [
                  "Malakas na day master (身强)",
                  "Pababang enerhiya — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Tatlo"
                ],
                [
                  "Mahinang day master (身弱)",
                  "Pagdaragdag ng enerhiya — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Dalawa"
                ],
                [
                  "Balanseng (中和)",
                  "Hindi maaaring sakupin ng suportang elemento, kaya ito ang pinakamahinang enerhiya",
                  "Dalawa"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga threshold na halaga para sa lakas at kahinaan",
        "blocks": [
          {
            "p": "Ang panig ng day stem ay **印星 at 比劫** — ang enerhiya na nagbibigay-buhay sa akin at ang enerhiya na katulad ko. Dahil dalawa sa lima, kung ang enerhiya ay ganap na balanse, ito ay nagiging {evenAllyRatio}. Isang saklaw ang itinakda sa itaas at ibaba ng halagang iyon."
          },
          {
            "table": {
              "caption": "Ang proporsyon ng mga kaalyado (印星 + 比劫) sa kabuuang kapangyarihan",
              "head": [
                "Proporsyon",
                "Hatol"
              ],
              "rows": [
                [
                  "{strongThreshold} o higit pa",
                  "Malakas na day master"
                ],
                [
                  "{weakThreshold} o higit pa at mas mababa sa {strongThreshold}",
                  "Balanseng"
                ],
                [
                  "Mas mababa sa {weakThreshold}",
                  "Mahinang day master"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang balanse ay isang 'mas hindi tiyak na hatol'",
        "blocks": [
          {
            "p": "Ang balanse ay nangangahulugang hindi ito maaaring sakupin ng suportang elemento. Sa panahong ito, simpleng tinitingnan namin ang dalawang pinakamahinang enerhiya bilang kinakailangan. Sa resulta ng screen, ito ay itinatala bilang 'kasalukuyang nasa isang manipis na posisyon' sa halip na isang tiyak na pahayag."
          }
        ]
      },
      {
        "title": "Ang kapangyarihan ay hindi ang bilang ng mga karakter",
        "blocks": [
          {
            "p": "Kapag binibilang ang kapangyarihan ng five elements, hindi lamang namin binibilang ang walong karakter gaya ng kanilang hitsura. Gumagamit kami ng isang halaga na sumasalamin sa nakatagong heavenly stems (地藏干) sa loob ng earthly branches at ang panahon ng enerhiya ng buwan (月令) kung kailan ipinanganak ang isang tao."
          },
          {
            "p": "Kung bibilangin lamang namin ang mga surface character, nawawala ang katotohanan na kahit ang dalawang karakter ng 木 ay maaaring magkaroon ng ganap na magkakaibang lakas depende sa panahon. Ang 木 ng tagsibol at ang 木 ng taglagas, kahit na pareho silang karakter, ay may iba't ibang kapangyarihan."
          }
        ]
      },
      {
        "title": "Pagbibilang ng antas ng pagkakabuo",
        "blocks": [
          {
            "p": "Tinitingnan namin ang proporsyon ng aking suportang elemento sa kapangyarihan ng kalaban. Gayunpaman, hindi namin ginagamit ang proporsyon na iyon nang direkta kundi **hinahati ang inaasahan sa laki ng suportang elemento.** Kapag malakas, ang suportang elemento ay tatlo (inaasahan 60%), at kapag mahina, ito ay dalawa (inaasahan 40%), kaya ang paggamit ng proporsyon nang direkta ay nangangahulugang ang isang malakas na tao ay palaging tumatanggap ng mas mataas na iskor."
          },
          {
            "p": "Kung napuno sa inaasahang antas, isang iskor na malapit sa 78 puntos ang nakukuha, at kung napuno nang higit pa, umaabot ito sa 100 puntos, habang kung ito ay kapansin-pansing kulang, papunta ito sa 55 puntos. Dito rin, ang ibaba ay hindi itinakda sa 0."
          }
        ]
      },
      {
        "title": "Ito ay isang paunang hatol",
        "blocks": [
          {
            "p": "Ang aktwal na pagsusuri ng saju ay isinasaalang-alang ang pormasyon at klima ng panahon (ang init at halumigmig ng panahon) upang matukoy ang suportang elemento, at ang mga konklusyon ay maaaring magbago depende sa ginamit na pamamaraan. Ang Inyeon-Link ay gumagamit lamang ng mga suportang elemento na maaaring masukat sa pamamagitan ng **mga halaga ng kapangyarihan.** Ito ay dahil sa prinsipyo ng paggamit lamang ng maaaring isalin sa mga patakaran, kaya ang parehong input ay palaging magbibigay ng parehong sagot."
          },
          {
            "p": "Sa halip, ang resulta ng screen ay nagtatanghal din ng lakas at kahinaan ng bawat tao kasama ang kasalukuyang kinakailangang enerhiya bilang **mga materyal na binabasa**. Ito ay upang maiwasan ang pagtatago ng batayan ng iskor."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Ang aming mga pamantayan",
    "title": "Inyeon’s Match — Ang dahilan kung bakit hindi nagbibigay ng kabuuang iskor",
    "summary": "Kinuha lamang namin ang data ng isang tao habang iniiwan ang posisyon ng kalaban na walang laman at pinapalitan ang lahat ng posibleng halaga sa posisyon na iyon. Ipinaliwanag namin ang dahilan kung bakit hindi naglalakip ng kabuuang iskor sa uri na nakuha sa ganitong paraan.",
    "backLabel": "Batayan ng pagkalkula",
    "sections": [
      {
        "title": "Ang mga kalkulasyon ay ginagawa habang iniiwan ang posisyon ng kalaban na walang laman",
        "blocks": [
          {
            "p": "Ang mga iskor ng pagkakatugma ay kinakalkula sa pamamagitan ng pagtutugma ng dalawang tao. **Inyeon’s Match** ay kumukuha lamang ng data ng isang tao habang iniiwan ang posisyon ng kalaban na walang laman at sinusubukan ang lahat ng posibleng halaga na maaaring pumasok sa posisyon na iyon. Para itong pagpapatakbo ng makina ng pagkakatugma sa reverse."
          },
          {
            "p": "Samakatuwid, hindi kinakailangan na malaman ang petsa ng kapanganakan ng kalaban. Maaari pa rin nating sabihin, 'Anong uri ng match profile ang angkop para sa akin?' tungkol sa isang tao na hindi pa natin nakikilala."
          }
        ]
      },
      {
        "title": "Hindi kami nagpatakbo ng milyon-milyong kumbinasyon",
        "blocks": [
          {
            "p": "Ang iskor ng pagkakatugma sa saju ay binubuo ng apat na item, at **ang bawat item ay hindi nag-o-overlap sa kung ano ang sinusuri nito.**"
          },
          {
            "table": {
              "head": [
                "Item",
                "Ano ang axis ng pagsusuri",
                "Bilang ng mga kaso"
              ],
              "rows": [
                [
                  "Relasyon ng day stem · Kalikasan ng asawa",
                  "Ang mga day stem ng parehong tao — heavenly stems",
                  "10"
                ],
                [
                  "Pagsasaklaw ng five elements",
                  "Ang aking supporting element at ang lakas ng five elements ng kalaban",
                  "5"
                ],
                [
                  "relasyon ng day branch",
                  "ang mga day branch ng dalawang tao",
                  "12"
                ],
                [
                  "relasyon ng zodiac",
                  "ang mga year branch ng dalawang tao",
                  "12"
                ]
              ]
            }
          },
          {
            "p": "Dahil ang mga halaga ay hindi nagbabahagi sa pagitan ng mga item, **ang paghahanap ng pinakamataas na punto para sa bawat branch ay magiging kabuuang pinakamataas na punto.** Walang kinakailangang suriin ang lahat ng kumbinasyon ng mga petsa ng kapanganakan — sapat na ang pagtatakda ng sampung heavenly stems, labindalawang earthly branches, at five elements."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Parehong mga patakaran ang nalalapat",
        "blocks": [
          {
            "p": "Ang mga iskor na nakasulat dito ay direktang kinuha mula sa makina ng pagkakatugma. Dahil walang bagong mga patakaran na nilikha, ang uri na lumalabas sa itaas dito ay magkakaroon din ng pinakamataas na iskor para sa item na iyon sa aktwal na pagkakatugma. Kung ang mga patakaran ng pagkakatugma ay binago, susunod ang screen na ito."
          }
        ]
      },
      {
        "title": "Walang kabuuang iskor na ibinibigay",
        "blocks": [
          {
            "p": "Ito ang pinakamahalagang desisyon sa screen na ito. Ang pagkuha ng mga pinakamataas na iskor para sa bawat branch ay maaaring mukhang nagbubunga ng 'perpektong tugma', ngunit ang taong iyon ay **maaaring hindi talaga umiiral.**"
          },
          {
            "p": "Sa mga totoong tao, ang day master at ang five elements ay hindi gumagana nang hiwalay. Ang isang tao na may 甲木 ay karaniwang may malakas na 木 energy din. Ang pamamaraang ito ng pagbilang ng mga branch nang hiwalay ay hindi isinasaalang-alang ang ugnayang iyon, kaya ang halaga na nakuha sa pamamagitan ng pagkonekta ng mga pinakamataas na iskor para sa bawat branch ay nagiging kumbinasyon na hindi umiiral sa realidad."
          },
          {
            "p": "Samakatuwid, ang screen ay nagpapakita lamang ng **item scores** at hindi nagbibigay ng kabuuang iskor. Ang kabuuang iskor ay kinakalkula sa pamamagitan ng pagtanggap ng petsa ng kapanganakan ng ibang tao para sa [saju compatibility](/compatibility)."
          }
        ]
      },
      {
        "title": "Paano basahin ang 'mga uri ng pagtutugma'",
        "blocks": [
          {
            "p": "Ang resulta ay nangangahulugang 'kung makikita mo ang isang tao ng ganitong uri, ang item na ito ay magkakaroon ng mataas na iskor'. Ito ay hindi isang pamantayan para sa pagpili ng isang tao, kundi isang paraan upang basahin ito mula sa isang pananaw ng pag-unawa sa sarili."
          },
          {
            "p": "Ang mga dahilan kung bakit ang ilang mga uri ay nagkaroon ng mataas na iskor ay nakatala rin item sa item — kung ang day master ay nasa paborableng posisyon, o kung ang taong iyon ay may enerhiya na kasalukuyan kong kailangan."
          }
        ]
      },
      {
        "title": "Kagamitan sa pagkumpirma",
        "blocks": [
          {
            "p": "Maaaring magtaka ka kung ang taong nasa isip mo ay tumutugma sa uri na iyon. Sa pamamagitan ng pagpasok ng kanilang petsa ng kapanganakan sa kagamitan sa pagkumpirma sa screen ng mga resulta, ikaw ay bibigyan ng impormasyon tungkol sa kanilang day master, day branch, at year branch. Ang mga input na halaga ay hindi nai-save sa oras na ito [(hindi nai-save)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Oras",
    "title": "Hiwalay na Itinatama ang Oras ng Kapanganakan ng Bawat Tao",
    "summary": "Hiwalay na kinakalkula ng compatibility ang oras ng dalawang tao. Ipinapaliwanag nito kung paano ipinapatupad ang pagwawasto kapag magkaiba ang kanilang lugar ng kapanganakan at panahon, at kung ano ang nagbabago kapag isa lang sa kanila ang hindi alam ang oras.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Hindi magkasundo ang orasan at ang araw",
        "blocks": [
          {
            "p": "Sa saju, ang oras ng kapanganakan ay binabasa mula sa posisyon ng araw, hindi mula sa orasan. Ngunit ang buong bansa ay may iisang standard time, kaya nagkakalayo ang orasan at ang araw ng alinmang lugar."
          },
          {
            "p": "Ang standard time ng Korea ay nakabatay sa 135°E, habang ang Seoul ay nasa humigit-kumulang 127°E. Mas huli ang pag-abot ng araw ng Seoul sa pinakamataas na punto kaysa sa sinasabi ng orasan, nang mga **32 minuto**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kayang ilipat ng 32 minuto ang hour pillar nang isang hakbang",
        "blocks": [
          {
            "p": "Ang ipinanganak sa Seoul sa 11:40 ayon sa orasan ay ipinanganak sa 11:08 sa true solar time, na nasa loob pa rin ng oras ng Kabayo (午, 11:00–13:00). Kung ipinanganak sa 11:20 ayon sa orasan, ipinanganak siya sa 10:48, na nasa oras ng Ahas (巳, 9:00–11:00). Ang pagwawasto ay para sa mga taong nasa eksaktong ganitong hangganan."
          }
        ]
      },
      {
        "title": "Hiwalay na ipinapatupad ang pagwawasto sa bawat tao",
        "blocks": [
          {
            "p": "Binubuo ng compatibility ang tsart ng bawat tao nang hiwalay. Kaya hinihingi ng input screen ang lugar ng kapanganakan **para sa bawat tao**. Kung ang isa ay ipinanganak sa Seoul at ang isa naman ay sa ibang bansa, hiwalay na itatama ang kanilang oras, na may magkaibang longitude at time zone."
          },
          {
            "p": "Kasalukuyang may {cityCount} lugar ang listahan ng mga lungsod. Para sa mga bansang malaki ang pagkakaiba ng longitude, hinahati ang mga lungsod, dahil **ang 15° ng longitude ay naglilipat sa hour pillar nang isang hakbang**."
          },
          {
            "p": "Kung wala kang pipiliin, Seoul ang gagamitin. Kung isa lang ang ipinanganak sa ibang bansa at parehong naiwan sa Seoul, ang hour pillar lang ng taong ipinanganak sa ibang bansa ang magkakamali; hindi apektado ang mga halaga ng kabilang tao, dahil ipinapatupad ang pagwawasto bawat tao."
          }
        ]
      },
      {
        "title": "Iba-iba ang standard time sa bawat panahon",
        "blocks": [
          {
            "p": "Ang dalawang taong magkaiba ang edad ay namuhay sa ilalim ng standard time ng magkaibang panahon. Kaya hindi sapat ang pagkakaiba ng longitude lamang."
          },
          {
            "ul": [
              "**Bago ang 1912** — walang pinag-isang standard time ang Korea (local mean time).",
              "**1954–1961** — ang standard time ay UTC+8:30.",
              "**1948–51 · 1955–60 · 1987–88** — umiiral ang daylight saving time."
            ]
          },
          {
            "p": "Hindi nagtatakda ang Inyeon-Link ng nakapirming standard meridian. Hinahanap nito ang **IANA time zone** ng lugar ng kapanganakan upang malaman ang standard time na aktuwal na ginagamit sa sandaling iyon, kaya naipapatupad ang sariling panahon ng bawat tao kahit magkaiba ang taon ng kanilang kapanganakan."
          }
        ]
      },
      {
        "title": "Pagkatapos lang ng hatinggabi, nagbabago ang day stem",
        "blocks": [
          {
            "p": "Ang pagwawasto ay −32 minuto, kaya ang ipinanganak sa pagitan ng 00:00 at 00:32 ayon sa orasan ay ipinanganak sa **oras na 23:00 ng nakaraang araw** sa true solar time. Ibinabalik din ang petsa."
          },
          {
            "p": "Napakahalaga nito sa compatibility. Kapag umatras nang isang araw ang day pillar, nagbabago ang parehong day stem at day branch, kaya muling kinakalkula gamit ang ibang mga karakter ang relasyon ng day stem, ang Spouse Star at ang relasyon ng day branch, at gumagalaw din ang lakas ng five elements."
          }
        ]
      },
      {
        "title": "Ayos lang kung isa lang ang hindi alam ang oras",
        "blocks": [
          {
            "p": "Opsyonal ang oras ng kapanganakan, at nakakalkula pa rin ang compatibility kahit isa lang sa dalawa ang hindi nakakaalam ng oras. Ang taong hindi nakakaalam lang ang kinakalkula nang walang hour pillar, at sinasabi iyon ng result screen. Nananatili ang mga halaga ng kabilang tao."
          },
          {
            "p": "Wala sa apat na item ng compatibility ang direktang gumagamit ng hour pillar, ngunit naaapektuhan nito ang lakas ng five elements, kaya mas tumpak kung ilalagay mo ito kung alam mo. Pareho ang halaga ng zodiac compatibility mayroon man o walang oras — [tumitingin lang ito sa year branch](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Privacy",
    "title": "Paano Namin Iniiwasang Mag-imbak ng Detalye ng Dalawang Tao",
    "summary": "Hinihingi rin ng compatibility ang petsa ng kapanganakan ng ibang tao. Ipinapaliwanag nito, sa teknikal na paraan, kung ano ang ibig sabihin na walang input ng alinmang tao ang naitatala saanman, at kung ano ang kasama ng isang result link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Inilalagay mo ang impormasyon ng ibang tao",
        "blocks": [
          {
            "p": "Kinukuha ng compatibility screen ang iyong petsa ng kapanganakan at ang sa ibang tao nang magkasama. Personal na impormasyon ng ibang tao ang kanyang petsa ng kapanganakan, kaya hiwalay naming ipinapaliwanag kung paano hinahawakan ng Inyeon-Link ang dalawa."
          },
          {
            "p": "Walang account, at hindi kami humihingi ng pangalan, email address o numero ng telepono. Natatanggap lang namin ang dalawang petsa ng kapanganakan at, opsyonal, ang oras ng kapanganakan, lugar ng kapanganakan at kasarian, at walang natitira sa mga ito kapag tapos na ang kalkulasyon."
          },
          {
            "p": "May field para sa display name na ipapakita sa result screen, ngunit pang-display lang ito at hindi ginagamit sa kalkulasyon. Hindi mo kailangang maglagay ng totoong pangalan."
          }
        ]
      },
      {
        "title": "Ang result link ay may laman na dalawang petsa ng kapanganakan",
        "blocks": [
          {
            "p": "Kapag tapos na ang kalkulasyon, ganito ang hitsura ng address."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Ang bahaging nasa pagkatapos ng **#** ang may hawak ng input ng dalawang tao. Tinatawag itong fragment, at ayon sa karaniwang gawi ng web, **hindi ito ipinapadala ng browser sa server**. Dinisenyo ito para ituro ang isang posisyon sa loob ng dokumento, kaya hindi ito nakikita ng server."
          },
          {
            "p": "Kapag binuksan mo ang isang result link, binabasa ng browser ang halagang iyon at humihiling ng kalkulasyon; natatanggap ng server ang mga halagang kailangan nito, ibinabalik ang sagot at kinakalimutan ang mga ito."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bago mo ipadala ang link sa kabilang tao",
        "blocks": [
          {
            "p": "Hindi magkapareho ang hindi nakaimbak sa server at ang pagiging lihim ng isang link. Sinumang makatanggap ng link ay nakikita ang parehong petsa ng kapanganakan nang buo, at ang link na naiwan sa chat room ay nananatili sa chat room na iyon anuman ang aming server. Mangyaring ipadala ito nang alam na laman nito ang detalye ng kabilang tao."
          }
        ]
      },
      {
        "title": "Bakit walang natitira kahit sa server tumatakbo ang kalkulasyon",
        "blocks": [
          {
            "p": "Para buuin ang tsart ng saju, kailangan natin ng almanac table na masyadong malaki para ipadala sa browser, kaya sa server tumatakbo ang kalkulasyon. Ngunit **kapag naproseso na ang kahilingan, hindi na ginagamit saanman ang mga halaga.** Walang code na nagsusulat ng mga ito sa isang database."
          },
          {
            "p": "Ang tanging talaang natitira ay isang counter na pumipigil sa isang tao na magpadala ng masyadong maraming kahilingan sa maikling panahon. Wala itong petsa ng kapanganakan at hindi nito iniingatan ang IP address nang buo; nagbibilang ito ng iisang halaga, na na-hash kasama ang petsa, at nagbabago ang halagang iyon kapag nagbago ang araw."
          }
        ]
      },
      {
        "title": "Ang isinuko namin dahil hindi kami nag-iimbak",
        "blocks": [
          {
            "p": "Dahil walang nakaimbak, may ilang bagay na isinuko namin."
          },
          {
            "ul": [
              "**Hindi mo na maibabalik ang nakaraang resulta ng compatibility.** Kailangan mong itago ang link para makita itong muli.",
              "**Muling kinakalkula sa bawat pagkakataon ang parehong dalawang tao.** Walang cache. Ngunit deterministic ang bawat patakaran, kaya [laging pareho ang halaga para sa parehong input](/guide/how-compatibility).",
              "**Ang pag-refresh ay nagbabalik ng ad gate.** Walang mapagtatabihan ng tala na napanood mo na ito."
            ]
          }
        ]
      },
      {
        "title": "Kung bibili ka ng report",
        "blocks": [
          {
            "p": "Kung bibili ka ng report, may itatabing talaan ng transaksyon sa puntong iyon: may legal na kinakailangang panahon ng pag-iimbak ang mga talaan ng pagbabayad, at kung walang kasaysayan ng order ay hindi maaaring iproseso ang refund. Kahit noon, **hindi nakakabit sa order ang dalawang petsa ng kapanganakan**; muli itong hinihingi kapag ginagawa ang PDF pagkatapos makumpirma ang bayad, at ginagamit lang sa sandaling iyon."
          },
          {
            "p": "Nasa [patakaran sa privacy](/privacy) ang mga detalye."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Bayad na Mga Produkto",
    "title": "Ano ang kasama sa bayad na ulat?",
    "summary": "Ito ay nagpapaliwanag kung ano ang idinagdag sa PDF habang pinapanatili ang screen na hindi nagbabago, item sa item. Ang mga halaga at nilalaman ay binabasa mula sa aktwal na mga setting ng produkto.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang screen ay nananatiling hindi nagbabago, tanging idinagdag sa PDF",
        "blocks": [
          {
            "p": "Ang mga kalkulasyon ng pagkakatugma at mga pagtatanong sa resulta ay **libre**. Ang mga rate ng pagtutugma, mga iskor at timbang ng item, ang mga orihinal na tsart ng saju ng parehong indibidwal, at ang hugis ng relasyon ay lahat ay maaaring makita sa screen. Walang tinanggal mula sa screen habang nililikha ang bayad na ulat."
          },
          {
            "p": "Ang layunin ng ulat ay **magdagdag ng mga layer na wala sa screen**. At ang layer na iyon ay hindi gawa-gawa; ito ay binubuo ng mga halagang naunang kinakalkula sa proseso ng pag-score ngunit hindi ginamit sa screen."
          }
        ]
      },
      {
        "title": "Saju Compatibility Report PDF — {priceGunghapDomestic}",
        "slot": "gunghapContents",
        "blocks": [
          {
            "p": "Bayad sa loob ng bansa {priceGunghapDomestic} (kasama ang VAT), bayad sa internasyonal {priceGunghapGlobal}. A4 {pagesGunghap} na mga pahina."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "**Ang mga pahina 1-3 ay nakaayos upang panatilihin ang nasa screen** at **mula pahina 4 pataas ay nilalaman na hindi nasa screen**. Sa ibaba, ipinaliwanag kung bakit ang ilang bagay ay hindi ipinakita sa screen."
          }
        ]
      },
      {
        "title": "Pahina 4 — Ang direksyon ng dalawang enerhiya",
        "blocks": [
          {
            "p": "Ang mga item ng mga five elements sa screen ay ipinakita bilang isang solong iskor. Gayunpaman, ang solong iskor na iyon ay ang **average ng dalawang direksyon** — sinusukat kung gaano karami ang pinupuno ng isa sa akin at kung gaano karami ang pinupuno ko sa isa, at kinukuha ang average ng mga halagang iyon."
          },
          {
            "p": "Ang pagkakumplementaryo ay likas na **asymmetric**. Ito ay dahil ang mga enerhiyang kailangan ko at ang mga enerhiyang kailangan ng iba ay magkaiba. Kung titingnan mo lamang ang average, ang isang relasyon kung saan ang isang panig ay makabuluhang pinupuno ang isa at isang relasyon kung saan ang parehong pinupuno ang isa't isa nang pantay ay lilitaw na parehong numero. Ang ulat ay naghihiwalay sa mga iyon."
          },
          {
            "p": "Kasama rin sa parehong seksyon ang **chart ng relasyon ng apat na haligi**. Ang tanging pumapasok sa matching rate ay ang day branch (日支) — dahil ito ang posisyon ng asawa — ngunit ang iba pang year, month, at hour branches ay maaari ring basahin gamit ang parehong chart ng relasyon."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang mga iskor sa talahanayang ito ay hindi pumapasok sa matching rate",
        "blocks": [
          {
            "p": "Kung isasama, ang kabuuang iskor ay magbabago at hindi ito magmamatch sa resulta na naipadala na. Samakatuwid, ito ay kasama lamang bilang materyal na babasahin, at ang katotohanang iyon ay nakasaad sa ibaba ng talahanayan."
          }
        ]
      },
      {
        "title": "Pahina 5 — Isang mas malapit na pagtingin sa saju ng bawat tao",
        "blocks": [
          {
            "p": "Ang mga bar ng mga five elements sa screen ay nagpapakita ng **kung gaano karami ang naroroon**. Idinadagdag ng ulat **kung ang buwan ng kapanganakan ay sumusuporta sa enerhiyang iyon**. Kahit na pareho ang dami, ang enerhiyang malakas (旺) at ang enerhiyang patay (死) ay may iba't ibang lakas."
          },
          {
            "p": "Maaari mong makita ang mga puwersa bago at pagkatapos ng pag-multiply sa enerhiya ng buwan na magkatabi, na nagpapakita kung gaano karami ang itinaas ng panahon. Ang **ally ratio** na nagtatangi sa malakas na day master at mahina na day master ay nakasaad din — ang screen ay nagpapakita lamang ng hatol, ngunit ang ulat ay nagpapakita kung saan ginawa ang hatol na iyon."
          }
        ]
      },
      {
        "title": "Pahina 6 — Ano ang ibig sabihin ng apat na haligi ng ibang tao sa akin",
        "blocks": [
          {
            "p": "Ang matching rate ay tanging ikinumpara ang **day stems** ng parehong indibidwal. Gayunpaman, ang natitirang tatlong haligi ng ibang tao ay tinutukoy din ng Ten Gods gamit ang parehong mga patakaran. Habang maaari mong maunawaan **kung ano ang ibig sabihin ng taong ito sa akin** sa pamamagitan ng pagtingin sa day stem lamang, hindi mo malalaman **kung anong posisyon ng taong iyon ang ibig sabihin sa akin**."
          },
          {
            "p": "Dahil may mga direksyon, ang parehong panig ay ipinakita nang hiwalay. Ang nakikita ko at ang nakikita ng iba ay magkaiba."
          }
        ]
      },
      {
        "title": "Pahina 7 — Paano na-calculated ang saju na ito",
        "blocks": [
          {
            "p": "Ipinapahayag nito kung gaano kalaki ang na-adjust ang oras ng kapanganakan sa true solar time, kung ang pagwawasto ay nagdulot ng pagbabago sa petsa, at kung ano ang mga solar at lunar dates nang ang saju ay nabuo. Ang konsepto ay ipinaliwanag sa dokumento [Pag-aayos ng oras ng kapanganakan sa true solar time](/guide/true-solar-time), ngunit **ang halaga ng kung ilang minuto ang na-adjust sa iyong kaso** ay nag-iiba mula sa tao sa tao, kaya ito ay kasama lamang sa ulat."
          }
        ]
      },
      {
        "title": "Inyeon match-profile report PDF — {priceAffinityDomestic}",
        "slot": "affinityContents",
        "blocks": [
          {
            "p": "Domestic payment {priceAffinityDomestic} (kasama ang VAT), international payment {priceAffinityGlobal}. A4 {pagesAffinity} pahina."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Ang seksyong ito ay ang **overall ranking table**. Ang screen ay nagpapakita lamang ng mga set na magkatugma nang maayos, ngunit ang ulat ay nagraranggo sa lahat ng sampung heavenly stems at labindalawang earthly branches **ng buo**. Kung titingnan mo lamang ang mga nangungunang set, hindi mo malalaman 'sino ang susunod' at 'alin ang hindi gaanong compatible'."
          }
        ]
      },
      {
        "title": "Mga bagay na dapat malaman bago bumili",
        "blocks": [
          {
            "p": "**Ang server ay hindi nag-iimbak ng mga file.** Kapag naaprubahan ang bayad, ang dokumento ay agad na nabuo at ipinadala, na walang naiwan sa server. Ang prinsipyong ito ng serbisyong hindi pag-save ng mga input values ay pinanatili kahit sa bayad na daloy."
          },
          {
            "p": "Kaya, **mangyaring i-save ang file kaagad pagkatapos ng bayad.** Maaari mong matanggap ang parehong order hanggang limang beses, ngunit kung umalis ka sa resulta na screen at mawala ang mga input values, hindi mo na ito maibabalik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang mga ulat ay maaari ring maging mga reference materials",
        "blocks": [
          {
            "p": "Hindi dahil ang haba ay tumaas ay nangangahulugang ang konklusyon ay mas tiyak. Ang higit na nilalaman ng ulat ay **ang batayan ng parehong kalkulasyon**, hindi isang mas malakas na pahayag. Ang pagbabasa ng kapalaran ay isang larangan kung saan ang mga konklusyon ay maaaring mag-iba depende sa practitioner, at ang serbisyong ito ay nagkalkula lamang ng maaaring isalin sa mga patakaran."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Pabatid",
    "title": "Mga Anunsyo",
    "summary": "Ito ay isang lugar upang ipaalam ang mga pagbabago na nakakaapekto sa paggamit.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": []
  },
  "contact": {
    "eyebrow": "Makipag-ugnayan",
    "title": "Mga Katanungan",
    "summary": "Ito ang channel para sa mga katanungan tungkol sa paggamit, mga refund, mga kahilingan sa personal na impormasyon, at mga ulat ng error, kasama ang impormasyon sa negosyo.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "title": "Makipag-ugnayan sa pamamagitan ng Email",
        "blocks": [
          {
            "p": "Mangyaring ipadala ang mga katanungan sa **{email}**. Kami ay tutugon sa loob ng 2 araw ng negosyo. Para sa mga katanungan tungkol sa bayad at refund, mangyaring isama ang **numero ng order o ang email na ginamit para sa bayad** para sa mas mabilis na kumpirmasyon."
          },
          {
            "p": "Ang mga katanungan sa telepono ay maaaring gawin sa {customerCenter}."
          }
        ]
      },
      {
        "title": "Ano ang maaaring ipadala sa channel na ito?",
        "blocks": [
          {
            "ul": [
              "**Bayad at Refund** — Kung ang dokumento ay hindi nabuo o ang halaga ng bayad ay naiiba mula sa order, isang buong refund ang ibibigay. Ang mga kondisyon ay nasa [refund policy](/refund-policy).",
              "**Personal na Impormasyon** — Tumatanggap kami ng mga kahilingan para sa pagtingin, pagwawasto, at pagtanggal. Ang patakaran sa pagproseso ay nasa [privacy policy](/privacy).",
              "**Ulat ng Error sa Kalkulasyon** — Kung ang orihinal na chart ng saju o iskor ay tila kakaiba, mangyaring ipaalam sa amin. Kung isasama mo kung kailan mo ipinasok ang petsa at oras, maaari naming muling kalkulahin gamit ang parehong mga halaga."
            ]
          }
        ]
      },
      {
        "title": "Impormasyon sa Negosyo",
        "blocks": [
          {
            "ul": [
              "**Pangalan ng Negosyo** — {companyName}",
              "**Kinatawan** — {representative}",
              "**Numero ng Rehistrasyon ng Negosyo** — {businessNumber}",
              "**Numero ng Rehistrasyon ng Negosyo sa Mail Order** — {mailOrderNumber}",
              "**Tirahan** — {address}",
              "**Customer Center** — {customerCenter}",
              "**Email** — {email}",
              "**Opisyal sa Proteksyon ng Personal na Impormasyon** — {privacyOfficer}",
              "**Hosting Provider** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Hindi mo kailangang isama ang iyong petsa at oras ng kapanganakan sa email ng katanungan. Hindi namin sine-save ang mga input, kaya hindi namin ito maibabalik, at sapat na ang numero ng order para sa kumpirmasyon. Mangyaring isama lamang ito kung kinakailangan para sa ulat ng error sa kalkulasyon."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

export const FIL_NOTICES = {
  "kindLabels": {
    "service": "Serbisyo",
    "product": "Ulat",
    "engine": "Kalkulasyon",
    "support": "Suporta"
  },
  "intro": "Ang mga pagbabago sa iyong mga tuntunin sa paggamit — mga presyo, patakaran — ay nai-post dito bago sila magkabisa. Ang mga panloob na pagpapabuti ay hindi nakalista: ang nakikita dito ay ang kailangan mong malaman.",
  "empty": {
    "title": "Walang mga abiso pa",
    "body": "Kapag may nagbago, ito ay lilitaw dito."
  },
  "effective": "Magkakabisa {date}",
  "pager": {
    "label": "Mga pahina ng abiso",
    "newer": "← Mas bago",
    "older": "Mas luma →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Bukas na ang mga pahina ng Contact at About",
      "body": [
        "Ang mga tanong, refund, mga kahilingan sa privacy at mga ulat ng mga pagkakamali sa kalkulasyon ay mayroon na ngayong isang lugar na mapupuntahan — tingnan ang pahina ng contact sa footer.",
        "Kung mayroong mukhang maling kalkulasyon, mangyaring isama ang mga detalye ng kapanganakan na nagbigay nito. Hindi namin iniimbak ang iyong ipinasok, kaya kung wala ang mga ito, hindi namin maipapakita muli ang pagbasa."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Ang mga ulat ay inilabas sa Ingles para sa Arabic at Khmer",
      "body": [
        "Kung ikaw ay nagbabasa sa Arabic o Khmer, ang PDF na ulat na binili mo ay ginawa sa Ingles. Ang tool na nag-aayos ng aming mga dokumento ay hindi pa makapag-set ng mga talata sa mga script na iyon.",
        "Ang screen ay mananatili sa iyong wika, at ang iyong pangalan ay naka-print sa iyong sariling script sa loob ng ulat.",
        "Ang parehong tala ay lilitaw bago ang pagbabayad. Kapag sinusuportahan ng tool ang mga script na ito, ipapaalam namin dito."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Bawat pagbasa ay may kasamang bersyon ng mga patakarang ginamit",
      "body": [
        "Bawat pagbasa at ulat ay may kasamang set ng mga patakaran na ginamit upang makuha ito (halimbawa inyeonlink-match-v10). Ang parehong input sa parehong set ng patakaran ay palaging nagbibigay ng parehong mga numero.",
        "Kung babaguhin namin ang mga patakaran ng interpretasyon sa paraang makakapagbago ng iskor, ipo-post namin ito dito muna, kasama ang petsa kung kailan ito magkakabisa — dahil ang isang resulta na link na hawak mo na ay magbabasa nang iba.",
        "Ang kasalukuyang set ng patakaran ay v10. Ang mga pagbabayad ay hindi pa bukas."
      ]
    }
  }
} satisfies NoticeCopy;
