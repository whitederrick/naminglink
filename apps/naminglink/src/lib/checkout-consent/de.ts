import type { ConsentCopySet } from "@/lib/checkout-consent/types";

// Deutsche Fassung. Übersetzung des koreanischen Originals in ko.ts.
// **Wird das Original geändert, muss diese Datei mitgeändert werden.**

export const de: ConsentCopySet = {
  DIGITAL: {
    infoTitle: "Produktinformationen",
    info: [
      ["Hersteller / Anbieter", "Naming-Link"],
      ["Produktform", "Digitale Inhalte (Bildschirmansicht oder PDF-Dokument). Bereitstellung unmittelbar nach der Zahlung."],
      ["Nutzungsvoraussetzungen", "Ein Internetbrowser oder ein Gerät, das PDF-Dateien öffnen kann. Keine Installation erforderlich."],
      ["Nutzungsdauer", "Unbegrenzt. Die heruntergeladene Datei verbleibt bei Ihnen."],
      ["Widerruf", "Volle Erstattung, solange die Bereitstellung noch nicht begonnen hat. Nach ihrem Beginn ist ein Widerruf wegen bloßer Meinungsänderung eingeschränkt (Art. 17 Abs. 2 des koreanischen E-Commerce-Gesetzes)."],
      ["Umtausch-/Rücksendekosten", "Keine. Digitale Inhalte werden nicht versandt."],
    ],
    consent:
      "Ich habe zur Kenntnis genommen, dass es sich um digitale Inhalte handelt, die unmittelbar nach der Zahlung bereitgestellt werden, und dass **ein Widerruf wegen bloßer Meinungsänderung nach Beginn der Bereitstellung eingeschränkt ist**.",
    required: "Bitte stimmen Sie den Einschränkungen des Widerrufsrechts zu, um die Zahlung durchführen zu können.",
    refund:
      "Für Erstattungen und Anfragen wenden Sie sich bitte an den Kundenservice unten oder per E-Mail. Wurde das Produkt wegen eines Systemfehlers nicht bereitgestellt oder weicht der abgebuchte Betrag von der Bestellung ab, erstatten wir den vollen Betrag.",
  },
  MADE_TO_ORDER: {
    infoTitle: "Produktinformationen",
    info: [
      ["Hersteller / Anbieter", "Naming-Link"],
      ["Produktform", "Ein physischer Stempel (Dojang), der mit dem von Ihnen bestellten Text einzeln graviert wird."],
      ["Herstellung", "Nach Eingang der Bestellung bestätigen wir Text und Schriftart und beginnen dann mit der Gravur."],
      ["Versand", "Versand nach Abschluss der Herstellung. Innerhalb Koreas per Paketdienst, ins Ausland per internationalem Versand."],
      ["Widerruf", "**Solange die Herstellung noch nicht begonnen hat**, volle Erstattung. Nach ihrem Beginn ist der Widerruf eingeschränkt — die Ware wird nach Ihrer Bestellung einzeln angefertigt und ist nicht weiterverkäuflich (Art. 17 Abs. 2 des koreanischen E-Commerce-Gesetzes)."],
      ["Umtausch / Rücksendung", "Bei Beschädigung, Fehlgravur oder einem von der Bestellung abweichenden Artikel fertigen wir kostenlos neu an oder erstatten den vollen Betrag."],
      ["Rücksendekosten", "In den genannten Fällen kostenfrei. Bei bloßer Meinungsänderung ist eine Stornierung nur vor Beginn der Herstellung möglich."],
    ],
    consent:
      "Ich habe zur Kenntnis genommen, dass dieser Stempel mit dem von mir angegebenen Text **als Auftragsanfertigung hergestellt wird und ein Widerruf wegen bloßer Meinungsänderung nach Beginn der Herstellung eingeschränkt ist**.",
    required: "Bitte stimmen Sie den Einschränkungen des Widerrufsrechts zu, um die Zahlung durchführen zu können.",
    refund:
      "Für Erstattungen und Anfragen wenden Sie sich bitte an den Kundenservice unten oder per E-Mail. Beschädigte, fehlgravierte oder von der Bestellung abweichende Artikel werden kostenlos neu angefertigt oder vollständig erstattet.",
  },
};
