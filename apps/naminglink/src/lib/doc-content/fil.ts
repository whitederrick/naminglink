import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Tungkol sa",
    "title": "Tungkol sa Naming-Link",
    "summary": "Tinutulungan ka naming pumili at maunawaan ang mga pangalang Koreano. Narito ang aming mga batayan sa mga resulta, at kung ano ang sadyang hindi namin ginagawa.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "Ano ang ginagawa namin",
        "blocks": [
          {
            "p": "Tinutulungan ka ng Naming-Link na **pumili at maunawaan ang mga pangalang Koreano** — ang hanja sa likod ng pangalan ng isang bata, isang pangalang Koreano na maaaring gamitin sa ibang bansa, isang pagsulat sa Hangul ng iyong sariling pangalan, at mga alaala tulad ng isang selyo o isang nakalimbag na ulat."
          },
          {
            "p": "Ang pagtingin sa iyong mga resulta ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay hindi muling ibinebenta ang kung ano ang naipakita na sa screen: nagbubukas sila ng higit pang mga kandidato, nagdadagdag ng nakasulat na pagsusuri, o ginagawang isang bagay na maaari mong itago ang resulta."
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
            "p": "Ang saju at mga pigura ng limang elemento ay kinakalkula mula sa **Korean lunisolar almanac**, na ang oras ng kapanganakan ay itinatama sa tunay na oras ng araw para sa lugar ng kapanganakan. Ang pagbasa ay isang tradisyunal na sanggunian, hindi isang hula."
          },
          {
            "p": "Ang mga nakasulat na paliwanag ay ginawa ng AI. Upang maiwasan itong **mag-imbento ng mga bagay**, ang modelo ay binibigyan lamang ng iyong input at ang aming sariling mga sangguniang datos, at sinabihan na manatili sa loob nito. Ang mga gabay ay nagpapaliwanag nito nang detalyado."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin ginagawa",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagtataya ng kapalaran.** Walang anumang dito ang nangangako ng swerte, kayamanan o proteksyon.",
              "**Hindi namin iniimbak ang iyong pangalan.** Ang mga libreng resulta ay hindi kailanman isinusulat sa aming mga server, at ang mga bayad na dokumento ay naihahatid nang walang pag-iwan ng kopya ng file.",
              "**Ang pagbabayad ay hindi bumibili ng mas magandang sagot.** Ang pag-unlock gamit ang isang ad at pag-unlock gamit ang isang bayad ay nagbibigay ng eksaktong parehong nilalaman."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang serbisyo ay available sa 23 wika. Ang mga bayad na PDF ay ibinibigay sa Ingles para sa Arabic at Khmer — ang PDF renderer ay hindi sumusuporta sa mga script na iyon — at sinasabi namin ito sa screen bago ka magbayad."
          }
        ]
      },
      {
        "title": "Makipag-ugnayan",
        "blocks": [
          {
            "p": "Ang mga detalye ng kumpanya at kung paano kami maabot ay nasa [pahina ng pakikipag-ugnayan](/contact), kasama ang mga refund, mga kahilingan sa privacy at mga ulat ng error."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Mga Pagbasa",
    "title": "Nakatakdang mga pagbasa — isang pagbigkas bawat karakter",
    "summary": "Ang opisyal na talahanayan ay hindi lamang naglilista ng mga karakter. Itinatakda din nito kung paano binabasa ang bawat isa kapag ginamit sa isang pangalan.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Isang nakatakdang pagbasa para sa bawat karakter",
        "blocks": [
          {
            "p": "Ang talahanayan ng pangalan-hanja ay hindi lamang nagtatakda kung aling mga karakter ang maaaring gamitin. **Itinatakda din nito kung paano binabasa ang bawat karakter kapag lumilitaw ito sa isang pangalan.** Ang nakatakdang pagbasa ang batayan ng pagpaparehistro."
          },
          {
            "p": "Karamihan sa mga hanja ay may ilang posibleng pagbasa. Gayunpaman, ang isang pangalan ay nakasulat sa mga dokumento at binibigkas nang malakas, kaya kailangan nito ng eksaktong isa. Samakatuwid, itinatakda ng talahanayan ang bawat karakter ng kanyang pagbasa para sa paggamit sa mga pangalan, at walang ibang pagbasa ang maaaring irehistro."
          }
        ]
      },
      {
        "title": "Kaya ang tunog ang nauuna",
        "blocks": [
          {
            "p": "Ito ang dahilan kung bakit itinatakda ng Naming-Link ang tunog bago maghanap ng hanja. Kung ang pangalan ay \"지은\", ang kahulugan ay maaaring piliin lamang mula sa mga karakter na itinalaga ang pagbasa na **지** at mga karakter na itinalaga ang pagbasa na **은**."
          },
          {
            "p": "Anuman ang kabutihan ng isang kahulugan, ang isang karakter na ang pagbasa ay hindi tumutugma ay hindi maaaring gamitin para sa pangalang iyon. Hindi rin namin binabago ang tunog ng isang pangalan upang umangkop sa isang karakter — ang pangalan ay binibigkas sa buong buhay, at ang tunog ay itinatag muna, na sinusundan ng hanja."
          }
        ]
      },
      {
        "title": "Ang mga apelyido ay nasa labas ng talahanayang ito",
        "blocks": [
          {
            "p": "Ito ay madalas na hindi nauunawaan. **Ang talahanayan ay namamahala sa ibinigay na pangalan, hindi sa apelyido.** Ang isang apelyido ay sumusunod sa kung ano ang nasa rehistro ng pamilya, kaya ang ilang tao ay gumagamit ng mga karakter na wala sa talahanayan ng pangalan-hanja."
          },
          {
            "p": "Iyon ang dahilan kung bakit iba ang pagtrato ng Naming-Link sa hanja ng apelyido. Tinutulungan ka lamang naming makahanap ng apelyido, at nag-iiwan kami ng isang patlang para sa direktang pagpasok ng isa, para sa mga taong ang karakter ay nasa labas ng talahanayan. Ang mga apelyido na may dalawang silaba tulad ng Namgung at Seonwoo ay ipinasok sa parehong paraan."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano namin isinusulat ang iyong pangalan sa Hangul",
    "summary": "Paano namin pinipili ang mga tunog kapag sumusulat ng isang banyagang pangalan sa Hangul, at kung bakit hindi kami naglalakip ng hanja.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Dala namin ang tunog, hindi ang kahulugan",
        "blocks": [
          {
            "p": "Ang serbisyong ito ay sumusulat ng **iyong pangalan** sa Hangul. Hindi ito nagbibigay sa iyo ng pangalang Koreano. Michael ay nagiging 마이클 — ang parehong pangalan, isinulat upang mabasa at masabi ito ng mga Koreano. Hindi namin ito pinapalitan ng isang pangalang Koreano na kebin na may katulad na kahulugan."
          },
          {
            "p": "Kung ang isang pangalang Koreano ang gusto mo, **iyon ay ibang serbisyo.** Ang isa ay nagpapanatili ng iyong pangalan at binabago lamang ang script; ang isa ay nagmumungkahi ng bagong pangalan."
          }
        ]
      },
      {
        "title": "Mga tunog na wala ang Koreano",
        "blocks": [
          {
            "p": "Bawat wika ay may mga tunog na wala ang Koreano — f, v, z, th, at mga pagkakaiba sa patinig na hindi ginagawa ng Koreano. Para sa mga iyon, isinusulat namin kung ano ang **talagang sinasabi ng isang nagsasalitang Koreano** kapag binabasa nila ang iyong pangalan nang malakas, sa halip na isalin ang orihinal na ponetika simbolo sa simbolo. Ang layunin ay ang pagsulat na gagamitin, hindi ang pinaka teknikal na tapat."
          },
          {
            "p": "Ang parehong pagsulat ay maaaring magkaiba depende sa pinagmulan ng pangalan, kaya humihingi kami ng iyong wika at bansa at nagtatrabaho mula sa pagbasa na iyon."
          }
        ]
      },
      {
        "title": "Ilang pagsulat, magkasama",
        "blocks": [
          {
            "p": "Walang isang tamang sagot. Ang pagsulat na pinakamalapit sa orihinal na tunog, ang pinaka-karaniwang ginagamit sa Korea, at ang pinakamadaling isulat ay madalas na tatlong magkaibang bagay. Kaya ipinapakita namin ang mga ito nang magkasama at sinasabi kung ano ang naghihiwalay sa mga ito."
          },
          {
            "p": "Kung wala sa mga ito ang tila tama, maaari kang magdagdag ng isang pahiwatig tungkol sa tunog na gusto mo at subukan ulit — halimbawa, na ang isang partikular na silaba ay dapat isulat nang iba."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Walang hanja dito",
        "blocks": [
          {
            "p": "Hindi kami naglalakip ng hanja sa isang transliteration. Ang hanja ay may dalang kahulugan, at ang daloy na ito ay tungkol sa tunog. Ang pagtutugma ng mga karakter sa tunog lamang ay maaaring magdala sa iyo ng isang kahulugan na hindi mo kailanman hiniling."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano namin binuo ang isang pangalang Koreano",
    "summary": "Pumipili kami mula sa mga apelyido na umiiral, tinutimbang kung gaano kadaling bigkasin at isulat ang pangalan, at tinatanong kung ano ang layunin ng pangalan.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Nagsisimula kami sa **pangalang pamilya**",
        "blocks": [
          {
            "p": "Sa Korea, ang **pangalang pamilya** ay nauuna, at hindi tulad ng mga ibinigay na pangalan, hindi ito malayang naimbento — ito ay namamana. Kaya't nagmumungkahi lamang kami ng mga apelyido na talagang mayroon ang mga tao sa Korea. Ang aming default na pool ay ang **20 pinaka-karaniwang apelyido**, na sama-samang sumasaklaw sa humigit-kumulang 80% ng populasyon."
          },
          {
            "p": "Kung ang iyong sariling apelyido ay nagkataong tumugma sa isang tunay na Koreanong apelyido sa tunog — Wang na may 왕, Ye na may 예 — ilalagay namin iyon sa unahan. Ang pagpapanatili ng ugnayan sa iyong orihinal na pangalan ay mas mahalaga kaysa sa isang apelyido na pinili nang basta-basta."
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
            "p": "Ito ay isang pangalan na talagang tatawagin ka ng mga tao sa Korea, kaya't ang unang bagay na tinitingnan namin ay kung ang isang Korean ay makakarinig nito nang isang beses at maisusulat ito. Ang isang pangalan na kailangang ispeleng muli sa bawat pagkakataon ay isang pasanin na dala mo, hindi namin."
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
            "p": "Dito ay nagmumungkahi kami ng **bagong pangalan sa Korean**. Kung nais mong isulat ang iyong umiiral na pangalan sa Hangul — Michael bilang 마이클 — tingnan ang [gabay sa pagsulat ng Hangul](/guide/how-hangul-transliteration)."
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
              "**Mga pagbabayad at refund** — kung ang isang dokumento ay hindi kailanman ginawa, o ang halagang siningil ay naiiba mula sa iyong order, ibabalik namin ito nang buo. Tingnan ang [patakaran sa refund](/refund-policy).",
              "**Privacy** — mga kahilingan upang ma-access, ituwid o tanggalin ang iyong data. Tingnan ang [patakaran sa privacy](/privacy).",
              "**Mga pagwawasto** — kung ang kahulugan, pagbasa o kalkulasyon ng isang hanja ay mukhang mali, sabihin sa amin. Ang pagbanggit kung aling screen at kung ano ang iyong ipinasok ay makakatulong nang malaki.",
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
              "**Numero ng pagpaparehistro ng negosyo** — {businessNumber}",
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
            "p": "Hindi mo kailangang isama ang isang pangalan o petsa ng kapanganakan sa iyong mensahe. Ang mga libreng resulta ay hindi kailanman naka-imbak sa aming mga server, kaya't hindi namin ito mahanap muli — sapat na ang isang numero ng order."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Mga Kaugalian",
    "title": "Mga Character na Tradisyonal na Iwasan",
    "summary": "Hindi ito ipinagbabawal ng batas ngunit isang kaugalian. Nagsulat kami tungkol sa kung ano ang iniiwasan at bakit, at kung paano namin ito hinaharap.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Mga Character na Legal na Katanggap-tanggap",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} character",
                "label": "Naka-compile na mga Character na Iwasan"
              },
              {
                "value": "{avoidCommonlyUsed} character",
                "label": "Kabilang dito, mga character na karaniwang ginagamit pa"
              }
            ]
          },
          {
            "p": "May mga character na kasama sa listahan ng mga character para sa mga personal na pangalan at **legal na katanggap-tanggap**, ngunit itinuturing na hindi angkop para sa mga pangalan."
          },
          {
            "p": "Ang pangunahing pag-iisip ay **\"ang labis na kahulugan ay talagang hindi kanais-nais.\"** Kabilang dito ang mga character na itinuturing na masyadong mahalaga (珍·寶), mga character na tiningnan bilang may masyadong malakas na presensya (王·帝), at ang mga itinuturing na masyadong dakila para sa isang tao na maisakatawan, tulad ng langit o mga diyos. Ito ay sumasalamin sa isang lumang pakiramdam ng pagpipigil, naniniwala na ang isang pangalan ay maaaring magpawala ng liwanag sa tao."
          },
          {
            "p": "**Gayunpaman, ang mga character na ito ay hindi hindi magagamit.** Hindi ito isang legal na pagbabawal kundi isang kaugalian, at ang mga kaugalian ay nag-iiba-iba ayon sa rehiyon, pamilya, at henerasyon, at maaaring magbago sa paglipas ng panahon."
          },
          {
            "p": "Sa katunayan, sa mga {avoidTotal} karakter na aming nakalap, {avoidCommonlyUsed} ay patuloy na ginagamit sa mga pangalan. Ang katotohanan na ito ay kilalang iwasan ngunit malawak na ginagamit ay nagpapahiwatig na ang kaugalian na ito ay hindi ganap."
          }
        ]
      },
      {
        "title": "Anong mga Kategorya ang Naroroon?",
        "blocks": [
          {
            "p": "Ang mga kasalukuyang nakalap na karakter ay nahahati sa pitong kategorya."
          },
          {
            "ul": [
              "**Yaman at mga Bagay** — Mga karakter na direktang tumutukoy sa kayamanan o mga bagay",
              "**Langit at Kalikasan** — Mga bagay tulad ng araw, buwan, at langit na itinuturing na masyadong dakila para sa isang tao na katawanin",
              "**Mga Hari at Nobilidad** — Mga karakter na nagpapahiwatig ng katayuan, tulad ng hari o emperador",
              "**Mga Banal na Nilalang** — Mga karakter na tumutukoy sa mga sagradong larangan, tulad ng mga diyos o espiritu",
              "**Mga Panahon at Iba pa** — Mga karakter na nakatali sa mga tiyak na oras o estado",
              "**Mga Hayop** — Mga hayop na itinuturing na may malakas na enerhiya, tulad ng mga dragon o tigre",
              "**Sobrang Laki** — Mga karakter na itinuturing na may labis na malaki o umaapaw na kahulugan"
            ]
          }
        ]
      },
      {
        "title": "Maaari Mong Idagdag o Alisin ang mga Karakter sa Iyong Sarili",
        "blocks": [
          {
            "p": "Hindi namin basta-basta tinatanggal ang mga karakter na ito. **Nagbigay kami ng dalawang opsyon sa input screen para sa namer na pumili kung paano ito haharapin.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga Opsyon na Magagamit sa Input Screen",
        "blocks": [
          {
            "p": "**Iwasan ang mga Iwasang Karakter mula sa mga Kandidato** — Kung pinagana, sila ay ganap na aalisin. Kung hindi pinagana, mananatili sila sa mga resulta na may label na \"Traditionally Avoided\" at ang dahilan na nakalakip."
          },
          {
            "p": "**Iwasan kahit ang mga Karakter na Karaniwang Ginagamit** — Ito ay nag-aalis ng mga karakter na nasa listahan ng pag-iwas ngunit talagang malawak na ginagamit (圭·琳·玲·元·太·星·海, atbp.). Kung pinagana, ang mga kandidato ay magiging makabuluhang nabawasan."
          },
          {
            "p": "Ang default ay **hindi iwasan kundi ipakita lamang** sila. Kung tahimik na aalisin mula sa listahan, maaaring lumitaw sa mga nais gumamit ng karakter na iyon na parang hindi ito umiiral."
          }
        ]
      },
      {
        "title": "Tinitiyak na ang mga Opsyon ay Hindi Nawawala",
        "blocks": [
          {
            "p": "Kung walang magagamit na mga karakter para sa pantig na iyon, aalisin namin ang pag-iwas para sa pantig na iyon at ipapakita ang mga kandidato. Naniniwala kami na mas mabuti ito kaysa sa walang mga opsyon."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Ano ang Batayan para sa Global na Pag-convert ng Pangalan?",
    "summary": "Nagbibigay kami ng mga kandidato mula sa limang pananaw, pinapanatili ang mga sistema ng pagsulat ng bawat wika at gumagamit lamang ng mga umiiral na pangalan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Ang mga Kandidato ay Ibinigay mula sa Limang Pananaw",
        "blocks": [
          {
            "p": "Hindi lamang isang paraan ang pagsasalin ng pangalan sa ibang wika. Depende sa kung dapat bang panatilihin ang tunog o ang kahulugan, pumili ng natural na pangalan sa lokal na konteksto o bigyang-priyoridad ang pagkakakilanlan, ang mga sagot ay mag-iiba. Samakatuwid, sa halip na magpresenta ng isang opsyon, nagbibigay kami ng **isa mula sa bawat isa sa limang magkakaibang pananaw**."
          },
          {
            "ul": [
              "**Opsyon sa Pagpapanatili ng Tunog** — Pinapanatili ang tunog ng orihinal na pangalan hangga't maaari",
              "**Opsyon sa Pagsasalin ng Kahulugan** — Isinasalin ang kahulugan na nakapaloob sa pangalan sa pangalan ng wikang iyon",
              "**Opsyon sa Kompromiso ng Tunog at Kahulugan** — Kumukuha ng kalahati mula sa bawat isa",
              "**Opsyon sa Lokal na Awtentik** — Pumipili ng mga pangalan na talagang karaniwang ginagamit sa konteksto ng kultura na iyon",
              "**Opsyon sa Indibidwalidad at Branding** — Binibigyang-priyoridad ang mga pangalan na madaling tandaan at natatangi"
            ]
          },
          {
            "p": "Garantisadong limang opsyon ang ibibigay. Dahil ang mga kagustuhan ay nag-iiba mula sa tao hanggang tao, naniniwala kami na mas mabuti na payagan ang mga pagpipilian kaysa sa magpresenta ng isa bilang tamang sagot."
          }
        ]
      },
      {
        "title": "Bawat Wika ay May Iba't Ibang Mga Patakaran sa Sistema ng Pagsulat",
        "blocks": [
          {
            "p": "Kapag isinasalin sa isang wika na hindi gumagamit ng mga Romanong letra, ito ay dapat isulat sa script ng wika na iyon. Para sa Hapon, ito ay magiging kana at kanji; para sa Ruso, Mongolian, at Kazakh, ito ay magiging Cyrillic; para sa Arabe, ito ay magiging Arabic script; at para sa Thai, Khmer, at Hindi, ito ay magiging kani-kanilang mga script. Kung isusulat mo ito sa mga Romanong letra at tatawagin itong \"pangalan ng Hapon,\" hindi ito magagamit sa bansang iyon."
          },
          {
            "p": "Samakatuwid, mayroon kaming hiwalay na mga patakaran para sa bawat sistema ng pagsulat ng wika, at ang server ay muling nagsusuri upang matiyak na ang mga resulta ay nasa sistemang iyon ng pagsulat. Ang mga pagkakamali tulad ng pag-alis ng mga apelyido o paghahalo ng Hangul ay na-filter dito."
          }
        ]
      },
      {
        "title": "Gumagamit Kami ng mga Pangalan na Talagang Ginagamit",
        "blocks": [
          {
            "p": "Upang maiwasan ang paglikha ng mga pangalan na mukhang kapani-paniwala ngunit hindi umiiral sa bansang iyon, ang aming mga opsyon ay batay sa mga umiiral na pangalan. Ang mga pangalan ay ginagamit sa mga dokumento at pagpapakilala, kaya kung ang isang lokal na tao ay nag-iisip na \"walang ganitong pangalan,\" hindi ito magagamit."
          }
        ]
      },
      {
        "title": "Hinihiwalay Namin ang Pagpili at Paglalarawan",
        "blocks": [
          {
            "p": "Hawak namin ang gawain ng pagtukoy ng limang kandidato na hiwalay mula sa gawain ng paglalarawan ng bawat kandidato nang detalyado. Dahil ang paglalarawan ay kumukuha ng maraming oras, inihihiwalay namin ang bahaging iyon upang likhain ito nang sabay-sabay."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bakit Ito Binago?",
        "blocks": [
          {
            "p": "Sa simula, nilikha namin ang limang pananaw nang hiwalay. Mas mabilis ito, ngunit **ang bilang ng mga kandidato ay nag-iiba-iba bawat oras.** Habang ang bawat tao ay pumipili ng mga kandidato, nagkaroon ng mga overlap o pagkakaiba, at kung ang isa ay nabigo, ang kandidatong iyon ay ganap na mawawala, na nagreresulta sa dalawa o tatlo lamang sa halip na lima."
          },
          {
            "p": "Ngayon, dahil tinutukoy namin ang set ng kandidato at pamamahagi ng pananaw nang sabay, **ang bilang ay nakatakda.** Kahit na ang isang paglalarawan ay nabigo, ang mga kandidato ay mananatili at ipapakita na may maikling impormasyon. Naniniwala kami na mas mabuti na palaging magkaroon ng parehong bilang, kahit na ito ay tumatagal ng kaunting mas mahaba."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Ano ang batayan para sa pagtutugma ng mga kahulugan ng hanja?",
    "summary": "Una, ang mga tunog ay nakatakda, at tanging ang mga hanja na maaaring irehistro sa tunog na iyon ang nakalap, at ang kahulugan ay tinitingnan bilang isang kumbinasyon sa halip na isang solong karakter.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Una, ayusin ang mga tunog",
        "blocks": [
          {
            "p": "Kung napagpasyahan mo na ang \"지은\", kung gayon **지** at **은** ay hindi nagbabago. Hindi namin binabago ang tunog ng pangalan upang tumugma sa hanja. Ang isang pangalan ay isang bagay na tinatawag sa isang buhay, at naniniwala kami na ang pagkakasunod-sunod ay ang tunog ay nakatakda muna, kasunod ang hanja."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Ito ang pagkakasunod-sunod kung paano pinapaliit ang mga kandidato. Hindi ito tungkol sa pagpili ng hanja muna at pagtutugma ng mga tunog, kundi ang mga tunog ang nauuna, at tanging ang mga karakter na itinalaga upang basahin gamit ang tunog na iyon ang nagiging mga kandidato."
          }
        ]
      },
      {
        "title": "Kumuha lamang ng hanja na maaaring irehistro sa tunog na iyon",
        "blocks": [
          {
            "p": "Ang opisyal na talahanayan ng pangalan-hanja ay may itinalagang pagbasa para sa bawat karakter kapag ginamit sa mga pangalan. Tanging ang mga karakter na itinalaga upang basahin bilang **지** at **은** ang nagiging mga kandidato. Hindi mahalaga kung gaano kaganda ang kahulugan, kung ang pagbasa ay hindi tumutugma, hindi ito maaaring maging hanja para sa pangalang iyon."
          },
          {
            "p": "Ang saklaw para sa pagpili ng mga kandidato ay ang {characterTotal} na mga karakter mula sa talahanayan ng Korte Suprema. Ang mga karakter na wala sa talahanayang ito ay hindi ipinapakita sa lahat — kahit na ipakita, hindi sila maaaring irehistro."
          },
          {
            "p": "Ang bilang ng mga karakter sa talahanayan na inilathala ng Korte Suprema ay bahagyang higit pa sa ito. Ang talahanayan ay naglalaman din ng **mga karakter na walang pamantayang kodigo**, na hindi maipapakita nang maayos sa mga screen at dokumento, kaya ang mga karakter na iyon ay hindi isinama sa mga kandidato. Dapat mong suriin sa kaukulang awtoridad kung maaari kang magrehistro gamit ang mga karakter na iyon."
          }
        ]
      },
      {
        "title": "Ang kahulugan ay tinitingnan bilang isang kumbinasyon, hindi isang solong karakter",
        "blocks": [
          {
            "p": "Ang kahulugan ng bawat indibidwal na karakter na mabuti at ang kahulugan na nababasa kapag pinagsama ang dalawang karakter ay magkaiba. Ang mga pangalan ay binabasa bilang mga kumbinasyon, kaya tinitingnan natin ang mga kumbinasyon nang magkasama. Kung mayroon kang mga tiyak na kahulugan na nais isama o iwasan, isasaalang-alang ang mga iyon."
          },
          {
            "p": "Kung gumagamit ka ng isang karakter ng henerasyon, ang karakter na iyon ay nakatakda, at ang mga kumbinasyon ay hinahanap mula sa natitirang mga posisyon. Ang apelyido (성) ay hindi limitado ng opisyal na talahanayan ng hanja, kaya ito ay itinuturing na hiwalay."
          }
        ]
      },
      {
        "title": "Ipinapakita namin ang mga kaugalian ng pag-iwas nang hindi inaalis ang mga ito",
        "blocks": [
          {
            "p": "Kung ang isang karakter na tradisyonal na itinuturing na dapat iwasan ay kasama sa mga kandidato, hindi namin ito aalisin kundi ipapakita ang dahilan kasama nito. Ito ay isang usaping kaugalian, hindi batas, at maaari mong piliing ganap na alisin ito mula sa input screen. Para sa karagdagang detalye, tingnan ang [Traditionally Avoided Hanja](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Ipinapaalam din namin sa iyo ang mga dahilan para sa pag-aalis",
        "blocks": [
          {
            "p": "Ipinapakita namin kung bakit ang ilang mga karakter ay inalis mula sa mga kandidato. Kung ipapakita lamang namin kung ano ang napili, hindi mo malalaman \"bakit ito?\" Kung walang magagamit na mga karakter na natitira para sa pantig na iyon, aalisin namin ang pag-aalis para sa pantig na iyon at ipapakita ang mga kandidato."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Paano basahin ang mga resulta",
        "blocks": [
          {
            "p": "Ang mga kandidato ay **mga pananaw, hindi mga ranggo**. Ang una ay hindi nangangahulugang ito ang pinakamahusay na pangalan; sila ay pinili mula sa iba't ibang pananaw. Ang mga iyon na nagbibigay-priyoridad sa kumbinasyon ng mga kahulugan, ang mga pumipili ng mga hindi karaniwang karakter, at ang mga nagbibigay-diin sa neutralidad ay ipinapakita nang magkatabi. Ang sagot ay nag-iiba depende sa kung aling pananaw ang iyong pinahahalagahan."
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
        "title": "Mga Dahilan para sa hindi pag-aassign ng kabuuang kapalaran o numerikal na mga marka",
        "blocks": [
          {
            "p": "May mga pamamaraan na nag-aassign ng kabuuang kapalaran o numerikal na mga marka sa mga pangalan upang i-rate ang mga ito. Ang Naming-Link ay hindi nagbibigay ng mga numerong iyon. Ang mga dahilan ay apat."
          },
          {
            "p": "**Una, hindi lamang isang pamantayan ang umiiral.** Ang mga pamamaraan para sa pagkalkula ng kapalaran ay nag-iiba ayon sa paaralan, at ang parehong pangalan ay maaaring ma-rate nang positibo sa isang pamantayan at negatibo sa isa pa. Wala kaming batayan upang magpasya kung aling isa ang tama. Hindi tapat na ipakita ang isa bilang kung ito ang sagot."
          },
          {
            "p": "**Pangalawa, ang mga kalkulasyong iyon ay umaasa sa bilang ng mga stroke.** Gayunpaman, ang data ng Korte Suprema ay hindi kasama ang bilang ng mga stroke. Bukod pa rito, ang bilang ng mga stroke ay maaaring mag-iba depende sa kung ito ay binibilang bilang regular o pinadaling mga karakter at kung paano binibilang ang mga radikal. Dahil ang mga batayang numero ay hindi tiyak na naitatag, ang mga marka na nakabatay sa mga ito ay hindi maaaring maging tiyak."
          },
          {
            "p": "**Pangatlo, ang mga numero ay tila mas matatag kaysa sa realidad.** Kapag sinabing \"87 puntos\", ito ay parang isang nasusukat na halaga sa halip na isang karaniwang interpretasyon. Ang mga nagngangalang iyon ay maaaring makaramdam ng presyon mula sa numerong iyon, na itinataboy ang tunay na mahalaga (Maganda bang tawagin? Ang kahulugan ba ay akma? Naglalaman ba ito ng mga nais na hangarin?)."
          },
          {
            "p": "**Pang-apat, walang paraan upang beripikahin.** Ang ugnayan sa pagitan ng isang pangalan at ng buhay ng isang tao ay hindi ma-verify. Ang pag-convert ng isang bagay na hindi maaaring sabihing tama o mali sa isang marka ay nagreresulta sa isang numerong hindi ma-confirm, kahit na hindi ito maaaring mali."
          },
          {
            "p": "Gumagamit lamang kami ng mga bagay na maaaring **patunayan.** Ang opisyal na talahanayan ng hanja ng Korte Suprema, ang mga itinalagang pagbasa para sa bawat karakter, at ang mga kahulugan na nakalista sa talahanayan. Sa halip, nagbibigay kami ng mga dahilan kung bakit napili ang kandidatong ito at kung bakit ang ilang mga karakter ay inalis, na nagpapakita ng **mga dahilan sa halip na mga marka**."
          }
        ]
      },
      {
        "title": "Hindi kami gumagamit ng bilang ng mga stroke",
        "blocks": [
          {
            "p": "Ang opisyal na data ng hanja na ibinigay ng Korte Suprema ay hindi kasama ang bilang ng mga stroke. Sa mga {characterTotal} karakter na natanggap namin, **wala ni isang karakter ang may bilang ng mga stroke.**"
          },
          {
            "p": "Upang gumamit ng bilang ng mga stroke, kailangan naming makakuha ng mga numero mula sa ibang lugar, ngunit kung hindi namin maipaliwanag kung saan nagmula ang mga numerong iyon at kung anong mga pamantayan ang ginamit upang bilangin ang mga ito, nangangahulugan ito ng paghusga sa mga pangalan batay sa mga hindi napatunayan na numero. Napagpasyahan naming huwag suriin ang mga pangalan batay sa mga halaga na hindi maaaring patunayan."
          }
        ]
      },
      {
        "title": "Ginagamit lamang namin ang mga five elements bilang isang sanggunian",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Ang mga ugnayan sa pagitan ng mga five elements. Ang paglipat sa kahabaan ng bilog ay kumakatawan sa mutual generation (相生), habang ang pagtalon ng isa at pagpindot pababa ay kumakatawan sa mutual restraint (相剋). Ginagamit namin ang ugnayang ito bilang isang karagdagang axis lamang para sa paghahambing ng mga kandidato."
          },
          {
            "p": "Kung ikaw ay pumasok ng iyong buwan ng kapanganakan, ginagamit namin ang isang pinadaling sanggunian ng mga five elements batay sa buwan na iyon bilang isang karagdagang axis para sa paghahambing ng mga kandidato. Gayunpaman, ito ay hindi isang tiyak na pagsusuri ng saju, at **hindi kami nag-aangkin na ang mga pangalan ay nagtatakda ng kapalaran o katangian ng isang tao.**"
          },
          {
            "p": "Sa huling pagpili, ang aming pinahahalagahan ay mga tunog, kumbinasyon ng mga kahulugan, ang mga halaga na nais ipahayag ng pamilya, at kung maaari itong talagang mairehistro. Kung hindi mo ipinasok ang iyong buwan ng kapanganakan, ganap naming aalisin ang sanggunian ng mga five elements mula sa pagsusuri — hindi kami gumagawa ng mga arbitraryong palagay tungkol sa hindi alam na impormasyon."
          },
          {
            "p": "Kung nais mo ng isang tiyak na pagsusuri batay sa saju, sakop namin iyon sa isang hiwalay na detalyadong ulat. Ang dahilan kung bakit hindi namin pinahahalagahan ang mga five elements sa libreng pagtutugma ng hanja ay dahil ayaw naming ipakita ang mga hatol batay sa mga five elements na nakuha mula sa isang hindi kumpletong petsa at oras ng kapanganakan na parang ito ay tiyak."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Bayad na Mga Produkto",
    "title": "Ano ang kasama sa mga bayad na produkto?",
    "summary": "Nililinaw namin kung ano ang nakikita nang libre at kung anong karagdagang mga tampok ang kasama sa pagbabayad para sa bawat produkto. Ang mga presyo ay kinukuha mula sa aktwal na mga setting ng produkto.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Ano ang nakikita nang libre?",
        "blocks": [
          {
            "p": "Ang paglikha ng isang pangalan at pagtingin sa mga resulta ay **libre**. Walang kinakailangang pagpaparehistro ng pagiging miyembro. Makikita mo ang mga tumutugmang kahulugan ng hanja, paglikha ng mga pangalan sa Koreano, pandaigdigang pag-convert ng pangalan, at notasyon ng pagbigkas sa Hangul, kasama ang mga inirerekomendang resulta at kanilang mga paliwanag sa screen."
          },
          {
            "p": "Ang mga bayad na produkto ay hindi **nagre-resell ng mga bagay na naipakita na sa screen.** Binubuksan nila ang higit pang mga kandidato, nagdaragdag ng higit pang mga paliwanag, o lumilikha ng isang format na maaaring maiimbak o maipadala."
          }
        ]
      },
      {
        "title": "Buong pagsisiwalat ng lahat ng mga kandidato — {priceUnlock}",
        "blocks": [
          {
            "p": "Ang mga inirerekomendang resulta ay naka-istruktura upang buksan ang mga kandidato isa-isa. Kapag tumitingin ng mga ad, isa-isa itong nagbubukas, habang ang produktong ito ay **nagbubukas ng lahat ng natitirang mga kandidato nang sabay-sabay**."
          },
          {
            "p": "Kung hindi ka nagmamadali, hindi mo kailangang bumili. Ang **mga resulta mula sa pagbubukas sa pamamagitan ng mga ad at ang mga mula sa pagbabayad ay ganap na pareho** — ito ay isang usaping paghihintay, at ang pagbabayad ay hindi nagdadala ng mas mahusay na mga kandidato."
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
              "**Maximum 5 hanja candidates detailed** — {priceFiveDetail}. Maaari mong palawakin ang mga paliwanag para sa hanggang limang kandidato sa screen. Walang PDF.",
              "**Maximum 10 hanja candidates extended detailed PDF** — {priceTenDetail}. Ang bilang ng mga kandidato ay tumataas sa sampu, at isang dokumentong PDF ay kasama.",
              "**Maximum 10 hanja candidates saju at ang five elements comprehensive report** — {priceTenSaju}. Bilang karagdagan sa nabanggit, kasama nito ang saju chart na nakuha mula sa petsa ng kapanganakan at ang mga puwersa ng five elements, na sinisiyasat kung bakit ang isang partikular na hanja ay angkop sa pangalan na iyon mula sa pananaw ng mga five elements."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hanja mismo ay pampublikong impormasyon",
        "blocks": [
          {
            "p": "Ang mga magagamit na hanja at ang kanilang mga kahulugan ay nagmula sa opisyal na talahanayan ng hanja na itinakda ng Korte Suprema ng Korea, at lahat ay pampublikong magagamit sa mga dokumento ng gabay ng serbisyo. Ang ibinibenta ng mga bayad na produkto ay hindi impormasyon ng hanja kundi **ang pagkilos ng pagpili at pagpapaliwanag nito ayon sa pangalan**."
          }
        ]
      },
      {
        "title": "PDF para sa Pandaigdigang Mga Gumagamit",
        "blocks": [
          {
            "p": "Mga dokumento na magagamit para sa pag-convert ng mga banyagang pangalan sa mga pangalan sa Koreano o pagsusulat ng mga pangalan sa Hangul. Ang mga presyo ay sumusunod sa mga halagang ipinapakita sa screen ng pagbabayad."
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
        "title": "Timbre ng Pangalan",
        "blocks": [
          {
            "p": "Inuukit namin ang pangalan na nilikha sa screen sa isang pisikal na timbre at ipapadala ito sa iyo. Nag-iiba-iba ang mga presyo ayon sa modelo — bilog na selyo {priceStampRound}, parisukat na selyo {priceStampSquare}, ebony na selyo {priceStampEbony}. Available din ang internasyonal na pagpapadala."
          },
          {
            "p": "**Mula dito, kasama ang pagpapadala ang mga produkto.** Hindi tulad ng mga nakaraang item, tumatagal ng oras ang produksyon at pagpapadala, at kinakailangan ang isang address para sa pagtanggap. Ang impormasyon sa pagpapadala ay ginagamit lamang para sa pagproseso ng order at legal na pag-iingat, at kapag natapos na ang pagproseso, ito ay sisirain pagkatapos ng takdang panahon na itinakda sa patakaran."
          }
        ]
      },
      {
        "title": "Mga Dapat Malaman Bago Bumili",
        "blocks": [
          {
            "p": "**Agad na ibinibigay ang mga digital na produkto pagkatapos ng bayad.** Maaari mong kanselahin at makatanggap ng buong refund anumang oras bago magsimula ang pag-download, ngunit kapag natapos na ang pag-download, ang pag-atras dahil sa simpleng pagbabago ng isip ay pinaghihigpitan (Article 17, Paragraph 2 ng Electronic Commerce Act). Ang kundisyong ito ay hiwalay na napagkasunduan sa screen ng pagbabayad."
          },
          {
            "p": "**Ang mga reklamo tungkol sa nilalaman ng mga resulta ay hindi dahilan para sa refund.** Gayunpaman, kung ang dokumento ay hindi nalikha, ang file ay hindi mabubuksan, o ang halaga ng bayad ay naiiba mula sa order, ito ay iproseso bilang muling pag-isyu o buong refund."
          },
          {
            "p": "Ang detalyadong mga kondisyon ay nakasaad sa [Refund Policy](/refund-policy) at [Pricing Guide](/pricing). Ang tekstong ito ay nagsisilbing gabay sa kung ano ang kasama, at ang mga legal na kondisyon ay binibigyang-priyoridad sa dalawang dokumentong iyon."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Sistema",
    "title": "Ano ang opisyal na name-hanja?",
    "summary": "Ang hanja na maaaring gamitin para sa mga pangalan ng mga bata ay itinatag ng Korte Suprema sa isang talahanayan. Ito ay nagbubuod kung ano ang talahanayan at kung bakit ito itinakda.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Ano ang opisyal na name-hanja?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} na karakter",
                "label": "Opisyal na name-hanja"
              },
              {
                "value": "{syllableCount} na pantig",
                "label": "Mga pantig ng Hangul na kasama"
              },
              {
                "value": "{effectiveDate}",
                "label": "Petsa ng sanggunian ng talahanayan"
              }
            ]
          },
          {
            "p": "Hindi mo maaaring gamitin ang anumang karakter para sa pangalan ng bata. **Ang hanja na maaaring gamitin para sa pagpaparehistro ng kapanganakan ay itinatag ng Korte Suprema sa isang talahanayan, at tanging ang mga karakter sa talahanayang iyon ang maaaring mairehistro bilang hanja para sa mga pangalan.** Ito ay tinatawag na opisyal na name-hanja."
          }
        ]
      },
      {
        "title": "Bakit ito itinakda?",
        "blocks": [
          {
            "p": "Mayroong sampu-sampung libong hanja. Kabilang dito, ang ilan ay may hindi kanais-nais na kahulugan, ang ilan ay hindi na ginagamit at walang kilalang pagbasa, at ang ilan ay hindi maaaring ipakita sa mga computer. Kung ang mga ganitong karakter ay kasama sa isang pangalan, ang taong sa huli ay magdadala ng pasanin ay ang taong gagamit ng pangalang iyon sa buong buhay. Ang mga pangalan ay maaaring masira o mabasa nang iba sa iba't ibang lugar tulad ng rehistrasyon ng residente, mga pasaporte, mga bangko, at mga paaralan, na nangangailangan sa indibidwal na ipaliwanag ang kanilang sariling pangalan."
          },
          {
            "p": "Samakatuwid, isang paraan ang pinili upang itakda ang saklaw ng hanja na maaaring gamitin sa mga pangalan. Sa halip na maging isang nakapipigil na regulasyon, ito ay higit na isang mekanismo upang matiyak na ang mga pangalan ay maaaring magamit nang walang mga isyu sa buong buhay ng isang tao."
          }
        ]
      },
      {
        "title": "Ano ang batayan para sa mga depinisyon?",
        "blocks": [
          {
            "p": "Itinatag ng Korte Suprema ang opisyal na talahanayan ng name-hanja, na ina-update kung kinakailangan, at ang mga karakter ay idinadagdag."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga materyales na ginamit sa screen na ito",
        "blocks": [
          {
            "p": "{publisher} opisyal na data ng name-hanja · Mula noong {effectiveDate}"
          },
          {
            "p": "{characterTotal} na karakter ang sumasaklaw sa {syllableCount} na pantig ng Hangul. Ang hash value ng orihinal na file ay nakaimbak din, kaya kung magbago ang talahanayan, maaari itong suriin kung kailan at ano ang nagbago."
          }
        ]
      },
      {
        "title": "Ang bilang ng mga karakter na inihayag ng Korte Suprema ay naiiba sa ipinapakita namin",
        "blocks": [
          {
            "p": "**Ang opisyal na name-hanja na inihayag ng Korte Suprema ay {announcedTotal} na karakter, habang ang ipinapakita namin bilang mga kandidato ay {characterTotal} na karakter.** Walang dahilan upang itago ang pagkakaibang ito, kaya't sinasabi namin ito nang tahasan."
          },
          {
            "p": "Kung susuriin mo ang data ng pagtatanong ng Korte Suprema, naglalaman ito ng {listedTotal} na karakter. Kabilang dito, **{excludedNoStandardCode} na karakter** ay **mga karakter na walang lugar sa pandaigdigang karaniwang code ng karakter (Unicode).** Ang sistema ng Korte Suprema ay itinuturing ang mga ganitong karakter na may mga numero na gumagana lamang sa loob ng sarili nitong sistema, at ipinapakita ang mga ito bilang **mga imahe** sa halip na mga karakter sa screen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang pagdaragdag ng higit pang mga font ay hindi malulutas ang isyu",
        "blocks": [
          {
            "p": "Upang lumitaw ang isang karakter sa screen, kinakailangan itong magkaroon ng **numero na napagkasunduan ng mundo**, at ang font ay naglalaman ng imahe na tumutugma sa numerong iyon. Ang mga karakter na walang numero ay hindi maaaring isama sa anumang font. Kahit gaano karaming mga font ang idagdag namin, ang mga karakter na ito ay lilitaw bilang mga walang laman na parisukat."
          }
        ]
      },
      {
        "title": "Samakatuwid, inalis na sila mula sa mga kandidato",
        "blocks": [
          {
            "p": "**Ang pagpuno sa listahan ng mga karakter na hindi maipapakita ay hindi nakakatulong.** Karamihan sa mga kahulugan ng mga karakter na ito ay walang laman din sa aming data, na hindi umaayon sa paraan ng serbisyo sa pagpili ng mga pangalan batay sa mga kahulugan."
          },
          {
            "p": "**Ang mas mahalagang dahilan ay nakasalalay sa taong gagamit ng pangalan.** Ang isang pangalan ay isang halaga na ilalagay sa iba't ibang lugar sa buong buhay ng isang tao. Ang mga karakter na walang mga code ng karakter ay maaaring hindi maipasok o maimprenta sa mga sistema para sa mga bangko, paaralan, ospital, o mga pasaporte, kahit na matapos ang pagpaparehistro ng kapanganakan. Samakatuwid, hindi namin mairerekomenda ang mga ganitong karakter."
          },
          {
            "p": "Gayunpaman, **hindi namin tinutukoy kung ang mga karakter na iyon ay maaaring gamitin o hindi.** Dahil sila ay mga karakter sa talahanayan ng Korte Suprema, ang pagpaparehistro mismo ay maaaring posible. Kung talagang nais mong gamitin ang karakter na iyon, mangyaring suriin nang direkta sa elektronikong sistema ng pagpaparehistro ng ugnayang pampamilya ng Korte Suprema, at **magtanong sa kaukulang awtoridad tungkol sa aktwal na kakayahang magamit.**"
          }
        ]
      },
      {
        "title": "Kung nais mong gumamit ng hanja na wala sa talahanayan",
        "blocks": [
          {
            "p": "Hindi mo sila maaaring gamitin. Upang maging tiyak, ang mga karakter na iyon ay hindi mairehistro bilang hanja para sa pangalan, at ang pangalan ay mairehistro lamang sa Hangul. Kung nais mong gumamit ng hanja kasabay, kailangan mong pumili mula sa talahanayan."
          },
          {
            "p": "Samakatuwid, hindi namin ipinapakita ang mga karakter na wala sa talahanayan bilang mga kandidato. Lahat ng hanja na nakikita sa screen ay mga karakter na talagang maaaring gamitin para sa pagpaparehistro ng kapanganakan. Ang kumpletong listahan ay makikita sa [Kumpletong Listahan ng Opisyal na Name-Hanja](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Listahan",
    "title": "Kumpletong Listahan ng Opisyal na Name Hanja",
    "summary": "Inorganisa namin ang hanja na maaaring gamitin para sa pagpaparehistro ng kapanganakan ayon sa unang katinig. Makikita mo ang itinalagang pagbasa at kahulugan para sa bawat karakter kapag ginamit sa mga pangalan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Maghanap ayon sa Unang Katinig",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Kabilang dito ang lahat ng {characterTotal} na karakter mula sa opisyal na talahanayan ng name-hanja ng Korte Suprema. Ang bawat karakter ay may kasamang **pagbasa kapag ginamit sa mga pangalan** at ang kahulugan nito. Ang mga karakter na hindi kasama sa talahanayan ay hindi maaaring mairehistro bilang name-hanja, kaya dapat kang pumili mula sa mga karakter na nakalista dito."
          },
          {
            "p": "Ang dalawang numero sa button sa ibaba ay kumakatawan sa **bilang ng mga karakter na may unang katinig na iyon** at ang **bilang ng mga pantig na sakop.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kung ang karakter na hinahanap mo ay wala sa listahan",
        "blocks": [
          {
            "p": "Ang bilang ng mga karakter na inihayag ng Korte Suprema ay {announcedTotal}, ngunit ang listahang ito ay naglalaman ng {characterTotal} na karakter. **Ang pagkakaiba ng {excludedNoStandardCode} na mga karakter ay ang mga hindi maipapakita sa anumang font dahil sa kakulangan ng lugar sa pandaigdigang code ng karakter.** Ipinapakita ng sistema ng Korte Suprema ang mga karakter na iyon bilang mga imahe."
          },
          {
            "p": "Detalyado naming inilarawan ang mga dahilan para dito at kung bakit hindi namin inirerekomenda ang mga karakter na iyon sa [Ano ang Opisyal na Name Hanja?](/guide/hanja-basics). Dapat mong suriin sa kaukulang awtoridad ang aktwal na kakayahang magamit ng mga karakter na iyon."
          }
        ]
      },
      {
        "title": "Mga Paunang Katinig na may Kaunting Karakter",
        "slot": "maliit",
        "blocks": [
          {
            "p": "Ang mga paunang katinig sa ibaba ay may napaka-kaunting opisyal na hanja para sa pangalan, kaya't ipinakita namin ang mga ito dito nang walang hiwalay na pahina."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Paano Basahin ang Listahang Ito",
        "blocks": [
          {
            "p": "Para sa **伽 · 가 · 절**, kapag ginagamit ang \"伽\" sa isang pangalan, ito ay binabasa bilang **가** at nangangahulugang \"templo\". Kahit para sa parehong hanja, ang pagbasa kapag ginamit sa mga pangalan ay nakatakda ng talahanayan, at hindi ito maaaring gamitin sa ibang paraan."
          }
        ]
      }
    ]
  }
} satisfies Record<DocKey, DocPage>;

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
  "effective": "Magkakabisa {date}",
  "pager": {
    "label": "Mga pahina ng abiso",
    "newer": "← Mas Bago",
    "older": "Mas Matanda →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Bukas na ang mga pahina ng Makipag-ugnayan at Tungkol",
      "body": [
        "Ang mga tanong, refund, mga kahilingan sa privacy at mga ulat ng error ay mayroon na ngayong isang lugar na pupuntahan. Ang pahina ng pakikipag-ugnayan sa footer ay naglilista ng aming email at mga detalye ng kumpanya.",
        "Kung ano ang batayan ng aming mga sagot, at kung ano ang sadyang hindi namin ginagawa, ay nakasulat sa pahina ng tungkol."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Ang mga ulat ng PDF ay inilabas sa Ingles para sa Arabic at Khmer",
      "body": [
        "Kung ginagamit mo ang serbisyo sa Arabic o Khmer, ang PDF na binibili mo ay ginawa sa Ingles. Ang tool na nag-aayos ng aming mga dokumento ay hindi pa kayang mag-set ng mga talata sa dalawang script na iyon.",
        "Ang screen ay nananatili sa iyong wika, at ang iyong pangalan ay naka-print sa iyong sariling script sa loob ng dokumento.",
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
