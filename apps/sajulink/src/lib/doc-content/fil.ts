import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Panimula",
    "title": "Panimula ng Saju-Link",
    "summary": "Ito ay isang serbisyo na nagtataguyod ng saju (four-pillars reading) batay sa iyong petsa at oras ng kapanganakan at ipinaliwanag kung ano ang kahulugan ng walong karakter. Nililinaw nito kung ano ang kinakalkula at kung ano ang hindi.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "title": "Ano ang ginagawa namin?",
        "blocks": [
          {
            "p": "Itinataguyod ng Saju-Link ang **saju (four-pillars) chart batay sa iyong petsa at oras ng kapanganakan at ipinapakita kung ano ang kahulugan ng walong karakter**. Binabasa nito ang lakas ng mga five elements at ang lakas ng day pillar, at sinisiyasat din ang kapalaran ng araw batay sa day stem."
          },
          {
            "p": "Ang nakikita mo sa screen ay **libre at hindi nangangailangan ng membership.** Ang bayad na produkto ay isang PDF na dokumento na naglalaman ng mga halaga na hindi ipinapakita sa screen — ang batayan para sa pagkakaiba sa pagitan ng isang malakas na day pillar at isang mahina na day pillar, Wang Sang Hyu Su Sa, at ang mga detalye ng pagwawasto para sa true solar time."
          }
        ]
      },
      {
        "title": "Ano ang kinakalkula namin?",
        "blocks": [
          {
            "p": "Itinataguyod ang saju gamit ang **manseyeok (Korean lunisolar almanac)**. Ang oras ng kapanganakan ay itinatama sa **true solar time** ng lugar ng kapanganakan — dahil ang aktwal na posisyon ng araw ay nag-iiba ayon sa rehiyon kahit na ang orasan ay nagpapakita ng parehong oras."
          },
          {
            "p": "Ang mga puntos ay ibinibigay lamang ayon sa mga itinatag na alituntunin. Ang mga konsepto mula sa tradisyunal na myeongri (Korean fate study) tulad ng Ten Gods, relasyon ng earthly branches, at pagbalanse ng mga elemento ay isinasalin sa mga alituntunin para sa pagkalkula, at **ang parehong input ay palaging magbibigay ng parehong halaga**. Kapag ang mga alituntunin ay binago, isinasagawa ang regression testing upang matiyak na ang mga nakaraang resulta ay nananatiling hindi nagbabago."
          },
          {
            "p": "**Hindi ginagamit ang AI sa mga pangungusap sa screen.** Ang mga paliwanag na lumalabas sa libreng screen ay mga nakatakdang parirala na nakakabit sa mga resulta ng pagkalkula. **Tanging ang mga interpretasyon sa mga bayad na ulat** ang gumagamit ng generative AI, at kahit na, ang AI ay hindi lumilikha ng mga puntos — ito ay sumusulat lamang ng mga pangungusap batay sa mga halagang ibinigay ng engine."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin sinasabi?",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagbibigay ng panghuhula.** Hindi kami nagsusulat na dapat mong makilala o iwasan ang sinuman. Ito ay isang materyal na sanggunian na nagbubuod ng mga pananaw ng tradisyunal na myeongri.",
              "**Hindi kami nag-iimbak ng mga input.** Ang petsa at oras ng kapanganakan ay ginagamit lamang sa sandali ng pagkalkula at hindi itinatago sa server. Ang link ng resulta ay nakaimbak din sa isang lokasyon na hindi ipinapadala ng browser sa server.",
              "**Ang mga puntos ay hindi itinuturing na mga halaga ng tao.** Dahil lamang sa mababa ang kapalaran ng araw na ito ay hindi nangangahulugang dapat mong isuko ang araw na iyon."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang mga detalyadong pamamaraan ng pagkalkula ay nakasulat sa [User Guide](/guide). Ang impormasyon sa negosyo at mga detalye ng contact ay matatagpuan sa [Contact Us](/contact)."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Batayan ng Pagkalkula",
    "title": "Ano ang batayan para sa mga pagkalkula?",
    "summary": "Ipinapahayag namin ang lahat ng mga alituntunin na ginamit ng Saju-Link. Maaari mong suriin kung saan nagmula ang mga numerong ipinapakita sa screen, kasama ang mga pagsasaayos para sa kapalaran ng araw, ang mga puntos mula sa talahanayan ng relasyon ng earthly branches, at ang mga hangganan na nagtatangi sa pagitan ng isang malakas na day pillar at isang mahina na day pillar.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang mga halagang nakasulat dito ay lahat **direktang binasa mula sa code ng pagkalkula**. Dahil hindi sila manu-manong isinulat sa teksto, kung ang mga alituntunin ay binago, ang mga numero sa dokumentong ito ay magbabago rin nang naaayon."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "natal chart — Saan nagmumula ang walong karakter?",
    "summary": "Ipinaliwanag nito kung paano nagiging apat na haligi at walong karakter ang taon, buwan, araw, at oras ng kapanganakan, at tinutukoy kung aling karakter ang tumutukoy sa iyo. Tinalakay din nito kung bakit maaari itong tingnan kahit na hindi alam ang eksaktong oras ng kapanganakan.",
    "backLabel": "Batayan ng Pagkalkula",
    "sections": [
      {
        "title": "Apat na Haligi, Walong Karakter",
        "blocks": [
          {
            "p": "Ang Saju (四柱) ay literal na nangangahulugang **apat na haligi**. Bawat isa sa taon, buwan, araw, at oras ng kapanganakan ay itinatag bilang isang haligi, at dalawang karakter ang nakasulat para sa bawat haligi. Sa gayon, may kabuuang walong karakter, na tinatawag na **natal chart**."
          },
          {
            "table": {
              "head": [
                "Haligi",
                "Ano ang pinagmulan nito?",
                "Dalawang Karakter"
              ],
              "rows": [
                [
                  "Year Pillar (年柱)",
                  "Taon ng kapanganakan",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Month Pillar (月柱)",
                  "Buwan ng kapanganakan",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Day Pillar (日柱)",
                  "Araw ng kapanganakan",
                  "Heavenly Stem + Earthly Branch"
                ],
                [
                  "Time Pillar (時柱)",
                  "Oras ng kapanganakan",
                  "Heavenly Stem + Earthly Branch"
                ]
              ]
            }
          },
          {
            "p": "Ang mga itaas na karakter ay tinatawag na heavenly stems (天干), at ang mga ibabang karakter ay tinatawag na earthly branches (地支). Mayroong sampung heavenly stems at labindalawang earthly branches. Ang labindalawang earthly branches ay karaniwang tinatawag na **zodiac signs**."
          }
        ]
      },
      {
        "title": "Sa kanila, isang karakter ang tumutukoy sa akin.",
        "blocks": [
          {
            "p": "Hindi lahat ng walong karakter ay may parehong timbang. Ang **heavenly stem ng araw ng kapanganakan**, partikular ang itaas na karakter ng day pillar, ay tumutukoy sa **akin**. Ito ay tinatawag na **day stem (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Ang Saju ay binubuo ng walong karakter na itinatag gamit ang dalawang karakter para sa taon, buwan, araw, at oras ng kapanganakan, na kinakatawan ng mga heavenly stems at earthly branches. Dito, ang nangingibabaw na day stem (日干) ay ang karakter na tumutukoy sa akin.",
            "labels": {
              "year": "Year Pillar",
              "yearNote": "Root · Zodiac Sign",
              "month": "Month Pillar",
              "monthNote": "Season · Strength",
              "day": "Pillar ng Araw",
              "dayNote": "Sarili · Palasyo ng Asawa",
              "hour": "Pillar ng Oras",
              "hourNote": "Huling mga Taon · Paggamit",
              "stem": "Heavenly Stem",
              "stemNote": "Day Stem = Sarili",
              "branch": "Earthly Branch",
              "branchNote": "Day Branch = Palasyo ng Asawa"
            }
          },
          {
            "p": "Ang ipinapakita ng serbisyong ito ay pangunahing nagmula sa isang karakter na ito — ang interpretasyon ng mga tendensya, ang lakas ng mga five elements, ang enerhiyang kasalukuyang kailangan, at ang **ngayon ng kapalaran** ay lahat sinusukat batay sa Day Stem. Ang natitirang pitong karakter ay nagpapakita ng 'anong kapaligiran ang kinalalagyan ng Day Stem'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bakit ang Araw ng Kapanganakan?",
        "blocks": [
          {
            "p": "Ang Year Stem ay pareho para sa lahat na ipinanganak sa taong iyon, at ang Month Stem ay pareho para sa lahat na ipinanganak sa buwan na iyon. Ang Day Stem ay nagbabago kapag nagbago ang araw, at ang tradisyunal na panghuhula ng kapalaran ay itinuturing ang posisyong ito bilang Sarili mula pa noong Dinastiyang Song. Kung isasama ang Hour Stem, nagiging iba-iba ito kahit sa mga ipinanganak sa parehong araw."
          }
        ]
      },
      {
        "title": "Nahati ayon sa Solar Terms, Hindi Taon ng Kalendaryo",
        "blocks": [
          {
            "p": "Ang isang taon ng saju ay hindi nagbabago sa Enero 1 kundi sa **Ipchun (tinatayang Pebrero 4)**. Ang buwan ay nahahati rin batay sa solar terms."
          },
          {
            "p": "Kaya, ang mga ipinanganak sa **Enero at maagang Pebrero ay tumatanggap ng Year Stem ng nakaraang taon**. Dito nagmumula ang karaniwang hindi pagkakaintindihan tungkol sa mga zodiac signs. Ang parehong naaangkop kung ipinasok mo ang lunar birthday — ito ay kinoconvert pabalik sa solar at pagkatapos ay nahahati ayon sa solar terms."
          }
        ]
      },
      {
        "title": "Maaari Mo Itong Basahin Kahit Hindi Mo Alam ang Oras ng Kapanganakan",
        "blocks": [
          {
            "p": "Kung hindi mo ipinasok ang oras, ang pagbabasa ay batay sa tatlong pillars at anim na karakter, na hindi kasama ang Hour Pillar. Hindi kami nag-aakalang nawawalang mga halaga — ang arbitraryong pagtatalaga ng Hour Pillar ay maaaring makagambala sa lakas ng mga five elements, na nagreresulta sa maling konklusyon sa halip na potensyal na tamang mga ito."
          },
          {
            "p": "Kung alam mo ang oras, mas mabuti na isama ito. Dahil may dalawang karakter na idinadagdag sa walong, ang lakas at pagtatasa ng mga five elements ay maaaring magbago. Gayunpaman, hindi namin ginagamit ang oras ng orasan nang direkta kundi ginagamit ang [True Solar Time](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang paraan ng pagbibilang ng walong karakter bilang mga five elements upang suriin ang lakas ay nagpapatuloy sa [Five Elements Strength and Strong/Weak Day Pillar](/guide/five-elements), habang ang paraan ng pagbabasa ng natitirang mga karakter batay sa Day Stem ay nagpapatuloy sa [Ten Gods](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Five Elements",
    "title": "Lakas ng Five Elements at Strong/Weak Day Pillar",
    "summary": "Bibilangin namin ang walong karakter bilang mga five elements upang makita kung aling enerhiya ang malakas at aling mahina. Ipinapahayag namin ang mga threshold values (45%·35%) na tumutukoy sa lakas ng Day Stem.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Pagbibilang ng Walong Karakter bilang Limang Enerhiya",
        "blocks": [
          {
            "p": "Ang sampung Heavenly Stems at labindalawang Earthly Branches ay bawat isa ay nabibilang sa isa sa mga **Five Elements (五行)** — Kahoy (木), Apoy (火), Lupa (土), Metal (金), Tubig (水). Sa pamamagitan ng pagbibilang ng mga karakter sa natal chart ayon sa kanilang mga elemento, maaari nating matukoy kung aling enerhiya ang malakas at aling mahina."
          },
          {
            "p": "Gayunpaman, hindi lamang namin binibilang ang mga numero. Isinasama rin namin ang **kung ang buwan ng kapanganakan ay sumusuporta sa enerhiyang iyon**. Kahit ang parehong karakter ay maaaring magkaroon ng iba't ibang lakas depende sa kung ito ay nakakatugon sa kanyang panahon. Ito ay tinatawag na Month Sign (月令), at nahahati ito sa limang yugto: Wang (旺), Sang (相), Hyu (休), Su (囚), at Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Saan Nagkakaiba ang Screen at Ulat",
        "blocks": [
          {
            "p": "Ang libreng screen ay nagpapakita lamang ng **lakas pagkatapos ng pagsasalamin sa Month Sign**. Ang mga halaga bago ang Month Sign at ang talahanayan ng Wang, Sang, Hyu, Su, at Sa ay kasama sa bayad na ulat — ito ay ibinibigay upang direktang suriin kung saan nagkaiba ang pagtatasa."
          }
        ]
      },
      {
        "title": "Lakas ng Day Stem — Malakas at Mahina",
        "blocks": [
          {
            "p": "Matapos bilangin ang mga lakas ng mga five elements, sinusuri namin kung ang **Day Stem ay malakas o mahina**. Ang pamantayan ay ang ratio ng mga enerhiyang naka-align sa Day Stem."
          },
          {
            "p": "Ang mga enerhiyang naka-align sa Day Stem ay **Resource at Companion** — ang mga enerhiyang nagbibigay ng buhay sa akin at ang mga katulad ko. Dahil may dalawa sa lima, kung walang bias, ito ay magiging paligid ng {evenAllyRatio}. Itinuturing namin ang lugar sa paligid ng numerong iyon bilang balanse, at binabasa ang nasa itaas at ibaba nito bilang malakas o mahina."
          },
          {
            "table": {
              "head": [
                "Ratio ng Enerhiyang Naka-align sa Day Stem",
                "Pagtatasa",
                "Ano ang Ibig Sabihin Nito?"
              ],
              "rows": [
                [
                  "{strongThreshold} o higit pa",
                  "Malakas na Day Pillar (身强)",
                  "Ang mga enerhiyang sumusuporta sa Day Stem ay sagana."
                ],
                [
                  "{weakThreshold} o higit pa at mas mababa sa {strongThreshold}",
                  "Balanse (中和)",
                  "Mahirap magpasya sa alinmang direksyon."
                ],
                [
                  "Mas mababa sa {weakThreshold}",
                  "Mahinang Day Pillar (身弱)",
                  "Ang mga enerhiyang sumusuporta sa Day Stem ay mahina."
                ]
              ]
            }
          },
          {
            "p": "Ang mga numero sa talahanayang ito ay hindi na-transcribe mula sa teksto kundi **binasa nang direkta mula sa engine**. Kung magbago ang mga patakaran, magbabago rin ang dokumentong ito."
          }
        ]
      },
      {
        "title": "Ang Lakas ay Hindi Mabuti o Masama",
        "blocks": [
          {
            "p": "Ang pagiging malakas ay hindi nangangahulugang mabuti, at ang pagiging mahina ay hindi nangangahulugang masama. Kung malakas, may kapangyarihang itulak pasulong, ngunit madali itong tumagilid sa isang panig; kung mahina, mas madali itong humiram ng lakas mula sa iba, ngunit maaaring mapagod nang madali kapag nag-iisa. **Ang mga kinakailangang enerhiya ay nag-iiba sa alinmang kaso.**"
          },
          {
            "p": "Ang pagtukoy sa 'kinakailangang enerhiya' ay ang balancing element, at nagpapatuloy ito sa [Balancing Element](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Paano itinatag ang walong karakter ay nasa [natal chart](/guide/natal-chart). Paano nakikipag-ugnayan ang Day Pillar ngayon sa lakas na ito ay saklaw sa [ngayon ng kapalaran](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Balancing Element",
    "title": "Balancing Element — Ang Enerhiya na Kailangan Ngayon",
    "summary": "Kung ang Day Stem ay malakas, isasaalang-alang namin ang enerhiyang dapat bawasan; kung mahina, isasaalang-alang namin ang enerhiyang dapat suportahan bilang kinakailangan. Ito ay nagpapaliwanag kung paano pumili ng enerhiyang iyon at kung paano ito hawakan kapag balanse.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Hindi Sapat ang Limang Elemento Lamang",
        "blocks": [
          {
            "p": "May mga paraan upang sukatin kung ang limang elemento ay pantay na ipinamamahagi. Gayunpaman, ang tunay na kailangan ay **kung ano ang kulang at kung ano ang labis sa saju na ito**."
          },
          {
            "p": "Ang isang saju na pantay ang pamamahagi ay hindi palaging komportable, ni ang isang saju na baluktot ay palaging mahirap. Ang direksyon ng baluktot at kung mayroong elemento upang mapagaan ito ay ang sangandaan."
          }
        ]
      },
      {
        "title": "Balanseng Elemento — Bawasan Kung Labis, Magdagdag Kung Kulang",
        "blocks": [
          {
            "p": "Ang balanseng elemento (用神) ay **ang enerhiya na kasalukuyang kailangan ng taong ito**. Mayroong ilang mga pamamaraan upang matukoy ito (pagsugpo at suporta, balanseng pana-panahon, pagkakasakit, pagpapamagitan), at ang isa na maaaring ipahayag bilang mga alituntunin — at pinaka-malawak na ginagamit — ay **pagsugpo at suporta (抑扶)**. Kung ang araw na haligi ay malakas, pinaniniwalaan na kailangan ang isang enerhiya upang bawasan; kung mahina, kinakailangan ang isang enerhiya upang idagdag."
          },
          {
            "table": {
              "head": [
                "Hatol",
                "Ano ang Kailangan",
                "Bilang ng mga Uri"
              ],
              "rows": [
                [
                  "Malakas na Araw na Haligi (身强)",
                  "Enerhiya upang maubos — Output, Yaman at Opisyal",
                  "Tatlo"
                ],
                [
                  "Mahinang Araw na Haligi (身弱)",
                  "Enerhiya upang Idagdag — Yaman, Kasama",
                  "Dalawa"
                ],
                [
                  "Balanseng (中和)",
                  "Hindi maaaring matukoy ng pagsugpo at suporta, kaya ang pinakamahinang mga enerhiya",
                  "Dalawa"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Sukatan para sa Lakas at Kahinaan",
        "blocks": [
          {
            "p": "Ang bahagi ng araw na haligi ay **Yaman at Kasama** — ang enerhiya na nagbibigay-buhay sa akin at ang enerhiya na katulad ko. Dahil dalawa sa lima ang kasangkot, ang kumpletong balanse ay magiging {evenAllyRatio}. Ang lapad ay itinakda sa itaas at ibaba ng {evenAllyRatio}."
          },
          {
            "table": {
              "caption": "Ang Ratio ng mga Kaalyado (Yaman + Kasama) sa Kabuuang Lakas",
              "head": [
                "Ratio",
                "Hatol"
              ],
              "rows": [
                [
                  "{strongThreshold} o higit pa",
                  "Malakas na Araw na Haligi"
                ],
                [
                  "{weakThreshold} o higit pa at mas mababa sa {strongThreshold}",
                  "Balanseng"
                ],
                [
                  "Mas mababa sa {weakThreshold}",
                  "Mahinang Araw na Haligi"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang Balanseng Ay 'Mas Hindi Tiyak na Hatol'",
        "blocks": [
          {
            "p": "Ang balanseng ay nangangahulugang hindi matutukoy ng pagsugpo at suporta. Sa oras na ito, ang dalawang pinakamahinang enerhiya ay simpleng itinuturing na kinakailangan. Sa resulta ng screen, ito ay itinatala bilang 'kasalukuyang mahina ang posisyon' sa halip na isang tiyak na pahayag."
          }
        ]
      },
      {
        "title": "Ang Lakas Ay Hindi Bilang ng mga Character",
        "blocks": [
          {
            "p": "Kapag binibilang ang lakas ng limang elemento, ang walong character ay hindi binibilang ayon sa kanilang hitsura. Ang mga halaga ay sumasalamin sa nakatagong heavenly stems (地藏干) sa loob ng earthly branches at ang panahon ng enerhiya ng buwan (月令) kung kailan ipinanganak."
          },
          {
            "p": "Ang pagbibilang lamang sa mga surface character ay nawawala ang katotohanan na kahit ang parehong 木 characters ay maaaring magkaroon ng ganap na magkakaibang lakas depende sa panahon. Ang 木 ng tagsibol at ang 木 ng taglagas, habang parehong character, ay may iba't ibang lakas."
          }
        ]
      },
      {
        "title": "Saan Gagamitin ang Balanseng Elemento",
        "blocks": [
          {
            "p": "Ang natukoy na balanseng elemento ay ginagamit sa dalawang lugar. Isa ay sa resulta ng screen na **'kasalukuyang kinakailangang enerhiya'**, at ang isa ay [ngayong kapalaran](/guide/today-fortune) — kung ang enerhiya ng araw na ito ay tumutugma sa balanseng elemento ay ang bagay na pinaka-nagpapagalaw ng iskor sa araw na iyon."
          }
        ]
      },
      {
        "title": "Ito Ay Isang Simpleng Hatol",
        "blocks": [
          {
            "p": "Ang aktwal na pagsusuri ng kapalaran ay isinasaalang-alang ang pormasyon at mga kondisyon ng panahon (ang init at kahalumigmigan ng panahon) upang matukoy ang balanseng elemento, at ang mga konklusyon ay maaaring mag-iba depende sa pamamaraan. Ang Saju-Link ay gumagamit lamang ng **pagsugpo na maaaring sukatin sa pamamagitan ng mga halaga ng lakas**. Ito ay dahil sa prinsipyo ng paggamit lamang ng maaaring ma-convert sa mga alituntunin, kaya ang parehong input ay palaging magbibigay ng parehong sagot."
          },
          {
            "p": "Sa halip, ang resulta ng screen ay nagpapakita rin ng malakas at mahina na araw na haligi kasama ang kasalukuyang kinakailangang enerhiya bilang **mga materyales sa pagbabasa**. Ito ay upang maiwasan ang pagtatago ng batayan ng iskor."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Ang Sampung Diyos",
    "title": "Ang Sampung Diyos — Ang Sampung Posisyon Sa Loob ng Aking Saju",
    "summary": "Batay sa araw na haligi, ang natitirang mga character ay hinati sa sampung pangalan. Tinalakay nito ang mga dahilan para sa pagkakaiba sa pagitan ng regular na yaman at panig na yaman, kahit na pareho silang elemento ng yaman.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang Araw na Haligi Ay ang Tao Mismo",
        "blocks": [
          {
            "p": "Sa walong character ng saju, ang **araw na haligi** (ang heavenly stem ng araw ng kapanganakan) ay tumutukoy sa tao mismo. Ang natitirang pitong character ay binabasa bilang kapaligiran kung saan umiiral ang araw na haligi."
          },
          {
            "p": "**Ang Sampung Diyos** (十神) ay ang sampung dibisyon kung paano nakikita ng araw na haligi ang iba pang mga character. Ang enerhiya na nagpapalago sa akin ay Yaman, ang enerhiya na katulad ko ay Kasama, ang enerhiya na ipinanganak ko ay Pagkain at Yaman, ang enerhiya na pumipigil sa akin ay Opisyal na Posisyon, at ang enerhiya na pinipigilan ko ay Yaman — ang limang kategoryang ito ay higit pang hinati sa yin at yang, na bumubuo ng sampu."
          }
        ]
      },
      {
        "title": "Ano ang Ibig Sabihin ng Natitirang Pitong Character para sa Akin",
        "blocks": [
          {
            "p": "Kapag natukoy na ang araw na haligi, ang natitirang mga character sa natal chart ay bawat isa ay tumatanggap ng pangalan. Ang enerhiya na nagbibigay-buhay sa akin, ang enerhiya na katulad ko, ang enerhiya na ipinanganak ko, ang enerhiya na pumipigil sa akin, at ang enerhiya na pinipigilan ko — ang limang sanga na ito ay higit pang hinati sa **sampu** sa pamamagitan ng yin at yang. Ito ang Sampung Diyos."
          },
          {
            "p": "Kaya, ang Sampung Diyos ay hindi tumutukoy sa mga relasyon sa iba kundi sa **mga posisyon sa loob ko**. Aling mga posisyon ang makapal o manipis ay nagpapakita ng aking mga tendensya at ang paraan ng aking pamumuhay."
          }
        ]
      },
      {
        "title": "Bakit natin ito binabasa sa pamamagitan ng Sampung Diyos sa halip na tatlong ugnayang elemento",
        "blocks": [
          {
            "p": "Mayroon ding isang paraan ng pagtingin sa relasyon ng day stem sa pamamagitan lamang ng tatlong aspeto ng mga the five elements (suportado, kapareho, at salungat). Ito ay simple, ngunit **nawawala ang yin at yang.** 甲 (yang wood) at 乙 (yin wood) ay nagiging pareho sa 甲, na isang representasyon ng 'kapareho', at ang salungat na relasyon ay pinagsama-sama sa isang solong marka nang walang direksyon o yin at yang."
          },
          {
            "p": "Ang posisyon ng asawa ay dapat suriin ayon sa the Ten Gods (Ten Gods) sa mga tuntunin ng yin at yang. Kung ang mga bagay na tiningnan sa pamamagitan ng mga the five elements (five elements) ay pinagsama sa mga tiningnan sa pamamagitan ng the Ten Gods (Ten Gods) sa isang makina, magkakaroon ng dalawang pamantayan para sa parehong dalawang karakter. Samakatuwid, pinagsasama-sama natin ito sa ilalim ng the Ten Gods (Ten Gods)."
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa ay Tamang Yaman at Tamang Opisyal",
        "blocks": [
          {
            "p": "Ang tradisyonal na hula ay tinitingnan ang posisyon ng asawa nang iba batay sa kasarian. Para sa mga lalaki, ito ay **Tamang Yaman (正財)**, at para sa mga babae, ito ay **Tamang Opisyal (正官)**. Kahit na sila ay parehong elemento ng yaman, tanging ang Tamang Yaman na hindi naka-align sa yin at yang ang itinuturing na posisyon ng asawa, habang ang Indirect Wealth ay binabasa hindi bilang asawa kundi sa mga tuntunin ng aktibidad at yaman."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kung hindi mo tinukoy ang kasarian, ang posisyon na ito ay hindi isinasama",
        "blocks": [
          {
            "p": "Ito ay dahil hindi matutukoy kung aling panig, Tamang Yaman o Tamang Opisyal, ang isasaalang-alang bilang posisyon ng asawa. Sa halip na hulaan upang punan ang nawawalang halaga, binabasa natin ang natitirang mga bagay nang walang isa."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Ang kapalaran ngayon",
    "title": "Paano lumalabas ang kapalaran ngayon?",
    "summary": "Ang day stem ngayon ay inihahambing sa natal chart upang makakuha ng iskor. Labintatlong suppress-and-support na relasyon at pitong earthly branch na relasyon, kasama ang lahat ng dalawampung item at kanilang mga kaukulang pagdaragdag at pagbabawas, ay ganap na isiniwalat.",
    "backLabel": "Batayan ng pagkalkula",
    "sections": [
      {
        "title": "Ngayon, itinatag din ito sa parehong paraan tulad ng walong karakter",
        "blocks": [
          {
            "p": "Bawat araw ay may sariling **day pillar ng araw (日辰)**. Gamit ang parehong pamamaraan sa pagtatag ng day pillar ng natal chart, ngayon ay mayroon ding isang heavenly stem at isang earthly branch na nakakabit. Ang kapalaran ngayon ay tungkol sa paghahambing ng dalawang karakter na iyon sa natal chart."
          },
          {
            "p": "Ang base score ay **{baseScore} puntos**. Ang mga item sa ibaba ay idinadagdag at ibinabawas, at sa wakas, ito ay nakapaloob sa pagitan ng {clampLow} puntos at {clampHigh} puntos — hindi natin binabanggit ang 0 puntos o 100 puntos."
          }
        ]
      },
      {
        "title": "① Ang enerhiya ngayon ba ay kailangan ko?",
        "blocks": [
          {
            "p": "Ito ang pinakamahalagang posisyon. Sinusuri natin kung ang enerhiya ngayon ay tumutugma sa 'enerhiya na kailangan sa ngayon' na tinutukoy ng [the balancing element](/guide/yongsin)."
          },
          {
            "table": {
              "head": [
                "Ang enerhiya ngayon ay",
                "Pagdaragdag/Pagbabawas"
              ],
              "rows": [
                [
                  "Ang enerhiya na kailangan sa ngayon",
                  "{todayIsYongsin}"
                ],
                [
                  "Ito ay bumubuo ng kinakailangang enerhiya",
                  "{todayGeneratesYongsin}"
                ],
                [
                  "Ito ay pumipigil sa kinakailangang enerhiya",
                  "{todayControlsYongsin}"
                ],
                [
                  "Ito ay nagtutulak pa sa panig na umaapaw na",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Huwag isaalang-alang ang salungat na elemento bilang 'lahat maliban sa balancing element'",
        "blocks": [
          {
            "p": "Kung gagawin mo iyon, parehong ang enerhiya na bumubuo sa balancing element at ang enerhiya na pumipigil sa balancing element ay nagiging masama, at ang huling dalawang hilera sa talahanayan sa itaas ay nagiging hindi matutukoy. Tanging ang enerhiya na **nagtutulak nang mas mahirap sa kabaligtaran na direksyon** ayon sa kahulugan ng suppress-and-support ang nakikita bilang salungat na elemento."
          }
        ]
      },
      {
        "title": "② Ang ugnayan sa pagitan ng heavenly stem ngayon at day stem",
        "blocks": [
          {
            "p": "Ang mga suportado at salungat na relasyon ng mga the five elements (five elements) ay direktang inilalapat sa pagitan ng day stem at heavenly stem ng ngayon."
          },
          {
            "table": {
              "head": [
                "Ugnayan",
                "Pagdaragdag/Pagbabawas"
              ],
              "rows": [
                [
                  "Ngayon ay bumubuo sa akin",
                  "{generatesSelf}"
                ],
                [
                  "Ngayon at ako ay parehong enerhiya",
                  "{sameElement}"
                ],
                [
                  "Ako ay pumipigil sa ngayon",
                  "{selfControls}"
                ],
                [
                  "Ako ay umaagos kasama ng ngayon",
                  "{selfGenerates}"
                ],
                [
                  "Ngayon ay pumipigil sa akin",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ Ang earthly branch ngayon ay nakakatagpo sa earthly branches ng natal chart",
        "blocks": [
          {
            "p": "Ang earthly branch ngayon ay inihahambing sa earthly branches ng natal chart. Ang talahanayan ng relasyon mismo ay nasa [earthly branch relations](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Ugnayan",
                "Pagdaragdag/Pagbabawas"
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
                  "tahimik na alitan (怨嗔)",
                  "{branchWonjin}"
                ],
                [
                  "salpukan (沖)",
                  "{branchChung}"
                ]
              ]
            }
          },
          {
            "p": "Kapag may maraming haligi, maraming relasyon ang lumilitaw. Lahat ay idinadagdag, ngunit ang buong item na ito ay nakapaloob sa **±{branchMaxAbs} puntos** — ito ay upang maiwasan ang isang solong relasyon ng earthly branch na magtakda ng buong araw."
          }
        ]
      },
      {
        "title": "④ Pagwawasto Batay sa Lakas",
        "blocks": [
          {
            "p": "Kahit na pareho ang enerhiya, magkaiba ang kahulugan para sa isang malakas na haligi ng araw at isang mahina na haligi ng araw. Samakatuwid, ginagawa namin ang isang huling pagsasaayos."
          },
          {
            "table": {
              "head": [
                "Sitwasyon",
                "Pagsasaayos"
              ],
              "rows": [
                [
                  "Mahinang haligi ng araw ngunit sinusuportahan sila ngayon",
                  "{weakTodayHelps}"
                ],
                [
                  "Malakas na haligi ng araw ngunit ang araw na ito ay angkop na nagpapababa ng pasanin",
                  "{strongTodayDrains}"
                ],
                [
                  "Malakas na haligi ng araw ngunit pinatibay ng araw na ito ang suporta",
                  "{strongTodayHelps}"
                ],
                [
                  "Mahinang haligi ng araw ngunit nagdaragdag ang araw na ito sa pasanin",
                  "{weakTodayBurdens}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga Iskor ayon sa Bait at Lugar",
        "blocks": [
          {
            "p": "Ang kabuuang iskor ay hinati sa limang bait."
          },
          {
            "table": {
              "head": [
                "Iskor",
                "Bait"
              ],
              "rows": [
                [
                  "{gradeDaegilMin} puntos o higit pa",
                  "Malaking Suwerte (大吉)"
                ],
                [
                  "{gradeGilMin} puntos o higit pa",
                  "Suwerte (吉)"
                ],
                [
                  "{gradePyeongMin} puntos o higit pa",
                  "Karaniwan (平)"
                ],
                [
                  "{gradeJuuiMin} puntos o higit pa",
                  "Pag-iingat (注意)"
                ],
                [
                  "{gradeJosimMin} puntos o higit pa",
                  "Mag-ingat (操心)"
                ]
              ]
            }
          },
          {
            "p": "Ang apat na lugar ng kayamanan, pag-ibig, karera, at kalusugan ay nagmamana ng {overallShare} ng kabuuang iskor, habang ang natitira ay hinahati ayon sa Sampung Diyos at mga relasyon ng earthly branch na may kaugnayan sa mga lugar na iyon. Samakatuwid, kahit na pareho ang kabuuang iskor, ang mga numero ayon sa lugar ay nag-iiba mula sa tao hanggang tao."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang mga numerong nasa itaas ay lahat nabasa mula sa mga setting ng makina. Kung ang mga patakaran ay binago, ang dokumentong ito ay magbabago rin, at anumang pagbabago sa paglipat ng iskor ay unang ipopost sa [Pabatid](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Talaan ng Relasyon",
    "title": "Mga Relasyon ng Earthly Branch — Pagsasama, Salpukan, at Alitan",
    "summary": "Ito ay isang talahanayan ng relasyon na nagpapakita kung paano nakikipag-ugnayan ang haligi ng araw ngayon sa natal chart. Ipinapakita nito kung ano ang bawat pagsasama, salpukan, at alitan at kung gaano karaming puntos ang mayroon sila.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang mga Earthly Branch ay Labindalawang Character",
        "blocks": [
          {
            "p": "Ang labindalawang earthly branch (十二支) ay 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Karaniwang kilala bilang mga zodiac sign — Daga, Baka, Tigre, Kuneho, Dragon, Ahas, Kabayo, Kambing, Unggoy, Manok, Aso, Baboy — ay bawat isa ay nakakabit sa isa sa mga labindalawang character na ito."
          },
          {
            "figure": "branch-wheel",
            "caption": "Kapag ang labindalawang character ay inayos sa isang bilog, malinaw na nakikita ang mga relasyon. Ang salpukan (沖) ay palaging nakaharap sa isa't isa, habang ang anim na pagkakasundo at alitan ay mas malapit na pares. Ang mga linyang ito ay hindi nakasulat sa teksto kundi direktang nakuha mula sa mga patakaran ng kalkulasyon.",
            "labels": {
              "alt": "Isang diagram na nagpapakita ng labindalawang earthly branch na inayos sa isang bilog na may mga linya na nag-uugnay sa anim na pagkakasundo, salpukan, at alitan.",
              "yukhap": "anim na pagkakasundo",
              "chung": "Salpukan",
              "wonjin": "Alitan",
              "rat": "Daga",
              "ox": "Baka",
              "tiger": "Tigre",
              "rabbit": "Kuneho",
              "dragon": "Dragon",
              "snake": "ahas",
              "horse": "kabayo",
              "goat": "kambing",
              "monkey": "unggoy",
              "rooster": "manok",
              "dog": "aso",
              "pig": "baboy"
            }
          },
          {
            "p": "Sa saju, bawat isa sa apat na haligi ay may isang earthly branch. **Ang pagbasa para sa araw na ito** ay tinutukoy sa pamamagitan ng pagtutugma ng **branch ng araw** sa apat na branches ng natal chart gamit ang talahanayan ng relasyon sa ibaba."
          }
        ]
      },
      {
        "title": "Pangkalahatang Talahanayan ng Relasyon",
        "blocks": [
          {
            "table": {
              "caption": "Sa pagkakasunod-sunod ng pinakamataas na iskor. Ito ang mga halaga na ginagamit ng Saju-Link.",
              "head": [
                "Relasyon",
                "Kaukulang Pairs",
                "Kahulugan",
                "Iskor"
              ],
              "rows": [
                [
                  "triad (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Kapag ang lahat ng tatlong karakter ay nagsama-sama, bumubuo sila ng isang kumpletong elemental formation (局). Ito ay itinuturing na pinakamalakas na kumbinasyon.",
                  "{scoreSamhap}"
                ],
                [
                  "six harmony (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Mga pares na umaakit sa isa't isa. Ito ang pinaka-karaniwang kumbinasyon dahil binubuo lamang ito ng dalawang karakter.",
                  "{scoreYukhap}"
                ],
                [
                  "half triad (半合)",
                  "Dalawang karakter na may isa sa mga royal characters (子·酉·午·卯) mula sa triad",
                  "Isang half triad na may karakter na sentro sa formation. Hindi ito bumubuo ng kumpletong elemental formation sa pamamagitan lamang ng dalawang karakter, kaya't mas mababa ito kaysa sa triad.",
                  "{scoreBanhap}"
                ],
                [
                  "Parehong Branch",
                  "子子 · 丑丑 …",
                  "Mga karakter na pareho. Ibig sabihin nito ay magkatulad sila ngunit hindi nangangahulugang umaakit, kaya't inilalagay sila sa gitna.",
                  "{scoreSame}"
                ],
                [
                  "Walang Relasyon",
                  "Mga pares na hindi nabibilang sa kahit saan sa itaas o ibaba",
                  "Mga kumbinasyon na walang espesyal na relasyon. Ito ay nagsisilbing punto ng sanggunian.",
                  "{scoreNeutral}"
                ],
                [
                  "quiet discord (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Mga pares na hindi makapaghiwalay sa kabila ng kanilang hindi pagkagusto. Mukha silang tahimik sa ibabaw ngunit itinuturing na tumatagal.",
                  "{scoreWonjin}"
                ],
                [
                  "Clash (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Mga pares na nagkakaroon ng head-on clash. Ito ay anim na pares na nagtatagpo.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "triads at half triads",
        "blocks": [
          {
            "p": "Ang isang triad ay nangangailangan ng lahat ng tatlong karakter na naroroon. Dahil mayroong apat na earthly branches sa natal chart, posible na ang branch ng araw ay makipag-ugnayan sa mga ito, na nagreresulta sa isang triad — sa panahong iyon, tumatanggap ito ng iskor na {scoreSamhap}. Kung dalawa lamang ang kasangkot, ito ay isang half triad."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang mga half triads ay Nangangailangan ng Royal Characters upang Makilala",
        "blocks": [
          {
            "p": "Mayroon ding isang paraan na itinuturing na half triad kung ang parehong karakter ay kabilang sa parehong triad group. Pinapayagan nito ang mga kumbinasyon tulad ng 申辰, na mahirap tawaging kumbinasyon, na makatanggap ng mataas na iskor. Samakatuwid, kinikilala ng serbisyong ito ang isang half triad lamang kapag kasama nito ang mga royal characters (子·酉·午·卯), at hindi itinuturing na wastong kumbinasyon ang mga tulad ng 申辰·巳丑·寅戌·亥未."
          }
        ]
      },
      {
        "title": "Dahilan sa Paghihiwalay ng quiet discord",
        "blocks": [
          {
            "p": "Ang anim na pares ng quiet discord ay nakikita nang madalas tulad ng clashes. Kung ang isa ay bibilangin lamang ang mga kumbinasyon at clashes, ang mga anim na pares na ito ay lahat ay maililibing sa ilalim ng walang relasyon na iskor na {scoreNeutral}, kaya't inilalagay sila nang hiwalay."
          },
          {
            "p": "Kung ang clashes ay mga pares na nagkakaroon ng head-on clash at maliwanag na ipinapakita, ang quiet discord ay tahimik na hindi naka-align. Samakatuwid, ito ay inilalagay sa iskor na {scoreWonjin}, na mas mataas kaysa sa clashes ({scoreChung}) ngunit tiyak na mas mababa kaysa sa walang relasyon ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang mga iskor ay itinatakda din para sa clashes",
        "blocks": [
          {
            "p": "Ang pinakamababang marka ng pagkakasalungat ay {scoreChung}. Ito ay sinadyang hindi bigyan ng halaga na malapit sa 0. Sa tradisyonal na myeongri, ang pagkakasalungat ay hindi isang 'wakas' kundi isang 'banggaan', at ang pagbibigay ng marka na malapit sa ibaba ay nangangahulugang ang serbisyo ay gumagawa ng tiyak na pahayag tungkol sa relasyon."
          },
          {
            "p": "Sa minimum na {scoreChung} at maximum na {scoreSamhap}, ang pagkakaiba ay malinaw na nakikita ngunit hindi tiyak."
          }
        ]
      }
    ]
  },
  "guide/zodiac": {
    "eyebrow": "Tanda ng Zodiac",
    "title": "Nasaan ang Tanda ng Zodiac sa Saju?",
    "summary": "Ang tanda ng zodiac ay ang earthly branch ng taon kung kailan ka ipinanganak. Ito ang nagpapaliwanag kung bakit ito ay hinango mula sa taon ng saju sa halip na mula sa taon ng kalendaryo, at kung bakit ang mga ipinanganak sa unang bahagi ng Enero o Pebrero ay may tanda ng zodiac ng nakaraang taon.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang tanda ng zodiac ay ang earthly branch ng taon kung kailan ka ipinanganak.",
        "blocks": [
          {
            "p": "Ang saju ay binubuo ng apat na haligi: taon, buwan, araw, at oras, kung saan ang bawat haligi ay may isang heavenly stem at isang earthly branch. Kabilang dito, ang **earthly branch ng taon**, o year branch, ay ang hayop na tinutukoy natin bilang tanda ng zodiac."
          },
          {
            "table": {
              "caption": "Ang Labindalawang Earthly Branches at mga Tanda ng Zodiac",
              "head": [
                "Earthly Branch",
                "Tanda ng Zodiac"
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
                  "Kambing"
                ],
                [
                  "申",
                  "Unggoy"
                ],
                [
                  "酉",
                  "Tandang"
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
        "title": "Gumagamit kami ng taon ng saju, hindi taon ng kalendaryo.",
        "blocks": [
          {
            "p": "Ang punto kung saan nagbabago ang tanda ng zodiac ay hindi Enero 1 ng solar calendar o Lunar New Year. Ang pamantayan para sa pagbabago ng taon sa saju ay **Ipchun**. Samakatuwid, ang mga ipinanganak sa unang bahagi ng Enero o Pebrero ay maaaring magkaroon ng ibang tanda ng zodiac kaysa sa ipinapakita ng kalendaryo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang dahilan kung bakit hindi kami direktang nagtatanong para sa tanda ng zodiac.",
        "blocks": [
          {
            "p": "Ito ang dahilan kung bakit nagtatanong lamang kami para sa petsa ng kapanganakan nang hindi pinipili ang tanda ng zodiac sa input screen. Kapag kinakalkula ng saju engine ang taon, awtomatikong umaayon ito sa hangganan ng Ipchun. Kung pinili nang direkta, ang isang ipinanganak sa unang bahagi ng Pebrero ay pipili ng tanda ng zodiac na hindi tumutugma sa kanilang aktwal na tanda."
          }
        ]
      },
      {
        "title": "Ang tanda ng zodiac ay isang karakter sa saju.",
        "blocks": [
          {
            "p": "Kabilang sa walong karakter, ang tumutugma sa tanda ng zodiac ay **isang year branch**. Ang iba pang pitong karakter — lalo na ang day stem na tumutukoy sa sarili — ay walang kaugnayan sa tanda ng zodiac."
          },
          {
            "p": "Ang mga taong ipinanganak sa parehong taon ay lahat ay may parehong tanda ng zodiac. Samakatuwid, ang maaaring malaman mula sa tanda ng zodiac ay kasing dami lamang ng isa sa walong karakter. Ito ang dahilan kung bakit hindi **itinatrato nang hiwalay o mahalaga** ang tanda ng zodiac sa serbisyong ito — ang year branch ay kinakalkula para sa lakas at ang araw ngayon ay ang day pillar ng paghatol sa araw tulad ng anumang iba pang earthly branch."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Gayunpaman, ang dahilan kung bakit ipinapakita namin ang tanda ng zodiac.",
        "blocks": [
          {
            "p": "Ito ang tanging posisyon kung saan ang kahulugan ay nauunawaan kahit na hindi mo alam ang terminolohiya ng myeongri. Kung ang tanda ng zodiac ay nakasulat kasama ang year branch sa screen ng natal chart, nagiging pahiwatig ito para sa pagbabasa ng iba pang pitong karakter."
          }
        ]
      },
      {
        "title": "Ang year branch ay nananatiling pareho kahit na hindi mo alam ang oras ng kapanganakan.",
        "blocks": [
          {
            "p": "Kung hindi mo ipinasok ang oras, ang hour pillar ay hindi kasama at ang lakas ng mga five elements (limang elemento) ay nagbabago. Gayunpaman, ang **year branch ay nananatiling pareho** — ito ay tinutukoy lamang ng taon kung kailan ka ipinanganak."
          },
          {
            "p": "Samakatuwid, ang kwentong nakuha mula sa year branch ay hindi nagbabago kahit para sa mga hindi alam ang oras. Sa kabaligtaran, nangangahulugan ito na ang maaaring sabihin batay lamang sa tanda ng zodiac ay limitado, anuman ang kasama ang oras o hindi."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Oras",
    "title": "Ikinoconvert namin ang oras ng kapanganakan sa tunay na oras ng araw.",
    "summary": "Ang standard time at ang aktwal na posisyon ng araw ay magkaiba. Ito ay tumutukoy kung bakit ang oras ay dapat ayusin ayon sa longitude ng lugar ng kapanganakan upang matiyak na tama ang hour pillar.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Iba ang oras sa relo at ang solar time",
        "blocks": [
          {
            "p": "Ang oras na haligi ng saju (時柱) ay tinutukoy ng posisyon ng araw. Gayunpaman, ang relong nakikita natin ay gumagamit ng isang pamantayang oras para sa buong bansa, na hindi tumutugma sa aktwal na posisyon ng araw."
          },
          {
            "p": "Ang pamantayang oras ng Korea ay batay sa 135° silangang longitude. Ang longitude ng Seoul ay humigit-kumulang 127°, kaya ito ay mga 8° sa kanluran, na nagiging sanhi ng pagkaantala ng pag-abot ng araw sa kanyang zenith — kapag tanghali na sa relo, ang araw sa Seoul ay bago pa ang kanyang zenith. Ang pagkakaibang ito ay humigit-kumulang **32 minuto**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang 32 minuto ay nagbabago ng oras na haligi ng isang slot",
        "blocks": [
          {
            "p": "Ang oras sa saju ay nahahati sa mga yunit ng dalawang oras. Ang mga ipinanganak malapit sa hangganan ay magkakaroon ng kanilang oras na haligi na ganap na nagbago dahil sa 32 minutong pagkakaiba — kinakailangan ang mga pagsasaayos lalo na para sa mga nahuhulog sa hangganang ito."
          }
        ]
      },
      {
        "title": "Ang dahilan kung bakit tinatanong kung saan ka ipinanganak",
        "blocks": [
          {
            "p": "Kung iba ang longitude, ang halaga ng pagsasaayos ay mag-iiba rin. Kung ilalapat mo ang pagsasaayos batay sa Seoul sa isang ipinanganak sa ibang bansa, ang oras na haligi ay magiging labis na hindi tumutugma. Samakatuwid, ang input screen ay humihiling sa iyo na piliin ang iyong lugar ng kapanganakan, at ang mga kalkulasyon ay ginagawa batay sa longitude at pamantayang oras ng lungsod na iyon. Sa kasalukuyan, mayroong {cityCount} na mga lugar sa listahan."
          },
          {
            "p": "Kahit sa parehong bansa, ang mga lugar na may labis na magkakaibang longitudes (tulad ng Estados Unidos, Russia, Indonesia, atbp.) ay nahati sa mga lungsod. **15° ng longitude ay katumbas ng isang oras na haligi**."
          },
          {
            "p": "Kung hindi ka pumili, ang mga kalkulasyon ay gagawin batay sa Seoul. Karamihan sa mga kapanganakan ay domestiko, kaya ito ay mas hindi madaling magkamali, ngunit kung ikaw ay ipinanganak sa ibang bansa, mangyaring siguraduhing pumili."
          }
        ]
      },
      {
        "title": "Ang pamantayang oras ay nagbago ng ilang beses sa nakaraan",
        "blocks": [
          {
            "p": "May dahilan kung bakit ang pagsasaayos ay hindi maaring kalkulahin nang simpleng bilang \"pagkakaiba ng longitude ÷ 15° × 60 minuto.\" Ang pamantayang oras mismo ay nagbago sa iba't ibang panahon."
          },
          {
            "table": {
              "caption": "Mga pagbabago sa pamantayang oras ng Korea — ang mga ipinanganak sa panahong ito ay hindi tumutugma sa simpleng kalkulasyon",
              "head": [
                "Panahon",
                "Ano ang naiiba?"
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
                  "Ipinatupad ang daylight saving time"
                ]
              ]
            }
          },
          {
            "p": "Ang Saju-Link ay hindi nagtatakda ng pamantayang meridian bilang isang constant na halaga, kundi kinakalkula ang aktwal na pamantayang oras na ginagamit sa sandaling iyon batay sa **IANA time zone** na impormasyon ng lugar ng kapanganakan. Ang daylight saving time at mga nakaraang pamantayang oras ay awtomatikong naisasama."
          }
        ]
      },
      {
        "title": "Ang kapanganakan kaagad pagkatapos ng hatingabi ay isinasaalang-alang din ang petsa",
        "blocks": [
          {
            "p": "Dahil ang pagsasaayos ay -32 minuto, ang mga ipinanganak sa pagitan ng 00:00 at 00:32 ayon sa relo ay magiging **11 PM ng nakaraang araw** sa tunay na solar time. Kung ang oras lamang ang ibabawas at ang petsa ay mananatiling pareho, isusulat nito ang araw na haligi (日柱) bilang \"11 PM ng nakaraang araw.\""
          },
          {
            "p": "Ang Saju-Link ay mag-aayos din ng petsa sa kasong ito. Ang karakter sa itaas ng araw na haligi ay tumutukoy sa day stem (日干), na kumakatawan sa aking sarili, kaya kung ito ay hindi tumutugma, halos lahat ng bagay sa interpretasyon ay hindi tumutugma."
          }
        ]
      },
      {
        "title": "Hindi mo kailangang malaman ang oras",
        "blocks": [
          {
            "p": "Ang oras ng kapanganakan ay opsyonal. Kung hindi mo ito alam, ang mga kalkulasyon ay gagawin nang walang oras na haligi, at ang katotohanang ito ay ipapakita sa screen ng mga resulta. Dahil ito ay nangangahulugan na dalawang sa walong karakter ang nawawala, ito ay makakaapekto sa pagsusuri ng lakas at kahinaan ng mga elemento, kaya kung alam mo ito, mas tumpak na isama ito."
          },
          {
            "p": "Ang year branch (ang zodiac animal) ay palaging pareho anuman ang oras — [dahil tinitingnan lamang natin ang year branch](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Personal na Impormasyon",
    "title": "Isang paraan na hindi nag-iimbak ng naipasok na impormasyon",
    "summary": "Nililinaw nito kung ano ang teknikal na ibig sabihin na ang petsa ng kapanganakan ay hindi naitala kahit saan at kung ano ang nilalaman sa resulta na link.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Walang pagpaparehistro ng pagiging miyembro",
        "blocks": [
          {
            "p": "Ang Saju-Link ay hindi lumilikha ng mga account. Hindi ito nangongolekta ng mga pangalan, email, o numero ng telepono. Ang tanging impormasyong nakolekta ay ang petsa ng kapanganakan at (opsyonal) oras ng kapanganakan, lugar ng kapanganakan, at kasarian, at ang impormasyong iyon ay hindi nananatili pagkatapos makumpleto ang kalkulasyon."
          },
          {
            "p": "Mayroong isang larangan upang ipasok ang isang pamagat na ipapakita sa screen ng mga resulta, ngunit iyon ay **para lamang sa layunin ng pagpapakita** at hindi ginagamit sa mga kalkulasyon. Hindi mo kailangang ipasok ang iyong totoong pangalan."
          }
        ]
      },
      {
        "title": "Ano ang nilalaman sa resulta na link?",
        "blocks": [
          {
            "p": "Kapag nakumpleto na ang kalkulasyon, ang address ay ganito."
          },
          {
            "p": "**/ko/reading/result#eyJhIjp7InkiOjE5OTAsLi4u**"
          },
          {
            "p": "Ang sumusunod sa **#** ay ang mga input values. Ang bahaging ito ay tinatawag na **fragment**, na isang seksyon na **hindi ipinapadala ng browser sa server**. Ito ay karaniwang pag-uugali ng web at hindi isang patakaran na nilikha namin — ito ay orihinal na dinisenyo upang ipakita ang isang posisyon sa loob ng isang dokumento, kaya walang pangangailangan ang server na makita ito."
          },
          {
            "p": "Sa ibang salita, kapag binuksan mo ang resulta na link, binabasa ng browser ang halagang iyon upang humiling ng kalkulasyon, at ang aming server ay tumatanggap ng mga halagang gagamitin para sa kalkulasyon, ibinabalik ang sagot, at pagkatapos ay nakakalimutan ito."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mangyaring mag-ingat kapag ipinapadala ang link sa iba",
        "blocks": [
          {
            "p": "Ang katotohanang hindi ito nakaimbak sa server ay hindi nangangahulugang ang link ay ligtas. Ang resulta na link ay naglalaman ng mga petsa ng kapanganakan ng dalawang indibidwal, kaya ang taong tumanggap ng link na iyon ay makikita ang parehong resulta."
          }
        ]
      },
      {
        "title": "Bakit ang kalkulasyon ay ginagawa sa server ngunit hindi nakaimbak?",
        "blocks": [
          {
            "p": "Ang kalkulasyon mismo ay ginagawa sa server. Ang lunar-solar almanac table ay kinakailangan upang makabuo ng saju, at ang talahanayan na iyon ay masyadong malaki upang maipadala sa browser. Gayunpaman, **pagkatapos iproseso ang kahilingan, hindi namin ginagamit ang halagang iyon kahit saan.** Walang code upang ipasok ito sa isang database."
          },
          {
            "p": "Ang pinakamababang mga tala na kinakailangan para sa operasyon ay pinananatili — isang counter upang maiwasan ang parehong tao na magpadala ng labis na mga kahilingan sa maikling panahon. Hindi ito kasama ang petsa ng kapanganakan, at ang access IP ay hindi pinananatili. Isang halaga lamang na hashed kasama ang petsa ang binibilang, at ang halagang iyon ay nagbabago kapag nagbago ang araw."
          }
        ]
      },
      {
        "title": "Mga bagay na hindi maaring gawin dahil hindi nakaimbak ang impormasyon",
        "blocks": [
          {
            "p": "Sa totoo lang, may mga bagay na isinakripisyo dahil hindi kami nag-iimbak ng impormasyon."
          },
          {
            "ul": [
              "**Hindi mo maibabalik ang mga nakaraang resulta.** Kailangan mong magkaroon ng link upang muling makita ang mga ito.",
              "**Ang parehong mga halaga ay muling kakalkulahin.** Walang cache. Gayunpaman, dahil ang lahat ng mga patakaran ay deterministic, [ang parehong input ay palaging magbibigay ng parehong halaga](/guide/natal-chart).",
              "**Ang pag-refresh ay magbabalik sa ad gate.** Ito ay dahil walang lugar upang iwanan ang kasaysayan ng pagtingin."
            ]
          }
        ]
      },
      {
        "title": "Kung ikaw ay bumili",
        "blocks": [
          {
            "p": "Kapag bumili ka ng ulat, isang tala ng transaksyon ang itatago. Ang pagbabayad ay napapailalim sa mga legal na panahon ng pag-iingat, at kung walang kasaysayan ng order, hindi maiproseso ang mga refund. Gayunpaman, sa oras na ito, **ang petsa ng kapanganakan na ginamit para sa saju na pagkalkula ay hindi ikakabit sa order** — ito ay hihilingin muli kapag nilikha ang PDF pagkatapos ng kumpirmasyon ng pagbabayad."
          },
          {
            "p": "Para sa karagdagang detalye, mangyaring sumangguni sa aming [Patakaran sa Privacy](/privacy)."
          }
        ]
      }
    ]
  },
  "guide/reports": {
    "eyebrow": "Bayad na mga produkto",
    "title": "Ano ang kasama sa bayad na ulat",
    "summary": "Nililinaw nito kung ano ang idinagdag sa PDF habang pinapanatili ang screen na hindi nagbabago. Ang mga halaga at nilalaman ay kinukuha mula sa aktwal na mga setting ng produkto.",
    "backLabel": "Batayan ng pagkalkula",
    "sections": [
      {
        "title": "Pinanatili ang screen na hindi nagbabago, idinagdag lamang sa PDF",
        "blocks": [
          {
            "p": "Ang pagkalkula ng saju at pagtatanong ng resulta ay **libre**. Makikita mo ang lahat sa screen, kabilang ang natal chart, ang limang elemento, ang kapalaran ngayon, at ang kanilang batayan, dahil walang naiwang impormasyon habang nilikha ang bayad na ulat."
          },
          {
            "p": "Ang papel ng ulat ay **magdagdag ng mga layer na hindi naroroon sa screen**. Ang mga layer na ito ay hindi gawa-gawa; ito ay mga halaga na naunang kinakalkula sa proseso ng pag-score ngunit hindi ginamit sa screen."
          }
        ]
      },
      {
        "title": "Ulat ng lifetime saju at kapalaran ng taong ito PDF — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Domestic payment {priceDomestic} (kasama ang VAT), international payment {priceGlobal}. Binubuo ito ng {pageCount} A4 na pahina."
          }
        ]
      },
      {
        "blocks": [
          {
            "p": "Ang talahanayan ng nilalaman ay binabasa nang direkta mula sa paglalarawan ng produkto. **Ang bilang ng mga pahina ay pareho sa aktwal na dokumento** — hindi ito pinalaki dahil ito ang halaga na nakasaad sa abiso ng impormasyon ng produkto."
          }
        ]
      },
      {
        "title": "Ano ang wala sa screen",
        "blocks": [
          {
            "p": "Ipinapakita ng libreng screen ang natal chart, ang limang elemento, at ang kapalaran ngayon. May tatlong halaga na nalikha sa proseso ng pagkalkula ngunit hindi ipinapakita sa screen, at ito ang mga bahagi ng bayad na ulat."
          },
          {
            "ul": [
              "**Ratio ng mga kaalyado ng day stem** — Ipinapakita nito nang numerikal kung saan ginawa ang paghuhusga ng isang malakas o mahina na day pillar. Ang pangalan ng paghuhusga lamang ay hindi nagpapahiwatig kung ito ay nasa gilid o sapat.",
              "**Wang Sang Hyu Su Sa** — Gaano karami ang itinaas ng buwan ng kapanganakan sa bawat enerhiya. Kung ang power bar ay nagpapahiwatig ng 'gaano karami ang naroon', ang talahanayang ito ay nagpapahiwatig ng 'nasa panahon ba ito'.",
              "**Mga detalye ng pagwawasto ng tunay na solar time** — Ang konsepto ay nasa dokumento ng gabay, ngunit **'ilang minuto ang na-shift sa iyong kaso'** ay isang ibang halaga para sa bawat tao, kaya ito ay kasama lamang sa ulat."
            ]
          }
        ]
      },
      {
        "title": "Ano ang dapat mong malaman bago bumili",
        "blocks": [
          {
            "p": "**Hindi nag-iimbak ng mga file ang server.** Kapag naaprubahan ang pagbabayad, ang dokumento ay nilikha at agad na ipinadala, na walang naiwan sa server. Ang prinsipyong ito ng serbisyo na hindi nag-iimbak ng mga input values ay pinanatili kahit sa bayad na daloy."
          },
          {
            "p": "Samakatuwid, **mangyaring i-save ang file kaagad pagkatapos ng pagbabayad.** Maaari mo itong matanggap ng hanggang limang beses gamit ang parehong order, ngunit kung umalis ka sa resulta ng screen at mawala ang mga input values, hindi ito maibabalik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang mga ulat ay maaari ring maging mga materyales sa sanggunian",
        "blocks": [
          {
            "p": "Hindi dahil sa tumaas ang bilang ng mga pahina ay nangangahulugan na ang mga konklusyon ay mas tiyak. Ang idinadagdag ng ulat ay **ang batayan ng parehong pagkalkula**, hindi isang mas malakas na pahayag. Ang kapalaran ay isang larangan kung saan ang mga konklusyon ay maaaring magbago depende sa practitioner, at ang serbisyong ito ay nagkalkula lamang ng maaaring isalin sa mga alituntunin."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Pabatid",
    "title": "Mga Anunsyo",
    "summary": "Ito ay isang lugar upang ipaalam ang mga pagbabago na maaaring makaapekto sa paggamit.",
    "backLabel": "Bumalik sa simula",
    "sections": []
  },
  "contact": {
    "eyebrow": "Makipag-ugnayan",
    "title": "Mga Katanungan",
    "summary": "Ito ang channel para sa mga katanungan tungkol sa paggamit, mga refund, mga kahilingan sa personal na impormasyon, at mga ulat ng error, kasama ang impormasyon ng negosyo.",
    "backLabel": "Bumalik sa simula",
    "sections": [
      {
        "title": "Makipag-ugnayan sa pamamagitan ng email",
        "blocks": [
          {
            "p": "Mangyaring ipadala ang mga katanungan sa **{email}**. Kami ay tutugon sa loob ng 2 araw ng negosyo. Para sa mga katanungan tungkol sa pagbabayad at refund, mangyaring isama ang **ang order number o ang email na ginamit para sa pagbabayad** para sa mas mabilis na kumpirmasyon."
          },
          {
            "p": "Ang mga katanungan sa telepono ay tinatanggap sa {customerCenter}."
          }
        ]
      },
      {
        "title": "Ano ang maaaring ipadala sa channel na ito",
        "blocks": [
          {
            "ul": [
              "**Pagbabayad at refund** — Kung ang dokumento ay hindi pa nalikha o ang halaga ng pagbabayad ay naiiba mula sa order, isang buong refund ang ibibigay. Ang mga kondisyon ay nasa [Patakaran sa Refund](/refund-policy).",
              "**Personal na impormasyon** — Tumatanggap kami ng mga kahilingan para sa pagtingin, pagwawasto, at pagtanggal. Ang patakaran sa pagproseso ay nasa [Patakaran sa Privacy](/privacy).",
              "**Ulat ng pagkakamali sa pagkalkula** — Kung ang natal chart ng saju o mga score ay tila kakaiba, mangyaring ipaalam sa amin. Kung isasama mo kung kailan mo ipinasok ang petsa at oras ng kapanganakan, maaari naming muling kalkulahin gamit ang parehong mga halaga."
            ]
          }
        ]
      },
      {
        "title": "Impormasyon ng negosyo",
        "blocks": [
          {
            "ul": [
              "**Pangalan ng negosyo** — {companyName}",
              "**Kinatawan** — {representative}",
              "**Numero ng pagpaparehistro ng negosyo** — {businessNumber}",
              "**Numero ng pagpaparehistro ng mail order business** — {mailOrderNumber}",
              "**Address** — {address}",
              "**Customer center** — {customerCenter}",
              "**Email** — {email}",
              "**Opisyal ng proteksyon ng personal na impormasyon** — {privacyOfficer}",
              "**Hosting provider** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Walang pangangailangan na isama ang iyong petsa at oras ng kapanganakan sa email ng katanungan. Hindi namin iniimbak ang mga input, kaya hindi namin ito ma-retrieve mamaya, at ang kailangan ng kumpirmasyon ay sapat na sa order number. Mangyaring isama lamang ito kapag ang mga halaga ay talagang kinakailangan, tulad sa isang ulat ng pagkakamali sa pagkalkula."
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
    "engine": "Mga pamantayan ng pagkalkula",
    "support": "Tanong"
  },
  "intro": "Ang mga pagbabago na nakakaapekto sa mga kondisyon ng paggamit, tulad ng mga presyo at mga tuntunin, ay ilalathala dito bago ang pagpapatupad. Ang mga panloob na pagpapabuti tulad ng pagpapabilis ng screen ay hindi ilalathala dito: ang nakalathala dito ay tanging ang mga bagay na kailangan mong malaman.",
  "empty": {
    "title": "Walang nailathalang mga ulat.",
    "body": "Kung may mga pagbabago na dapat ipaalam sa iyo, ilalathala ito dito."
  },
  "effective": "Epektibo mula {date}",
  "pager": {
    "label": "Pahina ng ulat",
    "newer": "← Pinakabago",
    "older": "Nakaraang mga ulat →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Bukas na ang bintana ng pagtatanong at pahina ng pagpapakilala ng serbisyo.",
      "body": [
        "Nakapagsama kami ng isang bintana para sa mga pagtatanong, refund, mga kahilingan sa personal na impormasyon, at pag-uulat ng mga pagkakamali sa pagkalkula. Maaari mo itong tingnan sa ibaba ng screen sa ilalim ng 'Tanong'.",
        "Kapag ipinaalam mo sa amin ang isang bagay na tila pagkakamali sa pagkalkula, mangyaring isama ang petsa at oras ng kapanganakan na iyong ipinasok. Hindi namin sine-save ang input, kaya kung wala ang halagang iyon, hindi namin maikalkula muli."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Sa mga screen na Arabe at Khmer, ang ulat ay gagawin sa Ingles.",
      "body": [
        "Kung tinitingnan mo ang screen sa Arabe o Khmer, ang PDF na ulat na iyong binili ay gagawin sa Ingles. Ito ay dahil hindi pa kayang i-format ng tool na ito ang dalawang script na ito sa mga talata.",
        "Maaari mo pa ring makita ang screen gaya ng dati, at ang pangalan na nakasulat sa ulat ay eksaktong gaya ng iyong ipinasok.",
        "Ang parehong impormasyon ay ibinibigay din nang maaga sa screen ng pagbabayad. Ipapaalam namin sa iyo dito kapag sinusuportahan ng tool ang mga script na ito."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Isasama ang mga pamantayan ng pagkalkula sa mga resulta.",
      "body": [
        "Sa ibaba ng screen ng mga resulta at ulat, ang mga pamantayan ng pagkalkula (hal., sajulink-natal-v1) ay itinatakda. Kung pareho ang input, palaging lalabas ang parehong halaga sa ilalim ng parehong pamantayan.",
        "Kung ang mga patakaran para sa pag-unawa sa myeongri ay nagbago at maaaring magkaiba ang mga marka, una naming ilalathala ang katotohanang iyon at ang epektibong petsa dito. Ito ay dahil ang mga numero sa mga link ng resulta na natanggap mo dati ay maaaring magbago.",
        "Ang kasalukuyang pamantayan ay v10, at ang pagbabayad ay nasa paghahanda pa."
      ]
    }
  }
} satisfies NoticeCopy;
