import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Datenschutzrichtlinie",
  "intro": "Saju-Link speichert keine Informationen, die für die Saju (vier Säulen) Deutung erforderlich sind. Diese Richtlinie beschreibt, was der Dienst erhält, was nicht gespeichert wird und was automatisch protokolliert wird.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Das Geburtsdatum, die Geburtszeit, der Geburtsort, das Geschlecht und der Name, die für die Saju-Deutung eingegeben werden, werden **nirgendwo gespeichert.** Sie werden nur im Server-Speicher während der Bearbeitung der Anfrage verwendet und verschwinden mit der Antwort.",
        "Es wird nicht in einer Datenbank aufgezeichnet und auch nicht in separaten Dateien gespeichert. Da keine Mitgliedschaft erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisseite enthält die Eingabewerte in kodierter Form. Dieser Wert befindet sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards wird der Inhalt hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn der Ergebnislink an eine andere Person gesendet wird, kann diese die gleichen Ergebnisse sehen. Da der Link selbst die Eingabewerte enthält, liegt es im Ermessen des Nutzers, ob er ihn teilt."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es gibt keine Informationen, die vom Dienst gesammelt werden, um den Nutzer zu identifizieren. Es werden jedoch die minimalen Protokolle, die für den Betrieb des Webdienstes erforderlich sind, automatisch von dem Infrastruktur-Anbieter gespeichert."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeit, Browsertyp",
        "Länderinformationen — wird nur verwendet, um die Bildschirm Sprache automatisch zu bestimmen und wird nicht gespeichert"
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu verfolgen.",
        "Derzeit werden in diesem Dienst keine Anzeigen geschaltet. Sollte in Zukunft Werbung geschaltet werden, kann der Werbeanbieter (z. B. Google) Cookies verwenden, um Werbung zu schalten. In diesem Fall wird dieser Abschnitt zuerst geändert, um die Änderungen zu erläutern, bevor er in Kraft tritt."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Derzeit werden keine kostenpflichtigen Produkte verkauft, daher gibt es auch keine Informationen, die im Zusammenhang mit Zahlungen gespeichert werden.",
        "Wenn der Verkauf beginnt, werden die folgenden Informationen zur Zahlungsabwicklung und zur gesetzlichen Aufbewahrung von Transaktionsaufzeichnungen gespeichert. **Auch dann werden die eingegebenen Werte für die Saju-Deutung und das erstellte PDF nicht gespeichert,** und es werden keine Informationen zur Identifizierung des Nutzers wie Name, Kontaktinformationen oder Adresse erfasst."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (unbezahlt, bezahlt, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Bildschirm Sprache und Zahlungsregion zum Zeitpunkt der Bestellung (inländisch, international)",
        "Aufbewahrungsfrist — Gemäß Artikel 6 des Gesetzes über den Schutz der Verbraucher im elektronischen Handel werden Aufzeichnungen über Zahlungen und die Lieferung von Waren 5 Jahre lang aufbewahrt, und Aufzeichnungen über Beschwerden oder Streitigkeiten von Verbrauchern werden 3 Jahre lang aufbewahrt und anschließend vernichtet."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden.",
        "Für den Betrieb des Dienstes wird die Hosting-Infrastruktur von {hostingProvider} genutzt, und in diesem Prozess werden die Zugriffsprotokolle gemäß den Richtlinien des jeweiligen Unternehmens verarbeitet.",
        "Wenn der Verkauf von kostenpflichtigen Produkten beginnt, wird die Inlandszahlung an Toss Payments und die Auslandszahlung an PortOne (PayPal) delegiert. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden auch dann direkt von diesen Unternehmen verarbeitet, und der Dienst erhält diese nicht."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es auch keine Anfragen zur Einsichtnahme, Berichtigung oder Löschung.",
        "Nutzer können alle Eingabespuren einfach beseitigen, indem sie den Ergebnislink in der Adresszeile des Browsers löschen.",
        "Wenn es Fragen zur Nutzung des Dienstes gibt, können Sie uns unter den folgenden Kontaktdaten informieren."
      ]
    },
    {
      "heading": "8. Datenschutz von Kindern",
      "paragraphs": [
        "Dieser Dienst richtet sich nicht an Kinder unter 14 Jahren und erhebt keine personenbezogenen Daten von Kindern."
      ]
    },
    {
      "heading": "9. Datenschutzbeauftragter",
      "paragraphs": [
        "Datenschutzbeauftragter: {privacyOfficer}",
        "Kontakt: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Änderungen der Richtlinie",
      "paragraphs": [
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttretungsdatum und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die Verarbeitung tatsächlich ändert, z. B. durch die Schaltung von Werbung oder den Beginn des Verkaufs kostenpflichtiger Produkte, wird die Änderung im Voraus bekannt gegeben."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d1 = {
  "title": "Nutzungsbedingungen",
  "intro": "Diese Bedingungen regeln die Nutzungsbedingungen des Saju-Link (im Folgenden „Dienst“). Durch die Nutzung des Dienstes stimmen Sie diesen Bedingungen zu.",
  "sections": [
    {
      "heading": "1. Art des Dienstes",
      "paragraphs": [
        "Der Dienst zeigt basierend auf dem eingegebenen Geburtsdatum und der Geburtszeit die Saju (vier Säulen) und die Kräfte der fünf Elemente, die Stärke des Tages und die Position, an der der Tag mit dem Saju zusammentrifft, als Referenzmaterial an.",
        "Die angegebenen Punkte und Erklärungen sind **Referenzmaterial aus der Perspektive der traditionellen Saju und stellen keine wissenschaftlichen Vorhersagen oder Feststellungen über die Zukunft, Gesundheit oder Vermögen einer Person dar.** Ein niedriger Punktestand bedeutet nicht, dass der Tag schlecht ist, und ein hoher Punktestand garantiert nichts.",
        "**Die Erklärungen der kostenpflichtigen Berichte werden von generativer KI verfasst.** Alle Werte wie Punkte, Himmelsstämme und Kräfte der fünf Elemente werden jedoch vom Regel-Engine des Dienstes berechnet, und die KI ändert oder erstellt diese Werte nicht. Wenn keine Erklärung erstellt werden kann, wird die Beschreibung, die vom Engine berechneten Werten entspricht, an derselben Stelle eingefügt, und die Anzahl der Seiten und die enthaltenen Elemente sind wie in Abschnitt 3 unten angegeben."
      ],
      "bullets": []
    },
    {
      "heading": "2. Nutzungsgebühren",
      "paragraphs": [
        "Derzeit wird der Dienst kostenlos angeboten, und eine Mitgliedschaft ist nicht erforderlich.",
        "Wenn der Verkauf kostenpflichtiger Produkte (zwei Berichte im PDF-Format) beginnt, gelten die Bedingungen in Abschnitt 3. Vor Beginn des Verkaufs werden diese Bedingungen erneut bekannt gegeben."
      ],
      "bullets": []
    },
    {
      "heading": "3. Kostenpflichtige Produkte und Rückerstattung",
      "paragraphs": [
        "Die kostenpflichtigen Produkte sind **zwei Berichte im PDF-Format**. Beide erstellen ein Dokument aus den Ergebnissen auf dem Bildschirm und enthalten zusätzliche Inhalte, die nicht auf dem Bildschirm angezeigt werden.",
        "**Saju Lebenslesungsbericht PDF (A4 5 Seiten)** — Enthält angeborene Neigungen und Stärken, Punkte, auf die man achten sollte, die acht Zeichen des Saju, die Kräfte der fünf Elemente und die Stärke des Tages, die derzeit benötigte Energie, das heutige Horoskop und die vier Lebensbereiche (Vermögen, Liebe, Beruf, Gesundheit). Inlandszahlung {priceDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceGlobal}.",
        "**Premium Lebenslesungsbericht PDF (A4 7 Seiten)** — Fügt zwei Seiten zu den fünf Seiten des Lebensberichts hinzu. Enthält die zehn Götter der vier Säulen und die Wangshangxiushusa (wie die Jahreszeiten jede Energie positionieren), das Jahreshoroskop, die Anpassungen der Punkte des heutigen Tages und die Korrektur der Zeit des wahren Tages. Inlandszahlung {priceAffinityDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceAffinityGlobal}.",
        "Inlandszahlungen können über Toss Payments mit Kredit- oder Debitkarten sowie einfachen Zahlungsmethoden (Toss Pay, Kakao Pay, Naver Pay, Payco usw.) erfolgen, während Auslandszahlungen über PortOne mit PayPal abgewickelt werden. Der endgültige Betrag entspricht dem Betrag, der auf dem Zahlungsbildschirm angezeigt wird.",
        "**Der Dienst speichert weder die Eingabewerte der Nutzer noch die erstellten PDF-Dateien.** Nach Genehmigung der Zahlung wird das Dokument sofort erstellt und heruntergeladen, ohne dass etwas auf dem Server verbleibt. Daher muss die heruntergeladene Datei vom Nutzer selbst aufbewahrt werden.",
        "Für den Fall, dass der Download unterbrochen wird oder die Datei verloren geht, kann die Datei mit derselben Bestellung **bis zu 5 Mal** erneut heruntergeladen werden. Wenn jedoch die Eingabewerte außerhalb des Ergebnisbildschirms verschwinden, kann sie nicht erneut erstellt werden, daher speichern Sie bitte die Datei sofort nach der Zahlung."
      ],
      "bullets": [
        "**Vor Beginn des Downloads nach der Zahlung** kann jederzeit storniert und eine vollständige Rückerstattung beantragt werden.",
        "**Nach Abschluss des Downloads** ist eine Rücktrittserklärung aufgrund einfacher Meinungsänderung eingeschränkt. Es handelt sich um digitale Inhalte, die sofort bereitgestellt werden und deren Wiederherstellung nicht möglich ist, was unter die Rücktrittsgründe gemäß Artikel 17 Absatz 2 des Gesetzes über den Verbraucherschutz im elektronischen Geschäftsverkehr fällt.",
        "**Wenn aufgrund eines Systemfehlers das Dokument nicht erstellt wurde, die Datei nicht geöffnet werden kann oder der Zahlungsbetrag von der Bestellung abweicht,** wird dies als Neuausstellung oder vollständige Rückerstattung behandelt.",
        "**Unzufriedenheit mit dem Inhalt der Ergebnisse** stellt keinen Rückerstattungsgrund dar. Die Saju-Interpretation ist Referenzmaterial aus der Perspektive der traditionellen Saju, und diese Eigenschaft wird vor der Zahlung erläutert (siehe Abschnitt 1).",
        "Eine erneute Anfrage nach der Nutzung aller 5 Neuausstellungen stellt keinen Rückerstattungsgrund dar.",
        "**Wenn ein Minderjähriger ohne Zustimmung des gesetzlichen Vertreters eine Zahlung vornimmt,** kann der Minderjährige oder der gesetzliche Vertreter diese Zahlung stornieren. Bitte informieren Sie uns über die unten angegebenen Kontaktdaten, und wir werden die Rückerstattung vornehmen."
      ]
    },
    {
      "heading": "4. Berechnungsergebnisse",
      "paragraphs": [
        "Alle Punkte werden gemäß den veröffentlichten Regeln berechnet, sodass bei Eingabe derselben Werte immer dasselbe Ergebnis erzielt wird.",
        "Wenn die Geburtszeit nicht eingegeben wird, erfolgt die Berechnung ohne die Zeitsäule (時柱), sodass die Ergebnisse variieren können. Je genauer der Geburtsort ausgewählt wird, desto genauer wird die Berechnung der Zeitsäule.",
        "Die Berechnung des Manse-Rates verwendet eine öffentliche Berechnungslibrary, und je nach Behandlung von Solar- und Zeitberechnungen können die Ergebnisse von anderen Manse-Raten abweichen."
      ],
      "bullets": []
    },
    {
      "heading": "5. Verantwortung des Nutzers",
      "paragraphs": [
        "Nutzer können das Geburtsdatum anderer Personen eingeben, jedoch dürfen die daraus resultierenden Ergebnisse nicht zum Nachteil anderer verwendet werden.",
        "Verwenden Sie die Ergebnisse des Dienstes nicht als Grundlage für Entscheidungen, die die Rechte anderer in Bezug auf Ehe, Scheidung, Anstellung oder Transaktionen beeinflussen. Der Dienst wurde nicht für solche Zwecke erstellt."
      ],
      "bullets": []
    },
    {
      "heading": "6. Verbotene Handlungen",
      "paragraphs": [
        "Die folgenden Handlungen sind nicht erlaubt."
      ],
      "bullets": [
        "Das Senden übermäßiger Anfragen mit automatisierten Werkzeugen, die den Betrieb des Dienstes stören",
        "Die Ergebnisse des Dienstes als Tatsachen oder als Ergebnisse von Expertenbewertungen darzustellen",
        "Den Dienst zu kopieren oder abzuändern, um denselben Dienst anzubieten"
      ]
    },
    {
      "heading": "7. Haftungsausschluss",
      "paragraphs": [
        "Der Dienst bietet lediglich Referenzmaterial und übernimmt keine Verantwortung für Entscheidungen, die der Nutzer auf Grundlage der Ergebnisse trifft, sowie für die daraus resultierenden Konsequenzen.",
        "Der Dienst haftet nicht für Schäden, die durch unvorhersehbare Umstände wie Naturkatastrophen oder Ausfälle von Infrastruktur-Anbietern verursacht werden."
      ]
    },
    {
      "heading": "8. Geistige Eigentumsrechte",
      "paragraphs": [
        "Die Rechte an den Bildschirmen, Texten und Implementierungen der Berechnungsregeln des Dienstes liegen beim Betreiber. Nutzer dürfen die Ergebnisse für persönliche Betrachtungszwecke speichern oder teilen."
      ]
    },
    {
      "heading": "9. Änderungen der Bedingungen und anwendbares Recht",
      "paragraphs": [
        "Änderungen der Bedingungen werden zusammen mit dem Inkrafttretungsdatum auf dieser Seite veröffentlicht.",
        "Diese Bedingungen unterliegen dem Recht der Republik Korea, und Streitigkeiten im Zusammenhang mit der Nutzung des Dienstes unterliegen den Verfahren, die in den relevanten Gesetzen festgelegt sind."
      ],
      "bullets": []
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d2 = {
  "title": "Rückerstattungs- und Stornierungsrichtlinien",
  "intro": "Dies sind die Stornierungs- und Rückerstattungsrichtlinien für den saju (사주) Lebenslesungsbericht PDF. Die Bestimmungen gemäß Abschnitt 3 der Allgemeinen Geschäftsbedingungen sind hier zusammengefasst.",
  "sections": [
    {
      "heading": "1. Art des Produkts",
      "paragraphs": [
        "Die zum Verkauf angebotenen Produkte sind **saju Lebenslesungsbericht PDF (A4 5 Seiten)** und **Premium Lebenslesungsbericht PDF (A4 7 Seiten)**, beide sind digitale Inhalte, die sofort nach Genehmigung der Zahlung erstellt und heruntergeladen werden.",
        "**Der Service speichert weder die Eingabewerte des Nutzers noch die erstellte PDF-Datei.** Daher muss die heruntergeladene Datei vom Nutzer selbst aufbewahrt werden."
      ]
    },
    {
      "heading": "2. Widerruf",
      "paragraphs": [
        "Es gelten die Bestimmungen des Gesetzes über den elektronischen Geschäftsverkehr."
      ],
      "bullets": [
        "**Vor Beginn des Downloads** kann jederzeit storniert und eine vollständige Rückerstattung beantragt werden.",
        "**Nach Abschluss des Downloads** ist der Widerruf aufgrund einfacher Meinungsänderung eingeschränkt. Es handelt sich um digitale Inhalte, die sofort nach der Zahlung bereitgestellt werden und deren Wiederherstellung nicht möglich ist, was unter die im Artikel 17 Absatz 2 des Gesetzes über den Schutz der Verbraucher im elektronischen Geschäftsverkehr genannten Einschränkungsgründe fällt. Dies wird bereits auf der Zahlungsseite mitgeteilt und die Zustimmung eingeholt."
      ]
    },
    {
      "heading": "3. Vollständige Rückerstattung",
      "paragraphs": [
        "In den folgenden Fällen wird nach Überprüfung der Gründe eine Neuausstellung oder vollständige Rückerstattung vorgenommen."
      ],
      "bullets": [
        "Wenn aufgrund eines Systemfehlers kein Dokument erstellt wurde",
        "Wenn die heruntergeladene Datei nicht geöffnet werden kann",
        "Wenn der Zahlungsbetrag von der Bestellung abweicht",
        "**Wenn ein Minderjähriger ohne Zustimmung des gesetzlichen Vertreters bezahlt hat** — Der Minderjährige oder der gesetzliche Vertreter kann die Stornierung anfordern."
      ]
    },
    {
      "heading": "4. Fälle ohne Rückerstattungsgrund",
      "paragraphs": [],
      "bullets": [
        "**Unzufriedenheit mit dem Ergebnis.** Die saju (사주) Deutung ist ein Referenzmaterial aus der traditionellen Mingli-Perspektive, und diese Eigenschaft wird vor der Zahlung mitgeteilt.",
        "Anfragen nach einer Neuausstellung, nachdem alle 5 Neuausstellungen genutzt wurden."
      ]
    },
    {
      "heading": "5. Einreichungsmethode",
      "paragraphs": [
        "Rückerstattungen und Anfragen sind über das Kundenservicezentrum ({customerCenter}) oder per E-Mail ({email}) einzureichen. Wenn Sie auch die Bestellnummer angeben, erfolgt die Überprüfung schneller.",
        "Die Rückerstattung erfolgt über das Zahlungsmittel, das Sie verwendet haben, und kann je nach Kreditkarten- oder Zahlungsanbieter 3 bis 7 Werktage in Anspruch nehmen."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d3 = {
  "title": "Preisinformationen",
  "intro": "Hier finden Sie Informationen über den Umfang der kostenlosen Angebote und die Preise der kostenpflichtigen Produkte.",
  "sections": [
    {
      "heading": "1. Kostenlos",
      "paragraphs": [
        "**Die Deutung der Saju (사주) und die Abfrage des heutigen Schicksals sind kostenlos.** Eine Mitgliedschaft ist ebenfalls nicht erforderlich.",
        "Sie können die acht Zeichen der Saju (사주) Ursprungs, die Kräfte der fünf Elemente, die Stärke und Schwäche des Tages, die benötigte Energie, die Punktzahl und Bewertung des heutigen Schicksals sowie die Punktzahlen in den vier Lebensbereichen auf dem Bildschirm einsehen."
      ]
    },
    {
      "heading": "2. Saju Lebenslesungsbericht PDF (kostenpflichtig)",
      "paragraphs": [
        "Inlandszahlung {priceDomestic} (inklusive Mehrwertsteuer) · Auslandszahlung {priceGlobal}",
        "Die Ergebnisse auf dem Bildschirm werden in einem **A4-Dokument mit 5 Seiten** als PDF erstellt. Es enthält ein Deckblatt und eine Zusammenfassung, die angeborenen Neigungen und Stärken sowie Punkte, die beachtet werden sollten, die Ursprünge und die Kräfte der fünf Elemente, das heutige Schicksal und die vier Lebensbereiche in einem Dokument.",
        "Mit derselben Bestellung können Sie **bis zu 5 Mal** erneut herunterladen. Bitte speichern Sie die Datei sofort nach der Zahlung, da sie nicht erneut erstellt werden kann, wenn die Eingabewerte verloren gehen."
      ]
    },
    {
      "heading": "3. Premium Lebenslesungsbericht PDF (kostenpflichtig)",
      "paragraphs": [
        "Inlandszahlung {priceAffinityDomestic} (inklusive Mehrwertsteuer) · Auslandszahlung {priceAffinityGlobal}",
        "Es handelt sich um **7 Seiten A4**, wobei **zwei Seiten zusätzlich** zu den 5 Seiten der Lebenslesung hinzugefügt werden. Die zusätzlichen Informationen umfassen die zehn Götter der vier Säulen und Wangshanghyususa sowie die Anpassungen der Punktzahlen für das Jahr und den heutigen Tag, einschließlich der Korrektur der wahren Sonne, die nicht auf dem Bildschirm angezeigt werden.",
        "Die Bedingungen für die Wiedervergabe sind die gleichen wie bei dem Lebenslesungsbericht."
      ]
    },
    {
      "heading": "4. Zahlungsmethoden",
      "paragraphs": [
        "**Inland** — Sie können Kredit- und Debitkarten sowie einfache Zahlungsmethoden (Toss Payments, KakaoPay, NaverPay, Payco usw.) über Toss Payments nutzen.",
        "**Ausland** — Sie können über PortOne mit PayPal bezahlen.",
        "Der endgültige Zahlungsbetrag richtet sich nach dem Betrag, der auf dem Zahlungsbildschirm angezeigt wird."
      ]
    },
    {
      "heading": "5. Preisänderungen",
      "paragraphs": [
        "Im Falle von Preisänderungen werden diese zuerst auf dieser Seite veröffentlicht. Für bereits abgeschlossene Bestellungen gelten die alten Preise."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d4 = {
  "title": "Datenschutzrichtlinie",
  "intro": "Saju-Link speichert keine Informationen, die für die Saju (vier Säulen) Deutung erforderlich sind. Diese Richtlinie beschreibt, was der Dienst erhält, was nicht gespeichert wird und was automatisch aufgezeichnet wird.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Geburtsdaten, Geburtszeit, Geburtsort, Geschlecht und der Name, die für die Saju-Deutung eingegeben werden, werden **nirgendwo gespeichert.** Sie werden nur im Server-Speicher während der Bearbeitung der Anfrage verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch nicht in separaten Dateien gespeichert. Da keine Mitgliedschaft erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisanzeige enthält die Eingabewerte in kodierter Form. Dieser Wert befindet sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards wird der Inhalt hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn der Ergebnislink an eine andere Person gesendet wird, kann diese die gleichen Ergebnisse sehen. Da der Link selbst die Eingabewerte enthält, liegt es am Nutzer zu entscheiden, ob er ihn teilen möchte."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es werden keine Informationen gesammelt, um den Nutzer zu identifizieren. Es werden jedoch die minimalen Protokolle, die für den Betrieb des Webdienstes erforderlich sind, automatisch von dem Infrastruktur-Anbieter aufgezeichnet."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeit, Browsertyp",
        "Länderinformationen — werden nur verwendet, um die Anzeigesprache automatisch festzulegen und nicht gespeichert."
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu identifizieren oder zu verfolgen. Die Informationen, die in die Saju-Deutung eingegeben werden, werden nicht an Werbetreibende weitergegeben.",
        "Dieser Dienst zeigt Werbung über Google AdSense an. In diesem Prozess geschehen folgende Dinge."
      ],
      "bullets": [
        "Drittanbieter, einschließlich Google, können Cookies im Browser des Nutzers speichern oder lesen.",
        "Google verwendet Cookies, um Werbung basierend auf den Besuchshistorien dieser und anderer Websites anzuzeigen.",
        "Nutzer können personalisierte Werbung in den Google-Werbeeinstellungen (google.com/settings/ads) deaktivieren. Auch wenn sie deaktiviert wird, werden weiterhin Anzeigen angezeigt, die jedoch weniger relevant für den Nutzer sind.",
        "Personalisierte Werbung von Drittanbietern kann auf aboutads.info/choices auf einmal deaktiviert werden.",
        "Es gibt auch Möglichkeiten, Cookies in den Browsereinstellungen zu blockieren.",
        "Nutzer aus dem Europäischen Wirtschaftsraum, Großbritannien und der Schweiz werden zuerst um Zustimmung zur Verwendung von Werbe-Cookies gebeten."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Derzeit werden keine kostenpflichtigen Produkte verkauft, daher gibt es auch keine Informationen, die im Zusammenhang mit Zahlungen gespeichert werden.",
        "Wenn der Verkauf beginnt, werden die folgenden Informationen zur Zahlungsabwicklung und zur gesetzlich vorgeschriebenen Aufbewahrung von Transaktionsaufzeichnungen gespeichert. **Auch dann werden die in die Saju-Deutung eingegebenen Werte und die erstellte PDF nicht gespeichert,** und es werden keine Informationen zur Identifizierung des Nutzers wie Name, Kontaktinformationen oder Adresse erfasst."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (ausstehend, abgeschlossen, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Anzeigesprache und Zahlungsregion (inländisch, international) zum Zeitpunkt der Bestellung",
        "Aufbewahrungsfrist — Aufzeichnungen über Zahlungen und die Lieferung von Waren werden gemäß Artikel 6 des Gesetzes über den Schutz der Verbraucher im elektronischen Geschäftsverkehr 5 Jahre lang aufbewahrt, während Aufzeichnungen über Beschwerden oder Streitigkeiten von Verbrauchern 3 Jahre lang aufbewahrt und dann vernichtet werden."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden.",
        "Für den Betrieb des Dienstes wird die Hosting-Infrastruktur von {hostingProvider} genutzt, und in diesem Prozess werden die Zugriffsprotokolle gemäß den Richtlinien des Anbieters verarbeitet.",
        "Wenn der Verkauf von kostenpflichtigen Produkten beginnt, wird die inländische Zahlung an Toss Payments und die internationale Zahlung an PortOne (PayPal) delegiert. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden auch dann direkt von diesen Anbietern verarbeitet, und der Dienst erhält diese nicht."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es auch keine Daten, die eingesehen, korrigiert oder gelöscht werden können.",
        "Nutzer können alle Eingabespuren einfach beseitigen, indem sie den Ergebnislink in der Adresszeile des Browsers löschen.",
        "Wenn es Fragen zur Nutzung des Dienstes gibt, können Sie uns unter den folgenden Kontaktdaten informieren."
      ]
    },
    {
      "heading": "8. Datenschutz von Kindern",
      "paragraphs": [
        "Dieser Dienst richtet sich nicht an Kinder unter 14 Jahren und sammelt keine personenbezogenen Daten von Kindern."
      ]
    },
    {
      "heading": "9. Datenschutzbeauftragter",
      "paragraphs": [
        "Datenschutzbeauftragter: {privacyOfficer}",
        "Kontakt: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Änderungen der Richtlinie",
      "paragraphs": [
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttreten und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die Verarbeitung tatsächlich ändert, z. B. durch die Schaltung von Werbung oder den Beginn des Verkaufs kostenpflichtiger Produkte, wird die Änderung im Voraus bekannt gegeben."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d5 = {
  "title": "Datenschutzrichtlinie",
  "intro": "Saju-Link speichert keine Informationen, die für die Saju (사주) Deutung erforderlich sind. Diese Richtlinie beschreibt, welche Informationen erfasst werden, welche nicht gespeichert werden und welche automatisch protokolliert werden.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Geburtsdaten, Geburtszeit, Geburtsort, Geschlecht und der Name, die für die Saju (사주) Deutung eingegeben werden, werden **nirgendwo gespeichert.** Sie werden nur im Server-Speicher während der Bearbeitung der Anfrage verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch keine separaten Dateien erstellt. Da keine Mitgliedschaft erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisanzeige enthält die Eingabewerte in kodierter Form. Diese Werte befinden sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards werden die Inhalte hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn der Ergebnislink an eine andere Person gesendet wird, kann diese die gleichen Ergebnisse sehen. Da der Link selbst die Eingabewerte enthält, liegt es am Nutzer zu entscheiden, ob er ihn teilen möchte."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es werden keine Informationen gesammelt, um den Nutzer zu identifizieren. Es werden jedoch die minimalen Protokolle, die für den Betrieb des Webdienstes erforderlich sind, automatisch von dem Infrastruktur-Anbieter gespeichert."
      ],
      "bullets": [
        "Zugriffs-IP-Adresse, Zugriffszeit, Browsertyp und andere allgemeine Serverzugriffsprotokolle",
        "Länderinformationen — werden nur verwendet, um die Bildschirm Sprache automatisch zu bestimmen und werden nicht gespeichert."
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu verfolgen.",
        "Aktuell werden in diesem Dienst keine Anzeigen geschaltet. Falls in Zukunft Anzeigen geschaltet werden, kann der Werbeanbieter (z. B. Google) Cookies zur Schaltung von Anzeigen verwenden. In diesem Fall wird diese Klausel zuerst geändert, um die Änderungen zu erläutern, bevor sie in Kraft tritt."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Wenn Sie ein kostenpflichtiges Produkt (Bericht PDF) bezahlen, werden die Bestellinformationen zur Zahlungsabwicklung und zur gesetzlich vorgeschriebenen Aufbewahrung von Transaktionsaufzeichnungen gespeichert.",
        "**Die Werte, die in die Saju (사주) Deutung eingegeben wurden, sowie das erstellte PDF werden auch bei einer Zahlung nicht gespeichert.** Das Prinzip aus Punkt 1 bleibt unabhängig von der Zahlungsentscheidung bestehen. Die gespeicherten Elemente sind wie folgt und enthalten keine Informationen, die den Nutzer identifizieren, wie Name, Kontaktinformationen oder Adresse."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (unbezahlt, bezahlt, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Bildschirm Sprache und Zahlungsregion (inländisch, international) zum Zeitpunkt der Bestellung",
        "Aufbewahrungsfrist — Aufzeichnungen über Zahlungen und die Lieferung von Waren werden gemäß Artikel 6 des Gesetzes über den Schutz der Verbraucher im elektronischen Geschäftsverkehr 5 Jahre lang aufbewahrt, und Aufzeichnungen über Beschwerden oder Streitigkeiten der Verbraucher werden 3 Jahre lang aufbewahrt und anschließend vernichtet."
      ]
    },
    {
      "heading": "6. Bereitstellung an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, die den Nutzer identifizieren, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden. Die Zahlungsabwicklung wird an die folgenden Anbieter ausgelagert.",
        "Für den Betrieb des Dienstes wird die Hosting-Infrastruktur von {hostingProvider} genutzt, und in diesem Prozess werden die Zugriffsprotokolle gemäß den Richtlinien des jeweiligen Anbieters verarbeitet.",
        "Inländische Zahlungen werden von Toss Payments und internationale Zahlungen über PayPal von PortOne abgewickelt. Informationen zu Zahlungsmethoden wie Kreditkartennummern oder Kontonummern werden direkt von diesen Anbietern verarbeitet, und der Dienst erhält diese Informationen weder noch speichert er sie."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da die Eingabewerte für die Saju (사주) Deutung nicht gespeichert werden, gibt es keine Anfragen zur Einsichtnahme, Berichtigung oder Löschung. Die verbleibenden Bestellaufzeichnungen aus Zahlungen müssen gemäß den gesetzlichen Vorgaben für einen bestimmten Zeitraum aufbewahrt werden, und während dieses Zeitraums können sie nicht gelöscht werden; nach Ablauf dieser Frist werden sie vernichtet.",
        "Nutzer können alle Eingabespuren einfach beseitigen, indem sie den Ergebnislink in der Adresszeile des Browsers löschen.",
        "Wenn Sie Fragen zur Nutzung des Dienstes haben, kontaktieren Sie uns bitte über die unten angegebenen Kontaktdaten."
      ]
    },
    {
      "heading": "8. Datenschutz von Kindern",
      "paragraphs": [
        "Dieser Dienst richtet sich nicht an Kinder unter 14 Jahren und sammelt keine personenbezogenen Daten von Kindern."
      ]
    },
    {
      "heading": "9. Datenschutzbeauftragter",
      "paragraphs": [
        "Datenschutzbeauftragter: {privacyOfficer}",
        "Kontakt: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Änderungen der Richtlinie",
      "paragraphs": [
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttretungsdatum und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die tatsächlichen Verarbeitungsinhalte ändern, wie z. B. die Schaltung von Werbung oder der Verkauf kostenpflichtiger Produkte, werden die Nutzer im Voraus über die Änderungen informiert."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d6 = {
  "title": "Nutzungsbedingungen",
  "intro": "Diese Bedingungen regeln die Nutzungsbedingungen des Saju-Link (im Folgenden „Dienst“). Durch die Nutzung des Dienstes stimmen Sie diesen Bedingungen zu.",
  "sections": [
    {
      "heading": "1. Art des Dienstes",
      "paragraphs": [
        "Der Dienst zeigt basierend auf dem eingegebenen Geburtsdatum und der Geburtszeit das Saju (vier Säulen) und die Kräfte der fünf Elemente, die Stärke des Tages und die Position, an der der Tagesverlauf und das Saju zusammentreffen, als Referenzmaterial an.",
        "Die angegebenen Punkte und Erklärungen sind **Referenzmaterial aus der Perspektive der traditionellen Saju-Analyse und stellen keine wissenschaftlichen Vorhersagen oder Feststellungen über die Zukunft, Gesundheit oder Vermögen einer Person dar.** Ein niedriger Punktestand bedeutet nicht, dass der Tag schlecht ist, und ein hoher Punktestand garantiert nichts.",
        "**Die Erklärungen der kostenpflichtigen Berichte werden von generativer KI verfasst.** Alle Werte wie Punktzahlen, Himmelszeichen und Kräfte der fünf Elemente werden jedoch vom Regel-Engine des Dienstes berechnet, und die KI ändert oder erstellt diese Werte nicht. Falls keine Erklärung erstellt werden kann, wird die Beschreibung, die auf den berechneten Werten basiert, an derselben Stelle eingefügt, und die Anzahl der Seiten und die enthaltenen Elemente sind wie in Abschnitt 3 unten angegeben."
      ]
    },
    {
      "heading": "2. Nutzungsgebühren",
      "paragraphs": [
        "Die Saju-Analyse und die Abfrage des täglichen Schicksals sind kostenlos und erfordern keine Mitgliedschaft.",
        "Das Ergebnis als PDF-Bericht zu erhalten, ist kostenpflichtig. Preise und Bedingungen werden in Abschnitt 3 und auf der Zahlungsseite angezeigt."
      ]
    },
    {
      "heading": "3. Kostenpflichtige Produkte und Rückerstattung",
      "paragraphs": [
        "Die zum Verkauf stehenden kostenpflichtigen Produkte sind **zwei Arten von Berichten als PDF.** Beide erstellen ein Dokument aus den Ergebnissen auf dem Bildschirm und enthalten zusätzliche Informationen, die nicht auf dem Bildschirm angezeigt werden.",
        "**Saju Lebenslesungsbericht PDF (A4 5 Seiten)** — Enthält angeborene Neigungen und Stärken, Punkte, auf die man achten sollte, die acht Zeichen des Saju, die Kräfte der fünf Elemente und die Stärke des Tages, die derzeit benötigte Energie, das tägliche Schicksal und die vier Lebensbereiche (Vermögen, Liebe, Beruf, Gesundheit). Preis für Inlandszahlungen {priceDomestic} (inklusive Mehrwertsteuer), Preis für Auslandszahlungen {priceGlobal}.",
        "**Premium Lebenslesungsbericht PDF (A4 7 Seiten)** — Fügt zwei Seiten zu den fünf Seiten des Lebensberichts hinzu. Enthält die zehn Götter der vier Säulen und Wangshanghyususa (wie die Jahreszeiten jede Energie positionieren), das jährliche Schicksal, die Anpassungen der Punkte des heutigen Tages und die Korrekturdetails für die wahre Tageszeit. Preis für Inlandszahlungen {priceAffinityDomestic} (inklusive Mehrwertsteuer), Preis für Auslandszahlungen {priceAffinityGlobal}.",
        "Inlandszahlungen können über Toss Payments mit Kredit- oder Debitkarten sowie mit einfachen Zahlungsmethoden (Toss Pay, Kakao Pay, Naver Pay, Payco usw.) erfolgen, während Auslandszahlungen über PortOne mit PayPal abgewickelt werden. Der endgültige Betrag entspricht dem auf der Zahlungsseite angezeigten Betrag.",
        "**Der Dienst speichert weder die Eingabewerte des Nutzers noch die erstellten PDF-Dateien.** Nach Genehmigung der Zahlung wird das Dokument sofort erstellt und heruntergeladen, und es bleibt nichts auf dem Server zurück. Daher muss die heruntergeladene Datei vom Nutzer selbst aufbewahrt werden.",
        "Für den Fall, dass der Download unterbrochen wird oder die Datei verloren geht, kann die Datei bis zu **5 Mal** erneut heruntergeladen werden. Wenn jedoch die Eingabewerte verloren gehen, nachdem der Bildschirm verlassen wurde, kann die Datei nicht erneut erstellt werden, daher speichern Sie bitte die Datei sofort nach der Zahlung."
      ],
      "bullets": [
        "**Vor Beginn des Downloads nach der Zahlung** kann jederzeit storniert und eine vollständige Rückerstattung beantragt werden.",
        "**Nach Abschluss des Downloads** sind Rücktritte aufgrund von einfacher Meinungsänderung eingeschränkt. Es handelt sich um digitale Inhalte, die sofort bereitgestellt werden und deren Wiederherstellung nicht möglich ist, was den in Artikel 17 Absatz 2 des Gesetzes über den Verbraucherschutz im elektronischen Geschäftsverkehr festgelegten Gründen für die Einschränkung von Rücktritten entspricht.",
        "**Wenn aufgrund eines Systemfehlers das Dokument nicht erstellt wurde, die Datei nicht geöffnet werden kann oder der Zahlungsbetrag von der Bestellung abweicht,** wird dies als Neuausstellung oder vollständige Rückerstattung behandelt.",
        "**Unzufriedenheit mit dem Inhalt der Ergebnisse** stellt keinen Grund für eine Rückerstattung dar. Die Saju-Analyse ist ein Referenzmaterial aus der Perspektive der traditionellen Saju-Analyse, und dies wird vor der Zahlung erläutert (siehe Abschnitt 1 oben).",
        "Anfragen zur Neuausstellung nach der Nutzung aller 5 Neuausstellungen stellen keinen Grund für eine Rückerstattung dar.",
        "**Wenn ein Minderjähriger ohne Zustimmung des gesetzlichen Vertreters eine Zahlung vornimmt,** kann dieser oder der gesetzliche Vertreter die Zahlung stornieren. Bitte informieren Sie uns unter den unten angegebenen Kontaktdaten, um eine Rückerstattung zu erhalten."
      ]
    },
    {
      "heading": "4. Berechnungsergebnisse",
      "paragraphs": [
        "Alle Punktzahlen werden gemäß den veröffentlichten Regeln berechnet, sodass bei Eingabe derselben Werte immer dasselbe Ergebnis erzielt wird.",
        "Wenn die Geburtszeit nicht eingegeben wird, erfolgt die Berechnung ohne die Zeit-Säule (時柱), was zu unterschiedlichen Ergebnissen führen kann. Je genauer der Geburtsort ausgewählt wird, desto genauer wird die Berechnung der Zeit-Säule.",
        "Die Berechnung des Manse-Lebens erfolgt unter Verwendung einer veröffentlichten Berechnungsbibliothek, und je nach Handhabung von Solar- und Mondzyklen können die Ergebnisse von anderen Manse-Lebensberechnungen abweichen."
      ]
    },
    {
      "heading": "5. Verantwortung des Nutzers",
      "paragraphs": [
        "Nutzer können das Geburtsdatum anderer Personen eingeben, dürfen jedoch die daraus resultierenden Ergebnisse nicht zum Nachteil anderer verwenden.",
        "Verwenden Sie die Ergebnisse des Dienstes nicht als Grundlage für Entscheidungen, die die Rechte anderer in Bezug auf Heirats-, Scheidungs-, Einstellungs- oder Handelsentscheidungen beeinflussen. Der Dienst ist nicht für solche Zwecke konzipiert."
      ]
    },
    {
      "heading": "6. Verbotene Handlungen",
      "paragraphs": [
        "Die folgenden Handlungen sind nicht erlaubt."
      ],
      "bullets": [
        "Das Senden übermäßiger Anfragen mit automatisierten Werkzeugen, die den Betrieb des Dienstes stören",
        "Die Ergebnisse des Dienstes als Tatsachen oder als Ergebnisse von Expertenbewertungen darzustellen",
        "Den Dienst zu kopieren oder abzuändern, um denselben Dienst anzubieten"
      ]
    },
    {
      "heading": "7. Haftungsausschluss",
      "paragraphs": [
        "Der Dienst bietet lediglich Referenzmaterial an und übernimmt keine Verantwortung für Entscheidungen, die der Nutzer auf Grundlage der Ergebnisse trifft, sowie für die daraus resultierenden Konsequenzen.",
        "Der Dienst haftet nicht für Schäden, die durch unkontrollierbare Gründe wie Naturkatastrophen oder Ausfälle von Infrastruktur-Anbietern verursacht werden."
      ]
    },
    {
      "heading": "8. Geistige Eigentumsrechte",
      "paragraphs": [
        "Die Rechte an den Bildschirmen, Texten und Implementierungen der Berechnungsregeln des Dienstes liegen beim Betreiber. Nutzer dürfen die Ergebnisse für persönliche Betrachtungszwecke speichern oder teilen."
      ]
    },
    {
      "heading": "9. Änderungen der Bedingungen und anwendbares Recht",
      "paragraphs": [
        "Änderungen der Bedingungen werden zusammen mit dem Inkrafttretungsdatum auf dieser Seite veröffentlicht.",
        "Diese Bedingungen unterliegen dem Recht der Republik Korea, und Streitigkeiten im Zusammenhang mit der Nutzung des Dienstes unterliegen den Verfahren, die durch die geltenden Gesetze festgelegt sind."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d7 = {
  "title": "Datenschutzrichtlinie",
  "intro": "Saju-Link speichert keine Informationen, die für die Saju (vier Säulen) Deutung erforderlich sind. Diese Richtlinie beschreibt, welche Informationen gesammelt, welche nicht gespeichert werden und welche automatisch aufgezeichnet werden.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Geburtsdaten, Geburtszeit, Geburtsort, Geschlecht und der Name, die für die Saju-Deutung eingegeben werden, werden **nirgendwo gespeichert.** Sie werden nur im Server-Speicher während der Bearbeitung der Anfrage verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch nicht in separaten Dateien gespeichert. Da keine Mitgliedschaft erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisanzeige enthält die Eingabewerte in kodierter Form. Dieser Wert befindet sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards wird der Inhalt hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn der Ergebnislink an eine andere Person gesendet wird, kann diese die gleichen Ergebnisse sehen. Da der Link selbst die Eingabewerte enthält, liegt es im Ermessen des Nutzers, ob er ihn teilt."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es werden keine Informationen gesammelt, um den Nutzer zu identifizieren. Es werden jedoch die minimalen Aufzeichnungen, die für den Betrieb des Webdienstes erforderlich sind, automatisch vom Infrastruktur-Anbieter gespeichert."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeit, Browsertyp",
        "Länderinformationen — werden nur verwendet, um die Anzeigesprache automatisch festzulegen und nicht gespeichert"
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu identifizieren oder zu verfolgen. Die Informationen, die in die Saju-Deutung eingegeben werden, werden nicht an Werbetreibende weitergegeben.",
        "Dieser Dienst zeigt Werbung über Google AdSense an. In diesem Prozess geschehen folgende Dinge."
      ],
      "bullets": [
        "Drittanbieter, einschließlich Google, können Cookies im Browser des Nutzers speichern oder lesen.",
        "Google verwendet Cookies, um Werbung basierend auf den Besuchshistorien dieser und anderer Websites anzuzeigen.",
        "Nutzer können personalisierte Werbung in den Google-Werbeeinstellungen (google.com/settings/ads) deaktivieren. Auch wenn sie deaktiviert wird, werden weiterhin Anzeigen angezeigt, die jedoch weniger relevant für den Nutzer sind.",
        "Personalisierte Werbung von Drittanbietern kann auf aboutads.info/choices auf einmal deaktiviert werden.",
        "Es gibt auch Möglichkeiten, Cookies in den Browsereinstellungen zu blockieren.",
        "Nutzer aus dem Europäischen Wirtschaftsraum, Großbritannien und der Schweiz werden zuerst um Zustimmung zur Verwendung von Werbe-Cookies gebeten."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Wenn kostenpflichtige Produkte (Bericht PDF) gekauft werden, werden die Bestellinformationen zur Zahlungsabwicklung und zur gesetzlich vorgeschriebenen Aufbewahrung von Transaktionsaufzeichnungen gespeichert.",
        "**Die Werte, die in die Saju-Deutung eingegeben wurden, und das erstellte PDF werden auch im Falle einer Zahlung nicht gespeichert.** Das Prinzip aus Punkt 1 bleibt unabhängig von der Zahlungsentscheidung bestehen. Die gespeicherten Elemente sind wie folgt, und Informationen zur Identifizierung des Nutzers wie Name, Kontaktinformationen und Adresse sind nicht enthalten."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (unbezahlt, bezahlt, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Anzeigesprache und Zahlungsregion (inland, ausland) zum Zeitpunkt der Bestellung",
        "Aufbewahrungsfrist — Gemäß Artikel 6 des Gesetzes über den Schutz der Verbraucher im elektronischen Geschäftsverkehr werden Aufzeichnungen über Zahlungen und die Lieferung von Waren 5 Jahre lang aufbewahrt, und Aufzeichnungen über Beschwerden oder Streitigkeiten der Verbraucher werden 3 Jahre lang aufbewahrt und anschließend vernichtet."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, die zur Identifizierung des Nutzers erforderlich sind, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden. Die Zahlungsabwicklung wird an die folgenden Anbieter ausgelagert.",
        "Für den Betrieb des Dienstes wird die Hosting-Infrastruktur von {hostingProvider} genutzt, und in diesem Prozess werden die Zugriffsprotokolle gemäß den Richtlinien des Anbieters verarbeitet.",
        "Inlandzahlungen werden von Toss Payments und Auslandzahlungen über PayPal von PortOne verarbeitet. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden direkt von diesen Anbietern verarbeitet, und der Dienst empfängt und speichert diese nicht."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da die Eingabewerte für die Saju-Deutung nicht gespeichert werden, gibt es keine Zielpersonen für Anfragen zur Einsichtnahme, Berichtigung oder Löschung. Die verbleibenden Bestellaufzeichnungen aus Zahlungen müssen gemäß den gesetzlichen Bestimmungen für einen bestimmten Zeitraum aufbewahrt werden, und während dieses Zeitraums können sie nicht gelöscht werden; nach Ablauf dieser Frist werden sie vernichtet.",
        "Nutzer können alle Eingabespuren einfach beseitigen, indem sie den Ergebnislink in der Adresszeile des Browsers löschen.",
        "Wenn es Fragen zur Nutzung des Dienstes gibt, wenden Sie sich bitte an die unten angegebenen Kontaktdaten."
      ]
    },
    {
      "heading": "8. Datenschutz von Kindern",
      "paragraphs": [
        "Dieser Dienst richtet sich nicht an Kinder unter 14 Jahren und sammelt keine personenbezogenen Daten von Kindern."
      ]
    },
    {
      "heading": "9. Datenschutzbeauftragter",
      "paragraphs": [
        "Datenschutzbeauftragter: {privacyOfficer}",
        "Kontakt: {email} / {customerCenter}"
      ]
    },
    {
      "heading": "10. Änderungen der Richtlinie",
      "paragraphs": [
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttreten und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die tatsächlichen Verarbeitungsinhalte ändern, z. B. durch die Schaltung von Werbung oder den Verkauf kostenpflichtiger Produkte, wird die Änderung im Voraus bekannt gegeben."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

export const de: LegalLocaleDocuments = {
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
