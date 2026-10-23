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
        "blocks": [
          {
            "p": "Isinusulat ng Saju ang taon, buwan, araw at oras ng iyong kapanganakan sa tig-dalawang karakter na Tsino, walong karakter sa kabuuan. Ang itaas na karakter ng bawat pares ay tinatawag na **heavenly stem**, ang ibaba ay ang **earthly branch**, at ang dalawang karakter ng araw na ipinanganak ka ay tinatawag na **Day Pillar**. Kung bago pa sa iyo ang mga terminong ito, magsimula sa [Heavenly Stems, Earthly Branches at Day Pillar — Paano Basahin ang mga Karakter ng Saju](/guide/saju-letters)."
          },
          {
            "ul": [
              "**Mga heavenly stem** — ang sampung itaas na karakter ng Saju. May takdang elemento at polarity ang bawat isa, at ang stem ng araw na ipinanganak ka ang day stem na tumutukoy sa iyo.",
              "**Mga earthly branch** — ang labindalawang ibabang karakter ng Saju, ang parehong karakter ng mga zodiac animal. Bawat branch ay may hidden stems (支藏干) sa loob nito.",
              "**Mga day pillar** — ang pares na nabuo ng stem at branch ng araw na ipinanganak ka. May 60 sa mga ito, mula 甲子 hanggang 癸亥, at bawat isa ay may sariling entry. Makikita mo ang mga ito sa mga nakatiklop na listahan sa ibaba."
            ]
          }
        ]
      },
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
  "guide/examples": {
    "eyebrow": "Mga Halimbawa",
    "title": "Pagbasa ng Chart sa Pamamagitan ng Halimbawa — Tatlong Totoong Resulta ng Kalkulasyon",
    "summary": "Tatlong gawa-gawang petsa ng kapanganakan ang pinatakbo sa engine ng Saju-Link at ipinapakita nang eksakto ayon sa kinalkula, kasama ang paliwanag sa pagkakasunod-sunod ng pagbasa sa apat na haligi, sa day master at sa lakas ng limang elemento.",
    "backLabel": "Paano kami nagkakalkula",
    "sections": [
      {
        "title": "Ano ang mga halimbawang ito",
        "blocks": [
          {
            "p": "Hindi totoong tao ang tatlong nasa ibaba. Pinili ang kanilang mga petsa ng kapanganakan upang ilarawan ang isang punto. Iginuhit ang mga resulta gamit ang **parehong engine ng kalkulasyon at parehong mga component ng screen** na nagpapakita ng libreng resulta kapag inilagay mo ang sarili mong petsa ng kapanganakan, kaya tugma ang makikita mo rito sa makukuha mo."
          },
          {
            "p": "Ipinapakita ng libreng screen ang apat na haligi, ang day master at ang lakas ng limang elemento. Kung malakas o mahina ang day master (strong / weak chart) at kung aling elemento ang kailangan dahil doon (ang balancing element) ay bahagi ng bayad na ulat ([Ano ang kasama sa bayad na ulat](/guide/reports)), kaya hindi rin ito ipinapakita sa mga halimbawang ito."
          },
          {
            "p": "Binabasa ang bawat halimbawa sa parehong pagkakasunod-sunod. Una, hanapin sa apat na haligi ang day master — ang heavenly stem ng araw ng iyong kapanganakan. Pagkatapos, tingnan ang pinakamalakas at pinakamahinang elemento sa bar, at panghuli, ipatong ang season ng buwan ng kapanganakan. Kung bago sa iyo ang mga karakter, magsimula sa [Heavenly Stems, Earthly Branches at Day Pillar — Paano Basahin ang mga Karakter ng Saju](/guide/saju-letters)."
          }
        ]
      },
      {
        "title": "Halimbawa 1 — {exADayMaster}: magkaiba ang day master at ang pinakamalakas na elemento",
        "slot": "exampleA",
        "blocks": [
          {
            "p": "Ang kathang-isip na kapanganakan ay {exABirth} (solar calendar). Ang chart ay may year pillar na {exAYear}, month pillar na {exAMonth}, day pillar na {exADay} at hour pillar na {exAHour}."
          },
          {
            "p": "Ang heavenly stem ng araw ng kapanganakan ang day master — dito ay {exADayMaster} ({exADayElement}). Ang isang linyang ugali na iniuugnay ng Saju-Link sa bawat day master ay ganito: {exATrait}"
          },
          {
            "p": "Sa element bar, ang pinakamalaking bahagi ay {exAStrongest} sa {exAStrongestPct} at ang pinakamaliit ay {exAScarcest} sa {exAScarcestPct}. Ang elemento ng day master ay {exADayElement}, ngunit ang pinakamalakas na elemento ay {exAStrongest}. **Maaaring magkaiba ang elemento ng day master at ang pinakamalakas na elemento** — iyon ang punto ng halimbawang ito."
          },
          {
            "p": "Ang season ng buwan ng kapanganakan ay {exASeason}, kapareho ng panig ng pinakamalakas na elemento. Bahagi ng kalkulasyon ng lakas kung paano itinataas ng season ang isang elemento, at inilalarawan ang paraan sa [Balancing Element — Ang Enerhiya na Kailangan Ngayon](/guide/yongsin)."
          },
          {
            "p": "Ang mga stem na nakatago sa loob ng day branch ({exADayBranch}) ay {exAHiddenStems}. Binibilang ang hidden stems sa lakas ng bawat elemento, kaya kung walong nakikitang karakter lang ang bibilangin mo, maaaring mukhang hindi tugma ang bar."
          },
          {
            "p": "Para sa halimbawang ito, ang iba pang mga entry na sulit basahin ay [Yin na Kahoy (乙) — Kahoy, Yin](/guide/stem-eul), [Ang Day Pillar na 乙亥](/guide/pillar-eul-hae) at [亥 — ang branch ng Baboy](/guide/branch-hae)."
          }
        ]
      },
      {
        "title": "Halimbawa 2 — {exBDayMaster}: isang chart na may nawawalang elemento",
        "slot": "exampleB",
        "blocks": [
          {
            "p": "Ang kathang-isip na kapanganakan ay {exBBirth} (solar calendar). Ang chart ay may year pillar na {exBYear}, month pillar na {exBMonth}, day pillar na {exBDay} at hour pillar na {exBHour}."
          },
          {
            "p": "Ang heavenly stem ng araw ng kapanganakan ang day master — dito ay {exBDayMaster} ({exBDayElement}). Ang isang linyang ugali na iniuugnay ng Saju-Link sa bawat day master ay ganito: {exBTrait}"
          },
          {
            "p": "Sa element bar, ang bahagi ng {exBScarcest} ay {exBScarcestPct}, ibig sabihin halos hindi ito makita sa bar. Hiwalay na itinuturo ng Saju-Link ang ganitong elemento bilang pinakamahina. Ang pinakamalaking bahagi naman ay {exBStrongest} sa {exBStrongestPct}."
          },
          {
            "p": "Ang season ng buwan ng kapanganakan ay {exBSeason}. Magkakaiba ang elemento ng day master ({exBDayElement}), ang pinakamalakas na elemento ({exBStrongest}) at ang season ({exBSeason}), kaya magandang halimbawa ito para basahin nang hiwalay ang tatlo."
          },
          {
            "p": "Ang year branch ({exBYearBranch}) ay tumutugma sa hayop na {exBAnimal}. Ang hayop ay isa lamang sa walong karakter — ang year branch. Mas marami pa sa [Nasaan ang Tanda ng Zodiac sa Saju?](/guide/zodiac)."
          },
          {
            "p": "Para sa halimbawang ito, ang iba pang mga entry na sulit basahin ay [Yin na Lupa (己) — Lupa, Yin](/guide/stem-gi), [Ang Day Pillar na 己酉](/guide/pillar-gi-yu) at [酉 — ang branch ng Manok](/guide/branch-yu)."
          }
        ]
      },
      {
        "title": "Halimbawa 3 — {exCDayMaster}: isang chart na lubhang nakahilig sa isang panig",
        "slot": "exampleC",
        "blocks": [
          {
            "p": "Ang kathang-isip na kapanganakan ay {exCBirth} (solar calendar). Ang chart ay may year pillar na {exCYear}, month pillar na {exCMonth}, day pillar na {exCDay} at hour pillar na {exCHour}."
          },
          {
            "p": "Ang heavenly stem ng araw ng kapanganakan ang day master — dito ay {exCDayMaster} ({exCDayElement}). Ang isang linyang ugali na iniuugnay ng Saju-Link sa bawat day master ay ganito: {exCTrait}"
          },
          {
            "p": "Ang elemento ng day master, ang pinakamalakas na elemento at ang season ay nagtitipon lahat sa panig ng {exCStrongest}. Sa element bar, ang bahagi ng {exCStrongest} ay {exCStrongestPct}, at ang pinakamaliit, ang {exCScarcest}, ay may {exCScarcestPct}."
          },
          {
            "p": "Ang matinding pagkahilig sa isang panig ay hindi nagsasabi ng mabuti o masama sa sarili nito. Hiwalay na napagpapasyahan kung pabigat o lakas ito para sa day master sa pamamagitan ng strong / weak na pagsusuri at ng balancing element — nakalathala ang mga pamantayan sa [Balancing Element — Ang Enerhiya na Kailangan Ngayon](/guide/yongsin), at ang mismong pagsusuri ay nasa bayad na ulat ([Ano ang kasama sa bayad na ulat](/guide/reports))."
          },
          {
            "p": "Ang mga stem na nakatago sa loob ng day branch ({exCDayBranch}) ay {exCHiddenStems}."
          },
          {
            "p": "Para sa halimbawang ito, ang iba pang mga entry na sulit basahin ay [Yin na Apoy (丁) — Apoy, Yin](/guide/stem-jeong), [Ang Day Pillar na 丁亥](/guide/pillar-jeong-hae) at [亥 — ang branch ng Baboy](/guide/branch-hae)."
          }
        ]
      },
      {
        "title": "Subukan gamit ang sarili mong chart",
        "blocks": [
          {
            "p": "Ilagay ang iyong petsa at oras ng kapanganakan sa [Saju na Pagbasa](/reading) at makakakuha ka ng resultang binuo sa parehong paraan ng mga halimbawang ito. Hindi iniimbak sa aming mga server ang mga halagang inilalagay mo — inilalarawan ang paraan sa [Isang paraan na hindi nag-iimbak ng naipasok na impormasyon](/guide/no-storage)."
          },
          {
            "p": "Para ipatong ang day pillar ngayon sa iyong chart, gamitin ang [Suwerteng araw na ito](/today)."
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Gawa-gawa lamang para sa paglalarawan ang mga petsa ng kapanganakan sa mga halimbawang ito, at ang mga resulta ay para sa sanggunian. Hindi kasama ang mga halagang nagbabago araw-araw, gaya ng suwerte ngayong araw."
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
  "guide/stem-gap": {
    "eyebrow": "Mga heavenly stem",
    "title": "Yang na Kahoy (甲) — Kahoy, Yang",
    "summary": "Ang elemento at polarity ng heavenly stem na 甲, kung paano nito binabasa ang siyam na iba pang stem (ang Ten Gods), at kung aling mga earthly branch ang may hawak nito — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Yang na Kahoy (甲) ay ang una sa sampung heavenly stem",
        "blocks": [
          {
            "p": "Ang 甲 ay ang una sa sampung heavenly stem. Ang elemento nito ay Kahoy at ang polarity nito ay Yang. Tinatawag ng Saju-Link ang taong ang day stem ay 甲 na \"Yang na Kahoy (甲)\"."
          },
          {
            "p": "Ang linyang ipinapakita ng screen ng resulta para sa day stem na ito ay: \"Matayog na punong tuwid ang tubo. Kapag naitakda na ang direksyon, hindi na ito nag-aalangan, at mas pipiliing magtiis kaysa yumuko.\" Walang kinalaman ang linyang ito sa talahanayan o sa mga iskor sa ibaba."
          }
        ]
      },
      {
        "title": "Paano nito binabasa ang iba pang stem (ang Ten Gods)",
        "blocks": [
          {
            "p": "Kapag ang 甲 ang day stem, ganito binabasa ang bawat isa sa sampung stem. May direksyon ang pagbasa: ganito binabasa ng 甲 ang kabilang stem, at kapag binasa naman ng kabilang stem ang 甲, maaaring lumabas ang ibang pangalan."
          },
          {
            "table": {
              "caption": "Ten Gods kapag ang Yang na Kahoy (甲) ang day stem",
              "head": [
                "Ibang stem",
                "Elemento at polarity",
                "Pangalan sa Ten Gods"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "Pag-aaruga (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga stem na binabasa bilang posisyon ng asawa",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 甲 ang day stem, ang Matatag na yaman ay 己 at ang Awtoridad ay 辛. Kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
          }
        ]
      },
      {
        "title": "Ang mga branch na may hawak ng 甲",
        "blocks": [
          {
            "p": "Dito nakatago ang 甲 sa loob ng mga earthly branch (ang hidden stems). Ang bahagi ay ang proporsyon ng tatlumpung araw ng branch na iyon na kinukuha ng 甲."
          },
          {
            "table": {
              "caption": "Ang mga branch na may hawak ng 甲",
              "head": [
                "Branch",
                "Hayop",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "pangunahin (本氣)",
                  "{hidInBon}"
                ],
                [
                  "卯",
                  "Kuneho",
                  "natitira (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "亥",
                  "Baboy",
                  "gitna (中氣)",
                  "{hidHaeJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang stem kung sino ang isang tao. Binabasa ang saju mula sa ugnayan ng walong karakter nito.",
              "Ang Ten Gods ay isang pagtatasa na ginagawa mula sa day stem. Ang parehong dalawang karakter ay nagkakaroon ng ibang pangalan depende sa kung alin ang day stem."
            ]
          },
          {
            "p": "Ang buong Ten Gods ay nasa [gabay sa Ten Gods](/guide/ten-gods), at ang lakas ng mga elemento at ang month sign ay nasa [gabay sa five elements](/guide/five-elements). Iba pang stem: [Yin na Kahoy (乙)](/guide/stem-eul) · [Yang na Apoy (丙)](/guide/stem-byeong) · [Yin na Apoy (丁)](/guide/stem-jeong) · [Yang na Lupa (戊)](/guide/stem-mu) · [Yin na Lupa (己)](/guide/stem-gi) · [Yang na Metal (庚)](/guide/stem-gyeong) · [Yin na Metal (辛)](/guide/stem-sin) · [Yang na Tubig (壬)](/guide/stem-im) · [Yin na Tubig (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-eul": {
    "eyebrow": "Mga heavenly stem",
    "title": "Yin na Kahoy (乙) — Kahoy, Yin",
    "summary": "Ang elemento at polarity ng heavenly stem na 乙, kung paano nito binabasa ang siyam na iba pang stem (ang Ten Gods), at kung aling mga earthly branch ang may hawak nito — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Yin na Kahoy (乙) ay ang ikalawa sa sampung heavenly stem",
        "blocks": [
          {
            "p": "Ang 乙 ay ang ikalawa sa sampung heavenly stem. Ang elemento nito ay Kahoy at ang polarity nito ay Yin. Tinatawag ng Saju-Link ang taong ang day stem ay 乙 na \"Yin na Kahoy (乙)\"."
          },
          {
            "p": "Ang linyang ipinapakita ng screen ng resulta para sa day stem na ito ay: \"Baging — malambot na damo. Yumuyuko ito ayon sa sitwasyon para makasulong, at hindi napipigtas.\" Walang kinalaman ang linyang ito sa talahanayan o sa mga iskor sa ibaba."
          }
        ]
      },
      {
        "title": "Paano nito binabasa ang iba pang stem (ang Ten Gods)",
        "blocks": [
          {
            "p": "Kapag ang 乙 ang day stem, ganito binabasa ang bawat isa sa sampung stem. May direksyon ang pagbasa: ganito binabasa ng 乙 ang kabilang stem, at kapag binasa naman ng kabilang stem ang 乙, maaaring lumabas ang ibang pangalan."
          },
          {
            "table": {
              "caption": "Ten Gods kapag ang Yin na Kahoy (乙) ang day stem",
              "head": [
                "Ibang stem",
                "Elemento at polarity",
                "Pangalan sa Ten Gods"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "Di-karaniwang suporta (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga stem na binabasa bilang posisyon ng asawa",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 乙 ang day stem, ang Matatag na yaman ay 戊 at ang Awtoridad ay 庚. Kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
          }
        ]
      },
      {
        "title": "Ang mga branch na may hawak ng 乙",
        "blocks": [
          {
            "p": "Dito nakatago ang 乙 sa loob ng mga earthly branch (ang hidden stems). Ang bahagi ay ang proporsyon ng tatlumpung araw ng branch na iyon na kinukuha ng 乙."
          },
          {
            "table": {
              "caption": "Ang mga branch na may hawak ng 乙",
              "head": [
                "Branch",
                "Hayop",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "卯",
                  "Kuneho",
                  "pangunahin (本氣)",
                  "{hidMyoBon}"
                ],
                [
                  "辰",
                  "Dragon",
                  "natitira (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "未",
                  "Tupa",
                  "gitna (中氣)",
                  "{hidMiJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang stem kung sino ang isang tao. Binabasa ang saju mula sa ugnayan ng walong karakter nito.",
              "Ang Ten Gods ay isang pagtatasa na ginagawa mula sa day stem. Ang parehong dalawang karakter ay nagkakaroon ng ibang pangalan depende sa kung alin ang day stem."
            ]
          },
          {
            "p": "Ang buong Ten Gods ay nasa [gabay sa Ten Gods](/guide/ten-gods), at ang lakas ng mga elemento at ang month sign ay nasa [gabay sa five elements](/guide/five-elements). Iba pang stem: [Yang na Kahoy (甲)](/guide/stem-gap) · [Yang na Apoy (丙)](/guide/stem-byeong) · [Yin na Apoy (丁)](/guide/stem-jeong) · [Yang na Lupa (戊)](/guide/stem-mu) · [Yin na Lupa (己)](/guide/stem-gi) · [Yang na Metal (庚)](/guide/stem-gyeong) · [Yin na Metal (辛)](/guide/stem-sin) · [Yang na Tubig (壬)](/guide/stem-im) · [Yin na Tubig (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-byeong": {
    "eyebrow": "Mga heavenly stem",
    "title": "Yang na Apoy (丙) — Apoy, Yang",
    "summary": "Ang elemento at polarity ng heavenly stem na 丙, kung paano nito binabasa ang siyam na iba pang stem (ang Ten Gods), at kung aling mga earthly branch ang may hawak nito — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Yang na Apoy (丙) ay ang ikatlo sa sampung heavenly stem",
        "blocks": [
          {
            "p": "Ang 丙 ay ang ikatlo sa sampung heavenly stem. Ang elemento nito ay Apoy at ang polarity nito ay Yang. Tinatawag ng Saju-Link ang taong ang day stem ay 丙 na \"Yang na Apoy (丙)\"."
          },
          {
            "p": "Ang linyang ipinapakita ng screen ng resulta para sa day stem na ito ay: \"Araw sa tanghaling tapat. Hayag ang damdamin, lumiliwanag ang paligid, at natural lang ang pag-una sa harapan.\" Walang kinalaman ang linyang ito sa talahanayan o sa mga iskor sa ibaba."
          }
        ]
      },
      {
        "title": "Paano nito binabasa ang iba pang stem (ang Ten Gods)",
        "blocks": [
          {
            "p": "Kapag ang 丙 ang day stem, ganito binabasa ang bawat isa sa sampung stem. May direksyon ang pagbasa: ganito binabasa ng 丙 ang kabilang stem, at kapag binasa naman ng kabilang stem ang 丙, maaaring lumabas ang ibang pangalan."
          },
          {
            "table": {
              "caption": "Ten Gods kapag ang Yang na Apoy (丙) ang day stem",
              "head": [
                "Ibang stem",
                "Elemento at polarity",
                "Pangalan sa Ten Gods"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "Awtoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga stem na binabasa bilang posisyon ng asawa",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丙 ang day stem, ang Matatag na yaman ay 辛 at ang Awtoridad ay 癸. Kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
          }
        ]
      },
      {
        "title": "Ang mga branch na may hawak ng 丙",
        "blocks": [
          {
            "p": "Dito nakatago ang 丙 sa loob ng mga earthly branch (ang hidden stems). Ang bahagi ay ang proporsyon ng tatlumpung araw ng branch na iyon na kinukuha ng 丙."
          },
          {
            "table": {
              "caption": "Ang mga branch na may hawak ng 丙",
              "head": [
                "Branch",
                "Hayop",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "gitna (中氣)",
                  "{hidInJung}"
                ],
                [
                  "巳",
                  "Ahas",
                  "pangunahin (本氣)",
                  "{hidSaBon}"
                ],
                [
                  "午",
                  "Kabayo",
                  "natitira (餘氣)",
                  "{hidOYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang stem kung sino ang isang tao. Binabasa ang saju mula sa ugnayan ng walong karakter nito.",
              "Ang Ten Gods ay isang pagtatasa na ginagawa mula sa day stem. Ang parehong dalawang karakter ay nagkakaroon ng ibang pangalan depende sa kung alin ang day stem."
            ]
          },
          {
            "p": "Ang buong Ten Gods ay nasa [gabay sa Ten Gods](/guide/ten-gods), at ang lakas ng mga elemento at ang month sign ay nasa [gabay sa five elements](/guide/five-elements). Iba pang stem: [Yang na Kahoy (甲)](/guide/stem-gap) · [Yin na Kahoy (乙)](/guide/stem-eul) · [Yin na Apoy (丁)](/guide/stem-jeong) · [Yang na Lupa (戊)](/guide/stem-mu) · [Yin na Lupa (己)](/guide/stem-gi) · [Yang na Metal (庚)](/guide/stem-gyeong) · [Yin na Metal (辛)](/guide/stem-sin) · [Yang na Tubig (壬)](/guide/stem-im) · [Yin na Tubig (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-jeong": {
    "eyebrow": "Mga heavenly stem",
    "title": "Yin na Apoy (丁) — Apoy, Yin",
    "summary": "Ang elemento at polarity ng heavenly stem na 丁, kung paano nito binabasa ang siyam na iba pang stem (ang Ten Gods), at kung aling mga earthly branch ang may hawak nito — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Yin na Apoy (丁) ay ang ikaapat sa sampung heavenly stem",
        "blocks": [
          {
            "p": "Ang 丁 ay ang ikaapat sa sampung heavenly stem. Ang elemento nito ay Apoy at ang polarity nito ay Yin. Tinatawag ng Saju-Link ang taong ang day stem ay 丁 na \"Yin na Apoy (丁)\"."
          },
          {
            "p": "Ang linyang ipinapakita ng screen ng resulta para sa day stem na ito ay: \"Liwanag ng kandila. Tahimik itong nagniningas at matagal, at unang nagpapainit sa mga pinakamalapit.\" Walang kinalaman ang linyang ito sa talahanayan o sa mga iskor sa ibaba."
          }
        ]
      },
      {
        "title": "Paano nito binabasa ang iba pang stem (ang Ten Gods)",
        "blocks": [
          {
            "p": "Kapag ang 丁 ang day stem, ganito binabasa ang bawat isa sa sampung stem. May direksyon ang pagbasa: ganito binabasa ng 丁 ang kabilang stem, at kapag binasa naman ng kabilang stem ang 丁, maaaring lumabas ang ibang pangalan."
          },
          {
            "table": {
              "caption": "Ten Gods kapag ang Yin na Apoy (丁) ang day stem",
              "head": [
                "Ibang stem",
                "Elemento at polarity",
                "Pangalan sa Ten Gods"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga stem na binabasa bilang posisyon ng asawa",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丁 ang day stem, ang Matatag na yaman ay 庚 at ang Awtoridad ay 壬. Kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
          }
        ]
      },
      {
        "title": "Ang mga branch na may hawak ng 丁",
        "blocks": [
          {
            "p": "Dito nakatago ang 丁 sa loob ng mga earthly branch (ang hidden stems). Ang bahagi ay ang proporsyon ng tatlumpung araw ng branch na iyon na kinukuha ng 丁."
          },
          {
            "table": {
              "caption": "Ang mga branch na may hawak ng 丁",
              "head": [
                "Branch",
                "Hayop",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "午",
                  "Kabayo",
                  "pangunahin (本氣)",
                  "{hidOBon}"
                ],
                [
                  "未",
                  "Tupa",
                  "natitira (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "戌",
                  "Aso",
                  "gitna (中氣)",
                  "{hidSulJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang stem kung sino ang isang tao. Binabasa ang saju mula sa ugnayan ng walong karakter nito.",
              "Ang Ten Gods ay isang pagtatasa na ginagawa mula sa day stem. Ang parehong dalawang karakter ay nagkakaroon ng ibang pangalan depende sa kung alin ang day stem."
            ]
          },
          {
            "p": "Ang buong Ten Gods ay nasa [gabay sa Ten Gods](/guide/ten-gods), at ang lakas ng mga elemento at ang month sign ay nasa [gabay sa five elements](/guide/five-elements). Iba pang stem: [Yang na Kahoy (甲)](/guide/stem-gap) · [Yin na Kahoy (乙)](/guide/stem-eul) · [Yang na Apoy (丙)](/guide/stem-byeong) · [Yang na Lupa (戊)](/guide/stem-mu) · [Yin na Lupa (己)](/guide/stem-gi) · [Yang na Metal (庚)](/guide/stem-gyeong) · [Yin na Metal (辛)](/guide/stem-sin) · [Yang na Tubig (壬)](/guide/stem-im) · [Yin na Tubig (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-mu": {
    "eyebrow": "Mga heavenly stem",
    "title": "Yang na Lupa (戊) — Lupa, Yang",
    "summary": "Ang elemento at polarity ng heavenly stem na 戊, kung paano nito binabasa ang siyam na iba pang stem (ang Ten Gods), at kung aling mga earthly branch ang may hawak nito — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Yang na Lupa (戊) ay ang ikalima sa sampung heavenly stem",
        "blocks": [
          {
            "p": "Ang 戊 ay ang ikalima sa sampung heavenly stem. Ang elemento nito ay Lupa at ang polarity nito ay Yang. Tinatawag ng Saju-Link ang taong ang day stem ay 戊 na \"Yang na Lupa (戊)\"."
          },
          {
            "p": "Ang linyang ipinapakita ng screen ng resulta para sa day stem na ito ay: \"Malawak na lupa at bundok. Mahirap yanigin at madaling sandalan, bagaman mabagal magbago ng pasyang naitakda na.\" Walang kinalaman ang linyang ito sa talahanayan o sa mga iskor sa ibaba."
          }
        ]
      },
      {
        "title": "Paano nito binabasa ang iba pang stem (ang Ten Gods)",
        "blocks": [
          {
            "p": "Kapag ang 戊 ang day stem, ganito binabasa ang bawat isa sa sampung stem. May direksyon ang pagbasa: ganito binabasa ng 戊 ang kabilang stem, at kapag binasa naman ng kabilang stem ang 戊, maaaring lumabas ang ibang pangalan."
          },
          {
            "table": {
              "caption": "Ten Gods kapag ang Yang na Lupa (戊) ang day stem",
              "head": [
                "Ibang stem",
                "Elemento at polarity",
                "Pangalan sa Ten Gods"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "Matatag na yaman (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga stem na binabasa bilang posisyon ng asawa",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 戊 ang day stem, ang Matatag na yaman ay 癸 at ang Awtoridad ay 乙. Kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
          }
        ]
      },
      {
        "title": "Ang mga branch na may hawak ng 戊",
        "blocks": [
          {
            "p": "Dito nakatago ang 戊 sa loob ng mga earthly branch (ang hidden stems). Ang bahagi ay ang proporsyon ng tatlumpung araw ng branch na iyon na kinukuha ng 戊."
          },
          {
            "table": {
              "caption": "Ang mga branch na may hawak ng 戊",
              "head": [
                "Branch",
                "Hayop",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "寅",
                  "Tigre",
                  "natitira (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "辰",
                  "Dragon",
                  "pangunahin (本氣)",
                  "{hidJinBon}"
                ],
                [
                  "巳",
                  "Ahas",
                  "natitira (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "申",
                  "Unggoy",
                  "natitira (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "戌",
                  "Aso",
                  "pangunahin (本氣)",
                  "{hidSulBon}"
                ],
                [
                  "亥",
                  "Baboy",
                  "natitira (餘氣)",
                  "{hidHaeYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang stem kung sino ang isang tao. Binabasa ang saju mula sa ugnayan ng walong karakter nito.",
              "Ang Ten Gods ay isang pagtatasa na ginagawa mula sa day stem. Ang parehong dalawang karakter ay nagkakaroon ng ibang pangalan depende sa kung alin ang day stem."
            ]
          },
          {
            "p": "Ang buong Ten Gods ay nasa [gabay sa Ten Gods](/guide/ten-gods), at ang lakas ng mga elemento at ang month sign ay nasa [gabay sa five elements](/guide/five-elements). Iba pang stem: [Yang na Kahoy (甲)](/guide/stem-gap) · [Yin na Kahoy (乙)](/guide/stem-eul) · [Yang na Apoy (丙)](/guide/stem-byeong) · [Yin na Apoy (丁)](/guide/stem-jeong) · [Yin na Lupa (己)](/guide/stem-gi) · [Yang na Metal (庚)](/guide/stem-gyeong) · [Yin na Metal (辛)](/guide/stem-sin) · [Yang na Tubig (壬)](/guide/stem-im) · [Yin na Tubig (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gi": {
    "eyebrow": "Mga heavenly stem",
    "title": "Yin na Lupa (己) — Lupa, Yin",
    "summary": "Ang elemento at polarity ng heavenly stem na 己, kung paano nito binabasa ang siyam na iba pang stem (ang Ten Gods), at kung aling mga earthly branch ang may hawak nito — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Yin na Lupa (己) ay ang ikaanim sa sampung heavenly stem",
        "blocks": [
          {
            "p": "Ang 己 ay ang ikaanim sa sampung heavenly stem. Ang elemento nito ay Lupa at ang polarity nito ay Yin. Tinatawag ng Saju-Link ang taong ang day stem ay 己 na \"Yin na Lupa (己)\"."
          },
          {
            "p": "Ang linyang ipinapakita ng screen ng resulta para sa day stem na ito ay: \"Lupa ng bukid. Tinatanggap nito ang anumang dumating at pinalalago, mas nag-aaruga kaysa nagpapakita.\" Walang kinalaman ang linyang ito sa talahanayan o sa mga iskor sa ibaba."
          }
        ]
      },
      {
        "title": "Paano nito binabasa ang iba pang stem (ang Ten Gods)",
        "blocks": [
          {
            "p": "Kapag ang 己 ang day stem, ganito binabasa ang bawat isa sa sampung stem. May direksyon ang pagbasa: ganito binabasa ng 己 ang kabilang stem, at kapag binasa naman ng kabilang stem ang 己, maaaring lumabas ang ibang pangalan."
          },
          {
            "table": {
              "caption": "Ten Gods kapag ang Yin na Lupa (己) ang day stem",
              "head": [
                "Ibang stem",
                "Elemento at polarity",
                "Pangalan sa Ten Gods"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "Biglaang yaman (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga stem na binabasa bilang posisyon ng asawa",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 己 ang day stem, ang Matatag na yaman ay 壬 at ang Awtoridad ay 甲. Kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
          }
        ]
      },
      {
        "title": "Ang mga branch na may hawak ng 己",
        "blocks": [
          {
            "p": "Dito nakatago ang 己 sa loob ng mga earthly branch (ang hidden stems). Ang bahagi ay ang proporsyon ng tatlumpung araw ng branch na iyon na kinukuha ng 己."
          },
          {
            "table": {
              "caption": "Ang mga branch na may hawak ng 己",
              "head": [
                "Branch",
                "Hayop",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "丑",
                  "Baka",
                  "pangunahin (本氣)",
                  "{hidChukBon}"
                ],
                [
                  "午",
                  "Kabayo",
                  "gitna (中氣)",
                  "{hidOJung}"
                ],
                [
                  "未",
                  "Tupa",
                  "pangunahin (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang stem kung sino ang isang tao. Binabasa ang saju mula sa ugnayan ng walong karakter nito.",
              "Ang Ten Gods ay isang pagtatasa na ginagawa mula sa day stem. Ang parehong dalawang karakter ay nagkakaroon ng ibang pangalan depende sa kung alin ang day stem."
            ]
          },
          {
            "p": "Ang buong Ten Gods ay nasa [gabay sa Ten Gods](/guide/ten-gods), at ang lakas ng mga elemento at ang month sign ay nasa [gabay sa five elements](/guide/five-elements). Iba pang stem: [Yang na Kahoy (甲)](/guide/stem-gap) · [Yin na Kahoy (乙)](/guide/stem-eul) · [Yang na Apoy (丙)](/guide/stem-byeong) · [Yin na Apoy (丁)](/guide/stem-jeong) · [Yang na Lupa (戊)](/guide/stem-mu) · [Yang na Metal (庚)](/guide/stem-gyeong) · [Yin na Metal (辛)](/guide/stem-sin) · [Yang na Tubig (壬)](/guide/stem-im) · [Yin na Tubig (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gyeong": {
    "eyebrow": "Mga heavenly stem",
    "title": "Yang na Metal (庚) — Metal, Yang",
    "summary": "Ang elemento at polarity ng heavenly stem na 庚, kung paano nito binabasa ang siyam na iba pang stem (ang Ten Gods), at kung aling mga earthly branch ang may hawak nito — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Yang na Metal (庚) ay ang ikapito sa sampung heavenly stem",
        "blocks": [
          {
            "p": "Ang 庚 ay ang ikapito sa sampung heavenly stem. Ang elemento nito ay Metal at ang polarity nito ay Yang. Tinatawag ng Saju-Link ang taong ang day stem ay 庚 na \"Yang na Metal (庚)\"."
          },
          {
            "p": "Ang linyang ipinapakita ng screen ng resulta para sa day stem na ito ay: \"Bakal na hindi pa hinuhubog. Matalas magpasya at malinaw ang hangganan, kaunti ang pasensya sa bagay na nakabitin.\" Walang kinalaman ang linyang ito sa talahanayan o sa mga iskor sa ibaba."
          }
        ]
      },
      {
        "title": "Paano nito binabasa ang iba pang stem (ang Ten Gods)",
        "blocks": [
          {
            "p": "Kapag ang 庚 ang day stem, ganito binabasa ang bawat isa sa sampung stem. May direksyon ang pagbasa: ganito binabasa ng 庚 ang kabilang stem, at kapag binasa naman ng kabilang stem ang 庚, maaaring lumabas ang ibang pangalan."
          },
          {
            "table": {
              "caption": "Ten Gods kapag ang Yang na Metal (庚) ang day stem",
              "head": [
                "Ibang stem",
                "Elemento at polarity",
                "Pangalan sa Ten Gods"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "Manggugulo (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga stem na binabasa bilang posisyon ng asawa",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 庚 ang day stem, ang Matatag na yaman ay 乙 at ang Awtoridad ay 丁. Kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
          }
        ]
      },
      {
        "title": "Ang mga branch na may hawak ng 庚",
        "blocks": [
          {
            "p": "Dito nakatago ang 庚 sa loob ng mga earthly branch (ang hidden stems). Ang bahagi ay ang proporsyon ng tatlumpung araw ng branch na iyon na kinukuha ng 庚."
          },
          {
            "table": {
              "caption": "Ang mga branch na may hawak ng 庚",
              "head": [
                "Branch",
                "Hayop",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "巳",
                  "Ahas",
                  "gitna (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "申",
                  "Unggoy",
                  "pangunahin (本氣)",
                  "{hidSinBon}"
                ],
                [
                  "酉",
                  "Manok",
                  "natitira (餘氣)",
                  "{hidYuYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang stem kung sino ang isang tao. Binabasa ang saju mula sa ugnayan ng walong karakter nito.",
              "Ang Ten Gods ay isang pagtatasa na ginagawa mula sa day stem. Ang parehong dalawang karakter ay nagkakaroon ng ibang pangalan depende sa kung alin ang day stem."
            ]
          },
          {
            "p": "Ang buong Ten Gods ay nasa [gabay sa Ten Gods](/guide/ten-gods), at ang lakas ng mga elemento at ang month sign ay nasa [gabay sa five elements](/guide/five-elements). Iba pang stem: [Yang na Kahoy (甲)](/guide/stem-gap) · [Yin na Kahoy (乙)](/guide/stem-eul) · [Yang na Apoy (丙)](/guide/stem-byeong) · [Yin na Apoy (丁)](/guide/stem-jeong) · [Yang na Lupa (戊)](/guide/stem-mu) · [Yin na Lupa (己)](/guide/stem-gi) · [Yin na Metal (辛)](/guide/stem-sin) · [Yang na Tubig (壬)](/guide/stem-im) · [Yin na Tubig (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-sin": {
    "eyebrow": "Mga heavenly stem",
    "title": "Yin na Metal (辛) — Metal, Yin",
    "summary": "Ang elemento at polarity ng heavenly stem na 辛, kung paano nito binabasa ang siyam na iba pang stem (ang Ten Gods), at kung aling mga earthly branch ang may hawak nito — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Yin na Metal (辛) ay ang ikawalo sa sampung heavenly stem",
        "blocks": [
          {
            "p": "Ang 辛 ay ang ikawalo sa sampung heavenly stem. Ang elemento nito ay Metal at ang polarity nito ay Yin. Tinatawag ng Saju-Link ang taong ang day stem ay 辛 na \"Yin na Metal (辛)\"."
          },
          {
            "p": "Ang linyang ipinapakita ng screen ng resulta para sa day stem na ito ay: \"Hasang hiyas. Pinong panlasa at mataas na pamantayan; mahirap palampasin ang burarang gawa.\" Walang kinalaman ang linyang ito sa talahanayan o sa mga iskor sa ibaba."
          }
        ]
      },
      {
        "title": "Paano nito binabasa ang iba pang stem (ang Ten Gods)",
        "blocks": [
          {
            "p": "Kapag ang 辛 ang day stem, ganito binabasa ang bawat isa sa sampung stem. May direksyon ang pagbasa: ganito binabasa ng 辛 ang kabilang stem, at kapag binasa naman ng kabilang stem ang 辛, maaaring lumabas ang ibang pangalan."
          },
          {
            "table": {
              "caption": "Ten Gods kapag ang Yin na Metal (辛) ang day stem",
              "head": [
                "Ibang stem",
                "Elemento at polarity",
                "Pangalan sa Ten Gods"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "Pagpapahayag (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga stem na binabasa bilang posisyon ng asawa",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 辛 ang day stem, ang Matatag na yaman ay 甲 at ang Awtoridad ay 丙. Kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
          }
        ]
      },
      {
        "title": "Ang mga branch na may hawak ng 辛",
        "blocks": [
          {
            "p": "Dito nakatago ang 辛 sa loob ng mga earthly branch (ang hidden stems). Ang bahagi ay ang proporsyon ng tatlumpung araw ng branch na iyon na kinukuha ng 辛."
          },
          {
            "table": {
              "caption": "Ang mga branch na may hawak ng 辛",
              "head": [
                "Branch",
                "Hayop",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "丑",
                  "Baka",
                  "gitna (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "酉",
                  "Manok",
                  "pangunahin (本氣)",
                  "{hidYuBon}"
                ],
                [
                  "戌",
                  "Aso",
                  "natitira (餘氣)",
                  "{hidSulYeo}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang stem kung sino ang isang tao. Binabasa ang saju mula sa ugnayan ng walong karakter nito.",
              "Ang Ten Gods ay isang pagtatasa na ginagawa mula sa day stem. Ang parehong dalawang karakter ay nagkakaroon ng ibang pangalan depende sa kung alin ang day stem."
            ]
          },
          {
            "p": "Ang buong Ten Gods ay nasa [gabay sa Ten Gods](/guide/ten-gods), at ang lakas ng mga elemento at ang month sign ay nasa [gabay sa five elements](/guide/five-elements). Iba pang stem: [Yang na Kahoy (甲)](/guide/stem-gap) · [Yin na Kahoy (乙)](/guide/stem-eul) · [Yang na Apoy (丙)](/guide/stem-byeong) · [Yin na Apoy (丁)](/guide/stem-jeong) · [Yang na Lupa (戊)](/guide/stem-mu) · [Yin na Lupa (己)](/guide/stem-gi) · [Yang na Metal (庚)](/guide/stem-gyeong) · [Yang na Tubig (壬)](/guide/stem-im) · [Yin na Tubig (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-im": {
    "eyebrow": "Mga heavenly stem",
    "title": "Yang na Tubig (壬) — Tubig, Yang",
    "summary": "Ang elemento at polarity ng heavenly stem na 壬, kung paano nito binabasa ang siyam na iba pang stem (ang Ten Gods), at kung aling mga earthly branch ang may hawak nito — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Yang na Tubig (壬) ay ang ikasiyam sa sampung heavenly stem",
        "blocks": [
          {
            "p": "Ang 壬 ay ang ikasiyam sa sampung heavenly stem. Ang elemento nito ay Tubig at ang polarity nito ay Yang. Tinatawag ng Saju-Link ang taong ang day stem ay 壬 na \"Yang na Tubig (壬)\"."
          },
          {
            "p": "Ang linyang ipinapakita ng screen ng resulta para sa day stem na ito ay: \"Ilog at dagat. Malawak ang pananaw, at may mata kung saan patungo ang agos.\" Walang kinalaman ang linyang ito sa talahanayan o sa mga iskor sa ibaba."
          }
        ]
      },
      {
        "title": "Paano nito binabasa ang iba pang stem (ang Ten Gods)",
        "blocks": [
          {
            "p": "Kapag ang 壬 ang day stem, ganito binabasa ang bawat isa sa sampung stem. May direksyon ang pagbasa: ganito binabasa ng 壬 ang kabilang stem, at kapag binasa naman ng kabilang stem ang 壬, maaaring lumabas ang ibang pangalan."
          },
          {
            "table": {
              "caption": "Ten Gods kapag ang Yang na Tubig (壬) ang day stem",
              "head": [
                "Ibang stem",
                "Elemento at polarity",
                "Pangalan sa Ten Gods"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "Karibal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga stem na binabasa bilang posisyon ng asawa",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 壬 ang day stem, ang Matatag na yaman ay 丁 at ang Awtoridad ay 己. Kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
          }
        ]
      },
      {
        "title": "Ang mga branch na may hawak ng 壬",
        "blocks": [
          {
            "p": "Dito nakatago ang 壬 sa loob ng mga earthly branch (ang hidden stems). Ang bahagi ay ang proporsyon ng tatlumpung araw ng branch na iyon na kinukuha ng 壬."
          },
          {
            "table": {
              "caption": "Ang mga branch na may hawak ng 壬",
              "head": [
                "Branch",
                "Hayop",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "子",
                  "Daga",
                  "natitira (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "申",
                  "Unggoy",
                  "gitna (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "亥",
                  "Baboy",
                  "pangunahin (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang stem kung sino ang isang tao. Binabasa ang saju mula sa ugnayan ng walong karakter nito.",
              "Ang Ten Gods ay isang pagtatasa na ginagawa mula sa day stem. Ang parehong dalawang karakter ay nagkakaroon ng ibang pangalan depende sa kung alin ang day stem."
            ]
          },
          {
            "p": "Ang buong Ten Gods ay nasa [gabay sa Ten Gods](/guide/ten-gods), at ang lakas ng mga elemento at ang month sign ay nasa [gabay sa five elements](/guide/five-elements). Iba pang stem: [Yang na Kahoy (甲)](/guide/stem-gap) · [Yin na Kahoy (乙)](/guide/stem-eul) · [Yang na Apoy (丙)](/guide/stem-byeong) · [Yin na Apoy (丁)](/guide/stem-jeong) · [Yang na Lupa (戊)](/guide/stem-mu) · [Yin na Lupa (己)](/guide/stem-gi) · [Yang na Metal (庚)](/guide/stem-gyeong) · [Yin na Metal (辛)](/guide/stem-sin) · [Yin na Tubig (癸)](/guide/stem-gye)"
          }
        ]
      }
    ]
  },

  "guide/stem-gye": {
    "eyebrow": "Mga heavenly stem",
    "title": "Yin na Tubig (癸) — Tubig, Yin",
    "summary": "Ang elemento at polarity ng heavenly stem na 癸, kung paano nito binabasa ang siyam na iba pang stem (ang Ten Gods), at kung aling mga earthly branch ang may hawak nito — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang Yin na Tubig (癸) ay ang ikasampu sa sampung heavenly stem",
        "blocks": [
          {
            "p": "Ang 癸 ay ang ikasampu sa sampung heavenly stem. Ang elemento nito ay Tubig at ang polarity nito ay Yin. Tinatawag ng Saju-Link ang taong ang day stem ay 癸 na \"Yin na Tubig (癸)\"."
          },
          {
            "p": "Ang linyang ipinapakita ng screen ng resulta para sa day stem na ito ay: \"Hamog at ulan. Tahimik itong tumatagos, at nababasa ang himig bago pa ang salita.\" Walang kinalaman ang linyang ito sa talahanayan o sa mga iskor sa ibaba."
          }
        ]
      },
      {
        "title": "Paano nito binabasa ang iba pang stem (ang Ten Gods)",
        "blocks": [
          {
            "p": "Kapag ang 癸 ang day stem, ganito binabasa ang bawat isa sa sampung stem. May direksyon ang pagbasa: ganito binabasa ng 癸 ang kabilang stem, at kapag binasa naman ng kabilang stem ang 癸, maaaring lumabas ang ibang pangalan."
          },
          {
            "table": {
              "caption": "Ten Gods kapag ang Yin na Tubig (癸) ang day stem",
              "head": [
                "Ibang stem",
                "Elemento at polarity",
                "Pangalan sa Ten Gods"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "Kasama (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Mga stem na binabasa bilang posisyon ng asawa",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 癸 ang day stem, ang Matatag na yaman ay 丙 at ang Awtoridad ay 戊. Kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
          }
        ]
      },
      {
        "title": "Ang mga branch na may hawak ng 癸",
        "blocks": [
          {
            "p": "Dito nakatago ang 癸 sa loob ng mga earthly branch (ang hidden stems). Ang bahagi ay ang proporsyon ng tatlumpung araw ng branch na iyon na kinukuha ng 癸."
          },
          {
            "table": {
              "caption": "Ang mga branch na may hawak ng 癸",
              "head": [
                "Branch",
                "Hayop",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "子",
                  "Daga",
                  "pangunahin (本氣)",
                  "{hidJaBon}"
                ],
                [
                  "丑",
                  "Baka",
                  "natitira (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "辰",
                  "Dragon",
                  "gitna (中氣)",
                  "{hidJinJung}"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang stem kung sino ang isang tao. Binabasa ang saju mula sa ugnayan ng walong karakter nito.",
              "Ang Ten Gods ay isang pagtatasa na ginagawa mula sa day stem. Ang parehong dalawang karakter ay nagkakaroon ng ibang pangalan depende sa kung alin ang day stem."
            ]
          },
          {
            "p": "Ang buong Ten Gods ay nasa [gabay sa Ten Gods](/guide/ten-gods), at ang lakas ng mga elemento at ang month sign ay nasa [gabay sa five elements](/guide/five-elements). Iba pang stem: [Yang na Kahoy (甲)](/guide/stem-gap) · [Yin na Kahoy (乙)](/guide/stem-eul) · [Yang na Apoy (丙)](/guide/stem-byeong) · [Yin na Apoy (丁)](/guide/stem-jeong) · [Yang na Lupa (戊)](/guide/stem-mu) · [Yin na Lupa (己)](/guide/stem-gi) · [Yang na Metal (庚)](/guide/stem-gyeong) · [Yin na Metal (辛)](/guide/stem-sin) · [Yang na Tubig (壬)](/guide/stem-im)"
          }
        ]
      }
    ]
  },

  "guide/branch-ja": {
    "eyebrow": "Mga earthly branch",
    "title": "子 — ang branch ng Daga",
    "summary": "Ang mga stem na hawak ng earthly branch na 子 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 子 ay ang una sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 子 ay ang una sa labindalawang earthly branch at kabilang sa Daga. Kapag ang branch ng buwan ng kapanganakan ay 子, ang panahon ay taglamig at ang elementong may-ari ng panahon ay Tubig."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 子, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 子",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "natitira (餘氣)",
                  "{hidJaYeo}"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "pangunahin (本氣)",
                  "{hidJaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 子",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 子, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 子 (taglamig)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Apoy",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Lupa",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Tubig",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 子 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 子 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 子 sa bawat day stem",
              "head": [
                "Day stem",
                "Yang na Tubig (壬) — natitira (餘氣)",
                "Yin na Tubig (癸) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Di-karaniwang suporta (偏印)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Pag-aaruga (正印)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Humahamon (偏官)",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Awtoridad (正官)",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Biglaang yaman (偏財)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Matatag na yaman (正財)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Pagpapahayag (食神)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Manggugulo (傷官)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Kasama (比肩)",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Karibal (劫財)",
                  "Kasama (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [丑 (Baka)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Kuneho)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Ahas)](/guide/branch-sa) · [午 (Kabayo)](/guide/branch-o) · [未 (Tupa)](/guide/branch-mi) · [申 (Unggoy)](/guide/branch-sin) · [酉 (Manok)](/guide/branch-yu) · [戌 (Aso)](/guide/branch-sul) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-chuk": {
    "eyebrow": "Mga earthly branch",
    "title": "丑 — ang branch ng Baka",
    "summary": "Ang mga stem na hawak ng earthly branch na 丑 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丑 ay ang ikalawa sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 丑 ay ang ikalawa sa labindalawang earthly branch at kabilang sa Baka. Kapag ang branch ng buwan ng kapanganakan ay 丑, ang panahon ay taglamig at ang elementong may-ari ng panahon ay Tubig. Ito ay buwan ng paglipat (辰未戌丑), kaya ang Lupa ay itinuturing ding nasa estadong Wang."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 丑, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 丑",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "natitira (餘氣)",
                  "{hidChukYeo}"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "gitna (中氣)",
                  "{hidChukJung}"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "pangunahin (本氣)",
                  "{hidChukBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 丑",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 丑, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 丑 (taglamig (buwan ng paglipat))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Apoy",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Lupa",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Tubig",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 丑 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 丑 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 丑 sa bawat day stem",
              "head": [
                "Day stem",
                "Yin na Tubig (癸) — natitira (餘氣)",
                "Yin na Metal (辛) — gitna (中氣)",
                "Yin na Lupa (己) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Pag-aaruga (正印)",
                  "Awtoridad (正官)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Di-karaniwang suporta (偏印)",
                  "Humahamon (偏官)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Awtoridad (正官)",
                  "Matatag na yaman (正財)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Humahamon (偏官)",
                  "Biglaang yaman (偏財)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Matatag na yaman (正財)",
                  "Manggugulo (傷官)",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Biglaang yaman (偏財)",
                  "Pagpapahayag (食神)",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Manggugulo (傷官)",
                  "Karibal (劫財)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Pagpapahayag (食神)",
                  "Kasama (比肩)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Karibal (劫財)",
                  "Pag-aaruga (正印)",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Kasama (比肩)",
                  "Di-karaniwang suporta (偏印)",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [寅 (Tigre)](/guide/branch-in) · [卯 (Kuneho)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Ahas)](/guide/branch-sa) · [午 (Kabayo)](/guide/branch-o) · [未 (Tupa)](/guide/branch-mi) · [申 (Unggoy)](/guide/branch-sin) · [酉 (Manok)](/guide/branch-yu) · [戌 (Aso)](/guide/branch-sul) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-in": {
    "eyebrow": "Mga earthly branch",
    "title": "寅 — ang branch ng Tigre",
    "summary": "Ang mga stem na hawak ng earthly branch na 寅 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 寅 ay ang ikatlo sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 寅 ay ang ikatlo sa labindalawang earthly branch at kabilang sa Tigre. Kapag ang branch ng buwan ng kapanganakan ay 寅, ang panahon ay tagsibol at ang elementong may-ari ng panahon ay Kahoy."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 寅, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 寅",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "natitira (餘氣)",
                  "{hidInYeo}"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "gitna (中氣)",
                  "{hidInJung}"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "pangunahin (本氣)",
                  "{hidInBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 寅",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 寅, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 寅 (tagsibol)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Apoy",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Lupa",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tubig",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 寅 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 寅 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 寅 sa bawat day stem",
              "head": [
                "Day stem",
                "Yang na Lupa (戊) — natitira (餘氣)",
                "Yang na Apoy (丙) — gitna (中氣)",
                "Yang na Kahoy (甲) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Biglaang yaman (偏財)",
                  "Pagpapahayag (食神)",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Matatag na yaman (正財)",
                  "Manggugulo (傷官)",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Pagpapahayag (食神)",
                  "Kasama (比肩)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Manggugulo (傷官)",
                  "Karibal (劫財)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Kasama (比肩)",
                  "Di-karaniwang suporta (偏印)",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Karibal (劫財)",
                  "Pag-aaruga (正印)",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Di-karaniwang suporta (偏印)",
                  "Humahamon (偏官)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Pag-aaruga (正印)",
                  "Awtoridad (正官)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Humahamon (偏官)",
                  "Biglaang yaman (偏財)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Awtoridad (正官)",
                  "Matatag na yaman (正財)",
                  "Manggugulo (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [丑 (Baka)](/guide/branch-chuk) · [卯 (Kuneho)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Ahas)](/guide/branch-sa) · [午 (Kabayo)](/guide/branch-o) · [未 (Tupa)](/guide/branch-mi) · [申 (Unggoy)](/guide/branch-sin) · [酉 (Manok)](/guide/branch-yu) · [戌 (Aso)](/guide/branch-sul) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-myo": {
    "eyebrow": "Mga earthly branch",
    "title": "卯 — ang branch ng Kuneho",
    "summary": "Ang mga stem na hawak ng earthly branch na 卯 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 卯 ay ang ikaapat sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 卯 ay ang ikaapat sa labindalawang earthly branch at kabilang sa Kuneho. Kapag ang branch ng buwan ng kapanganakan ay 卯, ang panahon ay tagsibol at ang elementong may-ari ng panahon ay Kahoy."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 卯, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 卯",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "natitira (餘氣)",
                  "{hidMyoYeo}"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "pangunahin (本氣)",
                  "{hidMyoBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 卯",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 卯, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 卯 (tagsibol)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Apoy",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Lupa",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tubig",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 卯 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 卯 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 卯 sa bawat day stem",
              "head": [
                "Day stem",
                "Yang na Kahoy (甲) — natitira (餘氣)",
                "Yin na Kahoy (乙) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Kasama (比肩)",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Karibal (劫財)",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Di-karaniwang suporta (偏印)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Pag-aaruga (正印)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Humahamon (偏官)",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Awtoridad (正官)",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Biglaang yaman (偏財)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Matatag na yaman (正財)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Pagpapahayag (食神)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Manggugulo (傷官)",
                  "Pagpapahayag (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [丑 (Baka)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Ahas)](/guide/branch-sa) · [午 (Kabayo)](/guide/branch-o) · [未 (Tupa)](/guide/branch-mi) · [申 (Unggoy)](/guide/branch-sin) · [酉 (Manok)](/guide/branch-yu) · [戌 (Aso)](/guide/branch-sul) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-jin": {
    "eyebrow": "Mga earthly branch",
    "title": "辰 — ang branch ng Dragon",
    "summary": "Ang mga stem na hawak ng earthly branch na 辰 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 辰 ay ang ikalima sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 辰 ay ang ikalima sa labindalawang earthly branch at kabilang sa Dragon. Kapag ang branch ng buwan ng kapanganakan ay 辰, ang panahon ay tagsibol at ang elementong may-ari ng panahon ay Kahoy. Ito ay buwan ng paglipat (辰未戌丑), kaya ang Lupa ay itinuturing ding nasa estadong Wang."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 辰, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 辰",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "natitira (餘氣)",
                  "{hidJinYeo}"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig",
                  "gitna (中氣)",
                  "{hidJinJung}"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "pangunahin (本氣)",
                  "{hidJinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 辰",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 辰, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 辰 (tagsibol (buwan ng paglipat))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Apoy",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Lupa",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Tubig",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 辰 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 辰 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 辰 sa bawat day stem",
              "head": [
                "Day stem",
                "Yin na Kahoy (乙) — natitira (餘氣)",
                "Yin na Tubig (癸) — gitna (中氣)",
                "Yang na Lupa (戊) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Karibal (劫財)",
                  "Pag-aaruga (正印)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Kasama (比肩)",
                  "Di-karaniwang suporta (偏印)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Pag-aaruga (正印)",
                  "Awtoridad (正官)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Di-karaniwang suporta (偏印)",
                  "Humahamon (偏官)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Awtoridad (正官)",
                  "Matatag na yaman (正財)",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Humahamon (偏官)",
                  "Biglaang yaman (偏財)",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Matatag na yaman (正財)",
                  "Manggugulo (傷官)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Biglaang yaman (偏財)",
                  "Pagpapahayag (食神)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Manggugulo (傷官)",
                  "Karibal (劫財)",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Pagpapahayag (食神)",
                  "Kasama (比肩)",
                  "Awtoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [丑 (Baka)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Kuneho)](/guide/branch-myo) · [巳 (Ahas)](/guide/branch-sa) · [午 (Kabayo)](/guide/branch-o) · [未 (Tupa)](/guide/branch-mi) · [申 (Unggoy)](/guide/branch-sin) · [酉 (Manok)](/guide/branch-yu) · [戌 (Aso)](/guide/branch-sul) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sa": {
    "eyebrow": "Mga earthly branch",
    "title": "巳 — ang branch ng Ahas",
    "summary": "Ang mga stem na hawak ng earthly branch na 巳 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 巳 ay ang ikaanim sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 巳 ay ang ikaanim sa labindalawang earthly branch at kabilang sa Ahas. Kapag ang branch ng buwan ng kapanganakan ay 巳, ang panahon ay tag-init at ang elementong may-ari ng panahon ay Apoy."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 巳, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 巳",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "natitira (餘氣)",
                  "{hidSaYeo}"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "gitna (中氣)",
                  "{hidSaJung}"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "pangunahin (本氣)",
                  "{hidSaBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 巳",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 巳, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 巳 (tag-init)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Apoy",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Lupa",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tubig",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 巳 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 巳 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 巳 sa bawat day stem",
              "head": [
                "Day stem",
                "Yang na Lupa (戊) — natitira (餘氣)",
                "Yang na Metal (庚) — gitna (中氣)",
                "Yang na Apoy (丙) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Biglaang yaman (偏財)",
                  "Humahamon (偏官)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Matatag na yaman (正財)",
                  "Awtoridad (正官)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Pagpapahayag (食神)",
                  "Biglaang yaman (偏財)",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Manggugulo (傷官)",
                  "Matatag na yaman (正財)",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Kasama (比肩)",
                  "Pagpapahayag (食神)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Karibal (劫財)",
                  "Manggugulo (傷官)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Di-karaniwang suporta (偏印)",
                  "Kasama (比肩)",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Pag-aaruga (正印)",
                  "Karibal (劫財)",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Humahamon (偏官)",
                  "Di-karaniwang suporta (偏印)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Awtoridad (正官)",
                  "Pag-aaruga (正印)",
                  "Matatag na yaman (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [丑 (Baka)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Kuneho)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [午 (Kabayo)](/guide/branch-o) · [未 (Tupa)](/guide/branch-mi) · [申 (Unggoy)](/guide/branch-sin) · [酉 (Manok)](/guide/branch-yu) · [戌 (Aso)](/guide/branch-sul) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-o": {
    "eyebrow": "Mga earthly branch",
    "title": "午 — ang branch ng Kabayo",
    "summary": "Ang mga stem na hawak ng earthly branch na 午 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 午 ay ang ikapito sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 午 ay ang ikapito sa labindalawang earthly branch at kabilang sa Kabayo. Kapag ang branch ng buwan ng kapanganakan ay 午, ang panahon ay tag-init at ang elementong may-ari ng panahon ay Apoy."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 午, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 午",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy",
                  "natitira (餘氣)",
                  "{hidOYeo}"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "gitna (中氣)",
                  "{hidOJung}"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "pangunahin (本氣)",
                  "{hidOBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 午",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 午, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 午 (tag-init)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Apoy",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Lupa",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tubig",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 午 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 午 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 午 sa bawat day stem",
              "head": [
                "Day stem",
                "Yang na Apoy (丙) — natitira (餘氣)",
                "Yin na Lupa (己) — gitna (中氣)",
                "Yin na Apoy (丁) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Pagpapahayag (食神)",
                  "Matatag na yaman (正財)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Manggugulo (傷官)",
                  "Biglaang yaman (偏財)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Kasama (比肩)",
                  "Manggugulo (傷官)",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Karibal (劫財)",
                  "Pagpapahayag (食神)",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Di-karaniwang suporta (偏印)",
                  "Karibal (劫財)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Pag-aaruga (正印)",
                  "Kasama (比肩)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Humahamon (偏官)",
                  "Pag-aaruga (正印)",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Awtoridad (正官)",
                  "Di-karaniwang suporta (偏印)",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Biglaang yaman (偏財)",
                  "Awtoridad (正官)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Matatag na yaman (正財)",
                  "Humahamon (偏官)",
                  "Biglaang yaman (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [丑 (Baka)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Kuneho)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Ahas)](/guide/branch-sa) · [未 (Tupa)](/guide/branch-mi) · [申 (Unggoy)](/guide/branch-sin) · [酉 (Manok)](/guide/branch-yu) · [戌 (Aso)](/guide/branch-sul) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-mi": {
    "eyebrow": "Mga earthly branch",
    "title": "未 — ang branch ng Tupa",
    "summary": "Ang mga stem na hawak ng earthly branch na 未 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 未 ay ang ikawalo sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 未 ay ang ikawalo sa labindalawang earthly branch at kabilang sa Tupa. Kapag ang branch ng buwan ng kapanganakan ay 未, ang panahon ay tag-init at ang elementong may-ari ng panahon ay Apoy. Ito ay buwan ng paglipat (辰未戌丑), kaya ang Lupa ay itinuturing ding nasa estadong Wang."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 未, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 未",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "natitira (餘氣)",
                  "{hidMiYeo}"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy",
                  "gitna (中氣)",
                  "{hidMiJung}"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa",
                  "pangunahin (本氣)",
                  "{hidMiBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 未",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 未, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 未 (tag-init (buwan ng paglipat))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Apoy",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Lupa",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Tubig",
                  "Su (囚)",
                  "{vitalitySu}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 未 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 未 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 未 sa bawat day stem",
              "head": [
                "Day stem",
                "Yin na Apoy (丁) — natitira (餘氣)",
                "Yin na Kahoy (乙) — gitna (中氣)",
                "Yin na Lupa (己) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Manggugulo (傷官)",
                  "Karibal (劫財)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Pagpapahayag (食神)",
                  "Kasama (比肩)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Karibal (劫財)",
                  "Pag-aaruga (正印)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Kasama (比肩)",
                  "Di-karaniwang suporta (偏印)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Pag-aaruga (正印)",
                  "Awtoridad (正官)",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Di-karaniwang suporta (偏印)",
                  "Humahamon (偏官)",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Awtoridad (正官)",
                  "Matatag na yaman (正財)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Humahamon (偏官)",
                  "Biglaang yaman (偏財)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Matatag na yaman (正財)",
                  "Manggugulo (傷官)",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Biglaang yaman (偏財)",
                  "Pagpapahayag (食神)",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [丑 (Baka)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Kuneho)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Ahas)](/guide/branch-sa) · [午 (Kabayo)](/guide/branch-o) · [申 (Unggoy)](/guide/branch-sin) · [酉 (Manok)](/guide/branch-yu) · [戌 (Aso)](/guide/branch-sul) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sin": {
    "eyebrow": "Mga earthly branch",
    "title": "申 — ang branch ng Unggoy",
    "summary": "Ang mga stem na hawak ng earthly branch na 申 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 申 ay ang ikasiyam sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 申 ay ang ikasiyam sa labindalawang earthly branch at kabilang sa Unggoy. Kapag ang branch ng buwan ng kapanganakan ay 申, ang panahon ay taglagas at ang elementong may-ari ng panahon ay Metal."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 申, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 申",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "natitira (餘氣)",
                  "{hidSinYeo}"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "gitna (中氣)",
                  "{hidSinJung}"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "pangunahin (本氣)",
                  "{hidSinBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 申",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 申, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 申 (taglagas)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Apoy",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Lupa",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tubig",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 申 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 申 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 申 sa bawat day stem",
              "head": [
                "Day stem",
                "Yang na Lupa (戊) — natitira (餘氣)",
                "Yang na Tubig (壬) — gitna (中氣)",
                "Yang na Metal (庚) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Biglaang yaman (偏財)",
                  "Di-karaniwang suporta (偏印)",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Matatag na yaman (正財)",
                  "Pag-aaruga (正印)",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Pagpapahayag (食神)",
                  "Humahamon (偏官)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Manggugulo (傷官)",
                  "Awtoridad (正官)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Kasama (比肩)",
                  "Biglaang yaman (偏財)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Karibal (劫財)",
                  "Matatag na yaman (正財)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Di-karaniwang suporta (偏印)",
                  "Pagpapahayag (食神)",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Pag-aaruga (正印)",
                  "Manggugulo (傷官)",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Humahamon (偏官)",
                  "Kasama (比肩)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Awtoridad (正官)",
                  "Karibal (劫財)",
                  "Pag-aaruga (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [丑 (Baka)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Kuneho)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Ahas)](/guide/branch-sa) · [午 (Kabayo)](/guide/branch-o) · [未 (Tupa)](/guide/branch-mi) · [酉 (Manok)](/guide/branch-yu) · [戌 (Aso)](/guide/branch-sul) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-yu": {
    "eyebrow": "Mga earthly branch",
    "title": "酉 — ang branch ng Manok",
    "summary": "Ang mga stem na hawak ng earthly branch na 酉 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 酉 ay ang ikasampu sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 酉 ay ang ikasampu sa labindalawang earthly branch at kabilang sa Manok. Kapag ang branch ng buwan ng kapanganakan ay 酉, ang panahon ay taglagas at ang elementong may-ari ng panahon ay Metal."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 酉, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 酉",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal",
                  "natitira (餘氣)",
                  "{hidYuYeo}"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "pangunahin (本氣)",
                  "{hidYuBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 酉",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 酉, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 酉 (taglagas)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Apoy",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Lupa",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tubig",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 酉 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 酉 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 酉 sa bawat day stem",
              "head": [
                "Day stem",
                "Yang na Metal (庚) — natitira (餘氣)",
                "Yin na Metal (辛) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Humahamon (偏官)",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Awtoridad (正官)",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Biglaang yaman (偏財)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Matatag na yaman (正財)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Pagpapahayag (食神)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Manggugulo (傷官)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Kasama (比肩)",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Karibal (劫財)",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Di-karaniwang suporta (偏印)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Pag-aaruga (正印)",
                  "Di-karaniwang suporta (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [丑 (Baka)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Kuneho)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Ahas)](/guide/branch-sa) · [午 (Kabayo)](/guide/branch-o) · [未 (Tupa)](/guide/branch-mi) · [申 (Unggoy)](/guide/branch-sin) · [戌 (Aso)](/guide/branch-sul) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-sul": {
    "eyebrow": "Mga earthly branch",
    "title": "戌 — ang branch ng Aso",
    "summary": "Ang mga stem na hawak ng earthly branch na 戌 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 戌 ay ang ikalabing-isa sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 戌 ay ang ikalabing-isa sa labindalawang earthly branch at kabilang sa Aso. Kapag ang branch ng buwan ng kapanganakan ay 戌, ang panahon ay taglagas at ang elementong may-ari ng panahon ay Metal. Ito ay buwan ng paglipat (辰未戌丑), kaya ang Lupa ay itinuturing ding nasa estadong Wang."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 戌, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 戌",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal",
                  "natitira (餘氣)",
                  "{hidSulYeo}"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy",
                  "gitna (中氣)",
                  "{hidSulJung}"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "pangunahin (本氣)",
                  "{hidSulBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 戌",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 戌, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 戌 (taglagas (buwan ng paglipat))",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Apoy",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Lupa",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Metal",
                  "Wang (旺)",
                  "{vitalityWang}"
                ],
                [
                  "Tubig",
                  "Sang (相)",
                  "{vitalitySang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 戌 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 戌 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 戌 sa bawat day stem",
              "head": [
                "Day stem",
                "Yin na Metal (辛) — natitira (餘氣)",
                "Yin na Apoy (丁) — gitna (中氣)",
                "Yang na Lupa (戊) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Awtoridad (正官)",
                  "Manggugulo (傷官)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Humahamon (偏官)",
                  "Pagpapahayag (食神)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Matatag na yaman (正財)",
                  "Karibal (劫財)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Biglaang yaman (偏財)",
                  "Kasama (比肩)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Manggugulo (傷官)",
                  "Pag-aaruga (正印)",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Pagpapahayag (食神)",
                  "Di-karaniwang suporta (偏印)",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Karibal (劫財)",
                  "Awtoridad (正官)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Kasama (比肩)",
                  "Humahamon (偏官)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Pag-aaruga (正印)",
                  "Matatag na yaman (正財)",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Di-karaniwang suporta (偏印)",
                  "Biglaang yaman (偏財)",
                  "Awtoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [丑 (Baka)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Kuneho)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Ahas)](/guide/branch-sa) · [午 (Kabayo)](/guide/branch-o) · [未 (Tupa)](/guide/branch-mi) · [申 (Unggoy)](/guide/branch-sin) · [酉 (Manok)](/guide/branch-yu) · [亥 (Baboy)](/guide/branch-hae)"
          }
        ]
      }
    ]
  },

  "guide/branch-hae": {
    "eyebrow": "Mga earthly branch",
    "title": "亥 — ang branch ng Baboy",
    "summary": "Ang mga stem na hawak ng earthly branch na 亥 (ang hidden stems), ang lakas ng limang elemento kapag ito ang month branch, at ang Ten Gods na binabasa para sa bawat day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon ng Saju-Link.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 亥 ay ang ikalabindalawa sa labindalawang earthly branch",
        "blocks": [
          {
            "p": "Ang 亥 ay ang ikalabindalawa sa labindalawang earthly branch at kabilang sa Baboy. Kapag ang branch ng buwan ng kapanganakan ay 亥, ang panahon ay taglamig at ang elementong may-ari ng panahon ay Tubig."
          },
          {
            "p": "Kapag ang branch ng araw ng kapanganakan ay 亥, ang karakter na ito ang posisyon ng asawa. Sa ibaba makikita kung aling mga stem ang hawak ng branch na ito at kung ano ang mga ito sa day stem."
          }
        ]
      },
      {
        "title": "Ang mga stem na hawak ng branch na ito (hidden stems)",
        "blocks": [
          {
            "p": "Ang branch ay isang nakikitang karakter ngunit may mga stem sa loob nito. Ang bahagi ay kung paano hinahati ang tatlumpung araw ng branch sa mga stem, at ang pangunahing stem ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng 亥",
              "head": [
                "Stem",
                "Elemento at polarity",
                "Posisyon",
                "Bahagi"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa",
                  "natitira (餘氣)",
                  "{hidHaeYeo}"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy",
                  "gitna (中氣)",
                  "{hidHaeJung}"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig",
                  "pangunahin (本氣)",
                  "{hidHaeBon}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang lakas ng limang elemento kapag ang month branch ay 亥",
        "blocks": [
          {
            "p": "Kapag ang branch ng buwan ng kapanganakan ay 亥, nagkakaroon ang bawat elemento ng isang estado (Wang, Sang, Hyu, Su, Sa), at ang estadong iyon ang nagiging multiplier na ipinapataw sa lakas nito."
          },
          {
            "table": {
              "caption": "Ang mga estado ng elemento para sa month branch 亥 (taglamig)",
              "head": [
                "Elemento",
                "Estado",
                "Multiplier"
              ],
              "rows": [
                [
                  "Kahoy",
                  "Sang (相)",
                  "{vitalitySang}"
                ],
                [
                  "Apoy",
                  "Sa (死)",
                  "{vitalitySa}"
                ],
                [
                  "Lupa",
                  "Su (囚)",
                  "{vitalitySu}"
                ],
                [
                  "Metal",
                  "Hyu (休)",
                  "{vitalityHyu}"
                ],
                [
                  "Tubig",
                  "Wang (旺)",
                  "{vitalityWang}"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang Ten Gods ayon sa day stem",
        "blocks": [
          {
            "p": "Ang parehong hidden stems ng 亥 ay nagiging magkaibang Ten Gods depende sa day stem. Kapag ang 亥 ang day branch, ang talahanayang ito ang pagbasa sa posisyon ng asawa."
          },
          {
            "table": {
              "caption": "Kung ano ang hidden stems ng 亥 sa bawat day stem",
              "head": [
                "Day stem",
                "Yang na Lupa (戊) — natitira (餘氣)",
                "Yang na Kahoy (甲) — gitna (中氣)",
                "Yang na Tubig (壬) — pangunahin (本氣)"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Biglaang yaman (偏財)",
                  "Kasama (比肩)",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Matatag na yaman (正財)",
                  "Karibal (劫財)",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Pagpapahayag (食神)",
                  "Di-karaniwang suporta (偏印)",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Manggugulo (傷官)",
                  "Pag-aaruga (正印)",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Kasama (比肩)",
                  "Humahamon (偏官)",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Lupa (己)",
                  "Karibal (劫財)",
                  "Awtoridad (正官)",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Metal (庚)",
                  "Di-karaniwang suporta (偏印)",
                  "Biglaang yaman (偏財)",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Metal (辛)",
                  "Pag-aaruga (正印)",
                  "Matatag na yaman (正財)",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Humahamon (偏官)",
                  "Pagpapahayag (食神)",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Awtoridad (正官)",
                  "Manggugulo (傷官)",
                  "Karibal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang branch kung sino ang isang tao. Magkaiba ang pagbasa sa parehong branch depende sa day stem at sa month branch.",
              "Ang mga ugnayan sa pagitan ng mga branch, tulad ng harmonya, salpukan, at alitan, ay hindi saklaw dito."
            ]
          },
          {
            "p": "Ang mga ugnayan sa pagitan ng mga branch ay nasa [talaan ng labindalawang branch](/guide/branches), at ang kahulugan nito bilang zodiac animal ay nasa [kung saan nakalagay ang zodiac sa isang saju](/guide/zodiac). Iba pang branch: [子 (Daga)](/guide/branch-ja) · [丑 (Baka)](/guide/branch-chuk) · [寅 (Tigre)](/guide/branch-in) · [卯 (Kuneho)](/guide/branch-myo) · [辰 (Dragon)](/guide/branch-jin) · [巳 (Ahas)](/guide/branch-sa) · [午 (Kabayo)](/guide/branch-o) · [未 (Tupa)](/guide/branch-mi) · [申 (Unggoy)](/guide/branch-sin) · [酉 (Manok)](/guide/branch-yu) · [戌 (Aso)](/guide/branch-sul)"
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-ja": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 甲子",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 甲子 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 甲子 ay ang ika-1 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 甲子, ang day stem ay 甲 (Kahoy, Yang) at ang day branch ay 子 (ang Daga). Sa siklo ng animnapu, ito ang kombinasyong bilang 1."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 甲 na \"Yang na Kahoy (甲)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Matayog na punong tuwid ang tubo. Kapag naitakda na ang direksyon, hindi na ito nag-aalangan, at mas pipiliing magtiis kaysa yumuko.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 子 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 甲, ang mga stem na hawak ng 子 ay ang mga sumusunod. Ang pangunahing stem (癸) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 甲子",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 甲"
              ],
              "rows": [
                [
                  "Yang na Tubig (壬)",
                  "natitira (餘氣)",
                  "{hidJaYeo}",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "pangunahin (本氣)",
                  "{hidJaBon}",
                  "Pag-aaruga (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 甲 ang day stem, ang Matatag na yaman ay 己 at ang Awtoridad ay 辛."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 己. Ang 己 ay hindi taglay ng 子."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 辛. Ang 辛 ay hindi taglay ng 子."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [癸亥](/guide/pillar-gye-hae) at ang susunod ay [乙丑](/guide/pillar-eul-chuk)."
          },
          {
            "p": "Binubuo ito ng [Yang na Kahoy (甲)](/guide/stem-gap) at [子 (Daga)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-chuk": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 乙丑",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 乙丑 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 乙丑 ay ang ika-2 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 乙丑, ang day stem ay 乙 (Kahoy, Yin) at ang day branch ay 丑 (ang Baka). Sa siklo ng animnapu, ito ang kombinasyong bilang 2."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 乙 na \"Yin na Kahoy (乙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Baging — malambot na damo. Yumuyuko ito ayon sa sitwasyon para makasulong, at hindi napipigtas.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 丑 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 乙, ang mga stem na hawak ng 丑 ay ang mga sumusunod. Ang pangunahing stem (己) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 乙丑",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 乙"
              ],
              "rows": [
                [
                  "Yin na Tubig (癸)",
                  "natitira (餘氣)",
                  "{hidChukYeo}",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Metal (辛)",
                  "gitna (中氣)",
                  "{hidChukJung}",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Lupa (己)",
                  "pangunahin (本氣)",
                  "{hidChukBon}",
                  "Biglaang yaman (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 乙 ang day stem, ang Matatag na yaman ay 戊 at ang Awtoridad ay 庚."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 戊. Ang 戊 ay hindi taglay ng 丑."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 庚. Ang 庚 ay hindi taglay ng 丑."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [甲子](/guide/pillar-gap-ja) at ang susunod ay [丙寅](/guide/pillar-byeong-in)."
          },
          {
            "p": "Binubuo ito ng [Yin na Kahoy (乙)](/guide/stem-eul) at [丑 (Baka)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-in": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丙寅",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丙寅 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丙寅 ay ang ika-3 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丙寅, ang day stem ay 丙 (Apoy, Yang) at ang day branch ay 寅 (ang Tigre). Sa siklo ng animnapu, ito ang kombinasyong bilang 3."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丙 na \"Yang na Apoy (丙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Araw sa tanghaling tapat. Hayag ang damdamin, lumiliwanag ang paligid, at natural lang ang pag-una sa harapan.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 寅 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丙, ang mga stem na hawak ng 寅 ay ang mga sumusunod. Ang pangunahing stem (甲) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丙寅",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丙"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidInYeo}",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "gitna (中氣)",
                  "{hidInJung}",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "pangunahin (本氣)",
                  "{hidInBon}",
                  "Di-karaniwang suporta (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丙 ang day stem, ang Matatag na yaman ay 辛 at ang Awtoridad ay 癸."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 辛. Ang 辛 ay hindi taglay ng 寅."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 癸. Ang 癸 ay hindi taglay ng 寅."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [乙丑](/guide/pillar-eul-chuk) at ang susunod ay [丁卯](/guide/pillar-jeong-myo)."
          },
          {
            "p": "Binubuo ito ng [Yang na Apoy (丙)](/guide/stem-byeong) at [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-myo": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丁卯",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丁卯 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丁卯 ay ang ika-4 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丁卯, ang day stem ay 丁 (Apoy, Yin) at ang day branch ay 卯 (ang Kuneho). Sa siklo ng animnapu, ito ang kombinasyong bilang 4."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丁 na \"Yin na Apoy (丁)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Liwanag ng kandila. Tahimik itong nagniningas at matagal, at unang nagpapainit sa mga pinakamalapit.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 卯 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丁, ang mga stem na hawak ng 卯 ay ang mga sumusunod. Ang pangunahing stem (乙) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丁卯",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丁"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "natitira (餘氣)",
                  "{hidMyoYeo}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "pangunahin (本氣)",
                  "{hidMyoBon}",
                  "Di-karaniwang suporta (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丁 ang day stem, ang Matatag na yaman ay 庚 at ang Awtoridad ay 壬."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 庚. Ang 庚 ay hindi taglay ng 卯."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 壬. Ang 壬 ay hindi taglay ng 卯."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丙寅](/guide/pillar-byeong-in) at ang susunod ay [戊辰](/guide/pillar-mu-jin)."
          },
          {
            "p": "Binubuo ito ng [Yin na Apoy (丁)](/guide/stem-jeong) at [卯 (Kuneho)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-jin": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 戊辰",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 戊辰 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 戊辰 ay ang ika-5 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 戊辰, ang day stem ay 戊 (Lupa, Yang) at ang day branch ay 辰 (ang Dragon). Sa siklo ng animnapu, ito ang kombinasyong bilang 5."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 戊 na \"Yang na Lupa (戊)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Malawak na lupa at bundok. Mahirap yanigin at madaling sandalan, bagaman mabagal magbago ng pasyang naitakda na.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 辰 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 戊, ang mga stem na hawak ng 辰 ay ang mga sumusunod. Ang pangunahing stem (戊) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 戊辰",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 戊"
              ],
              "rows": [
                [
                  "Yin na Kahoy (乙)",
                  "natitira (餘氣)",
                  "{hidJinYeo}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "gitna (中氣)",
                  "{hidJinJung}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "pangunahin (本氣)",
                  "{hidJinBon}",
                  "Kasama (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 戊 ang day stem, ang Matatag na yaman ay 癸 at ang Awtoridad ay 乙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 癸. Ang 癸 ay taglay ng 辰 (gitna (中氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 乙. Ang 乙 ay taglay ng 辰 (natitira (餘氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丁卯](/guide/pillar-jeong-myo) at ang susunod ay [己巳](/guide/pillar-gi-sa)."
          },
          {
            "p": "Binubuo ito ng [Yang na Lupa (戊)](/guide/stem-mu) at [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-sa": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 己巳",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 己巳 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 己巳 ay ang ika-6 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 己巳, ang day stem ay 己 (Lupa, Yin) at ang day branch ay 巳 (ang Ahas). Sa siklo ng animnapu, ito ang kombinasyong bilang 6."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 己 na \"Yin na Lupa (己)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Lupa ng bukid. Tinatanggap nito ang anumang dumating at pinalalago, mas nag-aaruga kaysa nagpapakita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 巳 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 己, ang mga stem na hawak ng 巳 ay ang mga sumusunod. Ang pangunahing stem (丙) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 己巳",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 己"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidSaYeo}",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Metal (庚)",
                  "gitna (中氣)",
                  "{hidSaJung}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "pangunahin (本氣)",
                  "{hidSaBon}",
                  "Pag-aaruga (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 己 ang day stem, ang Matatag na yaman ay 壬 at ang Awtoridad ay 甲."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 壬. Ang 壬 ay hindi taglay ng 巳."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 甲. Ang 甲 ay hindi taglay ng 巳."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [戊辰](/guide/pillar-mu-jin) at ang susunod ay [庚午](/guide/pillar-gyeong-o)."
          },
          {
            "p": "Binubuo ito ng [Yin na Lupa (己)](/guide/stem-gi) at [巳 (Ahas)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-o": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 庚午",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 庚午 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 庚午 ay ang ika-7 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 庚午, ang day stem ay 庚 (Metal, Yang) at ang day branch ay 午 (ang Kabayo). Sa siklo ng animnapu, ito ang kombinasyong bilang 7."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 庚 na \"Yang na Metal (庚)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Bakal na hindi pa hinuhubog. Matalas magpasya at malinaw ang hangganan, kaunti ang pasensya sa bagay na nakabitin.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 午 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 庚, ang mga stem na hawak ng 午 ay ang mga sumusunod. Ang pangunahing stem (丁) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 庚午",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 庚"
              ],
              "rows": [
                [
                  "Yang na Apoy (丙)",
                  "natitira (餘氣)",
                  "{hidOYeo}",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Lupa (己)",
                  "gitna (中氣)",
                  "{hidOJung}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "pangunahin (本氣)",
                  "{hidOBon}",
                  "Awtoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 庚 ang day stem, ang Matatag na yaman ay 乙 at ang Awtoridad ay 丁."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 乙. Ang 乙 ay hindi taglay ng 午."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丁. Ang 丁 ay taglay ng 午 (pangunahin (本氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [己巳](/guide/pillar-gi-sa) at ang susunod ay [辛未](/guide/pillar-sin-mi)."
          },
          {
            "p": "Binubuo ito ng [Yang na Metal (庚)](/guide/stem-gyeong) at [午 (Kabayo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-mi": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 辛未",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 辛未 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 辛未 ay ang ika-8 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 辛未, ang day stem ay 辛 (Metal, Yin) at ang day branch ay 未 (ang Tupa). Sa siklo ng animnapu, ito ang kombinasyong bilang 8."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 辛 na \"Yin na Metal (辛)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hasang hiyas. Pinong panlasa at mataas na pamantayan; mahirap palampasin ang burarang gawa.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 未 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 辛, ang mga stem na hawak ng 未 ay ang mga sumusunod. Ang pangunahing stem (己) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 辛未",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 辛"
              ],
              "rows": [
                [
                  "Yin na Apoy (丁)",
                  "natitira (餘氣)",
                  "{hidMiYeo}",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "gitna (中氣)",
                  "{hidMiJung}",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Lupa (己)",
                  "pangunahin (本氣)",
                  "{hidMiBon}",
                  "Di-karaniwang suporta (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 辛 ang day stem, ang Matatag na yaman ay 甲 at ang Awtoridad ay 丙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 甲. Ang 甲 ay hindi taglay ng 未."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丙. Ang 丙 ay hindi taglay ng 未."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [庚午](/guide/pillar-gyeong-o) at ang susunod ay [壬申](/guide/pillar-im-sin)."
          },
          {
            "p": "Binubuo ito ng [Yin na Metal (辛)](/guide/stem-sin) at [未 (Tupa)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sin": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 壬申",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 壬申 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 壬申 ay ang ika-9 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 壬申, ang day stem ay 壬 (Tubig, Yang) at ang day branch ay 申 (ang Unggoy). Sa siklo ng animnapu, ito ang kombinasyong bilang 9."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 壬 na \"Yang na Tubig (壬)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Ilog at dagat. Malawak ang pananaw, at may mata kung saan patungo ang agos.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 申 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 壬, ang mga stem na hawak ng 申 ay ang mga sumusunod. Ang pangunahing stem (庚) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 壬申",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 壬"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidSinYeo}",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "gitna (中氣)",
                  "{hidSinJung}",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Metal (庚)",
                  "pangunahin (本氣)",
                  "{hidSinBon}",
                  "Di-karaniwang suporta (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 壬 ang day stem, ang Matatag na yaman ay 丁 at ang Awtoridad ay 己."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丁. Ang 丁 ay hindi taglay ng 申."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 己. Ang 己 ay hindi taglay ng 申."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [辛未](/guide/pillar-sin-mi) at ang susunod ay [癸酉](/guide/pillar-gye-yu)."
          },
          {
            "p": "Binubuo ito ng [Yang na Tubig (壬)](/guide/stem-im) at [申 (Unggoy)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-yu": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 癸酉",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 癸酉 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 癸酉 ay ang ika-10 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 癸酉, ang day stem ay 癸 (Tubig, Yin) at ang day branch ay 酉 (ang Manok). Sa siklo ng animnapu, ito ang kombinasyong bilang 10."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 癸 na \"Yin na Tubig (癸)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hamog at ulan. Tahimik itong tumatagos, at nababasa ang himig bago pa ang salita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 酉 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 癸, ang mga stem na hawak ng 酉 ay ang mga sumusunod. Ang pangunahing stem (辛) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 癸酉",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 癸"
              ],
              "rows": [
                [
                  "Yang na Metal (庚)",
                  "natitira (餘氣)",
                  "{hidYuYeo}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Metal (辛)",
                  "pangunahin (本氣)",
                  "{hidYuBon}",
                  "Di-karaniwang suporta (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 癸 ang day stem, ang Matatag na yaman ay 丙 at ang Awtoridad ay 戊."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丙. Ang 丙 ay hindi taglay ng 酉."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 戊. Ang 戊 ay hindi taglay ng 酉."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [壬申](/guide/pillar-im-sin) at ang susunod ay [甲戌](/guide/pillar-gap-sul)."
          },
          {
            "p": "Binubuo ito ng [Yin na Tubig (癸)](/guide/stem-gye) at [酉 (Manok)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sul": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 甲戌",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 甲戌 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 甲戌 ay ang ika-11 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 甲戌, ang day stem ay 甲 (Kahoy, Yang) at ang day branch ay 戌 (ang Aso). Sa siklo ng animnapu, ito ang kombinasyong bilang 11."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 甲 na \"Yang na Kahoy (甲)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Matayog na punong tuwid ang tubo. Kapag naitakda na ang direksyon, hindi na ito nag-aalangan, at mas pipiliing magtiis kaysa yumuko.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 戌 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 甲, ang mga stem na hawak ng 戌 ay ang mga sumusunod. Ang pangunahing stem (戊) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 甲戌",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 甲"
              ],
              "rows": [
                [
                  "Yin na Metal (辛)",
                  "natitira (餘氣)",
                  "{hidSulYeo}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "gitna (中氣)",
                  "{hidSulJung}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "pangunahin (本氣)",
                  "{hidSulBon}",
                  "Biglaang yaman (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 甲 ang day stem, ang Matatag na yaman ay 己 at ang Awtoridad ay 辛."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 己. Ang 己 ay hindi taglay ng 戌."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 辛. Ang 辛 ay taglay ng 戌 (natitira (餘氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [癸酉](/guide/pillar-gye-yu) at ang susunod ay [乙亥](/guide/pillar-eul-hae)."
          },
          {
            "p": "Binubuo ito ng [Yang na Kahoy (甲)](/guide/stem-gap) at [戌 (Aso)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-hae": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 乙亥",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 乙亥 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 乙亥 ay ang ika-12 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 乙亥, ang day stem ay 乙 (Kahoy, Yin) at ang day branch ay 亥 (ang Baboy). Sa siklo ng animnapu, ito ang kombinasyong bilang 12."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 乙 na \"Yin na Kahoy (乙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Baging — malambot na damo. Yumuyuko ito ayon sa sitwasyon para makasulong, at hindi napipigtas.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 亥 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 乙, ang mga stem na hawak ng 亥 ay ang mga sumusunod. Ang pangunahing stem (壬) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 乙亥",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 乙"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidHaeYeo}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "gitna (中氣)",
                  "{hidHaeJung}",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "pangunahin (本氣)",
                  "{hidHaeBon}",
                  "Pag-aaruga (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 乙 ang day stem, ang Matatag na yaman ay 戊 at ang Awtoridad ay 庚."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 戊. Ang 戊 ay taglay ng 亥 (natitira (餘氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 庚. Ang 庚 ay hindi taglay ng 亥."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [甲戌](/guide/pillar-gap-sul) at ang susunod ay [丙子](/guide/pillar-byeong-ja)."
          },
          {
            "p": "Binubuo ito ng [Yin na Kahoy (乙)](/guide/stem-eul) at [亥 (Baboy)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-ja": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丙子",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丙子 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丙子 ay ang ika-13 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丙子, ang day stem ay 丙 (Apoy, Yang) at ang day branch ay 子 (ang Daga). Sa siklo ng animnapu, ito ang kombinasyong bilang 13."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丙 na \"Yang na Apoy (丙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Araw sa tanghaling tapat. Hayag ang damdamin, lumiliwanag ang paligid, at natural lang ang pag-una sa harapan.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 子 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丙, ang mga stem na hawak ng 子 ay ang mga sumusunod. Ang pangunahing stem (癸) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丙子",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丙"
              ],
              "rows": [
                [
                  "Yang na Tubig (壬)",
                  "natitira (餘氣)",
                  "{hidJaYeo}",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "pangunahin (本氣)",
                  "{hidJaBon}",
                  "Awtoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丙 ang day stem, ang Matatag na yaman ay 辛 at ang Awtoridad ay 癸."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 辛. Ang 辛 ay hindi taglay ng 子."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 癸. Ang 癸 ay taglay ng 子 (pangunahin (本氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [乙亥](/guide/pillar-eul-hae) at ang susunod ay [丁丑](/guide/pillar-jeong-chuk)."
          },
          {
            "p": "Binubuo ito ng [Yang na Apoy (丙)](/guide/stem-byeong) at [子 (Daga)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-chuk": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丁丑",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丁丑 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丁丑 ay ang ika-14 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丁丑, ang day stem ay 丁 (Apoy, Yin) at ang day branch ay 丑 (ang Baka). Sa siklo ng animnapu, ito ang kombinasyong bilang 14."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丁 na \"Yin na Apoy (丁)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Liwanag ng kandila. Tahimik itong nagniningas at matagal, at unang nagpapainit sa mga pinakamalapit.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 丑 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丁, ang mga stem na hawak ng 丑 ay ang mga sumusunod. Ang pangunahing stem (己) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丁丑",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丁"
              ],
              "rows": [
                [
                  "Yin na Tubig (癸)",
                  "natitira (餘氣)",
                  "{hidChukYeo}",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Metal (辛)",
                  "gitna (中氣)",
                  "{hidChukJung}",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Lupa (己)",
                  "pangunahin (本氣)",
                  "{hidChukBon}",
                  "Pagpapahayag (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丁 ang day stem, ang Matatag na yaman ay 庚 at ang Awtoridad ay 壬."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 庚. Ang 庚 ay hindi taglay ng 丑."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 壬. Ang 壬 ay hindi taglay ng 丑."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丙子](/guide/pillar-byeong-ja) at ang susunod ay [戊寅](/guide/pillar-mu-in)."
          },
          {
            "p": "Binubuo ito ng [Yin na Apoy (丁)](/guide/stem-jeong) at [丑 (Baka)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-in": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 戊寅",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 戊寅 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 戊寅 ay ang ika-15 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 戊寅, ang day stem ay 戊 (Lupa, Yang) at ang day branch ay 寅 (ang Tigre). Sa siklo ng animnapu, ito ang kombinasyong bilang 15."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 戊 na \"Yang na Lupa (戊)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Malawak na lupa at bundok. Mahirap yanigin at madaling sandalan, bagaman mabagal magbago ng pasyang naitakda na.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 寅 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 戊, ang mga stem na hawak ng 寅 ay ang mga sumusunod. Ang pangunahing stem (甲) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 戊寅",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 戊"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidInYeo}",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "gitna (中氣)",
                  "{hidInJung}",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "pangunahin (本氣)",
                  "{hidInBon}",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 戊 ang day stem, ang Matatag na yaman ay 癸 at ang Awtoridad ay 乙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 癸. Ang 癸 ay hindi taglay ng 寅."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 乙. Ang 乙 ay hindi taglay ng 寅."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丁丑](/guide/pillar-jeong-chuk) at ang susunod ay [己卯](/guide/pillar-gi-myo)."
          },
          {
            "p": "Binubuo ito ng [Yang na Lupa (戊)](/guide/stem-mu) at [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-myo": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 己卯",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 己卯 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 己卯 ay ang ika-16 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 己卯, ang day stem ay 己 (Lupa, Yin) at ang day branch ay 卯 (ang Kuneho). Sa siklo ng animnapu, ito ang kombinasyong bilang 16."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 己 na \"Yin na Lupa (己)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Lupa ng bukid. Tinatanggap nito ang anumang dumating at pinalalago, mas nag-aaruga kaysa nagpapakita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 卯 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 己, ang mga stem na hawak ng 卯 ay ang mga sumusunod. Ang pangunahing stem (乙) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 己卯",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 己"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "natitira (餘氣)",
                  "{hidMyoYeo}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "pangunahin (本氣)",
                  "{hidMyoBon}",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 己 ang day stem, ang Matatag na yaman ay 壬 at ang Awtoridad ay 甲."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 壬. Ang 壬 ay hindi taglay ng 卯."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 甲. Ang 甲 ay taglay ng 卯 (natitira (餘氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [戊寅](/guide/pillar-mu-in) at ang susunod ay [庚辰](/guide/pillar-gyeong-jin)."
          },
          {
            "p": "Binubuo ito ng [Yin na Lupa (己)](/guide/stem-gi) at [卯 (Kuneho)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-jin": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 庚辰",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 庚辰 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 庚辰 ay ang ika-17 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 庚辰, ang day stem ay 庚 (Metal, Yang) at ang day branch ay 辰 (ang Dragon). Sa siklo ng animnapu, ito ang kombinasyong bilang 17."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 庚 na \"Yang na Metal (庚)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Bakal na hindi pa hinuhubog. Matalas magpasya at malinaw ang hangganan, kaunti ang pasensya sa bagay na nakabitin.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 辰 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 庚, ang mga stem na hawak ng 辰 ay ang mga sumusunod. Ang pangunahing stem (戊) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 庚辰",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 庚"
              ],
              "rows": [
                [
                  "Yin na Kahoy (乙)",
                  "natitira (餘氣)",
                  "{hidJinYeo}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "gitna (中氣)",
                  "{hidJinJung}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "pangunahin (本氣)",
                  "{hidJinBon}",
                  "Di-karaniwang suporta (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 庚 ang day stem, ang Matatag na yaman ay 乙 at ang Awtoridad ay 丁."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 乙. Ang 乙 ay taglay ng 辰 (natitira (餘氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丁. Ang 丁 ay hindi taglay ng 辰."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [己卯](/guide/pillar-gi-myo) at ang susunod ay [辛巳](/guide/pillar-sin-sa)."
          },
          {
            "p": "Binubuo ito ng [Yang na Metal (庚)](/guide/stem-gyeong) at [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-sa": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 辛巳",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 辛巳 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 辛巳 ay ang ika-18 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 辛巳, ang day stem ay 辛 (Metal, Yin) at ang day branch ay 巳 (ang Ahas). Sa siklo ng animnapu, ito ang kombinasyong bilang 18."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 辛 na \"Yin na Metal (辛)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hasang hiyas. Pinong panlasa at mataas na pamantayan; mahirap palampasin ang burarang gawa.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 巳 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 辛, ang mga stem na hawak ng 巳 ay ang mga sumusunod. Ang pangunahing stem (丙) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 辛巳",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 辛"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidSaYeo}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Metal (庚)",
                  "gitna (中氣)",
                  "{hidSaJung}",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "pangunahin (本氣)",
                  "{hidSaBon}",
                  "Awtoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 辛 ang day stem, ang Matatag na yaman ay 甲 at ang Awtoridad ay 丙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 甲. Ang 甲 ay hindi taglay ng 巳."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丙. Ang 丙 ay taglay ng 巳 (pangunahin (本氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [庚辰](/guide/pillar-gyeong-jin) at ang susunod ay [壬午](/guide/pillar-im-o)."
          },
          {
            "p": "Binubuo ito ng [Yin na Metal (辛)](/guide/stem-sin) at [巳 (Ahas)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-o": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 壬午",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 壬午 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 壬午 ay ang ika-19 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 壬午, ang day stem ay 壬 (Tubig, Yang) at ang day branch ay 午 (ang Kabayo). Sa siklo ng animnapu, ito ang kombinasyong bilang 19."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 壬 na \"Yang na Tubig (壬)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Ilog at dagat. Malawak ang pananaw, at may mata kung saan patungo ang agos.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 午 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 壬, ang mga stem na hawak ng 午 ay ang mga sumusunod. Ang pangunahing stem (丁) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 壬午",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 壬"
              ],
              "rows": [
                [
                  "Yang na Apoy (丙)",
                  "natitira (餘氣)",
                  "{hidOYeo}",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Lupa (己)",
                  "gitna (中氣)",
                  "{hidOJung}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "pangunahin (本氣)",
                  "{hidOBon}",
                  "Matatag na yaman (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 壬 ang day stem, ang Matatag na yaman ay 丁 at ang Awtoridad ay 己."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丁. Ang 丁 ay taglay ng 午 (pangunahin (本氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 己. Ang 己 ay taglay ng 午 (gitna (中氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [辛巳](/guide/pillar-sin-sa) at ang susunod ay [癸未](/guide/pillar-gye-mi)."
          },
          {
            "p": "Binubuo ito ng [Yang na Tubig (壬)](/guide/stem-im) at [午 (Kabayo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-mi": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 癸未",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 癸未 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 癸未 ay ang ika-20 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 癸未, ang day stem ay 癸 (Tubig, Yin) at ang day branch ay 未 (ang Tupa). Sa siklo ng animnapu, ito ang kombinasyong bilang 20."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 癸 na \"Yin na Tubig (癸)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hamog at ulan. Tahimik itong tumatagos, at nababasa ang himig bago pa ang salita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 未 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 癸, ang mga stem na hawak ng 未 ay ang mga sumusunod. Ang pangunahing stem (己) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 癸未",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 癸"
              ],
              "rows": [
                [
                  "Yin na Apoy (丁)",
                  "natitira (餘氣)",
                  "{hidMiYeo}",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "gitna (中氣)",
                  "{hidMiJung}",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Lupa (己)",
                  "pangunahin (本氣)",
                  "{hidMiBon}",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 癸 ang day stem, ang Matatag na yaman ay 丙 at ang Awtoridad ay 戊."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丙. Ang 丙 ay hindi taglay ng 未."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 戊. Ang 戊 ay hindi taglay ng 未."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [壬午](/guide/pillar-im-o) at ang susunod ay [甲申](/guide/pillar-gap-sin)."
          },
          {
            "p": "Binubuo ito ng [Yin na Tubig (癸)](/guide/stem-gye) at [未 (Tupa)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-sin": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 甲申",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 甲申 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 甲申 ay ang ika-21 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 甲申, ang day stem ay 甲 (Kahoy, Yang) at ang day branch ay 申 (ang Unggoy). Sa siklo ng animnapu, ito ang kombinasyong bilang 21."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 甲 na \"Yang na Kahoy (甲)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Matayog na punong tuwid ang tubo. Kapag naitakda na ang direksyon, hindi na ito nag-aalangan, at mas pipiliing magtiis kaysa yumuko.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 申 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 甲, ang mga stem na hawak ng 申 ay ang mga sumusunod. Ang pangunahing stem (庚) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 甲申",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 甲"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidSinYeo}",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "gitna (中氣)",
                  "{hidSinJung}",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Metal (庚)",
                  "pangunahin (本氣)",
                  "{hidSinBon}",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 甲 ang day stem, ang Matatag na yaman ay 己 at ang Awtoridad ay 辛."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 己. Ang 己 ay hindi taglay ng 申."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 辛. Ang 辛 ay hindi taglay ng 申."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [癸未](/guide/pillar-gye-mi) at ang susunod ay [乙酉](/guide/pillar-eul-yu)."
          },
          {
            "p": "Binubuo ito ng [Yang na Kahoy (甲)](/guide/stem-gap) at [申 (Unggoy)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-yu": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 乙酉",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 乙酉 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 乙酉 ay ang ika-22 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 乙酉, ang day stem ay 乙 (Kahoy, Yin) at ang day branch ay 酉 (ang Manok). Sa siklo ng animnapu, ito ang kombinasyong bilang 22."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 乙 na \"Yin na Kahoy (乙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Baging — malambot na damo. Yumuyuko ito ayon sa sitwasyon para makasulong, at hindi napipigtas.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 酉 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 乙, ang mga stem na hawak ng 酉 ay ang mga sumusunod. Ang pangunahing stem (辛) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 乙酉",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 乙"
              ],
              "rows": [
                [
                  "Yang na Metal (庚)",
                  "natitira (餘氣)",
                  "{hidYuYeo}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yin na Metal (辛)",
                  "pangunahin (本氣)",
                  "{hidYuBon}",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 乙 ang day stem, ang Matatag na yaman ay 戊 at ang Awtoridad ay 庚."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 戊. Ang 戊 ay hindi taglay ng 酉."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 庚. Ang 庚 ay taglay ng 酉 (natitira (餘氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [甲申](/guide/pillar-gap-sin) at ang susunod ay [丙戌](/guide/pillar-byeong-sul)."
          },
          {
            "p": "Binubuo ito ng [Yin na Kahoy (乙)](/guide/stem-eul) at [酉 (Manok)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sul": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丙戌",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丙戌 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丙戌 ay ang ika-23 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丙戌, ang day stem ay 丙 (Apoy, Yang) at ang day branch ay 戌 (ang Aso). Sa siklo ng animnapu, ito ang kombinasyong bilang 23."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丙 na \"Yang na Apoy (丙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Araw sa tanghaling tapat. Hayag ang damdamin, lumiliwanag ang paligid, at natural lang ang pag-una sa harapan.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 戌 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丙, ang mga stem na hawak ng 戌 ay ang mga sumusunod. Ang pangunahing stem (戊) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丙戌",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丙"
              ],
              "rows": [
                [
                  "Yin na Metal (辛)",
                  "natitira (餘氣)",
                  "{hidSulYeo}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "gitna (中氣)",
                  "{hidSulJung}",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "pangunahin (本氣)",
                  "{hidSulBon}",
                  "Pagpapahayag (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丙 ang day stem, ang Matatag na yaman ay 辛 at ang Awtoridad ay 癸."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 辛. Ang 辛 ay taglay ng 戌 (natitira (餘氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 癸. Ang 癸 ay hindi taglay ng 戌."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [乙酉](/guide/pillar-eul-yu) at ang susunod ay [丁亥](/guide/pillar-jeong-hae)."
          },
          {
            "p": "Binubuo ito ng [Yang na Apoy (丙)](/guide/stem-byeong) at [戌 (Aso)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-hae": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丁亥",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丁亥 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丁亥 ay ang ika-24 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丁亥, ang day stem ay 丁 (Apoy, Yin) at ang day branch ay 亥 (ang Baboy). Sa siklo ng animnapu, ito ang kombinasyong bilang 24."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丁 na \"Yin na Apoy (丁)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Liwanag ng kandila. Tahimik itong nagniningas at matagal, at unang nagpapainit sa mga pinakamalapit.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 亥 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丁, ang mga stem na hawak ng 亥 ay ang mga sumusunod. Ang pangunahing stem (壬) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丁亥",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丁"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidHaeYeo}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "gitna (中氣)",
                  "{hidHaeJung}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "pangunahin (本氣)",
                  "{hidHaeBon}",
                  "Awtoridad (正官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丁 ang day stem, ang Matatag na yaman ay 庚 at ang Awtoridad ay 壬."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 庚. Ang 庚 ay hindi taglay ng 亥."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 壬. Ang 壬 ay taglay ng 亥 (pangunahin (本氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丙戌](/guide/pillar-byeong-sul) at ang susunod ay [戊子](/guide/pillar-mu-ja)."
          },
          {
            "p": "Binubuo ito ng [Yin na Apoy (丁)](/guide/stem-jeong) at [亥 (Baboy)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-ja": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 戊子",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 戊子 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 戊子 ay ang ika-25 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 戊子, ang day stem ay 戊 (Lupa, Yang) at ang day branch ay 子 (ang Daga). Sa siklo ng animnapu, ito ang kombinasyong bilang 25."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 戊 na \"Yang na Lupa (戊)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Malawak na lupa at bundok. Mahirap yanigin at madaling sandalan, bagaman mabagal magbago ng pasyang naitakda na.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 子 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 戊, ang mga stem na hawak ng 子 ay ang mga sumusunod. Ang pangunahing stem (癸) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 戊子",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 戊"
              ],
              "rows": [
                [
                  "Yang na Tubig (壬)",
                  "natitira (餘氣)",
                  "{hidJaYeo}",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "pangunahin (本氣)",
                  "{hidJaBon}",
                  "Matatag na yaman (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 戊 ang day stem, ang Matatag na yaman ay 癸 at ang Awtoridad ay 乙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 癸. Ang 癸 ay taglay ng 子 (pangunahin (本氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 乙. Ang 乙 ay hindi taglay ng 子."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丁亥](/guide/pillar-jeong-hae) at ang susunod ay [己丑](/guide/pillar-gi-chuk)."
          },
          {
            "p": "Binubuo ito ng [Yang na Lupa (戊)](/guide/stem-mu) at [子 (Daga)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-chuk": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 己丑",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 己丑 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 己丑 ay ang ika-26 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 己丑, ang day stem ay 己 (Lupa, Yin) at ang day branch ay 丑 (ang Baka). Sa siklo ng animnapu, ito ang kombinasyong bilang 26."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 己 na \"Yin na Lupa (己)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Lupa ng bukid. Tinatanggap nito ang anumang dumating at pinalalago, mas nag-aaruga kaysa nagpapakita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 丑 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 己, ang mga stem na hawak ng 丑 ay ang mga sumusunod. Ang pangunahing stem (己) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 己丑",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 己"
              ],
              "rows": [
                [
                  "Yin na Tubig (癸)",
                  "natitira (餘氣)",
                  "{hidChukYeo}",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yin na Metal (辛)",
                  "gitna (中氣)",
                  "{hidChukJung}",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Lupa (己)",
                  "pangunahin (本氣)",
                  "{hidChukBon}",
                  "Kasama (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 己 ang day stem, ang Matatag na yaman ay 壬 at ang Awtoridad ay 甲."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 壬. Ang 壬 ay hindi taglay ng 丑."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 甲. Ang 甲 ay hindi taglay ng 丑."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [戊子](/guide/pillar-mu-ja) at ang susunod ay [庚寅](/guide/pillar-gyeong-in)."
          },
          {
            "p": "Binubuo ito ng [Yin na Lupa (己)](/guide/stem-gi) at [丑 (Baka)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-in": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 庚寅",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 庚寅 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 庚寅 ay ang ika-27 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 庚寅, ang day stem ay 庚 (Metal, Yang) at ang day branch ay 寅 (ang Tigre). Sa siklo ng animnapu, ito ang kombinasyong bilang 27."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 庚 na \"Yang na Metal (庚)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Bakal na hindi pa hinuhubog. Matalas magpasya at malinaw ang hangganan, kaunti ang pasensya sa bagay na nakabitin.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 寅 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 庚, ang mga stem na hawak ng 寅 ay ang mga sumusunod. Ang pangunahing stem (甲) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 庚寅",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 庚"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidInYeo}",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "gitna (中氣)",
                  "{hidInJung}",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "pangunahin (本氣)",
                  "{hidInBon}",
                  "Biglaang yaman (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 庚 ang day stem, ang Matatag na yaman ay 乙 at ang Awtoridad ay 丁."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 乙. Ang 乙 ay hindi taglay ng 寅."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丁. Ang 丁 ay hindi taglay ng 寅."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [己丑](/guide/pillar-gi-chuk) at ang susunod ay [辛卯](/guide/pillar-sin-myo)."
          },
          {
            "p": "Binubuo ito ng [Yang na Metal (庚)](/guide/stem-gyeong) at [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-myo": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 辛卯",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 辛卯 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 辛卯 ay ang ika-28 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 辛卯, ang day stem ay 辛 (Metal, Yin) at ang day branch ay 卯 (ang Kuneho). Sa siklo ng animnapu, ito ang kombinasyong bilang 28."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 辛 na \"Yin na Metal (辛)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hasang hiyas. Pinong panlasa at mataas na pamantayan; mahirap palampasin ang burarang gawa.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 卯 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 辛, ang mga stem na hawak ng 卯 ay ang mga sumusunod. Ang pangunahing stem (乙) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 辛卯",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 辛"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "natitira (餘氣)",
                  "{hidMyoYeo}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "pangunahin (本氣)",
                  "{hidMyoBon}",
                  "Biglaang yaman (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 辛 ang day stem, ang Matatag na yaman ay 甲 at ang Awtoridad ay 丙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 甲. Ang 甲 ay taglay ng 卯 (natitira (餘氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丙. Ang 丙 ay hindi taglay ng 卯."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [庚寅](/guide/pillar-gyeong-in) at ang susunod ay [壬辰](/guide/pillar-im-jin)."
          },
          {
            "p": "Binubuo ito ng [Yin na Metal (辛)](/guide/stem-sin) at [卯 (Kuneho)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-jin": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 壬辰",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 壬辰 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 壬辰 ay ang ika-29 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 壬辰, ang day stem ay 壬 (Tubig, Yang) at ang day branch ay 辰 (ang Dragon). Sa siklo ng animnapu, ito ang kombinasyong bilang 29."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 壬 na \"Yang na Tubig (壬)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Ilog at dagat. Malawak ang pananaw, at may mata kung saan patungo ang agos.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 辰 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 壬, ang mga stem na hawak ng 辰 ay ang mga sumusunod. Ang pangunahing stem (戊) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 壬辰",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 壬"
              ],
              "rows": [
                [
                  "Yin na Kahoy (乙)",
                  "natitira (餘氣)",
                  "{hidJinYeo}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "gitna (中氣)",
                  "{hidJinJung}",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "pangunahin (本氣)",
                  "{hidJinBon}",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 壬 ang day stem, ang Matatag na yaman ay 丁 at ang Awtoridad ay 己."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丁. Ang 丁 ay hindi taglay ng 辰."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 己. Ang 己 ay hindi taglay ng 辰."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [辛卯](/guide/pillar-sin-myo) at ang susunod ay [癸巳](/guide/pillar-gye-sa)."
          },
          {
            "p": "Binubuo ito ng [Yang na Tubig (壬)](/guide/stem-im) at [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-sa": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 癸巳",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 癸巳 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 癸巳 ay ang ika-30 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 癸巳, ang day stem ay 癸 (Tubig, Yin) at ang day branch ay 巳 (ang Ahas). Sa siklo ng animnapu, ito ang kombinasyong bilang 30."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 癸 na \"Yin na Tubig (癸)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hamog at ulan. Tahimik itong tumatagos, at nababasa ang himig bago pa ang salita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 巳 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 癸, ang mga stem na hawak ng 巳 ay ang mga sumusunod. Ang pangunahing stem (丙) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 癸巳",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 癸"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidSaYeo}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Metal (庚)",
                  "gitna (中氣)",
                  "{hidSaJung}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "pangunahin (本氣)",
                  "{hidSaBon}",
                  "Matatag na yaman (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 癸 ang day stem, ang Matatag na yaman ay 丙 at ang Awtoridad ay 戊."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丙. Ang 丙 ay taglay ng 巳 (pangunahin (本氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 戊. Ang 戊 ay taglay ng 巳 (natitira (餘氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [壬辰](/guide/pillar-im-jin) at ang susunod ay [甲午](/guide/pillar-gap-o)."
          },
          {
            "p": "Binubuo ito ng [Yin na Tubig (癸)](/guide/stem-gye) at [巳 (Ahas)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-o": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 甲午",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 甲午 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 甲午 ay ang ika-31 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 甲午, ang day stem ay 甲 (Kahoy, Yang) at ang day branch ay 午 (ang Kabayo). Sa siklo ng animnapu, ito ang kombinasyong bilang 31."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 甲 na \"Yang na Kahoy (甲)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Matayog na punong tuwid ang tubo. Kapag naitakda na ang direksyon, hindi na ito nag-aalangan, at mas pipiliing magtiis kaysa yumuko.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 午 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 甲, ang mga stem na hawak ng 午 ay ang mga sumusunod. Ang pangunahing stem (丁) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 甲午",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 甲"
              ],
              "rows": [
                [
                  "Yang na Apoy (丙)",
                  "natitira (餘氣)",
                  "{hidOYeo}",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Lupa (己)",
                  "gitna (中氣)",
                  "{hidOJung}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "pangunahin (本氣)",
                  "{hidOBon}",
                  "Manggugulo (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 甲 ang day stem, ang Matatag na yaman ay 己 at ang Awtoridad ay 辛."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 己. Ang 己 ay taglay ng 午 (gitna (中氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 辛. Ang 辛 ay hindi taglay ng 午."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [癸巳](/guide/pillar-gye-sa) at ang susunod ay [乙未](/guide/pillar-eul-mi)."
          },
          {
            "p": "Binubuo ito ng [Yang na Kahoy (甲)](/guide/stem-gap) at [午 (Kabayo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-mi": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 乙未",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 乙未 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 乙未 ay ang ika-32 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 乙未, ang day stem ay 乙 (Kahoy, Yin) at ang day branch ay 未 (ang Tupa). Sa siklo ng animnapu, ito ang kombinasyong bilang 32."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 乙 na \"Yin na Kahoy (乙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Baging — malambot na damo. Yumuyuko ito ayon sa sitwasyon para makasulong, at hindi napipigtas.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 未 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 乙, ang mga stem na hawak ng 未 ay ang mga sumusunod. Ang pangunahing stem (己) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 乙未",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 乙"
              ],
              "rows": [
                [
                  "Yin na Apoy (丁)",
                  "natitira (餘氣)",
                  "{hidMiYeo}",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "gitna (中氣)",
                  "{hidMiJung}",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Lupa (己)",
                  "pangunahin (本氣)",
                  "{hidMiBon}",
                  "Biglaang yaman (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 乙 ang day stem, ang Matatag na yaman ay 戊 at ang Awtoridad ay 庚."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 戊. Ang 戊 ay hindi taglay ng 未."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 庚. Ang 庚 ay hindi taglay ng 未."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [甲午](/guide/pillar-gap-o) at ang susunod ay [丙申](/guide/pillar-byeong-sin)."
          },
          {
            "p": "Binubuo ito ng [Yin na Kahoy (乙)](/guide/stem-eul) at [未 (Tupa)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-sin": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丙申",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丙申 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丙申 ay ang ika-33 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丙申, ang day stem ay 丙 (Apoy, Yang) at ang day branch ay 申 (ang Unggoy). Sa siklo ng animnapu, ito ang kombinasyong bilang 33."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丙 na \"Yang na Apoy (丙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Araw sa tanghaling tapat. Hayag ang damdamin, lumiliwanag ang paligid, at natural lang ang pag-una sa harapan.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 申 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丙, ang mga stem na hawak ng 申 ay ang mga sumusunod. Ang pangunahing stem (庚) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丙申",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丙"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidSinYeo}",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "gitna (中氣)",
                  "{hidSinJung}",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Metal (庚)",
                  "pangunahin (本氣)",
                  "{hidSinBon}",
                  "Biglaang yaman (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丙 ang day stem, ang Matatag na yaman ay 辛 at ang Awtoridad ay 癸."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 辛. Ang 辛 ay hindi taglay ng 申."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 癸. Ang 癸 ay hindi taglay ng 申."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [乙未](/guide/pillar-eul-mi) at ang susunod ay [丁酉](/guide/pillar-jeong-yu)."
          },
          {
            "p": "Binubuo ito ng [Yang na Apoy (丙)](/guide/stem-byeong) at [申 (Unggoy)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-yu": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丁酉",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丁酉 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丁酉 ay ang ika-34 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丁酉, ang day stem ay 丁 (Apoy, Yin) at ang day branch ay 酉 (ang Manok). Sa siklo ng animnapu, ito ang kombinasyong bilang 34."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丁 na \"Yin na Apoy (丁)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Liwanag ng kandila. Tahimik itong nagniningas at matagal, at unang nagpapainit sa mga pinakamalapit.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 酉 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丁, ang mga stem na hawak ng 酉 ay ang mga sumusunod. Ang pangunahing stem (辛) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丁酉",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丁"
              ],
              "rows": [
                [
                  "Yang na Metal (庚)",
                  "natitira (餘氣)",
                  "{hidYuYeo}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yin na Metal (辛)",
                  "pangunahin (本氣)",
                  "{hidYuBon}",
                  "Biglaang yaman (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丁 ang day stem, ang Matatag na yaman ay 庚 at ang Awtoridad ay 壬."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 庚. Ang 庚 ay taglay ng 酉 (natitira (餘氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 壬. Ang 壬 ay hindi taglay ng 酉."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丙申](/guide/pillar-byeong-sin) at ang susunod ay [戊戌](/guide/pillar-mu-sul)."
          },
          {
            "p": "Binubuo ito ng [Yin na Apoy (丁)](/guide/stem-jeong) at [酉 (Manok)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sul": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 戊戌",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 戊戌 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 戊戌 ay ang ika-35 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 戊戌, ang day stem ay 戊 (Lupa, Yang) at ang day branch ay 戌 (ang Aso). Sa siklo ng animnapu, ito ang kombinasyong bilang 35."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 戊 na \"Yang na Lupa (戊)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Malawak na lupa at bundok. Mahirap yanigin at madaling sandalan, bagaman mabagal magbago ng pasyang naitakda na.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 戌 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 戊, ang mga stem na hawak ng 戌 ay ang mga sumusunod. Ang pangunahing stem (戊) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 戊戌",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 戊"
              ],
              "rows": [
                [
                  "Yin na Metal (辛)",
                  "natitira (餘氣)",
                  "{hidSulYeo}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "gitna (中氣)",
                  "{hidSulJung}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "pangunahin (本氣)",
                  "{hidSulBon}",
                  "Kasama (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 戊 ang day stem, ang Matatag na yaman ay 癸 at ang Awtoridad ay 乙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 癸. Ang 癸 ay hindi taglay ng 戌."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 乙. Ang 乙 ay hindi taglay ng 戌."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丁酉](/guide/pillar-jeong-yu) at ang susunod ay [己亥](/guide/pillar-gi-hae)."
          },
          {
            "p": "Binubuo ito ng [Yang na Lupa (戊)](/guide/stem-mu) at [戌 (Aso)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-hae": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 己亥",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 己亥 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 己亥 ay ang ika-36 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 己亥, ang day stem ay 己 (Lupa, Yin) at ang day branch ay 亥 (ang Baboy). Sa siklo ng animnapu, ito ang kombinasyong bilang 36."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 己 na \"Yin na Lupa (己)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Lupa ng bukid. Tinatanggap nito ang anumang dumating at pinalalago, mas nag-aaruga kaysa nagpapakita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 亥 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 己, ang mga stem na hawak ng 亥 ay ang mga sumusunod. Ang pangunahing stem (壬) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 己亥",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 己"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidHaeYeo}",
                  "Karibal (劫財)"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "gitna (中氣)",
                  "{hidHaeJung}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "pangunahin (本氣)",
                  "{hidHaeBon}",
                  "Matatag na yaman (正財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 己 ang day stem, ang Matatag na yaman ay 壬 at ang Awtoridad ay 甲."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 壬. Ang 壬 ay taglay ng 亥 (pangunahin (本氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 甲. Ang 甲 ay taglay ng 亥 (gitna (中氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [戊戌](/guide/pillar-mu-sul) at ang susunod ay [庚子](/guide/pillar-gyeong-ja)."
          },
          {
            "p": "Binubuo ito ng [Yin na Lupa (己)](/guide/stem-gi) at [亥 (Baboy)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-ja": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 庚子",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 庚子 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 庚子 ay ang ika-37 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 庚子, ang day stem ay 庚 (Metal, Yang) at ang day branch ay 子 (ang Daga). Sa siklo ng animnapu, ito ang kombinasyong bilang 37."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 庚 na \"Yang na Metal (庚)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Bakal na hindi pa hinuhubog. Matalas magpasya at malinaw ang hangganan, kaunti ang pasensya sa bagay na nakabitin.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 子 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 庚, ang mga stem na hawak ng 子 ay ang mga sumusunod. Ang pangunahing stem (癸) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 庚子",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 庚"
              ],
              "rows": [
                [
                  "Yang na Tubig (壬)",
                  "natitira (餘氣)",
                  "{hidJaYeo}",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "pangunahin (本氣)",
                  "{hidJaBon}",
                  "Manggugulo (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 庚 ang day stem, ang Matatag na yaman ay 乙 at ang Awtoridad ay 丁."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 乙. Ang 乙 ay hindi taglay ng 子."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丁. Ang 丁 ay hindi taglay ng 子."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [己亥](/guide/pillar-gi-hae) at ang susunod ay [辛丑](/guide/pillar-sin-chuk)."
          },
          {
            "p": "Binubuo ito ng [Yang na Metal (庚)](/guide/stem-gyeong) at [子 (Daga)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-chuk": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 辛丑",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 辛丑 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 辛丑 ay ang ika-38 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 辛丑, ang day stem ay 辛 (Metal, Yin) at ang day branch ay 丑 (ang Baka). Sa siklo ng animnapu, ito ang kombinasyong bilang 38."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 辛 na \"Yin na Metal (辛)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hasang hiyas. Pinong panlasa at mataas na pamantayan; mahirap palampasin ang burarang gawa.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 丑 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 辛, ang mga stem na hawak ng 丑 ay ang mga sumusunod. Ang pangunahing stem (己) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 辛丑",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 辛"
              ],
              "rows": [
                [
                  "Yin na Tubig (癸)",
                  "natitira (餘氣)",
                  "{hidChukYeo}",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yin na Metal (辛)",
                  "gitna (中氣)",
                  "{hidChukJung}",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Lupa (己)",
                  "pangunahin (本氣)",
                  "{hidChukBon}",
                  "Di-karaniwang suporta (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 辛 ang day stem, ang Matatag na yaman ay 甲 at ang Awtoridad ay 丙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 甲. Ang 甲 ay hindi taglay ng 丑."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丙. Ang 丙 ay hindi taglay ng 丑."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [庚子](/guide/pillar-gyeong-ja) at ang susunod ay [壬寅](/guide/pillar-im-in)."
          },
          {
            "p": "Binubuo ito ng [Yin na Metal (辛)](/guide/stem-sin) at [丑 (Baka)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-in": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 壬寅",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 壬寅 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 壬寅 ay ang ika-39 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 壬寅, ang day stem ay 壬 (Tubig, Yang) at ang day branch ay 寅 (ang Tigre). Sa siklo ng animnapu, ito ang kombinasyong bilang 39."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 壬 na \"Yang na Tubig (壬)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Ilog at dagat. Malawak ang pananaw, at may mata kung saan patungo ang agos.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 寅 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 壬, ang mga stem na hawak ng 寅 ay ang mga sumusunod. Ang pangunahing stem (甲) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 壬寅",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 壬"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidInYeo}",
                  "Humahamon (偏官)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "gitna (中氣)",
                  "{hidInJung}",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "pangunahin (本氣)",
                  "{hidInBon}",
                  "Pagpapahayag (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 壬 ang day stem, ang Matatag na yaman ay 丁 at ang Awtoridad ay 己."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丁. Ang 丁 ay hindi taglay ng 寅."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 己. Ang 己 ay hindi taglay ng 寅."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [辛丑](/guide/pillar-sin-chuk) at ang susunod ay [癸卯](/guide/pillar-gye-myo)."
          },
          {
            "p": "Binubuo ito ng [Yang na Tubig (壬)](/guide/stem-im) at [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-myo": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 癸卯",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 癸卯 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 癸卯 ay ang ika-40 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 癸卯, ang day stem ay 癸 (Tubig, Yin) at ang day branch ay 卯 (ang Kuneho). Sa siklo ng animnapu, ito ang kombinasyong bilang 40."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 癸 na \"Yin na Tubig (癸)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hamog at ulan. Tahimik itong tumatagos, at nababasa ang himig bago pa ang salita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 卯 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 癸, ang mga stem na hawak ng 卯 ay ang mga sumusunod. Ang pangunahing stem (乙) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 癸卯",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 癸"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "natitira (餘氣)",
                  "{hidMyoYeo}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "pangunahin (本氣)",
                  "{hidMyoBon}",
                  "Pagpapahayag (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 癸 ang day stem, ang Matatag na yaman ay 丙 at ang Awtoridad ay 戊."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丙. Ang 丙 ay hindi taglay ng 卯."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 戊. Ang 戊 ay hindi taglay ng 卯."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [壬寅](/guide/pillar-im-in) at ang susunod ay [甲辰](/guide/pillar-gap-jin)."
          },
          {
            "p": "Binubuo ito ng [Yin na Tubig (癸)](/guide/stem-gye) at [卯 (Kuneho)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-jin": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 甲辰",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 甲辰 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 甲辰 ay ang ika-41 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 甲辰, ang day stem ay 甲 (Kahoy, Yang) at ang day branch ay 辰 (ang Dragon). Sa siklo ng animnapu, ito ang kombinasyong bilang 41."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 甲 na \"Yang na Kahoy (甲)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Matayog na punong tuwid ang tubo. Kapag naitakda na ang direksyon, hindi na ito nag-aalangan, at mas pipiliing magtiis kaysa yumuko.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 辰 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 甲, ang mga stem na hawak ng 辰 ay ang mga sumusunod. Ang pangunahing stem (戊) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 甲辰",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 甲"
              ],
              "rows": [
                [
                  "Yin na Kahoy (乙)",
                  "natitira (餘氣)",
                  "{hidJinYeo}",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "gitna (中氣)",
                  "{hidJinJung}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "pangunahin (本氣)",
                  "{hidJinBon}",
                  "Biglaang yaman (偏財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 甲 ang day stem, ang Matatag na yaman ay 己 at ang Awtoridad ay 辛."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 己. Ang 己 ay hindi taglay ng 辰."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 辛. Ang 辛 ay hindi taglay ng 辰."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [癸卯](/guide/pillar-gye-myo) at ang susunod ay [乙巳](/guide/pillar-eul-sa)."
          },
          {
            "p": "Binubuo ito ng [Yang na Kahoy (甲)](/guide/stem-gap) at [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-sa": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 乙巳",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 乙巳 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 乙巳 ay ang ika-42 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 乙巳, ang day stem ay 乙 (Kahoy, Yin) at ang day branch ay 巳 (ang Ahas). Sa siklo ng animnapu, ito ang kombinasyong bilang 42."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 乙 na \"Yin na Kahoy (乙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Baging — malambot na damo. Yumuyuko ito ayon sa sitwasyon para makasulong, at hindi napipigtas.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 巳 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 乙, ang mga stem na hawak ng 巳 ay ang mga sumusunod. Ang pangunahing stem (丙) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 乙巳",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 乙"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidSaYeo}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Metal (庚)",
                  "gitna (中氣)",
                  "{hidSaJung}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "pangunahin (本氣)",
                  "{hidSaBon}",
                  "Manggugulo (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 乙 ang day stem, ang Matatag na yaman ay 戊 at ang Awtoridad ay 庚."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 戊. Ang 戊 ay taglay ng 巳 (natitira (餘氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 庚. Ang 庚 ay taglay ng 巳 (gitna (中氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [甲辰](/guide/pillar-gap-jin) at ang susunod ay [丙午](/guide/pillar-byeong-o)."
          },
          {
            "p": "Binubuo ito ng [Yin na Kahoy (乙)](/guide/stem-eul) at [巳 (Ahas)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-o": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丙午",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丙午 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丙午 ay ang ika-43 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丙午, ang day stem ay 丙 (Apoy, Yang) at ang day branch ay 午 (ang Kabayo). Sa siklo ng animnapu, ito ang kombinasyong bilang 43."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丙 na \"Yang na Apoy (丙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Araw sa tanghaling tapat. Hayag ang damdamin, lumiliwanag ang paligid, at natural lang ang pag-una sa harapan.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 午 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丙, ang mga stem na hawak ng 午 ay ang mga sumusunod. Ang pangunahing stem (丁) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丙午",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丙"
              ],
              "rows": [
                [
                  "Yang na Apoy (丙)",
                  "natitira (餘氣)",
                  "{hidOYeo}",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Lupa (己)",
                  "gitna (中氣)",
                  "{hidOJung}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "pangunahin (本氣)",
                  "{hidOBon}",
                  "Karibal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丙 ang day stem, ang Matatag na yaman ay 辛 at ang Awtoridad ay 癸."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 辛. Ang 辛 ay hindi taglay ng 午."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 癸. Ang 癸 ay hindi taglay ng 午."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [乙巳](/guide/pillar-eul-sa) at ang susunod ay [丁未](/guide/pillar-jeong-mi)."
          },
          {
            "p": "Binubuo ito ng [Yang na Apoy (丙)](/guide/stem-byeong) at [午 (Kabayo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-mi": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丁未",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丁未 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丁未 ay ang ika-44 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丁未, ang day stem ay 丁 (Apoy, Yin) at ang day branch ay 未 (ang Tupa). Sa siklo ng animnapu, ito ang kombinasyong bilang 44."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丁 na \"Yin na Apoy (丁)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Liwanag ng kandila. Tahimik itong nagniningas at matagal, at unang nagpapainit sa mga pinakamalapit.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 未 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丁, ang mga stem na hawak ng 未 ay ang mga sumusunod. Ang pangunahing stem (己) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丁未",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丁"
              ],
              "rows": [
                [
                  "Yin na Apoy (丁)",
                  "natitira (餘氣)",
                  "{hidMiYeo}",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "gitna (中氣)",
                  "{hidMiJung}",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Lupa (己)",
                  "pangunahin (本氣)",
                  "{hidMiBon}",
                  "Pagpapahayag (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丁 ang day stem, ang Matatag na yaman ay 庚 at ang Awtoridad ay 壬."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 庚. Ang 庚 ay hindi taglay ng 未."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 壬. Ang 壬 ay hindi taglay ng 未."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丙午](/guide/pillar-byeong-o) at ang susunod ay [戊申](/guide/pillar-mu-sin)."
          },
          {
            "p": "Binubuo ito ng [Yin na Apoy (丁)](/guide/stem-jeong) at [未 (Tupa)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-sin": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 戊申",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 戊申 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 戊申 ay ang ika-45 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 戊申, ang day stem ay 戊 (Lupa, Yang) at ang day branch ay 申 (ang Unggoy). Sa siklo ng animnapu, ito ang kombinasyong bilang 45."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 戊 na \"Yang na Lupa (戊)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Malawak na lupa at bundok. Mahirap yanigin at madaling sandalan, bagaman mabagal magbago ng pasyang naitakda na.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 申 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 戊, ang mga stem na hawak ng 申 ay ang mga sumusunod. Ang pangunahing stem (庚) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 戊申",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 戊"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidSinYeo}",
                  "Kasama (比肩)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "gitna (中氣)",
                  "{hidSinJung}",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Metal (庚)",
                  "pangunahin (本氣)",
                  "{hidSinBon}",
                  "Pagpapahayag (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 戊 ang day stem, ang Matatag na yaman ay 癸 at ang Awtoridad ay 乙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 癸. Ang 癸 ay hindi taglay ng 申."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 乙. Ang 乙 ay hindi taglay ng 申."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丁未](/guide/pillar-jeong-mi) at ang susunod ay [己酉](/guide/pillar-gi-yu)."
          },
          {
            "p": "Binubuo ito ng [Yang na Lupa (戊)](/guide/stem-mu) at [申 (Unggoy)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-yu": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 己酉",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 己酉 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 己酉 ay ang ika-46 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 己酉, ang day stem ay 己 (Lupa, Yin) at ang day branch ay 酉 (ang Manok). Sa siklo ng animnapu, ito ang kombinasyong bilang 46."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 己 na \"Yin na Lupa (己)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Lupa ng bukid. Tinatanggap nito ang anumang dumating at pinalalago, mas nag-aaruga kaysa nagpapakita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 酉 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 己, ang mga stem na hawak ng 酉 ay ang mga sumusunod. Ang pangunahing stem (辛) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 己酉",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 己"
              ],
              "rows": [
                [
                  "Yang na Metal (庚)",
                  "natitira (餘氣)",
                  "{hidYuYeo}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yin na Metal (辛)",
                  "pangunahin (本氣)",
                  "{hidYuBon}",
                  "Pagpapahayag (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 己 ang day stem, ang Matatag na yaman ay 壬 at ang Awtoridad ay 甲."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 壬. Ang 壬 ay hindi taglay ng 酉."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 甲. Ang 甲 ay hindi taglay ng 酉."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [戊申](/guide/pillar-mu-sin) at ang susunod ay [庚戌](/guide/pillar-gyeong-sul)."
          },
          {
            "p": "Binubuo ito ng [Yin na Lupa (己)](/guide/stem-gi) at [酉 (Manok)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sul": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 庚戌",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 庚戌 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 庚戌 ay ang ika-47 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 庚戌, ang day stem ay 庚 (Metal, Yang) at ang day branch ay 戌 (ang Aso). Sa siklo ng animnapu, ito ang kombinasyong bilang 47."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 庚 na \"Yang na Metal (庚)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Bakal na hindi pa hinuhubog. Matalas magpasya at malinaw ang hangganan, kaunti ang pasensya sa bagay na nakabitin.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 戌 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 庚, ang mga stem na hawak ng 戌 ay ang mga sumusunod. Ang pangunahing stem (戊) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 庚戌",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 庚"
              ],
              "rows": [
                [
                  "Yin na Metal (辛)",
                  "natitira (餘氣)",
                  "{hidSulYeo}",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "gitna (中氣)",
                  "{hidSulJung}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "pangunahin (本氣)",
                  "{hidSulBon}",
                  "Di-karaniwang suporta (偏印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 庚 ang day stem, ang Matatag na yaman ay 乙 at ang Awtoridad ay 丁."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 乙. Ang 乙 ay hindi taglay ng 戌."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丁. Ang 丁 ay taglay ng 戌 (gitna (中氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [己酉](/guide/pillar-gi-yu) at ang susunod ay [辛亥](/guide/pillar-sin-hae)."
          },
          {
            "p": "Binubuo ito ng [Yang na Metal (庚)](/guide/stem-gyeong) at [戌 (Aso)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-hae": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 辛亥",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 辛亥 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 辛亥 ay ang ika-48 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 辛亥, ang day stem ay 辛 (Metal, Yin) at ang day branch ay 亥 (ang Baboy). Sa siklo ng animnapu, ito ang kombinasyong bilang 48."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 辛 na \"Yin na Metal (辛)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hasang hiyas. Pinong panlasa at mataas na pamantayan; mahirap palampasin ang burarang gawa.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 亥 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 辛, ang mga stem na hawak ng 亥 ay ang mga sumusunod. Ang pangunahing stem (壬) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 辛亥",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 辛"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidHaeYeo}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "gitna (中氣)",
                  "{hidHaeJung}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "pangunahin (本氣)",
                  "{hidHaeBon}",
                  "Manggugulo (傷官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 辛 ang day stem, ang Matatag na yaman ay 甲 at ang Awtoridad ay 丙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 甲. Ang 甲 ay taglay ng 亥 (gitna (中氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丙. Ang 丙 ay hindi taglay ng 亥."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [庚戌](/guide/pillar-gyeong-sul) at ang susunod ay [壬子](/guide/pillar-im-ja)."
          },
          {
            "p": "Binubuo ito ng [Yin na Metal (辛)](/guide/stem-sin) at [亥 (Baboy)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-ja": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 壬子",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 壬子 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 壬子 ay ang ika-49 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 壬子, ang day stem ay 壬 (Tubig, Yang) at ang day branch ay 子 (ang Daga). Sa siklo ng animnapu, ito ang kombinasyong bilang 49."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 壬 na \"Yang na Tubig (壬)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Ilog at dagat. Malawak ang pananaw, at may mata kung saan patungo ang agos.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 子 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 壬, ang mga stem na hawak ng 子 ay ang mga sumusunod. Ang pangunahing stem (癸) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 壬子",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 壬"
              ],
              "rows": [
                [
                  "Yang na Tubig (壬)",
                  "natitira (餘氣)",
                  "{hidJaYeo}",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "pangunahin (本氣)",
                  "{hidJaBon}",
                  "Karibal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 壬 ang day stem, ang Matatag na yaman ay 丁 at ang Awtoridad ay 己."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丁. Ang 丁 ay hindi taglay ng 子."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 己. Ang 己 ay hindi taglay ng 子."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [辛亥](/guide/pillar-sin-hae) at ang susunod ay [癸丑](/guide/pillar-gye-chuk)."
          },
          {
            "p": "Binubuo ito ng [Yang na Tubig (壬)](/guide/stem-im) at [子 (Daga)](/guide/branch-ja)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-chuk": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 癸丑",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 癸丑 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 癸丑 ay ang ika-50 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 癸丑, ang day stem ay 癸 (Tubig, Yin) at ang day branch ay 丑 (ang Baka). Sa siklo ng animnapu, ito ang kombinasyong bilang 50."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 癸 na \"Yin na Tubig (癸)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hamog at ulan. Tahimik itong tumatagos, at nababasa ang himig bago pa ang salita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 丑 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 癸, ang mga stem na hawak ng 丑 ay ang mga sumusunod. Ang pangunahing stem (己) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 癸丑",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 癸"
              ],
              "rows": [
                [
                  "Yin na Tubig (癸)",
                  "natitira (餘氣)",
                  "{hidChukYeo}",
                  "Kasama (比肩)"
                ],
                [
                  "Yin na Metal (辛)",
                  "gitna (中氣)",
                  "{hidChukJung}",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Lupa (己)",
                  "pangunahin (本氣)",
                  "{hidChukBon}",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 癸 ang day stem, ang Matatag na yaman ay 丙 at ang Awtoridad ay 戊."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丙. Ang 丙 ay hindi taglay ng 丑."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 戊. Ang 戊 ay hindi taglay ng 丑."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [壬子](/guide/pillar-im-ja) at ang susunod ay [甲寅](/guide/pillar-gap-in)."
          },
          {
            "p": "Binubuo ito ng [Yin na Tubig (癸)](/guide/stem-gye) at [丑 (Baka)](/guide/branch-chuk)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gap-in": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 甲寅",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 甲寅 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 甲寅 ay ang ika-51 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 甲寅, ang day stem ay 甲 (Kahoy, Yang) at ang day branch ay 寅 (ang Tigre). Sa siklo ng animnapu, ito ang kombinasyong bilang 51."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 甲 na \"Yang na Kahoy (甲)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Matayog na punong tuwid ang tubo. Kapag naitakda na ang direksyon, hindi na ito nag-aalangan, at mas pipiliing magtiis kaysa yumuko.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 寅 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 甲, ang mga stem na hawak ng 寅 ay ang mga sumusunod. Ang pangunahing stem (甲) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 甲寅",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 甲"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidInYeo}",
                  "Biglaang yaman (偏財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "gitna (中氣)",
                  "{hidInJung}",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "pangunahin (本氣)",
                  "{hidInBon}",
                  "Kasama (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 甲 ang day stem, ang Matatag na yaman ay 己 at ang Awtoridad ay 辛."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 己. Ang 己 ay hindi taglay ng 寅."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 辛. Ang 辛 ay hindi taglay ng 寅."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [癸丑](/guide/pillar-gye-chuk) at ang susunod ay [乙卯](/guide/pillar-eul-myo)."
          },
          {
            "p": "Binubuo ito ng [Yang na Kahoy (甲)](/guide/stem-gap) at [寅 (Tigre)](/guide/branch-in)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-eul-myo": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 乙卯",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 乙卯 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 乙卯 ay ang ika-52 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 乙卯, ang day stem ay 乙 (Kahoy, Yin) at ang day branch ay 卯 (ang Kuneho). Sa siklo ng animnapu, ito ang kombinasyong bilang 52."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 乙 na \"Yin na Kahoy (乙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Baging — malambot na damo. Yumuyuko ito ayon sa sitwasyon para makasulong, at hindi napipigtas.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 卯 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 乙, ang mga stem na hawak ng 卯 ay ang mga sumusunod. Ang pangunahing stem (乙) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 乙卯",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 乙"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "natitira (餘氣)",
                  "{hidMyoYeo}",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "pangunahin (本氣)",
                  "{hidMyoBon}",
                  "Kasama (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 乙 ang day stem, ang Matatag na yaman ay 戊 at ang Awtoridad ay 庚."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 戊. Ang 戊 ay hindi taglay ng 卯."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 庚. Ang 庚 ay hindi taglay ng 卯."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [甲寅](/guide/pillar-gap-in) at ang susunod ay [丙辰](/guide/pillar-byeong-jin)."
          },
          {
            "p": "Binubuo ito ng [Yin na Kahoy (乙)](/guide/stem-eul) at [卯 (Kuneho)](/guide/branch-myo)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-byeong-jin": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丙辰",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丙辰 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丙辰 ay ang ika-53 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丙辰, ang day stem ay 丙 (Apoy, Yang) at ang day branch ay 辰 (ang Dragon). Sa siklo ng animnapu, ito ang kombinasyong bilang 53."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丙 na \"Yang na Apoy (丙)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Araw sa tanghaling tapat. Hayag ang damdamin, lumiliwanag ang paligid, at natural lang ang pag-una sa harapan.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 辰 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丙, ang mga stem na hawak ng 辰 ay ang mga sumusunod. Ang pangunahing stem (戊) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丙辰",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丙"
              ],
              "rows": [
                [
                  "Yin na Kahoy (乙)",
                  "natitira (餘氣)",
                  "{hidJinYeo}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Tubig (癸)",
                  "gitna (中氣)",
                  "{hidJinJung}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "pangunahin (本氣)",
                  "{hidJinBon}",
                  "Pagpapahayag (食神)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丙 ang day stem, ang Matatag na yaman ay 辛 at ang Awtoridad ay 癸."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 辛. Ang 辛 ay hindi taglay ng 辰."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 癸. Ang 癸 ay taglay ng 辰 (gitna (中氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [乙卯](/guide/pillar-eul-myo) at ang susunod ay [丁巳](/guide/pillar-jeong-sa)."
          },
          {
            "p": "Binubuo ito ng [Yang na Apoy (丙)](/guide/stem-byeong) at [辰 (Dragon)](/guide/branch-jin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-jeong-sa": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 丁巳",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 丁巳 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 丁巳 ay ang ika-54 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 丁巳, ang day stem ay 丁 (Apoy, Yin) at ang day branch ay 巳 (ang Ahas). Sa siklo ng animnapu, ito ang kombinasyong bilang 54."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 丁 na \"Yin na Apoy (丁)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Liwanag ng kandila. Tahimik itong nagniningas at matagal, at unang nagpapainit sa mga pinakamalapit.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 巳 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 丁, ang mga stem na hawak ng 巳 ay ang mga sumusunod. Ang pangunahing stem (丙) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 丁巳",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 丁"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidSaYeo}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Metal (庚)",
                  "gitna (中氣)",
                  "{hidSaJung}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Apoy (丙)",
                  "pangunahin (本氣)",
                  "{hidSaBon}",
                  "Karibal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 丁 ang day stem, ang Matatag na yaman ay 庚 at ang Awtoridad ay 壬."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 庚. Ang 庚 ay taglay ng 巳 (gitna (中氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 壬. Ang 壬 ay hindi taglay ng 巳."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丙辰](/guide/pillar-byeong-jin) at ang susunod ay [戊午](/guide/pillar-mu-o)."
          },
          {
            "p": "Binubuo ito ng [Yin na Apoy (丁)](/guide/stem-jeong) at [巳 (Ahas)](/guide/branch-sa)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-mu-o": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 戊午",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 戊午 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 戊午 ay ang ika-55 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 戊午, ang day stem ay 戊 (Lupa, Yang) at ang day branch ay 午 (ang Kabayo). Sa siklo ng animnapu, ito ang kombinasyong bilang 55."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 戊 na \"Yang na Lupa (戊)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Malawak na lupa at bundok. Mahirap yanigin at madaling sandalan, bagaman mabagal magbago ng pasyang naitakda na.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 午 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 戊, ang mga stem na hawak ng 午 ay ang mga sumusunod. Ang pangunahing stem (丁) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 戊午",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 戊"
              ],
              "rows": [
                [
                  "Yang na Apoy (丙)",
                  "natitira (餘氣)",
                  "{hidOYeo}",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Lupa (己)",
                  "gitna (中氣)",
                  "{hidOJung}",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "pangunahin (本氣)",
                  "{hidOBon}",
                  "Pag-aaruga (正印)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 戊 ang day stem, ang Matatag na yaman ay 癸 at ang Awtoridad ay 乙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 癸. Ang 癸 ay hindi taglay ng 午."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 乙. Ang 乙 ay hindi taglay ng 午."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [丁巳](/guide/pillar-jeong-sa) at ang susunod ay [己未](/guide/pillar-gi-mi)."
          },
          {
            "p": "Binubuo ito ng [Yang na Lupa (戊)](/guide/stem-mu) at [午 (Kabayo)](/guide/branch-o)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gi-mi": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 己未",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 己未 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 己未 ay ang ika-56 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 己未, ang day stem ay 己 (Lupa, Yin) at ang day branch ay 未 (ang Tupa). Sa siklo ng animnapu, ito ang kombinasyong bilang 56."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 己 na \"Yin na Lupa (己)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Lupa ng bukid. Tinatanggap nito ang anumang dumating at pinalalago, mas nag-aaruga kaysa nagpapakita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 未 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 己, ang mga stem na hawak ng 未 ay ang mga sumusunod. Ang pangunahing stem (己) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 己未",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 己"
              ],
              "rows": [
                [
                  "Yin na Apoy (丁)",
                  "natitira (餘氣)",
                  "{hidMiYeo}",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "gitna (中氣)",
                  "{hidMiJung}",
                  "Humahamon (偏官)"
                ],
                [
                  "Yin na Lupa (己)",
                  "pangunahin (本氣)",
                  "{hidMiBon}",
                  "Kasama (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 己 ang day stem, ang Matatag na yaman ay 壬 at ang Awtoridad ay 甲."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 壬. Ang 壬 ay hindi taglay ng 未."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 甲. Ang 甲 ay hindi taglay ng 未."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [戊午](/guide/pillar-mu-o) at ang susunod ay [庚申](/guide/pillar-gyeong-sin)."
          },
          {
            "p": "Binubuo ito ng [Yin na Lupa (己)](/guide/stem-gi) at [未 (Tupa)](/guide/branch-mi)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gyeong-sin": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 庚申",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 庚申 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 庚申 ay ang ika-57 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 庚申, ang day stem ay 庚 (Metal, Yang) at ang day branch ay 申 (ang Unggoy). Sa siklo ng animnapu, ito ang kombinasyong bilang 57."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 庚 na \"Yang na Metal (庚)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Bakal na hindi pa hinuhubog. Matalas magpasya at malinaw ang hangganan, kaunti ang pasensya sa bagay na nakabitin.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 申 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 庚, ang mga stem na hawak ng 申 ay ang mga sumusunod. Ang pangunahing stem (庚) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 庚申",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 庚"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidSinYeo}",
                  "Di-karaniwang suporta (偏印)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "gitna (中氣)",
                  "{hidSinJung}",
                  "Pagpapahayag (食神)"
                ],
                [
                  "Yang na Metal (庚)",
                  "pangunahin (本氣)",
                  "{hidSinBon}",
                  "Kasama (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 庚 ang day stem, ang Matatag na yaman ay 乙 at ang Awtoridad ay 丁."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 乙. Ang 乙 ay hindi taglay ng 申."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丁. Ang 丁 ay hindi taglay ng 申."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [己未](/guide/pillar-gi-mi) at ang susunod ay [辛酉](/guide/pillar-sin-yu)."
          },
          {
            "p": "Binubuo ito ng [Yang na Metal (庚)](/guide/stem-gyeong) at [申 (Unggoy)](/guide/branch-sin)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-sin-yu": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 辛酉",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 辛酉 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 辛酉 ay ang ika-58 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 辛酉, ang day stem ay 辛 (Metal, Yin) at ang day branch ay 酉 (ang Manok). Sa siklo ng animnapu, ito ang kombinasyong bilang 58."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 辛 na \"Yin na Metal (辛)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hasang hiyas. Pinong panlasa at mataas na pamantayan; mahirap palampasin ang burarang gawa.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 酉 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 辛, ang mga stem na hawak ng 酉 ay ang mga sumusunod. Ang pangunahing stem (辛) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 辛酉",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 辛"
              ],
              "rows": [
                [
                  "Yang na Metal (庚)",
                  "natitira (餘氣)",
                  "{hidYuYeo}",
                  "Karibal (劫財)"
                ],
                [
                  "Yin na Metal (辛)",
                  "pangunahin (本氣)",
                  "{hidYuBon}",
                  "Kasama (比肩)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 辛 ang day stem, ang Matatag na yaman ay 甲 at ang Awtoridad ay 丙."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 甲. Ang 甲 ay hindi taglay ng 酉."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 丙. Ang 丙 ay hindi taglay ng 酉."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [庚申](/guide/pillar-gyeong-sin) at ang susunod ay [壬戌](/guide/pillar-im-sul)."
          },
          {
            "p": "Binubuo ito ng [Yin na Metal (辛)](/guide/stem-sin) at [酉 (Manok)](/guide/branch-yu)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-im-sul": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 壬戌",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 壬戌 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 壬戌 ay ang ika-59 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 壬戌, ang day stem ay 壬 (Tubig, Yang) at ang day branch ay 戌 (ang Aso). Sa siklo ng animnapu, ito ang kombinasyong bilang 59."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 壬 na \"Yang na Tubig (壬)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Ilog at dagat. Malawak ang pananaw, at may mata kung saan patungo ang agos.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 戌 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 壬, ang mga stem na hawak ng 戌 ay ang mga sumusunod. Ang pangunahing stem (戊) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 壬戌",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 壬"
              ],
              "rows": [
                [
                  "Yin na Metal (辛)",
                  "natitira (餘氣)",
                  "{hidSulYeo}",
                  "Pag-aaruga (正印)"
                ],
                [
                  "Yin na Apoy (丁)",
                  "gitna (中氣)",
                  "{hidSulJung}",
                  "Matatag na yaman (正財)"
                ],
                [
                  "Yang na Lupa (戊)",
                  "pangunahin (本氣)",
                  "{hidSulBon}",
                  "Humahamon (偏官)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 壬 ang day stem, ang Matatag na yaman ay 丁 at ang Awtoridad ay 己."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丁. Ang 丁 ay taglay ng 戌 (gitna (中氣))."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 己. Ang 己 ay hindi taglay ng 戌."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [辛酉](/guide/pillar-sin-yu) at ang susunod ay [癸亥](/guide/pillar-gye-hae)."
          },
          {
            "p": "Binubuo ito ng [Yang na Tubig (壬)](/guide/stem-im) at [戌 (Aso)](/guide/branch-sul)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/pillar-gye-hae": {
    "eyebrow": "Mga day pillar",
    "title": "Ang Day Pillar na 癸亥",
    "summary": "Kung paano binabasa ng Saju-Link ang day pillar na 癸亥 — kung ano ang mga stem na hawak ng day branch sa day stem — inilatag nang eksakto ayon sa mga patakaran ng kalkulasyon nito.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Ang 癸亥 ay ang ika-60 day pillar sa siklo ng animnapu",
        "blocks": [
          {
            "p": "Kapag ang stem-branch ng araw ng kapanganakan ay 癸亥, ang day stem ay 癸 (Tubig, Yin) at ang day branch ay 亥 (ang Baboy). Sa siklo ng animnapu, ito ang kombinasyong bilang 60."
          },
          {
            "p": "Tinatawag ng Saju-Link ang taong ang day stem ay 癸 na \"Yin na Tubig (癸)\", at ang linyang ipinapakita ng screen ng resulta ay: \"Hamog at ulan. Tahimik itong tumatagos, at nababasa ang himig bago pa ang salita.\" Walang kinalaman ang linyang ito sa pagbasa sa ibaba o sa mga iskor."
          }
        ]
      },
      {
        "title": "Kung ano ang mga stem na hawak ng day branch na 亥 sa day stem",
        "blocks": [
          {
            "p": "Ang day branch ang posisyon ng asawa. Binabasa mula sa day stem na 癸, ang mga stem na hawak ng 亥 ay ang mga sumusunod. Ang pangunahing stem (壬) ang kinatawang enerhiya ng branch."
          },
          {
            "table": {
              "caption": "Ang hidden stems ng day branch ng 癸亥",
              "head": [
                "Hidden stem",
                "Posisyon",
                "Bahagi",
                "Sa day stem na 癸"
              ],
              "rows": [
                [
                  "Yang na Lupa (戊)",
                  "natitira (餘氣)",
                  "{hidHaeYeo}",
                  "Awtoridad (正官)"
                ],
                [
                  "Yang na Kahoy (甲)",
                  "gitna (中氣)",
                  "{hidHaeJung}",
                  "Manggugulo (傷官)"
                ],
                [
                  "Yang na Tubig (壬)",
                  "pangunahin (本氣)",
                  "{hidHaeBon}",
                  "Karibal (劫財)"
                ]
              ]
            }
          }
        ]
      },
      {
        "title": "Ang posisyon ng asawa at ang day pillar na ito",
        "blocks": [
          {
            "p": "Binabasa ng tradisyonal na myeongri ang posisyon ng asawa bilang Matatag na yaman (正財) para sa mga lalaki at Awtoridad (正官) para sa mga babae. Kapag ang 癸 ang day stem, ang Matatag na yaman ay 丙 at ang Awtoridad ay 戊."
          },
          {
            "p": "Para sa mga lalaki, ang posisyon ng asawa (Matatag na yaman) ay 丙. Ang 丙 ay hindi taglay ng 亥."
          },
          {
            "p": "Para sa mga babae, ang posisyon ng asawa (Awtoridad) ay 戊. Ang 戊 ay taglay ng 亥 (natitira (餘氣))."
          }
        ]
      },
      {
        "title": "Ang mga katabing day pillar at ang mga karakter na bumubuo rito",
        "blocks": [
          {
            "p": "Sa siklo ng animnapu, ang nakaraang day pillar ay [壬戌](/guide/pillar-im-sul) at ang susunod ay [甲子](/guide/pillar-gap-ja)."
          },
          {
            "p": "Binubuo ito ng [Yin na Tubig (癸)](/guide/stem-gye) at [亥 (Baboy)](/guide/branch-hae)."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hindi sinasabi ng gabay na ito",
        "blocks": [
          {
            "ul": [
              "Hindi nagpapasya ang isang day pillar kung sino ang isang tao o kung ano ang isang relasyon. Binabasa ang saju mula sa ugnayan ng walong karakter ng apat na haligi.",
              "Ang pagbasa sa posisyon ng asawa ay nagpapatuloy ng isang patakaran ng tradisyonal na myeongri, at kung hindi mo sinabi ang iyong kasarian, hindi binabasa ang posisyong ito."
            ]
          }
        ]
      }
    ]
  },

  "guide/saju-letters": {
    "eyebrow": "Magsimula dito",
    "title": "Heavenly Stems, Earthly Branches at Day Pillar — Paano Basahin ang mga Karakter ng Saju",
    "summary": "Ano ang walong karakter ng Saju, at ano ang kahulugan ng bawat heavenly stem, earthly branch at day pillar, na ipinaliwanag gamit ang dalawang simpleng talahanayan.",
    "backLabel": "Batayan ng kalkulasyon",
    "sections": [
      {
        "title": "Isinusulat ang Saju gamit ang dalawang uri ng karakter",
        "blocks": [
          {
            "p": "Hinahati sa itaas at ibabang karakter ang walong karakter ng Saju. Ang itaas na karakter ay isa sa sampung **heavenly stems (天干)**, at ang ibabang karakter ay isa sa labindalawang **earthly branches (地支)**."
          },
          {
            "p": "Isipin ang stem bilang pangalan ng uri ng enerhiya at ang branch bilang pangalan ng oras at lugar. Hindi mo kailangang kabisaduhin ang mga ito, tulad ng hindi mo kinakabisa ang mga pangalan ng araw sa isang linggo; hanapin lang sa mga talahanayan sa ibaba. Ipinapaliwanag sa [gabay sa natal chart](/guide/natal-chart) kung paano nagiging walong karakter ang apat na haligi."
          }
        ]
      },
      {
        "title": "Ang sampung heavenly stems",
        "blocks": [
          {
            "p": "May sampung heavenly stems. Bawat isa sa limang elemento (Kahoy, Apoy, Lupa, Metal, Tubig) ay may dalawang stem, at sa bawat pares, ang una ay Yang (陽) at ang ikalawa ay Yin (陰)."
          },
          {
            "table": {
              "caption": "Ang sampung heavenly stems kasama ang elemento at polarity",
              "head": [
                "Heavenly stem",
                "Elemento at polarity"
              ],
              "rows": [
                [
                  "Yang na Kahoy (甲)",
                  "Yang na Kahoy"
                ],
                [
                  "Yin na Kahoy (乙)",
                  "Yin na Kahoy"
                ],
                [
                  "Yang na Apoy (丙)",
                  "Yang na Apoy"
                ],
                [
                  "Yin na Apoy (丁)",
                  "Yin na Apoy"
                ],
                [
                  "Yang na Lupa (戊)",
                  "Yang na Lupa"
                ],
                [
                  "Yin na Lupa (己)",
                  "Yin na Lupa"
                ],
                [
                  "Yang na Metal (庚)",
                  "Yang na Metal"
                ],
                [
                  "Yin na Metal (辛)",
                  "Yin na Metal"
                ],
                [
                  "Yang na Tubig (壬)",
                  "Yang na Tubig"
                ],
                [
                  "Yin na Tubig (癸)",
                  "Yin na Tubig"
                ]
              ]
            }
          },
          {
            "p": "Ang stem ng araw na ipinanganak ka ay tinatawag na **day stem (日干)**, at ito ang karakter na tumutukoy sa iyo."
          }
        ]
      },
      {
        "title": "Ang labindalawang earthly branches",
        "blocks": [
          {
            "p": "May labindalawang earthly branches, at bawat isa ay may kasamang zodiac animal. Kaya ang labindalawang branch ay ang mga zodiac sign."
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
          },
          {
            "p": "Mukhang iisang karakter lang ang isang branch, ngunit may mga stem sa loob nito. Tinatawag itong **hidden stems (支藏干)**. Kung aling mga stem ang taglay ng isang branch, at gaano karami ang bawat isa, ay nakasaad sa entry ng diksyunaryo para sa bawat branch. Para sa kung paano natutukoy ang zodiac animal, tingnan ang [gabay sa zodiac](/guide/zodiac)."
          }
        ]
      },
      {
        "title": "Ang day pillar — isang stem at isang branch na magkapares",
        "blocks": [
          {
            "p": "Ang bawat haligi ng Saju ay dalawang karakter: isang stem na ipinares sa isang branch. Ang haligi ng araw na ipinanganak ka ay ang **Day Pillar (日柱)**."
          },
          {
            "p": "Kapag ipinares nang sunud-sunod ang mga stem at branch, makukuha mo ang **animnapung** kombinasyon, mula 甲子, 乙丑, at 丙寅 hanggang 癸亥. Tinatawag itong siklo ng animnapu. Animnapu ito at hindi 10 × 12 = 120 dahil ang Yang na stem ay ipinapares lamang sa Yang na branch, at ang Yin na stem ay sa Yin na branch lamang."
          },
          {
            "p": "Ang itaas na karakter ng day pillar ay ang day stem na nakilala mo sa itaas. Ang mga entry na nagpapaliwanag sa bawat haligi ay nasa mga diksyunaryo ng stem, branch at day pillar sa ibaba ng [listahan ng mga gabay](/guide)."
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
