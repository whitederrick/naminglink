import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Deutsch — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const DE_DOCS = {
  "about": {
    "eyebrow": "Über",
    "title": "Über Naming-Link",
    "summary": "Wir helfen Ihnen, koreanische Namen auszuwählen und zu verstehen. Hier ist, worauf wir unsere Ergebnisse stützen und was wir absichtlich nicht tun.",
    "backLabel": "Startseite",
    "sections": [
      {
        "title": "Was wir tun",
        "blocks": [
          {
            "p": "Naming-Link hilft Ihnen, **koreanische Namen auszuwählen und zu verstehen** — die hanja hinter einem Kindsnamen, einen koreanischen Namen für den Gebrauch im Ausland, eine Hangul-Schreibung Ihres eigenen Namens und Andenken wie einen Stempel oder einen gedruckten Bericht."
          },
          {
            "p": "Die Ergebnisse zu sehen ist **kostenlos und benötigt kein Konto.** Bezahlte Artikel verkaufen niemals das, was der Bildschirm bereits angezeigt hat: Sie öffnen mehr Kandidaten, fügen schriftliche Analysen hinzu oder verwandeln das Ergebnis in etwas, das Sie behalten können."
          }
        ]
      },
      {
        "title": "Worauf unsere Antworten basieren",
        "blocks": [
          {
            "p": "Hanja stammen aus der **offiziellen Namen-hanja-Tabelle des Obersten Gerichtshofs von Korea.** Jedes Zeichen hat eine festgelegte Lesart für die Verwendung in Namen, und Zeichen außerhalb der Tabelle können nicht registriert werden. Wir fügen dieser Liste nichts hinzu oder wählen keine Favoriten."
          },
          {
            "p": "Saju und Figuren der fünf Elemente werden aus dem **koreanischen lunisolaren Almanach** berechnet, wobei die Geburtszeit auf die wahre Sonnenzeit für den Geburtsort korrigiert wird. Die Lesart ist ein traditioneller Referenzwert, keine Vorhersage."
          },
          {
            "p": "Die schriftlichen Erklärungen werden von KI erstellt. Um zu verhindern, dass sie **Dinge erfindet**, erhält das Modell nur Ihre Eingaben und unsere eigenen Referenzdaten und wird angewiesen, sich daran zu halten. Die Leitfäden erklären dies im Detail."
          }
        ]
      },
      {
        "title": "Was wir nicht tun",
        "blocks": [
          {
            "ul": [
              "**Wir sagen keine Zukunft voraus.** Nichts hier verspricht Glück, Reichtum oder Schutz.",
              "**Wir speichern Ihren Namen nicht.** Kostenlose Ergebnisse werden niemals auf unseren Servern gespeichert, und bezahlte Dokumente werden ohne eine Kopie der Datei geliefert.",
              "**Bezahlen kauft keine bessere Antwort.** Das Freischalten mit einer Werbung und das Freischalten mit einer Zahlung bieten genau denselben Inhalt."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Der Dienst ist in 23 Sprachen verfügbar. Bezahlte PDFs werden in Englisch für Arabisch und Khmer ausgegeben — der PDF-Renderer unterstützt diese Schriften nicht — und wir weisen darauf hin, bevor Sie bezahlen."
          }
        ]
      },
      {
        "title": "Kontakt",
        "blocks": [
          {
            "p": "Unternehmensdetails und wie Sie uns erreichen können, finden Sie auf der [Kontaktseite](/contact), einschließlich Rückerstattungen, Datenschutzanfragen und Fehlerberichten."
          }
        ]
      }
    ]
  },
  "guide": {
    "eyebrow": "Wie Naming-Link funktioniert",
    "title": "Worauf wir Ihren Namen stützen",
    "summary": "Wie wir einen koreanischen Nachnamen auswählen, was wir überprüfen, bevor wir einen Vornamen vorschlagen, und wie wir Ihren Namen in Hangul schreiben — mit den Teilen, die wir absichtlich weglassen.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "",
        "blocks": [
          {
            "stats": [
              {
                "value": "{characterTotal}",
                "label": "name-hanja Zeichen"
              },
              {
                "value": "{syllableCount}",
                "label": "Hangul Silben abgedeckt"
              },
              {
                "value": "{effectiveDate}",
                "label": "gültiges Datum der Tabelle"
              },
              {
                "value": "{avoidTotal}",
                "label": "traditionell vermiedene Zeichen"
              }
            ]
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Wie es funktioniert",
    "title": "Wie wir Ihren Namen in Hangul schreiben",
    "summary": "Wie wir die Klänge wählen, wenn wir einen ausländischen Namen in Hangul schreiben, und warum wir keine hanja anhängen.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "Wir tragen den Klang, nicht die Bedeutung",
        "blocks": [
          {
            "p": "Dieser Dienst schreibt **Ihren Namen** in Hangul. Er gibt Ihnen keinen koreanischen Namen. Michael wird zu 마이클 — derselbe Name, so geschrieben, dass Koreaner ihn lesen und aussprechen können. Wir tauschen ihn nicht gegen einen koreanischen Namen aus, der zufällig etwas Ähnliches bedeutet."
          },
          {
            "p": "Wenn ein koreanischer Name das ist, was Sie wollen, **ist das ein anderer Service**. Der eine behält Ihren Namen und ändert nur die Schrift; der andere schlägt einen neuen Namen vor."
          }
        ]
      },
      {
        "title": "Klingt Koreanisch hat nicht",
        "blocks": [
          {
            "p": "Jede Sprache hat Laute, die im Koreanischen fehlen — f, v, z, th und Vokalunterscheidungen, die das Koreanische nicht macht. Für diese schreiben wir, was **ein koreanischer Sprecher tatsächlich sagt**, wenn er Ihren Namen laut liest, anstatt die ursprüngliche Phonetik Zeichen für Zeichen zu transkribieren. Das Ziel ist die Schreibweise, die verwendet wird, nicht die technisch treueste."
          },
          {
            "p": "Die gleiche Schreibweise kann je nach Herkunft eines Namens variieren, daher fragen wir nach Ihrer Sprache und Ihrem Land und arbeiten von dieser Aussprache aus."
          }
        ]
      },
      {
        "title": "Mehrere Schreibweisen, nebeneinander",
        "blocks": [
          {
            "p": "Es gibt keine einzige richtige Antwort. Die Schreibweise, die dem ursprünglichen Klang am nächsten kommt, die am häufigsten in Korea verwendete und die am leichtesten zu schreiben ist, sind oft drei verschiedene Dinge. Daher zeigen wir sie zusammen und sagen, was sie trennt."
          },
          {
            "p": "Wenn keine von ihnen richtig erscheint, können Sie einen Hinweis auf den Klang geben, den Sie möchten, und es erneut versuchen — zum Beispiel, dass eine bestimmte Silbe anders geschrieben werden sollte."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Keine hanja hier",
        "blocks": [
          {
            "p": "Wir fügen einer Transliteration keine hanja hinzu. Hanja tragen Bedeutung, und dieser Prozess dreht sich um den Klang. Zeichen nur dem Klang zuzuordnen, kann Ihnen eine Bedeutung einbringen, die Sie nie angefragt haben."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Wie es funktioniert",
    "title": "Wie wir einen koreanischen Namen erstellen",
    "summary": "Wir wählen aus bestehenden Nachnamen aus, wägen ab, wie leicht der Name gesagt und geschrieben wird, und fragen, wofür der Name gedacht ist.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "Wir beginnen mit dem Familiennamen",
        "blocks": [
          {
            "p": "In Korea kommt der Familienname zuerst, und im Gegensatz zu Vornamen wird er nicht frei erfunden — man erbt ihn. Daher schlagen wir nur Nachnamen vor, die koreanische Menschen tatsächlich haben. Unser Standardpool sind die **20 häufigsten Nachnamen**, die zusammen etwa 80% der Bevölkerung abdecken."
          },
          {
            "p": "Wenn Ihr eigener Nachname zufällig mit einem echten koreanischen Namen übereinstimmt — Wang mit 왕, Ye mit 예 — setzen wir diesen zuerst. Eine Verbindung zu Ihrem ursprünglichen Namen aufrechtzuerhalten, ist mehr wert als ein zufällig gewählter Nachname."
          },
          {
            "p": "Sie können selbst einen Nachnamen auswählen oder uns einen empfehlen lassen. So oder so wird es **ein existierender Nachname** sein."
          }
        ]
      },
      {
        "title": "Leicht auszusprechen, leicht zu schreiben",
        "blocks": [
          {
            "p": "Dies ist ein Name, den die Menschen in Korea tatsächlich verwenden werden, also überprüfen wir zuerst, ob ein Koreaner ihn einmal hören und aufschreiben kann. Ein Name, der jedes Mal buchstabiert werden muss, ist eine Last, die Sie tragen, nicht wir."
          },
          {
            "p": "Bedeutung ist ebenfalls wichtig. Koreanische Vornamen tragen normalerweise eine, daher sagen wir Ihnen, wie der Name gelesen wird und warum wir ihn ausgewählt haben — nicht nur den Namen selbst."
          }
        ]
      },
      {
        "title": "Wir fragen, wofür der Name gedacht ist",
        "blocks": [
          {
            "p": "Ein Name für Universitätsunterlagen ist nicht dasselbe wie ein Name, den Freunde über den Raum rufen, oder ein Handle, den Sie online verwenden werden. Wir fragen, wie Sie ihn verwenden möchten, und berücksichtigen das."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Dies ist keine Transliteration",
        "blocks": [
          {
            "p": "Hier schlagen wir einen **neuen koreanischen Namen** vor. Wenn Sie möchten, dass Ihr bestehender Name in Hangul geschrieben wird — Michael als 마이클 — sehen Sie sich den [Hangul-Schreibleitfaden](/guide/how-hangul-transliteration) an."
          }
        ]
      }
    ]
  },
  "notice": {
    "eyebrow": "Hinweise",
    "title": "Hinweise",
    "summary": "Hier kündigen wir Änderungen an, die sich auf die Nutzung des Dienstes auswirken.",
    "backLabel": "Startseite",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Kontaktieren Sie uns",
    "summary": "Wie Sie uns für Fragen, Rückerstattungen, Datenschutzanfragen und Fehlerberichte erreichen können, mit unseren Unternehmensdetails.",
    "backLabel": "Startseite",
    "sections": [
      {
        "title": "Schreiben Sie uns eine E-Mail",
        "blocks": [
          {
            "p": "Schreiben Sie an **{email}**. Wir antworten innerhalb von zwei Werktagen. Für alles, was eine Bestellung betrifft — Zahlung, Rückerstattung, eine Datei, die Sie nicht erhalten haben — geben Sie bitte Ihre **Bestellnummer oder die E-Mail, mit der Sie bezahlt haben** an."
          },
          {
            "p": "Telefonanfragen: {customerCenter} (koreanische Geschäftszeiten)."
          }
        ]
      },
      {
        "title": "Was Sie hier senden sollten",
        "blocks": [
          {
            "ul": [
              "**Zahlungen und Rückerstattungen** — wenn ein Dokument nie erstellt wurde oder der Betrag, der berechnet wurde, von Ihrer Bestellung abweicht, erstatten wir den vollen Betrag. Siehe die [Rückerstattungspolitik](/refund-policy).",
              "**Datenschutz** — Anfragen zum Zugriff, zur Korrektur oder zur Löschung Ihrer Daten. Siehe die [Datenschutzrichtlinie](/privacy).",
              "**Korrekturen** — wenn eine hanja-Bedeutung, -Lesung oder -Berechnung falsch aussieht, lassen Sie es uns wissen. Zu erwähnen, welcher Bildschirm und was Sie eingegeben haben, hilft sehr.",
              "**Alles andere** — Partnerschaften und Presse gehen an die gleiche Adresse."
            ]
          }
        ]
      },
      {
        "title": "Unternehmensdetails",
        "blocks": [
          {
            "ul": [
              "**Rechtsträger** — {companyName}",
              "**Vertreter** — {representative}",
              "**Geschäftsregistrierungsnummer** — {businessNumber}",
              "**Versandhandelsnummer** — {mailOrderNumber}",
              "**Adresse** — {address}",
              "**Kundenservice** — {customerCenter}",
              "**E-Mail** — {email}",
              "**Datenschutzbeauftragter** — {privacyOfficer}",
              "**Hosting-Anbieter** — {hostingProvider}"
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Sie müssen keinen Namen oder Geburtsdatum in Ihre Nachricht aufnehmen. Kostenlose Ergebnisse werden niemals auf unseren Servern gespeichert, daher können wir sie nicht erneut abrufen — eine Bestellnummer reicht aus."
          }
        ]
      }
    ]
  },
  "guide/what-we-dont-use": {
    "eyebrow": "Unsere Standards",
    "title": "Was wir nicht verwenden",
    "summary": "Wir weisen keine Gesamtfortune oder numerische Werte zu, noch verwenden wir Strichzählungen. Die fünf Elemente werden nur als ergänzende Achse verwendet. Hier sind die Gründe.",
    "backLabel": "Gebrauchsanleitung",
    "sections": [
      {
        "title": "Gründe für die Nichtzuweisung von Gesamtfortune oder numerischen Werten",
        "blocks": [
          {
            "p": "Es gibt Methoden, die Gesamtfortune oder numerische Werte für Namen zuweisen, um sie zu bewerten. Naming-Link stellt diese Zahlen nicht zur Verfügung. Die Gründe sind vierfach."
          },
          {
            "p": "**Erstens gibt es nicht nur einen Standard.** Die Methoden zur Berechnung von Fortune variieren je nach Schule, und derselbe Name kann nach einem Standard positiv und nach einem anderen negativ bewertet werden. Wir haben keine Grundlage, um zu entscheiden, welcher korrekt ist. Es ist unehrlich, einen als die Antwort zu präsentieren."
          },
          {
            "p": "**Zweitens basieren diese Berechnungen auf Strichzählungen.** Die Daten des Obersten Gerichtshofs enthalten jedoch überhaupt keine Strichzählungen. Darüber hinaus können Strichzählungen variieren, je nachdem, ob sie als reguläre oder vereinfachte Zeichen gezählt werden und wie Radikale gezählt werden. Da die grundlegenden Zahlen nicht eindeutig festgelegt sind, können die darauf basierenden Werte nicht definitiv sein."
          },
          {
            "p": "**Drittens erscheinen Zahlen solider als die Realität.** Wenn es heißt \"87 Punkte\", klingt es wie ein gemessener Wert und nicht wie eine konventionelle Interpretation. Diese Benennungen könnten sich durch diese Zahl unter Druck gesetzt fühlen und das, was wirklich wichtig ist, beiseite schieben (Ist es angenehm zu rufen? Passt die Bedeutung? Enthält es die gewünschten Wünsche?)."
          },
          {
            "p": "**Viertens gibt es keine Möglichkeit, dies zu überprüfen.** Die Beziehung zwischen einem Namen und dem Leben einer Person kann nicht überprüft werden. Etwas, das nicht als richtig oder falsch bezeichnet werden kann, in einen Wert umzuwandeln, ergibt eine Zahl, die nicht bestätigt werden kann, obwohl sie nicht falsch sein kann."
          },
          {
            "p": "Wir verwenden nur das, was **nachweisbar ist.** Die offizielle Tabelle für Namens-hanja des Obersten Gerichtshofs, die festgelegten Lesungen für jedes Zeichen und die in der Tabelle aufgeführten Bedeutungen. Stattdessen geben wir Gründe an, warum dieser Kandidat ausgewählt wurde und warum bestimmte Zeichen ausgeschlossen wurden, und zeigen **Gründe statt Werte**."
          }
        ]
      },
      {
        "title": "Wir verwenden keine Strichzählungen",
        "blocks": [
          {
            "p": "Die offiziellen Namens-hanja-Daten, die vom Obersten Gerichtshof bereitgestellt werden, enthalten keine Strichzählungen. Unter den {characterTotal} Zeichen, die wir erhalten haben, **hat kein einziges Zeichen Strichzählungen.**"
          },
          {
            "p": "Um Strichzählungen zu verwenden, müssten wir Zahlen von irgendwo anders beziehen, aber wenn wir nicht klären können, woher diese Zahlen stammen und welche Kriterien zur Zählung verwendet wurden, würde das bedeuten, Namen auf der Grundlage unbegründeter Zahlen zu bewerten. Wir haben beschlossen, Namen nicht auf der Grundlage von Werten zu bewerten, die nicht nachweisbar sind."
          }
        ]
      },
      {
        "title": "Wir verwenden die fünf Elemente nur als Referenz",
        "blocks": [
          {
            "figure": "five-elements",
            "labels": {
              "alt": "Die fünf Elemente in einem Kreis angeordnet: Generation verläuft zwischen Nachbarn, Kontrolle überspringt eins",
              "wood": "Holz",
              "fire": "Feuer",
              "earth": "Erde",
              "metal": "Metall",
              "water": "Wasser",
              "saeng": "Generation — jede erzeugt ihren Nachbarn",
              "geuk": "Kontrolle — jede beschränkt die, die sie überspringt"
            },
            "caption": "Die Beziehungen zwischen den fünf Elementen. Die Bewegung entlang des Kreises stellt gegenseitige Generation (相生) dar, während das Überspringen eines Elements und das Drücken nach unten gegenseitige Einschränkung (相剋) darstellt. Wir verwenden diese Beziehung nur als ergänzende Achse zum Vergleich von Kandidaten."
          },
          {
            "p": "Wenn Sie Ihren Geburtsmonat eingegeben haben, verwenden wir eine vereinfachte Referenz der fünf Elemente basierend auf diesem Monat als ergänzende Achse zum Vergleich von Kandidaten. Dies ist jedoch keine präzise saju-Analyse, und **wir behaupten nicht, dass Namen das Schicksal oder den Charakter einer Person bestimmen.**"
          },
          {
            "p": "Bei der endgültigen Auswahl priorisieren wir Klänge, Kombinationen von Bedeutungen, die Werte, die die Familie vermitteln möchte, und ob es tatsächlich registriert werden kann. Wenn Sie Ihren Geburtsmonat nicht eingegeben haben, schließen wir die Referenz der fünf Elemente vollständig aus der Analyse aus — wir treffen keine willkürlichen Annahmen über unbekannte Informationen."
          },
          {
            "p": "Wenn Sie eine präzise saju-basierte Analyse wünschen, behandeln wir das in einem separaten detaillierten Bericht. Der Grund, warum wir die fünf Elemente in der kostenlosen hanja-Zuordnung nicht priorisieren, ist, dass wir keine Urteile basierend auf den fünf Elementen, die aus einem unvollständigen Geburtsdatum und -zeit abgeleitet sind, als ob sie endgültig wären, präsentieren möchten."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Bezahlte Produkte",
    "title": "Was ist in den kostenpflichtigen Produkten enthalten?",
    "summary": "Wir klären, was kostenlos sichtbar ist und welche zusätzlichen Funktionen mit der Zahlung für jedes Produkt kommen. Die Preise werden aus den tatsächlichen Produkteinstellungen abgerufen.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Was ist kostenlos sichtbar?",
        "blocks": [
          {
            "p": "Einen Namen zu erstellen und die Ergebnisse zu sehen, ist **kostenlos**. Eine Mitgliedschaft ist nicht erforderlich. Sie können die passenden Bedeutungen von hanja, die Erstellung koreanischer Namen, die globale Namensumwandlung und die Hangul-Aussprache notierung sehen, zusammen mit empfohlenen Ergebnissen und deren Begründungen auf dem Bildschirm."
          },
          {
            "p": "Bezahlte Produkte **verkaufen nicht, was bereits auf dem Bildschirm angezeigt wurde.** Sie öffnen mehr Kandidaten, fügen mehr Erklärungen hinzu oder erstellen ein Format, das gespeichert oder übertragen werden kann."
          }
        ]
      },
      {
        "title": "Vollständige Offenlegung aller Kandidaten — {priceUnlock}",
        "blocks": [
          {
            "p": "Empfohlene Ergebnisse sind so strukturiert, dass Kandidaten nacheinander geöffnet werden. Beim Anzeigen von Anzeigen öffnet sich jeweils einer, während dieses Produkt **alle verbleibenden Kandidaten auf einmal öffnet.**"
          },
          {
            "p": "Wenn Sie es nicht eilig haben, müssen Sie nicht kaufen. Die **Ergebnisse aus dem Öffnen über Anzeigen und die aus der Zahlung sind völlig identisch** — es ist nur eine Frage des Wartens, und das Bezahlen führt nicht zu besseren Kandidaten."
          }
        ]
      },
      {
        "title": "Hanja-Details — Drei Stufen",
        "blocks": [
          {
            "p": "Es gibt drei detaillierte Produkte im Ablauf der Auswahl von hanja, die an einen Hangul-Namen angehängt werden sollen."
          },
          {
            "ul": [
              "**Maximal 5 hanja-Kandidaten detailliert** — {priceFiveDetail}. Sie können Erklärungen für bis zu fünf Kandidaten auf dem Bildschirm erweitern. Es gibt kein PDF.",
              "**Maximal 10 hanja-Kandidaten erweiterte detaillierte PDF** — {priceTenDetail}. Die Anzahl der Kandidaten erhöht sich auf zehn, und ein PDF-Dokument ist enthalten.",
              "**Maximal 10 hanja-Kandidaten saju und die fünf Elemente umfassender Bericht** — {priceTenSaju}. Neben dem oben genannten enthält es das saju-Diagramm, das aus dem Geburtsdatum abgeleitet ist, und die Kräfte der fünf Elemente, die untersuchen, warum ein bestimmtes hanja zu diesem Namen aus der Perspektive der fünf Elemente passt."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja selbst ist öffentlich verfügbare Information",
        "blocks": [
          {
            "p": "Die verwendbaren hanja und deren Bedeutungen stammen aus der offiziellen Namens-hanja-Tabelle, die vom Obersten Gerichtshof von Korea festgelegt wurde, und alle sind in den Anleitungstexten des Dienstes öffentlich verfügbar. Was die kostenpflichtigen Produkte verkaufen, ist nicht die hanja-Information, sondern **der Akt der Auswahl und Erklärung gemäß dem Namen.**"
          }
        ]
      },
      {
        "title": "PDFs für globale Nutzer",
        "blocks": [
          {
            "p": "Dokumente, die für die Umwandlung ausländischer Namen in koreanische Namen oder das Schreiben von Namen in Hangul verfügbar sind. Die Preise folgen den Beträgen, die auf dem Zahlungsbildschirm angezeigt werden."
          },
          {
            "ul": [
              "**Korean Name Premium Report** — 3 Seiten. Enthält ein Kalligrafie-Cover, die Bedeutung des Namens und den Grund für die Wahl sowie saju und die fünf Elemente-Interpretation.",
              "**Hangul Name Art** — 2 Seiten. Enthält ein Kalligrafie-Cover und eine Ausspracheanleitung. Es enthält, wie man den Namen in Hangul schreibt und wie man ihn ausspricht."
            ]
          }
        ]
      },
      {
        "title": "Namensstempel",
        "blocks": [
          {
            "p": "Wir gravieren den auf dem Bildschirm erstellten Namen in einen physischen Stempel und senden ihn Ihnen zu. Die Preise variieren je nach Modell — runder Stempel {priceStampRound}, quadratischer Stempel {priceStampSquare}, Ebenholzstempel {priceStampEbony}. Internationaler Versand ist ebenfalls verfügbar."
          },
          {
            "p": "**Ab hier beinhalten die Produkte den Versand.** Im Gegensatz zu den vorherigen Artikeln benötigen Produktion und Versand Zeit, und eine Lieferadresse ist erforderlich. Die Versandinformationen werden nur zur Auftragsbearbeitung und rechtlichen Aufbewahrung verwendet, und nach Abschluss der Bearbeitung werden sie nach der im Richtlinien angegebenen Frist vernichtet."
          }
        ]
      },
      {
        "title": "Wichtige Informationen vor dem Kauf",
        "blocks": [
          {
            "p": "**Digitale Produkte werden sofort nach der Zahlung bereitgestellt.** Sie können jederzeit vor Beginn des Downloads stornieren und eine vollständige Rückerstattung erhalten, aber sobald der Download abgeschlossen ist, ist der Rücktritt aufgrund einfacher Meinungsänderung eingeschränkt (Artikel 17, Absatz 2 des Gesetzes über den elektronischen Handel). Diese Bedingung wird auf dem Zahlungsbildschirm separat vereinbart."
          },
          {
            "p": "**Beschwerden über den Inhalt der Ergebnisse sind kein Grund für eine Rückerstattung.** Wenn das Dokument jedoch nicht erstellt wurde, die Datei nicht geöffnet werden kann oder der Zahlungsbetrag von der Bestellung abweicht, wird dies als Neuausstellung oder vollständige Rückerstattung bearbeitet."
          },
          {
            "p": "Detaillierte Bedingungen sind in der [Rückerstattungsrichtlinie](/refund-policy) und im [Preisleitfaden](/pricing) aufgeführt. Dieser Text dient als Leitfaden dafür, was enthalten ist, und die rechtlichen Bedingungen haben Vorrang in diesen beiden Dokumenten."
          }
        ]
      }
    ]
  },
} satisfies Record<GlobalDocKey, DocPage>;

export const DE_NOTICES = {
  "kindLabels": {
    "service": "Dienst",
    "product": "Produkte",
    "policy": "Richtlinie",
    "support": "Unterstützung"
  },
  "intro": "Änderungen Ihrer Nutzungsbedingungen — Preise, Richtlinien — werden hier veröffentlicht, bevor sie in Kraft treten. Interne Verbesserungen sind nicht aufgeführt: Was hier erscheint, ist das, was Sie wissen müssen.",
  "empty": {
    "title": "Noch keine Mitteilungen",
    "body": "Wenn sich etwas ändert, wird es hier erscheinen."
  },
  "effective": "Tritt in Kraft am {date}",
  "pager": {
    "label": "Mitteilungsseiten",
    "newer": "← Neuer",
    "older": "Älter →"
  },
  "items": {
    "2026-08-02-contact": {
      "title": "Kontakt- und Über-Seiten sind jetzt geöffnet",
      "body": [
        "Fragen, Rückerstattungen, Datenschutzanfragen und Fehlerberichte haben jetzt einen Ort. Die Kontaktseite im Footer listet unsere E-Mail und Unternehmensdetails.",
        "Was unsere Antworten basieren, und was wir absichtlich nicht tun, steht auf der Über-Seite."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF-Berichte werden in Englisch für Arabisch und Khmer ausgegeben",
      "body": [
        "Wenn Sie den Dienst in Arabisch oder Khmer nutzen, wird das PDF, das Sie kaufen, in Englisch erstellt. Das Tool, das unsere Dokumente layoutet, kann derzeit noch keine Absätze in diesen beiden Schriften setzen.",
        "Der Bildschirm bleibt in Ihrer Sprache, und Ihr Name wird in Ihrer eigenen Schrift im Dokument gedruckt.",
        "Die gleiche Notiz erscheint vor der Zahlung. Wenn das Tool diese Schriften unterstützt, werden wir dies hier mitteilen."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Zahlungen sind noch nicht geöffnet",
      "body": [
        "Einen Namen zu erstellen und das Ergebnis zu lesen, ist heute kostenlos, und es ist kein Konto erforderlich.",
        "Bezahlte Artikel sind noch nicht im Verkauf. Die auf der Preis-Seite angezeigten Beträge gelten, sobald der Verkauf eröffnet wird."
      ]
    }
  }
} satisfies NoticeCopy;
