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
  "guide/zodiac-rat": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Daga at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Daga (子) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Daga ang una sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Daga ay taong ang branch ng taon ng kapanganakan ay **子**. Ang 子 ang una sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 午 (ang Kabayo)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Daga ay: \"Mabilis makapansin at mabilis kumuha ng mahalaga. Siya ang unang kumikilos sa gipit.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Daga. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Daga at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Baka (丑)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuneho (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Ahas (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kabayo (午)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Tupa (未)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Unggoy (申)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Manok (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Aso (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baboy (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Baka — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 子 at 丑 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Daga at ang Baka ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Daga."
          }
        ]
      },
      {
        "title": "Dragon at Unggoy — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 申子辰 ay isang triad group (ang grupong tubig), at ang 子 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Daga ay bumubuo ng half triad ({scoreBanhap}) sa parehong Dragon at Unggoy."
          },
          {
            "p": "**Ang Unggoy at ang Dragon nang magkasama**, sa kabilang banda, ay walang gitnang karakter na 子, kaya hindi sila binibilang na harmonya at itinuturing na neutral. Kahit sa loob ng iisang triad group, ang Daga ang bumubuo ng half triad."
          }
        ]
      },
      {
        "title": "Kabayo — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 子 at 午. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Daga."
          }
        ]
      },
      {
        "title": "Tupa — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 子 at 未 ay katabi mismo ng 午 (ang Kabayo), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 6 hayop, at ang Daga kasama ang isa pang Daga",
        "blocks": [
          {
            "p": "Ang Tigre, Kuneho, Ahas, Manok, Aso at Baboy ay hindi harmonya, clash o discord sa Daga: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Daga ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Daga at taong Kabayo, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Baka, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Daga na ang day branch ay 子 at 午 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Baka](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Kuneho](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Ahas](/guide/zodiac-snake) · [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat) · [Unggoy](/guide/zodiac-monkey) · [Manok](/guide/zodiac-rooster) · [Aso](/guide/zodiac-dog) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-ox": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Baka at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Baka (丑) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Baka ang ikalawa sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Baka ay taong ang branch ng taon ng kapanganakan ay **丑**. Ang 丑 ang ikalawa sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 未 (ang Tupa)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Baka ay: \"Mukhang mabagal pero tinatapos ang sinimulan. Ang tinanggap niya, hindi niya binibitawan.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Baka. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Baka at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Baka (丑)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuneho (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ahas (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kabayo (午)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Tupa (未)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Unggoy (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Manok (酉)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Aso (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baboy (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Daga — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 丑 at 子 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Baka at ang Daga ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Baka."
          }
        ]
      },
      {
        "title": "Manok — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 巳酉丑 ay isang triad group (ang grupong metal), at ang 酉 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Baka ay bumubuo ng half triad ({scoreBanhap}) sa Manok lang."
          },
          {
            "p": "Sa Ahas (巳) ng parehong grupo, wala ang gitnang karakter na 酉, kaya hindi ito binibilang na harmonya at itinuturing na neutral ({scoreNeutral}). Hindi ginagawang harmonya ang bawat pares dahil lang sa pagiging magkapareho ng grupo."
          }
        ]
      },
      {
        "title": "Tupa — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 丑 at 未. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Baka."
          }
        ]
      },
      {
        "title": "Kabayo — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 丑 at 午 ay katabi mismo ng 未 (ang Tupa), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 7 hayop, at ang Baka kasama ang isa pang Baka",
        "blocks": [
          {
            "p": "Ang Tigre, Kuneho, Dragon, Ahas, Unggoy, Aso at Baboy ay hindi harmonya, clash o discord sa Baka: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Baka ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Baka at taong Tupa, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Daga, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Baka na ang day branch ay 丑 at 未 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Tigre](/guide/zodiac-tiger) · [Kuneho](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Ahas](/guide/zodiac-snake) · [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat) · [Unggoy](/guide/zodiac-monkey) · [Manok](/guide/zodiac-rooster) · [Aso](/guide/zodiac-dog) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-tiger": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Tigre at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Tigre (寅) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Tigre ang ikatlo sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Tigre ay taong ang branch ng taon ng kapanganakan ay **寅**. Ang 寅 ang ikatlo sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 申 (ang Unggoy)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Tigre ay: \"Walang takot at laging nangunguna. Hindi mapalampas ang kawalang-katarungan.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Tigre. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Tigre at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baka (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Kuneho (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ahas (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kabayo (午)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Tupa (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Unggoy (申)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Manok (酉)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Aso (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baboy (亥)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Baboy — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 寅 at 亥 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Tigre at ang Baboy ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Tigre."
          }
        ]
      },
      {
        "title": "Kabayo — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 寅午戌 ay isang triad group (ang grupong apoy), at ang 午 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Tigre ay bumubuo ng half triad ({scoreBanhap}) sa Kabayo lang."
          },
          {
            "p": "Sa Aso (戌) ng parehong grupo, wala ang gitnang karakter na 午, kaya hindi ito binibilang na harmonya at itinuturing na neutral ({scoreNeutral}). Hindi ginagawang harmonya ang bawat pares dahil lang sa pagiging magkapareho ng grupo."
          }
        ]
      },
      {
        "title": "Unggoy — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 寅 at 申. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Tigre."
          }
        ]
      },
      {
        "title": "Manok — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 寅 at 酉 ay katabi mismo ng 申 (ang Unggoy), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 7 hayop, at ang Tigre kasama ang isa pang Tigre",
        "blocks": [
          {
            "p": "Ang Daga, Baka, Kuneho, Dragon, Ahas, Tupa at Aso ay hindi harmonya, clash o discord sa Tigre: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Tigre ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Tigre at taong Unggoy, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Baboy, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Tigre na ang day branch ay 寅 at 申 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox) · [Kuneho](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Ahas](/guide/zodiac-snake) · [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat) · [Unggoy](/guide/zodiac-monkey) · [Manok](/guide/zodiac-rooster) · [Aso](/guide/zodiac-dog) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rabbit": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Kuneho at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Kuneho (卯) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Kuneho ang ikaapat sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Kuneho ay taong ang branch ng taon ng kapanganakan ay **卯**. Ang 卯 ang ikaapat sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 酉 (ang Manok)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Kuneho ay: \"Mahinahon at mapansin. Marunong lumihis sa halip na bumangga.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Kuneho. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Kuneho at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baka (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuneho (卯)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ahas (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kabayo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tupa (未)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Unggoy (申)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Manok (酉)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Aso (戌)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Baboy (亥)",
                  "Half triad",
                  "{scoreBanhap}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Aso — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 卯 at 戌 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Kuneho at ang Aso ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Kuneho."
          }
        ]
      },
      {
        "title": "Tupa at Baboy — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 亥卯未 ay isang triad group (ang grupong kahoy), at ang 卯 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Kuneho ay bumubuo ng half triad ({scoreBanhap}) sa parehong Tupa at Baboy."
          },
          {
            "p": "**Ang Baboy at ang Tupa nang magkasama**, sa kabilang banda, ay walang gitnang karakter na 卯, kaya hindi sila binibilang na harmonya at itinuturing na neutral. Kahit sa loob ng iisang triad group, ang Kuneho ang bumubuo ng half triad."
          }
        ]
      },
      {
        "title": "Manok — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 卯 at 酉. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Kuneho."
          }
        ]
      },
      {
        "title": "Unggoy — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 卯 at 申 ay katabi mismo ng 酉 (ang Manok), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 6 hayop, at ang Kuneho kasama ang isa pang Kuneho",
        "blocks": [
          {
            "p": "Ang Daga, Baka, Tigre, Dragon, Ahas at Kabayo ay hindi harmonya, clash o discord sa Kuneho: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Kuneho ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Kuneho at taong Manok, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Aso, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Kuneho na ang day branch ay 卯 at 酉 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Dragon](/guide/zodiac-dragon) · [Ahas](/guide/zodiac-snake) · [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat) · [Unggoy](/guide/zodiac-monkey) · [Manok](/guide/zodiac-rooster) · [Aso](/guide/zodiac-dog) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dragon": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Dragon at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Dragon (辰) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Dragon ang ikalima sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Dragon ay taong ang branch ng taon ng kapanganakan ay **辰**. Ang 辰 ang ikalima sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 戌 (ang Aso)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Dragon ay: \"Malawak ang puso at mataas ang mithiin. Bihirang makuntento sa karaniwan.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Dragon. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Dragon at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Baka (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuneho (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Ahas (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kabayo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tupa (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Unggoy (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Manok (酉)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Aso (戌)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Baboy (亥)",
                  "Discord",
                  "{scoreWonjin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Manok — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 辰 at 酉 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Dragon at ang Manok ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Dragon."
          }
        ]
      },
      {
        "title": "Daga — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 申子辰 ay isang triad group (ang grupong tubig), at ang 子 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Dragon ay bumubuo ng half triad ({scoreBanhap}) sa Daga lang."
          },
          {
            "p": "Sa Unggoy (申) ng parehong grupo, wala ang gitnang karakter na 子, kaya hindi ito binibilang na harmonya at itinuturing na neutral ({scoreNeutral}). Hindi ginagawang harmonya ang bawat pares dahil lang sa pagiging magkapareho ng grupo."
          }
        ]
      },
      {
        "title": "Aso — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 辰 at 戌. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Dragon."
          }
        ]
      },
      {
        "title": "Baboy — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 辰 at 亥 ay katabi mismo ng 戌 (ang Aso), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 7 hayop, at ang Dragon kasama ang isa pang Dragon",
        "blocks": [
          {
            "p": "Ang Baka, Tigre, Kuneho, Ahas, Kabayo, Tupa at Unggoy ay hindi harmonya, clash o discord sa Dragon: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Dragon ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Dragon at taong Aso, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Manok, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Dragon na ang day branch ay 辰 at 戌 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Kuneho](/guide/zodiac-rabbit) · [Ahas](/guide/zodiac-snake) · [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat) · [Unggoy](/guide/zodiac-monkey) · [Manok](/guide/zodiac-rooster) · [Aso](/guide/zodiac-dog) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-snake": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Ahas at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Ahas (巳) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Ahas ang ikaanim sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Ahas ay taong ang branch ng taon ng kapanganakan ay **巳**. Ang 巳 ang ikaanim sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 亥 (ang Baboy)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Ahas ay: \"Hindi basta naglalabas ng kalooban at malalim mag-isip. Tumpak humatol.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Ahas. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Ahas at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baka (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuneho (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ahas (巳)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Kabayo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tupa (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Unggoy (申)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Manok (酉)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Aso (戌)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Baboy (亥)",
                  "Clash",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Unggoy — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 巳 at 申 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Ahas at ang Unggoy ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Ahas."
          }
        ]
      },
      {
        "title": "Manok — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 巳酉丑 ay isang triad group (ang grupong metal), at ang 酉 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Ahas ay bumubuo ng half triad ({scoreBanhap}) sa Manok lang."
          },
          {
            "p": "Sa Baka (丑) ng parehong grupo, wala ang gitnang karakter na 酉, kaya hindi ito binibilang na harmonya at itinuturing na neutral ({scoreNeutral}). Hindi ginagawang harmonya ang bawat pares dahil lang sa pagiging magkapareho ng grupo."
          }
        ]
      },
      {
        "title": "Baboy — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 巳 at 亥. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Ahas."
          }
        ]
      },
      {
        "title": "Aso — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 巳 at 戌 ay katabi mismo ng 亥 (ang Baboy), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 7 hayop, at ang Ahas kasama ang isa pang Ahas",
        "blocks": [
          {
            "p": "Ang Daga, Baka, Tigre, Kuneho, Dragon, Kabayo at Tupa ay hindi harmonya, clash o discord sa Ahas: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Ahas ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Ahas at taong Baboy, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Unggoy, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Ahas na ang day branch ay 巳 at 亥 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Kuneho](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat) · [Unggoy](/guide/zodiac-monkey) · [Manok](/guide/zodiac-rooster) · [Aso](/guide/zodiac-dog) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-horse": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Kabayo at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Kabayo (午) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Kabayo ang ikapito sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Kabayo ay taong ang branch ng taon ng kapanganakan ay **午**. Ang 午 ang ikapito sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 子 (ang Daga)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Kabayo ay: \"Masigla at hindi mapakali. Pinakamahirap para sa kanya ang makulong.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Kabayo. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Kabayo at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Baka (丑)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Tigre (寅)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Kuneho (卯)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ahas (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kabayo (午)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Tupa (未)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Unggoy (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Manok (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Aso (戌)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Baboy (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tupa — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 午 at 未 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Kabayo at ang Tupa ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Kabayo."
          }
        ]
      },
      {
        "title": "Tigre at Aso — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 寅午戌 ay isang triad group (ang grupong apoy), at ang 午 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Kabayo ay bumubuo ng half triad ({scoreBanhap}) sa parehong Tigre at Aso."
          },
          {
            "p": "**Ang Tigre at ang Aso nang magkasama**, sa kabilang banda, ay walang gitnang karakter na 午, kaya hindi sila binibilang na harmonya at itinuturing na neutral. Kahit sa loob ng iisang triad group, ang Kabayo ang bumubuo ng half triad."
          }
        ]
      },
      {
        "title": "Daga — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 午 at 子. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Kabayo."
          }
        ]
      },
      {
        "title": "Baka — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 午 at 丑 ay katabi mismo ng 子 (ang Daga), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 6 hayop, at ang Kabayo kasama ang isa pang Kabayo",
        "blocks": [
          {
            "p": "Ang Kuneho, Dragon, Ahas, Unggoy, Manok at Baboy ay hindi harmonya, clash o discord sa Kabayo: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Kabayo ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Kabayo at taong Daga, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Tupa, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Kabayo na ang day branch ay 午 at 子 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Kuneho](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Ahas](/guide/zodiac-snake) · [Tupa](/guide/zodiac-goat) · [Unggoy](/guide/zodiac-monkey) · [Manok](/guide/zodiac-rooster) · [Aso](/guide/zodiac-dog) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-goat": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Tupa at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Tupa (未) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Tupa ang ikawalo sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Tupa ay taong ang branch ng taon ng kapanganakan ay **未**. Ang 未 ang ikawalo sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 丑 (ang Baka)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Tupa ay: \"Mainit ang loob at maalalahanin. Matagal dala ang matatalim na salita.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Tupa. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Tupa at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Baka (丑)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuneho (卯)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ahas (巳)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kabayo (午)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Tupa (未)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Unggoy (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Manok (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Aso (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baboy (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kabayo — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 未 at 午 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Tupa at ang Kabayo ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Tupa."
          }
        ]
      },
      {
        "title": "Kuneho — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 亥卯未 ay isang triad group (ang grupong kahoy), at ang 卯 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Tupa ay bumubuo ng half triad ({scoreBanhap}) sa Kuneho lang."
          },
          {
            "p": "Sa Baboy (亥) ng parehong grupo, wala ang gitnang karakter na 卯, kaya hindi ito binibilang na harmonya at itinuturing na neutral ({scoreNeutral}). Hindi ginagawang harmonya ang bawat pares dahil lang sa pagiging magkapareho ng grupo."
          }
        ]
      },
      {
        "title": "Baka — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 未 at 丑. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Tupa."
          }
        ]
      },
      {
        "title": "Daga — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 未 at 子 ay katabi mismo ng 丑 (ang Baka), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 7 hayop, at ang Tupa kasama ang isa pang Tupa",
        "blocks": [
          {
            "p": "Ang Tigre, Dragon, Ahas, Unggoy, Manok, Aso at Baboy ay hindi harmonya, clash o discord sa Tupa: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Tupa ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Tupa at taong Baka, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Kabayo, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Tupa na ang day branch ay 未 at 丑 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Kuneho](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Ahas](/guide/zodiac-snake) · [Kabayo](/guide/zodiac-horse) · [Unggoy](/guide/zodiac-monkey) · [Manok](/guide/zodiac-rooster) · [Aso](/guide/zodiac-dog) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-monkey": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Unggoy at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Unggoy (申) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Unggoy ang ikasiyam sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Unggoy ay taong ang branch ng taon ng kapanganakan ay **申**. Ang 申 ang ikasiyam sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 寅 (ang Tigre)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Unggoy ay: \"Maparaan at mabilis makibagay. Nababagot sa paulit-ulit.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Unggoy. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Unggoy at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Baka (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Kuneho (卯)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Dragon (辰)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Ahas (巳)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Kabayo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tupa (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Unggoy (申)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Manok (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Aso (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baboy (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ahas — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 申 at 巳 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Unggoy at ang Ahas ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Unggoy."
          }
        ]
      },
      {
        "title": "Daga — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 申子辰 ay isang triad group (ang grupong tubig), at ang 子 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Unggoy ay bumubuo ng half triad ({scoreBanhap}) sa Daga lang."
          },
          {
            "p": "Sa Dragon (辰) ng parehong grupo, wala ang gitnang karakter na 子, kaya hindi ito binibilang na harmonya at itinuturing na neutral ({scoreNeutral}). Hindi ginagawang harmonya ang bawat pares dahil lang sa pagiging magkapareho ng grupo."
          }
        ]
      },
      {
        "title": "Tigre — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 申 at 寅. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Unggoy."
          }
        ]
      },
      {
        "title": "Kuneho — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 申 at 卯 ay katabi mismo ng 寅 (ang Tigre), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 7 hayop, at ang Unggoy kasama ang isa pang Unggoy",
        "blocks": [
          {
            "p": "Ang Baka, Dragon, Kabayo, Tupa, Manok, Aso at Baboy ay hindi harmonya, clash o discord sa Unggoy: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Unggoy ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Unggoy at taong Tigre, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Ahas, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Unggoy na ang day branch ay 申 at 寅 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Kuneho](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Ahas](/guide/zodiac-snake) · [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat) · [Manok](/guide/zodiac-rooster) · [Aso](/guide/zodiac-dog) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-rooster": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Manok at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Manok (酉) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Manok ang ikasampu sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Manok ay taong ang branch ng taon ng kapanganakan ay **酉**. Ang 酉 ang ikasampu sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 卯 (ang Kuneho)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Manok ay: \"Masipag at maselan. Hindi matiis ang bagay na wala sa lugar.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Manok. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Manok at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baka (丑)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Tigre (寅)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Kuneho (卯)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Dragon (辰)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Ahas (巳)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Kabayo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tupa (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Unggoy (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Manok (酉)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Aso (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baboy (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Dragon — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 酉 at 辰 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Manok at ang Dragon ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Manok."
          }
        ]
      },
      {
        "title": "Baka at Ahas — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 巳酉丑 ay isang triad group (ang grupong metal), at ang 酉 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Manok ay bumubuo ng half triad ({scoreBanhap}) sa parehong Baka at Ahas."
          },
          {
            "p": "**Ang Ahas at ang Baka nang magkasama**, sa kabilang banda, ay walang gitnang karakter na 酉, kaya hindi sila binibilang na harmonya at itinuturing na neutral. Kahit sa loob ng iisang triad group, ang Manok ang bumubuo ng half triad."
          }
        ]
      },
      {
        "title": "Kuneho — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 酉 at 卯. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Manok."
          }
        ]
      },
      {
        "title": "Tigre — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 酉 at 寅 ay katabi mismo ng 卯 (ang Kuneho), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 6 hayop, at ang Manok kasama ang isa pang Manok",
        "blocks": [
          {
            "p": "Ang Daga, Kabayo, Tupa, Unggoy, Aso at Baboy ay hindi harmonya, clash o discord sa Manok: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Manok ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Manok at taong Kuneho, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Dragon, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Manok na ang day branch ay 酉 at 卯 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Kuneho](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Ahas](/guide/zodiac-snake) · [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat) · [Unggoy](/guide/zodiac-monkey) · [Aso](/guide/zodiac-dog) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-dog": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Aso at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Aso (戌) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Aso ang ikalabing-isa sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Aso ay taong ang branch ng taon ng kapanganakan ay **戌**. Ang 戌 ang ikalabing-isa sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 辰 (ang Dragon)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Aso ay: \"Tapat hanggang huli kapag nagtiwala na. Lalong malalim ang sugat ng pagtataksil.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Aso. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Aso at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baka (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Kuneho (卯)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Dragon (辰)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Ahas (巳)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Kabayo (午)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Tupa (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Unggoy (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Manok (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Aso (戌)",
                  "Parehong branch",
                  "{scoreSame}"
                ],
                [
                  "Baboy (亥)",
                  "Neutral",
                  "{scoreNeutral}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Kuneho — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 戌 at 卯 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Aso at ang Kuneho ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Aso."
          }
        ]
      },
      {
        "title": "Kabayo — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 寅午戌 ay isang triad group (ang grupong apoy), at ang 午 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Aso ay bumubuo ng half triad ({scoreBanhap}) sa Kabayo lang."
          },
          {
            "p": "Sa Tigre (寅) ng parehong grupo, wala ang gitnang karakter na 午, kaya hindi ito binibilang na harmonya at itinuturing na neutral ({scoreNeutral}). Hindi ginagawang harmonya ang bawat pares dahil lang sa pagiging magkapareho ng grupo."
          }
        ]
      },
      {
        "title": "Dragon — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 戌 at 辰. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Aso."
          }
        ]
      },
      {
        "title": "Ahas — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 戌 at 巳 ay katabi mismo ng 辰 (ang Dragon), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 7 hayop, at ang Aso kasama ang isa pang Aso",
        "blocks": [
          {
            "p": "Ang Daga, Baka, Tigre, Tupa, Unggoy, Manok at Baboy ay hindi harmonya, clash o discord sa Aso: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Aso ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Aso at taong Dragon, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Kuneho, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Aso na ang day branch ay 戌 at 辰 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Kuneho](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Ahas](/guide/zodiac-snake) · [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat) · [Unggoy](/guide/zodiac-monkey) · [Manok](/guide/zodiac-rooster) · [Baboy](/guide/zodiac-pig)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pig": {
    "eyebrow": "Ayon sa hayop",
    "title": "Paano Nagtatagpo ang Baboy at ang Labindalawang Zodiac Animal",
    "summary": "Kung anong relasyon ang taglay ng Baboy (亥) sa bawat isa sa labindalawang zodiac animal, kung ilang puntos ang nakukuha ng bawat isa, at kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na iyon — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Baboy ang ikalabindalawa sa labindalawang branch",
        "blocks": [
          {
            "p": "Ang Baboy ay taong ang branch ng taon ng kapanganakan ay **亥**. Ang 亥 ang ikalabindalawa sa labindalawang earthly branch, at kapag inilagay ang labindalawang karakter sa isang bilog, nasa tapat mismo ito ng 巳 (ang Ahas)."
          },
          {
            "p": "Ang linyang ipinapakita ng resulta ng compatibility para sa taong Baboy ay: \"Bukas-palad at prangka. Madaling magtiwala, minsan ay may kapalit.\" Walang kinalaman ang linyang ito sa mga score ng relasyon at hindi ito nakakaapekto sa mga score sa ibaba."
          }
        ]
      },
      {
        "title": "Ang labindalawang zodiac animal sa isang tingin",
        "blocks": [
          {
            "p": "Isa-isang inilalagay ang bawat iba pang hayop laban sa Baboy. Ang mga pares lang na kinikilala ng serbisyong ito bilang harmonya ang isinusulat bilang relasyon; neutral ang lahat ng iba."
          },
          {
            "table": {
              "caption": "Ang Baboy at ang labindalawang zodiac animal",
              "head": [
                "Ibang hayop",
                "Relasyon",
                "Score"
              ],
              "rows": [
                [
                  "Daga (子)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baka (丑)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tigre (寅)",
                  "Six-Harmony",
                  "{scoreYukhap}"
                ],
                [
                  "Kuneho (卯)",
                  "Half triad",
                  "{scoreBanhap}"
                ],
                [
                  "Dragon (辰)",
                  "Discord",
                  "{scoreWonjin}"
                ],
                [
                  "Ahas (巳)",
                  "Clash",
                  "{scoreChung}"
                ],
                [
                  "Kabayo (午)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Tupa (未)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Unggoy (申)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Manok (酉)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Aso (戌)",
                  "Neutral",
                  "{scoreNeutral}"
                ],
                [
                  "Baboy (亥)",
                  "Parehong branch",
                  "{scoreSame}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Tigre — ang magkaakit na pares (Six-Harmony)",
        "blocks": [
          {
            "p": "Bumubuo ng harmonya ang 亥 at 寅 gamit lang ang dalawang karakter. Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at ang Baboy at ang Tigre ay may score na {scoreYukhap}, ang pinakamataas na makukuha ng Baboy."
          }
        ]
      },
      {
        "title": "Kuneho — isang half triad na kasama ang royal branch",
        "blocks": [
          {
            "p": "Ang 亥卯未 ay isang triad group (ang grupong kahoy), at ang 卯 ang **royal branch** sa gitna nito. Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya ang Baboy ay bumubuo ng half triad ({scoreBanhap}) sa Kuneho lang."
          },
          {
            "p": "Sa Tupa (未) ng parehong grupo, wala ang gitnang karakter na 卯, kaya hindi ito binibilang na harmonya at itinuturing na neutral ({scoreNeutral}). Hindi ginagawang harmonya ang bawat pares dahil lang sa pagiging magkapareho ng grupo."
          }
        ]
      },
      {
        "title": "Ahas — ang harapang banggaan (Clash)",
        "blocks": [
          {
            "p": "Magkatapat mismo sa bilog ang 亥 at 巳. Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao. Kahit gayon, ito ang pinakamababang score na maaaring makuha ng Baboy."
          }
        ]
      },
      {
        "title": "Dragon — ang tahimik na magkasalungat (Discord)",
        "blocks": [
          {
            "p": "Ang 亥 at 辰 ay katabi mismo ng 巳 (ang Ahas), ang posisyon ng clash, at tradisyonal na itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang iba pang 7 hayop, at ang Baboy kasama ang isa pang Baboy",
        "blocks": [
          {
            "p": "Ang Daga, Baka, Kabayo, Tupa, Unggoy, Manok at Aso ay hindi harmonya, clash o discord sa Baboy: **neutral** sila at may score na {scoreNeutral}. Sila ang batayang antas, hindi mabuti at hindi masama."
          },
          {
            "p": "Ang dalawang taong Baboy ay may score na {scoreSame}. Ibig sabihin nito ay magkahawig sila, hindi magkaakit, kaya bahagya itong nasa itaas ng neutral."
          }
        ]
      },
      {
        "title": "Kung gaano kalaking bahagi ng huling match rate ang kinukuha ng score na ito",
        "blocks": [
          {
            "p": "May dalawang lugar kung saan magkatabing inilalagay ang mga branch ng dalawang tao."
          },
          {
            "ul": [
              "Tinitingnan ng **zodiac compatibility** ang branch ng taon ng kapanganakan. Kumukuha ito ng {weightZodiac} ng huling match rate.",
              "Tinitingnan ng **day branch compatibility** ang branch ng araw ng kapanganakan. Kumukuha ito ng {weightDayBranch} ng saju compatibility ({weightSaju}), na katumbas ng {weightDayBranchTotal} ng huling match rate."
            ]
          },
          {
            "p": "Halimbawa, kapag nagtagpo ang taong Baboy at taong Ahas, clash ang ibinibigay ng zodiac compatibility. Kung pantay ang lahat ng iba, mas mababa nang {swingZodiacChung} puntos ang huling match rate kaysa sa neutral na pares. Sa taong Tigre, six-harmony ito, at mas mataas nang {swingZodiacYukhap} puntos ang rate."
          },
          {
            "p": "Maaaring magkaiba ang branch ng taon at ng araw. Ang dalawang taong Baboy na ang day branch ay 亥 at 巳 ay nakakakuha ng parehong branch ({scoreSame}) sa zodiac compatibility at clash ({scoreChung}) sa day branch compatibility."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao.",
              "Nasa [tsart ng labindalawang branch](/guide/branches) ang buong tsart kung aling relasyon ang may anong score, at nasa [Bakit ang branch ng taon ang tinitingnan ng zodiac compatibility](/guide/zodiac) kung bakit binabasa ang zodiac mula sa year branch."
            ]
          },
          {
            "p": "Ganito rin inilatag ang iba pang hayop. [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox) · [Tigre](/guide/zodiac-tiger) · [Kuneho](/guide/zodiac-rabbit) · [Dragon](/guide/zodiac-dragon) · [Ahas](/guide/zodiac-snake) · [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat) · [Unggoy](/guide/zodiac-monkey) · [Manok](/guide/zodiac-rooster) · [Aso](/guide/zodiac-dog)"
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-rat": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Daga at ang Daga — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Daga, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Daga",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Daga (子 at 子). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 子 ang una sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Daga",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Daga",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Daga** — Six-Harmony [Baka](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Unggoy](/guide/zodiac-pair-rat-monkey) · Discord [Tupa](/guide/zodiac-pair-rat-goat) · Clash [Kabayo](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Daga](/guide/zodiac-rat), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-ox": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Daga at ang Baka — Six-Harmony",
    "summary": "Kung anong relasyon ang taglay ng Daga at ng Baka, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Daga at ang Baka ay bumubuo ng six-harmony",
        "blocks": [
          {
            "p": "Ang Daga at ang Baka ay bumubuo ng six-harmony. Bumubuo ng harmonya ang 子 at 丑 gamit lang ang dalawang karakter."
          },
          {
            "p": "Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at sa {scoreYukhap} ito ang pinakamataas na score na makukuha ng alinman sa dalawang hayop."
          },
          {
            "p": "Sa bilog, ang 子 ay nasa unang puwesto at ang 丑 ay nasa ikalawang puwesto, at isang hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Daga at ang Baka",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacYukhap} puntos sa zodiac compatibility at nang {swingDayBranchYukhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Daga** — Six-Harmony [Baka](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Unggoy](/guide/zodiac-pair-rat-monkey) · Discord [Tupa](/guide/zodiac-pair-rat-goat) · Clash [Kabayo](/guide/zodiac-pair-rat-horse)",
              "Mga espesyal na kapareha ng **Baka** — Six-Harmony [Daga](/guide/zodiac-pair-rat-ox) · Half triad [Manok](/guide/zodiac-pair-ox-rooster) · Discord [Kabayo](/guide/zodiac-pair-ox-horse) · Clash [Tupa](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Daga](/guide/zodiac-rat) · [Baka](/guide/zodiac-ox), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-dragon": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Daga at ang Dragon — Half triad",
    "summary": "Kung anong relasyon ang taglay ng Daga at ng Dragon, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Daga at ang Dragon ay bumubuo ng half triad",
        "blocks": [
          {
            "p": "Ang Daga at ang Dragon ay bumubuo ng half triad. Ang 申子辰 ay isang triad group (ang grupong tubig), at ang 子 ang **royal branch** sa gitna nito."
          },
          {
            "p": "Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya half triad ({scoreBanhap}) ang pares na ito."
          },
          {
            "p": "Ang Unggoy (申) at ang Dragon (辰) ng parehong grupo ay walang gitnang karakter na 子, kaya hindi sila binibilang na harmonya at itinuturing na neutral."
          },
          {
            "p": "Sa bilog, ang 子 ay nasa unang puwesto at ang 辰 ay nasa ikalimang puwesto, at apat na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Daga at ang Dragon",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacBanhap} puntos sa zodiac compatibility at nang {swingDayBranchBanhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Daga** — Six-Harmony [Baka](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Unggoy](/guide/zodiac-pair-rat-monkey) · Discord [Tupa](/guide/zodiac-pair-rat-goat) · Clash [Kabayo](/guide/zodiac-pair-rat-horse)",
              "Mga espesyal na kapareha ng **Dragon** — Six-Harmony [Manok](/guide/zodiac-pair-dragon-rooster) · Half triad [Daga](/guide/zodiac-pair-rat-dragon) · Discord [Baboy](/guide/zodiac-pair-dragon-pig) · Clash [Aso](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Daga](/guide/zodiac-rat) · [Dragon](/guide/zodiac-dragon), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-horse": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Daga at ang Kabayo — Clash",
    "summary": "Kung anong relasyon ang taglay ng Daga at ng Kabayo, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Daga at ang Kabayo ay bumubuo ng clash",
        "blocks": [
          {
            "p": "Ang Daga at ang Kabayo ay bumubuo ng clash. Magkatapat mismo sa bilog ang 子 at 午."
          },
          {
            "p": "Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao."
          },
          {
            "p": "Sa bilog, ang 子 ay nasa unang puwesto at ang 午 ay nasa ikapitong puwesto, at anim na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Daga at ang Kabayo",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacChung} puntos sa zodiac compatibility at nang {swingDayBranchChung} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Daga** — Six-Harmony [Baka](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Unggoy](/guide/zodiac-pair-rat-monkey) · Discord [Tupa](/guide/zodiac-pair-rat-goat) · Clash [Kabayo](/guide/zodiac-pair-rat-horse)",
              "Mga espesyal na kapareha ng **Kabayo** — Six-Harmony [Tupa](/guide/zodiac-pair-horse-goat) · Half triad [Tigre](/guide/zodiac-pair-tiger-horse), [Aso](/guide/zodiac-pair-horse-dog) · Discord [Baka](/guide/zodiac-pair-ox-horse) · Clash [Daga](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Daga](/guide/zodiac-rat) · [Kabayo](/guide/zodiac-horse), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-goat": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Daga at ang Tupa — Discord",
    "summary": "Kung anong relasyon ang taglay ng Daga at ng Tupa, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Daga at ang Tupa ay bumubuo ng discord",
        "blocks": [
          {
            "p": "Ang Daga at ang Tupa ay bumubuo ng discord. Ang posisyon ng clash ng 子 ay 午 (ang Kabayo), at nasa tabi nito mismo ang 未; nasa tabi mismo ng 丑 (ang Baka), ang posisyon ng clash ng 未, ang 子."
          },
          {
            "p": "Tradisyonal itong itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          },
          {
            "p": "Sa bilog, ang 子 ay nasa unang puwesto at ang 未 ay nasa ikawalong puwesto, at limang hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Daga at ang Tupa",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacWonjin} puntos sa zodiac compatibility at nang {swingDayBranchWonjin} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Daga** — Six-Harmony [Baka](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Unggoy](/guide/zodiac-pair-rat-monkey) · Discord [Tupa](/guide/zodiac-pair-rat-goat) · Clash [Kabayo](/guide/zodiac-pair-rat-horse)",
              "Mga espesyal na kapareha ng **Tupa** — Six-Harmony [Kabayo](/guide/zodiac-pair-horse-goat) · Half triad [Kuneho](/guide/zodiac-pair-rabbit-goat) · Discord [Daga](/guide/zodiac-pair-rat-goat) · Clash [Baka](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Daga](/guide/zodiac-rat) · [Tupa](/guide/zodiac-goat), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rat-monkey": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Daga at ang Unggoy — Half triad",
    "summary": "Kung anong relasyon ang taglay ng Daga at ng Unggoy, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Daga at ang Unggoy ay bumubuo ng half triad",
        "blocks": [
          {
            "p": "Ang Daga at ang Unggoy ay bumubuo ng half triad. Ang 申子辰 ay isang triad group (ang grupong tubig), at ang 子 ang **royal branch** sa gitna nito."
          },
          {
            "p": "Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya half triad ({scoreBanhap}) ang pares na ito."
          },
          {
            "p": "Ang Dragon (辰) at ang Unggoy (申) ng parehong grupo ay walang gitnang karakter na 子, kaya hindi sila binibilang na harmonya at itinuturing na neutral."
          },
          {
            "p": "Sa bilog, ang 子 ay nasa unang puwesto at ang 申 ay nasa ikasiyam na puwesto, at apat na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Daga at ang Unggoy",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacBanhap} puntos sa zodiac compatibility at nang {swingDayBranchBanhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Daga** — Six-Harmony [Baka](/guide/zodiac-pair-rat-ox) · Half triad [Dragon](/guide/zodiac-pair-rat-dragon), [Unggoy](/guide/zodiac-pair-rat-monkey) · Discord [Tupa](/guide/zodiac-pair-rat-goat) · Clash [Kabayo](/guide/zodiac-pair-rat-horse)",
              "Mga espesyal na kapareha ng **Unggoy** — Six-Harmony [Ahas](/guide/zodiac-pair-snake-monkey) · Half triad [Daga](/guide/zodiac-pair-rat-monkey) · Discord [Kuneho](/guide/zodiac-pair-rabbit-monkey) · Clash [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Daga](/guide/zodiac-rat) · [Unggoy](/guide/zodiac-monkey), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-ox": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Baka at ang Baka — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Baka, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Baka",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Baka (丑 at 丑). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 丑 ang ikalawa sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Baka",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Baka",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Baka** — Six-Harmony [Daga](/guide/zodiac-pair-rat-ox) · Half triad [Manok](/guide/zodiac-pair-ox-rooster) · Discord [Kabayo](/guide/zodiac-pair-ox-horse) · Clash [Tupa](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Baka](/guide/zodiac-ox), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-horse": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Baka at ang Kabayo — Discord",
    "summary": "Kung anong relasyon ang taglay ng Baka at ng Kabayo, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Baka at ang Kabayo ay bumubuo ng discord",
        "blocks": [
          {
            "p": "Ang Baka at ang Kabayo ay bumubuo ng discord. Ang posisyon ng clash ng 丑 ay 未 (ang Tupa), at nasa tabi nito mismo ang 午; nasa tabi mismo ng 子 (ang Daga), ang posisyon ng clash ng 午, ang 丑."
          },
          {
            "p": "Tradisyonal itong itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          },
          {
            "p": "Sa bilog, ang 丑 ay nasa ikalawang puwesto at ang 午 ay nasa ikapitong puwesto, at limang hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Baka at ang Kabayo",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacWonjin} puntos sa zodiac compatibility at nang {swingDayBranchWonjin} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Baka** — Six-Harmony [Daga](/guide/zodiac-pair-rat-ox) · Half triad [Manok](/guide/zodiac-pair-ox-rooster) · Discord [Kabayo](/guide/zodiac-pair-ox-horse) · Clash [Tupa](/guide/zodiac-pair-ox-goat)",
              "Mga espesyal na kapareha ng **Kabayo** — Six-Harmony [Tupa](/guide/zodiac-pair-horse-goat) · Half triad [Tigre](/guide/zodiac-pair-tiger-horse), [Aso](/guide/zodiac-pair-horse-dog) · Discord [Baka](/guide/zodiac-pair-ox-horse) · Clash [Daga](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Baka](/guide/zodiac-ox) · [Kabayo](/guide/zodiac-horse), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-goat": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Baka at ang Tupa — Clash",
    "summary": "Kung anong relasyon ang taglay ng Baka at ng Tupa, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Baka at ang Tupa ay bumubuo ng clash",
        "blocks": [
          {
            "p": "Ang Baka at ang Tupa ay bumubuo ng clash. Magkatapat mismo sa bilog ang 丑 at 未."
          },
          {
            "p": "Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao."
          },
          {
            "p": "Sa bilog, ang 丑 ay nasa ikalawang puwesto at ang 未 ay nasa ikawalong puwesto, at anim na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Baka at ang Tupa",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacChung} puntos sa zodiac compatibility at nang {swingDayBranchChung} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Baka** — Six-Harmony [Daga](/guide/zodiac-pair-rat-ox) · Half triad [Manok](/guide/zodiac-pair-ox-rooster) · Discord [Kabayo](/guide/zodiac-pair-ox-horse) · Clash [Tupa](/guide/zodiac-pair-ox-goat)",
              "Mga espesyal na kapareha ng **Tupa** — Six-Harmony [Kabayo](/guide/zodiac-pair-horse-goat) · Half triad [Kuneho](/guide/zodiac-pair-rabbit-goat) · Discord [Daga](/guide/zodiac-pair-rat-goat) · Clash [Baka](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Baka](/guide/zodiac-ox) · [Tupa](/guide/zodiac-goat), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-ox-rooster": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Baka at ang Manok — Half triad",
    "summary": "Kung anong relasyon ang taglay ng Baka at ng Manok, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Baka at ang Manok ay bumubuo ng half triad",
        "blocks": [
          {
            "p": "Ang Baka at ang Manok ay bumubuo ng half triad. Ang 巳酉丑 ay isang triad group (ang grupong metal), at ang 酉 ang **royal branch** sa gitna nito."
          },
          {
            "p": "Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya half triad ({scoreBanhap}) ang pares na ito."
          },
          {
            "p": "Ang Ahas (巳) at ang Baka (丑) ng parehong grupo ay walang gitnang karakter na 酉, kaya hindi sila binibilang na harmonya at itinuturing na neutral."
          },
          {
            "p": "Sa bilog, ang 丑 ay nasa ikalawang puwesto at ang 酉 ay nasa ikasampung puwesto, at apat na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Baka at ang Manok",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacBanhap} puntos sa zodiac compatibility at nang {swingDayBranchBanhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Baka** — Six-Harmony [Daga](/guide/zodiac-pair-rat-ox) · Half triad [Manok](/guide/zodiac-pair-ox-rooster) · Discord [Kabayo](/guide/zodiac-pair-ox-horse) · Clash [Tupa](/guide/zodiac-pair-ox-goat)",
              "Mga espesyal na kapareha ng **Manok** — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Baka](/guide/zodiac-pair-ox-rooster), [Ahas](/guide/zodiac-pair-snake-rooster) · Discord [Tigre](/guide/zodiac-pair-tiger-rooster) · Clash [Kuneho](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Baka](/guide/zodiac-ox) · [Manok](/guide/zodiac-rooster), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-tiger": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Tigre at ang Tigre — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Tigre, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Tigre",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Tigre (寅 at 寅). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 寅 ang ikatlo sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Tigre",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Tigre",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Tigre** — Six-Harmony [Baboy](/guide/zodiac-pair-tiger-pig) · Half triad [Kabayo](/guide/zodiac-pair-tiger-horse) · Discord [Manok](/guide/zodiac-pair-tiger-rooster) · Clash [Unggoy](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Tigre](/guide/zodiac-tiger), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-horse": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Tigre at ang Kabayo — Half triad",
    "summary": "Kung anong relasyon ang taglay ng Tigre at ng Kabayo, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Tigre at ang Kabayo ay bumubuo ng half triad",
        "blocks": [
          {
            "p": "Ang Tigre at ang Kabayo ay bumubuo ng half triad. Ang 寅午戌 ay isang triad group (ang grupong apoy), at ang 午 ang **royal branch** sa gitna nito."
          },
          {
            "p": "Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya half triad ({scoreBanhap}) ang pares na ito."
          },
          {
            "p": "Ang Aso (戌) at ang Tigre (寅) ng parehong grupo ay walang gitnang karakter na 午, kaya hindi sila binibilang na harmonya at itinuturing na neutral."
          },
          {
            "p": "Sa bilog, ang 寅 ay nasa ikatlong puwesto at ang 午 ay nasa ikapitong puwesto, at apat na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Tigre at ang Kabayo",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacBanhap} puntos sa zodiac compatibility at nang {swingDayBranchBanhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Tigre** — Six-Harmony [Baboy](/guide/zodiac-pair-tiger-pig) · Half triad [Kabayo](/guide/zodiac-pair-tiger-horse) · Discord [Manok](/guide/zodiac-pair-tiger-rooster) · Clash [Unggoy](/guide/zodiac-pair-tiger-monkey)",
              "Mga espesyal na kapareha ng **Kabayo** — Six-Harmony [Tupa](/guide/zodiac-pair-horse-goat) · Half triad [Tigre](/guide/zodiac-pair-tiger-horse), [Aso](/guide/zodiac-pair-horse-dog) · Discord [Baka](/guide/zodiac-pair-ox-horse) · Clash [Daga](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Tigre](/guide/zodiac-tiger) · [Kabayo](/guide/zodiac-horse), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-monkey": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Tigre at ang Unggoy — Clash",
    "summary": "Kung anong relasyon ang taglay ng Tigre at ng Unggoy, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Tigre at ang Unggoy ay bumubuo ng clash",
        "blocks": [
          {
            "p": "Ang Tigre at ang Unggoy ay bumubuo ng clash. Magkatapat mismo sa bilog ang 寅 at 申."
          },
          {
            "p": "Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao."
          },
          {
            "p": "Sa bilog, ang 寅 ay nasa ikatlong puwesto at ang 申 ay nasa ikasiyam na puwesto, at anim na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Tigre at ang Unggoy",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacChung} puntos sa zodiac compatibility at nang {swingDayBranchChung} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Tigre** — Six-Harmony [Baboy](/guide/zodiac-pair-tiger-pig) · Half triad [Kabayo](/guide/zodiac-pair-tiger-horse) · Discord [Manok](/guide/zodiac-pair-tiger-rooster) · Clash [Unggoy](/guide/zodiac-pair-tiger-monkey)",
              "Mga espesyal na kapareha ng **Unggoy** — Six-Harmony [Ahas](/guide/zodiac-pair-snake-monkey) · Half triad [Daga](/guide/zodiac-pair-rat-monkey) · Discord [Kuneho](/guide/zodiac-pair-rabbit-monkey) · Clash [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Tigre](/guide/zodiac-tiger) · [Unggoy](/guide/zodiac-monkey), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-rooster": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Tigre at ang Manok — Discord",
    "summary": "Kung anong relasyon ang taglay ng Tigre at ng Manok, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Tigre at ang Manok ay bumubuo ng discord",
        "blocks": [
          {
            "p": "Ang Tigre at ang Manok ay bumubuo ng discord. Ang posisyon ng clash ng 寅 ay 申 (ang Unggoy), at nasa tabi nito mismo ang 酉; nasa tabi mismo ng 卯 (ang Kuneho), ang posisyon ng clash ng 酉, ang 寅."
          },
          {
            "p": "Tradisyonal itong itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          },
          {
            "p": "Sa bilog, ang 寅 ay nasa ikatlong puwesto at ang 酉 ay nasa ikasampung puwesto, at limang hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Tigre at ang Manok",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacWonjin} puntos sa zodiac compatibility at nang {swingDayBranchWonjin} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Tigre** — Six-Harmony [Baboy](/guide/zodiac-pair-tiger-pig) · Half triad [Kabayo](/guide/zodiac-pair-tiger-horse) · Discord [Manok](/guide/zodiac-pair-tiger-rooster) · Clash [Unggoy](/guide/zodiac-pair-tiger-monkey)",
              "Mga espesyal na kapareha ng **Manok** — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Baka](/guide/zodiac-pair-ox-rooster), [Ahas](/guide/zodiac-pair-snake-rooster) · Discord [Tigre](/guide/zodiac-pair-tiger-rooster) · Clash [Kuneho](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Tigre](/guide/zodiac-tiger) · [Manok](/guide/zodiac-rooster), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-tiger-pig": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Tigre at ang Baboy — Six-Harmony",
    "summary": "Kung anong relasyon ang taglay ng Tigre at ng Baboy, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Tigre at ang Baboy ay bumubuo ng six-harmony",
        "blocks": [
          {
            "p": "Ang Tigre at ang Baboy ay bumubuo ng six-harmony. Bumubuo ng harmonya ang 寅 at 亥 gamit lang ang dalawang karakter."
          },
          {
            "p": "Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at sa {scoreYukhap} ito ang pinakamataas na score na makukuha ng alinman sa dalawang hayop."
          },
          {
            "p": "Sa bilog, ang 寅 ay nasa ikatlong puwesto at ang 亥 ay nasa ikalabindalawang puwesto, at tatlong hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Tigre at ang Baboy",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacYukhap} puntos sa zodiac compatibility at nang {swingDayBranchYukhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Tigre** — Six-Harmony [Baboy](/guide/zodiac-pair-tiger-pig) · Half triad [Kabayo](/guide/zodiac-pair-tiger-horse) · Discord [Manok](/guide/zodiac-pair-tiger-rooster) · Clash [Unggoy](/guide/zodiac-pair-tiger-monkey)",
              "Mga espesyal na kapareha ng **Baboy** — Six-Harmony [Tigre](/guide/zodiac-pair-tiger-pig) · Half triad [Kuneho](/guide/zodiac-pair-rabbit-pig) · Discord [Dragon](/guide/zodiac-pair-dragon-pig) · Clash [Ahas](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Tigre](/guide/zodiac-tiger) · [Baboy](/guide/zodiac-pig), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rabbit": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Kuneho at ang Kuneho — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Kuneho, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Kuneho",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Kuneho (卯 at 卯). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 卯 ang ikaapat sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Kuneho",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Kuneho",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Kuneho** — Six-Harmony [Aso](/guide/zodiac-pair-rabbit-dog) · Half triad [Tupa](/guide/zodiac-pair-rabbit-goat), [Baboy](/guide/zodiac-pair-rabbit-pig) · Discord [Unggoy](/guide/zodiac-pair-rabbit-monkey) · Clash [Manok](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Kuneho](/guide/zodiac-rabbit), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-goat": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Kuneho at ang Tupa — Half triad",
    "summary": "Kung anong relasyon ang taglay ng Kuneho at ng Tupa, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Kuneho at ang Tupa ay bumubuo ng half triad",
        "blocks": [
          {
            "p": "Ang Kuneho at ang Tupa ay bumubuo ng half triad. Ang 亥卯未 ay isang triad group (ang grupong kahoy), at ang 卯 ang **royal branch** sa gitna nito."
          },
          {
            "p": "Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya half triad ({scoreBanhap}) ang pares na ito."
          },
          {
            "p": "Ang Baboy (亥) at ang Tupa (未) ng parehong grupo ay walang gitnang karakter na 卯, kaya hindi sila binibilang na harmonya at itinuturing na neutral."
          },
          {
            "p": "Sa bilog, ang 卯 ay nasa ikaapat na puwesto at ang 未 ay nasa ikawalong puwesto, at apat na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Kuneho at ang Tupa",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacBanhap} puntos sa zodiac compatibility at nang {swingDayBranchBanhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Kuneho** — Six-Harmony [Aso](/guide/zodiac-pair-rabbit-dog) · Half triad [Tupa](/guide/zodiac-pair-rabbit-goat), [Baboy](/guide/zodiac-pair-rabbit-pig) · Discord [Unggoy](/guide/zodiac-pair-rabbit-monkey) · Clash [Manok](/guide/zodiac-pair-rabbit-rooster)",
              "Mga espesyal na kapareha ng **Tupa** — Six-Harmony [Kabayo](/guide/zodiac-pair-horse-goat) · Half triad [Kuneho](/guide/zodiac-pair-rabbit-goat) · Discord [Daga](/guide/zodiac-pair-rat-goat) · Clash [Baka](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Kuneho](/guide/zodiac-rabbit) · [Tupa](/guide/zodiac-goat), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-monkey": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Kuneho at ang Unggoy — Discord",
    "summary": "Kung anong relasyon ang taglay ng Kuneho at ng Unggoy, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Kuneho at ang Unggoy ay bumubuo ng discord",
        "blocks": [
          {
            "p": "Ang Kuneho at ang Unggoy ay bumubuo ng discord. Ang posisyon ng clash ng 卯 ay 酉 (ang Manok), at nasa tabi nito mismo ang 申; nasa tabi mismo ng 寅 (ang Tigre), ang posisyon ng clash ng 申, ang 卯."
          },
          {
            "p": "Tradisyonal itong itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          },
          {
            "p": "Sa bilog, ang 卯 ay nasa ikaapat na puwesto at ang 申 ay nasa ikasiyam na puwesto, at limang hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Kuneho at ang Unggoy",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacWonjin} puntos sa zodiac compatibility at nang {swingDayBranchWonjin} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Kuneho** — Six-Harmony [Aso](/guide/zodiac-pair-rabbit-dog) · Half triad [Tupa](/guide/zodiac-pair-rabbit-goat), [Baboy](/guide/zodiac-pair-rabbit-pig) · Discord [Unggoy](/guide/zodiac-pair-rabbit-monkey) · Clash [Manok](/guide/zodiac-pair-rabbit-rooster)",
              "Mga espesyal na kapareha ng **Unggoy** — Six-Harmony [Ahas](/guide/zodiac-pair-snake-monkey) · Half triad [Daga](/guide/zodiac-pair-rat-monkey) · Discord [Kuneho](/guide/zodiac-pair-rabbit-monkey) · Clash [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Kuneho](/guide/zodiac-rabbit) · [Unggoy](/guide/zodiac-monkey), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-rooster": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Kuneho at ang Manok — Clash",
    "summary": "Kung anong relasyon ang taglay ng Kuneho at ng Manok, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Kuneho at ang Manok ay bumubuo ng clash",
        "blocks": [
          {
            "p": "Ang Kuneho at ang Manok ay bumubuo ng clash. Magkatapat mismo sa bilog ang 卯 at 酉."
          },
          {
            "p": "Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao."
          },
          {
            "p": "Sa bilog, ang 卯 ay nasa ikaapat na puwesto at ang 酉 ay nasa ikasampung puwesto, at anim na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Kuneho at ang Manok",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacChung} puntos sa zodiac compatibility at nang {swingDayBranchChung} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Kuneho** — Six-Harmony [Aso](/guide/zodiac-pair-rabbit-dog) · Half triad [Tupa](/guide/zodiac-pair-rabbit-goat), [Baboy](/guide/zodiac-pair-rabbit-pig) · Discord [Unggoy](/guide/zodiac-pair-rabbit-monkey) · Clash [Manok](/guide/zodiac-pair-rabbit-rooster)",
              "Mga espesyal na kapareha ng **Manok** — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Baka](/guide/zodiac-pair-ox-rooster), [Ahas](/guide/zodiac-pair-snake-rooster) · Discord [Tigre](/guide/zodiac-pair-tiger-rooster) · Clash [Kuneho](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Kuneho](/guide/zodiac-rabbit) · [Manok](/guide/zodiac-rooster), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-dog": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Kuneho at ang Aso — Six-Harmony",
    "summary": "Kung anong relasyon ang taglay ng Kuneho at ng Aso, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Kuneho at ang Aso ay bumubuo ng six-harmony",
        "blocks": [
          {
            "p": "Ang Kuneho at ang Aso ay bumubuo ng six-harmony. Bumubuo ng harmonya ang 卯 at 戌 gamit lang ang dalawang karakter."
          },
          {
            "p": "Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at sa {scoreYukhap} ito ang pinakamataas na score na makukuha ng alinman sa dalawang hayop."
          },
          {
            "p": "Sa bilog, ang 卯 ay nasa ikaapat na puwesto at ang 戌 ay nasa ikalabing-isang puwesto, at limang hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Kuneho at ang Aso",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacYukhap} puntos sa zodiac compatibility at nang {swingDayBranchYukhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Kuneho** — Six-Harmony [Aso](/guide/zodiac-pair-rabbit-dog) · Half triad [Tupa](/guide/zodiac-pair-rabbit-goat), [Baboy](/guide/zodiac-pair-rabbit-pig) · Discord [Unggoy](/guide/zodiac-pair-rabbit-monkey) · Clash [Manok](/guide/zodiac-pair-rabbit-rooster)",
              "Mga espesyal na kapareha ng **Aso** — Six-Harmony [Kuneho](/guide/zodiac-pair-rabbit-dog) · Half triad [Kabayo](/guide/zodiac-pair-horse-dog) · Discord [Ahas](/guide/zodiac-pair-snake-dog) · Clash [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Kuneho](/guide/zodiac-rabbit) · [Aso](/guide/zodiac-dog), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rabbit-pig": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Kuneho at ang Baboy — Half triad",
    "summary": "Kung anong relasyon ang taglay ng Kuneho at ng Baboy, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Kuneho at ang Baboy ay bumubuo ng half triad",
        "blocks": [
          {
            "p": "Ang Kuneho at ang Baboy ay bumubuo ng half triad. Ang 亥卯未 ay isang triad group (ang grupong kahoy), at ang 卯 ang **royal branch** sa gitna nito."
          },
          {
            "p": "Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya half triad ({scoreBanhap}) ang pares na ito."
          },
          {
            "p": "Ang Tupa (未) at ang Baboy (亥) ng parehong grupo ay walang gitnang karakter na 卯, kaya hindi sila binibilang na harmonya at itinuturing na neutral."
          },
          {
            "p": "Sa bilog, ang 卯 ay nasa ikaapat na puwesto at ang 亥 ay nasa ikalabindalawang puwesto, at apat na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Kuneho at ang Baboy",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacBanhap} puntos sa zodiac compatibility at nang {swingDayBranchBanhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Kuneho** — Six-Harmony [Aso](/guide/zodiac-pair-rabbit-dog) · Half triad [Tupa](/guide/zodiac-pair-rabbit-goat), [Baboy](/guide/zodiac-pair-rabbit-pig) · Discord [Unggoy](/guide/zodiac-pair-rabbit-monkey) · Clash [Manok](/guide/zodiac-pair-rabbit-rooster)",
              "Mga espesyal na kapareha ng **Baboy** — Six-Harmony [Tigre](/guide/zodiac-pair-tiger-pig) · Half triad [Kuneho](/guide/zodiac-pair-rabbit-pig) · Discord [Dragon](/guide/zodiac-pair-dragon-pig) · Clash [Ahas](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Kuneho](/guide/zodiac-rabbit) · [Baboy](/guide/zodiac-pig), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dragon": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Dragon at ang Dragon — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Dragon, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Dragon",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Dragon (辰 at 辰). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 辰 ang ikalima sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Dragon",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Dragon",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Dragon** — Six-Harmony [Manok](/guide/zodiac-pair-dragon-rooster) · Half triad [Daga](/guide/zodiac-pair-rat-dragon) · Discord [Baboy](/guide/zodiac-pair-dragon-pig) · Clash [Aso](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Dragon](/guide/zodiac-dragon), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-rooster": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Dragon at ang Manok — Six-Harmony",
    "summary": "Kung anong relasyon ang taglay ng Dragon at ng Manok, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Dragon at ang Manok ay bumubuo ng six-harmony",
        "blocks": [
          {
            "p": "Ang Dragon at ang Manok ay bumubuo ng six-harmony. Bumubuo ng harmonya ang 辰 at 酉 gamit lang ang dalawang karakter."
          },
          {
            "p": "Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at sa {scoreYukhap} ito ang pinakamataas na score na makukuha ng alinman sa dalawang hayop."
          },
          {
            "p": "Sa bilog, ang 辰 ay nasa ikalimang puwesto at ang 酉 ay nasa ikasampung puwesto, at limang hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Dragon at ang Manok",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacYukhap} puntos sa zodiac compatibility at nang {swingDayBranchYukhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Dragon** — Six-Harmony [Manok](/guide/zodiac-pair-dragon-rooster) · Half triad [Daga](/guide/zodiac-pair-rat-dragon) · Discord [Baboy](/guide/zodiac-pair-dragon-pig) · Clash [Aso](/guide/zodiac-pair-dragon-dog)",
              "Mga espesyal na kapareha ng **Manok** — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Baka](/guide/zodiac-pair-ox-rooster), [Ahas](/guide/zodiac-pair-snake-rooster) · Discord [Tigre](/guide/zodiac-pair-tiger-rooster) · Clash [Kuneho](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Dragon](/guide/zodiac-dragon) · [Manok](/guide/zodiac-rooster), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-dog": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Dragon at ang Aso — Clash",
    "summary": "Kung anong relasyon ang taglay ng Dragon at ng Aso, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Dragon at ang Aso ay bumubuo ng clash",
        "blocks": [
          {
            "p": "Ang Dragon at ang Aso ay bumubuo ng clash. Magkatapat mismo sa bilog ang 辰 at 戌."
          },
          {
            "p": "Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao."
          },
          {
            "p": "Sa bilog, ang 辰 ay nasa ikalimang puwesto at ang 戌 ay nasa ikalabing-isang puwesto, at anim na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Dragon at ang Aso",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacChung} puntos sa zodiac compatibility at nang {swingDayBranchChung} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Dragon** — Six-Harmony [Manok](/guide/zodiac-pair-dragon-rooster) · Half triad [Daga](/guide/zodiac-pair-rat-dragon) · Discord [Baboy](/guide/zodiac-pair-dragon-pig) · Clash [Aso](/guide/zodiac-pair-dragon-dog)",
              "Mga espesyal na kapareha ng **Aso** — Six-Harmony [Kuneho](/guide/zodiac-pair-rabbit-dog) · Half triad [Kabayo](/guide/zodiac-pair-horse-dog) · Discord [Ahas](/guide/zodiac-pair-snake-dog) · Clash [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Dragon](/guide/zodiac-dragon) · [Aso](/guide/zodiac-dog), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dragon-pig": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Dragon at ang Baboy — Discord",
    "summary": "Kung anong relasyon ang taglay ng Dragon at ng Baboy, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Dragon at ang Baboy ay bumubuo ng discord",
        "blocks": [
          {
            "p": "Ang Dragon at ang Baboy ay bumubuo ng discord. Ang posisyon ng clash ng 辰 ay 戌 (ang Aso), at nasa tabi nito mismo ang 亥; nasa tabi mismo ng 巳 (ang Ahas), ang posisyon ng clash ng 亥, ang 辰."
          },
          {
            "p": "Tradisyonal itong itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          },
          {
            "p": "Sa bilog, ang 辰 ay nasa ikalimang puwesto at ang 亥 ay nasa ikalabindalawang puwesto, at limang hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Dragon at ang Baboy",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacWonjin} puntos sa zodiac compatibility at nang {swingDayBranchWonjin} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Dragon** — Six-Harmony [Manok](/guide/zodiac-pair-dragon-rooster) · Half triad [Daga](/guide/zodiac-pair-rat-dragon) · Discord [Baboy](/guide/zodiac-pair-dragon-pig) · Clash [Aso](/guide/zodiac-pair-dragon-dog)",
              "Mga espesyal na kapareha ng **Baboy** — Six-Harmony [Tigre](/guide/zodiac-pair-tiger-pig) · Half triad [Kuneho](/guide/zodiac-pair-rabbit-pig) · Discord [Dragon](/guide/zodiac-pair-dragon-pig) · Clash [Ahas](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Dragon](/guide/zodiac-dragon) · [Baboy](/guide/zodiac-pig), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-snake": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Ahas at ang Ahas — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Ahas, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Ahas",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Ahas (巳 at 巳). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 巳 ang ikaanim sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Ahas",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Ahas",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Ahas** — Six-Harmony [Unggoy](/guide/zodiac-pair-snake-monkey) · Half triad [Manok](/guide/zodiac-pair-snake-rooster) · Discord [Aso](/guide/zodiac-pair-snake-dog) · Clash [Baboy](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Ahas](/guide/zodiac-snake), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-monkey": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Ahas at ang Unggoy — Six-Harmony",
    "summary": "Kung anong relasyon ang taglay ng Ahas at ng Unggoy, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Ahas at ang Unggoy ay bumubuo ng six-harmony",
        "blocks": [
          {
            "p": "Ang Ahas at ang Unggoy ay bumubuo ng six-harmony. Bumubuo ng harmonya ang 巳 at 申 gamit lang ang dalawang karakter."
          },
          {
            "p": "Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at sa {scoreYukhap} ito ang pinakamataas na score na makukuha ng alinman sa dalawang hayop."
          },
          {
            "p": "Sa bilog, ang 巳 ay nasa ikaanim na puwesto at ang 申 ay nasa ikasiyam na puwesto, at tatlong hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Ahas at ang Unggoy",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacYukhap} puntos sa zodiac compatibility at nang {swingDayBranchYukhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Ahas** — Six-Harmony [Unggoy](/guide/zodiac-pair-snake-monkey) · Half triad [Manok](/guide/zodiac-pair-snake-rooster) · Discord [Aso](/guide/zodiac-pair-snake-dog) · Clash [Baboy](/guide/zodiac-pair-snake-pig)",
              "Mga espesyal na kapareha ng **Unggoy** — Six-Harmony [Ahas](/guide/zodiac-pair-snake-monkey) · Half triad [Daga](/guide/zodiac-pair-rat-monkey) · Discord [Kuneho](/guide/zodiac-pair-rabbit-monkey) · Clash [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Ahas](/guide/zodiac-snake) · [Unggoy](/guide/zodiac-monkey), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-rooster": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Ahas at ang Manok — Half triad",
    "summary": "Kung anong relasyon ang taglay ng Ahas at ng Manok, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Ahas at ang Manok ay bumubuo ng half triad",
        "blocks": [
          {
            "p": "Ang Ahas at ang Manok ay bumubuo ng half triad. Ang 巳酉丑 ay isang triad group (ang grupong metal), at ang 酉 ang **royal branch** sa gitna nito."
          },
          {
            "p": "Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya half triad ({scoreBanhap}) ang pares na ito."
          },
          {
            "p": "Ang Baka (丑) at ang Ahas (巳) ng parehong grupo ay walang gitnang karakter na 酉, kaya hindi sila binibilang na harmonya at itinuturing na neutral."
          },
          {
            "p": "Sa bilog, ang 巳 ay nasa ikaanim na puwesto at ang 酉 ay nasa ikasampung puwesto, at apat na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Ahas at ang Manok",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacBanhap} puntos sa zodiac compatibility at nang {swingDayBranchBanhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Ahas** — Six-Harmony [Unggoy](/guide/zodiac-pair-snake-monkey) · Half triad [Manok](/guide/zodiac-pair-snake-rooster) · Discord [Aso](/guide/zodiac-pair-snake-dog) · Clash [Baboy](/guide/zodiac-pair-snake-pig)",
              "Mga espesyal na kapareha ng **Manok** — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Baka](/guide/zodiac-pair-ox-rooster), [Ahas](/guide/zodiac-pair-snake-rooster) · Discord [Tigre](/guide/zodiac-pair-tiger-rooster) · Clash [Kuneho](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Ahas](/guide/zodiac-snake) · [Manok](/guide/zodiac-rooster), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-dog": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Ahas at ang Aso — Discord",
    "summary": "Kung anong relasyon ang taglay ng Ahas at ng Aso, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Ahas at ang Aso ay bumubuo ng discord",
        "blocks": [
          {
            "p": "Ang Ahas at ang Aso ay bumubuo ng discord. Ang posisyon ng clash ng 巳 ay 亥 (ang Baboy), at nasa tabi nito mismo ang 戌; nasa tabi mismo ng 辰 (ang Dragon), ang posisyon ng clash ng 戌, ang 巳."
          },
          {
            "p": "Tradisyonal itong itinuturing na pares na may sama ng loob sa isa't isa ngunit hindi mapaghiwalay. Mukhang kalmado sa ibabaw, ngunit pinaniniwalaang tumatagal ang hindi pagkakatugma, kaya nakakakuha ito ng {scoreWonjin} — mas mataas kaysa sa clash ({scoreChung}) at mas mababa kaysa sa neutral ({scoreNeutral})."
          },
          {
            "p": "Sa bilog, ang 巳 ay nasa ikaanim na puwesto at ang 戌 ay nasa ikalabing-isang puwesto, at limang hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Ahas at ang Aso",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Discord"
                ],
                [
                  "Score",
                  "{scoreWonjin}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacWonjin} puntos sa zodiac compatibility at nang {swingDayBranchWonjin} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Ahas** — Six-Harmony [Unggoy](/guide/zodiac-pair-snake-monkey) · Half triad [Manok](/guide/zodiac-pair-snake-rooster) · Discord [Aso](/guide/zodiac-pair-snake-dog) · Clash [Baboy](/guide/zodiac-pair-snake-pig)",
              "Mga espesyal na kapareha ng **Aso** — Six-Harmony [Kuneho](/guide/zodiac-pair-rabbit-dog) · Half triad [Kabayo](/guide/zodiac-pair-horse-dog) · Discord [Ahas](/guide/zodiac-pair-snake-dog) · Clash [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Ahas](/guide/zodiac-snake) · [Aso](/guide/zodiac-dog), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-snake-pig": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Ahas at ang Baboy — Clash",
    "summary": "Kung anong relasyon ang taglay ng Ahas at ng Baboy, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Ahas at ang Baboy ay bumubuo ng clash",
        "blocks": [
          {
            "p": "Ang Ahas at ang Baboy ay bumubuo ng clash. Magkatapat mismo sa bilog ang 巳 at 亥."
          },
          {
            "p": "Pinananatili ng serbisyong ito ang {scoreChung} puntos kahit sa clash. Sa tradisyonal na myeongri, ang clash ay banggaan, hindi katapusan ng relasyon, at ang pagbibigay ng score na malapit sa pinakailalim ay magiging parang paghatol sa dalawang tao."
          },
          {
            "p": "Sa bilog, ang 巳 ay nasa ikaanim na puwesto at ang 亥 ay nasa ikalabindalawang puwesto, at anim na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Ahas at ang Baboy",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Clash"
                ],
                [
                  "Score",
                  "{scoreChung}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, ibinababa ng pares na ito ang huling match rate nang {swingZodiacChung} puntos sa zodiac compatibility at nang {swingDayBranchChung} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Ahas** — Six-Harmony [Unggoy](/guide/zodiac-pair-snake-monkey) · Half triad [Manok](/guide/zodiac-pair-snake-rooster) · Discord [Aso](/guide/zodiac-pair-snake-dog) · Clash [Baboy](/guide/zodiac-pair-snake-pig)",
              "Mga espesyal na kapareha ng **Baboy** — Six-Harmony [Tigre](/guide/zodiac-pair-tiger-pig) · Half triad [Kuneho](/guide/zodiac-pair-rabbit-pig) · Discord [Dragon](/guide/zodiac-pair-dragon-pig) · Clash [Ahas](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Ahas](/guide/zodiac-snake) · [Baboy](/guide/zodiac-pig), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-horse": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Kabayo at ang Kabayo — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Kabayo, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Kabayo",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Kabayo (午 at 午). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 午 ang ikapito sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Kabayo",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Kabayo",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Kabayo** — Six-Harmony [Tupa](/guide/zodiac-pair-horse-goat) · Half triad [Tigre](/guide/zodiac-pair-tiger-horse), [Aso](/guide/zodiac-pair-horse-dog) · Discord [Baka](/guide/zodiac-pair-ox-horse) · Clash [Daga](/guide/zodiac-pair-rat-horse)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Kabayo](/guide/zodiac-horse), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-goat": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Kabayo at ang Tupa — Six-Harmony",
    "summary": "Kung anong relasyon ang taglay ng Kabayo at ng Tupa, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Kabayo at ang Tupa ay bumubuo ng six-harmony",
        "blocks": [
          {
            "p": "Ang Kabayo at ang Tupa ay bumubuo ng six-harmony. Bumubuo ng harmonya ang 午 at 未 gamit lang ang dalawang karakter."
          },
          {
            "p": "Ang six-harmony ang magandang relasyong pinakamadalas lumitaw sa compatibility, at sa {scoreYukhap} ito ang pinakamataas na score na makukuha ng alinman sa dalawang hayop."
          },
          {
            "p": "Sa bilog, ang 午 ay nasa ikapitong puwesto at ang 未 ay nasa ikawalong puwesto, at isang hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Kabayo at ang Tupa",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Six-Harmony"
                ],
                [
                  "Score",
                  "{scoreYukhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacYukhap} puntos sa zodiac compatibility at nang {swingDayBranchYukhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Kabayo** — Six-Harmony [Tupa](/guide/zodiac-pair-horse-goat) · Half triad [Tigre](/guide/zodiac-pair-tiger-horse), [Aso](/guide/zodiac-pair-horse-dog) · Discord [Baka](/guide/zodiac-pair-ox-horse) · Clash [Daga](/guide/zodiac-pair-rat-horse)",
              "Mga espesyal na kapareha ng **Tupa** — Six-Harmony [Kabayo](/guide/zodiac-pair-horse-goat) · Half triad [Kuneho](/guide/zodiac-pair-rabbit-goat) · Discord [Daga](/guide/zodiac-pair-rat-goat) · Clash [Baka](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Kabayo](/guide/zodiac-horse) · [Tupa](/guide/zodiac-goat), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-horse-dog": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Kabayo at ang Aso — Half triad",
    "summary": "Kung anong relasyon ang taglay ng Kabayo at ng Aso, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Kabayo at ang Aso ay bumubuo ng half triad",
        "blocks": [
          {
            "p": "Ang Kabayo at ang Aso ay bumubuo ng half triad. Ang 寅午戌 ay isang triad group (ang grupong apoy), at ang 午 ang **royal branch** sa gitna nito."
          },
          {
            "p": "Tinatanggap lang ng Inyeon-Link ang mga pares na kasama ang royal branch, kaya half triad ({scoreBanhap}) ang pares na ito."
          },
          {
            "p": "Ang Tigre (寅) at ang Aso (戌) ng parehong grupo ay walang gitnang karakter na 午, kaya hindi sila binibilang na harmonya at itinuturing na neutral."
          },
          {
            "p": "Sa bilog, ang 午 ay nasa ikapitong puwesto at ang 戌 ay nasa ikalabing-isang puwesto, at apat na hakbang ang layo ng dalawang karakter sa isa't isa."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Ang Kabayo at ang Aso",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Half triad"
                ],
                [
                  "Score",
                  "{scoreBanhap}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacBanhap} puntos sa zodiac compatibility at nang {swingDayBranchBanhap} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng bawat hayop",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Kabayo** — Six-Harmony [Tupa](/guide/zodiac-pair-horse-goat) · Half triad [Tigre](/guide/zodiac-pair-tiger-horse), [Aso](/guide/zodiac-pair-horse-dog) · Discord [Baka](/guide/zodiac-pair-ox-horse) · Clash [Daga](/guide/zodiac-pair-rat-horse)",
              "Mga espesyal na kapareha ng **Aso** — Six-Harmony [Kuneho](/guide/zodiac-pair-rabbit-dog) · Half triad [Kabayo](/guide/zodiac-pair-horse-dog) · Discord [Ahas](/guide/zodiac-pair-snake-dog) · Clash [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Kabayo](/guide/zodiac-horse) · [Aso](/guide/zodiac-dog), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-goat-goat": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Tupa at ang Tupa — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Tupa, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Tupa",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Tupa (未 at 未). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 未 ang ikawalo sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Tupa",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Tupa",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Tupa** — Six-Harmony [Kabayo](/guide/zodiac-pair-horse-goat) · Half triad [Kuneho](/guide/zodiac-pair-rabbit-goat) · Discord [Daga](/guide/zodiac-pair-rat-goat) · Clash [Baka](/guide/zodiac-pair-ox-goat)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Tupa](/guide/zodiac-goat), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-monkey-monkey": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Unggoy at ang Unggoy — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Unggoy, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Unggoy",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Unggoy (申 at 申). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 申 ang ikasiyam sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Unggoy",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Unggoy",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Unggoy** — Six-Harmony [Ahas](/guide/zodiac-pair-snake-monkey) · Half triad [Daga](/guide/zodiac-pair-rat-monkey) · Discord [Kuneho](/guide/zodiac-pair-rabbit-monkey) · Clash [Tigre](/guide/zodiac-pair-tiger-monkey)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Unggoy](/guide/zodiac-monkey), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-rooster-rooster": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Manok at ang Manok — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Manok, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Manok",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Manok (酉 at 酉). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 酉 ang ikasampu sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Manok",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Manok",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Manok** — Six-Harmony [Dragon](/guide/zodiac-pair-dragon-rooster) · Half triad [Baka](/guide/zodiac-pair-ox-rooster), [Ahas](/guide/zodiac-pair-snake-rooster) · Discord [Tigre](/guide/zodiac-pair-tiger-rooster) · Clash [Kuneho](/guide/zodiac-pair-rabbit-rooster)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Manok](/guide/zodiac-rooster), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-dog-dog": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Aso at ang Aso — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Aso, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Aso",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Aso (戌 at 戌). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 戌 ang ikalabing-isa sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Aso",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Aso",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Aso** — Six-Harmony [Kuneho](/guide/zodiac-pair-rabbit-dog) · Half triad [Kabayo](/guide/zodiac-pair-horse-dog) · Discord [Ahas](/guide/zodiac-pair-snake-dog) · Clash [Dragon](/guide/zodiac-pair-dragon-dog)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Aso](/guide/zodiac-dog), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
          }
        ]
      }
    ]
  },

  "guide/zodiac-pair-pig-pig": {
    "eyebrow": "Ayon sa pares",
    "title": "Ang Baboy at ang Baboy — Parehong Branch",
    "summary": "Kung anong relasyon ang taglay ng dalawang taong Baboy, kung ilang puntos ang nakukuha nito, at kung gaano kalaki ang ibinabago ng score na iyon sa huling match rate — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Inyeon-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Parehong branch ang taglay ng dalawang taong Baboy",
        "blocks": [
          {
            "p": "Parehong branch ang taglay ng dalawang taong Baboy (亥 at 亥). Ibig sabihin nito ay magkahawig sila, hindi magkaakit."
          },
          {
            "p": "Kaya may score itong {scoreSame}, bahagyang nasa itaas ng neutral ({scoreNeutral}): hindi harmonya, clash o discord, bahagya lang na itinaas."
          },
          {
            "p": "Ang 亥 ang ikalabindalawa sa labindalawang earthly branch."
          }
        ]
      },
      {
        "title": "Ang mga numero ng pares na ito",
        "blocks": [
          {
            "table": {
              "caption": "Dalawang taong Baboy",
              "head": [
                "Aytem",
                "Halaga"
              ],
              "rows": [
                [
                  "Relasyon",
                  "Parehong branch"
                ],
                [
                  "Score",
                  "{scoreSame}"
                ],
                [
                  "Bahagi ng huling match rate sa zodiac compatibility",
                  "{weightZodiac}"
                ],
                [
                  "Bahagi ng huling match rate sa day branch compatibility",
                  "{weightDayBranchTotal}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Gaano kalaki ang ibinabago nito sa huling match rate",
        "blocks": [
          {
            "p": "Kung pantay ang lahat ng iba, itinataas ng pares na ito ang huling match rate nang {swingZodiacSame} puntos sa zodiac compatibility at nang {swingDayBranchSame} puntos sa day branch compatibility, kumpara sa neutral na pares."
          },
          {
            "p": "Inilalagay ng zodiac compatibility nang magkatabi ang mga branch ng taon ng kapanganakan, at ng day branch compatibility ang sa araw ng kapanganakan. Maaaring magkaibang branch ang dalawa, kaya ang parehong dalawang tao ay maaaring magpakita ng magkaibang relasyon sa bawat isa."
          }
        ]
      },
      {
        "title": "Ang iba pang espesyal na relasyon ng Baboy",
        "blocks": [
          {
            "ul": [
              "Mga espesyal na kapareha ng **Baboy** — Six-Harmony [Tigre](/guide/zodiac-pair-tiger-pig) · Half triad [Kuneho](/guide/zodiac-pair-rabbit-pig) · Discord [Dragon](/guide/zodiac-pair-dragon-pig) · Clash [Ahas](/guide/zodiac-pair-snake-pig)"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang hayop sa relasyon ng dalawang tao. Ang {weightSaju} ng huling match rate ay itinatakda ng saju compatibility.",
              "Ipinapalagay ng mga pagbabago sa puntos sa itaas na pantay ang lahat ng iba; ang aktuwal na resulta ay itinatakda ng buong saju ng dalawang tao."
            ]
          },
          {
            "p": "Ang buong gabay sa bawat hayop ay nasa [Baboy](/guide/zodiac-pig), at ang buong tsart ay nasa [tsart ng labindalawang branch](/guide/branches)."
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
