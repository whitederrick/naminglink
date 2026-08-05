import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (사주) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, kung ano ang hindi nito iniwan, at kung ano ang awtomatikong naitatala.",
  "effectiveLabel": "Petsa ng Pagpapatupad",
  "sections": [
    {
      "heading": "1. Impormasyon na hindi itinatago",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ibinibigay sa saju (사주) na pagbasa ay **hindi nakaimbak kahit saan.** Ginagamit lamang ito sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito itinatala sa database, at hindi rin ito itinatago sa hiwalay na file. Dahil walang proseso ng pagpaparehistro, ang mga ipinasok na halaga ay hindi nakakabit sa anumang partikular na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na nakapaloob sa link ng resulta",
      "paragraphs": [
        "Ang address ng resulta ay naglalaman ng mga input na naka-encode. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa mga tala ng pag-access sa server ay ang landas ng address.",
        "Kung ibabahagi mo ang link ng resulta sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga input na halaga, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Impormasyon na Awtomatikong Nakokolekta",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang mga gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa pagpapatakbo ng web service ay awtomatikong naiwan ng tagapagbigay ng imprastruktura."
      ],
      "bullets": [
        "IP address ng koneksyon, petsa at oras ng koneksyon, uri ng browser at iba pang karaniwang tala ng pag-access sa server.",
        "Pambansang Impormasyon — Ginagamit lamang ito para sa awtomatikong pagtukoy ng wika ng screen at hindi ito itinatago."
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang subaybayan ang mga gumagamit.",
        "Sa kasalukuyan, walang mga patalastas na inilalagay sa serbisyong ito. Kung sakaling maglagay ng mga patalastas sa hinaharap, maaaring gumamit ang mga tagapagbigay ng patalastas (halimbawa: Google) ng cookies para sa paglalagay ng mga patalastas. Sa panahong iyon, aayusin muna ang seksyong ito upang ipahayag kung ano ang mga pagbabagong naganap bago simulan."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Sa kasalukuyan, hindi kami nagbebenta ng mga bayad na produkto, kaya wala ring impormasyon na nai-save na may kaugnayan sa pagbabayad.",
        "Kapag nagsimula ang pagbebenta, ang mga sumusunod na item ay itinatago para sa pagproseso ng pagbabayad at pag-iingat ng mga tala ng transaksyon alinsunod sa mga batas. **Sa panahong iyon, ang mga halaga na ipinasok sa saju (사주) na pagbasa at ang nilikhang PDF ay hindi itinatago**, at hindi rin kami tumatanggap ng impormasyon na makakapagkilala sa mga gumagamit tulad ng pangalan, contact number, at address."
      ],
      "bullets": [
        "numero ng order at pagkakakilanlan ng pagbabayad",
        "Halaga ng pagbabayad·pera at estado ng pagbabayad (hindi pa nababayaran·nabayaran na·kinansela)",
        "uri ng produkto, katayuan ng pagproseso, bilang ng pag-download ng dokumento, oras ng pag-order",
        "Paghahati ng wika ng screen sa oras ng pag-order at lokasyon ng pagbabayad (lokal·pang-internasyonal)",
        "Tagal ng Pag-iingat — Ayon sa Artikulo 6 ng \"Batas sa Proteksyon ng mga Mamimili sa Elektronikong Kalakalan at Iba Pa\", ang mga talaan tungkol sa pagbabayad at paghahatid ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga talaan tungkol sa paghawak ng mga reklamo o alitan ng mga mamimili ay itinatago sa loob ng 3 taon bago ito sirain."
      ]
    },
    {
      "heading": "6. Pagsusumite at Pagtatalaga sa Ikatlong Partido",
      "paragraphs": [
        "Walang personal na impormasyon na iniimbak, kaya't walang personal na impormasyon na ibinibigay sa mga ikatlong partido.",
        "Upang mapatakbo ang serbisyo, ginagamit ang hosting infrastructure ng {hostingProvider}, at sa prosesong ito, ang mga access logs na nabanggit sa itaas na talata ay ipoproseso alinsunod sa patakaran ng nasabing negosyo.",
        "Kapag nagsimula ang pagbebenta ng mga bayad na produkto, ang mga domestic na pagbabayad ay ipapasa sa Toss Payments, habang ang mga international na pagbabayad ay ipapasa sa PortOne (PayPal). Ang impormasyon ng mga paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinangangasiwaan ng mga negosyanteng ito, at hindi ito natatanggap ng serbisyo."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Walang nakaimbak na personal na impormasyon, kaya't walang maaaring hilingin na suriin, ituwid, o tanggalin.",
        "Maaaring alisin ng gumagamit ang lahat ng mga bakas ng pag-input sa pamamagitan ng pagtanggal ng mga resulta ng link sa address bar ng browser.",
        "Kung mayroon kayong mga katanungan na may kaugnayan sa paggamit ng serbisyo, mangyaring ipaalam sa amin sa ibaba ng mga contact details."
      ]
    },
    {
      "heading": "8. Personal Information of Children",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang at hindi nangangalap ng personal na impormasyon mula sa mga bata."
      ]
    },
    {
      "heading": "9. Privacy Officer",
      "paragraphs": [
        "Tagapangasiwa ng Privacy: {privacyOfficer}",
        "Pagtatanong: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Pagbabago ng Patakaran",
      "paragraphs": [
        "Kung may pagbabago sa patakarang ito, ilalathala ang petsa ng pagsisimula at ang mga pagbabago sa pahinang ito. Kung ang aktwal na nilalaman ng pagproseso ay nagbabago, tulad ng pagsisimula ng paglalathala ng mga ad o pagbebenta ng mga bayad na produkto, ipapaalam muna ang mga pagbabago."
      ]
    }
  ]
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
        "Kapag nagsimula ang pagbebenta ng bayad na produkto (isang ulat PDF), ang mga kondisyon sa ibaba ng Artikulo 3 ay magiging naaangkop. Bago simulan ang pagbebenta, muling ipapaalam ang mga tuntuning ito."
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
  "intro": "Ito ang mga pamantayan para sa pagkansela at refund ng saju life reading report PDF. Nakaayos ito alinsunod sa nilalaman ng Artikulo 3 ng mga tuntunin.",
  "sections": [
    {
      "heading": "1. Kalikasan ng Produkto",
      "paragraphs": [
        "Ang ibinibentang produkto ay **isang **saju life reading report PDF (A4 9 na pahina)**, at kapag naaprubahan ang pagbabayad, agad na gagawin ang dokumento at agad na ipapadala bilang digital na nilalaman.",
        "**Hindi pinapanatili ng serbisyo ang mga input ng gumagamit o ang ginawa na PDF file.** Kaya't ang na-download na file ay dapat itago ng gumagamit mismo."
      ]
    },
    {
      "heading": "2. Pagbawi ng Order",
      "paragraphs": [
        "Sumusunod ito sa mga pamantayan na itinakda ng batas sa elektronikong kalakalan."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download,** maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pagbawi ng order dahil sa simpleng pagbabago ng isip ay limitado. Ito ay digital na nilalaman na ibinibigay agad at hindi maibabalik sa orihinal na estado, na tumutugma sa mga dahilan ng limitasyon na itinakda sa Artikulo 17, Seksyon 2 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan. Ang impormasyong ito ay ipinaalam at kinukuha ang pahintulot sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "3. Mga Kasong Ganap na Refund",
      "paragraphs": [
        "Sa mga sumusunod na kaso, pagkatapos suriin ang dahilan, ito ay ipoproseso bilang muling pag-isyu o buong refund."
      ],
      "bullets": [
        "Kung ang dokumento ay hindi nagawa dahil sa error ng sistema",
        "Kung ang na-download na file ay hindi mabuksan",
        "Kung ang halaga ng pagbabayad ay iba sa order",
        "**Kung ang menor de edad ay nagbayad nang walang pahintulot ng legal na kinatawan** — Maaaring humiling ng pagkansela ang nagbayad o ang legal na kinatawan."
      ]
    },
    {
      "heading": "4. Mga Kasong Hindi Refund",
      "paragraphs": [],
      "bullets": [
        "**Hindi pagkakasiyahan sa nilalaman ng resulta.** Ang saju (사주) interpretation ay isang sanggunian mula sa tradisyonal na pananaw ng Myeongri at ito ay ipinaalam bago ang pagbabayad.",
        "Pagkatapos gamitin ang lahat ng 5 na pagkakataon para sa muling pag-isyu."
      ]
    },
    {
      "heading": "5. Paraan ng Pagsumite",
      "paragraphs": [
        "Mangyaring isumite ang mga refund o katanungan sa customer center ({customerCenter}) o sa email ({email}). Kung ibibigay mo ang numero ng order, mas mabilis ang kumpirmasyon.",
        "Ang refund ay ibabalik sa paraan ng pagbabayad na ginamit, at maaaring tumagal ng 3-7 araw ng negosyo para maipakita ito batay sa mga patakaran ng card issuer o payment provider."
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
        "Presyo para sa lokal na pagbabayad {priceDomestic} (kasama ang VAT) · Presyo para sa pandaigdigang pagbabayad {priceGlobal}",
        "Gagawin naming PDF na dokumento na **9 na pahina sa A4** mula sa mga resulta sa screen. Kasama rito ang mga impormasyon na hindi lumalabas sa screen — ang lakas at kahinaan ng araw, ang kinakailangang enerhiya, ang sampung diyos ng apat na haligi, at ang mga natatanging posisyon sa saju (사주), ang Wang Sang Hyu Su Sa, ang mga apat na larangan ng buhay batay sa natal chart at ang mga batayang numero, ang mga detalye ng pagwawasto ng Jin Tae Yang Si, at ang taunang kapalaran — lahat ito ay kasama.",
        "Maaari mong i-download muli ang parehong order ng **hanggang 5 beses**. Gayunpaman, kung mawala ang mga input na halaga sa labas ng resulta sa screen, hindi na ito maibabalik, kaya't mangyaring i-save ang file kaagad pagkatapos ng pagbabayad."
      ]
    },
    {
      "heading": "4. Paraan ng Pagbabayad",
      "paragraphs": [
        "**Para sa lokal** — Maaari mong gamitin ang mga credit/debit card at mga simpleng pagbabayad (Toss Pay, Kakao Pay, Naver Pay, Payco, atbp.) sa pamamagitan ng Toss Payments.",
        "**Para sa pandaigdig** — Maaari kang magbayad gamit ang PayPal sa pamamagitan ng PortOne.",
        "Ang huling halaga ng pagbabayad ay nakabatay sa halagang ipinapakita sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "5. Pagbabago ng Presyo",
      "paragraphs": [
        "Kung may pagbabago sa presyo, ito ay unang ipo-post sa pahinang ito. Ang mga order na natapos na ang pagbabayad ay hindi saklaw ng binagong presyo."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d4 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (사주) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang tinatanggap ng serbisyo, ano ang hindi iniwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pag-input para sa saju (사주) na pagbasa ay **hindi nakaimbak saanman.** Ito ay ginagamit lamang sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitala sa database at hindi rin iniwan sa hiwalay na file. Dahil walang pagpaparehistro ng miyembro, ang mga input na halaga ay hindi nakakabit sa isang tiyak na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Naka-encode sa Resulta na Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng mga input na halaga na naka-encode. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa server access record ay ang path ng address.",
        "Kung ibabahagi ang resulta na link sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga input na halaga, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa operasyon ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang mga tala ng server access tulad ng IP address, petsa at oras ng pag-access, at uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang gumagamit. Ang impormasyon na ipinasok para sa saju (사주) na pagbasa ay hindi ipinapasa sa mga advertiser.",
        "Ang serbisyong ito ay naglalathala ng mga advertisement sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga sumusunod na bagay ay nangyayari."
      ],
      "bullets": [
        "Maaaring mag-imbak o magbasa ng cookies ang mga third-party na provider kasama ang Google sa browser ng gumagamit.",
        "Gumagamit ang Google ng cookies upang mag-publish ng mga advertisement batay sa mga tala ng pagbisita sa site na ito at iba pang mga site.",
        "Maaaring i-disable ng gumagamit ang personalized na advertisement sa mga setting ng Google ads (google.com/settings/ads). Kahit na i-disable ito, patuloy na ipapakita ang mga advertisement, ngunit ang kaugnayan sa gumagamit ay mababawasan.",
        "Maaaring i-disable ang personalized na advertisement mula sa lahat ng third-party na provider sa aboutads.info/choices.",
        "May paraan din upang i-block ang cookies sa mga setting ng browser.",
        "Sa mga gumagamit mula sa European Economic Area, UK, at Switzerland, unang hihingin ang pahintulot para sa paggamit ng advertising cookies."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Sa kasalukuyan, wala kaming ibinebentang bayad na produkto, kaya walang impormasyon na nakaimbak kaugnay ng pagbabayad.",
        "Kapag nagsimula na ang pagbebenta, ang mga sumusunod na item ay maiimbak para sa pagproseso ng pagbabayad at pag-iingat ng mga tala ng transaksyon ayon sa batas. **Sa oras na iyon, ang mga halaga na ipinasok para sa saju (사주) na pagbasa at ang nalikhang PDF ay hindi nakaimbak,** at hindi rin kami tumatanggap ng impormasyon na makikilala ang gumagamit tulad ng pangalan, contact number, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng pag-download ng dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (domestic/international)",
        "Tagal ng pag-iingat — Ayon sa Article 6 ng 'Batas sa Proteksyon ng mga Mamimili sa Electronic Commerce', ang mga tala ng pagbabayad at supply ng mga produkto ay itinatago ng 5 taon, at ang mga tala ng reklamo o pagtatalo ng mamimili ay itinatago ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay at Pagsasagawa ng Ikatlong Partido",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang personal na impormasyon na ibinibigay sa ikatlong partido.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa operasyon ng serbisyo, at sa prosesong ito, ang mga access record sa itaas ay pinangangasiwaan ayon sa patakaran ng nasabing negosyo.",
        "Kapag nagsimula na ang pagbebenta ng bayad na produkto, ang domestic na pagbabayad ay ipinapasa sa Toss Payments, at ang international na pagbabayad ay ipinapasa sa PortOne (PayPal). Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinangangasiwaan ng mga negosyong ito, at hindi ito natatanggap ng serbisyo."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang dapat hilingin na suriin, ituwid, o tanggalin.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta na link sa address bar ng browser.",
        "Kung may mga katanungan kaugnay ng paggamit ng serbisyo, mangyaring ipaalam sa amin sa ibaba ng contact."
      ]
    },
    {
      "heading": "8. Personal na Impormasyon ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang, at hindi kami nangangalap ng personal na impormasyon mula sa mga bata."
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
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga nilalaman ng pagproseso ay talagang nagbabago, tulad ng pagsisimula ng paglalathala ng advertisement o pagbebenta ng bayad na produkto, ipapaalam muna ang tungkol sa pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d5 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (사주) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, kung ano ang hindi naiwan, at kung ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pag-input para sa saju (사주) na pagbasa ay **hindi nakaimbak saanman.** Ginagamit lamang ito sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito naiwan sa hiwalay na file. Dahil walang pagpaparehistro ng miyembro, ang mga input na halaga ay hindi konektado sa isang tiyak na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta na Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng mga input na halaga na naka-encode. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa server access record ay ang path ng address.",
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
        "Sa kasalukuyan, walang mga advertisement na ipinapakita sa serbisyong ito. Kung sakaling maglagay ng mga advertisement sa hinaharap, ang mga provider ng advertisement (hal. Google) ay maaaring gumamit ng cookies para sa paglalagay ng advertisement. Sa mga pagkakataong iyon, unang babaguhin ang seksyon na ito upang ipahayag kung ano ang nagbago bago simulan."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Kapag nagbayad para sa mga bayad na produkto (saju life reading report PDF), ang impormasyon ng order ay nakaimbak para sa pagproseso ng pagbabayad at ayon sa mga batas na nag-uutos ng pag-iimbak ng mga tala ng transaksyon.",
        "**Ang mga input na halaga para sa saju (사주) na pagbasa at ang nilikhang PDF ay hindi nakaimbak kahit na nagbayad.** Ang prinsipyo sa itaas na seksyon 1 ay nananatiling pareho, anuman ang katayuan ng pagbabayad. Ang mga nakaimbak na item ay ang mga sumusunod, at hindi kasama ang impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at pagkakakilanlan ng pagbabayad",
        "Halaga ng pagbabayad, currency, at katayuan ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, katayuan ng pagproseso, bilang ng pag-download ng dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (domestic, international)",
        "Tagal ng pag-iimbak — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng mga Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o hindi pagkakaunawaan ng mga mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay sa Ikatlong Partido at Pagsasagawa ng Delegasyon",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng personal na impormasyon na makikilala ang gumagamit, walang personal na impormasyon na ibinibigay sa ikatlong partido. Ang pagproseso ng pagbabayad ay ipinagkakatiwala sa mga sumusunod na negosyo.",
        "Gumagamit ng hosting infrastructure ng {hostingProvider} para sa operasyon ng serbisyo, at sa prosesong ito, ang mga access record sa itaas na seksyon 3 ay pinangangasiwaan ayon sa patakaran ng nasabing negosyo.",
        "Ang domestic na pagbabayad ay pinoproseso ng Toss Payments, habang ang international na pagbabayad ay pinoproseso ng PayPal sa pamamagitan ng PortOne. Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at ang serbisyo ay hindi tumatanggap o nag-iimbak ng mga ito."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng mga input na halaga para sa saju (사주) na pagbasa, walang dapat hilingin na suriin, ituwid, o tanggalin. Ang mga natitirang tala ng order mula sa pagbabayad ay may obligasyong itago sa loob ng takdang panahon ayon sa batas, kaya hindi ito maaalis sa loob ng panahong iyon, at itatapon ito pagkatapos ng panahong iyon.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta na link sa address bar ng browser.",
        "Kung may mga katanungan na may kaugnayan sa paggamit ng serbisyo, mangyaring ipaalam sa amin sa ibaba ng contact."
      ]
    },
    {
      "heading": "8. Personal na Impormasyon ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang at hindi nangangalap ng personal na impormasyon mula sa mga bata."
      ]
    },
    {
      "heading": "9. Opisyal na Namamahala sa Proteksyon ng Impormasyon",
      "paragraphs": [
        "Opisyal na namamahala: {privacyOfficer}",
        "Contact: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Pagbabago ng Patakaran",
      "paragraphs": [
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga nilalaman ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga pagbabago sa proseso ay talagang mangyayari tulad ng paglalagay ng advertisement o pagbebenta ng bayad na produkto, ipapaalam muna ang mga pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d6 = {
  "title": "Mga Tuntunin ng Paggamit",
  "intro": "Ang mga tuntuning ito ay nagtatakda ng mga kondisyon para sa paggamit ng Saju-Link (sa ibaba ay tinutukoy bilang \"serbisyo\"). Sa paggamit ng serbisyo, itinuturing na ikaw ay sumasang-ayon sa mga tuntuning ito.",
  "effectiveLabel": "Petsa ng Pagkakabisa",
  "sections": [
    {
      "heading": "1. Kalikasan ng Serbisyo",
      "paragraphs": [
        "Ang serbisyo ay nagpapakita ng natal chart ng saju (사주) at ang balanse ng limang elemento batay sa ipinapasok na petsa ng kapanganakan at oras ng kapanganakan, gamit ang mga patakaran ng tradisyonal na myongri (명리).",
        "Ang mga ipinapakitang puntos at paliwanag ay **mga sanggunian mula sa pananaw ng tradisyonal na myongri at hindi isang siyentipikong prediksyon o katiyakan tungkol sa hinaharap, kalusugan, o yaman ng isang tao.** Ang mababang puntos ay hindi nangangahulugang masama ang araw na iyon, at ang mataas na puntos ay hindi nangangahulugang mayroong garantiya.",
        "**Ang mga pangungusap ng paliwanag para sa bayad na ulat ay isinulat ng generative AI.** Gayunpaman, ang lahat ng mga numero tulad ng puntos, ganzi (간지), at lakas ng limang elemento ay kinakalkula ng rule engine ng serbisyo, at hindi binabago o nilikha muli ng AI ang mga halagang iyon. Kung hindi makagawa ng paliwanag, ang nakasulat na deskripsyon gamit ang mga halagang kinakalkula ng engine ay ilalagay sa parehong lugar, at ang bilang ng mga pahina ng dokumento at mga nilalaman ay mananatili ayon sa nakasaad sa Seksyon 3 sa ibaba."
      ]
    },
    {
      "heading": "2. Bayad sa Paggamit",
      "paragraphs": [
        "Ang pagbasa ng saju (사주) at ang pagsusuri ng araw-araw na kapalaran ay libre at hindi kinakailangan ang pagpaparehistro bilang miyembro.",
        "Ang pagtanggap ng resulta sa PDF na ulat ay may bayad. Ang mga presyo at kondisyon ay nakasaad sa ibaba sa Seksyon 3 at sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "3. Mga Bayad na Produkto at Refund",
      "paragraphs": [
        "Ang mga ibinibentang bayad na produkto ay **isang PDF ng ulat sa buhay ng saju (사주) at kapalaran ng taon**. Ito ay isang dokumento na naglalaman ng mga resulta mula sa screen, kasama ang mga nilalaman na hindi nakikita sa screen.",
        "**9 na pahina ng A4** — kasama ang pabalat at buod, likas na ugali at lakas·mga dapat bigyang-pansin, walong karakter ng saju (사주) at kapangyarihan ng limang elemento, lakas at kahinaan ng araw, at ang kinakailangang enerhiya (yongsin), ang sampung diyos ng apat na haligi at mga kapansin-pansing posisyon sa saju (사주) na ito, apat na larangan ng buhay batay sa orihinal na chart (yaman·pag-ibig·trabaho·kalusugan) at ang mga batayan nito, mga detalye ng pagwawasto ng tunay na oras ng araw, at ang kapalaran ng taon ay nakapaloob dito. Ang bayad para sa lokal na transaksyon ay {priceDomestic} (kasama ang VAT), at para sa internasyonal na transaksyon ay {priceGlobal}.",
        "**Ang kapalaran ng araw ay hindi kasama sa dokumentong ito.** Ito ay isang halaga na nagbabago araw-araw at ibinibigay nang libre sa screen, habang ang dokumentong ito ay binubuo ng hindi nagbabagong paliwanag ng orihinal na chart at kapalaran ng taon.",
        "Para sa lokal na transaksyon, maaaring gumamit ng credit/debit card at mga simpleng pagbabayad (Toss Pay, Kakao Pay, Naver Pay, Payco, atbp.) sa pamamagitan ng Toss Payments, at para sa internasyonal na transaksyon ay sa pamamagitan ng PayPal sa PortOne. Ang huling halaga ay nakabatay sa halaga na ipinapakita sa screen ng pagbabayad.",
        "**Hindi nag-iimbak ang serbisyo ng mga input ng gumagamit o ng na-create na PDF file.** Kapag naaprubahan ang pagbabayad, agad na gagawin ang dokumento at ibababa ito, at walang anumang bagay na mananatili sa server. Samakatuwid, ang na-download na file ay dapat itago ng gumagamit mismo.",
        "Sa kaso ng pagka-abala sa pag-download o pagkawala ng file, maaaring i-download muli ang parehong order ng **hanggang 5 beses**. Gayunpaman, kung mawala ang mga input na lumampas sa resulta ng screen, hindi na ito maaaring muling gawin, kaya't mangyaring i-save ang file agad pagkatapos ng pagbabayad."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download pagkatapos ng pagbabayad,** maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pag-withdraw ng aplikasyon dahil sa simpleng pagbabago ng isip ay limitado. Ito ay isang digital na nilalaman na ibinibigay agad at hindi maibabalik sa orihinal na estado, na tumutugma sa mga dahilan ng limitasyon sa pag-withdraw ng aplikasyon ayon sa Artikulo 17, Seksyon 2 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan.",
        "**Kung ang dokumento ay hindi nagawa dahil sa error ng sistema, o ang file ay hindi mabuksan, o ang halaga ng pagbabayad ay iba sa order,** ito ay ipoproseso bilang muling pag-isyu o buong refund.",
        "**Ang mga reklamo tungkol sa nilalaman ng resulta** ay hindi itinuturing na dahilan para sa refund. Ang paliwanag ng saju (사주) ay isang sanggunian mula sa tradisyonal na pananaw ng Mingli at ito ay ipinaalam bago ang pagbabayad (tingnan ang Seksyon 1).",
        "Ang muling pag-request pagkatapos magamit ang 5 beses na muling pag-isyu ay hindi itinuturing na dahilan para sa refund.",
        "**Kung ang isang menor de edad ay nagbayad nang walang pahintulot ng legal na kinatawan,** maaaring kanselahin ng sarili o ng legal na kinatawan ang pagbabayad. Mangyaring ipaalam sa ibaba ng contact para sa refund."
      ]
    },
    {
      "heading": "4. Tungkol sa mga Resulta ng Pagkalkula",
      "paragraphs": [
        "Lahat ng mga iskor ay kinakalkula ayon sa mga pampublikong patakaran, kaya kung pareho ang mga halaga na ipinasok, palaging pareho ang resulta.",
        "Kung hindi ipinasok ang oras ng kapanganakan, ang pagkalkula ay isasagawa nang hindi isinasaalang-alang ang siju (時柱), kaya maaaring magbago ang resulta. Ang mas tumpak na pagpili ng lugar ng kapanganakan ay nagreresulta sa mas tumpak na pagkalkula ng siju.",
        "Ang pagkalkula ng manseryeong (萬歲曆) ay gumagamit ng pampublikong aklatan ng pagkalkula, at maaaring mag-iba ang mga resulta ng manseryeong depende sa paraan ng pagproseso ng mga solar term at time zone."
      ]
    },
    {
      "heading": "5. Responsibilidad ng Gumagamit",
      "paragraphs": [
        "Maaaring ipasok ng gumagamit ang petsa ng kapanganakan ng ibang tao, subalit hindi ito dapat gamitin sa paraang makakapinsala sa ibang tao.",
        "Huwag gamitin ang mga resulta ng serbisyo bilang batayan para sa mga desisyon na makakaapekto sa mga karapatan ng ibang tao tulad ng kasal, diborsyo, pagkuha, o transaksyon. Ang serbisyo ay hindi nilikha para sa mga ganitong layunin."
      ]
    },
    {
      "heading": "6. Mga Bawal na Gawain",
      "paragraphs": [
        "Ang mga sumusunod na gawain ay hindi pinapayagan."
      ],
      "bullets": [
        "Ang pagpapadala ng labis na mga kahilingan gamit ang mga automated na tool na nakakasagabal sa operasyon ng serbisyo",
        "Ang pagpapakita ng mga resulta ng serbisyo bilang mga katotohanan o mga resulta ng opinyon ng mga eksperto",
        "Ang pagkopya o pagbabago ng serbisyo upang magbigay ng parehong serbisyo"
      ]
    },
    {
      "heading": "7. Pagsususpinde ng Pananagutan",
      "paragraphs": [
        "Ang serbisyo ay nagbibigay lamang ng mga sanggunian at hindi kami mananagot para sa mga desisyong ginawa ng gumagamit batay sa mga resulta at ang mga resulta nito.",
        "Hindi kami mananagot para sa anumang pinsala na dulot ng pagkaantala ng serbisyo dahil sa mga hindi mapipigilang dahilan tulad ng mga natural na kalamidad o pagkasira ng imprastruktura ng tagapagbigay ng serbisyo."
      ]
    },
    {
      "heading": "8. Karapatan sa Intelektwal na Ari-arian",
      "paragraphs": [
        "Ang mga karapatan sa mga screen ng serbisyo, mga teksto, at mga implementasyon ng mga patakaran sa pagkalkula ay pagmamay-ari ng operator. Maaaring i-save o ibahagi ng gumagamit ang mga resulta para sa personal na layunin ng pagninilay."
      ]
    },
    {
      "heading": "9. Pagbabago ng mga Tuntunin at Batas na Namamahala",
      "paragraphs": [
        "Kung may pagbabago sa mga tuntunin, ito ay ilalathala sa pahinang ito kasama ang petsa ng pagsisimula.",
        "Ang mga tuntuning ito ay pinamamahalaan ng batas ng Republika ng Korea, at ang mga alitan na may kaugnayan sa paggamit ng serbisyo ay susunod sa mga pamamaraan na itinakda ng mga umiiral na batas."
      ]
    }
  ]
};

const d7 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng anumang impormasyon na kinakailangan para sa saju (사주) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang tinatanggap ng serbisyo, ano ang hindi iniwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pagpasok para sa saju (사주) na pagbasa ay **hindi nakaimbak saanman.** Ang mga ito ay ginagamit lamang sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito naiwan sa hiwalay na file. Dahil walang pagpaparehistro, ang mga ipinasok na halaga ay hindi konektado sa anumang partikular na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta na Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng mga ipinasok na halaga na naka-encode. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa server access record ay ang path ng address.",
        "Kung ibabahagi ang resulta na link sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga ipinasok na halaga, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa pagpapatakbo ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang server access record tulad ng IP address ng koneksyon, petsa at oras ng koneksyon, uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang gumagamit. Ang impormasyong ipinasok para sa saju (사주) na pagbasa ay hindi naipapasa sa mga advertiser.",
        "Ang serbisyong ito ay naglalathala ng mga ad sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga sumusunod na bagay ay nangyayari."
      ],
      "bullets": [
        "Ang mga third-party na provider, kasama ang Google, ay maaaring mag-imbak o magbasa ng cookies sa browser ng gumagamit.",
        "Gumagamit ang Google ng cookies upang mag-publish ng mga ad batay sa mga tala ng pagbisita sa site na ito at iba pang mga site.",
        "Maaaring i-disable ng gumagamit ang personalized na advertising sa mga setting ng Google ads (google.com/settings/ads). Kahit na ito ay na-disable, ang mga ad ay patuloy na ipapakita, ngunit ang kaugnayan sa gumagamit ay mababawasan.",
        "Ang personalized na advertising mula sa mga third-party na provider ay maaaring i-disable nang sabay-sabay sa aboutads.info/choices.",
        "Mayroon ding paraan upang i-block ang cookies sa mga setting ng browser.",
        "Para sa mga gumagamit sa European Economic Area, UK, at Switzerland, humihingi muna ng pahintulot para sa paggamit ng advertising cookies."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Kapag nagbayad para sa bayad na produkto (report PDF), ang impormasyon ng order ay nakaimbak para sa pagproseso ng pagbabayad at pag-iingat ng mga tala ng transaksyon ayon sa batas.",
        "**Ang mga ipinasok na halaga para sa saju (사주) na pagbasa at ang ginawa na PDF ay hindi nakaimbak kahit na ito ay nabayaran.** Ang prinsipyo sa itaas ay nananatiling pareho anuman ang estado ng pagbabayad. Ang mga nakaimbak na item ay ang mga sumusunod at hindi kasama ang impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng beses na na-download ang dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (domestic, international)",
        "Tagal ng pag-iingat — Ayon sa Article 6 ng 'Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan', ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago ng 5 taon, at ang mga tala ng reklamo o pagtatalo ng mamimili ay itinatago ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay sa Ikatlong Partido at Pag-uupahan ng Pagproseso",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng personal na impormasyon na makikilala ang gumagamit, walang personal na impormasyon na ibinibigay sa ikatlong partido. Ang pagproseso ng pagbabayad ay inupahan sa mga sumusunod na provider.",
        "Gumagamit ng hosting infrastructure mula sa {hostingProvider} para sa pagpapatakbo ng serbisyo, at sa prosesong ito, ang mga access record sa itaas ay pinoproseso ayon sa patakaran ng provider.",
        "Ang domestic na pagbabayad ay pinoproseso ng Toss Payments, at ang international na pagbabayad ay pinoproseso ng PayPal sa pamamagitan ng PortOne. Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga provider na ito, at ang serbisyo ay hindi tumatanggap o nag-iimbak ng mga ito."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng mga ipinasok na halaga para sa saju (사주) na pagbasa, walang maaaring hilingin na suriin, ituwid, o tanggalin. Ang natitirang tala ng order mula sa pagbabayad ay may obligasyong itago ayon sa itinakdang panahon ng batas, kaya hindi ito maitatanggal sa loob ng panahong iyon, at pagkatapos ng panahong iyon ay itatapon.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng pagpasok sa pamamagitan lamang ng pagtanggal ng resulta na link sa address bar ng browser.",
        "Kung may mga katanungan kaugnay ng paggamit ng serbisyo, mangyaring ipaalam sa ibaba ng contact."
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
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung may mga pagbabago sa aktwal na nilalaman ng pagproseso tulad ng pagsisimula ng paglalathala ng mga ad o pagbebenta ng bayad na produkto, ipapaalam muna ang mga pagbabago."
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
