import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// Filipino. Ang Koreanong orihinal (ko.ts) ang batayan — kung mag-iiba ang kahulugan,
// ang ko.ts ang may bisa.

export const fil: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Impormasyon ng produkto",
    info: [
      ["Gumawa / Tagapagbigay", "Naming-Link"],
      ["Anyo ng produkto", "Digital na nilalaman (resulta sa screen o PDF na dokumento). Ibinibigay agad pagkatapos ng bayad."],
      ["Kailangan sa paggamit", "Isang internet browser o anumang device na kayang magbukas ng PDF. Walang kailangang i-install."],
      ["Panahon ng paggamit", "Walang hangganan. Nasa inyo ang file na na-download ninyo."],
      ["Pag-atras sa order", "Buong refund bago magsimula ang paghahatid. Kapag nagsimula na, limitado ang pag-atras dahil lamang sa pagbabago ng isip (Art. 17(2), Batas ng Korea sa E-Commerce)."],
      ["Gastos sa palit / pagsasauli", "Wala. Digital na nilalaman ito kaya walang ipinapadala."],
    ],
    consent:
      "Nauunawaan ko na ang produktong ito ay digital na nilalamang ibinibigay agad pagkatapos ng bayad, at na **limitado ang pag-atras sa order dahil lamang sa pagbabago ng isip kapag nagsimula na ang paghahatid**.",
    required: "Kailangan ninyong sumang-ayon sa mga limitasyon sa pag-atras bago makabayad.",
    refund:
      "Para sa refund o katanungan, gamitin ang customer center o email sa ibaba. Kung hindi naibigay ang produkto dahil sa error ng sistema, o kung iba ang nasingil sa inyong order, ibabalik namin ang buong halaga.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Impormasyon ng produkto",
    info: [
      ["Gumawa / Tagapagbigay", "Naming-Link"],
      ["Anyo ng produkto", "Pisikal na selyo (dojang) na isa-isang ginagawa, inuukitan ng tekstong inyong ipinag-order."],
      ["Paraan ng paggawa", "Pagkatapos ng order ay kinukumpirma namin ang teksto at estilo ng letra, saka sinisimulan ang pag-ukit."],
      ["Padala", "Ipinapadala kapag tapos na ang paggawa. Courier sa loob ng Korea, international shipping sa ibang bansa."],
      ["Pag-atras sa order", "**Bago magsimula ang pag-ukit**, buong refund. Pagkatapos magsimula, limitado ang pag-atras — indibidwal na ginawa ayon sa inyong order ang bagay kaya hindi na muling maibebenta (Art. 17(2), Batas ng Korea sa E-Commerce)."],
      ["Palit / pagsasauli", "Kung nasira, maling pagkakaukit, o iba sa inyong order, muli naming gagawin nang libre o ibabalik ang buong halaga."],
      ["Gastos sa pagsasauli", "Libre kung nasa mga dahilang nabanggit sa itaas. Ang pagbabago ng isip ay makakansela lamang bago magsimula ang pag-ukit."],
    ],
    consent:
      "Nauunawaan ko na ang selyong ito ay **produktong gawa sa order, inuukitan ng tekstong ibinigay ko, at na limitado ang pag-atras sa order dahil lamang sa pagbabago ng isip kapag nagsimula na ang pag-ukit**.",
    required: "Kailangan ninyong sumang-ayon sa mga limitasyon sa pag-atras bago makabayad.",
    refund:
      "Para sa refund o katanungan, gamitin ang customer center o email sa ibaba. Ang nasira, maling pagkakaukit, o maling produkto ay muling gagawin nang libre o irerefund nang buo.",
  },
};
