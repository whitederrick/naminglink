// 드림링크 화면 사전의 German (Deutsch)(de) 번역이다.
//
// **`scripts/translate-i18n.ts`가 만든 파일이다.** 키 구성·중첩·배열 길이는 en을 그대로
// 복사하고 문자열만 갈아 끼우므로 구조가 어긋날 자리가 없다. 손으로 고칠 때도 키를 더하거나
// 빼지 말 것 — `verify-i18n`이 en과 대조해 잡는다.
//
// **옛 궁합 번역을 통째로 되살린 것이 아니다.** en 원문이 글자까지 같은 자리(푸터·언어
// 선택기·광고 라벨)만 물려받고, 해몽용으로 새로 쓴 자리는 새 ko·en에서 다시 옮겼다.

import type { Dictionary } from "@/lib/i18n";

export const de: Dictionary = {
  "brand": "Dreams-Link",
  "tagline": "Der Traum von heute, gelesen durch traditionelle koreanische Traumsymbole",
  "currentLanguage": "Aktuelle Sprache",
  "moreLanguages": "Mehr",
  "closeLanguages": "Schließen",
  "dream": {
    "title": "Traumdeutung",
    "subtitle": "Schreiben Sie den Traum auf, den Sie hatten, und wir werden ihn in einem Wörterbuch traditioneller koreanischer Traumsymbole nachschlagen.",
    "textLabel": "Wovon haben Sie geträumt?",
    "textPlaceholder": "Schreiben Sie es, wie Sie sich erinnern. Zum Beispiel: Ein Karpfen sprang aus klarem Wasser",
    "moodLabel": "Wie Sie sich beim Aufwachen gefühlt haben",
    "moods": {
      "good": "Gut",
      "scary": "Erschreckend",
      "strange": "Strange",
      "sad": "Traurig",
      "unsure": "Nicht sicher"
    },
    "recurringLabel": "Ich habe diesen Traum immer wieder",
    "submit": "Lese meinen Traum",
    "submitting": "Suche nach…",
    "errorEmpty": "Bitte schreiben Sie ein wenig mehr über den Traum.",
    "errorGeneric": "Wir konnten die Deutung nicht laden. Bitte versuchen Sie es in einem Moment erneut.",
    "resultTitle": "Traumdeutung",
    "symbolsHeading": "Gefundene Symbole in Ihrem Traum",
    "noSymbols": "Kein traditionelles Symbol aus unserem Wörterbuch erschien in diesem Traum. Wir lassen dies leer, anstatt eine Bedeutung zu erfinden.",
    "themesHeading": "Worauf sie zusammen hinweisen",
    "conceptionNotice": "Symbole, die traditionell als 태몽 gedeutet werden, erscheinen hier. Dies bestimmt nicht die Schwangerschaft.",
    "disclaimer": "Dies ist Referenzmaterial aus einer traditionellen 해몽-Perspektive, keine medizinische, finanzielle oder rechtliche Beratung. Wir speichern den Traum, den Sie geschrieben haben, nicht.",
    "again": "Einen anderen Traum lesen"
  },
  "landing": {
    "title": "Dein Traum lesen\nauf traditionelle Weise",
    "subtitle": "Wir suchen die Symbole in deinem Traum in einem Wörterbuch der traditionellen koreanischen Traumdeutung.\nKein Geburtsdatum, keine Anmeldung.",
    "howTitle": "So funktioniert es",
    "steps": [
      "Schreibe den Traum so auf, wie du ihn erinnerst. Ein oder zwei Sätze sind genug.",
      "Wir durchsuchen ein Wörterbuch traditioneller koreanischer Traumsymbole nach dem, was darin erschienen ist. Wenn ein Symbol nicht vorhanden ist, sagen wir das.",
      "Du siehst, was jedes Symbol seit langem bedeutet und worauf sie zusammen hinweisen."
    ],
    "privacyTitle": "Der Traum, den du aufschreibst, wird nicht gespeichert",
    "privacyBody": "Was du schreibst, wird nur während der Auswertung der Deutung verwendet und niemals aufgezeichnet.\nEs ist kein Konto erforderlich, und nach Abschluss der Deutung bleibt nichts auf dem Server.",
    "disclaimer": "Dies ist Referenzmaterial aus der Perspektive der traditionellen Traumdeutung. Es ist keine Vorhersage dessen, was kommen wird, noch medizinischer oder finanzieller Rat."
  },
  "ads": {
    "label": "Werbung"
  },
  "analyzing": {
    "title": "Auf der Suche nach den Symbolen in deinem Traum",
    "quotes": [
      "Ein Traum spiegelt oft die letzten paar Tage wider, mehr als die kommenden Tage.",
      "Dasselbe Symbol wurde unterschiedlich gelesen, je nachdem, wer es geträumt hat.",
      "Traditionelle 해몽 ist kein Antwortschlüssel. Es ist ein über lange Zeit gesammelter Körper von Geschichten.",
      "Ein beängstigender Traum ist nicht dasselbe wie ein schlechter. Er kann das Zeichen eines erschreckten Geistes sein.",
      "Es ist in Ordnung, wenn du nur einen Bruchteil erinnerst. Ein Symbol reicht aus, um zu beginnen.",
      "Ein Traum, der immer wiederkehrt, kommt normalerweise mit etwas Unvollendetem.",
      "Wie klar das Wasser war und welche Farbe es hatte, darauf achteten alte Leser besonders genau.",
      "Wie du dich beim Aufwachen gefühlt hast, bleibt ebenso lange bestehen wie das, was du tatsächlich gesehen hast.",
      "Ob guter Traum oder nicht, es ist besser, ihn nicht über deinen Tag entscheiden zu lassen.",
      "Eine 해몽 ist kein Wort darüber, was passieren wird. Es ist ein zweiter Blick auf das, was bereits ist."
    ],
    "watching": "Werbung läuft",
    "remaining": "Ihr Ergebnis öffnet in {seconds} s"
  },
  "dreamCard": {
    "title": "Bewahre diesen Traum als Karte",
    "body": "Wir haben den Traum, den du geschrieben hast, und die gefundenen Symbole in ein einzelnes Bild eingefügt. Es ist **eine Bilddatei, kein PDF**, sodass du es speichern oder so senden kannst.",
    "buyButton": "Hol es dir für {price}",
    "preparing": "Bereite vor",
    "ordering": "Bestellung wird erstellt…",
    "paying": "Zahlung wird entgegengenommen…",
    "issuing": "Karte wird erstellt…",
    "done": "Fertig. Nutze den Button unten, um es erneut herunterzuladen.",
    "failed": "Die Zahlung oder der Download ist fehlgeschlagen. Bitte versuche es in einem Moment erneut.",
    "retry": "Erneut herunterladen",
    "contents": [
      "Die in deinem Traum gefundenen Symbole und was sie traditionell bedeuten",
      "Worauf diese Symbole zusammen hinweisen",
      "Das Datum des Traums und die Version des Wörterbuchs"
    ],
    "consentLabel": "Dies ist ein digitales Produkt, das sofort nach der Zahlung bereitgestellt wird. Ich verstehe, dass **nach Abschluss des Downloads das Widerrufsrecht bei einem Meinungswechsel eingeschränkt ist**.",
    "consentRequired": "Sie müssen den Widerrufsbedingungen zustimmen, bevor Sie bezahlen.",
    "productInfoTitle": "Produktinformation",
    "productInfo": [
      [
        "Anbieter",
        "{brand}"
      ],
      [
        "Format",
        "1 Bilddatei (PNG), die direkt nach der Zahlung auf diesem Bildschirm heruntergeladen wird. Es handelt sich nicht um ein PDF-Dokument."
      ],
      [
        "Anforderungen",
        "Jedes Gerät, das ein Bild öffnen kann. Keine Installation und kein Konto erforderlich."
      ],
      [
        "Verfügbarkeit",
        "Keine zeitliche Begrenzung. Die heruntergeladene Datei gehört Ihnen."
      ],
      [
        "Wiederherunterladen",
        "Bis zu 5 Mal bei derselben Bestellung. Wir speichern die Datei nicht, daher kann sie nicht erneut erstellt werden, sobald Sie den Ergebnisscreen verlassen."
      ],
      [
        "Widerruf",
        "Vollständige Rückerstattung, bevor der Download abgeschlossen ist. Danach ist der Widerruf aufgrund von Meinungsänderung eingeschränkt (Koreanisches E-Commerce-Gesetz Art. 17(2))."
      ],
      [
        "Rücksendekosten",
        "Keine. Digitale Inhalte werden nicht versendet."
      ]
    ],
    "refundContact": "Für Rückerstattungen oder Fragen kontaktieren Sie bitte den Support oder die unten angegebene E-Mail-Adresse. Wenn die Datei nie erstellt wurde oder der berechnete Betrag von der Bestellung abweicht, erstatten wir den vollen Betrag.",
    "pdfLanguageNotice": "Der Text auf der Karte erscheint in derselben Sprache wie dieser Bildschirm."
  },
  "conceptionReport": {
    "title": "Bewahren Sie die Konzeptionstraum-Lesung als PDF auf",
    "body": "Wenn Symbole, die traditionell als 태몽 gedeutet werden, erscheinen, wird in einem 4-seitigen PDF dargelegt, was erschienen ist, welche Bedeutung es traditionell hat und woher diese Deutung stammt. Es bestimmt nicht die Schwangerschaft oder das Geschlecht eines Kindes.",
    "buyButton": "Holen Sie es sich für {price}",
    "preparing": "Bereite vor",
    "ordering": "Bestellung wird erstellt…",
    "paying": "Zahlung wird entgegengenommen…",
    "issuing": "Bericht wird erstellt…",
    "done": "Fertig. Verwenden Sie die Schaltfläche unten, um es erneut herunterzuladen.",
    "failed": "Die Zahlung oder der Download ist fehlgeschlagen. Bitte versuchen Sie es in einem Moment erneut.",
    "retry": "Erneut herunterladen",
    "contents": [
      "Seite 1 — der Traum, den Sie geschrieben haben, und was darin gefunden wurde",
      "Seite 2 — jedes Symbol und was es traditionell bedeutet",
      "Seite 3 — warum diese als Empfängniszeichen gelesen werden",
      "Seite 4 — eine Seite zum Aufbewahren (das Datum und die Hinweise)"
    ],
    "consentLabel": "Dies ist digitale Inhalte, die sofort nach der Zahlung bereitgestellt werden. Ich verstehe, dass **sobald der Download abgeschlossen ist, das Recht auf Widerruf bei einer Meinungsänderung eingeschränkt ist**.",
    "consentRequired": "Sie müssen den Widerrufsbedingungen zustimmen, bevor Sie bezahlen.",
    "productInfoTitle": "Produktinformation",
    "productInfo": [
      [
        "Lieferant",
        "{brand}"
      ],
      [
        "Format",
        "1 PDF-Dokument (4 Seiten), direkt nach der Zahlung auf diesem Bildschirm heruntergeladen."
      ],
      [
        "Anforderungen",
        "Jedes Gerät, das ein PDF öffnen kann. Keine Installation und kein Konto erforderlich."
      ],
      [
        "Verfügbarkeit",
        "Keine Zeitbegrenzung. Die heruntergeladene Datei gehört Ihnen."
      ],
      [
        "Erneut herunterladen",
        "Bis zu 5 Mal bei derselben Bestellung. Wir speichern die Datei nicht, daher kann sie nicht erneut erstellt werden, sobald Sie den Ergebnisscreen verlassen."
      ],
      [
        "Widerruf",
        "Vollständige Rückerstattung, bevor der Download abgeschlossen ist. Danach ist der Widerruf aufgrund von Meinungsänderung eingeschränkt (Koreanisches E-Commerce-Gesetz Art. 17(2))."
      ],
      [
        "Rücksendekosten",
        "Keine. Digitale Inhalte werden nicht versendet."
      ]
    ],
    "refundContact": "Für Rückerstattungen oder Fragen wenden Sie sich bitte an den Support oder die unten angegebene E-Mail-Adresse. Wenn das Dokument nie erstellt wurde oder der berechnete Betrag von der Bestellung abweicht, erstatten wir den vollen Betrag.",
    "pdfLanguageNotice": "Die PDF wird in derselben Sprache ausgegeben wie dieser Bildschirm."
  },
  "footer": {
    "privacy": "Datenschutz",
    "terms": "AGB",
    "refund": "Erstattung",
    "pricing": "Preise",
    "legalEntity": "Firma",
    "representative": "Vertretung",
    "businessNumber": "Geschäfts-Nr.",
    "mailOrderNumber": "Onlinehandel",
    "address": "Adresse",
    "customerCenter": "Kundendienst",
    "email": "E-Mail",
    "privacyOfficer": "Datenschutz",
    "hostingProvider": "Hosting",
    "providedBy": "Bereitgestellt von",
    "effective": "Gültig ab",
    "backHome": "Zur Startseite"
  }
};
