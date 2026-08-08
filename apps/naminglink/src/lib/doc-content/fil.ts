import type { DocPage, NoticeCopy } from "./types";
import type { DocKey } from "./ko";

/** Filipino — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const FIL_DOCS = {
  "about": {
    "eyebrow": "Tungkol",
    "title": "Tungkol sa Naming-Link",
    "summary": "Ito ay isang serbisyo na tumutulong sa iyo na pumili at maunawaan ang mga pangalan sa Korea. Narito ang mga batayan ng aming mga resulta, at kung ano ang hindi namin sinasadyang gawin.",
    "backLabel": "Bahay",
    "sections": [
      {
        "title": "Ano ang ginagawa namin",
        "blocks": [
          {
            "p": "Ang Naming-Link ay tumutulong sa iyo na **pumili at maunawaan ang mga pangalan sa Korea** — ang hanja sa likod ng pangalan ng isang bata, isang pangalan sa Korea na gagamitin sa ibang bansa, isang pagsulat sa Hangul ng iyong sariling pangalan, at mga alaala tulad ng isang selyo o isang nak print na ulat."
          },
          {
            "p": "Ang pagtingin sa iyong mga resulta ay **libre at hindi nangangailangan ng account.** Ang mga bayad na item ay hindi muling ibinebenta ang mga ipinakita na sa screen: nagbubukas sila ng higit pang mga kandidato, nagdadagdag ng nakasulat na pagsusuri, o ginagawang isang bagay na maaari mong itago ang resulta."
          }
        ]
      },
      {
        "title": "Ano ang batayan ng aming mga sagot",
        "blocks": [
          {
            "p": "Ang Hanja ay nagmumula sa **opisyal na talahanayan ng pangalan-hanja ng Korte Suprema ng Korea.** Ang bawat karakter ay may nakatakdang pagbasa para sa paggamit sa mga pangalan, at ang mga karakter na wala sa talahanayan ay hindi maaaring irehistro. Hindi kami nagdaragdag sa listahang iyon o pumipili ng mga paborito."
          },
          {
            "p": "Ang Saju at mga pigura ng limang elemento ay kinakalkula mula sa **Korean lunisolar almanac**, na ang oras ng kapanganakan ay itinatama sa tunay na oras ng araw para sa lugar ng kapanganakan. Ang pagbasa ay isang tradisyonal na sanggunian, hindi isang prediksyon."
          },
          {
            "p": "Ang mga nakasulat na paliwanag ay ginawa ng AI. Upang maiwasan itong **mag-imbento ng mga bagay**, ang modelo ay binigyan lamang ng iyong input at aming sariling reference data, at sinabihan na manatili sa loob nito. Ang mga gabay ay nagpapaliwanag nito nang detalyado."
          }
        ]
      },
      {
        "title": "Ano ang hindi namin ginagawa",
        "blocks": [
          {
            "ul": [
              "**Hindi kami nagsasabi ng kapalaran.** Walang sinuman dito ang nangangako ng swerte, kayamanan o proteksyon.",
              "**Hindi namin iniimbak ang iyong pangalan.** Ang mga libreng resulta ay hindi kailanman nakasulat sa aming mga server, at ang mga bayad na dokumento ay naipapadala nang hindi nag-iingat ng kopya ng file.",
              "**Ang pagbabayad ay hindi bumibili ng mas magandang sagot.** Ang pag-unlock gamit ang isang ad at ang pag-unlock gamit ang isang bayad ay nagbibigay ng eksaktong parehong nilalaman."
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
            "p": "Ang mga detalye ng kumpanya at kung paano kami maabot ay nasa [contact page](/contact), kasama ang mga refund, mga kahilingan sa privacy at mga ulat ng error."
          }
        ]
      }
    ]
  },
  "guide/reading": {
    "eyebrow": "Mga Pagbasa",
    "title": "Itinakdang pagbasa — isang pagbasa bawat karakter",
    "summary": "Ang opisyal na talahanayan ay hindi lamang naglilista ng mga karakter. Itinatakda din nito kung paano binabasa ang bawat isa kapag ginamit sa isang pangalan.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Isang itinatag na pagbasa para sa bawat karakter",
        "blocks": [
          {
            "p": "Ang talahanayan ng pangalan-hanja ay hindi lamang nagtatakda kung aling mga karakter ang maaaring gamitin. **Itinatakda din nito kung paano binabasa ang bawat karakter kapag lumilitaw ito sa isang pangalan.** Ang nakatakdang pagbasa ay kung ano ang sinusunod sa pagpaparehistro."
          },
          {
            "p": "Karamihan sa mga hanja ay may ilang posibleng pagbasa. Gayunpaman, ang isang pangalan ay nakasulat sa mga dokumento at binibigkas nang malakas, kaya kailangan nito ng eksaktong isa. Samakatuwid, itinatakda ng talahanayan ang bawat karakter sa kanyang pagbasa para sa paggamit sa mga pangalan, at walang ibang pagbasa ang maaaring irehistro."
          }
        ]
      },
      {
        "title": "Kaya't ang tunog ang nauuna",
        "blocks": [
          {
            "p": "Ito ang dahilan kung bakit itinatakda ng Naming-Link ang tunog bago maghanap ng hanja. Kung ang pangalan ay \"지은\", ang kahulugan ay maaaring piliin lamang mula sa mga karakter na itinalaga ang pagbasa **지** at mga karakter na itinalaga ang pagbasa **은**."
          },
          {
            "p": "Kahit gaano kaganda ang isang kahulugan, ang isang karakter na hindi tumutugma sa pagbasa ay hindi maaaring gamitin para sa pangalang iyon. Hindi rin namin binabago ang tunog ng isang pangalan upang umangkop sa isang karakter — ang pangalan ay binibigkas sa buong buhay, at ang tunog ay naayos muna, na sinusundan ng hanja."
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
            "p": "Iyon ang dahilan kung bakit ang Naming-Link ay ginagamot ang hanja ng apelyido nang iba. Tinutulungan lamang naming makahanap ng apelyido, at nag-iiwan kami ng isang patlang para sa direktang pagpasok ng isa, para sa mga taong ang karakter ay nasa labas ng talahanayan. Ang mga apelyido na may dalawang silaba tulad ng Namgung at Seonwoo ay tinatanggap din sa parehong paraan."
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
        "title": "Inililipat namin ang tunog, hindi ang kahulugan",
        "blocks": [
          {
            "p": "Ang serbisyong ito ay nagsusulat ng **iyong pangalan** sa Hangul. Hindi ito nagbibigay sa iyo ng isang pangalan sa Korea. Ang Michael ay nagiging 마이클 — ang parehong pangalan, na nakasulat upang mabasa at masabi ito ng mga Koreano. Hindi namin ito pinapalitan ng isang pangalan sa Korea na nagkataong may katulad na kahulugan."
          },
          {
            "p": "Kung ang isang pangalan sa Korea ang nais mo, **iyon ay ibang serbisyo.** Ang isa ay nagpapanatili ng iyong pangalan at binabago lamang ang script; ang isa ay nagmumungkahi ng isang bagong pangalan."
          }
        ]
      },
      {
        "title": "Paano hawakan ang mga tunog na wala sa Korean",
        "blocks": [
          {
            "p": "Bawat wika ay may mga tunog na wala sa Korean — f, v, z, th, at mga pagkakaiba sa patinig na hindi ginagawa ng Korean. Para sa mga iyon, isinusulat namin kung ano ang **aktwal na sinasabi ng isang nagsasalita ng Korean** kapag binabasa nila ang iyong pangalan nang malakas, sa halip na isalin ang orihinal na ponetika simbolo sa simbolo. Ang layunin ay ang pagsulat na gagamitin, hindi ang pinaka teknikal na tapat."
          },
          {
            "p": "Ang parehong pagsulat ay maaaring mag-iba depende sa pinagmulan ng pangalan, kaya't humihingi kami ng iyong wika at bansa at nagtatrabaho mula sa pagbasa na iyon."
          }
        ]
      },
      {
        "title": "Maraming pagsulat, magkatabi",
        "blocks": [
          {
            "p": "Walang isang tamang sagot. Ang pagsulat na pinakamalapit sa orihinal na tunog, ang pinaka-karaniwang ginagamit sa Korea, at ang pinakamadaling isulat ay madalas na tatlong magkaibang bagay. Kaya't ipinapakita namin ang mga ito nang magkasama at sinasabi kung ano ang naghihiwalay sa mga ito."
          },
          {
            "p": "Kung wala sa mga ito ang tila tama, maaari kang magdagdag ng isang pahiwatig tungkol sa tunog na nais mo at ulitin ito — halimbawa, na ang isang partikular na silaba ay dapat isulat nang iba."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Walang hanja dito",
        "blocks": [
          {
            "p": "Hindi kami naglalakip ng hanja sa isang transliteration. Ang hanja ay nagdadala ng kahulugan, at ang daloy na ito ay tungkol sa tunog. Ang pagtutugma ng mga karakter sa tunog lamang ay maaaring magdala sa iyo ng isang kahulugan na hindi mo hiniling."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Paano ito gumagana",
    "title": "Paano kami bumubuo ng isang pangalan sa Korea",
    "summary": "Pumipili kami mula sa mga apelyido na umiiral, tinutimbang kung gaano kadaling bigkasin at isulat ang pangalan, at tinatanong kung para saan ang pangalan.",
    "backLabel": "Gabay",
    "sections": [
      {
        "title": "Nagsisimula kami sa apelyido",
        "blocks": [
          {
            "p": "Sa Korea, ang apelyido ay nauuna, at hindi tulad ng mga ibinigay na pangalan, hindi ito malayang naimbento — ito ay minamana. Kaya't nagmumungkahi lamang kami ng mga apelyido na talagang mayroon ang mga tao sa Korea. Ang aming default na pool ay ang **20 pinaka-karaniwang apelyido**, na sama-samang sumasaklaw sa halos 80% ng populasyon."
          },
          {
            "p": "Kung ang iyong sariling apelyido ay nagkataong tumutugma sa isang tunay na Korean sa tunog — Wang na may 왕, Ye na may 예 — inilalagay namin iyon sa unahan. Ang pagpapanatili ng isang thread pabalik sa iyong orihinal na pangalan ay mas mahalaga kaysa sa isang apelyido na pinili nang random."
          },
          {
            "p": "Maaari mong piliin ang isang apelyido para sa iyong sarili o hayaan kaming magrekomenda ng isa. Sa alinmang paraan, ito ay **isang apelyido na umiiral**."
          }
        ]
      },
      {
        "title": "Madaling bigkasin, madaling isulat",
        "blocks": [
          {
            "p": "Ito ay isang pangalan na talagang tatawagin ka ng mga tao sa Korea, kaya ang unang bagay na tinitingnan namin ay kung ang isang Korean ay makakarinig nito nang isang beses at maisusulat ito. Ang isang pangalan na kailangang ipaliwanag sa bawat pagkakataon ay isang pasanin na dala mo, hindi namin."
          },
          {
            "p": "Mahalaga rin ang kahulugan. Karamihan sa mga pangalan sa Korea ay karaniwang nagdadala ng isa, kaya sinasabi namin sa iyo kung ano ang binabasa ng pangalan at kung bakit namin ito pinili — hindi lamang ang pangalan mismo."
          }
        ]
      },
      {
        "title": "Tinutukoy namin kung para saan ang pangalan",
        "blocks": [
          {
            "p": "Ang isang pangalan para sa mga dokumento ng unibersidad ay hindi katulad ng isang pangalan na tatawagin ng mga kaibigan sa isang silid, o isang handle na gagamitin mo online. Tinutukoy namin kung paano mo balak gamitin ito at isinasaalang-alang iyon."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Ito ay hindi isang transliteration",
        "blocks": [
          {
            "p": "Dito ay nagmumungkahi kami ng **isang bagong pangalan sa Korea**. Kung nais mong ang iyong umiiral na pangalan ay isulat sa Hangul — ang Michael bilang 마이클 — tingnan ang [gabay sa pagsulat sa Hangul](/guide/how-hangul-transliteration)."
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
              "**Mga pagbabayad at refund** — kung ang isang dokumento ay hindi kailanman ginawa, o ang halagang siningil ay naiiba mula sa iyong order, ibinabalik namin ito ng buo. Tingnan ang [patakaran sa refund](/refund-policy).",
              "**Privacy** — mga kahilingan upang ma-access, ituwid o tanggalin ang iyong data. Tingnan ang [patakaran sa privacy](/privacy).",
              "**Mga Pagwawasto** — kung ang isang kahulugan ng hanja, pagbasa o kalkulasyon ay mukhang mali, ipaalam sa amin. Ang pagbanggit kung aling screen at kung ano ang iyong ipinasok ay makakatulong nang malaki.",
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
              "**Numero ng pagbebenta sa mail-order** — {mailOrderNumber}",
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
            "p": "Hindi mo kailangang isama ang isang pangalan o petsa ng kapanganakan sa iyong mensahe. Ang mga libreng resulta ay hindi kailanman nakaimbak sa aming mga server, kaya hindi namin ito mahanap muli — sapat na ang isang numero ng order."
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
  "intro": "Ang mga pagbabago sa iyong mga tuntunin ng paggamit — mga presyo, mga patakaran — ay nai-post dito bago sila magkabisa. Ang mga panloob na pagpapabuti ay hindi nakalista: ang lumalabas dito ay kung ano ang kailangan mong malaman.",
  "empty": {
    "title": "Walang mga anunsyo pa",
    "body": "Kapag may nagbago, lilitaw ito dito."
  },
  "effective": "Magkakabisa {date}",
  "pager": {
    "label": "Mga pahina ng anunsyo",
    "newer": "← Mas bago",
    "older": "Mas matanda →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Bukas na ang mga pahina ng Makipag-ugnayan at Tungkol",
      "body": [
        "Ang mga tanong, refund, mga kahilingan sa privacy at mga ulat ng error ay mayroon na ngayong isang lugar na pupuntahan. Ang contact page sa footer ay naglilista ng aming email at mga detalye ng kumpanya.",
        "Ano ang batayan ng aming mga sagot, at kung ano ang hindi namin sinasadyang gawin, ay nakasulat sa tungkol sa pahina."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "Ang mga PDF na ulat ay ibinibigay sa Ingles para sa Arabic at Khmer",
      "body": [
        "Kung gumagamit ka ng serbisyo sa Arabic o Khmer, ang PDF na binibili mo ay ginawa sa Ingles. Ang tool na nag-aayos ng aming mga dokumento ay hindi pa sumusuporta sa mga script na iyon.",
        "Ang screen ay nananatili sa iyong wika, at ang iyong pangalan ay naka-print sa iyong sariling script sa loob ng dokumento.",
        "Ang parehong tala ay lilitaw bago ang pagbabayad. Kapag sinusuportahan ng tool ang mga script na ito, ipapaalam namin ito dito."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Ang mga pagbabayad ay hindi pa bukas",
      "body": [
        "Ang paglikha ng isang pangalan at pagbabasa ng resulta ay libre ngayon, at hindi kinakailangan ang anumang account.",
        "Ang mga bayad na item ay hindi pa ibinebenta. Ang mga halagang ipinakita sa pahina ng pagpepresyo ay ang mga ilalapat kapag nagbukas ang mga benta."
      ]
    }
  }
} satisfies NoticeCopy;
