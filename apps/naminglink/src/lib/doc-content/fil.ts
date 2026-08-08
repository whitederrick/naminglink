import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Tungkol",
    "title": "Tungkol sa Naming-Link",
    "summary": "Tinutulungan ka naming pumili at maunawaan ang mga pangalan sa Korea. Narito ang aming batayan sa mga resulta, at kung ano ang hindi namin sinasadyang gawin.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "Ano ang ginagawa namin",
        "blocks": [
          {
            "p": "Tinutulungan ka ng Naming-Link na **pumili at maunawaan ang mga pangalan sa Korea** — ang hanja sa likod ng pangalan ng isang bata, isang pangalang Koreano na gagamitin sa ibang bansa, isang pagsulat sa Hangul ng iyong sariling pangalan, at mga alaala tulad ng isang selyo o isang nakalimbag na ulat."
          },
          {
            "p": "Ang pagtingin sa iyong mga resulta ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay hindi kailanman muling ibinebenta ang ipinakita na sa screen: nagbubukas sila ng higit pang mga kandidato, nagdadagdag ng nakasulat na pagsusuri, o ginagawang isang bagay na maaari mong itago ang resulta."
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
            "p": "Ang mga saju at mga pigura ng limang elemento ay kinakalkula mula sa **Korean lunisolar almanac**, na ang oras ng kapanganakan ay itinutuwid sa tunay na oras ng araw para sa lugar ng kapanganakan. Ang pagbasa ay isang tradisyonal na sanggunian, hindi isang hula."
          },
          {
            "p": "Ang mga nakasulat na paliwanag ay ginawa ng AI. Upang maiwasan itong **mag-imbento ng mga bagay**, ang modelo ay binibigyan lamang ng iyong input at aming sariling mga sangguniang data, at sinabihan na manatili sa loob nito. Ang mga gabay ay nagpapaliwanag nito nang detalyado."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin ginagawa",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagtataya ng kapalaran.** Walang sinuman dito ang nangangako ng swerte, kayamanan o proteksyon.",
              "**Hindi namin iniimbak ang iyong pangalan.** Ang mga libreng resulta ay hindi kailanman nakasulat sa aming mga server, at ang mga bayad na dokumento ay naihahatid nang walang kopya ng file.",
              "**Ang pagbabayad ay hindi bumibili ng mas magandang sagot.** Ang pag-unlock gamit ang isang ad at pag-unlock gamit ang isang bayad ay nagbibigay ng eksaktong parehong nilalaman."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Ang serbisyo ay available sa 23 wika. Ang mga bayad na PDF ay inilalabas sa Ingles para sa Arabic at Khmer — ang PDF renderer ay hindi sumusuporta sa mga script na iyon — at sinasabi namin ito sa screen bago ka magbayad."
          }
        ]
      },
      {
        "title": "Makipag-ugnayan",
        "blocks": [
          {
            "p": "Ang mga detalye ng kumpanya at kung paano kami maabot ay nasa [pahina ng contact](/contact), kasama ang mga refund, mga kahilingan sa privacy at mga ulat ng error."
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
            "p": "Karamihan sa mga hanja ay may ilang posibleng pagbasa. Gayunpaman, ang isang pangalan ay nakasulat sa mga dokumento at binibigkas nang malakas, kaya kailangan nito ng eksaktong isa. Samakatuwid, itinatakda ng talahanayan ang bawat karakter sa kanyang pagbasa para sa paggamit sa mga pangalan, at walang ibang pagbasa ang maaaring irehistro."
          }
        ]
      },
      {
        "title": "Kaya ang tunog ang nauuna",
        "blocks": [
          {
            "p": "Ito ang dahilan kung bakit itinatakda ng Naming-Link ang tunog bago tumingin para sa hanja. Kung ang pangalan ay \"지은\", ang kahulugan ay maaari lamang piliin mula sa mga karakter na itinalaga ang pagbasa na **지** at mga karakter na itinalaga ang pagbasa na **은**."
          },
          {
            "p": "Anuman ang kabutihan ng isang kahulugan, ang isang karakter na ang pagbasa ay hindi tumutugma ay hindi maaaring gamitin para sa pangalang iyon. Hindi rin namin binabago ang tunog ng isang pangalan upang umangkop sa isang karakter — ang isang pangalan ay binibigkas sa buong buhay, at ang tunog ay naayos muna, na sinusundan ng hanja."
          }
        ]
      },
      {
        "title": "Ang mga apelyido ay nasa labas ng talahanayang ito",
        "blocks": [
          {
            "p": "Ito ay madalas na hindi nauunawaan. **Ang talahanayan ay namamahala sa ibinigay na pangalan, hindi ang apelyido.** Ang isang apelyido ay sumusunod sa kung ano ang nasa rehistro ng pamilya, kaya ang ilang tao ay gumagamit ng mga karakter na wala sa talahanayan ng pangalan-hanja."
          },
          {
            "p": "Iyon ang dahilan kung bakit ang Naming-Link ay ginagamot ang hanja ng apelyido nang iba. Tinutulungan ka lamang naming makahanap ng apelyido, at iniiwan namin ang isang patlang para sa direktang pagpasok ng isa, para sa mga tao na ang karakter ay nasa labas ng talahanayan. Ang mga apelyido na may dalawang silaba tulad ng Namgung at Seonwoo ay ipinasok sa parehong paraan."
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
            "p": "Isinusulat ng serbisyong ito ang **iyong pangalan** sa Hangul. Hindi ito nagbibigay sa iyo ng isang pangalang Koreano. Michael ay nagiging 마이클 — ang parehong pangalan, na nakasulat upang mabasa at masabi ito ng mga Koreano. Hindi namin ito pinapalitan ng isang pangalang Koreano na nagkataong may katulad na kahulugan."
          },
          {
            "p": "Kung isang pangalang Koreano ang gusto mo, **iyon ay ibang serbisyo.** Ang isa ay nagpapanatili ng iyong pangalan at binabago lamang ang script; ang isa ay nagmumungkahi ng bagong pangalan."
          }
        ]
      },
      {
        "title": "Mga tunog na wala sa Koreano",
        "blocks": [
          {
            "p": "Bawat wika ay may mga tunog na wala ang Koreano — f, v, z, th, at mga pagkakaiba sa patinig na hindi ginagawa ng Koreano. Para sa mga iyon, isinusulat namin kung ano ang **talagang sinasabi ng isang tagapagsalita ng Koreano** kapag binabasa nila ang iyong pangalan nang malakas, sa halip na isalin ang orihinal na ponetika simbolo sa simbolo. Ang layunin ay ang pagsulat na gagamitin, hindi ang pinaka teknikal na tapat."
          },
          {
            "p": "Ang parehong pagsulat ay maaaring mag-iba depende sa pinagmulan ng pangalan, kaya't humihingi kami ng iyong wika at bansa at nagtatrabaho mula sa pagbasa na iyon."
          }
        ]
      },
      {
        "title": "Maraming pagsulat, magkasama",
        "blocks": [
          {
            "p": "Walang isang tamang sagot. Ang pagsulat na pinakamalapit sa orihinal na tunog, ang pinaka-karaniwang ginagamit sa Korea, at ang pinakamadaling isulat ay kadalasang tatlong magkaibang bagay. Kaya't ipinapakita namin ang mga ito nang magkasama at sinasabi kung ano ang naghihiwalay sa mga ito."
          },
          {
            "p": "Kung wala sa mga ito ang tila tama, maaari kang magdagdag ng isang pahiwatig tungkol sa tunog na gusto mo at subukan itong muli — halimbawa, na ang isang partikular na silaba ay dapat isulat nang iba."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Walang hanja dito",
        "blocks": [
          {
            "p": "Hindi kami naglalakip ng hanja sa isang transliteration. Ang hanja ay nagdadala ng kahulugan, at ang daloy na ito ay tungkol sa tunog. Ang pagtutugma ng mga karakter sa tunog lamang ay maaaring magdala sa iyo ng isang kahulugan na hindi mo kailanman hiniling."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano kami bumubuo ng isang pangalang Koreano",
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
            "p": "Kung ang iyong sariling apelyido ay nagkataong tumutugma sa isang tunay na Koreano sa tunog — Wang na may 왕, Ye na may 예 — ilalagay namin iyon sa unahan. Ang pagpapanatili ng isang thread pabalik sa iyong orihinal na pangalan ay mas mahalaga kaysa sa isang apelyido na pinili nang sapalaran."
          },
          {
            "p": "Maaari mong piliin ang isang apelyido para sa iyong sarili o hayaan kaming magrekomenda ng isa. Sa alinmang paraan, ito ay **isang apelyido na umiiral.**"
          }
        ]
      },
      {
        "title": "Madaling bigkasin, madaling isulat",
        "blocks": [
          {
            "p": "Ito ay isang pangalan na talagang tatawagin ka ng mga tao sa Korea, kaya't ang unang bagay na tinitingnan namin ay kung ang isang Koreano ay maaaring marinig ito nang isang beses at isulat ito. Ang isang pangalan na kailangang isulat nang bawat oras ay isang pasanin na dala mo, hindi kami."
          },
          {
            "p": "Mahalaga rin ang kahulugan. Kadalasang nagdadala ng isang kahulugan ang mga ibinigay na pangalan sa Korea, kaya't sinasabi namin sa iyo kung ano ang binabasa ng pangalan at kung bakit namin ito pinili — hindi lamang ang pangalan mismo."
          }
        ]
      },
      {
        "title": "Tinutukoy namin kung para saan ang pangalan",
        "blocks": [
          {
            "p": "Ang isang pangalan para sa mga dokumento ng unibersidad ay hindi katulad ng isang pangalan na tatawagin ng mga kaibigan sa isang silid, o isang handle na gagamitin mo online. Tinutukoy namin kung paano mo balak itong gamitin at isinasaalang-alang iyon."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ito ay hindi isang transliteration",
        "blocks": [
          {
            "p": "Dito ay nagmumungkahi kami ng **bagong pangalang Koreano.** Kung nais mong isulat ang iyong umiiral na pangalan sa Hangul — Michael bilang 마이클 — tingnan ang [gabay sa pagsulat sa Hangul](/guide/how-hangul-transliteration)."
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
    "summary": "Paano kami maabot para sa mga tanong, refund, mga kahilingan sa privacy at mga ulat ng error, kasama ang aming mga detalye ng kumpanya.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "I-email kami",
        "blocks": [
          {
            "p": "Sumulat sa **{email}**. Tumugon kami sa loob ng dalawang araw ng negosyo. Para sa anumang bagay tungkol sa isang order — pagbabayad, refund, isang file na hindi mo natanggap — mangyaring isama ang iyong **numero ng order o ang email na ginamit mo sa pagbabayad.**"
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
              "**Mga Pagwawasto** — kung ang isang kahulugan ng hanja, pagbasa o kalkulasyon ay mukhang mali, sabihin sa amin. Ang pagbanggit kung aling screen at kung ano ang iyong ipinasok ay nakakatulong nang malaki.",
              "**Anumang iba pa** — ang mga pakikipagsosyo at press ay pumunta sa parehong address."
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
            "p": "Hindi mo kailangang isama ang isang pangalan o petsa ng kapanganakan sa iyong mensahe. Ang mga libreng resulta ay hindi kailanman nakaimbak sa aming mga server, kaya't hindi namin mahanap ang mga ito muli — sapat na ang isang numero ng order."
          }
        ]
      }
    ]
  },
  "guide/avoid": {
    "eyebrow": "Mga Kaugalian",
    "title": "Mga Karakter na Tradisyunal na Iniiwasan",
    "summary": "Hindi ito ipinagbabawal ng batas ngunit isang kaugalian. Nagsulat kami tungkol sa kung ano ang iniiwasan at bakit, at kung paano namin ito hinahawakan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Mga Karakter na Legal na Katanggap-tanggap",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} mga karakter",
                "label": "Naka-compile na mga Iniiwasang Karakter"
              },
              {
                "value": "{avoidCommonlyUsed} mga karakter",
                "label": "Kabilang dito, mga karakter na patuloy na ginagamit"
              }
            ]
          },
          {
            "p": "May mga karakter na kasama sa listahan ng mga karakter para sa mga personal na pangalan at **legal na katanggap-tanggap**, ngunit itinuturing na hindi angkop para sa mga pangalan."
          },
          {
            "p": "Ang nakatagong pag-iisip ay **\"ang labis na kahulugan ay talagang hindi kanais-nais.\"** Kasama rito ang mga karakter na itinuturing na masyadong mahalaga (珍·寶), mga karakter na tinitingnan bilang may masyadong malakas na presensya (王·帝), at ang mga itinuturing na masyadong dakila para sa isang tao na maisakatawan, tulad ng langit o mga diyos. Ito ay nagpapakita ng isang lumang pakiramdam ng pagpipigil, naniniwala na ang isang pangalan ay maaaring magpatingkad sa tao."
          },
          {
            "p": "**Gayunpaman, ang mga karakter na ito ay hindi hindi magagamit.** Hindi ito isang legal na pagbabawal kundi isang kaugalian, at ang mga kaugalian ay nag-iiba-iba ayon sa rehiyon, pamilya, at henerasyon, at maaaring magbago sa paglipas ng panahon."
          },
          {
            "p": "Sa katunayan, sa mga {avoidTotal} karakter na na-compile namin, {avoidCommonlyUsed} ay patuloy na ginagamit sa mga pangalan. Ang katotohanan na sila ay kilalang iniiwasan ngunit patuloy na ginagamit ay nagpapahiwatig na ang kaugalian na ito ay hindi ganap."
          }
        ]
      },
      {
        "title": "Anong mga Kategorya ang Naroroon?",
        "blocks": [
          {
            "p": "Ang mga kasalukuyang na-compile na karakter ay nahahati sa pitong kategorya."
          },
          {
            "ul": [
              "**Mga Kayamanan at Bagay** — Mga karakter na tuwirang tumutukoy sa kayamanan o mga item",
              "**Langit at Kalikasan** — Mga bagay tulad ng araw, buwan, at langit na itinuturing na masyadong dakila para sa isang tao na maisakatawan",
              "**Mga Hari at Nobilidad** — Mga karakter na nagpapahiwatig ng katayuan, tulad ng hari o emperador",
              "**Mga Banal na Nilalang** — Mga karakter na tumutukoy sa mga sagradong larangan, tulad ng mga diyos o espiritu",
              "**Mga Panahon at Iba pa** — Mga karakter na nakatali sa mga tiyak na oras o estado",
              "**Mga Hayop** — Mga hayop na itinuturing na may malakas na enerhiya, tulad ng mga dragon o tigre",
              "**Labisan** — Mga karakter na itinuturing na may labis na malaki o umaapaw na mga kahulugan"
            ]
          }
        ]
      },
      {
        "title": "Maaari mong Idagdag o Tanggalin ang mga Karakter sa Iyong Sarili",
        "blocks": [
          {
            "p": "Hindi kami basta-basta nagtatanggal ng mga karakter na ito. **Nagbigay kami ng dalawang opsyon sa input screen para sa namer na pumili kung paano ito hahawakan.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga Opsyon na Available sa Input Screen",
        "blocks": [
          {
            "p": "**I-exclude ang mga Iniiwasang Karakter mula sa mga Kandidato** — Kung pinagana, sila ay ganap na aalisin. Kung hindi pinagana, mananatili sila sa mga resulta na may label na \"Tradisyunal na Iniiwasan\" at ang dahilan na nakalakip."
          },
          {
            "p": "**I-exclude kahit ang mga Karakter na Karaniwang Ginagamit** — Ito ay nag-aalis ng mga karakter na nasa listahan ng pag-iwas ngunit talagang malawak na ginagamit (圭·琳·玲·元·太·星·海, atbp.). Kung pinagana, ang mga kandidato ay makabuluhang mababawasan."
          },
          {
            "p": "Ang default ay **hindi i-exclude kundi ipakita lamang** ang mga ito. Kung tahimik silang aalisin mula sa listahan, maaaring lumitaw sa mga nais gumamit ng karakter na iyon na parang hindi ito umiiral."
          }
        ]
      },
      {
        "title": "Tinitiyak na ang mga Opsyon ay Hindi Nawawala",
        "blocks": [
          {
            "p": "Kung walang magagamit na mga karakter para sa silabong iyon, aalisin namin ang exclusion para sa silabong iyon at ipapakita ang mga kandidato. Naniniwala kami na mas mabuti ito kaysa sa walang mga opsyon."
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
        "title": "Ang mga Kandidato ay Ipinagkakaloob mula sa Limang Pananaw",
        "blocks": [
          {
            "p": "Walang isang paraan upang isalin ang isang pangalan sa ibang wika. Depende sa kung dapat panatilihin ang tunog o ang kahulugan, pumili ng isang natural na pangalan sa lokal na konteksto o bigyang-priyoridad ang pagkakakilanlan, ang mga sagot ay mag-iiba. Samakatuwid, sa halip na magpresenta ng isang opsyon, nagbibigay kami ng **isa mula sa bawat isa sa limang magkaibang pananaw.**"
          },
          {
            "ul": [
              "**Opsyon sa Pagpapanatili ng Tunog** — Pinapanatili ang tunog ng orihinal na pangalan hangga't maaari",
              "**Opsyon sa Pagsasalin ng Kahulugan** — Isinasalin ang kahulugan na nakapaloob sa pangalan sa pangalan ng wikang iyon",
              "**Opsyon sa Kompromiso ng Tunog at Kahulugan** — Kumukuha ng kalahati mula sa bawat isa",
              "**Opsyon sa Lokal na Awtentiko** — Pumipili ng mga pangalan na talagang karaniwang ginagamit sa konteksto ng kultura na iyon",
              "**Opsyon sa Pagkakakilanlan at Branding** — Binibigyang-priyoridad ang mga pangalan na madaling tandaan at natatangi"
            ]
          },
          {
            "p": "Garantisadong limang opsyon ang ibibigay. Dahil ang mga kagustuhan ay nag-iiba-iba mula sa tao hanggang tao, naniniwala kami na mas mabuti ang payagan ang mga pagpipilian kaysa sa magpresenta ng isa bilang tamang sagot."
          }
        ]
      },
      {
        "title": "Bawat Wika ay May Iba't Ibang Mga Patakaran sa Sistema ng Pagsulat",
        "blocks": [
          {
            "p": "Kapag isinasalin sa isang wika na hindi gumagamit ng mga Romanong titik, ito ay dapat isulat sa script ng wika na iyon. Para sa Hapon, ito ay magiging kana at kanji; para sa Ruso, Mongolian, at Kazakh, ito ay magiging Cyrillic; para sa Arabic, ito ay magiging Arabic script; at para sa Thai, Khmer, at Hindi, ito ay magiging kani-kanilang mga script. Kung isusulat mo ito sa mga Romanong titik at tatawagin itong \"pangalan ng Hapon,\" hindi ito magagamit sa bansang iyon."
          },
          {
            "p": "Samakatuwid, mayroon kaming hiwalay na mga patakaran para sa bawat sistema ng pagsulat ng wika, at ang server ay muling sinusuri upang matiyak na ang mga resulta ay nasa sistemang iyon ng pagsulat. Ang mga pagkakamali tulad ng pag-alis ng mga apelyido o paghalo ng Hangul ay na-filter dito."
          }
        ]
      },
      {
        "title": "Gumagamit kami ng mga Pangalan na Talagang Ginagamit",
        "blocks": [
          {
            "p": "Upang maiwasan ang paglikha ng mga pangalan na tila kapani-paniwala ngunit hindi umiiral sa bansang iyon, ang aming mga opsyon ay batay sa mga umiiral na pangalan. Ang mga pangalan ay ginagamit sa mga dokumento at pagpapakilala, kaya kung ang isang lokal na tao ay nag-iisip na \"walang ganitong pangalan,\" hindi ito magagamit."
          }
        ]
      },
      {
        "title": "Pinaghihiwalay namin ang Pagpili at Paglalarawan",
        "blocks": [
          {
            "p": "Hawak namin ang gawain ng pagtukoy ng limang kandidato nang hiwalay mula sa gawain ng paglalarawan ng bawat kandidato nang detalyado. Dahil ang paglalarawan ay kumukuha ng maraming oras, pinaghihiwalay namin ang bahaging iyon upang likhain ito nang sabay-sabay."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bakit Ito Binago?",
        "blocks": [
          {
            "p": "Sa simula, nilikha namin ang limang pananaw nang hiwalay. Mas mabilis ito, ngunit **ang bilang ng mga kandidato ay nag-iiba-iba sa bawat pagkakataon.** Habang ang bawat tao ay pumipili ng mga kandidato, may mga overlap o hindi pagkakatugma, at kung ang isa ay nabigo, ang kandidato na iyon ay mawawala nang buo, na nagreresulta sa dalawa o tatlo lamang sa halip na lima."
          },
          {
            "p": "Ngayon, dahil tinutukoy namin ang set ng kandidato at pamamahagi ng pananaw nang sabay, **ang bilang ay nakatakda.** Kahit na ang isang paglalarawan ay nabigo, ang mga kandidato ay mananatili at ipapakita na may maikling impormasyon. Naniniwala kami na mas mabuti na palaging may parehong bilang, kahit na tumatagal ito ng kaunting mas mahaba."
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
    "title": "Walang mga anunsyo pa",
    "body": "Kapag may nagbago, lilitaw ito dito."
  },
  "effective": "Magiging epektibo {date}",
  "pager": {
    "label": "Mga pahina ng anunsyo",
    "newer": "← Mas Bago",
    "older": "Mas Matanda →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Bukas na ang mga pahina ng Contact at About",
      "body": [
        "Ang mga tanong, refund, mga kahilingan sa privacy at mga ulat ng error ay mayroon na ngayong isang lugar na pupuntahan. Ang pahina ng contact sa footer ay naglilista ng aming email at mga detalye ng kumpanya.",
        "Ano ang batayan ng aming mga sagot, at kung ano ang hindi namin sinasadyang gawin, ay nakasulat sa pahina ng about."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Ang mga PDF na ulat ay inilalabas sa Ingles para sa Arabic at Khmer",
      "body": [
        "Kung gumagamit ka ng serbisyo sa Arabic o Khmer, ang PDF na binili mo ay ginawa sa Ingles. Ang tool na nag-aayos ng aming mga dokumento ay hindi pa sumusuporta sa mga script na iyon.",
        "Ang screen ay nananatili sa iyong wika, at ang iyong pangalan ay nakalimbag sa iyong sariling script sa loob ng dokumento.",
        "Ang parehong tala ay lilitaw bago ang pagbabayad. Kapag sinusuportahan ng tool ang mga script na ito, sasabihin namin ito dito."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Hindi pa bukas ang mga pagbabayad",
      "body": [
        "Ang paglikha ng isang pangalan at pagbabasa ng resulta ay libre ngayon, at hindi kinakailangan ang account.",
        "Ang mga bayad na item ay hindi pa ibinebenta. Ang mga halagang ipinapakita sa pahina ng pagpepresyo ay ang mga ilalapat kapag nagbukas ang mga benta."
      ]
    }
  }
} satisfies NoticeCopy;
