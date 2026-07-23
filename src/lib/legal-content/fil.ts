import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
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
            "Ang detalyadong produkto ng serbisyo ng pagtutugma ng kahulugan ng Hanja ay ang mga sumusunod. ① Hanggang 5 kandidato na may detalyadong paglalarawan at komprehensibong Hanja: 2,900 won ② Hanggang 10 kandidato na may pinalawak na detalyadong paglalarawan, komprehensibong Hanja at PDF para sa koleksyon: 4,900 won ③ Hanggang 10 kandidato na may detalyado, komprehensibong Hanja, pagsusuri ng fortune-telling at mga elemento, at PDF para sa koleksyon: 9,900 won.",
            "Sa mga serbisyo ng pag-convert ng pandaigdigang pangalan, pag-convert ng pangalan sa Korean, at pag-transliterate ng pangalan sa Korean, maaaring mag-alok ng produkto na naglalantad ng lahat ng natitirang kandidato nang walang advertising sa isang pagkakataon (990 won para sa domestic payment, US$1.99 para sa international payment). Bago ma-activate ang function ng pagbabayad, ang pagtingin ay limitado lamang sa gantimpala sa advertising.",
            "Para sa mga pandaigdigang gumagamit, ang mga digital na produkto ay ④ PDF ng komprehensibong ulat ng pangalan sa Korean (US$9.99): lahat ng inirekomendang kandidato na may pangalan ng font art, paliwanag ng kahulugan, at sanggunian sa fortune-telling ⑤ PDF ng art ng pag-convert ng pagbigkas sa Korean (US$2.99): art ng pangalan ng napiling font at gabay sa pagbigkas ⑥ PDF ng art pack ng pangalan (US$1.99): isang napiling pangalan na ibinibigay sa art ayon sa napiling font. Ang mga presyo ng bawat produkto at ang bilang ng mga font na inilapat ay sumusunod sa mga halagang nakasaad sa screen.",
            "Ang mga bayad na detalyadong ulat at resulta ng pagsusuri, PDF file ay maaaring muling tingnan at i-download sa loob ng 24 na oras pagkatapos ng pagkumpleto ng pagbabayad, at awtomatikong mabubura pagkatapos ng panahon ng pag-iimbak.",
            "Ang mga pisikal na produkto tulad ng pangalan ng selyo ay ibinibigay sa mga presyo at kondisyon ng produkto tulad ng 39,000 won para sa domestic at US$34.99 (kasama ang internasyonal na pagpapadala). Lahat ng bayad na produkto ay may impormasyon tungkol sa nilalaman ng produkto, presyo, paraan ng pagbibigay, at mga kondisyon ng refund na nakasaad sa screen bago ang pagbabayad.",
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
            "Mga tanong tungkol sa serbisyo: platforest.inc@gmail.com",
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
            "Ang mga detalye ng pagpapadala ay sisirain o magiging hindi nakikilalang pagkatapos ng kinakailangang panahon para sa pagproseso ng order at pagtugon sa mga pagbabalik at alitan.",
          ],
        },
        {
          title: "4. Pagbibigay at Pagsasagawa ng Ikatlong Partido",
          paragraphs: [
            "Upang mapatakbo ang serbisyo, ang mga kinakailangang impormasyon ay maaaring iproseso o ipasa sa Supabase (database at pagpapatunay), Vercel (hosting), OpenAI API (AI analysis), advertising network, ahensya ng pagbabayad (PortOne), at mga kasosyo sa pagpapadala at paggawa.",
          ],
        },
        {
          title: "5. Paglipat ng Personal na Impormasyon sa Ibang Bansa",
          paragraphs: [
            "Ang kumpanya ay lumilipat (nagpapasa) ng personal na impormasyon sa ibang bansa para sa pagbibigay ng serbisyo gaya ng nakasaad sa ibaba. Ang paglipat ay isinasagawa sa pamamagitan ng paraan ng pagpapadala sa pamamagitan ng mga network ng impormasyon.",
            "① OpenAI, L.L.C. (Estados Unidos) — Mga item na ililipat: pangalan, petsa ng kapanganakan, oras ng kapanganakan, kasarian, bansa, wika at iba pang mga input para sa pagsusuri — Layunin ng paglipat: pagsusuri ng pangalan, pagbigkas, at kahulugan batay sa AI — Panahon ng paghawak at paggamit: panahon ng pagbibigay ng serbisyo (ang input data ay hindi ginagamit para sa pagsasanay ng modelo ayon sa patakaran ng OpenAI at mabubura pagkatapos ng maximum na 30 araw para sa layunin ng pagmamanman ng pang-aabuso).",
            "② Supabase, Inc. (Estados Unidos) — Mga item na ililipat: impormasyon sa estado ng order at pagbabayad, email ng miyembro, input at resulta ng bayad na ulat (24 na oras pagkatapos ng pagbabayad), pangalan ng nag-order, contact number, at address sa oras ng pag-order ng produkto — Layunin ng paglipat: database, pagpapatunay, at pag-iimbak — Panahon ng paghawak at paggamit: panahon ng pagbibigay ng serbisyo o hanggang sa panahon ng pag-iimbak ng bawat item.",
            "③ Vercel, Inc. (Estados Unidos) — Mga item na ililipat: impormasyon sa pag-access at kahilingan na ipinapadala sa proseso ng paggamit ng serbisyo — Layunin ng paglipat: hosting ng aplikasyon — Panahon ng paghawak at paggamit: panahon ng pagbibigay ng serbisyo.",
            "Maaaring tumanggi ang mga gumagamit sa pahintulot para sa paglipat ng personal na impormasyon sa ibang bansa, ngunit dahil ang pagproseso na ito ay mahalaga para sa pagbibigay ng serbisyo, ang pagtanggi ay maaaring magresulta sa limitasyon sa paggamit ng serbisyo.",
          ],
        },
        {
          title: "6. Mga Karapatan ng Gumagamit",
          paragraphs: [
            "Maaaring humiling ang mga gumagamit ng pag-access, pagwawasto, pagtanggal, paghinto ng pagproseso, at pag-atras ng pahintulot sa kanilang personal na impormasyon. Ang mga kahilingan ay tinatanggap sa pamamagitan ng email ng customer service at ipoproseso pagkatapos ng pagkilala sa pagkatao.",
          ],
        },
        {
          title: "7. Tagapangalaga ng Personal na Impormasyon",
          paragraphs: [
            "Tagapangalaga: Kwak Eun-ha",
            "Email: platforest.inc@gmail.com",
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
          title: "2. Detalyadong Ulat ng Hanja (₩2,900·₩4,900·₩9,900)",
          paragraphs: [
            "Bago magsimula ang paglikha ng AI detalyadong pagsusuri pagkatapos ng pagbabayad, maaari itong kanselahin. Kapag natapos na ang paglikha ng pagsusuri at ito ay maaaring ma-access o ma-download, ang refund dahil sa simpleng pagbabago ng isip ay maaaring limitado.",
            "Kung may mga pagkakamali sa nilalaman, pagkasira ng sistema na nagdudulot ng pagkabigo sa paglikha, o kung may hindi pagkakatugma sa halaga ng pagbabayad, ito ay ipoproseso bilang muling pag-isyu o refund. Ang pag-expire ng panahon ng pag-iimbak (24 na oras pagkatapos ng pagbabayad) na nagdudulot ng pagtigil ng pag-download ay hindi itinuturing na dahilan para sa refund.",
          ],
        },
        {
          title: "3. Pangkalahatang Pagbubunyag ng Mga Kandidato (₩990 · US$1.99)",
          paragraphs: [
            "Ang pangkalahatang pagbubunyag ng mga kandidato para sa global name conversion, Korean name conversion, at Korean pronunciation notation service ay digital content na ibinibigay agad pagkatapos ng pagbabayad. Bago magsimula ang pag-access sa mga kandidato, maaari itong kanselahin, at pagkatapos ng pag-access, ang refund dahil sa simpleng pagbabago ng isip ay maaaring limitado.",
            "Kung ang mga kandidato ay hindi maayos na nailabas dahil sa pagkakamali ng sistema, ito ay ipoproseso bilang muling pagbibigay o refund.",
          ],
        },
        {
          title: "4. Global Digital PDF na Produkto (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "Ang Comprehensive Report ng Korean Name (US$9.99), Korean Pronunciation Conversion Art (US$2.99), at Name Art Pack (US$1.99) ay digital content na nalikha pagkatapos ng pagbabayad. Bago magsimula ang paglikha ng PDF, maaari itong kanselahin, at pagkatapos ng pagkumpleto ng paglikha at pagkakaroon ng posibilidad na ma-download, ang refund dahil sa simpleng pagbabago ng isip ay maaaring limitado.",
            "Kung may pagkabigo sa paglikha, pagkakamali sa nilalaman, o hindi pagkakatugma sa halaga ng pagbabayad, ito ay ipoproseso bilang muling pag-isyu o refund. Ang pag-expire ng panahon ng pag-iimbak (24 na oras pagkatapos ng pagbabayad) na nagdudulot ng pagtigil ng pag-download ay hindi itinuturing na dahilan para sa refund.",
          ],
        },
        {
          title: "5. Customized Goods (Tulad ng Name Stamp)",
          paragraphs: [
            "Ang mga personal na customized na produkto (₩39,000 · US$34.99, kasama ang international shipping fee) ay maaaring kanselahin hanggang bago magsimula ang paggawa. Pagkatapos ng pagsisimula ng paggawa, ang inskripsyon ay nakumpirma na bilang personal na customized, kaya ang refund dahil sa simpleng pagbabago ng isip ay maaaring limitado, at ang mga pagkakamali sa pagbaybay, pinsala, maling paggawa o problema sa paghahatid ay ipoproseso sa pamamagitan ng palitan, muling paggawa, o refund batay sa angkop na paraan pagkatapos ng pagsusuri.",
          ],
        },
        {
          title: "5. Advertising Unlock",
          paragraphs: [
            "Ang mga benepisyo mula sa panonood ng advertisement ay hindi produkto ng pagbabayad. Kung ang kabayaran ay hindi ibinibigay dahil sa pagkakamali ng advertising network, ito ay ipoproseso sa pamamagitan ng muling pagtatangkang gawin sa loob ng serbisyo o sa pamamagitan ng pakikipag-ugnayan sa customer service.",
          ],
        },
        {
          title: "6. Mga Tanong",
          paragraphs: [
            "Para sa mga tanong tungkol sa refund: platforest.inc@gmail.com",
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
            "Ang pangunahing pagsusuri ng apat na serbisyo: pagtutugma ng kahulugan ng Hanja, global na pagbabago ng pangalan, pagbabago ng pangalan sa Korea, at pagbigkas ng Hangeul ay ibinibigay nang libre sa mga hindi miyembro, at maaaring may limitasyon sa pang-araw-araw na paggamit.",
          ],
        },
        {
          title: "Paggamit ng Advertising Reward",
          paragraphs: [
            "Ang pag-unlock ng mga kandidato pagkatapos manood ng advertisement ay isang benepisyo ng advertising na ibinibigay nang walang karagdagang bayad. Isang kandidato ang mabubuksan para sa bawat advertisement na napanood. Ang availability ay maaaring magbago batay sa imbentaryo ng advertisement, bansa, aparato, o mga patakaran ng provider ng advertisement.",
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
          title: "Pangkalahatang Pagbubukas ng Lahat ng Kandidato",
          paragraphs: [
            "Ang lahat ng natitirang kandidato mula sa global na pagbabago ng pangalan, pagbabago ng pangalan sa Korea, at serbisyo ng pagbigkas ng Hangeul ay ibubukas nang sabay-sabay nang walang advertisement: ₩990 para sa domestic na pagbabayad, US$1.99 para sa international na pagbabayad (nasa proseso ng paghahanda ang function ng pagbabayad)",
          ],
        },
        {
          title: "Global na Digital PDF na Produkto",
          paragraphs: [
            "Komprehensibong ulat ng pangalan sa Hangeul PDF (art ng pangalan at paliwanag ng kahulugan ng lahat ng inirerekomendang kandidato, at sanggunian sa Saju at Limang Elemento): US$9.99",
            "Art ng pagbigkas ng Hangeul PDF (art ng pangalan gamit ang napiling font at gabay sa pagbigkas): US$2.99",
            "Art pack ng pangalan PDF (isang napiling pangalan na ibinibigay bilang art gamit ang napiling font): US$1.99",
            "Ang presyo at bilang ng mga font na naaangkop ay susunod sa mga halagang nakasaad sa screen, at ang PDF ay maaaring muling i-download sa loob ng 24 na oras pagkatapos ng pagbabayad at pagkatapos ay awtomatikong mabubura. (nasa proseso ng paghahanda ang function ng pagbabayad)",
          ],
        },
        {
          title: "Mga Produkto ng Pangalan sa Hangeul",
          paragraphs: [
            "Timbangan ng pangalan: ₩39,000 para sa domestic · US$34.99 para sa international (kasama ang bayad sa internasyonal na pagpapadala). Ang iba pang mga pisikal na produkto ay magkakaroon ng hiwalay na abiso para sa presyo, bayad sa pagpapadala, at panahon ng paggawa.",
          ],
        },
        {
          title: "Pabatid Bago ang Pormal na Pagbabayad",
          paragraphs: [
            "Kapag nakumpirma na ang pagsusuri ng PG, pag-uulat ng negosyo sa telekomunikasyon, at mga kondisyon ng pakikipagtulungan sa paggawa, ang aktwal na halaga ng pagbabayad, bayad sa pagpapadala, panahon ng paggawa, at mga kondisyon ng refund ay muling ibibigay sa screen ng produkto.",
          ],
        },
      ],
    },
  },
};

export default content;
