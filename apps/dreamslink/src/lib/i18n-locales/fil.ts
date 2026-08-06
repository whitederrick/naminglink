// 드림링크 화면 사전의 Filipino (Tagalog)(fil) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const fil: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "Ang pangarap ngayon, binasa sa pamamagitan ng mga tradisyonal na simbolo ng Koreanong pangarap",
  "currentLanguage": "Kasalukuyang wika",
  "moreLanguages": "Higit pa",
  "closeLanguages": "Isara",
  "dream": {
    "title": "Pagsusuri ng Panaginip",
    "subtitle": "Isulat ang panaginip na napanaginipan mo at hahanapin namin ito sa isang diksyunaryo ng mga tradisyonal na simbolo ng panaginip sa Korea.",
    "textLabel": "Ano ang napanaginipan mo?",
    "textPlaceholder": "Isulat ito ayon sa iyong alaala. Halimbawa: isang isdang karp ang tumalon mula sa malinaw na tubig",
    "moodLabel": "Paano ka nakaramdam nang magising ka",
    "moods": {
      "good": "Maganda",
      "scary": "Nakakatakot",
      "strange": "Kakaiba",
      "sad": "Malungkot",
      "unsure": "Hindi sigurado"
    },
    "recurringLabel": "Paulit-ulit kong napanaginipan ang panaginip na ito",
    "submit": "Basahin ang aking panaginip",
    "submitting": "Naghahanap…",
    "errorEmpty": "Mangyaring isulat nang kaunti pa tungkol sa pangarap.",
    "errorGeneric": "Hindi namin ma-load ang pagbasa. Mangyaring subukan muli sa isang sandali.",
    "resultTitle": "Pagsusuri ng pangarap",
    "symbolsHeading": "Mga simbolo na natagpuan sa iyong pangarap",
    "noSymbols": "Walang tradisyonal na simbolo mula sa aming diksyunaryo ang lumitaw sa pangarap na ito. Iiwan naming walang laman ito sa halip na mag-imbento ng kahulugan.",
    "themesHeading": "Ano ang sama-samang tinutukoy nila",
    "conceptionNotice": "Ang mga simbolo na tradisyonal na binabasa bilang mga tanda ng pagbuo ay lumilitaw dito. Hindi ito nagtatakda ng pagbubuntis.",
    "disclaimer": "Ito ay materyal na sanggunian mula sa isang tradisyonal na pananaw ng pagsusuri ng pangarap, hindi medikal, pinansyal, o legal na payo. Hindi namin iniimbak ang pangarap na isinulat mo.",
    "again": "Basahin ang ibang pangarap"
  },
  "landing": {
    "title": "Basahin ang iyong pangarap\nsa tradisyonal na paraan",
    "subtitle": "Hinahanap namin ang mga simbolo sa iyong pangarap sa isang diksyunaryo ng tradisyonal na Koreanong 해몽.\nWalang petsa ng kapanganakan, walang pag-sign up.",
    "howTitle": "Paano ito gumagana",
    "steps": [
      "Isulat ang pangarap ayon sa iyong naaalala. Isang pangungusap o dalawa ay sapat na.",
      "Naghahanap kami sa isang diksyunaryo ng tradisyonal na mga simbolo ng pangarap para sa mga lumabas dito. Kung ang isang simbolo ay wala roon, sasabihin namin ito.",
      "Makikita mo kung ano ang matagal nang ibig sabihin ng bawat simbolo, at kung ano ang sama-samang tinutukoy nila."
    ],
    "privacyTitle": "Ang pangarap na isinusulat mo ay hindi nakaimbak",
    "privacyBody": "Ang iyong isinusulat ay ginagamit lamang habang ang pagbasa ay ginagawa, at hindi kailanman naitatala.\nWalang kinakailangang account, at walang natitira sa server kapag tapos na ang pagbasa.",
    "disclaimer": "Ito ay materyal na sanggunian mula sa isang tradisyonal na pananaw ng 해몽. Hindi ito isang prediksyon ng kung ano ang darating, ni medikal o pinansyal na payo."
  },
  "ads": {
    "label": "Patalastas"
  },
  "analyzing": {
    "title": "Naghahanap ng mga simbolo sa iyong panaginip",
    "quotes": [
      "Ang isang panaginip ay kadalasang sumasalamin sa mga nakaraang araw kaysa sa mga darating na araw.",
      "Ang parehong simbolo ay nabasa nang iba-iba depende sa taong nanaginip nito.",
      "Ang tradisyonal na 해몽 ay hindi isang susi sa tamang sagot. Ito ay isang mahabang nakalap na katawan ng mga kwento.",
      "Ang isang nakakatakot na panaginip ay hindi kapareho ng isang masamang panaginip. Maaaring ito ay marka ng isang nagulat na isipan.",
      "Ayos lang kung isa lamang ang iyong naaalala. Isang simbolo ay sapat na upang makapagsimula.",
      "Ang isang panaginip na patuloy na bumabalik ay karaniwang may kasamang hindi natapos na bagay.",
      "Kung gaano kalinaw ang tubig, at kung anong kulay ito, ay ang mga bagay na pinakamasusing pinanood ng mga matatandang mambabasa.",
      "Kung ano ang iyong naramdaman sa paggising ay nananatili nang kasing tagal ng aktwal mong nakita.",
      "Mabuti man o hindi ang panaginip, mas mabuting huwag itong hayaan na magpasya para sa iyong araw.",
      "Ang isang 해몽 ay hindi isang salita tungkol sa kung ano ang mangyayari. Ito ay isang pangalawang pagtingin sa kung ano na ang umiiral."
    ],
    "watching": "Pinapanood ang patalastas",
    "remaining": "Bubukas ang resulta sa loob ng {seconds}s"
  },
  "dreamCard": {
    "title": "Itago ang panaginip na ito bilang isang kard",
    "body": "Ipinagsama namin ang panaginip na isinulat mo at ang mga simbolo na natagpuan namin sa isang solong imahe. Ito ay **isang file ng imahe, hindi isang PDF**, kaya maaari mo itong i-save o ipadala nang ganito.",
    "buyButton": "Kunin ito para sa {price}",
    "preparing": "Naghahanda",
    "ordering": "Gumagawa ng order…",
    "paying": "Kinuha ang bayad…",
    "issuing": "Gumagawa ng kard…",
    "done": "Tapos na. Gamitin ang pindutan sa ibaba upang i-download ito muli.",
    "failed": "Nabigo ang pagbabayad o ang pag-download. Pakisubukan muli sa isang sandali.",
    "retry": "I-download muli",
    "contents": [
      "Ang mga simbolo na natagpuan sa iyong panaginip at kung ano ang tradisyonal na kahulugan ng mga ito",
      "Kung ano ang sama-samang itinuturo ng mga simbolong iyon",
      "Petsa ng panaginip at bersyon ng diksyunaryo"
    ],
    "consentLabel": "Ito ay digital na nilalaman na ibinibigay kaagad pagkatapos ng bayad. Nauunawaan ko na **kapag natapos na ang pag-download, ang karapatan na bawiin para sa pagbabago ng isip ay limitado**.",
    "consentRequired": "Kailangan mong sumang-ayon sa mga tuntunin ng pagbawi bago magbayad.",
    "productInfoTitle": "Impormasyon tungkol sa produkto",
    "productInfo": [
      [
        "Tagapagbigay",
        "{brand}"
      ],
      [
        "Format",
        "1 file ng imahe (PNG), na mada-download sa screen na ito kaagad pagkatapos ng bayad. Hindi ito isang PDF na dokumento."
      ],
      [
        "Mga kinakailangan",
        "Anumang aparato na makakapagbukas ng imahe. Walang kinakailangang pag-install at walang account."
      ],
      [
        "Availability",
        "Walang limitasyon sa oras. Ang na-download na file ay iyo nang panatilihin."
      ],
      [
        "I-download muli",
        "Hanggang 5 beses sa parehong order. Hindi namin itinatago ang file, kaya hindi na ito maibabalik kapag umalis ka sa resulta ng screen."
      ],
      [
        "Pagbawi",
        "Buong refund bago matapos ang pag-download. Pagkatapos, ang pagbawi para sa pagbabago ng isip ay limitado (Batas sa E-Commerce ng Korea art. 17(2))."
      ],
      [
        "Mga gastos sa pagbabalik",
        "Wala. Ang digital na nilalaman ay hindi ipinapadala."
      ]
    ],
    "refundContact": "Para sa mga refund o katanungan, makipag-ugnayan sa support desk o sa email address sa ibaba. Kung ang file ay hindi kailanman ginawa, o ang halagang siningil ay naiiba mula sa order, ibabalik namin ito ng buo.",
    "pdfLanguageNotice": "Ang teksto sa card ay lalabas sa parehong wika ng screen na ito."
  },
  "conceptionReport": {
    "title": "Itago ang pagbasa ng tae-mong bilang PDF",
    "body": "Kapag ang mga simbolo na traditionally read as mga tanda ng pag-conceive ay lumitaw, isang 4-pahinang PDF ang naglalahad kung ano ang lumitaw, kung ano ang tradisyonal na kahulugan nito, at kung saan nagmula ang pagbasa na iyon. Hindi nito tinutukoy ang pagbubuntis o ang kasarian ng isang bata.",
    "buyButton": "Kunin ito para sa {price}",
    "preparing": "Naghahanda",
    "ordering": "Gumagawa ng order…",
    "paying": "Kinuha ang bayad…",
    "issuing": "Gumagawa ng ulat…",
    "done": "Tapos na. Gamitin ang button sa ibaba upang i-download muli ito.",
    "failed": "Nabigo ang pagbabayad o ang pag-download. Pakisubukan muli sa sandaling ito.",
    "retry": "I-download muli",
    "contents": [
      "Pahina 1 — ang panaginip na isinulat mo at kung ano ang natagpuan dito",
      "Pahina 2 — bawat simbolo at kung ano ang tradisyonal na kahulugan nito",
      "Pahina 3 — bakit ito binabasa bilang mga tanda ng pagbuo",
      "Pahina 4 — isang pahina upang itago (ang petsa at ang mga paunawa)"
    ],
    "consentLabel": "Ito ay digital na nilalaman na ibinibigay kaagad pagkatapos ng bayad. Nauunawaan ko na **kapag natapos na ang pag-download, ang karapatan na bawiin para sa pagbabago ng isip ay limitado**.",
    "consentRequired": "Kailangan mong sumang-ayon sa mga tuntunin ng pagbawi bago magbayad.",
    "productInfoTitle": "Impormasyon sa produkto",
    "productInfo": [
      [
        "Tagapagbigay",
        "{brand}"
      ],
      [
        "Format",
        "1 PDF na dokumento (4 na pahina), na na-download sa screen na ito kaagad pagkatapos ng bayad."
      ],
      [
        "Mga kinakailangan",
        "Anumang aparato na makakapagbukas ng PDF. Walang kinakailangang pag-install at walang account."
      ],
      [
        "Availability",
        "Walang limitasyon sa oras. Ang na-download na file ay iyo nang itago."
      ],
      [
        "I-download muli",
        "Hanggang 5 beses sa parehong order. Hindi namin itinatago ang file, kaya hindi na ito maibabalik kapag umalis ka sa resulta ng screen."
      ],
      [
        "Pagbawi",
        "Buong refund bago matapos ang pag-download. Pagkatapos, ang pagbawi para sa pagbabago ng isip ay limitado (Korean E-Commerce Act art. 17(2))."
      ],
      [
        "Mga gastos sa pagbabalik",
        "Wala. Ang digital na nilalaman ay hindi ipinapadala."
      ]
    ],
    "refundContact": "Para sa mga refund o katanungan, makipag-ugnayan sa support desk o sa email address sa ibaba. Kung ang dokumento ay hindi kailanman ginawa, o ang halagang siningil ay naiiba mula sa order, ibabalik namin ito ng buo.",
    "pdfLanguageNotice": "Ang PDF ay lalabas sa parehong wika tulad ng screen na ito."
  },
  "footer": {
    "privacy": "Privacy",
    "terms": "Mga Tuntunin",
    "refund": "Refund",
    "pricing": "Presyo",
    "legalEntity": "Kompanya",
    "representative": "Kinatawan",
    "businessNumber": "Rehistro",
    "mailOrderNumber": "Online commerce",
    "address": "Address",
    "customerCenter": "Serbisyo sa kostumer",
    "email": "Email",
    "privacyOfficer": "Privacy officer",
    "hostingProvider": "Hosting",
    "providedBy": "Provided by",
    "effective": "Bisa mula",
    "backHome": "Bumalik sa simula"
  }
};
