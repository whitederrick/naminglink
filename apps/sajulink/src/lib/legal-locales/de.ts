import type { LegalLocaleDocuments } from "@/lib/legal-locales/types";

// ko 원본에서 자동 생성된 번역이다(scripts/translate-legal.mjs). 손으로 고쳐도 되지만,
// 다시 생성하면 덮어쓴다 — 문구를 바꿀 일이 있으면 ko를 먼저 고치고 전체를 다시 만들 것.
// 사업자 정보와 가격은 플레이스홀더로 남아 있고 실제 값은 getLegalDocument가 넣는다.

const d0 = {
  "title": "Datenschutzrichtlinie",
  "intro": "InyeonLink speichert keine Informationen, die für die Berechnung der Kompatibilität erforderlich sind. Diese Richtlinie beschreibt, was der Dienst erhält, was nicht gespeichert wird und was automatisch aufgezeichnet wird.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Geburtsdaten, Geburtszeit, Geburtsort, Geschlecht und der Name, die zur Berechnung der Kompatibilität eingegeben werden, werden **nirgendwo gespeichert.** Sie werden nur im Server-Speicher während der Bearbeitung der Anfrage verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch nicht in separaten Dateien gespeichert. Da keine Mitgliedschaft erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft."
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
        "Es werden keine Informationen gesammelt, um den Nutzer zu identifizieren. Es werden jedoch die minimalen Aufzeichnungen, die für den Betrieb des Webdienstes erforderlich sind, automatisch von dem Infrastruktur-Anbieter gespeichert."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeit, Browsertyp",
        "Länderinformationen — werden nur verwendet, um die Bildschirm Sprache automatisch zu bestimmen und nicht gespeichert"
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu verfolgen.",
        "Derzeit werden in diesem Dienst keine Anzeigen geschaltet. Falls in Zukunft Anzeigen geschaltet werden, kann der Werbeanbieter (z. B. Google) Cookies zur Schaltung von Anzeigen verwenden. In diesem Fall wird dieser Abschnitt zuerst geändert, um die Änderungen zu erläutern, bevor er in Kraft tritt."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Derzeit werden keine kostenpflichtigen Produkte verkauft, daher gibt es auch keine Informationen, die im Zusammenhang mit Zahlungen gespeichert werden.",
        "Wenn der Verkauf beginnt, werden die folgenden Informationen zur Zahlungsabwicklung und zur gesetzlichen Aufbewahrung von Transaktionsaufzeichnungen gespeichert. **Auch dann werden die Eingabewerte, die zur Berechnung der Kompatibilität verwendet wurden, und die erstellte PDF nicht gespeichert,** und es werden keine Informationen zur Identifizierung des Nutzers wie Name, Kontaktinformationen oder Adresse erfasst."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (ausstehend, abgeschlossen, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Bildschirm Sprache und Zahlungsregion zum Zeitpunkt der Bestellung (inländisch, international)",
        "Aufbewahrungsfrist — Aufzeichnungen über Zahlungen und die Lieferung von Waren werden gemäß Artikel 6 des Gesetzes über den Schutz der Verbraucher im elektronischen Geschäftsverkehr 5 Jahre lang aufbewahrt, und Aufzeichnungen über Beschwerden oder Streitigkeiten der Verbraucher werden 3 Jahre lang aufbewahrt und anschließend vernichtet."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden.",
        "Für den Betrieb des Dienstes wird die Hosting-Infrastruktur von {hostingProvider} genutzt, und in diesem Prozess werden die Zugriffsprotokolle gemäß den Richtlinien des jeweiligen Unternehmens verarbeitet.",
        "Wenn der Verkauf von kostenpflichtigen Produkten beginnt, wird die inländische Zahlung an Toss Payments und die internationale Zahlung an PortOne (PayPal) delegiert. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden auch dann direkt von diesen Unternehmen verarbeitet, und der Dienst erhält diese nicht."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es keine Daten, die eingesehen, korrigiert oder gelöscht werden können.",
        "Nutzer können alle Eingabespuren einfach beseitigen, indem sie den Ergebnislink in der Adresszeile des Browsers löschen.",
        "Wenn es Fragen zur Nutzung des Dienstes gibt, wenden Sie sich bitte über die untenstehenden Kontaktdaten an uns."
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
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttretungsdatum und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die tatsächlichen Verarbeitungsinhalte ändern, z. B. durch die Schaltung von Werbung oder den Beginn des Verkaufs kostenpflichtiger Produkte, wird die Änderung zuerst bekannt gegeben."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d1 = {
  "title": "Nutzungsbedingungen",
  "intro": "Diese Bedingungen regeln die Nutzungsbedingungen des InyeonLink-Dienstes (im Folgenden „Dienst“). Durch die Nutzung des Dienstes stimmen Sie diesen Bedingungen zu.",
  "sections": [
    {
      "heading": "1. Art des Dienstes",
      "paragraphs": [
        "Der Dienst zeigt auf der Grundlage des eingegebenen Geburtsdatums die Beziehung zwischen traditioneller Saju (사주) und dem koreanischen Tierkreis (띠) als Referenzmaterial für die Beziehung zweier Personen an.",
        "Die angegebene Übereinstimmungsrate und die Erläuterungen sind **Referenzmaterial aus der Perspektive der traditionellen Interpretation und stellen keine wissenschaftlichen Vorhersagen oder Feststellungen über die Beziehung dar.** Ein niedriger Punktestand bedeutet nicht, dass die Beziehung schlecht ist, und ein hoher Punktestand garantiert nicht die Beziehung."
      ]
    },
    {
      "heading": "2. Nutzungsgebühren",
      "paragraphs": [
        "Derzeit wird der Dienst kostenlos angeboten und eine Mitgliedschaft ist nicht erforderlich.",
        "Wenn der Verkauf kostenpflichtiger Produkte (zwei Arten von Berichten im PDF-Format) beginnt, gelten die Bedingungen in Abschnitt 3. Vor Beginn des Verkaufs werden diese Bedingungen erneut bekannt gegeben."
      ]
    },
    {
      "heading": "3. Kostenpflichtige Produkte und Rückerstattung",
      "paragraphs": [
        "Die kostenpflichtigen Produkte, die verkauft werden, sind **zwei Arten von Berichten im PDF-Format**. Beide erstellen ein Dokument aus den Ergebnissen auf dem Bildschirm und enthalten zusätzliche Informationen, die nicht auf dem Bildschirm angezeigt werden.",
        "**Kompatibilitätsbericht PDF** — 7 Seiten. Enthält die Richtung, in der die beiden Energien fließen, eine Tabelle mit einer detaillierteren Betrachtung der jeweiligen Saju, den Punkt, an dem die vier Säulen zusammentreffen, und die Berechnungsgrundlagen. Inlandszahlung {priceDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceGlobal}.",
        "**Bericht über die Verbindungen PDF** — 4 Seiten. Enthält eine vollständige Rangliste der zehn Himmelsstämme und der zwölf Tiere, die nicht auf dem Bildschirm angezeigt werden. Inlandszahlung {priceAffinityDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceAffinityGlobal}.",
        "Inlandszahlungen können über Toss Payments mit Kredit- oder Debitkarten sowie über einfache Zahlungsmethoden (Toss Pay, Kakao Pay, Naver Pay, Payco usw.) erfolgen, während Auslandszahlungen über PayPal über PortOne abgewickelt werden. Der endgültige Betrag entspricht dem auf dem Zahlungsbildschirm angezeigten Betrag.",
        "**Der Dienst speichert weder die Eingabewerte der Nutzer noch die erstellten PDF-Dateien.** Nach Genehmigung der Zahlung wird das Dokument sofort erstellt und heruntergeladen, ohne dass etwas auf dem Server verbleibt. Daher müssen die heruntergeladenen Dateien von den Nutzern selbst aufbewahrt werden.",
        "Für den Fall, dass der Download unterbrochen wird oder die Datei verloren geht, kann die Datei bis zu **5 Mal** mit derselben Bestellung erneut heruntergeladen werden. Wenn jedoch die Eingabewerte verloren gehen, nachdem der Bildschirm verlassen wurde, kann die Datei nicht erneut erstellt werden, daher speichern Sie bitte die Datei sofort nach der Zahlung."
      ],
      "bullets": [
        "**Vor Beginn des Downloads nach der Zahlung** kann jederzeit storniert und eine vollständige Rückerstattung beantragt werden.",
        "**Nach Abschluss des Downloads** ist eine Rücktrittserklärung aufgrund von einfacher Meinungsänderung eingeschränkt. Es handelt sich um digitale Inhalte, die sofort bereitgestellt werden und deren Wiederherstellung nicht möglich ist, was unter die in Artikel 17 Absatz 2 des Gesetzes über den Verbraucherschutz im elektronischen Geschäftsverkehr festgelegten Gründe für die Einschränkung des Rücktritts fällt.",
        "**Wenn aufgrund eines Systemfehlers das Dokument nicht erstellt wurde, die Datei nicht geöffnet werden kann oder der Zahlungsbetrag von der Bestellung abweicht,** wird dies als Neuausstellung oder vollständige Rückerstattung behandelt.",
        "**Beschwerden über den Inhalt der Ergebnisse** gelten nicht als Rückerstattungsgrund. Die Ergebnisse der Kompatibilität sind Referenzmaterial aus der Perspektive der traditionellen Interpretation, und dies wird vor der Zahlung mitgeteilt (siehe Abschnitt 1).",
        "Anfragen nach einer Rückerstattung nach der Nutzung aller 5 Neuausstellungen gelten nicht als Rückerstattungsgrund.",
        "**Wenn Minderjährige ohne Zustimmung des gesetzlichen Vertreters eine Zahlung vorgenommen haben,** kann die Zahlung von der betroffenen Person oder dem gesetzlichen Vertreter storniert werden. Bitte informieren Sie uns über die unten angegebenen Kontaktdaten, um eine Rückerstattung zu erhalten."
      ]
    },
    {
      "heading": "4. Über die Berechnungsergebnisse",
      "paragraphs": [
        "Alle Punkte werden gemäß den veröffentlichten Regeln berechnet, sodass bei Eingabe derselben Werte immer dasselbe Ergebnis erzielt wird.",
        "Wenn die Geburtszeit nicht eingegeben wird, erfolgt die Berechnung ohne die Zeit-Säule (時柱), was zu unterschiedlichen Ergebnissen führen kann. Je genauer der Geburtsort ausgewählt wird, desto genauer wird die Berechnung der Zeit-Säule.",
        "Die Berechnung des Manse-Rangsystems verwendet eine veröffentlichte Berechnungsbibliothek, und je nach Behandlung von Solar- und Zeitberechnungen können die Ergebnisse von anderen Manse-Rangsystemen abweichen."
      ]
    },
    {
      "heading": "5. Verantwortung des Nutzers",
      "paragraphs": [
        "Nutzer können die Geburtsdaten anderer Personen eingeben, dürfen jedoch die daraus resultierenden Ergebnisse nicht zum Nachteil anderer verwenden.",
        "Verwenden Sie die Ergebnisse des Dienstes nicht als Grundlage für Entscheidungen, die die Rechte anderer in Bezug auf Heirats-, Scheidungs-, Einstellungs- oder Handelsentscheidungen beeinflussen. Der Dienst wurde nicht für solche Zwecke erstellt."
      ]
    },
    {
      "heading": "6. Verbotene Handlungen",
      "paragraphs": [
        "Die folgenden Handlungen sind nicht erlaubt."
      ],
      "bullets": [
        "Das Senden übermäßiger Anfragen mit automatisierten Werkzeugen, um den Betrieb des Dienstes zu stören.",
        "Die Ergebnisse des Dienstes als Tatsachen oder als Ergebnisse von Expertenbewertungen darzustellen.",
        "Den Dienst zu kopieren oder zu modifizieren, um denselben Dienst anzubieten."
      ]
    },
    {
      "heading": "7. Haftungsausschluss",
      "paragraphs": [
        "Der Dienst bietet lediglich Referenzmaterial an und übernimmt keine Verantwortung für die Entscheidungen und deren Ergebnisse, die der Nutzer auf Grundlage der Ergebnisse trifft.",
        "Im Falle von unvorhersehbaren Ereignissen, Ausfällen von Infrastruktur-Anbietern oder anderen unkontrollierbaren Gründen, die zu einer Unterbrechung des Dienstes führen, wird keine Haftung für daraus resultierende Schäden übernommen."
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
        "Änderungen der Bedingungen werden zusammen mit dem Inkrafttretungsdatum auf dieser Seite veröffentlicht.",
        "Diese Bedingungen unterliegen dem Recht der Republik Korea, und Streitigkeiten im Zusammenhang mit der Nutzung des Dienstes unterliegen den in den relevanten Gesetzen festgelegten Verfahren."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d2 = {
  "title": "Rückerstattungs- und Stornierungsrichtlinie",
  "intro": "Dies sind die Stornierungs- und Rückerstattungsrichtlinien für den **Kompatibilitätsbericht PDF**. Die Inhalte aus Abschnitt 3 der Allgemeinen Geschäftsbedingungen wurden hier zusammengefasst.",
  "sections": [
    {
      "heading": "1. Art des Produkts",
      "paragraphs": [
        "Das verkaufte Produkt ist ein **Kompatibilitätsbericht PDF** und handelt sich um digitale Inhalte, die sofort nach Genehmigung der Zahlung erstellt und heruntergeladen werden.",
        "**Der Dienst speichert weder die Eingabewerte des Nutzers noch die erstellte PDF-Datei.** Daher muss die heruntergeladene Datei vom Nutzer selbst aufbewahrt werden."
      ]
    },
    {
      "heading": "2. Widerruf",
      "paragraphs": [
        "Es gelten die Vorgaben des Gesetzes über den elektronischen Geschäftsverkehr."
      ],
      "bullets": [
        "**Vor Beginn des Downloads** kann jederzeit storniert und eine vollständige Rückerstattung beantragt werden.",
        "**Nach Abschluss des Downloads** ist ein Widerruf aufgrund einfacher Meinungsänderung eingeschränkt. Es handelt sich um digitale Inhalte, die sofort nach der Zahlung bereitgestellt werden und deren Wiederherstellung nicht möglich ist, was den in Artikel 17 Absatz 2 des Gesetzes über den Schutz der Verbraucher im elektronischen Geschäftsverkehr festgelegten Einschränkungsgründen entspricht. Dies wird bereits auf der Zahlungsseite mitgeteilt und die Zustimmung wird eingeholt."
      ]
    },
    {
      "heading": "3. Fälle für eine vollständige Rückerstattung",
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
        "**Unzufriedenheit mit dem Ergebnis.** Die Ergebnisse der Kompatibilität sind Referenzmaterialien aus der traditionellen Interpretationsperspektive, und deren Natur wird vor der Zahlung mitgeteilt.",
        "Anfragen nach einer Neuausstellung, nachdem alle 5 Neuausstellungen genutzt wurden."
      ]
    },
    {
      "heading": "5. Einreichungsmethode",
      "paragraphs": [
        "Rückerstattungen und Anfragen sind über das Kundenservicezentrum ({customerCenter}) oder per E-Mail ({email}) einzureichen. Wenn Sie auch die Bestellnummer angeben, kann die Überprüfung schneller erfolgen.",
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
        "**Die Berechnung der Kompatibilität und die Abfrage der Ergebnisse sind kostenlos.** Eine Registrierung ist nicht erforderlich.",
        "Sie können die Übereinstimmungsrate, die Punktzahlen für die einzelnen Kategorien, die Geburtsdaten der beiden Personen sowie die Elemente der Beziehung auf dem Bildschirm einsehen."
      ]
    },
    {
      "heading": "2. Kompatibilitätsbericht PDF (kostenpflichtig)",
      "paragraphs": [
        "Inlandszahlung {priceDomestic} (inklusive Mehrwertsteuer) · Auslandszahlung {priceGlobal}",
        "Die Ergebnisse auf dem Bildschirm werden in einem 7-seitigen PDF-Dokument zusammengefasst. Es enthält Informationen über die Richtung, in die die Energien fließen, eine detaillierte Tabelle der jeweiligen Geburtsdaten, den Ort, an dem die vier Säulen zusammentreffen, sowie Berechnungsgrundlagen, die nicht auf dem Bildschirm angezeigt werden.",
        "Mit derselben Bestellung können Sie **bis zu 5 Mal** erneut herunterladen. Bitte speichern Sie die Datei sofort nach der Zahlung, da die Eingabewerte verloren gehen, wenn Sie den Bildschirm verlassen."
      ]
    },
    {
      "heading": "3. Bericht über die Verbindungen PDF (kostenpflichtig)",
      "paragraphs": [
        "Inlandszahlung {priceAffinityDomestic} (inklusive Mehrwertsteuer) · Auslandszahlung {priceAffinityGlobal}",
        "Die Ergebnisse auf dem Bildschirm werden in einem 4-seitigen PDF-Dokument zusammengefasst. Der Bildschirm zeigt nur die am besten passenden Verbindungen an, aber das PDF enthält eine vollständige Rangliste der zehn Himmelsstämme und der zwölf Tierkreiszeichen.",
        "Die Bedingungen für die Wiedervergabe sind die gleichen wie beim Kompatibilitätsbericht."
      ]
    },
    {
      "heading": "4. Zahlungsmethoden",
      "paragraphs": [
        "**Inland** — Sie können Kredit- und Debitkarten sowie einfache Zahlungsmethoden (Toss Payments, KakaoPay, NaverPay, Payco usw.) über Toss Payments nutzen.",
        "**Ausland** — Sie können über PortOne mit PayPal bezahlen.",
        "Der endgültige Zahlungsbetrag entspricht dem Betrag, der auf dem Zahlungsbildschirm angezeigt wird."
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
  "intro": "InyeonLink speichert keine Informationen, die für die Berechnung der Kompatibilität erforderlich sind. Diese Richtlinie beschreibt, welche Informationen erfasst, welche nicht gespeichert werden und welche automatisch protokolliert werden.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Geburtsdaten, Geburtszeit, Geburtsort, Geschlecht und der Name, die zur Berechnung der Kompatibilität eingegeben werden, werden **nirgendwo gespeichert.** Sie werden nur im Server-Speicher während der Bearbeitung der Anfrage verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch nicht in separaten Dateien gespeichert. Da keine Registrierung erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisanzeige enthält die Eingabewerte in kodierter Form. Diese Werte befinden sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards werden die Inhalte hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn der Ergebnislink an eine andere Person gesendet wird, kann diese ebenfalls dasselbe Ergebnis sehen. Da der Link selbst die Eingabewerte enthält, liegt es im Ermessen des Nutzers, ob er ihn teilt."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es werden keine Informationen gesammelt, um den Nutzer zu identifizieren. Es werden jedoch die minimalen Protokolle, die für den Betrieb des Webdienstes erforderlich sind, automatisch vom Infrastruktur-Anbieter gespeichert."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeit, Browsertyp",
        "Länderinformationen — werden nur verwendet, um die Anzeigesprache automatisch festzulegen und nicht gespeichert"
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu identifizieren oder zu verfolgen. Die Informationen, die zur Berechnung der Kompatibilität eingegeben werden, werden nicht an Werbetreibende weitergegeben.",
        "Dieser Dienst schaltet Werbung über Google AdSense. In diesem Prozess geschehen folgende Dinge."
      ],
      "bullets": [
        "Drittanbieter, einschließlich Google, können Cookies im Browser des Nutzers speichern oder lesen.",
        "Google verwendet Cookies, um Werbung basierend auf den Besuchshistorien dieser und anderer Websites zu schalten.",
        "Nutzer können personalisierte Werbung in den Google-Werbeeinstellungen (google.com/settings/ads) deaktivieren. Auch wenn sie deaktiviert wird, werden weiterhin Anzeigen angezeigt, die jedoch weniger relevant für den Nutzer sind.",
        "Personalisierte Werbung von Drittanbietern kann auf aboutads.info/choices einmalig deaktiviert werden.",
        "Es gibt auch Möglichkeiten, Cookies in den Browsereinstellungen zu blockieren.",
        "Nutzer aus dem Europäischen Wirtschaftsraum, dem Vereinigten Königreich und der Schweiz werden zunächst um Zustimmung zur Verwendung von Werbe-Cookies gebeten."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Derzeit werden keine kostenpflichtigen Produkte verkauft, daher gibt es auch keine Informationen, die im Zusammenhang mit Zahlungen gespeichert werden.",
        "Wenn der Verkauf beginnt, werden die folgenden Informationen zur Zahlungsabwicklung und zur gesetzlichen Aufbewahrung von Transaktionsaufzeichnungen gespeichert. **Auch dann werden die zur Berechnung der Kompatibilität eingegebenen Werte und die erstellte PDF nicht gespeichert,** und es werden keine identifizierenden Informationen wie Name, Kontaktinformationen oder Adresse erfasst."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (offen, bezahlt, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Anzeigesprache und Zahlungsregion (inländisch, international) zum Zeitpunkt der Bestellung",
        "Aufbewahrungsfrist — Gemäß Artikel 6 des Gesetzes über den Schutz der Verbraucher im elektronischen Geschäftsverkehr werden Aufzeichnungen über Zahlungen und die Lieferung von Waren 5 Jahre lang aufbewahrt, und Aufzeichnungen über Beschwerden oder Streitigkeiten der Verbraucher werden 3 Jahre lang aufbewahrt und anschließend vernichtet."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden.",
        "Für den Betrieb des Dienstes wird die Hosting-Infrastruktur von {hostingProvider} genutzt, und in diesem Prozess werden die Zugriffsprotokolle gemäß den Richtlinien des jeweiligen Unternehmens verarbeitet.",
        "Wenn der Verkauf von kostenpflichtigen Produkten beginnt, wird die inländische Zahlung an Toss Payments und die internationale Zahlung an PortOne (PayPal) delegiert. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden auch dann direkt von diesen Unternehmen verarbeitet, und der Dienst erhält diese nicht."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, gibt es auch keine Anfragen zur Einsichtnahme, Berichtigung oder Löschung.",
        "Nutzer können alle Eingabespuren einfach beseitigen, indem sie den Ergebnislink in der Adresszeile des Browsers löschen.",
        "Bei Fragen zur Nutzung des Dienstes wenden Sie sich bitte an die unten angegebenen Kontaktdaten."
      ]
    },
    {
      "heading": "8. Kinder und personenbezogene Daten",
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
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttretungsdatum und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die Verarbeitung tatsächlich ändert, z. B. durch die Schaltung von Werbung oder den Beginn des Verkaufs kostenpflichtiger Produkte, wird die Änderung im Voraus mitgeteilt."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d5 = {
  "title": "Datenschutzrichtlinie",
  "intro": "InyeonLink speichert keine Informationen, die für die Berechnung der Kompatibilität erforderlich sind. Diese Richtlinie beschreibt, was der Dienst erhält, was nicht gespeichert wird und was automatisch aufgezeichnet wird.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Geburtsdaten, Geburtszeit, Geburtsort, Geschlecht und der Name, die für die Berechnung der Kompatibilität eingegeben werden, werden **nirgendwo gespeichert.** Sie werden nur im Server-Speicher während der Bearbeitung der Anfrage verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch nicht in separaten Dateien gespeichert. Da keine Registrierung erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisanzeige enthält die Eingabewerte in kodierter Form. Diese Werte befinden sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards werden die Inhalte hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn der Ergebnislink an eine andere Person gesendet wird, kann diese die gleichen Ergebnisse sehen. Da der Link selbst die Eingabewerte enthält, liegt es im Ermessen des Nutzers, ob er ihn teilt."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es werden keine Informationen gesammelt, um den Nutzer zu identifizieren. Es werden jedoch die minimalen Aufzeichnungen, die für den Betrieb des Webdienstes erforderlich sind, automatisch von dem Infrastruktur-Anbieter hinterlassen."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeit, Browsertyp",
        "Länderinformationen — werden nur verwendet, um die Bildschirm-Sprache automatisch festzulegen und werden nicht gespeichert"
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu verfolgen.",
        "Derzeit werden in diesem Dienst keine Anzeigen geschaltet. Falls in Zukunft Anzeigen geschaltet werden, kann der Werbeanbieter (z. B. Google) Cookies zur Schaltung von Anzeigen verwenden. In diesem Fall wird dieser Abschnitt zuerst geändert, um die Änderungen zu erläutern, bevor er in Kraft tritt."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Wenn Sie ein kostenpflichtiges Produkt (Kompatibilitätsbericht PDF) bezahlen, werden die Bestellinformationen zur Zahlungsabwicklung und zur gesetzlich vorgeschriebenen Aufbewahrung von Transaktionsaufzeichnungen gespeichert.",
        "**Die Werte, die für die Kompatibilitätsberechnung eingegeben wurden, sowie das erstellte PDF werden auch im Falle einer Zahlung nicht gespeichert.** Das Prinzip aus Punkt 1 bleibt unabhängig von der Zahlungsentscheidung bestehen. Die gespeicherten Elemente sind wie folgt, und Informationen zur Identifizierung des Nutzers wie Name, Kontaktinformationen und Adresse sind nicht enthalten."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (unbezahlt, bezahlt, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Bildschirm-Sprache und Zahlungsregion zum Zeitpunkt der Bestellung (inländisch, international)",
        "Aufbewahrungsfrist — Aufzeichnungen über Zahlungen und die Lieferung von Waren werden gemäß Artikel 6 des Gesetzes über den Schutz der Verbraucher im elektronischen Handel 5 Jahre lang aufbewahrt, Aufzeichnungen über Beschwerden oder Streitigkeiten der Verbraucher werden 3 Jahre lang aufbewahrt und danach vernichtet."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, die den Nutzer identifizieren, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden. Die Zahlungsabwicklung wird an die folgenden Anbieter ausgelagert.",
        "Für den Betrieb des Dienstes wird die Hosting-Infrastruktur von {hostingProvider} genutzt, und in diesem Prozess werden die Zugriffsprotokolle gemäß den Richtlinien des Anbieters verarbeitet.",
        "Inländische Zahlungen werden von Toss Payments verarbeitet, während internationale Zahlungen über PayPal von PortOne abgewickelt werden. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden direkt von diesen Anbietern verarbeitet, und der Dienst erhält diese Informationen weder noch speichert er sie."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da die Eingabewerte für die Kompatibilitätsberechnung nicht gespeichert werden, gibt es keine Zielpersonen für Anfragen zur Einsichtnahme, Berichtigung oder Löschung. Die verbleibenden Bestellaufzeichnungen nach einer Zahlung müssen gemäß den gesetzlichen Vorgaben für einen bestimmten Zeitraum aufbewahrt werden, sodass sie während dieses Zeitraums nicht gelöscht werden können; nach Ablauf dieser Frist werden sie vernichtet.",
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
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttreten und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die Verarbeitung tatsächlich ändert, z. B. durch die Schaltung von Werbung oder den Verkauf kostenpflichtiger Produkte, werden die Nutzer zuerst über die Änderungen informiert."
      ]
    }
  ],
  "effectiveLabel": "Inkrafttretungsdatum"
};

const d6 = {
  "title": "Nutzungsbedingungen",
  "intro": "Diese Bedingungen regeln die Nutzungsbedingungen von InyeonLink (im Folgenden \"Dienst\"). Durch die Nutzung des Dienstes stimmen Sie diesen Bedingungen zu.",
  "effectiveLabel": "Inkrafttretungsdatum",
  "sections": [
    {
      "heading": "1. Art der Dienstleistung",
      "paragraphs": [
        "Der Dienst basiert auf dem eingegebenen Geburtsdatum und zeigt die Beziehungsgesetze der traditionellen Saju (사주) und des Zwölf-Jahres-Zyklus (띠) als Referenzmaterial für die Beziehung zwischen zwei Personen an.",
        "Die angegebene Übereinstimmungsrate und die Erläuterungen sind **Referenzmaterial aus der traditionellen Interpretationsperspektive und stellen keine wissenschaftlichen Vorhersagen oder Feststellungen über die Beziehung dar.** Ein niedriger Punktestand bedeutet nicht, dass die Beziehung schlecht ist, und ein hoher Punktestand garantiert nicht die Beziehung."
      ]
    },
    {
      "heading": "2. Nutzungsgebühren",
      "paragraphs": [
        "Die Berechnung der Kompatibilität und die Abfrage der Ergebnisse sind kostenlos und erfordern keine Mitgliedschaft.",
        "Der Erhalt der Ergebnisse als PDF-Bericht (궁합 리포트 PDF) ist kostenpflichtig. Preise und Bedingungen werden in Abschnitt 3 sowie auf der Zahlungsseite angezeigt."
      ]
    },
    {
      "heading": "3. Bezahlte Produkte und Rückerstattungen",
      "paragraphs": [
        "Die angebotenen kostenpflichtigen Produkte sind **zwei Arten von Berichten im PDF-Format**. Beide erstellen ein Dokument aus den Ergebnissen auf dem Bildschirm und enthalten zusätzliche Informationen, die nicht auf dem Bildschirm angezeigt werden.",
        "**Saju-Kompatibilitätsbericht PDF** — 7 Seiten. Enthält die Richtung, in der die beiden Energien fließen, eine detaillierte Tabelle der jeweiligen Saju (사주), den Punkt, an dem die vier Säulen zusammentreffen, sowie die Berechnungsgrundlagen. Inlandszahlung {priceDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceGlobal}.",
        "**Bericht über die Verbindungen (인연의 결 리포트) PDF** — 4 Seiten. Enthält eine vollständige Rangliste der zehn Himmelsstämme und der zwölf Tierkreiszeichen, die nicht auf dem Bildschirm angezeigt werden. Inlandszahlung {priceAffinityDomestic} (inklusive Mehrwertsteuer), Auslandszahlung {priceAffinityGlobal}.",
        "Inlandszahlungen können über Toss Payments mit Kredit- oder Debitkarten sowie mit einfachen Zahlungsmethoden (Toss Pay, Kakao Pay, Naver Pay, Payco usw.) erfolgen, während Auslandszahlungen über PayPal über PortOne abgewickelt werden. Der endgültige Betrag entspricht dem auf dem Zahlungsbildschirm angezeigten Betrag.",
        "**Der Dienst speichert weder die Eingabewerte der Nutzer noch die erstellten PDF-Dateien.** Nach Genehmigung der Zahlung wird das Dokument sofort erstellt und heruntergeladen, ohne dass etwas auf dem Server verbleibt. Daher muss die heruntergeladene Datei vom Nutzer selbst aufbewahrt werden.",
        "Für den Fall, dass der Download unterbrochen wird oder die Datei verloren geht, kann die Datei bis zu **5 Mal** erneut heruntergeladen werden. Wenn jedoch die Eingabewerte verloren gehen, nachdem der Bildschirm verlassen wurde, kann die Datei nicht erneut erstellt werden, daher speichern Sie bitte die Datei sofort nach der Zahlung."
      ],
      "bullets": [
        "**Vor Beginn des Downloads nach der Zahlung können Sie jederzeit stornieren und eine vollständige Rückerstattung erhalten.**",
        "**Nach Abschluss des Downloads sind Rücktritte aufgrund einfacher Meinungsänderungen eingeschränkt.** Es handelt sich um digitale Inhalte, die sofort bereitgestellt werden und deren Wiederherstellung nicht möglich ist, was unter die in Artikel 17 Absatz 2 des Gesetzes über den Schutz der Verbraucher im elektronischen Geschäftsverkehr fallenden Gründe für die Einschränkung des Rücktritts fällt.",
        "**Wenn aufgrund eines Systemfehlers das Dokument nicht erstellt wurde, die Datei nicht geöffnet werden kann oder der Zahlungsbetrag von der Bestellung abweicht,** wird dies als Neuausstellung oder vollständige Rückerstattung behandelt.",
        "**Beschwerden über den Inhalt der Ergebnisse** stellen keinen Grund für eine Rückerstattung dar. Die Ergebnisse der Kompatibilität sind Referenzmaterialien aus der Perspektive traditioneller Interpretationen, und dies wird vor der Zahlung mitgeteilt (siehe Absatz 1).",
        "Anfragen zur Rückerstattung nach der Nutzung aller 5 Neuausstellungen stellen keinen Grund für eine Rückerstattung dar.",
        "**Wenn ein Minderjähriger ohne Zustimmung des gesetzlichen Vertreters eine Zahlung vorgenommen hat,** kann dieser oder der gesetzliche Vertreter die Zahlung stornieren. Bitte informieren Sie uns über die unten angegebenen Kontaktdaten, damit wir die Rückerstattung vornehmen können."
      ]
    },
    {
      "heading": "4. Berechnungsergebnisse",
      "paragraphs": [
        "Alle Punkte werden gemäß den veröffentlichten Regeln berechnet, sodass bei Eingabe desselben Wertes immer dasselbe Ergebnis erzielt wird.",
        "Wenn die Geburtszeit nicht eingegeben wird, erfolgt die Berechnung ohne Berücksichtigung des Zeitpfeilers (時柱), was zu unterschiedlichen Ergebnissen führen kann. Je genauer der Geburtsort ausgewählt wird, desto präziser wird die Berechnung des Zeitpfeilers.",
        "Die Berechnung des Lebenskalenders erfolgt unter Verwendung einer öffentlichen Berechnungsbibliothek, und je nach Handhabung der solaren und zeitlichen Zonen können die Ergebnisse von anderen Lebenskalendern abweichen."
      ]
    },
    {
      "heading": "5. Verantwortung des Nutzers",
      "paragraphs": [
        "Nutzer können das Geburtsdatum anderer Personen eingeben, jedoch dürfen die daraus resultierenden Ergebnisse nicht zum Nachteil anderer verwendet werden.",
        "Bitte verwenden Sie die Ergebnisse des Dienstes nicht als Grundlage für Entscheidungen, die die Rechte anderer in Bezug auf Heirats-, Scheidungs-, Einstellungs- oder Handelsfragen beeinflussen. Der Dienst wurde nicht für solche Zwecke erstellt."
      ]
    },
    {
      "heading": "6. Verbotene Handlungen",
      "paragraphs": [
        "Die folgenden Handlungen sind nicht erlaubt."
      ],
      "bullets": [
        "Das Senden übermäßiger Anfragen mit automatisierten Werkzeugen, um den Betrieb des Dienstes zu stören",
        "Die Ergebnisse des Dienstes als Tatsachen oder als Ergebnisse von Expertenbewertungen darzustellen",
        "Die Dienstleistung zu kopieren oder zu modifizieren, um denselben Dienst anzubieten"
      ]
    },
    {
      "heading": "7. Haftungsausschluss",
      "paragraphs": [
        "Der Dienst bietet lediglich Referenzmaterial und übernimmt keine Verantwortung für Entscheidungen, die der Nutzer auf Grundlage der Ergebnisse trifft, sowie für die daraus resultierenden Konsequenzen.",
        "Im Falle einer Unterbrechung des Dienstes aufgrund von unkontrollierbaren Gründen wie Naturkatastrophen oder Störungen des Infrastrukturproviders übernehmen wir keine Verantwortung für die daraus resultierenden Schäden."
      ]
    },
    {
      "heading": "8. Geistige Eigentumsrechte",
      "paragraphs": [
        "Die Rechte an den Inhalten, der Darstellung, den Formulierungen und der Implementierung der Berechnungsregeln des Dienstes liegen beim Betreiber. Die Nutzer dürfen die Ergebnisse für persönliche Betrachtungszwecke speichern oder teilen."
      ]
    },
    {
      "heading": "9. Änderungen der Bedingungen und anwendbares Recht",
      "paragraphs": [
        "Im Falle von Änderungen der Bedingungen werden diese zusammen mit dem Inkrafttretungsdatum auf dieser Seite veröffentlicht.",
        "Diese Bedingungen unterliegen dem Recht der Republik Korea, und Streitigkeiten im Zusammenhang mit der Nutzung des Dienstes erfolgen gemäß den in den einschlägigen Gesetzen festgelegten Verfahren."
      ]
    }
  ]
};

const d7 = {
  "title": "Datenschutzrichtlinie",
  "intro": "InyeonLink speichert keine Informationen, die zur Berechnung der Kompatibilität erforderlich sind. Diese Richtlinie beschreibt, was der Dienst erhält, was nicht gespeichert wird und was automatisch aufgezeichnet wird.",
  "sections": [
    {
      "heading": "1. Nicht gespeicherte Informationen",
      "paragraphs": [
        "Die Geburtsdaten, Geburtszeit, Geburtsort, Geschlecht und der Name, die zur Berechnung der Kompatibilität eingegeben werden, werden **nirgendwo gespeichert.** Sie werden nur im Server-Speicher während der Bearbeitung der Anfrage verwendet und verschwinden mit der Antwort.",
        "Es werden keine Daten in einer Datenbank aufgezeichnet und auch nicht in separaten Dateien gespeichert. Da keine Registrierung erforderlich ist, sind die Eingabewerte nicht mit einer bestimmten Person verknüpft."
      ]
    },
    {
      "heading": "2. Informationen im Ergebnislink",
      "paragraphs": [
        "Die Adresse der Ergebnisanzeige enthält die Eingabewerte in kodierter Form. Diese Werte befinden sich jedoch hinter dem # in der Adresse, und gemäß den Webstandards werden die Inhalte hinter dem # nicht an den Server gesendet. Daher bleibt im Serverzugriffsprotokoll nur der Pfad der Adresse, auch wenn der Ergebnislink geöffnet wird.",
        "Wenn der Ergebnislink an eine andere Person gesendet wird, kann diese Person dasselbe Ergebnis sehen. Da der Link selbst die Eingabewerte enthält, liegt es im Ermessen des Nutzers, ob er ihn teilt."
      ]
    },
    {
      "heading": "3. Automatisch gesammelte Informationen",
      "paragraphs": [
        "Es werden keine Informationen gesammelt, um den Nutzer zu identifizieren. Es werden jedoch die minimalen Aufzeichnungen, die für den Betrieb des Webdienstes erforderlich sind, automatisch vom Infrastruktur-Anbieter gespeichert."
      ],
      "bullets": [
        "Allgemeine Serverzugriffsprotokolle wie IP-Adresse, Zugriffszeit, Browsertyp",
        "Länderinformationen — werden nur verwendet, um die Bildschirm Sprache automatisch festzulegen und werden nicht gespeichert."
      ]
    },
    {
      "heading": "4. Cookies und Werbung",
      "paragraphs": [
        "Der Dienst selbst verwendet keine Cookies, um Nutzer zu identifizieren oder zu verfolgen. Die Informationen, die zur Berechnung der Kompatibilität eingegeben werden, werden nicht an Werbetreibende weitergegeben.",
        "Dieser Dienst zeigt Werbung über Google AdSense an. In diesem Prozess geschehen folgende Dinge."
      ],
      "bullets": [
        "Drittanbieter, einschließlich Google, können Cookies im Browser des Nutzers speichern oder lesen.",
        "Google verwendet Cookies, um Werbung basierend auf den Besuchshistorien dieser und anderer Websites anzuzeigen.",
        "Nutzer können personalisierte Werbung in den Google-Werbeeinstellungen (google.com/settings/ads) deaktivieren. Auch wenn sie deaktiviert wird, werden weiterhin Anzeigen angezeigt, die jedoch weniger relevant für den Nutzer sind.",
        "Personalisierte Werbung von Drittanbietern kann auf aboutads.info/choices auf einmal deaktiviert werden.",
        "Es gibt auch Möglichkeiten, Cookies in den Browsereinstellungen zu blockieren.",
        "Nutzer aus dem Europäischen Wirtschaftsraum, dem Vereinigten Königreich und der Schweiz werden zunächst um Zustimmung zur Verwendung von Werbe-Cookies gebeten."
      ]
    },
    {
      "heading": "5. Informationen, die bei der Zahlung gespeichert werden",
      "paragraphs": [
        "Wenn kostenpflichtige Produkte (Kompatibilitätsbericht PDF) bezahlt werden, werden die Bestellinformationen zur Zahlungsabwicklung und zur gesetzlich vorgeschriebenen Aufbewahrung von Transaktionsaufzeichnungen gespeichert.",
        "**Die Eingabewerte zur Berechnung der Kompatibilität und das erstellte PDF werden auch im Falle einer Zahlung nicht gespeichert.** Das Prinzip aus Punkt 1 bleibt unabhängig von der Zahlungsentscheidung bestehen. Die gespeicherten Elemente sind wie folgt, und Informationen zur Identifizierung des Nutzers wie Name, Kontaktinformationen und Adresse sind nicht enthalten."
      ],
      "bullets": [
        "Bestellnummer und Zahlungsidentifikator",
        "Zahlungsbetrag, Währung und Zahlungsstatus (unbezahlt, bezahlt, storniert)",
        "Produktkategorie, Bearbeitungsstatus, Anzahl der heruntergeladenen Dokumente, Bestellzeitpunkt",
        "Bildschirm Sprache und Zahlungsregion (inländisch, international) zum Zeitpunkt der Bestellung",
        "Aufbewahrungsfrist — Aufzeichnungen über Zahlungen und die Lieferung von Waren werden gemäß Artikel 6 des Gesetzes über den Schutz von Verbrauchern im elektronischen Handel 5 Jahre lang aufbewahrt, während Aufzeichnungen über Beschwerden oder Streitigkeiten von Verbrauchern 3 Jahre lang aufbewahrt und danach vernichtet werden."
      ]
    },
    {
      "heading": "6. Weitergabe an Dritte und Auftragsverarbeitung",
      "paragraphs": [
        "Da keine personenbezogenen Daten gespeichert werden, die zur Identifizierung des Nutzers erforderlich sind, gibt es auch keine personenbezogenen Daten, die an Dritte weitergegeben werden. Die Zahlungsabwicklung wird an die folgenden Anbieter ausgelagert.",
        "Für den Betrieb des Dienstes wird die Hosting-Infrastruktur von {hostingProvider} genutzt, wobei die Zugriffsprotokolle gemäß den Richtlinien des jeweiligen Anbieters verarbeitet werden.",
        "Inländische Zahlungen werden von Toss Payments und internationale Zahlungen von PayPal über PortOne verarbeitet. Informationen zu Zahlungsmethoden wie Kreditkartennummern und Kontonummern werden direkt von diesen Anbietern verarbeitet, und der Dienst empfängt und speichert diese nicht."
      ]
    },
    {
      "heading": "7. Rechte der Nutzer",
      "paragraphs": [
        "Da die Eingabewerte zur Berechnung der Kompatibilität nicht gespeichert werden, gibt es keine Anfragen zur Einsichtnahme, Berichtigung oder Löschung. Die verbleibenden Bestellaufzeichnungen nach der Zahlung müssen gemäß den gesetzlichen Vorgaben für einen bestimmten Zeitraum aufbewahrt werden, und während dieses Zeitraums können sie nicht gelöscht werden; nach Ablauf dieser Frist werden sie vernichtet.",
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
        "Wenn diese Richtlinie geändert wird, werden das Inkrafttreten und die Änderungen auf dieser Seite veröffentlicht. Wenn sich die Verarbeitung tatsächlich ändert, z. B. durch die Schaltung von Werbung oder den Verkauf kostenpflichtiger Produkte, wird die Änderung im Voraus bekannt gegeben."
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
