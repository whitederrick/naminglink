import { companyInfo, romanize, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Gültig ab",
    referenceDate: "Stand",
    login: "Anmelden",
    close: "Schließen",
  },
  documents: {
    terms: {
      title: "Nutzungsbedingungen",
      description: `Diese Bedingungen beschreiben die Nutzungsvoraussetzungen und den Leistungsumfang des Dienstes ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Art der Dienstleistung",
          paragraphs: [
            "Naming-Link ist ein KI-gestütztes Namensstudio, das die folgenden vier Dienstleistungen anbietet: ① Zuordnung von Hanzi-Bedeutungen zu koreanischen Namen ② Umwandlung koreanischer Namen in globale Namen ③ Umwandlung ausländischer Namen in koreanische Namen ④ Transkription globaler Namen in koreanische Schrift nach Aussprache.",
            "Die Ergebnisse sind Referenzmaterialien zur Unterstützung bei der Namensgebung und Interpretation und garantieren nicht die Möglichkeit einer offiziellen Registrierung, wie z.B. bei Geburtsurkunden, Reisepässen, Visa, Marken oder rechtlichen Dokumenten.",
          ],
        },
        {
          title: "2. Nutzung durch Mitglieder und Nicht-Mitglieder",
          paragraphs: [
            "Die Analyse von Namen und die Einsicht in werbefinanzierte Vorschläge können auch von Nicht-Mitgliedern genutzt werden. Die Registrierung oder Anmeldung ist nur für Funktionen erforderlich, die ein Konto benötigen, wie z.B. die Bestellung von Waren und die Überprüfung von Bestellhistorien.",
          ],
        },
        {
          title: "3. Verantwortung für KI-Ergebnisse und Überprüfung",
          paragraphs: [
            "Die von der KI empfohlenen Ergebnisse enthalten sprachliche, kulturelle und traditionelle Referenzen. Die Nutzer müssen die Eignung vor der endgültigen Namenswahl durch relevante Institutionen, Fachleute, lokale Nutzer sowie rechtliche und markenrechtliche Prüfungen bestätigen.",
          ],
        },
        {
          title: "4. Bezahlte Dienste",
          paragraphs: [
            "Die detaillierten Produkte des Kanji-Bedeutungs-Matching-Services sind wie folgt: ① Maximal 5 Kandidaten mit detaillierter Beschreibung und umfassenden Kanji-Details: ₩2,900 ② Maximal 10 Kandidaten mit erweiterten detaillierten Beschreibungen, umfassenden Kanji-Details und PDF für die Aufbewahrung: ₩4,900 ③ Maximal 10 Kandidaten mit detaillierten Beschreibungen, umfassenden Kanji-Details, Analyse von Schicksal und Elementen sowie PDF für die Aufbewahrung: ₩9,900.",
            "Für den globalen Namensumwandlungsservice, den koreanischen Namensumwandlungsservice und den Hangul-Aussprache-Service kann ein Produkt angeboten werden, das alle verbleibenden Kandidaten ohne Werbung auf einmal offenlegt (Inlandszahlung ₩990, Auslandszahlung US$1.99). Vor der Aktivierung der Zahlungsfunktion wird nur eine werbefinanzierte Ansicht angeboten.",
            "Für globale Nutzer gibt es digitale Produkte: ④ Umfassender Hangul-Namenbericht PDF (US$9.99): Auswahl der Schriftarten für alle empfohlenen Kandidaten, Kunst des Namens, Bedeutungsinterpretation, Referenz zu den Elementen ⑤ Kunst-PDF zur Umwandlung der Hangul-Aussprache (US$2.99): Kunst des Namens in der gewählten Schriftart und Ausspracheanleitung ⑥ Kunst-Paket PDF für Namen (US$1.99): Bereitstellung eines ausgewählten Namens in verschiedenen Schriftarten. Die Preise und die Anzahl der angewendeten Schriftarten jedes Produkts entsprechen den auf dem Bildschirm angegebenen Werten.",
            "Bezahlte detaillierte Berichte und Analyseergebnisse sowie PDF-Dateien können nach Abschluss der Zahlung innerhalb von 24 Stunden erneut eingesehen und heruntergeladen werden, und nach Ablauf der Aufbewahrungsfrist werden sie automatisch gelöscht.",
            "Die Preise für physische Produkte wie Namensstempel im Inland betragen ₩39,000 / ₩59,000 / ₩79,000 und werden zusammen mit den Bedingungen für jedes Produkt angeboten.",
            "Die Preise für dasselbe physische Produkt im Ausland betragen US$39.90 / US$59.90 / US$79.90 und beinhalten die internationalen Versandkosten.",
            "Alle kostenpflichtigen Produkte zeigen vor der Zahlung die Produktinhalte, Preise, Bereitstellungsarten und Rückgabebedingungen auf dem Bildschirm an.",
          ],
        },
        {
          title: "5. Werbefinanzierte Dienstleistungen",
          paragraphs: [
            "Das Entsperren von Vorschlägen durch das Ansehen von Werbung gilt nur, wenn die reguläre Entschädigungsbestätigung des Werbeanbieters abgeschlossen ist. Automatisierte Werbeeinspielungen, Manipulation von Entschädigungen und unzulässige wiederholte Anfragen können eingeschränkt werden.",
          ],
        },
        {
          title: "6. Verbotene Handlungen",
          paragraphs: [
            "Die unbefugte Eingabe personenbezogener Daten Dritter, die Erstellung von Namen zu diskriminierenden, hasserfüllten oder betrügerischen Zwecken, automatisierte übermäßige Anfragen, die Verursachung von Dienstunterbrechungen und die falsche offizielle Zertifizierung von Ergebnissen sind verboten.",
          ],
        },
        {
          title: "7. Haftungsbeschränkung",
          paragraphs: [
            "Das Unternehmen haftet nicht für indirekte Schäden, entgangene Gewinne, Ablehnung der offiziellen Registrierung oder Streitigkeiten Dritter, die aus der Nutzung der AI-Empfehlungsergebnisse entstehen, es sei denn, es liegt Vorsatz oder grobe Fahrlässigkeit vor.",
          ],
        },
        {
          title: "8. Kontakt",
          paragraphs: [
            `Serviceanfragen: ${companyInfo.email}`,
          ],
        },
      ],
    },
    privacy: {
      title: "Datenschutzerklärung",
      description: `Diese Erklärung beschreibt die Grundsätze der Verarbeitung personenbezogener Daten durch ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Verarbeitete personenbezogene Daten",
          paragraphs: [
            "Bei der Nutzung des Namensdienstes durch Nicht-Mitglieder werden Name, Geburtsdatum, Geburtszeit, Land, Sprache, Verwendungszweck und Aussprachehinweise vorübergehend im Analyseprozess verarbeitet, jedoch werden die Eingaben und die generierten Ergebnisse nicht in der Servicedatenbank gespeichert.",
            "Bei der Registrierung und Anmeldung werden die E-Mail-Adresse und die Anmeldeprotokolle (Authentifizierungshistorie) verarbeitet.",
            "Beim Kauf eines kostenpflichtigen Detailberichts werden Bestellidentifikationsinformationen, Zahlungsstatus sowie Eingaben und Analyseergebnisse, die für die Erstellung des Berichts erforderlich sind, während der Aufbewahrungsfrist (24 Stunden nach der Zahlung) verarbeitet. Informationen zu Zahlungsmethoden wie Kreditkartennummern werden direkt von den Zahlungsdienstleistern verarbeitet, und das Unternehmen speichert diese nicht.",
            "Bei der Nutzung der Funktion zur Bestellung von Merchandise-Artikeln können zusätzlich Bestellername, E-Mail, Kontaktinformationen, Lieferadresse, Zahlungsstatus und Bestellverarbeitungsinformationen verarbeitet werden.",
            "Zur Gewährleistung der Stabilität des Dienstes und zur Verhinderung von Missbrauch können anonymisierte Besucher-Hashes, Anforderungszeitpunkte, Dienstarten, Anzahl der kostenlosen Nutzungen, AI-Token, Antwortzeiten, Verarbeitungsstatus sowie Werbungseinblendungen und Belohnungsveranstaltungen als minimale Betriebsprotokolle täglich verarbeitet werden.",
          ],
        },
        {
          title: "2. Zweck der Verarbeitung personenbezogener Daten",
          paragraphs: [
            "Die Verarbeitung personenbezogener Daten erfolgt zur Empfehlung von Namen basierend auf Eingabewerten, zur Analyse der Aussprache, zur Analyse von Sprachen und Kulturräumen nach Ländern, zur Begrenzung der kostenlosen Nutzung, zur Überprüfung von Werbevergütungen, zur Bearbeitung von Kundenanfragen, zur Zahlungs- und Versandabwicklung sowie zur Verhinderung von Missbrauch.",
          ],
        },
        {
          title: "3. Aufbewahrung und Vernichtung",
          paragraphs: [
            "Eingaben und Ergebnisse der Analyse werden nur dann im Konto eines angemeldeten Mitglieds gespeichert, wenn das Mitglied dies ausdrücklich wählt, und werden vernichtet, wenn das Mitglied sie löscht oder der Aufbewahrungszweck endet. Eingaben und Ergebnisse von Nicht-Mitgliedern sowie von Mitgliedern, die keine Speicherung gewählt haben, werden nicht gespeichert.",
            "Eingaben, Analyseergebnisse und PDF-Dateien des kostenpflichtigen Detailberichts werden 24 Stunden nach Abschluss der Zahlung automatisch gelöscht. Zahlungs- und Bestelltransaktionsprotokolle werden gemäß den gesetzlichen Aufbewahrungsfristen der relevanten Gesetze separat aufbewahrt.",
            "Die Versanddetails der Bestellungen von Merchandise-Artikeln (Name des Bestellers, E-Mail, Kontaktinformationen, Lieferadresse, Anfragen, Text für den Stempel) werden 90 Tage nach Abschluss der Lieferung oder nach dem Datum der Stornierung der Bestellung vernichtet. Die Eingabedaten von Bestellungen, die nicht bis zur Zahlung fortgeführt werden, werden 24 Stunden nach der Unterbrechung vernichtet. Auch nach der Vernichtung bleiben die Zahlungs- und Bestelltransaktionsaufzeichnungen gemäß den gesetzlichen Aufbewahrungsfristen der relevanten Gesetze erhalten.",
          ],
        },
        {
          title: "4. Bereitstellung an Dritte und Auftragsverarbeitung",
          paragraphs: [
            "Zur Durchführung des Dienstes können erforderliche Informationen an Supabase (Datenbank, Authentifizierung), Vercel (Hosting), OpenAI API (AI-Analyse), Werbenetzwerke, Zahlungsdienstleister (PortOne) sowie an Partner für Versand und Produktion verarbeitet oder ausgelagert werden.",
          ],
        },
        {
          title: "5. Cookies und Werbung",
          paragraphs: [
            "Der Dienst selbst verwendet keine Cookies, um Nutzer zu identifizieren oder zu verfolgen. Die Informationen, die in die Namensanalyse eingegeben werden, werden nicht an Werbetreibende weitergegeben.",
            "Dieser Dienst zeigt Werbung über Google AdSense an. In diesem Prozess können Drittanbieter, einschließlich Google, Cookies im Browser des Nutzers speichern oder lesen, und Google verwendet Cookies, um Werbung basierend auf den Besuchshistorien dieser und anderer Websites anzuzeigen.",
            "Auch bei der Nutzung von belohnungsbasierten Anzeigen und Offerwalls werden dieselben Cookies verwendet. Der Dienst überprüft lediglich, ob die Werbung bis zum Ende angesehen wurde und ob die Belohnung ausgezahlt wurde, erhält jedoch keine Informationen, die es dem Werbetreibenden ermöglichen, den Nutzer zu identifizieren.",
            "Nutzer können personalisierte Werbung in den Google-Werbeeinstellungen (google.com/settings/ads) deaktivieren. Auch wenn sie deaktiviert wird, werden weiterhin Anzeigen angezeigt, jedoch mit einer geringeren Relevanz für den Nutzer. Personalisierte Werbung von Drittanbietern kann auf einmal unter aboutads.info/choices deaktiviert werden, und es gibt auch Möglichkeiten, Cookies über die Browsereinstellungen zu blockieren.",
            "Für Nutzer im Europäischen Wirtschaftsraum, im Vereinigten Königreich und in der Schweiz wird vor der Verwendung von Werbe-Cookies zunächst um Zustimmung über eine Meldung von Google gebeten.",
          ],
        },
        {
          title: "6. Übertragung personenbezogener Daten ins Ausland",
          paragraphs: [
            "Das Unternehmen überträgt personenbezogene Daten ins Ausland (Auftragsverarbeitung), um den Dienst bereitzustellen, wie unten beschrieben. Die Übertragung erfolgt über Übertragungsmethoden im Informations- und Kommunikationsnetz.",
            "① OpenAI, L.L.C. (USA) — Übertragene Daten: Name, Geburtsdatum, Geburtszeit, Geschlecht, Land, Sprache usw. — Übertragungszweck: AI-basierte Analyse von Namen, Aussprache und Bedeutung — Aufbewahrungs- und Nutzungsdauer: Dauer der Dienstbereitstellung (Eingabedaten werden gemäß der OpenAI-Richtlinie nicht für das Modelltraining verwendet und maximal 30 Tage zur Missbrauchsüberwachung aufbewahrt, bevor sie gelöscht werden).",
            "② Supabase, Inc. (USA) — Übertragene Daten: Bestell- und Zahlungsstatusinformationen, E-Mail der Mitglieder, Eingaben und Ergebnisse des kostenpflichtigen Berichts (24 Stunden nach der Zahlung), Bestellername, Kontaktinformationen und Lieferadresse bei der Bestellung von Merchandise — Übertragungszweck: Datenbank, Authentifizierung, Speicherung — Aufbewahrungs- und Nutzungsdauer: Dauer der Dienstbereitstellung oder bis zur jeweiligen Aufbewahrungsfrist.",
            "③ Vercel, Inc. (USA) — Übertragene Daten: Zugriffs- und Anforderungsinformationen, die während der Nutzung des Dienstes übertragen werden — Übertragungszweck: Anwendungs-Hosting — Aufbewahrungs- und Nutzungsdauer: Dauer der Dienstbereitstellung.",
            "Nutzer können der Übertragung personenbezogener Daten ins Ausland widersprechen, jedoch kann die Ablehnung dieser Verarbeitung, da sie für die Bereitstellung des Dienstes unerlässlich ist, zu Einschränkungen bei der Nutzung des Dienstes führen.",
          ],
        },
        {
          title: "7. Rechte der Nutzer",
          paragraphs: [
            "Nutzer können die Einsichtnahme, Berichtigung, Löschung, Verarbeitungseinstellung und Widerruf der Einwilligung zu ihren personenbezogenen Daten anfordern. Anfragen werden per E-Mail an den Kundenservice entgegengenommen und nach Identitätsprüfung bearbeitet.",
          ],
        },
        {
          title: "8. Datenschutzbeauftragter",
          paragraphs: [
            `Verantwortlicher: ${romanize(companyInfo.privacyOfficer)}`,
            `E-Mail: ${companyInfo.email}`,
          ],
        },
      ],
    },
    refund: {
      title: "Erstattungs- und Stornierungsrichtlinie",
      description:
        "Diese Richtlinie beschreibt die Stornierungs- und Erstattungsbedingungen für digitale Produkte und individuell gefertigte Merchandise-Artikel.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Gemeinsames Prinzip",
          paragraphs: [
            "Sobald die Zahlungsfunktion aktiviert ist, kann der Umfang der Rückerstattung je nach Art der Bereitstellung des Produkts, dem Zeitpunkt des Produktionsbeginns und der Möglichkeit des Downloads variieren. Die spezifischen Bedingungen werden vor der Zahlung auf der Produktseite angezeigt.",
          ],
        },
        {
          title: "2. Detailbericht über Hanja",
          paragraphs: [
            "Der Preis für die nationale Zahlung des Detailberichts über Hanja beträgt ₩2,900 / ₩4,900 / ₩9,900.",
            "Eine Stornierung ist möglich, bevor die Erstellung der detaillierten Analyse nach der Zahlung beginnt. Nach Abschluss der Analyseerstellung, wenn diese eingesehen oder heruntergeladen werden kann, kann eine Rückerstattung aufgrund von einfacher Unzufriedenheit eingeschränkt sein.",
            "Im Falle von Inhaltsfehlern, Systemausfällen, die zu einem Erstellungsausfall führen, oder bei Feststellung von Unstimmigkeiten im Zahlungsbetrag wird eine Neuausstellung oder Rückerstattung vorgenommen. Wenn die Downloadfrist (24 Stunden nach der Zahlung) abgelaufen ist, gilt dies nicht als Rückerstattungsgrund.",
          ],
        },
        {
          title: "3. Gesamte Kandidatenoffenlegung",
          paragraphs: [
            "Der Preis für die gesamte Kandidatenoffenlegung im Inland beträgt ₩990.",
            "Der Preis für die gleiche Ware im Ausland beträgt US$1.99.",
            "Die Gesamte Kandidatenoffenlegung für den globalen Namensumwandlungs-, koreanischen Namensumwandlungs- und Hangul-Aussprache-Service ist digitale Inhalte, die sofort nach der Zahlung bereitgestellt werden. Eine Stornierung ist möglich, bevor die Einsichtnahme beginnt, und nach der Einsichtnahme kann eine Rückerstattung aufgrund von einfacher Unentschlossenheit eingeschränkt sein.",
            "Im Falle eines Systemfehlers, bei dem die Kandidaten nicht ordnungsgemäß offengelegt werden, erfolgt eine erneute Bereitstellung oder Rückerstattung.",
          ],
        },
        {
          title: "4. Globale digitale PDF-Produkte",
          paragraphs: [
            "Der umfassende Bericht über koreanische Namen (US$9.99), die koreanische Ausspracheumwandlung Kunst (US$2.99) und das Namenskunstpaket (US$1.99) sind digitale Inhalte, die nach der Zahlung erstellt werden. Eine Stornierung ist möglich, bevor die PDF-Erstellung beginnt, und nach Abschluss der Erstellung und der Möglichkeit zum Download kann eine Rückerstattung aufgrund von einfacher Meinungsänderung eingeschränkt sein.",
            "Im Falle eines Erstellungsfehlers, von Inhaltsfehlern oder von Unstimmigkeiten im Zahlungsbetrag wird eine Neuausstellung oder Rückerstattung vorgenommen. Wenn der Download aufgrund des Ablaufs der Aufbewahrungsfrist (24 Stunden nach der Zahlung) beendet wird, gilt dies nicht als Grund für eine Rückerstattung.",
          ],
        },
        {
          title: "5. Maßgeschneiderte Produkte (Namensstempel usw.)",
          paragraphs: [
            "Die Preise für personalisierte Produkte wie Namensstempel im Inland betragen ₩39,000 / ₩59,000 / ₩79,000.",
            "Die Preise für dasselbe Produkt im Ausland betragen US$39.90 / US$59.90 / US$79.90 und beinhalten die internationalen Versandkosten.",
            "Personalisierte Produkte können bis zur Produktionsaufnahme storniert werden. Nach Produktionsaufnahme ist der eingravierte Text personalisiert und eine Rückerstattung aufgrund von einfacher Meinungsänderung kann eingeschränkt sein. Fehler, Beschädigungen, falsche Produktionen oder Versandprobleme werden nach Überprüfung durch Austausch, Neuproduktion oder Rückerstattung auf geeignete Weise behandelt.",
          ],
        },
        {
          title: "6. Werbebasierte Freischaltung",
          paragraphs: [
            "Die Vorteile des Werbeschauens sind kein Zahlungsprodukt. Bei einem Fehler im Werbenetzwerk, der dazu führt, dass keine Entschädigung gezahlt wird, wird dies innerhalb des Dienstes durch einen erneuten Versuch oder durch Kontakt mit dem Kundenservice bearbeitet.",
          ],
        },
        {
          title: "7. Kontakt",
          paragraphs: [
            `Rückerstattungsanfragen: ${companyInfo.email}`,
          ],
        },
      ],
    },
    pricing: {
      title: "Preisübersicht",
      description:
        "Diese Übersicht beschreibt den Umfang der kostenlosen Dienste und die Preise der kostenpflichtigen Produkte.",
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "Grundanalyse (kostenlos)",
          paragraphs: [
            "Die Grundanalyse der vier Dienste: Bedeutungszuordnung von Hanja, globale Namensumwandlung, koreanische Namensumwandlung und Transkription in Hangul wird Nicht-Mitgliedern kostenlos angeboten, wobei eine tägliche Nutzungslimitierung gelten kann. Unten sind nur die Produkte aufgeführt, die jetzt mit Beträgen bezahlt werden können, während noch nicht eröffnete Produkte nicht angezeigt werden.",
          ],
        },
        {
          title: "Werbevergütungsnutzung",
          paragraphs: [
            "Die Freischaltung von Kandidaten nach dem Ansehen von Werbung ist ein werbebasiertes Angebot, das ohne zusätzliche Zahlung bereitgestellt wird. Nach jeder Werbung wird ein weiterer Kandidat freigeschaltet. Die Verfügbarkeit kann je nach Werbevorrat, Land, Gerät oder den Richtlinien des Werbeanbieters variieren. In Zeiten, in denen keine Werbung geschaltet wird, wird der betreffende Kandidat kostenlos ohne diese Schwelle freigegeben.",
          ],
        },
        {
          title: "Detailprodukt zur Bedeutungszuordnung von Hanja",
          paragraphs: [
            "Maximal 5 Kandidaten mit detaillierter Beschreibung und umfassenden Hanja-Details: ₩2,900",
            "Maximal 10 Kandidaten mit erweiterten detaillierten Beschreibungen, umfassenden Hanja-Details und PDF zur Aufbewahrung: ₩4,900",
            "Maximal 10 Kandidaten mit Details, umfassenden Hanja-Details, Analyse von Schicksal und fünf Elementen sowie PDF zur Aufbewahrung: ₩9,900",
            "Bezahlte Berichte und PDFs können nach der Zahlung innerhalb von 24 Stunden erneut eingesehen und heruntergeladen werden und werden danach automatisch gelöscht.",
          ],
        },
        {
          title: "Gesamte Kandidaten ohne Werbung offenlegen",
          paragraphs: [
            "Globale Namensumwandlung, koreanische Namensumwandlung, Hangul-Aussprache-Dienst: Gesamte verbleibende Kandidaten ohne Werbung auf einmal offenlegen (Inlandszahlung): ₩990",
            "Preis für die gleiche Ware bei Auslandszahlungen: US$1.99",
          ],
        },
        {
          title: "Globale digitale PDF-Produkte",
          paragraphs: [
            "Koreanischer Name Gesamtbericht PDF (Empfohlene Kandidaten, einschließlich Name Art·Bedeutungserklärung·Referenz zu den fünf Elementen und der Schicksalsanalyse): US$9.99",
            "Koreanische Aussprache Umwandlungsart PDF (Ausgewählte Schriftart Name Art und Ausspracheanleitung): US$2.99",
            "Name Art Paket PDF (Ein ausgewählter Name wird in verschiedenen Schriftarten als Art bereitgestellt): US$1.99",
            "Die Preise und die Anzahl der verwendeten Schriftarten richten sich nach den auf dem Bildschirm angegebenen Werten, und das PDF kann nach der Zahlung 24 Stunden lang erneut heruntergeladen werden und wird danach automatisch gelöscht.",
          ],
        },
        {
          title: "Koreanische Namen Merchandise",
          paragraphs: [
            "Namensstempel (Inlandszahlung): ₩39,000 / ₩59,000 / ₩79,000",
            "Namensstempel (Auslandszahlung): US$39.90 / US$59.90 / US$79.90 (inklusive internationaler Versandkosten)",
            "Sonstige physische Merchandise-Artikel haben separate Preise, Versandkosten und Produktionszeiten, die gesondert angegeben werden.",
          ],
        },
        {
          title: "Hinweis zu den Beträgen",
          paragraphs: [
            "Der Zahlungsbetrag, die Versandkosten, die Produktionszeit und die Rückgabebedingungen werden vor der Zahlung erneut auf der Produktseite angezeigt. Sollte der Betrag in diesem Dokument von dem Betrag auf der Produktseite abweichen, ist der Betrag auf der Produktseite maßgeblich.",
          ],
        },
      ],
    },
  },
};

export default content;
