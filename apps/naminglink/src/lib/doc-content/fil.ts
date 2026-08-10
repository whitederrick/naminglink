import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Tungkol sa",
    "title": "Tungkol sa Naming-Link",
    "summary": "Tinutulungan ka naming pumili at maunawaan ang mga pangalang Koreano. Narito ang aming batayan para sa mga resulta, at kung ano ang hindi namin sinasadya.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "Ano ang ginagawa namin",
        "blocks": [
          {
            "p": "Tinutulungan ka ng Naming-Link na **pumili at maunawaan ang mga pangalang Koreano** — ang hanja sa likod ng pangalan ng isang bata, isang pangalang Koreano na maaaring gamitin sa ibang bansa, isang pagsulat sa Hangul ng iyong sariling pangalan, at mga alaala tulad ng isang selyo o isang nakalimbag na ulat."
          },
          {
            "p": "Ang pagtingin sa iyong mga resulta ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay hindi muling ibinebenta ang ipinakita na sa screen: nagbubukas sila ng higit pang mga kandidato, nagdaragdag ng nakasulat na pagsusuri, o ginagawang isang bagay na maaari mong itago ang resulta."
          }
        ]
      },
      {
        "title": "Para kanino ang bawat serbisyo",
        "blocks": [
          {
            "p": "Mayroong dalawang uri ng serbisyo dito: isa para sa mga taong **mayroon nang pangalang Koreano**, at isa para sa mga taong **kailangan ng isa.** Nangangailangan sila ng iba't ibang bagay mula sa iyo, kaya't inaalok sila sa iba't ibang wika."
          },
          {
            "ul": [
              "**Inaalok sa iyong wika** — pagsusulat ng iyong sariling pangalan sa Hangul, at pagbuo ng isang pangalang Koreano. Ito ay para sa mga tao na walang pangalang Koreano, kaya't sumusunod sila sa wika na iyong pinasukan.",
              "**Inaalok sa Korean lamang** — paghahanap ng name-hanja para sa isang bata, at pag-convert ng isang pangalang Koreano sa isa para sa paggamit sa ibang bansa. Pareho silang nangangailangan ng **umiiral na pangalan sa Hangul** upang gumana, kaya't ang mga screen at kanilang mga gabay ay nananatiling nasa Korean."
            ]
          }
        ]
      },
      {
        "title": "Ano ang batayan ng aming mga sagot",
        "blocks": [
          {
            "p": "Ang Hanja ay nagmumula sa **opisyal na name-hanja table ng Korte Suprema ng Korea.** Ang bawat karakter ay may nakatakdang pagbasa para sa paggamit sa mga pangalan, at ang mga karakter na wala sa talahanayan ay hindi maaaring irehistro. Hindi kami nagdadagdag sa listahang iyon o pumipili ng mga paborito."
          },
          {
            "p": "Ang Saju at mga figure ng limang elemento ay kinakalkula mula sa **Korean lunisolar almanac**, na ang oras ng kapanganakan ay itinutuwid sa tunay na oras ng araw para sa lugar ng kapanganakan. Ang pagbasa ay isang tradisyunal na sanggunian, hindi isang prediksyon."
          },
          {
            "p": "Ang mga nakasulat na paliwanag ay ginawa ng AI. Upang maiwasan ang **pag-imbento ng mga bagay**, ang modelo ay binibigyan lamang ng iyong input at aming sariling reference data, at sinabihan na manatili sa loob nito. Ang mga gabay ay nagpapaliwanag nito nang detalyado."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin ginagawa",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagbabalak ng kapalaran.** Walang sinuman dito ang nangangako ng swerte, kayamanan o proteksyon.",
              "**Hindi namin iniimbak ang iyong pangalan.** Ang mga libreng resulta ay hindi kailanman isinulat sa aming mga server, at ang mga bayad na dokumento ay naihahatid nang walang kopya ng file.",
              "**Ang pagbabayad ay hindi bumibili ng mas magandang sagot.** Ang pag-unlock gamit ang isang ad at pag-unlock gamit ang isang pagbabayad ay nagbibigay ng eksaktong parehong nilalaman."
            ]
          }
        ]
      },
      {
        "title": "Saan nakatayo ang aming data at mga pagsasalin",
        "blocks": [
          {
            "p": "**Mas gusto naming sabihin ito nang tuwiran.** Ang pagsasabi sa iyo kung ano ang sinuri ng isang tao at kung ano ang hindi sinuri ng sinuman ay mas kapaki-pakinabang kaysa sa pag-angkin na lahat ay nasuri."
          },
          {
            "ul": [
              "**Data ng name-hanja** — ang {publisher} name-hanja table, hanggang {effectiveDate}. Nananatili kaming may hash ng source file, kaya kung magbago ang talahanayan, maaari naming sabihin kung ano ang nagbago.",
              "**Inilathala ng** Platforest. Ang mga karakter, pagbasa at kahulugan ay inilipat mula sa talahanayan gaya ng mga ito; hindi kami nagdadagdag o nag-aalis.",
              "**Pagsasalin** — nakasulat muna sa Korean, pagkatapos ay sa Ingles, at pagkatapos ay sa iba pang mga wika. **Ito ay mga machine translations, na awtomatikong sinuri** — para sa mga nawawalang pangungusap, pare-parehong terminolohiya, at ang mga ipinasok na halaga ay nananatiling buo. Hindi ito nasuri ng mga katutubong nagsasalita.",
              "**Nakasulat na paliwanag** ay ginawa ng AI, na nilimitahan sa iyong input at aming sariling reference data upang hindi ito mag-imbento ng mga katotohanan."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang serbisyo ay available sa 23 wika. Ang mga bayad na PDF ay ibinibigay sa Ingles para sa Arabic at Khmer — hindi sinusuportahan ng PDF renderer ang mga script na iyon — at sinasabi namin ito sa screen bago ka magbayad."
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
    "summary": "Paano kami pumipili ng isang apelyido sa Koreano, ano ang sinisiyasat namin bago magmungkahi ng isang ibinigay na pangalan, at paano namin isinusulat ang iyong pangalan sa Hangul — kasama ang mga bahagi na sinasadya naming hindi isama.",
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
    "summary": "Paano kami pumipili ng mga tunog kapag sumusulat ng isang banyagang pangalan sa Hangul, at kung bakit hindi kami naglalakip ng hanja.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Dinala namin ang tunog, hindi ang kahulugan",
        "blocks": [
          {
            "p": "Ang serbisyong ito ay sumusulat ng **iyong pangalan** sa Hangul. Hindi ito nagbibigay sa iyo ng pangalang Koreano. Michael becomes 마이클 — ang parehong pangalan, isinulat upang mabasa at masabi ito ng mga Koreano. Hindi namin ito pinapalitan ng isang pangalang Koreano na kebang nagkataon ay may katulad na kahulugan."
          },
          {
            "p": "Kung ang isang pangalang Koreano ang nais mo, **iyon ay ibang serbisyo.** Isang serbisyo ang nagpapanatili ng iyong pangalan at binabago lamang ang script; ang isa ay nagmumungkahi ng bagong pangalan."
          }
        ]
      },
      {
        "title": "Walang tunog na Koreano na hindi",
        "blocks": [
          {
            "p": "Bawat wika ay may mga tunog na wala ang Koreano — f, v, z, th, at mga pagkakaiba sa patinig na hindi ginagawa ng Koreano. Para sa mga iyon, isinusulat namin kung ano ang **aktwal na sinasabi ng isang tagapagsalita ng Koreano** kapag binasa nila ang iyong pangalan nang malakas, sa halip na i-transcribe ang orihinal na ponetika simbolo sa simbolo. Ang layunin ay ang baybay na gagamitin, hindi ang pinaka-teknikal na tapat."
          },
          {
            "p": "Ang parehong baybay ay maaaring magkaiba depende sa pinagmulan ng pangalan, kaya humihingi kami ng iyong wika at bansa at nagtatrabaho mula sa pagbigkas na iyon."
          }
        ]
      },
      {
        "title": "Ilang baybay, magkasama",
        "blocks": [
          {
            "p": "Walang iisang tamang sagot. Ang baybay na pinakamalapit sa orihinal na tunog, ang pinaka-karaniwang ginagamit sa Korea, at ang pinakamadaling isulat ay kadalasang tatlong magkaibang bagay. Kaya ipinapakita namin ang mga ito nang magkasama at sinasabi kung ano ang naghihiwalay sa mga ito."
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
      },
      {
        "title": "Ito ay kabaligtaran ng romanization ng pasaporte",
        "blocks": [
          {
            "p": "Madaling malito ang dalawang ito, kaya narito ang pagkakaiba: **sila ay tumatakbo sa magkasalungat na direksyon.**"
          },
          {
            "ul": [
              "**Romanization** ay kumukuha ng pangalan ng isang tao sa Hangul at isinusulat ito sa Latin na alpabeto. Ito ay nakatakda kapag ang isang pasaporte ay inilabas, at mula noon ang mga tiket, visa at mga bank account ay sumusunod sa baybing iyon. 김민준 ay nagiging Kim Minjun.",
              "**Hangul transliteration** — kung ano ang ginagawa ng serbisyong ito — ay tumatakbo sa kabaligtaran. Kinukuha nito ang isang pangalan na nakasulat sa Latin na alpabeto at isinusulat kung paano ito tunog sa Hangul. Daniel ay nagiging 대니얼."
            ]
          },
          {
            "p": "Kaya ang makukuha mo dito **ay hindi nagbabago ng baybay sa iyong pasaporte.** Ang romanization na iyon ay nakatakda na; ito ay ang pangalan na nakasulat muli sa Hangul. Ang dalawa ay hindi palaging nagko-convert pabalik sa isa't isa nang eksakto — ang pagsusulat ng isang tunog na wala ang Koreano ay nawawalan ng kaunting impormasyon sa daan."
          }
        ]
      },
      {
        "title": "Saan mo gagamitin ang baybing ito",
        "blocks": [
          {
            "p": "Karaniwang kinakailangan ang isang baybing Hangul sa mga lugar na tulad nito."
          },
          {
            "ul": [
              "**Pagpapakilala sa sarili** — pagpapakita ng iyong pangalan sa Hangul, o pagsasabi nito sa Koreano",
              "**Isang patlang ng pangalan sa Hangul sa isang form** — mga rehistrasyon at aplikasyon na humihingi ng iyong pangalan sa Hangul. Tandaan na **ang institusyon ang nagpasya kung ano ang ilalagay sa isang opisyal na dokumento** — ang makukuha mo dito ay hindi pumapalit sa iyon",
              "**Isang pangalan na selyo o alaala** — ang baybing ukit"
            ]
          },
          {
            "p": "**Normal na may higit sa isang baybay na maaaring ipagtanggol.** Kapag ang isang pangalan ay maaaring isulat sa maraming paraan sa Hangul, ipinapakita namin ang mga ito nang magkasama at iniiwan ang pagpili sa iyo."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano namin binubuo ang isang pangalan sa Koreano",
    "summary": "Pumipili kami mula sa mga apelyido na umiiral, tinatasa kung gaano kadaling bigkasin at isulat ang pangalan, at nagtatanong kung para saan ang pangalan.",
    "backLabel": "Gabayan",
    "sections": [
      {
        "title": "Nagsisimula kami sa apelyido",
        "blocks": [
          {
            "p": "Sa Korea, ang apelyido ay nauuna, at hindi tulad ng mga ibinigay na pangalan, hindi ito malayang naimbento — ito ay namamana. Kaya't nagmumungkahi lamang kami ng mga apelyido na talagang mayroon ang mga tao sa Korea. Ang aming default na pool ay ang **20 pinaka-karaniwang apelyido**, na sama-samang sumasaklaw sa halos 80% ng populasyon."
          },
          {
            "p": "Kung ang iyong sariling apelyido ay nagkataong tumugma sa isang tunay na Koreano sa tunog — Wang na may 왕, Ye na may 예 — ilalagay namin iyon sa unahan. Ang pagpapanatili ng isang ugnayan pabalik sa iyong orihinal na pangalan ay mas mahalaga kaysa sa isang apelyido na pinili nang sapalaran."
          },
          {
            "p": "Maaari mong piliin ang isang apelyido sa iyong sarili o hayaan kaming magrekomenda ng isa. Sa alinmang paraan, ito ay **isang apelyido na umiiral**."
          }
        ]
      },
      {
        "title": "May dalawampu't anim na apelyido na mapagpipilian",
        "blocks": [
          {
            "p": "Sinasadya naming pinanatiling makitid ang listahan. **Talagang nakatuon ang mga apelyido ng Koreano** — ang Kim, Lee at Park lamang ay nagkakaroon ng halos 45% ng populasyon, at ang nangungunang dalawampu ay humigit-kumulang 80%. Ang pagdaragdag ng mga bihirang apelyido ay magpapalawak sa menu, ngunit magbubunga rin ito ng mga pangalan na hindi naririnig ng mga Koreano bilang mga pangalan."
          },
          {
            "ul": [
              "**Ang dalawampu pinaka-karaniwang** (humigit-kumulang 80% ng populasyon) — 김 Kim · 이 Lee · 박 Park · 최 Choi · 정 Jung · 강 Kang · 조 Cho · 윤 Yoon · 장 Jang · 임 Lim · 한 Han · 오 Oh · 서 Seo · 신 Shin · 권 Kwon · 황 Hwang · 안 Ahn · 송 Song · 전 Jeon · 홍 Hong",
              "**Mga tunay na apelyido na idinagdag upang mapanatili ang ugnayan ng tunog** — 왕 Wang · 진 Jin · 백 Baek · 마 Ma · 나 Na · 유 Yoo"
            ]
          },
          {
            "p": "Ang pangalawang grupo ay umiiral upang **ang iyong sariling apelyido ay maaaring magdala ng tunog**. Ang Wang, Jin, Baek, Ma, Na at Yoo ay mga apelyido na mayroon na ang mga Koreano, kaya ang pagsasabi ng iyong pangalan ay nagpapanatili ng ugnayan sa isa na sinimulan mo. Lahat ng dalawampu't anim ay mga apelyido na talagang ginagamit — wala sa mga ito ang aming imbensyon."
          }
        ]
      },
      {
        "title": "Madaling bigkasin, madaling isulat",
        "blocks": [
          {
            "p": "Ito ay isang pangalan na talagang tatawagin ka ng mga tao sa Korea, kaya ang unang bagay na sinisiyasat namin ay kung ang isang Koreano ay maaaring marinig ito nang isang beses at isulat ito. Ang isang pangalan na kailangang isulat nang buo sa bawat pagkakataon ay isang pasanin na dala mo, hindi kami."
          },
          {
            "p": "Mahalaga rin ang kahulugan. Ang mga ibinigay na pangalan ng Koreano ay karaniwang may dalang kahulugan, kaya sinasabi namin sa iyo kung ano ang binabasa ng pangalan at kung bakit namin ito pinili — hindi lamang ang pangalan mismo."
          }
        ]
      },
      {
        "title": "Nagtatanong kami kung para saan ang pangalan",
        "blocks": [
          {
            "p": "Ang isang pangalan para sa mga dokumento ng unibersidad ay hindi katulad ng isang pangalan na isisigaw ng mga kaibigan sa isang silid, o isang palayaw na gagamitin mo online. Nagtatanong kami kung paano mo balak gamitin ito at isinasaalang-alang iyon."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ito ay hindi isang transliteration",
        "blocks": [
          {
            "p": "Dito ay nagmumungkahi kami ng **bagong pangalan sa Koreano**. Kung nais mong ang iyong umiiral na pangalan ay nakasulat sa Hangul — Michael bilang 마이클 — tingnan ang [gabayan sa baybing Hangul](/guide/how-hangul-transliteration)."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Mga Anunsyo",
    "title": "Mga Anunsyo",
    "summary": "Kung saan namin inihahayag ang mga pagbabago na nakakaapekto sa kung paano mo ginagamit ang serbisyo.",
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
              "**Mga bayad at refund** — kung ang isang dokumento ay hindi kailanman ginawa, o ang halagang sinisingil ay naiiba mula sa iyong order, ibabalik namin ang buong halaga. Tingnan ang [patakaran sa refund](/refund-policy).",
              "**Pribadong impormasyon** — mga kahilingan upang ma-access, ituwid o tanggalin ang iyong data. Tingnan ang [patakaran sa privacy](/privacy).",
              "**Mga pagwawasto** — kung ang isang hanja na kahulugan, pagbasa o kalkulasyon ay mukhang mali, ipaalam sa amin. Ang pagbanggit kung aling screen at kung ano ang iyong ipinasok ay makakatulong nang malaki.",
              "**Iba pa** — ang mga pakikipagsosyo at press ay pumunta sa parehong address."
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
    "summary": "Hindi kami nag-aassign ng kabuuang kapalaran o numerikal na mga marka, ni hindi kami gumagamit ng bilang ng mga stroke. Ang mga five elements ay ginagamit lamang bilang isang karagdagang axis. Narito ang mga dahilan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Mga dahilan para hindi mag-assign ng kabuuang kapalaran o numerikal na mga marka",
        "blocks": [
          {
            "p": "May mga pamamaraan na nag-aassign ng kabuuang kapalaran o numerikal na mga marka sa mga pangalan upang i-grade ang mga ito. Ang Naming-Link ay hindi nagbibigay ng mga numerong iyon. Ang mga dahilan ay apat."
          },
          {
            "p": "**Una, hindi lamang isang pamantayan ang umiiral.** Ang mga pamamaraan para sa pagkalkula ng kapalaran ay nag-iiba ayon sa paaralan, at ang parehong pangalan ay maaaring ma-rate nang positibo ng isang pamantayan at negatibo ng isa pa. Wala kaming batayan upang magpasya kung aling isa ang tama. Hindi tapat na ipakita ang isa bilang kung ito ang sagot."
          },
          {
            "p": "**Pangalawa, ang mga kalkulasyong iyon ay umaasa sa bilang ng mga stroke.** Gayunpaman, ang data ng Korte Suprema ay hindi kasama ang bilang ng mga stroke. Bukod dito, ang bilang ng mga stroke ay maaaring mag-iba depende sa kung ito ay binilang bilang regular o pinadaling mga karakter at kung paano binibilang ang mga radicals. Dahil ang mga batayang numero ay hindi tiyak na itinatag, ang mga marka na nakabatay sa mga ito ay hindi maaaring maging tiyak."
          },
          {
            "p": "**Pangatlo, ang mga numero ay mukhang mas solid kaysa sa katotohanan.** Kapag sinabing \"87 puntos\", ito ay parang isang nasusukat na halaga sa halip na isang karaniwang interpretasyon. Ang mga pangalan ay maaaring makaramdam ng presyon mula sa numerong iyon, na itinataboy ang tunay na mahalaga (Maganda bang tawagin? Ang kahulugan ba ay akma? Naglalaman ba ito ng mga nais na hangarin?)."
          },
          {
            "p": "**Pang-apat, walang paraan upang beripikahin.** Ang relasyon sa pagitan ng isang pangalan at ng buhay ng isang tao ay hindi ma-verify. Ang pag-convert ng isang bagay na hindi maaaring sabihin na tama o mali sa isang marka ay nagreresulta sa isang numerong hindi ma-confirm, kahit na hindi ito maaaring mali."
          },
          {
            "p": "Ginagamit lamang namin ang mga bagay na maaaring **patunayan.** Ang opisyal na talahanayan ng pangalan-hanja ng Korte Suprema, ang mga itinalagang pagbasa para sa bawat karakter, at ang mga kahulugan na nakalista sa talahanayan. Sa halip, nagbibigay kami ng mga dahilan kung bakit napili ang kandidato na ito at kung bakit ang ilang mga karakter ay hindi isinama, na nagpapakita ng **mga dahilan sa halip na mga marka.**"
          }
        ]
      },
      {
        "title": "Hindi kami gumagamit ng bilang ng mga stroke",
        "blocks": [
          {
            "p": "Ang opisyal na data ng pangalan-hanja na ibinibigay ng Korte Suprema ay hindi kasama ang bilang ng mga stroke. Sa mga {characterTotal} na karakter na natanggap namin, **wala ni isang karakter ang may bilang ng mga stroke.**"
          },
          {
            "p": "Upang gumamit ng bilang ng mga stroke, kailangan naming makakuha ng mga numero mula sa ibang lugar, ngunit kung hindi namin maipaliwanag kung saan nagmula ang mga numerong iyon at kung anong mga pamantayan ang ginamit upang bilangin ang mga ito, nangangahulugan ito ng paghusga sa mga pangalan batay sa mga walang batayang numero. Nagpasya kaming hindi suriin ang mga pangalan batay sa mga halaga na hindi maaaring patunayan."
          }
        ]
      },
      {
        "title": "Ginagamit namin ang mga five elements lamang bilang sanggunian",
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
            "caption": "Ang mga relasyon sa pagitan ng mga five elements. Ang paggalaw sa paligid ng bilog ay kumakatawan sa mutual generation (相生), habang ang pagtalon ng isa at pagpindot ay kumakatawan sa mutual restraint (相剋). Ginagamit namin ang relasyong ito bilang isang karagdagang axis lamang para sa paghahambing ng mga kandidato."
          },
          {
            "p": "Kung ikaw ay pumasok ng iyong buwan ng kapanganakan, ginagamit namin ang isang pinadaling sanggunian ng mga five elements batay sa buwan na iyon bilang isang karagdagang axis para sa paghahambing ng mga kandidato. Gayunpaman, ito ay hindi isang tumpak na pagsusuri ng saju, at **hindi namin sinasabi na ang mga pangalan ay nagtatakda ng kapalaran o katangian ng isang tao.**"
          },
          {
            "p": "Sa huling pagpili, ang aming pinapahalagahan ay mga tunog, kumbinasyon ng mga kahulugan, ang mga halaga na nais ipahayag ng pamilya, at kung ito ay talagang mairehistro. Kung hindi mo ipinasok ang iyong buwan ng kapanganakan, ganap naming ibinubukod ang sanggunian ng mga five elements mula sa pagsusuri — hindi kami gumagawa ng mga arbitraryong palagay tungkol sa hindi alam na impormasyon."
          },
          {
            "p": "Kung nais mo ng isang tumpak na pagsusuri batay sa saju, tinatalakay namin iyon sa isang hiwalay na detalyadong ulat. Ang dahilan kung bakit hindi namin pinapahalagahan ang mga five elements sa libreng pagtutugma ng hanja ay dahil ayaw naming ipakita ang mga hatol batay sa mga five elements na nakuha mula sa isang hindi kumpletong petsa at oras ng kapanganakan na parang ito ay tiyak."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Bayad na Mga Produkto",
    "title": "Ano ang kasama sa mga bayad na produkto?",
    "summary": "Nililinaw namin kung gaano karami ang nakikita nang libre at kung anong karagdagang mga tampok ang kasama sa bayad para sa bawat produkto. Ang mga presyo ay kinukuha mula sa aktwal na mga setting ng produkto.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Ano ang nakikita nang libre?",
        "blocks": [
          {
            "p": "Ang paglikha ng isang pangalan at pagtingin sa mga resulta ay **libre.** Walang kinakailangang pagpaparehistro ng pagiging miyembro. Makikita mo ang mga tumutugmang kahulugan ng hanja, paglikha ng mga pangalan sa Korea, pandaigdigang pagbabago ng pangalan, at notasyon ng pagbasa ng Hangul, kasama ang mga inirerekomendang resulta at kanilang mga paliwanag sa screen."
          },
          {
            "p": "Ang mga bayad na produkto ay hindi **ibinibenta muli ang mga bagay na ipinakita na sa screen.** Binubuksan nila ang higit pang mga kandidato, nagdaragdag ng higit pang mga paliwanag, o lumilikha ng isang format na maaaring maiimbak o maipadala."
          }
        ]
      },
      {
        "title": "Buong pagsisiwalat ng lahat ng kandidato — {priceUnlock}",
        "blocks": [
          {
            "p": "Ang mga inirerekomendang resulta ay naka-istruktura upang buksan ang mga kandidato isa-isa. Kapag tumitingin ng mga ad, isa-isa itong bumubukas, habang ang produktong ito **ay nagbubukas ng lahat ng natitirang kandidato nang sabay-sabay**."
          },
          {
            "p": "Kung hindi ka nagmamadali, hindi mo kailangang bumili. Ang **mga resulta mula sa pagbubukas sa pamamagitan ng mga ad at ang mga mula sa pagbabayad ay ganap na pareho** — ito ay isang usapin ng paghihintay, at ang pagbabayad ay hindi nagdadala ng mas magandang mga kandidato."
          }
        ]
      },
      {
        "title": "Mga Detalye ng Hanja — Tatlong Yugto",
        "blocks": [
          {
            "p": "Mayroong tatlong detalyadong produkto sa daloy ng pagpili ng hanja na ilalakip sa isang Hangul na pangalan."
          },
          {
            "ul": [
              "**Maximum na 5 hanja kandidato na detalyado** — {priceFiveDetail}. Maaari mong palawakin ang mga paliwanag para sa hanggang limang kandidato sa screen. Walang PDF.",
              "**Maximum na 10 hanja kandidato na pinalawak na detalyadong PDF** — {priceTenDetail}. Ang bilang ng mga kandidato ay tumataas sa sampu, at isang dokumentong PDF ay kasama.",
              "**Maximum na 10 hanja kandidato saju at ang komprehensibong ulat ng mga five elements** — {priceTenSaju}. Bilang karagdagan sa nabanggit, kasama nito ang saju chart na nakuha mula sa petsa ng kapanganakan at ang mga puwersa ng five elements, na sinisiyasat kung bakit ang isang partikular na hanja ay angkop sa pangalang iyon mula sa pananaw ng five elements."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hanja mismo ay pampublikong impormasyon",
        "blocks": [
          {
            "p": "Ang mga magagamit na hanja at ang kanilang mga kahulugan ay nagmumula sa opisyal na talahanayan ng pangalan-hanja na itinakda ng Korte Suprema ng Korea, at lahat ay pampublikong magagamit sa mga dokumento ng gabay ng serbisyo. Ang ibinibenta ng mga bayad na produkto ay hindi impormasyon ng hanja kundi **ang akto ng pagpili at pagpapaliwanag nito ayon sa pangalan**."
          }
        ]
      },
      {
        "title": "Mga PDF para sa Pandaigdigang Mga Gumagamit",
        "blocks": [
          {
            "p": "Mga dokumento na magagamit para sa pag-convert ng mga banyagang pangalan sa mga pangalan ng Korean o pagsusulat ng mga pangalan sa Hangul. Ang mga presyo ay sumusunod sa mga halagang ipinapakita sa screen ng pagbabayad."
          },
          {
            "ul": [
              "**Korean Name Premium Report** — 3 pahina. Kasama ang isang cover ng calligraphy, ang kahulugan ng pangalan at ang dahilan ng pagpili nito, at ang interpretasyon ng saju at mga five elements.",
              "**Hangul Name Art** — 2 pahina. Kasama ang isang cover ng calligraphy at gabay sa pagbigkas. Naglalaman ito kung paano isulat ang pangalan sa Hangul at kung paano ito bigkasin."
            ]
          }
        ]
      },
      {
        "title": "Name Stamp",
        "blocks": [
          {
            "p": "Ine-engrave namin ang pangalang nilikha sa screen sa isang pisikal na selyo at ipapadala ito sa iyo. Ang mga presyo ay nag-iiba ayon sa modelo — round seal {priceStampRound}, square seal {priceStampSquare}, ebony seal {priceStampEbony}. Available din ang internasyonal na pagpapadala."
          },
          {
            "p": "**Mula dito, ang mga produkto ay may kasamang pagpapadala.** Hindi tulad ng mga nakaraang item, ang produksyon at pagpapadala ay tumatagal ng oras, at kinakailangan ang isang address ng pagtanggap. Ang impormasyon sa pagpapadala ay ginagamit lamang para sa pagproseso ng order at legal na pagpapanatili, at sa sandaling makumpleto ang pagproseso, ito ay sisirain pagkatapos ng takdang panahon na tinukoy sa patakaran."
          }
        ]
      },
      {
        "title": "Mga Dapat Malaman Bago Bumili",
        "blocks": [
          {
            "p": "**Ang mga digital na produkto ay ibinibigay kaagad pagkatapos ng pagbabayad.** Maaari mong kanselahin at makatanggap ng buong refund anumang oras bago magsimula ang pag-download, ngunit sa sandaling makumpleto ang pag-download, ang pag-atras dahil sa simpleng pagbabago ng isip ay pinaghihigpitan (Article 17, Paragraph 2 ng Electronic Commerce Act). Ang kundisyong ito ay hiwalay na sinang-ayunan sa screen ng pagbabayad."
          },
          {
            "p": "**Ang mga reklamo tungkol sa nilalaman ng mga resulta ay hindi dahilan para sa refund.** Gayunpaman, kung ang dokumento ay hindi nalikha, ang file ay hindi mabubuksan, o ang halaga ng pagbabayad ay naiiba mula sa order, ito ay iproseso bilang reissue o buong refund."
          },
          {
            "p": "Ang mga detalyadong kondisyon ay nakasaad sa [Refund Policy](/refund-policy) at [Pricing Guide](/pricing). Ang tekstong ito ay nagsisilbing gabay sa kung ano ang kasama, at ang mga legal na kondisyon ay binibigyang-priyoridad sa dalawang dokumentong iyon."
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
  "intro": "Ang mga pagbabago sa iyong mga tuntunin ng paggamit — mga presyo, patakaran — ay nai-post dito bago sila magkabisa. Ang mga panloob na pagpapabuti ay hindi nakalista: ang mga lumalabas dito ay kung ano ang kailangan mong malaman.",
  "empty": {
    "title": "Walang mga abiso pa",
    "body": "Kapag may nagbago, lilitaw ito dito."
  },
  "effective": "Magkakaroon ng bisa {date}",
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
        "Kung ano ang batayan ng aming mga sagot, at kung ano ang sadyang hindi namin ginagawa, ay nakasulat sa pahina ng about."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Ang mga PDF na ulat ay inilalabas sa Ingles para sa Arabic at Khmer",
      "body": [
        "Kung gumagamit ka ng serbisyo sa Arabic o Khmer, ang PDF na binili mo ay ginawa sa Ingles. Ang tool na nag-aayos ng aming mga dokumento ay hindi pa makakapagsimula ng mga talata sa mga script na iyon.",
        "Ang screen ay nananatili sa iyong wika, at ang iyong pangalan ay naka-print sa iyong sariling script sa loob ng dokumento.",
        "Ang parehong tala ay lilitaw bago ang pagbabayad. Kapag sinusuportahan ng tool ang mga script na ito, ipapaalam namin dito."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Hindi pa bukas ang mga pagbabayad",
      "body": [
        "Ang paglikha ng pangalan at pagbabasa ng resulta ay libre ngayon, at walang kinakailangang account.",
        "Ang mga bayad na item ay hindi pa ibinibenta. Ang mga halagang ipinapakita sa pahina ng pagpepresyo ay ang mga ilalapat sa sandaling magbukas ang mga benta."
      ]
    }
  }
} satisfies NoticeCopy;
