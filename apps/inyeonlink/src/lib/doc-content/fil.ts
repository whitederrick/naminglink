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
            "p": "Bumubuo ang Inyeon-Link ng dalawang birth chart mula sa mga petsa at oras ng kapanganakan at ipinapakita **kung paano nagtatagpo ang dalawang set ng enerhiya.** Maaari mo ring basahin ang iyong sariling chart nang mag-isa at makita kung aling mga temperamento ang karaniwang nababagay sa iyo."
          },
          {
            "p": "Ang pagbabasa sa screen ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay mga PDF report na nagdadala ng mga numerong hindi kailanman ipinapakita ng screen — lakas ng elemento, mga pairing ng ten-god at ang mga relasyon sa lahat ng apat na haligi."
          }
        ]
      },
      {
        "title": "Ano ang kinakalkula namin",
        "blocks": [
          {
            "p": "Ang mga chart ay binuo mula sa **Korean lunisolar almanac**, at ang oras ng kapanganakan ay itinatama sa **true solar time** para sa lugar ng kapanganakan — ang parehong oras ng orasan ay nangangahulugang ibang posisyon ng araw depende sa kung saan ka ipinanganak."
          },
          {
            "p": "Ang mga marka ay nagmumula lamang sa mga nakatakdang patakaran. Ang mga tradisyunal na konsepto — ten gods, mga relasyon ng sanga, ang sumusuportang elemento — ay ipinahayag bilang mga patakaran, kaya **ang parehong input ay palaging nagbibigay ng parehong resulta.** Kapag nagbago ang isang patakaran, nagsasagawa kami ng regression harness upang matiyak na ang mga mas lumang pagbabasa ay hindi nagbago."
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
              "**Hindi kami nagkukuwento ng kapalaran.** Wala rito ang nagsasabi sa iyo na habulin o iwasan ang sinuman. Ito ay isang sanggunian na hinango mula sa isang tradisyon.",
              "**Hindi namin iniimbak ang iyong ipinasok.** Ang mga detalye ng kapanganakan ay ginagamit para sa sandali ng pagkalkula at hindi kailanman isinusulat; ang mga link ng resulta ay nananatili sa bahagi ng URL na hindi ipinapadala ng browser sa server.",
              "**Ang isang marka ay hindi hatol sa isang tao.** Ang mababang numero ay hindi nagpapawalang-bisa sa isang relasyon."
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
    "summary": "Ipinapakita ng Inyeon-Link ang lahat ng patakaran na ginagamit nito. Maaari mong suriin ang mga item at ang kanilang mga timbang, ang mga marka mula sa talahanayan ng relasyon ng earthly branch, at ang mga threshold values na naghihiwalay sa isang malakas na day master at isang mahina na day master — makikita mo kung saan nagmumula ang mga numero sa screen.",
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
            "p": "Ang rate ng pagtutugma ay nagmumula sa dalawang sanga. **Saju compatibility** ay tumitingin sa buong orihinal na chart ng saju ng parehong indibidwal, habang ang **zodiac compatibility** ay tanging isinasaalang-alang ang isang earthly branch mula sa taon ng kapanganakan. Ang huling halaga ay nakukuha sa pamamagitan ng weighted averaging ng dalawa."
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
            "p": "Mas mabigat ang bahagi ng saju dahil sa pagkakaiba ng dami ng impormasyong ginamit. Isinasaalang-alang ng saju ang lahat ng apat na haligi, habang ang zodiac ay tumitingin lamang sa isang karakter. Gayunpaman, hindi tinatanggal ang zodiac sa dalawang dahilan — ito ang pinaka-intuitively understandable na item, at ito ang **tanging axis na ang halaga ay hindi nagbabago kahit na hindi alam ang oras ng kapanganakan**."
          }
        ]
      },
      {
        "title": "Ang Apat na Item ng Saju Compatibility",
        "blocks": [
          {
            "p": "Ang bahagi ng saju ay higit pang nahahati sa apat. Ang bawat item ay pinili upang matiyak na ang kanilang isinasaalang-alang ay hindi nag-o-overlap."
          },
          {
            "figure": "four-pillars",
            "caption": "Ang saju ay binubuo ng walong karakter na nabuo mula sa mga heavenly stems at earthly branches ng taon, buwan, araw, at oras ng kapanganakan. Ang day stem at day branch na nabanggit sa ibaba ay ang dalawang karakter sa day pillar.",
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
              "branch": "Sangay ng Lupa",
              "branchNote": "Sangay ng Araw = Palasyo ng Asawa"
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
                  "Relasyon ng Sangay ng Araw",
                  "Ano ang relasyon ng mga sangay ng araw (日干) ng dalawang tao sa isa't isa — tiningnan sa pamamagitan ng Sampung Diyos",
                  "{weightDayMaster}"
                ],
                [
                  "Pagkukumplemento ng Limang Elemento",
                  "Mayroon bang enerhiya ang kapareha na kailangan ko — tiningnan sa pamamagitan ng sumusuportang elemento na kasalukuyang kailangan ng tsart",
                  "{weightElementSupply}"
                ],
                [
                  "Bituin ng Asawa",
                  "Tumutugma ba ang sangay ng araw ng kapareha sa aking posisyon ng asawa?",
                  "{weightSpouseStar}"
                ],
                [
                  "Relasyon ng Sangay ng Araw",
                  "Ang mga sangay ng araw (日支) ng dalawang tao ba ay isang kombinasyon o isang salungatan?",
                  "{weightDayBranch}"
                ]
              ]
            }
          },
          {
            "p": "Ang sangay ng araw ay binabasa dahil ang tradisyon ay itinuturing ito bilang ang **palasyo ng asawa**. Sa apat na haligi, ito ang tumuturo sa kapareha, na ginagawang ito ang unang lugar na tinitingnan para sa pagkakatugma."
          }
        ]
      },
      {
        "title": "Kung ang kasarian ay hindi isiniwalat, ang elemento ng asawa ay hindi isasama",
        "blocks": [
          {
            "p": "Ang elemento ng asawa ay nangangailangan ng kaalaman sa kasarian para sa pagkalkula. Ang tradisyon ay nagbabasa ng posisyon na tumuturo sa isang asawa nang iba depende sa kasarian. Kung hindi isiniwalat, ang item na ito ay **ibubukod** at ang timbang ng natitirang tatlong item ay muling i-renormalize."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hindi ito ituturing na 0 puntos",
        "blocks": [
          {
            "p": "Kung ang mga nawawalang posisyon ay itinuturing na 0 puntos, ang iskor ay hindi patas na bababa dahil lamang sa hindi isiniwalat ang kasarian. Ang muling pag-renormalize ng mga timbang ay pumipigil sa isyung ito."
          }
        ]
      },
      {
        "title": "Maaaring gawin ang mga kalkulasyon nang hindi nalalaman ang oras ng kapanganakan",
        "blocks": [
          {
            "p": "Ang oras ng kapanganakan ay ginagamit upang matukoy ang haligi ng oras. Kung hindi alam, ang mga kalkulasyon ay gagawin nang walang haligi ng oras, at ang katotohanang ito ay ipapakita sa screen ng mga resulta. Dahil walang direktang input para sa haligi ng oras sa apat na item ng pagkakatugma, ang mga halaga ay hindi magbabago nang malaki, ngunit ito ay nakakaapekto sa balanse ng limang elemento."
          },
          {
            "p": "Kung alam mo ang oras, mangyaring piliin din ang lugar ng kapanganakan. Kung ang pamantayang oras ay naiiba mula sa aktwal na solar na posisyon, ang paggamit nito nang ganito ay maaaring magdulot ng hindi pagkaka-align sa haligi ng oras [(true solar time correction)](/guide/true-solar-time)."
          }
        ]
      },
      {
        "title": "Ang parehong input ay palaging magbibigay ng parehong halaga",
        "blocks": [
          {
            "p": "Ang lahat ng iskor ay tinutukoy ng mga patakaran. Walang artipisyal na katalinuhan ang ginamit, ni walang mga random na numero ang ginamit. Samakatuwid, ang pag-input ng parehong dalawang petsa ng kapanganakan nang maraming beses ay hindi magbibigay ng iba't ibang resulta. Bilang isang serbisyo na hindi nag-iimbak ng data, hindi maaaring ma-retrieve ang mga nakaraang resulta, ngunit ang **determinismo** ay pumapangalawa dito."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang pagbabago ng mga patakaran ay magtataas ng bersyon",
        "blocks": [
          {
            "p": "Sa bawat pagkakataon na ang mga patakaran sa pag-score ay binago, ang bersyon ng makina ay ina-update. Ang bersyon ay nakasulat sa ibaba ng screen ng mga resulta, na nagbibigay-daan sa iyo upang makilala kung aling mga patakaran ang ginamit upang kalkulahin ang mga numerong kasalukuyan mong tinitingnan."
          }
        ]
      },
      {
        "title": "Ano ang hindi ito resulta",
        "blocks": [
          {
            "p": "Ito ay isang **reference material** na kinakalkula mula sa mga patakaran na itinayo sa pananaw ng tradisyon. Hindi ito isang siyentipikong prediksyon, ni isang tiyak na pahayag tungkol sa relasyon ng dalawang indibidwal. Ang saklaw ng iskor ay itinakda sa isang minimum na humigit-kumulang 45 puntos para sa kadahilanang ito — walang kombinasyon ang magbibigay ng halaga na malapit sa 0 puntos."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Talaan ng Relasyon",
    "title": "Labindalawang Sangay ng Lupa — Kombinasyon, Salungatan, Alitan",
    "summary": "Ito ay isang talahanayan ng relasyon na ginagamit para sa parehong pagkakatugma ng sangay ng araw at pagkakatugma ng zodiac. Ganap nitong ibinubunyag kung ano ang ibig sabihin ng bawat kombinasyon, salungatan, at alitan at ang kani-kanilang mga iskor.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang mga sangay ng lupa ay binubuo ng labindalawang karakter",
        "blocks": [
          {
            "p": "Ang labindalawang sangay ng lupa (十二支) ay 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Ang mga kilalang tanda ng zodiac ay nauugnay sa bawat isa sa mga labindalawang karakter na ito."
          },
          {
            "figure": "branch-wheel",
            "caption": "Ang pag-aayos ng labindalawang karakter sa isang bilog ay nagbibigay ng malinaw na pananaw sa mga relasyon. Ang isang salungatan ay palaging nakaupo nang direkta sa tapat, habang ang isang pares ng anim na pagkakasundo at isang tahimik na alitan ay mas malapit na mga kapitbahay. Ang mga linyang ito ay direktang nakuha mula sa mga patakaran ng pagkalkula, hindi nakasulat sa teksto.",
            "labels": {
              "alt": "Isang diagram na nagpapakita ng labindalawang sangay ng lupa na inayos sa isang bilog na may mga linya na kumokonekta sa anim na pagkakasundo, salungatan, at alitan.",
              "yukhap": "Anim na Pagkakasundo",
              "chung": "Salungatan",
              "wonjin": "Alitan",
              "rat": "Daga",
              "ox": "Baka",
              "tiger": "Tigre",
              "rabbit": "Kuneho",
              "dragon": "Dragon",
              "snake": "Ahas",
              "horse": "Kabayo",
              "goat": "Kambing",
              "monkey": "Unggoy",
              "rooster": "Tandang",
              "dog": "Aso",
              "pig": "Baboy"
            }
          },
          {
            "p": "Sa saju, bawat isa sa apat na haligi ay may isang earthly branch. Gumagamit ang Inyeon-Link ng **day branch** (ang palasyo ng asawa) at **year branch** (ang zodiac animal) mula sa mga ito. Parehong posisyon ay sinusuri gamit ang talahanayan ng relasyon sa ibaba."
          }
        ]
      },
      {
        "title": "Buong Talahanayan ng Relasyon",
        "blocks": [
          {
            "table": {
              "caption": "Nakaayos ayon sa pinakamataas na iskor. Ito ang mga halagang talagang ginagamit ng Inyeon-Link.",
              "head": [
                "Relasyon",
                "Kaukulang Pairs",
                "Kahulugan",
                "Iskor"
              ],
              "rows": [
                [
                  "Kombinasyon (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Kapag nagtipon ang lahat ng tatlong karakter, bumubuo sila ng isang kumpletong elemental formation — isang **guk** (局). Ito ay itinuturing na pinakamalakas na kombinasyon.",
                  "{scoreSamhap}"
                ],
                [
                  "Six-Harmony (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Mga pares na umaakit sa isa't isa. Ito ang pinaka-karaniwang kombinasyon sa compatibility dahil binubuo ito ng tanging dalawang karakter.",
                  "{scoreYukhap}"
                ],
                [
                  "Half triad (半合)",
                  "Dalawang karakter na may kasamang royal branch (王地) mula sa triad (子·酉·午·卯)",
                  "Isang half combination na may kasamang karakter sa gitna ng formation. Hindi ito makabuo ng kumpletong kombinasyon gamit lamang ang dalawang karakter, kaya't ito ay mas mababa kaysa sa isang buong triad.",
                  "{scoreBanhap}"
                ],
                [
                  "Parehong earthly branch",
                  "子子 · 丑丑 …",
                  "Mga karakter na pareho. Ibig sabihin nito ay magkapareho sila, ngunit hindi ito nangangahulugang umaakit, kaya't ito ay inilagay sa gitna.",
                  "{scoreSame}"
                ],
                [
                  "Neutral",
                  "Mga pares na hindi nabibilang sa kahit saan sa itaas o ibaba",
                  "Isang kombinasyon na walang espesyal na relasyon. Ito ang reference point.",
                  "{scoreNeutral}"
                ],
                [
                  "Tahimik na hidwaan (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Mga pares na hindi makapaghiwalay sa kabila ng pagkakaroon ng sama ng loob. Mukha silang tahimik sa ibabaw ngunit itinuturing na tumatagal.",
                  "{scoreWonjin}"
                ],
                [
                  "Clash (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Mga pares na nagkakaroon ng head-on clash. Ito ay anim na pares na nagkakaharap.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang mga buong triad ay hindi lumilitaw sa serbisyong ito",
        "blocks": [
          {
            "p": "Ang isang buong triad ay nangangailangan ng tatlong karakter upang mabuo. Gayunpaman, ang compatibility ay naka-istruktura sa pamamagitan ng pagtutugma ng mga earthly branches ng dalawang tao **isa-isa**, na nagreresulta sa tanging dalawang karakter. Samakatuwid, ang lumilitaw dito ay palaging isang half triad, at ang mga puntos ng buong triad {scoreSamhap} ay nakalaan para sa pagsusuri ng mga formation sa loob ng bawat saju."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang mga half triad ay dapat magkaroon ng royal branch",
        "blocks": [
          {
            "p": "Mayroon ding isang pamamaraan na itinuturing na half triad kung ang parehong karakter ay kabilang sa parehong triad group. Ito ay maaaring magdulot ng mataas na iskor kahit para sa mga kombinasyon na mahirap tawaging triad, tulad ng 申辰. Samakatuwid, kinikilala ng serbisyong ito ang isang half triad lamang para sa mga pares na may kasamang royal branch (王地) (子·酉·午·卯), at ang mga kombinasyon tulad ng 申辰·巳丑·寅戌·亥未 na walang royal branch ay hindi itinuturing na triad."
          }
        ]
      },
      {
        "title": "Ang dahilan para sa paghihiwalay ng tahimik na hidwaan",
        "blocks": [
          {
            "p": "Ang anim na pares ng tahimik na hidwaan ay madalas na nakikita sa compatibility tulad ng mga clash. Kung bibilangin natin ang mga kombinasyon bilang mga pares at clash, ang mga anim na pares na ito ay lahat ay maililibing sa ilalim ng neutral {scoreNeutral} na puntos, kaya't sila ay inilagay nang hiwalay."
          },
          {
            "p": "Habang ang mga clash ay maliwanag at kapansin-pansin, ang tahimik na hidwaan ay tahimik na hindi naka-align. Samakatuwid, ito ay inilagay sa iskor na {scoreWonjin}, na mas mataas kaysa sa mga clash ({scoreChung}) ngunit tiyak na mas mababa kaysa sa neutral ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang mga iskor ay itinatakda din para sa mga clash",
        "blocks": [
          {
            "p": "Ang pinakamababang iskor ng clash ay {scoreChung}. Ang layunin ay hindi magtalaga ng halaga na malapit sa 0. Sa tradisyon, ang clash ay hindi isang 'wakas' kundi isang 'banggaan', at ang pagtatalaga ng mababang iskor ay magpapahiwatig na ang serbisyo ay gumagawa ng tiyak na pahayag tungkol sa relasyon."
          },
          {
            "p": "Sa minimum na {scoreChung} at maximum na {scoreSamhap}, malinaw ang saklaw, ngunit hindi ito gumagawa ng tiyak na konklusyon."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Zodiac",
    "title": "Bakit isinasaalang-alang ng pagkakatugma ng zodiac ang taon ng sangay?",
    "summary": "Ang zodiac ay ang earthly branch ng taon ng kapanganakan. Ito ang nagpapaliwanag kung bakit ito ay nagmula sa saju year pillar sa halip na sa kalendaryo, at nililinaw ang kahalagahan ng pagkakatugma ng zodiac.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang zodiac ay ang earthly branch ng taon ng kapanganakan",
        "blocks": [
          {
            "p": "Ang saju ay binubuo ng apat na haligi: taon, buwan, araw, at oras, kung saan ang bawat haligi ay naglalaman ng isang heavenly stem at isang earthly branch. Ang **year branch** ang nagdadala ng hayop na tinatawag nating zodiac sign."
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
            "p": "Ang punto kung saan nagbabago ang zodiac ay hindi Enero 1 ng solar calendar o Lunar New Year. Ang pamantayan para sa pagbabago ng taon sa saju ay **Ipchun**. Samakatuwid, ang mga ipinanganak sa Enero o maagang Pebrero ay maaaring magkaroon ng ibang taon ng zodiac kaysa sa nasa kalendaryo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang dahilan kung bakit hindi kami nagtatanong nang direkta tungkol sa zodiac",
        "blocks": [
          {
            "p": "Ito ang dahilan kung bakit kinokolekta lamang namin ang petsa ng kapanganakan nang hindi nagtatanong tungkol sa zodiac sa input screen. Kapag kinakalkula ng saju engine ang year branch, ang hangganan ng Ipchun ay awtomatikong inaayos. Kung pipiliin mo ito nang direkta, ang isang ipinanganak sa maagang Pebrero ay maaaring pumili ng zodiac na hindi tumutugma sa kanilang aktwal na zodiac."
          }
        ]
      },
      {
        "title": "Ang pagkakatugma ng zodiac ay isinasaalang-alang lamang ang isang relasyon",
        "blocks": [
          {
            "p": "Ang pagkalkula ng pagkakatugma ng zodiac ay simple. Ito ay naghahambing sa year branches ng dalawang tao upang matukoy kung ang relasyon ay maayos, may clash, o tahimik na hindi pagkakaunawaan, at ginagamit ang score na iyon. Dahil isa lamang ang item, walang pangangailangan na ipamahagi ang mga timbang."
          },
          {
            "p": "Ang mga score para sa bawat relasyon ay nakalista lahat sa [Twelve Branches Relationship Table](/guide/branches). Ang compatibility ng day branch ay gumagamit ng parehong talahanayan."
          }
        ]
      },
      {
        "title": "Ang dahilan para sa pagtukoy ng timbang",
        "blocks": [
          {
            "p": "Ang pagkakatugma ng zodiac ay kumakatawan sa {weightZodiac} ng huling rate ng pagtutugma. Habang ang pagkakatugma ng saju ay tumitingin sa lahat ng apat na haligi, ang zodiac ay isinasaalang-alang lamang ang isang karakter, kaya hindi sila maaaring timbangin nang pantay."
          },
          {
            "p": "Gayunpaman, may dalawang dahilan kung bakit hindi ito inaalis."
          },
          {
            "ul": [
              "**Ito ang pinaka-intuitively na mauunawaan na item**. Kahit na hindi alam ang bokabularyo ng tradisyon, ang 'ang tigre at ang unggoy ay may clash' ay may kahulugan.",
              "**Ito ang tanging axis na hindi nagbabago kahit na hindi alam ang oras ng kapanganakan**. Kung hindi mo alam ang oras, ang hour pillar ay nawawala at ang lakas ng mga five elements ay nagbabago, ngunit ang year branch ay nananatiling pareho."
            ]
          }
        ]
      },
      {
        "title": "Maaari mo ring tingnan ang pagkakatugma ng zodiac nang hiwalay",
        "blocks": [
          {
            "p": "Sa screen ng mga resulta, ipinapakita namin ang mga score para sa parehong pagkakatugma ng saju at pagkakatugma ng zodiac nang hiwalay. Kung ang huling rate ng pagtutugma lamang ang ipinakita, hindi malinaw kung saan nagmula ang numerong iyon. Kung ang dalawang halaga ay makabuluhang magkakaiba, ang sarili nito ay karapat-dapat na pansinin."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Sampung Diyos",
    "title": "Sampung Diyos at Posisyon ng Asawa",
    "summary": "Tinitingnan namin kung ano ang day stem ng bawat tao sa isa't isa sa pamamagitan ng Sampung Diyos. Ipinaliwanag namin kung bakit ang direktang kayamanan at hindi direktang kayamanan ay binabasa nang iba kahit na pareho silang kayamanan.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang **day stem** ay ang tao mismo",
        "blocks": [
          {
            "p": "Sa walong karakter ng saju, ang **day stem** (ang heavenly stem ng araw ng kapanganakan) ay tumutukoy sa tao mismo. Ang natitirang pitong karakter ay binabasa bilang kapaligiran kung saan nakalagay ang day stem na iyon."
          },
          {
            "p": "Ang **Ten Gods** (十神) ay naghahati kung paano nakikita ng day stem ang iba pang mga karakter sa sampung kategorya. Ang nagpapakain sa akin ay **resource**, ang kapareho ko ay **peer**, ang aking nililikha ay **output**, ang aking kinokontrol ay **wealth**, at ang kumokontrol sa akin ay **authority** — bawat isa sa lima ay nahahati pa ayon sa polarity, na nagiging sampu."
          }
        ]
      },
      {
        "title": "Ano ang **day stem** ng bawat tao sa isa't isa",
        "blocks": [
          {
            "p": "Ito ang unang item sa **compatibility**. Kapag natukoy na kung ano ang nakikita ng **day stem** ni A sa **day stem** ni B, natutukoy din ang pananaw ni B kay A, kaya't may **anim na posibilidad** lamang."
          },
          {
            "table": {
              "caption": "Sa pagkakasunod-sunod ng pinakamataas na iskor",
              "head": [
                "Pair",
                "Yin/Yang",
                "Pangalan",
                "Kahulugan"
              ],
              "rows": [
                [
                  "Direct Wealth ↔ Direct Authority",
                  "Kabaligtaran na polarity",
                  "Mainit na ugnayan (有情)",
                  "Ito ang pares na tradisyonal na nakikita bilang posisyon ng asawa. Ang yin at yang ay hindi magkatugma, na umaakit sa isa't isa."
                ],
                [
                  "Hurting Officer ↔ Direct Resource",
                  "Kabaligtaran na polarity",
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
                  "Kagalit ↔ Kagalit",
                  "Kabaligtaran na polarity",
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
                  "Ang owl star ay nananakaw ng pagkain (梟神奪食)",
                  "Ang enerhiyang ibinibigay ay kinukuha ng kapareha, na humaharang sa daloy."
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
            "p": "Ang panig kung saan hindi magkatugma ang yin at yang (Proper Wealth, Proper Officer, Proper Companion) ay emosyonal, habang ang parehong panig (Resource, Officer, Companion) ay walang emosyon, na siyang prinsipyo na naghihiwalay sa tamang at panig ng **Ten Gods**."
          }
        ]
      },
      {
        "title": "Ang dahilan para tingnan gamit ang **Ten Gods** sa halip na tatlong elemento",
        "blocks": [
          {
            "p": "Mayroong isang paraan ng pagtingin sa relasyon ng **day stem** sa tatlong elemento (mutual generation, sameness, mutual overcoming). Ito ay simple, ngunit **nawawala ang yin at yang.** 甲 (yang wood) at 乙 (yin wood) ay nagiging parehong 'sameness' tulad ng 甲 at 甲, at ang mutual overcoming ay pinagsasama sa isang solong iskor na walang direksyon o yin at yang."
          },
          {
            "p": "Ang posisyon ng asawa ay dapat suriin batay sa **Ten Gods**. Kung ang mga item na tiningnan ng limang elemento at ang mga item na tiningnan ng **Ten Gods** ay pinagsama sa isang makina, magkakaroon ng dalawang pamantayan para sa parehong dalawang karakter. Samakatuwid, pinagsasama natin gamit ang **Ten Gods**."
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa ay Proper Wealth at Proper Officer",
        "blocks": [
          {
            "p": "Sa tradisyon, kung aling **Ten Gods** ang kumakatawan sa isang asawa ay nag-iiba ayon sa kasarian."
          },
          {
            "table": {
              "head": [
                "Kasarian",
                "Posisyon ng Asawa",
                "Kaukulang Posisyon"
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
            "p": "Kahit na pareho silang mapagkukunan, tanging ang emosyonal na **Tamang Yaman** ang itinuturing na posisyon ng asawa, habang ang Yaman ay binabasa bilang kalikasan ng aktibidad at kayamanan. Samakatuwid, ang Tamang Yaman at Tamang Opisyal ay binibilang bilang 2 puntos, habang ang Yaman at Opisyal ay binibilang bilang 1 punto, at ang parehong direksyon ay pinagsasama — kung pareho silang nakikita bilang mga posisyon ng asawa, ito ang pinakamataas."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kung ang kasarian ay hindi isiniwalat, alisin ang item na ito",
        "blocks": [
          {
            "p": "Kung ang isang hindi mapagpasyang item ay itinakda sa 0 puntos, nagreresulta ito sa hindi patas na mababang iskor. Ang natitirang timbang pagkatapos alisin ang item ay muling na-normalize [(item at timbang)](/guide/how-compatibility)."
          }
        ]
      },
      {
        "title": "Ipinapakita din namin ang hugis ng relasyon",
        "blocks": [
          {
            "p": "Bilang karagdagan sa iskor, inilalarawan namin **ano ang hugis** ng pares ng mga day stem sa resulta ng screen. Kung sila ay katulad na mga posisyon, kung ang isang panig ay sumusuporta sa isa, o kung ang isang panig ay pinipigilan — kung ito ay isang sumusuportang o pinipigilang relasyon, nililinaw namin kung aling panig ang may hawak na posisyon na iyon."
          },
          {
            "p": "Kung isang iskor lamang ang ipinakita, naiwan ang tanong na 'ano ngayon'. Ang hugis ay hindi isang iskor kundi isang bagay na dapat basahin, at kahit ang mga pares na may mababang iskor ay mayroong dapat ipaliwanag."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Ang limang elemento",
    "title": "Suportang Elemento — Ang enerhiya na kailangan ngayon",
    "summary": "Tinitingnan namin ang limang elemento hindi bilang 'pumili ba sila ng dalawa' kundi bilang 'mayroon ba ang kapareha ng kailangan ko'. Ipinapahayag din namin ang hangganan na nagtatangi sa isang malakas na day master mula sa isang mahina.",
    "backLabel": "Batayan ng pagkalkula",
    "sections": [
      {
        "title": "Kung ang limang elemento ay 'balanse' ay hindi isang tanong ng pagkakatugma",
        "blocks": [
          {
            "p": "Mayroong isang paraan ng pagsukat kung ang limang enerhiya ay pantay na ipinamamahagi sa pamamagitan ng pagsasama ng limang elemento ng dalawang tao. Gayunpaman, hindi iyon ang tanong ng pagkakatugma. **Mayroon ba ang kapareha ng kailangan ko?**"
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
            "p": "Ang Suportang Elemento (用神) ay 'ang enerhiya na kailangan ng taong ito sa ngayon'. Mayroong ilang mga paraan upang matukoy ito (pinigilan, sinusuportahan, sakit, at komunikasyon), ngunit maaari itong isalin sa mga patakaran, at ang pinaka-malawak na ginagamit ay **pinigilan (抑扶)**. Kung ang day master ay malakas, nakikita na ang enerhiya na dapat bawasan ay kailangan, at kung mahina, ang enerhiya na dapat idagdag ay kailangan."
          },
          {
            "table": {
              "head": [
                "Paghuhusga",
                "Ano ang kailangan",
                "Ilang"
              ],
              "rows": [
                [
                  "Malakas na day master (身强)",
                  "Nabawasan na enerhiya — 食傷 (sik-sang) · 財星 (jae-seong) · 官星 (gwan-seong)",
                  "Tatlo"
                ],
                [
                  "Mahinang day master (身弱)",
                  "Nagdaragdag ng enerhiya — 印星 (in-seong) · 比劫 (bi-gyeob)",
                  "Dalawa"
                ],
                [
                  "Balanse (中和)",
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
                "Paghuhusga"
              ],
              "rows": [
                [
                  "{strongThreshold} o higit pa",
                  "Malakas na day master"
                ],
                [
                  "{weakThreshold} o higit pa at mas mababa sa {strongThreshold}",
                  "Balanse"
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
        "title": "Ang balanse ay isang 'mas hindi tiyak na paghuhusga'",
        "blocks": [
          {
            "p": "Ang balanse ay nangangahulugang hindi ito maaaring sakupin ng suportang elemento. Sa oras na ito, simpleng tinitingnan namin ang dalawang pinakamahinang enerhiya bilang kinakailangan. Sa resulta ng screen, ito ay itinuturing na 'kasalukuyang nasa isang manipis na posisyon' sa halip na isang tiyak na pahayag."
          }
        ]
      },
      {
        "title": "Ang kapangyarihan ay hindi ang bilang ng mga karakter",
        "blocks": [
          {
            "p": "Kapag binibilang ang kapangyarihan ng limang elemento, hindi lamang namin binibilang ang walong karakter ayon sa kanilang hitsura. Gumagamit kami ng isang halaga na sumasalamin sa nakatagong heavenly stems (地藏干) sa loob ng earthly branches at ang panahon ng enerhiya ng buwan (月令) kung kailan ipinanganak ang isang tao."
          },
          {
            "p": "Kung bibilangin lamang namin ang mga surface character, nawawala ang katotohanan na kahit ang dalawang karakter ng 木 ay maaaring magkaroon ng ganap na magkakaibang lakas depende sa panahon. Ang 木 ng tagsibol at ang 木 ng taglagas, kahit na pareho silang karakter, ay may iba't ibang kapangyarihan."
          }
        ]
      },
      {
        "title": "Pagbibilang ng antas ng pagpuno",
        "blocks": [
          {
            "p": "Tinitingnan namin ang proporsyon ng aking suportang elemento sa kapangyarihan ng kalaban. Gayunpaman, hindi namin direktang ginagamit ang proporsyon na iyon kundi **hinahati ang inaasahan sa laki ng suportang elemento.** Kapag malakas, ang suportang elemento ay tatlo (inaasahan 60%), at kapag mahina, ito ay dalawa (inaasahan 40%), kaya ang direktang paggamit ng proporsyon ay nangangahulugang ang isang malakas na tao ay palaging nakakakuha ng mas mataas na iskor."
          },
          {
            "p": "Kung napuno sa inaasahang antas, isang iskor na malapit sa 78 puntos ang nakukuha, at kung napuno nang higit pa, umaabot ito sa 100 puntos, habang kung ito ay kapansin-pansing kulang, papunta ito sa 55 puntos. Dito, ang ibaba ay hindi rin itinakda sa 0."
          }
        ]
      },
      {
        "title": "Ito ay isang paunang paghuhusga",
        "blocks": [
          {
            "p": "Ang aktwal na pagsusuri ng saju ay isinasaalang-alang ang pormasyon at klima ng panahon (ang init at kahalumigmigan ng panahon) upang matukoy ang suportang elemento, at ang mga konklusyon ay maaaring magbago depende sa ginamit na pamamaraan. Ang Inyeon-Link ay gumagamit lamang ng mga suportang elemento na maaaring masukat sa pamamagitan ng **mga halaga ng kapangyarihan.** Ito ay dahil sa prinsipyo ng paggamit lamang ng maaaring isalin sa mga patakaran, kaya ang parehong input ay laging magbibigay ng parehong sagot."
          },
          {
            "p": "Sa halip, ang resulta ng screen ay nagtatanghal din ng lakas at kahinaan ng bawat tao kasama ang kasalukuyang kinakailangang enerhiya bilang **mga materyal na babasahin**. Ito ay upang maiwasan ang pagtatago ng batayan ng iskor."
          }
        ]
      }
    ]
  },
  "guide/affinity": {
    "eyebrow": "Ang aming mga pamantayan",
    "title": "Inyeon’s Match — Ang dahilan kung bakit hindi nagbibigay ng kabuuang iskor",
    "summary": "Kinuha lamang namin ang datos ng isang tao habang iniiwan ang posisyon ng kalaban na walang laman at pinapalitan ang lahat ng posibleng halaga sa posisyon na iyon. Ipinaliwanag namin ang dahilan kung bakit hindi naglalakip ng kabuuang iskor sa uri na nakuha sa ganitong paraan.",
    "backLabel": "Batayan ng pagkalkula",
    "sections": [
      {
        "title": "Ang mga kalkulasyon ay ginagawa habang iniiwan ang posisyon ng kalaban na walang laman",
        "blocks": [
          {
            "p": "Ang mga iskor ng pagkakatugma ay kinakalkula sa pamamagitan ng pagtutugma ng dalawang tao. **Inyeon’s Match** ay kumukuha lamang ng datos ng isang tao habang iniiwan ang posisyon ng kalaban na walang laman at sinusubukan ang lahat ng posibleng halaga na maaaring pumasok sa posisyon na iyon. Para itong pagpapatakbo ng makina ng pagkakatugma sa kabaligtaran."
          },
          {
            "p": "Kaya, hindi kinakailangan na malaman ang petsa ng kapanganakan ng kalaban. Maaari pa rin nating sabihin, 'Anong uri ng match profile ang angkop para sa akin?' tungkol sa isang tao na hindi pa natin nakilala."
          }
        ]
      },
      {
        "title": "Hindi kami nagpatakbo ng milyon-milyong kumbinasyon",
        "blocks": [
          {
            "p": "Ang iskor ng pagkakatugma sa saju ay binubuo ng apat na item, at **bawat item ay hindi nag-ooverlap sa kung ano ang sinusuri.**"
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
                  "Pagsasakto ng limang elemento",
                  "Ang aking supporting element at ang kapangyarihan ng limang elemento ng kalaban",
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
            "p": "Dahil ang mga halaga ay hindi nagbabahagi sa pagitan ng mga item, **ang paghahanap ng pinakamataas na punto para sa bawat branch ay magiging kabuuang pinakamataas na punto.** Walang kinakailangang suriin ang lahat ng kumbinasyon ng mga petsa ng kapanganakan — sapat na ang pagtatakda ng sampung heavenly stems, labindalawang earthly branches, at limang elemento."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang parehong mga patakaran ay nalalapat",
        "blocks": [
          {
            "p": "Ang mga iskor na nakasulat dito ay direktang kinuha mula sa makina ng pagkakatugma. Dahil walang bagong mga patakaran na nilikha, ang uri na lumalabas sa itaas dito ay magkakaroon din ng pinakamataas na iskor para sa item na iyon sa aktwal na pagkakatugma. Kung ang mga patakaran ng pagkakatugma ay binago, ang screen na ito ay susunod."
          }
        ]
      },
      {
        "title": "Walang kabuuang iskor na ibinibigay",
        "blocks": [
          {
            "p": "Ito ang pinakamahalagang desisyon sa screen na ito. Ang pagkolekta ng mga pinakamataas na iskor para sa bawat branch ay maaaring mukhang nagbubunga ng 'perpektong tugma', ngunit ang taong iyon ay **maaaring hindi talaga umiiral.**"
          },
          {
            "p": "Sa mga totoong tao, ang day master at ang limang elemento ay hindi gumagana nang hiwalay. Ang isang tao na may 甲木 ay karaniwang may malakas na 木 na enerhiya din. Ang pamamaraang ito ng pagbilang ng mga branch nang hiwalay ay hindi isinasaalang-alang ang ugnayang iyon, kaya ang halaga na nakuha sa pamamagitan ng pagkonekta sa mga pinakamataas na iskor para sa bawat branch ay nagiging kumbinasyon na hindi umiiral sa realidad."
          },
          {
            "p": "Samakatuwid, ang screen ay nagpapakita lamang ng **item scores** at hindi nagbibigay ng kabuuang iskor. Ang kabuuang iskor ay kakalkulahin sa pamamagitan ng pagtanggap ng petsa ng kapanganakan ng ibang tao para sa [saju compatibility](/compatibility)."
          }
        ]
      },
      {
        "title": "Paano basahin ang 'mga uri ng pagtutugma'",
        "blocks": [
          {
            "p": "Ang resulta ay nangangahulugang 'kung makikita mo ang isang tao ng ganitong uri, ang item na ito ay magkakaroon ng mataas na iskor'. Hindi ito isang pamantayan para sa pagpili ng tao, kundi isang paraan upang basahin ito mula sa isang pananaw ng pag-unawa sa sarili."
          },
          {
            "p": "Ang mga dahilan kung bakit ang ilang uri ay nakakuha ng mataas na iskor ay nakatala rin item sa item — kung ang day master ay nasa paborableng posisyon, o kung ang taong iyon ay mayroong enerhiya na kasalukuyan kong kailangan."
          }
        ]
      },
      {
        "title": "Kagamitan sa pagkumpirma",
        "blocks": [
          {
            "p": "Maaaring ikaw ay nagtataka kung ang taong nasa isip mo ay tumutugma sa uri na iyon. Sa pamamagitan ng pagpasok ng kanilang petsa ng kapanganakan sa kagamitang pagkumpirma sa screen ng mga resulta, ikaw ay bibigyan ng impormasyon tungkol sa kanilang day master, day branch, at year branch. Ang mga input na halaga ay hindi naka-save sa oras na ito [(hindi naka-save)](/guide/no-storage)."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Oras",
    "title": "I-convert ang oras ng kapanganakan sa tunay na solar time",
    "summary": "Ang pamantayang oras at ang aktwal na posisyon ng araw ay magkaiba. Ang oras ay dapat ituwid batay sa longitude ng lugar ng kapanganakan upang matugunan kung bakit ang time pillar ay tumpak.",
    "backLabel": "Batayan ng pagkalkula",
    "sections": [
      {
        "title": "Ang oras sa relo at ang oras ng araw ay magkaiba",
        "blocks": [
          {
            "p": "Ang time pillar (時柱) ng saju ay tinutukoy ng posisyon ng araw. Gayunpaman, ang relo na nakikita natin ay gumagamit ng isang pamantayang oras para sa buong bansa, na nagiging sanhi ng hindi pagkakatugma sa aktwal na posisyon ng araw."
          },
          {
            "p": "Ang pamantayang oras ng Korea ay batay sa 135° silangang longitude. Dahil ang longitude ng Seoul ay humigit-kumulang 127°, ito ay humigit-kumulang 8° sa kanluran, na nagiging sanhi ng araw na umabot sa tuktok nito nang mas huli — kapag tanghali na sa relo, ang araw sa Seoul ay hindi pa umabot sa tuktok nito. Ang pagkakaibang ito ay humigit-kumulang **32 minuto**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang 32 minuto ay nagbabago ng time pillar ng isang slot",
        "blocks": [
          {
            "p": "Ang oras sa saju ay nahahati sa mga yunit ng dalawang oras. Ang mga ipinanganak malapit sa hangganan ay magkakaroon ng kanilang time pillar na ganap na nagbago dahil sa 32 minutong pagkakaiba — ang pagwawasto na ito ay kinakailangan para sa mga nahuhulog nang eksakto sa hangganang ito."
          }
        ]
      },
      {
        "title": "Bakit kami humihingi ng lugar ng kapanganakan",
        "blocks": [
          {
            "p": "Kung ang longitude ay magkaiba, ang halaga ng pagwawasto ay mag-iiba rin. Ang paglalapat ng pagwawasto batay sa Seoul sa isang ipinanganak sa ibang bansa ay magreresulta sa isang makabuluhang hindi pagkakatugma sa time pillar. Samakatuwid, ang input screen ay nangangailangan sa iyo na pumili ng iyong lugar ng kapanganakan, at ang pagkalkula ay batay sa longitude at pamantayang oras ng lungsod na iyon. Sa kasalukuyan, mayroong {cityCount} na mga lugar sa listahan."
          },
          {
            "p": "Sa mga lugar kung saan ang longitude ay nag-iiba nang malaki kahit sa loob ng parehong bansa (tulad ng USA, Russia, Indonesia, atbp.), ang mga lungsod ay nahati. **15° ng longitude ay katumbas ng isang time pillar slot**."
          },
          {
            "p": "Kung hindi ka pumili, ang pagkalkula ay batay sa Seoul. Dahil ang karamihan ng mga kapanganakan ay domestiko, binabawasan nito ang pagkakataon ng pagkakamali, ngunit kung ikaw ay ipinanganak sa ibang bansa, mangyaring siguraduhing pumili."
          }
        ]
      },
      {
        "title": "Ang pamantayang oras ay nagbago ng ilang beses sa nakaraan",
        "blocks": [
          {
            "p": "May dahilan kung bakit ang pagwawasto ay hindi maaaring kalkulahin nang simple bilang 'pagkakaiba ng longitude ÷ 15° × 60 minuto'. Ang pamantayang oras mismo ay nagbago sa iba't ibang panahon."
          },
          {
            "table": {
              "caption": "Mga pagbabago sa pamantayang oras ng Korea — ang mga ipinanganak sa panahong ito ay magkakaroon ng mga pagkakaiba sa simpleng kalkulasyon",
              "head": [
                "Panahon",
                "Ano ang naiiba"
              ],
              "rows": [
                [
                  "Bago ang 1912",
                  "Walang pamantayang oras (lokal na mean time)"
                ],
                [
                  "1954 – 1961",
                  "Ang pamantayang oras ay UTC+8:30"
                ],
                [
                  "1948 – 51 · 1955 – 60 · 1987 – 88",
                  "Naipatupad ang daylight saving time"
                ]
              ]
            }
          },
          {
            "p": "Ang Inyeon-Link ay hindi gumagamit ng nakatakdang halaga para sa pamantayang meridian, kundi kinakalkula ang pamantayang oras na talagang ginamit sa panahong iyon batay sa impormasyon ng **IANA time zone** ng lugar ng kapanganakan. Ang daylight saving time at mga nakaraang pamantayang oras ay awtomatikong naisasalamin."
          }
        ]
      },
      {
        "title": "Ang mga ipinanganak kaagad pagkatapos ng hatingabi ay isinasaalang-alang din ang petsa",
        "blocks": [
          {
            "p": "Dahil ang pagwawasto ay -32 minuto, ang mga ipinanganak sa pagitan ng 00:00 at 00:32 ayon sa orasan ay magiging **23:00 ng nakaraang araw** sa tunay na solar time. Kung ang oras lamang ang ibabalik at ang petsa ay hindi nababago, isusulat nito ang day pillar bilang '23:00 ng nakaraang araw'."
          },
          {
            "p": "Ang Inyeon-Link ay ibabalik din ang petsa sa kasong ito. Ang day pillar ay nagpapahiwatig ng tao mismo sa saju, kaya kung ito ay mali, halos lahat ng mga item sa pagkakatugma ay magiging mali."
          }
        ]
      },
      {
        "title": "Hindi mo kailangang malaman ang oras",
        "blocks": [
          {
            "p": "Ang oras ng kapanganakan ay opsyonal. Kung hindi mo ito alam, ang kalkulasyon ay gagawin nang walang day pillar, at ang katotohanang ito ay ipapakita sa screen ng mga resulta. Walang mga item sa pagkakatugma na nangangailangan ng day pillar na isulat nang direkta, ngunit ito ay nakakaapekto sa mga five elements, kaya kung alam mo ito, mas tumpak na isama ito."
          },
          {
            "p": "Ang pagkakatugma ng zodiac ay palaging pareho ang halaga anuman ang oras — [dahil ito ay tinitingnan lamang ang year branch](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Personal na Impormasyon",
    "title": "Paraan ng hindi pag-iimbak ng ipinasok na impormasyon",
    "summary": "Ito ay nagpapaliwanag kung ano ang teknikal na kahulugan na ang iyong petsa ng kapanganakan ay hindi naitala kahit saan at kung ano ang kasama sa link ng resulta.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Walang kinakailangang pagiging miyembro",
        "blocks": [
          {
            "p": "Ang Inyeon-Link ay hindi lumilikha ng mga account. Hindi ito nangongolekta ng mga pangalan, email, o numero ng telepono. Ang tanging impormasyong kinokolekta ay ang petsa ng kapanganakan at (opsyonal) ang oras ng kapanganakan, lugar ng kapanganakan, at kasarian, at kahit iyon ay hindi mananatili pagkatapos makumpleto ang kalkulasyon."
          },
          {
            "p": "Mayroong isang larangan upang ipasok ang isang pamagat na ipapakita sa screen ng mga resulta, ngunit iyon ay **para lamang sa layunin ng pagpapakita** at hindi ginagamit sa kalkulasyon. Hindi mo kailangang ipasok ang iyong totoong pangalan."
          }
        ]
      },
      {
        "title": "Ano ang kasama sa link ng resulta?",
        "blocks": [
          {
            "p": "Kapag nakumpleto na ang kalkulasyon, ang address ay mukhang ganito."
          },
          {
            "p": "**/ko/compatibility/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Ang sumusunod na **#** ay ang mga input values. Ang bahaging ito ay tinatawag na **fragment**, na isang **seksyon na hindi ipinapadala ng browser sa server**. Ito ay pamantayang pag-uugali ng web at hindi isang patakaran na nilikha namin — ito ay orihinal na dinisenyo upang ipahiwatig ang isang lokasyon sa loob ng isang dokumento, kaya walang pangangailangan ang server na makita ito."
          },
          {
            "p": "Sa ibang salita, kapag binuksan mo ang link ng resulta, binabasa ng browser ang halagang iyon upang humiling ng kalkulasyon, at ang aming server ay tumatanggap ng mga halagang kinakailangan para sa kalkulasyon, ibinabalik ang sagot, at pagkatapos ay nakakalimutan ito."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mangyaring mag-ingat kapag nagpapadala ng mga link sa iba",
        "blocks": [
          {
            "p": "Ang katotohanan na hindi ito nakaimbak sa server at ang link ay ligtas ay hindi pareho. Ang link ng resulta ay naglalaman ng parehong mga petsa ng iyong kapanganakan, kaya ang taong tumanggap ng link na iyon ay makikita ang parehong resulta."
          }
        ]
      },
      {
        "title": "Bakit ang kalkulasyon ay ginagawa sa server ngunit hindi nakaimbak?",
        "blocks": [
          {
            "p": "Ang kalkulasyon mismo ay ginagawa sa server. Ang Korean lunisolar almanac ay kinakailangan upang bumuo ng saju, at ang talahanayang iyon ay masyadong malaki upang maipadala sa browser. Gayunpaman, **pagkatapos iproseso ang kahilingan, ang halagang iyon ay hindi ginagamit kahit saan.** Walang code upang iimbak ito sa isang database."
          },
          {
            "p": "Isang minimal na tala na kinakailangan para sa operasyon ang pinananatili — isang counter upang maiwasan ang parehong tao na magpadala ng labis na mga kahilingan sa maikling panahon. Ito ay hindi kasama ang petsa ng kapanganakan, at ang access IP ay hindi rin pinananatili. Isang halaga lamang, hashed kasama ang petsa, ang binibilang, at ang halagang iyon ay nagbabago kapag nagbago ang araw."
          }
        ]
      },
      {
        "title": "Mga bagay na hindi magagawa dahil hindi nakaimbak ang impormasyon",
        "blocks": [
          {
            "p": "Sa totoo lang, may mga bagay na isinuko namin dahil hindi kami nag-iimbak ng impormasyon."
          },
          {
            "ul": [
              "**Hindi mo maibabalik ang mga nakaraang resulta.** Kailangan mong magkaroon ng link upang muling makita ang mga ito.",
              "**Ang parehong mga halaga ay muling kakalkulahin.** Walang cache. Gayunpaman, dahil ang lahat ng mga patakaran ay deterministic, [ang parehong input ay palaging magbibigay ng parehong halaga](/guide/how-compatibility).",
              "**Ang pag-refresh ay magbabalik ng ad gate.** Ito ay dahil walang lugar upang panatilihin ang mga tala ng pagtingin."
            ]
          }
        ]
      },
      {
        "title": "Sa kaso ng pagbili",
        "blocks": [
          {
            "p": "Kung bumili ka ng ulat, isang tala ng transaksyon ang itatago sa oras na iyon. Itinatakda ng batas ang isang panahon ng pagpapanatili para sa mga pagbabayad, at walang kasaysayan ng order, hindi maiproseso ang mga refund. Gayunpaman, kahit na sa mga pagkakataong iyon, **ang petsa ng kapanganakan na ginamit para sa mga kalkulasyon ng pagkakatugma ay hindi nakakabit sa order** — ito ay kinokolekta muli kapag nilikha ang PDF pagkatapos ng kumpirmasyon ng pagbabayad."
          },
          {
            "p": "Ang mga detalye ay nakasaad sa [Patakaran sa Privacy](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Bayad na Mga Produkto",
    "title": "Ano ang kasama sa bayad na ulat?",
    "summary": "Ito ay nagpapaliwanag kung ano ang idinagdag sa PDF habang pinapanatili ang screen na hindi nagbabago, item sa bawat item. Ang mga halaga at nilalaman ay binabasa mula sa aktwal na mga setting ng produkto.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang screen ay nananatiling hindi nagbabago, tanging idinagdag sa PDF",
        "blocks": [
          {
            "p": "Ang mga kalkulasyon ng pagkakatugma at mga pagtatanong sa resulta ay **libre**. Ang mga rate ng pagtutugma, mga marka at timbang ng item, ang mga orihinal na chart ng saju ng parehong indibidwal, at ang hugis ng relasyon ay lahat ay maaaring makita sa screen. Walang tinanggal mula sa screen habang nilikha ang bayad na ulat."
          },
          {
            "p": "Ang layunin ng ulat ay **magdagdag ng mga layer na wala sa screen**. At ang layer na iyon ay hindi gawa-gawa; ito ay binubuo ng mga halagang naunang kinakalkula sa panahon ng proseso ng pagmamarka ngunit hindi ginamit sa screen."
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
            "p": "**Ang mga pahina 1-3 ay inayos upang panatilihin ang nasa screen** at **mula pahina 4 pataas ay nilalaman na hindi nasa screen**. Sa ibaba, ipinaliwanag kung bakit ang ilang bagay ay hindi ipinakita sa screen."
          }
        ]
      },
      {
        "title": "Pahina 4 — Ang direksyon ng dalawang enerhiya",
        "blocks": [
          {
            "p": "Ang mga item ng mga five elements sa screen ay ipinakita bilang isang solong iskor. Gayunpaman, ang solong iskor na iyon ay ang **average ng dalawang direksyon** — sinusukat kung gaano karaming ang iba ang pumupuno sa akin at kung gaano karaming ang pinupuno ko ang iba, at pinagsasama ang mga halagang iyon."
          },
          {
            "p": "Ang pagkakomplementaryo ay likas na **asymmetric**. Ito ay dahil ang mga enerhiya na kailangan ko at ang mga enerhiya na kailangan ng iba ay magkaiba. Kung titingnan mo lamang ang average, ang isang relasyon kung saan ang isang panig ay malaki ang pumupuno sa iba at isang relasyon kung saan pareho silang pumupuno sa isa't isa ng pantay ay lilitaw na parehong numero. Ang ulat ay naghihiwalay sa mga iyon."
          },
          {
            "p": "Kasama rin sa parehong seksyon ang **chart ng relasyon ng apat na haligi**. Ang tanging pumapasok sa rate ng pagtutugma ay ang day branch (日支) — dahil ito ang posisyon ng asawa — ngunit ang iba pang year, month, at hour branches ay maaari ring basahin gamit ang parehong chart ng relasyon."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang mga iskor sa talahanayang ito ay hindi pumapasok sa rate ng pagtutugma",
        "blocks": [
          {
            "p": "Kung isasama, ang kabuuang iskor ay magbabago at hindi ito tutugma sa naipadalang resulta na link. Samakatuwid, ito ay kasama lamang bilang materyal na pagbabasa, at ang katotohanang iyon ay nakasaad sa ibaba ng talahanayan."
          }
        ]
      },
      {
        "title": "Pahina 5 — Isang mas malapit na pagtingin sa saju ng bawat tao",
        "blocks": [
          {
            "p": ""
          },
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": ""
          },
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": "Nagsasaad ito kung gaano kalaki ang na-adjust na oras ng kapanganakan sa tunay na oras ng araw (true solar time), kung nagdulot ba ang pagwawasto ng pagbabago sa petsa, at kung ano ang mga petsa ng araw at buwan nang nabuo ang saju. Ang konsepto ay ipinaliwanag sa dokumento na [Pag-aayos ng oras ng kapanganakan sa tunay na oras ng araw](/guide/true-solar-time), ngunit **ang halaga ng kung ilang minuto ang na-adjust sa iyong kaso** ay nag-iiba mula sa tao sa tao, kaya ito ay kasama lamang sa ulat."
          }
        ]
      },
      {
        "title": "Inyeon match-profile report PDF — {priceAffinityDomestic}",
        "slot": "",
        "blocks": [
          {
            "p": "Pambansang bayad {priceAffinityDomestic} (kasama ang VAT), internasyonal na bayad {priceAffinityGlobal}. A4 {pagesAffinity} mga pahina."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": ""
          }
        ]
      },
      {
        "title": "",
        "blocks": [
          {
            "p": ""
          },
          {
            "p": ""
          }
        ]
      },
      {
        "kind": "note",
        "title": "",
        "blocks": [
          {
            "p": ""
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
            "p": "Mangyaring ipadala ang mga katanungan sa **{email}**. Kami ay tutugon sa loob ng 2 araw ng negosyo. Para sa mga katanungan tungkol sa pagbabayad at refund, mangyaring isama ang **ang order number o ang email na ginamit para sa pagbabayad** para sa mas mabilis na kumpirmasyon."
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
              "**Pagbabayad at Refund** — Kung ang dokumento ay hindi nabuo o ang halaga ng pagbabayad ay naiiba mula sa order, isang buong refund ang ibibigay. Ang mga kondisyon ay nasa [refund policy](/refund-policy).",
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
              "**Address** — {address}",
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
            "p": "Hindi mo kailangang isama ang iyong petsa at oras ng kapanganakan sa email ng pagtatanong. Hindi namin sine-save ang mga input, kaya hindi namin ito maibabalik, at sapat na ang numero ng order para sa kumpirmasyon. Mangyaring isama lamang ito kung kinakailangan para sa ulat ng pagkakamali sa pagkalkula."
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
  "intro": "Ang mga pagbabago sa iyong mga tuntunin ng paggamit — mga presyo, patakaran — ay nakalista dito bago sila magkabisa. Ang mga panloob na pagpapabuti ay hindi nakalista: ang nakikita dito ay ang kailangan mong malaman.",
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
        "Ang mga tanong, refund, mga kahilingan sa privacy at mga ulat ng mga pagkakamali sa kalkulasyon ay may isang lugar na mapupuntahan — tingnan ang pahina ng contact sa footer.",
        "Kung may mukhang maling kalkulasyon, mangyaring isama ang mga detalye ng kapanganakan na nagbigay nito. Hindi namin iniimbak ang iyong ipinasok, kaya kung wala ang mga ito, hindi namin maulit ang pagbasa."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Ang mga ulat ay inilabas sa Ingles para sa Arabic at Khmer",
      "body": [
        "Kung nagbabasa ka sa Arabic o Khmer, ang PDF na ulat na binili mo ay ginawa sa Ingles. Ang tool na nag-aayos ng aming mga dokumento ay hindi pa makapag-set ng mga talata sa mga script na iyon.",
        "Ang screen ay nananatili sa iyong wika, at ang iyong pangalan ay naka-print sa iyong sariling script sa loob ng ulat.",
        "Ang parehong tala ay lilitaw bago ang pagbabayad. Kapag sinusuportahan ng tool ang mga script na ito, sasabihin namin dito."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Bawat pagbasa ay may kasamang bersyon ng mga patakaran na ginamit",
      "body": [
        "Bawat pagbasa at ulat ay may kasamang set ng mga patakaran na ginamit upang makuha ito (halimbawa inyeonlink-match-v10). Ang parehong input sa parehong set ng patakaran ay palaging nagbibigay ng parehong mga numero.",
        "Kung babaguhin namin ang mga patakaran ng interpretasyon sa paraang makakapagbago ng iskor, ilalathala namin ito dito muna, kasama ang petsa kung kailan ito magkakabisa — dahil ang isang resulta na link na hawak mo na ay magbabasa nang iba.",
        "Ang kasalukuyang set ng patakaran ay v10. Ang mga pagbabayad ay hindi pa bukas."
      ]
    }
  }
} satisfies NoticeCopy;
