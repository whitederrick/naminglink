import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
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
          title: "4. Kostenpflichtige Dienstleistungen",
          paragraphs: [
            "Die detaillierten Produkte der Hanzi-Bedeutungszuordnungsdienstleistung sind wie folgt: ① Bis zu 5 Vorschläge mit detaillierter Beschreibung und umfassender Hanzi-Analyse: 2.900 Won ② Bis zu 10 Vorschläge mit erweiterten detaillierten Beschreibungen, umfassender Hanzi-Analyse und PDF für den persönlichen Gebrauch: 4.900 Won ③ Bis zu 10 Vorschläge mit detaillierten Informationen, umfassender Hanzi-Analyse, Analyse von Schicksal und fünf Elementen sowie PDF für den persönlichen Gebrauch: 9.900 Won.",
            "Für die Dienstleistungen zur Umwandlung in globale Namen, Umwandlung in koreanische Namen und Transkription in koreanische Schrift kann ein Produkt angeboten werden, das alle verbleibenden Vorschläge ohne Werbung auf einmal offenlegt (Inlandszahlung 990 Won, Auslandszahlung US$1.99). Vor der Aktivierung der Zahlungsfunktion wird nur die werbefinanzierte Einsicht angeboten.",
            "Für globale Nutzer werden digitale Produkte angeboten: ④ Umfassender Bericht über koreanische Namen als PDF (US$9.99): Auswahl der Schriftart, Namenskunst, Bedeutungsinterpretation und Referenz zu Schicksal und fünf Elementen ⑤ Kunst-PDF zur Umwandlung in koreanische Aussprache (US$2.99): Kunst des ausgewählten Namens und Ausspracheanleitung ⑥ Kunstpaket-PDF (US$1.99): Bereitstellung eines ausgewählten Namens in verschiedenen Schriftarten. Die Preise und die Anzahl der angewendeten Schriftarten jedes Produkts richten sich nach den auf dem Bildschirm angegebenen Werten.",
            "Kostenpflichtige detaillierte Berichte und Analyseergebnisse sowie PDF-Dateien können innerhalb von 24 Stunden nach Abschluss der Zahlung erneut eingesehen und heruntergeladen werden; nach Ablauf der Aufbewahrungsfrist werden sie automatisch gelöscht.",
            "Physische Waren wie Namensstempel werden zu Preisen und Bedingungen angeboten, die inländisch 39.000 Won und international US$34.99 (einschließlich internationaler Versandkosten) betragen. Alle kostenpflichtigen Produkte zeigen vor der Zahlung die Produktinhalte, Preise, Bereitstellungsarten und Rückgabebedingungen auf dem Bildschirm an.",
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
            "Serviceanfragen: platforest.inc@gmail.com",
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
            "Lieferdetails werden nach Ablauf der für die Bearbeitung von Bestellungen sowie für Rücksendungen und Streitbeilegungen erforderlichen Zeit vernichtet oder anonymisiert.",
          ],
        },
        {
          title: "4. Bereitstellung an Dritte und Auftragsverarbeitung",
          paragraphs: [
            "Zur Durchführung des Dienstes können erforderliche Informationen an Supabase (Datenbank, Authentifizierung), Vercel (Hosting), OpenAI API (AI-Analyse), Werbenetzwerke, Zahlungsdienstleister (PortOne) sowie an Partner für Versand und Produktion verarbeitet oder ausgelagert werden.",
          ],
        },
        {
          title: "5. Übertragung personenbezogener Daten ins Ausland",
          paragraphs: [
            "Das Unternehmen überträgt personenbezogene Daten ins Ausland (Auftragsverarbeitung), um den Dienst bereitzustellen, wie unten beschrieben. Die Übertragung erfolgt über Übertragungsmethoden im Informations- und Kommunikationsnetz.",
            "① OpenAI, L.L.C. (USA) — Übertragene Daten: Name, Geburtsdatum, Geburtszeit, Geschlecht, Land, Sprache usw. — Übertragungszweck: AI-basierte Analyse von Namen, Aussprache und Bedeutung — Aufbewahrungs- und Nutzungsdauer: Dauer der Dienstbereitstellung (Eingabedaten werden gemäß der OpenAI-Richtlinie nicht für das Modelltraining verwendet und maximal 30 Tage zur Missbrauchsüberwachung aufbewahrt, bevor sie gelöscht werden).",
            "② Supabase, Inc. (USA) — Übertragene Daten: Bestell- und Zahlungsstatusinformationen, E-Mail der Mitglieder, Eingaben und Ergebnisse des kostenpflichtigen Berichts (24 Stunden nach der Zahlung), Bestellername, Kontaktinformationen und Lieferadresse bei der Bestellung von Merchandise — Übertragungszweck: Datenbank, Authentifizierung, Speicherung — Aufbewahrungs- und Nutzungsdauer: Dauer der Dienstbereitstellung oder bis zur jeweiligen Aufbewahrungsfrist.",
            "③ Vercel, Inc. (USA) — Übertragene Daten: Zugriffs- und Anforderungsinformationen, die während der Nutzung des Dienstes übertragen werden — Übertragungszweck: Anwendungs-Hosting — Aufbewahrungs- und Nutzungsdauer: Dauer der Dienstbereitstellung.",
            "Nutzer können der Übertragung personenbezogener Daten ins Ausland widersprechen, jedoch kann die Ablehnung dieser Verarbeitung, da sie für die Bereitstellung des Dienstes unerlässlich ist, zu Einschränkungen bei der Nutzung des Dienstes führen.",
          ],
        },
        {
          title: "6. Rechte der Nutzer",
          paragraphs: [
            "Nutzer können die Einsichtnahme, Berichtigung, Löschung, Verarbeitungseinstellung und Widerruf der Einwilligung zu ihren personenbezogenen Daten anfordern. Anfragen werden per E-Mail an den Kundenservice entgegengenommen und nach Identitätsprüfung bearbeitet.",
          ],
        },
        {
          title: "7. Datenschutzbeauftragter",
          paragraphs: [
            "Verantwortlicher: 곽은하",
            "E-Mail: platforest.inc@gmail.com",
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
          title: "2. Detaillierter Bericht über Hanja (2.900 ₩·4.900 ₩·9.900 ₩)",
          paragraphs: [
            "Eine Stornierung ist möglich, bevor die KI-Detailanalyse nach der Zahlung beginnt. Nach Abschluss der Analyse und der Möglichkeit zur Einsichtnahme oder zum Download kann eine Rückerstattung aufgrund von einfacher Meinungsänderung eingeschränkt sein.",
            "Bei festgestellten Inhaltsfehlern, Systemausfällen, die zu einem Erstellungsfehler führen, oder Unstimmigkeiten im Zahlungsbetrag erfolgt eine Neuausstellung oder Rückerstattung. Wenn der Download aufgrund des Ablaufs der Aufbewahrungsfrist (24 Stunden nach der Zahlung) beendet ist, gilt dies nicht als Rückerstattungsgrund.",
          ],
        },
        {
          title: "3. Gesamte Kandidatenveröffentlichung (inländisch 990 ₩ · international US$1.99)",
          paragraphs: [
            "Die Veröffentlichung der Kandidaten für den globalen Namenswechsel, den koreanischen Namenswechsel und den Service zur phonetischen Transkription in Hangul ist digitale Inhalte, die sofort nach der Zahlung bereitgestellt werden. Eine Stornierung ist möglich, bevor die Einsichtnahme der Kandidaten beginnt; nach der Einsichtnahme kann eine Rückerstattung aufgrund von einfacher Meinungsänderung eingeschränkt sein.",
            "Bei Systemfehlern, die dazu führen, dass die Kandidaten nicht ordnungsgemäß veröffentlicht werden, erfolgt eine Neuausstellung oder Rückerstattung.",
          ],
        },
        {
          title: "4. Globale digitale PDF-Produkte (US$9.99·US$2.99·US$1.99)",
          paragraphs: [
            "Der umfassende Bericht über koreanische Namen (US$9.99), die Kunst zur phonetischen Umwandlung in Hangul (US$2.99) und das Namenskunstpaket (US$1.99) sind digitale Inhalte, die nach der Zahlung erstellt werden. Eine Stornierung ist möglich, bevor die PDF-Erstellung beginnt; nach Abschluss der Erstellung und der Möglichkeit zum Download kann eine Rückerstattung aufgrund von einfacher Meinungsänderung eingeschränkt sein.",
            "Bei Erstellungsfehlern, Inhaltsfehlern oder festgestellten Unstimmigkeiten im Zahlungsbetrag erfolgt eine Neuausstellung oder Rückerstattung. Wenn der Download aufgrund des Ablaufs der Aufbewahrungsfrist (24 Stunden nach der Zahlung) beendet ist, gilt dies nicht als Rückerstattungsgrund.",
          ],
        },
        {
          title: "5. Maßgeschneiderte Produkte (z. B. Namensstempel)",
          paragraphs: [
            "Personalisierte Produkte wie Namensstempel (inländisch 39.000 ₩ · international US$34.99, einschließlich internationaler Versandkosten) können bis zum Produktionsbeginn storniert werden. Nach Produktionsbeginn ist der eingravierte Text personalisiert und daher kann eine Rückerstattung aufgrund von einfacher Meinungsänderung eingeschränkt sein; Tippfehler, Beschädigungen, fehlerhafte Produktion oder Versandprobleme werden nach Überprüfung durch Austausch, Neuproduktion oder Rückerstattung entsprechend behandelt.",
          ],
        },
        {
          title: "5. Werbebasierte Freischaltung",
          paragraphs: [
            "Die Vorteile des Werbeschauens sind kein Zahlungsprodukt. Bei einem Fehler im Werbenetzwerk, der dazu führt, dass keine Entschädigung gezahlt wird, wird dies innerhalb des Dienstes durch einen erneuten Versuch oder durch Kontakt mit dem Kundenservice bearbeitet.",
          ],
        },
        {
          title: "6. Kontakt",
          paragraphs: [
            "Rückerstattungsanfragen: platforest.inc@gmail.com",
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
          title: "Basisanalyse (kostenlos)",
          paragraphs: [
            "Die Basisanalyse der vier Dienstleistungen: Bedeutungszuordnung von Hanja, globale Namensumwandlung, koreanische Namensumwandlung und koreanische Lautschrift, wird nicht registrierten Benutzern kostenlos angeboten, wobei eine tägliche Nutzungseinschränkung gelten kann.",
          ],
        },
        {
          title: "Werbevergütungsnutzung",
          paragraphs: [
            "Das Entsperren von Kandidaten nach dem Ansehen von Werbung ist ein werbebasiertes Angebot, das ohne zusätzliche Zahlung bereitgestellt wird. Bei jeder Werbung wird ein weiterer Kandidat freigeschaltet. Die Verfügbarkeit kann je nach Werbevorrat, Land, Gerät oder den Richtlinien des Werbeanbieters variieren.",
          ],
        },
        {
          title: "Detailprodukt zur Bedeutungszuordnung von Hanja",
          paragraphs: [
            "Maximal 5 Kandidaten mit detaillierter Beschreibung und umfassenden Hanja-Details: 2.900 Won",
            "Maximal 10 Kandidaten mit erweiterten detaillierten Beschreibungen, umfassenden Hanja-Details und PDF zur Aufbewahrung: 4.900 Won",
            "Maximal 10 Kandidaten mit Details, umfassenden Hanja-Details, Analyse von Schicksal und fünf Elementen sowie PDF zur Aufbewahrung: 9.900 Won",
            "Bezahlte Berichte und PDFs können nach der Zahlung innerhalb von 24 Stunden erneut eingesehen und heruntergeladen werden und werden danach automatisch gelöscht.",
          ],
        },
        {
          title: "Gesamte Kandidaten auf einmal freigeben",
          paragraphs: [
            "Die gesamte verbleibende Kandidatenliste aus den Dienstleistungen zur globalen Namensumwandlung, koreanischen Namensumwandlung und koreanischen Lautschrift wird ohne Werbung auf einmal freigegeben: Inlandszahlung 990 Won, Auslandszahlung US$1.99 (Zahlungsfunktion in Vorbereitung)",
          ],
        },
        {
          title: "Globale digitale PDF-Produkte",
          paragraphs: [
            "Umfassender Bericht PDF für koreanische Namen (Kunst und Bedeutungsinterpretation aller empfohlenen Kandidaten sowie Referenz für Schicksal und fünf Elemente): US$9.99",
            "PDF für die Umwandlung koreanischer Lautschrift (Kunst des ausgewählten Schriftartnamens und Lauthinweise): US$2.99",
            "PDF für Namenskunstpaket (Kunst für einen ausgewählten Namen in verschiedenen Schriftarten): US$1.99",
            "Die Preise und die Anzahl der verwendeten Schriftarten richten sich nach den auf dem Bildschirm angegebenen Werten, und das PDF kann nach der Zahlung innerhalb von 24 Stunden erneut heruntergeladen werden und wird danach automatisch gelöscht. (Zahlungsfunktion in Vorbereitung)",
          ],
        },
        {
          title: "Koreanische Namenswaren",
          paragraphs: [
            "Namensstempel: Inlands 39.000 Won · Ausland US$34.99 (einschließlich internationaler Versandkosten). Andere physische Waren haben separate Preise, Versandkosten und Produktionszeiten, die gesondert angegeben werden.",
          ],
        },
        {
          title: "Hinweise vor der offiziellen Zahlung",
          paragraphs: [
            "Sobald die PG-Prüfung, die Meldung des Fernabsatzhandels und die Bedingungen für die Produktionspartnerschaft festgelegt sind, werden die tatsächlichen Zahlungskosten, Versandkosten, Produktionszeiten und Rückerstattungsbedingungen erneut auf dem Produktbildschirm angezeigt.",
          ],
        },
      ],
    },
  },
};

export default content;
