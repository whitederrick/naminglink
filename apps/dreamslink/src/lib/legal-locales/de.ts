import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Datenschutzrichtlinie",
  "intro": "Dreams-Link speichert keine Informationen, die für die Traumdeutung erforderlich sind. Diese Richtlinie beschreibt, welche Informationen erfasst, welche nicht gespeichert werden und welche automatisch protokolliert werden.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Traumgeschichten, die Sie für die Traumdeutung angeben, Ihr Gefühl beim Aufwachen und ob Sie denselben Traum wiederholt haben, werden **nirgendwo gespeichert.** Sie werden nur im Server-Speicher während der Bearbeitung der Anfrage verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch nicht in separaten Dateien gespeichert. Da keine Mitgliedschaft erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft.",
        "Die Traumgeschichten sind die privatesten Informationen, die dieser Dienst erhält. Daher gibt es keine Funktion, um frühere Ergebnisse erneut abzurufen (Traumtagebuch) — diese Funktion würde voraussetzen, dass die angegebenen Texte gespeichert werden."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisanzeige enthält die Eingabewerte in kodierter Form. Diese Werte befinden sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards werden die Inhalte hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn Sie den Ergebnislink an eine andere Person senden, kann diese die gleichen Ergebnisse sehen. Da der Link selbst die Eingabewerte enthält, liegt es am Nutzer, zu entscheiden, ob er ihn teilen möchte."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es werden keine Informationen gesammelt, um die Nutzer zu identifizieren. Es bleiben jedoch die minimalen Protokolle, die für den Betrieb des Webdienstes erforderlich sind, automatisch durch den Infrastruktur-Anbieter erhalten."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeit und Browsertyp",
        "Länderinformationen — werden nur verwendet, um die Bildschirm Sprache automatisch zu bestimmen und werden nicht gespeichert"
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu verfolgen.",
        "Aktuell werden in diesem Dienst keine Anzeigen geschaltet. Sollte in Zukunft Werbung geschaltet werden, können die Werbeanbieter (z.B. Google) Cookies verwenden, um die Werbung zu schalten. In diesem Fall wird dieser Abschnitt zuerst geändert, um die Änderungen klarzustellen, bevor dies beginnt."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Derzeit werden keine kostenpflichtigen Produkte verkauft, sodass auch keine Informationen im Zusammenhang mit Zahlungen gespeichert werden.",
        "Wenn der Verkauf beginnt, werden die folgenden Informationen gespeichert, um die Zahlungsabwicklung und die gesetzlich vorgeschriebene Aufbewahrung von Transaktionsaufzeichnungen zu gewährleisten. **Auch dann werden die angegebenen Träume und die erstellten Dateien nicht gespeichert,** und es werden keine Informationen zur Identifizierung der Nutzer wie Name, Kontaktinformationen oder Adresse erfasst."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (unbezahlt, bezahlt, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Bildschirm Sprache und Zahlungsregion (inländisch, international) zum Zeitpunkt der Bestellung",
        "Aufbewahrungsfrist — Aufzeichnungen über Zahlungen und die Lieferung von Waren werden gemäß Artikel 6 des Gesetzes über den Verbraucherschutz im elektronischen Handel 5 Jahre lang aufbewahrt, während Aufzeichnungen über Verbraucherbeschwerden oder Streitigkeiten 3 Jahre lang aufbewahrt und dann vernichtet werden."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden.",
        "Für den Betrieb des Dienstes wird die Hosting-Infrastruktur von {hostingProvider} genutzt, und in diesem Prozess werden die Zugriffsprotokolle gemäß den Richtlinien des betreffenden Unternehmens verarbeitet.",
        "Wenn der Verkauf kostenpflichtiger Produkte beginnt, wird die inländische Zahlung an Toss Payments und die internationale Zahlung an PortOne (PayPal) delegiert. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden auch dann direkt von diesen Unternehmen verarbeitet, und der Dienst erhält diese nicht."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es keine Daten, die eingesehen, berichtigt oder gelöscht werden können.",
        "Nutzer können alle Eingabespuren einfach beseitigen, indem sie den Ergebnislink in der Adresszeile des Browsers löschen.",
        "Wenn Sie Fragen zur Nutzung des Dienstes haben, teilen Sie uns dies bitte über die unten angegebenen Kontaktdaten mit."
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
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttretungsdatum und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die Verarbeitung tatsächlich ändert, z.B. durch die Schaltung von Werbung oder den Beginn des Verkaufs kostenpflichtiger Produkte, werden die Nutzer zuerst über die Änderungen informiert."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d1 = {
  "title": "Nutzungsbedingungen",
  "intro": "Diese Bedingungen regeln die Nutzungsbedingungen des Dreams-Link (im Folgenden „Dienst“). Durch die Nutzung des Dienstes stimmen Sie diesen Bedingungen zu.",
  "sections": [
    {
      "heading": "1. Art des Dienstes",
      "paragraphs": [
        "Der Dienst sucht in den von den Nutzern angegebenen Träumen nach traditionellen Traumsymbolen und zeigt die überlieferten Bedeutungen dieser Symbole als Referenzmaterial an. Symbole, die nicht im Voraus bekannt sind, werden als nicht gefunden bezeichnet, und es werden keine nicht existierenden Bedeutungen erfunden.",
        "Die dargestellten Symbole und Erklärungen sind **Referenzmaterial aus der Perspektive traditioneller Interpretationen und stellen keine Vorhersagen über die Zukunft oder medizinische, finanzielle oder rechtliche Beratung dar.** Ein guter Traum garantiert nicht, dass etwas passiert, und ein schlechter Traum bedeutet nicht, dass etwas geplant ist.",
        "**Die Ergebnisse im Zusammenhang mit dem Konzeptionstraum (태몽) bestimmen nicht den Schwangerschaftsstatus oder das Geschlecht des Fötus.** Es wird lediglich mitgeteilt, dass Symbole, die traditionell als Konzeptionstraum angesehen werden, im Traum erschienen sind und deren Hintergrund."
      ]
    },
    {
      "heading": "2. Nutzungsgebühren",
      "paragraphs": [
        "Derzeit wird der Dienst kostenlos angeboten, und eine Registrierung ist nicht erforderlich.",
        "Wenn kostenpflichtige Produkte (Traumkartenbilder, Konzeptionstraumberichte als PDF) zum Verkauf angeboten werden, gelten die Bedingungen in Abschnitt 3. Vor Beginn des Verkaufs werden diese Bedingungen erneut bekannt gegeben."
      ]
    },
    {
      "heading": "3. Kostenpflichtige Produkte und Rückerstattung",
      "paragraphs": [
        "Es gibt **zwei Arten** von kostenpflichtigen Produkten. Die kostenlose Traumdeutung kann ohne Zahlung genutzt werden, während die beiden unten genannten Produkte in einer Form erstellt werden, die die Ergebnisse bewahrt.",
        "**Traumkarte** — Eine Bilddatei. Sie wird erstellt, um die Symbole und deren traditionelle Bedeutungen aus dem Traum des Tages zu bewahren und zu teilen. **Es handelt sich nicht um ein Dokument (PDF).** Inlandszahlung {priceCardDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceCardGlobal}.",
        "**Konzeptionstraumbericht als PDF** — 4 Seiten. Er enthält die traditionellen Bedeutungen der gefundenen Symbole und deren Hintergrund in Dokumentform. **Es wird nicht festgestellt, ob eine Schwangerschaft vorliegt** — es wird lediglich mitgeteilt, dass Symbole, die traditionell als Konzeptionstraum angesehen werden, im Traum erschienen sind. Inlandszahlung {priceConceptionDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceConceptionGlobal}.",
        "Inlandszahlungen können über Toss Payments mit Kredit- oder Debitkarten sowie mit einfachen Zahlungsmethoden (Toss Pay, Kakao Pay, Naver Pay, Payco usw.) erfolgen, während Auslandszahlungen über PortOne mit PayPal abgewickelt werden. Der endgültige Betrag entspricht dem Betrag, der auf dem Zahlungsbildschirm angezeigt wird.",
        "**Der Dienst speichert weder die Eingaben der Nutzer noch die erstellten PDF-Dateien.** Nach Genehmigung der Zahlung wird das Dokument sofort erstellt und heruntergeladen, und es bleibt nichts auf dem Server zurück. Daher muss die heruntergeladene Datei vom Nutzer selbst aufbewahrt werden.",
        "Für den Fall, dass der Download unterbrochen wird oder die Datei verloren geht, kann die Datei bis zu **5 Mal** mit derselben Bestellung erneut heruntergeladen werden. Wenn jedoch die Eingaben verloren gehen, nachdem der Bildschirm mit den Ergebnissen verlassen wurde, kann die Datei nicht erneut erstellt werden, daher speichern Sie bitte die Datei sofort nach der Zahlung."
      ],
      "bullets": [
        "**Vor Beginn des Downloads nach der Zahlung** kann jederzeit storniert und eine vollständige Rückerstattung beantragt werden.",
        "**Nach Abschluss des Downloads** ist eine Rücktrittserklärung aufgrund einfacher Meinungsänderung eingeschränkt. Es handelt sich um digitale Inhalte, die sofort bereitgestellt werden und deren Wiederherstellung nicht möglich ist, was den in Artikel 17 Absatz 2 des Gesetzes über den Verbraucherschutz im elektronischen Geschäftsverkehr festgelegten Gründen für die Einschränkung des Rücktritts entspricht.",
        "**Wenn aufgrund eines Systemfehlers das Dokument nicht erstellt wurde, die Datei nicht geöffnet werden kann oder der Zahlungsbetrag von der Bestellung abweicht,** wird dies als Neuausstellung oder vollständige Rückerstattung behandelt.",
        "**Beschwerden über den Inhalt der Ergebnisse** gelten nicht als Rückerstattungsgrund. Die Traumdeutungsergebnisse sind Referenzmaterial aus der Perspektive traditioneller Interpretationen, und deren Natur wird vor der Zahlung erläutert (siehe Abschnitt 1).",
        "Anfragen nach einer Rückerstattung nach der Nutzung aller 5 Neuausstellungen gelten nicht als Rückerstattungsgrund.",
        "**Wenn Minderjährige ohne Zustimmung des gesetzlichen Vertreters eine Zahlung vorgenommen haben,** kann die Zahlung von der betreffenden Person oder dem gesetzlichen Vertreter storniert werden. Bitte informieren Sie uns unter den unten angegebenen Kontaktdaten, um eine Rückerstattung zu erhalten."
      ]
    },
    {
      "heading": "4. Über die Traumdeutungsergebnisse",
      "paragraphs": [
        "Die Regeln zur Suche nach Symbolen folgen einem veröffentlichten Wörterbuch und festgelegten Verfahren, sodass bei Eingabe des gleichen Textes immer die gleichen Symbole erscheinen.",
        "Je kürzer die Eingabe, desto weniger Symbole werden gefunden. Symbole, die nicht im Wörterbuch enthalten sind, können nicht gefunden werden, und in diesem Fall bleibt das Ergebnis leer.",
        "Das Symbolwörterbuch ist eine Zusammenstellung von überlieferten Traumdeutungsdokumenten und mündlichen Überlieferungen, und die Interpretationen können je nach Region und Zeit variieren."
      ]
    },
    {
      "heading": "5. Verantwortung des Nutzers",
      "paragraphs": [
        "Nutzer können die Träume anderer Personen aufschreiben, dürfen jedoch die daraus resultierenden Ergebnisse nicht zum Nachteil anderer verwenden.",
        "Verwenden Sie die Ergebnisse des Dienstes nicht als Grundlage für Entscheidungen, die die Rechte oder Interessen von Personen in Bezug auf Schwangerschaft, Gesundheit, Investitionen, Beschäftigung usw. beeinflussen. Der Dienst wurde nicht für solche Zwecke erstellt."
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
        "Den Dienst zu kopieren oder zu modifizieren, um denselben Dienst anzubieten"
      ]
    },
    {
      "heading": "7. Haftungsausschluss",
      "paragraphs": [
        "Der Dienst bietet lediglich Referenzmaterial an und übernimmt keine Verantwortung für Entscheidungen, die der Nutzer auf Grundlage der Ergebnisse trifft, sowie für die daraus resultierenden Folgen.",
        "Der Dienst haftet nicht für Schäden, die durch unkontrollierbare Gründe wie Naturkatastrophen oder Ausfälle von Infrastrukturprovidern verursacht werden."
      ]
    },
    {
      "heading": "8. Geistige Eigentumsrechte",
      "paragraphs": [
        "Die Rechte an den Bildschirmen, Texten und Implementierungen der Berechnungsregeln des Dienstes liegen beim Betreiber. Nutzer können die Ergebnisse für persönliche Betrachtungszwecke speichern oder teilen."
      ]
    },
    {
      "heading": "9. Änderungen der Bedingungen und anwendbares Recht",
      "paragraphs": [
        "Änderungen der Bedingungen werden zusammen mit dem Datum des Inkrafttretens auf dieser Seite veröffentlicht.",
        "Diese Bedingungen unterliegen dem Recht der Republik Korea, und Streitigkeiten im Zusammenhang mit der Nutzung des Dienstes unterliegen den Verfahren, die in den relevanten Gesetzen festgelegt sind."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d2 = {
  "title": "Rückerstattungs- und Stornierungsrichtlinien",
  "intro": "Dies sind die Kriterien für die Stornierung und Rückerstattung von kostenpflichtigen Produkten. Die Inhalte des Artikels 3 der Allgemeinen Geschäftsbedingungen wurden separat zusammengefasst.",
  "sections": [
    {
      "heading": "1. Art des Produkts",
      "paragraphs": [
        "Die zum Verkauf stehenden Produkte sind **Traumkarte (ein Bild)** und **Konzeptionstraumbericht (PDF)**, und beide sind digitale Inhalte, die sofort nach Genehmigung der Zahlung erstellt und heruntergeladen werden.",
        "**Der Dienst speichert weder den von Ihnen angegebenen Traum noch die erstellte Datei.** Daher müssen die heruntergeladenen Dateien von den Nutzern selbst aufbewahrt werden."
      ]
    },
    {
      "heading": "2. Widerruf",
      "paragraphs": [
        "Es gelten die Kriterien des Gesetzes über den elektronischen Geschäftsverkehr."
      ],
      "bullets": [
        "**Vor Beginn des Downloads** kann jederzeit storniert und eine vollständige Rückerstattung beantragt werden.",
        "**Nach Abschluss des Downloads** ist der Widerruf aufgrund von einfacher Unzufriedenheit eingeschränkt. Es handelt sich um digitale Inhalte, die sofort nach der Zahlung bereitgestellt werden und deren Wiederherstellung nicht möglich ist, was unter die im Artikel 17 Absatz 2 des Gesetzes über den Schutz der Verbraucher im elektronischen Geschäftsverkehr genannten Einschränkungsgründe fällt. Dies wird bereits auf der Zahlungsseite bekannt gegeben und es wird um Zustimmung gebeten."
      ]
    },
    {
      "heading": "3. Fälle für eine vollständige Rückerstattung",
      "paragraphs": [
        "In den folgenden Fällen wird nach Überprüfung der Gründe eine Neuausstellung oder vollständige Rückerstattung vorgenommen."
      ],
      "bullets": [
        "Wenn aufgrund eines Systemfehlers keine Datei erstellt wurde",
        "Wenn die heruntergeladene Datei nicht geöffnet werden kann",
        "Wenn der Zahlungsbetrag von der Bestellung abweicht",
        "**Wenn ein Minderjähriger ohne Zustimmung des gesetzlichen Vertreters eine Zahlung vorgenommen hat** — Der Minderjährige oder der gesetzliche Vertreter kann die Stornierung anfordern."
      ]
    },
    {
      "heading": "4. Fälle, die keinen Rückerstattungsgrund darstellen",
      "paragraphs": [],
      "bullets": [
        "**Unzufriedenheit mit dem Ergebnis.** Die Traumdeutungsergebnisse sind Referenzmaterialien aus der Perspektive traditioneller Interpretationen, und deren Natur wird vor der Zahlung bekannt gegeben. Dies gilt auch für Fälle, in denen im Traum keine vorab vorhandenen Symbole gefunden werden und das Ergebnis daher kurz ausfällt — um keine nicht vorhandene Bedeutung zu erfinden.",
        "Anfragen nach einer Neuausstellung, nachdem alle 5 Neuausstellungen genutzt wurden."
      ]
    },
    {
      "heading": "5. Einreichungsmethode",
      "paragraphs": [
        "Rückerstattungen und Anfragen können über das Kundenservicezentrum ({customerCenter}) oder per E-Mail ({email}) eingereicht werden. Wenn Sie auch die Bestellnummer angeben, kann die Überprüfung schneller erfolgen.",
        "Die Rückerstattung erfolgt über das Zahlungsmittel, das Sie verwendet haben, und je nach den Bedingungen der Kreditkarten- oder Zahlungsanbieter kann es 3 bis 7 Werktage dauern, bis dies reflektiert wird."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d3 = {
  "title": "Preisinformationen",
  "intro": "Hier finden Sie die kostenlosen Angebote und die Preise der kostenpflichtigen Produkte.",
  "sections": [
    {
      "heading": "1. Kostenlos",
      "paragraphs": [
        "**Die Traumdeutung und die Einsicht in die Ergebnisse sind kostenlos.** Eine Registrierung ist nicht erforderlich.",
        "Sie können alle Symbole, die im Traum gefunden wurden, sowie die Bedeutungen dieser Symbole und die Zusammenhänge zwischen ihnen auf dem Bildschirm einsehen. Da Träume täglich auftreten, gibt es keine Einschränkungen bei der Abfrage dieses Dienstes."
      ]
    },
    {
      "heading": "2. Traumkarte (kostenpflichtig)",
      "paragraphs": [
        "Inlandszahlung {priceCardDomestic} (inklusive Mehrwertsteuer) · Auslandszahlung {priceCardGlobal}",
        "Die Ergebnisse auf dem Bildschirm werden in **einem Bild** festgehalten. Es ist in einer Form, die sich gut aufbewahren oder versenden lässt, und es handelt sich **nicht um ein PDF-Dokument.**",
        "Sie können die gleiche Bestellung **bis zu 5 Mal** erneut herunterladen. Bitte speichern Sie die Datei direkt nach der Zahlung, da sie nicht erneut erstellt werden kann, wenn die Eingabewerte verloren gehen."
      ]
    },
    {
      "heading": "3. Konzeptionsbericht PDF (kostenpflichtig)",
      "paragraphs": [
        "Inlandszahlung {priceConceptionDomestic} (inklusive Mehrwertsteuer) · Auslandszahlung {priceConceptionGlobal}",
        "Wenn Symbole, die traditionell als Konzeptionsträume (태몽) angesehen werden, auftreten, werden die Bedeutungen dieser Symbole und der überlieferte Hintergrund in einem 4-seitigen PDF zusammengefasst. **Es wird keine Schwangerschaft oder das Geschlecht des Fötus bestimmt.**",
        "Die Bedingungen für eine Wiederherstellung sind die gleichen wie bei der Traumkarte."
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
        "Im Falle von Preisänderungen werden diese zuerst auf dieser Seite veröffentlicht. Geänderte Preise gelten nicht für bereits abgeschlossene Bestellungen."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d4 = {
  "title": "Datenschutzrichtlinie",
  "intro": "Dreams-Link speichert keine Informationen, die für die Traumdeutung erforderlich sind. Diese Richtlinie beschreibt, was der Dienst erhält, was nicht gespeichert wird und was automatisch aufgezeichnet wird.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Traumgeschichten, die Sie für die Traumdeutung angeben, Ihr Gefühl beim Aufwachen und ob Sie denselben Traum wiederholt haben, werden **nirgendwo gespeichert.** Sie werden nur während der Bearbeitung der Anfrage im Server-Speicher verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch keine separaten Dateien erstellt. Da keine Registrierung erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft.",
        "Die Traumgeschichten sind die privatesten Informationen, die dieser Dienst erhält. Daher gibt es keine Funktion, um frühere Ergebnisse erneut abzurufen (Traumtagebuch) — diese Funktion würde voraussetzen, dass die angegebenen Texte gespeichert werden."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisanzeige enthält die kodierten Eingabewerte. Diese Werte befinden sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards wird der Inhalt hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn Sie den Ergebnislink an eine andere Person senden, kann diese die gleichen Ergebnisse sehen. Da der Link selbst die Eingabewerte enthält, liegt es am Nutzer, ob er ihn teilt."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es werden keine Informationen gesammelt, um die Nutzer zu identifizieren. Es werden jedoch die minimalen Aufzeichnungen, die für den Betrieb des Webdienstes erforderlich sind, automatisch von dem Infrastruktur-Anbieter gespeichert."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeit und Browsertyp",
        "Länderinformationen — wird nur verwendet, um die Anzeigesprache automatisch festzulegen und wird nicht gespeichert"
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu identifizieren oder zu verfolgen. Die angegebenen Traumgeschichten werden nicht an Werbetreibende weitergegeben.",
        "Dieser Dienst zeigt Werbung über Google AdSense an. In diesem Prozess geschehen folgende Dinge."
      ],
      "bullets": [
        "Drittanbieter, einschließlich Google, können Cookies im Browser des Nutzers speichern oder lesen.",
        "Google verwendet Cookies, um Werbung basierend auf den Besuchshistorien dieser und anderer Websites anzuzeigen.",
        "Nutzer können personalisierte Werbung in den Google-Werbeeinstellungen (google.com/settings/ads) deaktivieren. Auch wenn sie deaktiviert wird, werden weiterhin Anzeigen angezeigt, die Relevanz für den Nutzer jedoch verringert.",
        "Personalisierte Werbung von Drittanbietern kann auf aboutads.info/choices auf einmal deaktiviert werden.",
        "Es gibt auch Möglichkeiten, Cookies in den Browsereinstellungen zu blockieren.",
        "Nutzer aus dem Europäischen Wirtschaftsraum, Großbritannien und der Schweiz werden zunächst um Zustimmung zur Verwendung von Werbe-Cookies gebeten."
      ]
    },
    {
      "heading": "5. Informationen, die bei Zahlungen gespeichert werden",
      "paragraphs": [
        "Da derzeit keine kostenpflichtigen Produkte verkauft werden, gibt es auch keine Informationen, die im Zusammenhang mit Zahlungen gespeichert werden.",
        "Wenn der Verkauf beginnt, werden die folgenden Informationen zur Zahlungsabwicklung und zur gesetzlichen Aufbewahrung von Transaktionsaufzeichnungen gespeichert. **Auch dann werden die angegebenen Träume und die erstellten Dateien nicht gespeichert,** und es werden keine Informationen zur Identifizierung des Nutzers wie Name, Kontaktinformationen oder Adresse erfasst."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (unbezahlt, bezahlt, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Anzeigesprache und Zahlungsregion zum Zeitpunkt der Bestellung (inländisch, international)",
        "Aufbewahrungsfrist — Aufzeichnungen über Zahlungen und die Lieferung von Waren werden gemäß Artikel 6 des Gesetzes über den Verbraucherschutz im elektronischen Handel 5 Jahre lang aufbewahrt, während Aufzeichnungen über Beschwerden oder Streitigkeiten der Verbraucher 3 Jahre lang aufbewahrt und dann vernichtet werden."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden.",
        "Zur Betriebsführung wird die Hosting-Infrastruktur von {hostingProvider} genutzt, wobei die oben genannten Zugriffsprotokolle gemäß den Richtlinien des Anbieters verarbeitet werden.",
        "Wenn der Verkauf von kostenpflichtigen Produkten beginnt, werden inländische Zahlungen an Toss Payments und internationale Zahlungen an PortOne (PayPal) delegiert. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden auch dann direkt von diesen Anbietern verarbeitet, und der Dienst erhält diese nicht."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es auch keine Anfragen zur Einsichtnahme, Berichtigung oder Löschung.",
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
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttreten und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die Verarbeitung tatsächlich ändert, z. B. durch die Schaltung von Werbung oder den Beginn des Verkaufs kostenpflichtiger Produkte, werden die Nutzer im Voraus über die Änderungen informiert."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d5 = {
  "title": "Datenschutzrichtlinie",
  "intro": "Dreams-Link speichert keine Informationen, die für die Traumdeutung erforderlich sind. Diese Richtlinie beschreibt, was der Dienst erhält, was nicht gespeichert wird und was automatisch aufgezeichnet wird.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Traumgeschichten, die Sie zur Traumdeutung aufschreiben, Ihr Gefühl beim Aufwachen und ob Sie denselben Traum wiederholt haben, werden **nirgendwo gespeichert.** Sie werden nur im Server-Speicher während der Bearbeitung der Anfrage verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch nicht in separaten Dateien gespeichert. Da keine Registrierung erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft.",
        "Die Traumgeschichten sind die privatesten Informationen, die dieser Dienst erhält. Daher gibt es keine Funktion, um frühere Ergebnisse erneut abzurufen (Traumtagebuch) — diese Funktion würde voraussetzen, dass die aufgeschriebenen Texte aufbewahrt werden."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisanzeige enthält die Eingabewerte in kodierter Form. Diese Werte befinden sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards wird der Inhalt hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn Sie den Ergebnislink an eine andere Person senden, kann diese die gleichen Ergebnisse sehen. Da der Link selbst die Eingabewerte enthält, liegt es am Nutzer, zu entscheiden, ob er ihn teilen möchte."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es werden keine Informationen gesammelt, um die Nutzer zu identifizieren. Es werden jedoch die minimalen Aufzeichnungen, die für den Betrieb des Webdienstes erforderlich sind, automatisch von dem Infrastruktur-Anbieter gespeichert."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeitpunkt, Browsertyp",
        "Länderinformationen — wird nur verwendet, um die Bildschirm Sprache automatisch festzulegen und wird nicht gespeichert"
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu verfolgen.",
        "Aktuell werden in diesem Dienst keine Anzeigen geschaltet. Falls in Zukunft Werbung geschaltet wird, kann der Werbeanbieter (z. B. Google) Cookies zur Schaltung von Anzeigen verwenden. In diesem Fall wird dieser Abschnitt zuerst geändert, um die Änderungen klarzustellen, bevor er in Kraft tritt."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Wenn Sie kostenpflichtige Produkte (Traumkarte, Konzeptionstraumbericht) bezahlen, werden die Bestellinformationen zur Zahlungsabwicklung und zur gesetzlich vorgeschriebenen Aufbewahrung von Transaktionsaufzeichnungen gespeichert.",
        "**Die aufgeschriebenen Träume und die erstellten Dateien werden auch im Falle einer Zahlung nicht gespeichert.** Das Prinzip aus Punkt 1 bleibt unabhängig von der Zahlungsentscheidung bestehen. Die gespeicherten Elemente sind wie folgt, und Informationen zur Identifizierung des Nutzers wie Name, Kontaktinformationen und Adresse sind nicht enthalten."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (unbezahlt, bezahlt, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Bildschirm Sprache und Zahlungsregion zum Zeitpunkt der Bestellung (inländisch, international)",
        "Aufbewahrungsfrist — Aufzeichnungen über Zahlungen und die Lieferung von Waren werden gemäß Artikel 6 des Gesetzes über den Verbraucherschutz im elektronischen Geschäftsverkehr 5 Jahre lang aufbewahrt, Aufzeichnungen über Beschwerden oder Streitigkeiten von Verbrauchern werden 3 Jahre lang aufbewahrt und anschließend vernichtet."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, die zur Identifizierung der Nutzer erforderlich sind, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden. Die Zahlungsabwicklung wird an die folgenden Anbieter ausgelagert.",
        "Für den Betrieb des Dienstes nutzen wir die Hosting-Infrastruktur von {hostingProvider}, und in diesem Prozess werden die Zugriffsprotokolle gemäß den Richtlinien des jeweiligen Anbieters verarbeitet.",
        "Inländische Zahlungen werden von Toss Payments und internationale Zahlungen über PayPal von PortOne verarbeitet. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden direkt von diesen Anbietern verarbeitet, und der Dienst empfängt und speichert diese nicht."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da die aufgeschriebenen Träume nicht gespeichert werden, gibt es keine Stelle, an die Sie die Einsichtnahme, Berichtigung oder Löschung anfordern können. Die verbleibenden Bestellaufzeichnungen nach einer Zahlung müssen gemäß den gesetzlichen Vorgaben für einen bestimmten Zeitraum aufbewahrt werden, und während dieses Zeitraums können sie nicht gelöscht werden; nach Ablauf dieser Frist werden sie vernichtet.",
        "Nutzer können alle Eingabespuren einfach beseitigen, indem sie den Ergebnislink in der Adresszeile des Browsers löschen.",
        "Wenn Sie Fragen zur Nutzung des Dienstes haben, kontaktieren Sie uns bitte unter den unten angegebenen Kontaktdaten."
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
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttretungsdatum und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die Verarbeitung tatsächlich ändert, z. B. durch die Schaltung von Werbung oder den Verkauf kostenpflichtiger Produkte, werden die Nutzer im Voraus über die Änderungen informiert."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d6 = {
  "title": "Nutzungsbedingungen",
  "intro": "Diese Bedingungen regeln die Nutzungsbedingungen des Dreams-Link (im Folgenden \"Dienst\"). Durch die Nutzung des Dienstes stimmen Sie diesen Bedingungen zu.",
  "effectiveLabel": "Datum des Inkrafttretens",
  "sections": [
    {
      "heading": "1. Art des Dienstes",
      "paragraphs": [
        "Der Dienst sucht in den von den Nutzern angegebenen Träumen nach traditionellen Traumdeutungssymbolen und zeigt die überlieferten Bedeutungen dieser Symbole als Referenzmaterial an. Symbole, die nicht im Voraus vorhanden sind, werden als nicht gefunden bezeichnet, und es werden keine nicht existierenden Bedeutungen erfunden.",
        "Die präsentierten Symbole und Erklärungen sind **Referenzmaterial aus der Perspektive traditioneller Interpretationen und stellen keine Vorhersagen über die Zukunft oder medizinische, finanzielle oder rechtliche Beratung dar.** Ein guter Traum garantiert nicht, dass etwas passiert, und ein schlechter Traum bedeutet nicht, dass etwas geplant ist.",
        "**Die Ergebnisse im Zusammenhang mit dem Konzeptionstraum (태몽) bestimmen nicht den Schwangerschaftsstatus oder das Geschlecht des Fötus.** Es wird lediglich mitgeteilt, dass Symbole, die traditionell als Konzeptionsträume betrachtet werden, aufgetreten sind, sowie deren Hintergrund."
      ]
    },
    {
      "heading": "2. Nutzungsgebühren",
      "paragraphs": [
        "Die Abfrage von Traumsymbolen und die Einsichtnahme in die Ergebnisse sind kostenlos und erfordern keine Mitgliedschaft.",
        "Das Erhalten der Ergebnisse als Traumkarte (꿈 카드) (Bild) oder als Empfängnis-Traumbericht (태몽 리포트) (PDF) ist kostenpflichtig. Preise und Bedingungen werden in Abschnitt 3 sowie auf dem Zahlungsbildschirm angezeigt."
      ]
    },
    {
      "heading": "3. Kostenpflichtige Produkte und Rückerstattungen",
      "paragraphs": [
        "Die angebotenen kostenpflichtigen Produkte sind **zwei Arten**. Kostenlose Traumdeutungen können ohne Zahlung genutzt werden, während die beiden unten aufgeführten Produkte in einer Form erstellt werden, die die Ergebnisse bewahrt.",
        "**Traumkarte** — Eine Bilddatei. Sie wird erstellt, um die Symbole und die traditionellen Bedeutungen des Traums, den Sie an diesem Tag hatten, festzuhalten und zu teilen. **Es handelt sich nicht um ein Dokument (PDF).** Inlandszahlung {priceCardDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceCardGlobal}.",
        "**Konzeptionstraumbericht PDF** — 4 Seiten. Er enthält die traditionellen Bedeutungen der aufgetretenen Symbole und deren Hintergrund in Dokumentform. **Es wird keine Schwangerschaft festgestellt** — es wird lediglich mitgeteilt, dass Symbole, die traditionell als Konzeptionsträume betrachtet werden, im Traum erschienen sind. Inlandszahlung {priceConceptionDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceConceptionGlobal}.",
        "Für Inlandszahlungen können Kredit- und Debitkarten sowie einfache Zahlungsmethoden (Toss Payments, KakaoPay, NaverPay, Payco usw.) über Toss Payments genutzt werden, während für Auslandszahlungen PayPal über PortOne verwendet wird. Der endgültige Betrag entspricht dem auf dem Zahlungsbildschirm angezeigten Betrag.",
        "**Der Dienst speichert weder die Eingabewerte des Nutzers noch die erstellte PDF-Datei.** Nach Genehmigung der Zahlung wird das Dokument sofort erstellt und heruntergeladen, ohne dass etwas auf dem Server verbleibt. Daher muss die heruntergeladene Datei vom Nutzer selbst aufbewahrt werden.",
        "Für den Fall, dass der Download unterbrochen wird oder die Datei verloren geht, kann die Datei bis zu **5 Mal** erneut heruntergeladen werden. Allerdings kann die Datei nicht erneut erstellt werden, wenn die Eingabewerte nach dem Ergebnisbildschirm verloren gehen, daher speichern Sie bitte die Datei sofort nach der Zahlung."
      ],
      "bullets": [
        "**Vor Beginn des Downloads nach der Zahlung** kann jederzeit storniert und eine vollständige Rückerstattung erhalten werden.",
        "**Nach Abschluss des Downloads** ist eine Rücktrittserklärung aufgrund einfacher Meinungsänderung eingeschränkt. Es handelt sich um digitale Inhalte, die sofort bereitgestellt werden und deren Wiederherstellung nicht möglich ist, was den in Artikel 17 Absatz 2 des Gesetzes über den Schutz der Verbraucher im elektronischen Geschäftsverkehr festgelegten Gründen für die Einschränkung des Rücktritts entspricht.",
        "**Im Falle eines Systemfehlers, bei dem das Dokument nicht erstellt wurde, die Datei nicht geöffnet werden kann oder der Zahlungsbetrag von der Bestellung abweicht**, wird dies als Neuausstellung oder vollständige Rückerstattung behandelt.",
        "**Beschwerden über den Inhalt der Ergebnisse** gelten nicht als Rückerstattungsgrund. Die Ergebnisse der Traumdeutung sind Referenzmaterial aus der Perspektive traditioneller Interpretationen, und dies wird vor der Zahlung mitgeteilt (siehe Absatz 1 oben).",
        "Eine erneute Anfrage nach der Nutzung aller 5 Neuausstellungen gilt nicht als Rückerstattungsgrund.",
        "**Wenn ein Minderjähriger ohne Zustimmung des gesetzlichen Vertreters eine Zahlung vorgenommen hat**, kann dieser oder der gesetzliche Vertreter die Zahlung stornieren. Bitte informieren Sie uns unter den unten angegebenen Kontaktdaten, damit wir Ihnen eine Rückerstattung gewähren können."
      ]
    },
    {
      "heading": "4. Ergebnisse der Traumdeutung",
      "paragraphs": [
        "Die Regeln zur Symbolsuche folgen einem veröffentlichten Wörterbuch und festgelegten Verfahren, sodass bei identischem Text immer dasselbe Symbol erscheint.",
        "Je kürzer Sie schreiben, desto weniger Symbole werden gefunden. Symbole, die nicht im Wörterbuch enthalten sind, können nicht gefunden werden, und in diesem Fall bleibt das Ergebnis leer.",
        "Das Symbolwörterbuch ist eine Zusammenstellung von überlieferten Traumdeutungs-Literaturen und mündlichen Überlieferungen, wobei die Interpretationen je nach Region und Zeit variieren können."
      ]
    },
    {
      "heading": "5. Verantwortung des Nutzers",
      "paragraphs": [
        "Nutzer können die Träume anderer aufschreiben, jedoch dürfen sie die daraus resultierenden Ergebnisse nicht zum Nachteil anderer verwenden.",
        "Bitte verwenden Sie die Ergebnisse des Dienstes nicht als Grundlage für Entscheidungen, die die Rechte oder Interessen von Personen in Bezug auf Schwangerschaft, Gesundheit, Investitionen, Beschäftigung usw. beeinflussen. Der Dienst wurde nicht für solche Zwecke erstellt."
      ]
    },
    {
      "heading": "6. Verbotene Handlungen",
      "paragraphs": [
        "Die folgenden Handlungen sind nicht erlaubt."
      ],
      "bullets": [
        "Das Senden übermäßiger Anfragen mit automatisierten Werkzeugen, um den Betrieb des Dienstes zu stören",
        "Die Präsentation der Ergebnisse des Dienstes als Tatsachen oder als Ergebnisse von Expertenbewertungen",
        "Die Vervielfältigung oder Bearbeitung des Dienstes, um denselben Dienst anzubieten"
      ]
    },
    {
      "heading": "7. Haftungsausschluss",
      "paragraphs": [
        "Der Dienst bietet lediglich Referenzmaterial und übernimmt keine Verantwortung für die Entscheidungen, die der Nutzer auf Grundlage der Ergebnisse trifft, sowie für die daraus resultierenden Folgen.",
        "Im Falle einer Unterbrechung des Dienstes aufgrund von unkontrollierbaren Gründen wie Naturkatastrophen oder Störungen des Infrastrukturproviders übernehmen wir keine Verantwortung für die daraus resultierenden Schäden."
      ]
    },
    {
      "heading": "8. Geistige Eigentumsrechte",
      "paragraphs": [
        "Die Rechte an den Inhalten, Texten und Implementierungen der Berechnungsregeln des Dienstes liegen beim Betreiber. Die Nutzer dürfen die Ergebnisse für persönliche Genusszwecke speichern oder teilen."
      ]
    },
    {
      "heading": "9. Änderungen der Bedingungen und anwendbares Recht",
      "paragraphs": [
        "Im Falle von Änderungen der Bedingungen werden diese zusammen mit dem Inkrafttretungsdatum auf dieser Seite veröffentlicht.",
        "Diese Bedingungen unterliegen dem Recht der Republik Korea, und Streitigkeiten im Zusammenhang mit der Nutzung des Dienstes werden gemäß den in den einschlägigen Gesetzen festgelegten Verfahren behandelt."
      ]
    }
  ]
};

const d7 = {
  "title": "Datenschutzrichtlinie",
  "intro": "Dreams-Link speichert keine Informationen, die für die Traumdeutung erforderlich sind. Diese Richtlinie beschreibt, was der Dienst erhält, was nicht gespeichert wird und was automatisch aufgezeichnet wird.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Traumgeschichten, die Sie zur Traumdeutung angeben, Ihr Gefühl beim Aufwachen und ob Sie denselben Traum wiederholt haben, werden **nirgendwo gespeichert.** Sie werden nur während der Bearbeitung der Anfrage im Server-Speicher verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch keine separaten Dateien erstellt. Da keine Registrierung erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft.",
        "Die Traumgeschichten sind die privatesten Informationen, die dieser Dienst erhält. Daher gibt es keine Funktion, um frühere Ergebnisse erneut abzurufen (Traumtagebuch) — diese Funktion würde voraussetzen, dass die angegebenen Texte gespeichert werden."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisanzeige enthält kodierte Eingabewerte. Diese Werte befinden sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards werden die Inhalte hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn Sie den Ergebnislink an eine andere Person senden, kann diese die gleichen Ergebnisse sehen. Da der Link selbst die Eingabewerte enthält, liegt es am Nutzer, ob er ihn teilt."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es werden keine Informationen gesammelt, um die Nutzer zu identifizieren. Es bleiben jedoch die minimalen Protokolle, die für den Betrieb des Webdienstes erforderlich sind, automatisch durch den Infrastruktur-Anbieter erhalten."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeit, Browsertyp",
        "Länderinformationen — werden nur verwendet, um die Anzeigesprache automatisch zu bestimmen und werden nicht gespeichert."
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu identifizieren oder zu verfolgen. Die angegebenen Traumgeschichten werden nicht an Werbetreibende weitergegeben.",
        "Dieser Dienst schaltet Werbung über Google AdSense. In diesem Prozess geschehen folgende Dinge."
      ],
      "bullets": [
        "Drittanbieter, einschließlich Google, können Cookies im Browser des Nutzers speichern oder lesen.",
        "Google verwendet Cookies, um Werbung basierend auf den Besuchshistorien dieser und anderer Websites zu schalten.",
        "Nutzer können personalisierte Werbung in den Google-Werbeeinstellungen (google.com/settings/ads) deaktivieren. Auch wenn sie deaktiviert wird, werden weiterhin Anzeigen angezeigt, die Relevanz für den Nutzer jedoch verringert.",
        "Personalisierte Werbung von Drittanbietern kann auf aboutads.info/choices auf einmal deaktiviert werden.",
        "Es gibt auch Möglichkeiten, Cookies in den Browsereinstellungen zu blockieren.",
        "Nutzer aus dem Europäischen Wirtschaftsraum, Großbritannien und der Schweiz werden zunächst um Zustimmung zur Verwendung von Werbe-Cookies gebeten."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Wenn Sie kostenpflichtige Produkte (Traumkarte, Konzeptionstraumbericht) bezahlen, werden Bestellinformationen gespeichert, um die Zahlungsabwicklung und die gesetzlich vorgeschriebene Aufbewahrung von Transaktionsaufzeichnungen zu gewährleisten.",
        "**Die angegebenen Träume und die erstellten Dateien werden auch im Falle einer Zahlung nicht gespeichert.** Das Prinzip aus Punkt 1 bleibt unabhängig von der Zahlungsentscheidung bestehen. Die gespeicherten Elemente sind wie folgt, und Informationen zur Identifizierung des Nutzers wie Name, Kontaktinformationen und Adresse sind nicht enthalten."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (unbezahlt, bezahlt, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Anzeigesprache und Zahlungsregion (inländisch, international) zum Zeitpunkt der Bestellung",
        "Aufbewahrungsfrist — Aufzeichnungen über Zahlungen und die Lieferung von Waren werden gemäß Artikel 6 des Gesetzes über den Verbraucherschutz im elektronischen Handel 5 Jahre lang aufbewahrt, und Aufzeichnungen über Beschwerden oder Streitigkeiten der Verbraucher werden 3 Jahre lang aufbewahrt und danach vernichtet."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, die zur Identifizierung von Nutzern erforderlich sind, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden. Die Zahlungsabwicklung wird an die folgenden Anbieter ausgelagert.",
        "Für den Betrieb des Dienstes wird die Hosting-Infrastruktur von {hostingProvider} genutzt, und in diesem Prozess werden die Zugriffsprotokolle gemäß den Richtlinien des jeweiligen Anbieters verarbeitet.",
        "Inländische Zahlungen werden von Toss Payments und internationale Zahlungen über PayPal von PortOne abgewickelt. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden direkt von diesen Anbietern verarbeitet, und der Dienst empfängt und speichert diese nicht."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da die angegebenen Träume nicht gespeichert werden, gibt es keine Anfragen zur Einsichtnahme, Berichtigung oder Löschung. Die verbleibenden Bestellaufzeichnungen aus Zahlungen müssen gemäß den gesetzlichen Fristen aufbewahrt werden, sodass sie während dieser Zeit nicht gelöscht werden können; nach Ablauf dieser Frist werden sie vernichtet.",
        "Nutzer können alle Eingabespuren einfach beseitigen, indem sie den Ergebnislink in der Adresszeile des Browsers löschen.",
        "Wenn Sie Fragen zur Nutzung des Dienstes haben, teilen Sie uns dies bitte über die unten angegebenen Kontaktdaten mit."
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
        "Wenn diese Richtlinie geändert wird, werden das Datum des Inkrafttretens und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die Verarbeitung tatsächlich ändert, z. B. durch die Schaltung von Werbung oder den Verkauf kostenpflichtiger Produkte, werden die Nutzer im Voraus über die Änderungen informiert."
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
