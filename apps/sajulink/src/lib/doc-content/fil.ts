import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Panimula",
    "title": "Panimula ng Saju-Link",
    "summary": "Ito ay isang serbisyo na nagtatatag ng saju (four-pillars reading) batay sa iyong petsa at oras ng kapanganakan at nagpapaliwanag kung ano ang kahulugan ng walong karakter. Nililinaw nito kung ano ang kinakalkula at kung ano ang hindi.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "title": "Ano ang ginagawa namin?",
        "blocks": [
          {
            "p": "Itinatag ng Saju-Link ang **saju (four-pillars) chart batay sa iyong petsa at oras ng kapanganakan at ipinapakita kung ano ang kahulugan ng walong karakter**. Binabasa nito ang lakas ng mga five elements at ang lakas ng day master, at sinisiyasat din ang kapalaran ng araw batay sa day stem."
          },
          {
            "p": "Ang nakikita mo sa screen ay **libre at hindi nangangailangan ng membership.** Ang bayad na produkto ay isang PDF na dokumento na naglalaman ng mga halaga na hindi ipinapakita sa screen — ang batayan para sa pagkakaiba sa pagitan ng isang malakas na day master at isang mahina na day master, Wang Sang Hyu Su Sa, at ang mga detalye ng pagwawasto para sa true solar time."
          }
        ]
      },
      {
        "title": "Ano ang kinakalkula namin?",
        "blocks": [
          {
            "p": "Itinatag ang saju gamit ang **manseyeok (Korean lunisolar almanac)**. Ang oras ng kapanganakan ay itinatama sa **true solar time** ng lugar ng kapanganakan — dahil ang aktwal na posisyon ng araw ay nag-iiba ayon sa rehiyon kahit na ang orasan ay nagpapakita ng parehong oras."
          },
          {
            "p": "Ang mga puntos ay ibinibigay lamang ayon sa mga itinatag na alituntunin. Ang mga konsepto mula sa tradisyonal na 명리 (myeongri, ang pag-aaral ng kapalaran) tulad ng Ten Gods, relasyon ng earthly branch, at mga supporting elements ay isinasalin sa mga alituntunin para sa pagkalkula, at **ang parehong input ay palaging magbibigay ng parehong halaga**. Kapag ang mga alituntunin ay binago, isinasagawa ang regression testing upang matiyak na ang mga nakaraang resulta ay nananatiling hindi nagbabago."
          },
          {
            "p": "**Hindi ginagamit ang AI sa mga pangungusap sa screen.** Ang mga paliwanag na lumalabas sa libreng screen ay mga nakatakdang parirala na nakakabit sa mga resulta ng pagkalkula. **Tanging ang mga interpretasyon sa mga bayad na ulat** ang gumagamit ng generative AI, at kahit noon, ang AI ay hindi lumilikha ng mga puntos — ito ay sumusulat lamang ng mga pangungusap batay sa mga halagang ibinigay ng engine."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin sinasabi?",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagbibigay ng panghuhula.** Hindi kami sumusulat na dapat mong makilala o iwasan ang sinuman. Ito ay isang materyal na sanggunian na nagbubuod ng mga pananaw ng tradisyonal na 명리.",
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
    "summary": "Ipinapahayag namin ang lahat ng mga alituntunin na ginamit ng Saju-Link. Maaari mong suriin kung saan nagmula ang mga numerong ipinapakita sa screen, kabilang ang mga pagsasaayos para sa kapalaran ng araw, ang mga puntos mula sa talahanayan ng relasyon ng earthly branch, at ang mga hangganan na nagtatangi sa pagitan ng isang malakas na day master at isang mahina na day master.",
    "backLabel": "Bumalik sa Tahanan",
    "sections": [
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang mga halagang nakasulat dito ay lahat **direktang binasa mula sa code ng pagkalkula**. Dahil hindi sila manu-manong isinusulat sa teksto, kung ang mga alituntunin ay binago, ang mga numero sa dokumentong ito ay magbabago rin nang naaayon."
          }
        ]
      }
    ]
  },
  "guide/natal-chart": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Saju Chart — Saan nagmula ang walong karakter?",
    "summary": "Ipinaliwanag nito kung paano ang taon, buwan, araw, at oras ng kapanganakan ay nagiging apat na haligi at walong karakter, at tinutukoy kung aling karakter ang tumutukoy sa iyo. Tinalakay din nito kung bakit maaari itong tingnan kahit na hindi alam ang eksaktong oras ng kapanganakan.",
    "backLabel": "Batayan ng Pagkalkula",
    "sections": [
      {
        "title": "Apat na Haligi, Walong Karakter",
        "blocks": [
          {
            "p": "Ang saju (四柱) ay literal na nangangahulugang **apat na haligi**. Bawat isa sa taon, buwan, araw, at oras ng kapanganakan ay itinatag bilang isang haligi, at dalawang karakter ang nakasulat para sa bawat haligi. Sa gayon, may kabuuang walong karakter, na tinatawag na **원국 (won-guk)**."
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
            "p": "Hindi lahat ng walong karakter ay may parehong bigat. Ang **heavenly stem ng araw ng kapanganakan**, partikular ang itaas na karakter ng day pillar, ay tumutukoy sa **akin**. Ito ay tinatawag na **day stem (日干)**."
          },
          {
            "figure": "four-pillars",
            "caption": "Ang saju ay binubuo ng walong karakter na itinatag gamit ang dalawang karakter para sa taon, buwan, araw, at oras ng kapanganakan, na kinakatawan ng mga heavenly stems at earthly branches. Dito, ang kapansin-pansing day stem (日干) ay ang karakter na tumutukoy sa akin.",
            "labels": {
              "year": "Year Pillar",
              "yearNote": "Root · Zodiac Sign",
              "month": "Month Pillar",
              "monthNote": "Season · Strength",
              "day": "Araw na Panginoon",
              "dayNote": "Sarili · Palasyo ng Asawa",
              "hour": "Oras na Panginoon",
              "hourNote": "Huling mga Taon · Paggamit",
              "stem": "Heavenly Stem",
              "stemNote": "Day Stem = Sarili",
              "branch": "Earthly Branch",
              "branchNote": "Day Branch = Palasyo ng Asawa"
            }
          },
          {
            "p": "Ang ipinapakita ng serbisyong ito ay pangunahing nagmula sa isang karakter na ito — ang interpretasyon ng mga tendensya, ang lakas ng mga five elements, ang enerhiyang kasalukuyang kailangan, at ang **ngayon na pagbabasa** ay lahat nasusukat batay sa Day Stem. Ang natitirang pitong karakter ay nagpapahiwatig ng 'anong kapaligiran ang kinalalagyan ng Day Stem'."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bakit ang Araw ng Kapanganakan?",
        "blocks": [
          {
            "p": "Ang Year Stem ay pareho para sa lahat na ipinanganak sa taong iyon, at ang Month Stem ay pareho para sa lahat na ipinanganak sa buwang iyon. Ang Day Stem ay nagbabago kapag nagbago ang araw, at ang tradisyunal na panghuhula ay itinuturing ang posisyong ito bilang Sarili mula pa noong Dinastiyang Song. Kung isasama ang Hour Stem, nagiging iba-iba ito kahit sa mga ipinanganak sa parehong araw."
          }
        ]
      },
      {
        "title": "Nahati ayon sa Solar Terms, Hindi sa Taon ng Kalendaryo",
        "blocks": [
          {
            "p": "Ang isang saju na taon ay hindi nagbabago sa Enero 1 kundi sa **Ipchun (tinatayang Pebrero 4)**. Ang buwan ay nahahati rin batay sa solar terms."
          },
          {
            "p": "Kaya, ang mga ipinanganak sa **Enero at unang bahagi ng Pebrero ay tumatanggap ng Year Stem ng nakaraang taon**. Dito nagmumula ang karaniwang hindi pagkakaintindihan tungkol sa mga zodiac signs. Ang parehong naaangkop kung ipinasok mo ang lunar birthday — ito ay kinoconvert pabalik sa solar at pagkatapos ay nahahati ayon sa solar terms."
          }
        ]
      },
      {
        "title": "Maaari Mo Itong Basahin Kahit Hindi Mo Alam ang Oras ng Kapanganakan",
        "blocks": [
          {
            "p": "Kung hindi mo ipinasok ang oras, ang pagbabasa ay batay sa tatlong pillars at anim na karakter, na hindi isinasama ang Hour Master. Hindi kami nag-iisip ng mga nawawalang halaga — ang arbitraryong pagtatalaga ng Hour Master ay maaaring makagambala sa lakas ng mga five elements, na nagreresulta sa maling konklusyon sa halip na potensyal na tumpak."
          },
          {
            "p": "Kung alam mo ang oras, mas mabuting isama ito. Dahil dalawang karakter ang idinadagdag sa walong, ang lakas at pagsusuri ng mga five elements ay maaaring magbago. Gayunpaman, hindi namin ginagamit ang oras ng orasan nang direkta kundi sa halip ay gumagamit ng [True Solar Time](/guide/true-solar-time)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang paraan ng pagbibilang ng walong karakter bilang mga five elements upang suriin ang lakas ay nagpapatuloy sa [Five Elements Strength and Strong/Weak Day Master](/guide/five-elements), habang ang paraan ng pagbabasa ng natitirang mga karakter batay sa Day Stem ay nagpapatuloy sa [Ten Gods](/guide/ten-gods)."
          }
        ]
      }
    ]
  },
  "guide/five-elements": {
    "eyebrow": "Five Elements",
    "title": "Lakas ng Five Elements at Strong/Weak Day Master",
    "summary": "Bibilangin namin ang walong karakter bilang mga five elements upang makita kung aling enerhiya ang malakas at aling mahina. Ipinapahayag namin ang mga threshold values (45%·35%) na tumutukoy sa lakas ng Day Stem.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Pagbibilang ng Walong Karakter bilang Limang Enerhiya",
        "blocks": [
          {
            "p": "Ang sampung Heavenly Stems at labindalawang Earthly Branches ay bawat isa ay nabibilang sa isa sa mga **Five Elements (五行)** — Kahoy (木), Apoy (火), Lupa (土), Metal (金), Tubig (水). Sa pamamagitan ng pagbibilang ng mga karakter sa orihinal na tsart ayon sa kanilang mga elemento, maaari nating matukoy kung aling enerhiya ang malakas at aling mahina."
          },
          {
            "p": "Gayunpaman, hindi lamang kami nagbibilang ng mga numero. Isinasama rin namin ang **kung ang buwan ng kapanganakan ay sumusuporta sa enerhiyang iyon**. Kahit ang parehong karakter ay maaaring magkaroon ng iba't ibang lakas depende sa kung ito ay nakakatugon sa kanyang panahon. Ito ay tinatawag na Month Sign (月令), at nahahati ito sa limang yugto: Wang (旺), Sang (相), Hyu (休), Su (囚), at Sa (死)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Saan Nagkakaiba ang Screen at Ulat",
        "blocks": [
          {
            "p": "Ang libreng screen ay nagpapakita lamang ng **lakas pagkatapos ng pagsasalamin sa Month Sign**. Ang mga halaga bago ang Month Sign at ang talahanayan ng Wang, Sang, Hyu, Su, at Sa ay kasama sa bayad na ulat — ito ay ibinibigay upang direktang suriin kung saan nagkakaiba ang pagsusuri."
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
            "p": "Ang mga enerhiyang naka-align sa Day Stem ay **Humanity at Companion** — ang mga enerhiyang nagbibigay-buhay sa akin at ang mga katulad ko. Dahil mayroong dalawa sa lima, kung walang bias, ito ay magiging nasa paligid ng {evenAllyRatio}. Sinusuri namin ang itaas at ibaba ng hangaring ito bilang balanse."
          },
          {
            "table": {
              "head": [
                "Ratio ng mga Enerhiyang Naka-align sa Day Stem",
                "Pagsusuri",
                "Ano ang Ibig Sabihin Nito?"
              ],
              "rows": [
                [
                  "{strongThreshold} o higit pa",
                  "Malakas na Araw na Panginoon (身强)",
                  "Ang mga enerhiyang sumusuporta sa Day Stem ay sagana."
                ],
                [
                  "{weakThreshold} o higit pa at mas mababa sa {strongThreshold}",
                  "Balanse (中和)",
                  "Mahirap tapusin sa alinmang direksyon."
                ],
                [
                  "Mas mababa sa {weakThreshold}",
                  "Mahinang Araw na Panginoon (身弱)",
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
            "p": "Ang pagiging malakas ay hindi nangangahulugang mabuti, at ang pagiging mahina ay hindi nangangahulugang masama. Kung malakas, may kapangyarihang itulak pasulong, ngunit madali itong tumagilid sa isang panig; kung mahina, mas madali itong manghiram ng lakas mula sa iba, ngunit maaaring mapagod nang madali kapag nag-iisa. **Ang mga kinakailangang enerhiya ay nag-iiba sa alinmang kaso.**"
          },
          {
            "p": "Ang pagtukoy sa 'kinakailangang enerhiya' ay ang supporting element, at nagpapatuloy ito sa [Supporting Element](/guide/yongsin)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Kung paano itinatag ang walong karakter ay nasa [Saju Original Chart](/guide/natal-chart). Kung paano nakikipag-ugnayan ang Day Master ngayon sa lakas na ito ay saklaw sa [Today's Reading](/guide/today-fortune)."
          }
        ]
      }
    ]
  },
  "guide/yongsin": {
    "eyebrow": "Supporting Element",
    "title": "Supporting Element — Ang Enerhiyang Kailangan Ngayon",
    "summary": "Kung ang Day Stem ay malakas, isinasaalang-alang namin ang enerhiyang bawasan; kung mahina, isinasaalang-alang namin ang enerhiyang sumusuporta bilang kinakailangan. Ito ay nagpapaliwanag kung paano pumili ng enerhiyang iyon at kung paano ito hawakan kapag balanse.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Hindi Sapat ang Limang Elemento Lamang",
        "blocks": [
          {
            "p": "May mga paraan upang sukatin kung ang limang elemento ay pantay na naipamahagi. Gayunpaman, ang talagang kailangan ay **ano ang kulang at ano ang labis sa saju na ito**."
          },
          {
            "p": "Ang isang saju na pantay ang pamamahagi ay hindi palaging komportable, ni ang isang saju na baluktot ay palaging mahirap. Ang direksyon ng baluktot at kung may elemento na makakapagpagaan dito ang siyang sangandaan."
          }
        ]
      },
      {
        "title": "Elementong Suporta — Bawasan Kung Labis, Dagdagan Kung Kulang",
        "blocks": [
          {
            "p": "Ang elementong suporta (用神) ay **ang enerhiyang kasalukuyang kailangan ng taong ito**. Mayroong ilang mga pamamaraan upang matukoy ito (pagbawas, pagdagdag, sakit, at pagkakaisa), ngunit ang pinaka-karaniwang ginagamit ay **pagbawas (抑扶)**. Kung ang day master ay malakas, pinaniniwalaan na kailangan ang enerhiyang dapat bawasan; kung mahina, kinakailangan ang enerhiyang dapat idagdag."
          },
          {
            "table": {
              "head": [
                "Husga",
                "Ano ang Kailangan",
                "Bilang ng Mga Uri"
              ],
              "rows": [
                [
                  "Malakas na Day Master (身强)",
                  "Enerhiyang Dapat Bawasan — Pagkain at Kayamanan, Posisyon sa Opisina",
                  "Tatlo"
                ],
                [
                  "Mahinang Day Master (身弱)",
                  "Enerhiyang Dapat Idagdag — Yaman, Kasama",
                  "Dalawa"
                ],
                [
                  "Balanseng (中和)",
                  "Hindi maaaring takpan sa pamamagitan ng pagbawas, kaya't ang pinakamahinang enerhiya",
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
            "p": "Ang bahagi ng day master ay **Yaman at Kasama** — ang enerhiyang nagbibigay-buhay sa akin at ang enerhiyang katulad ko. Dahil dalawa sa lima ang kasangkot, ang kumpletong balanse ay magiging {evenAllyRatio}. Ang lapad ay itinakda sa itaas at ibaba ng {evenAllyRatio}."
          },
          {
            "table": {
              "caption": "Ang Ratio ng mga Kaalyado (Yaman + Kasama) sa Kabuuang Lakas",
              "head": [
                "Ratio",
                "Husga"
              ],
              "rows": [
                [
                  "{strongThreshold} o higit pa",
                  "Malakas na Day Master"
                ],
                [
                  "{weakThreshold} o higit pa at mas mababa sa {strongThreshold}",
                  "Balanseng"
                ],
                [
                  "Mas mababa sa {weakThreshold}",
                  "Mahinang Day Master"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang Balanseng ay 'Mas Hindi Tiyak na Husga'",
        "blocks": [
          {
            "p": "Ang balanseng ay nangangahulugang hindi ito maaaring takpan sa pamamagitan ng pagbawas. Sa panahong ito, ang dalawang pinakamahinang enerhiya ay itinuturing na kinakailangan. Sa resulta ng screen, ito ay itinatala bilang 'kasalukuyang mahina ang posisyon' sa halip na isang tiyak na pahayag."
          }
        ]
      },
      {
        "title": "Ang Lakas ay Hindi ang Bilang ng mga Character",
        "blocks": [
          {
            "p": "Kapag binibilang ang lakas ng limang elemento, ang walong character ay hindi binibilang ayon sa kanilang hitsura. Ang mga halaga ay sumasalamin sa nakatagong heavenly stems (地藏干) sa loob ng earthly branches at ang panahon ng enerhiya ng buwan (月令) kung kailan ipinanganak."
          },
          {
            "p": "Ang pagbibilang lamang sa mga surface character ay nawawala ang katotohanan na kahit ang parehong 木 characters ay maaaring magkaroon ng ganap na magkakaibang lakas depende sa panahon. Ang 木 ng tagsibol at ang 木 ng taglagas, kahit na pareho ang character, ay may iba't ibang lakas."
          }
        ]
      },
      {
        "title": "Saan Gagamitin ang Elementong Suporta",
        "blocks": [
          {
            "p": "Ang natukoy na elementong suporta ay ginagamit sa dalawang lugar. Isa ay sa resulta ng screen na **'kasalukuyang kinakailangang enerhiya'**, at ang isa ay [ngayong kapalaran](/guide/today-fortune) — kung ang enerhiya ng araw na ito ay tumutugma sa elementong suporta ang siyang bagay na pinaka-nagpapagalaw ng iskor sa araw na iyon."
          }
        ]
      },
      {
        "title": "Ito ay Isang Simpleng Husga",
        "blocks": [
          {
            "p": "Ang aktwal na pagsusuri ng kapalaran ay isinasaalang-alang ang pormasyon at mga kondisyon ng panahon (ang init at halumigmig ng panahon) upang matukoy ang elementong suporta, at ang mga konklusyon ay maaaring magbago depende sa pamamaraan. Ang Saju-Link ay gumagamit lamang ng **pagbawas na maaaring sukatin sa pamamagitan ng mga halaga ng lakas**. Ito ay dahil sa prinsipyo ng paggamit lamang ng maaaring i-convert sa mga alituntunin, kaya't ang parehong input ay palaging magbibigay ng parehong sagot."
          },
          {
            "p": "Sa halip, ang resulta ng screen ay nagpapakita rin ng malakas at mahina na day master kasama ang kasalukuyang kinakailangang enerhiya bilang **mga materyales sa pagbabasa**. Ito ay upang maiwasan ang pagtatago ng batayan ng iskor."
          }
        ]
      }
    ]
  },
  "guide/ten-gods": {
    "eyebrow": "Ang Sampung Diyos",
    "title": "Ang Sampung Diyos — Ang Sampung Posisyon sa Aking Saju",
    "summary": "Batay sa day master, ang natitirang mga character ay hinati sa sampung pangalan. Tinalakay nito ang mga dahilan para sa pagkakaiba sa pagitan ng regular na kayamanan at panig na kayamanan, kahit na pareho silang elemento ng kayamanan.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang Day Master ay ang Tao Mismo",
        "blocks": [
          {
            "p": "Sa walong character ng saju, ang **day master** (ang heavenly stem ng araw ng kapanganakan) ay tumutukoy sa tao mismo. Ang natitirang pitong character ay binabasa bilang kapaligiran kung saan umiiral ang day master na iyon."
          },
          {
            "p": "**Ang Sampung Diyos** (十神) ay ang sampung dibisyon kung paano nakikita ng day master ang iba pang mga character. Ang enerhiyang nagpapalago sa akin ay Yaman, ang enerhiyang katulad ko ay Kasama, ang enerhiyang ipinapanganak ko ay Pagkain at Kayamanan, ang enerhiyang pumipigil sa akin ay Posisyon sa Opisina, at ang enerhiyang pinipigilan ko ay Kayamanan — ang limang sangay na ito ay higit pang hinati sa yin at yang, na bumubuo ng sampu."
          }
        ]
      },
      {
        "title": "Ano ang Ibig Sabihin ng Natitirang Pitong Character para sa Akin",
        "blocks": [
          {
            "p": "Kapag natukoy na ang day master, ang natitirang mga character sa orihinal na tsart ay bawat isa ay tumatanggap ng pangalan. Ang enerhiyang nagbibigay-buhay sa akin, ang enerhiyang katulad ko, ang enerhiyang ipinapanganak ko, ang enerhiyang pumipigil sa akin, at ang enerhiyang pinipigilan ko — ang limang sangay na ito ay higit pang hinati sa **sampu** sa pamamagitan ng yin at yang. Ito ang Sampung Diyos."
          },
          {
            "p": "Kaya, ang Sampung Diyos ay hindi tumutukoy sa mga relasyon sa iba kundi sa **mga posisyon sa loob ko**. Aling mga posisyon ang makapal o manipis ay nagpapahiwatig ng aking mga tendensya at ang aking paraan ng pamumuhay."
          }
        ]
      },
      {
        "title": "Ang Dahilan para Tingnan bilang Sampung Diyos sa Halip na Tatlong Elemento",
        "blocks": [
          {
            "p": "Mayroon ding isang paraan ng pagtingin sa ugnayan ng day stem sa pamamagitan lamang ng tatlong aspeto ng mga the five elements (five elements) (sumusuporta, pareho, at salungat). Ito ay simple, ngunit **nawawala ang yin at yang.** 甲 (yang wood) at 乙 (yin wood) ay nagiging pareho sa 甲, na isang representasyon ng 'pagkakapareho', at ang salungat na ugnayan ay pinagsama-sama sa isang solong marka na walang direksyon o yin at yang."
          },
          {
            "p": "Ang posisyon ng asawa ay dapat suriin ayon sa the Ten Gods (Ten Gods) sa mga tuntunin ng yin at yang. Kung ang mga bagay na tiningnan sa pamamagitan ng mga the five elements (five elements) ay pinagsama sa mga tiningnan sa pamamagitan ng the Ten Gods (Ten Gods) sa isang makina, magkakaroon ng dalawang pamantayan para sa parehong dalawang karakter. Samakatuwid, pinagsasama-sama natin ito sa ilalim ng the Ten Gods (Ten Gods)."
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa ay 정재 at 정관",
        "blocks": [
          {
            "p": "Ang tradisyonal na hula ay tinitingnan ang posisyon ng asawa nang iba batay sa kasarian. Para sa mga lalaki, ito ay **정재 (正財)**, at para sa mga babae, ito ay **정관 (正官)**. Kahit na sila ay parehong elemento ng kayamanan, tanging ang 정재 na hindi nakahanay sa yin at yang ang itinuturing na posisyon ng asawa, habang ang 편재 ay binabasa hindi bilang asawa kundi sa mga tuntunin ng aktibidad at kayamanan."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kung hindi mo tinukoy ang kasarian, ang posisyon na ito ay hindi isinasama",
        "blocks": [
          {
            "p": "Ito ay dahil hindi matutukoy kung aling panig, 정재 o 정관, ang dapat isaalang-alang bilang posisyon ng asawa. Sa halip na hulaan upang punan ang nawawalang halaga, binabasa natin ang natitirang mga bagay nang walang isa na iyon."
          }
        ]
      }
    ]
  },
  "guide/today-fortune": {
    "eyebrow": "Ang kapalaran ng araw",
    "title": "Paano lumabas ang kapalaran ng araw?",
    "summary": "Ang day stem ng araw ay inihahambing sa orihinal na tsart upang makakuha ng marka. Ang labindalawang relasyon ng mga sumusuportang elemento at ang pitong relasyon ng mga earthly branches, kasama ang lahat ng dalawampung bagay at ang kanilang mga kaukulang pagdaragdag at pagbabawas, ay ganap na isiniwalat.",
    "backLabel": "Batayan ng pagkalkula",
    "sections": [
      {
        "title": "Ngayon, itinatag din ito sa parehong paraan tulad ng walong karakter",
        "blocks": [
          {
            "p": "Bawat araw ay may sariling **일진 (日辰)**. Gamit ang parehong pamamaraan sa pagtatag ng day cycle ng orihinal na tsart, ngayon ay mayroon ding isang heavenly stem at isang earthly branch na nakakabit. Ang kapalaran ng araw ay tungkol sa paghahambing ng dalawang karakter na iyon sa orihinal na tsart."
          },
          {
            "p": "Ang base score ay **{baseScore} puntos**. Ang mga item sa ibaba ay idinadagdag at binabawasan, at sa wakas, ito ay nakapaloob sa pagitan ng {clampLow} puntos at {clampHigh} puntos — hindi natin binabanggit ang 0 puntos o 100 puntos."
          }
        ]
      },
      {
        "title": "① Ang enerhiya ng araw ba ay kailangan ko?",
        "blocks": [
          {
            "p": "Ito ang pinakamahalagang posisyon. Sinusuri natin kung ang enerhiya ng araw ay tumutugma sa 'enerhiyang kailangan sa kasalukuyan' na tinutukoy ng [억부용신](/guide/yongsin)."
          },
          {
            "table": {
              "head": [
                "Ang enerhiya ng araw ay",
                "Pagdaragdag/Pagbabawas"
              ],
              "rows": [
                [
                  "Ang enerhiyang kailangan sa kasalukuyan",
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
                  "Ito ay nagtutulak nang higit pa sa kasalukuyang umaapaw na bahagi",
                  "{todayIsGisin}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Huwag isaalang-alang ang 기신 bilang 'lahat maliban sa 용신'",
        "blocks": [
          {
            "p": "Kung gagawin mo iyon, parehong ang enerhiya na bumubuo sa 용신 at ang enerhiya na pumipigil sa 용신 ay nagiging masama, at ang huling dalawang hilera sa talahanayan sa itaas ay nagiging hindi matutukoy. Tanging ang enerhiya na **nagtutulak nang mas mahirap sa kabaligtaran na direksyon** ayon sa kahulugan ng 억부 ay nakikita bilang 기신."
          }
        ]
      },
      {
        "title": "② Ang relasyon sa pagitan ng heavenly stem ng araw at ng day stem",
        "blocks": [
          {
            "p": "Ang mga sumusuporta at salungat na ugnayan ng mga the five elements (five elements) ay direktang inilalapat sa pagitan ng day stem at ng heavenly stem ng ngayon."
          },
          {
            "table": {
              "head": [
                "Relasyon",
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
                  "Pinipigilan ko ang ngayon",
                  "{selfControls}"
                ],
                [
                  "Ako ay umaagos kasama ang ngayon",
                  "{selfGenerates}"
                ],
                [
                  "Ngayon ay pinipigilan ako",
                  "{controlsSelf}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "③ Ang earthly branch ng araw ay nakakatagpo sa mga earthly branches ng orihinal na tsart",
        "blocks": [
          {
            "p": "Ang earthly branch ng araw ay inihahambing sa mga earthly branches ng orihinal na tsart. Ang talahanayan ng relasyon mismo ay nasa [십이지 관계](/guide/branches)."
          },
          {
            "table": {
              "head": [
                "Relasyon",
                "Pagdaragdag/Pagbabawas"
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
                  "tahimik, pangmatagalang alitan (怨嗔)",
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
            "p": "Kapag may maraming haligi, maraming relasyon ang lumilitaw. Lahat ay idinadagdag, ngunit ang buong item na ito ay nakatali sa **±{branchMaxAbs} puntos** — ito ay upang maiwasan ang isang solong relasyon ng earthly branch na magtakda ng buong araw."
          }
        ]
      },
      {
        "title": "④ Pagwawasto Batay sa Lakas",
        "blocks": [
          {
            "p": "Kahit na pareho ang enerhiya, nag-iiba ang kahulugan para sa isang malakas na day master at isang mahina na day master. Samakatuwid, gumagawa kami ng isang huling pagsasaayos."
          },
          {
            "table": {
              "head": [
                "Sitwasyon",
                "Pagsasaayos"
              ],
              "rows": [
                [
                  "Mahinang day master ngunit ang araw na ito ay sumusuporta sa kanila",
                  "{weakTodayHelps}"
                ],
                [
                  "Malakas na day master ngunit ang araw na ito ay naaangkop na nagpapababa ng pasanin",
                  "{strongTodayDrains}"
                ],
                [
                  "Malakas na day master ngunit ang araw na ito ay nagpapalakas ng suporta",
                  "{strongTodayHelps}"
                ],
                [
                  "Mahinang day master ngunit ang araw na ito ay nagdaragdag sa pasanin",
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
                  "Napakabuting Kapalaran (大吉)"
                ],
                [
                  "{gradeGilMin} puntos o higit pa",
                  "Kapalaran (吉)"
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
            "p": "Ang apat na lugar ng kayamanan, pag-ibig, karera, at kalusugan ay nagmamana ng kabuuang iskor na {overallShare}, habang ang natitira ay hinati ayon sa Ten Gods at mga relasyon ng earthly branch na may kaugnayan sa mga lugar na iyon. Samakatuwid, kahit na pareho ang kabuuang iskor, ang mga numero ayon sa lugar ay nag-iiba mula sa tao sa tao."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang mga numerong ito ay lahat nabasa mula sa mga setting ng makina. Kung ang mga patakaran ay nagbago, ang dokumentong ito ay magbabago rin, at anumang pagbabago sa iskor ay unang ipapahayag sa [Pabatid](/notice)."
          }
        ]
      }
    ]
  },
  "guide/branches": {
    "eyebrow": "Talaan ng Relasyon",
    "title": "Mga Relasyon ng Earthly Branch — Pagsasama, Salpukan, at Alitan",
    "summary": "Ito ay isang talahanayan ng relasyon na nagpapakita kung paano nakikipag-ugnayan ang day master ng araw na ito sa natal chart. Ipinapakita nito kung ano ang bawat pagsasama, salpukan, at alitan at kung gaano karaming puntos ang mayroon sila.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang Earthly Branches ay Labindalawang Character",
        "blocks": [
          {
            "p": "Ang labindalawang earthly branches (十二支) ay 子 丑 寅 卯 辰 巳 午 未 申 酉 戌 亥. Ang mga karaniwang kilalang zodiac signs — Daga, Baka, Tigre, Kuneho, Dragon, Ahas, Kabayo, Tupa, Unggoy, Manok, Aso, Baboy — ay bawat isa ay nakakabit sa isa sa mga labindalawang character na ito."
          },
          {
            "figure": "branch-wheel",
            "caption": "Kapag ang labindalawang character ay inayos sa isang bilog, ang mga relasyon ay malinaw na nakikita. Ang salpukan (沖) ay palaging nakaharap sa isa't isa, habang ang anim na pagkakaisa at alitan ay mas malapit na pares. Ang mga linyang ito ay hindi nakasulat sa teksto kundi direkta mula sa mga patakaran ng kalkulasyon.",
            "labels": {
              "alt": "Isang diagram na nagpapakita ng labindalawang earthly branches na inayos sa isang bilog na may mga linya na nag-uugnay sa anim na pagkakaisa, salpukan, at alitan.",
              "yukhap": "Anim na Pagkakaisa",
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
            "p": "Sa saju, bawat isa sa apat na haligi ay may isang earthly branch. **Ang pagbasa para sa araw na ito** ay tinutukoy sa pamamagitan ng pagtutugma ng **branch ng araw** sa apat na branches ng orihinal na tsart gamit ang talahanayan ng relasyon sa ibaba."
          }
        ]
      },
      {
        "title": "Pangkalahatang Talahanayan ng Relasyon",
        "blocks": [
          {
            "table": {
              "caption": "Sa pagkakasunud-sunod ng pinakamataas na iskor. Ito ang mga halaga na ginagamit ng Saju-Link.",
              "head": [
                "Relasyon",
                "Kaukulang Pairs",
                "Kahulugan",
                "Iskor"
              ],
              "rows": [
                [
                  "Triad (三合)",
                  "申子辰 · 巳酉丑 · 寅午戌 · 亥卯未",
                  "Kapag ang lahat ng tatlong karakter ay nagtipon, bumubuo sila ng isang kumpletong elemental formation (局). Ito ay itinuturing na pinakamalakas na kumbinasyon.",
                  "{scoreSamhap}"
                ],
                [
                  "Six Harmony (六合)",
                  "子丑 · 寅亥 · 卯戌 · 辰酉 · 巳申 · 午未",
                  "Mga pares na umaakit sa isa't isa. Ito ang pinakakaraniwang kumbinasyon dahil binubuo ito ng tanging dalawang karakter.",
                  "{scoreYukhap}"
                ],
                [
                  "Half Triad (半合)",
                  "Dalawang karakter na may kasamang isa sa mga royal characters (子·酉·午·卯) mula sa triad",
                  "Isang kalahating kumbinasyon na may kasamang karakter na sentro sa formation. Hindi ito bumubuo ng kumpletong elemental formation sa dalawang karakter lamang, kaya't mas mababa ito kaysa sa triad.",
                  "{scoreBanhap}"
                ],
                [
                  "Same Branch",
                  "子子 · 丑丑 …",
                  "Mga karakter na pareho. Ibig sabihin nito ay magkapareho sila ngunit hindi nangangahulugang umaakit, kaya't inilalagay sila sa gitna.",
                  "{scoreSame}"
                ],
                [
                  "Walang Relasyon",
                  "Mga pares na hindi nabibilang saanman sa itaas o ibaba",
                  "Mga kumbinasyon na walang espesyal na relasyon. Ito ay nagsisilbing punto ng sanggunian.",
                  "{scoreNeutral}"
                ],
                [
                  "Tahimik na Alitan (怨嗔)",
                  "子未 · 丑午 · 寅酉 · 卯申 · 辰亥 · 巳戌",
                  "Mga pares na hindi makapaghiwalay sa kabila ng kanilang hindi pagkagusto. Mukha silang tahimik sa ibabaw ngunit itinuturing na tumatagal.",
                  "{scoreWonjin}"
                ],
                [
                  "Clash (沖)",
                  "子午 · 丑未 · 寅申 · 卯酉 · 辰戌 · 巳亥",
                  "Mga pares na nagkakaroon ng salpukan. Ito ay anim na pares na nagtatagpo.",
                  "{scoreChung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Triads at Half Triads",
        "blocks": [
          {
            "p": "Ang isang triad ay nangangailangan ng lahat ng tatlong karakter na naroroon. Dahil mayroong apat na earthly branches sa orihinal na tsart, posible na ang branch ng araw ay makipag-ugnayan sa kanila, na nagreresulta sa isang triad — sa panahong iyon, tumatanggap ito ng iskor na {scoreSamhap}. Kung dalawa lamang ang kasangkot, ito ay isang kalahating triad."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kailangan ng Kahaliling Triads ang mga Royal Characters upang Makilala",
        "blocks": [
          {
            "p": "Mayroon ding isang paraan na itinuturing na kalahating triad kung ang parehong karakter ay kabilang sa parehong grupo ng triad. Pinapayagan nito ang mga kumbinasyon tulad ng 申辰, na mahirap tawaging kumbinasyon, na makatanggap ng mataas na iskor. Samakatuwid, kinikilala ng serbisyong ito ang kalahating triad lamang kapag kasama nito ang mga royal characters (子·酉·午·卯), at hindi isinasaalang-alang ang mga kumbinasyon tulad ng 申辰·巳丑·寅戌·亥未 bilang wasto."
          }
        ]
      },
      {
        "title": "Dahilan sa Paghihiwalay ng Tahimik na Alitan",
        "blocks": [
          {
            "p": "Ang anim na pares ng tahimik na alitan ay nakikita nang madalas tulad ng mga salpukan. Kung bibilangin natin ang mga kumbinasyon ng parehong salpukan at kumbinasyon, ang mga anim na pares na ito ay lahat ililibing sa walang relasyon na iskor na {scoreNeutral}, kaya't inilalagay sila nang hiwalay."
          },
          {
            "p": "Kung ang mga salpukan ay mga pares na nagbanggaan ng harapan at maliwanag na ipinapakita, ang tahimik na alitan ay bahagyang hindi naka-align. Samakatuwid, inilalagay ito sa iskor na {scoreWonjin}, na mas mataas kaysa sa mga salpukan ({scoreChung}) ngunit tiyak na mas mababa kaysa sa walang relasyon ({scoreNeutral})."
          }
        ]
      },
      {
        "title": "Ang mga Iskor ay Ibinibigay din para sa mga Salpukan",
        "blocks": [
          {
            "p": "Ang pinakamababang iskor ng clash ay {scoreChung}. Ito ay sinadyang hindi bigyan ng halaga na malapit sa 0. Sa tradisyunal na 명리 (myeongri), ang clash ay hindi isang 'wakas' kundi isang 'banggaan', at ang pagbibigay ng iskor na malapit sa ibaba ay nangangahulugang ang serbisyo ay gumagawa ng tiyak na pahayag tungkol sa relasyon."
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
    "title": "Saan matatagpuan ang Tanda ng Zodiac sa Saju?",
    "summary": "Ang tanda ng zodiac ay ang earthly branch ng taon kung kailan ka ipinanganak. Ito ang nagpapaliwanag kung bakit ito ay kinuha mula sa taon ng saju sa halip na mula sa taon ng kalendaryo, at kung bakit ang mga ipinanganak sa maagang Enero o Pebrero ay may tanda ng zodiac ng nakaraang taon.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Ang tanda ng zodiac ay ang earthly branch ng taon kung kailan ka ipinanganak.",
        "blocks": [
          {
            "p": "Ang saju ay binubuo ng apat na haligi: taon, buwan, araw, at oras, kung saan ang bawat haligi ay may isang heavenly stem at isang earthly branch. Sa mga ito, ang **earthly branch ng taon**, o 연지 (year branch), ay ang hayop na tinutukoy natin bilang tanda ng zodiac."
          },
          {
            "table": {
              "caption": "Ang Labindalawang Earthly Branches at Tanda ng Zodiac",
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
            "p": "Ang punto kung saan nagbabago ang tanda ng zodiac ay hindi Enero 1 ng solar calendar o Lunar New Year. Ang pamantayan para sa pagbabago ng taon sa saju ay **Ipchun**. Samakatuwid, ang mga ipinanganak sa maagang Enero o Pebrero ay maaaring magkaroon ng ibang tanda ng zodiac kaysa sa ipinapakita ng kalendaryo."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang dahilan kung bakit hindi kami direktang nagtatanong para sa tanda ng zodiac.",
        "blocks": [
          {
            "p": "Ito ang dahilan kung bakit nagtatanong lamang kami para sa petsa ng kapanganakan nang hindi pinipili ang tanda ng zodiac sa input screen. Kapag kinakalkula ng saju engine ang taon, awtomatikong umaayon ito sa hangganan ng Ipchun. Kung pinili nang direkta, ang isang ipinanganak sa maagang Pebrero ay pipili ng tanda ng zodiac na hindi tumutugma sa kanilang aktwal na tanda."
          }
        ]
      },
      {
        "title": "Ang tanda ng zodiac ay isang karakter sa saju.",
        "blocks": [
          {
            "p": "Sa walong karakter, ang tumutugma sa tanda ng zodiac ay **isang 연지 (year branch)**. Ang iba pang pitong karakter — lalo na ang day stem na tumutukoy sa sarili — ay walang kaugnayan sa tanda ng zodiac."
          },
          {
            "p": "Ang mga taong ipinanganak sa parehong taon ay lahat ay may parehong tanda ng zodiac. Samakatuwid, ang maaaring malaman mula sa tanda ng zodiac ay kasing dami lamang ng isa sa walong karakter. Ito ang dahilan kung bakit ang serbisyong ito ay hindi **tinuturing ang tanda ng zodiac nang hiwalay o mahalaga** — ang 연지 (year branch) ay kinakalkula para sa lakas at paghatol sa today's 일진 (daily fortune) tulad ng anumang iba pang earthly branch."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Gayunpaman, ang dahilan kung bakit ipinapakita namin ang tanda ng zodiac.",
        "blocks": [
          {
            "p": "Ito ang tanging posisyon kung saan ang kahulugan ay nauunawaan kahit na hindi mo alam ang terminolohiya ng 명리 (myeongri). Kung ang tanda ng zodiac ay nakasulat kasama ang 연지 (year branch) sa orihinal na screen ng tsart, nagiging pahiwatig ito para sa pagbasa ng iba pang pitong karakter."
          }
        ]
      },
      {
        "title": "Ang year branch ay nananatiling pareho kahit na hindi mo alam ang oras ng kapanganakan.",
        "blocks": [
          {
            "p": "Kung hindi mo ipinasok ang oras, ang hour pillar ay inaalis at ang lakas ng 오행 (five elements) ay nagbabago. Gayunpaman, ang **year branch ay nananatiling pareho** — ito ay tinutukoy lamang ng taon kung kailan ka ipinanganak."
          },
          {
            "p": "Samakatuwid, ang kwento na nagmumula sa year branch ay hindi nagbabago kahit para sa mga hindi alam ang oras. Sa kabaligtaran, nangangahulugan ito na ang maaaring sabihin batay lamang sa tanda ng zodiac ay limitado, kahit na isama ang oras o hindi."
          }
        ]
      }
    ]
  },
  "guide/true-solar-time": {
    "eyebrow": "Oras",
    "title": "Ikinoconvert namin ang oras ng kapanganakan sa tunay na oras ng araw.",
    "summary": "Ang standard time at ang aktwal na posisyon ng araw ay magkaiba. Ito ang naglalarawan kung bakit ang oras ay dapat i-adjust ayon sa longitude ng lugar ng kapanganakan upang matiyak na tama ang hour pillar.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Iba ang oras sa orasan at ang solar time",
        "blocks": [
          {
            "p": "Ang oras na haligi ng saju (時柱) ay tinutukoy ng posisyon ng araw. Gayunpaman, ang orasan na nakikita natin ay gumagamit ng isang pamantayang oras para sa buong bansa, na hindi tumutugma sa aktwal na posisyon ng araw."
          },
          {
            "p": "Ang pamantayang oras ng Korea ay batay sa 135° silangang longhitud. Ang longhitud ng Seoul ay humigit-kumulang 127°, kaya't ito ay mga 8° sa kanluran, na nagiging sanhi ng pagkaantala ng pag-abot ng araw sa kanyang tuktok — kapag tanghali na sa orasan, ang araw sa Seoul ay bago pa ang kanyang tuktok. Ang pagkakaibang ito ay humigit-kumulang **32 minuto**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang 32 minuto ay nagbabago ng oras na haligi ng isang puwang",
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
            "p": "Kung iba ang longhitud, ang halaga ng pagsasaayos ay mag-iiba rin. Kung ilalapat mo ang pagsasaayos batay sa Seoul sa isang ipinanganak sa ibang bansa, ang oras na haligi ay magiging labis na hindi tumutugma. Samakatuwid, ang input screen ay humihiling sa iyo na piliin ang iyong lugar ng kapanganakan, at ang mga kalkulasyon ay ginagawa batay sa longhitud at pamantayang oras ng lungsod na iyon. Sa kasalukuyan, mayroong {cityCount} na mga lugar sa listahan."
          },
          {
            "p": "Kahit sa parehong bansa, ang mga lugar na may makabuluhang magkakaibang longhitud (tulad ng Estados Unidos, Russia, Indonesia, atbp.) ay nahati sa mga lungsod. **15° ng longhitud ay katumbas ng isang oras na haligi**."
          },
          {
            "p": "Kung hindi ka pumili, ang mga kalkulasyon ay gagawin batay sa Seoul. Karamihan sa mga kapanganakan ay domestiko, kaya't ito ay hindi gaanong madaling magkamali, ngunit kung ikaw ay ipinanganak sa ibang bansa, mangyaring siguraduhing pumili."
          }
        ]
      },
      {
        "title": "Ang pamantayang oras ay nagbago ng ilang beses sa nakaraan",
        "blocks": [
          {
            "p": "May dahilan kung bakit ang pagsasaayos ay hindi maaaring kalkulahin nang simple bilang \"pagkakaiba ng longhitud ÷ 15° × 60 minuto.\" Ang pamantayang oras mismo ay nagbago sa iba't ibang panahon."
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
                  "Naipatupad ang daylight saving time"
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
            "p": "Dahil ang pagsasaayos ay -32 minuto, ang mga ipinanganak sa pagitan ng 00:00 at 00:32 ayon sa orasan ay magiging **11 PM ng nakaraang araw** sa tunay na solar time. Kung ang oras lamang ang ibabawas at ang petsa ay mananatiling pareho, isusulat nito ang araw na haligi (日柱) bilang \"11 PM ng nakaraang araw.\""
          },
          {
            "p": "Ang Saju-Link ay iaangkop din ang petsa sa kasong ito. Ang karakter sa itaas ng araw na haligi ay tumutukoy sa day stem (日干), na nagpapakita ng aking sarili, kaya kung ito ay hindi tumutugma, halos lahat ng item sa interpretasyon ay hindi tumutugma."
          }
        ]
      },
      {
        "title": "Hindi mo kailangang malaman ang oras",
        "blocks": [
          {
            "p": "Ang oras ng kapanganakan ay opsyonal. Kung hindi mo ito alam, ang mga kalkulasyon ay gagawin nang walang oras na haligi, at ang katotohanang ito ay ipapakita sa screen ng mga resulta. Dahil nangangahulugan ito na dalawang sa walong karakter ang nawawala, ito ay makakaapekto sa pagtatasa ng lakas at kahinaan ng mga elemento, kaya kung alam mo ito, mas tumpak na isama ito."
          },
          {
            "p": "Ang year branch (띠) ay palaging pareho kahit anong oras — [dahil tinitingnan lamang natin ang year branch](/guide/zodiac)."
          }
        ]
      }
    ]
  },
  "guide/no-storage": {
    "eyebrow": "Personal na Impormasyon",
    "title": "Isang paraan na hindi nag-iimbak ng ipinasok na impormasyon",
    "summary": "Nililinaw nito kung ano ang teknikal na ibig sabihin na ang petsa ng kapanganakan ay hindi naitala kahit saan at kung ano ang nilalaman sa resulta na link.",
    "backLabel": "Batayan ng Kalkulasyon",
    "sections": [
      {
        "title": "Walang pagpaparehistro ng pagiging miyembro",
        "blocks": [
          {
            "p": "Ang Saju-Link ay hindi lumilikha ng mga account. Hindi ito nangangalap ng mga pangalan, email, o numero ng telepono. Ang tanging impormasyong nakolekta ay ang petsa ng kapanganakan at (opsyonal) oras ng kapanganakan, lugar ng kapanganakan, at kasarian, at ang impormasyong iyon ay hindi mananatili pagkatapos makumpleto ang kalkulasyon."
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
            "p": "Ang sumusunod sa **#** ay ang mga input values. Ang bahaging ito ay tinatawag na **fragment**, na isang seksyon na **hindi ipinapadala ng browser sa server**. Ito ay karaniwang pag-uugali ng web at hindi isang patakaran na nilikha namin — ito ay orihinal na dinisenyo upang ipakita ang isang posisyon sa loob ng isang dokumento, kaya't walang pangangailangan ang server na makita ito."
          },
          {
            "p": "Sa ibang salita, kapag binuksan mo ang resulta na link, binabasa ng browser ang halagang iyon upang humiling ng kalkulasyon, at ang aming server ay tumatanggap ng mga halaga upang gamitin para sa kalkulasyon, ibinabalik ang sagot, at pagkatapos ay nakakalimutan ito."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mangyaring mag-ingat kapag ipinapadala ang link sa iba",
        "blocks": [
          {
            "p": "Ang katotohanan na hindi ito nakaimbak sa server ay hindi nangangahulugang ang link ay ligtas. Ang resulta na link ay naglalaman ng mga petsa ng kapanganakan ng dalawang indibidwal, kaya't ang taong tumanggap ng link na iyon ay makikita ang parehong resulta."
          }
        ]
      },
      {
        "title": "Bakit ang kalkulasyon ay ginagawa sa server ngunit hindi nakaimbak?",
        "blocks": [
          {
            "p": "Ang kalkulasyon mismo ay ginagawa sa server. Ang talahanayan ng lunisolar almanac ay kinakailangan upang bumuo ng saju, at ang talahanayang iyon ay masyadong malaki upang maipadala sa browser. Gayunpaman, **pagkatapos iproseso ang kahilingan, hindi namin ginagamit ang halagang iyon kahit saan.** Walang code upang ipasok ito sa isang database."
          },
          {
            "p": "Ang pinakamababang mga tala na kinakailangan para sa operasyon ay pinananatili — isang counter upang maiwasan ang parehong tao na magpadala ng labis na mga kahilingan sa maikling panahon. Hindi ito kasama ang petsa ng kapanganakan, at ang access IP ay hindi pinananatili. Isang halaga lamang na hashed kasama ang petsa ang binibilang, at ang halagang iyon ay nagbabago kapag nagbago ang araw."
          }
        ]
      },
      {
        "title": "Mga bagay na hindi maaaring gawin dahil hindi nakaimbak ang impormasyon",
        "blocks": [
          {
            "p": "Sa totoo lang, may mga bagay na isinakripisyo dahil hindi kami nag-iimbak ng impormasyon."
          },
          {
            "ul": [
              "**Hindi mo maibabalik ang mga nakaraang resulta.** Kailangan mong magkaroon ng link upang muling makita ang mga ito.",
              "**Ang parehong mga halaga ay muling kakalkulahin.** Walang cache. Gayunpaman, dahil ang lahat ng mga patakaran ay deterministic, [ang parehong input ay palaging magbibigay ng parehong halaga](/guide/natal-chart).",
              "**Ang pag-refresh ay magdadala pabalik sa ad gate.** Ito ay dahil walang lugar upang iwanan ang kasaysayan ng pagtingin."
            ]
          }
        ]
      },
      {
        "title": "Kung ikaw ay bumili",
        "blocks": [
          {
            "p": "Kapag bumili ka ng ulat, isang tala ng transaksyon ang itatago. Ang pagbabayad ay napapailalim sa mga legal na panahon ng pagpapanatili, at kung walang kasaysayan ng order, hindi maiproseso ang mga refund. Gayunpaman, sa oras na ito, **ang petsa ng kapanganakan na ginamit para sa pagkalkula ng saju ay hindi ikakabit sa order** — ito ay hihingin muli kapag nilikha ang PDF pagkatapos ng kumpirmasyon ng pagbabayad."
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
    "summary": "Nililinaw nito kung ano ang idinagdag sa PDF habang pinapanatili ang screen na hindi nagbabago. Ang mga halaga at nilalaman ay nakuha mula sa aktwal na mga setting ng produkto.",
    "backLabel": "Batayan ng pagkalkula",
    "sections": [
      {
        "title": "Pinanatili ang screen na hindi nagbabago, idinagdag lamang sa PDF",
        "blocks": [
          {
            "p": "Ang pagkalkula ng saju at pagtatanong ng resulta ay **libre**. Makikita mo ang lahat sa screen, kabilang ang orihinal na tsart, ang mga five elements, ang kapalaran ngayon, at ang kanilang batayan, dahil walang naiwang impormasyon habang nililikha ang bayad na ulat."
          },
          {
            "p": "Ang papel ng ulat ay **magdagdag ng mga layer na hindi naroroon sa screen**. Ang mga layer na ito ay hindi gawa-gawa; sila ay mga halaga na na-kalkula na sa proseso ng pag-score ngunit hindi ginamit sa screen."
          }
        ]
      },
      {
        "title": "Lifetime saju at ulat ng kapalaran ngayong taon PDF — {priceDomestic}",
        "slot": "reportContents",
        "blocks": [
          {
            "p": "Domestic na pagbabayad {priceDomestic} (kasama ang VAT), internasyonal na pagbabayad {priceGlobal}. Binubuo ito ng {pageCount} A4 na pahina."
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
            "p": "Ipinapakita ng libreng screen ang orihinal na tsart, ang mga five elements, at ang kapalaran ngayon. Mayroong tatlong halaga na nalikha sa proseso ng pagkalkula ngunit hindi ipinapakita sa screen, at ito ang mga bahagi ng bayad na ulat."
          },
          {
            "ul": [
              "**Ratio ng kaginhawaan ng day stem** — Ipinapakita nito nang numerikal kung saan ginawa ang paghuhusga ng isang malakas o mahina na day master. Ang pangalan ng paghuhusga lamang ay hindi nagpapahiwatig kung ito ay nasa gilid o sapat.",
              "**Wang Sang Hyu Su Sa** — Gaano karaming ang buwan ng kapanganakan ang nagpasigla sa bawat enerhiya. Kung ang power bar ay nagpapahiwatig ng 'gaano karami ang naroroon', ang talahanayang ito ay nagpapahiwatig ng 'nasa panahon ba ito'.",
              "**Mga detalye ng pagwawasto ng tunay na oras ng araw** — Ang konsepto ay nasa dokumento ng gabay, ngunit **'ilang minuto ang inilipat sa iyong kaso'** ay ibang halaga para sa bawat tao, kaya ito ay kasama lamang sa ulat."
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
            "p": "Kaya, **mangyaring i-save ang file kaagad pagkatapos ng pagbabayad.** Maaari mo itong matanggap ng hanggang limang beses sa parehong order, ngunit kung umalis ka sa resulta ng screen at mawala ang mga input values, hindi ito maibabalik."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang mga ulat ay maaari ring maging mga materyales na sanggunian",
        "blocks": [
          {
            "p": "Hindi dahil sa tumaas ang bilang ng mga pahina ay nangangahulugang mas tiyak ang mga konklusyon. Ang idinadagdag ng ulat ay **ang batayan ng parehong pagkalkula**, hindi isang mas malakas na pahayag. Ang kapalaran ay isang larangan kung saan ang mga konklusyon ay maaaring mag-iba depende sa practitioner, at ang serbisyong ito ay nagkalkula lamang ng maaaring isalin sa mga alituntunin."
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
    "summary": "Ito ang channel para sa mga katanungan tungkol sa paggamit, mga refund, mga kahilingan sa personal na impormasyon, at mga ulat ng error, kasama ang impormasyon sa negosyo.",
    "backLabel": "Bumalik sa simula",
    "sections": [
      {
        "title": "Makipag-ugnayan sa pamamagitan ng email",
        "blocks": [
          {
            "p": "Mangyaring ipadala ang mga katanungan sa **{email}**. Kami ay tutugon sa loob ng 2 araw ng negosyo. Para sa mga katanungan sa pagbabayad at refund, mangyaring isama ang **ang numero ng order o ang email na ginamit para sa pagbabayad** para sa mas mabilis na kumpirmasyon."
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
              "**Pagbabayad at refund** — Kung ang dokumento ay hindi nalikha o ang halaga ng pagbabayad ay naiiba mula sa order, isang buong refund ang ibibigay. Ang mga kondisyon ay nasa [Patakaran sa Refund](/refund-policy).",
              "**Personal na impormasyon** — Tumatanggap kami ng mga kahilingan para sa pagtingin, pagwawasto, at pagtanggal. Ang patakaran sa pagproseso ay nasa [Patakaran sa Privacy](/privacy).",
              "**Ulat ng pagkakamali sa pagkalkula** — Kung ang orihinal na tsart ng saju o mga score ay tila kakaiba, mangyaring ipaalam sa amin. Kung isasama mo kung kailan mo ipinasok ang petsa at oras ng kapanganakan, maaari naming muling kalkulahin gamit ang parehong mga halaga."
            ]
          }
        ]
      },
      {
        "title": "Impormasyon sa negosyo",
        "blocks": [
          {
            "ul": [
              "**Pangalan ng negosyo** — {companyName}",
              "**Kinatawan** — {representative}",
              "**Numero ng rehistrasyon ng negosyo** — {businessNumber}",
              "**Numero ng rehistrasyon ng mail order business** — {mailOrderNumber}",
              "**Address** — {address}",
              "**Customer center** — {customerCenter}",
              "**Email** — {email}",
              "**Opisyal sa proteksyon ng personal na impormasyon** — {privacyOfficer}",
              "**Hosting provider** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Walang pangangailangan na isama ang iyong petsa at oras ng kapanganakan sa email ng katanungan. Hindi namin iniimbak ang mga input, kaya hindi namin ito maibabalik sa ibang pagkakataon, at ang kailangan ng kumpirmasyon ay sapat na sa numero ng order. Mangyaring isama lamang ito kapag ang mga halaga ay talagang kinakailangan, tulad sa isang ulat ng pagkakamali sa pagkalkula."
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
    "support": "Pagtatanong"
  },
  "intro": "Ang mga pagbabago na nakakaapekto sa mga kondisyon ng paggamit, tulad ng mga presyo at mga tuntunin, ay ilalathala dito bago ang pagpapatupad. Maraming mga panloob na pagpapabuti, tulad ng mas mabilis na screen — tanging ang mga kailangan mong malaman ang itatala dito.",
  "empty": {
    "title": "Walang mga ulat na nailathala.",
    "body": "Kung mayroong anumang mga pagbabago na dapat ipaalam sa iyo, ilalathala ito dito."
  },
  "effective": "Epektibo mula {date}",
  "pager": {
    "label": "Pahina ng ulat",
    "newer": "← Pinakabago",
    "older": "Mga nakaraang ulat →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Bukas na ang bintana ng pagtatanong at pahina ng pagpapakilala ng serbisyo.",
      "body": [
        "Nakapagsama kami ng isang bintana para sa mga pagtatanong, refund, mga kahilingan sa personal na impormasyon, at pag-uulat ng mga pagkakamali sa pagkalkula. Maaari mo itong suriin sa ibaba ng screen sa ilalim ng 'Magtanong'.",
        "Kapag ipinaalam mo sa amin ang isang bagay na tila pagkakamali sa pagkalkula, mangyaring isama ang petsa at oras ng kapanganakan na iyong ipinasok. Hindi namin sine-save ang input, kaya kung wala ang halagang iyon, hindi kami makakapag-recalculate."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Sa mga screen na Arabic at Khmer, ang ulat ay gagawin sa Ingles.",
      "body": [
        "Kung tinitingnan mo ang screen sa Arabic o Khmer, ang PDF na ulat na iyong binili ay gagawin sa Ingles. Ito ay dahil hindi pa kayang i-format ng tool na ito ang dalawang script na ito sa mga talata.",
        "Maaari mo pa ring makita ang screen gaya ng dati, at ang pangalan na nakasulat sa ulat ay eksaktong gaya ng iyong ipinasok.",
        "Ang parehong impormasyon ay ibinibigay din nang maaga sa screen ng pagbabayad. Ipapaalam namin sa iyo dito kapag sinusuportahan ng tool na ito ang mga script na ito."
      ]
    },
    "2026-08-01-engine-version": {
      "title": "Isasama ang mga pamantayan ng pagkalkula sa mga resulta.",
      "body": [
        "Sa ibaba ng screen ng mga resulta at ulat, ang mga pamantayan ng pagkalkula (hal., sajulink-natal-v1) ay itinatala. Kung pareho ang input, palaging lalabas ang parehong halaga sa ilalim ng parehong pamantayan.",
        "Kung ang mga patakaran para sa pag-unawa sa 명리 (myeongri) ay nagbago at maaaring magkaiba ang mga marka, unang ilalathala namin ang katotohanang iyon at ang epektibong petsa dito. Ito ay dahil ang mga numero sa mga link ng resulta na natanggap mo dati ay maaaring magbago.",
        "Ang kasalukuyang pamantayan ay v10, at ang pagbabayad ay nasa paghahanda pa."
      ]
    }
  }
} satisfies NoticeCopy;
