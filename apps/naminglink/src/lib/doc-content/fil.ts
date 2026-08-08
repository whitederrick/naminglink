import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Tungkol",
    "title": "Tungkol sa Naming-Link",
    "summary": "Tinutulungan ka naming pumili at maunawaan ang mga pangalan sa Koreano. Narito ang aming batayan sa mga resulta, at kung ano ang hindi namin sinasadyang gawin.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "Ano ang ginagawa namin",
        "blocks": [
          {
            "p": "Tinutulungan ka ng Naming-Link na **pumili at maunawaan ang mga pangalan sa Koreano** — ang hanja sa likod ng pangalan ng isang bata, isang pangalang Koreano na maaaring gamitin sa ibang bansa, isang pagsulat sa Hangul ng iyong sariling pangalan, at mga alaala tulad ng isang selyo o isang nakalimbag na ulat."
          },
          {
            "p": "Ang pagtingin sa iyong mga resulta ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay hindi kailanman nagbebenta muli ng kung ano ang ipinakita na sa screen: nagbubukas ang mga ito ng higit pang mga kandidato, nagdaragdag ng nakasulat na pagsusuri, o ginagawang isang bagay na maaari mong itago ang resulta."
          }
        ]
      },
      {
        "title": "Ano ang batayan ng aming mga sagot",
        "blocks": [
          {
            "p": "Ang mga hanja ay nagmumula sa **opisyal na talahanayan ng pangalan-hanja ng Korte Suprema ng Korea.** Ang bawat karakter ay may nakatakdang pagbasa para sa paggamit sa mga pangalan, at ang mga karakter na wala sa talahanayan ay hindi maaaring irehistro. Hindi kami nagdaragdag sa listahang iyon o pumipili ng mga paborito."
          },
          {
            "p": "Ang mga figure ng saju at mga elemento ng limang ay kinakalkula mula sa **Korean lunisolar almanac**, na ang oras ng kapanganakan ay itinutuwid sa tunay na oras ng araw para sa lugar ng kapanganakan. Ang pagbasa ay isang tradisyunal na sanggunian, hindi isang prediksyon."
          },
          {
            "p": "Ang mga nakasulat na paliwanag ay ginawa ng AI. Upang maiwasan itong **mag-imbento ng mga bagay**, ang modelo ay binibigyan lamang ng iyong input at aming sariling reference data, at sinabihan na manatili sa loob nito. Ang mga gabay ay nagpapaliwanag nito nang detalyado."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin ginagawa",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagtataya ng kapalaran.** Walang anumang dito ang nangangako ng swerte, kayamanan o proteksyon.",
              "**Hindi namin iniimbak ang iyong pangalan.** Ang mga libreng resulta ay hindi kailanman isinusulat sa aming mga server, at ang mga bayad na dokumento ay naihahatid nang walang pag-iingat ng kopya ng file.",
              "**Ang pagbabayad ay hindi bumibili ng mas mahusay na sagot.** Ang pag-unlock gamit ang isang ad at pag-unlock gamit ang isang bayad ay nagbibigay ng eksaktong parehong nilalaman."
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
            "p": "Ang mga detalye ng kumpanya at kung paano kami maabot ay nasa [pahina ng pakikipag-ugnayan](/contact), kasama ang mga refund, mga kahilingan sa privacy at mga ulat ng error."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Mga Pagbasa",
    "title": "Mga nakatakdang pagbasa — isang pagbigkas bawat karakter",
    "summary": "Ang opisyal na talahanayan ay hindi lamang naglilista ng mga karakter. Itinatakda din nito kung paano binabasa ang bawat isa kapag ginamit sa isang pangalan.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Isang nakatakdang pagbasa para sa bawat karakter",
        "blocks": [
          {
            "p": "Ang talahanayan ng pangalan-hanja ay hindi lamang nagtatakda kung aling mga karakter ang maaaring gamitin. **Itinatakda din nito kung paano binabasa ang bawat karakter kapag lumilitaw ito sa isang pangalan.** Ang nakatakdang pagbasa na iyon ang batayan ng pagpaparehistro."
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
            "p": "Ito ang dahilan kung bakit itinatakda ng Naming-Link ang tunog bago maghanap ng hanja. Kung ang pangalan ay \"지은\", ang kahulugan ay maaari lamang piliin mula sa mga karakter na itinalaga ang pagbasa na **지** at mga karakter na itinalaga ang pagbasa na **은**."
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
            "p": "Iyan ang dahilan kung bakit itinuturing ng Naming-Link ang hanja ng apelyido nang iba. Tinutulungan ka lamang naming makahanap ng apelyido, at nag-iiwan kami ng isang patlang para sa direktang pagpasok ng isa, para sa mga tao na ang karakter ay nasa labas ng talahanayan. Ang mga apelyido na may dalawang silaba tulad ng Namgung at Seonwoo ay ipinasok sa parehong paraan."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano namin isinusulat ang iyong pangalan sa Hangul",
    "summary": "Paano namin pinipili ang mga tunog kapag sumusulat ng isang banyagang pangalan sa Hangul, at kung bakit hindi kami nagtatakip ng hanja.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Dala namin ang tunog, hindi ang kahulugan",
        "blocks": [
          {
            "p": "Ang serbisyong ito ay sumusulat ng **iyong pangalan** sa Hangul. Hindi ito nagbibigay sa iyo ng isang pangalang Koreano. Michael becomes 마이클 — ang parehong pangalan, isinulat upang mabasa at masabi ito ng mga Koreano. Hindi namin ito pinapalitan ng isang pangalang Koreano na nagkataong may katulad na kahulugan."
          },
          {
            "p": "Kung ang isang pangalang Koreano ang nais mo, **iyon ay isang ibang serbisyo.** Ang isa ay nagpapanatili ng iyong pangalan at binabago lamang ang script; ang isa ay nagmumungkahi ng isang bagong pangalan."
          }
        ]
      },
      {
        "title": "Mga tunog na wala ang Koreano",
        "blocks": [
          {
            "p": "Bawat wika ay may mga tunog na wala ang Koreano — f, v, z, th, at mga pagkakaiba sa patinig na hindi ginagawa ng Koreano. Para sa mga iyon, isinusulat namin kung ano ang **talagang sinasabi ng isang tagapagsalita ng Koreano** kapag binabasa nila ang iyong pangalan nang malakas, sa halip na isalin ang orihinal na ponetika simbolo sa simbolo. Ang layunin ay ang pagsulat na gagamitin, hindi ang pinaka-tumpak na tapat."
          },
          {
            "p": "Ang parehong pagsulat ay maaaring mag-iba depende sa pinagmulan ng pangalan, kaya humihingi kami ng iyong wika at bansa at nagtatrabaho mula sa pagbasa na iyon."
          }
        ]
      },
      {
        "title": "Maraming pagsulat, magkasama",
        "blocks": [
          {
            "p": "Walang isang tamang sagot. Ang pagsulat na pinakamalapit sa orihinal na tunog, ang pinaka-karaniwang ginagamit sa Korea, at ang pinakamadaling isulat ay madalas na tatlong magkaibang bagay. Kaya ipinapakita namin ang mga ito nang magkasama at sinasabi kung ano ang naghihiwalay sa mga ito."
          },
          {
            "p": "Kung wala sa mga ito ang tila tama, maaari kang magdagdag ng isang pahiwatig tungkol sa tunog na nais mo at subukan itong muli — halimbawa, na ang isang partikular na silaba ay dapat isulat nang iba."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Walang hanja dito",
        "blocks": [
          {
            "p": "Hindi kami nagtatakip ng hanja sa isang transliteration. Ang hanja ay may dalang kahulugan, at ang daloy na ito ay tungkol sa tunog. Ang pagtutugma ng mga karakter sa tunog lamang ay maaaring magdala sa iyo ng isang kahulugan na hindi mo kailanman hiniling."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano kami bumuo ng isang pangalang Koreano",
    "summary": "Pumipili kami mula sa mga apelyido na umiiral, tinataya kung gaano kadaling bigkasin at isulat ang pangalan, at tinatanong kung ano ang layunin ng pangalan.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Nagsisimula kami sa **pangalang pamilya**",
        "blocks": [
          {
            "p": "Sa Korea, ang **pangalang pamilya** ay nauuna, at hindi tulad ng mga ibinigay na pangalan, ito ay hindi malayang naimbento — ito ay minamana. Kaya't nagmumungkahi lamang kami ng mga apelyido na talagang mayroon ang mga tao sa Korea. Ang aming default na pool ay ang **20 pinaka-karaniwang apelyido**, na sama-samang sumasaklaw sa humigit-kumulang 80% ng populasyon."
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
            "p": "Ito ay isang pangalan na talagang tatawagin ka ng mga tao sa Korea, kaya't ang unang bagay na tinitingnan namin ay kung ang isang Korean ay makakarinig nito nang isang beses at maisusulat ito. Ang isang pangalan na kailangang baybayin sa bawat pagkakataon ay isang pasanin na dala mo, hindi kami."
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
        "title": "Ito ay hindi isang transliterasyon",
        "blocks": [
          {
            "p": "Dito ay nagmumungkahi kami ng **bagong Koreanong pangalan**. Kung nais mong isulat ang iyong umiiral na pangalan sa Hangul — Michael bilang 마이클 — tingnan ang [gabay sa baybay ng Hangul](/guide/how-hangul-transliteration)."
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
              "**Mga pagbabayad at refund** — kung ang isang dokumento ay hindi kailanman ginawa, o ang halagang siningil ay naiiba mula sa iyong order, kami ay nagbabalik ng buong halaga. Tingnan ang [patakaran sa refund](/refund-policy).",
              "**Privacy** — mga kahilingan upang ma-access, ituwid o tanggalin ang iyong data. Tingnan ang [patakaran sa privacy](/privacy).",
              "**Mga pagwawasto** — kung ang isang hanja na kahulugan, pagbasa o kalkulasyon ay mukhang mali, sabihin sa amin. Ang pagbanggit kung aling screen at kung ano ang iyong ipinasok ay nakakatulong nang malaki.",
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
  "guide/avoid": {
    "eyebrow": "Mga Kaugalian",
    "title": "Mga Character na Tradisyunal na Ipinagbabawal",
    "summary": "Hindi ito ipinagbabawal ng batas ngunit isang kaugalian. Nagsulat kami tungkol sa kung ano ang mga ipinagbabawal at bakit, at kung paano namin ito hinaharap.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Mga Character na Legal na Katanggap-tanggap",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} mga character",
                "label": "Naka-compile na mga Ipinagbabawal na Character"
              },
              {
                "value": "{avoidCommonlyUsed} mga character",
                "label": "Kabilang dito, mga character na patuloy na ginagamit"
              }
            ]
          },
          {
            "p": "May mga character na kasama sa listahan ng mga character para sa mga personal na pangalan at **legal na katanggap-tanggap**, ngunit itinuturing na hindi angkop para sa mga pangalan."
          },
          {
            "p": "Ang pangunahing pag-iisip ay na **\"ang labis na kahulugan ay talagang hindi kanais-nais.\"** Kasama dito ang mga character na itinuturing na masyadong mahalaga (珍·寶), mga character na tiningnan bilang may masyadong malakas na presensya (王·帝), at ang mga itinuturing na masyadong dakila para sa isang tao na maisakatawan, tulad ng langit o mga diyos. Ito ay sumasalamin sa isang lumang pakiramdam ng pagpipigil, naniniwala na ang isang pangalan ay maaaring magpatingkad sa tao."
          },
          {
            "p": "**Gayunpaman, ang mga character na ito ay hindi hindi magagamit.** Ito ay hindi isang legal na pagbabawal kundi isang kaugalian, at ang mga kaugalian ay nag-iiba-iba ayon sa rehiyon, pamilya, at henerasyon, at maaaring magbago sa paglipas ng panahon."
          },
          {
            "p": "Sa katunayan, sa mga {avoidTotal} na karakter na aming nakolekta, {avoidCommonlyUsed} ay patuloy na ginagamit sa mga pangalan. Ang katotohanan na sila ay kilalang iwasan ngunit malawak na ginagamit ay nagpapahiwatig na ang kaugalian na ito ay hindi ganap."
          }
        ]
      },
      {
        "title": "Anong mga Kategorya ang Naroroon?",
        "blocks": [
          {
            "p": "Ang mga kasalukuyang nakolektang karakter ay nahahati sa pitong kategorya."
          },
          {
            "ul": [
              "**Kayamanan at mga Bagay** — Mga karakter na tuwirang tumutukoy sa kayamanan o mga bagay",
              "**Langit at Kalikasan** — Mga bagay tulad ng araw, buwan, at langit na itinuturing na masyadong dakila para sa isang tao na katawanin",
              "**Mga Hari at Nobilidad** — Mga karakter na nagpapahiwatig ng katayuan, tulad ng hari o emperador",
              "**Mga Banal na Nilalang** — Mga karakter na tumutukoy sa mga sagradong realm, tulad ng mga diyos o espiritu",
              "**Mga Panahon at Iba pa** — Mga karakter na nakatali sa mga tiyak na oras o estado",
              "**Mga Hayop** — Mga hayop na itinuturing na may malakas na enerhiya, tulad ng mga dragon o tigre",
              "**Sobrang Laki** — Mga karakter na tinitingnan bilang may labis na malaki o umaapaw na kahulugan"
            ]
          }
        ]
      },
      {
        "title": "Maaari Mong Idagdag o Alisin ang mga Karakter sa Iyong Sarili",
        "blocks": [
          {
            "p": "Hindi kami basta-basta nagtatanggal ng mga karakter na ito. **Nagbigay kami ng dalawang opsyon sa input screen para sa namer na pumili kung paano ito hahawakan.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga Opsyon na Magagamit sa Input Screen",
        "blocks": [
          {
            "p": "**Iwasan ang mga Karakter na Ipinagbabawal mula sa mga Kandidato** — Kung pinagana, sila ay ganap na aalisin. Kung hindi pinagana, mananatili sila sa mga resulta na may label na \"Traditionally Avoided\" at ang dahilan na nakalakip."
          },
          {
            "p": "**Iwasan Maging ang mga Karakter na Karaniwang Ginagamit** — Ito ay nag-aalis ng mga karakter na nasa listahan ng pag-iwas ngunit talagang malawak na ginagamit (圭·琳·玲·元·太·星·海, atbp.). Kung pinagana, ang mga kandidato ay makabuluhang mababawasan."
          },
          {
            "p": "Ang default ay **hindi alisin kundi ipakita lamang** sila. Kung tahimik na aalisin mula sa listahan, maaaring magmukhang sa mga nais gumamit ng karakter na iyon na parang hindi ito umiiral."
          }
        ]
      },
      {
        "title": "Tinitiyak na ang mga Opsyon ay Hindi Nawawala",
        "blocks": [
          {
            "p": "Kung walang magagamit na mga karakter para sa pantig na iyon, aalisin namin ang pagbubukod para sa pantig na iyon at ipapakita ang mga kandidato. Naniniwala kami na mas mabuti ito kaysa sa walang mga opsyon."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Ano ang Batayan para sa Global Name Conversion?",
    "summary": "Nagbibigay kami ng mga kandidato mula sa limang pananaw, pinapanatili ang mga sistema ng pagsulat ng bawat wika at gumagamit lamang ng mga umiiral na pangalan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Ang mga Kandidato ay Ibinibigay mula sa Limang Pananaw",
        "blocks": [
          {
            "p": "Hindi lamang isang paraan upang isalin ang isang pangalan sa ibang wika. Depende sa kung dapat bang panatilihin ang tunog o ang kahulugan, pumili ng natural na pangalan sa lokal na konteksto o bigyang-priyoridad ang pagkakakilanlan, ang mga sagot ay mag-iiba. Samakatuwid, sa halip na magpresenta ng isang opsyon, nagbibigay kami ng **isa mula sa bawat isa sa limang iba't ibang pananaw**."
          },
          {
            "ul": [
              "**Opsyon sa Pagpapanatili ng Tunog** — Pinapanatili ang tunog ng orihinal na pangalan hangga't maaari",
              "**Opsyon sa Pagsasalin ng Kahulugan** — Isinasalin ang kahulugan na nakapaloob sa pangalan sa pangalan ng wikang iyon",
              "**Opsyon sa Kompromiso ng Tunog at Kahulugan** — Kumukuha ng kalahati mula sa bawat isa",
              "**Opsyon sa Lokal na Awtentik** — Pumipili ng mga pangalan na talagang karaniwang ginagamit sa konteksto ng kultura na iyon",
              "**Opsyon sa Pagkakakilanlan at Branding** — Binibigyang-priyoridad ang mga pangalan na madaling tandaan at natatangi"
            ]
          },
          {
            "p": "Garantisadong limang opsyon ang ibibigay. Dahil ang mga kagustuhan ay nag-iiba mula sa tao sa tao, naniniwala kami na mas mabuti na payagan ang mga pagpipilian kaysa sa magpresenta ng isa bilang tamang sagot."
          }
        ]
      },
      {
        "title": "Bawat Wika ay May Iba't Ibang Mga Patakaran sa Sistema ng Pagsulat",
        "blocks": [
          {
            "p": "Kapag isinasalin sa isang wika na hindi gumagamit ng mga Roman na titik, ito ay dapat isulat sa script ng wika na iyon. Para sa Hapon, ito ay magiging kana at kanji; para sa Ruso, Mongolian, at Kazakh, ito ay magiging Cyrillic; para sa Arabe, ito ay magiging Arabic script; at para sa Thai, Khmer, at Hindi, ito ay magiging kani-kanilang mga script. Kung isusulat mo ito sa mga Roman na titik at tatawagin itong \"pangalan ng Hapon,\" hindi ito magagamit sa bansang iyon."
          },
          {
            "p": "Samakatuwid, mayroon kaming hiwalay na mga patakaran para sa bawat sistema ng pagsulat ng wika, at ang server ay muling nagche-check upang matiyak na ang mga resulta ay nasa sistemang iyon ng pagsulat. Ang mga pagkakamali tulad ng pag-alis ng mga apelyido o paghahalo ng Hangul ay na-filter dito."
          }
        ]
      },
      {
        "title": "Gumagamit Kami ng mga Pangalan na Talagang Ginagamit",
        "blocks": [
          {
            "p": "Upang maiwasan ang paglikha ng mga pangalan na mukhang plausible ngunit hindi umiiral sa bansang iyon, ang aming mga opsyon ay batay sa mga umiiral na pangalan. Ang mga pangalan ay ginagamit sa mga dokumento at pagpapakilala, kaya kung ang isang lokal na tao ay nag-iisip na \"walang ganitong pangalan,\" hindi ito magagamit."
          }
        ]
      },
      {
        "title": "Hinihiwalay Namin ang Pagpili at Paglalarawan",
        "blocks": [
          {
            "p": "Hinahawakan namin ang gawain ng pagtukoy ng limang kandidato nang hiwalay mula sa gawain ng paglalarawan ng bawat kandidato nang detalyado. Dahil ang paglalarawan ay kumukuha ng maraming oras, inihihiwalay namin ang bahaging iyon upang likhain ito nang sabay-sabay."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bakit Ito Binago?",
        "blocks": [
          {
            "p": "Sa simula, nilikha namin ang limang pananaw nang hiwalay. Mas mabilis ito, ngunit **ang bilang ng mga kandidato ay nag-iiba sa bawat pagkakataon.** Habang ang bawat tao ay pumipili ng mga kandidato, nagkaroon ng mga overlap o pagkakaiba, at kung ang isa ay nabigo, ang kandidato na iyon ay ganap na mawawala, na nagreresulta sa dalawa o tatlo lamang sa halip na lima."
          },
          {
            "p": "Ngayon, dahil tinutukoy namin ang set ng kandidato at pamamahagi ng pananaw nang sabay, **ang bilang ay nakatakda.** Kahit na ang isang paglalarawan ay nabigo, ang mga kandidato ay mananatili at ipapakita na may maikling impormasyon. Naniniwala kami na mas mabuti na palaging magkaroon ng parehong bilang, kahit na ito ay tumatagal ng kaunting oras."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Ano ang batayan para sa pagtutugma ng mga kahulugan ng hanja?",
    "summary": "Una, ang mga tunog ay nakatakda, at tanging ang mga hanja na maaaring irehistro gamit ang tunog na iyon ang nakolekta, at ang kahulugan ay tinitingnan bilang isang kumbinasyon sa halip na isang solong karakter.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Una, itakda ang mga tunog",
        "blocks": [
          {
            "p": "Kung napagpasyahan mo ang \"지은\", kung gayon **지** at **은** ay hindi nagbabago. Hindi namin binabago ang tunog ng pangalan upang tumugma sa hanja. Ang isang pangalan ay isang bagay na tinatawag sa buong buhay, at naniniwala kami na ang pagkakasunud-sunod ay ang tunog ay nakatakda muna, kasunod ang hanja."
          },
          {
            "figure": "hanja-match-flow",
            "caption": "Ito ang pagkakasunud-sunod kung paano pinapaliit ang mga kandidato. Hindi ito tungkol sa pagpili ng hanja muna at pagtutugma ng mga tunog, kundi ang mga tunog ang nauuna, at tanging ang mga karakter na itinalaga upang basahin gamit ang tunog na iyon ang nagiging mga kandidato."
          }
        ]
      },
      {
        "title": "Kolektahin lamang ang mga hanja na maaaring irehistro gamit ang tunog na iyon",
        "blocks": [
          {
            "p": "Ang opisyal na talahanayan ng pangalan-hanja ay may itinalagang pagbasa para sa bawat karakter kapag ginamit sa mga pangalan. Tanging ang mga karakter na itinalaga upang basahin bilang **지** at **은** ang nagiging mga kandidato. Hindi mahalaga kung gaano kaganda ang kahulugan, kung ang pagbasa ay hindi tumutugma, hindi ito maaaring maging hanja para sa pangalan na iyon."
          },
          {
            "p": "Ang saklaw para sa pagpili ng mga kandidato ay ang {characterTotal} na mga karakter mula sa talahanayan ng Korte Suprema. Ang mga karakter na wala sa talahanayang ito ay hindi ipinapakita sa lahat — kahit na ipakita, hindi sila maaaring irehistro."
          },
          {
            "p": "Ang bilang ng mga karakter sa talahanayan na inilathala ng Korte Suprema ay bahagyang higit pa sa ito. Ang talahanayan ay naglalaman din ng **mga karakter na walang pamantayang kodigo ng karakter**, na hindi maayos na maipapakita sa mga screen at dokumento, kaya ang mga karakter na iyon ay hindi isinama sa mga kandidato. Dapat mong suriin sa kaukulang awtoridad kung maaari kang magrehistro gamit ang mga karakter na iyon."
          }
        ]
      },
      {
        "title": "Ang kahulugan ay tinitingnan bilang isang kumbinasyon, hindi isang solong karakter",
        "blocks": [
          {
            "p": "Ang kahulugan ng bawat indibidwal na karakter na mabuti at ang kahulugan na nababasa kapag ang dalawang karakter ay pinagsama ay magkaiba. Ang mga pangalan ay binabasa bilang mga kumbinasyon, kaya tinitingnan natin ang mga kumbinasyon nang magkasama. Kung mayroon kang mga tiyak na kahulugan na nais isama o iwasan, isasaalang-alang ang mga iyon."
          },
          {
            "p": "Kung gumagamit ka ng isang karakter ng henerasyon, ang karakter na iyon ay nakatakda, at ang mga kumbinasyon ay hinahanap mula sa natitirang mga posisyon. Ang apelyido (성) ay hindi pinaghihigpitan ng opisyal na talahanayan ng pangalan-hanja, kaya ito ay itinuturing na hiwalay."
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
        "title": "Ipinapaalam din namin sa iyo ang mga dahilan para sa pagbubukod",
        "blocks": [
          {
            "p": "Ipinapakita namin kung bakit ang ilang mga karakter ay ibinukod mula sa mga kandidato. Kung ipapakita lamang namin kung ano ang napili, hindi mo malalaman \"bakit ito?\" Kung walang magagamit na mga karakter para sa pantig na iyon, aalisin namin ang pagbubukod para sa pantig na iyon at ipapakita ang mga kandidato."
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
    "eyebrow": "Ang Aming Mga Pamantayan",
    "title": "Ano ang Hindi Namin Ginagamit",
    "summary": "Hindi kami nagtalaga ng kabuuang kapalaran o mga numerong marka, ni hindi kami gumagamit ng bilang ng mga stroke. Ang mga five elements ay ginagamit lamang bilang isang karagdagang axis. Narito ang mga dahilan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Mga Dahilan para sa Hindi Pagtatalaga ng Kabuuang Kapalaran o mga Numerong Marka",
        "blocks": [
          {
            "p": "May mga pamamaraan na nagtatalaga ng kabuuang kapalaran o mga numerong marka sa mga pangalan upang i-grado ang mga ito. Ang Naming-Link ay hindi nagbibigay ng mga numerong iyon. Ang mga dahilan ay apat."
          },
          {
            "p": "**Una, hindi lamang isang pamantayan.** Ang mga pamamaraan para sa pagkalkula ng kapalaran ay nag-iiba ayon sa paaralan, at ang parehong pangalan ay maaaring positibong i-rate ng isang pamantayan at negatibong ng isa pa. Wala kaming batayan upang magpasya kung aling isa ang tama. Hindi tapat na ipakita ang isa na parang ito ang sagot."
          },
          {
            "p": "**Pangalawa, ang mga kalkulasyong iyon ay umaasa sa bilang ng mga stroke.** Gayunpaman, ang datos ng Korte Suprema ay hindi kasama ang bilang ng mga stroke sa lahat. Bukod dito, ang bilang ng mga stroke ay maaaring mag-iba depende sa kung sila ay binibilang bilang regular o pinadaling mga karakter at kung paano binibilang ang mga radikal. Dahil ang mga pundasyong numero ay hindi tiyak na itinatag, ang mga marka na itinayo sa itaas ng mga ito ay hindi maaaring maging tiyak."
          },
          {
            "p": "**Pangatlo, ang mga numero ay tila mas matatag kaysa sa realidad.** Kapag sinabi nitong \"87 puntos\", ito ay tila isang nasusukat na halaga sa halip na isang karaniwang interpretasyon. Ang mga pangalan ay maaaring makaramdam ng presyon mula sa numerong iyon, na itinataboy ang tunay na mahalaga (Maganda bang tawagin? Ang kahulugan ba ay akma? Naglalaman ba ito ng mga nais na hangarin?)."
          },
          {
            "p": "**Pang-apat, walang paraan upang beripikahin.** Ang ugnayan sa pagitan ng isang pangalan at ng buhay ng isang tao ay hindi maaring beripikahin. Ang pag-convert ng isang bagay na hindi maaring sabihing tama o mali sa isang marka ay nagreresulta sa isang numerong hindi maaring makumpirma, kahit na hindi ito maaring mali."
          },
          {
            "p": "Gumagamit lamang kami ng mga bagay na maaaring **patunayan.** Ang opisyal na talahanayan ng pangalan-hanja ng Korte Suprema, ang mga itinalagang pagbasa para sa bawat karakter, at ang mga kahulugan na nakalista sa talahanayan. Sa halip, nagbibigay kami ng mga dahilan kung bakit napili ang kandidato na ito at kung bakit ang ilang mga karakter ay ibinukod, na nagpapakita ng **mga dahilan sa halip na mga marka**."
          }
        ]
      },
      {
        "title": "Hindi kami gumagamit ng bilang ng mga stroke",
        "blocks": [
          {
            "p": "Ang opisyal na datos ng pangalan-hanja na ibinigay ng Korte Suprema ay hindi kasama ang bilang ng mga stroke. Sa mga {characterTotal} na karakter na natanggap namin, **wala ni isang karakter ang may bilang ng mga stroke.**"
          },
          {
            "p": "Upang gumamit ng bilang ng mga stroke, kailangan naming makakuha ng mga numero mula sa ibang lugar, ngunit kung hindi namin maipaliwanag kung saan nagmula ang mga numerong iyon at kung anong mga pamantayan ang ginamit upang bilangin ang mga ito, nangangahulugan ito ng paghusga sa mga pangalan batay sa mga hindi nakabatay na numero. Nagpasya kaming huwag suriin ang mga pangalan batay sa mga halaga na hindi maaring patunayan."
          }
        ]
      },
      {
        "title": "Gumagamit kami ng mga five elements lamang bilang sanggunian",
        "blocks": [
          {
            "figure": "five-elements",
            "caption": "Ang mga ugnayan sa pagitan ng mga five elements. Ang paglipat sa paligid ng bilog ay kumakatawan sa mutual generation (相生), habang ang pagtalon ng isa at pagpindot pababa ay kumakatawan sa mutual restraint (相剋). Ginagamit namin ang ugnayang ito bilang isang karagdagang axis lamang para sa paghahambing ng mga kandidato."
          },
          {
            "p": "Kung ikaw ay pumasok ng iyong buwan ng kapanganakan, gumagamit kami ng isang pinadaling sanggunian ng mga five elements batay sa buwan na iyon bilang isang karagdagang axis para sa paghahambing ng mga kandidato. Gayunpaman, ito ay hindi isang tumpak na pagsusuri ng saju, at **hindi namin sinasabi na ang mga pangalan ay nagtatakda ng kapalaran o katangian ng isang tao.**"
          },
          {
            "p": "Sa huling pagpili, ang aming pinahahalagahan ay mga tunog, kumbinasyon ng mga kahulugan, ang mga halaga na nais ipahayag ng pamilya, at kung maaari itong talagang irehistro. Kung hindi mo ipinasok ang iyong buwan ng kapanganakan, ganap naming ibinubukod ang sanggunian ng mga five elements mula sa pagsusuri — hindi kami gumagawa ng mga arbitraryong palagay tungkol sa hindi alam na impormasyon."
          },
          {
            "p": "Kung nais mo ng isang tumpak na pagsusuri batay sa saju, tinatalakay namin iyon sa isang hiwalay na detalyadong ulat. Ang dahilan kung bakit hindi namin pinahahalagahan ang mga five elements sa libreng pagtutugma ng hanja ay dahil ayaw naming ipakita ang mga paghuhusga batay sa mga five elements na nakuha mula sa hindi kumpletong petsa at oras ng kapanganakan na parang ito ay tiyak."
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
  "intro": "Ang mga pagbabago sa iyong mga tuntunin ng paggamit — mga presyo, patakaran — ay nai-post dito bago sila magkabisa. Ang mga panloob na pagpapabuti ay hindi nakalista: ang lumalabas dito ay ang kailangan mong malaman.",
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
        "Ang mga tanong, refund, mga kahilingan sa privacy at mga ulat ng error ay mayroon na ngayong isang lugar na mapupuntahan. Ang pahina ng contact sa footer ay naglalaman ng aming email at mga detalye ng kumpanya.",
        "Ano ang batayan ng aming mga sagot, at kung ano ang tahasang hindi namin ginagawa, ay nakasulat sa pahina ng about."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Ang mga PDF na ulat ay inilabas sa Ingles para sa Arabic at Khmer",
      "body": [
        "Kung gumagamit ka ng serbisyo sa Arabic o Khmer, ang PDF na binibili mo ay ginawa sa Ingles. Ang tool na nag-aayos ng aming mga dokumento ay hindi pa kayang mag-set ng mga talata sa mga script na iyon.",
        "Ang screen ay nananatili sa iyong wika, at ang iyong pangalan ay naka-print sa iyong sariling script sa loob ng dokumento.",
        "Ang parehong tala ay lilitaw bago ang pagbabayad. Kapag sinusuportahan ng tool ang mga script na ito, ipapaalam namin dito."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Hindi pa bukas ang mga pagbabayad",
      "body": [
        "Ang paggawa ng pangalan at pagbabasa ng resulta ay libre ngayon, at walang kinakailangang account.",
        "Ang mga bayad na item ay hindi pa ibinebenta. Ang mga halagang ipinakita sa pahina ng pagpepresyo ay ang mga ilalapat kapag nagsimula na ang mga benta."
      ]
    }
  }
} satisfies NoticeCopy;
