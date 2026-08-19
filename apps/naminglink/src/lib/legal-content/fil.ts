import { companyInfo, romanize, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Petsa ng pagkakabisa",
    referenceDate: "Simula noong",
    login: "Mag-log in",
    close: "Isara",
  },
  documents: {
    terms: {
      title: "Mga Tuntunin ng Serbisyo",
      description: `Inilalarawan ng mga tuntuning ito ang mga kondisyon sa paggamit at saklaw ng serbisyo ng ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Kalikasan ng Serbisyo",
          paragraphs: [
            "Ang Naming-Link ay isang AI-based naming studio na nag-aalok ng apat na pangunahing serbisyo. ① Pagtutugma ng kahulugan ng Hanja sa mga pangalan sa Korean ② Pag-convert ng mga pangalan sa Korean sa mga pandaigdigang pangalan ③ Pag-convert ng mga banyagang pangalan sa mga pangalan sa Korean ④ Pag-transliterate ng mga pandaigdigang pangalan sa Korean ayon sa pagbigkas.",
            "Ang mga resulta ay mga sanggunian na tumutulong sa pagbibigay ng pangalan at interpretasyon, at hindi nagbibigay ng garantiya para sa posibilidad ng opisyal na pagpaparehistro tulad ng sa mga tala ng pamilya, pasaporte, visa, trademark, at mga legal na dokumento.",
          ],
        },
        {
          title: "2. Paggamit ng mga Miyembro at Hindi Miyembro",
          paragraphs: [
            "Ang pagsusuri ng pangalan at pagtingin sa mga kandidato na may gantimpala sa advertising ay maaaring gamitin ng mga hindi miyembro. Ang pagpaparehistro bilang miyembro o pag-login ay kinakailangan lamang para sa mga tampok na nangangailangan ng account tulad ng pag-order ng mga produkto at pag-verify ng kasaysayan ng order.",
          ],
        },
        {
          title: "3. Responsibilidad sa AI Resulta at Pagsusuri",
          paragraphs: [
            "Ang mga rekomendasyon ng AI ay naglalaman ng mga linggwistik, kultural, at tradisyunal na sanggunian. Dapat tiyakin ng mga gumagamit ang pagiging angkop bago ang huling pagpili ng pangalan sa pamamagitan ng mga kaugnay na ahensya, mga eksperto, lokal na gumagamit, at pagsusuri ng batas at trademark.",
          ],
        },
        {
          title: "4. Bayad na Serbisyo",
          paragraphs: [
            "Ang detalyadong produkto ng serbisyo ng pagtutugma ng kahulugan ng Hanja ay ang mga sumusunod. ① Hanggang 5 kandidato na may detalyadong paliwanag at komprehensibong Hanja: ₩2,900 ② Hanggang 10 kandidato na may pinalawak na detalyadong paliwanag, komprehensibong Hanja at PDF para sa pag-iimbak: ₩4,900 ③ Hanggang 10 kandidato na may detalyado, komprehensibong Hanja, pagsusuri ng Saju·Ohaeng at PDF para sa pag-iimbak: ₩9,900.",
            "Sa serbisyo ng global na pagbabago ng pangalan, pagbabago ng pangalan ng Korea, at pagbigkas ng Hangul, maaaring mag-alok ng produkto na naglalantad ng lahat ng natitirang kandidato nang walang anunsyo sa isang pagkakataon (lokal na pagbabayad ₩990, banyagang pagbabayad US$1.99). Bago ma-activate ang function ng pagbabayad, tanging ang advertisement reward viewing lamang ang ibinibigay.",
            "Para sa mga digital na produkto para sa global na gumagamit, ④ PDF ng komprehensibong ulat ng pangalan sa Hangul (US$9.99): lahat ng inirekomendang kandidato na may napiling font, sining ng pangalan, paliwanag ng kahulugan, at sanggunian sa Ohaeng ⑤ PDF ng sining ng paglipat ng pagbigkas sa Hangul (US$2.99): sining ng pangalan na may napiling font at gabay sa pagbigkas ⑥ PDF ng pangalan art pack (US$1.99): isang napiling pangalan na ibinibigay sa sining ayon sa napiling font. Ang presyo ng bawat produkto at bilang ng mga font na naaangkop ay sumusunod sa mga halagang nakasaad sa screen.",
            "Ang bayad na detalyadong ulat at mga resulta ng pagsusuri, PDF file ay maaaring muling tingnan at i-download sa loob ng 24 na oras pagkatapos ng pagkumpleto ng pagbabayad, at awtomatikong mabubura pagkatapos ng panahon ng pag-iimbak.",
            "Ang presyo ng lokal na pagbabayad para sa mga pisikal na produkto tulad ng pangalan na selyo ay ₩39,000 / ₩59,000 / ₩79,000 at ibinibigay kasama ang mga kondisyon ng produkto.",
            "Ang presyo ng banyagang pagbabayad para sa parehong pisikal na produkto ay US$39.90 / US$59.90 / US$79.90 at kasama ang internasyonal na bayad sa pagpapadala.",
            "Ang lahat ng bayad na produkto ay naglalantad ng nilalaman ng produkto, presyo, paraan ng pagbibigay, at mga kondisyon ng refund sa screen bago ang pagbabayad.",
          ],
        },
        {
          title: "5. Serbisyo na may Gantimpala sa Advertising",
          paragraphs: [
            "Ang pag-unlock ng mga kandidato sa pamamagitan ng panonood ng advertising ay nalalapat lamang kapag nakumpleto ang normal na pagkumpirma ng gantimpala ng nagbibigay ng advertising. Ang automated na pag-play ng advertising, manipulasyon ng gantimpala, at hindi normal na paulit-ulit na mga kahilingan ay maaaring limitahan.",
          ],
        },
        {
          title: "6. Bawal na Gawain",
          paragraphs: [
            "Ipinagbabawal ang hindi awtorisadong pag-input ng personal na impormasyon ng ibang tao, paglikha ng mga pangalan para sa layunin ng diskriminasyon, poot, o impersonation, automated na labis na mga kahilingan, pagdudulot ng pagkasira ng serbisyo, at maling opisyal na sertipikasyon ng mga resulta.",
          ],
        },
        {
          title: "7. Limitasyon ng Responsibilidad",
          paragraphs: [
            "Ang kumpanya ay hindi mananagot para sa mga hindi tuwirang pinsala, pagkawala ng inaasahang kita, pagtanggi sa opisyal na pagpaparehistro, o mga hidwaan sa ikatlong partido na nagmula sa paggamit ng mga rekomendasyon ng AI maliban kung mayroong intensyon o malubhang kapabayaan.",
          ],
        },
        {
          title: "8. Mga Tanong",
          paragraphs: [
            `Mga tanong tungkol sa serbisyo: ${companyInfo.email}`,
          ],
        },
      ],
    },
    privacy: {
      title: "Patakaran sa Privacy",
      description: `Inilalarawan ng patakarang ito ang mga pamantayan ng ${companyInfo.serviceName} sa pagproseso ng personal na impormasyon.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Mga Item ng Personal na Impormasyon na Pinoproseso",
          paragraphs: [
            "Sa paggamit ng serbisyo ng pangalan para sa mga hindi rehistradong miyembro, ang pangalan, petsa ng kapanganakan, oras ng kapanganakan, bansa, wika, layunin ng paggamit, at mga pahiwatig sa pagbigkas ay pansamantalang pinoproseso sa proseso ng pagbuo ng mga resulta ng pagsusuri, ngunit ang mga nilalaman ng input at mga resulta ng pagbuo ay hindi nakaimbak sa database ng serbisyo.",
            "Sa pagpaparehistro at pag-login, ang email address at mga tala ng pag-login (kasaysayan ng pagpapatunay) ay pinoproseso.",
            "Kapag nagbabayad para sa bayad na detalyadong ulat, ang impormasyon sa pagkakakilanlan ng order, estado ng pagbabayad, at mga input at resulta ng pagsusuri na kinakailangan para sa pagbuo ng ulat ay pinoproseso sa loob ng panahon ng pag-iimbak (24 na oras pagkatapos ng pagbabayad). Ang impormasyon sa paraan ng pagbabayad tulad ng numero ng card ay direktang pinoproseso ng ahensya ng pagbabayad at hindi ito iniimbak ng kumpanya.",
            "Ang impormasyon ng pangalan ng nag-order, email, contact number, address, estado ng pagbabayad, at impormasyon sa pagproseso ng order ay maaari ring idagdag sa tanging paggamit ng function ng pag-order ng mga produkto.",
            "Para sa katatagan ng serbisyo at pag-iwas sa pang-aabuso, ang mga hash ng hindi nakikilalang bisita na nagbabago araw-araw, oras ng kahilingan, uri ng serbisyo, bilang ng libreng paggamit, AI token, oras ng tugon, estado ng pagproseso, at mga ad exposure at reward event ay maaaring iproseso bilang minimum na operating log.",
          ],
        },
        {
          title: "2. Layunin ng Pagproseso ng Personal na Impormasyon",
          paragraphs: [
            "Pinoproseso ang personal na impormasyon para sa rekomendasyon ng pangalan batay sa input, pagsusuri ng pagbigkas, pagsusuri ng wika at kultura ayon sa bansa, limitasyon ng libreng paggamit, pag-verify ng mga gantimpala sa advertising, pagtugon sa mga katanungan ng customer, pagproseso ng pagbabayad at pagpapadala, at pag-iwas sa maling paggamit.",
          ],
        },
        {
          title: "3. Imbakan at Pagsira",
          paragraphs: [
            "Ang mga input at resulta ng pagsusuri ay iniimbak sa account ng rehistradong miyembro lamang kung tahasang pinili ng miyembro na i-save ang mga resulta, at ito ay sisirain kapag ang miyembro ay nagtanggal o natapos na ang layunin ng pag-iimbak. Ang mga input at resulta ng mga hindi rehistradong miyembro at mga miyembrong hindi pumili ng pag-iimbak ay hindi iniimbak.",
            "Ang mga input, resulta ng pagsusuri, at PDF file ng bayad na detalyadong ulat ay awtomatikong mabubura pagkatapos ng 24 na oras mula sa pagkumpleto ng pagbabayad. Ang mga tala ng transaksyon sa pagbabayad at order ay hiwalay na iniimbak alinsunod sa legal na panahon ng pag-iimbak ng mga kaugnay na batas.",
            "Ang mga detalye ng pagpapadala ng order ng mga produkto (pangalan ng nag-order, email, contact number, address ng pagpapadala, mga kahilingan, at mga mensahe na ukit sa selyo) ay wawasakin pagkatapos ng 90 araw mula sa araw ng pagkumpleto ng pagpapadala o pagkansela ng order. Ang mga impormasyon ng input ng order na hindi umabot sa pagbabayad at nahinto ay wawasakin pagkatapos ng 24 na oras. Kahit na wawasakin, ang mga tala ng transaksyon sa pagbabayad at order ay mananatili alinsunod sa mga legal na panahon ng pag-iimbak ayon sa mga umiiral na batas.",
          ],
        },
        {
          title: "4. Pagbibigay at Pagsasagawa ng Ikatlong Partido",
          paragraphs: [
            "Upang mapatakbo ang serbisyo, ang mga kinakailangang impormasyon ay maaaring iproseso o ipasa sa Supabase (database at pagpapatunay), Vercel (hosting), OpenAI API (AI analysis), advertising network, ahensya ng pagbabayad (PortOne), at mga kasosyo sa pagpapadala at paggawa.",
          ],
        },
        {
          title: "5. Cookies at Patalastas",
          paragraphs: [
            "Ang serbisyo mismo ay hindi gumagamit ng cookies upang makilala o subaybayan ang mga gumagamit. Ang impormasyong ipinasok sa pangalan ng pagsusuri ay hindi ibinabahagi sa mga advertiser.",
            "Ang serbisyong ito ay naglalathala ng mga advertisement sa pamamagitan ng Google AdSense. Sa prosesong ito, ang mga third-party na provider kasama ang Google ay maaaring mag-imbak o magbasa ng cookies sa browser ng gumagamit, at ginagamit ng Google ang cookies batay sa mga rekord ng pagbisita sa site na ito at iba pang mga site upang magpakita ng mga advertisement.",
            "Kahit na gumagamit ng mga reward-based na advertisement at offer wall, ang parehong cookies ay ginagamit. Tanging kinukumpirma ng serbisyo kung ang advertisement ay napanood nang buo at ang pagbabayad ng reward, at hindi tumatanggap ng impormasyon na makikilala ang gumagamit mula sa mga advertiser.",
            "Maaaring i-disable ng mga gumagamit ang personalized na advertisement sa Google ad settings (google.com/settings/ads). Kahit na i-disable ito, ang mga advertisement ay patuloy na ipapakita, ngunit ang kaugnayan sa gumagamit ay bababa. Ang personalized na advertisement mula sa lahat ng third-party na provider ay maaaring i-disable nang sabay-sabay sa aboutads.info/choices, at may paraan din upang i-block ang cookies sa mga setting ng browser.",
            "Para sa mga gumagamit sa European Economic Area, UK, at Switzerland, humihingi ng pahintulot ang Google sa pamamagitan ng isang consent message bago gamitin ang advertising cookies.",
          ],
        },
        {
          title: "6. Paglipat ng Personal na Impormasyon sa Ibang Bansa",
          paragraphs: [
            "Ang kumpanya ay lumilipat (nagpapasa) ng personal na impormasyon sa ibang bansa para sa pagbibigay ng serbisyo gaya ng nakasaad sa ibaba. Ang paglipat ay isinasagawa sa pamamagitan ng paraan ng pagpapadala sa pamamagitan ng mga network ng impormasyon.",
            "① OpenAI, L.L.C. (Estados Unidos) — Mga item na ililipat: pangalan, petsa ng kapanganakan, oras ng kapanganakan, kasarian, bansa, wika at iba pang mga input para sa pagsusuri — Layunin ng paglipat: pagsusuri ng pangalan, pagbigkas, at kahulugan batay sa AI — Panahon ng paghawak at paggamit: panahon ng pagbibigay ng serbisyo (ang input data ay hindi ginagamit para sa pagsasanay ng modelo ayon sa patakaran ng OpenAI at mabubura pagkatapos ng maximum na 30 araw para sa layunin ng pagmamanman ng pang-aabuso).",
            "② Supabase, Inc. (Estados Unidos) — Mga item na ililipat: impormasyon sa estado ng order at pagbabayad, email ng miyembro, input at resulta ng bayad na ulat (24 na oras pagkatapos ng pagbabayad), pangalan ng nag-order, contact number, at address sa oras ng pag-order ng produkto — Layunin ng paglipat: database, pagpapatunay, at pag-iimbak — Panahon ng paghawak at paggamit: panahon ng pagbibigay ng serbisyo o hanggang sa panahon ng pag-iimbak ng bawat item.",
            "③ Vercel, Inc. (Estados Unidos) — Mga item na ililipat: impormasyon sa pag-access at kahilingan na ipinapadala sa proseso ng paggamit ng serbisyo — Layunin ng paglipat: hosting ng aplikasyon — Panahon ng paghawak at paggamit: panahon ng pagbibigay ng serbisyo.",
            "Maaaring tumanggi ang mga gumagamit sa pahintulot para sa paglipat ng personal na impormasyon sa ibang bansa, ngunit dahil ang pagproseso na ito ay mahalaga para sa pagbibigay ng serbisyo, ang pagtanggi ay maaaring magresulta sa limitasyon sa paggamit ng serbisyo.",
          ],
        },
        {
          title: "7. Mga Karapatan ng Gumagamit",
          paragraphs: [
            "Maaaring humiling ang mga gumagamit ng pag-access, pagwawasto, pagtanggal, paghinto ng pagproseso, at pag-atras ng pahintulot sa kanilang personal na impormasyon. Ang mga kahilingan ay tinatanggap sa pamamagitan ng email ng customer service at ipoproseso pagkatapos ng pagkilala sa pagkatao.",
          ],
        },
        {
          title: "8. Tagapangalaga ng Personal na Impormasyon",
          paragraphs: [
            `Tagapangalaga: ${romanize(companyInfo.privacyOfficer)}`,
            `Email: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Patakaran sa Refund at Pagkansela",
      description:
        "Inilalarawan ng patakarang ito ang mga pamantayan sa pagkansela at refund para sa mga digital na produkto at custom na gawang merchandise.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Pangkalahatang Prinsipyo",
          paragraphs: [
            "Kapag na-activate ang function ng pagbabayad, ang saklaw ng refund ay maaaring magbago batay sa paraan ng pagbibigay ng bawat produkto, oras ng pagsisimula ng paggawa, at kung ito ay maaaring i-download. Ang mga tiyak na kondisyon ay ipapaalam bago ang pagbabayad sa screen ng produkto.",
          ],
        },
        {
          title: "2. Detalyadong Ulat ng Hanja",
          paragraphs: [
            "Ang presyo ng lokal na pagbabayad para sa detalyadong ulat ng Hanja ay ₩2,900 / ₩4,900 / ₩9,900.",
            "Maaaring kanselahin bago magsimula ang paglikha ng AI detalyadong pagsusuri pagkatapos ng pagbabayad. Kapag natapos na ang paglikha ng pagsusuri at maaari na itong tingnan o i-download, ang mga refund dahil sa simpleng pagbabago ng isip ay maaaring limitahan.",
            "Kung may mga pagkakamali sa nilalaman, pagkabigo sa paglikha dahil sa mga problema sa sistema, o kung may hindi pagkakatugma sa halaga ng pagbabayad, ito ay ipoproseso bilang muling pag-isyu o refund. Ang mga kaso kung saan natapos na ang pag-download dahil sa paglipas ng panahon ng pag-iingat (24 na oras pagkatapos ng pagbabayad) ay hindi itinuturing na dahilan para sa refund.",
          ],
        },
        {
          title: "3. Pangkalahatang Pagbubunyag ng mga Kandidato",
          paragraphs: [
            "Ang lokal na presyo para sa pangkalahatang pagbubunyag ng mga kandidato ay ₩990.",
            "Ang presyo para sa pangkalahatang pagbubunyag ng parehong produkto sa ibang bansa ay US$1.99.",
            "Ang pangkalahatang pagbubunyag ng global name conversion, Korean name conversion, at Hangul pronunciation notation service ay digital content na ibinibigay agad pagkatapos ng pagbabayad. Maaaring kanselahin bago magsimula ang pagtingin sa mga kandidato, ngunit ang pagbabalik dahil sa simpleng pagbabago ng isip ay maaaring limitahan pagkatapos ng pagtingin.",
            "Kung ang mga kandidato ay hindi maayos na naipakita dahil sa error ng sistema, ito ay ipoproseso bilang muling pagbibigay o refund.",
          ],
        },
        {
          title: "4. Global na Digital na PDF na Produkto",
          paragraphs: [
            "Ang Comprehensive Report ng mga Pangalan sa Hangul (US$9.99), Art ng Paglipat ng Pagbigkas sa Hangul (US$2.99), at Name Art Pack (US$1.99) ay mga digital na nilalaman na nalikha pagkatapos ng pagbabayad. Maaaring kanselahin bago magsimula ang paglikha ng PDF, ngunit pagkatapos makumpleto ang paglikha at maging available para sa pag-download, ang mga refund dahil sa simpleng pagbabago ng isip ay maaaring limitahan.",
            "Kung mayroong pagkabigo sa paglikha, pagkakamali sa nilalaman, o hindi pagkakatugma ng halaga ng pagbabayad, ito ay ipoproseso bilang muling pag-isyu o refund. Ang pag-expire ng panahon ng pag-iimbak (24 oras pagkatapos ng pagbabayad) na nagresulta sa pagtigil ng pag-download ay hindi itinuturing na dahilan para sa refund.",
          ],
        },
        {
          title: "5. Pasadyang Gawaing Merchandise (Tulad ng Pangalan na Selyo atbp.)",
          paragraphs: [
            "Ang presyo ng lokal na pagbabayad para sa mga personal na pasadyang gawaing tulad ng pangalan na selyo ay ₩39,000 / ₩59,000 / ₩79,000.",
            "Ang presyo ng banyagang pagbabayad para sa parehong produkto ay US$39.90 / US$59.90 / US$79.90 at kasama na ang internasyonal na bayad sa pagpapadala.",
            "Ang mga personal na pasadyang gawaing produkto ay maaaring kanselahin hanggang bago simulan ang paggawa. Matapos simulan ang paggawa, ang mga inskripsyon ay nakatakdang pasadyang, kaya't ang simpleng pagbabago ng isip ay maaaring limitahan ang refund, at ang mga pagkakamali, pinsala, maling paggawa o mga isyu sa pagpapadala ay ipoproseso sa pamamagitan ng angkop na paraan ng pagpapalit, muling paggawa, o refund pagkatapos ng pagsusuri.",
          ],
        },
        {
          title: "6. Advertising Unlock",
          paragraphs: [
            "Ang mga benepisyo mula sa panonood ng advertisement ay hindi produkto ng pagbabayad. Kung ang kabayaran ay hindi ibinibigay dahil sa pagkakamali ng advertising network, ito ay ipoproseso sa pamamagitan ng muling pagtatangkang gawin sa loob ng serbisyo o sa pamamagitan ng pakikipag-ugnayan sa customer service.",
          ],
        },
        {
          title: "7. Mga Tanong",
          paragraphs: [
            `Para sa mga tanong tungkol sa refund: ${companyInfo.email}`,
          ],
        },
      ],
    },
    pricing: {
      title: "Gabay sa Presyo",
      description:
        "Inilalarawan ng gabay na ito ang saklaw ng mga libreng serbisyo at ang mga presyo ng mga bayad na produkto.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Pangunahing Pagsusuri (Libre)",
          paragraphs: [
            "Ang pangunahing pagsusuri ng apat na serbisyo: pagtutugma ng kahulugan ng Hanja, pandaigdigang pagbabago ng pangalan, pagbabago ng pangalan ng Koreano, at pagbigkas ng Hangul ay ibinibigay nang libre sa mga hindi miyembro at maaaring may limitasyon sa pang-araw-araw na paggamit. Sa ibaba ay nakalista lamang ang mga produktong maaaring bayaran ngayon kasama ang halaga, at hindi ipinapakita ang mga produktong hindi pa bukas.",
          ],
        },
        {
          title: "Paggamit ng Advertising Reward",
          paragraphs: [
            "Ang pag-unlock ng mga kandidato pagkatapos manood ng patalastas ay isang benepisyo na ibinibigay nang walang karagdagang bayad. Sa bawat patalastas, isang kandidato ang mabubuksan. Ang pagkakaroon nito ay maaaring magbago batay sa imbentaryo ng patalastas, bansa, aparato, o mga patakaran ng tagapagbigay ng patalastas. Sa mga panahon na walang patalastas, ang mga kandidato ay ilalabas nang libre nang walang ganitong hadlang.",
          ],
        },
        {
          title: "Detalyadong Produkto ng Pagtutugma ng Kahulugan ng Hanja",
          paragraphs: [
            "Hanggang 5 kandidato na may detalyadong paglalarawan at komprehensibong detalye ng Hanja: ₩2,900",
            "Hanggang 10 kandidato na may pinalawak na detalyadong paglalarawan, komprehensibong detalye ng Hanja at PDF para sa koleksyon: ₩4,900",
            "Hanggang 10 kandidato na may detalyado, komprehensibong detalye ng Hanja, pagsusuri ng Saju at Limang Elemento, at PDF para sa koleksyon: ₩9,900",
            "Ang mga bayad na ulat at PDF ay maaaring muling tingnan at i-download sa loob ng 24 na oras pagkatapos ng pagbabayad, at pagkatapos ay awtomatikong mabubura.",
          ],
        },
        {
          title: "Pangkalahatang Pagbubunyag ng mga Kandidato",
          paragraphs: [
            "Pangkalahatang pagbubunyag ng lahat ng natitirang kandidato sa serbisyo ng global na pangalan na pagbabago, pagbabago ng pangalan ng Koreano, at pagbaybay ng Hangul nang walang anunsyo (lokal na pagbabayad): ₩990",
            "Presyo ng banyagang pagbabayad para sa parehong produkto: US$1.99",
          ],
        },
        {
          title: "Pandaigdigang Digital na PDF na Produkto",
          paragraphs: [
            "Koreanong Pangalan na Komprehensibong Ulat PDF (Art, Kahulugan ng Pangalan ng Lahat ng Inirerekomendang Kandidato, at Sanggunian sa Limang Elemento): US$9.99",
            "Koreanong Pagbigkas na Paglipat ng Art PDF (Art ng Napiling Font at Patnubay sa Pagbigkas): US$2.99",
            "Pangalan Art Pack PDF (Isang Napiling Pangalan na Ibinigay sa Art ng Napiling Font): US$1.99",
            "Ang presyo at bilang ng mga font na naaangkop ay sumusunod sa mga halagang nakasaad sa screen, at ang PDF ay maaaring ma-download muli sa loob ng 24 na oras pagkatapos ng pagbabayad at awtomatikong mabubura pagkatapos nito.",
          ],
        },
        {
          title: "Mga Produkto ng Pangalan sa Hangul",
          paragraphs: [
            "Pangalan na Selyo (lokal na pagbabayad): ₩39,000 / ₩59,000 / ₩79,000",
            "Pangalan na Selyo (internasyonal na pagbabayad): US$39.90 / US$59.90 / US$79.90 (kasama ang internasyonal na bayad sa pagpapadala)",
            "Ang iba pang mga pisikal na produkto ay may hiwalay na abiso para sa presyo, bayad sa pagpapadala, at tagal ng paggawa.",
          ],
        },
        {
          title: "Mga Batayan ng Halaga",
          paragraphs: [
            "Ang halaga ng pagbabayad, gastos sa pagpapadala, panahon ng paggawa, at mga kondisyon ng pagbabalik ay muling ipapaalam sa screen ng produkto bago ang pagbabayad, at kung ang halaga sa dokumentong ito ay naiiba sa halaga sa screen ng produkto, ang halaga sa screen ng produkto ang magiging batayan.",
          ],
        },
      ],
    },
  },
};

export default content;
