import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Tungkol",
    "title": "Tungkol sa Naming-Link",
    "summary": "Tinutulungan ka naming pumili at maunawaan ang mga pangalan sa Korea. Narito ang aming mga batayan sa mga resulta, at kung ano ang sadyang hindi namin ginagawa.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "Ano ang ginagawa namin",
        "blocks": [
          {
            "p": "Tinutulungan ka ng Naming-Link na **pumili at maunawaan ang mga pangalan sa Korea** — ang hanja sa likod ng pangalan ng isang bata, isang pangalang Koreano na maaaring gamitin sa ibang bansa, isang pagsulat sa Hangul ng iyong sariling pangalan, at mga alaala tulad ng isang selyo o isang nakalimbag na ulat."
          },
          {
            "p": "Ang pagtingin sa iyong mga resulta ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay hindi kailanman muling ibinebenta ang kung ano ang ipinakita na ng screen: nagbubukas sila ng higit pang mga kandidato, nagdaragdag ng nakasulat na pagsusuri, o ginagawang isang bagay na maaari mong itago ang resulta."
          }
        ]
      },
      {
        "title": "Ano ang batayan ng aming mga sagot",
        "blocks": [
          {
            "p": "Ang hanja ay nagmumula sa **opisyal na talahanayan ng pangalan-hanja ng Korte Suprema ng Korea.** Ang bawat karakter ay may nakatakdang pagbasa para sa paggamit sa mga pangalan, at ang mga karakter na wala sa talahanayan ay hindi maaaring irehistro. Hindi kami nagdaragdag sa listahang iyon o pumipili ng mga paborito."
          },
          {
            "p": "Ang mga figure ng saju at mga elemento ay kinakalkula mula sa **Korean lunisolar almanac**, na ang oras ng kapanganakan ay itinatama sa tunay na oras ng araw para sa lugar ng kapanganakan. Ang pagbasa ay isang tradisyunal na sanggunian, hindi isang hula."
          },
          {
            "p": "Ang mga nakasulat na paliwanag ay ginawa ng AI. Upang maiwasan itong **mag-imbento ng mga bagay**, ang modelo ay binibigyan lamang ng iyong input at ang aming sariling reference data, at sinasabihan na manatili dito. Ang mga gabay ay nagpapaliwanag nito nang detalyado."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin ginagawa",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagtataya ng kapalaran.** Walang anumang dito ang nangangako ng swerte, kayamanan o proteksyon.",
              "**Hindi namin iniimbak ang iyong pangalan.** Ang mga libreng resulta ay hindi kailanman isinusulat sa aming mga server, at ang mga bayad na dokumento ay ibinibigay nang hindi nag-iingat ng kopya ng file.",
              "**Ang pagbabayad ay hindi bumibili ng mas magandang sagot.** Ang pag-unlock gamit ang isang ad at pag-unlock gamit ang isang bayad ay nagbibigay ng eksaktong parehong nilalaman."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang serbisyo ay magagamit sa 23 wika. Ang mga bayad na PDF ay ibinibigay sa Ingles para sa Arabic at Khmer — ang PDF renderer ay hindi sumusuporta sa mga script na iyon — at sinasabi namin ito sa screen bago ka magbayad."
          }
        ]
      },
      {
        "title": "Makipag-ugnayan",
        "blocks": [
          {
            "p": "Ang mga detalye ng kumpanya at kung paano kami maabot ay nasa [pahina ng contact](/contact), kabilang ang mga refund, mga kahilingan sa privacy at mga ulat ng error."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Paano gumagana ang Naming-Link",
    "title": "Ano ang batayan ng iyong pangalan",
    "summary": "Paano kami pumipili ng isang apelyido sa Korea, ano ang aming sinusuri bago magmungkahi ng isang ibinigay na pangalan, at paano namin isinusulat ang iyong pangalan sa Hangul — kasama ang mga bahagi na sadyang iniiwasan namin.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "mga karakter ng pangalan-hanja"
              },
              {
                "value": "{syllableCount}",
                "label": "mga pantig ng Hangul na sakop"
              },
              {
                "value": "{effectiveDate}",
                "label": "petsa ng bisa ng talahanayan"
              },
              {
                "value": "{avoidTotal}",
                "label": "mga karakter na tradisyonal na iniiwasan"
              }
            ]
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano namin isinusulat ang iyong pangalan sa Hangul",
    "summary": "Paano kami pumipili ng mga tunog kapag sumusulat ng isang banyagang pangalan sa Hangul, at kung bakit hindi kami naglalagay ng hanja.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Dala namin ang tunog, hindi ang kahulugan",
        "blocks": [
          {
            "p": "Isinusulat ng serbisyong ito ang **iyong pangalan** sa Hangul. Hindi ito nagbibigay sa iyo ng isang pangalang Koreano. Michael becomes 마이클 — ang parehong pangalan, isinulat upang mabasa at masabi ito ng mga Koreano. Hindi namin ito pinapalitan ng isang pangalang Koreano na kebang nagkataon na may katulad na kahulugan."
          },
          {
            "p": "Kung ang pangalan ng Koreano ang hinahanap mo, **ibang serbisyo iyon**. Isang serbisyo ang nag-iingat ng iyong pangalan at binabago lamang ang script; ang isa naman ay nagmumungkahi ng bagong pangalan."
          }
        ]
      },
      {
        "title": "Walang tunog na Koreano",
        "blocks": [
          {
            "p": "Bawat wika ay may mga tunog na wala ang Koreano — f, v, z, th, at mga pagkakaiba sa patinig na hindi ginagawa ng Koreano. Para sa mga iyon, isinusulat namin kung ano ang **aktwal na sinasabi ng isang nagsasalita ng Koreano** kapag binasa nila ang iyong pangalan nang malakas, sa halip na isalin ang orihinal na ponetika simbolo sa simbolo. Ang layunin ay ang pagsulat na gagamitin, hindi ang pinaka-teknikal na tapat na isa."
          },
          {
            "p": "Ang parehong pagsulat ay maaaring magkaiba depende sa pinagmulan ng pangalan, kaya't humihingi kami ng iyong wika at bansa at nagtatrabaho mula sa pagbigkas na iyon."
          }
        ]
      },
      {
        "title": "Maraming pagsulat, magkatabi",
        "blocks": [
          {
            "p": "Walang isang tamang sagot. Ang pagsulat na pinakamalapit sa orihinal na tunog, ang pinaka-karaniwang ginagamit sa Korea, at ang pinakamadaling isulat ay kadalasang tatlong magkaibang bagay. Kaya't ipinapakita namin ang mga ito nang magkasama at sinasabi kung ano ang naghihiwalay sa mga ito."
          },
          {
            "p": "Kung wala sa mga ito ang tila tama, maaari kang magdagdag ng pahiwatig tungkol sa tunog na nais mo at ulitin ito — halimbawa, na ang isang partikular na silabong dapat isulat nang iba."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Walang hanja dito",
        "blocks": [
          {
            "p": "Hindi kami naglalakip ng hanja sa isang transliteration. Ang hanja ay may kahulugan, at ang daloy na ito ay tungkol sa tunog. Ang pagtutugma ng mga karakter sa tunog lamang ay maaaring magdala sa iyo ng isang kahulugan na hindi mo kailanman hiniling."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano kami bumubuo ng isang pangalan sa Koreano",
    "summary": "Pumipili kami mula sa mga apelyido na umiiral, tinutimbang kung gaano kadaling bigkasin at isulat ang pangalan, at tinatanong kung para saan ang pangalan.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Nagsisimula kami sa apelyido",
        "blocks": [
          {
            "p": "Sa Korea, ang apelyido ay nauuna, at hindi tulad ng mga ibinigay na pangalan, hindi ito malayang naimbento — ito ay minamana. Kaya't nagmumungkahi lamang kami ng mga apelyido na talagang mayroon ang mga tao sa Korea. Ang aming default na pool ay ang **20 pinaka-karaniwang apelyido**, na sama-samang sumasaklaw sa humigit-kumulang 80% ng populasyon."
          },
          {
            "p": "Kung ang iyong sariling apelyido ay nagkataong tumugma sa isang tunay na Koreano sa tunog — Wang na may 왕, Ye na may 예 — ilalagay namin iyon sa unahan. Ang pagpapanatili ng ugnayan pabalik sa iyong orihinal na pangalan ay mas mahalaga kaysa sa isang apelyido na pinili nang sapalaran."
          },
          {
            "p": "Maaari mong piliin ang isang apelyido o hayaan kaming magrekomenda ng isa. Sa alinmang paraan, ito ay **isang apelyido na umiiral**."
          }
        ]
      },
      {
        "title": "Madaling bigkasin, madaling isulat",
        "blocks": [
          {
            "p": "Ito ay isang pangalan na talagang tatawagin ka ng mga tao sa Korea, kaya't ang unang bagay na tinitingnan namin ay kung ang isang Koreano ay makakarinig nito nang isang beses at maisusulat ito. Ang isang pangalan na kailangang isulat nang bawat oras ay isang pasanin na dala mo, hindi kami."
          },
          {
            "p": "Mahalaga rin ang kahulugan. Karaniwang may dalang kahulugan ang mga ibinigay na pangalan sa Koreano, kaya't sinasabi namin sa iyo kung ano ang binabasa ng pangalan at kung bakit namin ito pinili — hindi lamang ang pangalan mismo."
          }
        ]
      },
      {
        "title": "Tinutukoy namin kung para saan ang pangalan",
        "blocks": [
          {
            "p": "Ang isang pangalan para sa mga dokumento ng unibersidad ay hindi katulad ng isang pangalan na isisigaw ng mga kaibigan sa isang silid, o isang handle na gagamitin mo online. Tinutukoy namin kung paano mo balak gamitin ito at isinasaalang-alang iyon."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ito ay hindi isang transliteration",
        "blocks": [
          {
            "p": "Dito ay nagmumungkahi kami ng **bagong pangalan sa Koreano**. Kung nais mong isulat ang iyong umiiral na pangalan sa Hangul — Michael bilang 마이클 — tingnan ang [gabay sa pagsulat sa Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Mga Anunsyo",
    "title": "Mga Anunsyo",
    "summary": "Kung saan kami nag-aanunsyo ng mga pagbabago na nakakaapekto sa kung paano mo ginagamit ang serbisyo.",
    "backLabel": "Bahay",
    "sections": []
  },
  "contact": {
    "eyebrow": "Makipag-ugnayan",
    "title": "Makipag-ugnayan sa amin",
    "summary": "Paano makipag-ugnayan sa amin para sa mga tanong, refund, mga kahilingan sa privacy at mga ulat ng error, kasama ang aming mga detalye ng kumpanya.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "I-email kami",
        "blocks": [
          {
            "p": "Sumulat sa **{email}**. Tumugon kami sa loob ng dalawang araw ng negosyo. Para sa anumang bagay tungkol sa isang order — pagbabayad, refund, isang file na hindi mo natanggap — mangyaring isama ang iyong **numero ng order o ang email na ginamit mo sa pagbabayad**."
          },
          {
            "p": "Mga pagtatanong sa telepono: {customerCenter} (mga oras ng negosyo sa Korea)."
          }
        ]
      },
      {
        "title": "Ano ang dapat ipadala dito",
        "blocks": [
          {
            "ul": [
              "**Mga pagbabayad at refund** — kung ang isang dokumento ay hindi kailanman ginawa, o ang halagang siningil ay naiiba mula sa iyong order, ibabalik namin ang buong halaga. Tingnan ang [patakaran sa refund](/refund-policy).",
              "**Privacy** — mga kahilingan upang ma-access, ituwid o tanggalin ang iyong data. Tingnan ang [patakaran sa privacy](/privacy).",
              "**Mga pagwawasto** — kung ang isang kahulugan, pagbasa o kalkulasyon ng hanja ay mukhang mali, sabihin sa amin. Ang pagbanggit kung aling screen at kung ano ang iyong ipinasok ay nakakatulong nang malaki.",
              "**Anumang iba pa** — ang mga pakikipagsosyo at press ay pupunta sa parehong address."
            ]
          }
        ]
      },
      {
        "title": "Mga detalye ng kumpanya",
        "blocks": [
          {
            "ul": [
              "**Legal na entidad** — {companyName}",
              "**Kinatawan** — {representative}",
              "**Numero ng rehistrasyon ng negosyo** — {businessNumber}",
              "**Numero ng benta sa mail-order** — {mailOrderNumber}",
              "**Address** — {address}",
              "**Serbisyo sa customer** — {customerCenter}",
              "**Email** — {email}",
              "**Opisyal ng privacy** — {privacyOfficer}",
              "**Tagapagbigay ng hosting** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Hindi mo kailangang isama ang pangalan o petsa ng kapanganakan sa iyong mensahe. Ang mga libreng resulta ay hindi kailanman nakaimbak sa aming mga server, kaya hindi namin ito mahanap muli — sapat na ang isang numero ng order."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Aming Mga Pamantayan",
    "title": "Ano ang Hindi Namin Ginagamit",
    "summary": "Hindi kami nag-aassign ng kabuuang kapalaran o mga numerong marka, ni hindi kami gumagamit ng mga bilang ng stroke. Ang mga five elements ay ginagamit lamang bilang isang karagdagang axis. Narito ang mga dahilan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Mga Dahilan para sa hindi pag-aassign ng kabuuang kapalaran o mga numerong marka",
        "blocks": [
          {
            "p": "May mga pamamaraan na nag-aassign ng kabuuang kapalaran o mga numerong marka sa mga pangalan upang i-rate ang mga ito. Ang Naming-Link ay hindi nagbibigay ng mga numerong iyon. Ang mga dahilan ay apat."
          },
          {
            "p": "**Una, hindi lamang isang pamantayan ang umiiral.** Ang mga pamamaraan para sa pagkalkula ng kapalaran ay nag-iiba ayon sa paaralan, at ang parehong pangalan ay maaaring ma-rate nang positibo ng isang pamantayan at negatibo ng isa pa. Wala kaming batayan upang matukoy kung aling isa ang tama. Hindi tapat na ipakita ang isa bilang kung ito ang sagot."
          },
          {
            "p": "**Pangalawa, ang mga kalkulasyong iyon ay umaasa sa mga bilang ng stroke.** Gayunpaman, ang data ng Korte Suprema ay hindi kasama ang mga bilang ng stroke sa lahat. Bukod pa rito, ang mga bilang ng stroke ay maaaring mag-iba depende sa kung ito ay binibilang bilang regular o pinadaling mga karakter at kung paano binibilang ang mga radicals. Dahil ang mga batayang numero ay hindi tiyak na itinatag, ang mga marka na itinayo sa ibabaw ng mga ito ay hindi maaaring maging tiyak."
          },
          {
            "p": "**Pangatlo, ang mga numero ay mukhang mas matatag kaysa sa katotohanan.** Kapag sinabing \"87 puntos\", ito ay tila isang nasusukat na halaga sa halip na isang karaniwang interpretasyon. Ang mga nagngangalang ito ay maaaring makaramdam ng presyon mula sa numerong iyon, na itinataboy ang tunay na mahalaga (Maganda bang tawagin? Tumutugma ba ang kahulugan? Naglalaman ba ito ng mga nais na hangarin?)."
          },
          {
            "p": "**Pang-apat, walang paraan upang beripikahin.** Ang ugnayan sa pagitan ng isang pangalan at ng buhay ng isang tao ay hindi ma-beripika. Ang pag-convert ng isang bagay na hindi maaaring sabihing tama o mali sa isang marka ay nagreresulta sa isang numero na hindi maaaring makumpirma, kahit na hindi ito maaaring mali."
          },
          {
            "p": "Gumagamit lamang kami ng maaaring **patunayan.** Ang opisyal na talahanayan ng pangalan-hanja ng Korte Suprema, ang mga itinalagang pagbasa para sa bawat karakter, at ang mga kahulugan na nakalista sa talahanayan. Sa halip, nagbibigay kami ng mga dahilan kung bakit napili ang kandidato na ito at kung bakit ang ilang mga karakter ay inalis, na nagpapakita ng **mga dahilan sa halip na mga marka**."
          }
        ]
      },
      {
        "title": "Hindi kami gumagamit ng mga bilang ng stroke",
        "blocks": [
          {
            "p": "Ang opisyal na data ng pangalan-hanja na ibinigay ng Korte Suprema ay hindi kasama ang mga bilang ng stroke. Sa mga {characterTotal} na karakter na natanggap namin, **wala ni isang karakter ang may mga bilang ng stroke.**"
          },
          {
            "p": "Upang gumamit ng mga bilang ng stroke, kailangan naming makakuha ng mga numero mula sa ibang lugar, ngunit kung hindi namin maipaliwanag kung saan nagmula ang mga numerong iyon at kung anong mga pamantayan ang ginamit upang bilangin ang mga ito, nangangahulugan ito ng paghusga sa mga pangalan batay sa mga hindi nakabatay na numero. Nagpasya kaming huwag suriin ang mga pangalan batay sa mga halaga na hindi maaaring patunayan."
          }
        ]
      },
      {
        "title": "Ginagamit lamang namin ang mga five elements bilang sanggunian",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Ang mga five elements na inilagay sa isang bilog: ang henerasyon ay tumatakbo sa pagitan ng mga kapitbahay, ang kontrol ay lumalaktaw ng isa",
              "wood": "kahoy",
              "fire": "apoy",
              "earth": "lupa",
              "metal": "metal",
              "water": "tubig",
              "saeng": "Henerasyon — bawat isa ay nagbibigay ng buhay sa kanyang kapwa",
              "geuk": "Kontrol — bawat isa ay humahadlang sa isa na nilaktawan"
            },
            "caption": "Ang mga relasyon sa pagitan ng mga five elements. Ang paglipat sa paligid ng bilog ay kumakatawan sa mutual generation (相生), habang ang pagtalon ng isa at pagpigil ay kumakatawan sa mutual restraint (相剋). Ginagamit namin ang relasyong ito bilang isang supplementary axis para sa paghahambing ng mga kandidato."
          },
          {
            "p": "Kung nailagay mo ang iyong buwan ng kapanganakan, ginagamit namin ang isang pinadaling sanggunian ng mga five elements batay sa buwan na iyon bilang isang supplementary axis para sa paghahambing ng mga kandidato. Gayunpaman, ito ay hindi isang tumpak na saju analysis, at **hindi namin sinasabi na ang mga pangalan ay nagtatakda ng kapalaran o katangian ng isang tao.**"
          },
          {
            "p": "Sa huling pagpili, ang aming pinapahalagahan ay mga tunog, kumbinasyon ng mga kahulugan, ang mga halaga na nais ipahayag ng pamilya, at kung ito ay talagang mairehistro. Kung hindi mo nailagay ang iyong buwan ng kapanganakan, ganap naming ibinubukod ang sanggunian ng mga five elements mula sa pagsusuri — hindi kami gumagawa ng arbitrary assumptions tungkol sa hindi kilalang impormasyon."
          },
          {
            "p": "Kung nais mo ng tumpak na saju-based analysis, tinatalakay namin iyon sa isang hiwalay na detalyadong ulat. Ang dahilan kung bakit hindi namin pinapahalagahan ang mga five elements sa libreng hanja matching ay dahil ayaw naming ipresenta ang mga hatol batay sa mga five elements na nakuha mula sa hindi kumpletong petsa at oras ng kapanganakan na parang ito ay tiyak."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Bayad na Produkto",
    "title": "Ano ang kasama sa mga bayad na produkto?",
    "summary": "Nililinaw namin kung ano ang nakikita nang libre at kung anong karagdagang tampok ang kasama sa pagbabayad para sa bawat produkto. Ang mga presyo ay kinukuha mula sa aktwal na mga setting ng produkto.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Ano ang nakikita nang libre?",
        "blocks": [
          {
            "p": "Ang paglikha ng pangalan at pagtingin sa mga resulta ay **libre**. Walang kinakailangang pagpaparehistro ng membership. Makikita mo ang mga tumutugmang kahulugan ng hanja, paglikha ng mga pangalan sa Korea, pandaigdigang conversion ng pangalan, at notasyon ng pagbigkas sa Hangul, kasama ang mga inirekomendang resulta at kanilang mga paliwanag sa screen."
          },
          {
            "p": "Ang mga bayad na produkto ay hindi **ibinibenta muli ang mga ipinakita na sa screen.** Binubuksan nila ang mas maraming kandidato, nagdadagdag ng higit pang mga paliwanag, o lumilikha ng isang format na maaaring maiimbak o maipadala."
          }
        ]
      },
      {
        "title": "Buong pagsisiwalat ng lahat ng kandidato — {priceUnlock}",
        "blocks": [
          {
            "p": "Ang mga inirekomendang resulta ay naka-istruktura upang buksan ang mga kandidato isa-isa. Kapag tumitingin ng mga ad, isa-isa itong bumubukas, habang ang produktong ito ay **binubuksan ang lahat ng natitirang kandidato nang sabay-sabay**."
          },
          {
            "p": "Kung hindi ka nagmamadali, hindi mo kailangang bumili. Ang **mga resulta mula sa pagbubukas sa pamamagitan ng mga ad at ang mga mula sa pagbabayad ay ganap na pareho** — ito ay isang usaping paghihintay lamang, at ang pagbabayad ay hindi nagdadala ng mas mahusay na mga kandidato."
          }
        ]
      },
      {
        "title": "Mga Detalye ng Hanja — Tatlong Yugto",
        "blocks": [
          {
            "p": "Mayroong tatlong detalyadong produkto sa daloy ng pagpili ng hanja na ilalakip sa isang pangalan sa Hangul."
          },
          {
            "ul": [
              "**Maximum 5 hanja candidates na detalyado** — {priceFiveDetail}. Maaari mong palawakin ang mga paliwanag para sa hanggang limang kandidato sa screen. Walang PDF.",
              "**Maximum 10 hanja candidates na pinalawak na detalyadong PDF** — {priceTenDetail}. Ang bilang ng mga kandidato ay tumataas sa sampu, at may kasamang PDF na dokumento.",
              "**Maximum 10 hanja candidates na saju at komprehensibong ulat ng mga five elements** — {priceTenSaju}. Bilang karagdagan sa nabanggit, kasama nito ang saju chart na nakuha mula sa petsa ng kapanganakan at ang mga puwersa ng mga five elements, na sinisiyasat kung bakit ang isang partikular na hanja ay angkop sa pangalan na iyon mula sa pananaw ng mga five elements."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang Hanja mismo ay pampublikong impormasyon",
        "blocks": [
          {
            "p": "Ang mga magagamit na hanja at ang kanilang mga kahulugan ay nagmula sa opisyal na talahanayan ng name-hanja na itinakda ng Supreme Court of Korea, at lahat ay pampublikong magagamit sa mga dokumento ng gabay ng serbisyo. Ang ibinibenta ng mga bayad na produkto ay hindi impormasyon ng hanja kundi **ang akto ng pagpili at pagpapaliwanag nito ayon sa pangalan**."
          }
        ]
      },
      {
        "title": "PDFs para sa Pandaigdigang Gumagamit",
        "blocks": [
          {
            "p": "Mga dokumento na magagamit para sa pag-convert ng mga banyagang pangalan sa mga pangalan sa Korea o pagsusulat ng mga pangalan sa Hangul. Ang mga presyo ay sumusunod sa mga halagang ipinapakita sa screen ng pagbabayad."
          },
          {
            "ul": [
              "**Korean Name Premium Report** — 3 pahina. Kasama ang isang calligraphy cover, ang kahulugan ng pangalan at ang dahilan ng pagpili nito, at saju at interpretasyon ng mga five elements.",
              "**Hangul Name Art** — 2 pahina. Kasama ang isang calligraphy cover at gabay sa pagbigkas. Naglalaman ito kung paano isulat ang pangalan sa Hangul at kung paano ito bigkasin."
            ]
          }
        ]
      },
      {
        "title": "Name Stamp",
        "blocks": [
          {
            "p": "Ine-engrave namin ang pangalan na nilikha sa screen sa isang pisikal na selyo at ipapadala ito sa iyo. Ang mga presyo ay nag-iiba ayon sa modelo — bilog na selyo {priceStampRound}, parisukat na selyo {priceStampSquare}, ebony na selyo {priceStampEbony}. Available din ang internasyonal na pagpapadala."
          },
          {
            "p": "**Mula dito, ang mga produkto ay kasama ang pagpapadala.** Hindi tulad ng mga naunang item, ang produksyon at pagpapadala ay tumatagal ng oras, at kinakailangan ang isang address ng pagtanggap. Ang impormasyon sa pagpapadala ay ginagamit lamang para sa pagproseso ng order at legal na pagpapanatili, at sa sandaling makumpleto ang pagproseso, ito ay sisirain pagkatapos ng panahon na tinukoy sa patakaran."
          }
        ]
      },
      {
        "title": "Mga Dapat Malaman Bago Bumili",
        "blocks": [
          {
            "p": "**Ang mga digital na produkto ay ibinibigay agad pagkatapos ng pagbabayad.** Maaari mong kanselahin at makatanggap ng buong refund anumang oras bago magsimula ang pag-download, ngunit sa sandaling makumpleto ang pag-download, ang pag-urong dahil sa simpleng pagbabago ng isip ay limitado (Article 17, Paragraph 2 ng Electronic Commerce Act). Ang kundisyong ito ay hiwalay na sinang-ayunan sa screen ng pagbabayad."
          },
          {
            "p": "**Ang mga reklamo tungkol sa nilalaman ng mga resulta ay hindi dahilan para sa refund.** Gayunpaman, kung ang dokumento ay hindi nalikha, ang file ay hindi mabubuksan, o ang halaga ng pagbabayad ay naiiba mula sa order, ito ay iproseso bilang isang reissue o buong refund."
          },
          {
            "p": "Ang mga detalyadong kondisyon ay nakasaad sa [Refund Policy](/refund-policy) at [Pricing Guide](/pricing). Ang tekstong ito ay nagsisilbing gabay sa kung ano ang kasama, at ang mga legal na kondisyon ay binibigyang-priyoridad sa dalawang dokumentong iyon."
          }
        ]
      }
    ]
  },
} satisfies Record<GlobalDocKey, DocPage>;

export const FIL_NOTICES = {
  "kindLabels": {
    "service": "Serbisyo",
    "product": "Mga Produkto",
    "policy": "Patakaran",
    "support": "Suporta"
  },
  "intro": "Ang mga pagbabago sa iyong mga tuntunin ng paggamit — mga presyo, patakaran — ay nai-post dito bago sila magkabisa. Ang mga panloob na pagpapabuti ay hindi nakalista: ang lumalabas dito ay kung ano ang kailangan mong malaman.",
  "empty": {
    "title": "Walang mga abiso pa",
    "body": "Kapag may nagbago, lilitaw ito dito."
  },
  "effective": "Magiging epektibo {date}",
  "pager": {
    "label": "Mga pahina ng abiso",
    "newer": "← Mas Bago",
    "older": "Mas Matanda →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Bukas na ang mga pahina ng Contact at About",
      "body": [
        "Ang mga tanong, refund, mga kahilingan sa privacy at mga ulat ng error ay mayroon na ngayong isang lugar na pupuntahan. Ang pahina ng contact sa footer ay naglilista ng aming email at mga detalye ng kumpanya.",
        "Ang aming mga sagot ay nakabatay sa, at ang mga bagay na sadyang hindi namin ginagawa, ay nakasulat sa pahina ng impormasyon."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Ang mga ulat na PDF ay inilalabas sa Ingles para sa Arabic at Khmer",
      "body": [
        "Kung ginagamit mo ang serbisyo sa Arabic o Khmer, ang PDF na binibili mo ay ginawa sa Ingles. Ang tool na nag-aayos ng aming mga dokumento ay hindi pa makapag-set ng mga talata sa mga script na iyon.",
        "Ang screen ay nananatili sa iyong wika, at ang iyong pangalan ay naka-print sa iyong sariling script sa loob ng dokumento.",
        "Ang parehong tala ay lumalabas bago ang pagbabayad. Kapag sinusuportahan na ng tool ang mga script na ito, ipapaalam namin dito."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Hindi pa bukas ang mga pagbabayad",
      "body": [
        "Ang paglikha ng isang pangalan at pagbabasa ng resulta ay libre ngayon, at walang kinakailangang account.",
        "Ang mga bayad na item ay hindi pa ibinibenta. Ang mga halagang ipinapakita sa pahina ng pagpepresyo ay ang mga ilalapat kapag nagbukas ang mga benta."
      ]
    }
  }
} satisfies NoticeCopy;
