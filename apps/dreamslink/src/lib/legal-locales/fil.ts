import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Dreams-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa pagbasa ng mga pangarap. Ang patakarang ito ay naglalarawan kung ano ang tinatanggap ng serbisyo, ano ang hindi iniwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Iniimbak",
      "paragraphs": [
        "Ang kwento ng pangarap na isinusulat mo para sa pagbasa ng pangarap, ang iyong nararamdaman sa paggising, at kung paulit-ulit mong napanaginipan ang parehong pangarap ay **hindi iniimbak saanman.** Ang mga ito ay ginagamit lamang sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito iniimbak sa hiwalay na file. Dahil walang proseso ng pagpaparehistro, ang mga input ay hindi nakakabit sa isang tiyak na tao.",
        "Ang kwento ng pangarap ay isa sa mga pinaka-personal na impormasyon na tinatanggap ng serbisyong ito. Kaya't wala itong tampok na muling pagkuha ng nakaraang mga resulta (pangarap na talaarawan) — dahil ang tampok na iyon ay nangangailangan ng patuloy na pag-iimbak ng isinulat na teksto."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta ng Link",
      "paragraphs": [
        "Ang address ng resulta ng screen ay naglalaman ng naka-encode na input. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta ng link, ang mga tala ng pag-access sa server ay naglalaman lamang ng landas ng address.",
        "Kung ibabahagi mo ang resulta ng link sa ibang tao, makikita rin nila ang parehong resulta. Dahil ang link mismo ay naglalaman ng input, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Impormasyon na Awtomatikong Nakokolekta",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang mga gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa pagpapatakbo ng web service ay awtomatikong naiwan ng tagapagbigay ng imprastruktura."
      ],
      "bullets": [
        "Pangkalahatang tala ng pag-access sa server tulad ng IP address, petsa at oras ng pag-access, uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito iniimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang subaybayan ang mga gumagamit.",
        "Sa kasalukuyan, walang mga advertisement na ipinapakita sa serbisyong ito. Kung sakaling maglagay ng mga advertisement sa hinaharap, maaaring gumamit ang mga tagapagbigay ng advertisement (hal. Google) ng cookies para sa paglalagay ng advertisement. Sa oras na iyon, babaguhin muna ang seksyong ito upang ipaalam kung ano ang nagbago."
      ]
    },
    {
      "heading": "5. Impormasyon na Iniimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Sa kasalukuyan, hindi nagbebenta ng mga bayad na produkto, kaya walang impormasyon na iniimbak na may kaugnayan sa pagbabayad.",
        "Kapag nagsimula na ang pagbebenta, ang mga sumusunod na item ay maiimbak para sa pagproseso ng pagbabayad at ayon sa mga batas sa pag-iimbak ng tala ng transaksyon. **Sa oras na iyon, ang isinulat mong pangarap at ang nilikhang file ay hindi iniimbak,** at hindi rin kami tumatanggap ng impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng beses na na-download ang dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (lokal, pandaigdig)",
        "Tagal ng pag-iimbak — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o hindi pagkakaunawaan ng mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay at Pagproseso ng Ikatlong Partido",
      "paragraphs": [
        "Dahil walang iniimbak na personal na impormasyon, walang personal na impormasyon na ibinibigay sa ikatlong partido.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa pagpapatakbo ng serbisyo, at sa prosesong ito, ang mga tala ng pag-access sa itaas na seksyon ay pinoproseso ayon sa patakaran ng nasabing negosyo.",
        "Kapag nagsimula na ang pagbebenta ng mga bayad na produkto, ang mga lokal na pagbabayad ay ipapasa sa Toss Payments, at ang mga pandaigdigang pagbabayad ay ipapasa sa PortOne (PayPal). Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at hindi ito natatanggap ng serbisyo."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil walang iniimbak na personal na impormasyon, walang dapat hilingin na suriin, ituwid, o tanggalin.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta ng link sa address bar ng browser.",
        "Kung may mga katanungan na may kaugnayan sa paggamit ng serbisyo, mangyaring ipaalam sa amin sa ibaba ng contact."
      ]
    },
    {
      "heading": "8. Personal na Impormasyon ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang at hindi kami kumokolekta ng personal na impormasyon mula sa mga bata."
      ]
    },
    {
      "heading": "9. Opisyal ng Proteksyon ng Personal na Impormasyon",
      "paragraphs": [
        "Opisyal ng proteksyon: {privacyOfficer}",
        "Contact: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Pagbabago ng Patakaran",
      "paragraphs": [
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga aktwal na nilalaman ng pagproseso ay nagbago, tulad ng paglalagay ng advertisement o pagsisimula ng pagbebenta ng mga bayad na produkto, ipapaalam muna ang mga pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d1 = {
  "title": "Mga Tuntunin ng Paggamit",
  "intro": "Ang mga tuntuning ito ay nagtatakda ng mga kondisyon para sa paggamit ng Dreams-Link (sa ibaba ay tinutukoy bilang \"serbisyo\"). Sa paggamit ng serbisyo, itinuturing na sumasang-ayon ka sa mga tuntuning ito.",
  "sections": [
    {
      "heading": "1. Kalikasan ng Serbisyo",
      "paragraphs": [
        "Ang serbisyo ay naghahanap ng mga simbolo mula sa mga pangarap na isinulat ng gumagamit at ipinapakita ang mga kahulugan na nauugnay sa mga simbolo bilang mga sanggunian. Sinasabi na hindi mahanap ang mga simbolo na wala sa diksyunaryo at hindi nag-iimbento ng mga kahulugan na wala.",
        "Ang mga simbolo at interpretasyon na ibinibigay ay **mga sanggunian mula sa tradisyonal na interpretasyon at hindi ito mga prediksyon tungkol sa hinaharap o mga medikal, pinansyal, o legal na payo.** Ang isang magandang pangarap ay hindi nangangahulugang may garantisadong mangyayari, at ang isang masamang pangarap ay hindi nangangahulugang may nakatakdang mangyari.",
        "**Ang mga resulta na may kaugnayan sa pangarap ng pagbubuntis (태몽) ay hindi nagtatakda ng katotohanan ng pagbubuntis o kasarian ng sanggol.** Ipinapaalam lamang ang katotohanan na ang mga simbolo na itinuturing na pangarap ng pagbubuntis ay lumabas sa pangarap at ang kanilang konteksto."
      ]
    },
    {
      "heading": "2. Bayad sa Paggamit",
      "paragraphs": [
        "Sa kasalukuyan, ang serbisyo ay ibinibigay nang libre at hindi kinakailangan ang pagpaparehistro.",
        "Kapag nagsimula na ang pagbebenta ng mga bayad na produkto (dream card na imahe, conception dream report (태몽) PDF), ang mga kondisyon sa ibaba sa seksyon 3 ay magiging naaangkop. Muli naming ipapaalam ang mga tuntuning ito bago simulan ang pagbebenta."
      ]
    },
    {
      "heading": "3. Mga Bayad na Produkto at Refund",
      "paragraphs": [
        "Mayroong **dalawang uri** ng mga bayad na produkto. Ang libreng interpretasyon ay maaaring gamitin nang walang bayad, at ang dalawang produktong ito ay ginawa upang mapanatili ang mga resulta sa isang anyo.",
        "**Dream card** — isang larawan na file. Ito ay naglalaman ng mga simbolo at tradisyonal na kahulugan mula sa pangarap na iyon. **Hindi ito dokumento (PDF).** Bayad sa loob ng bansa {priceCardDomestic} (kasama ang VAT), bayad sa ibang bansa {priceCardGlobal}.",
        "**Conception dream report (태몽) PDF** — 4 na pahina. Naglalaman ito ng tradisyonal na kahulugan ng mga simbolo at ang kanilang konteksto sa isang dokumento. **Hindi ito nagtatakda ng katotohanan ng pagbubuntis** — ipinapaalam lamang ang katotohanan na ang mga simbolo na itinuturing na pangarap ng pagbubuntis ay lumabas sa pangarap. Bayad sa loob ng bansa {priceConceptionDomestic} (kasama ang VAT), bayad sa ibang bansa {priceConceptionGlobal}.",
        "Ang mga bayad sa loob ng bansa ay maaaring gawin gamit ang Toss Payments sa pamamagitan ng credit/debit card at mga simpleng pagbabayad (Toss Pay, Kakao Pay, Naver Pay, Payco, atbp.), at ang mga bayad sa ibang bansa ay sa pamamagitan ng PayPal sa PortOne. Ang huling halaga ay nakabatay sa halaga na ipinapakita sa screen ng pagbabayad.",
        "**Ang serbisyo ay hindi nag-iimbak ng mga input ng gumagamit o ng mga nilikhang PDF file.** Kapag naaprubahan ang pagbabayad, agad na nilikha ang dokumento at walang naiwan sa server. Samakatuwid, ang na-download na file ay dapat itago ng gumagamit mismo.",
        "Kung ang pag-download ay naputol o nawala ang file, maaari itong ma-download muli ng **hanggang 5 beses** gamit ang parehong order. Gayunpaman, kung ang mga input ay nawala sa labas ng resulta na screen, hindi na ito maaaring muling likhain, kaya't mangyaring i-save ang file kaagad pagkatapos ng pagbabayad."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download pagkatapos ng pagbabayad,** maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pag-withdraw ng aplikasyon dahil sa simpleng pagbabago ng isip ay limitado. Ito ay isang digital na nilalaman na ibinibigay kaagad at hindi maibabalik, na tumutugma sa mga dahilan ng limitasyon sa pag-withdraw ng aplikasyon ayon sa Artikulo 17, Seksyon 2 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan.",
        "**Kung ang dokumento ay hindi nalikha dahil sa error sa sistema, o ang file ay hindi mabuksan, o ang halaga ng pagbabayad ay iba sa order,** ito ay ipoproseso bilang muling pag-isyu o buong refund.",
        "**Ang mga reklamo tungkol sa nilalaman ng resulta** ay hindi itinuturing na dahilan para sa refund. Ang mga resulta ng interpretasyon ay mga sanggunian mula sa tradisyonal na interpretasyon at ito ay ipinaalam bago ang pagbabayad (tingnan ang Seksyon 1 sa itaas).",
        "Ang mga muling pag-isyu na ginamit na ang lahat ng 5 beses ay hindi itinuturing na dahilan para sa refund.",
        "**Kung ang isang menor de edad ay nagbayad nang walang pahintulot ng kanyang legal na kinatawan,** ang sarili o ang legal na kinatawan ay maaaring kanselahin ang pagbabayad. Mangyaring ipaalam sa ibaba ng contact para sa refund."
      ]
    },
    {
      "heading": "4. Tungkol sa mga Resulta ng Interpretasyon",
      "paragraphs": [
        "Ang mga patakaran sa paghahanap ng simbolo ay sumusunod sa mga pampublikong diksyunaryo at mga nakatakdang pamamaraan, kaya't kung pareho ang isinulat, palaging pareho ang simbolo na lalabas.",
        "Mas kaunting simbolo ang lalabas kung mas maikli ang isinulat. Hindi mahanap ang mga simbolo na wala sa diksyunaryo, at sa mga pagkakataong iyon, ang resulta ay iiwanang blangko.",
        "Ang diksyunaryo ng simbolo ay isang pagsasaayos ng mga dokumento at mga kwentong bayan na naipasa, at maaaring magkaiba ang mga interpretasyon batay sa rehiyon at panahon."
      ]
    },
    {
      "heading": "5. Responsibilidad ng Gumagamit",
      "paragraphs": [
        "Maaaring isulat ng gumagamit ang mga pangarap ng ibang tao, ngunit hindi dapat gamitin ang mga resulta sa paraang makakapinsala sa ibang tao.",
        "Huwag gamitin ang mga resulta ng serbisyo bilang batayan para sa mga desisyon na nakakaapekto sa mga karapatan o interes ng tao tulad ng pagbubuntis, kalusugan, pamumuhunan, o pagkuha. Ang serbisyo ay hindi nilikha para sa mga ganitong layunin."
      ]
    },
    {
      "heading": "6. Mga Bawal na Gawain",
      "paragraphs": [
        "Ang mga sumusunod na gawain ay hindi pinapayagan."
      ],
      "bullets": [
        "Ang pagpapadala ng labis na mga kahilingan gamit ang mga automated na tool na nakakasagabal sa operasyon ng serbisyo",
        "Ang pagpapakita ng mga resulta ng serbisyo bilang mga katotohanan o mga resulta ng pagsusuri ng mga eksperto",
        "Ang pagkopya o pagbabago ng serbisyo upang magbigay ng katulad na serbisyo"
      ]
    },
    {
      "heading": "7. Pagsasawalang-bisa",
      "paragraphs": [
        "Ang serbisyo ay nagbibigay lamang ng mga sanggunian at hindi mananagot para sa mga desisyon at resulta na ginawa ng gumagamit batay sa mga resulta.",
        "Hindi kami mananagot para sa anumang pinsala na dulot ng hindi maiiwasang mga dahilan tulad ng mga natural na sakuna o mga pagkukulang ng mga tagapagbigay ng imprastruktura na nagdudulot ng pagkaantala sa serbisyo."
      ]
    },
    {
      "heading": "8. Karapatan sa Intelektwal na Ari-arian",
      "paragraphs": [
        "Ang mga karapatan sa mga screen ng serbisyo, mga teksto, at mga implementasyon ng mga patakaran sa pagkalkula ay pagmamay-ari ng operator. Maaaring i-save o ibahagi ng gumagamit ang mga resulta para sa personal na layunin."
      ]
    },
    {
      "heading": "9. Pagbabago ng Tuntunin at Batas na Nagsasaad",
      "paragraphs": [
        "Kung may pagbabago sa mga tuntunin, ito ay ipo-post sa pahinang ito kasama ang petsa ng pagsisimula.",
        "Ang mga tuntuning ito ay napapailalim sa batas ng Republika ng Korea, at ang mga hidwaan na may kaugnayan sa paggamit ng serbisyo ay susunod sa mga pamamaraan na itinakda ng mga kaugnay na batas."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d2 = {
  "title": "Patakaran sa Refund at Pagkansela",
  "intro": "Ito ang mga pamantayan para sa pagkansela at refund ng mga bayad na produkto. Inilagay namin dito ang mga nilalaman mula sa Artikulo 3 ng mga tuntunin.",
  "sections": [
    {
      "heading": "1. Kalikasan ng Produkto",
      "paragraphs": [
        "Ang mga ibinibentang produkto ay **dream card (isang larawan)** at **conception dream (태몽) report** na PDF, at pareho itong digital na nilalaman na agad na nilikha at ipinapadala sa sandaling maaprubahan ang pagbabayad.",
        "**Hindi nag-iimbak ang serbisyo ng mga pangarap na isinulat mo o ng mga nilikhang file.** Kaya't ang na-download na file ay dapat itago ng gumagamit mismo."
      ]
    },
    {
      "heading": "2. Pagbawi ng Alok",
      "paragraphs": [
        "Sinasalamin nito ang mga pamantayan na itinakda ng Batas sa Elektronikong Kalakalan."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download,** maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pagbawi ng alok dahil sa simpleng pagbabago ng isip ay limitado. Ito ay digital na nilalaman na ibinibigay agad at hindi na maibabalik, na tumutugma sa mga dahilan ng limitasyon na itinakda sa Artikulo 17, Seksyon 2 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan. Inihahayag ito sa screen ng pagbabayad at humihingi ng pahintulot."
      ]
    },
    {
      "heading": "3. Mga Kasong Buong Refund",
      "paragraphs": [
        "Sa mga sumusunod na kaso, ang mga dahilan ay susuriin at maaaring iproseso ang muling pag-isyu o buong refund."
      ],
      "bullets": [
        "Kung ang file ay hindi nalikha dahil sa error sa sistema",
        "Kung ang na-download na file ay hindi mabuksan",
        "Kung ang halaga ng pagbabayad ay iba sa order",
        "**Kung ang menor de edad ay nagbayad nang walang pahintulot ng legal na kinatawan** — Maaaring humiling ng pagkansela ang nagbayad o ang legal na kinatawan."
      ]
    },
    {
      "heading": "4. Mga Kasong Hindi Refundable",
      "paragraphs": [],
      "bullets": [
        "**Hindi pagkakaunawaan sa nilalaman ng resulta.** Ang mga resulta ng interpretasyon ay mga sanggunian mula sa tradisyonal na pananaw at ito ay ipinaalam bago ang pagbabayad. Kasama rito ang mga kaso kung saan hindi natagpuan ang mga simbolo na nasa pangarap, kaya't maikli ang resulta — hindi kami bumubuo ng mga di-umiiral na kahulugan.",
        "Mga muling kahilingan matapos gamitin ang lahat ng 5 pagkakataon para sa muling pag-isyu."
      ]
    },
    {
      "heading": "5. Paraan ng Pagsusumite",
      "paragraphs": [
        "Mangyaring isumite ang mga kahilingan para sa refund o mga katanungan sa customer center ({customerCenter}) o sa email ({email}). Kung maibabahagi mo ang numero ng order, mas mabilis ang pag-verify.",
        "Ang refund ay ibabalik sa paraan ng pagbabayad na ginamit, at maaaring tumagal ng 3-7 araw ng negosyo para maipakita ito batay sa mga patakaran ng card issuer o payment provider."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d3 = {
  "title": "Impormasyon sa Presyo",
  "intro": "Ipinapahayag ang saklaw ng mga libreng serbisyo at ang mga presyo ng bayad na produkto.",
  "sections": [
    {
      "heading": "1. Libre",
      "paragraphs": [
        "**Ang pagsusuri ng mga pangarap at pagtingin sa mga resulta ay libre.** Hindi kinakailangan ang pagpaparehistro.",
        "Maaari mong makita ang mga simbolo na natagpuan sa iyong pangarap at ang mga kahulugan na dala ng mga simbolong iyon, pati na rin ang mga bagay na tinutukoy ng mga simbolo sa screen. Dahil ang mga pangarap ay araw-araw na nangyayari, walang limitasyon sa paggamit ng serbisyong ito."
      ]
    },
    {
      "heading": "2. Dream Card (bayad)",
      "paragraphs": [
        "Bayad sa loob ng bansa {priceCardDomestic} (kasama ang buwis) · Bayad sa ibang bansa {priceCardGlobal}",
        "Ipinapahayag namin ang mga resulta sa **isang larawan**. Ito ay nasa anyo na madaling itago o ipadala, at **hindi ito isang PDF na dokumento.**",
        "Maaari mong i-download muli ang parehong order ng **hanggang 5 beses.** Gayunpaman, kung mawala ang mga input na halaga sa labas ng resulta ng screen, hindi na ito maibabalik, kaya't mangyaring i-save ang file kaagad pagkatapos ng pagbabayad."
      ]
    },
    {
      "heading": "3. Conception Dream Report PDF (bayad)",
      "paragraphs": [
        "Bayad sa loob ng bansa {priceConceptionDomestic} (kasama ang buwis) · Bayad sa ibang bansa {priceConceptionGlobal}",
        "Kapag may simbolo na tradisyonal na itinuturing na isang conception dream (태몽), isasaayos namin ang kahulugan ng simbolo at ang background na dala nito sa isang 4-pahinang PDF. **Hindi ito nagtatakda ng katotohanan ng pagbubuntis o kasarian ng sanggol.**",
        "Ang mga kondisyon para sa muling pag-isyu ay katulad ng sa dream card."
      ]
    },
    {
      "heading": "4. Paraan ng Pagbabayad",
      "paragraphs": [
        "**Sa loob ng bansa** — Maaari mong gamitin ang mga credit/debit card at mga simpleng pagbabayad (Toss Pay, Kakao Pay, Naver Pay, Payco, atbp.) sa pamamagitan ng Toss Payments.",
        "**Sa ibang bansa** — Maaari kang magbayad gamit ang PayPal sa pamamagitan ng PortOne.",
        "Ang huling halaga ng pagbabayad ay nakabatay sa halagang ipinapakita sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "5. Pagbabago ng Presyo",
      "paragraphs": [
        "Kung may pagbabago sa presyo, ito ay unang ipapaskil sa pahinang ito. Ang mga nagawang order na ay hindi maaapektuhan ng binagong presyo."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d4 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Dreams-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa pagbasa ng mga pangarap. Ang patakarang ito ay naglalarawan kung ano ang tinatanggap ng serbisyo, ano ang hindi iniwan, at ano ang awtomatikong naitatala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang kwento ng pangarap na isinusulat mo para sa pagbasa ng pangarap, ang iyong nararamdaman sa paggising, at kung ikaw ay paulit-ulit na nananaginip ng parehong pangarap ay **hindi nakaimbak kahit saan.** Ito ay ginagamit lamang sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito iniimbak sa hiwalay na file. Dahil walang proseso ng pagpaparehistro, ang mga input ay hindi konektado sa isang tiyak na tao.",
        "Ang kwento ng pangarap ay isa sa mga pinaka-personal na impormasyon na tinatanggap ng serbisyong ito. Kaya't wala kaming tampok na muling pagtingin sa mga nakaraang resulta (pangarap na talaarawan) — dahil ang tampok na iyon ay nangangailangan ng patuloy na pag-iimbak ng mga isinulat na teksto."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta na Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng naka-encode na input. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa mga tala ng server ay ang landas ng address.",
        "Kung ibabahagi mo ang resulta na link sa ibang tao, makikita rin nila ang parehong resulta. Dahil ang link mismo ay naglalaman ng input, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang mga gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa pagpapatakbo ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang mga tala ng server access tulad ng IP address, petsa at oras ng pag-access, uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito iniimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang mga gumagamit. Ang kwento ng pangarap na iyong isinusulat ay hindi ipinapasa sa mga advertiser.",
        "Ang serbisyong ito ay naglalathala ng mga ad sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga sumusunod na bagay ay nangyayari."
      ],
      "bullets": [
        "Ang mga third-party na provider, kasama ang Google, ay maaaring mag-imbak o magbasa ng cookies sa browser ng gumagamit.",
        "Gumagamit ang Google ng cookies batay sa mga tala ng pagbisita sa site na ito at iba pang mga site upang mag-publish ng mga ad.",
        "Maaaring i-disable ng gumagamit ang mga personalized na ad sa mga setting ng ad ng Google (google.com/settings/ads). Kahit na i-disable ito, ang mga ad ay patuloy na ipapakita, ngunit ang kaugnayan sa gumagamit ay mababawasan.",
        "Ang mga personalized na ad mula sa lahat ng third-party na provider ay maaaring i-disable nang sabay-sabay sa aboutads.info/choices.",
        "Mayroon ding paraan upang i-block ang cookies sa mga setting ng browser.",
        "Para sa mga gumagamit sa European Economic Area, UK, at Switzerland, unang hihingin ang pahintulot para sa paggamit ng advertising cookies."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Sa kasalukuyan, hindi kami nagbebenta ng mga bayad na produkto, kaya walang impormasyon na nakaimbak na may kaugnayan sa pagbabayad.",
        "Kapag nagsimula na ang pagbebenta, ang mga sumusunod na item ay maiimbak para sa pagproseso ng pagbabayad at pag-iimbak ng mga tala ng transaksyon ayon sa batas. **Sa oras na iyon, ang iyong isinulat na pangarap at ang nabuo na file ay hindi nakaimbak,** at hindi rin kami tumatanggap ng impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng pag-download ng dokumento, oras ng pag-order",
        "Wika ng screen sa oras ng pag-order at pagkakaiba ng lokasyon ng pagbabayad (domestic, international)",
        "Tagal ng pag-iimbak — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o pagtatalo ng mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay at Pagproseso ng Ikatlong Partido",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang personal na impormasyon na ibinibigay sa mga third-party.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa pagpapatakbo ng serbisyo, at sa prosesong ito, ang mga tala ng pag-access mula sa itaas na seksyon ay pinoproseso ayon sa patakaran ng nasabing negosyo.",
        "Kapag nagsimula na ang pagbebenta ng mga bayad na produkto, ang domestic na pagbabayad ay ipinagkakatiwala sa Toss Payments, at ang international na pagbabayad ay ipinagkakatiwala sa PortOne (PayPal). Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at hindi ito natatanggap ng serbisyo."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang dapat hilingin na suriin, ituwid, o tanggalin.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan ng pagtanggal ng resulta na link sa address bar ng browser.",
        "Kung may mga katanungan na may kaugnayan sa paggamit ng serbisyo, mangyaring ipaalam sa amin sa ibaba ng contact."
      ]
    },
    {
      "heading": "8. Personal na Impormasyon ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang, at hindi kami nangangalap ng personal na impormasyon mula sa mga bata."
      ]
    },
    {
      "heading": "9. Opisyal ng Proteksyon ng Personal na Impormasyon",
      "paragraphs": [
        "Opisyal ng proteksyon: {privacyOfficer}",
        "Contact: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Pagbabago ng Patakaran",
      "paragraphs": [
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagpapatupad at mga nilalaman ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga nilalaman ng pagproseso ay talagang nagbabago, tulad ng pagsisimula ng paglalathala ng mga ad o pagbebenta ng mga bayad na produkto, ipapaalam muna ang pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d5 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Dreams-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa pagbasa ng mga pangarap. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, ano ang hindi nito iniwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang kwento ng pangarap na isinusulat mo para sa pagbasa ng pangarap, ang iyong nararamdaman sa paggising, at kung ikaw ay paulit-ulit na nananaginip ng parehong pangarap ay **hindi nakaimbak kahit saan.** Ang mga ito ay ginagamit lamang sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito naiwan sa hiwalay na file. Dahil walang proseso ng pagpaparehistro, ang mga input ay hindi nakakabit sa isang tiyak na tao.",
        "Ang kwento ng pangarap ay isa sa mga pinaka-pribadong impormasyon na natatanggap ng serbisyong ito. Kaya't wala kaming tampok na muling pagkuha ng nakaraang resulta (pangarap na talaarawan) — dahil ang tampok na iyon ay nangangailangan ng patuloy na pag-iimbak ng isinulat na teksto."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta na Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng naka-encode na input. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa server access record ay ang path ng address.",
        "Kung ibabahagi mo ang resulta na link sa ibang tao, makikita rin nila ang parehong resulta. Dahil ang link mismo ay naglalaman ng input, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang mga gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa pagpapatakbo ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang server access record tulad ng IP address, petsa ng pag-access, uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito para awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang subaybayan ang mga gumagamit.",
        "Sa kasalukuyan, walang mga advertisement na ipinapakita sa serbisyong ito. Kung sakaling maglagay ng mga advertisement sa hinaharap, maaaring gumamit ang mga provider ng advertisement (hal. Google) ng cookies para sa paglalagay ng advertisement. Sa mga pagkakataong iyon, unang babaguhin ang seksyong ito upang ipahayag kung ano ang nagbago bago simulan."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Kapag nagbayad para sa mga bayad na produkto (dream card, conception dream report), ang impormasyon ng order ay nakaimbak para sa pagproseso ng pagbabayad at ayon sa mga batas na nag-uutos ng pag-iimbak ng mga tala ng transaksyon.",
        "**Ang isinulat mong pangarap at ang nilikhang file ay hindi nakaimbak kahit na nagbayad.** Ang prinsipyo sa itaas na seksyon 1 ay nananatiling pareho, hindi alintana ang pagbabayad. Ang mga nakaimbak na item ay ang mga sumusunod, at hindi kasama ang impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng beses na na-download ang dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (domestic, international)",
        "Tagal ng pag-iimbak — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o pagtatalo ng mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay sa Ikatlong Partido at Pagsasagawa ng Pagproseso",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng personal na impormasyon na makikilala ang mga gumagamit, wala ring personal na impormasyon na ibinibigay sa ikatlong partido. Ang pagproseso ng pagbabayad ay ipinagkakatiwala sa mga sumusunod na negosyo.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa pagpapatakbo ng serbisyo, at sa prosesong ito, ang mga access record mula sa itaas na seksyon 3 ay pinoproseso ayon sa patakaran ng nasabing negosyo.",
        "Ang domestic na pagbabayad ay pinoproseso ng Toss Payments, habang ang international na pagbabayad ay pinoproseso ng PayPal sa pamamagitan ng PortOne. Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at ang serbisyo ay hindi tumatanggap o nag-iimbak ng mga ito."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil hindi nakaimbak ang isinulat mong pangarap, walang dapat hilingin para sa pag-access, pagwawasto, o pagtanggal. Ang natitirang tala ng order mula sa pagbabayad ay may obligasyong itago ayon sa itinakdang panahon ng batas, kaya hindi ito maaaring tanggalin sa loob ng panahong iyon, at itatapon ito pagkatapos ng panahong iyon.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta na link sa address bar ng browser.",
        "Kung may mga katanungan kaugnay ng paggamit ng serbisyo, mangyaring ipaalam sa amin sa ibaba ng contact."
      ]
    },
    {
      "heading": "8. Personal na Impormasyon ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang at hindi nangangalap ng personal na impormasyon mula sa mga bata."
      ]
    },
    {
      "heading": "9. Opisyal na Responsable sa Proteksyon ng Impormasyon",
      "paragraphs": [
        "Opisyal na Responsable: {privacyOfficer}",
        "Contact: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Pagbabago ng Patakaran",
      "paragraphs": [
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga pagbabago ay talagang nagbabago sa nilalaman ng pagproseso tulad ng paglalagay ng advertisement o pagbebenta ng bayad na produkto, ipapaalam muna ang mga pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d6 = {
  "title": "Mga Tuntunin ng Paggamit",
  "intro": "Ang mga tuntuning ito ay nagtatakda ng mga kondisyon para sa paggamit ng Dreams-Link (sa ibaba ay tinutukoy bilang \"serbisyo\"). Sa paggamit ng serbisyo, itinuturing na ikaw ay sumasang-ayon sa mga tuntuning ito.",
  "sections": [
    {
      "heading": "1. Kalikasan ng Serbisyo",
      "paragraphs": [
        "Ang serbisyo ay naghahanap ng mga simbolo mula sa mga pangarap na isinulat ng gumagamit at ipinapakita ang mga kahulugan na nauugnay sa mga simbolo bilang mga sanggunian. Sinasabi nitong hindi makakahanap ng mga simbolo na wala sa diksyunaryo at hindi ito bumubuo ng mga kahulugan na hindi umiiral.",
        "Ang mga simbolo at interpretasyon na ibinibigay ay **mga sanggunian mula sa tradisyonal na pananaw ng interpretasyon at hindi ito mga prediksyon tungkol sa hinaharap o mga medikal, pinansyal, o legal na payo.** Ang magandang pangarap ay hindi nangangahulugang may tiyak na mangyayari, at ang masamang pangarap ay hindi nangangahulugang may tiyak na mangyayari rin.",
        "**Ang mga resulta na may kaugnayan sa pangarap ng pagbubuntis (태몽) ay hindi nagtatakda ng katotohanan ng pagbubuntis o kasarian ng sanggol.** Ipinapaalam lamang nito ang katotohanan na may mga simbolo na tradisyonal na itinuturing na pangarap ng pagbubuntis at ang kanilang konteksto."
      ]
    },
    {
      "heading": "2. Bayad sa Paggamit",
      "paragraphs": [
        "Ang pag-access sa interpretasyon ng pangarap at pagtingin sa mga resulta ay libre at hindi kinakailangan ang pagpaparehistro.",
        "Ang pagtanggap ng mga resulta bilang dream card (isang imahe) o conception-dream report (PDF) ay may bayad. Ang mga presyo at kondisyon ay nakasaad sa ibaba sa Seksyon 3 at sa pahina ng pagbabayad."
      ]
    },
    {
      "heading": "3. Mga Bayad na Produkto at Refund",
      "paragraphs": [
        "Mayroong **dalawang** bayad na produkto na ibinibigay. Ang libreng interpretasyon ay maaaring gamitin nang walang bayad, at ang dalawang produktong ito ay naglalaman ng mga resulta na maaaring itago.",
        "**Dream card** — Isang imahe na file. Ito ay isang larawan na naglalaman ng mga simbolo mula sa pangarap na iyon at ang tradisyonal na kahulugan. **Hindi ito dokumento (PDF).** Bayad sa loob ng bansa {priceCardDomestic} (kasama ang VAT), bayad sa ibang bansa {priceCardGlobal}.",
        "**Conception-dream report PDF** — 4 na pahina. Naglalaman ito ng tradisyonal na kahulugan ng mga simbolo at ang kanilang konteksto. **Hindi ito nagtatakda ng katotohanan ng pagbubuntis** — ipinapaalam lamang nito na ang mga simbolo na tradisyonal na itinuturing na pangarap ng pagbubuntis ay lumabas sa pangarap. Bayad sa loob ng bansa {priceConceptionDomestic} (kasama ang VAT), bayad sa ibang bansa {priceConceptionGlobal}.",
        "Ang mga bayad sa loob ng bansa ay maaaring gawin gamit ang Toss Payments sa pamamagitan ng credit/debit card at mga simpleng pagbabayad (Toss Pay, Kakao Pay, Naver Pay, Payco, atbp.), at ang mga bayad sa ibang bansa ay sa pamamagitan ng PayPal sa PortOne. Ang huling halaga ay nakabatay sa halaga na ipinapakita sa pahina ng pagbabayad.",
        "**Ang serbisyo ay hindi nag-iimbak ng mga input ng gumagamit o ng mga nilikhang PDF file.** Kapag naaprubahan ang pagbabayad, agad na nililikha ang dokumento at walang natitirang impormasyon sa server. Samakatuwid, ang na-download na file ay dapat itago ng gumagamit mismo.",
        "Kung ang pag-download ay naputol o ang file ay nawala, maaari itong ma-download muli ng **hanggang 5 beses** gamit ang parehong order. Gayunpaman, kung ang mga input ay nawala sa labas ng resulta na pahina, hindi na ito maaaring muling likhain, kaya't mangyaring i-save ang file kaagad pagkatapos ng pagbabayad."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download pagkatapos ng pagbabayad,** maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pag-withdraw ng aplikasyon dahil sa simpleng pagbabago ng isip ay limitado. Ito ay digital na nilalaman na ibinibigay agad at hindi maibabalik, na tumutugma sa mga dahilan ng limitasyon ng pag-withdraw ng aplikasyon ayon sa Artikulo 17, Seksyon 2 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan.",
        "**Kung ang dokumento ay hindi nalikha dahil sa error ng sistema, o ang file ay hindi mabuksan, o ang halaga ng pagbabayad ay iba sa order,** ito ay ipoproseso bilang muling pag-isyu o buong refund.",
        "**Ang mga reklamo tungkol sa nilalaman ng resulta** ay hindi itinuturing na dahilan para sa refund. Ang mga resulta ng interpretasyon ay mga sanggunian mula sa tradisyonal na pananaw ng interpretasyon at ito ay ipinaalam bago ang pagbabayad (tingnan ang Seksyon 1).",
        "Ang mga muling pag-isyu na ginamit na ang 5 beses ay hindi itinuturing na dahilan para sa refund.",
        "**Kung ang isang menor de edad ay nagbayad nang walang pahintulot ng legal na kinatawan,** maaaring kanselahin ng sarili o ng legal na kinatawan ang pagbabayad. Mangyaring ipaalam sa ibaba ng contact para sa refund."
      ]
    },
    {
      "heading": "4. Tungkol sa mga Resulta ng Interpretasyon",
      "paragraphs": [
        "Ang mga patakaran sa paghahanap ng simbolo ay sumusunod sa mga pampublikong diksyunaryo at mga nakatakdang pamamaraan, kaya't kung isusulat mo ang parehong teksto, palaging lalabas ang parehong simbolo.",
        "Kung mas maikli ang iyong isinulat, mas kaunti ang mga simbolo na lalabas. Hindi makakahanap ng mga simbolo na wala sa diksyunaryo, at sa mga pagkakataong iyon, iiwanang walang laman ang resulta.",
        "Ang diksyunaryo ng simbolo ay isang pagsasaayos ng mga dokumento at mga kwentong naipasa mula sa nakaraan, at maaaring magkaiba ang mga interpretasyon batay sa rehiyon at panahon."
      ]
    },
    {
      "heading": "5. Responsibilidad ng Gumagamit",
      "paragraphs": [
        "Maaaring isulat ng gumagamit ang mga pangarap ng ibang tao, ngunit hindi ito dapat gamitin sa paraang makakapinsala sa ibang tao.",
        "Huwag gamitin ang mga resulta ng serbisyo bilang batayan para sa mga desisyon na nakakaapekto sa mga karapatan o interes ng tao tulad ng pagbubuntis, kalusugan, pamumuhunan, o pagkuha. Ang serbisyo ay hindi nilikha para sa mga ganitong layunin."
      ]
    },
    {
      "heading": "6. Bawal na Gawain",
      "paragraphs": [
        "Ang mga sumusunod na gawain ay hindi pinapayagan."
      ],
      "bullets": [
        "Ang pagpapadala ng labis na mga kahilingan gamit ang mga automated na tool na nakakasagabal sa operasyon ng serbisyo",
        "Ang pagpapakita ng mga resulta ng serbisyo bilang mga katotohanan o mga resulta ng pagsusuri ng eksperto",
        "Ang pagkopya o pagbabago ng serbisyo upang magbigay ng parehong serbisyo"
      ]
    },
    {
      "heading": "7. Pagsasawalang-bisa",
      "paragraphs": [
        "Ang serbisyo ay nagbibigay lamang ng mga sanggunian at hindi mananagot para sa mga desisyon at resulta na ginawa ng gumagamit batay sa mga resulta.",
        "Sa mga kaso ng pagkaantala ng serbisyo dahil sa mga hindi mapipigilang dahilan tulad ng mga natural na kalamidad o mga pagkukulang ng tagapagbigay ng imprastruktura, hindi kami mananagot para sa mga pinsalang dulot nito."
      ]
    },
    {
      "heading": "8. Karapatan sa Intelektwal na Ari-arian",
      "paragraphs": [
        "Ang mga karapatan sa mga screen ng serbisyo, mga teksto, at mga implementasyon ng mga patakaran sa pagkalkula ay pagmamay-ari ng operator. Maaaring i-save o ibahagi ng gumagamit ang mga resulta para sa personal na layunin."
      ]
    },
    {
      "heading": "9. Pagbabago ng Tuntunin at Batas na Namamahala",
      "paragraphs": [
        "Kung may pagbabago sa mga tuntunin, ito ay ipo-post sa pahinang ito kasama ang petsa ng pagsisimula.",
        "Ang mga tuntuning ito ay napapailalim sa batas ng Republika ng Korea, at ang mga hidwaan na may kaugnayan sa paggamit ng serbisyo ay susunod sa mga pamamaraan na itinakda ng mga kaugnay na batas."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d7 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Dreams-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa pagbasa ng mga pangarap. Ang patakarang ito ay naglalarawan kung ano ang tinatanggap ng serbisyo, ano ang hindi iniwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang kwento ng pangarap na isinusulat mo para sa pagbasa ng pangarap, ang iyong nararamdaman sa paggising, at kung ikaw ay paulit-ulit na nananaginip ng parehong pangarap ay **hindi nakaimbak kahit saan.** Ang mga ito ay ginagamit lamang sa server memory habang pinoproseso ang iyong kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito naiwan sa hiwalay na file. Dahil walang proseso ng pagpaparehistro, ang mga input ay hindi konektado sa isang tiyak na tao.",
        "Ang kwento ng pangarap ay isa sa mga pinaka-pribadong impormasyon na tinatanggap ng serbisyong ito. Kaya't wala kaming tampok na muling pagkuha ng mga nakaraang resulta (pangarap na talaarawan) — dahil ang tampok na iyon ay nangangailangan ng patuloy na pag-iimbak ng mga isinulat na teksto."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta ng Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng naka-encode na input. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa mga tala ng server ay ang landas ng address.",
        "Kung ibabahagi mo ang resulta na link sa ibang tao, makikita rin nila ang parehong resulta. Dahil ang link mismo ay naglalaman ng input, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang mga gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa operasyon ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang mga tala ng pag-access sa server tulad ng IP address, petsa at oras ng pag-access, at uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito iniimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang mga gumagamit. Ang kwento ng pangarap na iyong isinusulat ay hindi ipinapasa sa mga advertiser.",
        "Ang serbisyong ito ay naglalathala ng mga ad sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga sumusunod na bagay ay nangyayari."
      ],
      "bullets": [
        "Ang mga third-party na provider, kasama ang Google, ay maaaring mag-imbak o magbasa ng cookies sa browser ng gumagamit.",
        "Gumagamit ang Google ng cookies batay sa mga tala ng pagbisita sa site na ito at iba pang mga site upang magpakita ng mga ad.",
        "Maaaring i-disable ng gumagamit ang mga personalized na ad sa mga setting ng ad ng Google (google.com/settings/ads). Kahit na i-disable ito, ang mga ad ay patuloy na ipapakita, ngunit ang kaugnayan sa gumagamit ay mababawasan.",
        "Ang mga personalized na ad mula sa mga third-party na provider ay maaaring i-disable nang sabay-sabay sa aboutads.info/choices.",
        "Mayroon ding paraan upang i-block ang cookies sa mga setting ng browser.",
        "Para sa mga gumagamit mula sa European Economic Area, UK, at Switzerland, unang hihingin ang pahintulot para sa paggamit ng advertising cookies."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Kapag nagbayad para sa mga bayad na produkto (dream card, conception dream report), ang impormasyon ng order ay nakaimbak para sa pagproseso ng pagbabayad at pag-iimbak ng mga tala ng transaksyon ayon sa mga batas.",
        "**Ang kwento ng pangarap na iyong isinusulat at ang nilikhang file ay hindi nakaimbak kahit na nagbayad ka.** Ang prinsipyo sa itaas ay nananatiling pareho anuman ang katayuan ng pagbabayad. Ang mga nakaimbak na item ay ang mga sumusunod, at hindi kasama ang impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at katayuan ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, katayuan ng pagproseso, bilang ng beses na na-download ang dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (lokal, pandaigdig)",
        "Tagal ng pag-iimbak — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o pagtatalo ng mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagsusumite sa Ikatlong Partido at Pagkakaloob ng Serbisyo",
      "paragraphs": [
        "Dahil hindi kami nag-iimbak ng personal na impormasyon na makikilala ang gumagamit, wala ring personal na impormasyon na ibinibigay sa mga third-party. Ang pagproseso ng pagbabayad ay ipinagkakatiwala sa mga sumusunod na provider.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa operasyon ng serbisyo, at sa prosesong ito, ang mga tala ng pag-access sa itaas ay pinoproseso ayon sa patakaran ng provider.",
        "Ang mga lokal na pagbabayad ay pinoproseso ng Toss Payments, habang ang mga pandaigdigang pagbabayad ay pinoproseso ng PayPal sa pamamagitan ng PortOne. Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga provider na ito, at ang serbisyo ay hindi tumatanggap o nag-iimbak nito."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil hindi kami nag-iimbak ng iyong kwento ng pangarap, walang dapat hilingin na pag-access, pagwawasto, o pagtanggal. Ang mga natitirang tala ng order mula sa pagbabayad ay may obligasyong itago sa loob ng panahon na itinakda ng batas, kaya hindi ito maaaring tanggalin sa loob ng panahong iyon, at pagkatapos ng panahong iyon ay itatapon.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta na link sa address bar ng browser.",
        "Kung may mga katanungan kaugnay ng paggamit ng serbisyo, mangyaring ipaalam sa amin sa ibaba ng contact."
      ]
    },
    {
      "heading": "8. Personal na Impormasyon ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang at hindi kami nangangalap ng personal na impormasyon mula sa mga bata."
      ]
    },
    {
      "heading": "9. Opisyal ng Proteksyon ng Personal na Impormasyon",
      "paragraphs": [
        "Opisyal ng proteksyon: {privacyOfficer}",
        "Contact: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Pagbabago ng Patakaran",
      "paragraphs": [
        "Kung may mga pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung may mga aktwal na pagbabago sa mga nilalaman ng pagproseso tulad ng pagsisimula ng paglalathala ng mga ad o pagbebenta ng mga bayad na produkto, ipapaalam muna ang mga pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

export const fil: LegalLocaleDocuments = {
  a0p0: {
    privacy: d0,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a1p0: {
    privacy: d4,
    terms: d1,
    refund: d2,
    pricing: d3,
  },
  a0p1: {
    privacy: d5,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
  a1p1: {
    privacy: d7,
    terms: d6,
    refund: d2,
    pricing: d3,
  },
};
