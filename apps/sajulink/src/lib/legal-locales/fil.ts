import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (사주) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang tinatanggap ng serbisyo, kung ano ang hindi iniwan, at kung ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pag-input para sa saju (사주) na pagbasa ay **hindi nakaimbak saanman.** Ginagamit lamang ito sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito naiwan sa hiwalay na file. Dahil walang pagpaparehistro, ang mga input na halaga ay hindi nakakonekta sa isang tiyak na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta na Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng mga input na halaga na naka-encode. Gayunpaman, ang halagang ito ay nasa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa server access record ay ang path ng address.",
        "Kung ibabahagi ang resulta na link sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga input na halaga, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa operasyon ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang server access record tulad ng IP address, petsa at oras ng pag-access, at uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang subaybayan ang mga gumagamit.",
        "Sa kasalukuyan, walang mga advertisement na ipinapakita sa serbisyong ito. Kung sakaling maglagay ng mga advertisement sa hinaharap, maaaring gumamit ang mga provider ng advertisement (hal. Google) ng cookies para sa paglalagay ng advertisement. Sa oras na iyon, unang babaguhin ang seksyon na ito upang ipahayag kung ano ang nagbago bago simulan."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Sa kasalukuyan, hindi nagbebenta ng mga bayad na produkto, kaya walang impormasyon na nakaimbak kaugnay ng pagbabayad.",
        "Kapag nagsimula na ang pagbebenta, ang mga sumusunod na item ay maiimbak para sa pagproseso ng pagbabayad at pag-iingat ng mga tala ng transaksyon ayon sa batas. **Sa oras na iyon, ang mga input na halaga para sa saju (사주) na pagbasa at ang nalikhang PDF ay hindi nakaimbak,** at hindi rin tumatanggap ng impormasyon na makikilala ang gumagamit tulad ng pangalan, contact number, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng pag-download ng dokumento, oras ng pag-order",
        "Wika ng screen sa oras ng pag-order at pagkakaiba ng lokasyon ng pagbabayad (domestiko, pandaigdig)",
        "Tagal ng pag-iingat — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago ng 5 taon, at ang mga tala ng reklamo o pagtatalo ng mamimili ay itinatago ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay at Pagsasagawa ng Ikatlong Partido",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang personal na impormasyon na ibinibigay sa ikatlong partido.",
        "Gumagamit ng hosting infrastructure ng {hostingProvider} para sa operasyon ng serbisyo, at sa prosesong ito, ang mga access record mula sa itaas na seksyon ay pinoproseso ayon sa patakaran ng nasabing negosyo.",
        "Kapag nagsimula na ang pagbebenta ng mga bayad na produkto, ang mga domestic na pagbabayad ay ipinapasa sa Toss Payments, at ang mga international na pagbabayad ay ipinapasa sa PortOne (PayPal). Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at hindi ito natatanggap ng serbisyo."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang maaaring hilingin na suriin, ituwid, o tanggalin.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta na link sa address bar ng browser.",
        "Kung may mga katanungan kaugnay ng paggamit ng serbisyo, mangyaring ipaalam sa ibaba ng contact information."
      ]
    },
    {
      "heading": "8. Personal na Impormasyon ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang at hindi nag-iipon ng personal na impormasyon mula sa mga bata."
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
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung may mga aktwal na pagbabago sa nilalaman ng pagproseso tulad ng paglalagay ng advertisement o pagsisimula ng pagbebenta ng mga bayad na produkto, ipapaalam muna ang mga pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d1 = {
  "title": "Mga Tuntunin ng Paggamit",
  "intro": "Ang mga tuntuning ito ay nagtatakda ng mga kondisyon para sa paggamit ng Saju-Link (sa ibaba ay tinutukoy bilang \"serbisyo\"). Sa paggamit ng serbisyo, itinuturing na ikaw ay sumasang-ayon sa mga tuntuning ito.",
  "effectiveLabel": "Petsa ng Pagkakabisa",
  "sections": [
    {
      "heading": "1. Kalikasan ng Serbisyo",
      "paragraphs": [
        "Ang serbisyo ay batay sa ipinapasok na petsa ng kapanganakan at oras ng kapanganakan, na gumagamit ng mga patakaran ng tradisyonal na myongri (saju) upang ipakita ang natal na tsart ng saju at ang lakas ng limang elemento, ang lakas ng araw, at ang mga sanggunian mula sa araw na iyon at ang posisyon ng natal na tsart.",
        "Ang mga ipinapakitang puntos at paliwanag ay **mga sanggunian mula sa pananaw ng tradisyonal na myongri at hindi isang siyentipikong prediksyon o katiyakan tungkol sa hinaharap, kalusugan, o yaman ng isang tao.** Ang mababang puntos ay hindi nangangahulugang masama ang araw na iyon, at ang mataas na puntos ay hindi nangangahulugang mayroong garantiya.",
        "**Ang mga pangungusap ng paliwanag sa bayad na ulat ay isinulat ng generative AI.** Gayunpaman, ang lahat ng mga numero tulad ng puntos, ganzi, at lakas ng limang elemento ay kinakalkula ng rule engine ng serbisyo, at hindi binabago o nilikha muli ng AI ang mga halagang iyon. Kung hindi makagawa ng paliwanag, ang nakasulat na paglalarawan gamit ang mga halagang kinakalkula ng engine ay ilalagay sa parehong lugar, at ang bilang ng mga pahina ng dokumento at mga nilalaman ay mananatili gaya ng nakasaad sa Seksyon 3 sa ibaba."
      ]
    },
    {
      "heading": "2. Bayad para sa Paggamit",
      "paragraphs": [
        "Sa kasalukuyan, ang serbisyo ay ibinibigay nang libre at hindi kinakailangan ang pagpaparehistro bilang miyembro.",
        "Kapag nagsimula ang pagbebenta ng mga bayad na produkto (saju life reading report PDF at premium life reading report PDF), ang mga kondisyon sa ibaba ng Seksyon 3 ay magiging naaangkop. Bago simulan ang pagbebenta, muling ipapaalam ang mga tuntuning ito."
      ]
    },
    {
      "heading": "3. Mga Bayad na Produkto at Pagbabalik",
      "paragraphs": [
        "Ang mga ibinibentang bayad na produkto ay **dalawang uri ng ulat PDF**. Pareho silang naglalaman ng mga resulta mula sa screen na nakadokumento, kasama ang mga nilalaman na hindi nakikita sa screen.",
        "**Ulat ng Buhay ng Saju (사주) PDF (A4 5 pahina)** — Naglalaman ito ng likas na ugali at lakas, mga dapat bigyang-pansin, walong karakter ng natal chart, lakas ng limang elemento at kahinaan ng araw, kinakailangang enerhiya sa kasalukuyan, kapalaran sa araw na ito at apat na larangan ng buhay (yaman, pag-ibig, trabaho, kalusugan). Bayad sa loob ng bansa {priceDomestic} (kasama ang VAT), bayad sa ibang bansa {priceGlobal}.",
        "**Premium na Ulat ng Buhay ng Saju (사주) PDF (A4 7 pahina)** — Nagdadagdag ito ng dalawang pahina sa limang pahina ng ulat. Naglalaman ito ng sampung diyos ng apat na haligi at Wang Sang Hyu Su Sa (kung paano inilalagay ng bawat enerhiya ang mga ito sa mga posisyon), kabuuang kapalaran para sa taon, mga pagbabago sa mga item ng iskor sa araw na ito, at mga detalye ng pagwawasto sa Jin Tae Yang Si. Bayad sa loob ng bansa {priceAffinityDomestic} (kasama ang VAT), bayad sa ibang bansa {priceAffinityGlobal}.",
        "Ang mga bayad sa loob ng bansa ay maaaring gawin gamit ang mga credit/debit card at mga simpleng pagbabayad (Toss Pay, Kakao Pay, Naver Pay, Payco, atbp.) sa pamamagitan ng Toss Payments, habang ang mga bayad sa ibang bansa ay sa pamamagitan ng PayPal sa PortOne. Ang huling halaga ay batay sa halagang ipinapakita sa screen ng pagbabayad.",
        "**Hindi nag-iimbak ang serbisyo ng mga input ng gumagamit o ng naitalang PDF file.** Kapag naaprubahan ang pagbabayad, agad na gagawin ang dokumento at ibababa ito, at walang anumang natitirang impormasyon sa server. Samakatuwid, ang na-download na file ay dapat itago ng gumagamit mismo.",
        "Kung ang pag-download ay naputol o ang file ay nawala, maaari itong ma-download muli **hanggang 5 beses** gamit ang parehong order. Gayunpaman, kung ang mga input ay nawala sa labas ng resulta ng screen, hindi na ito maaaring muling gawin, kaya't mangyaring i-save ang file agad pagkatapos ng pagbabayad."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download pagkatapos ng pagbabayad,** maaari itong kanselahin anumang oras at makuha ang buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pag-withdraw ng aplikasyon dahil sa simpleng pagbabago ng isip ay limitado. Ito ay isang digital na nilalaman na ibinibigay agad at hindi maibabalik sa orihinal na estado, na tumutugma sa mga dahilan ng limitasyon sa pag-withdraw ng aplikasyon ayon sa Artikulo 17, Seksyon 2 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan.",
        "**Kung ang dokumento ay hindi nagawa dahil sa error ng sistema, o ang file ay hindi mabuksan, o ang halaga ng pagbabayad ay iba sa order,** ito ay ipoproseso bilang muling pag-isyu o buong refund.",
        "**Ang mga reklamo tungkol sa nilalaman ng resulta** ay hindi itinuturing na dahilan para sa refund. Ang interpretasyon ng saju (사주) ay isang sanggunian mula sa tradisyonal na pananaw ng Mingli at ito ay ipinaalam bago ang pagbabayad (tingnan ang Seksyon 1).",
        "Ang mga muling pag-isyu na ginamit na ang 5 beses ay hindi itinuturing na dahilan para sa refund.",
        "**Kung ang isang menor de edad ay nagbayad nang walang pahintulot ng legal na kinatawan,** maaaring kanselahin ng sarili o ng legal na kinatawan ang pagbabayad. Mangyaring ipaalam sa ibaba ng contact para sa refund."
      ]
    },
    {
      "heading": "4. Tungkol sa mga Resulta ng Pagkalkula",
      "paragraphs": [
        "Ang lahat ng mga puntos ay kinakalkula ayon sa mga pampublikong patakaran, kaya kung pareho ang mga halaga na ipinasok, palaging pareho ang magiging resulta.",
        "Kung hindi ipinasok ang oras ng kapanganakan, ang pagkalkula ay isasagawa nang hindi isinasaalang-alang ang siju (時柱), kaya maaaring magbago ang resulta. Ang mas tumpak na pagpili ng lugar ng kapanganakan ay nagiging sanhi ng mas tumpak na pagkalkula ng siju.",
        "Ang pagkalkula ng manseryeok (萬歲曆) ay gumagamit ng pampublikong aklatan ng pagkalkula, at maaaring mag-iba ang mga resulta ng manseryeok depende sa paraan ng pagproseso ng mga solar term at time zone."
      ]
    },
    {
      "heading": "5. Responsibilidad ng Gumagamit",
      "paragraphs": [
        "Maaaring ipasok ng gumagamit ang petsa ng kapanganakan ng ibang tao, subalit hindi ito dapat gamitin sa paraang makakapinsala sa ibang tao.",
        "Huwag gamitin ang mga resulta ng serbisyo bilang batayan para sa mga desisyon na makakaapekto sa mga karapatan ng ibang tao tulad ng kasal, diborsiyo, pagkuha ng empleyado, o transaksyon. Ang serbisyo ay hindi nilikha para sa mga ganitong layunin."
      ]
    },
    {
      "heading": "6. Mga Bawal na Gawain",
      "paragraphs": [
        "Ang mga sumusunod na gawain ay hindi pinahihintulutan."
      ],
      "bullets": [
        "Ang pagpapadala ng labis na mga kahilingan gamit ang mga awtomatikong tool na nakakasagabal sa operasyon ng serbisyo",
        "Ang pagpapakita ng mga resulta ng serbisyo bilang mga katotohanan o mga resulta ng opinyon ng mga eksperto",
        "Ang pagkopya o pagbabago ng serbisyo upang magbigay ng katulad na serbisyo"
      ]
    },
    {
      "heading": "7. Pagsususpinde ng Pananagutan",
      "paragraphs": [
        "Ang serbisyo ay nagbibigay lamang ng mga sanggunian at hindi kami mananagot sa mga desisyon na ginawa ng gumagamit batay sa mga resulta at ang mga resulta nito.",
        "Hindi kami mananagot para sa anumang pinsala na dulot ng pagkaantala ng serbisyo dahil sa mga hindi mapipigilang dahilan tulad ng mga natural na kalamidad, pagkasira ng imprastruktura ng tagapagbigay ng serbisyo."
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
        "Ang mga tuntunin na ito ay pinamamahalaan ng batas ng Republika ng Korea, at ang mga alitan na may kaugnayan sa paggamit ng serbisyo ay susunod sa mga pamamaraan na itinakda ng mga kaugnay na batas."
      ]
    }
  ]
};

const d2 = {
  "title": "Patakaran sa Refund at Pagkansela",
  "intro": "Ito ang mga pamantayan para sa pagkansela at refund ng saju life reading report PDF. Ang nilalaman ng Artikulo 3 ay nakalista dito.",
  "sections": [
    {
      "heading": "1. Kalikasan ng Produkto",
      "paragraphs": [
        "Ang mga produktong ibinibenta ay **saju life reading report PDF (A4 5 na pahina)** at **premium life reading report PDF (A4 7 na pahina)**, at pareho silang digital na nilalaman na agad na nilikha at ipinapadala sa sandaling maaprubahan ang pagbabayad.",
        "**Hindi nag-iimbak ang serbisyo ng mga input ng gumagamit o ng nilikhang PDF file.** Kaya't ang na-download na file ay dapat itago ng gumagamit mismo."
      ]
    },
    {
      "heading": "2. Pagbawi ng Alok",
      "paragraphs": [
        "Sinasalamin nito ang mga pamantayan na itinakda ng Batas sa Elektronikong Kalakalan."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download,** maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pagbawi ng alok dahil sa simpleng pagbabago ng isip ay limitado. Ito ay isang digital na nilalaman na ibinibigay agad sa pagbabayad at hindi maibabalik sa orihinal na estado, na tumutugma sa mga dahilan ng limitasyon na itinakda sa Artikulo 17, Seksyon 2 ng 「Batas sa Proteksyon ng mga Mamimili sa Elektronikong Kalakalan」. Ang impormasyong ito ay ipinaalam at tinanggap sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "3. Mga Kaso ng Buong Refund",
      "paragraphs": [
        "Sa mga sumusunod na kaso, ang refund o muling pag-isyu ay ipoproseso pagkatapos makumpirma ang dahilan."
      ],
      "bullets": [
        "Kung ang dokumento ay hindi nalikha dahil sa error sa sistema",
        "Kung ang na-download na file ay hindi mabuksan",
        "Kung ang halaga ng pagbabayad ay iba sa order",
        "**Kung ang menor de edad ay nagbayad nang walang pahintulot ng legal na kinatawan** — Maaaring humiling ng pagkansela ang nagbayad o ang legal na kinatawan."
      ]
    },
    {
      "heading": "4. Mga Kaso na Hindi Maaaring Refund",
      "paragraphs": [],
      "bullets": [
        "**Hindi pagkakasiyahan sa nilalaman ng resulta.** Ang saju (사주) interpretation ay isang sanggunian mula sa tradisyonal na pananaw ng Myeongri at ito ay ipinaalam bago ang pagbabayad.",
        "Paghiling muli pagkatapos magamit ang lahat ng 5 na pagkakataon para sa muling pag-isyu."
      ]
    },
    {
      "heading": "5. Paraan ng Pagsumite",
      "paragraphs": [
        "Mangyaring isumite ang mga kahilingan para sa refund o mga katanungan sa customer center ({customerCenter}) o sa email ({email}). Kung maibabahagi mo ang order number, mas mabilis ang pag-verify.",
        "Ang refund ay ibabalik gamit ang paraan ng pagbabayad na ginamit, at maaaring tumagal ng 3-7 araw ng negosyo para maipakita ito batay sa mga patakaran ng card issuer o payment provider."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d3 = {
  "title": "Impormasyon sa Presyo",
  "intro": "Nagbibigay ng impormasyon tungkol sa saklaw ng libreng serbisyo at presyo ng bayad na produkto.",
  "sections": [
    {
      "heading": "1. Libre",
      "paragraphs": [
        "**Ang pagbasa ng saju (사주) at pagsusuri ng araw-araw na kapalaran ay libre.** Hindi kinakailangan ang pagpaparehistro.",
        "Maaari mong makita ang walong karakter ng saju (사주) natal chart, ang balanse ng limang elemento, ang lakas at kahinaan ng araw, ang kinakailangang enerhiya sa kasalukuyan, ang puntos at grado ng araw-araw na kapalaran, at ang mga puntos sa apat na larangan ng buhay sa screen."
      ]
    },
    {
      "heading": "2. Saju Life Reading Report PDF (Bayad)",
      "paragraphs": [
        "Presyo sa loob ng bansa {priceDomestic} (kasama ang buwis) · Presyo sa ibang bansa {priceGlobal}",
        "Gagawin naming PDF na dokumento na **5 pahina ng A4** mula sa mga resulta sa screen. Kasama ang pabalat at buod, likas na ugali at lakas·mga dapat bigyang-pansin, ang natal chart at lakas·kahinaan ng limang elemento, araw-araw na kapalaran, at ang apat na larangan ng buhay ay nakapaloob sa isang dokumento.",
        "Maaari mong i-download muli ang parehong order ng **hanggang 5 beses**. Gayunpaman, kung mawawala ang mga input na halaga sa labas ng resulta sa screen, hindi na ito maibabalik, kaya't mangyaring i-save ang file agad pagkatapos ng pagbabayad."
      ]
    },
    {
      "heading": "3. Premium Life Reading Report PDF (Bayad)",
      "paragraphs": [
        "Presyo sa loob ng bansa {priceAffinityDomestic} (kasama ang buwis) · Presyo sa ibang bansa {priceAffinityGlobal}",
        "Ito ay **7 pahina ng A4** na may karagdagang **dalawang pahina** sa kabuuang ulat. Ang mga idinadagdag ay ang sampung diyos ng apat na haligi at Wang Sang Hyu Su Sa, pati na rin ang mga detalye ng pagbabago ng kabuuang kapalaran sa taong ito at mga puntos ng araw-araw na kapalaran. Ito ay mga numerong hindi lumalabas sa screen.",
        "Ang mga kondisyon para sa muling pag-isyu ay katulad ng sa kabuuang ulat."
      ]
    },
    {
      "heading": "4. Paraan ng Pagbabayad",
      "paragraphs": [
        "**Sa loob ng bansa** — Maaari mong gamitin ang mga credit·debit card at mga simpleng pagbabayad (Toss Pay·Kakao Pay·Naver Pay·Payco atbp.) sa pamamagitan ng Toss Payments.",
        "**Sa ibang bansa** — Maaari kang magbayad gamit ang PayPal sa pamamagitan ng PortOne.",
        "Ang huling halaga ng pagbabayad ay nakabatay sa halagang ipinapakita sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "5. Pagbabago ng Presyo",
      "paragraphs": [
        "Kung may pagbabago sa presyo, ito ay unang ipo-post sa pahinang ito. Ang mga nabayarang order ay hindi saklaw ng binagong presyo."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d4 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (四柱) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, kung ano ang hindi naiwan, at kung ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ibinibigay para sa saju (四柱) na pagbasa ay **hindi nakaimbak kahit saan.** Ang mga ito ay ginagamit lamang sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitala sa database at hindi rin naiwan sa hiwalay na file. Dahil walang pagpaparehistro, ang mga ibinigay na halaga ay hindi nakakonekta sa isang tiyak na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta ng Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng mga ibinigay na halaga na naka-encode. Gayunpaman, ang halagang ito ay nasa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang mga tala ng pag-access sa server ay naglalaman lamang ng landas ng address.",
        "Kung ibabahagi ang resulta na link sa ibang tao, makikita rin nila ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga ibinigay na halaga, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa pagpapatakbo ng web service ay awtomatikong naiwan ng tagapagbigay ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang mga tala ng pag-access sa server tulad ng IP address, petsa at oras ng pag-access, at uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang mga gumagamit. Ang impormasyong ibinigay para sa saju (四柱) na pagbasa ay hindi ipinapasa sa mga advertiser.",
        "Ang serbisyong ito ay naglalathala ng mga ad sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga sumusunod na bagay ay nangyayari."
      ],
      "bullets": [
        "Maaaring mag-imbak o magbasa ng cookies ang mga third-party na tagapagbigay, kabilang ang Google, sa browser ng gumagamit.",
        "Gumagamit ang Google ng cookies upang mag-publish ng mga ad batay sa mga tala ng pagbisita sa site na ito at iba pang mga site.",
        "Maaaring i-disable ng gumagamit ang mga personalized na ad sa mga setting ng ad ng Google (google.com/settings/ads). Kahit na i-disable ito, ang mga ad ay patuloy na ipapakita, ngunit ang kaugnayan sa gumagamit ay mababawasan.",
        "Maaaring i-disable ang mga personalized na ad ng lahat ng third-party na tagapagbigay sa isang pagkakataon sa aboutads.info/choices.",
        "Mayroon ding paraan upang i-block ang cookies sa mga setting ng browser.",
        "Para sa mga gumagamit sa European Economic Area, UK, at Switzerland, una silang tatanungin para sa pahintulot sa paggamit ng advertising cookies."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Sa kasalukuyan, wala kaming ibinebentang bayad na produkto, kaya walang impormasyon na nakaimbak kaugnay ng pagbabayad.",
        "Kapag nagsimula na ang pagbebenta, ang mga sumusunod na item ay maiimbak para sa pagproseso ng pagbabayad at pag-iingat ng mga tala ng transaksyon ayon sa batas. **Sa oras na iyon, ang mga ibinigay na halaga para sa saju (四柱) na pagbasa at ang nalikhang PDF ay hindi nakaimbak,** at hindi rin kami tumatanggap ng impormasyon na makikilala ang gumagamit tulad ng pangalan, contact number, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng pag-download ng dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (domestic/international)",
        "Tagal ng pag-iingat — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng mga Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga produkto ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o hindi pagkakaunawaan ng mga mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay sa Ikatlong Partido at Pagpapasa ng Pagproseso",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang personal na impormasyon na ibinibigay sa ikatlong partido.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa pagpapatakbo ng serbisyo, at sa prosesong ito, ang mga tala ng pag-access sa itaas na seksyon ay pinoproseso ayon sa patakaran ng nasabing negosyo.",
        "Kapag nagsimula na ang pagbebenta ng bayad na produkto, ang domestic na pagbabayad ay ipinapasa sa Toss Payments, at ang international na pagbabayad ay ipinapasa sa PortOne (PayPal). Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at hindi ito natatanggap ng serbisyo."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang dapat hilingin na suriin, ituwid, o tanggalin.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng pag-input sa pamamagitan lamang ng pagtanggal ng resulta na link sa address bar ng browser.",
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
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagpapatupad at mga nilalaman ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga nilalaman ng pagproseso ay talagang magbabago, tulad ng pagsisimula ng paglalathala ng mga ad o pagbebenta ng bayad na produkto, ipapaalam muna ang mga pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d5 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (사주) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang tinatanggap ng serbisyo, kung ano ang hindi iniwan, at kung ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ibinibigay para sa saju (사주) na pagbasa ay **hindi nakaimbak saanman.** Ginagamit lamang ito sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitala sa database at hindi rin iniwan sa hiwalay na file. Dahil walang pagpaparehistro, ang mga ibinigay na impormasyon ay hindi konektado sa sinumang partikular na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta na Link",
      "paragraphs": [
        "Ang address ng resulta na screen ay naglalaman ng mga ibinigay na impormasyon na naka-encode. Gayunpaman, ang halagang ito ay nasa likod ng # sa address, at ayon sa web standard, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta na link, ang tanging naiwan sa server access record ay ang path ng address.",
        "Kung ibabahagi ang resulta na link sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga ibinigay na impormasyon, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
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
        "Sa kasalukuyan, walang mga ad na ipinapakita sa serbisyong ito. Kung sakaling maglagay ng mga ad sa hinaharap, ang mga tagapagbigay ng ad (hal. Google) ay maaaring gumamit ng cookies para sa paglalagay ng ad. Sa oras na iyon, ang seksyon na ito ay unang babaguhin upang ipaalam kung ano ang nagbago."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Kapag nagbayad para sa mga bayad na produkto (saju life reading report PDF), ang impormasyon ng order ay nakaimbak para sa pagproseso ng pagbabayad at pag-iimbak ng mga tala ng transaksyon ayon sa batas.",
        "**Ang mga ibinigay na impormasyon para sa saju (사주) na pagbasa at ang ginawa na PDF ay hindi nakaimbak kahit na nagbayad.** Ang prinsipyo sa itaas ay nananatiling pareho kahit na may pagbabayad. Ang mga nakaimbak na item ay ang mga sumusunod at hindi kasama ang impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
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
      "heading": "6. Pagbibigay sa Ikatlong Partido at Pagpapasa ng Pagproseso",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng personal na impormasyon na makikilala ang gumagamit, walang personal na impormasyon na ibinibigay sa ikatlong partido. Ang pagproseso ng pagbabayad ay ipinapasa sa mga sumusunod na kumpanya.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa operasyon ng serbisyo, at sa prosesong ito, ang mga access record mula sa itaas na seksyon ay pinoproseso ayon sa patakaran ng nasabing kumpanya.",
        "Ang lokal na pagbabayad ay pinoproseso ng Toss Payments, at ang pandaigdigang pagbabayad ay pinoproseso ng PayPal sa pamamagitan ng PortOne. Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga kumpanyang ito, at ang serbisyo ay hindi tumatanggap o nag-iimbak ng mga ito."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng mga ibinigay na impormasyon para sa saju (사주) na pagbasa, walang maaaring hilingin na suriin, ituwid, o tanggalin. Ang natitirang tala ng order mula sa pagbabayad ay may obligasyong itago sa loob ng takdang panahon ayon sa batas, kaya hindi ito maaaring tanggalin sa loob ng panahong iyon, at pagkatapos ng panahong iyon ay itatapon.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng pag-input sa pamamagitan lamang ng pagtanggal ng resulta na link sa address bar ng browser.",
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
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagsisimula at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga pagbabago sa proseso ay talagang mangyayari, tulad ng paglalagay ng mga ad o pagbebenta ng mga bayad na produkto, ipapaalam muna ang tungkol sa pagbabago."
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
        "Ang serbisyo ay batay sa ipinadalang petsa ng kapanganakan at oras ng kapanganakan, na gumagamit ng mga patakaran ng tradisyonal na myongri (saju) upang ipakita ang natal na tsart ng saju at ang balanse ng limang elemento, ang lakas at kahinaan ng araw, at ang mga sanggunian mula sa araw na iyon at ang posisyon ng natal na tsart.",
        "Ang mga ipinakitang marka at paliwanag ay **mga sanggunian mula sa pananaw ng tradisyonal na myongri at hindi isang siyentipikong prediksyon o katiyakan tungkol sa hinaharap, kalusugan, o yaman ng isang tao.** Ang mababang marka ay hindi nangangahulugang masama ang araw na iyon, at ang mataas na marka ay hindi nangangahulugang mayroong garantiya.",
        "**Ang mga pangungusap ng paliwanag ng bayad na ulat ay isinulat ng generative AI.** Gayunpaman, ang lahat ng mga numero tulad ng marka, ganzi, at lakas ng limang elemento ay kinakalkula ng patakaran ng engine ng serbisyo, at ang AI ay hindi nagbabago o lumilikha ng mga halagang iyon. Kung hindi makagawa ng paliwanag, ang nakasulat na paglalarawan gamit ang mga halagang kinakalkula ng engine ay ilalagay sa parehong lugar, at ang bilang ng mga pahina ng dokumento at mga nilalaman ay mananatili ayon sa nakasaad sa Seksyon 3 sa ibaba."
      ]
    },
    {
      "heading": "2. Bayad sa Paggamit",
      "paragraphs": [
        "Ang pagbasa ng saju (사주) at ang pagsusuri ng araw-araw na kapalaran ay libre at hindi kinakailangan ang pagpaparehistro bilang miyembro.",
        "Ang pagtanggap ng resulta sa PDF na ulat ay may bayad. Ang presyo at mga kondisyon ay nakasaad sa ibaba sa Seksyon 3 at sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "3. Mga Bayad na Produkto at Pagbabalik",
      "paragraphs": [
        "Ang mga ibinibentang bayad na produkto ay **dalawang uri ng ulat PDF**. Pareho silang naglalaman ng mga resulta mula sa screen na nakadokumento, kasama ang mga nilalaman na hindi nakikita sa screen.",
        "**Ulat ng Buhay Saju (사주) PDF (A4 5 pahina)** — Naglalaman ito ng likas na ugali at lakas, mga bagay na dapat bigyang-pansin, walong karakter ng natal chart, lakas ng limang elemento at ang lakas ng araw, ang kinakailangang enerhiya sa kasalukuyan, ang kapalaran sa araw na ito, at ang apat na larangan ng buhay (yaman, pag-ibig, trabaho, kalusugan). Bayad sa loob ng bansa {priceDomestic} (kasama ang VAT), bayad sa ibang bansa {priceGlobal}.",
        "**Premium na Ulat ng Buhay Saju (사주) PDF (A4 7 pahina)** — Nagdadagdag ito ng dalawang pahina sa limang pahina ng ulat. Naglalaman ito ng sampung diyos ng apat na haligi at ang Wang Sang Hyu Su Sa (kung paano inilalagay ng mga panahon ang bawat enerhiya sa mga posisyon), kabuuang kapalaran para sa taon, mga pagbabago sa mga item ng iskor sa araw na ito, at mga detalye ng pagwawasto sa Jin Tae Yang Si. Bayad sa loob ng bansa {priceAffinityDomestic} (kasama ang VAT), bayad sa ibang bansa {priceAffinityGlobal}.",
        "Para sa mga bayad sa loob ng bansa, maaaring gumamit ng credit/debit card at mga simpleng pagbabayad (Toss Pay, Kakao Pay, Naver Pay, Payco, atbp.) sa pamamagitan ng Toss Payments, at para sa mga bayad sa ibang bansa, sa pamamagitan ng PayPal sa PortOne. Ang huling halaga ay nakabatay sa halagang ipinapakita sa screen ng pagbabayad.",
        "**Hindi nag-iimbak ang serbisyo ng mga input ng gumagamit o ng mga nilikhang PDF file.** Kapag naaprubahan ang pagbabayad, agad na nililikha ang dokumento at walang natitirang impormasyon sa server. Samakatuwid, ang na-download na file ay dapat itago ng gumagamit mismo.",
        "Kung ang pag-download ay naputol o nawala ang file, maaari itong ma-download muli ng **hanggang 5 beses** gamit ang parehong order. Gayunpaman, kung ang mga input ay nawala sa labas ng resulta ng screen, hindi na ito maaaring muling likhain, kaya't mangyaring i-save ang file kaagad pagkatapos ng pagbabayad."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download pagkatapos ng pagbabayad,** maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pag-withdraw ng aplikasyon dahil sa simpleng pagbabago ng isip ay limitado. Ito ay isang digital na nilalaman na ibinibigay kaagad at hindi maibabalik sa orihinal na estado, na naaayon sa mga dahilan ng limitasyon sa pag-withdraw ng aplikasyon na itinakda sa Artikulo 17, Seksyon 2 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan.",
        "**Kung ang dokumento ay hindi nalikha dahil sa error sa sistema, o ang file ay hindi mabuksan, o ang halaga ng pagbabayad ay iba sa order,** ito ay ipoproseso bilang muling pag-isyu o buong refund.",
        "**Ang mga reklamo tungkol sa nilalaman ng resulta** ay hindi itinuturing na dahilan para sa refund. Ang interpretasyon ng saju (사주) ay isang sanggunian mula sa tradisyonal na pananaw ng Myeongri, at ito ay ipinaalam bago ang pagbabayad (tingnan ang Seksyon 1).",
        "Ang mga muling pag-isyu na ginamit na ang 5 beses ay hindi itinuturing na dahilan para sa refund.",
        "**Kung ang isang menor de edad ay nagbayad nang walang pahintulot ng legal na kinatawan,** maaaring kanselahin ng sarili o ng legal na kinatawan ang pagbabayad. Mangyaring ipaalam sa ibaba ng contact para sa refund."
      ]
    },
    {
      "heading": "4. Tungkol sa mga Resulta ng Pagkalkula",
      "paragraphs": [
        "Lahat ng mga puntos ay kinakalkula ayon sa mga pampublikong patakaran, kaya kung pareho ang mga halaga na ipinasok, palaging pareho ang resulta.",
        "Kung hindi ipinasok ang oras ng kapanganakan, ang pagkalkula ay isasagawa nang hindi isinasaalang-alang ang siju (時柱), kaya maaaring magbago ang resulta. Ang mas tumpak na pagpili ng lugar ng kapanganakan ay nagreresulta sa mas tumpak na pagkalkula ng siju.",
        "Ang pagkalkula ng manseryeok (萬歲曆) ay gumagamit ng pampublikong aklatan ng pagkalkula, at maaaring mag-iba ang mga resulta ng manseryeok batay sa paraan ng pagproseso ng mga solar term at time zone."
      ]
    },
    {
      "heading": "5. Responsibilidad ng Gumagamit",
      "paragraphs": [
        "Maaaring ipasok ng gumagamit ang petsa ng kapanganakan ng ibang tao, subalit hindi ito dapat gamitin sa paraang makakapinsala sa ibang tao.",
        "Huwag gamitin ang mga resulta ng serbisyo bilang batayan para sa mga desisyon na makakaapekto sa mga karapatan ng ibang tao tulad ng kasal, diborsyo, pagkuha ng empleyado, o transaksyon. Ang serbisyo ay hindi nilikha para sa mga ganitong layunin."
      ]
    },
    {
      "heading": "6. Mga Bawal na Gawain",
      "paragraphs": [
        "Ang mga sumusunod na gawain ay hindi pinapayagan."
      ],
      "bullets": [
        "Ang pagpapadala ng labis na mga kahilingan gamit ang mga automated na tool na nakakasagabal sa operasyon ng serbisyo",
        "Ang pagpapakita ng mga resulta ng serbisyo bilang mga katotohanan o mga resulta ng opinyon ng eksperto",
        "Ang pagkopya o pagbabago ng serbisyo upang magbigay ng parehong serbisyo"
      ]
    },
    {
      "heading": "7. Pagsususpinde ng Pananagutan",
      "paragraphs": [
        "Ang serbisyo ay nagbibigay lamang ng mga sanggunian at hindi kami mananagot para sa mga desisyong ginawa ng gumagamit batay sa mga resulta at ang mga resulta nito.",
        "Hindi kami mananagot para sa anumang pinsala na dulot ng pagkasuspinde ng serbisyo dahil sa mga dahilan na hindi namin makontrol, tulad ng mga natural na kalamidad o mga pagkukulang ng tagapagbigay ng imprastruktura."
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
  "intro": "Ang Saju-Link ay hindi nag-iimbak ng impormasyon na kinakailangan para sa saju (四柱) na pagbasa. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, kung ano ang hindi naiwan, at kung ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ibinigay sa saju (四柱) na pagbasa ay **hindi nakaimbak saanman.** Ang mga ito ay ginagamit lamang sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitala sa database, at hindi rin ito naiwan sa hiwalay na file. Dahil walang pagpaparehistro, ang mga input na halaga ay hindi konektado sa isang tiyak na tao."
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
      "heading": "3. Impormasyon na Awtomatikong Nakokolekta",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ng serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa operasyon ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang server access record tulad ng IP address, petsa at oras ng pag-access, at uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang gumagamit. Ang impormasyon na ipinasok sa saju (四柱) na pagbasa ay hindi ipinapasa sa mga advertiser.",
        "Ang serbisyong ito ay naglalathala ng mga ad sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga sumusunod na bagay ay nangyayari."
      ],
      "bullets": [
        "Maaaring mag-imbak o magbasa ng cookies ang mga third-party na provider, kasama ang Google, sa browser ng gumagamit.",
        "Gumagamit ang Google ng cookies upang ipakita ang mga ad batay sa mga tala ng pagbisita sa site na ito at iba pang mga site.",
        "Maaaring i-disable ng gumagamit ang personalized na advertising sa Google ad settings (google.com/settings/ads). Kahit na ito ay na-disable, ang mga ad ay patuloy na ipapakita, ngunit ang kaugnayan sa gumagamit ay mababawasan.",
        "Maaaring i-disable ang personalized na advertising ng lahat ng third-party provider sa isang pagkakataon sa aboutads.info/choices.",
        "Mayroon ding paraan upang i-block ang cookies sa mga setting ng browser.",
        "Para sa mga gumagamit sa European Economic Area, UK, at Switzerland, unang hihingin ang pahintulot para sa paggamit ng advertising cookies."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Kapag nagbayad para sa bayad na produkto (saju life reading report PDF), ang impormasyon ng order ay nakaimbak para sa pagproseso ng pagbabayad at pag-iingat ng mga tala ng transaksyon ayon sa batas.",
        "**Ang mga halaga na ipinasok sa saju (四柱) na pagbasa at ang nilikhang PDF ay hindi nakaimbak kahit na nagbayad.** Ang prinsipyo sa itaas ay nananatiling pareho, anuman ang katayuan ng pagbabayad. Ang mga nakaimbak na item ay ang mga sumusunod, at hindi kasama ang impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng beses na na-download ang dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (lokal o pandaigdig)",
        "Tagal ng pag-iingat — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o hindi pagkakaunawaan ng mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay at Pagsasagawa ng Ikatlong Partido",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng personal na impormasyon na makikilala ang gumagamit, walang personal na impormasyon na ibinibigay sa ikatlong partido. Ang pagproseso ng pagbabayad ay ipinagkakatiwala sa mga sumusunod na provider.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa operasyon ng serbisyo, at sa prosesong ito, ang mga access record sa itaas ay pinoproseso ayon sa patakaran ng provider.",
        "Ang mga lokal na pagbabayad ay pinoproseso ng Toss Payments, at ang mga pandaigdigang pagbabayad ay pinoproseso ng PayPal sa pamamagitan ng PortOne. Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga provider na ito, at ang serbisyo ay hindi tumatanggap o nag-iimbak ng mga ito."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng mga input na halaga para sa saju (四柱) na pagbasa, walang maaaring hilingin na suriin, ituwid, o tanggalin. Ang natitirang tala ng order mula sa pagbabayad ay may obligasyong itago ayon sa batas sa loob ng tinukoy na panahon, kaya hindi ito maaaring tanggalin sa loob ng panahong iyon, at ito ay itatapon pagkatapos ng panahong iyon.",
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
