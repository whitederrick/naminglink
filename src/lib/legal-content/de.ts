import { companyInfo, LEGAL_EFFECTIVE_DATE } from "@/lib/company";
import type { LegalLocaleContent } from "./types";

const content: LegalLocaleContent = {
  labels: {
    effectiveDate: "Gültig ab",
    referenceDate: "Stand",
    login: "Anmelden",
  },
  documents: {
    terms: {
      title: "Nutzungsbedingungen",
      description: `Diese Bedingungen beschreiben die Nutzungsvoraussetzungen und den Leistungsumfang des Dienstes ${companyInfo.serviceName}.`,
      effectiveDate: LEGAL_EFFECTIVE_DATE,
      sections: [
        {
          title: "1. Art des Dienstes",
          paragraphs: [
            "Naming-Link ist ein KI-gestütztes Naming-Studio und bietet die folgenden vier Dienste an: (1) Zuordnung passender Hanja (chinesischer Schriftzeichen) mit Bedeutung zu koreanischen Namen, (2) Umwandlung koreanischer Namen in internationale Namen, (3) Umwandlung ausländischer Namen in koreanische Namen und (4) Umschrift internationaler Namen nach ihrer Aussprache in koreanisches Hangul.",
            "Die Ergebnisse sind Referenzmaterial zur Unterstützung bei der Namensfindung und -deutung. Sie garantieren keine Eignung für amtliche Eintragungen, etwa in Personenstandsregistern, Pässen, Visa, Marken oder Rechtsdokumenten.",
          ],
        },
        {
          title: "2. Nutzung durch Mitglieder und Gäste",
          paragraphs: [
            "Die Namensanalyse und das Freischalten von Namenskandidaten über Werbeprämien stehen auch ohne Konto zur Verfügung. Eine Registrierung oder Anmeldung wird nur für Funktionen verlangt, die ein Konto erfordern, etwa die Bestellung von Merchandise-Artikeln und die Einsicht in die Bestellhistorie.",
          ],
        },
        {
          title: "3. KI-Ergebnisse und Prüfpflicht der Nutzer",
          paragraphs: [
            "KI-Empfehlungen enthalten sprachliche, kulturelle und traditionelle Bezüge. Vor der endgültigen Namenswahl sollten Nutzer die Eignung des Namens durch zuständige Stellen, Fachleute, Muttersprachler vor Ort sowie eine rechtliche oder markenrechtliche Prüfung bestätigen lassen.",
          ],
        },
        {
          title: "4. Kostenpflichtige Dienste",
          paragraphs: [
            "Der Dienst zur Hanja-Bedeutungszuordnung bietet die folgenden Detailprodukte an: (1) ausführliche Erläuterungen zu bis zu 5 Kandidaten sowie eine umfassende Hanja-Detailanalyse: ₩2,900 (KRW); (2) erweiterte ausführliche Erläuterungen zu bis zu 10 Kandidaten, eine umfassende Hanja-Detailanalyse und ein PDF zum Aufbewahren: ₩4,900; (3) Details zu bis zu 10 Kandidaten, eine umfassende Hanja-Detailanalyse, eine Analyse nach Saju (Vier Säulen) und den Fünf Elementen sowie ein PDF zum Aufbewahren: ₩9,900.",
            "In den Diensten zur Umwandlung in internationale Namen, zur Umwandlung in koreanische Namen und zur Hangul-Ausspracheumschrift kann ein Produkt angeboten werden, das alle verbleibenden Kandidaten auf einmal und ohne Werbung freischaltet (₩990). Bis zur Aktivierung der Zahlungsfunktionen steht ausschließlich die Freischaltung über Werbeprämien zur Verfügung.",
            "Kostenpflichtige Detailberichte, Analyseergebnisse und PDF-Dateien können nach Zahlungsabschluss 24 Stunden lang erneut eingesehen und heruntergeladen werden; nach Ablauf der Aufbewahrungsfrist werden sie automatisch gelöscht.",
            "Physische Produkte wie Merchandise-Artikel mit koreanischen Namen können zu gesonderten Preisen und Bedingungen angeboten werden. Bei jedem kostenpflichtigen Produkt werden Produktinhalt, Preis, Bereitstellungsart und Erstattungsbedingungen vor der Zahlung auf dem Bildschirm angegeben.",
          ],
        },
        {
          title: "5. Werbeprämien-Funktionen",
          paragraphs: [
            "Das Freischalten von Kandidaten durch das Ansehen von Werbung gilt nur, wenn der Werbeanbieter eine ordnungsgemäße Prämie bestätigt hat. Automatisierte Werbewiedergabe, Manipulation von Prämien und ungewöhnlich wiederholte Anfragen können eingeschränkt werden.",
          ],
        },
        {
          title: "6. Verbotene Handlungen",
          paragraphs: [
            "Untersagt sind: die unbefugte Eingabe personenbezogener Daten Dritter, die Erzeugung von Namen zu diskriminierenden, hasserfüllten oder Identitätsmissbrauch bezweckenden Zwecken, automatisierte übermäßige Anfragen, die Herbeiführung von Betriebsstörungen des Dienstes sowie die wahrheitswidrige Darstellung von Ergebnissen als amtlich zertifiziert.",
          ],
        },
        {
          title: "7. Haftungsbeschränkung",
          paragraphs: [
            "Sofern kein Vorsatz oder keine grobe Fahrlässigkeit vorliegt, haftet das Unternehmen nicht für mittelbare Schäden, entgangene erwartete Gewinne, die Ablehnung amtlicher Eintragungen oder Streitigkeiten mit Dritten, die aus der Nutzung von KI-Empfehlungen entstehen.",
          ],
        },
        {
          title: "8. Kontakt",
          paragraphs: [`Anfragen zum Dienst: ${companyInfo.email}`],
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
            "Bei der Nutzung der Namensdienste als Gast werden Name, Geburtsdatum und Geburtszeit, Land, Sprache, Nutzungszweck und Aussprachehinweise im Rahmen der Ergebniserstellung vorübergehend verarbeitet; die Eingaben und die erzeugten Ergebnisse werden jedoch nicht in der Datenbank des Dienstes gespeichert.",
            "Beim Kauf eines kostenpflichtigen Detailberichts werden Bestellkennungen, der Zahlungsstatus sowie die für die Berichtserstellung erforderlichen Eingaben und Analyseergebnisse für die Dauer der Aufbewahrungsfrist (24 Stunden nach der Zahlung) verarbeitet. Zahlungsdaten wie Kartennummern werden unmittelbar vom Zahlungsdienstleister verarbeitet; das Unternehmen speichert sie nicht.",
            "Nur bei Nutzung der Bestellfunktion für Merchandise-Artikel können zusätzlich Name des Bestellers, E-Mail-Adresse, Telefonnummer, Lieferanschrift, Zahlungsstatus und Angaben zur Bestellabwicklung verarbeitet werden.",
            "Zur Stabilität des Dienstes und zur Missbrauchsprävention können minimale Betriebsprotokolle verarbeitet werden: ein sich täglich ändernder, nicht identifizierender Besucher-Hash, der Zeitpunkt der Anfrage, die Art des Dienstes, die Anzahl der kostenlosen Nutzungen, KI-Token-Verbrauch, Antwortzeit und Verarbeitungsstatus sowie Ereignisse zu Werbeeinblendungen und Prämien.",
          ],
        },
        {
          title: "2. Zwecke der Verarbeitung",
          paragraphs: [
            "Personenbezogene Daten werden verarbeitet für Namensempfehlungen auf Grundlage der Eingaben, Ausspracheanalysen, länderspezifische Sprach- und Kulturraumanalysen, die Begrenzung der kostenlosen Nutzung, die Prüfung von Werbeprämien, die Beantwortung von Kundenanfragen, die Zahlungs- und Versandabwicklung sowie die Verhinderung missbräuchlicher Nutzung.",
          ],
        },
        {
          title: "3. Aufbewahrung und Löschung",
          paragraphs: [
            "Analyseeingaben und -ergebnisse werden nur dann im Konto gespeichert, wenn ein angemeldetes Mitglied die Speicherung der Ergebnisse ausdrücklich wählt; sie werden gelöscht, wenn das Mitglied sie löscht oder der Aufbewahrungszweck entfällt. Eingaben und Ergebnisse von Gästen sowie von Mitgliedern, die keine Speicherung wählen, werden nicht gespeichert.",
            "Eingaben, Analyseergebnisse und PDF-Dateien kostenpflichtiger Detailberichte werden 24 Stunden nach Zahlungsabschluss automatisch gelöscht. Zahlungs- und Bestelltransaktionsunterlagen werden gemäß den gesetzlichen Aufbewahrungsfristen der einschlägigen Vorschriften gesondert aufbewahrt.",
            "Versanddetails werden gelöscht oder anonymisiert, sobald der für die Bestellabwicklung, Rücksendungen und Streitbeilegung erforderliche Zeitraum abgelaufen ist.",
          ],
        },
        {
          title: "4. Weitergabe an Dritte und Auftragsverarbeitung",
          paragraphs: [
            "Zum Betrieb des Dienstes können erforderliche Daten an folgende Stellen weitergegeben oder zur Verarbeitung übertragen werden: Supabase (Datenbank und Authentifizierung), Vercel (Hosting), OpenAI API (KI-Analyse), Werbenetzwerke, den Zahlungsdienstleister (PortOne) sowie Versand- und Produktionspartner.",
          ],
        },
        {
          title: "5. Mögliche Übermittlung ins Ausland",
          paragraphs: [
            "Im Rahmen einzelner Verarbeitungsschritte wie Cloud-Hosting, Authentifizierung, KI-API-Aufrufen, Werbung und E-Mail-Versand können personenbezogene Daten auf Servern im Ausland verarbeitet werden. Empfängerländer, Auftragsverarbeiter, Zwecke und Aufbewahrungsfristen werden im Einzelnen bekannt gegeben, sobald die Dienstleister feststehen.",
          ],
        },
        {
          title: "6. Rechte der Nutzer",
          paragraphs: [
            "Nutzer können Auskunft über ihre personenbezogenen Daten sowie deren Berichtigung, Löschung oder die Aussetzung der Verarbeitung verlangen und ihre Einwilligung widerrufen. Anträge werden per E-Mail beim Kundenservice entgegengenommen und nach Identitätsprüfung bearbeitet.",
          ],
        },
        {
          title: "7. Datenschutzbeauftragter",
          paragraphs: [
            `Beauftragter: ${companyInfo.privacyOfficer}`,
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
          title: "1. Allgemeine Grundsätze",
          paragraphs: [
            "Nach Aktivierung der Zahlungsfunktionen kann der erstattungsfähige Umfang je nach Bereitstellungsart des jeweiligen Produkts, Zeitpunkt des Fertigungsbeginns und Download-Status variieren. Die konkreten Bedingungen werden vor der Zahlung auf der Produktseite angegeben.",
          ],
        },
        {
          title: "2. Hanja-Detailberichte (₩2,900 / ₩4,900 / ₩9,900)",
          paragraphs: [
            "Nach der Zahlung ist eine Stornierung möglich, solange die Erstellung der KI-Detailanalyse noch nicht begonnen hat. Sobald die Erstellung abgeschlossen ist und der Bericht eingesehen oder heruntergeladen werden kann, kann eine Erstattung bei bloßer Meinungsänderung eingeschränkt sein.",
            "Werden inhaltliche Fehler, ein Erstellungsfehlschlag aufgrund einer Systemstörung oder Abweichungen des Zahlungsbetrags festgestellt, erfolgt eine Neuausstellung oder eine Erstattung. Das Auslaufen der Downloadmöglichkeit nach Ablauf der Aufbewahrungsfrist (24 Stunden nach der Zahlung) stellt keinen Erstattungsgrund dar.",
          ],
        },
        {
          title: "3. Freischaltung aller Kandidaten (₩990)",
          paragraphs: [
            "Die Gesamtfreischaltung der Kandidaten in den Diensten zur Umwandlung in internationale Namen, zur Umwandlung in koreanische Namen und zur Hangul-Ausspracheumschrift ist ein digitaler Inhalt, der unmittelbar nach der Zahlung bereitgestellt wird. Vor Beginn der Einsichtnahme in die Kandidaten ist eine Stornierung möglich; nach der Einsichtnahme kann eine Erstattung bei bloßer Meinungsänderung eingeschränkt sein.",
            "Werden die Kandidaten aufgrund eines Systemfehlers nicht ordnungsgemäß freigeschaltet, erfolgt eine erneute Bereitstellung oder eine Erstattung.",
          ],
        },
        {
          title: "4. Individuell gefertigte Merchandise-Artikel",
          paragraphs: [
            "Individuell angefertigte Artikel können bis zum Fertigungsbeginn storniert werden. Nach Fertigungsbeginn kann eine Erstattung bei bloßer Meinungsänderung eingeschränkt sein; Schreibfehler, Beschädigungen, Fehlanfertigungen oder Versandprobleme werden nach Prüfung in geeigneter Weise durch Umtausch, Neuanfertigung oder Erstattung behandelt.",
          ],
        },
        {
          title: "5. Werbebasierte Freischaltung",
          paragraphs: [
            "Vorteile aus dem Ansehen von Werbung sind keine kostenpflichtigen Produkte. Wird eine Prämie aufgrund eines Fehlers des Werbenetzwerks nicht gutgeschrieben, erfolgt die Behandlung über einen erneuten Versuch innerhalb des Dienstes oder eine Anfrage beim Kundenservice.",
          ],
        },
        {
          title: "6. Kontakt",
          paragraphs: [`Anfragen zu Erstattungen: ${companyInfo.email}`],
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
            "Die Basisanalyse der vier Dienste — Hanja-Bedeutungszuordnung, Umwandlung in internationale Namen, Umwandlung in koreanische Namen und Hangul-Ausspracheumschrift — ist für Gäste kostenlos; es können tägliche Nutzungslimits gelten.",
          ],
        },
        {
          title: "Nutzung über Werbeprämien",
          paragraphs: [
            "Das Freischalten von Kandidaten nach dem Ansehen einer Werbung ist ein werbebasierter Vorteil ohne gesonderte Zahlung. Pro Werbung wird der jeweils nächste Kandidat freigeschaltet. Die Verfügbarkeit kann je nach Werbeinventar, Land, Gerät oder den Richtlinien des Werbeanbieters variieren.",
          ],
        },
        {
          title: "Detailprodukte der Hanja-Bedeutungszuordnung",
          paragraphs: [
            "Ausführliche Erläuterungen zu bis zu 5 Kandidaten sowie eine umfassende Hanja-Detailanalyse: ₩2,900 (KRW)",
            "Erweiterte ausführliche Erläuterungen zu bis zu 10 Kandidaten, eine umfassende Hanja-Detailanalyse und ein PDF zum Aufbewahren: ₩4,900",
            "Details zu bis zu 10 Kandidaten, eine umfassende Hanja-Detailanalyse, eine Analyse nach Saju (Vier Säulen) und den Fünf Elementen sowie ein PDF zum Aufbewahren: ₩9,900",
            "Kostenpflichtige Berichte und PDFs können nach der Zahlung 24 Stunden lang erneut eingesehen und heruntergeladen werden; danach werden sie automatisch gelöscht.",
          ],
        },
        {
          title: "Freischaltung aller Kandidaten",
          paragraphs: [
            "Freischaltung aller verbleibenden Kandidaten auf einmal und ohne Werbung in den Diensten zur Umwandlung in internationale Namen, zur Umwandlung in koreanische Namen und zur Hangul-Ausspracheumschrift: ₩990 (Zahlungsfunktion in Vorbereitung)",
          ],
        },
        {
          title: "Merchandise-Artikel mit koreanischen Namen",
          paragraphs: [
            "Für physische Merchandise-Artikel wie Namensstempel werden Preise, Versandkosten und Fertigungszeiten je Produkt gesondert bekannt gegeben.",
          ],
        },
        {
          title: "Hinweise vor dem offiziellen Zahlungsstart",
          paragraphs: [
            "Sobald die Prüfung durch den Zahlungsdienstleister (PG), die Anmeldung als Versandhandelsunternehmen und die Bedingungen der Produktionspartnerschaften feststehen, werden der tatsächliche Zahlungsbetrag, die Versandkosten, die Fertigungszeit und die Erstattungsbedingungen erneut auf der jeweiligen Produktseite angegeben.",
          ],
        },
      ],
    },
  },
};

export default content;
