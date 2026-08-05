import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (사주) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, ano ang hindi iniwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pag-input para sa saju (사주) na pagbasa ay **hindi nakaimbak kahit saan.** Ginagamit lamang ito sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database at hindi rin iniimbak sa hiwalay na file. Dahil walang proseso ng pagpaparehistro, ang mga input na halaga ay hindi nakakabit sa anumang partikular na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta ng Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng mga input na halaga na naka-encode. Gayunpaman, ang halagang ito ay nasa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa mga tala ng server ay ang path ng address.",
        "Kung ibabahagi ang resulta na link sa ibang tao, makikita rin nila ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga input na halaga, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa pagpapatakbo ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang mga tala ng pag-access sa server tulad ng IP address, petsa at oras ng pag-access, at uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito iniimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang subaybayan ang mga gumagamit.",
        "Sa kasalukuyan, walang mga advertisement na ipinapakita sa serbisyong ito. Kung sakaling maglagay ng mga advertisement sa hinaharap, ang mga provider ng advertisement (hal. Google) ay maaaring gumamit ng cookies para sa paglalagay ng advertisement. Sa oras na iyon, ang seksyon na ito ay unang babaguhin upang ipahayag kung ano ang nagbago bago ito simulan."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Pagbabayad",
      "paragraphs": [
        "Sa kasalukuyan, hindi kami nagbebenta ng mga bayad na produkto, kaya walang impormasyon na nakaimbak na may kaugnayan sa pagbabayad.",
        "Kapag nagsimula na ang pagbebenta, ang mga sumusunod na item ay maiimbak para sa pagproseso ng pagbabayad at ayon sa mga batas sa pag-iimbak ng tala ng transaksyon. **Sa oras na iyon, ang mga input na halaga para sa saju (사주) na pagbasa at ang nalikhang PDF ay hindi nakaimbak,** at hindi rin kami tumatanggap ng impormasyon na makikilala ang gumagamit tulad ng pangalan, contact number, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng pag-download ng dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (domestiko, pandaigdig)",
        "Tagal ng pag-iimbak — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o hindi pagkakaunawaan ng mamimili ay itinatago sa loob ng 3 taon bago ito sirain."
      ]
    },
    {
      "heading": "6. Pagbibigay at Pagproseso ng Ikatlong Partido",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang personal na impormasyon na ibinibigay sa ikatlong partido.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa pagpapatakbo ng serbisyo, at sa prosesong ito, ang mga tala ng pag-access mula sa Seksyon 3 ay pinoproseso ayon sa patakaran ng nasabing negosyo.",
        "Kapag nagsimula na ang pagbebenta ng mga bayad na produkto, ang mga domestic na pagbabayad ay ipapasa sa Toss Payments, at ang mga international na pagbabayad ay ipapasa sa PortOne (PayPal). Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at hindi ito natatanggap ng serbisyo."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang maaaring hilingin na suriin, ituwid, o burahin.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta na link sa address bar ng browser.",
        "Kung may mga katanungan na may kaugnayan sa paggamit ng serbisyo, mangyaring ipaalam sa amin sa ibaba ng contact."
      ]
    },
    {
      "heading": "8. Personal na Impormasyon ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang at hindi kami kumukuha ng personal na impormasyon mula sa mga bata."
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
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga aktwal na nilalaman ng pagproseso ay nagbago, tulad ng paglalagay ng advertisement o pagsisimula ng pagbebenta ng mga bayad na produkto, ipapaalam muna ang pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d1 = {
  "title": "Mga Tuntunin ng Paggamit",
  "intro": "Ang mga tuntuning ito ay nagtatakda ng mga kondisyon para sa paggamit ng Saju-Link (sa ibaba ay tinutukoy bilang \"serbisyo\"). Sa paggamit ng serbisyo, itinuturing na ikaw ay sumasang-ayon sa mga tuntuning ito.",
  "effectiveLabel": "Petsa ng Pagpapatupad",
  "sections": [
    {
      "heading": "1. Katangian ng Serbisyo",
      "paragraphs": [
        "Ang serbisyo ay nag-aaplay ng mga patakaran ng tradisyonal na myongri (saju) batay sa ipinapasok na petsa ng kapanganakan at oras ng kapanganakan upang ipakita ang natal chart ng saju at ang lakas ng limang elemento, ang lakas at kahinaan ng araw, at ang mga sanggunian mula sa araw na iyon at ang lokasyon kung saan nakatagpo ang natal chart.",
        "Ang mga ibinigay na marka at paliwanag ay **mga sanggunian mula sa tradisyonal na astrological na pananaw at hindi isang siyentipikong prediksyon o katiyakan tungkol sa hinaharap, kalusugan, o yaman ng isang tao.** Ang mababang marka ay hindi nangangahulugang masama ang araw na iyon, at ang mataas na marka ay hindi nangangahulugang mayroong anumang garantiya.",
        "**Ang mga pangungusap ng paliwanag ng bayad na ulat ay isinulat ng generative AI.** Gayunpaman, ang lahat ng mga halaga tulad ng puntos, ganzi, at lakas ng limang elemento ay kinakalkula ng patakaran ng engine ng serbisyo, at ang AI ay hindi nagbabago o lumilikha ng mga halagang iyon. Kung hindi makagawa ng paliwanag, ang nakasulat na paglalarawan batay sa mga halagang kinakalkula ng engine ay ilalagay sa parehong lugar, at ang bilang ng mga pahina ng dokumento at mga nilalaman ay mananatili gaya ng nakasaad sa ibaba ng Artikulo 3."
      ]
    },
    {
      "heading": "2. Bayad sa Paggamit",
      "paragraphs": [
        "Ang kasalukuyang serbisyo ay ibinibigay nang libre at hindi kinakailangan ang pagpaparehistro.",
        "Kapag nagsimula ang pagbebenta ng mga bayad na produkto (dalawang uri ng ulat PDF), ang mga kondisyon sa ibaba ng Artikulo 3 ay magiging epektibo. Bago simulan ang pagbebenta, muling ipapaalam ang mga kondisyong ito."
      ]
    },
    {
      "heading": "3. Mga Bayad na Produkto at Pagbabalik",
      "paragraphs": [
        "Ang mga ibinibentang bayad na produkto ay **isang PDF ng \"saju (사주) at taunang kapalaran na ulat\"**. Ito ay isang dokumento na naglalaman ng mga resulta mula sa screen, kasama ang mga nilalaman na hindi nakikita sa screen.",
        "**A4 9 na pahina** — Pabalat at buod, likas na ugali at lakas·mga dapat bigyang-pansin, walong karakter ng natal chart (saju) at kapangyarihan ng limang elemento, lakas at kahinaan ng araw ng kapanganakan (ilangan), sampung diyos ng apat na haligi at mga kapansin-pansing posisyon sa saju na ito, apat na larangan ng buhay batay sa natal chart (yaman·pag-ibig·trabaho·kalusugan) at ang mga batayan nito, mga detalye ng pagwawasto ng tunay na oras ng araw, at ang kapalaran para sa taong ito. Lokal na pagbabayad {priceDomestic} (kasama ang buwis), pandaigdigang pagbabayad {priceGlobal}.",
        "**Ang kapalaran para sa araw na ito ay hindi nakapaloob sa dokumentong ito.** Ito ay isang halaga na nagbabago araw-araw at ibinibigay nang libre sa screen, habang ang dokumentong ito ay binubuo ng isang natal na paliwanag na hindi nagbabago sa buong buhay at ng kapalaran para sa taong ito.",
        "Ang mga domestic na pagbabayad ay maaaring gawin sa pamamagitan ng Toss Payments gamit ang credit/debit card at mga simpleng pagbabayad (Toss Pay, Kakao Pay, Naver Pay, Payco, atbp.), at ang mga international na pagbabayad ay sa pamamagitan ng PayPal sa pamamagitan ng PortOne. Ang huling halaga ay nakabatay sa halagang ipinapakita sa screen ng pagbabayad.",
        "**Ang serbisyo ay hindi nag-iimbak ng mga input ng gumagamit o ng nilikhang PDF na file.** Kapag naaprubahan ang pagbabayad, agad na nililikha ang dokumento at ibinababa ito, at walang anumang bagay na nananatili sa server. Samakatuwid, ang na-download na file ay dapat itago ng gumagamit mismo.",
        "Kung ang pag-download ay naputol o nawala ang file, maaari itong i-download muli hanggang sa **5 beses** gamit ang parehong order. Gayunpaman, kung ang mga input value ay nawala sa labas ng resulta ng screen, hindi na ito maibabalik, kaya't mangyaring i-save ang file kaagad pagkatapos ng pagbabayad."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download pagkatapos ng pagbabayad** ay maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos ang pagkumpleto ng pag-download** ay may mga limitasyon sa pag-atras ng aplikasyon dahil sa simpleng pagbabago ng isip. Ito ay isang digital na nilalaman na ibinibigay kaagad sa pagbabayad at hindi maibabalik sa orihinal na estado, na naaayon sa mga dahilan ng limitasyon sa pag-atras ng aplikasyon na itinakda sa Artikulo 17, Seksyon 2 ng \"Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan\".",
        "**Kung ang dokumento ay hindi nalikha dahil sa error sa sistema, o kung ang file ay hindi mabuksan, o kung ang halaga ng pagbabayad ay iba sa order** ay ipoproseso bilang muling pag-isyu o buong refund.",
        "**Ang mga reklamo tungkol sa nilalaman ng resulta** ay hindi itinuturing na dahilan para sa refund. Ang saju (사주) na pagbasa ay isang sanggunian mula sa tradisyonal na pananaw ng Myeongri at ang katangian nito ay ipinaalam bago ang pagbabayad (Talaan 1).",
        "Ang muling paghingi pagkatapos magamit ang 5 na pagkakataon para sa muling pag-isyu ay hindi itinuturing na dahilan para sa refund.",
        "**Kung ang isang menor de edad ay nagbayad nang walang pahintulot ng kanyang legal na kinatawan** maaaring kanselahin ng nagbayad o ng legal na kinatawan ang pagbabayad na iyon. Mangyaring ipaalam sa amin sa ibaba ng contact details upang maibalik ang bayad."
      ]
    },
    {
      "heading": "4. Tungkol sa mga resulta ng pagkalkula",
      "paragraphs": [
        "Lahat ng mga puntos ay kinakalkula alinsunod sa mga pampublikong patakaran, kaya kung pareho ang mga halaga na ipinasok, palaging pareho ang resulta.",
        "Kung hindi mo ipapasok ang oras ng kapanganakan, ang pagkalkula ay isasagawa nang hindi isinasaalang-alang ang siju (時柱), kaya maaaring magbago ang resulta. Ang mas tumpak na pagpili ng lugar ng kapanganakan ay nagreresulta sa mas tumpak na pagkalkula ng siju.",
        "Ang pagkalkula ng natal chart (만세력) ay gumagamit ng pampublikong aklatan ng pagkalkula, at maaaring mag-iba ang mga resulta ng natal chart depende sa paraan ng pagproseso ng mga solar terms at time zones."
      ]
    },
    {
      "heading": "5. Pananagutan ng Gumagamit",
      "paragraphs": [
        "Ang gumagamit ay maaaring mag-input ng petsa ng kapanganakan ng ibang tao, subalit hindi ito dapat gamitin sa paraang makakapinsala sa ibang tao.",
        "Huwag gamitin ang mga resulta ng serbisyo bilang batayan para sa mga desisyon na nakakaapekto sa mga karapatan ng iba, tulad ng kasal, diborsiyo, pagkuha, o transaksyon. Ang serbisyo ay hindi nilikha para sa mga ganitong layunin."
      ]
    },
    {
      "heading": "6. Mga Bawal na Gawain",
      "paragraphs": [
        "Ang mga sumusunod na kilos ay hindi pinapayagan."
      ],
      "bullets": [
        "Pagsasagawa ng mga kilos na nagpapadala ng labis na mga kahilingan gamit ang mga awtomatikong kasangkapan na nakakasagabal sa operasyon ng serbisyo.",
        "Pagsasagawa ng mga kilos na nagpapakita ng mga resulta ng serbisyo bilang mga katotohanan o mga resulta ng opinyon ng mga eksperto.",
        "Pagsasagawa ng pagkopya o pagbabago ng serbisyo upang magbigay ng parehong serbisyo."
      ]
    },
    {
      "heading": "7. Pagsususpinde ng Pananagutan",
      "paragraphs": [
        "Ang serbisyo ay nagbibigay lamang ng mga sanggunian at hindi kami mananagot para sa mga desisyon na ginawa ng gumagamit batay sa mga resulta at ang mga resulta nito.",
        "Hindi kami mananagot para sa anumang pinsala na dulot ng pagkaantala ng serbisyo dahil sa mga hindi mapipigilang dahilan tulad ng mga natural na kalamidad, pagkasira ng imprastruktura ng tagapagbigay ng serbisyo, at iba pang katulad na sitwasyon."
      ]
    },
    {
      "heading": "8. Karapatan sa Intelektwal na Ari-arian",
      "paragraphs": [
        "Ang mga karapatan sa mga implementasyon ng screen, teksto, at mga patakaran sa pagkalkula ng serbisyo ay pagmamay-ari ng operator. Ang gumagamit ay maaaring mag-imbak o magbahagi ng mga resulta para sa personal na layunin ng pagninilay."
      ]
    },
    {
      "heading": "9. Pagbabago ng mga Tuntunin at Batas na Nagpapairal",
      "paragraphs": [
        "Kung may pagbabago sa mga tuntunin, ito ay ilalathala sa pahinang ito kasama ang petsa ng pagpapatupad.",
        "Ang mga tuntuning ito ay pinamamahalaan ng batas ng Korea, at ang mga alitan na may kaugnayan sa paggamit ng serbisyo ay susunod sa mga pamamaraan na itinakda ng mga naaangkop na batas."
      ]
    }
  ]
};

const d2 = {
  "title": "Patakaran sa Refund at Pagkansela",
  "intro": "Ito ang mga pamantayan para sa pagkansela at refund ng saju life reading report PDF. Inilagay namin ang mga nilalaman mula sa Artikulo 3 ng mga tuntunin dito.",
  "sections": [
    {
      "heading": "1. Kalikasan ng Produkto",
      "paragraphs": [
        "Ang mga produktong ibinibenta ay **saju life reading report PDF (A4 5 pahina)** at **premium life reading report PDF (A4 7 pahina)**, at pareho silang digital na nilalaman na agad na nilikha at ipinapadala sa sandaling maaprubahan ang pagbabayad.",
        "**Hindi nag-iimbak ang serbisyo ng mga input ng gumagamit o ng nilikhang PDF file.** Kaya't ang na-download na file ay dapat itago ng gumagamit mismo."
      ]
    },
    {
      "heading": "2. Pagbawi ng Alok",
      "paragraphs": [
        "Sumusunod ito sa mga pamantayan na itinakda ng Batas sa Elektronikong Kalakalan."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download,** maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pagbawi ng alok dahil sa simpleng pagbabago ng isip ay limitado. Ito ay isang digital na nilalaman na ibinibigay agad sa pagbabayad at hindi maibabalik sa orihinal na estado, na tumutugma sa mga dahilan ng limitasyon na itinakda sa Seksyon 17, Talata 2 ng 「Batas sa Proteksyon ng mga Mamimili sa Elektronikong Kalakalan」. Ipinapaalam ito sa screen ng pagbabayad at humihingi ng pahintulot."
      ]
    },
    {
      "heading": "3. Mga Kasong Buong Refund",
      "paragraphs": [
        "Sa mga sumusunod na kaso, ang mga dahilan ay susuriin at maaaring iproseso bilang muling pag-isyu o buong refund."
      ],
      "bullets": [
        "Kung ang dokumento ay hindi nalikha dahil sa error ng sistema",
        "Kung ang na-download na file ay hindi mabuksan",
        "Kung ang halaga ng pagbabayad ay iba sa order",
        "**Kung ang menor de edad ay nagbayad nang walang pahintulot ng legal na kinatawan** — Maaaring humiling ng pagkansela ang nagbayad o ang legal na kinatawan."
      ]
    },
    {
      "heading": "4. Mga Kasong Hindi Refund",
      "paragraphs": [],
      "bullets": [
        "**Hindi pagkakasiya sa nilalaman ng resulta.** Ang saju (사주) ay isang sanggunian mula sa tradisyonal na pananaw ng Mingli, at ito ay ipinaalam bago ang pagbabayad.",
        "Muling paghingi pagkatapos magamit ang lahat ng 5 pagkakataon ng muling pag-isyu."
      ]
    },
    {
      "heading": "5. Paraan ng Pagsusumite",
      "paragraphs": [
        "Mangyaring isumite ang mga kahilingan para sa refund o mga katanungan sa customer center ({customerCenter}) o sa email ({email}). Kung maibibigay mo ang numero ng order, mas mabilis ang kumpirmasyon.",
        "Ang refund ay ibabalik sa paraan ng pagbabayad na ginamit, at maaaring tumagal ng 3-7 araw ng negosyo para maipakita batay sa mga kondisyon ng card company o payment provider."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d3 = {
  "title": "Impormasyon sa Presyo",
  "intro": "Ipinapahayag ang saklaw ng libreng serbisyo at ang presyo ng mga bayad na produkto.",
  "sections": [
    {
      "heading": "1. Libre",
      "paragraphs": [
        "**Ang pagsusuri ng saju (사주) at ang araw-araw na kapalaran ay libre.** Hindi kinakailangan ang pagpaparehistro.",
        "Maaari mong makita ang walong karakter ng saju (사주) natal chart, ang balanse ng limang elemento, ang lakas at kahinaan ng araw, ang kinakailangang enerhiya, ang puntos at grado ng araw-araw na kapalaran, at ang puntos sa apat na larangan ng buhay sa screen."
      ]
    },
    {
      "heading": "2. Panghabambuhay na Saju at Taunang Kapalaran na Ulat PDF (bayad)",
      "paragraphs": [
        "Presyo sa loob ng bansa {priceDomestic} (kasama ang VAT) · Presyo sa ibang bansa {priceGlobal}",
        "Gagawin naming PDF na dokumento na **9 na pahina ng A4** mula sa mga resulta sa screen. Kasama rito ang mga impormasyon na hindi lumalabas sa screen — ang lakas at kahinaan ng araw, ang kinakailangang enerhiya, ang sampung diyos ng apat na haligi, at ang mga natatanging posisyon sa saju (사주), ang mga detalye ng Wang Sang Hyu Su Sa, ang apat na larangan ng buhay batay sa natal chart at ang mga batayang numero, at ang mga pagwawasto para sa Taon ng Tsin Taya Yang Si — lahat ay kasama rito.",
        "Maaari mong i-download muli ang parehong order ng **hanggang 5 beses**. Gayunpaman, kung ang mga input na halaga ay nawala sa labas ng resulta sa screen, hindi na ito maibabalik, kaya't mangyaring i-save ang file agad pagkatapos ng pagbabayad."
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
        "Kung may pagbabago sa presyo, ito ay unang ipo-post sa pahinang ito. Ang mga binayarang order ay hindi maaapektuhan ng binagong presyo."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d4 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (사주) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang tinatanggap ng serbisyo, kung ano ang hindi nito iniwan, at kung ano ang awtomatikong naitatala.",
  "effectiveLabel": "Petsa ng Pagkakabisa",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pag-input para sa saju (사주) na pagbasa ay **hindi nakaimbak kahit saan.** Ginagamit lamang ito sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito naiwan sa hiwalay na file. Dahil walang pagpaparehistro ng miyembro, ang mga input na halaga ay hindi nakakonekta sa anumang partikular na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nakapaloob sa Resulta ng Link",
      "paragraphs": [
        "Ang address ng resulta ay naglalaman ng mga na-encode na input values. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta ng link, ang mga tala ng pag-access sa server ay naglalaman lamang ng landas ng address.",
        "Kung ipapadala ang resulta ng link sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga input values, ang pagpapasya sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Impormasyon na Awtomatikong Nakokolekta",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang mga gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa pagpapatakbo ng web service ay awtomatikong naiwan ng tagapagbigay ng imprastruktura."
      ],
      "bullets": [
        "IP address ng koneksyon, petsa at oras ng koneksyon, uri ng browser at iba pang karaniwang tala ng pag-access sa server",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito iniimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang mga gumagamit. Ang impormasyong ipinasok sa saju (사주) na pagbasa ay hindi ipinapasa sa mga tagapagbigay ng advertising.",
        "Ang serbisyong ito ay naglalathala ng mga advertisement sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga sumusunod na bagay ay nangyayari."
      ],
      "bullets": [
        "Ang mga third-party na tagapagbigay, kabilang ang Google, ay maaaring mag-imbak o magbasa ng cookies sa browser ng gumagamit.",
        "Gumagamit ang Google ng cookies upang magpakita ng mga advertisement batay sa mga rekord ng pagbisita sa iba't ibang mga site, kabilang ang site na ito.",
        "Maaaring i-disable ng mga gumagamit ang mga personalized na advertisement sa mga setting ng advertisement ng Google (google.com/settings/ads). Kahit na i-disable ito, ang mga advertisement ay patuloy na ipapakita, ngunit ang kaugnayan sa gumagamit ay bababa.",
        "Ang mga personalized na advertisement mula sa lahat ng third-party na tagapagbigay ay maaaring i-disable nang sabay-sabay sa aboutads.info/choices.",
        "Mayroong paraan upang i-block ang cookies sa mga setting ng browser.",
        "Para sa mga gumagamit sa European Economic Area, United Kingdom, at Switzerland, unang hihingin ang pahintulot para sa paggamit ng advertising cookies."
      ]
    },
    {
      "heading": "5. Impormasyon na Naka-save sa Pagbabayad",
      "paragraphs": [
        "Sa kasalukuyan, hindi kami nagbebenta ng mga bayad na produkto, kaya walang impormasyon na naka-save kaugnay ng pagbabayad.",
        "Kapag nagsimula na ang pagbebenta, ang mga sumusunod na item ay mai-save para sa pagproseso ng pagbabayad at ayon sa mga batas na nag-uutos ng pag-iingat ng mga tala ng transaksyon. **Sa panahong iyon, hindi rin namin ise-save ang mga halaga na ipinasok sa saju (사주) na pagbasa at ang nilikhang PDF**, at hindi rin kami tumatanggap ng impormasyon na makakapagkilala sa mga gumagamit tulad ng pangalan, contact number, at address."
      ],
      "bullets": [
        "Numero ng order at pagkakakilanlan ng pagbabayad",
        "Halaga ng pagbabayad, pera, at estado ng pagbabayad (hindi pa nababayaran, nabayaran na, kinansela)",
        "Pagkakaiba ng produkto, estado ng pagproseso, bilang ng mga na-download na dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (domestiko, pandaigdig)",
        "Tagal ng pag-iingat — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng mga Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng mga reklamo o hindi pagkakaunawaan ng mga mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagsusuri at Pagsasagawa ng Ikatlong Partido",
      "paragraphs": [
        "Dahil walang personal na impormasyon na iniimbak, wala ring personal na impormasyon na ibinibigay sa ikatlong partido.",
        "Upang mapatakbo ang serbisyo, ginagamit ang hosting infrastructure ng {hostingProvider}, at sa prosesong ito, ang mga access log na nabanggit sa itaas ay pinoproseso alinsunod sa mga patakaran ng nasabing negosyo.",
        "Kapag nagsimula na ang pagbebenta ng mga bayad na produkto, ang mga domestic na pagbabayad ay ipinapasa sa Toss Payments, at ang mga international na pagbabayad ay ipinapasa sa PortOne (PayPal). Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at hindi ito natatanggap ng serbisyo."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang maaaring hilinging tingnan, ituwid, o tanggalin.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng pag-input sa pamamagitan ng pagtanggal ng mga resulta sa address bar ng browser.",
        "Kung may mga katanungan na may kaugnayan sa paggamit ng serbisyo, mangyaring ipaalam sa ibaba ng mga contact details."
      ]
    },
    {
      "heading": "8. Impormasyon sa Pribado ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang at hindi nangangalap ng impormasyon mula sa mga bata."
      ]
    },
    {
      "heading": "9. Tagapangalaga sa Proteksyon ng Personal na Impormasyon",
      "paragraphs": [
        "Tagapangalaga: {privacyOfficer}",
        "Makipag-ugnayan: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Pagbabago ng Patakaran",
      "paragraphs": [
        "Kung may pagbabago sa patakarang ito, ilalathala ang petsa ng pagsisimula at ang mga nilalaman ng pagbabago sa pahinang ito. Kung ang mga aktwal na nilalaman ay talagang nagbabago, tulad ng pagsisimula ng paglalathala ng mga ad o pagbebenta ng mga bayad na produkto, ipapaalam muna ang katotohanan ng pagbabago."
      ]
    }
  ]
};

const d5 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (사주) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, ano ang hindi naiwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pag-input para sa saju (사주) na pagbasa ay **hindi nakaimbak kahit saan.** Ginagamit lamang ito sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito naiwan sa hiwalay na file. Dahil walang pagpaparehistro, ang mga input na halaga ay hindi nakakabit sa isang tiyak na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta na Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng mga input na halaga na naka-encode. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # ng address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa server access record ay ang path ng address.",
        "Kung ibabahagi ang resulta na link sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga input na halaga, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa operasyon ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang server access record tulad ng IP address, petsa ng pag-access, at uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang subaybayan ang mga gumagamit.",
        "Sa kasalukuyan, walang mga advertisement na ipinapakita sa serbisyong ito. Kung sakaling maglagay ng mga advertisement sa hinaharap, maaaring gumamit ang mga provider ng advertisement (hal. Google) ng cookies para sa paglalagay ng advertisement. Sa oras na iyon, unang babaguhin ang seksyong ito upang ipahayag kung ano ang nagbago bago simulan."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Kapag nagbayad para sa mga bayad na produkto (saju life reading report PDF), ang impormasyon ng order ay nakaimbak para sa pagproseso ng pagbabayad at ayon sa mga batas na nag-uutos ng pag-iimbak ng mga tala ng transaksyon.",
        "**Ang mga input na halaga para sa saju (사주) na pagbasa at ang ginawa na PDF ay hindi nakaimbak kahit na nagbayad.** Ang prinsipyo sa itaas na seksyon 1 ay mananatili kahit na may pagbabayad. Ang mga nakaimbak na item ay ang mga sumusunod, at hindi kasama ang impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng beses na na-download ang dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (domestic, global)",
        "Tagal ng pag-iimbak — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga produkto ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o hindi pagkakaunawaan ng mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay sa Ikatlong Partido at Pag-uupahan ng Pagproseso",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng personal na impormasyon na makikilala ang gumagamit, walang personal na impormasyon na ibinibigay sa ikatlong partido. Ang pagproseso ng pagbabayad ay inupahan sa mga sumusunod na provider.",
        "Gumagamit ng hosting infrastructure mula sa {hostingProvider} para sa operasyon ng serbisyo, at sa prosesong ito, ang mga access record mula sa itaas na seksyon 3 ay pinoproseso ayon sa patakaran ng provider na iyon.",
        "Ang domestic na pagbabayad ay pinoproseso ng Toss Payments, at ang international na pagbabayad ay pinoproseso ng PayPal sa pamamagitan ng PortOne. Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga provider na ito, at ang serbisyo ay hindi tumatanggap o nag-iimbak ng mga ito."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng mga input na halaga para sa saju (사주) na pagbasa, walang maaaring hilingin na suriin, ituwid, o tanggalin. Ang natitirang tala ng order mula sa pagbabayad ay may obligasyong itago sa loob ng panahon na itinakda ng batas, kaya hindi ito maaaring tanggalin sa loob ng panahong iyon, at itatapon ito pagkatapos ng panahong iyon.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta na link sa address bar ng browser.",
        "Kung may mga katanungan kaugnay ng paggamit ng serbisyo, mangyaring ipaalam sa ibaba ng contact."
      ]
    },
    {
      "heading": "8. Personal na Impormasyon ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang at hindi nag-iimbak ng personal na impormasyon mula sa mga bata."
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
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga pagbabago sa proseso ay talagang mangyayari, tulad ng paglalagay ng advertisement o pagbebenta ng bayad na produkto, ipapaalam muna ang mga pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d6 = {
  "title": "Mga Tuntunin ng Paggamit",
  "intro": "Ang mga tuntuning ito ay nagtatakda ng mga kondisyon para sa paggamit ng Saju-Link (sa ibaba ay tinutukoy bilang \"serbisyo\"). Sa paggamit ng serbisyo, itinuturing na ikaw ay sumasang-ayon sa mga tuntuning ito.",
  "effectiveLabel": "Petsa ng Pagpapatupad",
  "sections": [
    {
      "heading": "1. Katangian ng Serbisyo",
      "paragraphs": [
        "Ang serbisyo ay nag-aaplay ng mga patakaran ng tradisyonal na myongri (saju) batay sa ipinapasok na petsa ng kapanganakan at oras ng kapanganakan upang ipakita ang natal chart ng saju at ang lakas ng limang elemento, ang lakas at kahinaan ng araw, at ang mga sanggunian mula sa araw na iyon at ang lokasyon kung saan nakatagpo ang natal chart.",
        "Ang mga ibinigay na marka at paliwanag ay **mga sanggunian mula sa tradisyonal na astrological na pananaw at hindi isang siyentipikong prediksyon o katiyakan tungkol sa hinaharap, kalusugan, o yaman ng isang tao.** Ang mababang marka ay hindi nangangahulugang masama ang araw na iyon, at ang mataas na marka ay hindi nangangahulugang mayroong anumang garantiya.",
        "**Ang mga pangungusap ng paliwanag ng bayad na ulat ay isinulat ng generative AI.** Gayunpaman, ang lahat ng mga halaga tulad ng puntos, ganzi, at lakas ng limang elemento ay kinakalkula ng patakaran ng engine ng serbisyo, at ang AI ay hindi nagbabago o lumilikha ng mga halagang iyon. Kung hindi makagawa ng paliwanag, ang nakasulat na paglalarawan batay sa mga halagang kinakalkula ng engine ay ilalagay sa parehong lugar, at ang bilang ng mga pahina ng dokumento at mga nilalaman ay mananatili gaya ng nakasaad sa ibaba ng Artikulo 3."
      ]
    },
    {
      "heading": "2. Bayad sa Paggamit",
      "paragraphs": [
        "Ang pagsusuri ng saju (사주) at ang pagtingin sa araw-araw na kapalaran ay libre at hindi kinakailangan ang pagpaparehistro bilang miyembro.",
        "Ang pagtanggap ng resulta sa PDF na ulat ay may bayad. Ang presyo at mga kondisyon ay nakasaad sa ibaba ng Artikulo 3 at sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "3. Mga Bayad na Produkto at Pagbabalik",
      "paragraphs": [
        "Ang mga ibinibentang bayad na produkto ay **isang PDF ng \"saju (사주) at taunang kapalaran na ulat\"**. Ito ay isang dokumento na naglalaman ng mga resulta mula sa screen, kasama ang mga nilalaman na hindi nakikita sa screen.",
        "**A4 9 na pahina** — Pabalat at buod, likas na ugali at lakas·mga dapat bigyang-pansin, walong karakter ng natal chart (saju) at kapangyarihan ng limang elemento, lakas at kahinaan ng araw ng kapanganakan (ilangan), sampung diyos ng apat na haligi at mga kapansin-pansing posisyon sa saju na ito, apat na larangan ng buhay batay sa natal chart (yaman·pag-ibig·trabaho·kalusugan) at ang mga batayan nito, mga detalye ng pagwawasto ng tunay na oras ng araw, at ang kapalaran para sa taong ito. Lokal na pagbabayad {priceDomestic} (kasama ang buwis), pandaigdigang pagbabayad {priceGlobal}.",
        "**Ang kapalaran para sa araw na ito ay hindi nakapaloob sa dokumentong ito.** Ito ay isang halaga na nagbabago araw-araw at ibinibigay nang libre sa screen, habang ang dokumentong ito ay binubuo ng isang natal na paliwanag na hindi nagbabago sa buong buhay at ng kapalaran para sa taong ito.",
        "Ang mga domestic na pagbabayad ay maaaring gawin sa pamamagitan ng Toss Payments gamit ang credit/debit card at mga simpleng pagbabayad (Toss Pay, Kakao Pay, Naver Pay, Payco, atbp.), at ang mga international na pagbabayad ay sa pamamagitan ng PayPal sa pamamagitan ng PortOne. Ang huling halaga ay nakabatay sa halagang ipinapakita sa screen ng pagbabayad.",
        "**Ang serbisyo ay hindi nag-iimbak ng mga input ng gumagamit o ng nilikhang PDF na file.** Kapag naaprubahan ang pagbabayad, agad na nililikha ang dokumento at ibinababa ito, at walang anumang bagay na nananatili sa server. Samakatuwid, ang na-download na file ay dapat itago ng gumagamit mismo.",
        "Kung ang pag-download ay naputol o nawala ang file, maaari itong i-download muli hanggang sa **5 beses** gamit ang parehong order. Gayunpaman, kung ang mga input value ay nawala sa labas ng resulta ng screen, hindi na ito maibabalik, kaya't mangyaring i-save ang file kaagad pagkatapos ng pagbabayad."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download pagkatapos ng pagbabayad** ay maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos ang pagkumpleto ng pag-download** ay may mga limitasyon sa pag-atras ng aplikasyon dahil sa simpleng pagbabago ng isip. Ito ay isang digital na nilalaman na ibinibigay kaagad sa pagbabayad at hindi maibabalik sa orihinal na estado, na naaayon sa mga dahilan ng limitasyon sa pag-atras ng aplikasyon na itinakda sa Artikulo 17, Seksyon 2 ng \"Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan\".",
        "**Kung ang dokumento ay hindi nalikha dahil sa error sa sistema, o kung ang file ay hindi mabuksan, o kung ang halaga ng pagbabayad ay iba sa order** ay ipoproseso bilang muling pag-isyu o buong refund.",
        "**Ang mga reklamo tungkol sa nilalaman ng resulta** ay hindi itinuturing na dahilan para sa refund. Ang saju (사주) na pagbasa ay isang sanggunian mula sa tradisyonal na pananaw ng Myeongri at ang katangian nito ay ipinaalam bago ang pagbabayad (Talaan 1).",
        "Ang muling paghingi pagkatapos magamit ang 5 na pagkakataon para sa muling pag-isyu ay hindi itinuturing na dahilan para sa refund.",
        "**Kung ang isang menor de edad ay nagbayad nang walang pahintulot ng kanyang legal na kinatawan** maaaring kanselahin ng nagbayad o ng legal na kinatawan ang pagbabayad na iyon. Mangyaring ipaalam sa amin sa ibaba ng contact details upang maibalik ang bayad."
      ]
    },
    {
      "heading": "4. Tungkol sa mga resulta ng pagkalkula",
      "paragraphs": [
        "Lahat ng mga puntos ay kinakalkula alinsunod sa mga pampublikong patakaran, kaya kung pareho ang mga halaga na ipinasok, palaging pareho ang resulta.",
        "Kung hindi mo ipapasok ang oras ng kapanganakan, ang pagkalkula ay isasagawa nang hindi isinasaalang-alang ang siju (時柱), kaya maaaring magbago ang resulta. Ang mas tumpak na pagpili ng lugar ng kapanganakan ay nagreresulta sa mas tumpak na pagkalkula ng siju.",
        "Ang pagkalkula ng natal chart (만세력) ay gumagamit ng pampublikong aklatan ng pagkalkula, at maaaring mag-iba ang mga resulta ng natal chart depende sa paraan ng pagproseso ng mga solar terms at time zones."
      ]
    },
    {
      "heading": "5. Pananagutan ng Gumagamit",
      "paragraphs": [
        "Ang gumagamit ay maaaring mag-input ng petsa ng kapanganakan ng ibang tao, subalit hindi ito dapat gamitin sa paraang makakapinsala sa ibang tao.",
        "Huwag gamitin ang mga resulta ng serbisyo bilang batayan para sa mga desisyon na nakakaapekto sa mga karapatan ng iba, tulad ng kasal, diborsiyo, pagkuha, o transaksyon. Ang serbisyo ay hindi nilikha para sa mga ganitong layunin."
      ]
    },
    {
      "heading": "6. Mga Bawal na Gawain",
      "paragraphs": [
        "Ang mga sumusunod na kilos ay hindi pinapayagan."
      ],
      "bullets": [
        "Pagsasagawa ng mga kilos na nagpapadala ng labis na mga kahilingan gamit ang mga awtomatikong kasangkapan na nakakasagabal sa operasyon ng serbisyo.",
        "Pagsasagawa ng mga kilos na nagpapakita ng mga resulta ng serbisyo bilang mga katotohanan o mga resulta ng opinyon ng mga eksperto.",
        "Pagsasagawa ng pagkopya o pagbabago ng serbisyo upang magbigay ng parehong serbisyo."
      ]
    },
    {
      "heading": "7. Pagsususpinde ng Pananagutan",
      "paragraphs": [
        "Ang serbisyo ay nagbibigay lamang ng mga sanggunian at hindi kami mananagot para sa mga desisyon na ginawa ng gumagamit batay sa mga resulta at ang mga resulta nito.",
        "Hindi kami mananagot para sa anumang pinsala na dulot ng pagkaantala ng serbisyo dahil sa mga hindi mapipigilang dahilan tulad ng mga natural na kalamidad, pagkasira ng imprastruktura ng tagapagbigay ng serbisyo, at iba pang katulad na sitwasyon."
      ]
    },
    {
      "heading": "8. Karapatan sa Intelektwal na Ari-arian",
      "paragraphs": [
        "Ang mga karapatan sa mga implementasyon ng screen, teksto, at mga patakaran sa pagkalkula ng serbisyo ay pagmamay-ari ng operator. Ang gumagamit ay maaaring mag-imbak o magbahagi ng mga resulta para sa personal na layunin ng pagninilay."
      ]
    },
    {
      "heading": "9. Pagbabago ng mga Tuntunin at Batas na Nagpapairal",
      "paragraphs": [
        "Kung may pagbabago sa mga tuntunin, ito ay ilalathala sa pahinang ito kasama ang petsa ng pagpapatupad.",
        "Ang mga tuntuning ito ay pinamamahalaan ng batas ng Korea, at ang mga alitan na may kaugnayan sa paggamit ng serbisyo ay susunod sa mga pamamaraan na itinakda ng mga naaangkop na batas."
      ]
    }
  ]
};

const d7 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (四柱) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang tinatanggap ng serbisyo, ano ang hindi iniwan, at ano ang awtomatikong naitatala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ibinibigay para sa saju (四柱) na pagbasa ay **hindi nakaimbak saanman.** Ang mga ito ay ginagamit lamang sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito naiwan sa hiwalay na file. Dahil walang proseso ng pagpaparehistro, ang mga ibinigay na impormasyon ay hindi nakaugnay sa sinumang partikular na tao."
      ],
      "bullets": []
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta ng Link",
      "paragraphs": [
        "Ang address ng resulta ng screen ay naglalaman ng mga ibinigay na impormasyon na naka-encode. Gayunpaman, ang halagang ito ay nasa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta ng link, ang tanging naiwan sa mga tala ng server ay ang landas ng address.",
        "Kung ibabahagi ang resulta ng link sa ibang tao, makikita rin nila ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga ibinigay na impormasyon, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ],
      "bullets": []
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa operasyon ng web service ay awtomatikong naiwan ng tagapagbigay ng imprastruktura."
      ],
      "bullets": [
        "Pangkalahatang mga tala ng pag-access tulad ng IP address, petsa at oras ng pag-access, at uri ng browser",
        "Impormasyon sa bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang gumagamit. Ang impormasyon na ibinigay para sa saju (四柱) na pagbasa ay hindi ipinapasa sa mga tagapagbigay ng advertising.",
        "Ang serbisyong ito ay naglalathala ng mga ad sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga sumusunod na bagay ay nangyayari."
      ],
      "bullets": [
        "Maaaring mag-imbak o magbasa ng cookies ang mga third-party na tagapagbigay, kabilang ang Google, sa browser ng gumagamit.",
        "Gumagamit ang Google ng cookies batay sa mga tala ng pagbisita sa site na ito at iba pang mga site upang magpakita ng mga ad.",
        "Maaaring i-disable ng gumagamit ang mga personalized na ad sa mga setting ng Google ads (google.com/settings/ads). Kahit na i-disable ito, ang mga ad ay patuloy na ipapakita, ngunit ang kaugnayan sa gumagamit ay mababawasan.",
        "Maaaring i-disable ang mga personalized na ad mula sa lahat ng third-party na tagapagbigay sa aboutads.info/choices.",
        "Mayroon ding paraan upang i-block ang cookies sa mga setting ng browser.",
        "Sa mga gumagamit mula sa European Economic Area, UK, at Switzerland, unang hihingin ang pahintulot para sa paggamit ng advertising cookies."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Kapag nagbayad para sa mga bayad na produkto (report PDF), ang impormasyon ng order ay nakaimbak para sa pagproseso ng pagbabayad at ayon sa mga batas na nag-uutos ng pag-iimbak ng tala ng transaksyon.",
        "**Ang mga ibinigay na halaga para sa saju (四柱) na pagbasa at ang nilikhang PDF ay hindi nakaimbak kahit na nagbayad.** Ang prinsipyo sa itaas ay nananatiling pareho anuman ang katayuan ng pagbabayad. Ang mga nakaimbak na item ay ang mga sumusunod, at hindi kasama ang impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at katayuan ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, katayuan ng pagproseso, bilang ng beses na na-download ang dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (domestic, international)",
        "Tagal ng pag-iimbak — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o pagtatalo ng mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay sa Ikatlong Partido at Pagtatalaga ng Pagproseso",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng personal na impormasyon na makikilala ang gumagamit, walang personal na impormasyon na ibinibigay sa ikatlong partido. Ang pagproseso ng pagbabayad ay itinatagubilin sa mga sumusunod na tagapagbigay.",
        "Gumagamit ang serbisyo ng hosting infrastructure mula sa {hostingProvider}, at sa prosesong ito, ang mga tala ng pag-access sa itaas ay pinoproseso ayon sa patakaran ng nasabing tagapagbigay.",
        "Ang domestic na pagbabayad ay pinoproseso ng Toss Payments, at ang international na pagbabayad ay pinoproseso ng PayPal sa pamamagitan ng PortOne. Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga tagapagbigay na ito, at ang serbisyo ay hindi tumatanggap o nag-iimbak ng mga ito."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng mga ibinigay na halaga para sa saju (四柱) na pagbasa, walang maaaring hilingin na suriin, ituwid, o tanggalin. Ang mga natitirang tala ng order mula sa pagbabayad ay may obligasyong itago sa loob ng panahon na itinakda ng batas, kaya hindi ito maaaring tanggalin sa loob ng panahong iyon, at itatapon ito pagkatapos ng panahong iyon.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng ibinigay na impormasyon sa pamamagitan ng pagtanggal ng resulta ng link sa address bar ng browser.",
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
      "heading": "9. Opisyal ng Proteksyon ng Personal na Impormasyon",
      "paragraphs": [
        "Opisyal ng proteksyon: {privacyOfficer}",
        "Contact: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Pagbabago ng Patakaran",
      "paragraphs": [
        "Kung may mga pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga nilalaman ng pagproseso ay talagang nagbabago, tulad ng pagsisimula ng paglalathala ng mga ad o pagbebenta ng mga bayad na produkto, ipapaalam muna ang tungkol sa pagbabago."
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
