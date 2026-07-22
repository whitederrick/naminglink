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
          title: "1. Katangian ng Serbisyo",
          paragraphs: [
            "Ang Naming-Link ay isang AI-powered na naming studio na nag-aalok ng apat na serbisyo: (1) pagtutugma ng mga pangalang Koreano sa makahulugang Hanja (mga karakter na Tsino), (2) pagko-convert ng mga pangalang Koreano sa mga global na pangalan, (3) pagko-convert ng mga banyagang pangalan sa mga pangalang Koreano, at (4) pagsusulat ng mga global na pangalan sa Hangul ayon sa bigkas.",
            "Ang mga resulta ay sangguniang materyal upang tulungan ang pagpapangalan at interpretasyon. Hindi nito ginagarantiyahan ang pagiging karapat-dapat para sa opisyal na pagpaparehistro tulad ng rehistro ng ugnayang pampamilya, pasaporte, visa, trademark, o mga legal na dokumento.",
          ],
        },
        {
          title: "2. Paggamit ng mga Miyembro at Hindi Miyembro",
          paragraphs: [
            "Ang pagsusuri ng pangalan at ang pagbubukas ng mga kandidato sa pamamagitan ng ad reward ay magagamit kahit hindi miyembro. Ang pag-sign up o pag-log in ay hihilingin lamang para sa mga feature na nangangailangan ng account, tulad ng pag-order ng merchandise at pagtingin sa kasaysayan ng mga order.",
          ],
        },
        {
          title: "3. Mga Resulta ng AI at Responsibilidad sa Pagsusuri",
          paragraphs: [
            "Kasama sa mga rekomendasyon ng AI ang mga sangguniang pangwika, pangkultura, at tradisyonal. Bago pumili ng pinal na pangalan, dapat tiyakin ng user ang pagiging angkop nito sa pamamagitan ng mga kaugnay na institusyon, eksperto, lokal na gumagamit ng wika, at pagsusuring legal o pang-trademark.",
          ],
        },
        {
          title: "4. Mga Bayad na Serbisyo",
          paragraphs: [
            "Ang mga detalyadong produkto ng serbisyo ng pagtutugma ng kahulugan ng Hanja ay ang mga sumusunod: (1) detalyadong paliwanag para sa hanggang 5 kandidato at komprehensibong detalyadong pagsusuri ng Hanja: ₩2,900 (KRW); (2) pinalawak na detalyadong paliwanag para sa hanggang 10 kandidato, komprehensibong detalyadong pagsusuri ng Hanja, at PDF na maiingatan: ₩4,900; (3) detalye para sa hanggang 10 kandidato, komprehensibong detalyadong pagsusuri ng Hanja, pagsusuri ng Saju (Apat na Haligi) at Limang Elemento, at PDF na maiingatan: ₩9,900.",
            "Sa mga serbisyo ng pagko-convert sa global na pangalan, pagko-convert sa pangalang Koreano, at pagsusulat ng bigkas sa Hangul, maaaring ialok ang isang produkto na nagbubukas nang sabay-sabay ng lahat ng natitirang kandidato nang walang ad (US$1.99). Bago ma-activate ang feature ng pagbabayad, pagbubukas sa pamamagitan lamang ng ad reward ang ibinibigay.",
            "Ang mga bayad na detalyadong report, resulta ng pagsusuri, at PDF file ay maaaring muling tingnan at i-download sa loob ng 24 na oras pagkatapos makumpleto ang pagbabayad, at awtomatikong ide-delete pagkalipas ng panahon ng pag-iingat.",
            "Ang mga pisikal na produkto tulad ng merchandise ng pangalang Hangul ay maaaring ialok sa hiwalay na presyo at kondisyon. Para sa lahat ng bayad na produkto, ipinapaalam sa screen bago ang pagbabayad ang nilalaman ng produkto, presyo, paraan ng paghahatid, at mga kondisyon sa refund.",
          ],
        },
        {
          title: "5. Serbisyong Nakabatay sa Ad Reward",
          paragraphs: [
            "Ang pagbubukas ng mga kandidato sa pamamagitan ng panonood ng ad ay iaaplay lamang kapag nakumpleto ang normal na pagkumpirma ng reward mula sa ad provider. Maaaring paghigpitan ang automated na pag-play ng ad, pagmamanipula ng reward, at abnormal na paulit-ulit na mga request.",
          ],
        },
        {
          title: "6. Mga Ipinagbabawal na Gawain",
          paragraphs: [
            "Ipinagbabawal ang mga sumusunod: paglalagay ng personal na impormasyon ng ibang tao nang walang pahintulot, paglikha ng pangalan para sa layuning diskriminasyon, pagkamuhi, o panggagaya, automated na labis na mga request, pagdudulot ng abala sa serbisyo, at maling pagpapakita ng mga resulta bilang opisyal na sertipikado.",
          ],
        },
        {
          title: "7. Limitasyon ng Pananagutan",
          paragraphs: [
            "Maliban sa mga kaso ng sadyang gawa o malubhang kapabayaan, hindi mananagot ang kumpanya para sa mga hindi direktang pinsala, pagkawala ng inaasahang kita, pagtanggi ng opisyal na pagpaparehistro, o mga alitan sa third party na nagmumula sa paggamit ng mga rekomendasyon ng AI.",
          ],
        },
        {
          title: "8. Mga Katanungan",
          paragraphs: [`Mga katanungan tungkol sa serbisyo: ${companyInfo.email}`],
        },
      ],
    },
    privacy: {
      title: "Patakaran sa Privacy",
      description: `Inilalarawan ng patakarang ito ang mga pamantayan ng ${companyInfo.serviceName} sa pagproseso ng personal na impormasyon.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Mga Personal na Impormasyong Pinoproseso",
          paragraphs: [
            "Kapag ginamit ang mga serbisyo ng pangalan bilang hindi miyembro, ang pangalan, petsa ng kapanganakan, oras ng kapanganakan, bansa, wika, layunin ng paggamit, at mga pahiwatig sa bigkas ay pansamantalang pinoproseso sa paglikha ng mga resulta ng pagsusuri, ngunit ang mga inilagay na impormasyon at nalikhang resulta ay hindi iniimbak sa database ng serbisyo.",
            "Kapag nagbayad para sa isang bayad na detalyadong report, ang impormasyon ng pagkakakilanlan ng order, status ng pagbabayad, at ang mga input at resulta ng pagsusuring kailangan sa paglikha ng report ay pinoproseso sa loob ng panahon ng pag-iingat (24 na oras pagkatapos ng pagbabayad). Ang impormasyon ng paraan ng pagbabayad tulad ng numero ng card ay direktang pinoproseso ng payment gateway at hindi ito iniimbak ng kumpanya.",
            "Kapag ginamit lamang ang feature ng pag-order ng merchandise, maaaring karagdagang iproseso ang pangalan ng nag-order, email, numero ng contact, address ng paghahatid, status ng pagbabayad, at impormasyon ng pagproseso ng order.",
            "Para sa katatagan ng serbisyo at pag-iwas sa pang-aabuso, maaari naming iproseso bilang pinakamababang operational log ang isang de-identified na visitor hash na nagbabago araw-araw, oras ng request, uri ng serbisyo, bilang ng libreng paggamit, paggamit ng AI token, oras ng pagtugon, status ng pagproseso, at mga event ng pagpapakita ng ad at reward.",
          ],
        },
        {
          title: "2. Mga Layunin ng Pagproseso ng Personal na Impormasyon",
          paragraphs: [
            "Pinoproseso ang personal na impormasyon para sa rekomendasyon ng pangalan batay sa mga input, pagsusuri ng bigkas, pagsusuri ng wika at kultura ayon sa bansa, limitasyon sa libreng paggamit, pagkumpirma ng ad reward, pagtugon sa mga katanungan ng customer, pagproseso ng pagbabayad at paghahatid, at pag-iwas sa mapanlinlang na paggamit.",
          ],
        },
        {
          title: "3. Pag-iingat at Pagsira",
          paragraphs: [
            "Ang mga input at resulta ng pagsusuri ay iniimbak sa account lamang kapag tahasang pinili ng naka-log in na miyembro na i-save ang mga resulta, at sinisira kapag dinelete ito ng miyembro o natapos na ang layunin ng pag-iingat. Hindi iniimbak ang mga input at resulta ng mga hindi miyembro at ng mga miyembrong hindi pumili na mag-save.",
            "Ang mga input, resulta ng pagsusuri, at PDF file ng bayad na detalyadong report ay awtomatikong ide-delete 24 na oras pagkatapos makumpleto ang pagbabayad. Ang mga talaan ng transaksyon ng pagbabayad at order ay hiwalay na iniingatan alinsunod sa mga panahong itinakda ng nauukol na batas.",
            "Ang mga detalye ng paghahatid ay sinisira o dine-de-identify pagkalipas ng panahong kailangan para sa pagproseso ng order at pagtugon sa mga pagsasauli at alitan.",
          ],
        },
        {
          title: "4. Pagbibigay sa Third Party at Pagpapagawa ng Pagproseso",
          paragraphs: [
            "Para sa pagpapatakbo ng serbisyo, maaaring iproseso o ipagkatiwala ang kinakailangang impormasyon sa Supabase (database at authentication), Vercel (hosting), OpenAI API (pagsusuri ng AI), mga ad network, payment gateway (PortOne), at mga kasosyo sa paghahatid at produksyon.",
          ],
        },
        {
          title: "5. Posibilidad ng Paglipat sa Ibang Bansa",
          paragraphs: [
            "Sa ilang proseso tulad ng cloud hosting, authentication, AI API, advertising, at pagpapadala ng email, maaaring maproseso ang personal na impormasyon sa mga server sa ibang bansa. Ang bansang paglilipatan, tagapagproseso, layunin, at panahon ng pag-iingat ay detalyadong ipapaalam kapag napagtibay na ang mga service provider.",
          ],
        },
        {
          title: "6. Mga Karapatan ng User",
          paragraphs: [
            "Maaaring hilingin ng user ang pagtingin, pagwawasto, pag-delete, pagpapahinto ng pagproseso ng kanyang personal na impormasyon, at pagbawi ng pahintulot. Ang mga kahilingan ay tinatanggap sa email ng customer center at pinoproseso pagkatapos ng pagpapatunay ng pagkakakilanlan.",
          ],
        },
        {
          title: "7. Opisyal na Tagapangasiwa ng Privacy",
          paragraphs: [
            `Tagapangasiwa: ${companyInfo.privacyOfficer}`,
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
          title: "1. Mga Pangkalahatang Prinsipyo",
          paragraphs: [
            "Kapag na-activate na ang feature ng pagbabayad, maaaring mag-iba ang saklaw ng maaaring i-refund depende sa paraan ng paghahatid ng bawat produkto, oras ng pagsisimula ng produksyon, at kung na-download na. Ang mga tiyak na kondisyon ay ipinapaalam sa screen ng produkto bago ang pagbabayad.",
          ],
        },
        {
          title: "2. Detalyadong Report ng Hanja (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "Maaaring kanselahin pagkatapos ng pagbabayad hangga't hindi pa nagsisimula ang paglikha ng detalyadong pagsusuri ng AI. Kapag nakumpleto na ang paglikha ng pagsusuri at maaari na itong tingnan o i-download, maaaring paghigpitan ang refund dahil sa simpleng pagbabago ng isip.",
            "Kung makumpirma ang mga error sa nilalaman, pagkabigo ng paglikha dahil sa sira ng system, o hindi pagtutugma ng halagang binayaran, ipoproseso ito sa pamamagitan ng muling pag-isyu o refund. Ang pagtatapos ng pag-download dahil sa paglipas ng panahon ng pag-iingat (24 na oras pagkatapos ng pagbabayad) ay hindi batayan para sa refund.",
          ],
        },
        {
          title: "3. Sabay-sabay na Pagbubukas ng Lahat ng Kandidato (US$1.99)",
          paragraphs: [
            "Ang sabay-sabay na pagbubukas ng mga kandidato sa mga serbisyo ng pagko-convert sa global na pangalan, pagko-convert sa pangalang Koreano, at pagsusulat ng bigkas sa Hangul ay digital na content na ibinibigay kaagad pagkatapos ng pagbabayad. Maaaring kanselahin bago magsimula ang pagtingin sa mga kandidato; pagkatapos ng pagtingin, maaaring paghigpitan ang refund dahil sa simpleng pagbabago ng isip.",
            "Kung hindi maayos na naibukas ang mga kandidato dahil sa error ng system, ipoproseso ito sa pamamagitan ng muling pagbibigay o refund.",
          ],
        },
        {
          title: "4. Custom na Gawang Merchandise",
          paragraphs: [
            "Ang mga personalized na gawa ay maaaring kanselahin hangga't hindi pa nagsisimula ang produksyon. Pagkatapos magsimula ang produksyon, maaaring paghigpitan ang refund dahil sa simpleng pagbabago ng isip, at ang mga maling spelling, pinsala, maling paggawa, o problema sa paghahatid ay ipoproseso pagkatapos ng pagkumpirma sa angkop na paraan mula sa palitan, muling paggawa, o refund.",
          ],
        },
        {
          title: "5. Pagbubukas sa Pamamagitan ng Ad",
          paragraphs: [
            "Ang mga benepisyo sa pamamagitan ng panonood ng ad ay hindi mga bayad na produkto. Kung hindi naibigay ang reward dahil sa error ng ad network, ipoproseso ito sa pamamagitan ng muling pagsubok sa loob ng serbisyo o pagtatanong sa customer center.",
          ],
        },
        {
          title: "6. Mga Katanungan",
          paragraphs: [`Mga katanungan tungkol sa refund: ${companyInfo.email}`],
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
          title: "Batayang Pagsusuri (Libre)",
          paragraphs: [
            "Ang batayang pagsusuri ng apat na serbisyo — pagtutugma ng kahulugan ng Hanja (mga karakter na Tsino), pagko-convert sa global na pangalan, pagko-convert sa pangalang Koreano, at pagsusulat ng bigkas sa Hangul — ay libreng ibinibigay sa mga hindi miyembro, at maaaring may limitasyon sa pang-araw-araw na paggamit.",
          ],
        },
        {
          title: "Paggamit sa Pamamagitan ng Ad Reward",
          paragraphs: [
            "Ang pagbubukas ng kandidato pagkatapos manood ng ad ay isang benepisyong nakabatay sa ad na ibinibigay nang walang hiwalay na bayad. Bawat isang ad ay nagbubukas ng isang susunod na kandidato. Maaaring mag-iba ang availability depende sa imbentaryo ng ad, bansa, device, o patakaran ng ad provider.",
          ],
        },
        {
          title: "Mga Detalyadong Produkto ng Pagtutugma ng Kahulugan ng Hanja",
          paragraphs: [
            "Detalyadong paliwanag para sa hanggang 5 kandidato at komprehensibong detalyadong pagsusuri ng Hanja: ₩2,900 (KRW)",
            "Pinalawak na detalyadong paliwanag para sa hanggang 10 kandidato, komprehensibong detalyadong pagsusuri ng Hanja, at PDF na maiingatan: ₩4,900",
            "Detalye para sa hanggang 10 kandidato, komprehensibong detalyadong pagsusuri ng Hanja, pagsusuri ng Saju (Apat na Haligi) at Limang Elemento, at PDF na maiingatan: ₩9,900",
            "Ang mga bayad na report at PDF ay maaaring muling tingnan at i-download sa loob ng 24 na oras pagkatapos ng pagbabayad, at pagkatapos nito ay awtomatikong ide-delete.",
          ],
        },
        {
          title: "Sabay-sabay na Pagbubukas ng Lahat ng Kandidato",
          paragraphs: [
            "Pagbubukas nang sabay-sabay ng lahat ng natitirang kandidato nang walang ad sa mga serbisyo ng pagko-convert sa global na pangalan, pagko-convert sa pangalang Koreano, at pagsusulat ng bigkas sa Hangul: US$1.99 (inihahanda pa ang feature ng pagbabayad)",
          ],
        },
        {
          title: "Merchandise ng Pangalang Hangul",
          paragraphs: [
            "Para sa mga pisikal na merchandise tulad ng name stamp, hiwalay na ipinapaalam ang presyo ng bawat produkto, bayad sa paghahatid, at panahon ng paggawa.",
          ],
        },
        {
          title: "Paunawa Bago ang Opisyal na Pagbabayad",
          paragraphs: [
            "Kapag napagtibay na ang pagsusuri ng PG (payment gateway), pagpaparehistro ng negosyong online selling, at mga kondisyon ng pakikipagsosyo sa produksyon, muling ipapaalam sa screen ng produkto ang aktuwal na halaga ng pagbabayad, bayad sa paghahatid, panahon ng paggawa, at mga kondisyon sa refund.",
          ],
        },
      ],
    },
  },
};

export default content;
