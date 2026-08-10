import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Tungkol sa",
    "title": "Tungkol sa Naming-Link",
    "summary": "Tinutulungan ka naming pumili at maunawaan ang mga pangalang Koreano. Narito ang aming mga batayan para sa mga resulta, at kung ano ang hindi namin sinasadyang gawin.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "Ano ang ginagawa namin",
        "blocks": [
          {
            "p": "Tinutulungan ka ng Naming-Link na **pumili at maunawaan ang mga pangalang Koreano** — ang hanja sa likod ng pangalan ng isang bata, isang pangalang Koreano na gagamitin sa ibang bansa, isang pagsulat sa Hangul ng iyong sariling pangalan, at mga alaala tulad ng isang selyo o isang nakalimbag na ulat."
          },
          {
            "p": "Ang pagtingin sa iyong mga resulta ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay hindi muling ibinebenta ang mga ipinakita na sa screen: nagbubukas ang mga ito ng higit pang mga kandidato, nagdaragdag ng nakasulat na pagsusuri, o ginagawang isang bagay na maaari mong itago ang resulta."
          }
        ]
      },
      {
        "title": "Para kanino ang bawat serbisyo",
        "blocks": [
          {
            "p": "Mayroong dalawang uri ng serbisyo dito: isa para sa mga taong **mayroon nang pangalang Koreano**, at isa para sa mga taong **kailangan nito**. Nangangailangan sila ng iba't ibang bagay mula sa iyo, kaya't inaalok ang mga ito sa iba't ibang wika."
          },
          {
            "ul": [
              "**Inaalok sa iyong wika** — pagsusulat ng iyong sariling pangalan sa Hangul, at pagbuo ng isang pangalang Koreano. Ito ay para sa mga taong walang pangalang Koreano, kaya't sumusunod sila sa wika na iyong pinasukan.",
              "**Inaalok sa Korean lamang** — paghahanap ng name-hanja para sa isang bata, at pag-convert ng isang pangalang Koreano sa isa para sa paggamit sa ibang bansa. Pareho silang nangangailangan ng **umiiral na pangalan sa Hangul** upang gumana, kaya't ang mga screen at kanilang mga gabay ay nananatiling nasa Korean."
            ]
          }
        ]
      },
      {
        "title": "Ano ang batayan ng aming mga sagot",
        "blocks": [
          {
            "p": "Ang Hanja ay nagmumula sa **opisyal na name-hanja table ng Korte Suprema ng Korea.** Ang bawat karakter ay may nakatakdang pagbasa para sa paggamit sa mga pangalan, at ang mga karakter na wala sa talahanayan ay hindi maaaring irehistro. Hindi kami nagdaragdag sa listahang iyon o pumipili ng mga paborito."
          },
          {
            "p": "Ang Saju at mga pigura ng limang elemento ay kinakalkula mula sa **Korean lunisolar almanac**, na ang oras ng kapanganakan ay itinutuwid sa tunay na oras ng araw para sa lugar ng kapanganakan. Ang pagbasa ay isang tradisyonal na sanggunian, hindi isang hula."
          },
          {
            "p": "Ang mga nakasulat na paliwanag ay ginawa ng AI. Upang maiwasan itong **magsaliksik ng mga bagay**, ang modelo ay binibigyan lamang ng iyong input at aming sariling mga sangguniang data, at sinabihan na manatili sa loob nito. Ang mga gabay ay nagpapaliwanag nito nang detalyado."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin ginagawa",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagbabalak ng kapalaran.** Walang anumang dito ang nangangako ng swerte, kayamanan o proteksyon.",
              "**Hindi namin iniimbak ang iyong pangalan.** Ang mga libreng resulta ay hindi kailanman isinusulat sa aming mga server, at ang mga bayad na dokumento ay ibinibigay nang walang pag-iingat ng kopya ng file.",
              "**Ang pagbabayad ay hindi bumibili ng mas mahusay na sagot.** Ang pag-unlock gamit ang isang ad at pag-unlock gamit ang isang bayad ay nagbibigay ng eksaktong parehong nilalaman."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang serbisyo ay magagamit sa 23 wika. Ang mga bayad na PDF ay ibinibigay sa Ingles para sa Arabic at Khmer — hindi sinusuportahan ng PDF renderer ang mga script na iyon — at sinasabi namin ito sa screen bago ka magbayad."
          }
        ]
      },
      {
        "title": "Makipag-ugnayan",
        "blocks": [
          {
            "p": "Ang mga detalye ng kumpanya at kung paano kami maabot ay nasa [pahina ng pakikipag-ugnayan](/contact), kabilang ang mga refund, mga kahilingan sa privacy at mga ulat ng error."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Paano gumagana ang Naming-Link",
    "title": "Ano ang batayan ng iyong pangalan",
    "summary": "Paano kami pumipili ng isang apelyido sa Koreano, ano ang aming sinusuri bago magmungkahi ng isang ibinigay na pangalan, at kung paano namin isinusulat ang iyong pangalan sa Hangul — kasama ang mga bahagi na sadyang iniiwasan namin.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "mga karakter ng name-hanja"
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
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sinasaklaw ng mga gabay sa ibaba ang mga serbisyong inaalok sa iyong wika. Mayroon ding dalawang serbisyo ang Naming-Link para sa mga taong **mayroon nang pangalang Koreano** — paghahanap ng name-hanja para sa isang bata, at pag-convert ng isang pangalang Koreano sa isa para sa paggamit sa ibang bansa. Ang mga ito ay nangangailangan ng umiiral na pangalan sa Hangul, kaya't ang parehong mga serbisyo at kanilang mga gabay ay nasa Korean."
          },
          {
            "p": "[Tungkol sa](/about) ay nagpapaliwanag kung aling serbisyo ang para kanino."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano namin isinusulat ang iyong pangalan sa Hangul",
    "summary": "Paano kami pumipili ng mga tunog kapag nagsusulat ng banyagang pangalan sa Hangul, at kung bakit hindi kami nag-uugnay ng hanja.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Dinala namin ang tunog, hindi ang kahulugan",
        "blocks": [
          {
            "p": "Ang serbisyong ito ay sumusulat ng **iyong pangalan** sa Hangul. Hindi ito nagbibigay sa iyo ng pangalang Koreano. Michael becomes 마이클 — ang parehong pangalan, isinulat upang mabasa at masabi ito ng mga Koreano. Hindi namin ito pinapalitan ng isang pangalang Koreano na kebang nagkataon ay may katulad na kahulugan."
          },
          {
            "p": "Kung ang isang pangalang Koreano ang nais mo, **iyon ay ibang serbisyo.** Ang isa ay nagpapanatili ng iyong pangalan at binabago lamang ang script; ang isa ay nagmumungkahi ng bagong pangalan."
          }
        ]
      },
      {
        "title": "Mga tunog na wala ang Koreano",
        "blocks": [
          {
            "p": "Bawat wika ay may mga tunog na wala ang Koreano — f, v, z, th, at mga pagkakaiba ng patinig na hindi ginagawa ng Koreano. Para sa mga iyon, isinusulat namin kung ano ang **aktwal na sinasabi ng isang tagapagsalita ng Koreano** kapag binabasa nila ang iyong pangalan nang mal aloud, sa halip na isalin ang orihinal na phonetics simbolo sa simbolo. Ang layunin ay ang pagsulat na gagamitin, hindi ang pinaka teknikal na tapat."
          },
          {
            "p": "Ang parehong pagsulat ay maaaring magkaiba depende sa pinagmulan ng pangalan, kaya't humihingi kami ng iyong wika at bansa at nagtatrabaho mula sa pagbigkas na iyon."
          }
        ]
      },
      {
        "title": "Ilang pagsulat, magkasama",
        "blocks": [
          {
            "p": "Walang isang tamang sagot. Ang pagsulat na pinakamalapit sa orihinal na tunog, ang pinaka-karaniwang ginagamit sa Korea, at ang pinakamadaling isulat ay madalas na tatlong magkaibang bagay. Kaya't ipinapakita namin ang mga ito nang magkasama at sinasabi kung ano ang naghihiwalay sa mga ito."
          },
          {
            "p": "Kung wala sa mga ito ang tila tama, maaari kang magdagdag ng pahiwatig tungkol sa tunog na nais mo at subukan itong muli — halimbawa, na ang isang partikular na pantig ay dapat isulat nang iba."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Walang hanja dito",
        "blocks": [
          {
            "p": "Hindi kami naglalagay ng hanja sa isang transliteration. Ang hanja ay may kahulugan, at ang daloy na ito ay tungkol sa tunog. Ang pagtutugma ng mga karakter sa tunog lamang ay maaaring magdala sa iyo ng isang kahulugan na hindi mo hiniling."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano kami bumubuo ng isang pangalan sa Korean",
    "summary": "Pumipili kami mula sa mga apelyido na umiiral, tinutimbang kung gaano kadaling bigkasin at isulat ang pangalan, at tinatanong kung para saan ang pangalan.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Nagsisimula kami sa apelyido",
        "blocks": [
          {
            "p": "Sa Korea, ang apelyido ay nauuna, at hindi tulad ng mga ibinigay na pangalan, hindi ito malayang naimbento — ito ay namamana. Kaya't nagmumungkahi lamang kami ng mga apelyido na talagang mayroon ang mga tao sa Korea. Ang aming default na pool ay ang **20 pinaka-karaniwang apelyido**, na sama-samang sumasaklaw sa humigit-kumulang 80% ng populasyon."
          },
          {
            "p": "Kung ang iyong sariling apelyido ay nagkataon na tumutugma sa isang tunay na Koreanong apelyido sa tunog — Wang na may 왕, Ye na may 예 — ilalagay namin iyon una. Ang pagpapanatili ng koneksyon pabalik sa iyong orihinal na pangalan ay mas mahalaga kaysa sa isang apelyidong pinili nang sapalaran."
          },
          {
            "p": "Maaari kang pumili ng apelyido sa iyong sarili o hayaan kaming magrekomenda ng isa. Sa alinmang paraan, ito ay **isang apelyido na umiiral**."
          }
        ]
      },
      {
        "title": "Madaling bigkasin, madaling isulat",
        "blocks": [
          {
            "p": "Ito ay isang pangalan na talagang tatawagin ka ng mga tao sa Korea, kaya't ang unang bagay na tinitingnan namin ay kung maaari bang marinig ito ng isang Koreanong tao nang isang beses at maisulat ito. Ang isang pangalan na kailangang ip spelling bawat oras ay isang pasanin na dala mo, hindi namin."
          },
          {
            "p": "Mahalaga rin ang kahulugan. Karaniwang may dalang kahulugan ang mga ibinigay na pangalan sa Korea, kaya't sinasabi namin sa iyo kung ano ang binabasa ng pangalan at kung bakit namin ito pinili — hindi lamang ang pangalan mismo."
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
            "p": "Dito ay nagmumungkahi kami ng isang **bagong pangalan sa Korean**. Kung nais mong isulat ang iyong umiiral na pangalan sa Hangul — Michael bilang 마이클 — tingnan ang [gabay sa pagbaybay ng Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Mga Paunawa",
    "title": "Mga Paunawa",
    "summary": "Dito namin inihahayag ang mga pagbabago na nakakaapekto sa kung paano mo ginagamit ang serbisyo.",
    "backLabel": "Bahay",
    "sections": []
  },
  "contact": {
    "eyebrow": "Makipag-ugnayan",
    "title": "Makipag-ugnayan sa amin",
    "summary": "Paano kami maabot para sa mga tanong, refund, mga kahilingan sa privacy at mga ulat ng error, kasama ang aming mga detalye ng kumpanya.",
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
              "**Mga pagbabayad at refund** — kung ang isang dokumento ay hindi kailanman ginawa, o ang halagang siningil ay naiiba mula sa iyong order, ibabalik namin ito ng buo. Tingnan ang [patakaran sa refund](/refund-policy).",
              "**Privacy** — mga kahilingan upang ma-access, ituwid o tanggalin ang iyong data. Tingnan ang [patakaran sa privacy](/privacy).",
              "**Mga pagwawasto** — kung ang isang kahulugan ng hanja, pagbasa o kalkulasyon ay mukhang mali, sabihin sa amin. Ang pagbanggit kung aling screen at kung ano ang iyong ipinasok ay nakakatulong nang malaki.",
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
            "p": "Hindi mo kailangang isama ang isang pangalan o petsa ng kapanganakan sa iyong mensahe. Ang mga libreng resulta ay hindi kailanman nakaimbak sa aming mga server, kaya't hindi namin ito mahanap muli — sapat na ang isang numero ng order."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Ang Aming Mga Pamantayan",
    "title": "Ano ang Hindi Namin Ginagamit",
    "summary": "Hindi kami nag-assign ng kabuuang kapalaran o numerikal na mga marka, ni hindi kami gumagamit ng bilang ng mga stroke. Ang mga five elements ay ginagamit lamang bilang isang karagdagang axis. Narito ang mga dahilan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Mga Dahilan para sa hindi pag-assign ng kabuuang kapalaran o numerikal na mga marka",
        "blocks": [
          {
            "p": "May mga pamamaraan na nag-aassign ng kabuuang kapalaran o numerikal na mga marka sa mga pangalan upang i-grado ang mga ito. Ang Naming-Link ay hindi nagbibigay ng mga numerong iyon. Ang mga dahilan ay apat."
          },
          {
            "p": "**Una, hindi lamang isang pamantayan ang umiiral.** Ang mga pamamaraan para sa pagkalkula ng kapalaran ay nag-iiba-iba ayon sa paaralan, at ang parehong pangalan ay maaaring masuri nang positibo ng isang pamantayan at negatibo ng isa pa. Wala tayong batayan upang magpasya kung aling isa ang tama. Hindi tapat na ipakita ang isa bilang kung ito ang sagot."
          },
          {
            "p": "**Pangalawa, ang mga kalkulasyong iyon ay umaasa sa bilang ng mga stroke.** Gayunpaman, ang datos ng Korte Suprema ay hindi kasama ang bilang ng mga stroke. Bukod dito, ang bilang ng mga stroke ay maaaring mag-iba depende sa kung ito ay binilang bilang regular o pinadaling mga karakter at kung paano binibilang ang mga radikal. Dahil ang mga batayang numero ay hindi tiyak na naitatag, ang mga iskor na nakabatay sa mga ito ay hindi maaaring maging tiyak."
          },
          {
            "p": "**Pangatlo, ang mga numero ay tila mas solid kaysa sa realidad.** Kapag sinabing \"87 puntos\", ito ay tila isang nasusukat na halaga sa halip na isang karaniwang interpretasyon. Ang mga pangalan ay maaaring makaramdam ng presyon mula sa numerong iyon, na itinataboy ang tunay na mahalaga (Masaya bang tawagin? Ang kahulugan ba ay akma? Naglalaman ba ito ng mga ninanais na hangarin?)."
          },
          {
            "p": "**Pang-apat, walang paraan upang beripikahin.** Ang ugnayan sa pagitan ng isang pangalan at ng buhay ng isang tao ay hindi maaring beripikahin. Ang pag-convert ng isang bagay na hindi maaring sabihing tama o mali sa isang iskor ay nagreresulta sa isang numerong hindi maaring makumpirma, kahit na hindi ito maaring mali."
          },
          {
            "p": "Gumagamit lamang kami ng mga bagay na maaaring **patunayan.** Ang opisyal na talahanayan ng pangalan-hanja ng Korte Suprema, ang mga itinalagang pagbasa para sa bawat karakter, at ang mga kahulugan na nakalista sa talahanayan. Sa halip, nagbibigay kami ng mga dahilan kung bakit napili ang kandidatong ito at kung bakit ang ilang mga karakter ay hindi isinama, na nagpapakita ng **mga dahilan sa halip na mga iskor**."
          }
        ]
      },
      {
        "title": "Hindi kami gumagamit ng bilang ng mga stroke",
        "blocks": [
          {
            "p": "Ang opisyal na datos ng pangalan-hanja na ibinigay ng Korte Suprema ay hindi kasama ang bilang ng mga stroke. Sa {characterTotal} mga karakter na natanggap namin, **wala ni isang karakter ang may bilang ng mga stroke.**"
          },
          {
            "p": "Upang gumamit ng bilang ng mga stroke, kailangan naming makuha ang mga numero mula sa ibang lugar, ngunit kung hindi namin maipaliwanag kung saan nagmula ang mga numerong iyon at kung anong mga pamantayan ang ginamit upang bilangin ang mga ito, nangangahulugan ito ng paghusga sa mga pangalan batay sa mga hindi nakabatay na numero. Napagpasyahan naming huwag suriin ang mga pangalan batay sa mga halaga na hindi maaring patunayan."
          }
        ]
      },
      {
        "title": "Gumagamit kami ng mga five elements lamang bilang sanggunian",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Ang mga five elements na inilagay sa isang bilog: ang pagbuo ay tumatakbo sa pagitan ng mga kapitbahay, ang kontrol ay lumalaktaw ng isa",
              "wood": "kahoy",
              "fire": "apoy",
              "earth": "lupa",
              "metal": "metal",
              "water": "tubig",
              "saeng": "Pagbuo — bawat isa ay nagbibigay ng buhay sa kanyang kapitbahay",
              "geuk": "Kontrol — bawat isa ay pinipigilan ang isa na nilaktawan"
            },
            "caption": "Ang mga ugnayan sa pagitan ng mga five elements. Ang paglipat sa paligid ng bilog ay kumakatawan sa mutual generation (相生), habang ang pagtalon ng isa at pagpindot ay kumakatawan sa mutual restraint (相剋). Ginagamit namin ang ugnayang ito bilang isang karagdagang axis para sa paghahambing ng mga kandidato."
          },
          {
            "p": "Kung ikaw ay pumasok ng iyong buwan ng kapanganakan, gumagamit kami ng isang pinadaling sanggunian ng mga five elements batay sa buwan na iyon bilang isang karagdagang axis para sa paghahambing ng mga kandidato. Gayunpaman, ito ay hindi isang tumpak na pagsusuri ng saju, at **hindi namin sinasabi na ang mga pangalan ay nagtatakda ng kapalaran o katangian ng isang tao.**"
          },
          {
            "p": "Sa huling pagpili, ang aming pinapahalagahan ay mga tunog, kumbinasyon ng mga kahulugan, ang mga halaga na nais ipahayag ng pamilya, at kung ito ay talagang maaring irehistro. Kung hindi mo ipinasok ang iyong buwan ng kapanganakan, ganap naming ibinubukod ang sanggunian ng mga five elements mula sa pagsusuri — hindi kami gumagawa ng mga arbitraryong palagay tungkol sa hindi alam na impormasyon."
          },
          {
            "p": "Kung nais mo ng isang tumpak na pagsusuri batay sa saju, tinatalakay namin iyon sa isang hiwalay na detalyadong ulat. Ang dahilan kung bakit hindi namin pinapahalagahan ang mga five elements sa libreng pagtutugma ng hanja ay dahil ayaw naming ipakita ang mga hatol batay sa mga five elements na nakuha mula sa hindi kumpletong petsa at oras ng kapanganakan na parang ito ay tiyak."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Bayad na Mga Produkto",
    "title": "Ano ang kasama sa mga bayad na produkto?",
    "summary": "Nililinaw namin kung ano ang nakikita nang libre at kung anong karagdagang mga tampok ang kasama sa bayad para sa bawat produkto. Ang mga presyo ay kinukuha mula sa aktwal na mga setting ng produkto.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Ano ang nakikita nang libre?",
        "blocks": [
          {
            "p": "Ang paglikha ng isang pangalan at pagtingin sa mga resulta ay **libre.** Walang kinakailangang pagpaparehistro ng pagiging miyembro. Makikita mo ang mga tugmang kahulugan ng hanja, paglikha ng mga pangalan sa Korea, pandaigdigang pagbabago ng pangalan, at notasyon ng pagbigkas sa Hangul, kasama ang mga inirekomendang resulta at kanilang mga paliwanag sa screen."
          },
          {
            "p": "Ang mga bayad na produkto ay hindi **nagre-resell ng mga bagay na naipakita na sa screen.** Binubuksan nila ang higit pang mga kandidato, nagdaragdag ng higit pang mga paliwanag, o lumilikha ng isang format na maaring itago o ipasa."
          }
        ]
      },
      {
        "title": "Buong pagsisiwalat ng lahat ng kandidato — {priceUnlock}",
        "blocks": [
          {
            "p": "Ang mga inirekomendang resulta ay naka-istruktura upang buksan ang mga kandidato isa-isa. Kapag tumitingin ng mga ad, isa-isa itong nagbubukas, habang ang produktong ito ay **nagbubukas ng lahat ng natitirang kandidato nang sabay-sabay.**"
          },
          {
            "p": "Kung hindi ka nagmamadali, hindi mo kailangang bumili. Ang **mga resulta mula sa pagbubukas sa pamamagitan ng mga ad at ang mga mula sa pagbabayad ay ganap na pareho** — ito ay isang usaping paghihintay, at ang pagbabayad ay hindi nagdudulot ng mas magagandang kandidato."
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
              "**Maximum 10 hanja candidates na saju at komprehensibong ulat ng mga five elements** — {priceTenSaju}. Bilang karagdagan sa nabanggit, kasama nito ang saju chart na nakuha mula sa petsa ng kapanganakan at ang mga puwersa ng mga five elements, na sinusuri kung bakit ang isang partikular na hanja ay angkop sa pangalang iyon mula sa pananaw ng mga five elements."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hanja mismo ay pampublikong impormasyon",
        "blocks": [
          {
            "p": "Ang mga magagamit na hanja at ang kanilang mga kahulugan ay nagmumula sa opisyal na talahanayan ng pangalan-hanja na itinakda ng Korte Suprema ng Korea, at lahat ay pampublikong magagamit sa mga dokumento ng gabay ng serbisyo. Ang ibinibenta ng mga bayad na produkto ay hindi impormasyon ng hanja kundi **ang akto ng pagpili at pagpapaliwanag nito ayon sa pangalan.**"
          }
        ]
      },
      {
        "title": "PDF para sa Pandaigdigang Mga Gumagamit",
        "blocks": [
          {
            "p": "Mga dokumento na magagamit para sa pagbabago ng mga banyagang pangalan sa mga pangalan sa Korea o pagsusulat ng mga pangalan sa Hangul. Ang mga presyo ay sumusunod sa mga halagang ipinapakita sa screen ng pagbabayad."
          },
          {
            "ul": [
              "**Korean Name Premium Report** — 3 pahina. Kasama ang isang cover ng calligraphy, ang kahulugan ng pangalan at ang dahilan ng pagpili nito, at pagsusuri ng saju at mga five elements.",
              "**Hangul Name Art** — 2 pahina. Kasama ang isang cover ng calligraphy at gabay sa pagbigkas. Naglalaman ito kung paano isulat ang pangalan sa Hangul at kung paano ito bigkasin."
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
            "p": "**Mula dito, ang mga produkto ay kasama ang pagpapadala.** Hindi tulad ng mga nakaraang item, ang produksyon at pagpapadala ay tumatagal ng oras, at kinakailangan ang isang address ng pagtanggap. Ang impormasyon sa pagpapadala ay ginagamit lamang para sa pagproseso ng order at legal na pagpapanatili, at sa sandaling makumpleto ang pagproseso, ito ay sisirain pagkatapos ng takdang panahon na itinakda sa patakaran."
          }
        ]
      },
      {
        "title": "Mga Dapat Malaman Bago Bumili",
        "blocks": [
          {
            "p": "**Ang mga digital na produkto ay ibinibigay kaagad pagkatapos ng pagbabayad.** Maaari mong kanselahin at makatanggap ng buong refund anumang oras bago magsimula ang pag-download, ngunit sa sandaling makumpleto ang pag-download, ang pag-atras dahil sa simpleng pagbabago ng isip ay limitado (Artikulo 17, Talata 2 ng Batas sa Elektronikong Kalakalan). Ang kundisyong ito ay hiwalay na sinang-ayunan sa screen ng pagbabayad."
          },
          {
            "p": "**Ang mga reklamo tungkol sa nilalaman ng mga resulta ay hindi dahilan para sa refund.** Gayunpaman, kung ang dokumento ay hindi nalikha, ang file ay hindi maaring buksan, o ang halaga ng pagbabayad ay naiiba mula sa order, ito ay ipoproseso bilang isang reissue o buong refund."
          },
          {
            "p": "Ang mga detalyadong kondisyon ay nakasaad sa [Refund Policy](/refund-policy) at [Pricing Guide](/pricing). Ang tekstong ito ay nagsisilbing gabay sa kung ano ang kasama, at ang mga legal na kondisyon ay pinapahalagahan sa dalawang dokumentong iyon."
          }
        ]
      }
    ]
  }
} satisfies Record<GlobalDocKey, DocPage>;

export const FIL_NOTICES = {
  "kindLabels": {
    "service": "Serbisyo",
    "product": "Mga Produkto",
    "policy": "Patakaran",
    "support": "Suporta"
  },
  "intro": "Ang mga pagbabago sa iyong mga tuntunin ng paggamit — mga presyo, mga patakaran — ay nai-post dito bago sila magkabisa. Ang mga panloob na pagpapabuti ay hindi nakalista: ang nakikita dito ay kung ano ang kailangan mong malaman.",
  "empty": {
    "title": "Walang mga abiso pa",
    "body": "Kapag may nagbago, ito ay lilitaw dito."
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
        "Ang mga tanong, refund, mga kahilingan sa privacy at mga ulat ng error ay mayroon na ngayong isang lugar na pupuntahan. Ang pahina ng contact sa footer ay naglalaman ng aming email at mga detalye ng kumpanya.",
        "Ang batayan ng aming mga sagot, at kung ano ang sadyang hindi namin ginagawa, ay nakasulat sa pahina ng about."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Ang mga PDF na ulat ay inilalabas sa Ingles para sa Arabic at Khmer",
      "body": [
        "Kung ginagamit mo ang serbisyo sa Arabic o Khmer, ang PDF na binili mo ay ginawa sa Ingles. Ang tool na nag-aayos ng aming mga dokumento ay hindi pa kayang mag-set ng mga talata sa mga script na iyon.",
        "Ang screen ay mananatili sa iyong wika, at ang iyong pangalan ay naka-print sa iyong sariling script sa loob ng dokumento.",
        "Ang parehong tala ay lilitaw bago ang pagbabayad. Kapag sinusuportahan ng tool ang mga script na ito, ipapaalam namin dito."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Hindi pa bukas ang mga pagbabayad",
      "body": [
        "Ang paglikha ng isang pangalan at pagbabasa ng resulta ay libre ngayon, at walang kinakailangang account.",
        "Ang mga bayad na item ay hindi pa ibinebenta. Ang mga halagang ipinapakita sa pahina ng pagpepresyo ay kung ano ang magiging naaangkop kapag nagbukas ang mga benta."
      ]
    }
  }
} satisfies NoticeCopy;
