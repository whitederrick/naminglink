import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

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
  "guide/reading": {
    "eyebrow": "Mga pagbasa",
    "title": "Nakatakdang mga pagbasa — isang pagbigkas bawat karakter",
    "summary": "Ang opisyal na talahanayan ay hindi lamang naglilista ng mga karakter. Itinatakda din nito kung paano binibigkas ang bawat isa kapag ginamit sa isang pangalan.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Isang nakatakdang pagbasa para sa bawat karakter",
        "blocks": [
          {
            "p": "Ang talahanayan ng pangalan-hanja ay hindi lamang nagtatakda kung aling mga karakter ang maaaring gamitin. **Itinatakda din nito kung paano binibigkas ang bawat karakter kapag lumilitaw ito sa isang pangalan.** Ang nakatakdang pagbasa na iyon ang batayan ng pagpaparehistro."
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
            "p": "Ito ang dahilan kung bakit itinatakda ng Naming-Link ang tunog bago tumingin para sa hanja. Kung ang pangalan ay \"지은\", ang kahulugan ay maaari lamang piliin mula sa mga karakter na itinalaga ang pagbasa na **지** at mga karakter na itinalaga ang pagbasa na **은**."
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
            "p": "Iyon ang dahilan kung bakit itinuturing ng Naming-Link ang hanja ng apelyido nang iba. Tinutulungan ka lamang naming makahanap ng apelyido, at iniiwan namin ang isang patlang para sa direktang pagpasok ng isa, para sa mga taong ang karakter ay nasa labas ng talahanayan. Ang mga apelyido na may dalawang pantig tulad ng Namgung at Seonwoo ay ipinasok sa parehong paraan."
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
  "guide/avoid": {
    "eyebrow": "Mga Kaugalian",
    "title": "Mga Character na Tradisyonal na Iniiwasan",
    "summary": "Hindi ito ipinagbabawal ng batas ngunit isang kaugalian. Nagsulat kami tungkol sa mga iniiwasan at kung bakit, at kung paano namin ito hinaharap.",
    "backLabel": "Gabay sa Paggamit",
    "sections": [
      {
        "title": "Mga Character na Legal na Katanggap-tanggap",
        "blocks": [
          {
            "stats": [
              {
                "value": "{avoidTotal} na character",
                "label": "Naka-compile na mga Iniiwasang Character"
              },
              {
                "value": "{avoidCommonlyUsed} na character",
                "label": "Kabilang dito, mga character na patuloy na ginagamit"
              }
            ]
          },
          {
            "p": "May mga character na kasama sa listahan ng mga character para sa mga personal na pangalan at **legal na katanggap-tanggap**, ngunit itinuturing na hindi angkop para sa mga pangalan."
          },
          {
            "p": "Ang pangunahing pag-iisip ay **\"ang labis na kahulugan ay talagang hindi kanais-nais.\"** Ito ay sumasalamin sa isang lumang pakiramdam ng pagpipigil, naniniwala na ang isang pangalan ay maaaring magpatingkad sa tao."
          },
          {
            "ul": [
              "珍·寶 — mga character na itinuturing na masyadong mahalaga",
              "王·帝 — mga character na itinuturing na nagdadala ng labis na kapangyarihan",
              "langit at mga diyos — masyadong dakila para sa isang tao na katawanin"
            ]
          },
          {
            "p": "**Gayunpaman, ang mga character na ito ay hindi hindi magagamit.** Hindi ito isang legal na pagbabawal kundi isang kaugalian, at ang mga kaugalian ay nag-iiba-iba ayon sa rehiyon, pamilya, at henerasyon, at maaaring magbago sa paglipas ng panahon."
          },
          {
            "p": "Sa katunayan, sa {avoidTotal} na character na aming na-compile, {avoidCommonlyUsed} ay patuloy na ginagamit sa mga pangalan. Ang katotohanan na sila ay kilalang iniiwasan ngunit patuloy na ginagamit ay nagpapahiwatig na ang kaugalian na ito ay hindi ganap."
          }
        ]
      },
      {
        "title": "Ano ang mga Kategorya?",
        "blocks": [
          {
            "p": "Ang kasalukuyang na-compile na mga character ay nahahati sa pitong kategorya."
          },
          {
            "ul": [
              "**Yaman at mga Bagay** — Mga character na direktang tumutukoy sa kayamanan o mga bagay",
              "**Langit at Kalikasan** — Mga bagay tulad ng araw, buwan, at langit na itinuturing na masyadong dakila para sa isang tao na katawanin",
              "**Mga Hari at Nobilidad** — Mga character na nagpapahiwatig ng katayuan, tulad ng hari o emperador",
              "**Mga Banal na Nilalang** — Mga character na tumutukoy sa mga sagradong larangan, tulad ng mga diyos o espiritu",
              "**Mga Panahon at Iba pa** — Mga character na nakatali sa mga tiyak na oras o estado",
              "**Mga Hayop** — Mga hayop na itinuturing na may malakas na enerhiya, tulad ng mga dragon o tigre",
              "**Labisan** — Mga character na itinuturing na may labis na malaki o umaapaw na kahulugan"
            ]
          }
        ]
      },
      {
        "title": "Maaari Mong Idagdag o Alisin ang mga Character sa Iyong Sarili",
        "blocks": [
          {
            "p": "Hindi kami basta-basta nagtatanggal ng mga character na ito. **Nagbigay kami ng dalawang opsyon sa input screen para sa namer na pumili kung paano ito haharapin.**"
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga Opsyon na Magagamit sa Input Screen",
        "blocks": [
          {
            "p": "**I-exclude ang mga Iniiwasang Character mula sa mga Kandidato** — Kung pinagana, sila ay ganap na aalisin. Kung hindi pinagana, mananatili sila sa mga resulta na may label na \"Tradisyonal na Iniiwasan\" at ang dahilan na nakalakip."
          },
          {
            "p": "**I-exclude kahit ang mga Karaniwang Ginagamit na Character** — Ito ay nag-e-exclude ng mga character na nasa listahan ng pag-iwas ngunit talagang malawak na ginagamit (圭·琳·玲·元·太·星·海, atbp.). Kung pinagana, ang mga kandidato ay makabuluhang mababawasan."
          },
          {
            "p": "Ang default ay **hindi i-exclude kundi ipakita lamang** ang mga ito. Kung tahimik na aalisin mula sa listahan, maaaring lumitaw sa mga nais gumamit ng character na parang hindi ito umiiral."
          }
        ]
      },
      {
        "title": "Tinitiyak na ang mga Opsyon ay Hindi Nawawala",
        "blocks": [
          {
            "p": "Kung walang magagamit na character para sa syllable na iyon, aalisin namin ang exclusion para sa syllable na iyon at ipapakita ang mga kandidato. Naniniwala kami na mas mabuti ito kaysa sa walang mga opsyon."
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
            "p": "Hindi lamang isang paraan ang pagsasalin ng pangalan sa ibang wika. Depende sa kung dapat bang panatilihin ang tunog o ang kahulugan, pumili ng natural na pangalan sa lokal na konteksto o bigyang-priyoridad ang pagkakakilanlan, ang mga sagot ay mag-iiba. Samakatuwid, sa halip na magbigay ng isang opsyon, nagbigay kami ng **isa mula sa bawat isa sa limang iba't ibang pananaw**."
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
            "p": "Garantisadong limang opsyon ang ibibigay. Dahil ang mga kagustuhan ay nag-iiba-iba mula sa tao hanggang tao, naniniwala kami na mas mabuti na payagan ang mga pagpipilian kaysa sa magbigay ng isa bilang tamang sagot."
          }
        ]
      },
      {
        "title": "Bawat Wika ay May Iba't Ibang Mga Batas sa Sistema ng Pagsulat",
        "blocks": [
          {
            "p": "Kapag isinasalin sa isang wika na hindi gumagamit ng mga Roman na titik, ito ay dapat isulat sa script ng wika na iyon. Para sa Hapon, ito ay magiging kana at kanji; para sa Ruso, Mongolian, at Kazakh, ito ay magiging Cyrillic; para sa Arabe, ito ay magiging Arabic script; at para sa Thai, Khmer, at Hindi, ito ay magiging kani-kanilang mga script. Kung isusulat mo ito sa mga Roman na titik at tatawagin itong \"pangalan ng Hapon,\" hindi ito magagamit sa bansang iyon."
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
            "p": "Upang maiwasan ang paglikha ng mga pangalan na mukhang kapani-paniwala ngunit hindi umiiral sa bansang iyon, ang aming mga pagpipilian ay batay sa mga umiiral na pangalan. Ang mga pangalan ay ginagamit sa mga dokumento at pagpapakilala, kaya kung ang isang lokal na tao ay nag-iisip na \"wala namang ganitong pangalan,\" hindi ito maaaring gamitin."
          }
        ]
      },
      {
        "title": "Pinaghihiwalay Namin ang Pagpili at Paglalarawan",
        "blocks": [
          {
            "p": "Hinahawakan namin ang gawain ng pagtukoy ng limang kandidato nang hiwalay mula sa gawain ng detalyadong paglalarawan ng bawat kandidato. Dahil ang paglalarawan ay kumukuha ng maraming oras, pinaghihiwalay namin ang bahaging iyon upang malikha ito nang sabay-sabay."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Bakit Ito Binago?",
        "blocks": [
          {
            "p": "Sa simula, nilikha namin ang limang pananaw nang hiwalay. Mas mabilis ito, ngunit **nag-iiba-iba ang bilang ng mga kandidato sa bawat pagkakataon.** Habang pumipili ang bawat tao ng mga kandidato, nagkakaroon ng mga overlap o pagkakaiba, at kung may isang nabigo, ang kandidato na iyon ay mawawala nang buo, na nagreresulta sa dalawa o tatlo lamang sa halip na lima."
          },
          {
            "p": "Ngayon, dahil tinutukoy namin ang set ng kandidato at pamamahagi ng pananaw nang sabay, **ang bilang ay nakatakda.** Kahit na ang isang paglalarawan ay mabigo, ang mga kandidato ay mananatili at ipapakita kasama ang maikling impormasyon. Naniniwala kami na mas mabuti na palaging magkaroon ng parehong bilang, kahit na tumatagal ito ng kaunti."
          }
        ]
      }
    ]
  },
  "guide/how-hanja-meaning": {
    "eyebrow": "Batayan ng Serbisyo",
    "title": "Ano ang batayan para sa pagtutugma ng mga kahulugan ng hanja?",
    "summary": "Una, ang mga tunog ay nakatakda, at ang mga hanja na maaaring irehistro gamit ang tunog na iyon ay kinokolekta, at ang kahulugan ay tinitingnan bilang isang kumbinasyon sa halip na isang solong karakter.",
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
              "tableStep": "② Salain ayon sa opisyal na talahanayan",
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
        "title": "Kolektahin lamang ang mga hanja na maaaring irehistro gamit ang tunog na iyon",
        "blocks": [
          {
            "p": "Ang opisyal na talahanayan ng pangalan-hanja ay may itinalagang pagbasa para sa bawat karakter kapag ginamit sa mga pangalan. Tanging mga karakter na itinalaga upang basahin bilang **지** at **은** ang nagiging mga kandidato. Hindi mahalaga kung gaano kaganda ang kahulugan, kung hindi tumutugma ang pagbasa, hindi ito maaaring maging hanja para sa pangalang iyon."
          },
          {
            "p": "Ang saklaw para sa pagpili ng mga kandidato ay ang {characterTotal} na mga karakter mula sa talahanayan ng Korte Suprema. Ang mga karakter na wala sa talahanayang ito ay hindi ipinapakita sa lahat — kahit na ipakita, hindi sila maaaring irehistro."
          },
          {
            "p": "Ang bilang ng mga karakter sa talahanayang inilathala ng Korte Suprema ay bahagyang higit pa sa ito. Ang talahanayan ay naglalaman din ng **mga karakter na walang mga pamantayang kodigo ng karakter**, na hindi maipapakita nang maayos sa mga screen at dokumento, kaya ang mga karakter na iyon ay hindi isinama sa mga kandidato. Dapat mong suriin sa kaukulang awtoridad kung maaari kang magrehistro gamit ang mga karakter na iyon."
          }
        ]
      },
      {
        "title": "Ang kahulugan ay tinitingnan bilang isang kumbinasyon, hindi isang solong karakter",
        "blocks": [
          {
            "p": "Ang kahulugan ng bawat indibidwal na karakter na maganda at ang kahulugan na nababasa kapag pinagsama ang dalawang karakter ay magkaiba. Ang mga pangalan ay binabasa bilang mga kumbinasyon, kaya tinitingnan namin ang mga kumbinasyon nang magkasama. Kung mayroon kang mga tiyak na kahulugan na nais isama o iwasan, ang mga iyon ay isinasaalang-alang."
          },
          {
            "p": "Kung gumagamit ka ng isang karakter ng henerasyon, ang karakter na iyon ay nakatakda, at ang mga kumbinasyon ay hinahanap mula sa natitirang mga posisyon. Ang apelyido (성) ay hindi limitado ng opisyal na talahanayan ng pangalan-hanja, kaya ito ay tinatrato nang hiwalay."
          }
        ]
      },
      {
        "title": "Ipinapakita namin ang mga kaugalian ng pag-iwas nang hindi inaalis ang mga ito",
        "blocks": [
          {
            "p": "Kung ang isang karakter na tradisyonal na itinuturing na dapat iwasan ay kasama sa mga kandidato, hindi namin ito inaalis kundi ipinapakita ang dahilan kasama nito. Ito ay isang usaping kaugalian, hindi batas, at maaari mong piliing ganap na alisin ito mula sa input screen. Para sa karagdagang detalye, tingnan ang [Tradisyonal na Iwasang Hanja](/guide/avoid)."
          }
        ]
      },
      {
        "title": "Ipinapaalam din namin sa iyo ang mga dahilan para sa pag-aalis",
        "blocks": [
          {
            "p": "Ipinapakita namin kung bakit ang ilang mga karakter ay inalis mula sa mga kandidato. Kung ipapakita lamang namin ang mga napili, hindi mo malalaman \"bakit ito?\" Kung walang magagamit na mga karakter na natitira para sa pantig na iyon, aalisin namin ang pag-aalis para sa pantig na iyon at ipapakita ang mga kandidato."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Paano basahin ang mga resulta",
        "blocks": [
          {
            "p": "Ang mga kandidato ay **mga pananaw, hindi mga ranggo**. Ang una ay hindi nangangahulugang ito ang pinakamahusay na pangalan; sila ay pinili mula sa iba't ibang pananaw. Ang mga iyon na nagbibigay-priyoridad sa kumbinasyon ng mga kahulugan, ang mga pumipili ng mga hindi pangkaraniwang karakter, at ang mga nagbibigay-diin sa neutralidad ay ipinapakita nang magkatabi. Ang sagot ay nag-iiba depende sa kung aling pananaw ang iyong pinahahalagahan."
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
            "p": "Hindi mo maaaring gamitin ang kahit anong karakter para sa pangalan ng isang bata. **Ang hanja na maaaring gamitin para sa pagrehistro ng kapanganakan ay itinatag ng Korte Suprema sa isang talahanayan, at tanging ang mga karakter sa talahanayang iyon ang maaaring irehistro bilang hanja para sa mga pangalan.** Ito ay tinatawag na opisyal na name-hanja."
          }
        ]
      },
      {
        "title": "Bakit ito itinatag?",
        "blocks": [
          {
            "p": "Mayroong sampu-sampung libong hanja. Sa mga ito, ang ilan ay may hindi kanais-nais na kahulugan, ang ilan ay hindi na ginagamit at walang kilalang pagbasa, at ang ilan ay hindi maaaring ipakita sa mga computer. Kung ang mga ganitong karakter ay kasama sa isang pangalan, ang taong sa huli ay magdadala ng pasanin ay ang taong gagamit ng pangalang iyon sa buong buhay. Ang mga pangalan ay maaaring masira o mabasa nang iba sa iba't ibang lugar tulad ng rehistrasyon ng residente, mga pasaporte, mga bangko, at mga paaralan, na nangangailangan sa indibidwal na ipaliwanag ang kanilang sariling pangalan."
          },
          {
            "p": "Samakatuwid, isang pamamaraan ang pinili upang itakda ang saklaw ng hanja na maaaring gamitin sa mga pangalan. Sa halip na maging isang nakapipigil na regulasyon, ito ay higit na isang mekanismo upang matiyak na ang mga pangalan ay maaaring gamitin nang walang mga isyu sa buong buhay ng isang tao."
          }
        ]
      },
      {
        "title": "Ano ang batayan para sa mga depinisyon?",
        "blocks": [
          {
            "p": "Itinatag ng Korte Suprema ang opisyal na name-hanja table, na binabago ayon sa pangangailangan, at ang mga karakter ay idinadagdag."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Mga materyales na ginamit sa screen na ito",
        "blocks": [
          {
            "p": "{publisher} opisyal na name-hanja data · As of {effectiveDate}"
          },
          {
            "p": "{characterTotal} mga karakter ang sumasaklaw sa {syllableCount} Hangul na mga silabaryo. Ang hash value ng orihinal na file ay nakaimbak din, kaya kung magbago ang talahanayan, maaari itong suriin kung kailan at ano ang nagbago."
          }
        ]
      },
      {
        "title": "Ang bilang ng mga karakter na inihayag ng Korte Suprema ay naiiba sa aming ipinapakita",
        "blocks": [
          {
            "p": "**Ang opisyal na name-hanja na inihayag ng Korte Suprema ay {announcedTotal} mga karakter, habang ang aming ipinapakita bilang mga kandidato ay {characterTotal} mga karakter.** Walang dahilan upang itago ang pagkakaibang ito, kaya't ito ay tahasang sinasabi."
          },
          {
            "p": "Kung susuriin mo ang data ng pagtatanong ng Korte Suprema, naglalaman ito ng {listedTotal} mga karakter. Kabilang dito, **{excludedNoStandardCode} mga karakter** ay **mga karakter na walang lugar sa pandaigdigang karaniwang character code (Unicode).** Ang sistema ng Korte Suprema ay itinuturing ang mga ganitong karakter na may mga numero na gumagana lamang sa loob ng sarili nitong sistema, at ipinapakita ang mga ito bilang **mga imahe** sa halip na mga karakter sa screen."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ang pagdaragdag ng higit pang mga font ay hindi malulutas ang isyu",
        "blocks": [
          {
            "p": "Upang ang isang karakter ay lumitaw sa screen, dapat itong magkaroon ng **numero na napagkasunduan ng mundo**, at ang font ay naglalaman ng imahe na tumutugma sa numerong iyon. Ang mga karakter na walang numero ay hindi maaaring isama sa anumang font. Kahit gaano karaming mga font ang idagdag namin, ang mga karakter na ito ay lilitaw bilang mga walang laman na parisukat."
          }
        ]
      },
      {
        "title": "Samakatuwid, inalis sila mula sa mga kandidato",
        "blocks": [
          {
            "p": "**Ang pagpuno sa listahan ng mga karakter na hindi maipapakita ay hindi nakakatulong.** Karamihan sa mga kahulugan ng mga karakter na ito ay walang laman din sa aming data, na hindi umaayon sa pamamaraan ng serbisyo sa pagpili ng mga pangalan batay sa mga kahulugan."
          },
          {
            "p": "**Ang mas mahalagang dahilan ay nakasalalay sa taong gagamit ng pangalan.** Ang isang pangalan ay isang halaga na ilalagay sa iba't ibang lugar sa buong buhay ng isang tao. Ang mga karakter na walang character codes ay maaaring hindi maipasok o maimprenta sa mga sistema para sa mga bangko, paaralan, ospital, o mga pasaporte, kahit na matapos ang pagrehistro ng kapanganakan. Samakatuwid, hindi namin mairerekomenda ang mga ganitong karakter."
          },
          {
            "p": "Gayunpaman, **hindi namin tinutukoy kung ang mga karakter na iyon ay maaaring gamitin o hindi.** Dahil sila ay mga karakter sa talahanayan ng Korte Suprema, ang pagrehistro mismo ay maaaring posible. Kung talagang nais mong gamitin ang karakter na iyon, mangyaring suriin nang direkta sa elektronikong sistema ng pagrehistro ng ugnayang pampamilya ng Korte Suprema, at **magtanong sa kaukulang awtoridad tungkol sa aktwal na kakayahang magamit.**"
          }
        ]
      },
      {
        "title": "Kung nais mong gumamit ng hanja na hindi nasa talahanayan",
        "blocks": [
          {
            "p": "Hindi mo sila maaaring gamitin. Upang maging tiyak, ang mga karakter na iyon ay hindi mairehistro bilang hanja para sa pangalan, at ang pangalan ay itatala lamang sa Hangul. Kung nais mong gumamit ng hanja kasabay nito, kailangan mong pumili mula sa talahanayan."
          },
          {
            "p": "Samakatuwid, hindi namin ipinapakita ang mga karakter na hindi nasa talahanayan bilang mga kandidato. Lahat ng hanja na nakikita sa screen ay mga karakter na talagang maaaring gamitin para sa pagrehistro ng kapanganakan. Ang kumpletong listahan ay makukuha sa [Kumpletong Listahan ng Opisyal na Name-Hanja](/guide/hanja)."
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
            "p": "Kasama dito ang lahat ng {characterTotal} mga karakter mula sa opisyal na name-hanja table ng Korte Suprema. Ang bawat karakter ay may kasamang **pagbasa kapag ginamit sa mga pangalan** at ang kahulugan nito. Ang mga karakter na hindi kasama sa talahanayan ay hindi maaaring mairehistro bilang name hanja, kaya dapat kang pumili mula sa mga karakter na nakalista dito."
          },
          {
            "p": "Ang dalawang numero sa pindutan sa ibaba ay kumakatawan sa **bilang ng mga karakter na may unang katinig na iyon** at ang **bilang ng mga silabaryo na sakop**."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Kung ang karakter na hinahanap mo ay wala sa listahan",
        "blocks": [
          {
            "p": "Ang bilang ng mga karakter na inihayag ng Korte Suprema ay {announcedTotal}, ngunit ang listahang ito ay naglalaman ng {characterTotal} mga karakter. **Ang pagkakaiba ng {excludedNoStandardCode} mga karakter ay ang mga hindi maipapakita sa anumang font dahil sa kakulangan ng lugar sa pandaigdigang character code.** Ipinapakita ng sistema ng Korte Suprema ang mga karakter na iyon bilang mga imahe."
          },
          {
            "p": "Inilatag namin ang mga dahilan para dito at kung bakit hindi namin inirerekomenda ang mga karakter na iyon sa [Ano ang Opisyal na Name Hanja?](/guide/hanja-basics). Dapat mong suriin sa kaukulang awtoridad ang aktwal na kakayahang magamit ng mga karakter na iyon."
          }
        ]
      },
      {
        "title": "Mga Unang Katinig na may Kaunting mga Karakter",
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
