import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Tungkol sa",
    "title": "Tungkol sa Naming-Link",
    "summary": "Tinutulungan ka naming pumili at maunawaan ang mga pangalan sa Koreano. Narito ang aming batayan para sa mga resulta, at kung ano ang hindi namin sinasadyang gawin.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "Ano ang ginagawa namin",
        "blocks": [
          {
            "p": "Tinutulungan ka ng Naming-Link na **pumili at maunawaan ang mga pangalan sa Koreano** — ang hanja sa likod ng pangalan ng isang bata, isang pangalan sa Koreano na maaaring gamitin sa ibang bansa, isang pagsulat sa Hangul ng iyong sariling pangalan, at mga alaala tulad ng isang selyo o isang nakalimbag na ulat."
          },
          {
            "p": "Ang pagtingin sa iyong mga resulta ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay hindi muling ibinebenta ang anumang ipinakita na sa screen: nagbubukas sila ng higit pang mga kandidato, nagdaragdag ng nakasulat na pagsusuri, o ginagawang isang bagay na maaari mong itago ang resulta."
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
            "p": "Ang saju at mga pigura ng limang elemento ay kinakalkula mula sa **Koreano lunisolar almanac**, na ang oras ng kapanganakan ay itinatama sa tunay na oras ng araw para sa lugar ng kapanganakan. Ang pagbasa ay isang tradisyonal na sanggunian, hindi isang prediksyon."
          },
          {
            "p": "Ang mga nakasulat na paliwanag ay ginawa ng AI. Upang maiwasan itong **mag-imbento ng mga bagay**, ang modelo ay binibigyan lamang ng iyong input at ang aming sariling reference data, at sinabihan na manatili dito. Ang mga gabay ay nagpapaliwanag nito nang detalyado."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin ginagawa",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagsasabi ng kapalaran.** Walang anumang dito ang nangangako ng swerte, kayamanan o proteksyon.",
              "**Hindi namin iniimbak ang iyong pangalan.** Ang mga libreng resulta ay hindi kailanman isinusulat sa aming mga server, at ang mga bayad na dokumento ay ibinibigay nang walang pag-iingat ng kopya ng file.",
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
            "p": "Ang mga detalye ng kumpanya at kung paano kami maabot ay nasa [pahina ng pakikipag-ugnayan](/contact), kasama ang mga refund, mga kahilingan sa privacy at mga ulat ng error."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Mga Pagbasa",
    "title": "Mga nakatakdang pagbasa — isang pagbigkas bawat karakter",
    "summary": "Ang opisyal na talahanayan ay hindi lamang naglilista ng mga karakter. Itinatakda din nito kung paano binibigkas ang bawat isa kapag ginamit sa isang pangalan.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Isang nakatakdang pagbasa para sa bawat karakter",
        "blocks": [
          {
            "p": "Ang talahanayan ng pangalan-hanja ay hindi lamang nagtatakda kung aling mga karakter ang maaaring gamitin. **Itinatakda din nito kung paano binibigkas ang bawat karakter kapag lumilitaw ito sa isang pangalan.** Ang nakatakdang pagbasa ang batayan ng pagpaparehistro."
          },
          {
            "p": "Karamihan sa mga hanja ay may ilang posibleng pagbasa. Gayunpaman, ang isang pangalan ay isinusulat sa mga dokumento at binibigkas nang malakas, kaya kailangan nito ng eksaktong isa. Samakatuwid, itinatakda ng talahanayan ang bawat karakter ng kanyang pagbasa para sa paggamit sa mga pangalan, at walang ibang pagbasa ang maaaring irehistro."
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
            "p": "Ito ay madalas na hindi nauunawaan. **Ang talahanayan ay namamahala sa ibinigay na pangalan, hindi sa apelyido.** Ang isang apelyido ay sumusunod sa kung ano ang nasa rehistro ng pamilya, kaya may ilang tao na gumagamit ng mga karakter na wala sa talahanayan ng pangalan-hanja."
          },
          {
            "p": "Iyon ang dahilan kung bakit itinuturing ng Naming-Link ang hanja ng apelyido nang iba. Tinutulungan ka lamang naming makahanap ng apelyido, at nag-iiwan kami ng isang larangan para sa direktang pagpasok ng isa, para sa mga tao na ang karakter ay nasa labas ng talahanayan. Ang mga apelyido na may dalawang silaba tulad ng Namgung at Seonwoo ay ipinasok sa parehong paraan."
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
            "p": "Ang serbisyong ito ay sumusulat ng **iyong pangalan** sa Hangul. Hindi ito nagbibigay sa iyo ng isang pangalan sa Koreano. Michael ay nagiging 마이클 — ang parehong pangalan, isinulat upang mabasa at masabi ito ng mga Koreano. Hindi namin ito pinapalitan ng isang pangalan sa Koreano na kebang nagkataong may katulad na kahulugan."
          },
          {
            "p": "Kung ang isang pangalan sa Koreano ang nais mo, **iyon ay ibang serbisyo.** Ang isa ay nagpapanatili ng iyong pangalan at binabago lamang ang script; ang isa ay nagmumungkahi ng bagong pangalan."
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
            "p": "Ang parehong pagsulat ay maaaring magkaiba depende sa pinagmulan ng pangalan, kaya humihingi kami ng iyong wika at bansa at nagtatrabaho mula sa pagbasa na iyon."
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
            "p": "Kung wala sa mga ito ang tila tama, maaari kang magdagdag ng isang pahiwatig tungkol sa tunog na nais mo at subukan muli — halimbawa, na ang isang partikular na silaba ay dapat isulat nang iba."
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
    "title": "Paano kami bumubuo ng isang pangalan sa Koreano",
    "summary": "Pumipili kami mula sa mga apelyido na umiiral, tinutimbang kung gaano kadaling bigkasin at isulat ang pangalan, at nagtatanong kung para saan ang pangalan.",
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
            "p": "Ito ay isang pangalan na talagang tatawagin ka ng mga tao sa Korea, kaya't ang unang bagay na tinitingnan namin ay kung ang isang Korean ay makakarinig nito nang isang beses at maisusulat ito. Ang isang pangalan na kailangang ispeleng mabuti sa tuwing ay isang pasanin na dala mo, hindi namin."
          },
          {
            "p": "Mahalaga rin ang kahulugan. Karaniwang may dalang kahulugan ang mga ibinigay na pangalan sa Korea, kaya't sinasabi namin sa iyo kung paano ito binabasa at kung bakit namin ito pinili — hindi lamang ang pangalan mismo."
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
            "p": "Dito ay nagmumungkahi kami ng **bagong Koreanong pangalan**. Kung nais mong isulat ang iyong umiiral na pangalan sa Hangul — Michael bilang 마이클 — tingnan ang [gabay sa pagsulat ng Hangul](/guide/how-hangul-transliteration)."
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
              "**Mga pagbabayad at refund** — kung ang isang dokumento ay hindi kailanman ginawa, o ang halagang siningil ay naiiba mula sa iyong order, ibabalik namin ang buong halaga. Tingnan ang [patakaran sa refund](/refund-policy).",
              "**Privacy** — mga kahilingan upang ma-access, ituwid o tanggalin ang iyong data. Tingnan ang [patakaran sa privacy](/privacy).",
              "**Mga pagwawasto** — kung ang kahulugan, pagbasa o kalkulasyon ng isang hanja ay mukhang mali, ipaalam sa amin. Ang pagbanggit kung aling screen at kung ano ang iyong ipinasok ay nakakatulong nang malaki.",
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
    "summary": "Hindi ito ipinagbabawal ng batas ngunit ito ay isang kaugalian. Nagsulat kami tungkol sa kung ano ang mga ipinagbabawal at bakit, at kung paano namin ito hinaharap.",
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
            "p": "Ang pangunahing pag-iisip ay **\"ang labis na kahulugan ay talagang hindi kanais-nais.\"** Kabilang dito ang mga character na itinuturing na masyadong mahalaga (珍 kayamanan, 寶 hiyas), mga character na tiningnan na may masyadong malakas na presensya (王 hari, 帝 emperador), at ang mga itinuturing na masyadong dakila para sa isang tao na maisakatawan, tulad ng langit o mga diyos. Ito ay sumasalamin sa isang lumang pakiramdam ng pagpipigil, naniniwala na ang isang pangalan ay maaaring magpawala ng liwanag sa tao."
          },
          {
            "p": "**Gayunpaman, ang mga character na ito ay hindi hindi magagamit.** Hindi ito isang legal na pagbabawal kundi isang kaugalian, at ang mga kaugalian ay nag-iiba-iba ayon sa rehiyon, pamilya, at henerasyon, at maaaring magbago sa paglipas ng panahon."
          },
          {
            "p": "Sa katunayan, sa mga {avoidTotal} na karakter na aming nakalap, {avoidCommonlyUsed} ay patuloy na ginagamit sa mga pangalan. Ang katotohanan na sila ay kilalang iwasan ngunit patuloy na ginagamit ay nagpapahiwatig na ang kaugalian na ito ay hindi ganap."
          }
        ]
      },
      {
        "title": "Ano ang mga Kategorya?",
        "blocks": [
          {
            "p": "Ang mga kasalukuyang nakalap na karakter ay nahahati sa pitong kategorya."
          },
          {
            "ul": [
              "**Yaman at mga Bagay** — Mga karakter na direktang tumutukoy sa kayamanan o mga bagay",
              "**Langit at Kalikasan** — Mga bagay tulad ng araw, buwan, at langit na itinuturing na masyadong dakila para sa isang tao na katawanin",
              "**Mga Hari at Nobilidad** — Mga karakter na nagpapahiwatig ng katayuan, tulad ng hari o emperador",
              "**Mga Banal na Nilalang** — Mga karakter na tumutukoy sa mga sagradong realm, tulad ng mga diyos o espiritu",
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
            "p": "Hindi kami basta-basta nagtatanggal ng mga karakter na ito. **Nagbigay kami ng dalawang opsyon sa input screen para sa namer na pumili kung paano ito hahawakan.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga Opsyon na Magagamit sa Input Screen",
        "blocks": [
          {
            "p": "**I-exclude ang mga Iwasang Karakter mula sa mga Kandidato** — Kung naka-enable, sila ay ganap na aalisin. Kung naka-disable, mananatili sila sa mga resulta na may label na \"Traditionally Avoided\" at ang dahilan na nakalakip."
          },
          {
            "p": "**I-exclude kahit ang mga Karakter na Karaniwang Ginagamit** — Ito ay nag-eexclude ng mga karakter na nasa listahan ng iwasan ngunit talagang malawak na ginagamit (圭·琳·玲·元·太·星·海, atbp.). Kung naka-enable, ang mga kandidato ay magiging makabuluhang nabawasan."
          },
          {
            "p": "Ang default ay **hindi i-exclude kundi ipakita lamang** ang mga ito. Kung tahimik na aalisin mula sa listahan, maaaring lumitaw sa mga nais gumamit ng karakter na parang wala ito."
          }
        ]
      },
      {
        "title": "Tinitiyak na ang mga Opsyon ay Hindi Nawawala",
        "blocks": [
          {
            "p": "Kung walang magagamit na mga karakter para sa pantig na iyon, aalisin namin ang exclusion para sa pantig na iyon at ipapakita ang mga kandidato. Naniniwala kami na mas mabuti ito kaysa sa walang mga opsyon."
          }
        ]
      }
    ]
  },
  "guide/how-korean-to-global": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Ano ang Batayan para sa Pandaigdigang Pag-convert ng Pangalan?",
    "summary": "Nagbibigay kami ng mga kandidato mula sa limang pananaw, pinapanatili ang mga sistema ng pagsulat ng bawat wika at gumagamit lamang ng mga umiiral na pangalan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Ang mga Kandidato ay Ibinibigay mula sa Limang Pananaw",
        "blocks": [
          {
            "p": "Walang isang paraan lamang upang isalin ang isang pangalan sa ibang wika. Depende sa kung dapat bang panatilihin ang tunog o ang kahulugan, pumili ng natural na pangalan sa lokal na konteksto o bigyang-priyoridad ang pagkakakilanlan, ang mga sagot ay mag-iiba. Samakatuwid, sa halip na magpresenta ng isang opsyon, nagbibigay kami ng **isa mula sa bawat isa sa limang iba't ibang pananaw**."
          },
          {
            "ul": [
              "**Opsyon sa Pagpapanatili ng Tunog** — Pinapanatili ang tunog ng orihinal na pangalan hangga't maaari",
              "**Opsyon sa Pagsasalin ng Kahulugan** — Isinasalin ang kahulugan na nakapaloob sa pangalan sa pangalan ng wika na iyon",
              "**Opsyon sa Kompromiso ng Tunog at Kahulugan** — Kumukuha ng kalahati mula sa bawat isa",
              "**Opsyon sa Lokal na Awtentik** — Pumipili ng mga pangalan na talagang karaniwang ginagamit sa konteksto ng kultura na iyon",
              "**Opsyon sa Pagkakakilanlan at Branding** — Binibigyang-priyoridad ang mga pangalan na madaling tandaan at natatangi"
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
            "p": "Kapag isinasalin sa isang wika na hindi gumagamit ng mga Romanong titik, ito ay dapat isulat sa script ng wika na iyon. Para sa Hapon, ito ay magiging kana at kanji; para sa Ruso, Mongolian, at Kazakh, ito ay magiging Cyrillic; para sa Arabe, ito ay magiging Arabic script; at para sa Thai, Khmer, at Hindi, ito ay magiging kani-kanilang mga script. Kung isusulat mo ito sa mga Romanong titik at tatawagin itong \"pangalan ng Hapon,\" hindi ito magagamit sa bansang iyon."
          },
          {
            "p": "Samakatuwid, mayroon kaming hiwalay na mga patakaran para sa bawat sistema ng pagsulat ng wika, at ang server ay muling nagche-check upang matiyak na ang mga resulta ay nasa sistemang iyon ng pagsulat. Ang mga pagkakamali tulad ng pag-alis ng mga apelyido o paghalo ng Hangul ay na-filter dito."
          }
        ]
      },
      {
        "title": "Gumagamit Kami ng mga Pangalan na Talagang Ginagamit",
        "blocks": [
          {
            "p": "Upang maiwasan ang paglikha ng mga pangalan na mukhang kapani-paniwala ngunit hindi umiiral sa bansang iyon, ang aming mga opsyon ay batay sa mga umiiral na pangalan. Ang mga pangalan ay ginagamit sa mga dokumento at pagpapakilala, kaya kung ang isang lokal na tao ay nag-iisip na \"wala namang ganitong pangalan,\" hindi ito magagamit."
          }
        ]
      },
      {
        "title": "Hinihiwalay Namin ang Pagpili at Paglalarawan",
        "blocks": [
          {
            "p": "Hawak namin ang gawain ng pagtukoy ng limang kandidato nang hiwalay mula sa gawain ng paglalarawan ng bawat kandidato nang detalyado. Dahil ang paglalarawan ay kumukuha ng maraming oras, inihihiwalay namin ang bahaging iyon upang likhain ito nang sabay-sabay."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bakit Ito Binago?",
        "blocks": [
          {
            "p": "Sa simula, nilikha namin ang limang pananaw nang hiwalay. Mas mabilis ito, ngunit **ang bilang ng mga kandidato ay nag-iiba sa bawat pagkakataon.** Habang ang bawat tao ay pumipili ng mga kandidato, nagkaroon ng mga overlap o pagkakaiba, at kung ang isa ay nabigo, ang kandidatong iyon ay ganap na mawawala, na nagreresulta sa dalawa o tatlo lamang sa halip na lima."
          },
          {
            "p": "Ngayon, dahil tinutukoy namin ang set ng kandidato at pamamahagi ng pananaw nang sabay, **ang bilang ay nakatakda.** Kahit na ang isang paglalarawan ay nabigo, ang mga kandidato ay mananatili at ipapakita na may maikling impormasyon. Naniniwala kami na mas mabuti na palaging magkaroon ng parehong bilang, kahit na tumatagal ito ng kaunti pang oras."
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
            "p": "Kung napagpasyahan mo na ang \"지은\", kung gayon **지** at **은** ay hindi nagbabago. Hindi namin binabago ang tunog ng pangalan upang umangkop sa hanja. Ang isang pangalan ay isang bagay na tinatawag sa buong buhay, at naniniwala kami na ang pagkakasunod-sunod ay ang tunog ay nakatakda muna, kasunod ang hanja."
          },
          {
            "figure": "hanja-match-flow",
            "labels": {
              "soundStep": "① Ayusin ang tunog",
              "soundNote": "Hindi namin ito binabago upang umangkop sa isang karakter",
              "tableStep": "② I-filter ayon sa opisyal na talahanayan",
              "tableBody": "tanging mga karakter na itinalaga sa pagbasa na iyon",
              "tableNote": "mula sa lahat ng {total} na karakter sa talahanayan",
              "tableNoteNoCount": "tanging mga karakter na nasa talahanayan",
              "combineStep": "③ Basahin ang dalawa nang magkasama",
              "combineNote": "ang kahulugan ay kung paano nagbabasa ang pares, hindi bawat karakter nang mag-isa"
            },
            "caption": "Ito ang pagkakasunod-sunod kung paano pinapaliit ang mga kandidato. Hindi ito tungkol sa pagpili ng hanja muna at pagtutugma ng mga tunog, kundi ang mga tunog ang nauuna, at tanging mga karakter na itinalaga upang basahin gamit ang tunog na iyon ang nagiging mga kandidato."
          }
        ]
      },
      {
        "title": "Mangolekta lamang ng hanja na maaaring irehistro gamit ang tunog na iyon",
        "blocks": [
          {
            "p": "Ang opisyal na talahanayan ng pangalan-hanja ay may itinalagang pagbasa para sa bawat karakter kapag ginamit sa mga pangalan. Tanging mga karakter na itinalaga upang basahin bilang **지** at **은** ang nagiging mga kandidato. Kahit gaano kaganda ang kahulugan, kung hindi tumutugma ang pagbasa, hindi ito maaaring maging hanja para sa pangalang iyon."
          },
          {
            "p": "Ang saklaw para sa pagpili ng mga kandidato ay ang {characterTotal} na karakter mula sa talahanayan ng Korte Suprema. Ang mga karakter na wala sa talahanayang ito ay hindi ipinapakita sa lahat — kahit na ipakita, hindi sila maaaring irehistro."
          },
          {
            "p": "Ang bilang ng mga karakter sa talahanayang inilathala ng Korte Suprema ay bahagyang higit pa sa ito. Ang talahanayan ay naglalaman din ng **mga karakter na walang pamantayang mga code ng karakter**, na hindi maipapakita nang maayos sa mga screen at dokumento, kaya ang mga karakter na iyon ay hindi isinama sa mga kandidato. Dapat mong suriin sa kaukulang awtoridad kung maaari kang magrehistro gamit ang mga karakter na iyon."
          }
        ]
      },
      {
        "title": "Ang kahulugan ay tinitingnan bilang isang kumbinasyon, hindi isang solong karakter",
        "blocks": [
          {
            "p": "Ang kahulugan ng bawat indibidwal na karakter na maganda at ang kahulugan na nababasa kapag pinagsama ang dalawang karakter ay magkaiba. Ang mga pangalan ay binabasa bilang mga kumbinasyon, kaya tinitingnan natin ang mga kumbinasyon nang magkasama. Kung mayroon kang mga tiyak na kahulugan na nais isama o iwasan, isinasama ang mga ito sa pagsasaalang-alang."
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
            "p": "Kung ang isang karakter na tradisyonal na itinuturing na dapat iwasan ay kasama sa mga kandidato, hindi namin ito aalisin kundi ipapakita ang dahilan kasama nito. Ito ay isang usaping kaugalian, hindi batas, at maaari mong piliing ganap na alisin ito mula sa input screen. Para sa karagdagang detalye, tingnan ang [Tradisyonal na Iwasang Hanja](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Ipinapaalam din namin sa iyo ang mga dahilan para sa pag-aalis",
        "blocks": [
          {
            "p": "Ipinapakita namin kung bakit ang ilang mga karakter ay inalis mula sa mga kandidato. Kung ipapakita lamang namin ang mga napili, hindi mo malalaman \"bakit ito?\" Kung walang magagamit na mga karakter na natira para sa pantig na iyon, aalisin namin ang pag-aalis para sa pantig na iyon at ipapakita ang mga kandidato."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Paano basahin ang mga resulta",
        "blocks": [
          {
            "p": "Ang mga kandidato ay **mga pananaw, hindi mga ranggo**. Ang una ay hindi nangangahulugang ito ang pinakamahusay na pangalan; sila ay pinili mula sa iba't ibang pananaw. Ang mga iyon na nagbibigay-priyoridad sa kumbinasyon ng mga kahulugan, ang mga pumipili ng mga hindi karaniwang karakter, at ang mga nagbibigay-diin sa neutralidad ay ipinapakita nang magkatabi. Ang sagot ay nag-iiba depende sa kung aling pananaw ang pinahahalagahan mo."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Aming Mga Pamantayan",
    "title": "Ano ang Hindi Namin Ginagamit",
    "summary": "Hindi kami nag-aassign ng kabuuang kapalaran o mga numerikal na marka, ni hindi kami gumagamit ng mga bilang ng stroke. Ang mga five elements ay ginagamit lamang bilang isang karagdagang axis. Narito ang mga dahilan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Mga Dahilan para sa Hindi Pag-aassign ng Kabuuang Kapalaran o mga Numerikal na Marka",
        "blocks": [
          {
            "p": "May mga pamamaraan na nag-aassign ng kabuuang kapalaran o mga numerikal na marka sa mga pangalan upang i-grado ang mga ito. Ang Naming-Link ay hindi nagbibigay ng mga numerong iyon. Ang mga dahilan ay apat."
          },
          {
            "p": "**Una, hindi lamang isang pamantayan ang umiiral.** Ang mga pamamaraan para sa pagkalkula ng kapalaran ay nag-iiba ayon sa paaralan, at ang parehong pangalan ay maaaring ma-rate nang positibo ng isang pamantayan at negatibo ng isa pa. Wala kaming batayan upang magpasya kung aling isa ang tama. Hindi tapat na ipakita ang isa na parang ito ang sagot."
          },
          {
            "p": "**Pangalawa, ang mga kalkulasyong iyon ay umaasa sa mga bilang ng stroke.** Gayunpaman, ang data ng Korte Suprema ay hindi kasama ang mga bilang ng stroke. Bukod dito, ang mga bilang ng stroke ay maaaring mag-iba depende sa kung sila ay binibilang bilang mga regular o pinadaling karakter at kung paano binibilang ang mga radikal. Dahil ang mga batayang numero ay hindi tiyak na naitatag, ang mga marka na nakabatay sa mga ito ay hindi maaaring maging tiyak."
          },
          {
            "p": "**Pangatlo, ang mga numero ay tila mas matatag kaysa sa realidad.** Kapag sinabing \"87 puntos\", ito ay parang isang nasusukat na halaga sa halip na isang karaniwang interpretasyon. Ang mga nagngangalang iyon ay maaaring makaramdam ng presyon mula sa numerong iyon, na itinataboy ang tunay na mahalaga (Maganda bang tawagin? Tumutugma ba ang kahulugan? Naglalaman ba ito ng mga nais na hangarin?)."
          },
          {
            "p": "**Pang-apat, walang paraan upang beripikahin.** Ang ugnayan sa pagitan ng isang pangalan at ng buhay ng isang tao ay hindi ma-beripika. Ang pag-convert ng isang bagay na hindi maaaring sabihing tama o mali sa isang marka ay nagreresulta sa isang numerong hindi maikumpirma, kahit na hindi ito maaaring mali."
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
            "p": "Upang gumamit ng mga bilang ng stroke, kailangan naming makakuha ng mga numero mula sa ibang lugar, ngunit kung hindi namin maipaliwanag kung saan nagmula ang mga numerong iyon at kung anong mga pamantayan ang ginamit upang bilangin ang mga ito, nangangahulugan ito ng paghusga sa mga pangalan batay sa mga hindi napatunayan na numero. Napagpasyahan naming huwag suriin ang mga pangalan batay sa mga halaga na hindi maaaring patunayan."
          }
        ]
      },
      {
        "title": "Gumagamit kami ng mga five elements lamang bilang sanggunian",
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
              "saeng": "Henerasyon — bawat isa ay nagbibigay ng buhay sa kanyang kapitbahay",
              "geuk": "Kontrol — bawat isa ay pinipigilan ang isa na nilaktawan"
            },
            "caption": "Ang mga ugnayan sa pagitan ng mga five elements. Ang paglipat sa paligid ng bilog ay kumakatawan sa mutual generation (相生), habang ang pagtalon ng isa at pagpindot ay kumakatawan sa mutual restraint (相剋). Ginagamit namin ang ugnayang ito bilang isang karagdagang axis lamang para sa paghahambing ng mga kandidato."
          },
          {
            "p": "Kung ikaw ay pumasok ng iyong buwan ng kapanganakan, ginagamit namin ang isang pinadaling sanggunian ng mga five elements batay sa buwan na iyon bilang isang karagdagang axis para sa paghahambing ng mga kandidato. Gayunpaman, ito ay hindi isang tumpak na pagsusuri ng saju, at **hindi namin sinasabi na ang mga pangalan ay nagtatakda ng kapalaran o katangian ng isang tao.**"
          },
          {
            "p": "Sa huling pagpili, ang aming pinahahalagahan ay mga tunog, kumbinasyon ng mga kahulugan, ang mga halaga na nais ipahayag ng pamilya, at kung maaari itong talagang irehistro. Kung hindi ka pumasok ng iyong buwan ng kapanganakan, ganap naming inaalis ang sangguniang five elements mula sa pagsusuri — hindi kami gumagawa ng mga arbitraryong palagay tungkol sa hindi kilalang impormasyon."
          },
          {
            "p": "Kung nais mo ng isang tumpak na pagsusuri batay sa saju, tinatalakay namin iyon sa isang hiwalay na detalyadong ulat. Ang dahilan kung bakit hindi namin pinahahalagahan ang mga five elements sa libreng pagtutugma ng hanja ay dahil ayaw naming ipakita ang mga hatol batay sa mga five elements na nakuha mula sa hindi kumpletong petsa at oras ng kapanganakan na parang ito ay tiyak."
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
            "p": "Ang paglikha ng pangalan at pagtingin sa mga resulta ay **libre**. Walang kinakailangang pagpaparehistro ng pagiging miyembro. Makikita mo ang mga tumutugmang kahulugan ng hanja, paglikha ng mga pangalan sa Korea, pandaigdigang pagbabago ng pangalan, at notasyon ng pagbigkas sa Hangul, kasama ang mga inirerekomendang resulta at kanilang mga paliwanag sa screen."
          },
          {
            "p": "Ang mga bayad na produkto ay hindi **nagre-resell ng mga bagay na naipakita na sa screen.** Nagbubukas sila ng higit pang mga kandidato, nagdaragdag ng higit pang mga paliwanag, o lumilikha ng format na maaaring itago o ipasa."
          }
        ]
      },
      {
        "title": "Buong pagsisiwalat ng lahat ng kandidato — {priceUnlock}",
        "blocks": [
          {
            "p": "Ang mga inirerekomendang resulta ay naka-istruktura upang buksan ang mga kandidato isa-isa. Kapag tumitingin ng mga ad, isa lamang ang nagbubukas sa isang pagkakataon, habang ang produktong ito ay **nagbubukas ng lahat ng natitirang kandidato nang sabay-sabay**."
          },
          {
            "p": "Kung hindi ka nagmamadali, hindi mo kailangang bumili. Ang **mga resulta mula sa pagbubukas sa pamamagitan ng mga ad at ang mga mula sa pagbabayad ay ganap na pareho** — ito ay isang usapin lamang ng paghihintay, at ang pagbabayad ay hindi nagdadala ng mas mahusay na mga kandidato."
          }
        ]
      },
      {
        "title": "Mga Detalye ng Hanja — Tatlong Yugto",
        "blocks": [
          {
            "p": "Mayroong tatlong detalyadong produkto sa daloy ng pagpili ng hanja na ikakabit sa isang pangalan sa Hangul."
          },
          {
            "ul": [
              "**Maximum 5 hanja candidates detailed** — {priceFiveDetail}. Maaari mong palawakin ang mga paliwanag para sa hanggang limang kandidato sa screen. Walang PDF.",
              "**Maximum 10 hanja candidates extended detailed PDF** — {priceTenDetail}. Ang bilang ng mga kandidato ay tumataas sa sampu, at isang dokumentong PDF ang kasama.",
              "**Maximum 10 hanja candidates saju at ang comprehensive report ng five elements** — {priceTenSaju}. Bilang karagdagan sa nabanggit, kasama nito ang saju chart na nakuha mula sa petsa ng kapanganakan at ang mga puwersa ng five elements, sinisiyasat kung bakit ang isang partikular na hanja ay angkop sa pangalan mula sa pananaw ng five elements."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang hanja mismo ay pampublikong impormasyon",
        "blocks": [
          {
            "p": "Ang mga magagamit na hanja at ang kanilang mga kahulugan ay nagmumula sa opisyal na talahanayan ng name-hanja na itinakda ng Supreme Court of Korea, at lahat ay pampublikong magagamit sa mga dokumento ng gabay ng serbisyo. Ang ibinibenta ng mga bayad na produkto ay hindi impormasyon ng hanja kundi **ang akto ng pagpili at pagpapaliwanag nito ayon sa pangalan**."
          }
        ]
      },
      {
        "title": "Mga PDF para sa Pandaigdigang Gumagamit",
        "blocks": [
          {
            "p": "Mga dokumento na magagamit para sa pagbabago ng mga banyagang pangalan sa mga pangalan sa Korea o pagsusulat ng mga pangalan sa Hangul. Ang mga presyo ay sumusunod sa mga halagang ipinapakita sa screen ng pagbabayad."
          },
          {
            "ul": [
              "**Korean Name Premium Report** — 3 pahina. Kasama ang isang pabalat ng calligraphy, ang kahulugan ng pangalan at ang dahilan ng pagpili nito, at saju at ang interpretasyon ng five elements.",
              "**Hangul Name Art** — 2 pahina. Kasama ang isang pabalat ng calligraphy at gabay sa pagbigkas. Naglalaman ito kung paano isulat ang pangalan sa Hangul at kung paano ito bigkasin."
            ]
          }
        ]
      },
      {
        "title": "Name Stamp",
        "blocks": [
          {
            "p": "Ine-engrave namin ang pangalan na nilikha sa screen sa isang pisikal na selyo at ipapadala ito sa iyo. Ang mga presyo ay nag-iiba ayon sa modelo — round seal {priceStampRound}, square seal {priceStampSquare}, ebony seal {priceStampEbony}. Available din ang internasyonal na pagpapadala."
          },
          {
            "p": "**Mula dito, ang mga produkto ay may kasamang pagpapadala.** Hindi tulad ng mga naunang item, ang produksyon at pagpapadala ay tumatagal ng oras, at kinakailangan ang isang address ng pagtanggap. Ang impormasyon sa pagpapadala ay ginagamit lamang para sa pagproseso ng order at legal na pagpapanatili, at sa sandaling makumpleto ang pagproseso, ito ay sisirain pagkatapos ng takdang panahon na itinakda sa patakaran."
          }
        ]
      },
      {
        "title": "Mga Dapat Malaman Bago Bumili",
        "blocks": [
          {
            "p": "**Ang mga digital na produkto ay ibinibigay agad pagkatapos ng pagbabayad.** Maaari mong kanselahin at makatanggap ng buong refund anumang oras bago magsimula ang pag-download, ngunit sa sandaling kumpleto na ang pag-download, ang pag-atras dahil sa simpleng pagbabago ng isip ay limitado (Article 17, Paragraph 2 ng Electronic Commerce Act). Ang kundisyong ito ay hiwalay na sinang-ayunan sa screen ng pagbabayad."
          },
          {
            "p": "**Ang mga reklamo tungkol sa nilalaman ng mga resulta ay hindi dahilan para sa refund.** Gayunpaman, kung ang dokumento ay hindi nalikha, ang file ay hindi mabubuksan, o ang halaga ng pagbabayad ay naiiba mula sa order, ito ay ipoproseso bilang isang reissue o buong refund."
          },
          {
            "p": "Ang mga detalyadong kondisyon ay nakasaad sa [Refund Policy](/refund-policy) at [Pricing Guide](/pricing). Ang tekstong ito ay nagsisilbing gabay sa kung ano ang kasama, at ang mga legal na kondisyon ay pinapahalagahan sa dalawang dokumentong iyon."
          }
        ]
      }
    ]
  },
  "guide/hanja-basics": {
    "eyebrow": "Sistema",
    "title": "Ano ang opisyal na name-hanja?",
    "summary": "Ang hanja na maaaring gamitin para sa mga pangalan ng mga bata ay itinatag ng Supreme Court sa isang talahanayan. Ito ay nagbubuod kung ano ang talahanayan at kung bakit ito itinakda.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Ano ang opisyal na name-hanja?",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal} mga karakter",
                "label": "Opisyal na name-hanja"
              },
              {
                "value": "{syllableCount} mga silaba",
                "label": "Mga silaba sa Hangul na kasama"
              },
              {
                "value": "{effectiveDate}",
                "label": "Petsa ng sanggunian ng talahanayan"
              }
            ]
          },
          {
            "p": "Hindi mo maaaring gamitin ang anumang karakter para sa pangalan ng isang bata. **Ang hanja na maaaring gamitin para sa pagpaparehistro ng kapanganakan ay itinatag ng Supreme Court sa isang talahanayan, at tanging ang mga karakter sa talahanayang iyon ang maaaring irehistro bilang hanja para sa mga pangalan.** Ito ay tinatawag na opisyal na name-hanja."
          }
        ]
      },
      {
        "title": "Bakit ito itinakda?",
        "blocks": [
          {
            "p": "Mayroong sampu-sampung libong hanja. Kabilang sa mga ito, ang ilan ay may hindi kanais-nais na kahulugan, ang ilan ay hindi na ginagamit at walang kilalang pagbasa, at ang ilan ay hindi maaaring ipakita sa mga computer. Kung ang mga ganitong karakter ay kasama sa isang pangalan, ang taong sa huli ay magdadala ng pasanin ay ang taong gagamit ng pangalang iyon sa buong buhay niya. Ang mga pangalan ay maaaring masira o mabasa nang iba sa iba't ibang lugar tulad ng rehistrasyon ng residente, mga pasaporte, mga bangko, at mga paaralan, na nangangailangan ng indibidwal na ipaliwanag ang kanilang sariling pangalan."
          },
          {
            "p": "Samakatuwid, isang paraan ang pinili upang maunang tukuyin ang saklaw ng hanja na maaaring gamitin sa mga pangalan. Sa halip na maging isang nakapipigil na regulasyon, ito ay higit na isang mekanismo upang matiyak na ang mga pangalan ay maaaring magamit nang walang mga isyu sa buong buhay ng isang tao."
          }
        ]
      },
      {
        "title": "Ano ang batayan para sa mga depinisyon?",
        "blocks": [
          {
            "p": "Itinatag ng Supreme Court ang opisyal na talahanayan ng name-hanja, na nire-revise kung kinakailangan, at ang mga karakter ay idinadagdag."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga materyales na ginamit sa screen na ito",
        "blocks": [
          {
            "p": "{publisher} opisyal na data ng name-hanja · As of {effectiveDate}"
          },
          {
            "p": "{characterTotal} mga karakter ay sumasaklaw sa {syllableCount} mga silaba sa Hangul. Ang hash value ng orihinal na file ay nakaimbak din, kaya kung magbago ang talahanayan, maaari itong suriin kung kailan at ano ang nagbago."
          }
        ]
      },
      {
        "title": "Ang bilang ng mga karakter na inihayag ng Supreme Court ay naiiba sa ipinapakita namin",
        "blocks": [
          {
            "p": "**Ang opisyal na name-hanja na inihayag ng Supreme Court ay {announcedTotal} mga karakter, habang ang ipinapakita namin bilang mga kandidato ay {characterTotal} mga karakter.** Walang dahilan upang itago ang pagkakaibang ito, kaya't ito ay tahasang sinasabi."
          },
          {
            "p": "Kung susuriin mo ang data ng pagtatanong ng Supreme Court, naglalaman ito ng {listedTotal} mga karakter. Kabilang dito, **{excludedNoStandardCode} mga karakter** ay **mga karakter na walang lugar sa pandaigdigang karaniwang character code (Unicode).** Ang sistema ng Supreme Court ay itinuturing ang mga ganitong karakter na may mga numero na gumagana lamang sa loob ng sariling sistema nito, at ipinapakita ang mga ito bilang **mga imahe** sa halip na mga karakter sa screen."
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
        "title": "Samakatuwid, sila ay inalis mula sa mga kandidato",
        "blocks": [
          {
            "p": "**Ang pagpuno sa listahan ng mga karakter na hindi maipapakita ay hindi nakakatulong.** Karamihan sa mga kahulugan ng mga karakter na ito ay walang laman din sa aming data, na hindi umaayon sa pamamaraan ng serbisyo sa pagpili ng mga pangalan batay sa mga kahulugan."
          },
          {
            "p": "**Ang mas mahalagang dahilan ay nakasalalay sa taong gagamit ng pangalan.** Ang pangalan ay isang halaga na ilalagay sa iba't ibang lugar sa buong buhay ng isang tao. Ang mga karakter na walang mga code ng karakter ay maaaring hindi maipasok o ma-print sa mga sistema para sa mga bangko, paaralan, ospital, o pasaporte, kahit na matapos ang pagrehistro ng kapanganakan. Samakatuwid, hindi namin mairerekomenda ang mga ganitong karakter."
          },
          {
            "p": "Gayunpaman, **hindi namin tinutukoy kung ang mga karakter na iyon ay maaaring gamitin o hindi.** Dahil sila ay mga karakter sa talahanayan ng Korte Suprema, maaaring posible ang pagrehistro mismo. Kung talagang nais mong gamitin ang karakter na iyon, mangyaring suriin nang direkta sa elektronikong sistema ng pagrehistro ng ugnayang pampamilya ng Korte Suprema, at **magtanong sa kaukulang awtoridad tungkol sa aktwal na kakayahang magamit.**"
          }
        ]
      },
      {
        "title": "Kung nais mong gumamit ng hanja na hindi nasa talahanayan",
        "blocks": [
          {
            "p": "Hindi mo sila maaaring gamitin. Upang maging tumpak, ang mga karakter na iyon ay hindi mairehistro bilang hanja para sa pangalan, at ang pangalan ay itatala lamang sa Hangul. Kung nais mong gumamit ng hanja kasabay nito, dapat kang pumili mula sa talahanayan."
          },
          {
            "p": "Samakatuwid, hindi namin ipinapakita ang mga karakter na hindi nasa talahanayan bilang mga kandidato. Ang lahat ng hanja na nakikita sa screen ay mga karakter na talagang maaaring gamitin para sa pagrehistro ng kapanganakan. Ang kumpletong listahan ay makukuha sa [Kumpletong Listahan ng Opisyal na Name-Hanja](/guide/hanja)."
          }
        ]
      }
    ]
  },
  "guide/hanja": {
    "eyebrow": "Listahan",
    "title": "Kumpletong Listahan ng Opisyal na Name Hanja",
    "summary": "Inorganisa namin ang hanja na maaaring gamitin para sa pagrehistro ng kapanganakan ayon sa unang katinig. Makikita mo ang itinalagang pagbasa at kahulugan para sa bawat karakter kapag ginamit sa mga pangalan.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Maghanap ayon sa Unang Katinig",
        "slot": "chosung",
        "blocks": [
          {
            "p": "Kasama dito ang lahat ng {characterTotal} na karakter mula sa opisyal na talahanayan ng name-hanja ng Korte Suprema. Ang bawat karakter ay may **pagbasa kapag ginamit sa mga pangalan** at ang kahulugan nito. Ang mga karakter na hindi kasama sa talahanayan ay hindi maaaring mairehistro bilang name hanja, kaya dapat kang pumili mula sa mga karakter na nakalista dito."
          },
          {
            "p": "Ang dalawang numero sa pindutan sa ibaba ay kumakatawan sa **bilang ng mga karakter na may unang katinig na iyon** at ang **bilang ng mga silabong sakop.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kung ang karakter na hinahanap mo ay wala sa listahan",
        "blocks": [
          {
            "p": "Ang bilang ng mga karakter na inihayag ng Korte Suprema ay {announcedTotal}, ngunit ang listahang ito ay naglalaman ng {characterTotal} na mga karakter. **Ang pagkakaiba ng {excludedNoStandardCode} na mga karakter ay ang mga hindi maipapakita sa anumang font dahil sa kakulangan ng lugar sa unibersal na code ng karakter.** Ipinapakita ng sistema ng Korte Suprema ang mga karakter na iyon bilang mga imahe."
          },
          {
            "p": "Inilatag namin ang mga dahilan para dito at kung bakit hindi namin inirerekomenda ang mga karakter na iyon sa [Ano ang Opisyal na Name Hanja?](/guide/hanja-basics). Dapat mong suriin sa kaukulang awtoridad ang aktwal na kakayahang magamit ng mga karakter na iyon."
          }
        ]
      },
      {
        "title": "Unang Katinig na May Kaunting mga Karakter",
        "slot": "tiny",
        "blocks": [
          {
            "p": "Ang mga unang katinig sa ibaba ay may napaka-kaunting opisyal na name hanja, kaya ipinakita namin ang mga ito dito nang walang hiwalay na pahina."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Paano Basahin ang Listahang Ito",
        "blocks": [
          {
            "p": "Para sa **伽 · 가 · 절**, kapag ginagamit ang \"伽\" sa isang pangalan, ito ay binabasa bilang **가** at nangangahulugang \"templo\". Kahit para sa parehong hanja, ang pagbasa kapag ginamit sa mga pangalan ay itinatakda ng talahanayan, at hindi ito maaaring gamitin sa anumang ibang paraan."
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
  "effective": "Magkakabisa {date}",
  "pager": {
    "label": "Mga pahina ng abiso",
    "newer": "← Mas Bago",
    "older": "Mas Matanda →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Mga pahina ng Contact at About ay bukas na",
      "body": [
        "Ang mga tanong, refund, mga kahilingan sa privacy at mga ulat ng error ay mayroon na ngayong isang lugar na pupuntahan. Ang pahina ng contact sa footer ay naglilista ng aming email at mga detalye ng kumpanya.",
        "Kung ano ang batayan ng aming mga sagot, at kung ano ang tahasang hindi namin ginagawa, ay nakasulat sa pahina ng about."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Ang mga PDF na ulat ay inilalabas sa Ingles para sa Arabic at Khmer",
      "body": [
        "Kung ginagamit mo ang serbisyo sa Arabic o Khmer, ang PDF na binibili mo ay ginawa sa Ingles. Ang tool na nag-aayos ng aming mga dokumento ay hindi pa kayang mag-set ng mga talata sa mga script na iyon.",
        "Ang screen ay nananatili sa iyong wika, at ang iyong pangalan ay naka-print sa iyong sariling script sa loob ng dokumento.",
        "Ang parehong tala ay lilitaw bago ang pagbabayad. Kapag sinusuportahan ng tool ang mga script na ito, ipapaalam namin dito."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Hindi pa bukas ang mga pagbabayad",
      "body": [
        "Ang paglikha ng pangalan at pagbabasa ng resulta ay libre ngayon, at walang kinakailangang account.",
        "Ang mga bayad na item ay hindi pa ibinebenta. Ang mga halagang ipinapakita sa pahina ng presyo ay ang mga ilalapat kapag nagbukas ang mga benta."
      ]
    }
  }
} satisfies NoticeCopy;
