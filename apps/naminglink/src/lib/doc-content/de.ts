import type { DocPage, NoticeCopy } from "./types";
import type { GlobalDocKey } from "./keys";

/** Deutsch — `scripts/translate-doc-content.ts`가 만든다. 손으로 고치지 말 것. */
export const DE_DOCS = {
  "about": {
    "eyebrow": "Über",
    "title": "Über Naming-Link",
    "summary": "Wir helfen Ihnen, koreanische Namen auszuwählen und zu verstehen. Hier sind die Grundlagen unserer Ergebnisse und was wir absichtlich nicht tun.",
    "backLabel": "Startseite",
    "sections": [
      {
        "title": "Was wir tun",
        "blocks": [
          {
            "p": "Naming-Link hilft Ihnen, **koreanische Namen auszuwählen und zu verstehen** — die hanja hinter einem Kindsnamen, einen koreanischen Namen für den Einsatz im Ausland, eine Hangul-Schreibung Ihres eigenen Namens und Erinnerungsstücke wie einen Stempel oder einen gedruckten Bericht."
          },
          {
            "p": "Die Ergebnisse zu sehen ist **kostenlos und benötigt kein Konto.** Bezahlte Artikel verkaufen niemals, was der Bildschirm bereits angezeigt hat: sie öffnen weitere Kandidaten, fügen schriftliche Analysen hinzu oder verwandeln das Ergebnis in etwas, das Sie behalten können."
          }
        ]
      },
      {
        "title": "Für wen jeder Service gedacht ist",
        "blocks": [
          {
            "p": "Es gibt hier zwei Arten von Dienstleistungen: eine für Personen, die **bereits einen koreanischen Namen haben**, und eine für Personen, die **einen benötigen**. Sie erfordern unterschiedliche Dinge von Ihnen, daher werden sie in verschiedenen Sprachen angeboten."
          },
          {
            "ul": [
              "**In Ihrer Sprache angeboten** — Ihren eigenen Namen in Hangul schreiben und einen koreanischen Namen erstellen. Diese sind für Personen ohne koreanischen Namen gedacht, daher folgen sie der Sprache, in der Sie ankommen.",
              "**Nur auf Koreanisch angeboten** — das Finden von Name-hanja für ein Kind und das Umwandeln eines koreanischen Namens in einen für den Einsatz im Ausland. Beide benötigen einen **bestehenden Hangul-Namen**, von dem aus gearbeitet werden kann, daher bleiben die Bildschirme und ihre Anleitungen auf Koreanisch."
            ]
          }
        ]
      },
      {
        "title": "Worauf unsere Antworten basieren",
        "blocks": [
          {
            "p": "Hanja stammen aus der **offiziellen Name-hanja-Tabelle des Obersten Gerichtshofs von Korea.** Jedes Zeichen hat eine festgelegte Lesung für die Verwendung in Namen, und Zeichen außerhalb der Tabelle können nicht registriert werden. Wir fügen dieser Liste nichts hinzu oder wählen keine Favoriten."
          },
          {
            "p": "Saju und Figuren der fünf Elemente werden aus dem **koreanischen lunisolaren Almanach** berechnet, wobei die Geburtszeit auf die wahre Sonnenzeit für den Geburtsort korrigiert wird. Die Lesung ist ein traditioneller Referenzwert, keine Vorhersage."
          },
          {
            "p": "Die schriftlichen Erklärungen werden von KI erstellt. Um zu verhindern, dass sie **Dinge erfindet**, erhält das Modell nur Ihre Eingaben und unsere eigenen Referenzdaten und wird angewiesen, sich daran zu halten. Die Anleitungen erklären dies im Detail."
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
              "**Bezahlen kauft keine bessere Antwort.** Das Freischalten mit einer Anzeige und das Freischalten mit einer Zahlung bieten genau denselben Inhalt."
            ]
          }
        ]
      },
      {
        "title": "Wo unsere Daten und Übersetzungen stehen",
        "blocks": [
          {
            "p": "**Wir sagen dies lieber klar.** Ihnen zu sagen, was eine Person überprüft hat und was niemand überprüft hat, ist nützlicher, als zu behaupten, alles sei überprüft worden."
          },
          {
            "ul": [
              "**Name-hanja-Daten** — die {publisher} Name-hanja-Tabelle, gültig ab {effectiveDate}. Wir behalten einen Hash der Quelldatei, sodass wir erkennen können, was sich geändert hat, wenn die Tabelle aktualisiert wird.",
              "**Zusammengestellt von** Platforest. Zeichen, Lesungen und Bedeutungen werden unverändert aus der Tabelle übernommen; wir fügen nichts hinzu und entfernen nichts.",
              "**Übersetzung** — zuerst in Koreanisch, dann Englisch, dann in die anderen Sprachen. **Dies sind maschinelle Übersetzungen, die automatisch überprüft werden** — auf fehlende Sätze, konsistente Terminologie und darauf, dass die eingefügten Werte intakt bleiben. Sie wurden nicht von Muttersprachlern überprüft.",
              "**Schriftliche Erklärungen** werden von KI erstellt, die auf Ihre Eingaben und unsere eigenen Referenzdaten beschränkt ist, damit sie keine Fakten erfindet."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Der Service ist in 23 Sprachen verfügbar. Bezahlte PDFs werden in Englisch für Arabisch und Khmer ausgegeben — der PDF-Renderer unterstützt diese Schriften nicht — und wir weisen darauf hin, bevor Sie bezahlen."
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
    "title": "Worauf wir Ihren Namen basieren",
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
      },
      {
        "kind": "note",
        "blocks": [
          {
            "p": "Die folgenden Anleitungen decken die in Ihrer Sprache angebotenen Dienstleistungen ab. Naming-Link bietet auch zwei Dienstleistungen für Personen, die **bereits einen koreanischen Namen haben** — das Finden von Name-hanja für ein Kind und das Umwandeln eines koreanischen Namens in einen für den Einsatz im Ausland. Diese benötigen einen bestehenden Hangul-Namen, daher sind sowohl die Dienstleistungen als auch ihre Anleitungen auf Koreanisch."
          },
          {
            "p": "[Über](/about) erklärt, welcher Service für wen geeignet ist."
          }
        ]
      }
    ]
  },
  "guide/how-hangul-transliteration": {
    "eyebrow": "Wie es funktioniert",
    "title": "Wie wir Ihren Namen in Hangul schreiben",
    "summary": "Wie wir die Klänge auswählen, wenn wir einen ausländischen Namen in Hangul schreiben, und warum wir keine hanja anhängen.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "Wir tragen den Klang, nicht die Bedeutung",
        "blocks": [
          {
            "p": "Dieser Service schreibt **Ihren Namen** in Hangul. Er gibt Ihnen keinen koreanischen Namen. Michael wird zu 마이클 — derselbe Name, so geschrieben, dass Koreaner ihn lesen und aussprechen können. Wir tauschen ihn nicht gegen einen koreanischen Namen aus, der zufällig eine ähnliche Bedeutung hat."
          },
          {
            "p": "Wenn ein koreanischer Name das ist, was Sie wollen, **ist das ein anderer Service**. Der eine behält Ihren Namen und ändert nur die Schrift; der andere schlägt einen neuen Namen vor."
          }
        ]
      },
      {
        "title": "Korean hat keine",
        "blocks": [
          {
            "p": "Jede Sprache hat Laute, die im Koreanischen fehlen — f, v, z, th und Vokalunterscheidungen, die im Koreanischen nicht gemacht werden. Für diese schreiben wir, was **ein koreanischer Sprecher tatsächlich sagt**, wenn er Ihren Namen laut vorliest, anstatt die ursprüngliche Phonetik Zeichen für Zeichen zu transkribieren. Das Ziel ist die Schreibweise, die verwendet wird, nicht die technisch treueste."
          },
          {
            "p": "Die gleiche Schreibweise kann je nach Herkunft eines Namens unterschiedlich sein, daher fragen wir nach Ihrer Sprache und Ihrem Land und arbeiten von dieser Aussprache aus."
          }
        ]
      },
      {
        "title": "Mehrere Schreibweisen, nebeneinander",
        "blocks": [
          {
            "p": "Es gibt keine einzige richtige Antwort. Die Schreibweise, die dem ursprünglichen Klang am nächsten kommt, die am häufigsten in Korea verwendete und die am einfachsten zu schreiben ist, sind oft drei verschiedene Dinge. Daher zeigen wir sie zusammen und erklären, was sie voneinander trennt."
          },
          {
            "p": "Wenn keine von ihnen richtig erscheint, können Sie einen Hinweis auf den Klang geben, den Sie möchten, und es erneut versuchen — zum Beispiel, dass eine bestimmte Silbe anders geschrieben werden sollte."
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hier gibt es keine hanja",
        "blocks": [
          {
            "p": "Wir fügen einer Transliteration keine hanja hinzu. Hanja tragen Bedeutung, und dieser Prozess dreht sich um den Klang. Zeichen nur dem Klang zuzuordnen, kann dazu führen, dass Sie eine Bedeutung erhalten, um die Sie nie gebeten haben."
          }
        ]
      },
      {
        "title": "Dies läuft entgegengesetzt zur Pass-Romanisierung",
        "blocks": [
          {
            "p": "Diese beiden sind leicht zu verwechseln, daher hier der Unterschied: **sie laufen in entgegengesetzte Richtungen.**"
          },
          {
            "ul": [
              "**Romanisierung** nimmt den Hangul-Namen einer koreanischen Person und schreibt ihn in das lateinische Alphabet. Sie wird festgelegt, wenn ein Reisepass ausgestellt wird, und von da an folgen Tickets, Visa und Bankkonten dieser Schreibweise. 김민준 wird zu Kim Minjun.",
              "**Hangul-Transliteration** — was dieser Dienst tut — läuft in die andere Richtung. Es nimmt einen Namen, der im lateinischen Alphabet geschrieben ist, und schreibt, wie er in Hangul klingt. Daniel wird zu 대니얼."
            ]
          },
          {
            "p": "Was Sie hier erhalten, **ändert nicht die Schreibweise in Ihrem Reisepass.** Diese Romanisierung ist bereits festgelegt; dies ist der Name, der wieder in Hangul geschrieben wird. Die beiden konvertieren nicht immer genau zurück ineinander — das Schreiben eines Lautes, den das Koreanische nicht hat, verliert auf dem Weg ein wenig Information."
          }
        ]
      },
      {
        "title": "Wo Sie diese Schreibweise verwenden würden",
        "blocks": [
          {
            "p": "Eine Hangul-Schreibweise wird normalerweise an Orten wie diesen benötigt."
          },
          {
            "ul": [
              "**Sich vorstellen** — Ihren Namen in Hangul zeigen oder ihn auf Koreanisch sagen",
              "**Ein Hangul-Namensfeld auf einem Formular** — Registrierungen und Anträge, die nach Ihrem Namen in Hangul fragen. Beachten Sie, dass **die Institution entscheidet, was auf einem offiziellen Dokument steht** — was Sie hier erhalten, ersetzt das nicht.",
              "**Ein Namensstempel oder Andenken** — die Schreibweise zum Gravieren"
            ]
          },
          {
            "p": "**Es ist normal, dass mehr als eine Schreibweise vertretbar ist.** Wenn ein Name auf mehrere Arten in Hangul geschrieben werden kann, zeigen wir sie nebeneinander und überlassen Ihnen die Wahl."
          }
        ]
      }
    ]
  },
  "guide/how-global-to-korean": {
    "eyebrow": "Wie es funktioniert",
    "title": "Wie wir einen koreanischen Namen erstellen",
    "summary": "Wir wählen aus existierenden Nachnamen aus, wägen ab, wie leicht der Name gesagt und geschrieben wird, und fragen, wofür der Name gedacht ist.",
    "backLabel": "Leitfaden",
    "sections": [
      {
        "title": "Wir beginnen mit dem Familiennamen",
        "blocks": [
          {
            "p": "In Korea kommt der Familienname zuerst, und im Gegensatz zu Vornamen wird er nicht frei erfunden — man erbt ihn. Daher schlagen wir nur Nachnamen vor, die koreanische Menschen tatsächlich haben. Unser Standardpool sind die **20 häufigsten Nachnamen**, die zusammen etwa 80% der Bevölkerung abdecken."
          },
          {
            "p": "Wenn Ihr eigener Nachname zufällig mit einem echten koreanischen Namen klanglich übereinstimmt — Wang mit 왕, Ye mit 예 — setzen wir diesen zuerst. Eine Verbindung zu Ihrem ursprünglichen Namen aufrechtzuerhalten, ist mehr wert als ein zufällig gewählter Nachname."
          },
          {
            "p": "Sie können einen Nachnamen selbst wählen oder uns einen empfehlen lassen. So oder so wird es **ein Nachname sein, der existiert**."
          }
        ]
      },
      {
        "title": "Es gibt sechsundzwanzig Nachnamen zur Auswahl",
        "blocks": [
          {
            "p": "Wir haben die Liste absichtlich eng gehalten. **Koreanische Nachnamen sind wirklich konzentriert** — Kim, Lee und Park allein machen etwa 45% der Bevölkerung aus, und die zwanzig häufigsten etwa 80%. Seltene Nachnamen hinzuzufügen würde das Menü erweitern, aber es würde auch Namen produzieren, die Koreaner nicht als Namen hören."
          },
          {
            "ul": [
              "**Die zwanzig häufigsten** (etwa 80% der Bevölkerung) — 김 Kim · 이 Lee · 박 Park · 최 Choi · 정 Jung · 강 Kang · 조 Cho · 윤 Yoon · 장 Jang · 임 Lim · 한 Han · 오 Oh · 서 Seo · 신 Shin · 권 Kwon · 황 Hwang · 안 Ahn · 송 Song · 전 Jeon · 홍 Hong",
              "**Echte Nachnamen, die hinzugefügt wurden, um einen Klangfaden zu bewahren** — 왕 Wang · 진 Jin · 백 Baek · 마 Ma · 나 Na · 유 Yoo"
            ]
          },
          {
            "p": "Die zweite Gruppe existiert, damit **Ihr eigener Nachname klanglich übertragen werden kann**. Wang, Jin, Baek, Ma, Na und Yoo sind Nachnamen, die Koreaner bereits haben, sodass das Aussprechen Ihres Namens eine Verbindung zu dem, mit dem Sie begonnen haben, aufrechterhält. Alle sechsundzwanzig sind Nachnamen, die tatsächlich verwendet werden — keiner von ihnen ist unsere Erfindung."
          }
        ]
      },
      {
        "title": "Einfach auszusprechen, einfach zu schreiben",
        "blocks": [
          {
            "p": "Dies ist ein Name, den die Menschen in Korea tatsächlich verwenden werden, also überprüfen wir zuerst, ob ein Koreaner ihn einmal hören und aufschreiben kann. Ein Name, der jedes Mal buchstabiert werden muss, ist eine Last, die Sie tragen, nicht wir."
          },
          {
            "p": "Bedeutung ist ebenfalls wichtig. Koreanische Vornamen tragen normalerweise eine, daher sagen wir Ihnen, wie der Name gelesen wird und warum wir ihn gewählt haben — nicht nur den Namen selbst."
          }
        ]
      },
      {
        "title": "Wir fragen, wofür der Name gedacht ist",
        "blocks": [
          {
            "p": "Ein Name für Universitätsunterlagen ist nicht dasselbe wie ein Name, den Freunde über einen Raum rufen, oder ein Handle, den Sie online verwenden werden. Wir fragen, wie Sie planen, ihn zu verwenden, und berücksichtigen das."
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
    "summary": "Hier kündigen wir Änderungen an, die sich darauf auswirken, wie Sie den Dienst nutzen.",
    "backLabel": "Startseite",
    "sections": []
  },
  "contact": {
    "eyebrow": "Kontakt",
    "title": "Kontaktieren Sie uns",
    "summary": "Wie Sie uns bei Fragen, Rückerstattungen, Datenschutzanfragen und Fehlerberichten erreichen können, mit unseren Unternehmensdetails.",
    "backLabel": "Startseite",
    "sections": [
      {
        "title": "E-Mail uns",
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
        "title": "Was hier gesendet werden soll",
        "blocks": [
          {
            "ul": [
              "**Zahlungen und Rückerstattungen** — wenn ein Dokument nie erstellt wurde oder der berechnete Betrag von Ihrer Bestellung abweicht, erstatten wir den vollen Betrag. Siehe die [Rückerstattungsrichtlinie](/refund-policy).",
              "**Datenschutz** — Anfragen zum Zugriff, zur Berichtigung oder Löschung Ihrer Daten. Siehe die [Datenschutzrichtlinie](/privacy).",
              "**Korrekturen** — wenn eine hanja Bedeutung, Lesung oder Berechnung falsch aussieht, lassen Sie es uns wissen. Zu erwähnen, welcher Bildschirm und was Sie eingegeben haben, hilft sehr.",
              "**Sonstiges** — Partnerschaften und Presse gehen an dieselbe Adresse."
            ]
          }
        ]
      },
      {
        "title": "Unternehmensdetails",
        "blocks": [
          {
            "ul": [
              "**Rechtliche Einheit** — {companyName}",
              "**Vertreter** — {representative}",
              "**Geschäftsregistrierungsnummer** — {businessNumber}",
              "**Versandhandelsnummer** — {mailOrderNumber}",
              "**Adresse** — {address}",
              "**Kundendienst** — {customerCenter}",
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
    "summary": "Wir weisen kein Gesamtvermögen oder numerische Werte zu, noch verwenden wir Strichzählungen. Die fünf Elemente werden nur als ergänzende Achse verwendet. Hier sind die Gründe.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Gründe, warum kein Gesamtvermögen oder numerische Werte zugewiesen werden",
        "blocks": [
          {
            "p": "Es gibt Methoden, die Gesamtvermögen oder numerische Werte für Namen zuweisen, um sie zu bewerten. Naming-Link bietet diese Zahlen nicht an. Die Gründe sind vierfach."
          },
          {
            "p": "**Erstens gibt es nicht nur einen Standard.** Die Methoden zur Berechnung des Vermögens variieren je nach Schule, und derselbe Name kann nach einem Standard positiv und nach einem anderen negativ bewertet werden. Wir haben keine Grundlage, um zu entscheiden, welcher korrekt ist. Es ist unehrlich, einen als die Antwort darzustellen."
          },
          {
            "p": "**Zweitens basieren diese Berechnungen auf Strichzählungen.** Die Daten des Obersten Gerichtshofs enthalten jedoch überhaupt keine Strichzählungen. Darüber hinaus können Strichzählungen variieren, je nachdem, ob sie als reguläre oder vereinfachte Zeichen gezählt werden und wie Radikale gezählt werden. Da die grundlegenden Zahlen nicht eindeutig festgelegt sind, können die darauf basierenden Werte nicht endgültig sein."
          },
          {
            "p": "**Drittens erscheinen Zahlen solider als die Realität.** Wenn es heißt \"87 Punkte\", klingt es wie ein gemessener Wert und nicht wie eine konventionelle Interpretation. Diese Benennungen könnten sich durch diese Zahl unter Druck gesetzt fühlen und das, was wirklich wichtig ist, beiseite schieben (Ist es angenehm, es auszusprechen? Passt die Bedeutung? Enthält es die gewünschten Wünsche?)."
          },
          {
            "p": "**Viertens gibt es keine Möglichkeit zur Überprüfung.** Die Beziehung zwischen einem Namen und dem Leben einer Person kann nicht überprüft werden. Etwas, das nicht als richtig oder falsch bezeichnet werden kann, in eine Zahl umzuwandeln, führt zu einer Zahl, die nicht bestätigt werden kann, obwohl sie nicht falsch sein kann."
          },
          {
            "p": "Wir verwenden nur, was **nachweisbar** ist. Die offizielle Hanja-Tabelle des Obersten Gerichtshofs, die festgelegten Lesungen für jedes Zeichen und die in der Tabelle aufgeführten Bedeutungen. Stattdessen geben wir Gründe an, warum dieser Kandidat ausgewählt wurde und warum bestimmte Zeichen ausgeschlossen wurden, und zeigen **Gründe statt Werte**."
          }
        ]
      },
      {
        "title": "Wir verwenden keine Strichzählungen",
        "blocks": [
          {
            "p": "Die offiziellen Hanja-Daten, die vom Obersten Gerichtshof bereitgestellt werden, enthalten keine Strichzählungen. Unter den {characterTotal} Zeichen, die wir erhalten haben, **hat kein einziges Zeichen Strichzählungen.**"
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
              "saeng": "Generation — jedes gibt seinem Nachbarn Leben",
              "geuk": "Kontrolle — jedes beschränkt das, was es überspringt"
            },
            "caption": "Die Beziehungen zwischen den fünf Elementen. Die Bewegung entlang des Kreises stellt gegenseitige Generation (相生) dar, während das Überspringen eines und das Drücken nach unten gegenseitige Einschränkung (相剋) darstellt. Wir verwenden diese Beziehung nur als ergänzende Achse zum Vergleich von Kandidaten."
          },
          {
            "p": "Wenn Sie Ihren Geburtsmonat eingegeben haben, verwenden wir eine vereinfachte Referenz der fünf Elemente basierend auf diesem Monat als ergänzende Achse zum Vergleich von Kandidaten. Dies ist jedoch keine präzise saju-Analyse, und **wir behaupten nicht, dass Namen das Schicksal oder den Charakter einer Person bestimmen.**"
          },
          {
            "p": "Bei der endgültigen Auswahl priorisieren wir Klänge, Kombinationen von Bedeutungen, die Werte, die die Familie vermitteln möchte, und ob es tatsächlich registriert werden kann. Wenn Sie Ihren Geburtsmonat nicht eingegeben haben, schließen wir die Referenz der fünf Elemente vollständig aus der Analyse aus — wir treffen keine willkürlichen Annahmen über unbekannte Informationen."
          },
          {
            "p": "Wenn Sie eine präzise saju-basierte Analyse wünschen, behandeln wir das in einem separaten detaillierten Bericht. Der Grund, warum wir die fünf Elemente in der kostenlosen Hanja-Zuordnung nicht priorisieren, ist, dass wir keine Urteile auf der Grundlage der fünf Elemente präsentieren möchten, die aus einem unvollständigen Geburtsdatum und -zeit abgeleitet sind, als wären sie endgültig."
          }
        ]
      }
    ]
  },
  "guide/what-we-sell": {
    "eyebrow": "Bezahlte Produkte",
    "title": "Was ist in bezahlten Produkten enthalten?",
    "summary": "Wir klären, wie viel kostenlos sichtbar ist und welche zusätzlichen Funktionen mit der Zahlung für jedes Produkt kommen. Die Preise werden aus den tatsächlichen Produkteinstellungen abgerufen.",
    "backLabel": "Nutzungsanleitung",
    "sections": [
      {
        "title": "Was ist kostenlos sichtbar?",
        "blocks": [
          {
            "p": "Einen Namen zu erstellen und die Ergebnisse zu sehen, ist **kostenlos**. Eine Mitgliedschaftsregistrierung ist nicht erforderlich. Sie können die passenden Bedeutungen von Hanja, die Erstellung koreanischer Namen, die globale Namensumwandlung und die Hangul-Aussprache notieren, zusammen mit empfohlenen Ergebnissen und deren Begründungen auf dem Bildschirm sehen."
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
            "p": "Die empfohlenen Ergebnisse sind so strukturiert, dass Kandidaten nacheinander geöffnet werden. Beim Anzeigen von Anzeigen wird jeweils eine geöffnet, während dieses Produkt **alle verbleibenden Kandidaten auf einmal öffnet**."
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
              "**Maximal 5 detaillierte hanja-Kandidaten** — {priceFiveDetail}. Sie können Erklärungen für bis zu fünf Kandidaten auf dem Bildschirm erweitern. Es gibt kein PDF.",
              "**Maximal 10 erweiterte detaillierte hanja-Kandidaten PDF** — {priceTenDetail}. Die Anzahl der Kandidaten erhöht sich auf zehn, und ein PDF-Dokument ist enthalten.",
              "**Maximal 10 hanja-Kandidaten saju und umfassender Bericht zu den fünf Elementen** — {priceTenSaju}. Zusätzlich zu den oben genannten enthält es das saju-Diagramm, das aus dem Geburtsdatum abgeleitet ist, und die Kräfte der fünf Elemente, wobei untersucht wird, warum ein bestimmtes hanja zu diesem Namen aus der Perspektive der fünf Elemente passt."
            ]
          }
        ]
      },
      {
        "kind": "note",
        "title": "Hanja selbst ist öffentlich zugängliche Information",
        "blocks": [
          {
            "p": "Die verwendbaren hanja und deren Bedeutungen stammen aus der offiziellen Inschrift-Hanja-Tabelle, die vom Obersten Gerichtshof von Korea festgelegt wurde, und alle sind in den Leitfäden des Dienstes öffentlich verfügbar. Was die kostenpflichtigen Produkte verkaufen, ist nicht die hanja-Information, sondern **der Akt der Auswahl und Erklärung gemäß dem Namen**."
          }
        ]
      },
      {
        "title": "PDFs für globale Nutzer",
        "blocks": [
          {
            "p": "Dokumente, die zur Umwandlung ausländischer Namen in koreanische Namen oder zur Schreibweise von Namen in Hangul verfügbar sind. Die Preise entsprechen den Beträgen, die auf dem Zahlungsbildschirm angezeigt werden."
          },
          {
            "ul": [
              "**Koreanischer Name Premium Bericht** — 3 Seiten. Enthält ein Kalligrafie-Cover, die Bedeutung des Namens und den Grund für die Wahl sowie die Interpretation von saju und den fünf Elementen.",
              "**Hangul Name Kunst** — 2 Seiten. Enthält ein Kalligrafie-Cover und eine Aussprachehilfe. Es zeigt, wie man den Namen in Hangul schreibt und wie man ihn ausspricht."
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
            "p": "**Von hier an beinhalten die Produkte den Versand.** Im Gegensatz zu den vorherigen Artikeln benötigen Produktion und Versand Zeit, und eine Lieferadresse ist erforderlich. Die Versandinformationen werden nur zur Auftragsbearbeitung und rechtlichen Aufbewahrung verwendet, und nach Abschluss der Bearbeitung werden sie nach der im Richtlinien angegebenen Frist vernichtet."
          }
        ]
      },
      {
        "title": "Wichtige Informationen vor dem Kauf",
        "blocks": [
          {
            "p": "**Digitale Produkte werden sofort nach der Zahlung bereitgestellt.** Sie können jederzeit vor Beginn des Downloads stornieren und eine vollständige Rückerstattung erhalten, aber sobald der Download abgeschlossen ist, ist ein Rücktritt aufgrund einfacher Meinungsänderung eingeschränkt (Artikel 17, Absatz 2 des Gesetzes über den elektronischen Handel). Diese Bedingung wird separat auf dem Zahlungsbildschirm vereinbart."
          },
          {
            "p": "**Beschwerden über den Inhalt der Ergebnisse sind kein Grund für eine Rückerstattung.** Wenn das Dokument jedoch nicht erstellt wurde, die Datei nicht geöffnet werden kann oder der Zahlungsbetrag von der Bestellung abweicht, wird dies als Neuausstellung oder vollständige Rückerstattung bearbeitet."
          },
          {
            "p": "Detaillierte Bedingungen sind in der [Rückerstattungsrichtlinie](/refund-policy) und im [Preishandbuch](/pricing) aufgeführt. Dieser Text dient als Leitfaden für das, was enthalten ist, und die rechtlichen Bedingungen haben Vorrang in diesen beiden Dokumenten."
          }
        ]
      }
    ]
  }
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
        "Worauf sich unsere Antworten stützen und was wir absichtlich nicht tun, steht auf der Über-Seite."
      ]
    },
    "2026-08-01-pdf-language": {
      "title": "PDF-Berichte werden in Englisch für Arabisch und Khmer ausgegeben",
      "body": [
        "Wenn Sie den Dienst in Arabisch oder Khmer nutzen, wird das PDF, das Sie kaufen, in Englisch erstellt. Das Tool, das unsere Dokumente layoutet, kann derzeit noch keine Absätze in diesen beiden Schriften setzen.",
        "Der Bildschirm bleibt in Ihrer Sprache, und Ihr Name wird in Ihrer eigenen Schrift im Dokument gedruckt.",
        "Der gleiche Hinweis erscheint vor der Zahlung. Wenn das Tool diese Schriften unterstützt, werden wir dies hier mitteilen."
      ]
    },
    "2026-08-01-payments-preparing": {
      "title": "Zahlungen sind noch nicht geöffnet",
      "body": [
        "Die Erstellung eines Namens und das Lesen des Ergebnisses sind heute kostenlos, und es ist kein Konto erforderlich.",
        "Kostenpflichtige Artikel sind noch nicht im Verkauf. Die auf der Preisseite angezeigten Beträge sind die, die gelten werden, sobald der Verkauf eröffnet wird."
      ]
    }
  }
} satisfies NoticeCopy;
