import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang InyeonLink ay hindi nag-iimbak ng impormasyon na kinakailangan para sa pagkalkula ng compatibility. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, ano ang hindi naiwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pagkalkula ng compatibility ay **hindi nakaimbak kahit saan.** Ginagamit lamang ito sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database, at hindi rin ito naiwan sa hiwalay na file. Dahil walang pagpaparehistro, ang mga input na halaga ay hindi nakakabit sa isang tiyak na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta ng Link",
      "paragraphs": [
        "Ang address ng resulta ng screen ay naglalaman ng mga input na halaga na naka-encode. Gayunpaman, ang halagang ito ay matatagpuan pagkatapos ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman pagkatapos ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta ng link, ang mga tala ng pag-access sa server ay naglalaman lamang ng landas ng address.",
        "Kung ibabahagi ang resulta ng link sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga input na halaga, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
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
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang subaybayan ang mga gumagamit.",
        "Sa kasalukuyan, walang mga ad na ipinapakita sa serbisyong ito. Kung sakaling maglagay ng mga ad sa hinaharap, maaaring gumamit ang mga tagapagbigay ng ad (halimbawa: Google) ng cookies para sa paglalagay ng ad. Sa mga pagkakataong iyon, babaguhin muna ang seksyon na ito upang ipahayag kung ano ang nagbago bago simulan."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Pagbabayad",
      "paragraphs": [
        "Sa kasalukuyan, hindi nagbebenta ng mga bayad na produkto, kaya walang impormasyon na nakaimbak kaugnay ng pagbabayad.",
        "Kapag nagsimula na ang pagbebenta, ang mga sumusunod na item ay maiimbak para sa pagproseso ng pagbabayad at pag-iingat ng mga tala ng transaksyon ayon sa batas. **Sa mga pagkakataong iyon, ang mga input na halaga sa pagkalkula ng compatibility at ang nilikhang PDF ay hindi nakaimbak,** at hindi rin kami tumatanggap ng impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng pag-download ng dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (lokal, pandaigdig)",
        "Tagal ng pag-iingat — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng mga Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o hindi pagkakaunawaan ng mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay at Pagproseso ng Ikatlong Partido",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang personal na impormasyon na ibinibigay sa ikatlong partido.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa pagpapatakbo ng serbisyo, at sa prosesong ito, ang mga tala ng pag-access sa itaas na seksyon ay pinoproseso ayon sa patakaran ng nasabing negosyo.",
        "Kapag nagsimula na ang pagbebenta ng mga bayad na produkto, ang lokal na pagbabayad ay ipapasa sa Toss Payments, at ang pandaigdigang pagbabayad ay ipapasa sa PortOne (PayPal). Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at hindi ito natatanggap ng serbisyo."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang dapat hilingin na suriin, ituwid, o tanggalin.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta ng link sa address bar ng browser.",
        "Kung may mga katanungan kaugnay sa paggamit ng serbisyo, mangyaring ipaalam sa amin sa ibaba ng contact."
      ]
    },
    {
      "heading": "8. Personal na Impormasyon ng mga Bata",
      "paragraphs": [
        "Ang serbisyong ito ay hindi nakatuon sa mga bata na wala pang 14 na taong gulang at hindi kami kumokolekta ng personal na impormasyon mula sa mga bata."
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
        "Kung may pagbabago sa patakarang ito, ilalathala ang petsa ng pagsisimula at ang mga pagbabago sa pahinang ito. Kung ang mga nilalaman ng pagproseso ay talagang magbabago, tulad ng paglalagay ng mga ad o pagsisimula ng pagbebenta ng mga bayad na produkto, ipapaalam muna ang mga pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d1 = {
  "title": "Mga Tuntunin ng Paggamit",
  "intro": "Ang mga tuntuning ito ay nagtatakda ng mga kondisyon para sa paggamit ng InyeonLink (na tinutukoy dito bilang “serbisyo”). Sa paggamit ng serbisyo, itinuturing na sumasang-ayon ka sa mga tuntuning ito.",
  "sections": [
    {
      "heading": "1. Kalikasan ng Serbisyo",
      "paragraphs": [
        "Ang serbisyo ay nagpapakita ng mga ugnayan ng dalawang tao batay sa kanilang petsa ng kapanganakan sa pamamagitan ng paglalapat ng mga patakaran ng tradisyonal na myongri (saju) at labindalawang hayop (zodiac).",
        "Ang ipinapakitang porsyento ng pagkakatugma at paliwanag ay **mga sanggunian mula sa tradisyonal na pananaw at hindi mga siyentipikong prediksyon o katiyakan tungkol sa relasyon.** Ang mababang marka ay hindi nangangahulugang masama ang relasyon, at ang mataas na marka ay hindi nangangahulugang garantisado ang relasyon."
      ]
    },
    {
      "heading": "2. Bayad sa Paggamit",
      "paragraphs": [
        "Sa kasalukuyan, ang serbisyo ay ibinibigay nang libre at hindi kinakailangan ang pagpaparehistro.",
        "Kapag nagsimula ang pagbebenta ng mga bayad na produkto (compatibility report PDF), ang mga kondisyon sa ibaba ng Seksyon 3 ay magiging naaangkop. Muli naming ipapaalam ang mga tuntuning ito bago simulan ang pagbebenta."
      ]
    },
    {
      "heading": "3. Bayad na Produkto at Refund",
      "paragraphs": [
        "Ang tanging bayad na produkto na ibinebenta ay **compatibility report PDF**. Gagawa kami ng isang PDF na dokumento na may tatlong pahina mula sa mga resulta sa screen, kasama ang mga halaga ng limang elemento na hindi ipinapakita sa screen.",
        "Ang presyo ay {priceDomestic} para sa mga lokal na pagbabayad (kasama ang VAT), at {priceGlobal} para sa mga banyagang pagbabayad. Para sa mga lokal na pagbabayad, maaaring gumamit ng credit/debit card at mga simpleng pagbabayad (Toss Payments, KakaoPay, NaverPay, Payco, atbp.) sa pamamagitan ng Toss Payments, at para sa mga banyagang pagbabayad, sa pamamagitan ng PayPal sa PortOne. Ang huling halaga ay nakabatay sa halagang ipinapakita sa screen ng pagbabayad.",
        "**Hindi nag-iimbak ang serbisyo ng mga input ng gumagamit o ng nilikhang PDF file.** Kapag naaprubahan ang pagbabayad, agad naming gagawin ang dokumento at ibababa ito, at walang anumang bagay na mananatili sa server. Samakatuwid, ang na-download na file ay dapat na itago ng gumagamit mismo.",
        "Kung ang pag-download ay naputol o nawala ang file, maaari itong ma-download muli ng **hanggang 5 beses** gamit ang parehong order. Gayunpaman, kung ang mga input ay nawala sa labas ng resulta ng screen, hindi na ito maaaring muling likhain, kaya't mangyaring i-save ang file kaagad pagkatapos ng pagbabayad."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download pagkatapos ng pagbabayad,** maaari itong kanselahin anumang oras at makuha ang buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pag-withdraw ng aplikasyon dahil sa simpleng pagbabago ng isip ay limitado. Ito ay isang digital na nilalaman na ibinibigay agad at hindi maibabalik, na naaayon sa mga dahilan ng limitasyon sa pag-withdraw ng aplikasyon na itinakda sa Artikulo 17, Seksyon 2 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan.",
        "**Kung ang dokumento ay hindi nalikha dahil sa error ng sistema, o ang file ay hindi mabuksan, o ang halaga ng pagbabayad ay iba sa order,** ito ay ipoproseso bilang muling pag-isyu o buong refund.",
        "**Ang mga reklamo tungkol sa nilalaman ng resulta** ay hindi itinuturing na dahilan para sa refund. Ang mga resulta ng pagkakatugma ay mga sanggunian mula sa tradisyonal na pananaw at ito ay ipinaalam bago ang pagbabayad (tingnan ang Seksyon 1).",
        "Ang mga muling pag-isyu pagkatapos magamit ang 5 beses ay hindi itinuturing na dahilan para sa refund.",
        "**Kung ang isang menor de edad ay nagbayad nang walang pahintulot ng kanilang legal na kinatawan,** maaaring kanselahin ng menor de edad o ng kanilang legal na kinatawan ang pagbabayad. Mangyaring ipaalam sa ibaba ng contact para sa refund."
      ]
    },
    {
      "heading": "4. Tungkol sa mga Resulta ng Pagkalkula",
      "paragraphs": [
        "Lahat ng marka ay kinakalkula batay sa mga pampublikong patakaran, kaya't kung pareho ang mga input, palaging pareho ang resulta.",
        "Kung hindi ipinasok ang oras ng kapanganakan, ang pagkalkula ay isasagawa nang hindi kasama ang oras ng haligi (시주), kaya't maaaring magbago ang resulta. Ang mas tumpak na pagpili ng lugar ng kapanganakan ay nagiging mas tumpak ang pagkalkula ng oras ng haligi.",
        "Ang pagkalkula ng mga resulta ng myanseong ay gumagamit ng pampublikong library ng pagkalkula, at maaaring mag-iba ang mga resulta batay sa paraan ng pagproseso ng mga panahon at time zone."
      ]
    },
    {
      "heading": "5. Responsibilidad ng Gumagamit",
      "paragraphs": [
        "Maaaring ipasok ng gumagamit ang petsa ng kapanganakan ng ibang tao, ngunit hindi dapat gamitin ang mga resulta sa paraang makakapinsala sa ibang tao.",
        "Huwag gamitin ang mga resulta ng serbisyo bilang batayan para sa mga desisyon na nakakaapekto sa mga karapatan ng iba, tulad ng kasal, diborsyo, pagkuha, o transaksyon. Ang serbisyo ay hindi nilikha para sa mga ganitong layunin."
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
        "Ang pagkopya o pagbabago ng serbisyo upang magbigay ng katulad na serbisyo"
      ]
    },
    {
      "heading": "7. Pagsasanggalang",
      "paragraphs": [
        "Ang serbisyo ay nagbibigay lamang ng mga sanggunian at hindi mananagot para sa mga desisyon at resulta na ginawa ng gumagamit batay sa mga resulta.",
        "Hindi kami mananagot para sa anumang pinsala na dulot ng hindi maiiwasang mga dahilan tulad ng mga natural na sakuna o mga pagkukulang ng tagapagbigay ng imprastruktura na nagdudulot ng pagkaantala ng serbisyo."
      ]
    },
    {
      "heading": "8. Karapatan sa Intelektwal na Ari-arian",
      "paragraphs": [
        "Ang mga karapatan sa mga screen ng serbisyo, mga teksto, at mga implementasyon ng mga patakaran sa pagkalkula ay pagmamay-ari ng operator. Maaaring i-save o ibahagi ng gumagamit ang mga resulta para sa personal na layunin ng pagtingin."
      ]
    },
    {
      "heading": "9. Pagbabago ng Tuntunin at Batas na Namamahala",
      "paragraphs": [
        "Kung may pagbabago sa mga tuntunin, ito ay ipopost sa pahinang ito kasama ang petsa ng pagpapatupad.",
        "Ang mga tuntuning ito ay pinamamahalaan ng batas ng Republika ng Korea, at ang mga hidwaan na may kaugnayan sa paggamit ng serbisyo ay susunod sa mga pamamaraan na itinakda ng mga kaugnay na batas."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d2 = {
  "title": "Patakaran sa Refund at Pagkansela",
  "intro": "Ito ang mga pamantayan para sa pagkansela at refund ng compatibility report PDF. Inilagay namin ang mga nilalaman ng Artikulo 3 sa isang lugar.",
  "sections": [
    {
      "heading": "1. Kalikasan ng Produkto",
      "paragraphs": [
        "Ang ibinibentang produkto ay isang **compatibility report PDF** at ito ay isang digital na nilalaman na agad na nilikha at ipinapadala sa sandaling maaprubahan ang pagbabayad.",
        "**Hindi nag-iimbak ang serbisyo ng mga input ng gumagamit o ng nilikhang PDF file.** Kaya't ang na-download na file ay dapat itago ng gumagamit mismo."
      ]
    },
    {
      "heading": "2. Pagbawi ng Order",
      "paragraphs": [
        "Sinasalamin nito ang mga pamantayan na itinakda ng batas sa elektronikong kalakalan."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download,** maaari itong kanselahin anumang oras at makakuha ng buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pagbawi ng order dahil sa simpleng pagbabago ng isip ay limitado. Ito ay isang digital na nilalaman na ibinibigay agad at hindi na maibabalik sa orihinal na estado, na tumutugma sa mga dahilan ng limitasyon na itinakda sa Artikulo 17, Seksyon 2 ng 「Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan」. Ipinapaalam at kinukuha ang pahintulot sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "3. Mga Kasong Nagbibigay ng Buong Refund",
      "paragraphs": [
        "Sa mga sumusunod na kaso, ang dahilan ay susuriin bago iproseso ang muling pag-isyu o buong refund."
      ],
      "bullets": [
        "Kung ang dokumento ay hindi nalikha dahil sa error ng sistema",
        "Kung ang na-download na file ay hindi mabuksan",
        "Kung ang halaga ng pagbabayad ay iba sa order",
        "**Kung ang menor de edad ay nagbayad nang walang pahintulot ng legal na kinatawan** — Maaaring humiling ng pagkansela ang nagbayad o ang legal na kinatawan."
      ]
    },
    {
      "heading": "4. Mga Kasong Hindi Maaaring I-refund",
      "paragraphs": [],
      "bullets": [
        "**Hindi pagkakaunawaan sa nilalaman ng resulta.** Ang resulta ng compatibility ay isang sanggunian mula sa tradisyonal na pananaw at ito ay ipinaalam bago ang pagbabayad.",
        "Muling paghingi pagkatapos gamitin ang lahat ng 5 pagkakataon para sa muling pag-isyu."
      ]
    },
    {
      "heading": "5. Paraan ng Pagsusumite",
      "paragraphs": [
        "Mangyaring isumite ang mga refund o katanungan sa customer center ({customerCenter}) o sa email ({email}). Kung ibibigay mo ang numero ng order, mas mabilis ang pag-verify.",
        "Ang refund ay ibabalik gamit ang paraan ng pagbabayad na ginamit, at maaaring tumagal ng 3-7 araw ng negosyo para maipakita ito batay sa mga patakaran ng card issuer o payment provider."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d3 = {
  "title": "Impormasyon sa Presyo",
  "intro": "Ipinapahayag ang saklaw ng mga libreng serbisyo at ang presyo ng mga bayad na produkto.",
  "sections": [
    {
      "heading": "1. Libre",
      "paragraphs": [
        "**Ang pagkalkula ng pagkakatugma at pagtingin sa mga resulta ay libre.** Hindi kinakailangan ang pagpaparehistro.",
        "Maaari mong makita ang rate ng pagtutugma, mga iskor sa bawat kategorya, ang saju (사주) ng dalawang tao at ang mga elemento ng kanilang relasyon, pati na rin ang anyo ng kanilang koneksyon sa screen."
      ]
    },
    {
      "heading": "2. Compatibility Report PDF (bayad)",
      "paragraphs": [
        "Presyo sa loob ng bansa {priceDomestic} (kasama ang buwis) · Presyo sa ibang bansa {priceGlobal}",
        "Gagawin naming isang 3-pahinang PDF na dokumento ang mga resulta sa screen. Kasama rito ang mga halaga ng mga elemento na hindi nakikita sa screen.",
        "Maaari mong i-download muli ang parehong order ng **hanggang 5 beses**. Gayunpaman, kung mawala ang mga input na halaga sa labas ng resulta sa screen, hindi na ito maibabalik, kaya't mangyaring i-save ang file kaagad pagkatapos ng pagbabayad."
      ]
    },
    {
      "heading": "3. Paraan ng Pagbabayad",
      "paragraphs": [
        "**Sa loob ng bansa** — Maaari mong gamitin ang mga credit/debit card at mga simpleng pagbabayad (Toss Payments, KakaoPay, NaverPay, Payco, atbp.) sa pamamagitan ng Toss Payments.",
        "**Sa ibang bansa** — Maaari kang magbayad gamit ang PayPal sa pamamagitan ng PortOne.",
        "Ang huling halaga ng pagbabayad ay nakabatay sa halagang ipinapakita sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "4. Pagbabago ng Presyo",
      "paragraphs": [
        "Kung may pagbabago sa presyo, ito ay unang ipo-post sa pahinang ito. Ang mga nagawang order na ay hindi maaapektuhan ng binagong presyo."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d4 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang InyeonLink ay hindi nag-iimbak ng impormasyon na kinakailangan para sa pagkalkula ng compatibility. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, ano ang hindi naiwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang mga petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pagkalkula ng compatibility ay **hindi nakaimbak kahit saan.** Ang mga ito ay ginagamit lamang sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database at hindi rin naiwan sa hiwalay na file. Dahil walang pagpaparehistro, ang mga input na halaga ay hindi konektado sa sinumang partikular na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta ng Link",
      "paragraphs": [
        "Ang address ng resulta ng screen ay naglalaman ng mga input na halaga na naka-encode. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # ng address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta ng link, ang mga tala ng pag-access sa server ay naglalaman lamang ng landas ng address.",
        "Kung ibabahagi ang resulta ng link sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Ang link mismo ay naglalaman ng mga input na halaga, kaya ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa operasyon ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang mga tala ng pag-access sa server tulad ng IP address, petsa at oras ng pag-access, at uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang mga gumagamit. Ang impormasyon na ipinasok sa pagkalkula ng compatibility ay hindi ipinapasa sa mga advertiser.",
        "Ang serbisyong ito ay naglalathala ng mga ad sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga sumusunod na bagay ay nangyayari."
      ],
      "bullets": [
        "Ang mga third-party na provider, kabilang ang Google, ay maaaring mag-imbak o magbasa ng cookies sa browser ng gumagamit.",
        "Gumagamit ang Google ng cookies upang mag-publish ng mga ad batay sa mga tala ng pagbisita sa site na ito at iba pang mga site.",
        "Maaaring i-disable ng gumagamit ang mga personalized na ad sa mga setting ng ad ng Google (google.com/settings/ads). Kahit na i-disable ito, ang mga ad ay patuloy na ipapakita, ngunit ang kaugnayan sa gumagamit ay bababa.",
        "Maaaring sabay-sabay na i-disable ang mga personalized na ad ng mga third-party na provider sa aboutads.info/choices.",
        "May mga paraan din upang i-block ang cookies sa mga setting ng browser.",
        "Para sa mga gumagamit sa European Economic Area, UK, at Switzerland, unang hihingin ang pahintulot para sa paggamit ng advertising cookies."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Sa kasalukuyan, wala kaming ibinebentang bayad na produkto, kaya walang impormasyon na nakaimbak kaugnay ng pagbabayad.",
        "Kapag nagsimula na ang pagbebenta, ang mga sumusunod na item ay maiimbak para sa pagproseso ng pagbabayad at pag-iingat ng mga tala ng transaksyon ayon sa batas. **Sa oras na iyon, ang mga halaga na ipinasok sa pagkalkula ng compatibility at ang nalikhang PDF ay hindi nakaimbak,** at hindi rin kami tumatanggap ng impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at estado ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, estado ng pagproseso, bilang ng beses na na-download ang dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (lokal o pandaigdig)",
        "Tagal ng pag-iingat — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o pagtatalo ng mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay at Pagproseso ng Impormasyon sa Ikatlong Partido",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang personal na impormasyon na ibinibigay sa mga third-party.",
        "Gumagamit kami ng hosting infrastructure mula sa {hostingProvider} para sa operasyon ng serbisyo, at sa prosesong ito, ang mga tala ng pag-access sa itaas na seksyon ay pinoproseso ayon sa patakaran ng nasabing negosyo.",
        "Kapag nagsimula na ang pagbebenta ng bayad na produkto, ang mga lokal na pagbabayad ay ipinapasa sa Toss Payments, at ang mga internasyonal na pagbabayad ay ipinapasa sa PortOne (PayPal). Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at hindi ito natatanggap ng serbisyo."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil walang nakaimbak na personal na impormasyon, walang maaaring hilingin na suriin, ituwid, o tanggalin.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan ng pagtanggal ng resulta ng link sa address bar ng browser.",
        "Kung may mga katanungan kaugnay ng paggamit ng serbisyo, mangyaring ipaalam sa amin sa ibaba ng contact."
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
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagpapatupad at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung ang mga nilalaman ng pagproseso ay talagang nagbabago, tulad ng pagsisimula ng paglalathala ng mga ad o pagbebenta ng bayad na produkto, ipapaalam muna ang tungkol sa pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
};

const d5 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang InyeonLink ay hindi nag-iimbak ng impormasyon na kinakailangan para sa pagkalkula ng compatibility. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, ano ang hindi naiwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang mga petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pagkalkula ng compatibility ay **hindi nakaimbak kahit saan.** Ginagamit lamang ang mga ito sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database at hindi rin naiwan sa hiwalay na file. Dahil walang pagpaparehistro, ang mga input na halaga ay hindi nakakabit sa sinumang partikular na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta ng Link",
      "paragraphs": [
        "Ang address ng resulta ng screen ay naglalaman ng mga input na halaga na naka-encode. Gayunpaman, ang halagang ito ay nasa likod ng # sa address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta ng link, ang mga tala ng pag-access sa server ay naglalaman lamang ng landas ng address.",
        "Kung ibabahagi ang resulta ng link sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Dahil ang link mismo ay naglalaman ng mga input na halaga, ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa operasyon ng web service ay awtomatikong naiwan ng tagapagbigay ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang mga tala ng pag-access sa server tulad ng IP address, petsa at oras ng pag-access, at uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang subaybayan ang mga gumagamit.",
        "Sa kasalukuyan, walang mga advertisement na ipinapakita sa serbisyong ito. Kung sakaling maglagay ng mga advertisement sa hinaharap, maaaring gumamit ang mga tagapagbigay ng advertisement (halimbawa: Google) ng cookies para sa paglalagay ng advertisement. Sa mga pagkakataong iyon, unang babaguhin ang seksyon na ito upang ipahayag kung ano ang nagbago bago simulan."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Pagbabayad",
      "paragraphs": [
        "Kapag nagbayad para sa bayad na produkto (compatibility report PDF), ang impormasyon ng order ay nakaimbak para sa pagproseso ng pagbabayad at ayon sa mga batas na nag-uutos ng pag-iimbak ng tala ng transaksyon.",
        "**Ang mga halaga na ipinasok sa pagkalkula ng compatibility at ang nilikhang PDF ay hindi nakaimbak kahit na nagbayad.** Ang prinsipyo sa itaas ay nananatiling pareho anuman ang katayuan ng pagbabayad. Ang mga nakaimbak na item ay ang mga sumusunod, at hindi kasama ang impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at katayuan ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, katayuan ng pagproseso, bilang ng pag-download ng dokumento, petsa ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (lokal, pandaigdig)",
        "Tagal ng pag-iimbak — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng mga Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o hindi pagkakaunawaan ng mga mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay sa Ikatlong Partido at Pagsasagawa ng Delegasyon",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng personal na impormasyon na makikilala ang gumagamit, wala ring personal na impormasyon na ibinibigay sa ikatlong partido. Ang pagproseso ng pagbabayad ay ipinagkakatiwala sa mga sumusunod na negosyo.",
        "Gumagamit ng hosting infrastructure mula sa {hostingProvider} para sa operasyon ng serbisyo, at sa prosesong ito, ang mga tala ng pag-access sa itaas ay pinoproseso ayon sa patakaran ng nasabing negosyo.",
        "Ang mga lokal na pagbabayad ay pinoproseso ng Toss Payments, habang ang mga pandaigdigang pagbabayad ay pinoproseso ng PayPal sa pamamagitan ng PortOne. Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga negosyong ito, at ang serbisyo ay hindi tumatanggap o nag-iimbak ng mga ito."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng mga input na halaga para sa pagkalkula ng compatibility, walang dapat hilingin na suriin, ituwid, o tanggalin. Ang mga natitirang tala ng order mula sa pagbabayad ay may obligasyong itago sa loob ng takdang panahon ayon sa batas, kaya hindi ito maaaring tanggalin sa loob ng panahong iyon, at itatapon ito pagkatapos ng panahong iyon.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta ng link sa address bar ng browser.",
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
        "Opisyal na Namamahala: {privacyOfficer}",
        "Contact: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Pagbabago ng Patakaran",
      "paragraphs": [
        "Kung may pagbabago sa patakarang ito, ilalathala ang petsa ng pagsisimula at mga detalye ng pagbabago sa pahinang ito. Kung ang mga nilalaman ng pagproseso ay talagang magbabago, tulad ng pagsisimula ng paglalathala ng advertisement o pagbebenta ng bayad na produkto, ipapaalam muna ang pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d6 = {
  "title": "Mga Tuntunin ng Paggamit",
  "intro": "Ang mga tuntuning ito ay nagtatakda ng mga kondisyon para sa paggamit ng InyeonLink (na tinutukoy dito bilang “serbisyo”). Sa paggamit ng serbisyo, itinuturing na sumasang-ayon ka sa mga tuntuning ito.",
  "sections": [
    {
      "heading": "1. Kalikasan ng Serbisyo",
      "paragraphs": [
        "Ang serbisyo ay nagpapakita ng mga ugnayan ng dalawang tao batay sa kanilang petsa ng kapanganakan gamit ang mga tradisyonal na prinsipyo ng saju (사주) at mga alituntunin ng zodiac (띠).",
        "Ang ipinapakitang porsyento ng pagkakatugma at paliwanag ay **mga sanggunian mula sa tradisyonal na interpretasyon at hindi mga siyentipikong prediksyon o katiyakan tungkol sa relasyon.** Ang mababang marka ay hindi nangangahulugang masama ang relasyon, at ang mataas na marka ay hindi nangangahulugang garantisado ang relasyon."
      ]
    },
    {
      "heading": "2. Bayad sa Paggamit",
      "paragraphs": [
        "Ang pagkalkula ng pagkakatugma at pagtingin sa mga resulta ay libre at hindi kinakailangan ang pagpaparehistro.",
        "Ang pagtanggap ng mga resulta sa PDF na ulat ay may bayad. Ang presyo at mga kondisyon ay ipinapakita sa ibaba sa Seksyon 3 at sa screen ng pagbabayad."
      ]
    },
    {
      "heading": "3. Mga Bayad na Produkto at Refund",
      "paragraphs": [
        "Ang tanging bayad na produkto na ibinibenta ay ang **kompatibilidad na ulat PDF**. Gagawa kami ng isang 3-pahinang PDF na dokumento mula sa mga resulta sa screen, na naglalaman din ng mga halaga ng limang elemento na hindi ipinapakita sa screen.",
        "Ang presyo para sa mga lokal na pagbabayad ay {priceDomestic} (kasama ang VAT), at para sa mga internasyonal na pagbabayad ay {priceGlobal}. Para sa mga lokal na pagbabayad, maaaring gumamit ng credit/debit card at mga simpleng pagbabayad (Toss Payments, KakaoPay, NaverPay, Payco, atbp.) sa pamamagitan ng Toss Payments, at para sa mga internasyonal na pagbabayad, gamit ang PayPal sa pamamagitan ng PortOne. Ang huling halaga ay nakabatay sa halaga na ipinapakita sa screen ng pagbabayad.",
        "**Hindi nag-iimbak ang serbisyo ng mga input ng gumagamit o ng nilikhang PDF file.** Kapag naaprubahan ang pagbabayad, agad naming gagawin ang dokumento at ipapadala ito, at walang anumang natitira sa server. Samakatuwid, ang na-download na file ay dapat itago ng gumagamit mismo.",
        "Sa kaso ng pagkaantala ng pag-download o pagkawala ng file, maaaring i-download muli ang parehong order ng **hanggang 5 beses**. Gayunpaman, kung mawala ang mga input na halaga sa labas ng resulta ng screen, hindi na ito maaaring muling likhain, kaya't mangyaring i-save ang file agad pagkatapos ng pagbabayad."
      ],
      "bullets": [
        "**Bago magsimula ang pag-download pagkatapos ng pagbabayad,** maaari itong kanselahin anumang oras at makuha ang buong refund.",
        "**Matapos makumpleto ang pag-download,** ang pag-withdraw ng aplikasyon dahil sa simpleng pagbabago ng isip ay limitado. Ito ay isang digital na nilalaman na ibinibigay agad at hindi maibabalik sa orihinal na estado, na naaayon sa mga dahilan ng limitasyon sa pag-withdraw ng aplikasyon na itinakda sa Artikulo 17, Seksyon 2 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan.",
        "**Kung ang dokumento ay hindi nalikha dahil sa error ng sistema, o ang file ay hindi mabuksan, o ang halaga ng pagbabayad ay iba sa order,** ito ay ipoproseso bilang muling pag-isyu o buong refund.",
        "**Ang mga reklamo tungkol sa nilalaman ng resulta** ay hindi itinuturing na dahilan para sa refund. Ang mga resulta ng pagkakatugma ay mga sanggunian mula sa tradisyonal na interpretasyon at ang katangian nito ay ipinaalam bago ang pagbabayad (tingnan ang Seksyon 1).",
        "Ang mga muling pag-isyu na ginamit na ang 5 beses ay hindi itinuturing na dahilan para sa refund.",
        "**Kung ang isang menor de edad ay nagbayad nang walang pahintulot ng kanilang legal na tagapangalaga,** maaaring kanselahin ng nagbayad o ng kanilang legal na tagapangalaga ang pagbabayad. Mangyaring ipaalam sa ibaba ng contact para sa refund."
      ]
    },
    {
      "heading": "4. Tungkol sa Mga Resulta ng Kalkulasyon",
      "paragraphs": [
        "Lahat ng marka ay kinakalkula ayon sa mga pampublikong alituntunin, kaya't kung pareho ang mga input, palaging pareho ang resulta.",
        "Kung hindi ipinasok ang oras ng kapanganakan, ang kalkulasyon ay isasagawa nang hindi isinasaalang-alang ang oras ng kapanganakan (時柱), kaya't maaaring magbago ang resulta. Ang mas tumpak na pagpili ng lugar ng kapanganakan ay nagreresulta sa mas tumpak na kalkulasyon ng oras ng kapanganakan.",
        "Ang pagkalkula ng mga taon ng buhay ay gumagamit ng pampublikong library ng pagkalkula, at maaaring magkaiba ang mga resulta batay sa paraan ng pagproseso ng mga solar term at time zone."
      ]
    },
    {
      "heading": "5. Responsibilidad ng Gumagamit",
      "paragraphs": [
        "Maaaring ipasok ng gumagamit ang petsa ng kapanganakan ng ibang tao, ngunit hindi dapat gamitin ang mga resulta sa paraang makakapinsala sa ibang tao.",
        "Huwag gamitin ang mga resulta ng serbisyo bilang batayan para sa mga desisyon na nakakaapekto sa mga karapatan ng iba, tulad ng kasal, diborsyo, pagkuha, o transaksyon. Ang serbisyo ay hindi nilikha para sa mga ganitong layunin."
      ]
    },
    {
      "heading": "6. Mga Bawal na Gawain",
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
        "Ang serbisyo ay nagbibigay lamang ng mga sanggunian at hindi mananagot para sa mga desisyon at resulta na ginawa ng gumagamit batay sa mga ito.",
        "Hindi kami mananagot para sa anumang pinsala na dulot ng hindi maiiwasang mga dahilan tulad ng mga natural na kalamidad o mga pagkukulang ng mga tagapagbigay ng imprastruktura na nagdudulot ng pagkaantala sa serbisyo."
      ]
    },
    {
      "heading": "8. Karapatan sa Intelektwal na Ari-arian",
      "paragraphs": [
        "Ang mga karapatan sa mga screen ng serbisyo, mga teksto, at mga implementasyon ng mga alituntunin ng pagkalkula ay pagmamay-ari ng operator. Maaaring i-save o ibahagi ng gumagamit ang mga resulta para sa personal na layunin ng pagninilay."
      ]
    },
    {
      "heading": "9. Pagbabago ng Tuntunin at Batas na Namamahala",
      "paragraphs": [
        "Kung may pagbabago sa mga tuntunin, ito ay ipo-post sa pahinang ito kasama ang petsa ng pagsisimula.",
        "Ang mga tuntuning ito ay pinamamahalaan ng batas ng Republika ng Korea, at ang mga hidwaan na may kaugnayan sa paggamit ng serbisyo ay susunod sa mga pamamaraan na itinakda ng mga kaugnay na batas."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagsisimula"
};

const d7 = {
  "title": "Patakaran sa Pagproseso ng Personal na Impormasyon",
  "intro": "Ang InyeonLink ay hindi nag-iimbak ng impormasyon na kinakailangan para sa pagkalkula ng compatibility. Ang patakarang ito ay naglalarawan kung ano ang natatanggap ng serbisyo, ano ang hindi naiwan, at ano ang awtomatikong naitala.",
  "sections": [
    {
      "heading": "1. Impormasyon na Hindi Nakaimbak",
      "paragraphs": [
        "Ang mga petsa ng kapanganakan, oras ng kapanganakan, lugar ng kapanganakan, kasarian, at pangalan na ginagamit sa pagkalkula ng compatibility ay **hindi nakaimbak saanman.** Ang mga ito ay ginagamit lamang sa server memory habang pinoproseso ang kahilingan at nawawala kasama ng tugon.",
        "Hindi ito naitatala sa database at hindi rin naiwan sa hiwalay na file. Dahil walang pagpaparehistro, ang mga input na halaga ay hindi nakakabit sa isang partikular na tao."
      ]
    },
    {
      "heading": "2. Impormasyon na Nasa Resulta ng Link",
      "paragraphs": [
        "Ang address ng resulta ng screen ay naglalaman ng mga input na halaga na naka-encode. Gayunpaman, ang halagang ito ay matatagpuan sa likod ng # ng address, at ayon sa mga pamantayan ng web, ang nilalaman sa likod ng # ay hindi ipinapadala ng browser sa server. Samakatuwid, kahit na buksan ang resulta ng link, ang mga tala ng pag-access sa server ay naglalaman lamang ng landas ng address.",
        "Kung ibabahagi ang resulta ng link sa ibang tao, makikita rin ng taong iyon ang parehong resulta. Ang link mismo ay naglalaman ng mga input na halaga, kaya't ang desisyon sa pagbabahagi ay nasa kamay ng gumagamit."
      ]
    },
    {
      "heading": "3. Awtomatikong Nakokolektang Impormasyon",
      "paragraphs": [
        "Walang impormasyon na kinokolekta ang serbisyo upang makilala ang gumagamit. Gayunpaman, ang pinakamababang tala na kinakailangan para sa operasyon ng web service ay awtomatikong naiwan ng provider ng imprastruktura."
      ],
      "bullets": [
        "Karaniwang mga tala ng pag-access sa server tulad ng IP address, petsa at oras ng pag-access, at uri ng browser",
        "Impormasyon ng bansa — ginagamit lamang ito upang awtomatikong matukoy ang wika ng screen at hindi ito nakaimbak"
      ]
    },
    {
      "heading": "4. Cookies at Advertising",
      "paragraphs": [
        "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang gumagamit. Ang impormasyon na ipinasok sa pagkalkula ng compatibility ay hindi ipinapasa sa mga advertiser.",
        "Ang serbisyong ito ay naglalathala ng mga ad sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga sumusunod na bagay ay nangyayari."
      ],
      "bullets": [
        "Ang mga third-party provider, kasama ang Google, ay maaaring mag-imbak o magbasa ng cookies sa browser ng gumagamit.",
        "Gumagamit ang Google ng cookies upang mag-publish ng mga ad batay sa mga tala ng pagbisita sa site na ito at iba pang mga site.",
        "Maaaring i-disable ng gumagamit ang mga personalized na ad sa mga setting ng ad ng Google (google.com/settings/ads). Kahit na i-disable ito, ang mga ad ay patuloy na ipapakita, ngunit ang kaugnayan sa gumagamit ay bababa.",
        "Ang mga personalized na ad mula sa mga third-party provider ay maaaring i-disable nang sabay-sabay sa aboutads.info/choices.",
        "Mayroon ding paraan upang i-block ang cookies sa mga setting ng browser.",
        "Para sa mga gumagamit sa European Economic Area, UK, at Switzerland, unang hihingin ang pahintulot para sa paggamit ng advertising cookies."
      ]
    },
    {
      "heading": "5. Impormasyon na Nakaimbak sa Oras ng Pagbabayad",
      "paragraphs": [
        "Kapag nagbayad para sa bayad na produkto (compatibility report PDF), ang impormasyon ng order ay nakaimbak para sa pagproseso ng pagbabayad at ayon sa mga batas na nag-uutos ng pag-iimbak ng tala ng transaksyon.",
        "**Ang mga halaga na ipinasok sa pagkalkula ng compatibility at ang nilikhang PDF ay hindi nakaimbak kahit na nagbayad.** Ang prinsipyo sa itaas ay nananatiling pareho anuman ang katayuan ng pagbabayad. Ang mga nakaimbak na item ay ang mga sumusunod, at hindi kasama ang impormasyon na makikilala ang gumagamit tulad ng pangalan, contact, at address."
      ],
      "bullets": [
        "Numero ng order at identifier ng pagbabayad",
        "Halaga ng pagbabayad, currency, at katayuan ng pagbabayad (hindi pa nababayaran, nabayaran, nakansela)",
        "Uri ng produkto, katayuan ng pagproseso, bilang ng mga beses na na-download ang dokumento, oras ng order",
        "Wika ng screen sa oras ng order at pagkakaiba ng lokasyon ng pagbabayad (domestic, global)",
        "Tagal ng pag-iimbak — Ayon sa Artikulo 6 ng Batas sa Proteksyon ng Mamimili sa Elektronikong Kalakalan, ang mga tala ng pagbabayad at supply ng mga kalakal ay itinatago sa loob ng 5 taon, at ang mga tala ng reklamo o pagtatalo ng mamimili ay itinatago sa loob ng 3 taon bago itapon."
      ]
    },
    {
      "heading": "6. Pagbibigay sa Ikatlong Partido at Pagpapasa ng Pagproseso",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng personal na impormasyon na makikilala ang gumagamit, wala ring personal na impormasyon na ibinibigay sa ikatlong partido. Ang pagproseso ng pagbabayad ay ipinapasa sa mga sumusunod na provider.",
        "Gumagamit ng hosting infrastructure mula sa {hostingProvider} para sa operasyon ng serbisyo, at sa prosesong ito, ang mga tala ng pag-access sa itaas ay pinoproseso ayon sa patakaran ng provider.",
        "Ang domestic na pagbabayad ay pinoproseso ng Toss Payments, habang ang international na pagbabayad ay pinoproseso ng PayPal sa pamamagitan ng PortOne. Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card at numero ng account ay direktang pinoproseso ng mga provider na ito, at ang serbisyo ay hindi tumatanggap o nag-iimbak nito."
      ]
    },
    {
      "heading": "7. Mga Karapatan ng Gumagamit",
      "paragraphs": [
        "Dahil hindi nag-iimbak ng mga input na halaga para sa pagkalkula ng compatibility, walang dapat hilingin na suriin, ituwid, o tanggalin. Ang natitirang tala ng order mula sa pagbabayad ay may obligasyong itago sa loob ng takdang panahon ayon sa batas, kaya hindi ito maaalis sa loob ng panahong iyon, at itatapon ito pagkatapos ng panahong iyon.",
        "Maaaring alisin ng gumagamit ang lahat ng bakas ng input sa pamamagitan lamang ng pagtanggal ng resulta ng link sa address bar ng browser.",
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
      "heading": "9. Opisyal sa Proteksyon ng Personal na Impormasyon",
      "paragraphs": [
        "Opisyal sa proteksyon: {privacyOfficer}",
        "Contact: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Pagbabago ng Patakaran",
      "paragraphs": [
        "Kung may pagbabago sa patakarang ito, ang petsa ng pagpapatupad at mga detalye ng pagbabago ay ilalathala sa pahinang ito. Kung may mga aktwal na pagbabago sa mga nilalaman ng pagproseso tulad ng pagsisimula ng paglalathala ng mga ad o pagbebenta ng bayad na produkto, ipapaalam muna ang tungkol sa pagbabago."
      ]
    }
  ],
  "effectiveLabel": "Petsa ng Pagpapatupad"
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
